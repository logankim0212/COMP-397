module scenes {
    export class Play extends objects.Scene {
        // PRIVATE INSTANCE MEMBERS
        background: objects.Image;
        // labels
        lblQuit: objects.Label;
        lblCredits: objects.Label;
        lblWinnerPaid: objects.Label;
        lblBet: objects.Label;
        // buttons
        btnReset: objects.Image;
        btnBetOne: objects.Image;
        btnBetMax: objects.Image;
        btnSpin: objects.Image;
        resetOn: Function;
        betOneOn: Function;
        betMaxOn: Function;
        spinOn: Function;
        // game variables
        CREDITS = 1000;
        balance: number = this.CREDITS;
        BETS = 10;
        coinsPlayed: number = this.BETS;
        winnings: number = 0;
        jackpot: number = 5000;
        // reel variables
        firstReel: objects.Image;
        secondReel: objects.Image;
        thirdReel: objects.Image;
        ticket: number = 0;
        trainStation: number = 0;
        hufflepuff: number = 0;
        ravenclaw: number = 0;
        gryffindor: number = 0;
        slytherin: number = 0;
        hogwarts: number = 0;
        deathlyHallows: number = 0;
        counter: number = 0;
        // jackpot flag
        jackpotFlag: boolean = false;

        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor() {
            super();
            // initialization
            // background
            this.background = new objects.Image();

            // labels
            this.lblQuit = new objects.Label();
            this.lblCredits = new objects.Label();
            this.lblWinnerPaid = new objects.Label();
            this.lblBet = new objects.Label();

            // buttons
            this.btnReset = new objects.Image();
            this.btnBetOne = new objects.Image();
            this.btnBetMax = new objects.Image();
            this.btnSpin = new objects.Image();

            // initial reels
            this.firstReel = new objects.Image();
            this.secondReel = new objects.Image();
            this.thirdReel = new objects.Image();

            this.resetOn = new Function();
            this.betOneOn = new Function();
            this.betMaxOn = new Function();
            this.spinOn = new Function();

            // jackpot keydown cheat function
            window.addEventListener('keydown', e => {
                if (e.keyCode == util.Keys.P) {
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
            this.addChild(this.lblQuit);
            this.addChild(this.lblCredits);
            this.addChild(this.lblWinnerPaid);
            this.addChild(this.lblBet);
            this.addChild(this.btnReset);
            this.addChild(this.btnBetOne);
            this.addChild(this.btnBetMax);
            this.addChild(this.btnSpin);
            this.addChild(this.firstReel);
            this.addChild(this.secondReel);
            this.addChild(this.thirdReel);

            window.addEventListener('keydown', e => {
                if (e.keyCode == util.Keys.Q) {
                    config.Game.SCENE_STATE = scenes.State.END;
                }
            });
            // this.quitButton.on("click", function() {
            //     config.Game.SCENE_STATE = scenes.State.END;
            //  });
        }

        public InitialSetup(): void {
            // set background
            this.background = new objects.Image(util.SLOTMACHINE_PATH, 0, 0, 840, 480, false)

            // set labels
            this.lblQuit = new objects.Label("Please hit \"Q\" to quit the game.", "15px", "Arial", "#00ffff", 685, 467, true);
            this.lblCredits = new objects.Label(this.CREDITS.toString(), "20px", "Arial", "#FFFFFF", 100, 327, true);
            this.lblWinnerPaid = new objects.Label("0", "20px", "Arial", "#FFFFFF", 269, 327, true);
            this.lblBet = new objects.Label(this.BETS.toString(), "20px", "Arial", "#FFFFFF", 437, 327, true);

            // set buttons
            this.btnReset = new objects.Image(util.BTN_RESET_PATH, 83, 416, 100, 72, true);
            this.btnBetOne = new objects.Image(util.BTN_BET_ONE_PATH, 206, 416, 100, 72, true);
            this.btnBetMax = new objects.Image(util.BTN_BET_MAX_PATH, 328, 416, 100, 72, true);
            this.btnSpin = new objects.Image(util.BTN_SPIN_PATH, 451, 416, 100, 72, true);

            // set hover on effects
            this.btnReset.HoverOn();
            this.btnBetOne.HoverOn();
            this.btnBetMax.HoverOn();
            this.btnSpin.HoverOn();

            // set initial reels
            this.firstReel = new objects.Image(util.TICKET_PATH, 39, 103, 145, 133, false)
            this.secondReel = new objects.Image(util.TICKET_PATH, 197, 103, 145, 133, false)
            this.thirdReel = new objects.Image(util.TICKET_PATH, 355, 103, 145, 133, false)

            this.resetOn = new Function();
            this.betOneOn = new Function();
            this.betMaxOn = new Function();
            this.spinOn = new Function();

            // enable buttons
            this.ButtonsOn();
        }

        // enable buttons
        public ButtonsOn(): void {
            this.resetOn = this.btnReset.on("click", () => { this.BtnReset(); });
            this.betOneOn = this.btnBetOne.on("click", () => { this.BetOne(); });
            this.betMaxOn = this.btnBetMax.on("click", () => { this.BetMax(); });
            this.spinOn = this.btnSpin.on("click", () => { this.Spin(); });
        }

        // disable buttons
        public ButtonsOff(): void {
            this.btnReset.off("click", this.resetOn);
            this.btnBetOne.off("click", this.betOneOn);
            this.btnBetMax.off("click", this.betMaxOn);
            this.btnSpin.off("click", this.spinOn);
        }

        // reset button function
        public BtnReset(): void {
            this.balance = this.CREDITS;
            this.coinsPlayed = this.BETS;
            this.winnings = 0;
            this.lblCredits.setText(this.balance.toString());
            this.lblWinnerPaid.setText(this.winnings.toString());
            this.lblBet.setText(this.coinsPlayed.toString());
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
        }

        // check winning condition
        public DetermineWinning(): void {
            if (this.ticket == 0) {
                if (this.trainStation == 3) {
                    this.winnings = this.coinsPlayed * 10;
                }
                else if (this.hufflepuff == 3) {
                    this.winnings = this.coinsPlayed * 20;
                }
                else if (this.ravenclaw == 3) {
                    this.winnings = this.coinsPlayed * 30;
                }
                else if (this.gryffindor == 3) {
                    this.winnings = this.coinsPlayed * 40;
                }
                else if (this.slytherin == 3) {
                    this.winnings = this.coinsPlayed * 50;
                }
                else if (this.hogwarts == 3) {
                    this.winnings = this.coinsPlayed * 75;
                }
                else if (this.deathlyHallows == 3) {
                    this.winnings = this.jackpot;
                    alert("You Won the $" + this.jackpot + " Jackpot!!");

                    if (this.jackpot >= 3000) {
                        this.jackpot -= 2000;
                    }
                }
                else if (this.trainStation == 2) {
                    this.winnings = this.coinsPlayed * 2;
                }
                else if (this.hufflepuff == 2) {
                    this.winnings = this.coinsPlayed * 2;
                }
                else if (this.ravenclaw == 2) {
                    this.winnings = this.coinsPlayed * 3;
                }
                else if (this.gryffindor == 2) {
                    this.winnings = this.coinsPlayed * 4;
                }
                else if (this.slytherin == 2) {
                    this.winnings = this.coinsPlayed * 5;
                }
                else if (this.hogwarts == 2) {
                    this.winnings = this.coinsPlayed * 10;
                }
                else if (this.deathlyHallows == 2) {
                    this.winnings = this.coinsPlayed * 20;
                }
                else if (this.deathlyHallows == 1) {
                    this.winnings = this.coinsPlayed * 5;
                }
                else {
                    this.winnings = this.coinsPlayed * 1;
                }
            } else {
                this.winnings = 0;
            }

            // update labels
            this.balance += this.winnings;
            this.lblCredits.setText(this.balance.toString());
            this.lblWinnerPaid.setText(this.winnings.toString());
            this.resetTally();
            this.ButtonsOn();

            // set jackpot flag to false
            this.jackpotFlag = false;
        }

        // spin reels fucntion
        public SpinReels(): void {
            let outCome: Array<number> = [0, 0, 0];

            for (let spin: number = 0; spin < 3; spin++) {
                if (!this.jackpotFlag) {
                    outCome[spin] = Math.floor((Math.random() * 65) + 1);
                } else {
                    outCome[spin] = 65;
                }
                switch (outCome[spin]) {
                    case this.CheckRange(outCome[spin], 1, 27):  // 41.5% probability
                        this.SetReelImages(spin, util.TICKET_PATH);
                        this.ticket++;
                        break;
                    case this.CheckRange(outCome[spin], 28, 37): // 15.4% probability
                        this.SetReelImages(spin, util.TRAIN_STATION_PATH);
                        this.trainStation++;
                        break;
                    case this.CheckRange(outCome[spin], 38, 46): // 13.8% probability
                        this.SetReelImages(spin, util.HUFFLEPUFF_PATH);
                        this.hufflepuff++;
                        break;
                    case this.CheckRange(outCome[spin], 47, 54): // 12.3% probability
                        this.SetReelImages(spin, util.RAVENCLAW_PATH);
                        this.ravenclaw++;
                        break;
                    case this.CheckRange(outCome[spin], 55, 59): //  7.7% probability
                        this.SetReelImages(spin, util.GRYFFINDOR_PATH);
                        this.gryffindor++;
                        break;
                    case this.CheckRange(outCome[spin], 60, 62): //  4.6% probability
                        this.SetReelImages(spin, util.SLYTHERIN_PATH);
                        this.slytherin++;
                        break;
                    case this.CheckRange(outCome[spin], 63, 64): //  3.1% probability
                        this.SetReelImages(spin, util.HOGWARTS_PATH);
                        this.hogwarts++;
                        break;
                    case this.CheckRange(outCome[spin], 65, 65): //  1.5% probability
                        this.SetReelImages(spin, util.DEATHLY_HALLOWS_PATH);
                        this.deathlyHallows++;
                        break;
                    default:
                        break;
                }
            }
        }

        // reel rotation animation
        public ShowRandom(): void {
            for (let spin: number = 0; spin < 3; spin++) {
                let outCome: number = Math.floor((Math.random() * 65) + 1);
                switch (outCome) {
                    case this.CheckRange(outCome, 1, 27):  // 41.5% probability
                        this.SetReelImages(spin, util.TICKET_PATH);
                        break;
                    case this.CheckRange(outCome, 28, 37): // 15.4% probability
                        this.SetReelImages(spin, util.TRAIN_STATION_PATH);
                        break;
                    case this.CheckRange(outCome, 38, 46): // 13.8% probability
                        this.SetReelImages(spin, util.HUFFLEPUFF_PATH);
                        break;
                    case this.CheckRange(outCome, 47, 54): // 12.3% probability
                        this.SetReelImages(spin, util.RAVENCLAW_PATH);
                        break;
                    case this.CheckRange(outCome, 55, 59): //  7.7% probability
                        this.SetReelImages(spin, util.GRYFFINDOR_PATH);
                        break;
                    case this.CheckRange(outCome, 60, 62): //  4.6% probability
                        this.SetReelImages(spin, util.SLYTHERIN_PATH);
                        break;
                    case this.CheckRange(outCome, 63, 64): //  3.1% probability
                        this.SetReelImages(spin, util.HOGWARTS_PATH);
                        break;
                    case this.CheckRange(outCome, 65, 65): //  1.5% probability
                        this.SetReelImages(spin, util.DEATHLY_HALLOWS_PATH);
                        break;
                    default:
                        break;
                }
            }

            // repeat using recursion
            if (this.counter < 3) {
                this.counter++;
                setTimeout(() => { this.ShowRandom() }, 250);
                console.log(this.counter);
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

            switch (location) {
                case 0:
                    xVal = 39;
                    this.removeChild(this.firstReel);
                    this.firstReel = new objects.Image(path, xVal, 103, 145, 133, false)
                    this.addChild(this.firstReel);
                    break;
                case 1:
                    xVal = 197;
                    this.removeChild(this.secondReel);
                    this.secondReel = new objects.Image(path, xVal, 103, 145, 133, false)
                    this.addChild(this.secondReel);
                    break;
                case 2:
                    xVal = 355;
                    this.removeChild(this.thirdReel);
                    this.thirdReel = new objects.Image(path, xVal, 103, 145, 133, false)
                    this.addChild(this.thirdReel);
                    break;
                default:
                    break;
            }
        }
    }
}