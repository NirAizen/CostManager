const express = require('express');
const router = express.Router();
const Cost = require('../models/cost');

router.get('/', async (req,res) =>
{
    const { user_id, year, month} = req.query;

    try
    {
        const report = await Cost.find({ used_id, year, month }).select('category day description sum -_id');
        const formattedReport = report.reduce()
    }
})