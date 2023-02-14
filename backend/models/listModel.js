import mongoose from "mongoose";
const Schema = mongoose.Schema;
const listSchema = new Schema({
  listname: String,
  lists: [
    {
      content: String,
      timestamp: String,
      createdAt: { type: Date, default: Date.now() },
    },
  ],
});
const List = mongoose.model("List", listSchema);

export default List;
