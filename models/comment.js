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
        type:String
    }
}, {
    timestamps: true
});

var Comments = mongoose.model('Story', commentSchema);

module.exports = Comments;