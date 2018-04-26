var btnOpen = document.querySelector(".user-navigation-item");
var btnClose1 = document.querySelector(".close1");
var btnClose2 = document.querySelector(".close2");
var btnMap = document.querySelector(".map-open");
var form = document.querySelector(".enter-popup");
var map = document.querySelector(".map");
var datefield1 = form.querySelector("[name=login]");
var datefield2 = form.querySelector("[name=password]");
var btnSubmit = form.querySelector(".button");

btnOpen.addEventListener("click", function(evt) {
  evt.preventDefault();
  form.classList.toggle("modal-show");
  datefield1.focus();
});

btnMap.addEventListener("click", function(evt) {
  evt.preventDefault();
  map.classList.toggle("modal-show");
});

btnSubmit.onclick = function(evt) {
  form.classList.remove("modal-error");
  form.offsetWidth = form.offsetWidth;
  if (!datefield1.value || !datefield2.value) {
    evt.preventDefault();
    form.classList.add("modal-error");
    if (!datefield1.value) {
      datefield1.focus();
    } else {
      datefield2.focus();
    }
  }
};

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (form.classList.contains("modal-show")) {
      evt.preventDefault();
      form.classList.remove("modal-show");
      form.classList.remove("modal-error");
    }
    if (map.classList.contains("modal-show")) {
      evt.preventDefault();
      map.classList.remove("modal-show");
      map.classList.remove("modal-error");
    }
  }
});

btnClose1.addEventListener("click", function(evt) {
  evt.preventDefault();
  form.classList.remove("modal-show");
  form.classList.remove("modal-error");
});

btnClose2.addEventListener("click", function(evt) {
  evt.preventDefault();
  map.classList.remove("modal-show");
  map.classList.remove("modal-error");
});
