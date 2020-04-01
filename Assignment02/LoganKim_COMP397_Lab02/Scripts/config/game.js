"use strict";
var config;
(function (config) {
    class Game {
    }
    Game.SCREEN_WIDTH = 600;
    Game.SCREEN_HEIGHT = 600;
    Game.FPS = 60; // 60 Frames per second
    Game.MOVING_TIME = 0.1;
    Game.ZOMBIE_NUMBER = 6;
    Game.LIVES = 3;
    Game.SCORE = 0;
    Game.HIGH_SCORE = 0;
    Game.COLLISION_STATUS = false;
    config.Game = Game;
})(config || (config = {}));
//# sourceMappingURL=game.js.map