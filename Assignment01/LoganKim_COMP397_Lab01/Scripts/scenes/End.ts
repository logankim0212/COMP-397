/**
 * Logan J. Kim
 * 300973239
 * February 6, 2020
 * 
 * Description:
 * Wingardium Luckiosa is a single players single-screen slot machine game designed with Harry Potter theme.
 * This game will contain three screens: start, game and end. Player will lose once they lost all of their credits;
 * however, they can continue to play as long as they want if they have enough credit.
 *
 * Versions:
 * v2.0 Beta Release - Five reels
 * v1.0 Alpha Release - Three reels
 */
module scenes
{
    export class End extends objects.Scene
    {
        // PRIVATE INSTANCE MEMBERS
        private _background:objects.Image;
        private _endLabelCasino:objects.Label;
        private _restartButton:objects.Image;

        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor()
        {
            super();

            // initialization
            this._background = new objects.Image();
            this._endLabelCasino = new objects.Label();
            this._restartButton = new objects.Image();

            this.Start();
        }

        // PUBLIC METHODS

        public Start(): void 
        {
            this._background = new objects.Image(config.END_SCREEN_PATH, 0, 0, config.STAGE_W, config.STAGE_H, false)
            this._endLabelCasino = new objects.Label("Thank you for playing!", "40px","Arial", "#ffff00", config.STAGE_HALF_W, 50, true);
            this._restartButton = new objects.Image(config.BTN_HOME_PATH, config.STAGE_HALF_W, 440, 200, 100, true);
            this._restartButton.HoverOn();

            this.Main();
        }        
        
        public Update(): void 
        {
            
        }
        
        public Main(): void { 
            this.addChild(this._background);
            this.addChild(this._endLabelCasino);
            this.addChild(this._restartButton);
    
            this._restartButton.on("click", function() {
               config.Game.SCENE_STATE = scenes.State.START;
            });
        }
    }
}