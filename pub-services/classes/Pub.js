const Person = require('./Person');
var Beer = require('./Beer');
const moment = require('moment');

class Pub {
    constructor (name, owner, openDays = [], openHours = {}, beers = []) {
        this.name = name;
        this.owner = owner;
        this.openDays = openDays;
        this.openHours = openHours;
        this.beers = [];
        beers.forEach(beer => this.addBeer(beer));
    }
    addBeer (beer) {
        if (beer instanceof Beer) {
            this.beers.push(beer);
        } else { // beer is a JS object
            this.beers.push(new Beer(beer.type, beer.name));
        }
    }
    get owner () {
        return this._owner;
    }
    set owner (owner) {
        if (owner instanceof Person) {
            this._owner = owner;
        } else { // owner is a JS object
            this._owner = new Person(owner.firstName, owner.lastName, owner.mail);;
        }
    }
    isOpen (day, hour) {
        if (!day) {
            day = moment.format("dddd");
        }
        if (!hour) {
            hour = moment.format("H");
        }

        return (this.openDays.contains(day) && this.isOpenHour(hour));
    }
    isOpenHour (hour) {
        if (!hour) {
            hour = moment.format("H");
        }

        if (this.endHour() < this.startHour()) {
            return ((hour > this.startHour() && hour <= 23) || (hour < this.endHour() && hour >= 0));
        } else {
            return (hour > this.startHour() && hour < this.endHour());
        }
    }
    get startHour () {
        return this.openHours.start;
    }
    get endHour () {
        return this.openHours.end;
    }
}

module.exports = Pub;