//Players inherit from Entity
class Player extends Entity {
    constructor(position, model, texture, id, startingMass){
        //Set up entity object part
        super(position, model, texture, id);

        //Set starting mass and size values
        this.mass = startingMass;
        //Set abilities to an empty set for starters
        this.abilities = {};
        //Set default movement range to 1
        this.movementRange = 1;
    }

    //Function absorbs enemy, increases mass
    absorb(enemy){
        this.mass += enemy.mass;
    };

    //Function moves player
    movePlayer(direction){
        switch(direction){
            case "forward":
                this.position[2] += 1
                break;
            case "backward":
                this.position[2] -= 1;
                break;
            case "left":
                this.position[0] += 1;
                break;
            case "right":
                this.position[0] -= 1;
                break;
        }   
        player.mesh.position.set(player.position[0], player.position[1], player.position[2]);
    };

    //Function follows cursor
    followCursor(cursor){
        pos = cursor.position;
        player.mesh.position.set(pos[0], pos[1], pos[2]);
    };
}
