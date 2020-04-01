module scenes {
    export class Splash extends objects.Scene {
        // PRIVATE INSTANCE MEMEBERS
        private _splashScreen: createjs.Bitmap;
        private _splashSound : createjs.AbstractSoundInstance;

        // PUBLIC PROPERTIES

        // CONTRUCTOR
        constructor() {
            super();
            this._splashScreen = new createjs.Bitmap(config.Game.ASSETS.getResult("splash"));

            this.Start();
        }

        // PUBLIC METHODS
        public Start(): void {
            config.Game.CURRENT_SCENE = this;

            this.Main();
            setTimeout(() => {
                config.Game.SCENE_STATE = scenes.State.START;
            }, 2500);
        }

        public Update(): void {

        }

        // TODO:consolidate stage cleared scene
        public Main(): void {
            this.addChild(this._splashScreen);
            this._splashSound = createjs.Sound.play("splashSound");
            this._splashSound.volume = 0.4; // 10% volume
        }

        public Clean(): void {
            this.removeAllChildren();
        }
    }
}
