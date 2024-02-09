const express = require('express');
const router = express.Router();
const path = require('path'); // Import path module for resolving file paths
const authControllerPath = path.resolve(__dirname, '../controllers/authController'); // Resolve the path to authController.js

// Attempt to import authController
let authController;
try {
    authController = require(authControllerPath);
} catch (error) {
    console.error('Error importing authController:', error);
}

// Check if authController was successfully imported
if (!authController) {
    console.error('authController not imported');
} else {
    // Register a new user
    router.post('/register', authController.register);

    // Login user
    router.post('/login', authController.login);
}

module.exports = router;
