/**
 * Logan J. Kim
 * 300973239
 * April 4, 2020
 * 
 * Description:
 * Zombie Rider is a 2-dimensional top-down single player scrolling game designed with Days Gone theme.
 * This game contains 5 different scenes: splash, start, instruction, play and game over.
 * Player will lose once their health goes down to 0; however, player can replay the game
 * again and again until they reach their desired score.
 *
 * Versions:
 * v1.0 Zombie Rider Alpha Release
 */

module scenes {
    /**
     * Class for Instruction scene
     *
     * @export
     * @class Instruction
     * @extends {objects.Scene}
     */
    export class Instruction extends objects.Scene {
        // PRIVATE INSTANCE MEMBERS
        // labels
        private _lblOne: objects.Label;
        private _lblTwo: objects.Label;
        private _lblThree: objects.Label;
        // button
        private _btnMain: objects.Button;
        // background
        private _background: createjs.Bitmap;

        // CONSTRUCTOR
        /**
         * Creates an instance of Instruction scene
         * @memberof Instruction
         */
        constructor() {
            super();
            // initiailze lables
            this._lblOne = new objects.Label();
            this._lblTwo = new objects.Label();
            this._lblThree = new objects.Label();
            // initialize button
            this._btnMain = new objects.Button();
            // initialize background
            this._background = new createjs.Bitmap(config.Game.ASSETS.getResult("bgInstruction"));

            this.Start();
        }

        // PUBLIC METHODS
        /**
         * Start method of Instruction scene
         *
         * @memberof Instruction
         */
        public Start(): void {
            // set current scene to this
            config.Game.CURRENT_SCENE = this;

            // local variables for text objects
            let txtOne: string = "Instruction";
            let txtTwo: string = "- Movement: Use \"WASD\" key for 4 directions\n\n" +
                "- Shooting: Use \"Space\" key\n\n" +
                "- Reload bullet: \"M\" key\n\n\n\n" +
                "- Hitting an pothole: 0.5s movement penalty\n\n" +
                "- Hitting heart: Health +1\n\n" +
                "- Hitting potion: 5s auto shooting + invincible\n\n" +
                "- Hitting zombie: Health -1\n\n\n\n" +
                "- Shoot to kill zombie and get 100 points\n\n" +
                "- When potion is active, get 200 points";
            let txtThree: string = "* Test your limit where you can reach! *";

            // set labels
            this._lblOne = new objects.Label(txtOne, "40px", "Consolas", "#000000", 300, 60, true);
            this._lblTwo = new objects.Label(txtTwo, "20px", "Consolas", "#000000", 300, 130, true);
            this._lblThree = new objects.Label(txtThree, "20px", "Consolas", "GREEN", 300, 450, true);
            // set button
            this._btnMain = new objects.Button(config.Game.ASSETS.getResult("btnMain"), 300, 520, true);

            this.Main();
        }

        /**
         * Update method of Instruction scene
         *
         * @memberof Instruction
         */
        public Update(): void { }

        /**
         * Main method of Instruction scene
         *
         * @memberof Instruction
         */
        public Main(): void {
            // add elements to display
            this.addChild(this._background);
            this.addChild(this._lblOne);
            this.addChild(this._lblTwo);
            this.addChild(this._lblThree);
            this.addChild(this._btnMain);

            // when main button is clicked, play sound and switch scene
            this._btnMain.on("click", () => {
                let buttonSound = createjs.Sound.play("buttonSound");
                buttonSound.volume = 0.2; // 20% volume
                config.Game.SCENE_STATE = scenes.State.MAIN;
            });
        }

        /**
         * Clean method of Instruction scene
         *
         * @memberof Instruction
         */
        public Clean(): void {
            // remove all elements
            this.removeAllChildren();
        }
    }
}