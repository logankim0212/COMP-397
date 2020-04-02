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

module managers {
    /**
     * Class for managing score board
     *
     * @export
     * @class ScoreBoard
     */
    export class ScoreBoard {
        // PRIVATE INSTANCE MEMBER
        // variables
        private _lives: number;
        private _bullet: number;
        private _score: number;
        private _highScore: number;
        // labels
        private _livesLabel: objects.Label;
        private _bulletLabel: objects.Label;
        private _scoreLabel: objects.Label;
        private _highScoreLabel: objects.Label;

        // PUBLIC PROPERTIES
        // getters and setters for all variables
        public get Lives(): number {
            return this._lives;
        }

        public set Lives(v: number) {
            this._lives = v;
            // set shared lives
            config.Game.LIVES = this._lives;
            // update the text of lives label
            this.LivesLabel.text = "Lives: " + this._lives;
        }

        public get Bullet(): number {
            return this._bullet;
        }

        public set Bullet(v: number) {
            this._bullet = v;
            // set shared bullet number
            config.Game.BULLET_NUMBER = this._bullet;
            // update the text of bullet label
            this.BulletLabel.text = "Bullet: " + this._bullet;
        }

        public get Score(): number {
            return this._score;
        }

        public set Score(v: number) {
            this._score = v;
            // set shared score
            config.Game.SCORE = this._score;
            // update the text of score label
            this.ScoreLabel.text = "Score: " + this._score;
        }

        public get HighScore(): number {
            return this._highScore;
        }

        public set HighScore(v: number) {
            this._highScore = v;
            // set high score
            config.Game.HIGH_SCORE = this._highScore;
        }

        // Getter for labels
        public get LivesLabel(): objects.Label {
            return this._livesLabel;
        }

        public get BulletLabel(): objects.Label {
            return this._bulletLabel;
        }

        public get ScoreLabel(): objects.Label {
            return this._scoreLabel;
        }

        public get HighScoreLabel(): objects.Label {
            return this._highScoreLabel;
        }

        // method for creating a current score label
        public get CurrentScoreLabel(): objects.Label {
            return new objects.Label("This Round Score: " + this._score, "20px", "Consolas", "#FFFF00", 300, 190, true);
        }

        // CONSTRUCTOR
        /**
         * Creates an instance of ScoreBoard.
         * @memberof ScoreBoard
         */
        constructor() {
            // instantiate variables
            this._lives = config.Game.LIVES;
            this._bullet = config.Game.BULLET_NUMBER;
            this._score = config.Game.SCORE;
            this._highScore = config.Game.HIGH_SCORE;

            // instantiate labels
            this._livesLabel = new objects.Label("Lives: " + this._lives, "20px", "Consolas", "#FFFF00", 30, 20);
            this._bulletLabel = new objects.Label("Bullets: " + this._bullet, "20px", "Consolas", "#FFFF00", 165, 20);
            this._scoreLabel = new objects.Label("Score: " + this._score, "20px", "Consolas", "#FFFF00", 310, 20);
            this._highScoreLabel = new objects.Label("High Score: " + this._highScore, "30px", "Consolas", "#FF4500", 300, 135, true);
        }
    }
}