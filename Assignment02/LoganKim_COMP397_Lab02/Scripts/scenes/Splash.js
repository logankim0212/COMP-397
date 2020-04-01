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
            config.Game.CURRENT_SCENE = this;
            this.Main();
            setTimeout(() => {
                config.Game.SCENE_STATE = scenes.State.START;
            }, 2500);
        }
        Update() {
        }
        // TODO:consolidate stage cleared scene
        Main() {
            this.addChild(this._splashScreen);
            this._splashSound = createjs.Sound.play("splashSound");
            this._splashSound.volume = 0.4; // 10% volume
        }
        Clean() {
            this.removeAllChildren();
        }
    }
    scenes.Splash = Splash;
})(scenes || (scenes = {}));
//# sourceMappingURL=Splash.js.map