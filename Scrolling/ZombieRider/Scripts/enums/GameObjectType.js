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
var enums;
(function (enums) {
    /**
     * This is used for the game object types which can be assigned to each object
     *
     * @export
     * @enum {number}
     */
    let GameObjectType;
    (function (GameObjectType) {
        GameObjectType[GameObjectType["PLAYER"] = 0] = "PLAYER";
        GameObjectType[GameObjectType["ZOMBIE"] = 1] = "ZOMBIE";
        GameObjectType[GameObjectType["POTHOLE"] = 2] = "POTHOLE";
        GameObjectType[GameObjectType["HEART"] = 3] = "HEART";
        GameObjectType[GameObjectType["POWERUP"] = 4] = "POWERUP";
        GameObjectType[GameObjectType["ROAD"] = 5] = "ROAD";
        GameObjectType[GameObjectType["BUTTON"] = 6] = "BUTTON";
        GameObjectType[GameObjectType["BULLET"] = 7] = "BULLET";
        GameObjectType[GameObjectType["UNDEFINED"] = 8] = "UNDEFINED";
        GameObjectType[GameObjectType["NUM_OF_TYPES"] = 9] = "NUM_OF_TYPES";
    })(GameObjectType = enums.GameObjectType || (enums.GameObjectType = {}));
})(enums || (enums = {}));
//# sourceMappingURL=GameObjectType.js.map