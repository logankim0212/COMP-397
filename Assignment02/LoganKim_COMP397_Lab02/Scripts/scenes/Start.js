"use strict";
var scenes;
(function (scenes) {
    class Start extends objects.Scene {
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        constructor() {
            super();
            this._welcomeLabel = new objects.Label();
            this._startButton = new objects.Button();
            this._road = new objects.Road();
            this.Start();
        }
        // PRIVATE METHODS
        // PUBLIC METHODS
        Start() {
            //instantiate a new Text object
            this._welcomeLabel = new objects.Label("Zombie Escape", "80px", "Consolas", "#FFFF00", 320, 180, true);
            // buttons
            this._startButton = new objects.Button(config.Game.ASSETS.getResult("startButton"), 320, 430, true);
            this.Main();
        }
        Update() {
            this._road.Update();
        }
        Main() {
            this.addChild(this._road);
            this.addChild(this._welcomeLabel);
            this.addChild(this._startButton);
            this._startButton.on("click", () => {
                config.Game.SCENE = scenes.State.PLAY;
            });
        }
        Clean() {
            this.removeAllChildren();
        }
    }
    scenes.Start = Start;
})(scenes || (scenes = {}));
//# sourceMappingURL=Start.js.map