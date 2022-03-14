// Iteration #1
require("../db");
const Drone = require("../models/Drone.model");
const mongoose = require("mongoose");

const drones = [
  { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
  { name: "Racer 57", propellers: 4, maxSpeed: 20 },
  { name: "Courier 3000i", propellers: 6, maxSpeed: 18 },
];

async function main() {
  try {
    await Drone.create(drones);
    console.log("All the drones were seeded.");
  } catch (err) {
    console.log("There was a mistake seeding.");
  } finally {
    mongoose.disconnect();
    console.log("The connection is closed now.");
  }
}

main();
