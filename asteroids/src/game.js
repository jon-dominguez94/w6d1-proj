const Asteroid = require("./asteroid.js");

function Game() {
  this.addAsteroids();
}

Game.DIM_X = 500;
Game.DIM_Y = 500;
Game.NUM_ASTEROIDS = 10;

Game.prototype.addAsteroids = function() {
  const asteroids = [];
  while(asteroids.length < Game.NUM_ASTEROIDS){
    const pos = [this.randomPos(Game.DIM_X), this.randomPos(Game.DIM_Y)];
    const asteroid = new Asteroid({pos: pos});
    asteroids.push(asteroid);
  }
  this.asteroids = asteroids;
};

Game.prototype.randomPos = function(max) {
  return Math.floor(Math.random() * Math.floor(max));
};

Game.prototype.draw = function(ctx) {
  ctx.clearRect(0,0, Game.DIM_X, Game.DIM_Y);
  this.asteroids.forEach(el => {
    el.draw(ctx);
  });
};

module.exports = Game;
