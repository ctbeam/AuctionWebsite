'use strict';

const User = require('../models/user'),
    Sell = require('../models/sell'),
    mongoose = require('mongoose');

mongoose.Promise = global.Promise;

exports.createSell = function(sell, owner) {
    let today = Date.now();
    console.log(today);
    let tomorrow = today + (12 * 60 * 60 * 1000);
    console.log(tomorrow);

    const newSell = {
        title: sell.title,
        state: sell.state,
        description: sell.description,
        imageUrl: sell.imageUrl,
        startPrice: sell.startPrice,
        endPrice: sell.startPrice,
        createdAt: today,
        finishedAt: tomorrow
    };

    if (owner) {
        newSell.owner = {
            email: owner.email,
            userImageUrl: owner.imageUrl,
            role: owner.role
        }
    }

    return new Promise((resolve, reject) => {
        Sell.create(newSell, (err, sell) => {
            if (err) {
                return reject(err);
            }

            return resolve(sell);
        });
    });
}

exports.getAllSells = function() {
    return new Promise((resolve, reject) => {
        Sell.find({}).sort({ createdAt: -1 }).exec((err, sells) => {
            if (err) {
                return reject(err);
            }

            return resolve(sells);
        });
    });
}

exports.sellById = function(sellId) {
    return new Promise((resolve, reject) => {
        Sell.findById(sellId, (err, sell) => {
            if (err) {
                return reject(err);
            }

            return resolve(sell);
        });
    });
}

exports.bidSell = function(userToBeAdded, sellId, sum) {
    return new Promise((resolve, reeject) => {
        let buyer = {
            email: userToBeAdded.email,
            userId: userToBeAdded.Id
        }
        Sell.update({ '_id': sellId }, { $push: { 'buyer': buyer }, $inc: { 'endPrice': +sum } }, { upsert: true },
            function(err, sell) {
                if (err) {
                    console.log(err);
                }
                resolve(sell);
            });
    });
}

exports.addSellToUser = function(user, sell) {
    return new Promise((resolve, reeject) => {

        let sellToAdd = {
            sellId: sell._id,
            sellTitle: sell.title,
            sellImageUrl: sell.imageUrl,
            sellCurrentPrice: sell.endPrice,
            sellCurrentDate: sell.finishedAt
        }
        console.log(sellToAdd);
        User.update({ '_id': user._id }, { $push: { 'sells': sellToAdd } }, { upsert: true },
            function(err, User) {
                if (err) {
                    console.log(err);
                }

                resolve(User);
            });
    });
}