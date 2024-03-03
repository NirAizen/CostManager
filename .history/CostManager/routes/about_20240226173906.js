const express = require('express');
const router = express.Router();

router.get('/', (req,res) =>
{
    const developers = [
        {firstname: 'Snir', lastname: 'Taub', id: "207332107", email: 'Snirtaub@gmail.com'},
        {firstname: 'Nir', lastname: 'Aizen', id: "444444444", email: 'nomail@gmail.com'}
    ];

    res.json(developers)
})