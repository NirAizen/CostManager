const express = require('express');
const router = express.Router();
const Cost = require('../models/cost');

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
        const newCost = new Cost
    }
})