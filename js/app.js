const feature = document.querySelector("#feature");
const company = document.querySelector("#company");
const featuresMenu = document.querySelector("#features-menu");
const companyMenu = document.querySelector("#company-menu");
const featureMobile = document.querySelector("#feature-mobile");
const companyMobile = document.querySelector("#company-mobile");
const featuresMenuMobile = document.querySelector("#features-menu-mobile");
const companyMenuMobile = document.querySelector("#company-menu-mobile");
const mobileMenu = document.querySelector("#mobile-menu");
const burger = document.querySelector("#burger");
const close = document.querySelector("#close");
const main = document.querySelector("main");
const featureArrow = document.querySelector("#feature-arrow");
const companyArrow = document.querySelector("#company-arrow");
const featureMobileArrow = document.querySelector("#featureMobile-arrow");
const companyMobileArrow = document.querySelector("#companyMobile-arrow");
main.addEventListener("mouseout", () => {
  featuresMenu.classList.add("hidden");
  featureArrow.classList.remove("rotate");
  companyArrow.classList.remove("rotate");

  companyMenu.classList.add("hidden");
});
feature.addEventListener("mouseover", () => {
  featuresMenu.classList.remove("hidden");
  //   featureArrow.style.rotate = "180deg";
  if (!featuresMenu.classList.contains("hidden")) {
    featureArrow.classList.add("rotate");
  } else {
    featureArrow.classList.remove("rotate");
  }
});

burger.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

feature.addEventListener("click", () => {
  featuresMenu.classList.toggle("hidden");
  if (!featuresMenu.classList.contains("hidden")) {
    featureArrow.classList.add("rotate");
  } else {
    featureArrow.classList.remove("rotate");
  }
});

company.addEventListener("mouseover", () => {
  companyMenu.classList.remove("hidden");
  if (!companyMenu.classList.contains("hidden")) {
    companyArrow.classList.add("rotate");
  } else {
    companyArrow.classList.remove("rotate");
  }
});
company.addEventListener("click", () => {
  companyMenu.classList.toggle("hidden");
  if (!companyMenu.classList.contains("hidden")) {
    companyArrow.classList.add("rotate");
  } else {
    companyArrow.classList.remove("rotate");
  }
});
featureMobile.addEventListener("click", (e) => {
  e.preventDefault();
  featuresMenuMobile.classList.toggle("hidden");
  if (!featuresMenuMobile.classList.contains("hidden")) {
    featureMobileArrow.classList.add("rotate");
  } else {
    featureMobileArrow.classList.remove("rotate");
  }
});
companyMobile.addEventListener("click", (e) => {
  e.preventDefault();
  companyMenuMobile.classList.toggle("hidden");
  if (!companyMenuMobile.classList.contains("hidden")) {
    companyMobileArrow.classList.add("rotate");
  } else {
    companyMobileArrow.classList.remove("rotate");
  }
});
close.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});
