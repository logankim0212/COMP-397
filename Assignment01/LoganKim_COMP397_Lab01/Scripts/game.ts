// IIFE -- Immediately Invoked Function Expression
// means? is an anonymous self-executing function
let Game = (function () {
    // canvas variables
    let canvas: HTMLCanvasElement = document.getElementsByTagName('canvas')[0];
    let stage: createjs.Stage;
    let currentSceneState: scenes.State;
    let currentScene: objects.Scene;

    // start function
    function Start(): void {
        console.log(`%c Game Started`, "color: blue; font-size:20px;");
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