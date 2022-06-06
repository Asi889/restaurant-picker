export const getLatLon = async (cityName: string):Promise<{lat:string, lon:string}> => {
    try {
        const response = await fetch(`https://nominatim.openstreetmap.org/search/${cityName}?format=json&addressdetails=1&limit=1`);
        const data = await response.json();
        return { lat: data[0].lat, lon: data[0].lon };
    } catch (error) {
        throw new Error('No Lat Lon found');
    }
}

export const slugify = (text: string) => {
    return text.toString().toLowerCase()
        .replace(/\s+/g, '-')           // Replace spaces with -
        .replaceAll('-', '')           // Replace - with nothing
        .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
        .replace(/\-\-+/g, '-')         // Replace multiple - with single -
        .replace(/^-+/, '')             // Trim - from start of text
        .replace(/-+$/, '');            // Trim - from end of text
}