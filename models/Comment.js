import mongoos from "mongoose";

const CommentSchema = new mongoos.Schema({
  text: {
    type: String,
    required: "Text is required"
  },
  createAt: {
    type: Date,
    default: Date.now
  }
});

const model = mongoos.model("Comment", CommentSchema);
export default model;