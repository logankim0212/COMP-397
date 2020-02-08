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
    function Start() {
        console.log(`%c Game Started!`, "color: lightblue; font-size: 20px; font-weight: bold;");
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 60; // 60 FPS
        createjs.Ticker.on('tick', Update);
        stage.enableMouseOver(20);
        Main();
    }
    function Update() {
        stage.update();
    }
    function Main() {
        console.log(`%c Main Started...`, "color: green; font-size: 16px;");
        InitialSetup();
    }
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
        // enable buttons
        ButtonsOn();
    }
    function ButtonsOn() {
        resetOn = btnReset.on("click", function () { BtnReset(); });
        betOneOn = btnBetOne.on("click", function () { BetOne(); });
        betMaxOn = btnBetMax.on("click", function () { BetMax(); });
        spinOn = btnSpin.on("click", function () { Spin(); });
    }
    function ButtonsOff() {
        btnReset.off("click", resetOn);
        btnBetOne.off("click", betOneOn);
        btnBetMax.off("click", betMaxOn);
        btnSpin.off("click", spinOn);
    }
    function BtnReset() {
        balance = CREDITS;
        coinsPlayed = BETS;
        winnings = 0;
        lblCredits.setText(balance.toString());
        lblWinnerPaid.setText(winnings.toString());
        lblBet.setText(coinsPlayed.toString());
    }
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
    function BetMax() {
        coinsPlayed = 30;
        lblBet.setText(coinsPlayed.toString());
        Spin();
    }
    function Spin() {
        // validation
        if (balance - coinsPlayed >= 0) {
            // reduce balance and set winnigns to 0
            balance -= Number(lblBet.text);
            winnings = 0;
            lblCredits.setText(balance.toString());
            lblWinnerPaid.setText(winnings.toString());
            // spin reels
        }
        else {
            alert("Please recharge your credits to continue! \nCurrent Balance: " + balance);
        }
    }
    window.addEventListener('load', Start);
})();
//# sourceMappingURL=game.js.map