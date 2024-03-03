const express = require('express');
const router = express.Router();
const Cost = require('../models/cost.js');

router.get('/', async (req,res) =>
{
    const { user_id, year, month} = req.query;

    try
    {
        const report = await Cost.find({ user_id, year, month }).select('category day description sum -_id');
        const formattedReport = report.reduce( (product, cost) =>
        {
            console.log(product);
            console.log(cost);
            console.log(product[cost]);

           if (!product[cost.category])
           {
                product[cost.category] = [];
           }
           
           product[cost.category].push(cost);
        }, {});
        
        res.json(formattedReport);
    }
    catch (err)
    {
        res.status(500).json({message: err.message});
    }
});

module.exports = router;