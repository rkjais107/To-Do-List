import express from "express";
import {
  addListItem,
  createList,
  deleteList,
  deleteListItem,
  getLists,
  updateListItem,
} from "../controllers/listController.js";

const router = express.Router();

// @desc Get a list and Create a list
// @route GET /api/list and POST /api/list
// @access Public
router.route("/").get(getLists).post(createList);

// @desc Add a list Item
// @route GET /api/list/:id
// @access Public
router.route("/:id").post(addListItem).delete(deleteList);
// router.route(":id").put(updateListItem).delete(deleteListItem);

router
  .route("/:listId/edit/:itemId")
  .put(updateListItem)
  .delete(deleteListItem);

export default router;
