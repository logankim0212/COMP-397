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

module objects {
    /**
     * Class for Label
     *
     * @export
     * @class Label
     * @extends {createjs.Text}
     */
    export class Label extends createjs.Text {
        // CONSTRUCTOR
        /**
         * Creates an instance of Label
         * @param {string} [labelString="empty label"]
         * @param {string} [fontSize="12px"]
         * @param {string} [fontFamily="Consolas"]
         * @param {string} [fontColour="#000000"]
         * @param {number} [x=0]
         * @param {number} [y=0]
         * @param {boolean} [isCentered=false]
         * @memberof Label
         */
        constructor(
            public labelString: string = "empty label",
            public fontSize: string = "12px",
            public fontFamily: string = "Consolas",
            public fontColour: string = "#000000",
            x: number = 0, y: number = 0, public isCentered: boolean = false) {
            super(labelString, fontSize + " " + fontFamily, fontColour);

            // if centered is true, make it centered
            if (isCentered) {
                this.regX = this.getBounds().width * 0.5;
                this.regY = this.getMeasuredLineHeight() * 0.5;
            }

            // set x and y
            this.x = x;
            this.y = y;
        }

        // PUBLIC METHOD
        /**
         * Set Text method of Label
         *
         * @param {string} newText
         * @memberof Label
         */
        public setText(newText: string) {
            this.text = newText;
            this.regX = this.getBounds().width * 0.5;
            this.regY = this.getMeasuredLineHeight() * 0.5;
        }
    }
}