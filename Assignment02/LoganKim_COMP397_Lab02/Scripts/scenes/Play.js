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
            this._zombies = new Array(); // empty container
            this.Start();
        }
        // PRIVATE METHODS
        // PUBLIC METHODS
        Start() {
            for (let index = 0; index < config.Game.ZOMBIE_NUMBER; index++) {
                this._zombies.push(new objects.Zombie());
            }
            this.Main();
        }
        Update() {
            this._road.Update();
            this._pothole.Update();
            this._player.Update();
            this._zombies.forEach(zombie => {
                zombie.Update();
            });
        }
        Main() {
            this.addChild(this._road);
            this.addChild(this._pothole);
            for (const zombie of this._zombies) {
                this.addChild(zombie);
            }
            this.addChild(this._player);
        }
        Clean() {
            this.removeAllChildren();
        }
    }
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=Play.js.map