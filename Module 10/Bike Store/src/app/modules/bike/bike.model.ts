import { Schema, model } from 'mongoose';
import { IBike } from './bike.interface';

const bikeSchema = new Schema<IBike>({
  name: { type: String, required: [true, 'Bike name is required'] },
  brand: { type: String, required: [true, 'Brand is required'] },
  price: { type: Number, required: [true, 'Price is required'] },
  category: { type: String, required: [true, 'Category is required'] },
  description: { type: String, required: [true, 'Description is required'] },
  quantity: { type: Number, required: [true, 'Quantity is required'] },
  inStock: { type: Boolean, required: [true, 'In-stock status is required'] },
}, {
  timestamps: true, 
});

export const Bike = model<IBike>('Bike', bikeSchema);
