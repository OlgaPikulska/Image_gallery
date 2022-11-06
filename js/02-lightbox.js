import { galleryItems } from "./gallery-items.js";

// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    (item) =>
      `<a class="gallery__item" href=${item.original}><img class="gallery__image" src=${item.preview} alt=${item.description}/></a>`
  )
  .join("");
gallery.innerHTML = markup;

gallery.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  let lightbox = new SimpleLightbox(".gallery a", {
    captions: true,
    captionsData: "alt",
    captionDelay: 250,
    enableKeyboard: true,
  });
});
