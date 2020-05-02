const axios = require("axios");

const getPlaceLatLng = async (dir) => {
  const encodedUlr = encodeURI(dir);

  const instance = axios.create({
    baseURL: `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${encodedUlr}&inputtype=textquery&fields=name,geometry&key=AIzaSyBJWJWPcWWOMxvyWw0u1FsQrSjUIMahRpc`,
  });

  const response = await instance.get();

  if (response.data.candidates.length === 0) {
    throw new Error(`There are not results for: ${dir}`);
  }

  const data = response.data.candidates[0];
  const address = data.name;
  const lat = data.geometry.location.lat;
  const lng = data.geometry.location.lng;

  return {
    address,
    lat,
    lng,
  };
};

module.exports = {
  getPlaceLatLng,
};
