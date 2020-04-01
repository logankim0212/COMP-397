"use strict";
var enums;
(function (enums) {
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