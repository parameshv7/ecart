import express from "express";
import bodyParser from "body-parser";
import cors from "cors";


import todo from "./routes/todor.js"
const app = express();
const port = 5001;

app.use(bodyParser.json());
app.use(cors());
app.use("/", todo);

app.get("/", (req, res) => res.send("hi"));
app.all("*", (req, res) => res.send("Route does't exist"));

app.listen(port, () =>
  console.log(`Sever is listining on port http://localhost:${port}`)
);
