import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "./index.js";

dotenv.config();

const Port = process.env.PORT;

const mongooseClient = mongoose.connect(
  process.env.URI,
  {
    useNewUrlParser: true,
  },
  (err) => {
    if (!err) {
      app.listen(process.env.PORT);
      console.log("MongoDB Connection Succeeded.");
    } else {
      console.log("Error in DB connection: " + err);
    }
  }
);
