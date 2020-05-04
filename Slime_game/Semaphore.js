var lockOwner = null;
var unlocked = true;
var masterLock = false;

function getLock(requester) {
    if(unlocked && !masterLock){
        unlocked = false;
        lockOwner = requester;
    }
}

function releaseLock(requester) {
    //Check if the lockowner is the one asking to release the lock
    if(requester == lockOwner){
        unlocked = true;
        lockOwner = null;
    }
}

function getMasterLock() {
    if(!masterLock) {
        masterLock = true;
    }
}

function releaseMasterLock() {
    masterLock = false;
}

export {unlocked, getLock, releaseLock, masterLock, getMasterLock,
    releaseMasterLock};