"use strict";
var scenes;
(function (scenes) {
    let State;
    (function (State) {
        State[State["NO_SCENE"] = -1] = "NO_SCENE";
        State[State["SPLASH"] = 0] = "SPLASH";
        State[State["START"] = 1] = "START";
        State[State["MAIN"] = 2] = "MAIN";
        State[State["INSTRUCTION"] = 3] = "INSTRUCTION";
        State[State["EXIT"] = 4] = "EXIT";
        State[State["PLAY"] = 5] = "PLAY";
        State[State["GAMEOVER"] = 6] = "GAMEOVER";
        State[State["NUM_OF_SCENES"] = 7] = "NUM_OF_SCENES";
    })(State = scenes.State || (scenes.State = {}));
})(scenes || (scenes = {}));
//# sourceMappingURL=State.js.map