import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import route from "./Routes/Routes.js";

const app = express();
app.use(bodyParser.json());
app.use(cors());

dotenv.config();

const PORT = process.env.PORT || 9998;
const URL = process.env.MongoUrl;

mongoose
  .connect(URL)
  .then(() => {
    console.log("Db Connected ..");

    app.listen(PORT, () => {
      console.log(`Server is running on PORT ${PORT}`);
    });
  })
  .catch((error) => console.log(error));

app.use("/api", route);
