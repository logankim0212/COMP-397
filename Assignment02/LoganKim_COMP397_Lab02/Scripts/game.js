"use strict";
/**
 * Logan J. Kim
 * 300973239
 * April 4, 2020
 *
 * Description:
 * Zombie Rider is a 2-dimensional top-down single player scrolling game designed with Days Gone theme.
 * This game contains 5 different scenes: splash, start, instruction, play and game over.
 * Player will lose once their health goes down to 0; however, player can replay the game
 * again and again until they reach their desired score.
 *
 * Versions:
 * v1.0 Zombie Rider Alpha Release
 */
//IIFE - Immediately Invoked Function Expression
//means -> self-executing anonymous function
let Game = (function () {
    // VARIABLE DECLARATIONS
    // general
    let canvas = document.getElementsByTagName('canvas')[0];
    let stage;
    // scene
    let currentSceneState;
    let currentScene;
    let startScene;
    let playScene;
    // assets
    let assets;
    let zombieAtlas;
    let assetManifest = [
        // images
        { id: "road", src: "./Assets/images/road.png" },
        { id: "avatar", src: "./Assets/images/avatar.png" },
        { id: "bullet", src: "./Assets/images/bullet.png" },
        { id: "specialBullet", src: "./Assets/images/specialBullet.png" },
        { id: "pothole", src: "./Assets/images/pothole.png" },
        { id: "zombie", src: "./Assets/images/zombieSprite.png" },
        { id: "heart", src: "./Assets/images/heart.png" },
        { id: "powerup", src: "./Assets/images/powerup.png" },
        { id: "button", src: "./Assets/images/button.png" },
        { id: "placeholder", src: "./Assets/images/placeholder.png" },
        { id: "btnStart", src: "./Assets/images/btnStart.png" },
        { id: "btnRestart", src: "./Assets/images/btnRestart.png" },
        { id: "btnMain", src: "./Assets/images/btnMain.png" },
        { id: "btnInstruction", src: "./Assets/images/btnInstruction.png" },
        { id: "btnExit", src: "./Assets/images/btnExit.png" },
        { id: "splash", src: "./Assets/images/splash.png" },
        { id: "bgStart", src: "./Assets/images/bgStart.png" },
        { id: "bgInstruction", src: "./Assets/images/bgInstruction.png" },
        { id: "bgGameOver", src: "./Assets/images/bgGameOver.png" },
        // sound
        { id: "splashSound", src: "./Assets/audio/splash.mp3" },
        { id: "bgm", src: "./Assets/audio/bgm.mp3" },
        { id: "buttonSound", src: "./Assets/audio/button.mp3" },
        { id: "shootingSound", src: "./Assets/audio/shooting.mp3" },
        { id: "reloadingSound", src: "./Assets/audio/reloading.mp3" },
        { id: "potholeSound", src: "./Assets/audio/pothole.mp3" },
        { id: "heartSound", src: "./Assets/audio/heart.mp3" },
        { id: "powerupSound", src: "./Assets/audio/powerup.mp3" },
        { id: "hitZombieSound", src: "./Assets/audio/hit_zombie.mp3" },
        { id: "zombieDeathSound", src: "./Assets/audio/zombie_death.mp3" } // from https://freesound.org/people/bigmonmulgrew/sounds/346626/
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
     * Function for preloading assets
     *
     */
    function Preload() {
        assets = new createjs.LoadQueue(); // asset container
        config.Game.ASSETS = assets; // make a reference to the assets in the global config
        assets.installPlugin(createjs.Sound); // supports sound preloading
        assets.loadManifest(assetManifest); // load assetManifest
        assets.on("complete", Start); // once completed, call start function
    }
    /**
     * Function for initializing the CreateJS (EaselJS) library
     * It sets the framerate and the main game loop by calling update function
     *
     */
    function Start() {
        // display console message for the status
        console.log(`%c Game started!`, "color: blue; font-size: 16px; font-weight: bold;");
        // set stages and createjs library
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = config.Game.FPS;
        createjs.Ticker.on('tick', Update);
        stage.enableMouseOver(20);
        // set zombie animation form spritesheet
        zombieData.images = [assets.getResult("zombie")];
        zombieAtlas = new createjs.SpriteSheet(zombieData);
        config.Game.ZOMBIE_ATLAS = zombieAtlas;
        // set scene state
        currentSceneState = scenes.State.NO_SCENE;
        config.Game.SCENE_STATE = scenes.State.SPLASH;
    }
    /**
     * Function for update which is triggered every frame
     *
     */
    function Update() {
        // call main if scene is switched
        if (currentSceneState != config.Game.SCENE_STATE) {
            Main();
        }
        // update current scene and stage
        currentScene.Update();
        stage.update();
    }
    /**
     * Main function of the game
     *
     */
    function Main() {
        // display console message for the status
        console.log(`%c Scene switched...`, "color: green; font-size: 14px;");
        // clean up scene and stage game elements when switched
        if (currentSceneState != scenes.State.NO_SCENE) {
            currentScene.Clean();
            stage.removeAllChildren();
        }
        // when switching to the new scene
        switch (config.Game.SCENE_STATE) {
            case scenes.State.SPLASH:
                // display console message for the status
                console.log("switch to Splash Scene");
                // set current scene
                currentScene = new scenes.Splash();
                break;
            case scenes.State.START:
                // display console message for the status
                console.log("switch to Start Scene");
                // set start scene and current scene
                startScene = new scenes.Start();
                currentScene = startScene;
                break;
            case scenes.State.PLAY:
                // display console message for the status
                console.log("switch to Play Scene");
                // set current scene
                playScene = new scenes.Play();
                currentScene = playScene;
                break;
            case scenes.State.GAMEOVER:
                // display console message for the status
                console.log("switch to Game Over Scene");
                // set current scene
                currentScene = new scenes.GameOver();
                break;
            case scenes.State.MAIN:
                // display console message for the status
                console.log("switch to Main Scene");
                // set current scene
                currentScene = new scenes.Start();
                break;
            case scenes.State.INSTRUCTION:
                // display console message for the status
                console.log("switch to Instruction Scene");
                // set current scene
                currentScene = new scenes.Instruction();
                break;
            case scenes.State.EXIT:
                // display console message for the status
                console.log("switch to Exit Scene");
                // reset high score and bgm
                config.Game.HIGH_SCORE = 0;
                config.Game.BGM_STATUS = false;
                startScene.BGM.stop();
                // set current scene
                currentScene = new scenes.Splash();
                break;
        }
        // set shared current scene element and call the scene to the stage
        config.Game.CURRENT_SCENE = currentScene;
        currentSceneState = config.Game.SCENE_STATE;
        stage.addChild(currentScene);
    }
    // attach keyup event to the window
    window.addEventListener("keyup", (event) => {
        if (playScene && playScene.keyPressedStates) {
            playScene.keyPressedStates[event.keyCode] = false;
        }
    });
    // attach keydown event to the window
    window.addEventListener("keydown", (event) => {
        if (playScene && playScene.keyPressedStates) {
            playScene.keyPressedStates[event.keyCode] = true;
        }
    });
    // attach preload to the window
    window.addEventListener('load', Preload);
})();
//# sourceMappingURL=game.js.map