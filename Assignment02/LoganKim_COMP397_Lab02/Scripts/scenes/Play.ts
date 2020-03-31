module scenes {
    export class Play extends objects.Scene {
        // PRIVATE INSTANCE MEMBERS
        private _road: objects.Road;
        private _pothole: objects.Pothole;
        private _player: objects.Player;
        private _zombies: Array<objects.Zombie>;

        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor() {
            super();
            this._road = new objects.Road();
            this._pothole = new objects.Pothole();
            this._player = new objects.Player();
            this._zombies = new Array<objects.Zombie>(); // empty container

            this.Start();
        }

        // PRIVATE METHODS

        // PUBLIC METHODS
        public Start(): void {
            for (let index = 0; index < config.Game.ZOMBIE_NUMBER; index++) {
                this._zombies.push(new objects.Zombie());
            }

            this.Main();
        }

        public Update(): void {
            this._road.Update();
            this._pothole.Update();
            this._player.Update();

            this._zombies.forEach(zombie => {
                zombie.Update();
            });
        }

        public Main(): void {
            this.addChild(this._road);
            this.addChild(this._pothole);
            for (const zombie of this._zombies) {
                this.addChild(zombie);
            }
            this.addChild(this._player);
        }

        public Clean(): void {
            this.removeAllChildren();
        }
    }
}