//import { GLTFLoader } from './libraries/GLTFLoader.js';

export var loader = new GLTFLoader();

export function loadLevel2() {
    loader.load( './models/Level2.glb', function ( gltf ) {

        scene.add( gltf.scene );

        }, undefined, function ( error ) {

        console.error( error );

    } );
}