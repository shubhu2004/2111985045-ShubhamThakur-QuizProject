const express = require('express');
const mongoose = require('mongoose');
const config = require('./config'); // Assuming you have a config file
const authRoutes = require('./routes/authRoutes'); // Assuming you have authentication routes
const quizRoutes = require('./routes/quizRoutes'); // Assuming you have quiz routes

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/quiz', quizRoutes);

// MongoDB Connection
mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Failed to connect to MongoDB:', err));

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Export the app object
module.exports = app;
