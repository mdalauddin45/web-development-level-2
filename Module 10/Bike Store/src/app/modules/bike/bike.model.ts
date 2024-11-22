import mongoose, { Schema } from 'mongoose';
import { IBike } from './bike.interface';

const BikeSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    brand: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    quantity: { type: Number, required: true },
    inStock: { type: Boolean, required: true },
  },
  { timestamps: true }
);

export default mongoose.model<IBike>('Bike', BikeSchema);
