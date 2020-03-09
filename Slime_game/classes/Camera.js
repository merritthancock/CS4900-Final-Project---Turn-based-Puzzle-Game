import {camera} from "./Controller.js"
import {cameraControls} from "./Controller.js";

function buildCamera(){
     //Camera Position
     camera.position.y = 20;
     camera.position.z = 20;
}

function buildCameraControls(){
    //Camera View Limitations
    cameraControls.maxPolarAngle = Math.PI / 2.5;
    cameraControls.minPolarAngle = Math.PI / 10;
    cameraControls.minDistance = 10;
    cameraControls.maxDistance = 75;

    //Update Orbit controls
    cameraControls.update();
}

export{buildCamera};
export{buildCameraControls};