import express from "express";
import cors from "cors";
const port = 3002;

const app = express();

app.use(cors({ origin: "*", credentials: true }));

app.get("/", (req, res) => {
  res.send("heloo world");
});

app.listen(port, () => console.log(`server start ${port}`));
