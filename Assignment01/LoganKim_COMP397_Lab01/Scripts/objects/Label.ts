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
module objects {
    export class Label extends createjs.Text {
        // constructor
        constructor(
            public labelString: string = "empty label",
            public fontSize: string = "12px",
            public fontFamily: string = "Consolas",
            public fontColour: string = "#000000",
            x: number = 0, y: number = 0, public isCentered: boolean = false) {
            super(labelString, fontSize + " " + fontFamily, fontColour);

            if (isCentered) {
                this.regX = this.getBounds().width * 0.5;
                this.regY = this.getMeasuredLineHeight() * 0.5;
            }

            this.x = x;
            this.y = y;
        }

        // methods
        public setText(newText: string) {
            this.text = newText;
            this.regX = this.getBounds().width * 0.5;
            this.regY = this.getMeasuredLineHeight() * 0.5;
        }
    }
}