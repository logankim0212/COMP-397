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
     * Class for Game Object Bitmap
     *
     * @export
     * @abstract
     * @class GameObject
     * @extends {createjs.Bitmap}
     */
    export abstract class GameObject extends createjs.Bitmap {
        // PRIVATE INSTANCE MEMBERS
        private _width: number;
        private _height: number;
        private _halfWidth: number;
        private _halfHeight: number;
        private _position: Vector2;
        private _velocity: Vector2;
        private _isColliding: boolean;
        private _isCentered: boolean;
        private _isActive: boolean;
        private _type: enums.GameObjectType;

        // PUBLIC PROPERTIES
        // getters and setters
        get width(): number {
            return this._width;
        }

        set width(newWidth: number) {
            // set width and half width
            this._width = newWidth;
            this._halfWidth = this._computeHalfWidth();
        }

        get height(): number {
            return this._height;
        }

        set height(newHeight: number) {
            // set height and half height
            this._height = newHeight;
            this._halfHeight = this._computeHalfHeight();
        }

        get halfWidth(): number {
            return this._halfWidth;
        }

        get halfHeight(): number {
            return this._halfHeight;
        }

        get position(): Vector2 {
            return this._position;
        }

        set position(newPosition: Vector2) {
            // set position along with x and y
            this._position = newPosition;
            this.x = newPosition.x;
            this.y = newPosition.y;
        }

        get velocity(): Vector2 {
            return this._velocity;
        }

        set velocity(newVelocity: Vector2) {
            this._velocity = newVelocity;
        }

        get isColliding(): boolean {
            return this._isColliding;
        }

        set isColliding(newState: boolean) {
            this._isColliding = newState;
        }

        get isCentered(): boolean {
            return this._isCentered;
        }

        set isCentered(newState: boolean) {
            // center an object
            this._isCentered = newState;
            if (newState) {
                this._centerGameObject();
            }
        }

        public get isActive(): boolean {
            return this._isActive;
        }

        public set isActive(v: boolean) {
            this._isActive = v;
        }

        public get type(): enums.GameObjectType {
            return this._type;
        }

        public set type(v: enums.GameObjectType) {
            this._type = v;
        }

        // CONSTRUCTOR
        /**
         * Creates an instance of Game Object
         * @param {Object} [first]
         * @param {Vector2 | number} [second]
         * @param {booleaan | number} [third]
         * @param {boolean} [fourth]
         * @memberof GameObject
         */
        constructor(imageString?: Object, x?: number, y?: number, centered?: boolean)
        constructor(imageString: Object, position: Vector2, centered?: boolean)
        constructor(first: Object = config.Game.ASSETS.getResult("placeholder"),
            second: Vector2 | number = 0, third: boolean | number = 0, fourth: boolean = false) {
            super(first);

            // initialization
            this._width = 0;
            this._height = 0;
            this._halfWidth = 0;
            this._halfHeight = 0;
            this._position = new Vector2(0, 0, this);
            this._velocity = new Vector2(0, 0);
            this._isColliding = false;
            this._isCentered = false;
            this._isActive = false;
            this._type = enums.GameObjectType.UNDEFINED;

            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            // depends on the type of value for third, perform different function
            if (typeof third == "boolean") {
                this.isCentered = third;
            } else if (typeof third == "undefined") {
                this.isCentered = false;
            }

            // depends on the type of value for fourth, perform different function
            if (fourth) {
                this.isCentered = fourth;
            }

            // depends on the type of value for second and third, perform different function
            if ((typeof second == "number") && (typeof third == "number")) {
                this.position = new Vector2(second, third, this);
            }

            // depends on the type of value for second, perform different function
            if (second instanceof Vector2) {
                this.position = second;
            }
        }

        // PRIVATE METHODS
        /**
         * Method for calculating half width
         *
         * @private
         * @returns {number}
         * @memberof GameObject
         */
        private _computeHalfWidth(): number {
            return this.width * 0.5;
        }

        /**
         * Method for calculating half height
         *
         * @private
         * @returns {number}
         * @memberof GameObject
         */
        private _computeHalfHeight(): number {
            return this.height * 0.5;
        }

        /**
         * Method for centering an object
         *
         * @private
         * @memberof GameObject
         */
        private _centerGameObject(): void {
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
        }

        /**
         * Abstract method for checking its bounds
         *
         * @protected
         * @abstract
         * @memberof GameObject
         */
        protected abstract _checkBounds(): void;

        // PUBLIC METHODS
        // Life Cycle Methods
        /**
         * This method is used for initialization
         *
         * @abstract
         * @memberof GameObject
         */
        public abstract Start(): void;

        /**
         * This method is used to update all child objects
         *
         * @abstract
         * @memberof GameObject
         */
        public abstract Update(): void;

        /**
         * This method is used to reset elements
         *
         * @abstract
         * @memberof GameObject
         */
        public abstract Reset(): void;
    }
}