const express = require('express');
const router = express.Router();
const Cost = require('../models/cost.js');

// Check if any validate required.
router.get('/', async (req,res) =>
{
    const { user_id, year, month } = req.query;

    try
    {   
        // Create a new object using .reduce method, sorted by cost category, there are duplicates in every cost category. 
        const report = await Cost.find({ user_id, year, month }).select('category day description sum -_id');
        const formattedReport = report.reduce( (product, cost) =>
        {
            
           if (!product[cost.category])
           {
                product[cost.category] = [];
           }

           product[cost.category].push(cost);

           return product;

        }, {});
        
        res.json(formattedReport);
    }
    catch (err)
    {
        res.status(500).json({message: err.message});
    }
});

module.exports = router;