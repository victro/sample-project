const User = require('../models/user');
const missingParamsError = require('../helpers/helpers').missingParamsError;

const createUser = async (request, response) => {
    try {
        const user = await User.create(request.body);
        if (user) {
            response.status(200).json({ success: true, user})
        }
    } catch(err) {
        missingParamsError(response, err);
    }
};

const getUsers = async (request, response) => {
    try {
        const users = await User.find({});
        if (users) {
            response.status(200).json({ success: true, users });
        }
    } catch (err) {
        missingParamsError(response, err);
    }
};

module.exports = {
    createUser,
    getUsers
}