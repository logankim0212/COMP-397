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
var scenes;
(function (scenes) {
    /**
     * This is used for the scene state which can be assigned to each scene and accessed everywhere
     *
     * @export
     * @enum {number}
     */
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