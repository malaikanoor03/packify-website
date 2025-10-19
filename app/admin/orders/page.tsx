// app/orders/page.tsx
'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Package, Clock, CheckCircle, XCircle, ArrowLeft } from 'lucide-react'

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
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<any>(null)
  const router = useRouter()

  useEffect(() => {
    checkAuthAndLoadOrders()
  }, [])

  const checkAuthAndLoadOrders = async () => {
    try {
      // Check authentication
      const authRes = await fetch('/api/auth/me')
      if (!authRes.ok) {
        router.push('/')
        return
      }

      const authData = await authRes.json()
      setUser(authData.user)

      // Load orders
      const ordersRes = await fetch('/api/orders/user')
      if (ordersRes.ok) {
        const ordersData = await ordersRes.json()
        setOrders(ordersData.orders)
      }
    } catch (error) {
      console.error('Failed to load orders:', error)
      router.push('/')
    } finally {
      setLoading(false)
    }
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

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading your orders...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <button
            onClick={() => router.push('/')}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-4 transition"
          >
            <ArrowLeft size={20} />
            Back to Home
          </button>
          <h1 className="text-3xl font-bold text-gray-800">My Orders</h1>
          <p className="text-gray-600 mt-2">Track and manage your custom box orders</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {orders.length === 0 ? (
          <div className="bg-white rounded-xl shadow-sm p-12 text-center">
            <Package className="mx-auto text-gray-400 mb-4" size={64} />
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">No Orders Yet</h2>
            <p className="text-gray-600 mb-6">You haven't placed any orders yet. Start by requesting a quote!</p>
            <button
              onClick={() => router.push('/?scrollTo=#quote')}
              className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition"
            >
              Request a Quote
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {orders.map((order) => (
              <div
                key={order.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    {/* Order Info */}
                    <div className="flex-1">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-orange-50 rounded-lg">
                          <Package className="text-orange-500" size={24} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-800 mb-1">
                            {order.boxType}
                          </h3>
                          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                            <span>Quantity: <strong>{order.quantity}</strong></span>
                            <span>•</span>
                            <span>Order ID: <strong>#{order.id.slice(-8)}</strong></span>
                            <span>•</span>
                            <span>{new Date(order.createdAt).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Status and Price */}
                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <p className="text-sm text-gray-600 mb-1">Total</p>
                        <p className="text-2xl font-bold text-gray-800">${order.total}</p>
                      </div>
                      <div className="flex flex-col items-center gap-2 min-w-[120px]">
                        {getStatusIcon(order.status)}
                        <span className={`px-4 py-1.5 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                          {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Status Progress Bar */}
                  <div className="mt-6">
                    <div className="relative">
                      <div className="flex justify-between mb-2">
                        <span className="text-xs font-medium text-gray-600">Order placed</span>
                        <span className="text-xs font-medium text-gray-600">Processing</span>
                        <span className="text-xs font-medium text-gray-600">Completed</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full transition-all duration-500 ${
                            order.status === 'pending' ? 'bg-yellow-500 w-1/3' :
                            order.status === 'processing' ? 'bg-blue-500 w-2/3' :
                            order.status === 'completed' ? 'bg-green-500 w-full' :
                            'bg-red-500 w-1/3'
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <div className="bg-gray-50 px-6 py-4 flex justify-end">
                  <button className="text-orange-500 hover:text-orange-600 font-medium transition">
                    View Details →
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Summary Card */}
        {orders.length > 0 && (
          <div className="mt-8 bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Order Summary</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 bg-yellow-50 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Pending</p>
                <p className="text-2xl font-bold text-yellow-700">
                  {orders.filter(o => o.status === 'pending').length}
                </p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Processing</p>
                <p className="text-2xl font-bold text-blue-700">
                  {orders.filter(o => o.status === 'processing').length}
                </p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Completed</p>
                <p className="text-2xl font-bold text-green-700">
                  {orders.filter(o => o.status === 'completed').length}
                </p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Total Spent</p>
                <p className="text-2xl font-bold text-purple-700">
                  ${orders.reduce((sum, o) => sum + o.total, 0).toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}