"use strict";
var scenes;
(function (scenes) {
    class Splash extends objects.Scene {
        // PUBLIC PROPERTIES
        // CONTRUCTOR
        constructor() {
            super();
            this._splashScreen = new createjs.Bitmap(config.Game.ASSETS.getResult("splash"));
            this.Start();
        }
        // PUBLIC METHODS
        Start() {
            this.Main();
            setTimeout(() => { this.Clean(); }, 2000);
        }
        Update() {
        }
        // TODO:consolidate stage cleared scene
        Main() {
            this.addChild(this._splashScreen);
        }
        Clean() {
            this.removeAllChildren();
        }
    }
    scenes.Splash = Splash;
})(scenes || (scenes = {}));
//# sourceMappingURL=Splash.js.map