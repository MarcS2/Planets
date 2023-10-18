import { Schema } from "mongoose";

export const GalaxySchema = new Schema(
  {
    name: { type: String, required: true, maxLength: 100 },
    stars: { type: Number, required: true, }

  },
  {
    timestamps: true,
    toJSON: { virtuals: true }
  }
)

