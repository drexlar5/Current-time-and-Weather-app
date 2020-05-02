const place = require('./src/location/location');
const expect = require("chai").expect;

describe("invisible technologies assessment test cases", () => {
  describe("Coordinate test", () => {
    context("get longitude and latitude for a given location", () => {
      it("should return an object with key: address", async() => {
        expect(await place.getPlaceLatLng('10005')).to.be.an("object").and.haveOwnProperty("address");
      });
      it("should return an object with key: lat", async() => {
        expect(await place.getPlaceLatLng('New York')).to.be.an("object").and.haveOwnProperty("lat");
      });
      it("should return an object with key: long", async() => {
        expect(await place.getPlaceLatLng('Japan')).to.be.an("object").and.haveOwnProperty("lng");
      });
    });
  });
});