const express = require('express');
const bodyParser = require('body-parser');
const StoryRouter = express.Router();

StoryRouter.use(bodyParser.json());
const Story = require('../models/stories');

StoryRouter
    .get("/", function (req, res, next) {
        Story.find({})
            .then((stories) => {

                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');

                res.json(stories);
            }), (err) => next(err)
                .catch((err) => next(err));
    })

module.exports = StoryRouter