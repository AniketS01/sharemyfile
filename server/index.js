import express from "express";
import router from "./routes/routes.js";
import cors from "cors";
import db from "./database/db.js";

const app = express();

app.use(cors());
app.use("/", router);
const PORT = process.env.PORT || 8000;
db();

app.listen(PORT, () => console.log("server started"));
