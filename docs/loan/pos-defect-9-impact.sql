-- ==============================================================================================
-- POS defects 9 and 10: impact queries (READ-ONLY, SELECT statements only)
-- docs/loan/pos-defects.md #9 and #10. Nothing here changes data; every statement is a SELECT.
--
-- How to run (on one customer database at a time, with a read-only user if you have one):
--   mariadb -h <host> -u <readonly user> -p <database> < pos-defect-9-impact.sql
-- Optional extra safety: run the statements inside a read-only transaction, by typing first
--   START TRANSACTION READ ONLY;
-- and afterwards
--   ROLLBACK;
-- (left as a comment on purpose, so the file itself contains SELECT statements only).
--
-- Written for MariaDB 10.2+ / MySQL 5.7+: no CTEs, no window functions.
-- Amounts: "base" = the local currency (currency.isLocalCCY = 1). POS stores sale-line rates per
-- currency.exchangeDirection: foreign_to_local = base units per 1 unit; local_to_foreign = units per 1 base.
-- ==============================================================================================


-- ----------------------------------------------------------------------------------------------
-- Q1. Defect 9, detail: AR invoices created from a POS order whose sale has at least one line in a
--     currency different from the invoice header's currency.
--   line_currencies       each foreign line: currency, line total and the line's own rate
--   expected_base         the sale lines converted at their own rates (what the invoice is worth in base)
--   header_total_base     the invoice header total (base)
--   batch_amount          what the AR batch posts or would post: sum of invoice line totals x header rate
--   ar_gl_rows            GL rows of the AR batch for this invoice (source AR, reference = invoice number)
--   posted_base_in_gl     base amount of those rows
--   understated_by        expected_base - posted_base_in_gl, only when the AR batch posted the invoice (ar_gl_rows > 0)
--   verdict               DEFECT 9 (posted at line amounts) / AT RISK (not posted yet: the batch would post batch_amount)
--                         / CHECK (status posted but no AR GL rows: posted by another path, or marked posted by hand)
-- ----------------------------------------------------------------------------------------------
SELECT
    ih.id                                                   AS invoice_id,
    ih.invoiceNumber                                        AS invoice_number,
    ih.invoiceDate                                          AS invoice_date,
    ih.status                                               AS invoice_status,
    ih.glPostingStatus                                      AS gl_posting_status,
    ih.saleHeaderId                                         AS sale_header_id,
    hc.code                                                 AS header_currency,
    ih.exchangeRate                                         AS header_rate,
    sl.line_currencies                                      AS line_currencies,
    ROUND(sl.expected_base, 2)                              AS expected_base,
    ROUND(ih.totalAmount, 2)                                AS header_total_base,
    ROUND(il.line_total_sum * IFNULL(ih.exchangeRate, 1), 2) AS batch_amount,
    IFNULL(gl.gl_rows, 0)                                   AS ar_gl_rows,
    ROUND(IFNULL(gl.posted_base, 0), 2)                     AS posted_base_in_gl,
    CASE WHEN IFNULL(gl.gl_rows, 0) > 0
         THEN ROUND(sl.expected_base - gl.posted_base, 2) END AS understated_by,
    CASE WHEN IFNULL(gl.gl_rows, 0) > 0 THEN 'DEFECT 9'
         WHEN ih.glPostingStatus = 'posted' THEN 'CHECK'
         ELSE 'AT RISK' END                                 AS verdict
FROM ARInvoiceHeader ih
JOIN currency hc ON hc.id = ih.currencyId
JOIN (
    -- sale lines of the invoice's sale (POS sets both saleHeaderId and headerId)
    SELECT s.saleHeaderId,
           SUM(s.total * CASE WHEN lc.isLocalCCY = 1 THEN 1
                              WHEN lc.exchangeDirection = 'local_to_foreign' THEN 1 / NULLIF(s.exchangeRate, 0)
                              ELSE s.exchangeRate END)                       AS expected_base,
           GROUP_CONCAT(CASE WHEN lc.isLocalCCY = 0
                             THEN CONCAT(lc.code, ' ', FORMAT(s.total, 2), ' @ ', s.exchangeRate) END
                        ORDER BY s.id SEPARATOR '; ')                         AS line_currencies,
           SUM(CASE WHEN lc.isLocalCCY = 0 THEN 1 ELSE 0 END)                AS foreign_lines
    FROM (
        SELECT DISTINCT x.id, COALESCE(x.saleHeaderId, x.headerId) AS saleHeaderId, x.total, x.exchangeRate, x.currencyId
        FROM saleLine x
        WHERE x.isActive = 1
    ) s
    JOIN currency lc ON lc.id = s.currencyId
    GROUP BY s.saleHeaderId
) sl ON sl.saleHeaderId = ih.saleHeaderId
LEFT JOIN (
    SELECT invoiceHeaderId, SUM(lineTotal) AS line_total_sum
    FROM ARInvoiceLine
    GROUP BY invoiceHeaderId
) il ON il.invoiceHeaderId = ih.id
LEFT JOIN (
    SELECT postingReference, COUNT(*) AS gl_rows, SUM(localDebit) AS posted_base
    FROM general_ledger
    WHERE source = 'AR'
    GROUP BY postingReference
) gl ON gl.postingReference = ih.invoiceNumber
WHERE ih.sourceType = 'POS_ORDER'
  AND sl.foreign_lines > 0
ORDER BY ih.invoiceDate, ih.id;


-- ----------------------------------------------------------------------------------------------
-- Q2. Defect 9, summary: how many such invoices, and the base amount at stake, by verdict (see Q1).
-- ----------------------------------------------------------------------------------------------
SELECT
    CASE WHEN IFNULL(gl.gl_rows, 0) > 0 THEN 'DEFECT 9'
         WHEN ih.glPostingStatus = 'posted' THEN 'CHECK'
         ELSE 'AT RISK' END                                  AS verdict,
    COUNT(*)                                                 AS invoices,
    ROUND(SUM(sl.expected_base), 2)                          AS expected_base_total,
    ROUND(SUM(IFNULL(gl.posted_base, 0)), 2)                 AS posted_base_total,
    ROUND(SUM(CASE WHEN IFNULL(gl.gl_rows, 0) > 0
                   THEN sl.expected_base - gl.posted_base ELSE 0 END), 2) AS understated_total
FROM ARInvoiceHeader ih
JOIN (
    SELECT s.saleHeaderId,
           SUM(s.total * CASE WHEN lc.isLocalCCY = 1 THEN 1
                              WHEN lc.exchangeDirection = 'local_to_foreign' THEN 1 / NULLIF(s.exchangeRate, 0)
                              ELSE s.exchangeRate END)        AS expected_base,
           SUM(CASE WHEN lc.isLocalCCY = 0 THEN 1 ELSE 0 END) AS foreign_lines
    FROM (
        SELECT DISTINCT x.id, COALESCE(x.saleHeaderId, x.headerId) AS saleHeaderId, x.total, x.exchangeRate, x.currencyId
        FROM saleLine x
        WHERE x.isActive = 1
    ) s
    JOIN currency lc ON lc.id = s.currencyId
    GROUP BY s.saleHeaderId
) sl ON sl.saleHeaderId = ih.saleHeaderId
LEFT JOIN (
    SELECT postingReference, COUNT(*) AS gl_rows, SUM(localDebit) AS posted_base
    FROM general_ledger
    WHERE source = 'AR'
    GROUP BY postingReference
) gl ON gl.postingReference = ih.invoiceNumber
WHERE ih.sourceType = 'POS_ORDER'
  AND sl.foreign_lines > 0
GROUP BY 1
ORDER BY 1;


-- ----------------------------------------------------------------------------------------------
-- Q3. Defect 10, detail: invoices with status 'overdue' that were never posted to the GL. The AR batch
--     selects only status 'sent' or 'paid', so these never reach the GL.
--   created_already_overdue  1 = the due date was already past when the invoice was created
--   gl_rows                  GL rows found for the invoice number (expected 0)
-- ----------------------------------------------------------------------------------------------
SELECT
    ih.id                                                    AS invoice_id,
    ih.invoiceNumber                                         AS invoice_number,
    ih.sourceType                                            AS source_type,
    ih.invoiceDate                                           AS invoice_date,
    ih.dueDate                                               AS due_date,
    DATE(ih.createdAt)                                       AS created_on,
    CASE WHEN ih.dueDate < DATE(ih.createdAt) THEN 1 ELSE 0 END AS created_already_overdue,
    c.code                                                   AS currency,
    ROUND(ih.totalAmount, 2)                                 AS total_amount,
    ROUND(ih.totalAmount * IFNULL(ih.exchangeRate, 1), 2)    AS total_base,
    IFNULL(gl.gl_rows, 0)                                    AS gl_rows
FROM ARInvoiceHeader ih
JOIN currency c ON c.id = ih.currencyId
LEFT JOIN (
    SELECT postingReference, COUNT(*) AS gl_rows
    FROM general_ledger
    WHERE source = 'AR'
    GROUP BY postingReference
) gl ON gl.postingReference = ih.invoiceNumber
WHERE ih.status = 'overdue'
  AND ih.glPostingStatus = 'unposted'
ORDER BY ih.invoiceDate, ih.id;


-- ----------------------------------------------------------------------------------------------
-- Q4. Defect 10, summary: count and base amount of overdue invoices never posted, by source type.
-- ----------------------------------------------------------------------------------------------
SELECT
    ih.sourceType                                            AS source_type,
    COUNT(*)                                                 AS invoices,
    ROUND(SUM(ih.totalAmount * IFNULL(ih.exchangeRate, 1)), 2) AS total_base,
    MIN(ih.invoiceDate)                                      AS oldest_invoice,
    MAX(ih.invoiceDate)                                      AS newest_invoice
FROM ARInvoiceHeader ih
WHERE ih.status = 'overdue'
  AND ih.glPostingStatus = 'unposted'
GROUP BY ih.sourceType
ORDER BY ih.sourceType;
