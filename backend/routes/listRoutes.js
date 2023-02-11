import express from "express";
import {
  addListItem,
  createList,
  getLists,
} from "../controllers/listController.js";

const router = express.Router();

router.route("/").get(getLists).post(createList);
router.route("/:id").post(addListItem);
// router.route(":id").put(updateListItem).delete(deleteListItem);

export default router;
