const express = require('express');
const loops = require("loops");

const app = express();
const newsletter = (app, loops) => {

    app.post('/newsletter/subscribe', async (req, res) => {
        const email = req.body.email;
        const resp = await loops.createContact(email);
        res.status(200).send(resp);
    });
};

module.exports = newsletter;
