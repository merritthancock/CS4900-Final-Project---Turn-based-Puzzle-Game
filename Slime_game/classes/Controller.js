import {updateRender} from "../RenderTasks.js";
import {doKeyUp, doKeyDown} from "../KeyboardInput.js";
import {buildCamera} from "./Camera.js";
import {buildCameraControls} from "./Camera.js";
import {scene} from "./LevelManager.js";
import {currentLevel} from "./LevelManager.js";

// declare letiables
let windowWidth;
let windowHeight;
let camera;
let cameraControls;
let renderer;
let menu = document.getElementById("menu");
let startButton = document.getElementById("start");
//let board;

//Game setup tasks-----------------------------------------------
//Sets height and width for game window
windowWidth = window.innerWidth;
windowHeight = window.innerHeight;

function start(){
    //Start Game
    startButton.onclick = function(){
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
        setupLevel();};
}
    
function setupLevel(){
    camera = new THREE.PerspectiveCamera(45, windowWidth / windowHeight, 0.1, 10000);
    buildCamera();
    scene.add(camera);//referenced scene from LevelManager
    renderer.compile(scene, camera);
    cameraControls = new THREE.OrbitControls( camera, renderer.domElement );
    buildCameraControls();
    animate();
}

function renderLevel() {
    updateRender(currentLevel);
    renderer.render(scene, camera);
}

function animate() {
    requestAnimationFrame(animate);
    renderLevel();
}
start();
//setupLevel();

export {camera};
export {cameraControls};