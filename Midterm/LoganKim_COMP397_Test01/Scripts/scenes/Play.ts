module scenes {
    /**
     * Logan Junhwi Kim
     * February 22, 2020
     * This is a dice rolling game developed for COMP397 midterm test.
     *
     * @export
     * @class Play
     * @extends {objects.Scene}
     */
    export class Play extends objects.Scene {
        // PRIVATE INSTANCE MEMBERS
        private _dice: createjs.Bitmap[];
        private _btnRoll: objects.Button;
        private _lblDiceOne: objects.Label;
        private _lblDiceTwo: objects.Label;
        private _diceOneNumber: number = 0;
        private _diceTwoNumber: number = 0;
        private _diceValue: Array<number> = [0, 0];
        private _beepSound: createjs.AbstractSoundInstance;

        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        /**
         * Creates an instance of Play.
         * @memberof Play
         */
        constructor() {
            super();

            this.Start();
        }

        // PRIVATE METHODS
        /**
         * Setup initial value for each variable
         *
         * @private
         * @memberof Play
         */
        private _InitialSetup(): void {
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
            this._lblDiceOne = new objects.Label(this._diceOneNumber.toString(), "30px", "Arial", "#000000", 210, 300, true);

            // create dice two label
            this._lblDiceTwo = new objects.Label(this._diceTwoNumber.toString(), "30px", "Arial", "#000000", 430, 300, true);

            this._btnRoll.on("click", this._RollDice, this);
        }

        /**
         * Roll dice randomly with math.random function
         *
         * @private
         * @memberof Play
         */
        private _RollDice(): void {
            let outCome: Array<number> = [0, 0];

            for (let spin: number = 0; spin < 2; spin++) {
                outCome[spin] = Math.floor((Math.random() * 60) + 1);

                switch (outCome[spin]) {
                    case this.CheckRange(outCome[spin], 1, 10):  // 16.66% probability
                        this._diceValue[spin] = 1;
                        this.SetDice(spin, config.Game.ASSETS.getResult("diceOne"));
                        break;
                    case this.CheckRange(outCome[spin], 11, 20): // 16.66% probability
                        this._diceValue[spin] = 2;
                        this.SetDice(spin, config.Game.ASSETS.getResult("diceTwo"));
                        break;
                    case this.CheckRange(outCome[spin], 21, 30): // 16.66% probability
                        this._diceValue[spin] = 3;
                        this.SetDice(spin, config.Game.ASSETS.getResult("diceThree"));
                        break;
                    case this.CheckRange(outCome[spin], 31, 40): // 16.66% probability
                        this._diceValue[spin] = 4;
                        this.SetDice(spin, config.Game.ASSETS.getResult("diceFour"));
                        break;
                    case this.CheckRange(outCome[spin], 41, 50): // 16.66% probability
                        this._diceValue[spin] = 5;
                        this.SetDice(spin, config.Game.ASSETS.getResult("diceFive"));
                        break;
                    case this.CheckRange(outCome[spin], 61, 60): // 16.66% probability
                        this._diceValue[spin] = 6;
                        this.SetDice(spin, config.Game.ASSETS.getResult("diceSix"));
                        break;
                    default:
                        break;
                }
            }

            // beeping sound
            this.BeepSound();
        }

        // PUBLIC METHODS
        /**
         * Check the range of given data
         *
         * @param {number} value
         * @param {number} lowerBounds
         * @param {number} upperBounds
         * @returns {number}
         * @memberof Play
         */
        public CheckRange(value: number, lowerBounds: number, upperBounds: number): number {
            if (value >= lowerBounds && value <= upperBounds) {
                return value;
            }
            else {
                return -1;
            }
        }

        /**
         * Set dice images and labels
         *
         * @param {number} location
         * @param {Object} path
         * @memberof Play
         */
        public SetDice(location: number, path: Object): void {
            switch (location) {
                case 0:
                    this.removeChild(this._dice[0]);

                    this._dice[0] = new createjs.Bitmap(path);
                    this._dice[0].x = 110;
                    this._dice[0].y = 80;

                    this._diceOneNumber = this._diceValue[0];
                    this._lblDiceOne.setText(this._diceOneNumber.toString());

                    this.addChild(this._dice[0]);
                    break;
                case 1:
                    this.removeChild(this._dice[1]);

                    this._dice[1] = new createjs.Bitmap(path);
                    this._dice[1].x = 330;
                    this._dice[1].y = 80;

                    this._diceTwoNumber = this._diceValue[1];
                    this._lblDiceTwo.setText(this._diceTwoNumber.toString());

                    this.addChild(this._dice[1]);
                    break;
                default:
                    break;
            }
        }

        public BeepSound(): void {
            this._beepSound = createjs.Sound.play("beepSound");
            this._beepSound.volume = 0.2;
        }

        /**
         * Initialize and instatiate
         *
         * @memberof Play
         */
        public Start(): void {
            this._InitialSetup();

            this.Main();
        }

        /**
         * Update scene
         *
         * @memberof Play
         */
        public Update(): void {

        }

        /**
         * Main function
         *
         * @memberof Play
         */
        public Main(): void {
            this.addChild(this._btnRoll);
            this.addChild(this._lblDiceOne);
            this.addChild(this._lblDiceTwo);
        }
    }
}