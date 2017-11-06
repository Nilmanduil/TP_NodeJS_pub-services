var data = require('../mocks/pubs');
var moment = require('moment');

function getPubs() {
    return data.map(function (pub) {
        return pub.name;
    })
}

function getOpenPubs(day) {
    if(!day) {
        day = moment().format("dddd");
    }

    return data
        .filter(function (pub) {
            return pub.openDays.includes(day);
        })
        .map(function (pub) {
            return pub.name;
        });
}

module.exports = {
    getPubs: getPubs,
    getOpenPubs: getOpenPubs
}