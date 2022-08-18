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

main.addEventListener("mouseout", () => {
  featuresMenu.classList.add("hidden");
  companyMenu.classList.add("hidden");
});
feature.addEventListener("mouseover", () => {
  featuresMenu.classList.remove("hidden");
});

burger.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

feature.addEventListener("click", () => {
  featuresMenu.classList.toggle("hidden");
});

company.addEventListener("mouseover", () => {
  companyMenu.classList.remove("hidden");
});
company.addEventListener("click", () => {
  companyMenu.classList.toggle("hidden");
});
featureMobile.addEventListener("click", (e) => {
  e.preventDefault();
  featuresMenuMobile.classList.toggle("hidden");
});
companyMobile.addEventListener("click", (e) => {
  e.preventDefault();
  companyMenuMobile.classList.toggle("hidden");
});
close.addEventListener("click", () => {
  mobileMenu.classList.add("hidden");
});
