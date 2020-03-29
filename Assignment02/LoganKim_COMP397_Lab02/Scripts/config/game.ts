module config
{
    export class Game
    {
        public static SCREEN_WIDTH:number = 600;
        public static SCREEN_HEIGHT:number = 600;
        public static FPS: number = 60; // 60 Frames per second
        public static MOVING_TIME: number = 0.1;
        public static ASSETS: createjs.LoadQueue;
        public static SCENE: scenes.State;
    }
}