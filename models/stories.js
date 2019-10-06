const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var storySchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    totalComments: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});

var Stories = mongoose.model('Stories', storySchema);

module.exports = Stories;