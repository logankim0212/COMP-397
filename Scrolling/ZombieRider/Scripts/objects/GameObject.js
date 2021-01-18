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
     * Class for Game Object Bitmap
     *
     * @export
     * @abstract
     * @class GameObject
     * @extends {createjs.Bitmap}
     */
    class GameObject extends createjs.Bitmap {
        constructor(first = config.Game.ASSETS.getResult("placeholder"), second = 0, third = 0, fourth = false) {
            super(first);
            // initialization
            this._width = 0;
            this._height = 0;
            this._halfWidth = 0;
            this._halfHeight = 0;
            this._position = new objects.Vector2(0, 0, this);
            this._velocity = new objects.Vector2(0, 0);
            this._isColliding = false;
            this._isCentered = false;
            this._isActive = false;
            this._type = enums.GameObjectType.UNDEFINED;
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            // depends on the type of value for third, perform different function
            if (typeof third == "boolean") {
                this.isCentered = third;
            }
            else if (typeof third == "undefined") {
                this.isCentered = false;
            }
            // depends on the type of value for fourth, perform different function
            if (fourth) {
                this.isCentered = fourth;
            }
            // depends on the type of value for second and third, perform different function
            if ((typeof second == "number") && (typeof third == "number")) {
                this.position = new objects.Vector2(second, third, this);
            }
            // depends on the type of value for second, perform different function
            if (second instanceof objects.Vector2) {
                this.position = second;
            }
        }
        // PUBLIC PROPERTIES
        // getters and setters
        get width() {
            return this._width;
        }
        set width(newWidth) {
            // set width and half width
            this._width = newWidth;
            this._halfWidth = this._computeHalfWidth();
        }
        get height() {
            return this._height;
        }
        set height(newHeight) {
            // set height and half height
            this._height = newHeight;
            this._halfHeight = this._computeHalfHeight();
        }
        get halfWidth() {
            return this._halfWidth;
        }
        get halfHeight() {
            return this._halfHeight;
        }
        get position() {
            return this._position;
        }
        set position(newPosition) {
            // set position along with x and y
            this._position = newPosition;
            this.x = newPosition.x;
            this.y = newPosition.y;
        }
        get velocity() {
            return this._velocity;
        }
        set velocity(newVelocity) {
            this._velocity = newVelocity;
        }
        get isColliding() {
            return this._isColliding;
        }
        set isColliding(newState) {
            this._isColliding = newState;
        }
        get isCentered() {
            return this._isCentered;
        }
        set isCentered(newState) {
            // center an object
            this._isCentered = newState;
            if (newState) {
                this._centerGameObject();
            }
        }
        get isActive() {
            return this._isActive;
        }
        set isActive(v) {
            this._isActive = v;
        }
        get type() {
            return this._type;
        }
        set type(v) {
            this._type = v;
        }
        // PRIVATE METHODS
        /**
         * Method for calculating half width
         *
         * @private
         * @returns {number}
         * @memberof GameObject
         */
        _computeHalfWidth() {
            return this.width * 0.5;
        }
        /**
         * Method for calculating half height
         *
         * @private
         * @returns {number}
         * @memberof GameObject
         */
        _computeHalfHeight() {
            return this.height * 0.5;
        }
        /**
         * Method for centering an object
         *
         * @private
         * @memberof GameObject
         */
        _centerGameObject() {
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
        }
    }
    objects.GameObject = GameObject;
})(objects || (objects = {}));
//# sourceMappingURL=GameObject.js.map