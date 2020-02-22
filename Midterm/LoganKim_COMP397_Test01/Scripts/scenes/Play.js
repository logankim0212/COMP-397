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
    var Play = /** @class */ (function (_super) {
        __extends(Play, _super);
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        function Play() {
            var _this = _super.call(this) || this;
            _this._diceOneNumber = 0;
            _this._diceTwoNumber = 0;
            _this._diceValue = [0, 0];
            _this.Start();
            return _this;
        }
        // PRIVATE METHODS
        Play.prototype._InitialSetup = function () {
            // create dice
            this._dice = new Array();
            for (var dice = 0; dice < 2; dice++) {
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
        };
        Play.prototype._RollDice = function () {
            var outCome = [0, 0];
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
        };
        // PUBLIC METHODS
        // check range
        Play.prototype.CheckRange = function (value, lowerBounds, upperBounds) {
            if (value >= lowerBounds && value <= upperBounds) {
                return value;
            }
            else {
                return -1;
            }
        };
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
        //initialize and instatiate
        Play.prototype.Start = function () {
            this._InitialSetup();
            this.Main();
        };
        Play.prototype.Update = function () {
        };
        Play.prototype.Main = function () {
            this.addChild(this._btnRoll);
            this.addChild(this._lblDiceOne);
            this.addChild(this._lblDiceTwo);
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=Play.js.map