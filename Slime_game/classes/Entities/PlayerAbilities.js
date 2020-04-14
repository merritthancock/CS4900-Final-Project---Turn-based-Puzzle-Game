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
    }
    execute(player){
        //extend spikes and attack nearby enemies
        if(player.abilityUses > 0){
            player.spikeAttack(0.5);
            console.log('USING PLAYER SPIKE');
            player.abilityUses--;
            console.log("Spike Uses Remaining: ", player.abilityUses);
        }
    }
    exit(player){

    }
}

export {NormState, SpikeState}