var width = window.innerWidth;
var height = window.innerHeight;

var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);
 
// create scene object
var scene = new THREE.Scene;

//used to determine player start position for the level
var startPos = [1, 0.5, 1]; // 0, 0.5, 0 will put cube in back left corner of size 100, div 20 grid

// create player and add to scene
var cubeGeometry = new THREE.CubeGeometry(1,1,1);
var cubeMaterial = new THREE.MeshLambertMaterial({ map: THREE.ImageUtils.loadTexture('assets/slime.jpg')});
var player = new THREE.Mesh(cubeGeometry, cubeMaterial);
player.position.set(startPos[0], startPos[1], startPos[2]);
console.log(player.position);

// create perspective camera
camera.position.y = 10;
camera.position.z = 10;

// add to scene and renderer
scene.add(camera); 

// create the view matrix
camera.lookAt(player.position);

// add lighting and add to scene 
var pointLight = new THREE.PointLight(0xaabbcc);
pointLight.position.set(10, 16, 16);
scene.add(pointLight);
scene.add(player);

//Set up the ground
grassland = new THREE.Mesh(new THREE.PlaneGeometry(200,200),
            new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true})
);
grassland.rotation.x -= Math.PI / 2;
grassland.position.set(0, 0, 0);
scene.add(grassland);

//Set up grid
function setGrid(size, divisions){
    this.size = size;
    this.divisions = divisions;
    this.startPos = startPos;
    var gridHelper = new THREE.GridHelper(size, divisions);
    scene.add( gridHelper );
}
setGrid(100, 20);

//Set up the skybox
var skyboxGeometry = new THREE.CubeGeometry(1000, 1000, 1000);
var skyboxMaterial = new THREE.MeshBasicMaterial({  color: 0xffffff, side: THREE.DoubleSide });
var skybox = new THREE.Mesh(skyboxGeometry, skyboxMaterial);
scene.add(skybox);

//set listener for window resizing
window.addEventListener('resize', () => {
	renderer.setSize(window.innerWidth,window.innerHeight);
	camera.aspect = window.innerWidth / window.innerHeight;

	camera.updateProjectionMatrix();
});

//set listeners for keyboard presses
document.addEventListener('keyup', doKeyUp, false);
document.addEventListener('keydown', doKeyDown, false);
renderer.render(scene, camera);

function render() {
    renderer.render(scene, camera);
    requestAnimationFrame(render);
}
render();