const express = require('express');
const router = express.Router();
const Cost = require('../models/cost.js');

router.post('/', async (req, res) =>
{
    const {
        user_id,
        year,
        month,
        day,
        id,
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
                id,
                description,
                category,
                sum
            }
        );

        await newCost.save();

        res.status(201).json("The cost has been added!");
    }
    catch (err)
    {
        res.status(500).json({ message: err.message});
    }
});

module.exports = router;