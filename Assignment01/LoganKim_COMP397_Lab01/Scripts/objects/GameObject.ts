/**
 * Logan J. Kim
 * 300973239
 * February 6, 2020
 * 
 * Description:
 * Wingardium Luckiosa is a single players single-screen slot machine game designed with Harry Potter theme.
 * This game will contain three screens: start, game and end. Player will lose once they lost all of their credits;
 * however, they can continue to play as long as they want if they have enough credit.
 *
 * Version:
 * v1.0 Alpha Release
 */
module objects {
    export abstract class GameObject extends createjs.Bitmap {
        // MEMBER VARIABLES
        private _width: number = 0;
        private _height: number = 0;
        private _halfWidth: number = 0;
        private _halfHeight: number = 0;
        private _isColliding: boolean = false;
        private _isCentered: boolean = false;

        // PROPERTIES
        get width(): number {
            return this._width;
        }

        set width(newWidth: number) {
            this._width = newWidth;
        }

        get height(): number {
            return this._height;
        }

        set height(newHeight: number) {
            this._height = newHeight;
        }

        get halfWidth(): number {
            return this._halfWidth;
        }

        set halfWidth(newHalfWidth: number) {
            this._halfWidth = newHalfWidth;
        }

        get halfHeight(): number {
            return this._halfHeight;
        }

        set halfHeight(newHalfHeight: number) {
            this._halfHeight = newHalfHeight;
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
            this._isCentered = newState;

            if (newState) {
                // set the anchor point to the center
                this.regX = this._halfWidth;
                this.regY = this._halfHeight;
            } else {
                this.regX = 0;
                this.regY = 0;
            }
        }

        // CONSTRUCTOR
        /**
         * Creates an instance of GameObject.
         * @param {string} [imagePath="./Assets/images/placeholder.png"]
         * @param {number} [x=0]
         * @param {number} [y=0]
         * @param {boolean} [isCentered=false]
         * @memberof GameObject
         */
        constructor(imagePath: string = "./Assets/images/placeholder.png",
            x: number = 0, y: number = 0, centered: boolean = false) {
            super(imagePath);
            this.isColliding = false;

            this.height = 0;

            // wait for the image to load before calculating its width and height
            this.image.addEventListener('load', () => {
                this.width = this.getBounds().width;
                this.height = this.getBounds().height;
                this.halfWidth = this.width * 0.5;
                this.halfHeight = this.height * 0.5;

                this.isCentered = centered;
            });

            // set the GameObject's position
            this.x = x;
            this.y = y;
        }

        // PRIVATE METHODS

        // PUBLIC METHODS
        public abstract Start(): void;

        public abstract Update(): void;

        public abstract Reset(): void;

        public CustomSize(width: number = this.getBounds().width, height: number = this.getBounds().height, isCentered: boolean = false): void {
            this.image.addEventListener('load', () => {
                this.scaleX = width / this.getBounds().width;
                this.scaleY = height / this.getBounds().height;
                this.isCentered = isCentered;
            });
        }
    }
}