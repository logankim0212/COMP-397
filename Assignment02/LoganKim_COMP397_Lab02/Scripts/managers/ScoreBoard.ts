module managers {
    export class ScoreBoard {
        // private  instance members
        private _lives: number;
        private _bullet: number;
        private _score: number;
        private _highScore: number;
        private _livesLabel: objects.Label;
        private _bulletLabel: objects.Label;
        private _scoreLabel: objects.Label;
        private _highScoreLabel: objects.Label;

        // public properties

        public get Lives(): number {
            return this._lives;
        }

        public set Lives(v: number) {
            this._lives = v;
            config.Game.LIVES = this._lives;
            this.LivesLabel.text = "Lives: " + this._lives;
        }

        public get Bullet(): number {
            return this._bullet;
        }

        public set Bullet(v: number) {
            this._bullet = v;
            config.Game.BULLET_NUMBER = this._bullet;
            this.BulletLabel.text = "Bullet: " + this._bullet;
        }

        public get Score(): number {
            return this._score;
        }

        public set Score(v: number) {
            this._score = v;
            config.Game.SCORE = this._score;
            this.ScoreLabel.text = "Score: " + this._score;
        }

        public get HighScore(): number {
            return this._highScore;
        }

        public set HighScore(v: number) {
            this._highScore = v;
            config.Game.HIGH_SCORE = this._highScore;
        }

        public get LivesLabel(): objects.Label {
            return this._livesLabel;
        }

        public get BulletLabel(): objects.Label {
            return this._bulletLabel;
        }

        public get ScoreLabel(): objects.Label {
            return this._scoreLabel;
        }

        public get CurrentScoreLabel(): objects.Label {
            return new objects.Label("This Round Score: " + this._score, "20px", "Consolas", "#FFFF00", 300, 190, true);
        }

        public get HighScoreLabel(): objects.Label {
            return this._highScoreLabel;
        }

        // constructor
        constructor() {
            this._lives = config.Game.LIVES;
            this._bullet = config.Game.BULLET_NUMBER;
            this._score = config.Game.SCORE;
            this._highScore = config.Game.HIGH_SCORE;
            this._livesLabel = new objects.Label("Lives: " + this._lives, "20px", "Consolas", "#FFFF00", 30, 20);
            this._bulletLabel = new objects.Label("Bullets: " + this._bullet, "20px", "Consolas", "#FFFF00", 165, 20);
            this._scoreLabel = new objects.Label("Score: " + this._score, "20px", "Consolas", "#FFFF00", 460, 20);
            this._highScoreLabel = new objects.Label("High Score: " + this._highScore, "30px", "Consolas", "#FF4500", 300, 135, true);
        }

        // private methods

        // public methods
    }
}