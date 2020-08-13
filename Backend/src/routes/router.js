const router = require('express').Router();
const mongoose = require('mongoose');

//controllers
const auth = require('../controllers/auth');

// End point handler
const handleEndpoint = (request, response, callback) => {
    console.log('****handle end point****')
    console.log(mongoose)
    mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true
    });

    mongoose.connection.once('open', () => {
        callback(request, response);
    });
};

// End points

// authentication
router.route('/login')
    .post((req, res) => handleEndpoint(req, res, auth.authenticateAdmin));


module.exports = router;