console.log("Webpack is working!");
const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js");
const Game = require("./game.js");

window.MovingObject = MovingObject;
window.Game = Game;

document.addEventListener("DOMContentLoaded", function(event) {
  const canvas = document.getElementById("game-canvas");
  const ctx = canvas.getContext("2d");

  window.canvas = canvas;
  window.ctx = ctx;
});
