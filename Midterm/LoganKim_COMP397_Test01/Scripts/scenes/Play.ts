module scenes {
    export class Play extends objects.Scene {
        // PRIVATE INSTANCE MEMBERS
        private _dice: createjs.Bitmap[];
        private _btnRoll: objects.Button;
        private _lblDiceOne: objects.Label;
        private _lblDiceTwo: objects.Label;
        private _diceOneText: string = "0";
        private _diceTwoText: string = "0";

        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor() {
            super();

            this.Start();
        }

        // PRIVATE METHODS
        private InitialSetup(): void {
            // create dice
            this._dice = new Array<createjs.Bitmap>();
            for (var dice: number = 0; dice < 2; dice++) {
                this._dice[dice] = new createjs.Bitmap(config.Game.ASSETS.getResult("diceBlank"));
                this._dice[dice].x = 110 + (dice * 220);
                this._dice[dice].y = 80;
                this.addChild(this._dice[dice]);
            }

            // create roll button
            this._btnRoll = new objects.Button(config.Game.ASSETS.getResult("rollButton"), 320, 430, true);

            // create dice one label
            this._lblDiceOne = new objects.Label(this._diceOneText, "30px", "Arial", "#000000", 210, 300, true);

            // create dice two label
            this._lblDiceTwo = new objects.Label(this._diceTwoText, "30px", "Arial", "#000000", 430, 300, true);
        }
        
        // PUBLIC METHODS

        //initialize and instatiate
        public Start(): void {
            this.InitialSetup();
            
            this.Main();
        }

        public Update(): void {

        }

        public Main(): void {
            this.addChild(this._btnRoll);
            this.addChild(this._lblDiceOne);
            this.addChild(this._lblDiceTwo);


        }


    }
}