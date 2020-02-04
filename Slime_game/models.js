//Start position of player
// -90, 7.5, -90 will put cube in back left corner of size 100, div 20 grid

//Start position - player
var startPos = [2, 0.5, 2];
//Start position - cursor
var cursor_startPos = [2, 1.1, 2]
//Create cube to represent player/slime
var cubeGeometry = new THREE.CubeGeometry(1,1,1);
var cubeMaterial = new THREE.MeshLambertMaterial({ map: THREE.ImageUtils.loadTexture('./assets/slime.jpg')});
var player = new THREE.Mesh(cubeGeometry, cubeMaterial);

//Create Ring to represent cursor
var cursor_geometry = new THREE.RingGeometry( 0, 0.4, 32);//1,5,32
var cursor_material = new THREE.MeshBasicMaterial( { color: 0xffff00, side: THREE.DoubleSide } );
var cursor = new THREE.Mesh( cursor_geometry, cursor_material );
cursor.rotation.x -= Math.PI / 2;


//Create enemy cube
var enemyGeometry = new THREE.CubeGeometry(1,1,1);
var enemyMaterial = new THREE.MeshLambertMaterial({ map: THREE.ImageUtils.loadTexture('./assets/skull.jpg')});
var enemy = new THREE.Mesh(enemyGeometry, enemyMaterial);