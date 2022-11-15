const img = document.getElementsByClassName("imgIcon");
const icon = document.getElementsByClassName("icon");
const bookmark = document.getElementsByClassName("fa-bookmark");
const heart = document.querySelectorAll(".insta-box .fa-heart");

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
