const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const SellSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    imageUrl: {
        type: String,
    },
    startPrice: {
        type: Number
    },
    endPrice: {
        type: Number
    },
    createdAt: {
        type: Date,
        required: true
    },
    finishedAt: {
        type: Date,
        required: true
    },
    owner: {
        email: String,
        userImageUrl: String,
        role: [String]
    },
    buyer: {
        email: String,
        userId: String
    }
}, {
    timestamps: true // Saves createdAt and updatedAt as dates. createdAt will be our timestamp.
});

module.exports = mongoose.model('Sell', SellSchema);