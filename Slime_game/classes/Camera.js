import {camera} from "./Controller.js"
import {cameraControls} from "./Controller.js";

function buildCamera(){
    //Camera View Limitations
    cameraControls.maxPolarAngle = Math.PI / 2.5;
    cameraControls.minPolarAngle = Math.PI / 10;
    cameraControls.minDistance = 10;
    cameraControls.maxDistance = 75;
}

function moveCamera(camera, direction){
    switch(direction){
        case "forward":
            camera.position.z += 1;
            break;
        case "backward":
            camera.position.z -= 1;
            break;
        case "left":
            camera.position.x -= 1;
            break;
        case "right":
            camera.position.x += 1;
            break;
    }
    camera.lookAt(cursor.position);
}

export{moveCamera};
export{buildCamera};