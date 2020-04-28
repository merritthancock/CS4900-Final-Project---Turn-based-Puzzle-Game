import {updateRender} from "../RenderTasks.js";
import {doKeyUp, doKeyDown} from "../KeyboardInput.js";
import {buildCamera} from "./Camera.js";
import {buildCameraControls} from "./Camera.js";
import {resourceTracker, buildTestLevel} from "./LevelManager.js";
import {buildLevel1} from "./Levels/Level1.js";
import {buildLevel2} from "./Levels/Level2.js";
import {buildLevel3} from "./Levels/Level3.js";
//import {scene2} from "./LevelManager.js";
//import {testLevel2} from "./LevelManager.js";
import {currentLevel, changeLevel} from "./Global.js";
import { NavNode } from "../libraries/yuka-master/src/yuka.js";
import {occupied} from "./Pathing.js";
import {getLock, releaseLock} from "../Semaphore.js";
import {TWEEN} from "../libraries/tween.js";

// declare variables
let windowWidth;
let windowHeight;
let camera;
let cameraControls;
let renderer;
let canvas = document.querySelector("#game");
let menu = document.getElementById("menu");
let winScreen = document.querySelector("#winLevel");
let loseScreen = document.querySelector("#loseLevel");
let toolTips = document.querySelector("#toolTip");
let rightTips = document.querySelector("#topRightTip");
let startButton = document.getElementById("start");
let level1Button = document.getElementById("Level1");
let level2Button = document.getElementById("Level2");
let level3Button = document.getElementById("Level3");
let menuBtn = document.querySelector("#menuBtn");
let loseBtn = document.querySelector("#loseBtn");
let loseMenuBtn = document.querySelector("#loseMenuBtn");
let nextLevel = document.querySelector("#nextLevel");
let scene = new THREE.Scene();
let loadingScreen = document.getElementById("loading-screen");
let replayTracker;

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
let rightMass = document.querySelector("#rightMass");

//Game setup tasks-----------------------------------------------
//Sets height and width for game window
windowWidth = window.innerWidth;
windowHeight = window.innerHeight;


menuBtn.onclick = function(){
    winScreen.style.display = "none";
    winScreen.style['pointer-events'] = 'none';
    loadingScreen.style.display = "block";
    canvas.style.display = "none";

    resourceTracker.dispose();
    loadingScreen.style.display = "none";
    menu.style.display = "block";
};

loseMenuBtn.onclick = function(){//go back to menu
    loseScreen.style.display = "none";
    loseScreen.style['pointer-events'] = 'none';
    loadingScreen.style.display = "block";
    canvas.style.display = "none";
    resourceTracker.dispose();
    loadingScreen.style.display = "none";
    menu.style.display = "block";
    loseScreen.style.display = "none";
};

loseBtn.onclick = function(){//replay
    loseScreen.style.display = "none";
    loseScreen.style['pointer-events'] = 'none';
    loadingScreen.style.display = "block";
    canvas.style.display = "none";
    resourceTracker.dispose();
    loadingScreen.style.display = "none";
    toolTips.style['opacity'] = '0.8';
    toolTips.style.display = "none";
    rightTips.style.display = "none";
    rightTips.style['opacity'] = '0.8';
    switch(replayTracker){
        case 0:
            startButton.click();
            break;
        case 1:
            level1Button.click();
            break;
        case 2:
            level2Button.click();
            break;
        case 3:
            level3Button.click();
            break;
        default :
            loseMenuBtn.click();
            break;
    }
}

nextLevel.onclick = function(){//next level
    winScreen.style.display = "none";
    loseScreen.style['pointer-events'] = 'none';
    replayTracker++;
    loseBtn.click();
}


function start(){
    loadingScreen.style.display = "none";
    canvas.style.display = "none";
    toolTips.style['opacity'] = '0.8';
    toolTips.style.display = "none";
    rightTips.style.display = "none";
    rightTips.style['opacity'] = '0.8';
  
    //Test Level
    startButton.onclick = function(){
        console.log("Test Level");
        replayTracker = 0;
        changeLevel(buildTestLevel());
        buildLevel();
    };
    //Level 1
    level1Button.onclick = function(){
        console.log("Level 1");
        replayTracker = 1;
        loseScreen.style.display = "none";
        changeLevel(buildLevel1());
        buildLevel();
    };
    //Level 2
    level2Button.onclick = function(){
        console.log("Level 2");
        replayTracker = 2;
        changeLevel(buildLevel2());
        buildLevel(); 
    };

    //Level 3
    level3Button.onclick = function(){
        console.log("Level 3");
        replayTracker = 3;
        changeLevel(buildLevel3());
        buildLevel();
    };
}

function buildLevel(){//Called for every level
    menu.style.display = "none";
    loadLevel(scene, currentLevel);
    canvas.style.display = "block";
    toolTips.style.display = "block";
    rightTips.style.display = "block";
    setupTasks();
    setupLevel();
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
            entity.animations = clips;
            let clip = THREE.AnimationClip.findByName( clips, 'idle' );
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
    getLock("Loader");
    let textureLoader = new THREE.TextureLoader(textureLoadingManager);
    textureLoadingManager.onLoad = function () {
        level.board.buildBoard(resourceTracker);
        loadBoard(scene, currentLevel);
        releaseLock("Loader");
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
    //Update left tool tip
    //let lvlObject = currentLevel.getUIData();
    jumpHeightTip.innerHTML = currentLevel.player.jumpHeight.toString();
    //movementRangeTip.innerHTML = currentLevel.player.movementRange.toString();
    massTip.innerHTML = currentLevel.player.mass.toString();
    if(currentLevel.player.abilities.length = 1){
        abilityTypeTip.innerHTML = "None";
    }
    else{
        //abilityTypeTip.innerHTML = currentLevel.player.abilities[0].toString();
        abilityTypeTip.innerHTML = "Yes";
    }

    //Update top right tool tip


    let selectTile = currentLevel.getUIData().selectedTile;
    let cursTile = currentLevel.getUIData().cursorTile;/*
    let playTile = currentLevel.getUIData().playerTile;*/

    let tileOccupant = occupied(currentLevel.board);
    if(tileOccupant != "None"){
        rightType.innerHTML = "Entity"
        rightMass.style['opacity'] = '0.8';
        rightMass.style.display = "block";
        rightMass.innerHTML = "Mass: " + cursTile.occupant.mass.toString();

        //set picture
        switch(tileOccupant){
            case "player":
                rightName.innerHTML = "Player";
                document.getElementById("rightPic").src = "./assets/slime.jpg";
                break;
            default:
                rightName.innerHTML = cursTile.occupant.type;
                document.getElementById("rightPic").src = "./assets/skull.jpg";
                break;

        }
        
    }
    else{    
        rightMass.style.display = "none";
        rightType.innerHTML = "None";
        let tileType = currentLevel.getUIData().cursorTile.type;
        switch(tileType){
            case 0://grass
                rightName.innerHTML = "grass";
                document.getElementById("rightPic").src = "./assets/grass64.jpg";
                break;
            case 1://rock
                rightName.innerHTML = "rock";
                document.getElementById("rightPic").src = "./assets/mountain.jpg";
                break;
            case 2://water
                rightName.innerHTML = "water";
                document.getElementById("rightPic").src = "./assets/water.jpg";
                break;
            case 3://gap
                rightName.innerHTML = "gap"
                document.getElementById("rightPic").src = "./assets/sky.jpg";
                break;
            case 4://cave
                rightName.innerHTML = "cave";
                document.getElementById("rightPic").src = "./assets/cave64.jpg";
                break;
            case 8://exit
                rightName.innerHTML = "exit";
                document.getElementById("rightPic").src = "./assets/yellow.jpg";
                break;
        }
    }
    rightHeight.innerHTML = currentLevel.getUIData().cursorTile.height.toString();
    
}

function winLevel(){
    winScreen.style['pointer-events'] = 'auto';
    winScreen.style['opacity'] = '0.8';
    toolTips.style.display = "none";
    rightTips.style.display = "none";
}

function loseLevel() {
    loseScreen.style['pointer-events'] = 'auto';
    loseScreen.style.display = "block";
    loseScreen.style['opacity'] = '0.8';
    toolTips.style.display = "none";
    rightTips.style.display = "none";
}

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    if(currentLevel.player.mixer) {
        currentLevel.player.mixer.update(.025);
    }
    if(currentLevel.cursor.mixer) {
        currentLevel.cursor.mixer.update(.025);
    }
    for(let i = 0; i < currentLevel.enemies.length; i++) {
        if(currentLevel.enemies[i].mixer) {
            currentLevel.enemies[i].mixer.update(.025);
        }
    }
    TWEEN.update();
    updateRender();
}
start();

export {camera};
export {cameraControls};
export {winLevel};
export {loseLevel};
export {updateToolTips};