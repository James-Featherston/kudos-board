const express = require('express');
const app = express();
const PORT = 3000
app.use(express.json())
const boardRoutes = require('./routes/BoardRoutes')

app.use("/boards", boardRoutes)


app.get("/", (req, res) => {
    res.send("Hello World");
})


app.listen(PORT, () => {
    console.log("Server is running.");
})