"use strict";
var objects;
(function (objects) {
    class Zombie extends objects.GameObject {
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        constructor() {
            super(config.Game.ASSETS.getResult("zombie"), new objects.Vector2(), true);
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
            this.type = enums.GameObjectType.ZOMBIE;
            this.Reset();
        }
        Update() {
            this._move();
            this._checkBounds();
        }
        Reset() {
            this._verticalSpeed = util.Mathf.RandomRange(10, 12);
            this._horizontalSpeed = util.Mathf.RandomRange(-1, 1);
            this.velocity = new objects.Vector2(this._horizontalSpeed, this._verticalSpeed);
            let randomX = util.Mathf.RandomRange(this.halfWidth, config.Game.SCREEN_WIDTH - this.halfWidth);
            let randomY = util.Mathf.RandomRange(-this.height * 3, -this.height);
            this.position = new objects.Vector2(randomX, randomY);
        }
    }
    objects.Zombie = Zombie;
})(objects || (objects = {}));
//# sourceMappingURL=Zombie.js.map