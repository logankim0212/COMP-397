// IIFE -- Immediately Invoked Function Expression
// means? is an anonymous self-executing function
let Game = (function () {
    // canvas variables
    let canvas: HTMLCanvasElement = document.getElementsByTagName('canvas')[0];
    let stage: createjs.Stage;
    let background: objects.Image;
    let lblCredits: objects.Label;
    let lblWinnerPaid: objects.Label;
    let lblBet: objects.Label;

    // game variables
    const CREDITS = 1000;
    let balance: number = CREDITS;
    const BETS = 10;
    let coinsPlayed: number = BETS;
    let winnings: number = 0;
    let jackpot: number = 5000;

    function Start(): void {
        console.log(`%c Game Started!`, "color: lightblue; font-size: 20px; font-weight: bold;");
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 60; // 60 FPS
        createjs.Ticker.on('tick', Update);
        stage.enableMouseOver(20);
        Main();
    }

    function Update(): void {
        stage.update();
    }

    function Main(): void {
        console.log(`%c Main Started...`, "color: green; font-size: 16px;");
        InitialSetup();
    }

    function InitialSetup(): void {
        // set background
        background = new objects.Image(util.BACKGROUND_PATH, 0, 0, 840, 480, false)
        stage.addChild(background);

        // set labels
        lblCredits = new objects.Label(CREDITS.toString(), "20px", "Arial", "#FFFFFF", 100, 327, true);
        stage.addChild(lblCredits);
        lblWinnerPaid = new objects.Label("0", "20px", "Arial", "#FFFFFF", 269, 327, true);
        stage.addChild(lblWinnerPaid);
        lblBet = new objects.Label(BETS.toString(), "20px", "Arial", "#FFFFFF", 437, 327, true);
        stage.addChild(lblBet);
    }

    window.addEventListener('load', Start);
})();