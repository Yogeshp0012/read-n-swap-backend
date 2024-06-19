const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const { LoopsClient } = require("loops");
const newsletter = require('./newsletters/newsletter');

const app = express();
const port = process.env.PORT || 3000;

const loops = new LoopsClient(process.env.LOOPS_KEY ?? "");

app.use(express.json());
newsletter(app, loops);

app.listen(port, "0.0.0.0", function () {
    console.log(`Server is listening on port ${port}`)
  });
