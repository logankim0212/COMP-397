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
module objects
{
    export abstract class Scene extends createjs.Container
    {
        constructor()
        {
            super();

            //this.Start();
        }

        // Life Cycle Functions

        /**
         * Initialization Method
         *
         * @abstract
         * @memberof Scene
         */
        public abstract Start():void;

        /**
         * Updates all game objects attached to the Scene
         *
         * @abstract
         * @memberof Scene
         */
        public abstract Update():void;

        /**
         * Scene functionality happens in this method
         *
         * @abstract
         * @memberof Scene
         */
        public abstract Main():void;
    }
}