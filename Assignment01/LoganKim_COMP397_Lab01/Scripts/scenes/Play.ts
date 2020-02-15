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
module scenes {
    export class Play extends objects.Scene {
        // PRIVATE INSTANCE MEMBERS
        private _background: objects.Image;
        // labels
        private _lblCredits: objects.Label;
        private _lblWinnerPaid: objects.Label;
        private _lblBet: objects.Label;
        private _lblJackpot: objects.Label;
        // buttons
        private _btnQuit: objects.Image;
        private _btnReset: objects.Image;
        private _btnBetOne: objects.Image;
        private _btnBetMax: objects.Image;
        private _btnSpin: objects.Image;
        private _quitOn: Function;
        private _resetOn: Function;
        private _betOneOn: Function;
        private _betMaxOn: Function;
        private _spinOn: Function;
        // game variables
        private readonly _CREDITS = 1000;
        private _balance: number = this._CREDITS;
        private readonly _BETS = 10;
        private _coinsPlayed: number = this._BETS;
        private _winnings: number = 0;
        private _jackpot: number = 10000;
        // reel variables
        private _firstReel: objects.Image;
        private _secondReel: objects.Image;
        private _thirdReel: objects.Image;
        private _fourthReel: objects.Image;
        private _fifthReel: objects.Image;
        private _ticket: number = 0;
        private _trainStation: number = 0;
        private _hufflepuff: number = 0;
        private _ravenclaw: number = 0;
        private _gryffindor: number = 0;
        private _slytherin: number = 0;
        private _hogwarts: number = 0;
        private _deathlyHallows: number = 0;
        private _counter: number = 0;
        // jackpot flag
        private _jackpotFlag: boolean = false;
        // sound
        private _backgroundSound: createjs.AbstractSoundInstance;
        private _buttonSound: createjs.AbstractSoundInstance;
        private _beepSound: createjs.AbstractSoundInstance;
        private _winningSound: createjs.AbstractSoundInstance;
        private _jackpotSound: createjs.AbstractSoundInstance;
        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor() {
            super();
            // initialization
            // background
            this._background = new objects.Image();

            // labels
            this._lblCredits = new objects.Label();
            this._lblWinnerPaid = new objects.Label();
            this._lblBet = new objects.Label();
            this._lblJackpot = new objects.Label();

            // buttons
            this._btnQuit = new objects.Image();
            this._btnReset = new objects.Image();
            this._btnBetOne = new objects.Image();
            this._btnBetMax = new objects.Image();
            this._btnSpin = new objects.Image();

            this._quitOn = new Function();
            this._resetOn = new Function();
            this._betOneOn = new Function();
            this._betMaxOn = new Function();
            this._spinOn = new Function();

            // initial reels
            this._firstReel = new objects.Image();
            this._secondReel = new objects.Image();
            this._thirdReel = new objects.Image();
            this._fourthReel = new objects.Image();
            this._fifthReel = new objects.Image();

            // initialize sounds
            this._buttonSound = createjs.Sound.play("");
            this._beepSound = createjs.Sound.play("");
            this._winningSound = createjs.Sound.play("");
            this._jackpotSound = createjs.Sound.play("");

            // play background music
            this._backgroundSound = createjs.Sound.play("backgroundSound");
            this._backgroundSound.volume = 1;
            this._backgroundSound.loop = -1; // loop forever

            // jackpot keydown cheat function
            window.addEventListener('keydown', e => {
                if (e.keyCode == config.Keys.P) {
                    this._jackpotFlag = true;
                }
            });

            this.Start();
        }

        // PUBLIC METHODS
        public Start(): void {
            this.InitialSetup();
            this.Main();
        }

        public Update(): void {

        }

        public Main(): void {
            this.addChild(this._background);
            this.addChild(this._lblCredits);
            this.addChild(this._lblWinnerPaid);
            this.addChild(this._lblBet);
            this.addChild(this._lblJackpot);
            this.addChild(this._btnQuit);
            this.addChild(this._btnReset);
            this.addChild(this._btnBetOne);
            this.addChild(this._btnBetMax);
            this.addChild(this._btnSpin);
            this.addChild(this._firstReel);
            this.addChild(this._secondReel);
            this.addChild(this._thirdReel);
            this.addChild(this._fourthReel);
            this.addChild(this._fifthReel);
        }

        public InitialSetup(): void {
            // set background
            this._background = new objects.Image(config.SLOTMACHINE_PATH, 0, 0, config.STAGE_W, config.STAGE_H, false)

            // set labels
            this._lblCredits = new objects.Label(this._CREDITS.toString(), "20px", "Arial", "#FFFFFF", 264, 340, true);
            this._lblWinnerPaid = new objects.Label("0", "20px", "Arial", "#FFFFFF", 440, 340, true);
            this._lblBet = new objects.Label(this._BETS.toString(), "20px", "Arial", "#FFFFFF", 612, 340, true);
            this._lblJackpot = new objects.Label(this._jackpot.toString(), "35px", "Arial", "#00FFFF", 1090, 28, true);

            // set buttons
            this._btnQuit = new objects.Image(config.BTN_QUIT_PATH, 115, 432, 146, 82, true);
            this._btnReset = new objects.Image(config.BTN_RESET_PATH, 277, 432, 146, 82, true);
            this._btnBetOne = new objects.Image(config.BTN_BET_ONE_PATH, 439, 432, 146, 82, true);
            this._btnBetMax = new objects.Image(config.BTN_BET_MAX_PATH, 601, 432, 146, 82, true);
            this._btnSpin = new objects.Image(config.BTN_SPIN_PATH, 763, 432, 146, 82, true);

            // set hover on effects
            this._btnQuit.HoverOn();
            this._btnReset.HoverOn();
            this._btnBetOne.HoverOn();
            this._btnBetMax.HoverOn();
            this._btnSpin.HoverOn();

            // set initial reels
            this._firstReel = new objects.Image(config.TICKET_PATH, 113, 175, 149, 137, true)
            this._secondReel = new objects.Image(config.TICKET_PATH, 277, 175, 149, 137, true)
            this._thirdReel = new objects.Image(config.TICKET_PATH, 441, 175, 149, 137, true)
            this._fourthReel = new objects.Image(config.TICKET_PATH, 603, 175, 149, 137, true)
            this._fifthReel = new objects.Image(config.TICKET_PATH, 765, 175, 149, 137, true)

            // enable buttons
            this.ButtonsOn();
        }

        // sound effects
        public ButtonClickSound(): void {
            this._buttonSound = createjs.Sound.play("buttonSound");
            this._buttonSound.volume = 0.2;
        }

        public BeepSound(): void {
            this._beepSound = createjs.Sound.play("beepSound");
            this._beepSound.volume = 0.2;
        }

        public WinningSound(): void {
            this._winningSound = createjs.Sound.play("winningSound");
            this._winningSound.volume = 0.5;
        }

        public JackpotSound(): void {
            this._jackpotSound = createjs.Sound.play("jackpotSound");
            this._jackpotSound.volume = 0.6;
        }

        // enable buttons
        public ButtonsOn(): void {
            this._quitOn = this._btnQuit.on("click", () => { this.BtnQuit(); });
            this._resetOn = this._btnReset.on("click", () => { this.BtnReset(); });
            this._betOneOn = this._btnBetOne.on("click", () => { this.BetOne(); });
            this._betMaxOn = this._btnBetMax.on("click", () => { this.BetMax(); });
            this._spinOn = this._btnSpin.on("click", () => { this.Spin(); });
        }

        // disable buttons
        public ButtonsOff(): void {
            this._btnQuit.off("click", this._quitOn);
            this._btnReset.off("click", this._resetOn);
            this._btnBetOne.off("click", this._betOneOn);
            this._btnBetMax.off("click", this._betMaxOn);
            this._btnSpin.off("click", this._spinOn);
        }

        // reset button function
        public BtnQuit(): void {
            config.Game.SCENE_STATE = scenes.State.END;
            this._backgroundSound.stop();
            this.ButtonClickSound();
        }

        // reset button function
        public BtnReset(): void {
            this._balance = this._CREDITS;
            this._coinsPlayed = this._BETS;
            this._winnings = 0;
            this._lblCredits.setText(this._balance.toString());
            this._lblWinnerPaid.setText(this._winnings.toString());
            this._lblBet.setText(this._coinsPlayed.toString());
            this.ButtonClickSound();
        }

        // bet one button function
        public BetOne(): void {
            switch (Number(this._lblBet.text)) {
                case 10:
                    this._coinsPlayed = 20;
                    this._lblBet.setText(this._coinsPlayed.toString());
                    break;
                case 20:
                    this._coinsPlayed = 30;
                    this._lblBet.setText(this._coinsPlayed.toString());
                    break;
                default:
                    this._coinsPlayed = this._BETS;
                    this._lblBet.setText(this._coinsPlayed.toString());
                    break;
            }
            this.ButtonClickSound();
        }

        // bet max button function
        public BetMax(): void {
            this._coinsPlayed = 30;
            this._lblBet.setText(this._coinsPlayed.toString());

            // spin reels
            this.Spin();
        }

        // spin button function
        public Spin(): void {
            // player balance validation
            if (this._balance - this._coinsPlayed >= 0) {
                // reduce balance and set winnigns to 0
                this._balance -= Number(this._lblBet.text);
                this._winnings = 0;
                this._lblCredits.setText(this._balance.toString());
                this._lblWinnerPaid.setText(this._winnings.toString());

                // disable buttons
                this.ButtonsOff();

                // spin reels
                this._counter = 0;
                this.ShowRandom();
                setTimeout(() => { this.SpinReels(); }, 1000);
                setTimeout(() => { this.DetermineWinning(); }, 1100);
            } else {
                alert("Please recharge your credits to continue! \nCurrent Balance: " + this._balance);
            }
            this.ButtonClickSound();
        }

        // check winning condition
        public DetermineWinning(): void {
            // ticket must be 0
            if (this._ticket == 0) {
                // if 5 same images
                if (this._trainStation == 5) {
                    this._winnings = this._coinsPlayed * 60;
                } else if (this._hufflepuff == 5) {
                    this._winnings = this._coinsPlayed * 70;
                } else if (this._ravenclaw == 5) {
                    this._winnings = this._coinsPlayed * 80;
                } else if (this._gryffindor == 5) {
                    this._winnings = this._coinsPlayed * 90;
                } else if (this._slytherin == 5) {
                    this._winnings = this._coinsPlayed * 100;
                } else if (this._hogwarts == 5) {
                    this._winnings = this._coinsPlayed * 150;
                } else if (this._deathlyHallows == 5) {
                    this._winnings = this._jackpot;
                    this.JackpotSound();
                    alert("You Won the $" + this._jackpot + " Jackpot!!");

                    if (this._jackpot > 6000) {
                        this._jackpot -= 2000;
                    }
                }
                // if 4 same images
                else if (this._trainStation == 4) {
                    this._winnings = this._coinsPlayed * 10;
                } else if (this._hufflepuff == 4) {
                    this._winnings = this._coinsPlayed * 20;
                } else if (this._ravenclaw == 4) {
                    this._winnings = this._coinsPlayed * 30;
                } else if (this._gryffindor == 4) {
                    this._winnings = this._coinsPlayed * 40;
                } else if (this._slytherin == 4) {
                    this._winnings = this._coinsPlayed * 50;
                } else if (this._hogwarts == 4) {
                    this._winnings = this._coinsPlayed * 75;
                } else if (this._deathlyHallows == 4) {
                    this._winnings = this._coinsPlayed * 100;
                }
                // if 3 same images
                else if (this._trainStation == 3) {
                    this._winnings = this._coinsPlayed * 3;
                } else if (this._hufflepuff == 3) {
                    this._winnings = this._coinsPlayed * 3;
                } else if (this._ravenclaw == 3) {
                    this._winnings = this._coinsPlayed * 4;
                } else if (this._gryffindor == 3) {
                    this._winnings = this._coinsPlayed * 5;
                } else if (this._slytherin == 3) {
                    this._winnings = this._coinsPlayed * 7;
                } else if (this._hogwarts == 3) {
                    this._winnings = this._coinsPlayed * 10;
                } else if (this._deathlyHallows == 3) {
                    this._winnings = this._coinsPlayed * 20;
                }
                // any 2 same images
                else if (this._trainStation == 2 ||
                    this._hufflepuff == 2 ||
                    this._ravenclaw == 2 ||
                    this._gryffindor == 2 ||
                    this._slytherin == 2 ||
                    this._hogwarts == 2 ||
                    this._deathlyHallows == 2) {
                    this._winnings = this._coinsPlayed * 2;
                }
                // others
                else {
                    this._winnings = this._coinsPlayed * 1;
                }
            } else {
                this._winnings = 0;
            }

            // play sound
            if (this._winnings != 0 && !this._jackpotFlag) {
                this.WinningSound();
            }

            // mute jackpot sound if alert closed
            this._jackpotSound.volume = 0;

            // update labels
            this._balance += this._winnings;
            this._lblCredits.setText(this._balance.toString());
            this._lblWinnerPaid.setText(this._winnings.toString());
            this._lblJackpot.setText(this._jackpot.toString());
            this.resetTally();
            this.ButtonsOn();

            // set jackpot flag to false
            this._jackpotFlag = false;
        }

        // spin reels fucntion
        public SpinReels(): void {
            let outCome: Array<number> = [0, 0, 0, 0, 0];

            for (let spin: number = 0; spin < 5; spin++) {
                // check jackpot cheat
                if (!this._jackpotFlag) {
                    outCome[spin] = Math.floor((Math.random() * 65) + 1);
                } else {
                    outCome[spin] = 100;
                }

                switch (outCome[spin]) {
                    case this.CheckRange(outCome[spin], 1, 30):  // 30% probability
                        this.SetReelImages(spin, config.TICKET_PATH);
                        this._ticket++;
                        break;
                    case this.CheckRange(outCome[spin], 31, 55): // 25% probability
                        this.SetReelImages(spin, config.TRAIN_STATION_PATH);
                        this._trainStation++;
                        break;
                    case this.CheckRange(outCome[spin], 56, 75): // 20% probability
                        this.SetReelImages(spin, config.HUFFLEPUFF_PATH);
                        this._hufflepuff++;
                        break;
                    case this.CheckRange(outCome[spin], 76, 85): // 10% probability
                        this.SetReelImages(spin, config.RAVENCLAW_PATH);
                        this._ravenclaw++;
                        break;
                    case this.CheckRange(outCome[spin], 86, 92): //  7% probability
                        this.SetReelImages(spin, config.GRYFFINDOR_PATH);
                        this._gryffindor++;
                        break;
                    case this.CheckRange(outCome[spin], 93, 97): //  5% probability
                        this.SetReelImages(spin, config.SLYTHERIN_PATH);
                        this._slytherin++;
                        break;
                    case this.CheckRange(outCome[spin], 98, 99): //  2% probability
                        this.SetReelImages(spin, config.HOGWARTS_PATH);
                        this._hogwarts++;
                        break;
                    case this.CheckRange(outCome[spin], 100, 100): //  1% probability
                        this.SetReelImages(spin, config.DEATHLY_HALLOWS_PATH);
                        this._deathlyHallows++;
                        break;
                    default:
                        break;
                }
            }

            // beeping sound
            this.BeepSound();
        }

        // reel rotation animation
        public ShowRandom(): void {
            for (let spin: number = 0; spin < 5; spin++) {
                let outCome: number = Math.floor((Math.random() * 100) + 1);
                switch (outCome) {
                    case this.CheckRange(outCome, 1, 30):  // 30% probability
                        this.SetReelImages(spin, config.TICKET_PATH);
                        break;
                    case this.CheckRange(outCome, 31, 55): // 25% probability
                        this.SetReelImages(spin, config.TRAIN_STATION_PATH);
                        break;
                    case this.CheckRange(outCome, 56, 75): // 20% probability
                        this.SetReelImages(spin, config.HUFFLEPUFF_PATH);
                        break;
                    case this.CheckRange(outCome, 76, 85): // 10% probability
                        this.SetReelImages(spin, config.RAVENCLAW_PATH);
                        break;
                    case this.CheckRange(outCome, 86, 92): //  7% probability
                        this.SetReelImages(spin, config.GRYFFINDOR_PATH);
                        break;
                    case this.CheckRange(outCome, 93, 97): //  5% probability
                        this.SetReelImages(spin, config.SLYTHERIN_PATH);
                        break;
                    case this.CheckRange(outCome, 98, 99): //  2% probability
                        this.SetReelImages(spin, config.HOGWARTS_PATH);
                        break;
                    case this.CheckRange(outCome, 100, 100): //  1% probability
                        this.SetReelImages(spin, config.DEATHLY_HALLOWS_PATH);
                        break;
                    default:
                        break;
                }
            }

            // beeping sound
            this.BeepSound();

            // repeat using recursion
            if (this._counter < 3) {
                this._counter++;
                setTimeout(() => { this.ShowRandom() }, 250);
            }
        }

        // reset tally variables
        public resetTally(): void {
            this._ticket = 0;
            this._trainStation = 0;
            this._hufflepuff = 0;
            this._ravenclaw = 0;
            this._gryffindor = 0;
            this._slytherin = 0;
            this._hogwarts = 0;
            this._deathlyHallows = 0;
        }

        // check range
        public CheckRange(value: number, lowerBounds: number, upperBounds: number): number {
            if (value >= lowerBounds && value <= upperBounds) {
                return value;
            }
            else {
                return -1;
            }
        }

        // set images for all reels
        public SetReelImages(location: number, path: string): void {
            let xVal: number = 0;
            let yVal: number = 175;
            let width: number = 149;
            let height: number = 137;

            switch (location) {
                case 0:
                    xVal = 113;
                    this.removeChild(this._firstReel);
                    this._firstReel = new objects.Image(path, xVal, yVal, width, height, true)
                    this.addChild(this._firstReel);
                    break;
                case 1:
                    xVal = 277;
                    this.removeChild(this._secondReel);
                    this._secondReel = new objects.Image(path, xVal, yVal, width, height, true)
                    this.addChild(this._secondReel);
                    break;
                case 2:
                    xVal = 441;
                    this.removeChild(this._thirdReel);
                    this._thirdReel = new objects.Image(path, xVal, yVal, width, height, true)
                    this.addChild(this._thirdReel);
                    break;
                case 3:
                    xVal = 603;
                    this.removeChild(this._fourthReel);
                    this._fourthReel = new objects.Image(path, xVal, yVal, width, height, true)
                    this.addChild(this._fourthReel);
                    break;
                case 4:
                    xVal = 765;
                    this.removeChild(this._fifthReel);
                    this._fifthReel = new objects.Image(path, xVal, yVal, width, height, true)
                    this.addChild(this._fifthReel);
                    break;
                default:
                    break;
            }
        }
    }
}