module scenes {
    export class Splash extends objects.Scene {
        // PRIVATE INSTANCE MEMEBERS
        private _splashScreen: createjs.Bitmap;

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

            this.Main()
            setTimeout(() => { this.Clean() }, 2000);
        }

        public Update(): void {

        }

        // TODO:consolidate stage cleared scene
        public Main(): void {
            this.addChild(this._splashScreen);
        }

        public Clean(): void {
            this.removeAllChildren();
        }
    }
}
