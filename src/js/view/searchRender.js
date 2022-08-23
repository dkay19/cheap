"use strict";
import { dataFromModel } from "../Model";
class searchRender {
  searchPreveiw = document.querySelector(".search_preveiw");
  searchBar = document.querySelector("#searchbox");
  data;
  render(categories) {
    this.data = categories;
    const markup = this.renderSlider(this.data);
    this.searchPreveiw.innerHTML = " ";
    this.searchPreveiw.insertAdjacentHTML("beforeend", markup);
  }
  renderSlider(categories) {
    let markme = `${categories
      .map((val) => {
        return `<a href="#${val.idMeal}" class="href">
        <div class="preveiwCard">
          <div class="img">
            <img src="${val.strMealThumb}" alt="" />
          </div>
          <div class="text">
            <p>${val.strMeal}</p>
            <p class="tago">${
              !val.strCategory ? dataFromModel.search_bar : val.strCategory
            }</p>
          </div>
        </div>
      </a>`;
      })
      .join("")} `;

    return markme;
  }
  addHandlerSlide(handler) {}
}
export default new searchRender();
