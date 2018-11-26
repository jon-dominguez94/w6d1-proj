Function.prototype.inherits = function(superClass) {
  function Surrogate() {}
  Surrogate.prototype = superClass.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};

function MovingObject () {}

function Ship () {}
Ship.inherits(MovingObject);

function Asteroid () {}
Asteroid.inherits(MovingObject);

MovingObject.prototype.move = function() {
  console.log("I'm moving");
};

Ship.prototype.honk = function() {
  console.log("HOOOOONK");
};

Asteroid.prototype.crash = function() {
  console.log("CRAAASH");
};
