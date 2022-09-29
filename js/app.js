let data = [
  {
    id: 1,
    imgUrl: "./img/slide1.jpg",
    title: "slide 1",
    url: "https://www.google.com/",
  },
  {
    id: 2,
    imgUrl: "./img/slide2.jpg",
    title: "slide 2",
    url: "https://www.google.com/",
  },
  {
    id: 3,
    imgUrl: "./img/slide3.jpg",
    title: "slide 3",
    url: "https://www.google.com/",
  },
  {
    id: 4,
    imgUrl: "./img/slide4.jpg",
    title: "slide 4",
    url: "https://www.google.com/",
  },
  {
    id: 5,
    imgUrl: "./img/slide5.jpg",
    title: "slide 5",
    url: "https://www.google.com/",
  },
];

const slider = document.getElementById("sliderContent");
const leftArrow = document.getElementById("arrowLeft");
const rightArrow = document.getElementById("arrowRighr");
let avtiveDots = document.getElementsByClassName("fa-circle");
let sliderIndex = 0;

function aTagElement(item) {
  const aTag = document.createElement("a");
  aTag.setAttribute("href", item.url);
  aTag.classList.add("slider-a");
  return aTag;
}
function imgTagElemetn(item) {
  const imgTag = document.createElement("div");
  imgTag.style.backgroundImage = `url('${item.imgUrl}')`;
  imgTag.classList.add("slider-image");
  return imgTag;
}

function h2TagElement(item) {
  const h2Tag = document.createElement("h2");
  h2Tag.textContent = item.title;
  h2Tag.classList.add("title");
  return h2Tag;
}
function createDots() {
  const dotsWrapper = document.createElement("div");
  dotsWrapper.classList.add("dotswrapper");
  data.forEach((element) => {
    const dot = document.createElement("i");
    dot.classList.add("fa-regular", "fa-circle");
    dot.setAttribute("data-id", element.id - 1);
    dot.addEventListener("click", function (event) {
      let id = event.target.getAttribute("data-id");
      sliderIndex = id;
      setSlide();
    });
    dotsWrapper.appendChild(dot);
  });
  return dotsWrapper;
}
function dotsActiv() {
  avtiveDots[sliderIndex].classList.add("active");
}

function setSlide() {
  slider.innerHTML = "";
  const sliderItem = aTagElement(data[sliderIndex]);
  const sliderImg = imgTagElemetn(data[sliderIndex]);
  const sliderTitle = h2TagElement(data[sliderIndex]);
  const dots = createDots();

  sliderItem.appendChild(sliderImg);
  sliderItem.appendChild(sliderTitle);
  slider.appendChild(sliderItem);
  slider.appendChild(dots);
  dotsActiv();
}

function arrowLeftClick() {
  if (sliderIndex == 0) {
    sliderIndex = data.length - 1;
    setSlide();
    return;
  }
  sliderIndex--;
  setSlide();
}
function arrowRightClick() {
  if (sliderIndex == data.length - 1) {
    sliderIndex = 0;
    setSlide();
    return;
  }
  sliderIndex++;
  setSlide();
}

leftArrow.addEventListener("click", arrowLeftClick);
rightArrow.addEventListener("click", arrowRightClick);
setInterval(() => {
  arrowRightClick();
}, 3000);
setSlide();
