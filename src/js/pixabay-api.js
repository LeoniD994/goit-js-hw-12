import axios from "axios";

const apiKey = '44002724-78e4880ab6dd2cf163db4493f';
const baseUrl = 'https://pixabay.com/api/';

export async function fetchImages(query, page = 1, perPage = 15) {
    const params = {
    key: apiKey,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: page,
    per_page: perPage,
    };

    try {
    const response = await axios.get(baseUrl, { params });
    return response.data;
    } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
    }
}






