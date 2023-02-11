import asyncHandler from "express-async-handler";
import List from "../models/listModel";

const getLists = asyncHandler(async (req, res) => {
  try {
    const lists = List.find();
    res.json(lists);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export { getLists };
