"use strict";
class AddToCart {
  slidebox = document.querySelector("#addToCart");
  closemodel = document.querySelector(".closemodel");
  parentUL = document.querySelector("#foodList");
  tot = document.querySelector(".total");
  inDec;
  cnt;
  total;
  data;
  render(categories) {
    this.data = categories;
    this.cnt = 0;
    this.total = 0;
    const markup = this.renderSlider(this.data);
    this.parentUL.innerHTML = "";
    this.parentUL.insertAdjacentHTML("beforeend", markup);
    this.tot.textContent = `$ ${this.total}`;
  }
  renderSlider(categories) {
    // console.log(categories);

    let markme = `${categories
      .map((val) => {
        this.total += val.price * val.count;
        return `<li class="foodItms item${this.cnt++}">
    <div class="profile">
    <div class="Cartimg"><img src='${val.img.currentSrc}'/></div>
    <div class="itemName">${val.name}</div>
    </div>
    <div class="price">
      <span>$ ${val.price}</span>
      <div class="incDec">
        <button class="dec">-⬇</button>
         <span class="count">${val.count}</span>
        <button class="inc">+⬆</button>
      </div>
    </div>
    <span class="delete">
      <i class="fa fa-close" data-id = ${
        val.id
      } style="font-size: 36px; color: red"></i>
    </span>
  </li>`;
      })
      .join("")}`;

    return markme;
  }
  addHandlerSlide(handler) {
    this.slidebox.addEventListener("click", handler.bind(this));
  }
  addHandlerCart(handler) {
    console.log("xx");
    this.parentUL.addEventListener("click", handler.bind(this));
  }
  removeHandler(handler) {
    this.parentUL.addEventListener("click", handler.bind(this));
  }
  closeHnadler(handler) {
    // console.log("ss");
    this.closemodel.addEventListener(
      "click",
      handler.bind(this, this.slidebox)
    );
  }
}
export default new AddToCart();
