const express = require('express');
const router = express.Router();
const User = require('../models/user'); 


router.post('/', async (req, res) => {
  try {
    const newUser = new User({
      id: 123123,
      first_name: 'moshe',
      last_name: 'israeli',
      birthday: new Date('1990-01-10')
    });

    await newUser.save();

    res.status(200).json({ message: 'User added successfully' });
  } 
  catch (err) {
    res.status(500).json({message: err.message});
  }
});

module.exports = router;