import express from "express";
import {
  listCategory,
  renderPageCreateCategory,
  createCategory,
  renderPageUpdateCategory,
  UpdateCategory,
} from "../controllers/categoryController.js";
const router = express.Router();

router.get("/", listCategory);

router.get("/create", renderPageCreateCategory); //render ra form create
router.post("/create", createCategory);

router.get("/update/:id", renderPageUpdateCategory); //render ra form create
router.post("/update", UpdateCategory);

export default router;
