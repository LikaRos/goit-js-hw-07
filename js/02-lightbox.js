import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const gallery = document.querySelector(".gallery");

imageRenderList();

function imageRenderList() {
  const markup = galleryItems
    .map(
      ({ preview, original, description }) =>
        `<a href="${original}">
		  <img
          class="gallery__image"
          src="${preview}"
          
          alt="${description}"
			 title="${description}"
			 >
			 			 </a>`
    )
    .join(" ");
  gallery.insertAdjacentHTML("beforeend", markup);
}

const ligthbox = new SimpleLightbox(".gallery a", {
  captionData: "alt",
  captionDelay: 250,
  captionPosition: "bottom",
});
