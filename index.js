const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const Chart = require('chart.js');

const app = express();
const PORT = process.env.PORT || 3000;

// MySQL Connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Avdhesh@980',
    database: 'your_database'
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

// Routes
// Homepage - Introduction
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Mood Survey Form Submission
app.post('/submit', (req, res) => {
    const { currentMood, mainReason, moodThreeDaysAgo, moodOneWeekAgo } = req.body;

    const query = `INSERT INTO mood_survey (current_mood, main_reason, mood_three_days_ago, mood_one_week_ago) VALUES (?, ?, ?, ?)`;
    connection.query(query, [currentMood, mainReason, moodThreeDaysAgo, moodOneWeekAgo], (error, results) => {
        if (error) {
            console.error('Error inserting mood data:', error);
            res.status(500).send('Internal server error');
            return;
        }
        res.send('Mood survey submitted successfully');
    });
});


// Execute the query inside the route handler
app.get('/mood-data', (req, res) => {
    // Query to fetch daily mood data
    const query = `
        SELECT current_mood, DATE(created_at) AS date, COUNT(*) AS count
        FROM mood_survey
        GROUP BY current_mood, DATE(created_at)
    `;

    // Execute the query
    connection.query(query, (error, results) => {
        if (error) {
            console.error('Error fetching mood data:', error);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
        
        // Send the results to the client as JSON
        res.json(results);
    });
});

// Resources & Support - Guides, Support Services, Events
app.get('/resources', (req, res) => {
    //  code to retrieve resources, support services, and events data
});

// Feedback & Suggestions Form Submission
app.post('/submit-feedback', (req, res) => {
    //  code to handle feedback form submission
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
