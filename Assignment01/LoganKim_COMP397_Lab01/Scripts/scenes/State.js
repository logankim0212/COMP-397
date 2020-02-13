"use strict";
var scenes;
(function (scenes) {
    let State;
    (function (State) {
        State[State["NO_SCENE"] = -1] = "NO_SCENE";
        State[State["START"] = 0] = "START";
        State[State["PLAY"] = 1] = "PLAY";
        State[State["END"] = 2] = "END";
        State[State["NUM_OF_SCENE"] = 3] = "NUM_OF_SCENE";
    })(State = scenes.State || (scenes.State = {}));
})(scenes || (scenes = {}));
//# sourceMappingURL=State.js.map