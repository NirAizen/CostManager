const express = require('express');
const router = express.Router();

router.get('/', (req,res) =>
{
    const developers = [
        {firstname: 'Snir', lastname: 'Taub', id: "207332107", email: 'Snirtaub@gmail.com'},
    ]
})