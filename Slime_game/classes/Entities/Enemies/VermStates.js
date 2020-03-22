import { State } from "../../../libraries/yuka-master/src/yuka.js";

const PATROL = 'PATROL';
const FLEE = 'FLEE';
const HIDE = 'HIDE';

class PatrolState extends State {
    enter(enemy){
        
    }

    execute(enemy){
        if(enemy.seesPlayer()){
            enemy.stateMachine.changeTo(FLEE);
        }
        else{
            console.log(enemy.nestLocation);
            enemy.moveEPath(1);
        }
    }

    exit(enemy){

    }
}

class FleeState extends State {
    enter(enemy){
        //alert animation
        console.log('EEK!');
    }

    execute(enemy){
        if(enemy.position[0] == enemy.nestLocation[0] && enemy.position[2] == enemy.nestLocation[2]){
            console.log("REACHED NEST");
            enemy.stateMachine.changeTo(HIDE);
        }
        else{
            enemy.fleeToNest(1);
        }
    }
    
    exit(enemy){
        
    }

}

class HideState extends State {
    enter(enemy){
        //enemy and its model disappears
        console.log('HIDING');
    }

    execute(enemy){
        if(enemy.hideCount > 0){
            enemy.hideCount--;
            console.log('VERM hiding for ', enemy.hideCount, " more turns!");
        }
        else{
            //enemy and model reappears
            enemy.hideCount = 3;
            enemy.stateMachine.changeTo(PATROL);
        }
    }

    exit(enemy){

    }
}

export {PatrolState, FleeState, HideState};