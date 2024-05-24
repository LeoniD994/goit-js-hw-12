export function clearGallery() {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';
}

export function renderImages(images) {
    const gallery = document.getElementById('gallery');
    const markup = images.map(image => {
        return `
            <div class="gallery-item">
                <a href="${image.largeImageURL}" class="gallery-link">
                    <img src="${image.webformatURL}" alt="${image.tags}" />
                </a>
                <ul>
                <li><p>Likes: ${image.likes}</p></li>
                <li><p>Views: ${image.views}</p></li>
                <li><p>Comments: ${image.comments}</p></li>
                <li><p>Downloads: ${image.downloads}</p></li>
                </ul>
            </div>
        `;
    }).join('');

    gallery.innerHTML = markup;
}