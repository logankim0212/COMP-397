"use strict";
var managers;
(function (managers) {
    class Collision {
        static AABBCheck(object1, object2) {
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
                    Collision._collisionResponse(object2);
                    object2.isColliding = true;
                    return true;
                }
            }
            else {
                object2.isColliding = false;
            }
            return false;
        }
        /**
         * Helper method to assist with Collision Response
         *
         * @private
         * @static
         * @param {objects.GameObject} object2
         * @memberof Collision
         */
        static _collisionResponse(object2) {
            switch (object2.type) {
                case enums.GameObjectType.POTHOLE:
                    {
                        console.log("Collision with Pothole!");
                        config.Game.MOVING_TIME = 0.02;
                        setTimeout(() => {
                            config.Game.MOVING_TIME = 0.1;
                        }, 1000);
                    }
                    break;
                case enums.GameObjectType.ZOMBIE:
                    {
                        console.log("Collision with Zombie!");
                        config.Game.SCORE_BOARD.Lives -= 1;
                        // check if lives falls less than 1 and then switch to END scene
                        if (config.Game.LIVES < 1) {
                            config.Game.SCENE_STATE = scenes.State.START; // TODO: Change to end
                            config.Game.LIVES = 3;
                            config.Game.SCORE = 0;
                        }
                    }
                    break;
            }
        }
    }
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=Collision.js.map