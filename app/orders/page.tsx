// app/orders/page.tsx
'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Package, Clock, CheckCircle, XCircle, ArrowLeft, Search, Filter } from 'lucide-react'

interface Order {
  id: string
  boxType: string
  quantity: number
  status: string
  total: number
  createdAt: string
}

export default function UserOrders() {
  const [orders, setOrders] = useState<Order[]>([])
  const [filteredOrders, setFilteredOrders] = useState<Order[]>([])
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<any>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const router = useRouter()

  useEffect(() => {
    checkAuthAndLoadOrders()
  }, [])

  useEffect(() => {
    filterOrders()
  }, [orders, searchTerm, statusFilter])

  const checkAuthAndLoadOrders = async () => {
    try {
      // Check authentication
      console.log('🔍 Checking authentication...')
      const authRes = await fetch('/api/auth/me')
      console.log('Auth response status:', authRes.status)
      
      if (!authRes.ok) {
        console.log('❌ Not authenticated, redirecting to home')
        router.push('/')
        return
      }

      const authData = await authRes.json()
      console.log('✅ User authenticated:', authData.user)
      setUser(authData.user)

      // Load orders
      console.log('📦 Loading orders...')
      const ordersRes = await fetch('/api/orders/user')
      console.log('Orders response status:', ordersRes.status)
      
      if (ordersRes.ok) {
        const ordersData = await ordersRes.json()
        console.log('✅ Orders loaded:', ordersData.orders.length)
        setOrders(ordersData.orders || [])
        setFilteredOrders(ordersData.orders || [])
      } else {
        console.log('⚠️ Failed to load orders, but continuing with empty array')
        setOrders([])
        setFilteredOrders([])
      }
    } catch (error) {
      console.error('❌ Error in checkAuthAndLoadOrders:', error)
      router.push('/')
    } finally {
      setLoading(false)
    }
  }

  const filterOrders = () => {
    let filtered = [...orders]

    // Filter by status
    if (statusFilter !== 'all') {
      filtered = filtered.filter(order => order.status === statusFilter)
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(order => 
        order.boxType.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.id.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    setFilteredOrders(filtered)
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <Clock className="text-yellow-500" size={20} />
      case 'processing':
        return <Package className="text-blue-500" size={20} />
      case 'completed':
        return <CheckCircle className="text-green-500" size={20} />
      case 'cancelled':
        return <XCircle className="text-red-500" size={20} />
      default:
        return <Clock className="text-gray-500" size={20} />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800'
      case 'processing':
        return 'bg-blue-100 text-blue-800'
      case 'completed':
        return 'bg-green-100 text-green-800'
      case 'cancelled':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getProgressWidth = (status: string) => {
    switch (status) {
      case 'pending': return 'w-1/3'
      case 'processing': return 'w-2/3'
      case 'completed': return 'w-full'
      default: return 'w-1/3'
    }
  }

  const getProgressColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-500'
      case 'processing': return 'bg-blue-500'
      case 'completed': return 'bg-green-500'
      case 'cancelled': return 'bg-red-500'
      default: return 'bg-gray-500'
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-orange-500 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600">Loading your orders...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-24 pb-12">
      {/* Header */}
      <div className="bg-white shadow-lg border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <button
            onClick={() => router.push('/')}
            className="flex items-center gap-2 text-gray-600 hover:text-orange-500 mb-4 transition group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Home</span>
          </button>
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-4xl font-bold text-gray-800 mb-2">My Orders</h1>
              <p className="text-gray-600">Track and manage your custom box orders</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="px-4 py-2 bg-orange-50 rounded-lg">
                <span className="text-sm text-gray-600">Total Orders: </span>
                <span className="text-lg font-bold text-orange-600">{orders.length}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Filters & Search */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search by box type or order ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>

            {/* Status Filter */}
            <div className="relative">
              <Filter className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="pl-12 pr-8 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent appearance-none bg-white cursor-pointer min-w-[180px]"
              >
                <option value="all">All Status</option>
                <option value="pending">Pending</option>
                <option value="processing">Processing</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
          </div>
        </div>

        {/* Orders List */}
        {filteredOrders.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-sm p-12 text-center">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Package className="text-gray-400" size={48} />
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              {orders.length === 0 ? 'No Orders Yet' : 'No Orders Found'}
            </h2>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              {orders.length === 0 
                ? "You haven't placed any orders yet. Start by requesting a quote for your custom boxes!"
                : 'Try adjusting your search or filter criteria.'}
            </p>
            {orders.length === 0 && (
              <button
                onClick={() => router.push('/?scrollTo=#quote')}
                className="px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-xl transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Request a Quote
              </button>
            )}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredOrders.map((order) => (
              <div
                key={order.id}
                className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 hover:border-orange-200"
              >
                <div className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    {/* Order Info */}
                    <div className="flex-1">
                      <div className="flex items-start gap-4">
                        <div className="p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl">
                          <Package className="text-orange-600" size={28} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-800 mb-2">
                            {order.boxType}
                          </h3>
                          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600">
                            <div className="flex items-center gap-2">
                              <span className="font-medium text-gray-700">Quantity:</span>
                              <span className="font-semibold text-orange-600">{order.quantity}</span>
                            </div>
                            <span className="text-gray-300">•</span>
                            <div className="flex items-center gap-2">
                              <span className="font-medium text-gray-700">Order ID:</span>
                              <span className="font-mono text-xs bg-gray-100 px-2 py-1 rounded">#{order.id.slice(-8)}</span>
                            </div>
                            <span className="text-gray-300">•</span>
                            <div className="flex items-center gap-2">
                              <span className="font-medium text-gray-700">Date:</span>
                              <span>{new Date(order.createdAt).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric'
                              })}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Status and Price */}
                    <div className="flex items-center gap-6 lg:flex-row flex-col-reverse">
                      <div className="text-center lg:text-right">
                        <p className="text-sm text-gray-600 mb-1">Total Amount</p>
                        <p className="text-3xl font-bold text-gray-800">${order.total}</p>
                      </div>
                      <div className="flex flex-col items-center gap-2 min-w-[140px]">
                        <div className="p-3 bg-gray-50 rounded-full">
                          {getStatusIcon(order.status)}
                        </div>
                        <span className={`px-5 py-2 rounded-full text-sm font-semibold ${getStatusColor(order.status)}`}>
                          {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  {order.status !== 'cancelled' && (
                    <div className="mt-6">
                      <div className="flex justify-between mb-3 text-xs font-medium text-gray-600">
                        <span className={order.status === 'pending' ? 'text-orange-600' : ''}>Order Placed</span>
                        <span className={order.status === 'processing' ? 'text-orange-600' : ''}>Processing</span>
                        <span className={order.status === 'completed' ? 'text-orange-600' : ''}>Completed</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                        <div
                          className={`h-2.5 rounded-full transition-all duration-700 ${getProgressColor(order.status)} ${getProgressWidth(order.status)}`}
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Action Footer */}
                <div className="bg-gradient-to-r from-gray-50 to-white px-6 py-4 flex justify-between items-center border-t border-gray-100">
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">Estimated delivery:</span> 7-10 business days
                  </div>
                  <button className="text-orange-500 hover:text-orange-600 font-semibold transition flex items-center gap-2 group">
                    View Details
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Summary Cards */}
        {orders.length > 0 && (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-6 border border-yellow-200">
              <div className="flex items-center justify-between mb-3">
                <Clock className="text-yellow-600" size={32} />
                <span className="text-3xl font-bold text-yellow-700">
                  {orders.filter(o => o.status === 'pending').length}
                </span>
              </div>
              <p className="text-sm font-semibold text-yellow-800">Pending Orders</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
              <div className="flex items-center justify-between mb-3">
                <Package className="text-blue-600" size={32} />
                <span className="text-3xl font-bold text-blue-700">
                  {orders.filter(o => o.status === 'processing').length}
                </span>
              </div>
              <p className="text-sm font-semibold text-blue-800">Processing</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 border border-green-200">
              <div className="flex items-center justify-between mb-3">
                <CheckCircle className="text-green-600" size={32} />
                <span className="text-3xl font-bold text-green-700">
                  {orders.filter(o => o.status === 'completed').length}
                </span>
              </div>
              <p className="text-sm font-semibold text-green-800">Completed</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border border-purple-200">
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl">💰</span>
                <span className="text-3xl font-bold text-purple-700">
                  ${orders.reduce((sum, o) => sum + o.total, 0).toLocaleString()}
                </span>
              </div>
              <p className="text-sm font-semibold text-purple-800">Total Spent</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}