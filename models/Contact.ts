import mongoose, { Schema, Document } from "mongoose";

export interface IContact extends Document {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  from?: string;
  to?: string;
  message?: string;
  createdAt: Date;
}

const ContactSchema: Schema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    from: { type: String },
    to: { type: String },
    message: { type: String },
  },
  { timestamps: true }
);

export default mongoose.models.Contact || mongoose.model<IContact>("Contact", ContactSchema);
