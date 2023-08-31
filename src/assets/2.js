// Function to calculate distance between two points using Haversine formula
function calculateDistance(lat1, lon1, lat2, lon2) {
    const earthRadius = 6371; // Radius of the Earth in kilometers

    // Convert degrees to radians
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);

    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const distance = earthRadius * c; // Distance in kilometers
    return distance;
}

// 28.6827056 , 77.1345853 my home 
// 28.5959662 , 77.30762 aayush home
// Example coordinates
const lat1 = 28.6827056 ; // Latitude of point 1 (New York City)
const lon1 = 77.1345853; // Longitude of point 1
const lat2 = 28.5959662; // Latitude of point 2 (Los Angeles)
const lon2 = 77.30762; // Longitude of point 2

const distance = calculateDistance(lat1, lon1, lat2, lon2);
console.log(`Distance between the two points: ${distance.toFixed(2)} km`);
