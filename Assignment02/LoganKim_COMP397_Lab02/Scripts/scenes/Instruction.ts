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
            //instantiate a new Text object
            let txtOne: string = "Instruction";
            let txtTwo: string = "- Use WASD key to move your player\n\n" +
                "- Use space key to shoot bullet\n\n\n\n\n\n" +
                "- Heart symbol gives you extra health\n\n" +
                "- Hitting zombie reduce health\n\n\n\n\n\n" + 
                "- You can shoot to remove object\n\n\n\n\n\n";
            let txtThree: string = "* Test your limit where you can reach! *";

            this._lblOne = new objects.Label(txtOne, "40px", "Consolas", "#000000", 300, 70, true);
            this._lblTwo = new objects.Label(txtTwo, "20px", "Consolas", "#000000", 300, 150, true);
            this._lblThree = new objects.Label(txtThree, "20px", "Consolas", "GREEN", 300, 450, true);
            // buttons
            this._btnMain = new objects.Button(config.Game.ASSETS.getResult("btnExit"), 300, 520, true);

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
                config.Game.SCENE = scenes.State.START;
            });
        }

        public Clean(): void {
            this.removeAllChildren();
        }
    }
}