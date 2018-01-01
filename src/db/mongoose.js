const mongoose = require('mongoose');
const config = require('../lib/config');

mongoose.Promise = global.Promise;
mongoose.connect(config.db);

module.exports = {
    mongoose
}