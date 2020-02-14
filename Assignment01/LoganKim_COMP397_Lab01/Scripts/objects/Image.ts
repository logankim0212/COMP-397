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
module objects {
    export class Image extends GameObject {
        constructor(imagePath: string = "./Assets/images/placeholder.png", x: number = 0, y: number = 0, width: number = 0, height: number = 0, isCentered: boolean = false) {
            super(imagePath, x, y, isCentered);
            super.CustomSize(width, height, isCentered);
            this.Start();
        }

        // PRIVATE LICE CYCLE METHODS

        // PUBLIC METHOD
        HoverOver(): void {
            this.alpha = 0.7;
        }

        HoverOut(): void {
            this.alpha = 1.0;
        }

        HoverOn(): void {
            this.on("mouseover", this.HoverOver);
            this.on("mouseout", this.HoverOut);
        }
        
        // LICE CYCLE METHODS
        /**
         * Variables initialized here
         *
         * @memberof Image
         */
        public Start(): void {

        }

        public Update(): void {

        }

        public Reset(): void {

        }
    }
}