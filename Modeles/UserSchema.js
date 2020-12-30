/* const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({

    email: {
        type : String,
        required : true
    },

    password: {
         type : String,
         required : true

    }

});
const logingSchema = mongoose.model("login" , loginSchema);

module.exports = logingSchema; */


const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;