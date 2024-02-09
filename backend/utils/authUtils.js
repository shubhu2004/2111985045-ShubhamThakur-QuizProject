const jwt = require('jsonwebtoken');
const config = require('../config');

// Generate JWT token
exports.generateToken = (userId) => {
    return jwt.sign({ userId }, config.jwtSecret, { expiresIn: '1h' });
};
