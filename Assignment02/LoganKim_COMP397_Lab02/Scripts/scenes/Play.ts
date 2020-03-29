module scenes {
    export class Play extends objects.Scene {
        // PRIVATE INSTANCE MEMBERS
        private _road: objects.Road;
        private _player: objects.Player;

        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor() {
            super();
            this._road = new objects.Road();
            this._player = new objects.Player();

            this.Start();
        }

        // PRIVATE METHODS

        // PUBLIC METHODS
        public Start(): void {
            this.Main();
        }

        public Update(): void {
            this._road.Update();
            this._player.Update();
        }

        public Main(): void {
            this.addChild(this._road);
            this.addChild(this._player);
        }

        public Clean(): void {
            this.removeAllChildren();
        }
    }
}