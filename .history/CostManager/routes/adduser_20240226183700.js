const express = require('express');
const User = require('./models/user'); 


router.post('/', async (req, res) => {
  try {
    
    const newUser = new User({
      id: 123123,
      first_name: 'moshe',
      last_name: 'israeli',
      birthday: new Date('1990-01-10')
    });

    // Save the new user document to the database
    await newUser.save();

    res.status(200).json({ message: 'User added successfully' });
  } catch (error) {
    console.error('Error adding user:', error);
    res.status(500).json({ message: 'Failed to add user' });
  }
});