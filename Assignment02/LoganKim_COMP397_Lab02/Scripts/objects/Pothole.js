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
     * Class for Pothole object
     *
     * @export
     * @class Pothole
     * @extends {GameObject}
     */
    class Pothole extends objects.GameObject {
        // CONSTRUCTOR
        /**
         * Creates an instance of Pothole object
         * @memberof Pothole
         */
        constructor() {
            super(config.Game.ASSETS.getResult("pothole"), new objects.Vector2(), true);
            this.Start();
        }
        // PRIVATE METHODS
        /**
         * Check Bounds method of Pothole object
         *
         * @protected
         * @memberof Pothole
         */
        _checkBounds() {
            // lower bound
            if (this.y >= config.Game.SCREEN_HEIGHT + this.height) {
                this.Reset();
            }
        }
        /**
         * Move method of Pothole object
         *
         * @private
         * @memberof Pothole
         */
        _move() {
            // change its position
            this.position = objects.Vector2.add(this.position, this.velocity);
        }
        // PUBLIC METHODS
        /**
         * Start method of Pothole object
         *
         * @memberof Pothole
         */
        Start() {
            // set type to heart
            this.type = enums.GameObjectType.POTHOLE;
            // set speed and velocity
            this._verticalSpeed = config.Game.VERTICAL_SPEED;
            this.velocity = new objects.Vector2(0, this._verticalSpeed);
            // reset position
            this.Reset();
        }
        /**
         * Update method of Pothole object
         *
         * @memberof Pothole
         */
        Update() {
            // move and check its bounds
            this._move();
            this._checkBounds();
        }
        /**
         * Reset method of Pothole object
         *
         * @memberof Pothole
         */
        Reset() {
            // reset position
            let randomX = util.Mathf.RandomRange(this.halfWidth, config.Game.SCREEN_WIDTH - this.halfWidth);
            this.position = new objects.Vector2(randomX, -this.height);
        }
    }
    objects.Pothole = Pothole;
})(objects || (objects = {}));
//# sourceMappingURL=Pothole.js.map