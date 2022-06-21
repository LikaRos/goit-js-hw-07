import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery__item");

imageRenderList();

gallery.addEventListener("click", openModal);

function imageRenderList() {
  const markup = galleryItems
    .map(
      ({ preview, original, description }) =>
        `<a><img src = '${preview}'  data-source = '${original}' width = 510 alt = '${description}'></a>`
    )
    .join(" ");
  gallery.insertAdjacentHTML("afterbegin", markup);
}

function openModal(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  const bigImg = event.target.dataset.source;

  const instance =
    basicLightbox.create(`<img src="${bigImg}" width="800" height="600">,
	 {
    onShow: (instance) => {
        instance.element().querySelector('a').onclick = instance.close
		  
    }
	 `);

  instance.show();
}
