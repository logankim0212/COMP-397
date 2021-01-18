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
     * Class for Vector2
     *
     * @export
     * @class Vector2
     */
    export class Vector2 {
        // PRIVATE INSTANCE MEMBERS
        private _x: number;
        private _y: number;
        private _magnitude: number;
        private _sqrMagnitude: number;
        private _displayObject?: createjs.DisplayObject;

        // PUBLIC PROPERTIES
        // getter and setter
        get x(): number {
            return this._x;
        }

        set x(newX: number) {
            this._x = newX; // set x
            this.sqrMagnitude = this._computeSqrMagnitude(); // calculate square magnitude
            this.magnitude = this._computeMagnitude(); // calculate magnitude

            // set displayobject's x unless it is undefined
            if (this._displayObject != undefined) {
                this._displayObject.x = this._x;
            }
        }

        get y(): number {
            return this._y;
        }

        set y(newY: number) {
            this._y = newY; // set y
            this.sqrMagnitude = this._computeSqrMagnitude(); // calculate square magnitude
            this.magnitude = this._computeMagnitude(); // calculate magnitude

            // set displayobject's y unless it is undefined
            if (this._displayObject != undefined) {
                this._displayObject.y = this._y;
            }
        }

        get magnitude(): number {
            return this._magnitude;
        }

        set magnitude(newMagnitude: number) {
            this._magnitude = newMagnitude;
        }

        get sqrMagnitude(): number {
            return this._sqrMagnitude;
        }

        set sqrMagnitude(newSqrMagnitude: number) {
            this._sqrMagnitude = newSqrMagnitude;
        }

        // CONSTRUCTOR
        /**
         * Creates an instance of Vector2
         * @param {number[] | Vector2 | number} [first]
         * @param {number} [second]
         * @param {createjs.DisplayObject} [third]
         * @memberof Vector2
         */
        constructor(x?: number, y?: number, displayObject?: createjs.DisplayObject)
        constructor(coordinates: number[])
        constructor(vector: Vector2)
        constructor(first: number[] | Vector2 | number = 0, second: number = 0, third?: createjs.DisplayObject) {
            // initialize member variables
            this._x = 0;
            this._y = 0;
            this._magnitude = 0;
            this._sqrMagnitude = 0;

            // depends on the type of value for third, perform different function
            if (third != undefined) {
                this._displayObject = third;
            }

            // depends on the type of value for first, perform different function
            if (typeof first == "number") {
                // set x and y
                this.x = first;
                this.y = second;
            } else if (first instanceof Array) {
                // set x and y
                this.x = first[0];
                this.y = first[1];
            } else if (first instanceof Vector2) {
                // set x and y
                this.x = first.x;
                this.y = first.y;
            }
        }

        // PRIVATE METHODS
        /**
         * Helper method for calculating square magnitude
         *
         * @private
         * @returns {number}
         * @memberof Vector2
         */
        private _computeSqrMagnitude(): number {
            return (this._x * this._x) + (this._y * this._y);
        }


        /**
         * Helper method for calculating magnitude
         *
         * @private
         * @returns {number}
         * @memberof Vector2
         */
        private _computeMagnitude(): number {
            return Math.sqrt(this._computeSqrMagnitude());
        }

        // PUBLIC METHODS
        /**
         * Add method of Vector2
         *
         * @param {Vector2} rhs
         * @memberof Vector2
         */
        public add(rhs: Vector2): void {
            this.x += rhs.x;
            this.y += rhs.y;
        }

        /**
         * Subtract method of Vector2
         *
         * @param {Vector2} rhs
         * @memberof Vector2
         */
        public subtract(rhs: Vector2): void {
            this.x -= rhs.x;
            this.y -= rhs.y;
        }

        /**
         * Scale method of Vector2
         *
         * @param {number} scalar
         * @memberof Vector2
         */
        public scale(scalar: number): void {
            // scale x and y by multiplying scalar
            this.x *= scalar;
            this.y *= scalar;
        }

        /**
         * toString method of Vector2
         * Display x and y in a string
         *
         * @returns {string}
         * @memberof Vector2
         */
        public toString(): string {
            return "(" + this.x + ", " + this.y + ")";
        }

        /**
         * toArray method of Vector2
         * Display x and y in an array
         *
         * @returns {number[]}
         * @memberof Vector2
         */
        public toArray(): number[] {
            return [this.x, this.y];
        }

        /**
         * This method sets the current vector to a magnitude of 1 (the unit vector)
         *
         * @memberof Vector2
         */
        public normalize(): void {
            let tempX = this.x / this.magnitude;
            let tempY = this.y / this.magnitude;
            this.x = tempX;
            this.y = tempY;
        }

        /**
         * Computes the current vector's direction without changing it
         *
         * @returns {Vector2}
         * @memberof Vector2
         */
        public normalized(): Vector2 {
            let vector = new Vector2(this.x, this.y);
            vector.normalize();
            return vector;
        }

        // PUBLIC STATIC METHODS
        /**
         * Static method for zero
         *
         * @static
         * @returns {Vector2}
         * @memberof Vector2
         */
        public static zero(): Vector2 {
            return new Vector2(0, 0);
        }

        /**
         * Static method for one
         *
         * @static
         * @returns {Vector2}
         * @memberof Vector2
         */
        public static one(): Vector2 {
            return new Vector2(1, 1);
        }

        /**
         * Static method for up
         *
         * @static
         * @returns {Vector2}
         * @memberof Vector2
         */
        public static up(): Vector2 {
            return new Vector2(0, -1);
        }

        /**
         * Static method for down
         *
         * @static
         * @returns {Vector2}
         * @memberof Vector2
         */
        public static down(): Vector2 {
            return new Vector2(0, 1);
        }

        /**
         * Static method for left
         *
         * @static
         * @returns {Vector2}
         * @memberof Vector2
         */
        public static left(): Vector2 {
            return new Vector2(-1, 0);
        }

        /**
         * Static method for right
         *
         * @static
         * @returns {Vector2}
         * @memberof Vector2
         */
        public static right(): Vector2 {
            return new Vector2(1, 0);
        }


        /**
         * Static method for dot
         *
         * @static
         * @returns {Vector2}
         * @memberof Vector2
         */
        public static dot(lhs: Vector2, rhs: Vector2): number {
            return (lhs.x * rhs.x) + (lhs.y * rhs.y);
        }

        /**
         * Static method for distance
         *
         * @static
         * @returns {Vector2}
         * @memberof Vector2
         */
        public static distance(P1: Vector2, P2: Vector2): number {
            let diffXs = P2.x - P1.x;
            let diffYs = P2.y - P1.y;

            return Math.sqrt((diffXs * diffXs) + (diffYs * diffYs));
        }

        /**
         * Static method for square distance
         *
         * @static
         * @returns {Vector2}
         * @memberof Vector2
         */
        public static sqrDistance(P1: Vector2, P2: Vector2): number {
            let diffXs = P2.x - P1.x;
            let diffYs = P2.y - P1.y;

            return (diffXs * diffXs) + (diffYs * diffYs);
        }

        /**
         * Static method for add
         *
         * @static
         * @returns {Vector2}
         * @memberof Vector2
         */
        public static add(lhs: Vector2, rhs: Vector2): Vector2 {
            let theXs = lhs.x + rhs.x;
            let theYs = lhs.y + rhs.y;

            return new Vector2(theXs, theYs);
        }

        /**
         * Static method for subtract
         *
         * @static
         * @returns {Vector2}
         * @memberof Vector2
         */
        public static subtract(lhs: Vector2, rhs: Vector2): Vector2 {
            let theXs = lhs.x - rhs.x;
            let theYs = lhs.y - rhs.y;

            return new Vector2(theXs, theYs);
        }

        /**
         * Static method for angle
         *
         * @static
         * @returns {Vector2}
         * @memberof Vector2
         */
        public static angle(from: Vector2, to: Vector2): number {
            return Math.acos(util.Mathf.Clamp(Vector2.dot(from.normalized(), to.normalized()), -1, 1)) * 57.29578;
        }

        /**
         * Static method for scale
         *
         * @static
         * @returns {Vector2}
         * @memberof Vector2
         */
        public static scale(lhs: Vector2, scaler: number): Vector2 {
            // dot x & dot y
            let theXs = lhs.x * scaler;
            let theYs = lhs.y * scaler;

            return new Vector2(theXs, theYs);
        }
    }
}