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
        private background: objects.Image;
        // labels
        private lblCredits: objects.Label;
        private lblWinnerPaid: objects.Label;
        private lblBet: objects.Label;
        private lblJackpot: objects.Label;
        // buttons
        private btnQuit: objects.Image;
        private btnReset: objects.Image;
        private btnBetOne: objects.Image;
        private btnBetMax: objects.Image;
        private btnSpin: objects.Image;
        private quitOn: Function;
        private resetOn: Function;
        private betOneOn: Function;
        private betMaxOn: Function;
        private spinOn: Function;
        // game variables
        private CREDITS = 1000;
        private balance: number = this.CREDITS;
        private BETS = 10;
        private coinsPlayed: number = this.BETS;
        private winnings: number = 0;
        private jackpot: number = 10000;
        // reel variables
        private firstReel: objects.Image;
        private secondReel: objects.Image;
        private thirdReel: objects.Image;
        private fourthReel: objects.Image;
        private fifthReel: objects.Image;
        private ticket: number = 0;
        private trainStation: number = 0;
        private hufflepuff: number = 0;
        private ravenclaw: number = 0;
        private gryffindor: number = 0;
        private slytherin: number = 0;
        private hogwarts: number = 0;
        private deathlyHallows: number = 0;
        private counter: number = 0;
        // jackpot flag
        private jackpotFlag: boolean = false;
        // sound
        private backgroundSound: createjs.AbstractSoundInstance;
        private buttonSound: createjs.AbstractSoundInstance;
        private beepSound: createjs.AbstractSoundInstance;
        private winningSound: createjs.AbstractSoundInstance;
        private jackpotSound: createjs.AbstractSoundInstance;
        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor() {
            super();
            // initialization
            // background
            this.background = new objects.Image();

            // labels
            this.lblCredits = new objects.Label();
            this.lblWinnerPaid = new objects.Label();
            this.lblBet = new objects.Label();
            this.lblJackpot = new objects.Label();

            // buttons
            this.btnQuit = new objects.Image();
            this.btnReset = new objects.Image();
            this.btnBetOne = new objects.Image();
            this.btnBetMax = new objects.Image();
            this.btnSpin = new objects.Image();

            this.quitOn = new Function();
            this.resetOn = new Function();
            this.betOneOn = new Function();
            this.betMaxOn = new Function();
            this.spinOn = new Function();

            // initial reels
            this.firstReel = new objects.Image();
            this.secondReel = new objects.Image();
            this.thirdReel = new objects.Image();
            this.fourthReel = new objects.Image();
            this.fifthReel = new objects.Image();

            // initialize sounds
            this.buttonSound = createjs.Sound.play("");
            this.beepSound = createjs.Sound.play("");
            this.winningSound = createjs.Sound.play("");
            this.jackpotSound = createjs.Sound.play("");

            // play background music
            this.backgroundSound = createjs.Sound.play("backgroundSound");
            this.backgroundSound.volume = 1;
            this.backgroundSound.loop = -1; // loop forever

            // jackpot keydown cheat function
            window.addEventListener('keydown', e => {
                if (e.keyCode == config.Keys.P) {
                    this.jackpotFlag = true;
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
            this.addChild(this.background);
            this.addChild(this.lblCredits);
            this.addChild(this.lblWinnerPaid);
            this.addChild(this.lblBet);
            this.addChild(this.lblJackpot);
            this.addChild(this.btnQuit);
            this.addChild(this.btnReset);
            this.addChild(this.btnBetOne);
            this.addChild(this.btnBetMax);
            this.addChild(this.btnSpin);
            this.addChild(this.firstReel);
            this.addChild(this.secondReel);
            this.addChild(this.thirdReel);
            this.addChild(this.fourthReel);
            this.addChild(this.fifthReel);
        }

        public InitialSetup(): void {
            // set background
            this.background = new objects.Image(config.SLOTMACHINE_PATH, 0, 0, config.STAGE_W, config.STAGE_H, false)

            // set labels
            this.lblCredits = new objects.Label(this.CREDITS.toString(), "20px", "Arial", "#FFFFFF", 264, 340, true);
            this.lblWinnerPaid = new objects.Label("0", "20px", "Arial", "#FFFFFF", 440, 340, true);
            this.lblBet = new objects.Label(this.BETS.toString(), "20px", "Arial", "#FFFFFF", 612, 340, true);
            this.lblJackpot = new objects.Label(this.jackpot.toString(), "35px", "Arial", "#00FFFF", 1090, 28, true);

            // set buttons
            this.btnQuit = new objects.Image(config.BTN_QUIT_PATH, 115, 432, 146, 82, true);
            this.btnReset = new objects.Image(config.BTN_RESET_PATH, 277, 432, 146, 82, true);
            this.btnBetOne = new objects.Image(config.BTN_BET_ONE_PATH, 439, 432, 146, 82, true);
            this.btnBetMax = new objects.Image(config.BTN_BET_MAX_PATH, 601, 432, 146, 82, true);
            this.btnSpin = new objects.Image(config.BTN_SPIN_PATH, 763, 432, 146, 82, true);

            // set hover on effects
            this.btnQuit.HoverOn();
            this.btnReset.HoverOn();
            this.btnBetOne.HoverOn();
            this.btnBetMax.HoverOn();
            this.btnSpin.HoverOn();

            // set initial reels
            this.firstReel = new objects.Image(config.TICKET_PATH, 113, 175, 149, 137, true)
            this.secondReel = new objects.Image(config.TICKET_PATH, 277, 175, 149, 137, true)
            this.thirdReel = new objects.Image(config.TICKET_PATH, 441, 175, 149, 137, true)
            this.fourthReel = new objects.Image(config.TICKET_PATH, 603, 175, 149, 137, true)
            this.fifthReel = new objects.Image(config.TICKET_PATH, 765, 175, 149, 137, true)

            // enable buttons
            this.ButtonsOn();
        }

        // sound effects
        public ButtonClickSound(): void {
            this.buttonSound = createjs.Sound.play("buttonSound");
            this.buttonSound.volume = 0.2;
        }

        public BeepSound(): void {
            this.beepSound = createjs.Sound.play("beepSound");
            this.beepSound.volume = 0.2;
        }

        public WinningSound(): void {
            this.winningSound = createjs.Sound.play("winningSound");
            this.winningSound.volume = 0.5;
        }

        public JackpotSound(): void {
            this.jackpotSound = createjs.Sound.play("jackpotSound");
            this.jackpotSound.volume = 0.6;
        }

        // enable buttons
        public ButtonsOn(): void {
            this.quitOn = this.btnQuit.on("click", () => { this.BtnQuit(); });
            this.resetOn = this.btnReset.on("click", () => { this.BtnReset(); });
            this.betOneOn = this.btnBetOne.on("click", () => { this.BetOne(); });
            this.betMaxOn = this.btnBetMax.on("click", () => { this.BetMax(); });
            this.spinOn = this.btnSpin.on("click", () => { this.Spin(); });
        }

        // disable buttons
        public ButtonsOff(): void {
            this.btnQuit.off("click", this.quitOn);
            this.btnReset.off("click", this.resetOn);
            this.btnBetOne.off("click", this.betOneOn);
            this.btnBetMax.off("click", this.betMaxOn);
            this.btnSpin.off("click", this.spinOn);
        }

        // reset button function
        public BtnQuit(): void {
            config.Game.SCENE_STATE = scenes.State.END;
            this.backgroundSound.stop();
            this.ButtonClickSound();
        }

        // reset button function
        public BtnReset(): void {
            this.balance = this.CREDITS;
            this.coinsPlayed = this.BETS;
            this.winnings = 0;
            this.lblCredits.setText(this.balance.toString());
            this.lblWinnerPaid.setText(this.winnings.toString());
            this.lblBet.setText(this.coinsPlayed.toString());
            this.ButtonClickSound();
        }

        // bet one button function
        public BetOne(): void {
            switch (Number(this.lblBet.text)) {
                case 10:
                    this.coinsPlayed = 20;
                    this.lblBet.setText(this.coinsPlayed.toString());
                    break;
                case 20:
                    this.coinsPlayed = 30;
                    this.lblBet.setText(this.coinsPlayed.toString());
                    break;
                default:
                    this.coinsPlayed = this.BETS;
                    this.lblBet.setText(this.coinsPlayed.toString());
                    break;
            }
            this.ButtonClickSound();
        }

        // bet max button function
        public BetMax(): void {
            this.coinsPlayed = 30;
            this.lblBet.setText(this.coinsPlayed.toString());

            // spin reels
            this.Spin();
        }

        // spin button function
        public Spin(): void {
            // player balance validation
            if (this.balance - this.coinsPlayed >= 0) {
                // reduce balance and set winnigns to 0
                this.balance -= Number(this.lblBet.text);
                this.winnings = 0;
                this.lblCredits.setText(this.balance.toString());
                this.lblWinnerPaid.setText(this.winnings.toString());

                // disable buttons
                this.ButtonsOff();

                // spin reels
                this.counter = 0;
                this.ShowRandom();
                setTimeout(() => { this.SpinReels(); }, 1000);
                setTimeout(() => { this.DetermineWinning(); }, 1100);
            } else {
                alert("Please recharge your credits to continue! \nCurrent Balance: " + this.balance);
            }
            this.ButtonClickSound();
        }

        // check winning condition
        public DetermineWinning(): void {
            // ticket must be 0
            if (this.ticket == 0) {
                // if 5 same images
                if (this.trainStation == 5) {
                    this.winnings = this.coinsPlayed * 60;
                } else if (this.hufflepuff == 5) {
                    this.winnings = this.coinsPlayed * 70;
                } else if (this.ravenclaw == 5) {
                    this.winnings = this.coinsPlayed * 80;
                } else if (this.gryffindor == 5) {
                    this.winnings = this.coinsPlayed * 90;
                } else if (this.slytherin == 5) {
                    this.winnings = this.coinsPlayed * 100;
                } else if (this.hogwarts == 5) {
                    this.winnings = this.coinsPlayed * 150;
                } else if (this.deathlyHallows == 5) {
                    this.winnings = this.jackpot;
                    this.JackpotSound();
                    alert("You Won the $" + this.jackpot + " Jackpot!!");

                    if (this.jackpot > 6000) {
                        this.jackpot -= 2000;
                    }
                }
                // if 4 same images
                else if (this.trainStation == 4) {
                    this.winnings = this.coinsPlayed * 10;
                } else if (this.hufflepuff == 4) {
                    this.winnings = this.coinsPlayed * 20;
                } else if (this.ravenclaw == 4) {
                    this.winnings = this.coinsPlayed * 30;
                } else if (this.gryffindor == 4) {
                    this.winnings = this.coinsPlayed * 40;
                } else if (this.slytherin == 4) {
                    this.winnings = this.coinsPlayed * 50;
                } else if (this.hogwarts == 4) {
                    this.winnings = this.coinsPlayed * 75;
                } else if (this.deathlyHallows == 4) {
                    this.winnings = this.coinsPlayed * 100;
                }
                // if 3 same images
                else if (this.trainStation == 3) {
                    this.winnings = this.coinsPlayed * 3;
                } else if (this.hufflepuff == 3) {
                    this.winnings = this.coinsPlayed * 3;
                } else if (this.ravenclaw == 3) {
                    this.winnings = this.coinsPlayed * 4;
                } else if (this.gryffindor == 3) {
                    this.winnings = this.coinsPlayed * 5;
                } else if (this.slytherin == 3) {
                    this.winnings = this.coinsPlayed * 7;
                } else if (this.hogwarts == 3) {
                    this.winnings = this.coinsPlayed * 10;
                } else if (this.deathlyHallows == 3) {
                    this.winnings = this.coinsPlayed * 20;
                }
                // any 2 same images
                else if (this.trainStation == 2 ||
                    this.hufflepuff == 2 ||
                    this.ravenclaw == 2 ||
                    this.gryffindor == 2 ||
                    this.slytherin == 2 ||
                    this.hogwarts == 2 ||
                    this.deathlyHallows == 2) {
                    this.winnings = this.coinsPlayed * 2;
                }
                // others
                else {
                    this.winnings = this.coinsPlayed * 1;
                }
            } else {
                this.winnings = 0;
            }

            // play sound
            if (this.winnings != 0 && !this.jackpotFlag) {
                this.WinningSound();
            }

            // mute jackpot sound if alert closed
            this.jackpotSound.volume = 0;

            // update labels
            this.balance += this.winnings;
            this.lblCredits.setText(this.balance.toString());
            this.lblWinnerPaid.setText(this.winnings.toString());
            this.lblJackpot.setText(this.jackpot.toString());
            this.resetTally();
            this.ButtonsOn();

            // set jackpot flag to false
            this.jackpotFlag = false;
        }

        // spin reels fucntion
        public SpinReels(): void {
            let outCome: Array<number> = [0, 0, 0, 0, 0];

            for (let spin: number = 0; spin < 5; spin++) {
                // check jackpot cheat
                if (!this.jackpotFlag) {
                    outCome[spin] = Math.floor((Math.random() * 65) + 1);
                } else {
                    outCome[spin] = 100;
                }

                switch (outCome[spin]) {
                    case this.CheckRange(outCome[spin], 1, 30):  // 30% probability
                        this.SetReelImages(spin, config.TICKET_PATH);
                        this.ticket++;
                        break;
                    case this.CheckRange(outCome[spin], 31, 55): // 25% probability
                        this.SetReelImages(spin, config.TRAIN_STATION_PATH);
                        this.trainStation++;
                        break;
                    case this.CheckRange(outCome[spin], 56, 75): // 20% probability
                        this.SetReelImages(spin, config.HUFFLEPUFF_PATH);
                        this.hufflepuff++;
                        break;
                    case this.CheckRange(outCome[spin], 76, 85): // 10% probability
                        this.SetReelImages(spin, config.RAVENCLAW_PATH);
                        this.ravenclaw++;
                        break;
                    case this.CheckRange(outCome[spin], 86, 92): //  7% probability
                        this.SetReelImages(spin, config.GRYFFINDOR_PATH);
                        this.gryffindor++;
                        break;
                    case this.CheckRange(outCome[spin], 93, 97): //  5% probability
                        this.SetReelImages(spin, config.SLYTHERIN_PATH);
                        this.slytherin++;
                        break;
                    case this.CheckRange(outCome[spin], 98, 99): //  2% probability
                        this.SetReelImages(spin, config.HOGWARTS_PATH);
                        this.hogwarts++;
                        break;
                    case this.CheckRange(outCome[spin], 100, 100): //  1% probability
                        this.SetReelImages(spin, config.DEATHLY_HALLOWS_PATH);
                        this.deathlyHallows++;
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
            if (this.counter < 3) {
                this.counter++;
                setTimeout(() => { this.ShowRandom() }, 250);
            }
        }

        // reset tally variables
        public resetTally(): void {
            this.ticket = 0;
            this.trainStation = 0;
            this.hufflepuff = 0;
            this.ravenclaw = 0;
            this.gryffindor = 0;
            this.slytherin = 0;
            this.hogwarts = 0;
            this.deathlyHallows = 0;
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
                    this.removeChild(this.firstReel);
                    this.firstReel = new objects.Image(path, xVal, yVal, width, height, true)
                    this.addChild(this.firstReel);
                    break;
                case 1:
                    xVal = 277;
                    this.removeChild(this.secondReel);
                    this.secondReel = new objects.Image(path, xVal, yVal, width, height, true)
                    this.addChild(this.secondReel);
                    break;
                case 2:
                    xVal = 441;
                    this.removeChild(this.thirdReel);
                    this.thirdReel = new objects.Image(path, xVal, yVal, width, height, true)
                    this.addChild(this.thirdReel);
                    break;
                case 3:
                    xVal = 603;
                    this.removeChild(this.fourthReel);
                    this.fourthReel = new objects.Image(path, xVal, yVal, width, height, true)
                    this.addChild(this.fourthReel);
                    break;
                case 4:
                    xVal = 765;
                    this.removeChild(this.fifthReel);
                    this.fifthReel = new objects.Image(path, xVal, yVal, width, height, true)
                    this.addChild(this.fifthReel);
                    break;
                default:
                    break;
            }
        }
    }
}