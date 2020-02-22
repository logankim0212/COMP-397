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
            _this._diceOneText = "0";
            _this._diceTwoText = "0";
            // create dice
            _this._dice = new Array();
            for (var dice = 0; dice < 2; dice++) {
                _this._dice[dice] = new createjs.Bitmap(config.Game.ASSETS.getResult("diceBlank"));
                _this._dice[dice].x = 110 + (dice * 220);
                _this._dice[dice].y = 80;
                _this.addChild(_this._dice[dice]);
            }
            // create roll button
            _this._btnRoll = new objects.Button(config.Game.ASSETS.getResult("rollButton"), 320, 430, true);
            // create dice one label
            _this._lblDiceOne = new objects.Label(_this._diceOneText, "30px", "Arial", "#000000", 210, 300, true);
            _this.addChild(_this._lblDiceOne);
            // create dice two label
            _this._lblDiceTwo = new objects.Label(_this._diceTwoText, "30px", "Arial", "#000000", 430, 300, true);
            _this.addChild(_this._lblDiceTwo);
            _this.Start();
            return _this;
        }
        // PRIVATE METHODS
        // PUBLIC METHODS
        //initialize and instatiate
        Play.prototype.Start = function () {
            this.Main();
        };
        Play.prototype.Update = function () {
        };
        Play.prototype.Main = function () {
            this.addChild(this._btnRoll);
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=Play.js.map