const ROLE_STANDART = require('./constants').ROLE_STANDART;
const ROLE_ADMIN = require('./constants').ROLE_ADMIN;

// Set user info from request
exports.setUserInfo = function setUserInfo(request) {
    const getUserInfo = {
        _id: request._id,
        email: request.email,
        firstname: request.firstname,
        lastname: request.lastname,
        imageUrl: request.imageUrl,
        mobileNumber: request.mobileNumber,
        address: request.address,
        sells: request.sells,
        buys: request.buys,
        role: request.role
    };

    return getUserInfo;
};

exports.getRole = function getRole(checkRole) {
    let role;

    switch (checkRole) {
        case ROLE_ADMIN:
            role = 1;
            break;
        case ROLE_STANDART:
            role = 1;
            break;
        default:
            role = 1;
    }

    return role;
};