"use strict";
class sliderRender {
  sliderCont = document.querySelector(".slider_cont");
  left = document.querySelector(".arrowleft");
  right = document.querySelector(".arrowright");
  data;
  render(categories) {
    this.data = categories;
    const markup = this.renderSlider(this.data);
    this.sliderCont.insertAdjacentHTML("beforeend", markup);
  }
  renderSlider(categories) {
    let markme = `${categories
      .map((val, index) => {
        return `<div class = "img_cont" data-value = ${val.strCategory} data-index = "${index}">
        <img src="${val.strCategoryThumb}" alt="" class="thumbnail">
        <p>${val.strCategory}</p>
          </div>`;
      })
      .join("")} `;

    return markme;
  }
  addHandlerSlide(handler) {
    this.left.classList.add("displaynot");
    this.left.addEventListener("click", handler.bind(this));
    this.right.addEventListener("click", handler.bind(this));
  }
}
export default new sliderRender();
