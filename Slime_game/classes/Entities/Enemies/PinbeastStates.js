import { State } from "../../../libraries/yuka-master/src/yuka.js";

const SPAWN = 'SPAWN';
const ACTION = 'ACTION';
const AOE = 'AOE';

class SpawnState extends State {
    enter(enemy){
       //alerted animation
    }

    execute(enemy){
        //for loop i =0; i<4{
            //spawn new pinpod (passing along childID) in random location within a range (to avoid wall spawning)
            //increment childID++
       // }
    }

    exit(enemy){
        
    }
}

class ActionState extends State {
    enter(enemy){
       //takes a movement of some kind
    }

    execute(enemy){
        //check if pinpod children count drops to zero
        //SWITCH Spawn State
       
        //displays attack tiles in red
        //SWITCH AOE State

    }

    exit(enemy){
        
    }
}

class AOEState extends State {
    enter(enemy){
       
    }

    execute(enemy){
        //aoe attack which affects whole room
        //SWITCH Action State
    }

    exit(enemy){
        
    }

}


export {SpawnState, ActionState, AOEState}