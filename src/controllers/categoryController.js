import CategoryModel from "../models/categoryModel.js";
import { ObjectId } from "mongodb";

//Danh sách sản phẩm
export async function listCategory(req, res) {
  try {
    const categories = await CategoryModel.find();
    res.render("pages/categories/list", {
      title: "Categories",
      categories: categories,
    });
  } catch (error) {
    console.log(error);
    res.send("Hiện tại ko có sản phẩm nào");
  }
}

// Tạo loại sản phẩm
export async function renderPageCreateCategory(req, res) {
  res.render("pages/categories/form", {
    title: "Create Categories",
    mode: "Create",
    category: {},
  });
}

export async function createCategory(req, res) {
  const { code, name, image } = req.body;
  try {
    await CategoryModel.create({
      code,
      name,
      image,
      createdAt: new Date(),
    });
    res.redirect("/categories");
  } catch (error) {
    console.log(error);
    res.send("Tạo loại sản phẩm ko thành công!");
  }
}

// Update loại sản phẩm
export async function renderPageUpdateCategory(req, res) {
  const { id } = req.params;
  const category = await CategoryModel.findOne({ _id: new ObjectId(id) });
  if (category) {
    res.render("pages/categories/form", {
      title: "Create Categories",
      mode: "Update",
      category: category,
    });
  } else {
    res.send("Hiện không có sản phẩm nào phù hợp!");
  }
}

export async function UpdateCategory(req, res) {
  const { code, name, image, id } = req.body;
  try {
    await CategoryModel.updateOne(
      { _id: new ObjectId(id) },
      { code, name, image, updatedAt: new Date() }
    );
    res.redirect("/categories");
  } catch (error) {
    console.log(error);
    res.send("Cập nhật loại sản phẩm ko thành công!");
  }
}
