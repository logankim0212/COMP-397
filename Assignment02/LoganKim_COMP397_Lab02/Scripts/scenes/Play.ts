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

module scenes {
    /**
     * Class for Play scene
     *
     * @export
     * @class Play
     * @extends {objects.Scene}
     */
    export class Play extends objects.Scene {
        // PRIVATE INSTANCE MEMBERS
        // game elements
        private _road: objects.Road;
        private _pothole: objects.Pothole;
        private _heart: objects.Heart;
        private _powerup: objects.Powerup;
        private _player: objects.Player;
        private _zombies: Array<objects.Zombie>;
        // managers
        private _scoreBoard: managers.ScoreBoard;
        private _bulletManager: managers.BulletManager;
        // status
        private _isReloading: boolean;
        private _isCheatEnabled: boolean;
        // audio
        private _reloadingSound: createjs.AbstractSoundInstance;

        // PUBLIC PROPERTIES
        // detect which keys are pressed
        public keyPressedStates: boolean[];

        // CONSTRUCTOR
        /**
         * Creates an instance of Play scene
         * @memberof Play
         */
        constructor() {
            super();
            // game elements
            this._road = new objects.Road();
            this._pothole = new objects.Pothole();
            this._heart = new objects.Heart();
            this._powerup = new objects.Powerup();
            this._player = new objects.Player();
            this._zombies = new Array<objects.Zombie>();
            // managers
            this._scoreBoard = new managers.ScoreBoard();
            this._bulletManager = new managers.BulletManager();
            // status
            this._isReloading = false;
            this._isCheatEnabled = false;
            // detect which keys are pressed
            this.keyPressedStates = [];

            this.Start();
        }

        // PUBLIC METHODS
        /**
         * Start method of Play scene
         *
         * @memberof Play
         */
        public Start(): void {
            // set current scene to this
            config.Game.CURRENT_SCENE = this;

            // push all zombies
            for (let index = 0; index < config.Game.ZOMBIE_NUMBER; index++) {
                this._zombies.push(new objects.Zombie());
            }

            // set score board and bullet manager
            config.Game.SCORE_BOARD = this._scoreBoard;
            config.Game.BULLET_MANAGER = this._bulletManager;

            this.Main();
        }

        /**
         * Update method of Play Scene
         *
         * @memberof Play
         */
        public Update(): void {
            // check which key is pressed
            this.detectPressedKeys();
            
            // fire special bullets automatically if special is enabled
            if (config.Game.SPECIAL_ENABLED) {
                if (createjs.Ticker.getTicks() % -config.Game.BULLET_SPEED == 0) {
                    this._player.FireBullet();
                }
            }

            // update game elements
            this._road.Update();
            this._pothole.Update();
            this._heart.Update();
            this._powerup.Update();
            this._player.Update();

            // update bullet manager
            this._bulletManager.Update();

            // check collisions
            managers.Collision.AABBCheck(this._player, this._pothole); // player and pothole
            managers.Collision.AABBCheck(this._player, this._heart); // player and heart
            managers.Collision.AABBCheck(this._player, this._powerup); // player and powerup (potion)
            // for each zombies
            this._zombies.forEach(zombie => {
                // update zombie
                zombie.Update();
                // check collision
                managers.Collision.AABBCheck(this._player, zombie); // player and zombie

                // for each bullet
                for (let i = 0; i < this._bulletManager.BulletPool.length; i++) {
                    managers.Collision.AABBCheck(zombie, this._bulletManager.BulletPool[i]); // zombie and regular bullet
                    managers.Collision.AABBCheck(zombie, this._bulletManager.SpecialBulletPool[i]); // zombie and special bullet
                }
            });
        }

        /**
         * Main method of Play scene
         *
         * @memberof Play
         */
        public Main(): void {
            // add elements to display
            this.addChild(this._road);
            this.addChild(this._pothole);
            this.addChild(this._heart);
            this.addChild(this._powerup);
            for (const zombie of this._zombies) {
                this.addChild(zombie);
            }
            this.addChild(this._player);

            // add bullets to the scene
            this._bulletManager.AddBulletsToScene();

            // add game labels
            this.addChild(this._scoreBoard.LivesLabel);
            this.addChild(this._scoreBoard.BulletLabel);
            this.addChild(this._scoreBoard.ScoreLabel);
        }

        /**
         * Clean method of Play scene
         *
         * @memberof Play
         */
        public Clean(): void {
            // remove all elements
            this.removeAllChildren();
        }

        /**
         * Method for detecting which key is pressed on a keyboard
         *
         * @memberof Play
         */
        public detectPressedKeys(): void {
            // move either up (W) or down (S)
            if (this.keyPressedStates[enums.Key.W]) {
                this._player.moveUp();
            } else if (this.keyPressedStates[enums.Key.S]) {
                this._player.moveDown();
            }

            // move either left (A) or right (D)
            if (this.keyPressedStates[enums.Key.A]) {
                this._player.moveLeft();
            } else if (this.keyPressedStates[enums.Key.D]) {
                this._player.moveRight();
            }

            // if bullet is not reloading
            if (!this._isReloading) {
                // fire bullet if Space key is pressed
                if (this.keyPressedStates[enums.Key.SPACE]) {
                    this._player.FireBullet();
                }

                // if bullet is less than 20
                if (config.Game.SCORE_BOARD.Bullet < 20) {
                    // reload bullets if M key is pressed
                    if (this.keyPressedStates[enums.Key.M]) {
                        // set reloading status
                        this._isReloading = true;
                        // play sound
                        this.PlayReloadingSound();

                        // realistic bullet reloading time for 1s
                        setTimeout(() => {
                            // config.Game.BULLET_NUMBER = 20;
                            config.Game.SCORE_BOARD.Bullet = 20;
                            this._isReloading = false;
                        }, 1000);
                    }
                }
            }

            // if check key is not just pressed
            if (!this._isCheatEnabled) {
                // set chect key pressed status
                this._isCheatEnabled = true;

                // if P key is pressed
                if (this.keyPressedStates[enums.Key.P]) {
                    // if enabled, disable it; if disabled, enable it
                    if (config.Game.CHEAT_ENABLED) {
                        console.log("Cheat Off!");
                        config.Game.CHEAT_ENABLED = false;
                    } else {
                        console.log("Cheat On!");
                        config.Game.CHEAT_ENABLED = true;
                    }
                }

                // preventing multiple input when holding a key
                setTimeout(() => {
                    this._isCheatEnabled = false;
                }, 1000);
            }
        }

        /**
         * Method for playing reloading sound
         *
         * @memberof Play
         */
        public PlayReloadingSound(): void {
            this._reloadingSound = createjs.Sound.play("reloadingSound");
            this._reloadingSound.volume = 0.2; // 20% volume
        }
    }
}