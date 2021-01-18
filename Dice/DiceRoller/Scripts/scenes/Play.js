"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    /**
     * Logan Junhwi Kim
     * February 22, 2020
     * This is a dice rolling game developed for COMP397 midterm test.
     *
     * @export
     * @class Play
     * @extends {objects.Scene}
     */
    var Play = /** @class */ (function (_super) {
        __extends(Play, _super);
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        /**
         * Creates an instance of Play.
         * @memberof Play
         */
        function Play() {
            var _this = _super.call(this) || this;
            _this._diceOneNumber = 0;
            _this._diceTwoNumber = 0;
            _this._diceValue = [0, 0];
            _this.Start();
            return _this;
        }
        // PRIVATE METHODS
        /**
         * Setup initial value for each variable
         *
         * @private
         * @memberof Play
         */
        Play.prototype._InitialSetup = function () {
            // create dice
            this._dice = new Array();
            for (var dice = 0; dice < 2; dice++) {
                this._dice[dice] = new createjs.Bitmap(config.Game.ASSETS.getResult("diceBlank"));
                this._dice[dice].x = 110 + (dice * 220);
                this._dice[dice].y = 80;
            }
            // background images
            this._table = new createjs.Bitmap(config.Game.ASSETS.getResult("table"));
            this._table.x = 0;
            this._table.y = 0;
            // create roll button
            this._btnRoll = new objects.Button(config.Game.ASSETS.getResult("rollButton"), 320, 430, true);
            // create dice one label
            this._lblDiceOne = new objects.Label(this._diceOneNumber.toString(), "30px", "Arial", "#ffffff", 210, 300, true);
            // create dice two label
            this._lblDiceTwo = new objects.Label(this._diceTwoNumber.toString(), "30px", "Arial", "#ffffff", 430, 300, true);
            // onclick event
            this._btnRoll.on("click", this._RollDice, this);
        };
        /**
         * Roll dice randomly with math.random function
         *
         * @private
         * @memberof Play
         */
        Play.prototype._RollDice = function () {
            var outCome = [1, 1];
            for (var spin = 0; spin < 2; spin++) {
                outCome[spin] = Math.floor((Math.random() * 60) + 1);
                switch (outCome[spin]) {
                    case this.CheckRange(outCome[spin], 1, 10): // 16.66% probability
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
        };
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
        Play.prototype.CheckRange = function (value, lowerBounds, upperBounds) {
            if (value >= lowerBounds && value <= upperBounds) {
                return value;
            }
            else {
                return -1;
            }
        };
        /**
         * Set dice images and labels
         *
         * @param {number} location
         * @param {Object} path
         * @memberof Play
         */
        Play.prototype.SetDice = function (location, path) {
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
        };
        /**
         * Playing beep sound
         *
         * @memberof Play
         */
        Play.prototype.BeepSound = function () {
            this._beepSound = createjs.Sound.play("beepSound");
            this._beepSound.volume = 0.2;
        };
        /**
         * Initialize and instatiate
         *
         * @memberof Play
         */
        Play.prototype.Start = function () {
            this._InitialSetup();
            this.Main();
        };
        /**
         * Update scene
         *
         * @memberof Play
         */
        Play.prototype.Update = function () {
        };
        /**
         * Main function
         *
         * @memberof Play
         */
        Play.prototype.Main = function () {
            this.addChild(this._table);
            this.addChild(this._dice[0]);
            this.addChild(this._dice[1]);
            this.addChild(this._btnRoll);
            this.addChild(this._lblDiceOne);
            this.addChild(this._lblDiceTwo);
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=Play.js.map