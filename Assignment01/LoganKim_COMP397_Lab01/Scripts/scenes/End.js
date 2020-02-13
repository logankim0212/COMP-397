"use strict";
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
            this.background = new objects.Image(util.END_SCREEN_PATH, 0, 0, util.STAGE_W, util.STAGE_H, false);
            this.endLabelCasino = new objects.Label("Thank you for playing!", "40px", "Arial", "#ffff00", 420, 50, true);
            this.restartButton = new objects.Image(util.BTN_HOME_PATH, 420, 400, 200, 100, true);
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