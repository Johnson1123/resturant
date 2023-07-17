import express from "express";
const port = 3002;

const app = express();

app.get("/", (req, res) => {
  res.send("heloo world");
});

app.listen(port, () => console.log(`server start ${port}`));
