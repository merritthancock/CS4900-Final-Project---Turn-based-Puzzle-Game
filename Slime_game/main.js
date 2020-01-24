
var width = window.innerWidth;
var height = window.innerHeight;


var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);
 
// create scene object
var scene = new THREE.Scene;

// create simple geometry and add to scene
var cubeGeometry = new THREE.CubeGeometry(15,15, 15);
//var cubeMaterial = new THREE.MeshLambertMaterial({ map: THREE.ImageUtils.loadTexture('crate.jpg')});
var cubeMaterial = new THREE.MeshLambertMaterial({ color: 0xddaa66});
var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
var k37 =false;
var k38 =false;
var k39 =false;
var k40 =false;

function doKeyDown(event) {
		var code = event.keyCode;
	switch(code) {
	case 37: // <
			k37 = true;
			break;
		case 39: // >
			k39=true;
			break;
		case 38: // ^
			k38 = true;
			break;
		case 40: // v
			k40 = true;
			break;
	
	}
	
}

function doKeyUp(event) {
		var code = event.keyCode;
	switch(code) {
	case 37: // <
			k37 = false;
			break;
		case 39: // >
			k39=false;
			break;
		case 38: // ^
			k38 = false;
			break;
		case 40: // v
			k40 = false;
			break;
	}	
}

 

// create perspective camera
var camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 10000);
camera.position.y = 16;
camera.position.z = 40;
// add to scene and renderer
scene.add(camera); 
renderer.render(scene, camera);
// create the view matrix
camera.lookAt(cube.position);

// add lighting and add to scene 
var pointLight = new THREE.PointLight(0xaabbcc);
pointLight.position.set(10, 16, 16);
scene.add(pointLight);
scene.add(cube);




/*
var skyboxGeometry = new THREE.CubeGeometry(10000, 10000, 10000);
var skyboxMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000, side: THREE.DoubleSide });
var skybox = new THREE.Mesh(skyboxGeometry, skyboxMaterial);
scene.add(skybox);
 */
document.addEventListener('keyup', doKeyUp, false);
document.addEventListener('keydown', doKeyDown, false);
renderer.render(scene, camera);


function render() {
	var rotSpeed = 0.03;
	var x = camera.position.x, y = camera.position.y, z = camera.position.z;
    renderer.render(scene, camera);
    requestAnimationFrame(render);
    cube.rotation.y += 0.01;
	if( k37 || k39){

		if(k37){
	camera.position.x = x * Math.cos(rotSpeed) + z * Math.sin(rotSpeed);
    camera.position.z = z * Math.cos(rotSpeed) - x * Math.sin(rotSpeed);
    camera.lookAt(scene.position);


		}
		if(k39){
    camera.position.x = x * Math.cos(rotSpeed) - z * Math.sin(rotSpeed);
    camera.position.z = z * Math.cos(rotSpeed) + x * Math.sin(rotSpeed);
    camera.lookAt(scene.position);


		}


	}
	if( k38 || k40){

		if(k38){
	camera.position.z = z * Math.cos(rotSpeed) + y * Math.sin(rotSpeed);
    camera.position.y = y * Math.cos(rotSpeed) - z * Math.sin(rotSpeed);
    camera.lookAt(scene.position);


		}
		if(k40){
    camera.position.z = z * Math.cos(rotSpeed) - y * Math.sin(rotSpeed);
    camera.position.y = y * Math.cos(rotSpeed) + z * Math.sin(rotSpeed);
    camera.lookAt(scene.position);
		}


	}
}
render();

