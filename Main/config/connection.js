const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://root:root@loco1.sl4yr12.mongodb.net/');

module.exports = mongoose.connection;
