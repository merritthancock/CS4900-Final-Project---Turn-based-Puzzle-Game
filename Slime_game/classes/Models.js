//https://medium.com/@matthewmain/how-to-import-a-3d-blender-object-into-a-three-js-project-as-a-gltf-file-5a67290f65f2 Part 4 is helpful

var manager = new THREE.LoadingManager();



var loader = new THREE.GLTFLoader().setPath( '../assets/GLTFModels/' );

loader.load(
	// resource URL
	'MilcapSoldier.glb',
	// called when the resource is loaded
	
	function ( gltf ) {

		
		milcapSoldier = gltf.scene;


		//gltf.animations; // Array<THREE.AnimationClip>
		//gltf.scene; // THREE.Scene
		//gltf.scenes; // Array<THREE.Scene>
		//gltf.cameras; // Array<THREE.Camera>
		//gltf.asset; // Object
		scene.add( milcapSoldier );
	},
	// called while loading is progressing
	function ( xhr ) {

		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

	},
	// called when loading has errors
	function ( error ) {

		console.log( 'An error happened' );

	}
);
