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
var scenes;
(function (scenes) {
    /**
     * Class for Game Over scene
     *
     * @export
     * @class GameOver
     * @extends {objects.Scene}
     */
    class GameOver extends objects.Scene {
        // CONSTRUCTOR
        /**
         * Creates an instance of Game Over scene
         * @memberof GameOver
         */
        constructor() {
            super();
            // initialize label
            this._gameOverLabel = new objects.Label();
            this._btnRestart = new objects.Button();
            this._btnMain = new objects.Button();
            // initialize background
            this._background = new createjs.Bitmap(config.Game.ASSETS.getResult("bgGameOver"));
            // initialize manager
            this._scoreBoard = new managers.ScoreBoard();
            this.Start();
        }
        // PUBLIC METHODS
        /**
         * Start method of Game Over scene
         *
         * @memberof GameOver
         */
        Start() {
            // set current scene to this
            config.Game.CURRENT_SCENE = this;
            // set label
            this._gameOverLabel = new objects.Label("Game Over", "40px", "Consolas", "red", 300, 80, true);
            this._btnRestart = new objects.Button(config.Game.ASSETS.getResult("btnRestart"), 300, 460, true);
            this._btnMain = new objects.Button(config.Game.ASSETS.getResult("btnMain"), 300, 520, true);
            // set high score and score
            this._scoreBoard.HighScore = config.Game.HIGH_SCORE;
            this._scoreBoard.Score = config.Game.SCORE;
            this.Main();
        }
        /**
         * Update method of Game Over scene
         *
         * @memberof GameOver
         */
        Update() { }
        /**
         * Main method of Game Over scene
         *
         * @memberof GameOver
         */
        Main() {
            // add elements to display
            this.addChild(this._background);
            this.addChild(this._gameOverLabel);
            this.addChild(this._btnRestart);
            this.addChild(this._btnMain);
            this.addChild(this._scoreBoard.HighScoreLabel);
            this.addChild(this._scoreBoard.CurrentScoreLabel);
            // when restart button is clicked, reset values, play button sound and switch scene
            this._btnRestart.on("click", () => {
                this.ResetValues();
                let buttonSound = createjs.Sound.play("buttonSound");
                buttonSound.volume = 0.2; // 20% volume
                config.Game.SCENE_STATE = scenes.State.PLAY;
            });
            // when main button is clicked, reset values, play button sound and switch scene
            this._btnMain.on("click", () => {
                this.ResetValues();
                let buttonSound = createjs.Sound.play("buttonSound");
                buttonSound.volume = 0.2; // 20% volume
                config.Game.SCENE_STATE = scenes.State.MAIN;
            });
        }
        /**
         * Cleam method of Game Over scene
         *
         * @memberof GameOver
         */
        Clean() {
            // remove all elements
            this.removeAllChildren();
        }
        /**
         * Method for resetting values
         *
         * @memberof GameOver
         */
        ResetValues() {
            config.Game.LIVES = 3;
            config.Game.SCORE = 0;
            config.Game.BULLET_NUMBER = 20;
        }
    }
    scenes.GameOver = GameOver;
})(scenes || (scenes = {}));
//# sourceMappingURL=GameOver.js.map