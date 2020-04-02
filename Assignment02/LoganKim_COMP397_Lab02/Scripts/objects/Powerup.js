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
     * Class for Powerup object
     *
     * @export
     * @class Powerup
     * @extends {GameObject}
     */
    class Powerup extends objects.GameObject {
        // CONSTRUCTOR
        /**
         * Creates an instance of Powerup object
         * @memberof Powerup
         */
        constructor() {
            super(config.Game.ASSETS.getResult("powerup"), new objects.Vector2(), true);
            this.Start();
        }
        // PRIVATE METHODS
        /**
         * Check Bounds method of Powerup object
         *
         * @protected
         * @memberof Powerup
         */
        _checkBounds() {
            // lower bound
            if (this.y >= config.Game.SCREEN_HEIGHT + this.height) {
                this.Reset();
            }
        }
        /**
         * Move method of Powerup object
         *
         * @private
         * @memberof Powerup
         */
        _move() {
            // change its position
            this.position = objects.Vector2.add(this.position, this.velocity);
        }
        // PUBLIC METHODS
        /**
         * Start of Powerup object
         *
         * @private
         * @memberof Powerup
         */
        Start() {
            // prevent overlapping with pothole by waiting 1.3s
            setTimeout(() => {
                // set type to powerup
                this.type = enums.GameObjectType.POWERUP;
                // set speed and velocity
                this._verticalSpeed = config.Game.VERTICAL_SPEED;
                this.velocity = new objects.Vector2(0, this._verticalSpeed);
                // reset position
                this.Reset();
            }, 1300);
        }
        /**
         * Update of Powerup object
         *
         * @private
         * @memberof Powerup
         */
        Update() {
            // move and check its bounds
            this._move();
            this._checkBounds();
        }
        /**
         * Reset of Powerup object
         *
         * @private
         * @memberof Powerup
         */
        Reset() {
            // reset position
            let randomX = util.Mathf.RandomRange(this.halfWidth, config.Game.SCREEN_WIDTH - this.halfWidth);
            let y = -(config.Game.SCREEN_HEIGHT * 15 + this.height);
            this.position = new objects.Vector2(randomX, y);
        }
    }
    objects.Powerup = Powerup;
})(objects || (objects = {}));
//# sourceMappingURL=Powerup.js.map