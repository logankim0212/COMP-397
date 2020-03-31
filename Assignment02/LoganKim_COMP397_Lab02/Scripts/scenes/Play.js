"use strict";
var scenes;
(function (scenes) {
    class Play extends objects.Scene {
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        constructor() {
            super();
            this._road = new objects.Road();
            this._pothole = new objects.Pothole();
            this._player = new objects.Player();
            this.Start();
        }
        // PRIVATE METHODS
        // PUBLIC METHODS
        Start() {
            this.Main();
        }
        Update() {
            this._road.Update();
            this._pothole.Update();
            this._player.Update();
        }
        Main() {
            this.addChild(this._road);
            this.addChild(this._pothole);
            this.addChild(this._player);
        }
        Clean() {
            this.removeAllChildren();
        }
    }
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=Play.js.map