var data = require('../mocks/pubs');

function getPubs() {
    return data.map(function (pub) {
        return pub.name;
    })
}

function getOpenPubs(day) {
    var filtered = data.filter(function (pub) {
        return pub.openDays.includes(day);
    })

    return filtered.map(function (pub) {
        return pub.name;
    });
}

module.exports = {
    getPubs: getPubs,
    getOpenPubs: getOpenPubs
}