"use strict";
var objects;
(function (objects) {
    class Pothole extends objects.GameObject {
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        constructor() {
            super(config.Game.ASSETS.getResult("pothole"), new objects.Vector2(), true);
            this.Start();
        }
        // PRIVATE METHODS
        _checkBounds() {
            if (this.y >= config.Game.SCREEN_HEIGHT + this.height) {
                this.Reset();
            }
        }
        _move() {
            this.position = objects.Vector2.add(this.position, this.velocity);
        }
        // PUBLIC METHODS
        Start() {
            this.type = enums.GameObjectType.POTHOLE;
            this._verticalSpeed = 10; // 10 px per frame
            this.velocity = new objects.Vector2(0, this._verticalSpeed);
            this.Reset();
        }
        Update() {
            this._move();
            this._checkBounds();
        }
        Reset() {
            let randomX = util.Mathf.RandomRange(this.halfWidth, config.Game.SCREEN_WIDTH - this.halfWidth);
            this.position = new objects.Vector2(randomX, -this.height);
        }
    }
    objects.Pothole = Pothole;
})(objects || (objects = {}));
//# sourceMappingURL=Pothole.js.map