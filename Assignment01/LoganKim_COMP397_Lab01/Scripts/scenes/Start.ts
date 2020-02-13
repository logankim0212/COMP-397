module scenes
{
    export class Start extends objects.Scene
    {
        // PRIVATE INSTANCE MEMBERS
        background:objects.Image;
        startLabelCasino:objects.Label;
        startLabelGame:objects.Label;
        startButton:objects.Image;

        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor()
        {
            super();

            // initialization
            this.background = new objects.Image();
            this.startLabelCasino = new objects.Label();
            this.startLabelGame = new objects.Label();
            this.startButton = new objects.Image();

            this.Start();
        }

        // PUBLIC METHODS

        public Start(): void 
        {
            this.background = new objects.Image(util.START_SCREEN_PATH, 0, 0, util.STAGE_W, util.STAGE_H, false)
            this.startLabelCasino = new objects.Label("Casino Royale", "40px","Arial", "#ffff00", 420, 50, true);
            this.startLabelGame = new objects.Label("Wingardium Luckiosa Slot Machine", "30px","Arial", "#00ffff", 420, 100, true);
            this.startButton = new objects.Image(util.BTN_PLAY_PATH, 420, 400, 200, 100, true);
            this.startButton.HoverOn();

            this.Main();
        }        
        
        public Update(): void 
        {
            
        }
        
        public Main(): void { 
            this.addChild(this.background);
            this.addChild(this.startLabelCasino);
            this.addChild(this.startLabelGame);
            this.addChild(this.startButton);
    
            this.startButton.on("click", function() {
               config.Game.SCENE_STATE = scenes.State.PLAY;
            });
        }
    }
}