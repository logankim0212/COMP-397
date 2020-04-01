module managers {
    export class BulletManager {
        // PRIVATE INSTANCE MEMBERS
        private _bulletNumber: number;
        private _bulletPool: Array<objects.Bullet>;

        // TODO: bullet sound

        // PUBLIC PROPERTIES
        get BulletPool(): Array<objects.Bullet> {
            return this._bulletPool;
        }
        // CONSTRUCTOR
        constructor() {
            this._bulletNumber = 10;
            this._bulletPool = new Array<objects.Bullet>();

            this._buildBulletPool();
        }

        // PRIVATE METHODS
        private _buildBulletPool(): void {
            for (let count = 0; count < this._bulletNumber; count++) {
                let bullet = new objects.Bullet();
                this._bulletPool.push(bullet);
            }
        }

        // PUBLIC METHODS

        public GetBullet(): objects.Bullet {
            let bullet = this._bulletPool.shift();
            this._bulletPool.push(bullet);

            return bullet;
        }

        public ReturnBullet(bullet: objects.Bullet): void {
            this._bulletPool.push(bullet);
        }

        public AddBulletsToScene(): void {
            console.log("bullet manager: " + config.Game.CURRENT_SCENE);
            this._bulletPool.forEach(bullet => {
                config.Game.CURRENT_SCENE.addChild(bullet);
            });
        }

        // TODO: make bullet sound

        public Update(): void {
            this._bulletPool.forEach(bullet => {
                bullet.Update();
            });
        }
    }
}