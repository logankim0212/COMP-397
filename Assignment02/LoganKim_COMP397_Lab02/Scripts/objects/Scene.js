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
var objects;
(function (objects) {
    /**
     * Abstract class for Scene container
     *
     * @export
     * @abstract
     * @class Scene
     * @extends {createjs.Container}
     */
    class Scene extends createjs.Container {
        // CONSTRUCTOR
        /**
         * Creates an instance of Scene container
         * @memberof Scene
         */
        constructor() {
            super();
        }
    }
    objects.Scene = Scene;
})(objects || (objects = {}));
//# sourceMappingURL=Scene.js.map