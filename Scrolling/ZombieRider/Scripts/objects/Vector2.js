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
     * Class for Vector2
     *
     * @export
     * @class Vector2
     */
    class Vector2 {
        constructor(first = 0, second = 0, third) {
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
            }
            else if (first instanceof Array) {
                // set x and y
                this.x = first[0];
                this.y = first[1];
            }
            else if (first instanceof Vector2) {
                // set x and y
                this.x = first.x;
                this.y = first.y;
            }
        }
        // PUBLIC PROPERTIES
        // getter and setter
        get x() {
            return this._x;
        }
        set x(newX) {
            this._x = newX; // set x
            this.sqrMagnitude = this._computeSqrMagnitude(); // calculate square magnitude
            this.magnitude = this._computeMagnitude(); // calculate magnitude
            // set displayobject's x unless it is undefined
            if (this._displayObject != undefined) {
                this._displayObject.x = this._x;
            }
        }
        get y() {
            return this._y;
        }
        set y(newY) {
            this._y = newY; // set y
            this.sqrMagnitude = this._computeSqrMagnitude(); // calculate square magnitude
            this.magnitude = this._computeMagnitude(); // calculate magnitude
            // set displayobject's y unless it is undefined
            if (this._displayObject != undefined) {
                this._displayObject.y = this._y;
            }
        }
        get magnitude() {
            return this._magnitude;
        }
        set magnitude(newMagnitude) {
            this._magnitude = newMagnitude;
        }
        get sqrMagnitude() {
            return this._sqrMagnitude;
        }
        set sqrMagnitude(newSqrMagnitude) {
            this._sqrMagnitude = newSqrMagnitude;
        }
        // PRIVATE METHODS
        /**
         * Helper method for calculating square magnitude
         *
         * @private
         * @returns {number}
         * @memberof Vector2
         */
        _computeSqrMagnitude() {
            return (this._x * this._x) + (this._y * this._y);
        }
        /**
         * Helper method for calculating magnitude
         *
         * @private
         * @returns {number}
         * @memberof Vector2
         */
        _computeMagnitude() {
            return Math.sqrt(this._computeSqrMagnitude());
        }
        // PUBLIC METHODS
        /**
         * Add method of Vector2
         *
         * @param {Vector2} rhs
         * @memberof Vector2
         */
        add(rhs) {
            this.x += rhs.x;
            this.y += rhs.y;
        }
        /**
         * Subtract method of Vector2
         *
         * @param {Vector2} rhs
         * @memberof Vector2
         */
        subtract(rhs) {
            this.x -= rhs.x;
            this.y -= rhs.y;
        }
        /**
         * Scale method of Vector2
         *
         * @param {number} scalar
         * @memberof Vector2
         */
        scale(scalar) {
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
        toString() {
            return "(" + this.x + ", " + this.y + ")";
        }
        /**
         * toArray method of Vector2
         * Display x and y in an array
         *
         * @returns {number[]}
         * @memberof Vector2
         */
        toArray() {
            return [this.x, this.y];
        }
        /**
         * This method sets the current vector to a magnitude of 1 (the unit vector)
         *
         * @memberof Vector2
         */
        normalize() {
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
        normalized() {
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
        static zero() {
            return new Vector2(0, 0);
        }
        /**
         * Static method for one
         *
         * @static
         * @returns {Vector2}
         * @memberof Vector2
         */
        static one() {
            return new Vector2(1, 1);
        }
        /**
         * Static method for up
         *
         * @static
         * @returns {Vector2}
         * @memberof Vector2
         */
        static up() {
            return new Vector2(0, -1);
        }
        /**
         * Static method for down
         *
         * @static
         * @returns {Vector2}
         * @memberof Vector2
         */
        static down() {
            return new Vector2(0, 1);
        }
        /**
         * Static method for left
         *
         * @static
         * @returns {Vector2}
         * @memberof Vector2
         */
        static left() {
            return new Vector2(-1, 0);
        }
        /**
         * Static method for right
         *
         * @static
         * @returns {Vector2}
         * @memberof Vector2
         */
        static right() {
            return new Vector2(1, 0);
        }
        /**
         * Static method for dot
         *
         * @static
         * @returns {Vector2}
         * @memberof Vector2
         */
        static dot(lhs, rhs) {
            return (lhs.x * rhs.x) + (lhs.y * rhs.y);
        }
        /**
         * Static method for distance
         *
         * @static
         * @returns {Vector2}
         * @memberof Vector2
         */
        static distance(P1, P2) {
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
        static sqrDistance(P1, P2) {
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
        static add(lhs, rhs) {
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
        static subtract(lhs, rhs) {
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
        static angle(from, to) {
            return Math.acos(util.Mathf.Clamp(Vector2.dot(from.normalized(), to.normalized()), -1, 1)) * 57.29578;
        }
        /**
         * Static method for scale
         *
         * @static
         * @returns {Vector2}
         * @memberof Vector2
         */
        static scale(lhs, scaler) {
            // dot x & dot y
            let theXs = lhs.x * scaler;
            let theYs = lhs.y * scaler;
            return new Vector2(theXs, theYs);
        }
    }
    objects.Vector2 = Vector2;
})(objects || (objects = {}));
//# sourceMappingURL=Vector2.js.map