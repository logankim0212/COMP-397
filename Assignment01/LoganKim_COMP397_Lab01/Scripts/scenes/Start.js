"use strict";
/**
 * Logan J. Kim
 * 300973239
 * February 6, 2020
 *
 * Description:
 * Wingardium Luckiosa is a single players single-screen slot machine game designed with Harry Potter theme.
 * This game will contain three screens: start, game and end. Player will lose once they lost all of their credits;
 * however, they can continue to play as long as they want if they have enough credit.
 *
 * Versions:
 * v2.0 Beta Release - Five reels
 * v1.0 Alpha Release - Three reels
 */
var scenes;
(function (scenes) {
    class Start extends objects.Scene {
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        constructor() {
            super();
            // initialization
            this._background = new objects.Image();
            this._startLabelCasino = new objects.Label();
            this._startLabelGame = new objects.Label();
            this._startButton = new objects.Image();
            this.Start();
        }
        // PUBLIC METHODS
        Start() {
            this._background = new objects.Image(config.START_SCREEN_PATH, 0, 0, config.STAGE_W, config.STAGE_H, false);
            this._startLabelCasino = new objects.Label("Casino Royale", "40px", "Arial", "#ffff00", config.STAGE_HALF_W, 50, true);
            this._startLabelGame = new objects.Label("Wingardium Luckiosa Slot Machine", "30px", "Arial", "#00ffff", config.STAGE_HALF_W, 100, true);
            this._startButton = new objects.Image(config.BTN_PLAY_PATH, config.STAGE_HALF_W, 440, 200, 100, true);
            this._startButton.HoverOn();
            this.Main();
        }
        Update() {
        }
        Main() {
            this.addChild(this._background);
            this.addChild(this._startLabelCasino);
            this.addChild(this._startLabelGame);
            this.addChild(this._startButton);
            this._startButton.on("click", function () {
                config.Game.SCENE_STATE = scenes.State.PLAY;
            });
        }
    }
    scenes.Start = Start;
})(scenes || (scenes = {}));
//# sourceMappingURL=Start.js.map