import{Level} from "./Level.js";
import {Cursor} from "./Entities/Cursor.js";
import {Milcap} from "./Entities/Enemies/Milcap.js";
import {Player} from "./Entities/Player.js";

//Create New Levels
//Load Level

//Variables
let scene;
let currentLevel;

let testLevelTileMap = [
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 9, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 9, 4, 0, 0, 0, 0, 0, 0, 8, 4],
    [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 9, 4, 0, 0, 0, 0, 0, 0, 0, 4],
    [4, 0, 0, 0, 0, 0, 4, 0, 4, 0, 0, 0, 0, 0, 4, 9, 4, 0, 0, 0, 0, 0, 0, 0, 4],
    [4, 0, 0, 0, 0, 4, 4, 0, 4, 4, 0, 0, 0, 0, 4, 9, 4, 0, 0, 0, 0, 0, 0, 0, 4],
    [4, 0, 0, 0, 0, 4, 4, 0, 4, 4, 0, 0, 0, 0, 4, 9, 4, 0, 0, 0, 0, 0, 0, 0, 4],
    [4, 0, 0, 0, 0, 0, 4, 0, 4, 0, 0, 0, 0, 0, 4, 9, 4, 0, 0, 0, 0, 0, 0, 0, 4],
    [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 9, 4, 0, 0, 0, 0, 0, 0, 0, 4],
    [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 9, 4, 0, 0, 0, 0, 0, 0, 0, 4],
    [4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 4, 4, 4, 4, 4, 9, 4, 0, 0, 0, 4, 4, 4, 4, 4],//mid
    [9, 9, 9, 9, 9, 9, 4, 0, 0, 0, 4, 9, 9, 9, 9, 9, 4, 0, 0, 0, 4, 9, 9, 9, 9],//mid
    [4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 4, 9, 9, 9, 9],
    [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 9, 9, 9, 9],
    [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 9, 9, 9, 9],
    [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 9, 9, 9, 9],
    [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 9, 9, 9, 9],
    [4, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 9, 9, 9, 9],
    [4, 0, 0, 0, 0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 9, 9, 9, 9],
    [4, 0, 0, 0, 0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 9, 9, 9, 9],
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 9, 9, 9, 9],
];
let testLevelHeightMap = [
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 9, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 9, 2, 0, 0, 0, 0, 0, 0, 0, 2], 
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 9, 2, 0, 0, 0, 0, 0, 0, 0, 2],
    [2, 0, 0, 0, 0, 0, 4, 0, 4, 0, 0, 0, 0, 0, 2, 9, 2, 0, 0, 0, 0, 0, 0, 0, 2],
    [2, 0, 0, 0, 0, 4, 4, 0, 4, 4, 0, 0, 0, 0, 2, 9, 2, 0, 0, 0, 0, 0, 0, 0, 2],
    [2, 0, 0, 0, 0, 4, 4, 0, 4, 4, 0, 0, 0, 0, 2, 9, 2, 0, 0, 0, 0, 0, 0, 0, 2],
    [2, 0, 0, 0, 0, 0, 4, 0, 4, 0, 0, 0, 0, 0, 2, 9, 2, 0, 0, 0, 0, 0, 0, 0, 2],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 9, 2, 0, 0, 0, 0, 0, 0, 0, 2],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 9, 2, 0, 0, 0, 0, 0, 0, 0, 2],
    [2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 2, 2, 2, 2, 2, 9, 2, 0, 0, 0, 2, 2, 2, 2, 2],//mid
    [9, 9, 9, 9, 9, 9, 2, 0, 0, 0, 2, 9, 9, 9, 9, 9, 2, 0, 0, 0, 2, 0, 0, 0, 0],//mid
    [2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 2, 0, 0, 0, 0],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 3, 2, 1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 3, 2, 1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 3, 2, 1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0]
];

//Create Player
let slime = new THREE.TextureLoader().load( './assets/slime.jpg' );
let playerBox = new THREE.BoxGeometry(1, 1, 1);
let playerPos = [2, 1, 2];
let player = new Player(playerPos, playerBox, slime, "player", 1);
player.moveEntity(playerPos[0], playerPos[1], playerPos[2], player);

//Create Cursor
let cu = new THREE.TextureLoader().load( './assets/yellow.jpg' );
let cursorMod = new THREE.CircleBufferGeometry( 0.5, 30 );
cursorMod.rotateX(-Math.PI/2);
let cursorPos = [1, 1.6, 2];
let cursor = new Cursor(cursorPos, cursorMod, cu, "cursor");
cursor.moveEntity(cursorPos[0], cursorPos[1], cursorPos[2], cursor);

//Create Enemy
let skull = new THREE.TextureLoader().load( './assets/skull.jpg' );
let enemyBox = new THREE.BoxGeometry(1,1,1);
let enemyPos = [13, 1, 3];
let enemy = new Milcap(enemyPos, enemyBox, skull, "enemy", 1);
enemy.moveEntity(enemyPos[0], enemyPos[1], enemyPos[2], enemy);
let enemies = [enemy];

enemy.path.loop = true;
enemy.path.add([13, 1, 13]);
enemy.path.add([17, 1, 13]);
enemy.path.add([15, 1, 4]);
enemy.path.add([14, 1, 4]);
enemy.path.add([13, 1, 3]); 

//Create Level
let testLevel = new Level(testLevelHeightMap, testLevelTileMap, enemies, player, cursor);


//Create Scene
scene = new THREE.Scene;


function loadLevel(scene, level){

    loadBoard(scene, level);
}

function loadBoard(scene, level) {
    for(let i = 0; i < level.board.tileMap.length; i++){
        for(let j = 0; j < level.board.tileMap[0].length; j++){
            if(level.board.tileArray[i][j].terrain != null){
                scene.add(level.board.tileArray[i][j].terrain);
                scene.add(level.board.overlayMap[i][j].overlay);
            }
        }
    }

    // create lighting and add to scene 
    let light = new THREE.AmbientLight( 0xe0e0e0 ); // soft white light
    scene.add(light);


    //Set up the skybox
    let sky = new THREE.TextureLoader().load( './assets/Slimegamesky.jpg' );
    let skyboxGeometry = new THREE.CubeGeometry(100, 100, 100);
    let skyboxMaterial = new THREE.MeshBasicMaterial({  map: sky, side: THREE.BackSide });
    let skybox = new THREE.Mesh(skyboxGeometry, skyboxMaterial);
    scene.add(skybox);

    //add player to the scene
    scene.add(level.player.mesh);
    //add cursor to the scene
    scene.add(level.cursor.mesh);
    //add enemy to the scene //TODO: Add array compatibility for board
    for(let i = 0; i < enemies.length; i++){
        scene.add(level.enemies[i].mesh);
    }
}

loadLevel(scene, testLevel);
currentLevel = testLevel;

export {scene}
export {testLevel}
export {currentLevel}

