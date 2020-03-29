module scenes {
    export class Start extends objects.Scene {
        // PRIVATE INSTANCE MEMBERS
        private _welcomeLabel: objects.Label;
        private _startButton: objects.Button;
        private _road: objects.Road;

        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor() {
            super();
            this._welcomeLabel = new objects.Label();
            this._startButton = new objects.Button();
            this._road = new objects.Road();

            this.Start();
        }

        // PRIVATE METHODS

        // PUBLIC METHODS
        public Start(): void {
            //instantiate a new Text object
            this._welcomeLabel = new objects.Label("Zombie Escape", "80px", "Consolas", "#FFFF00", 320, 180, true);
            // buttons
            this._startButton = new objects.Button(config.Game.ASSETS.getResult("startButton"), 320, 430, true);
            
            this.Main();
        }

        public Update(): void {
            this._road.Update();
        }

        public Main(): void {
            this.addChild(this._road);
            this.addChild(this._welcomeLabel);
            this.addChild(this._startButton);

            this._startButton.on("click", () => {
                config.Game.SCENE = scenes.State.PLAY;
            });
        }

        public Clean(): void {
            this.removeAllChildren();
        }
    }
}