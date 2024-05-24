import { fetchImages } from './js/pixabay-api.js';
import { clearGallery, renderImages } from './js/render-function.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.getElementById('search-form');
const loader = document.getElementById('loader');
let lightbox;

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const query = event.currentTarget.elements.query.value.trim();
    if (query === '') {
        iziToast.error({
            message: 'Please enter a search query',
            color:'red'
        });
        return;
    }

    try {
        clearGallery();
        showLoader();
        const images = await fetchImages(query);
        if (images.length === 0) {
            iziToast.info({
                message: 'Sorry, there are no images matching your search query. Please try again!',
                color:'red'
            });
            return;
        }
        renderImages(images);
        if (lightbox) {
            lightbox.destroy();
        }
        lightbox = new SimpleLightbox('.gallery a', { /* options */ });
        lightbox.refresh();
    } catch (error) {
        iziToast.error({
            title: 'Error',
            message: error.message
        });
    } finally {
        hideLoader();
    }
});

function showLoader() {
    loader.style.display = 'block';
}

function hideLoader() {
    loader.style.display = 'none';
}