import {scene} from "../classes/Controller.js";


//https://medium.com/@matthewmain/how-to-import-a-3d-blender-object-into-a-three-js-project-as-a-gltf-file-5a67290f65f2 Part 4 is helpful

var manager = new THREE.LoadingManager();

var milcapSoldier;
var slimePlayer;

var loader = new THREE.GLTFLoader().setPath( '../../Slime_game/assets/GLTFModels/' );

loader.load(
	// resource URL
	'MilcapSoldier.glb',
	// called when the resource is loaded
	
	function ( gltf ) {
		gltf.scene.traverse( function ( child ) {
			if ( child.isMesh ) {

				roughnessMipmapper.generateMipmaps( child.material );

		}

	});
		scene.add(gltf.scene);

		
		milcapSoldier = gltf.scene;
		milcapSoldier.scale.set(.5, .5, .5);
		milcapSoldier.position.set(3, 1, 3);
		
			

		//gltf.animations; // Array<THREE.AnimationClip>
		//gltf.scene; // THREE.Scene
		//gltf.scenes; // Array<THREE.Scene>
		//gltf.cameras; // Array<THREE.Camera>
		//gltf.asset; // Object
	},
	// called while loading is progressing
	function ( xhr ) {

		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

	}//,
	// called when loading has errors
	//function ( error ) {

	//	console.log( 'An error happened' );

	//}
);
loader.load(
	// resource URL
	'SlimeMain.glb',
	// called when the resource is loaded
	
	function ( gltf ) {
		gltf.scene.traverse( function ( child ) {
			if ( child.isMesh ) {

				roughnessMipmapper.generateMipmaps( child.material );

		}

	});
		scene.add(gltf.scene);

		
		slimePlayer = gltf.scene;
		slimePlayer.scale.set(.5, .5, .5);
		//slimePlayer.position.set(3, 1, 3);
		

			

		//gltf.animations; // Array<THREE.AnimationClip>
		//gltf.scene; // THREE.Scene
		//gltf.scenes; // Array<THREE.Scene>
		//gltf.cameras; // Array<THREE.Camera>
		//gltf.asset; // Object
	},
	// called while loading is progressing
	function ( xhr ) {

		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

	}//,
	// called when loading has errors
	//function ( error ) {

	//	console.log( 'An error happened' );

	//}
);
export {milcapSoldier};
