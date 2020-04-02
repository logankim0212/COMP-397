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

module managers {
    /**
     * Class to manage all collision
     *
     * @export
     * @class Collision
     */
    export class Collision {
        /**
         * Method to check AABB Collision
         *
         * @static
         * @param {(objects.GameObject | objects.GameObjectSprite)} object1
         * @param {(objects.GameObject | objects.GameObjectSprite)} object2
         * @returns {boolean}
         * @memberof Collision
         */
        public static AABBCheck(object1: objects.GameObject | objects.GameObjectSprite, object2: objects.GameObject | objects.GameObjectSprite): boolean {
            let object1Offset = (!object1.isCentered) ? new objects.Vector2(0, 0) : new objects.Vector2(object1.halfWidth, object1.halfHeight);
            let object2Offset = (!object2.isCentered) ? new objects.Vector2(0, 0) : new objects.Vector2(object2.halfWidth, object2.halfHeight);

            let object1TopLeft = new objects.Vector2(object1.position.x - object1Offset.x, object1.position.y - object1Offset.y);
            let object2TopLeft = new objects.Vector2(object2.position.x - object2Offset.x, object2.position.y - object2Offset.y);

            // AABB Collision Detection
            if (object1TopLeft.x < object2TopLeft.x + object2.width &&
                object1TopLeft.x + object1.width > object2TopLeft.x &&
                object1TopLeft.y < object2TopLeft.y + object2.height &&
                object1TopLeft.y + object1.height > object2TopLeft.y) {
                if (!object2.isColliding) {
                    Collision._collisionResponse(object1, object2);

                    object2.isColliding = true;
                    return true;
                }
            } else {
                object2.isColliding = false;
            }
            return false;
        }


        /**
         * Helper method to assist with collision response
         *
         * @private
         * @static
         * @param {objects.GameObject} object2
         * @memberof Collision
         */
        private static _collisionResponse(object1: objects.GameObject | objects.GameObjectSprite, object2: objects.GameObject | objects.GameObjectSprite) {
            switch (object2.type) {
                case enums.GameObjectType.POTHOLE:
                    {
                        let potholeSound = createjs.Sound.play("potholeSound");
                        potholeSound.volume = 0.1; // 10% volume

                        // config.Game.MOVING_TIME = 0.02; // when using mouse
                        config.Game.MOVING_TIME = 2; // when using keyboard

                        setTimeout(() => {
                            // config.Game.MOVING_TIME = 0.1; // when using mouse
                            config.Game.MOVING_TIME = 7; // when using keyboard
                        }, 500);
                    }
                    break;
                case enums.GameObjectType.ZOMBIE:
                    {
                        if (!config.Game.CHEAT_ENABLED && !config.Game.INVINCIBLE_ENABLED) {
                            if (!config.Game.COLLISION_STATUS) {
                                config.Game.SCORE_BOARD.Lives -= 1;
                            }
                            let hitZombieSound = createjs.Sound.play("hitZombieSound");
                            hitZombieSound.volume = 0.1; // 10% volume

                            object1.alpha = 0.5;
                            config.Game.COLLISION_STATUS = true
                            setTimeout(() => {
                                object1.alpha = 1;
                                config.Game.COLLISION_STATUS = false
                            }, 500);

                            // check if lives falls less than 1 and then switch to END scene
                            if (config.Game.LIVES < 1) {
                                if (config.Game.HIGH_SCORE <= config.Game.SCORE) {
                                    config.Game.HIGH_SCORE = config.Game.SCORE;
                                }
                                config.Game.SCENE_STATE = scenes.State.GAMEOVER;
                            }
                        }
                    }
                    break;
                case enums.GameObjectType.BULLET:
                    {
                        if (!config.Game.SPECIAL_ENABLED) {
                            config.Game.SCORE_BOARD.Score += 100;
                        } else {
                            config.Game.SCORE_BOARD.Score += 200;
                        }

                        let zombieDeathSound = createjs.Sound.play("zombieDeathSound");
                        zombieDeathSound.volume = 0.1; // 10% volume

                        object1.Reset();
                        object2.Reset();
                    }
                    break;
                case enums.GameObjectType.HEART:
                    {
                        config.Game.SCORE_BOARD.Lives += 1;

                        let heartSound = createjs.Sound.play("heartSound");
                        heartSound.volume = 0.1; // 10% volume

                        object2.Reset();
                    }
                    break;
                case enums.GameObjectType.POWERUP:
                    {
                        let powerupSound = createjs.Sound.play("powerupSound");
                        powerupSound.volume = 0.2; // 20% volume

                        config.Game.SCORE_BOARD.Bullet = 20;
                        config.Game.INVINCIBLE_ENABLED = true;
                        object1.alpha = 0.5;
                        config.Game.SPECIAL_ENABLED = true;
                        setTimeout(() => {
                            object1.alpha = 1;
                            config.Game.INVINCIBLE_ENABLED = false;
                            config.Game.SPECIAL_ENABLED = false;
                        }, 4600);

                        object2.Reset();
                    }
                    break;
            }
        }
    }
}