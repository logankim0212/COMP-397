"use strict";
var config;
(function (config) {
    class Game {
    }
    Game.SCREEN_WIDTH = 600;
    Game.SCREEN_HEIGHT = 600;
    Game.FPS = 60; // 60 Frames per second
    Game.VERTICAL_SPEED = 10; // 10 Frames per second
    // public static MOVING_TIME: number = 0.1; // when using mouse
    Game.MOVING_TIME = 7; // when using keyboard
    Game.BULLET_SPEED = -8;
    Game.ZOMBIE_NUMBER = 7;
    Game.BULLET_NUMBER = 20;
    Game.LIVES = 3;
    Game.SCORE = 0;
    Game.HIGH_SCORE = 0;
    Game.COLLISION_STATUS = false;
    Game.SHOOTING_STATUS = false;
    Game.BGM_STATUS = false;
    Game.CHEAT_ENABLED = false;
    Game.INVINCIBLE_ENABLED = false;
    Game.SPECIAL_ENABLED = false;
    config.Game = Game;
})(config || (config = {}));
//# sourceMappingURL=game.js.map