const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const likeSchema = mongoose.Schema({
    userFrom: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    movieId: {
        type: String
    },
    like: {
        type: Boolean
    },
    dislike: {
        type: Boolean
    }
}, { timestamps: true })

const Like = mongoose.model('Like', likeSchema);

module.exports = { Like }