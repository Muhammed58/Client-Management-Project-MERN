import mongoose from "mongoose";

const user =  mongoose.Schema (
    {
        name: {
          type: String,
          required: true,
        },
        email: {
          type: String,
          required: true,
          unique: true,
        },
        password: {
          type: String,
          required: true,
        },
        isAdmin: {
          type: Boolean,
          required: true,
          default: false,
        },
      },
      {
        timestamps: true,
      }
   );

export const User  = mongoose.model('User', user);