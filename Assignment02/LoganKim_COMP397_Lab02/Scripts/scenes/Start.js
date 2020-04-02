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
var scenes;
(function (scenes) {
    /**
     * Class for Start scene
     *
     * @export
     * @class Start
     * @extends {objects.Scene}
     */
    class Start extends objects.Scene {
        // CONSTRUCTOR
        /**
         * Creates an instance of Start scene
         * @memberof Start
         */
        constructor() {
            super();
            // initialize label
            this._welcomeLabel = new objects.Label();
            // initialize buttons
            this._btnStart = new objects.Button();
            this._btnInstruction = new objects.Button();
            this._btnExit = new objects.Button();
            // initialize background
            this._background = new createjs.Bitmap(config.Game.ASSETS.getResult("bgStart"));
            this.Start();
        }
        // PUBLIC PROPERTIES
        /**
         * Getter method for BGM
         *
         * @readonly
         * @type {createjs.AbstractSoundInstance}
         * @memberof Start
         */
        get BGM() {
            return this._BGM;
        }
        // PUBLIC METHODS
        /**
         * Start method of Start scene
         *
         * @memberof Start
         */
        Start() {
            // set current scene to this
            config.Game.CURRENT_SCENE = this;
            // instantiate a new label
            this._welcomeLabel = new objects.Label("Zombie Rider", "40px", "Consolas", "red", 300, 80, true);
            // instantiate new buttons
            this._btnStart = new objects.Button(config.Game.ASSETS.getResult("btnStart"), 300, 400, true);
            this._btnInstruction = new objects.Button(config.Game.ASSETS.getResult("btnInstruction"), 300, 460, true);
            this._btnExit = new objects.Button(config.Game.ASSETS.getResult("btnExit"), 300, 520, true);
            this.Main();
        }
        /**
         * Update method of Start scene
         *
         * @memberof Start
         */
        Update() { }
        /**
         * Main method of Start scene
         *
         * @memberof Start
         */
        Main() {
            // add elements to display
            this.addChild(this._background);
            this.addChild(this._welcomeLabel);
            this.addChild(this._btnStart);
            this.addChild(this._btnInstruction);
            this.addChild(this._btnExit);
            // if bgm is off, play bgm
            if (!config.Game.BGM_STATUS) {
                config.Game.BGM_STATUS = true;
                this._BGM = createjs.Sound.play("bgm");
                this._BGM.loop = -1; // loop forever
                this._BGM.volume = 0.1; // 10% volume
            }
            // when start button is clicked, play button sound and switch scene
            this._btnStart.on("click", () => {
                this.PlayButtonSound();
                config.Game.SCENE_STATE = scenes.State.PLAY;
            });
            // when instruction button is clicked, play button sound and switch scene
            this._btnInstruction.on("click", () => {
                this.PlayButtonSound();
                config.Game.SCENE_STATE = scenes.State.INSTRUCTION;
            });
            // when exit button is clicked, play button sound and switch scene
            this._btnExit.on("click", () => {
                this.PlayButtonSound();
                config.Game.SCENE_STATE = scenes.State.EXIT;
            });
        }
        /**
         * Clean method of Start scene
         *
         * @memberof Start
         */
        Clean() {
            // remove all elements
            this.removeAllChildren();
        }
        /**
         * Method for playing button sound
         *
         * @memberof Start
         */
        PlayButtonSound() {
            let _buttonSound = createjs.Sound.play("buttonSound");
            _buttonSound.volume = 0.2; // 20% volume
        }
    }
    scenes.Start = Start;
})(scenes || (scenes = {}));
//# sourceMappingURL=Start.js.map