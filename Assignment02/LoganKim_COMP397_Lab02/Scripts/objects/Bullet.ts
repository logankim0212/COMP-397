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

module objects {
    /**
     * Class for Bullet object
     *
     * @export
     * @class Bullet
     * @extends {objects.GameObject}
     */
    export class Bullet extends objects.GameObject {
        // CONSTRUCTOR
        /**
         * Creates an instance of Bullet object
         * @param {Object} [imagePath=config.Game.ASSETS.getResult("bullet")]
         * @memberof Bullet
         */
        constructor(imagePath: Object = config.Game.ASSETS.getResult("bullet")) {
            super(imagePath, 0, 0, true);

            this.Start();
        }

        // PRIVATE METHODS
        /**
         * Check Bound method of Bullet object
         * Make sure that objects are displayed within the canvas
         *
         * @protected
         * @memberof Bullet
         */
        protected _checkBounds(): void {
            // upper bound
            if (this.position.y <= -this.height) {
                this.Reset();
            }

            // lower bound
            if (this.position.y >= config.Game.SCREEN_HEIGHT + this.height) {
                this.Reset();
            }
        }

        /**
         * Move method of Bullet object
         *
         * @private
         * @memberof Bullet
         */
        private _move(): void {
            // change its position
            this.position = Vector2.add(this.position, this.velocity);
        }

        // PUBLIC METHODS
        /**
         * Start method of Bullet object
         *
         * @memberof Bullet
         */
        public Start(): void {
            // set type to bullet
            this.type = enums.GameObjectType.BULLET;

            // set velocity and position
            this.velocity = new Vector2(0, config.Game.BULLET_SPEED);
            this.position = new Vector2(-1000, -1000);
        }

        /**
         * Update method of Bullet object
         *
         * @memberof Bullet
         */
        public Update(): void {
            // if it is active, move and check its bounds
            if (this.isActive) {
                this._move();
                this._checkBounds();
            }
        }

        /**
         * Reset method of Bullet object
         *
         * @memberof Bullet
         */
        public Reset(): void {
            // reset position and make it inactive
            this.position = new Vector2(-1000, -1000);
            this.isActive = false;
        }
    }
}