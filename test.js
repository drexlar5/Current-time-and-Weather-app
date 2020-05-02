const place = require("./src/location/location");
const weather = require("./src/weather/weather");
const timezone = require("./src/time/time");
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
  describe("Weather test", () => {
    context("get weather for a given set of coordinate", () => {
      it("should return an a number ", async () => {
        expect(await weather.getWeather(40.7064363, -74.0094562)).to.be.a(
          "number"
        );
      });
    });
  });
  describe("Current time test", () => {
    context("get current time for a given set of coordinate", () => {
      it("should return a string ", async () => {
        expect(await timezone.getTime(40.7064363, -74.0094562)).to.be.a(
          "string"
        );
      });
      it("should return match format hh:mm:ss", async () => {
        expect(await timezone.getTime(40.7064363, -74.0094562)).to.match(
          new RegExp("^([0-9]{2}):([0-9]{2}):([0-9]{2})$")
        );
      });
    });
  });
  
});
