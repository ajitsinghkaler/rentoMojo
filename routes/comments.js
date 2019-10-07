const express = require('express');
const bodyParser = require('body-parser');
const CommentRouter = express.Router();
const Comment = require('../models/comment');
CommentRouter.use(bodyParser.json());
CommentRouter.route('/')
    .get((req, res, next) => {
        Comment.find({ story: req.query.id })
            .then((comments) => {
                console.log(req.query.id, "params")
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(comments);
            }), (err) => next(err)
                .catch((err) => next(err));
    })
    .post((req, res, next) => {
        console.log("post comment ", req.body);
        const newComment = {
            comment: req.body.comment,
            author: "author",
            parentComment: req.body.parentComment,
            story: req.body.story
        };
        Comment.create(newComment).then((comments) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(comments);
        }), (err) => next(err)
            .catch((err) => next(err));
    });

CommentRouter.route('/:commentId')
    .post((req, res, next) => {
        console.log("post comment ", req.body);
        Comment.findByIdAndUpdate(req.params.commentId, {
            $set: req.body
        }, { new: true }).then((comments) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(comments);
        }), (err) => next(err)
            .catch((err) => next(err));
    })
    .delete((req, res, next) => {
        Comment.findByIdAndRemove(req.params.commentId)
            .then((comment) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(comment);
            }, (err) => next(err))
            .catch((err) => next(err));

    })

module.exports = CommentRouter