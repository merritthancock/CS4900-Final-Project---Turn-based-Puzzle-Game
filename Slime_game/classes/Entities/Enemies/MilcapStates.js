import { State } from "../../../libraries/yuka-master/src/yuka.js";

//these constants can be used for animations and others
const PATROL = 'PATROL';
const PURSUE = 'PURSUE';
const ATTACK = 'ATTACK';

class PatrolState extends State{

    enter(enemy) {
        console.log("Now patrolling!");
        //can be used to play an animation of some sort
    }

    execute(enemy){
        if(enemy.seesPlayer()) {
            enemy.stateMachine.changeTo(PURSUE);
        }
        //if made it to node, advance the node
        let pos = enemy.path.current();
        if(enemy.position[0] == pos[0] && enemy.position[2] == pos[2]){
            enemy.path.advance();
        }
        enemy.moveEPath(1);
    }

    exit(enemy){
        //some sort of alert to the player?
       
    }

}

class PursueState extends State{

    enter(enemy) {
        //alert animation
        let selectAnimation = THREE.AnimationClip.findByName( enemy.animations, 'alert' );
        let selectAction = enemy.mixer.clipAction( selectAnimation );
        selectAction.setLoop(THREE.LoopOnce);
        enemy.mixer.stopAllAction();
        selectAction.play();
        enemy.mixer.addEventListener( 'finished', function callBack( e ) { 
            let idle = THREE.AnimationClip.findByName( enemy.animations, 'idle' );
            let idleAction = enemy.mixer.clipAction( idle );
            enemy.mixer.stopAllAction();
            idleAction.play();
            enemy.mixer.removeEventListener(callBack)
        } );
        console.log("Now chasing player!");
        enemy.moveToPlayer(1);

    }

    execute(enemy){
        if(!enemy.seesPlayer()) {
            enemy.stateMachine.changeTo(PATROL);
        }

        enemy.moveToPlayer(1);
        
        if(enemy.withinARange()) {
            enemy.moveToPlayer();
            enemy.stateMachine.changeTo(ATTACK);
        }
        
    }

    exit(enemy){

    }

}

class AttackState extends State{

    enter(enemy) {
        //attack animation
        let selectAnimation = THREE.AnimationClip.findByName( enemy.animations, 'attack' );
        let selectAction = enemy.mixer.clipAction( selectAnimation );
        selectAction.setLoop(THREE.LoopOnce);
        enemy.mixer.stopAllAction();
        selectAction.play();
        enemy.mixer.addEventListener( 'finished', function callBack( e ) { 
            let idle = THREE.AnimationClip.findByName( enemy.animations, 'idle' );
            let idleAction = enemy.mixer.clipAction( idle );
            enemy.mixer.stopAllAction();
            idleAction.play();
            enemy.mixer.removeEventListener(callBack)
        } );
        console.log("FIRST ATTACK");
        enemy.attack(enemy.attackPower);
    }
    
    execute(enemy) {
        console.log("Within AR: ", enemy.withinARange());
        if(enemy.withinARange() == false){
            enemy.stateMachine.changeTo(PURSUE);
        }
        else{
            //attack animation
            enemy.attack(enemy.attackPower);
        }
    }

    exit(enemy) {
        
    }
}

export {PatrolState, PursueState, AttackState}; 