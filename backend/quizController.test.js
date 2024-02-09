const request = require('supertest');
const app = require('../backend/app'); // Assuming your Express app is exported from 'app.js'
const Quiz = require('../backend/controllers/quizController');

// Mock data for testing
const mockQuizData = [
    { text: 'Question 1', options: ['Option A', 'Option B', 'Option C', 'Option D'], correctOptionIndex: 0 },
    { text: 'Question 2', options: ['Option A', 'Option B', 'Option C', 'Option D'], correctOptionIndex: 1 },
    { text: 'Question 3', options: ['Option A', 'Option B', 'Option C', 'Option D'], correctOptionIndex: 2 },
    { text: 'Question 4', options: ['Option A', 'Option B', 'Option C', 'Option D'], correctOptionIndex: 3 },
    { text: 'Question 5', options: ['Option A', 'Option B', 'Option C', 'Option D'], correctOptionIndex: 0 },
];

// Mock Quiz model functions
jest.mock('../backend/controllers/quizController', () => ({
    aggregate: jest.fn(() => mockQuizData),
}));

describe('Quiz Controller', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('GET /api/quiz', () => {
        it('should return random quiz questions', async () => {
            const response = await request(app).get('/api/quiz');
            expect(response.status).toBe(200);
            expect(response.body).toEqual(mockQuizData);
        });

        it('should handle errors', async () => {
            Quiz.aggregate.mockRejectedValueOnce(new Error('Database error'));
            const response = await request(app).get('/api/quiz');
            expect(response.status).toBe(500);
            expect(response.body).toEqual({ message: 'Internal server error' });
        });
    });
});
