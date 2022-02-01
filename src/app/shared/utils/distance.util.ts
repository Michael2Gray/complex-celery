import { Coords } from '../models';

/**
 * Distance calculation based on the Haversine formula
 * Credit: https://stackoverflow.com/a/21623206/12130423
 * @param coordsA - The coords of the users location (geoCoords or defaultCoords)
 * @param coordsB - The coords of the city
 *
 * @returns Distance in km (number) to two decimal places
 */
export const getDistanceBetweenCoords = (
  coordsA: Coords,
  coordsB: Coords
): number => {
  const R = 6371.071; // Radius of the Earth in miles
  const coordsALatRad = coordsA.latitude * (Math.PI / 180); // Convert degrees to radians
  const coordsBLatRad = coordsB.latitude * (Math.PI / 180); // Convert degrees to radians
  const latDiff = coordsBLatRad - coordsALatRad; // Radian difference (latitudes)
  const lonDiff = (coordsB.longitude - coordsA.longitude) * (Math.PI / 180); // Radian difference (longitudes)

  const distance =
    2 *
    R *
    Math.asin(
      Math.sqrt(
        Math.sin(latDiff / 2) * Math.sin(latDiff / 2) +
          Math.cos(coordsALatRad) *
            Math.cos(coordsBLatRad) *
            Math.sin(lonDiff / 2) *
            Math.sin(lonDiff / 2)
      )
    );

  return Number(parseFloat(String(distance)).toFixed(2));
};
