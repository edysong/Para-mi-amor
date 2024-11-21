const showPhotosButton = document.getElementById('showPhotos');
const photosContainer = document.getElementById('photosContainer');
const backgroundMusic = document.getElementById('backgroundMusic');

showPhotosButton.addEventListener('click', () => {
    photosContainer.classList.remove('hidden');
    backgroundMusic.play();
    showPhotosButton.style.display = 'none';
});
