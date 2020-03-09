import {camera} from "./Controller.js"
import {cameraControls} from "./Controller.js";

function buildCamera(){
     //Camera Position
     camera.position.y = 20;
     camera.position.z = 20;
     camera.updateProjectionMatrix();
}

function buildCameraControls(){
    //Camera View Limitations
    cameraControls.maxPolarAngle = Math.PI / 2.5;
    cameraControls.minPolarAngle = Math.PI / 10;
    cameraControls.minDistance = 10;
    cameraControls.maxDistance = 75;
    cameraControls.rotateSpeed = 0.5;
    cameraControls.panSpeed = 0.5;
    //Update Orbit controls
    cameraControls.update();
}

export{buildCamera};
export{buildCameraControls};