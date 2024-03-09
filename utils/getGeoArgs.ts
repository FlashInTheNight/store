export const getGeoArgs = () => {
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  function success(pos: GeolocationPosition) {
    return pos.coords;

  }
  function error(err: GeolocationPositionError) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  const result = navigator.geolocation.getCurrentPosition(success, error, options);
  return result;
}
