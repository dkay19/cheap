"use strict";
import CheckError from "./checkerror.js";
class apiData {
  slider;
  search;
  page;
  category;
  search_bar;
  cart;
  count;
  constructor() {
    this.slider = [];
    this.search = [];
    this.category = [];
    this.cart = [];
    this.page = 1;
    this.search_bar = "";
    // this.count = 1;
  }
  updateSlider(data) {
    this.slider = [...data];
  }
  updateSearch(data) {
    this.search = [...data];
  }
  updateCategory(data) {
    this.category = [...data];
    // console.log(this.category);
  }
  newAddtoCart(data) {
    this.cart = [...data];
  }
  updateAddToCart(data) {
    this.cart = [...this.cart, ...data];
  }
  // updateCartCount(data){
  //   this.count+= data;
  // }
}
const dataFromModel = new apiData();

export async function fetchdata_filter(words) {
  let truemeal = [];
  dataFromModel.search_bar = words;
  dataFromModel.page = 1;
  try {
    const raw_arr = [
      await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${words}`
      ),
      await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${words}`
      ),
      await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${words}`
      ),
    ];
    const raw_data = await Promise.allSettled(raw_arr);

    for (let { value } of raw_data) {
      const { meals } = await CheckError(value);
      if (meals) truemeal = meals;
    }
  } catch (err) {
    console.error(err + " at dkay1");
  }

  if (truemeal.length === 0) {
    try {
      let data = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${words}`
      );
      let { meals } = await CheckError(data);
      truemeal = meals;
    } catch (err) {
      console.error(err + " at dkay2");
    }
  }
  console.log(truemeal);
  if (truemeal === null || truemeal === []) {
    alert("No meal Sorry");
    return;
  }

  dataFromModel.updateSearch(truemeal);
}
export async function fetchdata_cat(cat) {
  try {
    console.log(cat);
    let data = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`
    );

    let { meals } = await CheckError(data);

    let datameals = meals.map(async (ele) => {
      let data = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${ele.idMeal}`
      );
      return await CheckError(data);
    });
    let mapit = (await Promise.allSettled(datameals)).map(
      (e) => e.value.meals[0]
    );
    dataFromModel.updateCategory(mapit);
  } catch (err) {
    console.error(err + " at slider/dkay3 ");
  }
}
export async function fetchdata_slider() {
  try {
    let data = await fetch(
      `https://www.themealdb.com/api/json/v1/1/categories.php`
    );
    let { categories } = await CheckError(data);

    let slid = (await Promise.resolve(categories)).map((e) => e);
    dataFromModel.updateSlider(slid);
  } catch (err) {
    console.error(err + " at slider/dkay3 ");
  }
}

export function searchPagination(page = dataFromModel.page) {
  dataFromModel.page = page;
  let s = (page - 1) * 6;
  let e = page * 6;
  return dataFromModel.search.slice(s, e);
}

export { dataFromModel };
