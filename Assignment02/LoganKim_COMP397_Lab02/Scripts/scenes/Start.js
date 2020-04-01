"use strict";
var scenes;
(function (scenes) {
    class Start extends objects.Scene {
        // CONSTRUCTOR
        constructor() {
            super();
            this._welcomeLabel = new objects.Label();
            this._btnStart = new objects.Button();
            this._btnInstruction = new objects.Button();
            this._btnExit = new objects.Button();
            this._background = new createjs.Bitmap(config.Game.ASSETS.getResult("bgStart"));
            this.Start();
        }
        // PUBLIC PROPERTIES
        get BGM() {
            return this._BGM;
        }
        // PRIVATE METHODS
        // PUBLIC METHODS
        Start() {
            config.Game.CURRENT_SCENE = this;
            //instantiate a new Text object
            this._welcomeLabel = new objects.Label("Zombie Rider", "40px", "Consolas", "red", 300, 80, true);
            // buttons
            this._btnStart = new objects.Button(config.Game.ASSETS.getResult("btnStart"), 300, 400, true);
            this._btnInstruction = new objects.Button(config.Game.ASSETS.getResult("btnInstruction"), 300, 460, true);
            this._btnExit = new objects.Button(config.Game.ASSETS.getResult("btnExit"), 300, 520, true);
            this.Main();
        }
        Update() {
        }
        Main() {
            this.addChild(this._background);
            this.addChild(this._welcomeLabel);
            this.addChild(this._btnStart);
            this.addChild(this._btnInstruction);
            this.addChild(this._btnExit);
            if (!config.Game.BGM_STATUS) {
                config.Game.BGM_STATUS = true;
                this._BGM = createjs.Sound.play("bgm");
                this._BGM.loop = -1; // loop forever
                this._BGM.volume = 0.1; // 10% volume
            }
            this._btnStart.on("click", () => {
                this.PlayButtonSound();
                config.Game.SCENE_STATE = scenes.State.PLAY;
            });
            this._btnInstruction.on("click", () => {
                this.PlayButtonSound();
                config.Game.SCENE_STATE = scenes.State.INSTRUCTION;
            });
            this._btnExit.on("click", () => {
                this.PlayButtonSound();
                config.Game.SCENE_STATE = scenes.State.EXIT;
            });
        }
        Clean() {
            this.removeAllChildren();
        }
        PlayButtonSound() {
            this._buttonSound = createjs.Sound.play("buttonSound");
            this._buttonSound.volume = 0.2; // 20% volume
        }
    }
    scenes.Start = Start;
})(scenes || (scenes = {}));
//# sourceMappingURL=Start.js.map