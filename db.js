import mongoose from "mongoose";
import dotenve from "dotenv";

dotenve.config();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useFindAndModify: false
});


const db = mongoose.connection;

const handleOpen = () => console.log("connected to DB");
const handleError = () => console.log(`Error  ${error}`);


db.once("open", handleOpen)
db.on('error', handleError)