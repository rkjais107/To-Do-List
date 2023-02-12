import asyncHandler from "express-async-handler";
import List from "../models/listModel.js";

// @desc Get a list
// @route GET /api/list
// @access Public
const getLists = asyncHandler(async (req, res) => {
  try {
    const lists = await List.find();
    res.json(lists);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @desc  Create a list
// @route POST /api/list
// @access Public
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

// @desc Add a list Item
// @route GET /api/list/:id
// @access Public
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
// delete list item function
const deleteList = asyncHandler(async (req, res) => {
  try {
    const list = await List.findById(req.params.id);
    if (!list) {
      return res.status(404).json({ message: "list not found" });
    }
    await list.remove();
    res.status(200).json({ message: "List deleted  successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// update list items
const updateListItem = asyncHandler(async (req, res) => {
  try {
    const { title, content, timestamp } = req.body;
    const list = await List.findById(req.params.listId);
    if (!list) {
      return res.status(404).json({ message: "list not found" });
    }
    if (
      list.lists.filter((item) => item._id.toString() === req.params.itemId)
    ) {
      let itemToUpdate = list.lists.filter(
        (item) => item._id.toString() === req.params.itemId
      )[0];
      itemToUpdate.title = title || itemToUpdate.title;
      itemToUpdate.content = content || itemToUpdate.content;
      itemToUpdate.timestamp = timestamp || itemToUpdate.timestamp;
    }
    await list.save();
    res.status(200).json({ message: "List item updated  successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// delete a item in list
const deleteListItem = asyncHandler(async (req, res) => {
  try {
    const list = await List.findById(req.params.listId);
    if (!list) {
      return res.status(404).json({ message: "list not found" });
    }
    if (
      list.lists.filter((item) => item._id.toString() === req.params.itemId)
    ) {
      list.lists = list.lists.filter(
        (item) => item._id.toString() !== req.params.itemId
      );
    }
    await list.save();
    res.status(200).json({ message: "List item  deleted  successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export {
  getLists,
  createList,
  addListItem,
  deleteList,
  updateListItem,
  deleteListItem,
};
