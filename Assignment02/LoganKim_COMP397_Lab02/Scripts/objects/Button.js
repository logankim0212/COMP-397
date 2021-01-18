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
     * Class for Button object
     *
     * @export
     * @class Button
     * @extends {GameObject}
     */
    class Button extends objects.GameObject {
        // CONSTRUCTOR
        /**
         * Creates an instance of Button object
         * @param {Object} [imagePath=config.Game.ASSETS.getResult("button")]
         * @param {number} [x=0]
         * @param {number} [y=0]
         * @param {boolean} [isCentered=false]
         * @memberof Button
         */
        constructor(imagePath = config.Game.ASSETS.getResult("button"), x = 0, y = 0, isCentered = false) {
            super(imagePath, x, y, isCentered);
            // enable hover effect
            this.on("mouseover", this.MouseOver);
            this.on("mouseout", this.MouseOut);
            this.Start();
        }
        // PRIVATE METHODS
        /**
         * Check Bounds method of Button object
         *
         * @protected
         * @memberof Button
         */
        _checkBounds() { }
        // PUBLIC METHODS
        /**
         * Mouse Over method of Button object
         * Change its opacity to 70%
         *
         * @memberof Button
         */
        MouseOver() {
            this.alpha = 0.7;
        }
        /**
         * Mouse Out method of Button object
         * Change its opacity back to 100%
         *
         * @memberof Button
         */
        MouseOut() {
            this.alpha = 1.0;
        }
        /**
         * Start method of Button Object
         *
         * @memberof Button
         */
        Start() {
            // initialize type and name
            this.type = enums.GameObjectType.BUTTON;
            this.name = "Button";
        }
        /**
         * Update method of Button Object
         *
         * @memberof Button
         */
        Update() { }
        /**
         * Reset method of Button Object
         *
         * @memberof Button
         */
        Reset() { }
    }
    objects.Button = Button;
})(objects || (objects = {}));
//# sourceMappingURL=Button.js.map