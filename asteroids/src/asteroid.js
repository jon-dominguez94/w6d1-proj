const Util = require("./util.js");
const MovingObject = require("./moving_object.js");

Util.inherits(Asteroid, MovingObject);

function Asteroid(options) {
  this.COLOR = "red";
  this.RADIUS = 7;
  options.color = this.COLOR;
  options.radius = this.RADIUS;
  options.vel = Util.randomVec(50);
  MovingObject.call(this, options);
}
//
// Asteroid.prototype.isBumpy = function() {
//   console.log("true");
//   return true;
// };
// 
// let opts = {
//   pos: [250,250],
//   vel: [0,0],
//   radius: 5,
//   color: "red"
// };
//
// const m = new MovingObject(opts);
// const a = new Asteroid(opts);
// window.a = a;
// a.isBumpy();

module.exports = Asteroid;
