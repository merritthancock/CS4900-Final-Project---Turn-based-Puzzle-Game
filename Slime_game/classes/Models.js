import {scene} from "./LevelManager.js";

//https://medium.com/@matthewmain/how-to-import-a-3d-blender-object-into-a-three-js-project-as-a-gltf-file-5a67290f65f2 Part 4 is helpful

var manager = new THREE.LoadingManager();

var loader = new THREE.GLTFLoader().setPath( '../../Slime_game/assets/GLTFModels/' );




export {loader};
