const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const { generateRoute, newsletter } = require('./newsletters/newsletter');
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;


app.use(express.json());
app.use(cors());
// app.post('/generate', generateRoute);
newsletter(app);

app.listen(port, "0.0.0.0", function () {
    console.log(`Server is listening on port ${port}`)
  });