"use strict";
var scenes;
(function (scenes) {
    let State;
    (function (State) {
        State[State["NO_SCENE"] = -1] = "NO_SCENE";
        State[State["START"] = 0] = "START";
        State[State["INSTRUCTION"] = 1] = "INSTRUCTION";
        State[State["EXIT"] = 2] = "EXIT";
        State[State["PLAY"] = 3] = "PLAY";
        State[State["END"] = 4] = "END";
        State[State["NUM_OF_SCENES"] = 5] = "NUM_OF_SCENES";
    })(State = scenes.State || (scenes.State = {}));
})(scenes || (scenes = {}));
//# sourceMappingURL=State.js.map