module scenes {
    export class Play extends objects.Scene {
        // PRIVATE INSTANCE MEMBERS
        private _road: objects.Road;
        private _pothole: objects.Pothole;
        private _player: objects.Player;
        private _zombies: Array<objects.Zombie>;
        private _scoreBoard: managers.ScoreBoard;

        // PUBLIC PROPERTIES
        public keyPressedStates: boolean[]; // to detect which keys are down

        // CONSTRUCTOR
        constructor() {
            super();
            this._road = new objects.Road();
            this._pothole = new objects.Pothole();
            this._player = new objects.Player();
            this._zombies = new Array<objects.Zombie>(); // empty container
            this._scoreBoard = new managers.ScoreBoard();
            this.keyPressedStates = [];

            this.Start();
        }

        // PRIVATE METHODS

        // PUBLIC METHODS
        public Start(): void {
            for (let index = 0; index < config.Game.ZOMBIE_NUMBER; index++) {
                this._zombies.push(new objects.Zombie());
            }

            config.Game.SCORE_BOARD = this._scoreBoard;

            this.Main();
        }

        public Update(): void {
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

        public Main(): void {
            this.addChild(this._road);
            this.addChild(this._pothole);
            for (const zombie of this._zombies) {
                this.addChild(zombie);
            }
            this.addChild(this._player);

            this.addChild(this._scoreBoard.LivesLabel);
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
        }

    }
}