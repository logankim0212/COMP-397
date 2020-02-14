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
    class End extends objects.Scene {
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        constructor() {
            super();
            // initialization
            this.background = new objects.Image();
            this.endLabelCasino = new objects.Label();
            this.restartButton = new objects.Image();
            this.Start();
        }
        // PUBLIC METHODS
        Start() {
            this.background = new objects.Image(config.END_SCREEN_PATH, 0, 0, config.STAGE_W, config.STAGE_H, false);
            this.endLabelCasino = new objects.Label("Thank you for playing!", "40px", "Arial", "#ffff00", config.STAGE_HALF_W, 50, true);
            this.restartButton = new objects.Image(config.BTN_HOME_PATH, config.STAGE_HALF_W, 440, 200, 100, true);
            this.restartButton.HoverOn();
            this.Main();
        }
        Update() {
        }
        Main() {
            this.addChild(this.background);
            this.addChild(this.endLabelCasino);
            this.addChild(this.restartButton);
            this.restartButton.on("click", function () {
                config.Game.SCENE_STATE = scenes.State.START;
            });
        }
    }
    scenes.End = End;
})(scenes || (scenes = {}));
//# sourceMappingURL=End.js.map