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
     * Class for Road object
     *
     * @export
     * @class Road
     * @extends {GameObject}
     */
    export class Road extends GameObject {
        // PRIVATE INSTANCE MEMBERS
        private _verticalSpeed?: number;

        // CONSTRUCTOR
        /**
         * Creates an instance of Road object
         * @memberof Road
         */
        constructor() {
            super(config.Game.ASSETS.getResult("road"));

            this.Start();
        }

        // PRIVATE METHODS
        /**
         * Chcek Bounds method of Road object
         *
         * @protected
         * @memberof Road
         */
        protected _checkBounds(): void {
            // reset image once its y position reaches 0
            if (this.y >= 0) {
                this.Reset();
            }
        }

        /**
         * Move method of Road object
         *
         * @protected
         * @memberof Road
         */
        private _move(): void {
            // change its position
            this.position = Vector2.add(this.position, this.velocity);
        }

        // PUBLIC METHODS
        /**
         * Start method of Road object
         *
         * @protected
         * @memberof Road
         */
        public Start(): void {
            // set type to road
            this.type = enums.GameObjectType.ROAD;

            // set speed and velocity
            this._verticalSpeed = config.Game.VERTICAL_SPEED;
            this.velocity = new Vector2(0, this._verticalSpeed);

            // reset position
            this.Reset();
        }

        /**
         * Update method of Road object
         *
         * @protected
         * @memberof Road
         */
        public Update(): void {
            // move and check its bounds
            this._move();
            this._checkBounds();
        }

        /**
         * Reset method of Road object
         *
         * @protected
         * @memberof Road
         */
        public Reset(): void {
            // reset postiion
            this.position = new Vector2(0, -1200);
        }
    }
}