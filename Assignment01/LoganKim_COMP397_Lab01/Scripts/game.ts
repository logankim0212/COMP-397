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
// IIFE -- Immediately Invoked Function Expression
// means? is an anonymous self-executing function
let Game = (function () {
    // canvas variables
    let canvas: HTMLCanvasElement = document.getElementsByTagName('canvas')[0];
    let stage: createjs.Stage;
    let currentSceneState: scenes.State;
    let currentScene: objects.Scene;
    let assetManager: createjs.LoadQueue;

    // assets
    let assetManifest = [
        { id: "backgroundSound", src: "./Assets/audio/background.mp3" },
        { id: "buttonSound", src: "./Assets/audio/button.mp3" },
        { id: "beepSound", src: "./Assets/audio/beep.mp3" },
        { id: "winningSound", src: "./Assets/audio/winning.mp3" },
        { id: "jackpotSound", src: "./Assets/audio/jackpot.mp3" }
    ];

    // start function
    function Start(): void {
        console.log(`%c Game Started`, "color: blue; font-size:20px;");
        // preload assets
        assetManager = new createjs.LoadQueue();
        assetManager.installPlugin(createjs.Sound); // enable sound preloading
        assetManager.loadManifest(assetManifest); // preloads all assets listed in the manifest

        // canvas stage setup
        stage = new createjs.Stage(canvas);
        config.Game.STAGE = stage; // create a reference to the Global Stage
        createjs.Ticker.framerate = 60; // declare the framerate as 60FPS
        createjs.Ticker.on('tick', Update);
        stage.enableMouseOver(20);

        currentSceneState = scenes.State.NO_SCENE;
        config.Game.SCENE_STATE = scenes.State.START;
    }

    // update stage
    function Update(): void {
        if (currentSceneState != config.Game.SCENE_STATE) {
            Main();
        }

        currentScene.Update();
        stage.update();
    }

    // main function
    function Main(): void {
        console.log(`%c Switching Scenes`, "color: green; font-size:16px;");

        // cleanup
        if (currentSceneState != scenes.State.NO_SCENE) {
            currentScene.removeAllChildren();
            stage.removeAllChildren();
        }

        // state machine
        switch (config.Game.SCENE_STATE) {
            case scenes.State.START:
                currentScene = new scenes.Start();
                break;
            case scenes.State.PLAY:
                currentScene = new scenes.Play();
                break;
            case scenes.State.END:
                currentScene = new scenes.End();
                break;
        }

        // add the scene to the stage and setup the current scene
        stage.addChild(currentScene);
        currentSceneState = config.Game.SCENE_STATE;
    }

    window.addEventListener('load', Start);
})();