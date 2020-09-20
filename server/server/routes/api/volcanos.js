const express = require("express"),
  router = express.Router(),
  Volcano = require("../../Models/Volcano");

//Retrieves all volcanos
router.get("/", (req, res) => {
  Volcano.find(
    {},
    "name description image location status elevation price",
    (error, volcanos) => {
      if (error) {
        console.log(error);
      }
      res.send({
        volcanos,
      });
    }
  );
});

//Fetches a single volcano
router.get("/:id", (req, res) => {
  Volcano.findById(
    req.params.id,
    "name description image location status elevation price",
    (error, volcano) => {
      if (error) {
        console.error(error);
      }
      res.send(volcano);
    }
  );
});

//Update volcano
router.put("/:id", (req, res) => {
  Volcano.findById(
    req.params.id,
    "name description image location status elevation price",
    function (error, volcano) {
      if (error) {
        console.error(error);
      }
      volcano.name = req.body.name;
      volcano.description = req.body.description;
      volcano.image = req.body.image;
      volcano.location = req.body.location;
      volcano.status = req.body.status;
      volcano.elevation = req.body.elevation;
      volcano.price = req.body.price;
      volcano.save(function (error) {
        if (error) {
          console.log(error);
        }
        res.send({
          success: true,
        });
      });
    }
  );
});

//Add new volcano
router.post("/", (req, res) => {
  const newVolcano = new Volcano({
    name: req.body.name,
    description: req.body.description,
    image: req.body.image,
    location: req.body.location,
    status: req.body.status,
    elevation: req.body.elevation,
    price: req.body.price,
  });
  newVolcano.save((error, volcano) => {
    if (error) {
      console.log(error);
    }
    res.send(volcano);
  });
});

//Delete a Volcano
router.delete("/:id", (req, res) => {
  Volcano.remove(
    {
      _id: req.params.id,
    },
    function (error, volcano) {
      if (error) {
        console.error(error);
      }
      res.send({ success: true });
    }
  );
});

module.exports = router;
