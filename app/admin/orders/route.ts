// app/api/orders/route.ts
import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken'
import connectDB from '@/lib/mongodb'
import Order from '@/lib/models/Order'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production'

export async function POST(request: Request) {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get('auth-token')?.value
    
    let userId = null
    if (token) {
      try {
        const decoded = jwt.verify(token, JWT_SECRET) as any
        userId = decoded.userId
      } catch (error) {
        // Guest order - userId will remain null
      }
    }

    const orderData = await request.json()

    await connectDB()
    const order = await Order.create({
      ...orderData,
      userId
    })

    return NextResponse.json({
      message: 'Order created successfully',
      order: {
        id: order._id,
        status: order.status
      }
    }, { status: 201 })
  } catch (error: any) {
    console.error('Order creation error:', error)
    return NextResponse.json({ 
      error: error.message || 'Failed to create order' 
    }, { status: 500 })
  }
}