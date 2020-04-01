"use strict";
var scenes;
(function (scenes) {
    let State;
    (function (State) {
        State[State["NO_SCENE"] = -1] = "NO_SCENE";
        State[State["SPLASH"] = 0] = "SPLASH";
        State[State["START"] = 1] = "START";
        State[State["INSTRUCTION"] = 2] = "INSTRUCTION";
        State[State["EXIT"] = 3] = "EXIT";
        State[State["PLAY"] = 4] = "PLAY";
        State[State["GAMEOVER"] = 5] = "GAMEOVER";
        State[State["NUM_OF_SCENES"] = 6] = "NUM_OF_SCENES";
    })(State = scenes.State || (scenes.State = {}));
})(scenes || (scenes = {}));
//# sourceMappingURL=State.js.map