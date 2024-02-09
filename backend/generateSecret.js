const crypto = require('crypto');

// Generate a random string of specified length
const generateRandomString = (length) => {
    return crypto.randomBytes(Math.ceil(length / 2))
        .toString('hex') // Convert to hexadecimal format
        .slice(0, length); // Trim to desired length
};

// Usage example: generate a 32-character random string
const jwtSecret = generateRandomString(32);
console.log(jwtSecret);
