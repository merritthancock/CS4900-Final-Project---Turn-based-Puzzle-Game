//rotate the camera about center of scene when called
var width = window.innerWidth;
var height = window.innerHeight;

var camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 10000);

camera.position.x = 5;
camera.position.y = 10;
camera.position.z = 10;

var rotSpeed = 0.03;

function rotateCameraLeft(){   
    camera.translateX(-0.3)	;
    camera.lookAt(cursor.position);    
}
function rotateCameraRight(){    
    camera.translateX(0.3)	;
    camera.lookAt(cursor.position);  
}
function moveCameraForward(){
    camera.translateY(0.3);
    camera.translateZ(-0.3); 
}//rotate the camera about center of scene when called
var width = window.innerWidth;
var height = window.innerHeight;

var camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 10000);;

camera.position.x = 5;
camera.position.y = 10;
camera.position.z = 10;

var rotSpeed = 0.03;

function rotateCameraLeft(){   
    camera.translateX(-0.3)	;
    camera.lookAt(cursor.position);    
}
function rotateCameraRight(){    
    camera.translateX(0.3)	;
    camera.lookAt(cursor.position);  
}
function moveCameraForward(){
    camera.translateY(0.3);
    camera.translateZ(-0.3); 
}
function moveCameraBackward(){
    camera.translateY(-0.3);
    camera.translateZ(0.3);	
    
}
function moveCameraLeft(){
    camera.translateX(-0.1);	
        
}
function moveCameraRight(){
    camera.translateX(0.1);	        
    
}
function zoomCameraIn(){
    camera.translateZ(-0.1);
}
function zoomCameraOut(){
    camera.translateZ(0.1);
}
function resetCamera(){
    
        camera.position.y = cursor.position + 10;
        camera.position.z = cursor.position + 10;
        camera.lookAt(player.position);
    
}

function moveCameraBackward(){
    camera.translateY(-0.3);
    camera.translateZ(0.3);	
    
}
function moveCameraLeft(){
    camera.translateX(-0.1);	
        
}
function moveCameraRight(){
    camera.translateX(0.1);	        
    
}
function zoomCameraIn(){
    camera.translateZ(-0.1);
}
function zoomCameraOut(){
    camera.translateZ(0.1);
}
function resetCamera(){
    
        camera.position.y = cursor.position + 10;
        camera.position.z = cursor.position + 10;
        camera.lookAt(player.position);
    
}
