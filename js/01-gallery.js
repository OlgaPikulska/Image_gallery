import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    (item) =>
      `<div class="gallery__item"><a class="gallery__link" href=${item.original}><img class="gallery__image" src=${item.preview} data-source=${item.original} alt=${item.description}/></a></div>`
  )
  .join("");
gallery.innerHTML = markup;

let instance;

gallery.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const modal = document.createElement("div");
  const newPic = document.createElement("img");
  newPic.src = event.target.getAttribute("data-source");
  modal.append(newPic);

  instance = basicLightbox.create(modal);
  instance.show();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    instance.close();
  }
});
