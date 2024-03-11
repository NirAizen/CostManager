const express = require('express');
const router = express.Router();
const Cost = require('../models/cost.js');

const categoryOptions = ['food', 'health', 'housing', 'sport', 'education', 'transportation', 'other'];

router.get('/', async (req, res) => {
    const { user_id, year, month } = req.query;

    try {
        const formattedReport = {};
        categoryOptions.forEach(category =>
        {
            formattedReport[category] = [];
        });

        // Find costs for the user
        const report = await Cost.find({ user_id, year, month }).select('category day description sum id');

        // Iterating over the user report, and pushing the cost report to the formattedReport
        report.forEach(cost => {
            formattedReport[cost.category].push(cost);
        });

        res.json(formattedReport);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
