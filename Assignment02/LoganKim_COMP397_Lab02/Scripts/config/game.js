"use strict";
var config;
(function (config) {
    class Game {
    }
    Game.SCREEN_WIDTH = 600;
    Game.SCREEN_HEIGHT = 600;
    Game.FPS = 60; // 60 Frames per second
    Game.MOVING_TIME = 0.1;
    config.Game = Game;
})(config || (config = {}));
//# sourceMappingURL=game.js.map