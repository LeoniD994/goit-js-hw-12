import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
const lightbox = new SimpleLightbox('.gallery a', {});

export function clearGallery() {
  document.querySelector('.gallery').innerHTML = '';
}

export function renderImages(images) {
  const gallery = document.querySelector('.gallery');
  const markup = images
    .map(
      image => `
      <div class="gallery-item">
      <a href="${image.largeImageURL}" class="gallery__link">
        <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
        </a>         
          <ul>
            <li><p>Likes: ${image.likes}</p></li>
            <li><p>Views: ${image.views}</p></li>
            <li><p>Comments: ${image.comments}</p></li>
            <li><p>Downloads: ${image.downloads}</p></li>
          </ul>
      </div>
  `
    )
    .join('');
  gallery.insertAdjacentHTML('beforeend', markup);

  lightbox.refresh();
}




