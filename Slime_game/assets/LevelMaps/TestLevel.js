import {Cursor} from "../../classes/Entities/Cursor.js";
import {Enemy} from "../../classes/Entities/Enemy.js";
import {Player} from "../../classes/Entities/Player.js";
import {Board} from "../../classes/Board.js";

function createTestLevel(){
    var testLevelTileMap = [
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
    var testLevelHeightMap = [
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

    //Codes:
    //0: Null
    //1: Player
    //2: Test enemy
    var testLevelEntitiesMap = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];

    var testLevelEnemies = [];

    //Create Player
    var slime = new THREE.TextureLoader().load( './assets/slime.jpg' );
    var playerBox = new THREE.BoxGeometry(1, 1, 1);
    var playerPos = [2, 1, 2];
    var player = new Player(playerPos, playerBox, slime, "player", 1);
    player.moveEntity(playerPos[0], playerPos[1], playerPos[2], player);

    //Create Cursor
    var cu = new THREE.TextureLoader().load( './assets/yellow.jpg' );
    var cursorMod = new THREE.CircleBufferGeometry( 0.5, 30 );
    cursorMod.rotateX(-Math.PI/2);
    var cursorPos = [1, 1, 2];
    var cursor = new Cursor(cursorPos, cursorMod, cu, "cursor");
    cursor.moveEntity(cursorPos[0], cursorPos[1], cursorPos[2], cursor);

    //Create Enemy
    var skull = new THREE.TextureLoader().load( './assets/skull.jpg' );
    var enemyBox = new THREE.BoxGeometry(1,1,1);
    var enemyPos = [13, 1, 3];
    var enemy = new Enemy(enemyPos, enemyBox, skull, "enemy", 1);
    enemy.moveEntity(enemyPos[0], enemyPos[1], enemyPos[2], enemy);

    testLevelEnemies.push(enemy);

    var testBoard = new Board(testLevelTileMap, testLevelHeightMap, testLevelEntitiesMap, player, enemy, cursor);

    return testBoard;
}

export {createTestLevel};