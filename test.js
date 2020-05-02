const place = require("./src/location/location");
const weather = require("./src/weather/weather");
const expect = require("chai").expect;

describe("invisible technologies assessment test cases", () => {
  describe("Coordinate test", () => {
    context("get longitude and latitude for a given location", () => {
      it("should return an object with key: address", async () => {
        expect(await place.getPlaceLatLng("10005"))
          .to.be.an("object")
          .and.haveOwnProperty("address");
      });
      it("should return an object with key: lat", async () => {
        expect(await place.getPlaceLatLng("Tokyo"))
          .to.be.an("object")
          .and.haveOwnProperty("lat");
      });
      it("should return an object with key: long", async () => {
        expect(await place.getPlaceLatLng("São Paulo"))
          .to.be.an("object")
          .and.haveOwnProperty("lng");
      });
    });
  });
  describe("Coordinate test", () => {
    context("get weather for a given set of coordinate", () => {
      it("should return an a number ", async () => {
        expect(await weather.getWeather(40.7064363, -74.0094562)).to.be.an(
          "number"
        );
      });
    });
  });
});
