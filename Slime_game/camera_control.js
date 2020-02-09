//rotate the camera about center of scene when called
var width = window.innerWidth;
var height = window.innerHeight;

var camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 10000);

camera.position.x = 5;
camera.position.y = 10;
camera.position.z = 10;

var rotSpeed = 0.01;

function rotateCamera(direction){
    if(direction == 'counterclockwise'){
        camera.position.x = camera.position.x * Math.cos(rotSpeed) - camera.position.z * Math.sin(rotSpeed);
		camera.position.z = camera.position.z * Math.cos(rotSpeed) + camera.position.x * Math.sin(rotSpeed);
		camera.lookAt(scene.position);
    }
    if(direction == 'clockwise'){
        camera.position.x = camera.position.x * Math.cos(rotSpeed) + camera.position.z * Math.sin(rotSpeed);
		camera.position.z = camera.position.z * Math.cos(rotSpeed) - camera.position.x * Math.sin(rotSpeed);
		camera.lookAt(scene.position);
    }    
}
function moveCamera(direction){
    switch(direction){
        case "left":
            camera.translateX(-0.1);
            break;
        case "right":
            camera.translateX(0.1);
            break;
        case "forward":
            camera.translateY(0.1);
            camera.translateZ(-0.1);	
            break;
        case "backward":
            camera.translateY(-0.1);
            camera.translateZ(0.1);
            break;
    }
    /*
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
    */
}
function zoomCamera(direction){
    if(direction == "forward"){
        camera.translateZ(-0.3);     
    }
    if(direction == "backward"){
        camera.translateZ(0.3);            
    }

}
function resetCamera(){
    
        camera.position.y = cursor.position + 10;
        camera.position.z = cursor.position + 10;
        camera.lookAt(player.position);
    
}
