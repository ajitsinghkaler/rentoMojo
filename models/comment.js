const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var commentSchema = new Schema({
    comment:  {
        type: String,
        required: true
    },
    author:  {
        type: String,
        required: true
    },
    parentComment:{
        type: String,
    },
    childComments:{
        type: [String],
    },
    story:{
        type:String,
        required: true
    }
}, {
    timestamps: true
});

var Comments = mongoose.model('Comment', commentSchema);

module.exports = Comments;