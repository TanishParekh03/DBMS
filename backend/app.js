const express = require('express');
const dotenv = require('dotenv');
const userRoutes = require('./routes/users/users');
dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
port = process.env.PORT

app.use('/', userRoutes)

app.listen(port, () => {
    console.log("SERVER IS RUNNING")
})
