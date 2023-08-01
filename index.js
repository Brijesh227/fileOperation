// TASK 1
require('dotenv').config();
const express = require('express');

const app = express();
app.use((req, res, next) => {
    console.log("hello Word!")
    res.send("hello Word!");
    //next();
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
