import express from "express";
import { createListItem, getLists } from "../controllers/listController.js";

const router = express.Router();

router.route("/").get(getLists).post(createListItem);
// router.route(":id").put(updateListItem).delete(deleteListItem);

export default router;
