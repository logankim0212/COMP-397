"use strict";
var objects;
(function (objects) {
    class Vector2 {
        constructor(first = 0, second = 0, third) {
            // Initialize member variables
            this._x = 0;
            this._y = 0;
            this._magnitude = 0;
            this._sqrMagnitude = 0;
            if (third != undefined) {
                this._displayObject = third;
            }
            if (typeof first == "number") {
                // set x and y
                this.x = first;
                this.y = second;
            }
            if (first instanceof Array) {
                // set x and y
                this.x = first[0];
                this.y = first[1];
            }
            if (first instanceof Vector2) {
                // set x and y
                this.x = first.x;
                this.y = first.y;
            }
        }
        // PUBLIC PROPERTIES
        get x() {
            return this._x;
        }
        set x(newX) {
            this._x = newX;
            this.sqrMagnitude = this._computeSqrMagnitude();
            this.magnitude = this._computeMagnitude();
            if (this._displayObject != undefined) {
                this._displayObject.x = this._x;
            }
        }
        get y() {
            return this._y;
        }
        set y(newY) {
            this._y = newY;
            this.sqrMagnitude = this._computeSqrMagnitude();
            this.magnitude = this._computeMagnitude();
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
        _computeSqrMagnitude() {
            return (this._x * this._x) + (this._y * this._y);
        }
        _computeMagnitude() {
            return Math.sqrt(this._computeSqrMagnitude());
        }
        // PUBLIC METHODS
        add(rhs) {
            this.x += rhs.x;
            this.y += rhs.y;
        }
        subtract(rhs) {
            this.x -= rhs.x;
            this.y -= rhs.y;
        }
        scale(scalar) {
            this.x *= scalar;
            this.y *= scalar;
        }
        toString() {
            return "(" + this.x + ", " + this.y + ")";
        }
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
        static zero() {
            return new Vector2(0, 0);
        }
        static one() {
            return new Vector2(1, 1);
        }
        static up() {
            return new Vector2(0, -1);
        }
        static down() {
            return new Vector2(0, 1);
        }
        static left() {
            return new Vector2(-1, 0);
        }
        static right() {
            return new Vector2(1, 0);
        }
        static dot(lhs, rhs) {
            return (lhs.x * rhs.x) + (lhs.y * rhs.y);
        }
        static distance(P1, P2) {
            let diffXs = P2.x - P1.x;
            let diffYs = P2.y - P1.y;
            return Math.sqrt((diffXs * diffXs) + (diffYs * diffYs));
        }
        static sqrDistance(P1, P2) {
            let diffXs = P2.x - P1.x;
            let diffYs = P2.y - P1.y;
            return (diffXs * diffXs) + (diffYs * diffYs);
        }
        static add(lhs, rhs) {
            let theXs = lhs.x + rhs.x;
            let theYs = lhs.y + rhs.y;
            return new Vector2(theXs, theYs);
        }
        static subtract(lhs, rhs) {
            let theXs = lhs.x - rhs.x;
            let theYs = lhs.y - rhs.y;
            return new Vector2(theXs, theYs);
        }
        static angle(from, to) {
            return Math.acos(util.Mathf.Clamp(Vector2.dot(from.normalized(), to.normalized()), -1, 1)) * 57.29578;
        }
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