"use strict";
/**
 * Logan J. Kim
 * 300973239
 * April 4, 2020
 *
 * Description:
 * Zombie Rider is a 2-dimensional top-down single player scrolling game designed with Days Gone theme.
 * This game contains 5 different scenes: splash, start, instruction, play and game over.
 * Player will lose once their health goes down to 0; however, player can replay the game
 * again and again until they reach their desired score.
 *
 * Versions:
 * v1.0 Zombie Rider Alpha Release
 */
var managers;
(function (managers) {
    /**
     * Class for managing bullets
     *
     * @export
     * @class BulletManager
     */
    class BulletManager {
        // CONSTRUCTOR
        /**
         * Creates an instance of BulletManager.
         * @memberof BulletManager
         */
        constructor() {
            // instantiate variables
            this._bulletNumber = 50;
            this._bulletPool = new Array();
            this._specialBulletPool = new Array();
            // call build bullet pool and build special bullet pool methods
            this._buildBulletPool();
            this._buildSpecialBulletPool();
        }
        // PUBLIC PROPERTIES
        /**
         * Method to get bullet pool
         *
         * @readonly
         * @type {Array<objects.Bullet>}
         * @memberof BulletManager
         */
        get BulletPool() {
            return this._bulletPool;
        }
        /**
         * Method to get special bullet pool
         *
         * @readonly
         * @type {Array<objects.Bullet>}
         * @memberof BulletManager
         */
        get SpecialBulletPool() {
            return this._specialBulletPool;
        }
        // PRIVATE METHODS
        /**
         * Method to build bullet pool
         *
         * @private
         * @memberof BulletManager
         */
        _buildBulletPool() {
            // repeat for the number of bullets
            for (let count = 0; count < this._bulletNumber; count++) {
                // create a new bullet and push
                let bullet = new objects.Bullet();
                this._bulletPool.push(bullet);
            }
        }
        /**
         * Method to build special bullet pool
         *
         * @private
         * @memberof BulletManager
         */
        _buildSpecialBulletPool() {
            // repeat for the number of bullets
            for (let count = 0; count < this._bulletNumber; count++) {
                // create a new bullet and push
                let bullet = new objects.Bullet(config.Game.ASSETS.getResult("specialBullet"));
                this._specialBulletPool.push(bullet);
            }
        }
        // PUBLIC METHODS
        /**
         * Method for getting bullets
         *
         * @returns {objects.Bullet}
         * @memberof BulletManager
         */
        GetBullet() {
            // local variable
            let bullet;
            // check if special condition is enabled
            if (!config.Game.SPECIAL_ENABLED) {
                // if no, push bullet pool
                bullet = this._bulletPool.shift();
                this._bulletPool.push(bullet);
            }
            else {
                // if yes, push special bullet pool
                bullet = this._specialBulletPool.shift();
                this._specialBulletPool.push(bullet);
            }
            return bullet;
        }
        /**
         * Method to add bulelts to the current scene
         *
         * @memberof BulletManager
         */
        AddBulletsToScene() {
            // add every bullet in bullet pool to current scene.
            this._bulletPool.forEach(bullet => {
                config.Game.CURRENT_SCENE.addChild(bullet);
            });
            // add every bullet in special bullet pool to current scene.
            this._specialBulletPool.forEach(bullet => {
                config.Game.CURRENT_SCENE.addChild(bullet);
            });
        }
        // TODO: make bullet sound
        /**
         * Method to update bullets
         *
         * @memberof BulletManager
         */
        Update() {
            // update all bullets inside bullet pools
            this._bulletPool.forEach(bullet => {
                bullet.Update();
            });
            // update all bullets inside special bullet pools
            this._specialBulletPool.forEach(bullet => {
                bullet.Update();
            });
        }
    }
    managers.BulletManager = BulletManager;
})(managers || (managers = {}));
//# sourceMappingURL=BulletManager.js.map