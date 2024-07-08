const express = require('express');
const router = express.Router();
const Member = require('../models/Member');

router.get('/', async (req, res) => {
  try {
    const members = await Member.find();
    res.json(members);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  const member = new Member({
    uniqueIdentifier: req.body.uniqueIdentifier,
    lastName: req.body.lastName,
    firstName: req.body.firstName,
    address: req.body.address,
    dateOfBirth: req.body.dateOfBirth,
    gender: req.body.gender,
    gymnasiumId: req.body.gymnasiumId,
  });
  try {
    const newMember = await member.save();
    res.status(201).json(newMember);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const member = await Member.findById(req.params.id);
    if (!member) return res.status(404).json({ message: 'Member not found' });

    member.uniqueIdentifier = req.body.uniqueIdentifier || member.uniqueIdentifier;
    member.lastName = req.body.lastName || member.lastName;
    member.firstName = req.body.firstName || member.firstName;
    member.address = req.body.address || member.address;
    member.dateOfBirth = req.body.dateOfBirth || member.dateOfBirth;
    member.gender = req.body.gender || member.gender;
    member.gymnasiumId = req.body.gymnasiumId || member.gymnasiumId;

    const updatedMember = await member.save();
    res.json(updatedMember);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const member = await Member.findById(req.params.id);
    if (!member) return res.status(404).json({ message: 'Member not found' });

    await member.remove();
    res.json({ message: 'Member deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
