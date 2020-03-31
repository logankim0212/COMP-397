module managers {
    export class Collision {
        public static AABBCheck(object1: objects.GameObject, object2: objects.GameObject): boolean {
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
            } else {
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
        private static _collisionResponse(object2: objects.GameObject) {
            switch (object2.type) {
                case enums.GameObjectType.POTHOLE:
                    {
                        console.log("Collision with Pothole!");
                    }
                    break;
                case enums.GameObjectType.ZOMBIE:
                    {
                        console.log("Collision with Zombie!");
                    }
                    break;
            }
        }
    }
}