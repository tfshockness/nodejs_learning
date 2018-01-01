const { User } = require('../models/user');

/**
 * 
 * @param {Object} user - email and password 
 */
module.exports.createUser = async (user) => {
    try {
        const newUser = await new User(user).save();
        console.log(`User saved: ${JSON.stringify(newUser, undefined, 2)}`);
    } catch (e) {
        console.log(`Unable to save the user: ${e}`);
    }
}
