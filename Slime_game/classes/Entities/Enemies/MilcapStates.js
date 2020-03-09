import {State} from "../../../libraries/yuka-master/src/yuka.js";

//these constants can be used for animations and others
const PATROL = 'PATROL';
const PURSUE = 'PURSUE';

class PatrolState extends State{

    enter(enemy) {
        //can be used to play an animation of some sort
    }

    execute(enemy){
        enemy.moveEPath();
    }

    exit(enemy){
        //enemy.moveEPath();
    }

}

class PursueState extends State{

    enter(enemy) {

    }

    execute(enemy){

    }

}

export {PatrolState, PursueState};