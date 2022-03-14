const express = require("express");
const router = express.Router();

const DroneModel = require("../models/Drone.model");

router.get("/drones", async (req, res, next) => {
  // Iteration #2: List the drones
  try {
    const findAllDrones = await DroneModel.find();
    console.log(findAllDrones);
    res.render("/drones/list", { findAllDrones });
  } catch (err) {
    console.log(err);
  }
});

router.get("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drones/create-form");
});

router.post("/drones/create", async (req, res, next) => {
  // Iteration #3: Add a new drone
  try {
    const { name, propellers, maxSpeed } = req.body;
    await DroneModel.create({
      name: name,
      propellers: propellers,
      maxSpeed: maxSpeed,
    });
    res.redirect("/drones");
  } catch (err) {
    console.log("An error occured");
    res.render("drones/create-form");
  }
});

router.get("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post("/drones/:id/delete", (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
