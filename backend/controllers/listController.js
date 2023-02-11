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

const createList = asyncHandler(async (req, res) => {
  try {
    // console.log(req.body);
    const { listname, title, content, timestamp } = req.body;
    const newListItem = {
      title,
      content,
      timestamp,
    };
    const lists = new List({
      listname: listname,
      lists: [newListItem],
    });

    await lists.save();
    res.status(201).json({ message: "List created successfully." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const addListItem = asyncHandler(async (req, res) => {
  try {
    const { title, content, timestamp } = req.body;
    const list = await List.findById(req.params.id);
    if (!list) {
      return res.status(404).json({ message: "list not found" });
    }
    const newListItem = {
      title,
      content,
      timestamp,
    };
    list.lists.push(newListItem);
    await list.save();
    res.status(201).json({ message: "List Items added successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export { getLists, createList, addListItem };
