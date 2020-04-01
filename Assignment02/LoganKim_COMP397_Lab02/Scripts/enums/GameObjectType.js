"use strict";
var enums;
(function (enums) {
    let GameObjectType;
    (function (GameObjectType) {
        GameObjectType[GameObjectType["PLAYER"] = 0] = "PLAYER";
        GameObjectType[GameObjectType["ZOMBIE"] = 1] = "ZOMBIE";
        GameObjectType[GameObjectType["POTHOLE"] = 2] = "POTHOLE";
        GameObjectType[GameObjectType["HEART"] = 3] = "HEART";
        GameObjectType[GameObjectType["ROAD"] = 4] = "ROAD";
        GameObjectType[GameObjectType["BUTTON"] = 5] = "BUTTON";
        GameObjectType[GameObjectType["BULLET"] = 6] = "BULLET";
        GameObjectType[GameObjectType["UNDEFINED"] = 7] = "UNDEFINED";
        GameObjectType[GameObjectType["NUM_OF_TYPES"] = 8] = "NUM_OF_TYPES";
    })(GameObjectType = enums.GameObjectType || (enums.GameObjectType = {}));
})(enums || (enums = {}));
//# sourceMappingURL=GameObjectType.js.map