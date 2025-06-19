const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(cors());
const boardRoutes = require("./routes/boardRoutes");
const cardRoutes = require("./routes/cardRoutes");
const commentRoutes = require("./routes/commentRoutes");

app.use("/boards", boardRoutes);
app.use("/cards", cardRoutes);
app.use("/comments", commentRoutes);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
