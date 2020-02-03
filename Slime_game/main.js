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

//add enemy to scene
scene.add(enemy);
resetEnemy();

//add cursor to scene
scene.add(cursor);
cursor.position.set(cursor_startPos[0], cursor_startPos[1], cursor_startPos[2]);

var loader = new THREE.GLTFLoader();
loader.load( './models/Level2.glb', function ( gltf ) {
	//gltf.scene.position.set(10,10,10);
	scene.add( gltf.scene );
	render();
} );

//Set up grid
//createGrid1();
createGrid2();

//Set up the skybox
var skyboxGeometry = new THREE.SphereGeometry(100, 100, 100);
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
renderer.render(scene, camera);

function render() {
	var rotSpeed = 0.09;
	var x = camera.position.x, y = camera.position.y, z = camera.position.z;
    renderer.render(scene, camera);
    requestAnimationFrame(render);

	updateRender();
}
render();
