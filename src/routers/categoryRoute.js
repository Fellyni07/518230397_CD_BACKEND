import express from "express";
import {
  listCategory,
  renderPageCreateCategory,
  createCategory,
  renderPageUpdateCategory,
  updateCategory,
  renderPageDeleteCategory,
  deleteCategory,
} from "../controllers/categoryController.js";
const router = express.Router();

router.get("/", listCategory);

router.get("/create", renderPageCreateCategory); //render ra form create
router.post("/create", createCategory);

router.get("/update/:id", renderPageUpdateCategory); //render ra form update
router.post("/update", updateCategory);

router.get("/delete/:id", renderPageDeleteCategory); //render ra form delete
router.post("/delete", deleteCategory);

export default router;
