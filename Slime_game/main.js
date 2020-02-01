var width = window.innerWidth;
var height = window.innerHeight;

var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);
 
// create scene object
var scene = new THREE.Scene;

var camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 10000);

// create perspective camera
var camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 10000);
camera.position.y = 10;
camera.position.z = 10;

// add to scene and renderer
scene.add(camera); 

// create the view matrix
camera.lookAt(player.position);

// create lighting and add to scene 
var pointLight = new THREE.PointLight(0xaabbcc);
pointLight.position.set(10, 16, 16);
scene.add(pointLight);

//add player to scene and set start position
scene.add(player);
resetPosition();

//add cursor to scene
scene.add(cursor);
cursor.position.set(cursor_startPos[0], cursor_startPos[1], cursor_startPos[2]);

//Set up grid
//createGrid1();
createGrid2();
/*
function setGrid(size, divisions){
    this.size = size;
    this.divisions = divisions;
    this.startPos = startPos;
    var gridHelper = new THREE.GridHelper(size, divisions);
    scene.add( gridHelper );
}
setGrid(100, 20);*/


//Set up the skybox
var skyboxGeometry = new THREE.CubeGeometry(1000, 1000, 1000);
var skyboxMaterial = new THREE.MeshBasicMaterial({  map: THREE.ImageUtils.loadTexture('./assets/Slimegamesky.jpg'), side: THREE.BackSide });
var skybox = new THREE.Mesh(skyboxGeometry, skyboxMaterial);
scene.add(skybox);

//Add event listeners
//set listener for window resizing
window.addEventListener('resize', () => {
	renderer.setSize(window.innerWidth,window.innerHeight);
	camera.aspect = window.innerWidth / window.innerHeight;

	camera.updateProjectionMatrix();
});

//set listeners for keyboard presses
document.addEventListener('keyup', doKeyUp, false);
document.addEventListener('keydown', doKeyDown, false);
//document.addEventListener('keypress', doKeyPress);
renderer.render(scene, camera);

function render() {
	var rotSpeed = 0.09;
	var x = camera.position.x, y = camera.position.y, z = camera.position.z;
    renderer.render(scene, camera);
    requestAnimationFrame(render);

	if(keyStatus["leftArrow"]){
	camera.translateX(-0.3);	
	}
	if(keyStatus["rightArrow"]){
		camera.translateX(0.3);
	}
	if(keyStatus["upArrow"]){
		camera.translateY(0.3);
		camera.translateZ(-0.3);  
	}
	if(keyStatus["downArrow"]){
		camera.translateY(-0.3);
		camera.translateZ(0.3);
	}
	if(keyStatus["qKey"]){
		camera.position.x = x * Math.cos(rotSpeed) - z * Math.sin(rotSpeed);
		camera.position.z = z * Math.cos(rotSpeed) + x * Math.sin(rotSpeed);
		camera.lookAt(scene.position);
    }
    if(keyStatus["eKey"]){
    	camera.position.x = x * Math.cos(rotSpeed) + z * Math.sin(rotSpeed);
		camera.position.z = z * Math.cos(rotSpeed) - x * Math.sin(rotSpeed);
		camera.lookAt(scene.position);      
	}
	if(keyStatus["oKey"]){
    	camera.translateZ(-0.3);     
	}

	if(keyStatus["pKey"]){
		camera.translateZ(0.3);
    }


    if(movementUnlocked){
        if(keyStatus["wKey"]){
            cursorForward();
        }
        if(keyStatus["aKey"]){
            cursorLeft();
        }
        if(keyStatus["sKey"]){
            cursorBackward();
        }
        if(keyStatus["dKey"]){
            cursorRight();
		}
		if(keyStatus["space"]){
			followCursor();
		}
    }
}
render();
