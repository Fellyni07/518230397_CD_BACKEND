import mongoose from "mongoose";
import { type } from "os";
const { Schema } = mongoose;

const categorySchema = new Schema(
  {
    code: String,
    name: String,
    image: String,
    createdAt: Date,
    updatedAt: Date,
  },
  {
    versionKey: false,
    collection: "categories",
  }
);

const CategoryModel = mongoose.model("Category", categorySchema);
export default CategoryModel;
