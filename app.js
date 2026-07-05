const galleryItems = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];
const list = document.querySelector(".gallery");
const lightboxImg = document.querySelector(".lightbox__image");
const lightbox = document.querySelector(".lightbox");
list.addEventListener("click", (e) => {
  e.preventDefault();
  lightbox.classList.toggle("is-open");
  for (let item of galleryItems) {
    lightboxImg.alt = e.target.alt;
    lightboxImg.alt === item.description
      ? (lightboxImg.src = item.original)
      : false;
  }
});
const close = document.querySelector(".lightbox__button");
close.addEventListener("click", () => {
  lightbox.classList.toggle("is-open");
  lightboxImg.src = "";
});
const overlay = document.querySelector(".lightbox__overlay");
overlay.addEventListener("click", () => {
  lightbox.classList.toggle("is-open");
  lightboxImg.src = "";
});
document.addEventListener("keydown", (e) => {
  if (lightbox.classList.contains("is-open")) {
    if (e.code === "Escape") {
      lightbox.classList.toggle("is-open");
      lightboxImg.src = "";
    }
  }
});
document.addEventListener("keydown", (e) => {
  if (lightbox.classList.contains("is-open")) {
    for (let i = 0; i < galleryItems.length; i++) {
      if (e.code === "ArrowRight") {
        if (lightboxImg.src === galleryItems[i].original) {
          lightboxImg.src = galleryItems[i + 1].original;
        }
      }
      if (e.code === "ArrowLeft") {
        lightboxImg.src === galleryItems[i].original
          ? (lightboxImg.src = galleryItems[i - 1].original)
          : false;
      }
    }
  }
});
