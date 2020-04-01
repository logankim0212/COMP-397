"use strict";
var enums;
(function (enums) {
    let GameObjectType;
    (function (GameObjectType) {
        GameObjectType[GameObjectType["PLAYER"] = 0] = "PLAYER";
        GameObjectType[GameObjectType["ZOMBIE"] = 1] = "ZOMBIE";
        GameObjectType[GameObjectType["POTHOLE"] = 2] = "POTHOLE";
        GameObjectType[GameObjectType["ROAD"] = 3] = "ROAD";
        GameObjectType[GameObjectType["BUTTON"] = 4] = "BUTTON";
        GameObjectType[GameObjectType["BULLET"] = 5] = "BULLET";
        GameObjectType[GameObjectType["UNDEFINED"] = 6] = "UNDEFINED";
        GameObjectType[GameObjectType["NUM_OF_TYPES"] = 7] = "NUM_OF_TYPES";
    })(GameObjectType = enums.GameObjectType || (enums.GameObjectType = {}));
})(enums || (enums = {}));
//# sourceMappingURL=GameObjectType.js.map