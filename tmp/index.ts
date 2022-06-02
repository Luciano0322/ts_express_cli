import express from "express";

const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("Hello from tmp");
});

app.listen(port, () => {
  console.log(`tmp listening at http://localhost:${port}`);
});
