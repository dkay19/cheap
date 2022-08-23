"use strict";
class carBoxRender {
  slidebox = document.querySelector(".slider_cont");
  renderCards = document.querySelector(".renderCards");

  data;
  render(categories) {
    this.data = categories;
    const markup = this.renderSlider(this.data);
    this.renderCards.innerHTML = "";
    this.renderCards.insertAdjacentHTML("beforeend", markup);
  }
  renderSlider(categories) {
    // console.log(categories);
    let markme = `${categories
      .map((val) => {
        return `<div class="CardBox">
        <div class="img">
        <div class="pricing"><span>$ ${Math.floor(
          (Math.random() + 1) * 300
        )}</span></div>
        <img id = "cart" data-value=${
          val.idMeal
        } src="https://img.icons8.com/stickers/60/000000/shopping-cart.png"/>
          <img src=${val.strMealThumb} alt="" />
        </div>
        <div class="textCard">
          <div class="part1">
            <p>${val.strMeal}</p>
            <div class ="span">4.3* </div>
          </div>
          <div class="part2">
            <div>
            <div class="span">${val.strArea}</div>
            <div class="span">${val.strCategory}</div>
            </div>
            <div class="span">150</div>
          </div>
          <div class="part3">
            <div class ="span">${
              val.strTags == null ? "Food" : val.strTags
            }</div>
          </div>
          </div>
          </div>`;
      })
      .join("")} `;

    return markme;
  }
  addHandlerSlide(handler) {
    this.slidebox.addEventListener("click", handler.bind(this));
  }
  addHandlerCart(handler) {
    if (this.renderCards.getAttribute("listner") !== "true") {
      this.renderCards.addEventListener("click", handler.bind(this));
      this.renderCards.setAttribute("listner", "true");
    }
  }
}
export default new carBoxRender();
