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
     * Class fo Player object
     *
     * @export
     * @class Player
     * @extends {GameObject}
     */
    class Player extends objects.GameObject {
        // CONSTRUCTOR
        /**
         * Creates an instance of Player object
         * @memberof Player
         */
        constructor() {
            super(config.Game.ASSETS.getResult("avatar"), 300, 500, true);
            this.Start();
        }
        // PRIVATE METHODS
        /**
         * Check Bounds method for Player object
         *
         * @protected
         * @memberof Player
         */
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
        /**
         * Move method of Player object
         *
         * @private
         * @memberof Player
         */
        _move() {
            // when using mouse
            // let newPositionX = util.Mathf.Lerp(this.position.x, this.stage.mouseX, config.Game.MOVING_TIME);
            // let newPositionY = util.Mathf.Lerp(this.position.y, this.stage.mouseY, config.Game.MOVING_TIME);
            // this.position = new Vector2(newPositionX, newPositionY);
            // when using keyboard
            this.position = new objects.Vector2(this.position.x, this.position.y);
            this._bulletSpawn = new objects.Vector2(this.position.x, this.position.y - this.halfHeight - 10);
        }
        // PUBLIC METHODS
        /**
         * Start method of Player object
         *
         * @memberof Player
         */
        Start() {
            // set type to player
            this.type = enums.GameObjectType.PLAYER;
            // set name to plater
            this.name = "player";
        }
        /**
         * Update method of Player object
         *
         * @memberof Player
         */
        Update() {
            // move and check its bounds
            this._move();
            this._checkBounds();
        }
        /**
         * Reset method of Player object
         *
         * @memberof Player
         */
        Reset() { }
        /**
         * Helper method for moving left
         *
         * @memberof Player
         */
        moveLeft() {
            this.position.add(objects.Vector2.scale(objects.Vector2.left(), config.Game.MOVING_TIME));
        }
        /**
         * Helper method for moving right
         *
         * @memberof Player
         */
        moveRight() {
            this.position.add(objects.Vector2.scale(objects.Vector2.right(), config.Game.MOVING_TIME));
        }
        /**
         * Helper method for moving up
         *
         * @memberof Player
         */
        moveUp() {
            this.position.add(objects.Vector2.scale(objects.Vector2.up(), config.Game.MOVING_TIME));
        }
        /**
         * Helper method for moving down
         *
         * @memberof Player
         */
        moveDown() {
            this.position.add(objects.Vector2.scale(objects.Vector2.down(), config.Game.MOVING_TIME));
        }
        /**
         * Fire Bullet method of Player object
         *
         * @memberof Player
         */
        FireBullet() {
            // if a player has bullets
            if (config.Game.BULLET_NUMBER > 0) {
                // if a bullet is not fired just now
                if (!config.Game.SHOOTING_STATUS) {
                    // play shooting sound
                    let shootingSound = createjs.Sound.play("shootingSound");
                    shootingSound.volume = 0.1; // 10% volume
                    // set shooting status
                    config.Game.SHOOTING_STATUS = true;
                    // if it is not special bullet, reduce bullet number
                    if (!config.Game.SPECIAL_ENABLED) {
                        config.Game.SCORE_BOARD.Bullet -= 1;
                    }
                    // get bullet and make it active
                    let bullet = config.Game.BULLET_MANAGER.GetBullet();
                    bullet.isActive = true;
                    bullet.position = this._bulletSpawn;
                    // prevent a player from shooting continuously by setting timeout to 0.1s
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