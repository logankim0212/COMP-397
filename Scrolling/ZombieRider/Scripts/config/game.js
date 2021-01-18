"use strict";
/**
 * Logan J. Kim
 * 300973239
 * April 4, 2020
 *
 * Description:
 * Zombie Rider is a 2-dimensional top-down single player scrolling game designed with Days Gone theme.
 * This game contains 5 different scenes: splash, start, instruction, play and game over.
 * Player will lose once their health goes down to 0; however, player can replay the game
 * again and again until they reach their desired score.
 *
 * Versions:
 * v1.0 Zombie Rider Alpha Release
 */
var config;
(function (config) {
    /**
     * Class containing all shared variables across classes and scenes
     *
     * @export
     * @class Game
     */
    class Game {
    }
    // Canvas variables
    Game.SCREEN_WIDTH = 600;
    Game.SCREEN_HEIGHT = 600;
    // Game elements
    Game.FPS = 60; // 60 Frames per second
    Game.VERTICAL_SPEED = 10; // 10 Frames per second
    // Public static MOVING_TIME: number = 0.1; // when using mouse
    Game.MOVING_TIME = 7; // when using keyboard
    Game.BULLET_SPEED = -10;
    Game.ZOMBIE_NUMBER = 8;
    Game.BULLET_NUMBER = 20;
    // Scoreboard elements
    Game.LIVES = 3;
    Game.SCORE = 0;
    Game.HIGH_SCORE = 0;
    // Status elements
    Game.COLLISION_STATUS = false;
    Game.SHOOTING_STATUS = false;
    Game.BGM_STATUS = false;
    Game.CHEAT_ENABLED = false;
    Game.INVINCIBLE_ENABLED = false;
    Game.SPECIAL_ENABLED = false;
    config.Game = Game;
})(config || (config = {}));
//# sourceMappingURL=game.js.map