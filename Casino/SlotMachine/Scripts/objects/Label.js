"use strict";
/**
 * Logan J. Kim
 * 300973239
 * February 6, 2020
 *
 * Description:
 * Wingardium Luckiosa is a single players single-screen slot machine game designed with Harry Potter theme.
 * This game will contain three screens: start, game and end. Player will lose once they lost all of their credits;
 * however, they can continue to play as long as they want if they have enough credit.
 *
 * Versions:
 * v2.0 Beta Release - Five reels
 * v1.0 Alpha Release - Three reels
 */
var objects;
(function (objects) {
    class Label extends createjs.Text {
        // constructor
        constructor(labelString = "empty label", fontSize = "12px", fontFamily = "Consolas", fontColour = "#000000", x = 0, y = 0, isCentered = false) {
            super(labelString, fontSize + " " + fontFamily, fontColour);
            this.isCentered = isCentered;
            if (isCentered) {
                this.regX = this.getBounds().width * 0.5;
                this.regY = this.getMeasuredLineHeight() * 0.5;
            }
            this.x = x;
            this.y = y;
        }
        // methods
        setText(newText) {
            this.text = newText;
            this.regX = this.getBounds().width * 0.5;
            this.regY = this.getMeasuredLineHeight() * 0.5;
        }
    }
    objects.Label = Label;
})(objects || (objects = {}));
//# sourceMappingURL=Label.js.map