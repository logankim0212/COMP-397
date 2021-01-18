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
     * Class for Zombie object
     *
     * @export
     * @class Zombie
     * @extends {GameObjectSprite}
     */
    export class Zombie extends GameObjectSprite {
        // PRIVATE INSTANCE MEMBERS
        private _verticalSpeed?: number;
        private _horizontalSpeed?: number;

        // CONSTRUCTOR
        /**
         * Creates an instance of Zombie object
         * @memberof Zombie
         */
        constructor() {
            super(config.Game.ZOMBIE_ATLAS, "zombie", new Vector2(), true);

            this.Start();
        }

        // PRIVATE METHODS
        /**
         * Check Bounds method of Zombie object
         *
         * @protected
         * @memberof Zombie
         */
        protected _checkBounds(): void {
            // lower bound
            if (this.y >= config.Game.SCREEN_HEIGHT + this.height) {
                this.Reset();
            }
        }

        /**
         * Move method of Zombie object
         *
         * @private
         * @memberof Zombie
         */
        private _move(): void {
            // change its position
            this.position = Vector2.add(this.position, this.velocity);
        }

        // PUBLIC METHODS
        /**
         * Start method of Zombie object
         *
         * @memberof Zombie
         */
        public Start(): void {
            // set type to zombie
            this.type = enums.GameObjectType.ZOMBIE;

            // set position
            let randomX = util.Mathf.RandomRange(this.halfWidth, config.Game.SCREEN_WIDTH - this.halfWidth);
            let randomY = util.Mathf.RandomRange(-this.height * 3, -this.height);
            this.position = new Vector2(randomX, randomY);

            // wait for 2s to reset zombie's initial position
            setTimeout(() => {
                this.Reset();
            }, 2000);
        }

        /**
         * Update method of Zombie object
         *
         * @memberof Zombie
         */
        public Update(): void {
            // move and check its bounds
            this._move();
            this._checkBounds();
        }

        /**
         * Reset method of Zombie object
         *
         * @memberof Zombie
         */
        public Reset(): void {
            // reset speeds and velocity
            this._verticalSpeed = util.Mathf.RandomRange(10, 12);
            this._horizontalSpeed = util.Mathf.RandomRange(-1, 1);
            this.velocity = new Vector2(this._horizontalSpeed, this._verticalSpeed);

            // reset position
            let randomX = util.Mathf.RandomRange(this.halfWidth, config.Game.SCREEN_WIDTH - this.halfWidth);
            let randomY = util.Mathf.RandomRange(-this.height * 3, -this.height);
            this.position = new Vector2(randomX, randomY);
        }
    }
}