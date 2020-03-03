import {createTestLevel} from "../assets/LevelMaps/TestLevel.js";
import {updateRender} from "../RenderTasks.js";
import {doKeyUp, doKeyDown} from "../KeyboardInput.js";
import {buildCamera} from "./Camera.js";

// declare variables
var windowWidth;
var windowHeight;
var camera;
var cameraControls;
var renderer;
var scene;
var board;
//just for renderTask to compile
var movementUnlocked;

function init() {
    //Renderer/Camera stuff
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(windowWidth, windowHeight);
    document.body.appendChild(renderer.domElement);

    camera = new THREE.PerspectiveCamera(45, windowWidth / windowHeight, 0.1, 10000);
    cameraControls = new THREE.OrbitControls( camera, renderer.domElement );
    cameraControls.update();
    //set listener for window resizing
    window.addEventListener('resize', () => {
        renderer.setSize(window.innerWidth,window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;

        camera.updateProjectionMatrix();
    });

    //Construct board object
    board = createTestLevel();

    // create scene object
    scene = new THREE.Scene;
    loadLevel(scene, board);

    camera.position.y = 20;
    camera.position.z = 20;

    // add to scene and renderer
    scene.add(camera); 
    camera.lookAt(board.tileArray[0][0].position);  
    buildCamera();

    //set listeners for keyboard presses
    document.addEventListener('keyup', doKeyUp, false);
    document.addEventListener('keydown', doKeyDown, false);
    cameraControls.update();
    animate();
}

//loadLevel accepts a scene and board as parameters.
//It searches the board for all terrain, enemy, and player meshes and adds them to the scene.
function loadLevel(scene, board) {
    for(var i = 0; i < board.tileArray.length; i++){
        for(var j = 0; j < board.tileArray[0].length; j++){
            if(board.tileArray[i][j].terrain != null){
                scene.add(board.tileArray[i][j].terrain);
                scene.add(board.overlayMap[i][j].overlay);
            }
        }
    }

    // create lighting and add to scene 
    //var pointLight = new THREE.PointLight(0xaabbcc);
    //pointLight.position.set(10, 16, 16);
    //scene.add(pointLight);
    var light = new THREE.AmbientLight( 0xf0f0f0 ); // soft white light
    scene.add( light );

    //Set up the skybox
    var sky = new THREE.TextureLoader().load( './assets/Slimegamesky.jpg' );
    var skyboxGeometry = new THREE.CubeGeometry(100, 100, 100);
    var skyboxMaterial = new THREE.MeshBasicMaterial({  map: sky, side: THREE.BackSide });
    var skybox = new THREE.Mesh(skyboxGeometry, skyboxMaterial);
    scene.add(skybox);

    //placeholder code for sprite implementation which may prove useful later on
    /*var spriteMap = new THREE.TextureLoader().load( "./assets/slime.jpg" );
    var spriteMaterial = new THREE.SpriteMaterial( { map: spriteMap, color: 0xffffff } );
    var sprite = new THREE.Sprite( spriteMaterial );
    sprite.position.set (-5, 10, 1);
    scene.add( sprite );*/

    //add player to the scene
    scene.add(board.player.mesh);
    //add cursor to the scene
    scene.add(board.cursor.mesh);
    //add enemy to the scene
    scene.add(board.enemies.mesh);

}

function animate() {
    requestAnimationFrame(animate);
    render();
}

function render() {
    renderer.render(scene, camera);
    updateRender(board);
}

init();

export {movementUnlocked};
export {scene};
export {camera};
export {cameraControls};