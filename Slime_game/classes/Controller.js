import {updateRender} from "../RenderTasks.js";
import {doKeyUp, doKeyDown} from "../KeyboardInput.js";
import {buildCamera} from "./Camera.js";
import {buildCameraControls} from "./Camera.js";
import {resourceTracker, buildTestLevel, buildLevel3} from "./LevelManager.js";
import {buildLevel1} from "./Levels/Level1.js";
//import {scene2} from "./LevelManager.js";
//import {testLevel2} from "./LevelManager.js";
import {currentLevel, changeLevel} from "./Global.js";
import { NavNode } from "../libraries/yuka-master/src/yuka.js";

// declare variables
let windowWidth;
let windowHeight;
let camera;
let cameraControls;
let renderer;
let canvas = document.querySelector("#game");
let menu = document.getElementById("menu");
let winScreen = document.querySelector("#winLevel");
let toolTips = document.querySelector("#toolTip");
let rightTips = document.querySelector("#topRightTip");
let startButton = document.getElementById("start");
let level1Button = document.getElementById("Level1");
//let level2Button = document.getElementById("Level2");
let level3Button = document.getElementById("Level3");
let menuBtn = document.querySelector("#menuBtn");
let scene = new THREE.Scene();
let loadingScreen = document.getElementById("loading-screen");

//Tool Tips Variables
let leftPic = document.querySelector("#playerPic");
let massTip = document.querySelector("#mass");
let jumpHeightTip = document.querySelector("#jumpHeight");
let movementRangeTip = document.querySelector("#movementRange");
let abilityTypeTip = document.querySelector("#ability");
//Right Tips Variables
let rightPic = document.querySelector("#topRightTip");
let rightType = document.querySelector("#type");
let rightHeight = document.querySelector("#terrainHeight");
let rightName = document.querySelector("#entityName");
let rightAbility = document.querySelector("#rightAbility");

//Game setup tasks-----------------------------------------------
//Sets height and width for game window
windowWidth = window.innerWidth;
windowHeight = window.innerHeight;

menuBtn.onclick = function(){
    winScreen.style.display = "none";
    winScreen.style['pointer-events'] = 'none';
    loadingScreen.style.display = "block";
    canvas.style.display = "none";

    //Dispose of all the contents of the scene graph
    /*while(currentScene.children.length > 0) {
        let obj = currentScene.children[0];
        currentScene.remove(obj);
        if(obj instanceof THREE.BufferGeometry) {
            console.log("HIIIII");
            obj.material.dispose();
            obj.dispose();
        }
    }*/
    //renderer.dispose();
    resourceTracker.dispose();
    loadingScreen.style.display = "none";
    menu.style.display = "block";
  
};

function start(){
    loadingScreen.style.display = "none";
    canvas.style.display = "none";
    toolTips.style['opacity'] = '0.8';
    toolTips.style.display = "none";
    rightTips.style.display = "none";
    rightTips.style['opacity'] = '0.8';
  
    //Test Level
    startButton.onclick = function(){
        //Sets current scene to level 1 scene
        menu.style.display = "none";
        canvas.style.display = "block";
        console.log("Test Level");
        changeLevel(buildTestLevel());
        loadLevel(scene, currentLevel);
        canvas.style.display = "block";
        toolTips.style.display = "block";
        rightTips.style.display = "block";
        setupTasks();
        setupLevel();
    };
    //Level 1
    level1Button.onclick = function(){
        //Sets current scene to level 2 scene
        menu.style.display = "none";
        toolTips.style.display = "block";
        console.log("Level 1");
        changeLevel(buildLevel1());
        loadLevel(scene, currentLevel);
        canvas.style.display = "block";
        toolTips.style.display = "block";
        rightTips.style.display = "block";
        setupTasks();
        setupLevel();
    };
    //Level 2
    //level2Button.onclick = function(){
        //Sets current scene to level 2 scene
      //  menu.style.display = "none";
        //toolTips.style.display = "block";
        //console.log("Level 2");
        //currentLevel = testLevel;
        //setupTasks();
        //setupLevel();
    //};

    //Level 3
    level3Button.onclick = function(){
        menu.style.display = "none";
        console.log("Level 3");
        changeLevel(buildLevel3());
        loadLevel(scene, currentLevel);
        canvas.style.display = "block";
        toolTips.style.display = "block";
        rightTips.style.display = "block";
        setupTasks();
        setupLevel();
    };
}

function setupTasks(){
    //Creates renderer and adds it to document body
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setSize(windowWidth, windowHeight);
    document.body.appendChild(renderer.domElement);
    //gameScreen.appendChild(renderer.domElement);

    //set listener for window resizing. Allows resizing of game.
    window.addEventListener('resize', () => {
        renderer.setSize(window.innerWidth,window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    });

    //Adds event listeners to document
    document.addEventListener('keyup', doKeyUp, false);
    document.addEventListener('keydown', doKeyDown, false);
    //----------------------------------------------------------------
}

//Level loading logic-----------------------------------------------------

//Loading Manager
let loadingManager = new THREE.LoadingManager();
loadingManager.onStart = function ( url, itemsLoaded, itemsTotal ) {
    console.log("Loading begins....");
    loadingScreen.style.display = "block";

};
loadingManager.onLoad = function ( ) {
    console.log("Loading complete!");
    loadingScreen.style.display = "none";
};

function loadModel(entity, loader) {
    loader.load(
        // resource URL
        entity.url,
        // called when the resource is loaded
        
        function ( gltf ) {
            scene.add(resourceTracker.track(gltf.scene));
            //Set positional data
            let xPos = entity.position[0];
            let yPos = entity.position[1];
            let zPos = entity.position[2];
            gltf.scene.scale.set(.5, .5, .5);
            gltf.scene.position.set(xPos, yPos, zPos);
            entity.model = gltf.scene;
            entity.mixer = new THREE.AnimationMixer(gltf.scene);
            let clips = gltf.animations;
            //let clip = THREE.AnimationClip.findByName( clips, 'idle' );
            let clip = clips[0];
            let action = entity.mixer.clipAction( clip );
            action.play();

        },
        // called while loading is progressing
        function ( xhr ) {
            console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
        }
    );
}

function loadTextures(level) {
    let textureLoadingManager = new THREE.LoadingManager();
    let textureLoader = new THREE.TextureLoader(textureLoadingManager);
    textureLoadingManager.onLoad = function () {
        level.board.buildBoard(resourceTracker);
        loadBoard(scene, currentLevel);
    }
    level.board.textures[0] = resourceTracker.track(textureLoader.load( './assets/grass.jpg' ));
    level.board.textures[2] = resourceTracker.track(textureLoader.load( './assets/mountain.jpg' ));
    level.board.textures[3] = resourceTracker.track(textureLoader.load( './assets/cave.jpg' ));

    //TODO: SET SKY URL IN LEVEL CONSTRUCTOR
    level.sky = resourceTracker.track(textureLoader.load( './assets/Slimegamesky.jpg' ));
}

function loadBoard(scene, level) {
    for(let i = 0; i < level.board.tileMap.length; i++){
        for(let j = 0; j < level.board.tileMap[0].length; j++){
            if(level.board.tileArray[i][j].terrain != null){
                scene.add(resourceTracker.track(level.board.tileArray[i][j].terrain));
                scene.add(resourceTracker.track(level.board.overlayMap[i][j].overlay));
            }
        }
    }

    // create lighting and add to scene 
    let light = resourceTracker.track(new THREE.AmbientLight( 0xe0e0e0 )); // soft white light
    scene.add(light);

    //Set up the skybox (TODO: MAKE SKYBOX A PARAM IN LEVEL)
    scene.background = level.sky;
    //let skyboxGeometry = new THREE.CubeGeometry(100, 100, 100);
    //let skyboxMaterial = new THREE.MeshBasicMaterial({  map: sky, side: THREE.BackSide });
    //let skybox = resourceTracker.track(new THREE.Mesh(skyboxGeometry, skyboxMaterial));
    //scene.add(skybox);

    /*COMMENTED OUT BECAUSE OF NEW LOADING MECHANICS
    //add player to the scene
    scene.add(level.player.mesh);
    //add cursor to the scene
    scene.add(level.cursor.mesh);
    //add enemy to the scene
    for(let i = 0; i < enemies.length; i++){
        scene.add(level.enemies[i].mesh);
    }*/
}

function loadLevel(scene, level){
    let loader = new THREE.GLTFLoader(loadingManager).setPath( './assets/GLTFModels/' );

    //Load enemy models
    for(let i = 0; i < level.enemies.length; i++) {
        loadModel(level.enemies[i], loader);
    }
    //Load player model
    loadModel(level.player, loader);
    //Load cursor model
    loadModel(level.cursor, loader);
    //Load textures
    loadTextures(level);
    //loadBoard will be called from the loadingManager's onLoad function
    //loadBoard(scene, level);
}

//Final prep and game start logic
function setupLevel(){
    camera = resourceTracker.track(new THREE.PerspectiveCamera(45, windowWidth / windowHeight, 0.1, 10000));
    buildCamera();
    scene.add(camera);
    renderer.compile(scene, camera);
    cameraControls = resourceTracker.track(new THREE.OrbitControls( camera, renderer.domElement ));
    buildCameraControls();
    animate();
}

function updateToolTips(){
    
}

function winLevel(){
    winScreen.style['pointer-events'] = 'auto';
    winScreen.style.opacity = 1;
    toolTips.style.display = "none";
    rightTips.style.display = "none";
}

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    if(currentLevel.player.mixer) {
        currentLevel.player.mixer.update(.017);
    }
    if(currentLevel.cursor.mixer) {
        currentLevel.cursor.mixer.update(.017);
    }
    for(let i = 0; i < currentLevel.enemies.length; i++) {
        if(currentLevel.enemies[i].mixer) {
            currentLevel.enemies[i].mixer.update(.017);
        }
    }
    updateRender();
}
start();

export {camera};
export {cameraControls};
export {winLevel};