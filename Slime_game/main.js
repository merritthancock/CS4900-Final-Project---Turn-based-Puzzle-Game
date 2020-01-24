
var width = window.innerWidth;
var height = window.innerHeight;


var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);
 
// create scene object
var scene = new THREE.Scene;

//used to determine player start position for the level
var startPos = [0, 7.5, 0]; // -90, 7.5, -90 will put cube in back left corner of size 100, div 20 grid

// create player and add to scene
var cubeGeometry = new THREE.CubeGeometry(15,15,15);
var cubeMaterial = new THREE.MeshLambertMaterial({ map: THREE.ImageUtils.loadTexture('slime.jpg')});
var player = new THREE.Mesh(cubeGeometry, cubeMaterial);
player.position.set(startPos[0], startPos[1], startPos[2]);
console.log(player.position);

// create perspective camera
var camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 10000);
camera.position.y = 45;
camera.position.z = 50;
// add to scene and renderer
scene.add(camera); 
renderer.render(scene, camera);
// create the view matrix
camera.lookAt(player.position);

// add lighting and add to scene 
var pointLight = new THREE.PointLight(0xaabbcc);
pointLight.position.set(10, 16, 16);
scene.add(pointLight);
scene.add(player);

//Set up the ground
grassland = new THREE.Mesh(new THREE.PlaneGeometry(200,200),
            new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture('grass.jpg')}) //placeholder texture for visulize only
);
grassland.rotation.x -= Math.PI / 2;
grassland.position.set(0, 0, 0);

//grassland.position.set(0,0,0);
scene.add(grassland);

//Set up grid
function setGrid(size, divisions){
    this.size = size;
    this.divisions = divisions;
    this.startPos = startPos;
    var gridHelper = new THREE.GridHelper( size, divisions);
    scene.add( gridHelper );
    
}

var skyboxGeometry = new THREE.CubeGeometry(10000, 10000, 10000);
var skyboxMaterial = new THREE.MeshBasicMaterial({  map: THREE.ImageUtils.loadTexture('sky.jpg'), side: THREE.DoubleSide });
var skybox = new THREE.Mesh(skyboxGeometry, skyboxMaterial);
scene.add(skybox);

renderer.render(scene, camera);

function render() {
    renderer.render(scene, camera);
    requestAnimationFrame(render);
    setGrid(100, 20);
}
render();

