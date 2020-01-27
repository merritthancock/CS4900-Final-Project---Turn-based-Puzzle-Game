//rotate the camera about center of scene when called
function rotateCamera(){
    if(leftArrow){
        camera.position.x = x * Math.cos(rotSpeed) + z * Math.sin(rotSpeed);
        camera.position.z = z * Math.cos(rotSpeed) - x * Math.sin(rotSpeed);
        camera.lookAt(scene.position);
    }
    if(rightArrow){
        camera.position.x = x * Math.cos(rotSpeed) - z * Math.sin(rotSpeed);
        camera.position.z = z * Math.cos(rotSpeed) + x * Math.sin(rotSpeed);
        camera.lookAt(scene.position);
    }
    if(upArrow){
        camera.position.z = z * Math.cos(rotSpeed) + y * Math.sin(rotSpeed);
        camera.position.y = y * Math.cos(rotSpeed) - z * Math.sin(rotSpeed);
        camera.lookAt(scene.position);
    }
    if(downArrow){
        camera.position.z = z * Math.cos(rotSpeed) - y * Math.sin(rotSpeed);
        camera.position.y = y * Math.cos(rotSpeed) + z * Math.sin(rotSpeed);
        camera.lookAt(scene.position);
    }
}