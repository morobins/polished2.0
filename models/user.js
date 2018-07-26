const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema({
  /* 
    Define your user information fields for the schema here, DO NOT MAKE "username" and "password" fields, since passport will set those for you    
  */
 userProds: [
  {
    // Store ObjectIds in the array
    type: Schema.Types.ObjectId,
    // The ObjectIds will refer to the ids in the Note model
    ref: "UserProduct"
  }
]

});

// Set up passport to 
User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);