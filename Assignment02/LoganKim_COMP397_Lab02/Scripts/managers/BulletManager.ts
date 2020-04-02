module managers {
    export class BulletManager {
        // PRIVATE INSTANCE MEMBERS
        private _bulletNumber: number;
        private _bulletPool: Array<objects.Bullet>;
        private _specialBulletPool: Array<objects.Bullet>;

        // TODO: bullet sound

        // PUBLIC PROPERTIES
        get BulletPool(): Array<objects.Bullet> {
            return this._bulletPool;
        }

        get SpecialBulletPool(): Array<objects.Bullet> {
            return this._specialBulletPool;
        }


        // CONSTRUCTOR
        constructor() {
            this._bulletNumber = 50;
            this._bulletPool = new Array<objects.Bullet>();
            this._specialBulletPool = new Array<objects.Bullet>();

            this._buildBulletPool();
            this._buildSpecialBulletPool();
        }

        // PRIVATE METHODS
        private _buildBulletPool(): void {
            for (let count = 0; count < this._bulletNumber; count++) {
                let bullet = new objects.Bullet();
                this._bulletPool.push(bullet);
            }
        }

        private _buildSpecialBulletPool(): void {
            for (let count = 0; count < this._bulletNumber; count++) {
                let bullet = new objects.Bullet(config.Game.ASSETS.getResult("specialBullet"));
                this._specialBulletPool.push(bullet);
            }
        }

        // PUBLIC METHODS

        public GetBullet(): objects.Bullet {
            let bullet: objects.Bullet;
            if (!config.Game.SPECIAL_ENABLED) {
                bullet = this._bulletPool.shift();
                this._bulletPool.push(bullet);
            } else {
                bullet = this._specialBulletPool.shift();
                this._specialBulletPool.push(bullet);
            }

            return bullet;
        }

        public AddBulletsToScene(): void {
            console.log("bullet manager: " + config.Game.CURRENT_SCENE);
            this._bulletPool.forEach(bullet => {
                config.Game.CURRENT_SCENE.addChild(bullet);
            });
            this._specialBulletPool.forEach(bullet => {
                config.Game.CURRENT_SCENE.addChild(bullet);
            });
        }

        // TODO: make bullet sound

        public Update(): void {
            this._bulletPool.forEach(bullet => {
                bullet.Update();
            });
            this._specialBulletPool.forEach(bullet => {
                bullet.Update();
            });
        }
    }
}