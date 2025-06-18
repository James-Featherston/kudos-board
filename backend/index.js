const express = require('express');
const cors = require('cors')
const app = express();
const PORT = 3000
app.use(express.json())
app.use(cors())
const boardRoutes = require('./routes/BoardRoutes')
const cardRoutes = require('./routes/CardRoutes')

app.use("/boards", boardRoutes)
app.use("/cards", cardRoutes)

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.listen(PORT, () => {
    console.log("Server is running.");
})