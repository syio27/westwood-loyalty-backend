import {
  IconButtonComponent
} from "./chunk-DGNBLIW7.js";
import {
  CommonModule,
  Component,
  EventEmitter,
  Input,
  NgForOf,
  Output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-NKSGOSP5.js";

// src/app/shared/components/pagination/pagination.component.ts
function PaginationComponent_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275listener("click", function PaginationComponent_button_8_Template_button_click_0_listener() {
      const page_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.handlePageClick(page_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const page_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", page_r2 === ctx_r2.currentPage)("ellipsis", page_r2 === "...");
    \u0275\u0275property("disabled", page_r2 === "...");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", page_r2, " ");
  }
}
var PaginationComponent = class _PaginationComponent {
  currentPage = 1;
  totalPages = 1;
  maxVisible = 5;
  pageChange = new EventEmitter();
  getPages() {
    const pages = [];
    const start = Math.max(1, this.currentPage - Math.floor(this.maxVisible / 2));
    const end = Math.min(this.totalPages, start + this.maxVisible - 1);
    if (start > 1) {
      pages.push(1);
      if (start > 2)
        pages.push("...");
    }
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    if (end < this.totalPages) {
      if (end < this.totalPages - 1)
        pages.push("...");
      pages.push(this.totalPages);
    }
    return pages;
  }
  handlePageClick(page) {
    if (typeof page === "number") {
      this.goToPage(page);
    }
  }
  goToPage(page) {
    if (page >= 1 && page <= this.totalPages && page !== this.currentPage) {
      this.currentPage = page;
      this.pageChange.emit(page);
    }
  }
  static \u0275fac = function PaginationComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PaginationComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PaginationComponent, selectors: [["app-pagination"]], inputs: { currentPage: "currentPage", totalPages: "totalPages", maxVisible: "maxVisible" }, outputs: { pageChange: "pageChange" }, decls: 15, vars: 5, consts: [[1, "pagination"], ["iconButtonType", "ghost", "size", "large", "title", "\u041F\u0435\u0440\u0432\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430", 3, "onClick", "disabled"], ["viewBox", "0 0 24 24", "fill", "none", 1, "pagination-arrow-icon"], ["d", "M11 17l-5-5 5-5M18 17l-5-5 5-5", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["iconButtonType", "ghost", "size", "large", "title", "\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430", 3, "onClick", "disabled"], ["d", "M15 18l-6-6 6-6", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "pagination-pages"], ["class", "pagination-page", 3, "active", "ellipsis", "disabled", "click", 4, "ngFor", "ngForOf"], ["iconButtonType", "ghost", "size", "large", "title", "\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430", 3, "onClick", "disabled"], ["d", "M9 18l6-6-6-6", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["iconButtonType", "ghost", "size", "large", "title", "\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u044F\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430", 3, "onClick", "disabled"], ["d", "M13 17l5-5-5-5M6 17l5-5-5-5", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "pagination-page", 3, "click", "disabled"]], template: function PaginationComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "app-icon-button", 1);
      \u0275\u0275listener("onClick", function PaginationComponent_Template_app_icon_button_onClick_1_listener() {
        return ctx.goToPage(1);
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(2, "svg", 2);
      \u0275\u0275element(3, "path", 3);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(4, "app-icon-button", 4);
      \u0275\u0275listener("onClick", function PaginationComponent_Template_app_icon_button_onClick_4_listener() {
        return ctx.goToPage(ctx.currentPage - 1);
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(5, "svg", 2);
      \u0275\u0275element(6, "path", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(7, "div", 6);
      \u0275\u0275template(8, PaginationComponent_button_8_Template, 2, 6, "button", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "app-icon-button", 8);
      \u0275\u0275listener("onClick", function PaginationComponent_Template_app_icon_button_onClick_9_listener() {
        return ctx.goToPage(ctx.currentPage + 1);
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(10, "svg", 2);
      \u0275\u0275element(11, "path", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(12, "app-icon-button", 10);
      \u0275\u0275listener("onClick", function PaginationComponent_Template_app_icon_button_onClick_12_listener() {
        return ctx.goToPage(ctx.totalPages);
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(13, "svg", 2);
      \u0275\u0275element(14, "path", 11);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.currentPage === 1);
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", ctx.currentPage === 1);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngForOf", ctx.getPages());
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.currentPage === ctx.totalPages);
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", ctx.currentPage === ctx.totalPages);
    }
  }, dependencies: [CommonModule, NgForOf, IconButtonComponent], styles: ["\n\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.pagination-pages[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.25rem;\n}\n.pagination-page[_ngcontent-%COMP%] {\n  min-width: 40px;\n  width: 40px;\n  height: 40px;\n  padding: 0;\n  border: 1px solid #e2e8f0;\n  border-radius: 50%;\n  background-color: #ffffff;\n  color: #1a202c;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.pagination-page[_ngcontent-%COMP%]:hover:not(:disabled):not(.active):not(.ellipsis) {\n  background-color: #f8f9fa;\n  border-color: #cbd5e1;\n}\n.pagination-page.active[_ngcontent-%COMP%] {\n  background-color: #16A34A;\n  color: #ffffff;\n  border-color: #16A34A;\n}\n.pagination-page.ellipsis[_ngcontent-%COMP%] {\n  border: none;\n  cursor: default;\n}\n.pagination-page[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.pagination-arrow-icon[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  display: block;\n  color: rgb(0, 0, 0);\n}\n[_nghost-%COMP%]     app-icon-button.large .pagination-arrow-icon {\n  width: 24px;\n  height: 24px;\n}\n/*# sourceMappingURL=pagination.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaginationComponent, [{
    type: Component,
    args: [{ selector: "app-pagination", standalone: true, imports: [CommonModule, IconButtonComponent], template: `
    <div class="pagination">
      <app-icon-button
        iconButtonType="ghost"
        size="large"
        [disabled]="currentPage === 1"
        (onClick)="goToPage(1)"
        title="\u041F\u0435\u0440\u0432\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430">
        <svg viewBox="0 0 24 24" fill="none" class="pagination-arrow-icon">
          <path d="M11 17l-5-5 5-5M18 17l-5-5 5-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </app-icon-button>
      
      <app-icon-button
        iconButtonType="ghost"
        size="large"
        [disabled]="currentPage === 1"
        (onClick)="goToPage(currentPage - 1)"
        title="\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430">
        <svg viewBox="0 0 24 24" fill="none" class="pagination-arrow-icon">
          <path d="M15 18l-6-6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </app-icon-button>

      <div class="pagination-pages">
        <button
          *ngFor="let page of getPages()"
          class="pagination-page"
          [class.active]="page === currentPage"
          [class.ellipsis]="page === '...'"
          [disabled]="page === '...'"
          (click)="handlePageClick(page)">
          {{ page }}
        </button>
      </div>

      <app-icon-button
        iconButtonType="ghost"
        size="large"
        [disabled]="currentPage === totalPages"
        (onClick)="goToPage(currentPage + 1)"
        title="\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430">
        <svg viewBox="0 0 24 24" fill="none" class="pagination-arrow-icon">
          <path d="M9 18l6-6-6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </app-icon-button>
      
      <app-icon-button
        iconButtonType="ghost"
        size="large"
        [disabled]="currentPage === totalPages"
        (onClick)="goToPage(totalPages)"
        title="\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u044F\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430">
        <svg viewBox="0 0 24 24" fill="none" class="pagination-arrow-icon">
          <path d="M13 17l5-5-5-5M6 17l5-5-5-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </app-icon-button>
    </div>
  `, styles: ["/* angular:styles/component:css;83694d0941d46fcc47d243607f4d51223e90be0f84a532d9b32e40c7ce0df12c;/Users/baglan/repo/westwood/westwood-frontend/src/app/shared/components/pagination/pagination.component.ts */\n.pagination {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.pagination-pages {\n  display: flex;\n  gap: 0.25rem;\n}\n.pagination-page {\n  min-width: 40px;\n  width: 40px;\n  height: 40px;\n  padding: 0;\n  border: 1px solid #e2e8f0;\n  border-radius: 50%;\n  background-color: #ffffff;\n  color: #1a202c;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.pagination-page:hover:not(:disabled):not(.active):not(.ellipsis) {\n  background-color: #f8f9fa;\n  border-color: #cbd5e1;\n}\n.pagination-page.active {\n  background-color: #16A34A;\n  color: #ffffff;\n  border-color: #16A34A;\n}\n.pagination-page.ellipsis {\n  border: none;\n  cursor: default;\n}\n.pagination-page:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.pagination-arrow-icon {\n  width: 20px;\n  height: 20px;\n  display: block;\n  color: rgb(0, 0, 0);\n}\n:host ::ng-deep app-icon-button.large .pagination-arrow-icon {\n  width: 24px;\n  height: 24px;\n}\n/*# sourceMappingURL=pagination.component.css.map */\n"] }]
  }], null, { currentPage: [{
    type: Input
  }], totalPages: [{
    type: Input
  }], maxVisible: [{
    type: Input
  }], pageChange: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PaginationComponent, { className: "PaginationComponent", filePath: "src/app/shared/components/pagination/pagination.component.ts", lineNumber: 132 });
})();

export {
  PaginationComponent
};
//# sourceMappingURL=chunk-E2ICMDXS.js.map
