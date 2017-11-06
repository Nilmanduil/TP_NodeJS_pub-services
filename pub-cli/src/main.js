var services = require("pub-services/index").services;

function getListPubs() {
    console.log(services.getPubs());
}

function getListOpenPubs(day) {
    console.log(services.getOpenPubs(day));
}

module.exports = {
    getPubs: services.getPubs,
    getOpenPubs: services.getOpenPubs,
    getListPubs: getListPubs,
    getListOpenPubs: getListOpenPubs
}