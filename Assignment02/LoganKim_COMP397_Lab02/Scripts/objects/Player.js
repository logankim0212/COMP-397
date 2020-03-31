"use strict";
var objects;
(function (objects) {
    class Player extends objects.GameObject {
        // PRIVATE INSTANCE MEMBERS
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        constructor() {
            super(config.Game.ASSETS.getResult("avatar"), 0, 0, true);
            this.Start();
        }
        // PRIVATE METHODS
        _checkBounds() {
            // left boundary
            if (this.position.x <= this.halfWidth) {
                this.position = new objects.Vector2(this.halfWidth, this.position.y);
            }
            // right boundary
            if (this.position.x >= config.Game.SCREEN_WIDTH - this.halfWidth) {
                this.position = new objects.Vector2(config.Game.SCREEN_WIDTH - this.halfWidth, this.position.y);
            }
        }
        _move() {
            let newPositionX = util.Mathf.Lerp(this.position.x, this.stage.mouseX, config.Game.MOVING_TIME);
            let newPositionY = util.Mathf.Lerp(this.position.y, this.stage.mouseY, config.Game.MOVING_TIME);
            this.position = new objects.Vector2(newPositionX, newPositionY);
        }
        // PUBLIC METHODS
        Start() {
            this.type = enums.GameObjectType.PLAYER;
            this.name = "player";
        }
        Update() {
            this._move();
            this._checkBounds();
        }
        Reset() {
        }
    }
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=Player.js.map