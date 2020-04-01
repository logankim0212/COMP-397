"use strict";
var managers;
(function (managers) {
    class BulletManager {
        // CONSTRUCTOR
        constructor() {
            this._bulletNumber = 50;
            this._bulletPool = new Array();
            this._buildBulletPool();
        }
        // TODO: bullet sound
        // PUBLIC PROPERTIES
        get BulletPool() {
            return this._bulletPool;
        }
        // PRIVATE METHODS
        _buildBulletPool() {
            for (let count = 0; count < this._bulletNumber; count++) {
                let bullet = new objects.Bullet();
                this._bulletPool.push(bullet);
            }
        }
        // PUBLIC METHODS
        GetBullet() {
            let bullet = this._bulletPool.shift();
            this._bulletPool.push(bullet);
            return bullet;
        }
        ReturnBullet(bullet) {
            this._bulletPool.push(bullet);
        }
        AddBulletsToScene() {
            console.log("bullet manager: " + config.Game.CURRENT_SCENE);
            this._bulletPool.forEach(bullet => {
                config.Game.CURRENT_SCENE.addChild(bullet);
            });
        }
        // TODO: make bullet sound
        Update() {
            this._bulletPool.forEach(bullet => {
                bullet.Update();
            });
        }
    }
    managers.BulletManager = BulletManager;
})(managers || (managers = {}));
//# sourceMappingURL=BulletManager.js.map