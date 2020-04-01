module config
{
    export class Game
    {
        public static SCREEN_WIDTH:number = 600;
        public static SCREEN_HEIGHT:number = 600;
        public static FPS: number = 60; // 60 Frames per second
        // public static MOVING_TIME: number = 0.1; // when using mouse
        public static MOVING_TIME: number = 7; // when using keyboard
        public static BULLET_SPEED: number = -8;
        public static ASSETS: createjs.LoadQueue;
        public static SCENE_STATE: scenes.State;
        public static CURRENT_SCENE: objects.Scene;
        public static ZOMBIE_NUMBER: number = 6;
        public static BULLET_NUMBER: number = 20;
        public static LIVES: number = 3;
        public static SCORE: number = 0;
        public static HIGH_SCORE: number = 0;
        public static SCORE_BOARD: managers.ScoreBoard;
        public static ZOMBIE_ATLAS: createjs.SpriteSheet;
        public static COLLISION_STATUS: boolean = false;
        public static SHOOTING_STATUS: boolean = false;
        public static BULLET_MANAGER: managers.BulletManager;
        public static BGM_STATUS: boolean = false;
        public static CHEAT_ENABLED: boolean = false;
    }
}