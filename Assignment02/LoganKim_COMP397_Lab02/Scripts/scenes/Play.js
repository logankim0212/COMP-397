"use strict";
var scenes;
(function (scenes) {
    class Play extends objects.Scene {
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        constructor() {
            super();
            this._road = new objects.Road();
            this.Start();
        }
        // PRIVATE METHODS
        // PUBLIC METHODS
        Start() {
            this.Main();
        }
        Update() {
            this._road.Update();
        }
        Main() {
            this.addChild(this._road);
        }
        Clean() {
            this.removeAllChildren();
        }
    }
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=Play.js.map