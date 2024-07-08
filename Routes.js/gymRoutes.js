const express = require('express');
const router = express.Router();
const Gymnasium = require('../models/Gymnasium');

router.get('/', async (req, res) => {
  try {
    const gyms = await Gymnasium.find();
    res.json(gyms);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  const gym = new Gymnasium({
    name: req.body.name,
    address: req.body.address,
    phone: req.body.phone,
  });
  try {
    const newGym = await gym.save();
    res.status(201).json(newGym);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
