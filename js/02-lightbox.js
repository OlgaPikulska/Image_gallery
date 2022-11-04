import { galleryItems } from "./gallery-items.js";
//import SimpleLightbox from "simplelightbox";
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
  //   const modal = document.createElement("div");
  //   const newPic = document.createElement("img");
  //   newPic.src = event.target.getAttribute("data-source");
  //   modal.append(newPic);

  let lightbox = new SimpleLightbox(".gallery a");
  //console.log(lightbox.close);
});
