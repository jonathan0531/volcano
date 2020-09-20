//credit: Full Stack Web Development by Aneeta Sharma
const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");

const Schema = mongoose.Schema;
const MemberSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
});

const Member = mongoose.model("Memeber", MemberSchema);
module.exports = Member;

//using the bcrypt library to convert the password to an encryted string
module.exports.createMember = (newMember, callback) => {
  bcryptjs.genSalt(10, (error, salt) => {
    bcryptjs.hash(newMember.password, salt, (error, hash) => {
      //Store the hashed password
      const newMemberResource = newMember;
      newMemberResource.password = hash;
      newMemberResource.save(callback);
    });
  });
};
//Method that returns the user that has a given email
module.exports.fetchMemberByEmail = (email, callback) => {
  const query = { email };
  Member.findOne(query, callback);
};

//Method that takes the user provided PW and saved PW and returns true or false depending if passwords match
module.exports.comparePW = (candidatePassword, hash, callback) => {
  bcryptjs.compare(candidatePassword, hash, (err, isMatch) => {
    if (err) throw err;
    callback(null, isMatch);
  });
};
