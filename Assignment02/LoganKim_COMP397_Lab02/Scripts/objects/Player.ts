module objects {
    export class Player extends GameObject {
        // PRIVATE INSTANCE MEMBERS

        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor() {
            super(config.Game.ASSETS.getResult("avatar"), 0, 0, true);

            this.Start();
        }

        // PRIVATE METHODS
        protected _checkBounds(): void {
            // left boundary
            if (this.position.x <= this.halfWidth) {
                this.position = new Vector2(this.halfWidth, this.position.y);
            }

            // right boundary
            if (this.position.x >= config.Game.SCREEN_WIDTH - this.halfWidth) {
                this.position = new Vector2(config.Game.SCREEN_WIDTH - this.halfWidth, this.position.y);
            }

            // top boundary
            if (this.position.y <= this.halfHeight) {
                this.position = new Vector2(this.position.x, this.halfHeight);
            }

            // bottom boundary
            if (this.position.y >= config.Game.SCREEN_HEIGHT - this.halfHeight) {
                this.position = new Vector2(this.position.x, config.Game.SCREEN_HEIGHT - this.halfHeight);
            }
        }

        private _move(): void {
            let newPositionX = util.Mathf.Lerp(this.position.x, this.stage.mouseX, config.Game.MOVING_TIME);
            let newPositionY = util.Mathf.Lerp(this.position.y, this.stage.mouseY, config.Game.MOVING_TIME);
            this.position = new Vector2(newPositionX, newPositionY);
        }

        // PUBLIC METHODS
        public Start(): void {
            this.type = enums.GameObjectType.PLAYER;
            this.name = "player";
        }

        public Update(): void {
            this._move();
            this._checkBounds();
        }

        public Reset(): void {

        }
    }
}