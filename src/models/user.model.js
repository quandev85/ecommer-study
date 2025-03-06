const { Schema, model } = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
const userSchema = new Schema({
  name: {
    type: String,
    trim: true,
    maxLength: 150,
  },
  email: {
    type: String,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'active',
  },
  verify: {
    type: Schema.Types.Boolean,
    default: false,
  },
  roles: {
    type: Array,
    default: [],
  },
});

//Export the model
module.exports = model('User', userSchema);
