---
name: job-agency
description: Manages recruitment agency operations, candidate applicant tracking (ATS), job advertisements, job fairs, MOUs, partner agency quotas, and interview status transitions.
---

# Job Agency & Recruitment Skill

This skill outlines guidelines and workflows for the **Job Agency / Recruitment & Applicant Tracking (ATS)** module in `dc_web`.

---

## 1. Key Domain Directories & Files

- **Applicants List & Profile**: [pages/admin/applicants/index.vue](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/pages/admin/applicants/index.vue)
- **Applicant Dialogs**:
  - Main Profile: [components/applicants/ApplicantDialog](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/components/applicants/ApplicantDialog)
  - Detail View: [components/applicants/ApplicantViewDialog](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/components/applicants/ApplicantViewDialog)
  - Batch Import: [components/applicants/ImportDialog.vue](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/components/applicants/ImportDialog.vue)
  - Status Progression: [components/applicants/StatusUpdateDialog](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/components/applicants/StatusUpdateDialog)
- **Job Advertisements & Postings**: [pages/admin/jobAdvertise/index.vue](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/pages/admin/jobAdvertise/index.vue)
- **Job Fairs & MOUs**: [pages/admin/job_fair](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/pages/admin/job_fair), [components/job_fair](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/components/job_fair) (`agency`, `job_batch`, `mou`)

---

## 2. Core Business Logic & Workflows

### A. Applicant Tracking Stages & Status Transitions
Applicants move through a defined recruitment lifecycle:
1. `New / Registered` (`ສະໝັກໃໝ່`)
2. `Screening / Document Verified` (`ກວດສອບເອກະສານ`)
3. `Interview Scheduled` (`ນັດສຳພາດ`)
4. `Passed Interview` (`ຜ່ານການສຳພາດ`) / `Failed` (`ບໍ່ຜ່ານ`)
5. `Medical Check` (`ກວດສຸຂະພາບ`)
6. `Visa / Passport Processing` (`ເຮັດວີຊາ/ໜັງສືຜ່ານແດນ`)
7. `Contract Signed & Deployed` (`ເຊັນສັນຍາ / ສົ່ງຕົວອອກແຮງງານ`)
8. `Cancelled / Withdrawn` (`ຍົກເລີກ`)

*Always record status update history, timestamp, operator note, and the updater's user ID via [StatusUpdateDialog](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/components/applicants/StatusUpdateDialog).*

### B. Batch Import via Excel
- Handle candidate bulk uploads in [ImportDialog.vue](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/components/applicants/ImportDialog.vue) using `exceljs` or `xlsx`.
- Validate required fields (Full Name, Phone number, ID/Passport, Target Country/Job Category) before submitting batch requests to API.
- Provide clear error feedback per row if validation fails.

### C. Agency MOUs & Job Batches (`job_batch` & `mou`)
- Track partner recruitment agencies (e.g. Thailand, Japan, Korea worker placement).
- Maintain quotas: Total quota allowed vs. candidates assigned vs. remaining spots.
- Link applicant records to specific `mou_id` and `batch_id`.

### D. Job Advertisement & Criteria
- Support salary range, target currency (THB, JPY, USD, LAK), job benefits, required qualifications, and expiration date.

---

## 3. UI & Component Best Practices

- Color-code applicant status badges for quick visual scanning (e.g. green for Passed, amber for In Process, red for Failed/Cancelled).
- Keep applicant documents (photos, passport scans, medical certs) organized using standardized modal image/file viewers.
