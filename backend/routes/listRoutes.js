import express from "express";
const router = express.Router();

router.route("/").get(getLists).post(createListItem);
router.route(":id").put(updateListItem).delete(deleteListItem);

export default router;
