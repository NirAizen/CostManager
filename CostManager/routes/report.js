/*
 * Developers:
 * - First Name: Snir
 * - Last Name: Taub
 * - ID: 207332107
 * 
 * - First Name: Nir
 * - Last Name: Aizen
 * - ID: 313272537
 */

const express = require('express');
const router = express.Router();
const Cost = require('../models/cost');

// Define an array of the category options
const categoryOptions = ['food', 'health', 'housing', 'sport', 'education', 'transportation', 'other'];

// Define a route handler for GET requests to the root URL ('/')
router.get('/', async (req, res) => {

    // Destructure the query parameters to extract user_id, year, and month
    const { user_id, year, month } = req.query;

    try {

        // Create an empty object to store the formatted report
        const formattedReport = {};

        // Initialize each category in the formatted report as an empty array
        categoryOptions.forEach(category =>
        {
            formattedReport[category] = [];
        });

        // Find costs for the user
        const report = await Cost.find({ user_id, year, month }).select('category day description sum id');

        // Iterating over the user report, and pushing the cost report to corresponding caregory in the formatted report.
        report.forEach(cost => {
            formattedReport[cost.category].push(cost);
        });

        // Send a 200 (OK) response with the formatted report in JSON format
        res.status(200).json(formattedReport);
    } catch (err) {
        // If an error occurs, send a 500 (Internal Server Error) response with the error message
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
