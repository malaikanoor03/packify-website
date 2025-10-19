// app/api/orders/user/route.ts
import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken'
import connectDB from '@/lib/mongodb'
import Order from '@/lib/models/Order'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production'

export async function GET() {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get('auth-token')?.value

    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const decoded = jwt.verify(token, JWT_SECRET) as any

    await connectDB()
    const orders = await Order.find({ userId: decoded.userId }).sort({ createdAt: -1 })

    return NextResponse.json({
      orders: orders.map(order => ({
        id: order._id,
        boxType: order.boxType,
        quantity: order.quantity,
        status: order.status,
        total: order.total,
        createdAt: order.createdAt
      }))
    })
  } catch (error) {
    console.error('Get user orders error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}