import {State} from "../libraries/yuka-master/src/yuka.js";

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