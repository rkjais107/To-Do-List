import asyncHandler from "express-async-handler";
import List from "../models/listModel.js";
import User from "../models/userModel.js";

// @desc Get a list
// @route GET /api/list
// @access Public
const getLists = asyncHandler(async (req, res) => {
  try {
    // console.log(req.user);
    const user = await User.findById(req.user.userId);
    // console.log(user);
    if (!user) return res.status(404).json({ message: "User not found" });
    const todolists = user.todolists;
    res.json(todolists);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @desc Get a list
// @route GET /api/list/:id
// @access Public
const getList = asyncHandler(async (req, res) => {
  try {
    const list = await List.findById(req.params.id);
    if (!list) {
      return res.status(404).json({ message: "list not found" });
    }
    res.json(list);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @desc  Create a list
// @route POST /api/list
// @access Public
const createList = asyncHandler(async (req, res) => {
  try {
    const user = await User.findById(req.user.userId);
    // console.log(user);
    if (!user) return res.status(404).json({ message: "User not found" });
    // console.log(req.body);
    const { listname, content, timestamp } = req.body;
    const newListItem = {
      content,
      timestamp,
    };
    const todolists = {
      listname: listname,
      lists: [newListItem],
    };
    user.todolists.push(todolists);
    await user.save();
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
    const { content, timestamp } = req.body;
    const list = await List.findById(req.params.id);
    if (!list) {
      return res.status(404).json({ message: "list not found" });
    }
    const newListItem = {
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
    const { content, timestamp } = req.body;
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

// get a item in list
const getListItem = asyncHandler(async (req, res) => {
  try {
    const list = await List.findById(req.params.listId);
    if (!list) {
      return res.status(404).json({ message: "list not found" });
    }
    if (
      list.lists.filter((item) => item._id.toString() === req.params.itemId)
    ) {
      res
        .status(200)
        .send(
          list.lists.filter(
            (item) => item._id.toString() === req.params.itemId
          )[0]
        );
    } else {
      res.status(404).json({ message: "List item  not found." });
    }
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
  getList,
  getListItem,
};
