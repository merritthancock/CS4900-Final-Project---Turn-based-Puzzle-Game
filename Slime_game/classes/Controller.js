import {updateRender} from "../RenderTasks.js";
import {doKeyUp, doKeyDown} from "../KeyboardInput.js";
import {buildCamera} from "./Camera.js";
import {buildCameraControls} from "./Camera.js";
import {scene, testLevel} from "./LevelManager.js";
//import {scene2} from "./LevelManager.js";
//import {testLevel2} from "./LevelManager.js";
import {loadLevel} from "./LevelManager.js";
import {currentLevel, changeLevel} from "./Global.js";

// declare variables
let windowWidth;
let windowHeight;
let camera;
let cameraControls;
let renderer;
let canvas = document.querySelector("#game");
let menu = document.getElementById("menu");
let winScreen = document.querySelector("#winLevel");
let startButton = document.getElementById("start");
let level2Button = document.getElementById("Level2");
let level3Button = document.getElementById("Level3");
let currentScene;
let loadingScreen = document.getElementById("loading-screen");

//Game setup tasks-----------------------------------------------
//Sets height and width for game window
windowWidth = window.innerWidth;
windowHeight = window.innerHeight;


function start(){
    loadingScreen.style.display = "none";
    //Level 1
    startButton.onclick = function(){
        //Sets current scene to level 1 scene
        menu.style.display = "none";
        console.log("Level 1");
        changeLevel(testLevel);
        currentScene = scene;
        loadLevel(currentScene, currentLevel);
        setupTasks();
        setupLevel();
    };
    //Level 2
    level2Button.onclick = function(){
        //Sets current scene to level 2 scene
        menu.style.display = "none";
        console.log("Level 2");
        currentLevel = testLevel;
        currentScene = scene;
        setupTasks();
        setupLevel();
    };
    //Level 3
    level3Button.onclick = function(){
        menu.style.display = "none";
        console.log("Level 3");
        currentScene = scene;
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

function setupLevel(){
    camera = new THREE.PerspectiveCamera(45, windowWidth / windowHeight, 0.1, 10000);
    buildCamera();
    currentScene.add(camera);
    renderer.compile(currentScene, camera);
    cameraControls = new THREE.OrbitControls( camera, renderer.domElement );
    buildCameraControls();
    animate();
}

function winLevel(){
    winScreen.style.opacity = 1;
}

function renderLevel() {
    updateRender();
    renderer.render(currentScene, camera);
}

function animate() {
    requestAnimationFrame(animate);
    renderLevel();
}
start();

export {camera};
export {cameraControls};
export {winLevel};