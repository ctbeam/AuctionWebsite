'use strict';

const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        lowercase: true,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    firstname: {
        type: String,
    },
    lastname: {
        type: String,
    },
    imageUrl: {
        type: String,
    },
    mobileNumber: {
        type: String,
    },
    address: {
        type: String,
    },
    sells: [{}],
    buys: [{}],
    role: {
        type: String,
        enum: ['Standart', 'Admin'],
        default: 'Standart'
    }
});

// Saves the user's password hashed
UserSchema.pre('save', function(next) {
    const user = this,
        SALT_FACTOR = 5;

    if (!user.isModified('password')) return next();

    bcrypt.genSalt(SALT_FACTOR, function(err, salt) {
        if (err) return next(err);

        bcrypt.hash(user.password, salt, null, function(err, hash) {
            if (err) return next(err);
            user.password = hash;
            next();
        });
    });
});

// Method to compare password for login
UserSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) { return cb(err); }

        cb(null, isMatch);
    });
}

module.exports = mongoose.model('User', UserSchema);