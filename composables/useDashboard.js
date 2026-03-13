// composables/useDashboard.js
export default function useDashboard() {
  
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'LAK',
      minimumFractionDigits: 0
    }).format(amount || 0).replace('LAK', '₭')
  }

  const getDateRange = (period, customStart = null, customEnd = null) => {
    const now = new Date()
    
    // Helper function to format date in local timezone
    const formatLocalDate = (date) => {
      const year = date.getFullYear()
      const month = String(date.getMonth() + 1).padStart(2, '0')
      const day = String(date.getDate()).padStart(2, '0')
      return `${year}-${month}-${day}`
    }
    
    const today = formatLocalDate(now)
    
    if (period === 'custom' && customStart && customEnd) {
      return {
        startDate: customStart,
        endDate: customEnd
      }
    }
    
    switch (period) {
      case 'today':
        return {
          startDate: today,
          endDate: today
        }
      
      case 'yesterday':
        const yesterday = new Date(now)
        yesterday.setDate(now.getDate() - 1)
        const yesterdayFormatted = formatLocalDate(yesterday)
        return {
          startDate: yesterdayFormatted,
          endDate: yesterdayFormatted
        }
      
      case 'this_week':
        const startOfWeek = new Date(now)
        startOfWeek.setDate(now.getDate() - now.getDay())
        return {
          startDate: formatLocalDate(startOfWeek),
          endDate: today
        }
      
      case 'last_week':
        const lastWeekEnd = new Date(now)
        lastWeekEnd.setDate(now.getDate() - now.getDay() - 1)
        const lastWeekStart = new Date(lastWeekEnd)
        lastWeekStart.setDate(lastWeekEnd.getDate() - 6)
        return {
          startDate: formatLocalDate(lastWeekStart),
          endDate: formatLocalDate(lastWeekEnd)
        }
      
      case 'current_month':
        const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1)
        return {
          startDate: formatLocalDate(startOfMonth),
          endDate: today
        }
      
      case 'last_month':
        const lastMonthStart = new Date(now.getFullYear(), now.getMonth() - 1, 1)
        const lastMonthEnd = new Date(now.getFullYear(), now.getMonth(), 0)
        return {
          startDate: formatLocalDate(lastMonthStart),
          endDate: formatLocalDate(lastMonthEnd)
        }
      
      default:
        return {
          startDate: formatLocalDate(new Date(now.getFullYear(), now.getMonth(), 1)),
          endDate: today
        }
    }
  }

  const fetchDashboardData = async (axios, period = 'current_month', customStart = null, customEnd = null) => {
    try {
      const dateRange = getDateRange(period, customStart, customEnd)
      
      const response = await axios.get('/api/ticket/find', {
        params: {
          startDate: dateRange.startDate,
          endDate: dateRange.endDate,
          include: 'client,table,ticketLines,payment'
        }
      })

      if (response.data.success) {
        return {
          success: true,
          data: response.data.tickets || [],
          dateRange
        }
      } else {
        throw new Error('Failed to fetch dashboard data')
      }
    } catch (error) {
      console.error('Dashboard data fetch error:', error)
      return {
        success: false,
        error: error.message,
        data: []
      }
    }
  }

  const processDashboardData = (tickets) => {
    const metrics = {
      financial: {
        totalRevenue: 0,
        totalSubtotal: 0,
        totalTax: 0,
        totalOrders: tickets.length,
        averageOrderValue: 0,
        pendingPayments: 0,
        completedPayments: 0,
        profitMargin: 0,
        totalProfit: 0
      },
      orders: {
        byStatus: {
          pending: 0,
          preparing: 0,
          completed: 0,
          cancelled: 0
        },
        byPaymentStatus: {
          pending: 0,
          completed: 0,
          failed: 0
        },
        hourlyDistribution: Array(24).fill(0),
        dailyTrends: []
      },
      products: {
        topSelling: [],
        topRevenue: [],
        lowStock: [],
        categoryPerformance: []
      },
      customers: {
        walkInCustomers: 0,
        registeredCustomers: 0
      },
      staff: {
        performanceByUser: []
      },
      alerts: []
    }

    const productStats = {}
    const categoryStats = {}
    const staffStats = {}

    tickets.forEach(ticket => {
      // Financial calculations
      metrics.financial.totalRevenue += ticket.total || 0
      metrics.financial.totalSubtotal += ticket.subtotal || 0
      metrics.financial.totalTax += ticket.tax || 0
      
      // Payment status tracking
      if (ticket.paymentStatus === 'pending') {
        metrics.financial.pendingPayments += ticket.total || 0
        metrics.orders.byPaymentStatus.pending++
      } else if (ticket.paymentStatus === 'completed') {
        metrics.financial.completedPayments += ticket.total || 0
        metrics.orders.byPaymentStatus.completed++
      }
      
      // Order status tracking
      if (metrics.orders.byStatus.hasOwnProperty(ticket.status)) {
        metrics.orders.byStatus[ticket.status]++
      }
      
      // Customer type analysis
      if (ticket.clientId) {
        metrics.customers.registeredCustomers++
      } else {
        metrics.customers.walkInCustomers++
      }
      
      // Staff performance tracking
      if (ticket.createUser) {
        const staffId = ticket.createUser.id
        const staffName = ticket.createUser.cus_name
        
        if (!staffStats[staffId]) {
          staffStats[staffId] = {
            id: staffId,
            name: staffName,
            orderCount: 0,
            totalRevenue: 0
          }
        }
        
        staffStats[staffId].orderCount++
        staffStats[staffId].totalRevenue += ticket.total || 0
      }
      
      // Hourly distribution
      const orderHour = new Date(ticket.createdAt).getHours()
      if (orderHour >= 0 && orderHour < 24) {
        metrics.orders.hourlyDistribution[orderHour]++
      }
      
      // Process ticket lines (products)
      if (ticket.ticketLines && Array.isArray(ticket.ticketLines)) {
        ticket.ticketLines.forEach(line => {
          const product = line.product
          if (!product) return
          
          const productId = product.id
          const categoryName = product.category?.categ_name || 'Unknown'
          
          // Product statistics
          if (!productStats[productId]) {
            productStats[productId] = {
              id: productId,
              name: product.pro_name,
              category: categoryName,
              totalQuantity: 0,
              totalRevenue: 0,
              totalProfit: 0,
              currentStock: product.stock_count || 0,
              minStock: product.minStock || 0,
              costPrice: product.cost_price || 0,
              salePrice: product.pro_price || 0,
              profitPerUnit: (product.pro_price || 0) - (product.cost_price || 0)
            }
          }
          
          productStats[productId].totalQuantity += line.quantity || 0
          productStats[productId].totalRevenue += line.totalPrice || 0
          productStats[productId].totalProfit += (line.quantity || 0) * productStats[productId].profitPerUnit
          
          // Category statistics
          if (!categoryStats[categoryName]) {
            categoryStats[categoryName] = {
              name: categoryName,
              totalRevenue: 0,
              totalProfit: 0,
              productCount: 0
            }
          }
          
          categoryStats[categoryName].totalRevenue += line.totalPrice || 0
          categoryStats[categoryName].totalProfit += (line.quantity || 0) * productStats[productId].profitPerUnit
          
          // Stock alerts
          if (product.stock_count <= product.minStock) {
            const alertType = product.stock_count === 0 ? 'critical' : 'warning'
            const alertMessage = product.stock_count === 0 
              ? `${product.pro_name} is out of stock`
              : `${product.pro_name} is running low (${product.stock_count} remaining)`
            
            metrics.alerts.push({
              type: alertType,
              category: 'inventory',
              message: alertMessage,
              productId: product.id,
              productName: product.pro_name,
              currentStock: product.stock_count,
              minStock: product.minStock,
              timestamp: new Date().toISOString()
            })
          }
        })
      }
    })

    // Calculate derived metrics
    metrics.financial.averageOrderValue = metrics.financial.totalOrders > 0 
      ? metrics.financial.totalRevenue / metrics.financial.totalOrders 
      : 0
    
    metrics.financial.totalProfit = Object.values(productStats).reduce((sum, product) => sum + product.totalProfit, 0)
    metrics.financial.profitMargin = metrics.financial.totalRevenue > 0 
      ? (metrics.financial.totalProfit / metrics.financial.totalRevenue) * 100 
      : 0

    // Process product arrays
    const productsArray = Object.values(productStats)
    
    metrics.products.topSelling = productsArray
      .sort((a, b) => b.totalQuantity - a.totalQuantity)
      .slice(0, 10)
    
    metrics.products.topRevenue = productsArray
      .sort((a, b) => b.totalRevenue - a.totalRevenue)
      .slice(0, 10)
    
    metrics.products.lowStock = productsArray
      .filter(product => product.currentStock <= product.minStock)
      .sort((a, b) => (a.currentStock / Math.max(a.minStock, 1)) - (b.currentStock / Math.max(b.minStock, 1)))

    metrics.products.categoryPerformance = Object.values(categoryStats)
      .sort((a, b) => b.totalRevenue - a.totalRevenue)

    // Staff performance
    metrics.staff.performanceByUser = Object.values(staffStats)
      .map(staff => ({
        ...staff,
        averageOrderValue: staff.orderCount > 0 ? staff.totalRevenue / staff.orderCount : 0
      }))
      .sort((a, b) => b.totalRevenue - a.totalRevenue)

    // Payment alerts
    if (metrics.financial.pendingPayments > 0) {
      metrics.alerts.push({
        type: 'warning',
        category: 'payment',
        message: `${metrics.orders.byPaymentStatus.pending} orders with pending payments (${formatCurrency(metrics.financial.pendingPayments)})`,
        amount: metrics.financial.pendingPayments,
        count: metrics.orders.byPaymentStatus.pending,
        timestamp: new Date().toISOString()
      })
    }

    return metrics
  }

  const calculateComparison = (current, previous) => {
    const calculateChange = (curr, prev) => {
      if (prev === 0) return curr > 0 ? 100 : 0
      return ((curr - prev) / prev) * 100
    }

    return {
      revenue: calculateChange(current.financial.totalRevenue, previous.financial.totalRevenue),
      orders: calculateChange(current.financial.totalOrders, previous.financial.totalOrders),
      avgOrderValue: calculateChange(current.financial.averageOrderValue, previous.financial.averageOrderValue),
      profitMargin: calculateChange(current.financial.profitMargin, previous.financial.profitMargin)
    }
  }

  const generateMockTrendData = (period, revenue, orders) => {
    switch (period) {
      case 'today':
      case 'yesterday':
        // Hourly data for single day
        return Array.from({length: 24}, (_, hour) => {
          const baseRevenue = revenue / 24
          const variance = Math.random() * 0.5 + 0.75 // 75-125% of base
          return Math.round(baseRevenue * variance)
        })
      
      case 'this_week':
      case 'last_week':
        // Daily data for week
        return Array.from({length: 7}, (_, day) => {
          const baseRevenue = revenue / 7
          const variance = Math.random() * 0.4 + 0.8 // 80-120% of base
          return Math.round(baseRevenue * variance)
        })
      
      default:
        // Weekly data for month
        return Array.from({length: 4}, (_, week) => {
          const baseRevenue = revenue / 4
          const variance = Math.random() * 0.3 + 0.85 // 85-115% of base
          return Math.round(baseRevenue * variance)
        })
    }
  }

  return {
    formatCurrency,
    getDateRange,
    fetchDashboardData,
    processDashboardData,
    calculateComparison,
    generateMockTrendData
  }
}