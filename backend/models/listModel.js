import mongoose from "mongoose";
const Schema = mongoose.Schema;
const listSchema = new Schema({
  list: [
    {
      title: String,
      content: String,
      timestamp: String,
      createdAt: { type: Date, default: Date.now() },
    },
  ],
});
const List = mongoose.model("List", listSchema);

export default List;
