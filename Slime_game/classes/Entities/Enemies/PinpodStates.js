import { State } from "../../../libraries/yuka-master/src/yuka.js";

const EXTEND = 'EXTEND';
const RETRACT = 'RETRACT';
const HALT = 'HALT';

class ExtendState extends State {

    enter(enemy){
        //change model to spike version
        if(enemy.animations != null) {
            let extend = THREE.AnimationClip.findByName( enemy.animations, 'active' );
            let extendAction = enemy.mixer.clipAction( extend );
            enemy.mixer.stopAllAction();
            extendAction.play();
            enemy.absorbable = false;
            if(enemy.seesPlayer()){
                enemy.attack(enemy.attackPower);
            }
        }
    }

    execute(enemy){
        //gives three turns in spike form
        enemy.turnCount++;
        console.log(enemy.turnCount);
        if (enemy.turnCount >= 6){
            enemy.turnCount = 0;
            console.log('SWITCHING TO NOSPIKE');
            enemy.stateMachine.changeTo(RETRACT);
        }
        else if(enemy.seesPlayer()){
            //attack animation
            enemy.attack(enemy.attackPower);
        }
    }

    exit(enemy){
        if(enemy.seesPlayer()){
            enemy.attack(enemy.attackPower);
        }
        enemy.absorbable = true;
    }
}

class RetractState extends State {
    enter(enemy){
        //change model to non-spike version
        if(enemy.animations != null) {
            let retract = THREE.AnimationClip.findByName( enemy.animations, 'idle' );
            let retractAction = enemy.mixer.clipAction( retract );
            enemy.mixer.stopAllAction();
            retractAction.play();
        }
    }

    execute(enemy){
        //Gives three turns of retracted spikes
        enemy.turnCount++;
        console.log(enemy.turnCount);
        if (enemy.turnCount >= 3){
            console.log('SWITCHING TO SPIKE');
            enemy.stateMachine.changeTo(EXTEND);
        }
    }

    exit(enemy){

    }

}

class HaltState extends State {//Only when PinpodSp is absorbed or dead. Does nothing
    enter(enemy){
        //resetting health in the even the player used spike attack on pinpod
        enemy.mass = 1;
    }
    execute(enemy){

    }
    exit(enemy){
        //resetting health again in the event player used spike attack while pinpod was dead
        enemy.mass = 1;
    }
}
export {ExtendState, RetractState, HaltState}