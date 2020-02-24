import {camera} from "./Controller.js"


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
}

export{moveCamera};