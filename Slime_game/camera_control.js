//rotate the camera about center of scene when called
var width = window.innerWidth;
var height = window.innerHeight;

var camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 10000);;

camera.position.x = 10;
camera.position.y = 10;
camera.position.z = 10;

var rotSpeed = 0.03;

function rotateCamera(){
    console.log("RotateCamera called!")
    console.log("left arrow status: " + keyStatus["leftArrow"])
    console.log("right arrow status: " + keyStatus["rightArrow"])
    console.log("up arrow status: " + keyStatus["upArrow"])
    console.log("down arrow status: " + keyStatus["downArrow"])

    if(keyStatus["leftArrow"]){
		camera.position.x = camera.position.x * Math.cos(rotSpeed) + camera.position.z * Math.sin(rotSpeed);
		camera.position.z = camera.position.z * Math.cos(rotSpeed) - camera.position.x * Math.sin(rotSpeed);
        camera.lookAt(scene.position);
        console.log("camera position: " + camera.position.x + "," + camera.position.y + "," + camera.position.z);
	}
	if(keyStatus["rightArrow"]){
		camera.position.x = camera.position.x * Math.cos(rotSpeed) - camera.position.z * Math.sin(rotSpeed);
		camera.position.z = camera.position.z * Math.cos(rotSpeed) + camera.position.x * Math.sin(rotSpeed);
		camera.lookAt(scene.position);
	}
	if(keyStatus["upArrow"]){
		camera.position.z = camera.position.z * Math.cos(rotSpeed) + camera.position.y * Math.sin(rotSpeed);
		camera.position.y = camera.position.y * Math.cos(rotSpeed) - camera.position.z * Math.sin(rotSpeed);
		camera.lookAt(scene.position);
	}
	if(keyStatus["downArrow"]){
		camera.position.z = camera.position.z * Math.cos(rotSpeed) - camera.position.y * Math.sin(rotSpeed);
		camera.position.y = camera.position.y * Math.cos(rotSpeed) + camera.position.z * Math.sin(rotSpeed);
		camera.lookAt(scene.position);
	}
}