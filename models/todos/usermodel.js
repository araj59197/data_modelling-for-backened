import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    // username: String,
    // email: Boolean,
    // isActive: String,
    // in professionalWay
    username: {
      type: String,
      require: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      require: [true, 'Password is required'],
    },
  },
  { timestamps: true }
);

export const User = mongoose.model('user', userSchema);
