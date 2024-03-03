const express = require('express');
const router = express.Router();
const cost = require('../models/cost');

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
        
    }
})