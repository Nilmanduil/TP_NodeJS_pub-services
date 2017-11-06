var expect = require('chai').expect;
var services = require("../services/pubs.services");

describe("Pubs-services", function () {
    describe("getPubs()", function () {
        it('should return a list of pubs', function () {
            expect(services.getPubs()).to.be.an("array");
        });
        it('should not be empty', function () {
            expect(services.getPubs()).to.be.not.empty;
        });
        it('should have at least one name', function () {
            expect(services.getPubs()[0]).to.be.not.empty;
        });
    });
    describe("getOpenPubs(day)", function () {
        it('should return a list of pubs', function () {
            expect(services.getOpenPubs("Sunday")).to.be.an("array");
        });
        it('should not be empty when day is Thursday', function () {
            expect(services.getOpenPubs("Thursday")).to.be.not.empty;
        });
        it('should be empty when day is Sunday', function () {
            expect(services.getOpenPubs("Sunday")).to.be.empty;
        });
    })
})