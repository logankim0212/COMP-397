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
    let canvas: HTMLCanvasElement = document.getElementsByTagName('canvas')[0];
    let stage: createjs.Stage;

    // scene
    let currentSceneState: scenes.State;
    let currentScene: objects.Scene;
    let startScene: scenes.Start;
    let playScene: scenes.Play;

    // assets
    let assets: createjs.LoadQueue;
    let zombieAtlas: createjs.SpriteSheet;
    let assetManifest =
        [
            // images
            { id: "road", src: "./Assets/images/road.png" }, // from https://opengameart.org/content/golgotha-textures-tunnelroadjpg
            { id: "avatar", src: "./Assets/images/avatar.png" }, // from https://webstockreview.net/explore/motorcycle-clipart-top-view/
            { id: "bullet", src: "./Assets/images/bullet.png" }, // from https://www.clipart.email/download/7844222.html
            { id: "specialBullet", src: "./Assets/images/specialBullet.png" }, // from https://ya-webdesign.com/imgdownload.html
            { id: "pothole", src: "./Assets/images/pothole.png" }, // from http://www.pngall.com/hole-png/download/36973
            { id: "zombie", src: "./Assets/images/zombieSprite.png" }, // from https://opengameart.org/content/animated-top-down-zombie
            { id: "heart", src: "./Assets/images/heart.png" }, // from https://www.stickpng.com/img/people/hearts/heart-clipart-side
            { id: "powerup", src: "./Assets/images/powerup.png" }, // from https://ya-webdesign.com/image/power-up-png/812708.html
            { id: "button", src: "./Assets/images/button.png" }, // from Tom Tsiliopoulos
            { id: "placeholder", src: "./Assets/images/placeholder.png" }, // from Tom Tsiliopoulos
            { id: "btnStart", src: "./Assets/images/btnStart.png" }, // from https://www.pngguru.com/free-transparent-background-png-clipart-bwqrj
            { id: "btnRestart", src: "./Assets/images/btnRestart.png" }, // from https://www.pngguru.com/free-transparent-background-png-clipart-bwqrj
            { id: "btnMain", src: "./Assets/images/btnMain.png" }, // from https://www.pngguru.com/free-transparent-background-png-clipart-bwqrj
            { id: "btnInstruction", src: "./Assets/images/btnInstruction.png" }, // from https://www.pngguru.com/free-transparent-background-png-clipart-bwqrj
            { id: "btnExit", src: "./Assets/images/btnExit.png" }, // from https://www.pngguru.com/free-transparent-background-png-clipart-bwqrj
            { id: "splash", src: "./Assets/images/splash.png" }, // own creation of COSMOS Games
            { id: "bgStart", src: "./Assets/images/bgStart.png" }, // from https://www.playstationlifestyle.net/2019/04/21/days-gone-title-meaning/
            { id: "bgInstruction", src: "./Assets/images/bgInstruction.png" }, // from https://www.pngguru.com/free-transparent-background-png-clipart-bwqrj
            { id: "bgGameOver", src: "./Assets/images/bgGameOver.png" }, // from https://finance.yahoo.com/news/2-zombie-stocks-coming-back-143100700.html
            // audio
            { id: "splashSound", src: "./Assets/audio/splash.mp3" }, // from https://freesound.org/people/original_sound/sounds/494978/
            { id: "bgm", src: "./Assets/audio/bgm.mp3" }, // from https://www.youtube.com/watch?v=gQv-D0De2nk
            { id: "buttonSound", src: "./Assets/audio/button.mp3" }, // from http://soundbible.com/1672-Button-Press.html
            { id: "shootingSound", src: "./Assets/audio/shooting.mp3" }, // from https://freesound.org/people/Yap_Audio_Production/sounds/218480/
            { id: "reloadingSound", src: "./Assets/audio/reloading.mp3" }, // from https://www.youtube.com/watch?v=c-BKVzTLqlc
            { id: "potholeSound", src: "./Assets/audio/pothole.mp3" }, // from https://freesound.org/people/TROLlox_78/sounds/274119/
            { id: "heartSound", src: "./Assets/audio/heart.mp3" }, // from https://freesound.org/people/shinephoenixstormcrow/sounds/337049/
            { id: "powerupSound", src: "./Assets/audio/powerup.mp3" }, // from https://freesound.org/people/kantouth/sounds/104401/
            { id: "hitZombieSound", src: "./Assets/audio/hit_zombie.mp3" }, // from https://freesound.org/people/animationIsaac/sounds/149899/
            { id: "zombieDeathSound", src: "./Assets/audio/zombie_death.mp3" } // from https://freesound.org/people/bigmonmulgrew/sounds/346626/
        ];
    let zombieData =
    {
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
    }

    /**
     * Function for preloading assets
     * 
     */
    function Preload(): void {
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
    function Start(): void {
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
    function Update(): void {
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
    function Main(): void {
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
    window.addEventListener("keyup", (event: KeyboardEvent) => {
        if (playScene && playScene.keyPressedStates) {
            playScene.keyPressedStates[event.keyCode] = false;
        }
    });

    // attach keydown event to the window
    window.addEventListener("keydown", (event: KeyboardEvent) => {
        if (playScene && playScene.keyPressedStates) {
            playScene.keyPressedStates[event.keyCode] = true;
        }
    });

    // attach preload to the window
    window.addEventListener('load', Preload);
})();