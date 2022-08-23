"use strict";
// import CheckError from "./checkerror.js";
import {
  fetchdata_filter,
  fetchdata_cat,
  dataFromModel,
  fetchdata_slider,
  searchPagination,
} from "./Model.js";
import RenderSlider from "./view/sliderRender";
import CardBoxRender from "./view/CardBoxRender.js";
import searchRender from "./view/searchRender.js";
import paginationRender from "./view/paginationRender.js";
import AddToCart from "./view/AddToCart.js";
//search data from input
(function searchInput() {
  async function searchfood(e) {
    if (!search_bar.value || search_bar.value === " ") {
      console.error("Please input valid strong ");
      return;
    }
    await fetchdata_filter(search_bar.value.trim());

    if (dataFromModel.search.length != 0) {
      paginationRender.render(dataFromModel);
      let data = searchPagination();
      searchRender.render(data);
    } else throw new Error("No Food fuk off");

    search_bar.value = "";
  }
  const search_bar = document.querySelector("#searchbox");
  const search_butt = document.querySelector("#Search_result");
  search_butt.addEventListener("click", searchfood);
})();

//Slider functionality here
(async () => {
  //slider data category
  await fetchdata_slider();
  RenderSlider.render(dataFromModel.slider);
  //arrow functionality
  const root = document.documentElement;
  const fo =
    Math.floor((1536 - Number(document.documentElement.clientWidth)) / 200) + 1;
  windowSize = 5;
  let le = 0;
  function moveit(e) {
    if (e.target.closest("svg").classList.value === "arrowleft") {
      this.right.classList.remove("displaynot");
      windowSize--;
      if (windowSize <= 5) this.left.classList.add("displaynot");
      else this.left.classList.remove("displaynot");
      le = le + 176;
      root.style.setProperty("--main-slide", le + "px");
    } else {
      this.left.classList.remove("displaynot");
      windowSize++;

      if (windowSize >= 13 + fo - 1) this.right.classList.add("displaynot");
      else this.right.classList.remove("displaynot");
      le = le - 176;
      root.style.setProperty("--main-slide", le + "px");
    }
  }
  RenderSlider.addHandlerSlide(moveit);
})();

//render cardbox after clicking slider box
async function boxcallback(e) {
  // CardBoxRender.removeEventcart(Cartclick);
  if (!e.target.closest(".img_cont")) return;
  let cat = e.target.closest(".img_cont").dataset.value;
  await fetchdata_cat(cat);
  CardBoxRender.render(dataFromModel.category);
  //cart button functionality
  CardBoxRender.addHandlerCart(Cartclick);
}

function Cartclick(e) {
  if (
    e.target.nodeName !== "IMG" ||
    e.target.id !== "cart" ||
    e.target.style["backgroundColor"] === "rgba(14, 187, 8, 0.7)"
  )
    return;

  let text =
    e.target.parentNode.parentNode.childNodes[3].childNodes[1].childNodes[1]
      .innerText;
  let price =
    e.target.parentNode.childNodes[1].childNodes[0].innerText.slice(2);
  // console.log(price);
  let img = e.target.parentNode.childNodes[5];
  // console.log(img);
  let dataCart = {
    id: e.target.dataset.value,
    currimg: e.target,
    img: img,
    name: text,
    price: Number(price),
    count: 1,
  };

  dataFromModel.updateAddToCart([dataCart]);
  // console.log(dataFromModel.cart);
  AddToCart.render(dataFromModel.cart);
  e.target.style["backgroundColor"] = "rgba(14, 187, 8, 0.7)";
}
function calPrice(e) {
  if (
    e.target.className !== "inc" &&
    e.target.className !== "dec" &&
    e.target.className !== "fa fa-close"
  )
    return;

  if (e.target.className === "fa fa-close") {
    let idx = e.target.dataset.id;
    let fix = dataFromModel.cart.find((val) => val.id == idx);
    let filterdata = dataFromModel.cart.filter((val) => val.id != idx);
    fix.currimg.style["backgroundColor"] = "rgb(0 0 0 / 50%)";
    dataFromModel.newAddtoCart([...filterdata]);
  }
  if (e.target.className === "inc") {
    let grand = e.target.parentNode.parentNode;
    let index = grand.parentNode.className.split(" ")[1][4];
    dataFromModel.cart[Number(index)].count += 1;
  } else if (e.target.className === "dec") {
    let grand = e.target.parentNode.parentNode;
    let index = grand.parentNode.className.split(" ")[1][4];
    dataFromModel.cart[Number(index)].count -= 1;
  }

  AddToCart.render(dataFromModel.cart);
}

//search result hash
function showhash(event) {
  const hash = event.target.location.hash.slice(1);
  console.log(hash);
  if (!hash) return;
}
function paginationHandle(page) {
  let data = searchPagination(page);
  searchRender.render(data);
  paginationRender.render(dataFromModel);
}
function cartbutton(e) {
  if (!e.target.closest("#addToCart")) return;
  let x = window.matchMedia("(max-width: 600px)");
  if (x.matches === true) {
    if (e.target.closest("#addToCart").dataset.on === "true") {
      let root = document.documentElement;
      document.documentElement.style.setProperty("--main-display", "none");
      root.style.setProperty("--main-cart", `${0}px`);
      root.style.setProperty("--main-cart1", `${0}px`);
      root.style.setProperty("--main-op", "0");
      e.target.closest("#addToCart").dataset.on = "false";
    } else {
      e.target.closest("#addToCart").dataset.on = "true";
      document.documentElement.style.setProperty("--main-display", "flex");
    }
  } else {
    let root = document.documentElement;
    let cartd = e.target;
    let model = document.querySelector(".model-open");
    console.log(cartd.getBoundingClientRect());
    console.log(model.getBoundingClientRect());
    if (e.target.closest("#addToCart").dataset.on === "true") {
      root.style.setProperty("--main-cart", `${0}px`);
      root.style.setProperty("--main-cart1", `${0}px`);
      e.target.closest("#addToCart").dataset.on = "false";
      root.style.setProperty("--main-op", "1");
      return;
    }

    let x =
      cartd.getBoundingClientRect().left -
      model.getBoundingClientRect().width -
      Math.abs(model.getBoundingClientRect().left) +
      80;
    let y =
      cartd.getBoundingClientRect().top +
      Math.abs(model.getBoundingClientRect().top) +
      cartd.getBoundingClientRect().height;
    // console.log(x, y);
    root.style.setProperty("--main-cart", `${x}px`);
    root.style.setProperty("--main-cart1", `${y}px`);
    e.target.closest("#addToCart").dataset.on = "true";
    root.style.setProperty("--main-op", "1");
  }
}
function closeit(slidebox, e) {
  // console.log(slidebox);
  let x = window.matchMedia("(max-width: 600px)");
  let root = document.documentElement;
  if (x.matches === true) {
    slidebox.dataset.on = "false";
    root.style.setProperty("--main-display", "none");
  } else {
    slidebox.dataset.on = "false";
    root.style.setProperty("--main-cart", `${0}px`);
    root.style.setProperty("--main-cart1", `${0}px`);
    root.style.setProperty("--main-op", "0");
  }
}

window.onhashchange = showhash;
//apply eventlistner
window.onload = (event) => {
  showhash(event);
  CardBoxRender.addHandlerSlide(boxcallback);
  AddToCart.addHandlerCart(calPrice);
  AddToCart.addHandlerSlide(cartbutton);
  AddToCart.closeHnadler(closeit);
  paginationRender.addHandlerClick(paginationHandle);
};
