const express = require('express');
const router = express.Router();
const Cost = require('../models/cost.js');

router.get('/', async (req,res) =>
{
    const { user_id, year, month} = req.query;

    try
    {
        const report = await Cost.find({ used_id, year, month }).select('category day description sum -_id');
        const formattedReport = report.reduce( (account, cost) =>
        {
            if(!account[cost.category])
            {
                account[cost.category] = [];
            }

            account[cost.category].push(cost);
            return account;
        }, {});
        
        res.json(formattedReport);
    }
    catch (err)
    {
        res.status(500).json({message: err.message});
    }
});

module.exports = router;