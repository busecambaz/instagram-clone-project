const img = document.getElementsByClassName("imgIcon");
const icon = document.getElementsByClassName("icon");
const bookmark = document.getElementsByClassName("fa-bookmark");
const heart = document.querySelectorAll(".insta-box .fa-heart");
const checkBoxs = document.getElementsByClassName("input");
const submit = document.getElementById("button-submit");
const closeBtn = document.querySelector("#close-btn");
const openPlane = document.querySelectorAll(".open-plane-icon");
const modal = document.querySelector(".modal-container");

function toggleModal() {
  modal.classList.toggle("show-modal");
}

closeBtn.addEventListener("click", () => {
  toggleModal();
});

submit.addEventListener("click", () => {
  toggleModal();
});

for (let i = 0; i < openPlane.length; i++) {
  openPlane[i].addEventListener("click", () => {
    toggleModal();
  });
}

for (let i = 0; i < checkBoxs.length; i++) {
  checkBoxs[i].addEventListener("click", function () {
    const values = Array.prototype.map.call(checkBoxs, (item) => item.checked);
    console.log(values);
    const isAllUnchecked = values.every((item) => item === false);

    if (isAllUnchecked) {
      submit.disabled = true;
      return;
    }

    submit.disabled = false;
  });
}

function changeHeart(heart) {
  heart.classList.toggle("fa-duotone");
}

function changeBookmark(bookmark) {
  bookmark.classList.toggle("fa-solid");
}

for (let i = 0; i < bookmark.length; i++) {
  bookmark[i].addEventListener("click", function () {
    changeBookmark(bookmark[i]);
  });
}

function like(i) {
  heart[i].classList.toggle("fa-solid");
  heart[i].classList.add("like-heart");
  changeHeart(heart[i]);
  setTimeout(() => {
    heart[i].classList.remove("like-heart");
  }, 1000);
}

for (let i = 0; i < heart.length; i++) {
  heart[i].addEventListener("click", function () {
    like(i);
  });
}

for (let i = 0; i < img.length; i++) {
  img[i].addEventListener("dblclick", () => {
    icon[i].classList.add("like");
    setTimeout(() => {
      icon[i].classList.remove("like");
    }, 1200);
    like(i);
  });
}
