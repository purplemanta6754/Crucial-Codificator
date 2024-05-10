function toggleMobileNav() {
  var nav = document.getElementById("navbar");
  if (nav.classList.contains("mobile")) {
    nav.classList.remove("mobile");
  } else {
    nav.classList.add("mobile");
  }
}

document.querySelector("html").addEventListener("click", function () {
  document.getElementById("navbar").classList.remove("mobile");
});

document.getElementById("navbar").addEventListener("click", function (event) {
  event.stopPropagation();
});

var scrolled = false;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = document.getElementById("navbar").offsetHeight;

function hasScrolled() {
  var st = window.scrollY || document.documentElement.scrollTop;
  if (Math.abs(lastScrollTop - st) <= delta) return;
  if (st > lastScrollTop && st > navbarHeight) {
    if (!document.getElementById("navbar").classList.contains("mobile")) {
      document.getElementById("navbar").classList.remove("nav-show");
      document.getElementById("navbar").classList.add("nav-hide");
    }
  } else {
    if (st + window.innerHeight < document.documentElement.scrollHeight) {
      document.getElementById("navbar").classList.remove("nav-hide");
      document.getElementById("navbar").classList.add("nav-show");
    }
  }
  lastScrollTop = st;
}

window.addEventListener("scroll", function (event) {
  scrolled = true;
});

setInterval(function () {
  if (scrolled) {
    hasScrolled();
    scrolled = false;
  }
}, 250);
