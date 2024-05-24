export async function fetchImages(query) {
    const apiKey = '44002724-78e4880ab6dd2cf163db4493f';
    const baseUrl = 'https://pixabay.com/api/';
    const url = `${baseUrl}?key=${apiKey}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`;
    
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Failed to fetch images');
    }

    const data = await response.json();
    return data.hits;
}