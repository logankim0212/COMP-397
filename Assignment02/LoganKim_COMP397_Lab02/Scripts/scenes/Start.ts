module scenes {
    export class Start extends objects.Scene {
        // PRIVATE INSTANCE MEMBERS
        private _welcomeLabel: objects.Label;
        private _btnStart: objects.Button;
        private _btnInstruction: objects.Button;
        private _btnExit: objects.Button;
        private _background: createjs.Bitmap;
        private _BGM : createjs.AbstractSoundInstance;
        private _buttonSound : createjs.AbstractSoundInstance;

        // PUBLIC PROPERTIES
        public get BGM() : createjs.AbstractSoundInstance 
        {
            return this._BGM;
        }

        // CONSTRUCTOR
        constructor() {
            super();
            this._welcomeLabel = new objects.Label();
            this._btnStart = new objects.Button();
            this._btnInstruction = new objects.Button();
            this._btnExit = new objects.Button();
            this._background = new createjs.Bitmap(config.Game.ASSETS.getResult("bgStart"));

            this.Start();
        }

        // PRIVATE METHODS

        // PUBLIC METHODS
        public Start(): void {
            config.Game.CURRENT_SCENE = this;

            //instantiate a new Text object
            this._welcomeLabel = new objects.Label("Zombie Rider", "40px", "Consolas", "red", 300, 80, true);
            // buttons
            this._btnStart = new objects.Button(config.Game.ASSETS.getResult("btnStart"), 300, 400, true);
            this._btnInstruction = new objects.Button(config.Game.ASSETS.getResult("btnInstruction"), 300, 460, true);
            this._btnExit = new objects.Button(config.Game.ASSETS.getResult("btnExit"), 300, 520, true);

            this.Main();
        }

        public Update(): void {

        }

        public Main(): void {
            this.addChild(this._background);
            this.addChild(this._welcomeLabel);
            this.addChild(this._btnStart);
            this.addChild(this._btnInstruction);
            this.addChild(this._btnExit);

            if (!config.Game.BGM_STATUS) {
                config.Game.BGM_STATUS = true;
                this._BGM = createjs.Sound.play("bgm");
                this._BGM.loop = -1; // loop forever
                this._BGM.volume = 0.1; // 10% volume
            }

            this._btnStart.on("click", () => {
                this.PlayButtonSound();
                config.Game.SCENE_STATE = scenes.State.PLAY;
            });

            this._btnInstruction.on("click", () => {
                this.PlayButtonSound();
                config.Game.SCENE_STATE = scenes.State.INSTRUCTION;
            });

            this._btnExit.on("click", () => {
                this.PlayButtonSound();
                config.Game.SCENE_STATE = scenes.State.EXIT;
            });
        }

        public Clean(): void {
            this.removeAllChildren();
        }

        public PlayButtonSound(): void {
            this._buttonSound = createjs.Sound.play("buttonSound");
            this._buttonSound.volume = 0.2; // 20% volume
        }
    }
}