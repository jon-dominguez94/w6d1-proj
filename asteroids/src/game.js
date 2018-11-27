const Asteroid = require("./asteroid.js");

function Game() {
  this.asteroids = addAsteroids();
}

Game.DIM_X = 500;
Game.DIM_Y = 500;
Game.NUM_ASTEROIDS = 10;

Game.prototype.addAsteroids = function() {
  const asteroids = [];
  while(asteroids.length !== NUM_ASTEROIDS){
    const pos = [randomPos(Game.DIM_X), randomPos(Game.DIM_Y)];
    const asteroid = new Asteroid({pos: pos});
    asteroids.push(asteroid);
  }
  return asteroids;
};

Game.prototype.randomPos = function(max) {
  return Math.floor(Math.random() * Math.floor(max));
};
