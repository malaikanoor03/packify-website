// app/api/admin/stats/route.ts
import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken'
import connectDB from '@/lib/mongodb'
import User from '@/lib/models/User'
import Order from '@/lib/models/Order'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production'

async function verifyAdmin() {
  const cookieStore = await cookies()
  const token = cookieStore.get('auth-token')?.value

  if (!token) return null

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as any
    await connectDB()
    const user = await User.findById(decoded.userId)
    
    if (user && user.role === 'admin') {
      return user
    }
    return null
  } catch (error) {
    return null
  }
}

export async function GET() {
  try {
    const admin = await verifyAdmin()
    if (!admin) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    await connectDB()
    
    // Get user count
    const totalUsers = await User.countDocuments()
    
    // Get order stats
    const totalOrders = await Order.countDocuments()
    const pendingOrders = await Order.countDocuments({ status: 'pending' })
    
    // Calculate revenue
    const orders = await Order.find({ status: { $in: ['completed', 'processing'] } })
    const revenue = orders.reduce((sum, order) => sum + order.total, 0)

    const stats = {
      totalUsers,
      totalOrders,
      pendingOrders,
      revenue
    }

    return NextResponse.json({ stats })
  } catch (error) {
    console.error('Stats error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}