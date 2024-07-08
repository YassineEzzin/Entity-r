const mongoose = require('mongoose');

const MemberSchema = new mongoose.Schema({
  uniqueIdentifier: { type: String, required: true, unique: true },
  lastName: { type: String, required: true },
  firstName: { type: String, required: true },
  address: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  gender: { type: String, required: true },
  gymnasiumId: { type: mongoose.Schema.Types.ObjectId, ref: 'Gymnasium' },
});

module.exports = mongoose.model('Member', MemberSchema);
