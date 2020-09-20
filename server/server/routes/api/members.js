const express = require("express"),
  router = express.Router(),
  Member = require("../../models/Member");
const passport = require("passport");
const passportJWT = require("passport-jwt");
const jwt = require("jsonwebtoken");
const ExtractJwt = passportJWT.ExtractJwt; //extract the payload in the jwt token
const jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
jwtOptions.secretOrKey = "thisisthesecretkey";

router.use(passport.initialize());

//endpoint to retrieve members (for testing purposes)
router.get("/", (req, res) => {
  Member.find({}, "firstName lastName email password", (error, member) => {
    if (error) {
      console.log(error);
    }
    res.send({
      member,
    });
  });
});

//endpoint to enable a member to register
router.post("/register", (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const password = req.body.password;
  const newMember = new Member({
    firstName,
    lastName,
    email,
    password,
  });
  Member.createMember(newMember, (error, member) => {
    if (error) {
      console.log(error);
    }
    res.send({ member });
  });
});

//endpoint to enable a member to login
router.post("/login", (req, res) => {
  if (req.body.email && req.body.password) {
    const email = req.body.email;
    const password = req.body.password;
    //checks to see if the member with the given email exists
    Member.fetchMemberByEmail(email, (err, member) => {
      if (!member) {
        //if member does not exist in our database
        res.status(404).json({ message: "Member does not exist" });
      } else {
        //compares the password we provided with the members password in the app
        Member.comparePW(password, member.password, (error, isMatch) => {
          if (error) throw error;
          //signs the user's payload with the jwt signature, generates a token, and responds with that token
          if (isMatch) {
            const payload = { id: member.id };
            const token = jwt.sign(payload, jwtOptions.secretOrKey);
            res.json({ message: "ok", token });
            //if passwords do not match
          } else {
            res.status(401).json({ message: "Incorrect Password" });
          }
        });
      }
    });
  }
});

//Delete a Volcano (for testing purposes)
router.delete("/:id", (req, res) => {
  Member.remove(
    {
      _id: req.params.id,
    },
    function (error, member) {
      if (error) {
        console.error(error);
      }
      res.send(member);
    }
  );
});

module.exports = router;
