import { fetchImages } from './js/pixabay-api.js';
import { clearGallery, renderImages } from './js/render-function.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('#search-form');
const input = form.querySelector('input[name="searchQuery"]');
const loadMoreBtn = document.querySelector('.load-more');
const loader = document.querySelector('.loader');

let currentPage = 1;
let currentQuery = '';

form.addEventListener('submit', onSearch);
loadMoreBtn.addEventListener('click', onLoadMore);

async function onSearch(event) {
  event.preventDefault();

  currentQuery = input.value.trim();
  if (!currentQuery) {
    iziToast.error({ title: 'Error', message: 'Search query cannot be empty!' });
    return;
  }

  clearGallery();
  currentPage = 1;
  loadMoreBtn.classList.add('hidden');
  loader.classList.remove('hidden');

  try {
    const data = await fetchImages(currentQuery, currentPage);

    if (data.hits.length === 0) {
      iziToast.warning({ title: 'No Results', message: 'No images found for your search query. Please try again!' });
    } else {
      renderImages(data.hits);
      if (data.totalHits > currentPage * 15) {
        loadMoreBtn.classList.remove('hidden');
      }
    }
  } catch (error) {
    iziToast.error({ title: 'Error', message: 'Failed to fetch images. Please try again later.' });
  } finally {
    loader.classList.add('hidden');
  }
}

async function onLoadMore() {
  currentPage += 1;
  loader.classList.remove('hidden');

  try {
    const data = await fetchImages(currentQuery, currentPage);
    renderImages(data.hits);

    if (data.totalHits <= currentPage * 15) {
      loadMoreBtn.classList.add('hidden');
      iziToast.info({ title: 'End of Results', message: "We're sorry, but you've reached the end of search results." });
    }
  } catch (error) {
    iziToast.error({ title: 'Error', message: 'Failed to fetch images. Please try again later.' });
  } finally {
    loader.classList.add('hidden');
  }
}

