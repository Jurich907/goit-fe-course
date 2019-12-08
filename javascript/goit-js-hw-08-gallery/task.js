"use strict";

import images from "./gallery-items.js";

const gallery = document.querySelector(".js-gallery");

const createGalleryThing = ({ preview, original, description }) => {
  const galleryThing = `
  <li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
    <span class="gallery__icon">
      <i class="material-icons">zoom_out_map</i>
    </span>
  </a>
</li>`;

  return galleryThing;
};

const picturesGallery = document.querySelectorAll(".gallery img");
picturesGallery.forEach(image => {
  pictureLoad(image);
});

const createGallery = imagesList => {
  return imagesList.map(image => createGalleryThing(image)).join("");
};

const lightbox = document.querySelector(".js-lightbox");
const lightboxImage = lightbox.querySelector(".lightbox__image");

const markup = createGallery(images);

gallery.insertAdjacentHTML("afterbegin", markup);

const handleOpenModal = event => {
  event.preventDefault();
  if (event.target === event.currentTarget) {
    return;
  }
  lightbox.classList.add("is-open");
  const sourceData = event.target.getAttribute("data-source");
  const deccription = event.target.getAttribute("alt");
  lightboxImage.setAttribute("src", sourceData);
  lightboxImage.setAttribute("alt", deccription);
  window.addEventListener("keydown", handleKeyPress);
};

const handleCloseModal = () => {
  lightbox.classList.remove("is-open");
  window.removeEventListener("keydown", handleKeyPress);
  lightboxImage.setAttribute("src", " ");
  lightboxImage.setAttribute("alt", " ");
};

const handleClickOverlay = ({ target, currentTarget }) => {
  if (target !== currentTarget) {
    return;
  }
  handleCloseModal();
};
const handleKeyPress = ({ code }) => {
  if (code !== "Escape") {
    return;
  }
  handleCloseModal();
};

const closeModalbutton = lightbox.querySelector(
  '.lightbox__button[data-action="close-lightbox"]'
);

const lightboxBackdrop = lightbox.querySelector(".lightbox__content");

gallery.addEventListener("click", handleOpenModal);
closeModalbutton.addEventListener("click", handleCloseModal);
lightboxBackdrop.addEventListener("click", handleClickOverlay);

const pictureLoad = target => {
  const element = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.setAttribute("src", entry.target.src);
        observer.disconnect();
      }
    });
  });
  element.observe(target);
};
