var manager = new THREE.LoadingManager();

var loader = new THREE.GLTFLoader(manager);
loader.load(
	// resource URL
	'../assets/GLTFModels/MilcapSoldier.glb',
	// called when the resource is loaded
	function ( gltf ) {

		scene.add( gltf.scene );

		//gltf.animations; // Array<THREE.AnimationClip>
		//gltf.scene; // THREE.Scene
		//gltf.scenes; // Array<THREE.Scene>
		//gltf.cameras; // Array<THREE.Camera>
		//gltf.asset; // Object

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
loader.load(
	// resource URL
	'../assets/GLTFModels/SlimeMain.glb',
	// called when the resource is loaded
	function ( gltf ) {

		scene.add( gltf.scene );

		//gltf.animations; // Array<THREE.AnimationClip>
		//gltf.scene; // THREE.Scene
		//gltf.scenes; // Array<THREE.Scene>
		//gltf.cameras; // Array<THREE.Camera>
		//gltf.asset; // Object

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