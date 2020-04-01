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
            this._bulletManager = new managers.BulletManager();
            this._isReloading = false;
            this.keyPressedStates = [];
            this.Start();
        }
        // PRIVATE METHODS
        // PUBLIC METHODS
        Start() {
            config.Game.CURRENT_SCENE = this;
            for (let index = 0; index < config.Game.ZOMBIE_NUMBER; index++) {
                this._zombies.push(new objects.Zombie());
            }
            config.Game.SCORE_BOARD = this._scoreBoard;
            config.Game.BULLET_MANAGER = this._bulletManager;
            this.Main();
        }
        Update() {
            this.detectPressedKeys();
            this._road.Update();
            this._pothole.Update();
            this._player.Update();
            this._bulletManager.Update();
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
            this._bulletManager.AddBulletsToScene();
            this.addChild(this._scoreBoard.LivesLabel);
            this.addChild(this._scoreBoard.BulletLabel);
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
            if (!this._isReloading) {
                if (this.keyPressedStates[32 /* SPACE */]) {
                    this._player.FireBullet();
                }
            }
            if (this.keyPressedStates[77 /* M */]) {
                this._isReloading = true;
                setTimeout(() => {
                    // config.Game.BULLET_NUMBER = 10;
                    config.Game.SCORE_BOARD.Bullet = 10;
                    this._isReloading = false;
                }, 1000);
            }
        }
    }
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=Play.js.map