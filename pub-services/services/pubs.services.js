const Pub = require('../classes/Pub');

const data = require('../mocks/pubs');
const moment = require('moment');
const pubs = [];

function getPubs() {
    data.forEach(function (pub) {
        pubs.push(new Pub(pub.name, pub.owner, pub.openDays, pub.openHours, pub.beers));
    })
    return pubs;
}

function getOpenPubs(day, hour) {
    if(!day) {
        day = moment().format("dddd");
    }
    if (!hour) {
        hour = moment.format("H");
    }

    return getPubs()
        .filter(function (pub) {
            return pub.isOpen(day, hour);
        });
}

module.exports = {
    getPubs,
    getOpenPubs
}