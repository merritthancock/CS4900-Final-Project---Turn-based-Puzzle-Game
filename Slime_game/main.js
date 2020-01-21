
var width = window.innerWidth;
var height = window.innerHeight;


var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);
 
// create scene object
var scene = new THREE.Scene;

// create simple geometry and add to scene
var cubeGeometry = new THREE.CubeGeometry(15,15, 15);
var cubeMaterial = new THREE.MeshLambertMaterial({ map: THREE.ImageUtils.loadTexture('slime.jpg')});
//var cubeMaterial = new THREE.MeshLambertMaterial({ color: 0xddaa66});
var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
 
var size = 100;
var divisions = 20;

var gridHelper = new THREE.GridHelper( size, divisions );
scene.add( gridHelper );

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





var skyboxGeometry = new THREE.CubeGeometry(10000, 10000, 10000);
var skyboxMaterial = new THREE.MeshBasicMaterial({  map: THREE.ImageUtils.loadTexture('sky.jpg'), side: THREE.DoubleSide });
var skybox = new THREE.Mesh(skyboxGeometry, skyboxMaterial);
scene.add(skybox);

 
renderer.render(scene, camera);


function render() {
    renderer.render(scene, camera);
    requestAnimationFrame(render);
    //cube.rotation.y += 0.01;
	
}
render();

