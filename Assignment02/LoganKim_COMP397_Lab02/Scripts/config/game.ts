module config
{
    export class Game
    {
        public static SCREEN_WIDTH:number = 600;
        public static SCREEN_HEIGHT:number = 600;
        public static FPS: number = 60; // 60 Frames per second
        public static MOVING_TIME: number = 0.1;
        public static ASSETS: createjs.LoadQueue;
        public static SCENE_STATE: scenes.State;
        public static ZOMBIE_NUMBER: number = 6;
        public static LIVES: number = 3;
        public static SCORE: number = 0;
        public static HIGH_SCORE: number = 0;
        public static SCORE_BOARD: managers.ScoreBoard;
    }
}