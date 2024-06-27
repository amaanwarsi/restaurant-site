const mobile_nav = document.querySelector(".toggle-menu");
const nav_header = document.querySelector(".nav");
// const menu_icon = mobile_nav.querySelector("i");
const nav_links = document.querySelectorAll(".nav ul li a");
const mediaQuery = window.matchMedia("(max-width: 992px)");

const toggleNavbar = () => {
  nav_header.classList.toggle("active");
  if (mediaQuery.matches) {
    document.querySelector("body").classList.toggle("overflow-hidden");
  }
  let txt = mobile_nav.innerText;
  mobile_nav.innerText = txt == "Menu" ? "Close" : "Menu";
};

nav_links.forEach((i) => {
  i.addEventListener("click", () => toggleNavbar());
});

mobile_nav.addEventListener("click", () => toggleNavbar());

const openTab = (TabName) => {
  var tab = document.querySelectorAll(".tabcontent");
  tab.forEach((el) => {
    if (el.id != TabName) {
      el.style.display = "none";
    }
  });
  TabName = "#".concat(TabName);
  document.querySelector(TabName).style.display = "block";
};

var acc = document.querySelectorAll(".accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    var otherPanels = document.querySelectorAll(".panel");
    otherPanels.forEach((el) => {
      if (el.id != panel) {
        el.style.display = "none";
      }
    });

    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
