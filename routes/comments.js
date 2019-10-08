const express = require('express');
const bodyParser = require('body-parser');
const CommentRouter = express.Router();
const Comment = require('../models/comment');
var authenticate = require('../authenticate');

CommentRouter.use(bodyParser.json());


CommentRouter.route('/')
    .get((req, res, next) => {
        Comment.find({ story: req.query.storyId })
            .then((comments) => {
                console.log(req.query.storyId, "params")
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(comments);
            }), (err) => next(err)
                .catch((err) => next(err));
    })
    .post(authenticate.verifyUser,(req, res, next) => {
        console.log("post comment ", req.body);
        const newComment = {
            comment: req.body.comment,
            // author: "author",
            author: req.user.username,
            parentComment: req.body.parentComment,
            story: req.body.story
        };

        Comment.create(newComment).then((comments) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(comments);
            if (req.body.parentComment) {
                Comment.findById(req.body.parentComment).then(comment => {
                    let childComments = comment
                    childComments.childComments = [...childComments.childComments, comments._id]
                    Comment.findByIdAndUpdate(req.body.parentComment, childComments).then(newcomment => {
                        console.log(newcomment, "newComment-----------------")
                    })
                })
            }
        }), (err) => next(err)
            .catch((err) => next(err));
    });

CommentRouter.route('/:commentId')
    .get((req, res, next) => {
        Comment.find({ _id: req.params.commentId })
            .then((comments) => {
                console.log(req.query.storyId, "params")
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(comments);
            }), (err) => next(err)
                .catch((err) => next(err));
    })
    .post(authenticate.verifyUser,(req, res, next) => {
        console.log("post comment ", req.body);
        Comment.findByIdAndUpdate(req.params.commentId, {
            comment: req.body.comment,
            // author: "author",
            author: req.user.username,
            parentComment: req.body.parentComment,
            story: req.body.story
        }, { new: true }).then((comments) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(comments);
        }), (err) => next(err)
            .catch((err) => next(err));
    })
    .delete(authenticate.verifyUser,(req, res, next) => {
        Comment.findByIdAndRemove(req.params.commentId)
            .then((comment) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json({ status: true });
            }, (err) => next(err))
            .catch((err) => next(err));
    })

module.exports = CommentRouter