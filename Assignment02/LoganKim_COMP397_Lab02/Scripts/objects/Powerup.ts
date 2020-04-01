module objects {
    export class Powerup extends GameObject {
        // PRIVATE INSTANCE MEMBERS
        private _verticalSpeed?: number;

        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor() {
            super(config.Game.ASSETS.getResult("powerup"), new Vector2(), true);

            this.Start();
        }

        // PRIVATE METHODS
        protected _checkBounds(): void {
            if (this.y >= config.Game.SCREEN_HEIGHT * 2 + this.height) {
                this.Reset();
            }
        }

        private _move(): void {
            this.position = Vector2.add(this.position, this.velocity);
        }

        // PUBLIC METHODS
        public Start(): void {
            setTimeout(() => {
                this.type = enums.GameObjectType.POWERUP;
                this._verticalSpeed = config.Game.VERTICAL_SPEED; // 10 px per frame
                this.velocity = new Vector2(0, this._verticalSpeed);
                this.Reset();
            }, 1300);
        }

        public Update(): void {
            this._move();
            this._checkBounds();
        }

        public Reset(): void {
            let randomX = util.Mathf.RandomRange(this.halfWidth, config.Game.SCREEN_WIDTH - this.halfWidth);
            let y = -(config.Game.SCREEN_HEIGHT * 5 + this.height);
            this.position = new Vector2(randomX, y);
        }
    }
}