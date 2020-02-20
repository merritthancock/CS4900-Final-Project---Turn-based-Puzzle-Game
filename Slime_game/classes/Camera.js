import {board} from "./Controller.js";
import {camera} from "./Controller.js";

function cameraFollow(camera, board){
    camera.position.x = board.cursor.position.x;
    camera.position.y = board.cursor.position.y;
    camera.positoin.z = board.cursor.position.z;
}

export{camera};
