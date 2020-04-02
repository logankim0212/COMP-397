"use strict";
var scenes;
(function (scenes) {
    class GameOver extends objects.Scene {
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        constructor() {
            super();
            this._gameOverLabel = new objects.Label("Game Over", "40px", "Consolas", "red", 300, 80, true);
            this._btnRestart = new objects.Button(config.Game.ASSETS.getResult("btnRestart"), 300, 460, true);
            this._btnMain = new objects.Button(config.Game.ASSETS.getResult("btnMain"), 300, 520, true);
            this._background = new createjs.Bitmap(config.Game.ASSETS.getResult("bgGameOver"));
            this._scoreBoard = new managers.ScoreBoard();
            this.Start();
        }
        // PRIVATE METHODS
        // PUBLIC METHODS
        // Initializing and Instantiating
        Start() {
            this._scoreBoard.HighScore = config.Game.HIGH_SCORE;
            this._scoreBoard.Score = config.Game.SCORE;
            this.Main();
        }
        Update() {
        }
        Main() {
            this.addChild(this._background);
            this.addChild(this._gameOverLabel);
            this.addChild(this._btnRestart);
            this.addChild(this._btnMain);
            this._btnRestart.on("click", () => {
                this.ResetValues();
                let buttonSound = createjs.Sound.play("buttonSound");
                buttonSound.volume = 0.2; // 20% volume
                config.Game.SCENE_STATE = scenes.State.PLAY;
            });
            this._btnMain.on("click", () => {
                this.ResetValues();
                let buttonSound = createjs.Sound.play("buttonSound");
                buttonSound.volume = 0.2; // 20% volume
                config.Game.SCENE_STATE = scenes.State.MAIN;
            });
            this.addChild(this._scoreBoard.HighScoreLabel);
            this.addChild(this._scoreBoard.CurrentScoreLabel);
        }
        ResetValues() {
            config.Game.LIVES = 3;
            config.Game.SCORE = 0;
            config.Game.BULLET_NUMBER = 20;
        }
        Clean() {
            this.removeAllChildren();
        }
    }
    scenes.GameOver = GameOver;
})(scenes || (scenes = {}));
//# sourceMappingURL=GameOver.js.map