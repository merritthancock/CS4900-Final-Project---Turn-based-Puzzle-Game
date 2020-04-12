import { State } from "../../../libraries/yuka-master/src/yuka.js";

const SPAWN = 'SPAWN';
const ACTION = 'ACTION';
const AOE = 'AOE';
const CHARGE = 'CHARGE';

class SpawnState extends State { //PINBEAST IS ONLY VULNERABLE DURING THIS STATE
    enter(enemy){
       //alerted animation
    }

    execute(enemy){
        //for loop i =0; i<4{
            //spawn new pinpod (passing along childID) in random location within a range (to avoid wall spawning) USING FLOOD FILL
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
        //SWITCH Charge State
       
        //displays attack tiles in red
        //SWITCH AOE State

        //OR

        //SWITCH Charge State

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

class ChargeState extends State {//charges in direction of player
    enter(enemy){
       
    }

    execute(enemy){
        
    }

    exit(enemy){
        
    }
}


export {SpawnState, ActionState, AOEState, ChargeState};