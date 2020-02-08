"use strict";
// IIFE -- Immediately Invoked Function Expression
// means? is an anonymous self-executing function
let Game = (function () {
    // canvas variables
    let canvas = document.getElementsByTagName('canvas')[0];
    let stage;
    let background;
    // labels
    let lblCredits;
    let lblWinnerPaid;
    let lblBet;
    // buttons
    let btnReset;
    let btnBetOne;
    let btnBetMax;
    let btnSpin;
    let resetOn;
    let betOneOn;
    let betMaxOn;
    let spinOn;
    // game variables
    const CREDITS = 1000;
    let balance = CREDITS;
    const BETS = 10;
    let coinsPlayed = BETS;
    let winnings = 0;
    let jackpot = 5000;
    // reel variables
    let firstReel;
    let secondReel;
    let thirdReel;
    let ticket = 0;
    let trainStation = 0;
    let hufflepuff = 0;
    let ravenclaw = 0;
    let gryffindor = 0;
    let slytherin = 0;
    let hogwarts = 0;
    let deathlyHallows = 0;
    let counter = 0;
    // jackpot flag
    let jackpotFlag = false;
    // start function
    function Start() {
        console.log(`%c Game Started!`, "color: lightblue; font-size: 20px; font-weight: bold;");
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 60; // 60 FPS
        createjs.Ticker.on('tick', Update);
        stage.enableMouseOver(20);
        // call main
        Main();
    }
    // update stage
    function Update() {
        stage.update();
    }
    // main function
    function Main() {
        console.log(`%c Main Started...`, "color: green; font-size: 16px;");
        InitialSetup();
    }
    // setup initial elements
    function InitialSetup() {
        // set background
        background = new objects.Image(util.BACKGROUND_PATH, 0, 0, 840, 480, false);
        stage.addChild(background);
        // set labels
        lblCredits = new objects.Label(CREDITS.toString(), "20px", "Arial", "#FFFFFF", 100, 327, true);
        stage.addChild(lblCredits);
        lblWinnerPaid = new objects.Label("0", "20px", "Arial", "#FFFFFF", 269, 327, true);
        stage.addChild(lblWinnerPaid);
        lblBet = new objects.Label(BETS.toString(), "20px", "Arial", "#FFFFFF", 437, 327, true);
        stage.addChild(lblBet);
        // set buttons
        btnReset = new objects.Image(util.BTN_RESET_PATH, 83, 416, 100, 72, true);
        stage.addChild(btnReset);
        btnBetOne = new objects.Image(util.BTN_BET_ONE_PATH, 206, 416, 100, 72, true);
        stage.addChild(btnBetOne);
        btnBetMax = new objects.Image(util.BTN_BET_MAX_PATH, 328, 416, 100, 72, true);
        stage.addChild(btnBetMax);
        btnSpin = new objects.Image(util.BTN_SPIN_PATH, 451, 416, 100, 72, true);
        stage.addChild(btnSpin);
        // set hover on effects
        btnReset.HoverOn();
        btnBetOne.HoverOn();
        btnBetMax.HoverOn();
        btnSpin.HoverOn();
        // set initial reels
        firstReel = new objects.Image(util.TICKET_PATH, 39, 103, 145, 133, false);
        stage.addChild(firstReel);
        secondReel = new objects.Image(util.TICKET_PATH, 197, 103, 145, 133, false);
        stage.addChild(secondReel);
        thirdReel = new objects.Image(util.TICKET_PATH, 355, 103, 145, 133, false);
        stage.addChild(thirdReel);
        // enable buttons
        ButtonsOn();
    }
    // enable buttons
    function ButtonsOn() {
        resetOn = btnReset.on("click", function () { BtnReset(); });
        betOneOn = btnBetOne.on("click", function () { BetOne(); });
        betMaxOn = btnBetMax.on("click", function () { BetMax(); });
        spinOn = btnSpin.on("click", function () { Spin(); });
    }
    // disable buttons
    function ButtonsOff() {
        btnReset.off("click", resetOn);
        btnBetOne.off("click", betOneOn);
        btnBetMax.off("click", betMaxOn);
        btnSpin.off("click", spinOn);
    }
    // reset button function
    function BtnReset() {
        balance = CREDITS;
        coinsPlayed = BETS;
        winnings = 0;
        lblCredits.setText(balance.toString());
        lblWinnerPaid.setText(winnings.toString());
        lblBet.setText(coinsPlayed.toString());
    }
    // bet one button function
    function BetOne() {
        switch (Number(lblBet.text)) {
            case 10:
                coinsPlayed = 20;
                lblBet.setText(coinsPlayed.toString());
                break;
            case 20:
                coinsPlayed = 30;
                lblBet.setText(coinsPlayed.toString());
                break;
            default:
                coinsPlayed = BETS;
                lblBet.setText(coinsPlayed.toString());
                break;
        }
    }
    // bet max button function
    function BetMax() {
        coinsPlayed = 30;
        lblBet.setText(coinsPlayed.toString());
        // spin reels
        Spin();
    }
    // spin button function
    function Spin() {
        // player balance validation
        if (balance - coinsPlayed >= 0) {
            // reduce balance and set winnigns to 0
            balance -= Number(lblBet.text);
            winnings = 0;
            lblCredits.setText(balance.toString());
            lblWinnerPaid.setText(winnings.toString());
            // disable buttons
            ButtonsOff();
            // spin reels
            counter = 0;
            ShowRandom();
            setTimeout(function () { SpinReels(); }, 1000);
            setTimeout(function () { DetermineWinning(); }, 1100);
        }
        else {
            alert("Please recharge your credits to continue! \nCurrent Balance: " + balance);
        }
    }
    // check winning condition
    function DetermineWinning() {
        if (ticket == 0) {
            if (trainStation == 3) {
                winnings = coinsPlayed * 10;
            }
            else if (hufflepuff == 3) {
                winnings = coinsPlayed * 20;
            }
            else if (ravenclaw == 3) {
                winnings = coinsPlayed * 30;
            }
            else if (gryffindor == 3) {
                winnings = coinsPlayed * 40;
            }
            else if (slytherin == 3) {
                winnings = coinsPlayed * 50;
            }
            else if (hogwarts == 3) {
                winnings = coinsPlayed * 75;
            }
            else if (deathlyHallows == 3) {
                winnings = jackpot;
                alert("You Won the $" + jackpot + " Jackpot!!");
                if (jackpot >= 3000) {
                    jackpot -= 2000;
                }
            }
            else if (trainStation == 2) {
                winnings = coinsPlayed * 2;
            }
            else if (hufflepuff == 2) {
                winnings = coinsPlayed * 2;
            }
            else if (ravenclaw == 2) {
                winnings = coinsPlayed * 3;
            }
            else if (gryffindor == 2) {
                winnings = coinsPlayed * 4;
            }
            else if (slytherin == 2) {
                winnings = coinsPlayed * 5;
            }
            else if (hogwarts == 2) {
                winnings = coinsPlayed * 10;
            }
            else if (deathlyHallows == 2) {
                winnings = coinsPlayed * 20;
            }
            else if (deathlyHallows == 1) {
                winnings = coinsPlayed * 5;
            }
            else {
                winnings = coinsPlayed * 1;
            }
        }
        else {
            winnings = 0;
        }
        // update labels
        balance += winnings;
        lblCredits.setText(balance.toString());
        lblWinnerPaid.setText(winnings.toString());
        resetTally();
        ButtonsOn();
        // set jackpot flag to false
        jackpotFlag = false;
    }
    // spin reels fucntion
    function SpinReels() {
        let outCome = [0, 0, 0];
        for (let spin = 0; spin < 3; spin++) {
            if (!jackpotFlag) {
                outCome[spin] = Math.floor((Math.random() * 65) + 1);
            }
            else {
                outCome[spin] = 65;
            }
            switch (outCome[spin]) {
                case CheckRange(outCome[spin], 1, 27): // 41.5% probability
                    SetReelImages(spin, util.TICKET_PATH);
                    ticket++;
                    break;
                case CheckRange(outCome[spin], 28, 37): // 15.4% probability
                    SetReelImages(spin, util.TRAIN_STATION_PATH);
                    trainStation++;
                    break;
                case CheckRange(outCome[spin], 38, 46): // 13.8% probability
                    SetReelImages(spin, util.HUFFLEPUFF_PATH);
                    hufflepuff++;
                    break;
                case CheckRange(outCome[spin], 47, 54): // 12.3% probability
                    SetReelImages(spin, util.RAVENCLAW_PATH);
                    ravenclaw++;
                    break;
                case CheckRange(outCome[spin], 55, 59): //  7.7% probability
                    SetReelImages(spin, util.GRYFFINDOR_PATH);
                    gryffindor++;
                    break;
                case CheckRange(outCome[spin], 60, 62): //  4.6% probability
                    SetReelImages(spin, util.SLYTHERIN_PATH);
                    slytherin++;
                    break;
                case CheckRange(outCome[spin], 63, 64): //  3.1% probability
                    SetReelImages(spin, util.HOGWARTS_PATH);
                    hogwarts++;
                    break;
                case CheckRange(outCome[spin], 65, 65): //  1.5% probability
                    SetReelImages(spin, util.DEATHLY_HALLOWS_PATH);
                    deathlyHallows++;
                    break;
                default:
                    break;
            }
        }
    }
    // reel rotation animation
    function ShowRandom() {
        for (let spin = 0; spin < 3; spin++) {
            let outCome = Math.floor((Math.random() * 65) + 1);
            switch (outCome) {
                case CheckRange(outCome, 1, 27): // 41.5% probability
                    SetReelImages(spin, util.TICKET_PATH);
                    break;
                case CheckRange(outCome, 28, 37): // 15.4% probability
                    SetReelImages(spin, util.TRAIN_STATION_PATH);
                    break;
                case CheckRange(outCome, 38, 46): // 13.8% probability
                    SetReelImages(spin, util.HUFFLEPUFF_PATH);
                    break;
                case CheckRange(outCome, 47, 54): // 12.3% probability
                    SetReelImages(spin, util.RAVENCLAW_PATH);
                    break;
                case CheckRange(outCome, 55, 59): //  7.7% probability
                    SetReelImages(spin, util.GRYFFINDOR_PATH);
                    break;
                case CheckRange(outCome, 60, 62): //  4.6% probability
                    SetReelImages(spin, util.SLYTHERIN_PATH);
                    break;
                case CheckRange(outCome, 63, 64): //  3.1% probability
                    SetReelImages(spin, util.HOGWARTS_PATH);
                    break;
                case CheckRange(outCome, 65, 65): //  1.5% probability
                    SetReelImages(spin, util.DEATHLY_HALLOWS_PATH);
                    break;
                default:
                    break;
            }
        }
        // repeat using recursion
        if (counter < 3) {
            counter++;
            setTimeout(function () { ShowRandom(); }, 250);
            console.log(counter);
        }
    }
    // reset tally variables
    function resetTally() {
        ticket = 0;
        trainStation = 0;
        hufflepuff = 0;
        ravenclaw = 0;
        gryffindor = 0;
        slytherin = 0;
        hogwarts = 0;
        deathlyHallows = 0;
    }
    // check range
    function CheckRange(value, lowerBounds, upperBounds) {
        if (value >= lowerBounds && value <= upperBounds) {
            return value;
        }
        else {
            return -1;
        }
    }
    // set images for all reels
    function SetReelImages(location, path) {
        let xVal = 0;
        switch (location) {
            case 0:
                xVal = 39;
                stage.removeChild(firstReel);
                firstReel = new objects.Image(path, xVal, 103, 145, 133, false);
                stage.addChild(firstReel);
                break;
            case 1:
                xVal = 197;
                stage.removeChild(secondReel);
                secondReel = new objects.Image(path, xVal, 103, 145, 133, false);
                stage.addChild(secondReel);
                break;
            case 2:
                xVal = 355;
                stage.removeChild(thirdReel);
                thirdReel = new objects.Image(path, xVal, 103, 145, 133, false);
                stage.addChild(thirdReel);
                break;
            default:
                break;
        }
    }
    // jackpot keydown cheat event
    window.addEventListener('keydown', JackpotCheck, true);
    // jackpot keydown cheat function
    function JackpotCheck(event) {
        if (event.keyCode == 80 /* P */) {
            jackpotFlag = true;
        }
    }
    window.addEventListener('load', Start);
})();
//# sourceMappingURL=game.js.map