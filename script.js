class building {
    constructor (location, floors, type) {
        this.location = location;
        this.floors = floors;
        this.type = type;
    }
    addAmmenities(ammenity) {
        this.ammenity = ammenity;
    }
    buildingInfo() {
        console.log(`This ${this.type} building is located in ${this.location}, has ${this.floors} floors, and has ${this.ammenity}.`);
    }
}

let building1 = new building('New York', 20, 'residential');
building1.addAmmenities('a pool');
building1.buildingInfo();
let building2 = new building('Los Angeles', 40, 'office');
building2.addAmmenities('EV charging stations');
building2.buildingInfo();