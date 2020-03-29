"use strict";
var scenes;
(function (scenes) {
    class Instruction extends objects.Scene {
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
        Start() {
            //instantiate a new Text object
            let txtOne = "Instruction";
            let txtTwo = "- Use WASD key to move your player\n\n" +
                "- Use space key to shoot bullet\n\n\n\n\n\n" +
                "- Heart symbol gives you extra health\n\n" +
                "- Hitting zombie reduce health\n\n\n\n\n\n" +
                "- You can shoot to remove object\n\n\n\n\n\n";
            let txtThree = "* Test your limit where you can reach! *";
            this._lblOne = new objects.Label(txtOne, "40px", "Consolas", "#000000", 300, 70, true);
            this._lblTwo = new objects.Label(txtTwo, "20px", "Consolas", "#000000", 300, 150, true);
            this._lblThree = new objects.Label(txtThree, "20px", "Consolas", "GREEN", 300, 450, true);
            // buttons
            this._btnMain = new objects.Button(config.Game.ASSETS.getResult("btnExit"), 300, 520, true);
            this.Main();
        }
        Update() {
        }
        Main() {
            this.addChild(this._background);
            this.addChild(this._lblOne);
            this.addChild(this._lblTwo);
            this.addChild(this._lblThree);
            this.addChild(this._btnMain);
            this._btnMain.on("click", () => {
                config.Game.SCENE = scenes.State.START;
            });
        }
        Clean() {
            this.removeAllChildren();
        }
    }
    scenes.Instruction = Instruction;
})(scenes || (scenes = {}));
//# sourceMappingURL=Instruction.js.map