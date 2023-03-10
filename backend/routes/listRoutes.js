import express from "express";
import {
  addListItem,
  createList,
  deleteList,
  deleteListItem,
  getList,
  getListItem,
  getLists,
  updateListItem,
} from "../controllers/listController.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

// @desc Get a list and Create a list
// @route GET /api/list and POST /api/list
// @access Public
router.route("/").get(verifyToken, getLists).post(verifyToken, createList);

// @desc Add a list Item
// @route POST /api/list/:id
// @access Public
router.route("/:id").get(getList).post(addListItem).delete(deleteList);
// router.route(":id").put(updateListItem).delete(deleteListItem);

router
  .route("/:listId/edit/:itemId")
  .get(getListItem)
  .put(updateListItem)
  .delete(deleteListItem);

export default router;
