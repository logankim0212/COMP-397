module scenes {
    export class Instruction extends objects.Scene {
        // PRIVATE INSTANCE MEMBERS
        private _lblOne: objects.Label;
        private _lblTwo: objects.Label;
        private _lblThree: objects.Label;
        private _btnMain: objects.Button;
        private _background: createjs.Bitmap;

        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor() {
            super();
            this._lblOne = new objects.Label();
            this._lblTwo = new objects.Label();
            this._lblThree = new objects.Label();
            this._btnMain = new objects.Button();
            this._background = new createjs.Bitmap(config.Game.ASSETS.getResult("bgInstruction"));

            this.Start();
        }

        // PRIVATE METHODS

        // PUBLIC METHODS
        public Start(): void {
            config.Game.CURRENT_SCENE = this;

            //instantiate a new Text object
            let txtOne: string = "Instruction";
            let txtTwo: string = "- Movement: Use \"WASD\" key for 4 directions\n\n" +
                "- Shooting: Use \"Space\" key\n\n" +
                "- Reload bullet: \"M\" key\n\n\n\n" + 
                "- Hitting an pothole: 0.5s movement penalty\n\n" +
                "- Hitting heart: Health +1\n\n" + 
                "- Hitting zombie: Health -1\n\n\n\n" + 
                "- Shoot to kill zombie and get 100 points";
            let txtThree: string = "* Test your limit where you can reach! *";

            this._lblOne = new objects.Label(txtOne, "40px", "Consolas", "#000000", 300, 70, true);
            this._lblTwo = new objects.Label(txtTwo, "20px", "Consolas", "#000000", 300, 150, true);
            this._lblThree = new objects.Label(txtThree, "20px", "Consolas", "GREEN", 300, 450, true);
            // buttons
            this._btnMain = new objects.Button(config.Game.ASSETS.getResult("btnMain"), 300, 520, true);

            this.Main();
        }

        public Update(): void {

        }

        public Main(): void {
            this.addChild(this._background);
            this.addChild(this._lblOne);
            this.addChild(this._lblTwo);
            this.addChild(this._lblThree);
            this.addChild(this._btnMain);

            this._btnMain.on("click", () => {
                let buttonSound = createjs.Sound.play("buttonSound");
                buttonSound.volume = 0.2; // 20% volume
                config.Game.SCENE_STATE = scenes.State.MAIN;
            });
        }

        public Clean(): void {
            this.removeAllChildren();
        }
    }
}