import { State } from "../../libraries/yuka-master/src/yuka.js";

const NORMAL = 'NORMAL';
const SPIKE = 'SPIKE';

class NormState extends State {
    enter(player){
        //change model back to normal
    }
    execute(player){
        //do nothing
    }
    exit(player){
        //do nothing
    }
}

class SpikeState extends State{
    enter(player){
        //change model to spike form
        player.model.visibility = false;
        player.spikeModel.visibility = true;
    }
    execute(player){
        //extend spikes and attack nearby enemies
        if(player.abilityUses > 0){
            //Display spikes
            //alert animation
            let selectAnimation = THREE.AnimationClip.findByName( player.spikeAnimations, 'pinpod' );
            let selectAction = player.spikeMixer.clipAction( selectAnimation );
            selectAction.setLoop(THREE.LoopOnce);
            player.spikeMixer.stopAllAction();
            selectAction.play();
            player.spikeMixer.addEventListener( 'finished', function callBack( e ) { 
                let idle = THREE.AnimationClip.findByName( player.spikeAnimations, 'idle' );
                let idleAction = player.spikeMixer.clipAction( idle );
                player.spikeMixer.stopAllAction();
                idleAction.play();
                player.spikeMixer.removeEventListener(callBack);
            } );

            //Attack
            player.spikeAttack(1);
            console.log('USING PLAYER SPIKE');
            player.abilityUses--;
            console.log("Spike Uses Remaining: ", player.abilityUses);
            if(player.abilityUses <= 0) {
                player.ability = 'NONE';
                //change model back to normal
                player.model.visible = true;
                player.spikeModel.visible = false;
                player.stateMachine.changeTo("NORMAL");
            }
        }
    }
    exit(player){

    }
}

export {NormState, SpikeState}