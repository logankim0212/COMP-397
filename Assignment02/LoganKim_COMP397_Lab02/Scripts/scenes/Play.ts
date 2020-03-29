module scenes {
    export class Play extends objects.Scene {
        // PRIVATE INSTANCE MEMBERS
        private _road: objects.Road;

        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor() {
            super();
            this._road = new objects.Road();

            this.Start();
        }

        // PRIVATE METHODS

        // PUBLIC METHODS
        public Start(): void {
            this.Main();
        }

        public Update(): void {
            this._road.Update();
        }

        public Main(): void {
            this.addChild(this._road);
        }

        public Clean(): void {
            this.removeAllChildren();
        }
    }
}