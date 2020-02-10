function Entity(position, model, texture, id){
    //Set position of entity
    this.entityPosition = position;
    //Set geometry of entity
    this.entityModel = model;
    //Set material
    this.entityTexture = texture;
    //TODO: Enforce uniqueness of entity ID
    this.entityId = id;
    //Build mesh from provided geometry and material, can add to scene in rest of code
    this.mesh = THREE.Mesh(model, texture);
}

//Players inherit from Entity
function Player(position, model, texture, id, startingMass){
    //Set up entity object part
    Entity.call(this, position, model, texture, id);

    //Set starting mass and size values
    this.mass = startingMass;
    //Set abilities to an empty set for starters
    this.abilities = {};
    //Set default movement range to 1
    this.movementRange = 1;
    //Function moves player to a given position. Only call after validation.
    //TODO: Play animations to move along path rather than jumping to set location.
    this.movePlayer = function movePlayer(x, y, z){
        this.position.x = x;
        this.position.y = y;
        this.position.z = z;
    };

    //Function absobs enemy, increases mass
    this.absorb = function absorb(enemy){
        this.mass += enemy.mass;
    }
}
//Link Player to Entity for "inheritance"
Player.prototype = new Entity();
Player.prototype.constructor = Player;