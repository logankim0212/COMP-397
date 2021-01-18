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
     * Class for Splash scene
     *
     * @export
     * @class Splash
     * @extends {objects.Scene}
     */
    class Splash extends objects.Scene {
        // CONTRUCTOR
        /**
         * Creates an instance of Splash scene
         * @memberof Splash
         */
        constructor() {
            super();
            // initialize background
            this._splashScreen = new createjs.Bitmap(config.Game.ASSETS.getResult("splash"));
            this.Start();
        }
        // PUBLIC METHODS
        /**
         * Start method of Splash scene
         *
         * @memberof Splash
         */
        Start() {
            // set current scene to this
            config.Game.CURRENT_SCENE = this;
            // call main
            this.Main();
            // switch to start scene after 2.5s
            setTimeout(() => {
                config.Game.SCENE_STATE = scenes.State.START;
            }, 2500);
        }
        /**
         * Update method of Splash scene
         *
         * @memberof Splash
         */
        Update() { }
        // TODO:consolidate stage cleared scene
        /**
         * Main method of Splash scene
         *
         * @memberof Splash
         */
        Main() {
            // add background
            this.addChild(this._splashScreen);
            // play sound
            let _splashSound = createjs.Sound.play("splashSound");
            _splashSound.volume = 0.4; // 40% volume
        }
        /**
         * Clean method of Splash scene
         *
         * @memberof Splash
         */
        Clean() {
            // remove all elements
            this.removeAllChildren();
        }
    }
    scenes.Splash = Splash;
})(scenes || (scenes = {}));
//# sourceMappingURL=Splash.js.map