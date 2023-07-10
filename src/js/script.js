// 'use strict';

// const photosArr = [];
let photos = document.querySelectorAll('.img');
const galleryContainer = document.querySelector('.gallery-container');
const galleryWrapper = document.querySelector('.gallery-wrapper');
let galleryPhoto = document.querySelector('.gallery__photo');

const prevPhotoBtn = document.querySelector('.prev__img--btn');
const nextPhotoBtn = document.querySelector('.next__img--btn');
const closePhotoBtn = document.querySelector('.close__img--btn');

let currentPhoto;

photos.forEach((photo, index) => {
	const showPhotoInPopup = (e) => {
		galleryContainer.classList.toggle('hide-gallery');
		galleryPhoto.src = e.target.src;
		currentPhoto = index;
		photos.forEach((element) => {
			element.setAttribute('tabindex', -1);
		});
		// console.log(galleryWrapper);
	};

	photo.addEventListener('click', showPhotoInPopup);

	// photo.addEventListener('keydown', (e) => {
	// 	if (e.code === 'Enter' || e.keyCode === 13 || e.key === 'Enter') {
	// 		showPhotoInPopup(e);
	// 	}
	// });
});

const showNextPhoto = () => {
	if (currentPhoto === photos.length - 1) {
		currentPhoto = 0;
	} else {
		currentPhoto++;
	}
	galleryPhoto.src = photos[currentPhoto].src;
};

const showPreviousPhoto = () => {
	if (currentPhoto === 0) {
		currentPhoto = photos.length - 1;
	} else {
		currentPhoto--;
	}
	galleryPhoto.src = photos[currentPhoto].src;
};

function closeGallery() {
	galleryContainer.classList.toggle('hide-gallery');
	console.log('dsg');
}

document.addEventListener('keydown', (e) => {
	if (!galleryContainer.classList.contains('popup-hidden')) {
		if (e.code === 'ArrowRight' || e.keyCode === 39 || e.key === 'ArrowRight') {
			showNextPhoto();
		}
		if (e.code === 'ArrowLeft' || e.keyCode === 37 || e.key === 'ArrowLeft') {
			showPreviousPhoto();
		}
		if (e.code === 'Escape' || e.keyCode === 27 || e.key === 'Escape') {
			closeCurrentPhoto();
		}
	}
});

closePhotoBtn.addEventListener('click', closeGallery);
nextPhotoBtn.addEventListener('click', showNextPhoto)
prevPhotoBtn.addEventListener('click', showPreviousPhoto)
