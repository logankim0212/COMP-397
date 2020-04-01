module objects {
    export class Player extends GameObject {
        // PRIVATE INSTANCE MEMBERS

        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor() {
            super(config.Game.ASSETS.getResult("avatar"), 300, 500, true);

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
            // let newPositionX = util.Mathf.Lerp(this.position.x, this.stage.mouseX, config.Game.MOVING_TIME);
            // let newPositionY = util.Mathf.Lerp(this.position.y, this.stage.mouseY, config.Game.MOVING_TIME);
            // this.position = new Vector2(newPositionX, newPositionY);
            this.position = new Vector2(this.position.x, this.position.y);
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

        public moveLeft(): void {
            this.position.add(Vector2.scale(Vector2.left(), config.Game.MOVING_TIME));
        }

        public moveRight(): void {
            this.position.add(Vector2.scale(Vector2.right(), config.Game.MOVING_TIME));
        }

        public moveUp(): void {
            this.position.add(Vector2.scale(Vector2.up(), config.Game.MOVING_TIME));
        }

        public moveDown(): void {
            this.position.add(Vector2.scale(Vector2.down(), config.Game.MOVING_TIME));
        }
    }
}