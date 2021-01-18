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
var managers;
(function (managers) {
    /**
     * Class for managing score board
     *
     * @export
     * @class ScoreBoard
     */
    class ScoreBoard {
        // CONSTRUCTOR
        /**
         * Creates an instance of ScoreBoard.
         * @memberof ScoreBoard
         */
        constructor() {
            // instantiate variables
            this._lives = config.Game.LIVES;
            this._bullet = config.Game.BULLET_NUMBER;
            this._score = config.Game.SCORE;
            this._highScore = config.Game.HIGH_SCORE;
            // instantiate labels
            this._livesLabel = new objects.Label("Lives: " + this._lives, "20px", "Consolas", "#FFFF00", 30, 20);
            this._bulletLabel = new objects.Label("Bullets: " + this._bullet, "20px", "Consolas", "#FFFF00", 165, 20);
            this._scoreLabel = new objects.Label("Score: " + this._score, "20px", "Consolas", "#FFFF00", 310, 20);
            this._highScoreLabel = new objects.Label("High Score: " + this._highScore, "30px", "Consolas", "#FF4500", 300, 135, true);
        }
        // PUBLIC PROPERTIES
        // getters and setters for all variables
        get Lives() {
            return this._lives;
        }
        set Lives(v) {
            this._lives = v;
            // set shared lives
            config.Game.LIVES = this._lives;
            // update the text of lives label
            this.LivesLabel.text = "Lives: " + this._lives;
        }
        get Bullet() {
            return this._bullet;
        }
        set Bullet(v) {
            this._bullet = v;
            // set shared bullet number
            config.Game.BULLET_NUMBER = this._bullet;
            // update the text of bullet label
            this.BulletLabel.text = "Bullet: " + this._bullet;
        }
        get Score() {
            return this._score;
        }
        set Score(v) {
            this._score = v;
            // set shared score
            config.Game.SCORE = this._score;
            // update the text of score label
            this.ScoreLabel.text = "Score: " + this._score;
        }
        get HighScore() {
            return this._highScore;
        }
        set HighScore(v) {
            this._highScore = v;
            // set high score
            config.Game.HIGH_SCORE = this._highScore;
        }
        // Getter for labels
        get LivesLabel() {
            return this._livesLabel;
        }
        get BulletLabel() {
            return this._bulletLabel;
        }
        get ScoreLabel() {
            return this._scoreLabel;
        }
        get HighScoreLabel() {
            return this._highScoreLabel;
        }
        // method for creating a current score label
        get CurrentScoreLabel() {
            return new objects.Label("This Round Score: " + this._score, "20px", "Consolas", "#FFFF00", 300, 190, true);
        }
    }
    managers.ScoreBoard = ScoreBoard;
})(managers || (managers = {}));
//# sourceMappingURL=ScoreBoard.js.map