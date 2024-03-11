const express = require('express');
const router = express.Router();
const Cost = require('../models/cost.js');


// Add validations if needed.
router.post('/', async (req, res) =>
{
    const {
        user_id,
        year,
        month,
        day,
        description,
        category,
        sum
    } = req.body;

    try
    {
        const newCost = new Cost(
            {
                user_id,
                year,
                month,
                day,
                description,
                category,
                sum
            }
        );

        await newCost.save();

        res.status(201).json(newCost, categories);
    }
    catch (err)
    {
        res.status(500).json({ message: err.message});
    }
});

module.exports = router;