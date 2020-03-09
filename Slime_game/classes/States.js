import {State, StateMachine} from "../libraries/yuka-master/src/yuka.js";

//general states
let patrol = new State();
let flee = new State();
let pursue = new State();
let attack = new State();
let ret = new State(); //return
let wander = new State();

//enemy specific states
let spike = new State();
let noSpike = new State();

let spawning = new State(); //for pinbeetle boss
let aoeAttack = new State();//for large enemies

let illuminate = new State();//potential state for an illuminated enemy

patrol.enter = (owner) => {
    owner.moveEPath();
}
patrol.execute = (owner) => {
    owner.moveEPath();
}

//ENEMY SPECIFIC STATE MACHINES
//MilcapSoldier
let milcapSM = new StateMachine();
milcapSM.add("Patrol", patrol);
milcapSM.add("Pursue", pursue);
milcapSM.add("Attack", attack);
milcapSM.add("Return", ret);
milcapSM.currentState = milcapSM.get("Patrol");

//Verm

//Pinpod

//Mother Pinbeetle (BOSS)

export {milcapSM};
