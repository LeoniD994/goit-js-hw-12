import axios from "axios";

const apiKey = '44002724-78e4880ab6dd2cf163db4493f';
const baseUrl = 'https://pixabay.com/api/';


export async function fetchImages(query, page =1, perPage = 15) {
    try{
        const response = await axios.get(baseUrl, {
            params:{
                key: apiKey,
                q:query,
                image_tupe:'photo',
                orientation:'horizontal',
                safesearch:true,
                page:page,
                perPage:perPage,
            },
        });
        return response.data;
    } catch(error){
        console.error('Error fetching images:', error);
        throw error;
    }
}
