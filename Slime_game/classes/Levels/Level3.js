import {Level} from "../Level.js";
import { Milcap } from "../Entities/Enemies/Milcap.js";
import {Verm} from "../Entities/Enemies/Verm.js"
import {Pinpod} from "../Entities/Enemies/Pinpod.js";
import {PinpodSp} from "../Entities/Enemies/PinpodSp.js";
import {Pinbeast} from "../Entities/Enemies/Pinbeast.js";
import {Player} from "../Entities/Player.js";
import {Cursor} from "../Entities/Cursor.js";

//LEVEL 3: PINBEAST BOSS-------------------------------------------------
function buildLevel3() {
    let tileMap = [
        [9, 4, 4, 4, 4, 9, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 9],
        [4, 4, 1, 1, 4, 9, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4],
        [4, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4],
        [4, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 4, 9],
        [4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4],
        [4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4],
        [9, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4],
        [9, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4],
        [9, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4],//mid
        [9, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4],
        [9, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 9],
        [4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4],
        [4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4],
        [4, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 4],
        [4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4],
        [4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4],
        [9, 4, 4, 1, 1, 1, 1, 4, 4, 4, 1, 1, 1, 1, 1, 4, 9],
        [9, 9, 4, 4, 4, 4, 4, 9, 9, 9, 4, 4, 4, 4, 4, 4, 9]
    ];

    let heightMap = [
        [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
        [4, 4, 0, 0, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4],
        [4, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
        [4, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 4, 4],
        [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
        [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
        [4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
        [4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
        [4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],//mid
        [4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
        [4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4],
        [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
        [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
        [4, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 4],
        [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
        [4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4],
        [4, 4, 4, 0, 0, 0, 0, 4, 4, 4, 0, 0, 0, 0, 0, 4, 4],
        [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]  
    ];

    //Create Player
    let pPos = [8, 1, 14];
    let player = new Player(pPos, "player", 1);

    //Create Cursor
    let cPos = [8, 1.6, 14];
    let cursor = new Cursor(cPos, "cursor");

    let enemies = [];

    let enemyPos = [6, 1, 11];
    let pinpod1 = new PinpodSp(enemyPos, "pinpod1", 1, 4);

    enemyPos = [5,1,7];
    let pinpod2 = new PinpodSp(enemyPos, "pinpod3", 1, 3);

    enemyPos = [13,1,6];
    let pinpod3 = new PinpodSp(enemyPos, "pinpod3", 1, 2);

    enemyPos = [11,1,10];
    let pinpod4 = new PinpodSp(enemyPos, "pinpod4", 1, 5);

    enemyPos = [8,1,5];
    let boss = new Pinbeast(enemyPos, "Pinbeast", 20, 1);

    enemies.push(pinpod1);
    enemies.push(pinpod2);
    enemies.push(pinpod3);
    enemies.push(pinpod4);
    enemies.push(boss);

    let level3 = new Level(heightMap, tileMap, enemies, player, cursor);

    return level3;
}

export {buildLevel3};

