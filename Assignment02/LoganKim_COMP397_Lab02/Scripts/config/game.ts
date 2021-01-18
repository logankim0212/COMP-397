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

module config {
    /**
     * Class containing all shared variables across classes and scenes
     *
     * @export
     * @class Game
     */
    export class Game {
        // Canvas variables
        public static SCREEN_WIDTH: number = 600;
        public static SCREEN_HEIGHT: number = 600;
        // Game elements
        public static FPS: number = 60; // 60 Frames per second
        public static VERTICAL_SPEED: number = 10; // 10 Frames per second
        // Public static MOVING_TIME: number = 0.1; // when using mouse
        public static MOVING_TIME: number = 7; // when using keyboard
        public static BULLET_SPEED: number = -10;
        public static ZOMBIE_NUMBER: number = 8;
        public static BULLET_NUMBER: number = 20;
        public static ASSETS: createjs.LoadQueue;

        // Scene elements
        public static SCENE_STATE: scenes.State;
        public static CURRENT_SCENE: objects.Scene;

        // Game managers
        public static BULLET_MANAGER: managers.BulletManager;
        public static SCORE_BOARD: managers.ScoreBoard;

        // Scoreboard elements
        public static LIVES: number = 3;
        public static SCORE: number = 0;
        public static HIGH_SCORE: number = 0;

        // Image element
        public static ZOMBIE_ATLAS: createjs.SpriteSheet;

        // Status elements
        public static COLLISION_STATUS: boolean = false;
        public static SHOOTING_STATUS: boolean = false;
        public static BGM_STATUS: boolean = false;
        public static CHEAT_ENABLED: boolean = false;
        public static INVINCIBLE_ENABLED: boolean = false;
        public static SPECIAL_ENABLED: boolean = false;
    }
}