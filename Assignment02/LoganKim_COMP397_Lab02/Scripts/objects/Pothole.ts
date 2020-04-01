module objects {
    export class Pothole extends GameObject {
        // PRIVATE INSTANCE MEMBERS
        private _verticalSpeed?: number;

        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor() {
            super(config.Game.ASSETS.getResult("pothole"), new Vector2(), true);

            this.Start();
        }

        // PRIVATE METHODS

        protected _checkBounds(): void {
            if (this.y >= config.Game.SCREEN_HEIGHT + this.height) {
                this.Reset();
            }
        }

        private _move(): void {
            this.position = Vector2.add(this.position, this.velocity);
        }

        // PUBLIC METHODS
        public Start(): void {
            this.type = enums.GameObjectType.POTHOLE;
            this._verticalSpeed = 10; // 10 px per frame
            this.velocity = new Vector2(0, this._verticalSpeed);
            this.Reset();
        }

        public Update(): void {
            this._move();
            this._checkBounds();
        }

        public Reset(): void {
            let randomX = util.Mathf.RandomRange(this.halfWidth, config.Game.SCREEN_WIDTH - this.halfWidth);
            this.position = new Vector2(randomX, -this.height);
        }


    }
}