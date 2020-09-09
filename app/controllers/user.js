const User = require('../models/user');
const setUserInfo = require('../../helpers').setUserInfo;

// User Routes
exports.viewProfile = function(req, res, next) {
    const userEmail = req.params.email;

    User.findOne({ email: userEmail }, (err, user) => {
        if (!user) {
            res.status(400).json({ error: 'No user could be found for this email.' });
            return next(err);
        }
        const userToReturn = setUserInfo(user);
        return res.status(200).json({ user: userToReturn });
    });
};