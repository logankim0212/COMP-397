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
 * Version:
 * v1.0 Alpha Release
 */
var objects;
(function (objects) {
    class Image extends objects.GameObject {
        constructor(imagePath = "./Assets/images/placeholder.png", x = 0, y = 0, width = 0, height = 0, isCentered = false) {
            super(imagePath, x, y, isCentered);
            super.CustomSize(width, height, isCentered);
            this.Start();
        }
        // PRIVATE LICE CYCLE METHODS
        // PUBLIC METHOD
        HoverOver() {
            this.alpha = 0.7;
        }
        HoverOut() {
            this.alpha = 1.0;
        }
        HoverOn() {
            this.on("mouseover", this.HoverOver);
            this.on("mouseout", this.HoverOut);
        }
        // LICE CYCLE METHODS
        /**
         * Variables initialized here
         *
         * @memberof Image
         */
        Start() {
        }
        Update() {
        }
        Reset() {
        }
    }
    objects.Image = Image;
})(objects || (objects = {}));
//# sourceMappingURL=Image.js.map