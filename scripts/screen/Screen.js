var Screen;
Screen = (function() {
  function Screen() {}
  Screen.prototype.init = function(game) {
    this.game = game;
    return console.log("new Screen (base)");
  };
  Screen.prototype.setScreen = function(screen) {
    return this.game.setScreen(screen);
  };
  Screen.prototype.removed = function() {};
  Screen.prototype.render = function(ctx) {};
  Screen.prototype.tick = function(input) {};
  return Screen;
})();