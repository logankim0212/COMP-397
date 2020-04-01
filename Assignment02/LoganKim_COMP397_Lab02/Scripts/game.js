"use strict";
//IIFE - Immediately Invoked Function Expression
//means -> self-executing anonymous function
let Game = (function () {
    // variable declarations
    let canvas = document.getElementsByTagName('canvas')[0];
    let stage;
    let currentSceneState;
    let currentScene;
    let playScene;
    let assets;
    let zombieAtlas;
    let assetManifest = [
        { id: "road", src: "./Assets/images/road.png" },
        { id: "avatar", src: "./Assets/images/avatar.png" },
        { id: "bullet", src: "./Assets/images/bullet.png" },
        { id: "pothole", src: "./Assets/images/pothole.png" },
        { id: "zombie", src: "./Assets/images/zombieSprite.png" },
        { id: "splash", src: "./Assets/images/splash.png" },
        { id: "button", src: "./Assets/images/button.png" },
        { id: "placeholder", src: "./Assets/images/placeholder.png" },
        { id: "btnStart", src: "./Assets/images/btnStart.png" },
        { id: "btnInstruction", src: "./Assets/images/btnInstruction.png" },
        { id: "btnExit", src: "./Assets/images/btnExit.png" },
        { id: "bgInstruction", src: "./Assets/images/bgInstruction.png" } // from https://www.pngguru.com/free-transparent-background-png-clipart-bwqrj
    ];
    let zombieData = {
        "images": {},
        "frames": [
            [1, 1, 100, 93],
            [103, 1, 100, 93],
            [205, 1, 100, 93],
            [1, 96, 100, 93],
            [103, 96, 100, 93],
            [205, 96, 100, 93],
            [1, 191, 100, 93],
            [103, 191, 100, 93],
            [205, 191, 100, 93],
            [1, 286, 100, 93],
            [103, 286, 100, 93],
            [205, 286, 100, 93],
            [307, 1, 100, 93],
            [307, 96, 100, 93],
            [307, 191, 100, 93],
            [307, 286, 100, 93],
            [1, 381, 100, 93]
        ],
        "animations": {
            "zombie": {
                "frames": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
                "speed": 0.5
            },
        }
    };
    /**
     * This method preloads assets
     */
    function Preload() {
        assets = new createjs.LoadQueue(); // asset container
        config.Game.ASSETS = assets; // make a reference to the assets in the global config
        assets.installPlugin(createjs.Sound); // supports sound preloading
        assets.loadManifest(assetManifest);
        assets.on("complete", Start);
    }
    /**
     * This method initializes the CreateJS (EaselJS) Library
     * It sets the framerate to 60 FPS and sets up the main Game Loop (Update)
     */
    function Start() {
        console.log(`%c Game Started!`, "color: blue; font-size: 20px; font-weight: bold;");
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = config.Game.FPS;
        createjs.Ticker.on('tick', Update);
        stage.enableMouseOver(20);
        zombieData.images = [assets.getResult("zombie")];
        zombieAtlas = new createjs.SpriteSheet(zombieData);
        config.Game.ZOMBIE_ATLAS = zombieAtlas;
        currentSceneState = scenes.State.NO_SCENE;
        config.Game.SCENE_STATE = scenes.State.START;
    }
    /**
     * This function is triggered every frame (16ms)
     * The stage is then erased and redrawn
     */
    function Update() {
        if (currentSceneState != config.Game.SCENE_STATE) {
            Main();
        }
        currentScene.Update();
        stage.update();
    }
    /**
     * This is the main function of the Game (where all the fun happens)
     *
     */
    function Main() {
        console.log(`%c Scene Switched...`, "color: green; font-size: 16px;");
        // clean up
        if (currentSceneState != scenes.State.NO_SCENE) {
            currentScene.Clean();
            stage.removeAllChildren();
        }
        // switch to the new scene
        switch (config.Game.SCENE_STATE) {
            case scenes.State.START:
                console.log("switch to Start Scene");
                currentScene = new scenes.Start();
                break;
            case scenes.State.PLAY:
                console.log("switch to Play Scene");
                playScene = new scenes.Play();
                currentScene = playScene;
                break;
            case scenes.State.INSTRUCTION:
                console.log("switch to Instruction Scene");
                currentScene = new scenes.Instruction();
                break;
            case scenes.State.EXIT:
                console.log("switch to Exit Scene");
                currentScene = new scenes.Splash();
                break;
        }
        config.Game.CURRENT_SCENE = currentScene;
        currentSceneState = config.Game.SCENE_STATE;
        stage.addChild(currentScene);
    }
    // attach keydown and keyup event to the window
    window.addEventListener("keyup", (event) => {
        if (playScene && playScene.keyPressedStates) {
            playScene.keyPressedStates[event.keyCode] = false;
        }
    });
    window.addEventListener("keydown", (event) => {
        if (playScene && playScene.keyPressedStates) {
            playScene.keyPressedStates[event.keyCode] = true;
        }
    });
    window.addEventListener('load', Preload);
})();
//# sourceMappingURL=game.js.map