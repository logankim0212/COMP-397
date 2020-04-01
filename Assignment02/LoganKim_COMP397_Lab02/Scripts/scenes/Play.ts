module scenes {
    export class Play extends objects.Scene {
        // PRIVATE INSTANCE MEMBERS
        private _road: objects.Road;
        private _pothole: objects.Pothole;
        private _heart: objects.Heart;
        private _powerup: objects.Powerup;
        private _player: objects.Player;
        private _zombies: Array<objects.Zombie>;
        private _scoreBoard: managers.ScoreBoard;
        private _bulletManager: managers.BulletManager;
        private _isReloading: boolean;
        private _isCheatEnabled: boolean;
        private _reloadingSound: createjs.AbstractSoundInstance;

        // PUBLIC PROPERTIES
        public keyPressedStates: boolean[]; // to detect which keys are down

        // CONSTRUCTOR
        constructor() {
            super();
            this._road = new objects.Road();
            this._pothole = new objects.Pothole();
            this._heart = new objects.Heart();
            this._powerup = new objects.Powerup();
            this._player = new objects.Player();
            this._zombies = new Array<objects.Zombie>(); // empty container
            this._scoreBoard = new managers.ScoreBoard();
            this._bulletManager = new managers.BulletManager();
            this._isReloading = false;
            this._isCheatEnabled = false;

            this.keyPressedStates = [];

            this.Start();
        }

        // PRIVATE METHODS

        // PUBLIC METHODS
        public Start(): void {
            config.Game.CURRENT_SCENE = this;

            for (let index = 0; index < config.Game.ZOMBIE_NUMBER; index++) {
                this._zombies.push(new objects.Zombie());
            }

            config.Game.SCORE_BOARD = this._scoreBoard;

            config.Game.BULLET_MANAGER = this._bulletManager;

            this.Main();
        }

        public Update(): void {
            this.detectPressedKeys();
            if (config.Game.SPECIAL_ENABLED) {
                if (createjs.Ticker.getTicks() % -config.Game.BULLET_SPEED == 0) {
                    this._player.FireBullet();
                }
            }

            this._road.Update();
            this._pothole.Update();
            this._heart.Update();
            this._powerup.Update();
            this._player.Update();

            this._bulletManager.Update();

            managers.Collision.AABBCheck(this._player, this._pothole);
            managers.Collision.AABBCheck(this._player, this._heart);
            managers.Collision.AABBCheck(this._player, this._powerup);

            this._zombies.forEach(zombie => {
                zombie.Update();
                managers.Collision.AABBCheck(this._player, zombie);

                for (let i = 0; i < this._bulletManager.BulletPool.length; i++) {
                    managers.Collision.AABBCheck(zombie, this._bulletManager.BulletPool[i]);
                }
            });
        }

        public Main(): void {
            this.addChild(this._road);
            this.addChild(this._pothole);
            this.addChild(this._heart);
            this.addChild(this._powerup);
            for (const zombie of this._zombies) {
                this.addChild(zombie);
            }
            this.addChild(this._player);

            this._bulletManager.AddBulletsToScene();

            this.addChild(this._scoreBoard.LivesLabel);
            this.addChild(this._scoreBoard.BulletLabel);
            this.addChild(this._scoreBoard.ScoreLabel);
        }

        public Clean(): void {
            this.removeAllChildren();
        }

        public detectPressedKeys(): void {
            if (this.keyPressedStates[enums.Key.W]) {
                this._player.moveUp();
            } else if (this.keyPressedStates[enums.Key.S]) {
                this._player.moveDown();
            }

            if (this.keyPressedStates[enums.Key.A]) {
                this._player.moveLeft();
            } else if (this.keyPressedStates[enums.Key.D]) {
                this._player.moveRight();
            }

            if (!this._isReloading) {
                if (this.keyPressedStates[enums.Key.SPACE]) {
                    this._player.FireBullet();
                }

                if (this.keyPressedStates[enums.Key.M]) {
                    this._isReloading = true;
                    this.PlayReloadingSound();

                    setTimeout(() => {
                        // config.Game.BULLET_NUMBER = 20;
                        config.Game.SCORE_BOARD.Bullet = 20;
                        this._isReloading = false;
                    }, 1000);
                }
            }

            if (!this._isCheatEnabled) {
                this._isCheatEnabled = true;
                if (this.keyPressedStates[enums.Key.P]) {
                    if (config.Game.CHEAT_ENABLED) {
                        console.log("Cheat Off!");
                        config.Game.CHEAT_ENABLED = false;
                    } else {
                        console.log("Cheat On!");
                        config.Game.CHEAT_ENABLED = true;
                    }
                }
                setTimeout(() => {
                    this._isCheatEnabled = false;
                }, 1000);
            }
        }

        public PlayReloadingSound(): void {
            this._reloadingSound = createjs.Sound.play("reloadingSound");
            this._reloadingSound.volume = 0.2; // 20% volume
        }
    }
}