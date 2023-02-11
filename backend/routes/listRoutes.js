import express from "express";
import {
  addListItem,
  createList,
  getLists,
} from "../controllers/listController.js";

const router = express.Router();

// @desc Get a list and Create a list
// @route GET /api/list and POST /api/list
// @access Public
router.route("/").get(getLists).post(createList);

// @desc Add a list Item
// @route GET /api/list/:id
// @access Public
router.route("/:id").post(addListItem);
// router.route(":id").put(updateListItem).delete(deleteListItem);

export default router;
