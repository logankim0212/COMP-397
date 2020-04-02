"use strict";
var objects;
(function (objects) {
    class Heart extends objects.GameObject {
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        constructor() {
            super(config.Game.ASSETS.getResult("heart"), new objects.Vector2(), true);
            this.Start();
        }
        // PRIVATE METHODS
        _checkBounds() {
            if (this.y >= config.Game.SCREEN_HEIGHT * 2 + this.height) {
                this.Reset();
            }
        }
        _move() {
            this.position = objects.Vector2.add(this.position, this.velocity);
        }
        // PUBLIC METHODS
        Start() {
            setTimeout(() => {
                this.type = enums.GameObjectType.HEART;
                this._verticalSpeed = config.Game.VERTICAL_SPEED; // 10 px per frame
                this.velocity = new objects.Vector2(0, this._verticalSpeed);
                this.Reset();
            }, 300);
        }
        Update() {
            this._move();
            this._checkBounds();
        }
        Reset() {
            let randomX = util.Mathf.RandomRange(this.halfWidth, config.Game.SCREEN_WIDTH - this.halfWidth);
            let y = -(config.Game.SCREEN_HEIGHT * 7 + this.height);
            this.position = new objects.Vector2(randomX, y);
        }
    }
    objects.Heart = Heart;
})(objects || (objects = {}));
//# sourceMappingURL=Heart.js.map