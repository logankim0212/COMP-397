module scenes
{
    export class Play extends objects.Scene
    {
        // PRIVATE INSTANCE MEMBERS
        private _dice: createjs.Bitmap[];
        private _rollButton: objects.Button;
        private _diceOneLabel: objects.Label;
        private _diceTwoLabel: objects.Label;
        private _diceOneText: string;
        private _diceTwoText: string;

        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor()
        {
            super();
            
            this._rollButton = new objects.Button(config.Game.ASSETS.getResult("rollButton"), 320, 430, true);

            this.Start();
        }

        // PRIVATE METHODS

        // PUBLIC METHODS

        //initialize and instatiate
        public Start(): void 
        {
            

            
             this.Main();
        }        
        
        public Update(): void 
        {

        }
        
        public Main(): void 
        {
            this.addChild(this._rollButton);


        }

        
    }
}