import asyncHandler from "express-async-handler";
import List from "../models/listModel.js";

const getLists = asyncHandler(async (req, res) => {
  try {
    const lists = await List.find();
    res.json(lists);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const createListItem = asyncHandler(async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export { getLists, createListItem };
