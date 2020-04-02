"use strict";
var managers;
(function (managers) {
    class BulletManager {
        // CONSTRUCTOR
        constructor() {
            this._bulletNumber = 50;
            this._bulletPool = new Array();
            this._specialBulletPool = new Array();
            this._buildBulletPool();
            this._buildSpecialBulletPool();
        }
        // TODO: bullet sound
        // PUBLIC PROPERTIES
        get BulletPool() {
            return this._bulletPool;
        }
        get SpecialBulletPool() {
            return this._specialBulletPool;
        }
        // PRIVATE METHODS
        _buildBulletPool() {
            for (let count = 0; count < this._bulletNumber; count++) {
                let bullet = new objects.Bullet();
                this._bulletPool.push(bullet);
            }
        }
        _buildSpecialBulletPool() {
            for (let count = 0; count < this._bulletNumber; count++) {
                let bullet = new objects.Bullet(config.Game.ASSETS.getResult("specialBullet"));
                this._specialBulletPool.push(bullet);
            }
        }
        // PUBLIC METHODS
        GetBullet() {
            let bullet;
            if (!config.Game.SPECIAL_ENABLED) {
                bullet = this._bulletPool.shift();
                this._bulletPool.push(bullet);
            }
            else {
                bullet = this._specialBulletPool.shift();
                this._specialBulletPool.push(bullet);
            }
            return bullet;
        }
        AddBulletsToScene() {
            console.log("bullet manager: " + config.Game.CURRENT_SCENE);
            this._bulletPool.forEach(bullet => {
                config.Game.CURRENT_SCENE.addChild(bullet);
            });
            this._specialBulletPool.forEach(bullet => {
                config.Game.CURRENT_SCENE.addChild(bullet);
            });
        }
        // TODO: make bullet sound
        Update() {
            this._bulletPool.forEach(bullet => {
                bullet.Update();
            });
            this._specialBulletPool.forEach(bullet => {
                bullet.Update();
            });
        }
    }
    managers.BulletManager = BulletManager;
})(managers || (managers = {}));
//# sourceMappingURL=BulletManager.js.map