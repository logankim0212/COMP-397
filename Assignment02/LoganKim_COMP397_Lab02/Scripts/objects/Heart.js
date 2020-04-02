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
     * Class for Heart object
     *
     * @export
     * @class Heart
     * @extends {GameObject}
     */
    class Heart extends objects.GameObject {
        // CONSTRUCTOR
        /**
         * Creates an instance of Heart object
         * @memberof Heart
         */
        constructor() {
            super(config.Game.ASSETS.getResult("heart"), new objects.Vector2(), true);
            this.Start();
        }
        // PRIVATE METHODS
        /**
         * Check Bound method of Heart object
         * Make sure that objects are displayed within the canvas
         *
         * @protected
         * @memberof Heart
         */
        _checkBounds() {
            // lower bounds
            if (this.y >= config.Game.SCREEN_HEIGHT + this.height) {
                this.Reset();
            }
        }
        /**
         * Move method of Heart object
         *
         * @private
         * @memberof Heart
         */
        _move() {
            // change its position
            this.position = objects.Vector2.add(this.position, this.velocity);
        }
        // PUBLIC METHODS
        /**
         * Start method of Heart object
         *
         * @memberof Heart
         */
        Start() {
            // prevent overlapping with pothole by waiting 0.3s
            setTimeout(() => {
                // set type to heart
                this.type = enums.GameObjectType.HEART;
                // set speed and velocity
                this._verticalSpeed = config.Game.VERTICAL_SPEED;
                this.velocity = new objects.Vector2(0, this._verticalSpeed);
                // reset postion
                this.Reset();
            }, 300);
        }
        /**
         * Update method of Heart object
         *
         * @memberof Heart
         */
        Update() {
            // move and check its bounds
            this._move();
            this._checkBounds();
        }
        /**
         * Reset method of Heart object
         *
         * @memberof Heart
         */
        Reset() {
            // reset position
            let randomX = util.Mathf.RandomRange(this.halfWidth, config.Game.SCREEN_WIDTH - this.halfWidth);
            let y = -(config.Game.SCREEN_HEIGHT * 7 + this.height);
            this.position = new objects.Vector2(randomX, y);
        }
    }
    objects.Heart = Heart;
})(objects || (objects = {}));
//# sourceMappingURL=Heart.js.map