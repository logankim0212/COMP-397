"use strict";
var managers;
(function (managers) {
    class ScoreBoard {
        // constructor
        constructor() {
            this._lives = config.Game.LIVES;
            this._score = config.Game.SCORE;
            this._highScore = config.Game.HIGH_SCORE;
            this._livesLabel = new objects.Label("Lives: " + this._lives, "20px", "Consolas", "#FFFF00", 30, 20);
            this._scoreLabel = new objects.Label("Score: " + this._score, "20px", "Consolas", "#FFFF00", 450, 20);
            this._highScoreLabel = new objects.Label("High Score: " + this._highScore, "40px", "Consolas", "#FFFF00", 300, 300, true);
        }
        // public properties
        get Lives() {
            return this._lives;
        }
        set Lives(v) {
            this._lives = v;
            config.Game.LIVES = this._lives;
            this.LivesLabel.text = "Lives: " + this._lives;
        }
        get Score() {
            return this._score;
        }
        set Score(v) {
            this._score = v;
            config.Game.SCORE = this._score;
            this.ScoreLabel.text = "Score: " + this._score;
        }
        get HighScore() {
            return this._highScore;
        }
        set HighScore(v) {
            this._highScore = v;
            config.Game.HIGH_SCORE = this._highScore;
        }
        get LivesLabel() {
            return this._livesLabel;
        }
        get ScoreLabel() {
            return this._scoreLabel;
        }
        get highScoreLabel() {
            return this._highScoreLabel;
        }
    }
    managers.ScoreBoard = ScoreBoard;
})(managers || (managers = {}));
//# sourceMappingURL=ScoreBoard.js.map