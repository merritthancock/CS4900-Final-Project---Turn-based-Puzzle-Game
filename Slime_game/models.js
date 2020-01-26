//Start position of player
// -90, 7.5, -90 will put cube in back left corner of size 100, div 20 grid
var startPos = [1, 0.5, 1];

//Create cube to represent player/slime
var cubeGeometry = new THREE.CubeGeometry(1,1,1);
var cubeMaterial = new THREE.MeshLambertMaterial({ map: THREE.ImageUtils.loadTexture('./assets/slime.jpg')});
var player = new THREE.Mesh(cubeGeometry, cubeMaterial);