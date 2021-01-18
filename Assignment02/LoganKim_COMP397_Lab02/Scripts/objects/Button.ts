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
     * Class for Button object
     *
     * @export
     * @class Button
     * @extends {GameObject}
     */
    export class Button extends GameObject {
        // CONSTRUCTOR
        /**
         * Creates an instance of Button object
         * @param {Object} [imagePath=config.Game.ASSETS.getResult("button")]
         * @param {number} [x=0]
         * @param {number} [y=0]
         * @param {boolean} [isCentered=false]
         * @memberof Button
         */
        constructor(imagePath: Object = config.Game.ASSETS.getResult("button")
            , x: number = 0, y: number = 0, isCentered: boolean = false) {
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
        protected _checkBounds(): void { }

        // PUBLIC METHODS
        /**
         * Mouse Over method of Button object
         * Change its opacity to 70%
         *
         * @memberof Button
         */
        MouseOver(): void {
            this.alpha = 0.7;
        }

        /**
         * Mouse Out method of Button object
         * Change its opacity back to 100%
         *
         * @memberof Button
         */
        MouseOut(): void {
            this.alpha = 1.0;
        }

        /**
         * Start method of Button Object
         *
         * @memberof Button
         */
        public Start(): void {
            // initialize type and name
            this.type = enums.GameObjectType.BUTTON;
            this.name = "Button";
        }

        /**
         * Update method of Button Object
         *
         * @memberof Button
         */
        public Update(): void { }

        /**
         * Reset method of Button Object
         *
         * @memberof Button
         */
        public Reset(): void { }
    }
}