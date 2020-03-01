import {loadingDone} from "./Controller";

var loadingManager = null;
var loadAmount = 0.0;

let load = {
	scene: new THREE.Scene(),
	camera: new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1,1000),
	box: new THREE.Mesh(
		new THREE.BoxGeometry(1,1,1),
		new THREE.MeshBasicMaterial({color:"rgb(255,0,0)"})
	)
};

load.box.position.set(0,0,0);
load.camera.lookAt(load.box.position);
load.camera.position.z=10;
load.scene.add(load.box);
load.scene.add(load.camera);
load.scene.add( new THREE.AmbientLight( 0x404040) );

loadManager.onProgress = function(item, loaded, total){
	console.log(item, total, loadedvar,	loadAmount = (loaded/levels.get_level_size()));
}
loadManager.onLoad = function(){
	console.log("Level is Loaded: ");
	loadingDone = false;
}

export{loadManager, load}