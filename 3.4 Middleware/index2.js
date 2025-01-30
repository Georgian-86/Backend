import express from "express";
import morgan from "morgan";

const app = express();
const port = 3000;

// Ensure morgan middleware is placed before any routes
app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
