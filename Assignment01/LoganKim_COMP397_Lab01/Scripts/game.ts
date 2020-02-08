// IIFE -- Immediately Invoked Function Expression
// means? is an anonymous self-executing function
let Game = (function () {
    // canvas variables
    let canvas: HTMLCanvasElement = document.getElementsByTagName('canvas')[0];
    let stage: createjs.Stage;
    let background: objects.Image;

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
        background = new objects.Image(util.BACKGROUND_PATH, 0, 0, 840, 480, false)
        stage.addChild(background);
    }

    window.addEventListener('load', Start);
})();