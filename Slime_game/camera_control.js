//rotate the camera about center of scene when called
function rotateCamera(){
    if(qKey){
        camera.position.x = x * Math.cos(rotSpeed) - z * Math.sin(rotSpeed);
		camera.position.z = z * Math.cos(rotSpeed) + x * Math.sin(rotSpeed);
		camera.lookAt(scene.position);
    }
    if(eKey){
        camera.position.x = x * Math.cos(rotSpeed) + z * Math.sin(rotSpeed);
		camera.position.z = z * Math.cos(rotSpeed) - x * Math.sin(rotSpeed);
		camera.lookAt(scene.position);       
    }    
}
function moveCamera(){
    if(leftArrow){
        camera.translateX(-0.1);	
    }
    if(rightArrow){
        camera.translateX(0.1);	        
    }
    if(upArrow){
        camera.translateY(0.1);	
    }
    if(downArrow){
        camera.translateX(-0.1);	
    }
}
function zoomCamera(){
    if(oKey){
        camera.translateZ(-0.1);     
    }
    if(pKey){
        camera.translateZ(-0.1);            
    }
}
function resetCamera(){
    if(rKey){
        camera.position.y = 10;
        camera.position.z = 10;
        camera.lookAt(player.position);
    }
}
