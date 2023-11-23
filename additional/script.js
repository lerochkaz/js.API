const YOUR_ACCESS_KEY = 'bFPQaanf1ZvyjDQwj2XOmMkXr6pvRFPdKBVZOeGA-Ig';
const photoContainer = document.getElementById('photo-container');
let page = 1;

async function fetchPhotos() {
    try {
        const response = await fetch(`https://api.unsplash.com/photos?page=${page}&per_page=9&client_id=${YOUR_ACCESS_KEY}`);
        const photos = await response.json();
        return photos;
    } catch (error) {
        console.error('Ошибка при загрузке фотографий:', error);
        return [];
    }
}
    
console.log(fetchPhotos())

async function loadMorePhotos() {
    const responseObj = await fetchPhotos();
    responseObj.forEach((photo) => {
        const imgEl = document.createElement("img");
        imgEl.src = photo.urls.small;
        photoContainer.appendChild(imgEl);
    });
}
    
    
window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        loadMorePhotos();
    }
});

loadMorePhotos();