"use strict";
import icons from "url:../../img/icons.svg";
class paginationRender {
  parent = document.querySelector(".arr");
  left = document.querySelector(".arrowle");
  right = document.querySelector(".arrowri");
  data;
  render(categories) {
    this.data = categories;
    const markup = this.renderSlider(this.data);
    this.parent.insertAdjacentHTML("beforeend", markup);
  }
  renderSlider(data1) {
    const curPage = data1.page;
    const numPages = Math.ceil(data1.search.length / 6);
    console.log(curPage, numPages);
    // Page 1, and there are other pages
    this.parent.innerHTML = "";
    if (curPage === 1 && numPages > 1) {
      return `
        <button data-goto="${
          curPage + 1
        }" class="btn--inline pagination__btn--next">
          <span>Page ${curPage + 1}</span>
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
          </svg>
        </button>
      `;
    }

    // Last page
    if (curPage === numPages && numPages > 1) {
      return `
        <button data-goto="${
          curPage - 1
        }" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-left"></use>
          </svg>
          <span>Page ${curPage - 1}</span>
        </button>
      `;
    }

    // Other page
    if (curPage < numPages) {
      return `
        <button data-goto="${
          curPage - 1
        }" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-left"></use>
          </svg>
          <span>Page ${curPage - 1}</span>
        </button>
        <button data-goto="${
          curPage + 1
        }" class="btn--inline pagination__btn--next">
          <span>Page ${curPage + 1}</span>
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
          </svg>
        </button>
      `;
    }

    // Page 1, and there are NO other pages
    return "";
  }
  addHandlerClick(handler) {
    this.parent.addEventListener("click", (e) => {
      const btn = e.target.closest(".btn--inline");
      if (!btn) return;
      const goToPage = +btn.dataset.goto;
      handler(goToPage);
    });
  }
}
export default new paginationRender();
