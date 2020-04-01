"use strict";
var objects;
(function (objects) {
    class Player extends objects.GameObject {
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        constructor() {
            super(config.Game.ASSETS.getResult("avatar"), 300, 500, true);
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
            // top boundary
            if (this.position.y <= this.halfHeight) {
                this.position = new objects.Vector2(this.position.x, this.halfHeight);
            }
            // bottom boundary
            if (this.position.y >= config.Game.SCREEN_HEIGHT - this.halfHeight) {
                this.position = new objects.Vector2(this.position.x, config.Game.SCREEN_HEIGHT - this.halfHeight);
            }
        }
        _move() {
            // let newPositionX = util.Mathf.Lerp(this.position.x, this.stage.mouseX, config.Game.MOVING_TIME);
            // let newPositionY = util.Mathf.Lerp(this.position.y, this.stage.mouseY, config.Game.MOVING_TIME);
            // this.position = new Vector2(newPositionX, newPositionY);
            this.position = new objects.Vector2(this.position.x, this.position.y);
            this._bulletSpawn = new objects.Vector2(this.position.x, this.position.y - this.halfHeight - 10);
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
        moveLeft() {
            this.position.add(objects.Vector2.scale(objects.Vector2.left(), config.Game.MOVING_TIME));
        }
        moveRight() {
            this.position.add(objects.Vector2.scale(objects.Vector2.right(), config.Game.MOVING_TIME));
        }
        moveUp() {
            this.position.add(objects.Vector2.scale(objects.Vector2.up(), config.Game.MOVING_TIME));
        }
        moveDown() {
            this.position.add(objects.Vector2.scale(objects.Vector2.down(), config.Game.MOVING_TIME));
        }
        FireBullet() {
            if (config.Game.BULLET_NUMBER > 0) {
                if (!config.Game.SHOOTING_STATUS) {
                    let shootingSound = createjs.Sound.play("shootingSound");
                    shootingSound.volume = 0.1; // 10% volume
                    config.Game.SHOOTING_STATUS = true;
                    if (!config.Game.SPECIAL_ENABLED) {
                        config.Game.SCORE_BOARD.Bullet -= 1;
                    }
                    let bullet = config.Game.BULLET_MANAGER.GetBullet();
                    bullet.isActive = true;
                    bullet.position = this._bulletSpawn;
                    setTimeout(() => {
                        config.Game.SHOOTING_STATUS = false;
                    }, 100);
                }
            }
        }
    }
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=Player.js.map