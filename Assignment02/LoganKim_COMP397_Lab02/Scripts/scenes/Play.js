"use strict";
var scenes;
(function (scenes) {
    class Play extends objects.Scene {
        // CONSTRUCTOR
        constructor() {
            super();
            this._road = new objects.Road();
            this._pothole = new objects.Pothole();
            this._player = new objects.Player();
            this._zombies = new Array(); // empty container
            this._scoreBoard = new managers.ScoreBoard();
            this.keyPressedStates = [];
            this.Start();
        }
        // PRIVATE METHODS
        // PUBLIC METHODS
        Start() {
            for (let index = 0; index < config.Game.ZOMBIE_NUMBER; index++) {
                this._zombies.push(new objects.Zombie());
            }
            config.Game.SCORE_BOARD = this._scoreBoard;
            this.Main();
        }
        Update() {
            this.detectPressedKeys();
            this._road.Update();
            this._pothole.Update();
            this._player.Update();
            managers.Collision.AABBCheck(this._player, this._pothole);
            this._zombies.forEach(zombie => {
                zombie.Update();
                managers.Collision.AABBCheck(this._player, zombie);
            });
        }
        Main() {
            this.addChild(this._road);
            this.addChild(this._pothole);
            for (const zombie of this._zombies) {
                this.addChild(zombie);
            }
            this.addChild(this._player);
            this.addChild(this._scoreBoard.LivesLabel);
            this.addChild(this._scoreBoard.ScoreLabel);
        }
        Clean() {
            this.removeAllChildren();
        }
        detectPressedKeys() {
            if (this.keyPressedStates[87 /* W */]) {
                this._player.moveUp();
            }
            else if (this.keyPressedStates[83 /* S */]) {
                this._player.moveDown();
            }
            if (this.keyPressedStates[65 /* A */]) {
                this._player.moveLeft();
            }
            else if (this.keyPressedStates[68 /* D */]) {
                this._player.moveRight();
            }
        }
    }
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=Play.js.map