import {scene} from "../classes/Controller.js";

//https://medium.com/@matthewmain/how-to-import-a-3d-blender-object-into-a-three-js-project-as-a-gltf-file-5a67290f65f2 Part 4 is helpful

var manager = new THREE.LoadingManager();

var loader = new THREE.GLTFLoader().setPath( '../../Slime_game/assets/GLTFModels/' );

var milcapSoldier = loader.load(
	// resource URL
	'MilcapSoldier.glb',
	// called when the resource is loaded
	
	function ( gltf ) {
		scene.add(gltf.scene);
		gltf.scene.scale.set(.5, .5, .5);
		gltf.scene.position.set(15, 1, 3);
	},
	// called while loading is progressing
	function ( xhr ) {
		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
	}
);
var slimePlayer = loader.load(
	// resource URL
	'SlimeMain.glb',
	// called when the resource is loaded
	
	function ( gltf ) {
		scene.add(gltf.scene);
		gltf.scene.scale.set(.5, .5, .5);

		gltf.scene.position.set(4, 1, 2);

		gltf.animations; // Array<THREE.AnimationClip>
		gltf.scene; // THREE.Scene
		gltf.scenes; // Array<THREE.Scene>
		gltf.cameras; // Array<THREE.Camera>
		gltf.asset; // Object

	},
	// called while loading is progressing
	function ( xhr ) {
		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
	}
);
export {milcapSoldier, slimePlayer};
