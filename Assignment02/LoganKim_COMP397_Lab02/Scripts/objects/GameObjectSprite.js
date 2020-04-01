"use strict";
var objects;
(function (objects) {
    class GameObjectSprite extends createjs.Sprite {
        constructor(first, second = "placeholder", third = 0, fourth = 0, fifth = false) {
            super(first, second);
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
            if (fifth != undefined) {
                this.isCentered = fifth;
            }
            if (typeof fourth == "boolean") {
                this.isCentered = fourth;
            }
            if ((typeof third == "number") && (typeof fourth == "number")) {
                this.position = new objects.Vector2(third, fourth, this);
            }
            if (third instanceof objects.Vector2) {
                this.position = third;
            }
        }
        // PUBLIC PROPERTIES
        get width() {
            return this._width;
        }
        set width(newWidth) {
            this._width = newWidth;
            this._halfWidth = this._computeHalfWidth();
        }
        get height() {
            return this._height;
        }
        set height(newHeight) {
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
        _computeHalfWidth() {
            return this.width * 0.5;
        }
        _computeHalfHeight() {
            return this.height * 0.5;
        }
        _centerGameObject() {
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
        }
    }
    objects.GameObjectSprite = GameObjectSprite;
})(objects || (objects = {}));
//# sourceMappingURL=GameObjectSprite.js.map