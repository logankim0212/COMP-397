module scenes {
    export class Start extends objects.Scene {
        // PRIVATE INSTANCE MEMBERS
        private _welcomeLabel: objects.Label;
        private _btnStart: objects.Button;
        private _btnInstruction: objects.Button;
        private _btnExit: objects.Button;
        private _road: objects.Road;

        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor() {
            super();
            this._welcomeLabel = new objects.Label();
            this._btnStart = new objects.Button();
            this._btnInstruction = new objects.Button();
            this._btnExit = new objects.Button();
            this._road = new objects.Road();

            this.Start();
        }

        // PRIVATE METHODS

        // PUBLIC METHODS
        public Start(): void {
            config.Game.CURRENT_SCENE = this;

            //instantiate a new Text object
            this._welcomeLabel = new objects.Label("Zombie Escape", "40px", "Consolas", "red", 300, 150, true);
            // buttons
            this._btnStart = new objects.Button(config.Game.ASSETS.getResult("btnStart"), 300, 400, true);
            this._btnInstruction = new objects.Button(config.Game.ASSETS.getResult("btnInstruction"), 300, 460, true);
            this._btnExit = new objects.Button(config.Game.ASSETS.getResult("btnExit"), 300, 520, true);

            this.Main();
        }

        public Update(): void {
            this._road.Update();
        }

        public Main(): void {
            this.addChild(this._road);
            this.addChild(this._welcomeLabel);
            this.addChild(this._btnStart);
            this.addChild(this._btnInstruction);
            this.addChild(this._btnExit);

            this._btnStart.on("click", () => {
                config.Game.SCENE_STATE = scenes.State.PLAY;
            });

            this._btnInstruction.on("click", () => {
                config.Game.SCENE_STATE = scenes.State.INSTRUCTION;
            });

            this._btnExit.on("click", () => {
                config.Game.SCENE_STATE = scenes.State.EXIT;
            });
        }

        public Clean(): void {
            this.removeAllChildren();
        }
    }
}