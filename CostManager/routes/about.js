/*
 * Developers:
 * - First Name: Snir
 * - Last Name: Taub
 * - ID: 207332107
 * 
 * - First Name: Nir
 * - Last Name: Aizen
 * - ID: 313272537
 */

const express = require('express');
const router = express.Router();

// Define a route handler for GET requests to the root URL ('/')
router.get('/', (req,res) =>
{
    // Define an array of developer objects
    const developers = [
        {firstname: 'Snir', lastname: 'Taub', id: "207332107", email: 'Snirtaub@gmail.com'},
        {firstname: 'Nir', lastname: 'Aizen', id: "313272537", email: 'NirAizen@gmail.com'}
    ];

    res.json(developers);
});

module.exports = router;