import mongoose from 'mongoose'

export interface IOrder extends mongoose.Document {
  userId: mongoose.Types.ObjectId
  customerName: string
  email: string
  phone: string
  boxType: string
  quantity: number
  dimensions: {
    length: number
    width: number
    height: number
  }
  material: string
  printing: string
  additionalNotes?: string
  status: 'pending' | 'processing' | 'completed' | 'cancelled'
  total: number
  createdAt: Date
  updatedAt: Date
}

const orderSchema = new mongoose.Schema<IOrder>({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: false // Allow guest orders
  },
  customerName: {
    type: String,
    required: [true, 'Customer name is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    lowercase: true,
    trim: true
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required']
  },
  boxType: {
    type: String,
    required: [true, 'Box type is required']
  },
  quantity: {
    type: Number,
    required: [true, 'Quantity is required'],
    min: 1
  },
  dimensions: {
    length: { type: Number, required: true },
    width: { type: Number, required: true },
    height: { type: Number, required: true }
  },
  material: {
    type: String,
    required: [true, 'Material is required']
  },
  printing: {
    type: String,
    required: [true, 'Printing option is required']
  },
  additionalNotes: {
    type: String,
    trim: true
  },
  status: {
    type: String,
    enum: ['pending', 'processing', 'completed', 'cancelled'],
    default: 'pending'
  },
  total: {
    type: Number,
    required: [true, 'Total is required'],
    min: 0
  }
}, {
  timestamps: true
})

export default mongoose.models.Order || mongoose.model<IOrder>('Order', orderSchema)