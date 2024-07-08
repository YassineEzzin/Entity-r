const express = require('express');
const router = express.Router();
const Session = require('../models/Session');

router.get('/', async (req, res) => {
  try {
    const sessions = await Session.find().populate('members coaches');
    res.json(sessions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  const session = new Session({
    typeOfSport: req.body.typeOfSport,
    schedule: req.body.schedule,
    members: req.body.members,
    coaches: req.body.coaches,
  });
  try {
    const newSession = await session.save();
    res.status }
