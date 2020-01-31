var width = window.innerWidth;
var height = window.innerHeight;

var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);

//initialize variables
var scene, cube, camera, raycaster, mouse, pointLight;

init();

function init() {
    // create scene object
    scene = new THREE.Scene;

    // create simple geometry and add to scene
    var cubeGeometry = new THREE.CubeGeometry(15,15, 15);
    var cubeMaterial = new THREE.MeshLambertMaterial({ map: THREE.ImageUtils.loadTexture('NEP.jpg')});
    //var cubeMaterial = new THREE.MeshLambertMaterial({ color: 0xddaa66});
    cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

    // create perspective camera
    camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 10000);

    //Raycaster for mouseover targeting. Needed to replicate neps!
    raycaster = new THREE.Raycaster();
    mouse = new THREE.Vector2();

    //add light
    pointLight = new THREE.PointLight(0xFFFFFF, 1.5 );
    
    //camera.position.x = 20;
    camera.position.y = 15;
    camera.position.z = 75;
    // add to scene and renderer
    scene.add(camera); 
    renderer.render(scene, camera);
    // create the view matrix
    camera.lookAt(cube.position);

    // add lighting and add to scene 

    pointLight.position.set(0, 32, 32);
    scene.add(pointLight);
    scene.add(cube);

    window.addEventListener('resize', () => {
        renderer.setSize(window.innerWidth,window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
    
        camera.updateProjectionMatrix();
    });
}




var skyboxGeometry = new THREE.CubeGeometry(10000, 10000, 10000);
var skyboxMaterial = new THREE.MeshBasicMaterial({  map: THREE.ImageUtils.loadTexture('nep.gif'), side: THREE.DoubleSide });
var skybox = new THREE.Mesh(skyboxGeometry, skyboxMaterial);
skybox.position.y -= 2500;
scene.add(skybox);


//Acquired from https://www.youtube.com/watch?v=6oFvqLfRnsU by DesignCourse, posted on March 12, 2019
function onMouseMove(event) {
    event.preventDefault();

    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = (event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);

    var intersects = raycaster.intersectObjects(scene.children, true);
    for(var i = 0; i < intersects.length; i++) {
        console.log("Ray casted properly!");

        intersects[i].object.rotation.x -= 10;
    }
}

function render() {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
    cube.rotation.y += 0.01;
    skybox.rotation.y -= 0.01;
	
}

window.addEventListener('mousemove', onMouseMove);

render();