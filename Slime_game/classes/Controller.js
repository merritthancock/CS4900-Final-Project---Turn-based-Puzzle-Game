import {updateRender} from "../RenderTasks.js";
import {doKeyUp, doKeyDown} from "../KeyboardInput.js";
import {buildCamera} from "./Camera.js";
import {buildCameraControls} from "./Camera.js";
import {scene} from "./LevelManager.js";
import {currentLevel} from "./LevelManager.js";

// declare variables
let windowWidth;
let windowHeight;
let camera;
let cameraControls;
let renderer;
let menu = document.getElementById("menu");
let startButton = document.getElementById("start");
let level2Button = document.getElementById("Level2");
let level3Button = document.getElementById("Level3");
let currentScene;
//let board;

//Game setup tasks-----------------------------------------------
//Sets height and width for game window
windowWidth = window.innerWidth;
windowHeight = window.innerHeight;

function start(){
    //Level 1
    startButton.onclick = function(){
        //Sets current scene to level 1 scene
        menu.style.display = "none";
        console.log("Level 1");
        currentScene = scene;
        setupTasks();
        setupLevel1();
    };
    //Level 2
    level2Button.onclick = function(){
        console.log("Level 2");
        currentScene = scene;
        setupTasks();
        setupLevel1();
    };
    //Level 3
    level3Button.onclick = function(){
        console.log("Level 3");
        currentScene = scene;
        setupTasks();
        setupLevel1();
    };
}
    
function setupTasks(){
    //Creates renderer and adds it to document body
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(windowWidth, windowHeight);
    document.body.appendChild(renderer.domElement);

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

function setupLevel1(){
    camera = new THREE.PerspectiveCamera(45, windowWidth / windowHeight, 0.1, 10000);
    buildCamera();
    currentScene.add(camera);//referenced scene from LevelManager
    renderer.compile(currentScene, camera);
    cameraControls = new THREE.OrbitControls( camera, renderer.domElement );
    buildCameraControls();
    animate();
}

function setupLevel2(){
    /*
    camera = new THREE.PerspectiveCamera(45, windowWidth / windowHeight, 0.1, 10000);
    buildCamera();
    scene.add(camera);//referenced scene from LevelManager
    renderer.compile(scene, camera);
    cameraControls = new THREE.OrbitControls( camera, renderer.domElement );
    buildCameraControls();
    animate();*/
}

function setupLevel3(){
    /*camera = new THREE.PerspectiveCamera(45, windowWidth / windowHeight, 0.1, 10000);
    buildCamera();
    scene.add(camera);//referenced scene from LevelManager
    renderer.compile(scene, camera);
    cameraControls = new THREE.OrbitControls( camera, renderer.domElement );
    buildCameraControls();
    animate();*/
}

function renderLevel() {
    updateRender(currentLevel);
    renderer.render(currentScene, camera);
}

function animate() {
    requestAnimationFrame(animate);
    renderLevel();
}
start();

export {camera};
export {cameraControls};