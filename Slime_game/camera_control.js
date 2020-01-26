//rotate the camera about center of scene when called
function rotateCamera(){
    if(leftArrow){
        camera.position.x = x * Math.cos(rotSpeed) - z * Math.sin(rotSpeed);
        camera.position.z = z * Math.cos(rotSpeed) + x * Math.sin(rotSpeed);
        camera.lookAt(scene.position);
    }
    if(rightArrow){
        camera.position.x = x * Math.cos(rotSpeed) + z * Math.sin(rotSpeed);
        camera.position.z = z * Math.cos(rotSpeed) - x * Math.sin(rotSpeed);
        camera.lookAt(scene.position);        
    }
    if(upArrow){
        camera.position.z = z * Math.cos(rotSpeed) - y * Math.sin(rotSpeed);
        camera.position.y = y * Math.cos(rotSpeed) + z * Math.sin(rotSpeed);
        camera.lookAt(scene.position);
    }
    if(downArrow){
        camera.position.z = z * Math.cos(rotSpeed) + y * Math.sin(rotSpeed);
        camera.position.y = y * Math.cos(rotSpeed) - z * Math.sin(rotSpeed);
        camera.lookAt(scene.position);       
    }
}
function zoomCamera(){
    if(qKey){
        camera.fov += 1;
        camera.lookAt(scene.position);
    }
    if(eKey){
        camera.fov -= 1;
        camera.lookAt(scene.position);        
    }
}
function resetCamera(){
    if(rKey){
        camera.position.x = 0;
		camera.position.y = 10;
		camera.position.z = 10;
		camera.fov = 45;
        camera.lookAt(player.position);
    }
}
