import express from "express";

const app = express();
const port = 5500;

app.get("/", (req, res) => {
  return res.json({ message: "Hello From NodeJs" });
});

app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}....`)
);
