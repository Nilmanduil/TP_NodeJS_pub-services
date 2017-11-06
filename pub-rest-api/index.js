const express = require('express');
const pubService = require('pub-services');
const app = express();

app.get("/pubs", function (req, res) {
    const pubs = pubService.services.getPubs();
    res.status(200).json(pubs);
});

app.listen(3000);