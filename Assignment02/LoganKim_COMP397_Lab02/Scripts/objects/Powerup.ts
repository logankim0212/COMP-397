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
     * Class for Powerup object
     *
     * @export
     * @class Powerup
     * @extends {GameObject}
     */
    export class Powerup extends GameObject {
        // PRIVATE INSTANCE MEMBERS
        private _verticalSpeed?: number;

        // CONSTRUCTOR
        /**
         * Creates an instance of Powerup object
         * @memberof Powerup
         */
        constructor() {
            super(config.Game.ASSETS.getResult("powerup"), new Vector2(), true);

            this.Start();
        }

        // PRIVATE METHODS
        /**
         * Check Bounds method of Powerup object
         *
         * @protected
         * @memberof Powerup
         */
        protected _checkBounds(): void {
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
        private _move(): void {
            // change its position
            this.position = Vector2.add(this.position, this.velocity);
        }

        // PUBLIC METHODS
        /**
         * Start of Powerup object
         *
         * @private
         * @memberof Powerup
         */
        public Start(): void {
            // prevent overlapping with pothole by waiting 1.3s
            setTimeout(() => {
                // set type to powerup
                this.type = enums.GameObjectType.POWERUP;

                // set speed and velocity
                this._verticalSpeed = config.Game.VERTICAL_SPEED;
                this.velocity = new Vector2(0, this._verticalSpeed);

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
        public Update(): void {
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
        public Reset(): void {
            // reset position
            let randomX = util.Mathf.RandomRange(this.halfWidth, config.Game.SCREEN_WIDTH - this.halfWidth);
            let y = -(config.Game.SCREEN_HEIGHT * 15 + this.height);
            this.position = new Vector2(randomX, y);
        }
    }
}