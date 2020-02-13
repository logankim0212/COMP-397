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