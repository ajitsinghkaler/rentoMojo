const express = require('express');
const bodyParser = require('body-parser');
const StoryRouter = express.Router();
const Story = require('../models/stories');
StoryRouter.use(bodyParser.json());
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