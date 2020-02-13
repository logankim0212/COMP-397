"use strict";
// IIFE -- Immediately Invoked Function Expression
// means? is an anonymous self-executing function
let Game = (function () {
    // canvas variables
    let canvas = document.getElementsByTagName('canvas')[0];
    let stage;
    let currentSceneState;
    let currentScene;
    let assetManager;
    // assets
    let assetManifest = [
        { id: "backgroundSound", src: "./Assets/audio/background.mp3" },
        { id: "buttonSound", src: "./Assets/audio/button.mp3" },
        { id: "beepSound", src: "./Assets/audio/beep.mp3" }
    ];
    // start function
    function Start() {
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
    function Update() {
        if (currentSceneState != config.Game.SCENE_STATE) {
            Main();
        }
        currentScene.Update();
        stage.update();
    }
    // main function
    function Main() {
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
//# sourceMappingURL=game.js.map