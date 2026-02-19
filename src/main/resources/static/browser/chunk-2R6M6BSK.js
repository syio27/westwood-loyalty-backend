import {
  PaginationComponent
} from "./chunk-E2ICMDXS.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-7NMYMP3Z.js";
import {
  ActivatedRoute,
  CommonModule,
  Component,
  EventEmitter,
  Injectable,
  Input,
  NgForOf,
  NgIf,
  Output,
  Router,
  RouterModule,
  __spreadValues,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-NKSGOSP5.js";

// src/app/core/services/pagination.service.ts
var PaginationService = class _PaginationService {
  router;
  defaultPageSize = 15;
  pageSizeOptions = [2, 5, 10, 15, 25];
  constructor(router) {
    this.router = router;
  }
  getPageSizeOptions() {
    return this.pageSizeOptions;
  }
  getDefaultPageSize() {
    return this.defaultPageSize;
  }
  /**
   * Инициализирует параметры пагинации из query параметров роута
   */
  initFromRoute(route, paginationKey = "default") {
    const pageParam = paginationKey === "default" ? "page" : `${paginationKey}Page`;
    const pageSizeParam = paginationKey === "default" ? "pageSize" : `${paginationKey}PageSize`;
    const page = parseInt(route.snapshot.queryParams[pageParam] || "1", 10);
    const pageSize = parseInt(route.snapshot.queryParams[pageSizeParam] || String(this.defaultPageSize), 10);
    return {
      page: isNaN(page) || page < 1 ? 1 : page,
      pageSize: this.pageSizeOptions.includes(pageSize) ? pageSize : this.defaultPageSize
    };
  }
  /**
   * Обновляет query параметры роута для пагинации
   */
  updateRoute(route, page, pageSize, paginationKey = "default") {
    const currentParams = __spreadValues({}, route.snapshot.queryParams);
    const pageParam = paginationKey === "default" ? "page" : `${paginationKey}Page`;
    const pageSizeParam = paginationKey === "default" ? "pageSize" : `${paginationKey}PageSize`;
    const queryParams = {};
    Object.keys(currentParams).forEach((key) => {
      if (key !== pageParam && key !== pageSizeParam) {
        queryParams[key] = currentParams[key];
      }
    });
    if (page > 1) {
      queryParams[pageParam] = page;
    }
    if (pageSize !== this.defaultPageSize) {
      queryParams[pageSizeParam] = pageSize;
    }
    this.router.navigate([], {
      relativeTo: route,
      queryParams,
      replaceUrl: true
    });
  }
  /**
   * Вычисляет данные для текущей страницы
   */
  getPaginatedData(data, page, pageSize) {
    const totalItems = data.length;
    const totalPages = Math.ceil(totalItems / pageSize);
    const startIndex = (page - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, totalItems);
    const paginatedData = data.slice(startIndex, endIndex);
    return {
      paginatedData,
      totalPages: totalPages || 1,
      totalItems,
      startIndex: startIndex + 1,
      endIndex
    };
  }
  static \u0275fac = function PaginationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PaginationService)(\u0275\u0275inject(Router));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PaginationService, factory: _PaginationService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaginationService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: Router }], null);
})();

// src/app/shared/components/paginated-table-wrapper/paginated-table-wrapper.component.ts
var _c0 = ["*"];
function PaginatedTableWrapperComponent_div_2_option_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const size_r3 = ctx.$implicit;
    \u0275\u0275property("value", size_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(size_r3);
  }
}
function PaginatedTableWrapperComponent_div_2_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "app-pagination", 12);
    \u0275\u0275listener("pageChange", function PaginatedTableWrapperComponent_div_2_div_10_Template_app_pagination_pageChange_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPageChange($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("currentPage", ctx_r1.currentPage)("totalPages", ctx_r1.totalPages);
  }
}
function PaginatedTableWrapperComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 5)(6, "label", 6);
    \u0275\u0275text(7, "\u0421\u0442\u0440\u043E\u043A \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "select", 7);
    \u0275\u0275twoWayListener("ngModelChange", function PaginatedTableWrapperComponent_div_2_Template_select_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.pageSize, $event) || (ctx_r1.pageSize = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function PaginatedTableWrapperComponent_div_2_Template_select_change_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPageSizeChange());
    });
    \u0275\u0275template(9, PaginatedTableWrapperComponent_div_2_option_9_Template, 2, 2, "option", 8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(10, PaginatedTableWrapperComponent_div_2_div_10_Template, 2, 2, "div", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate3("\u041F\u043E\u043A\u0430\u0437\u0430\u043D\u043E ", ctx_r1.startIndex, "-", ctx_r1.endIndex, " \u0438\u0437 ", ctx_r1.totalItems, "");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.pageSize);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.pageSizeOptions);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.totalPages > 1);
  }
}
var PaginatedTableWrapperComponent = class _PaginatedTableWrapperComponent {
  paginationEnabled = true;
  data = [];
  defaultPageSize = 15;
  paginationKey = "default";
  // Unique key for this pagination instance
  // Output для передачи пагинированных данных
  paginatedDataChange = new EventEmitter();
  paginationInfoChange = new EventEmitter();
  // Pagination state
  currentPage = 1;
  pageSize = 15;
  totalPages = 1;
  totalItems = 0;
  startIndex = 0;
  endIndex = 0;
  pageSizeOptions = [];
  paginatedData = [];
  route = inject(ActivatedRoute);
  router = inject(Router);
  paginationService = inject(PaginationService);
  ngOnInit() {
    this.pageSize = this.defaultPageSize;
    this.pageSizeOptions = this.paginationService.getPageSizeOptions();
    if (this.paginationEnabled) {
      const paginationParams = this.paginationService.initFromRoute(this.route, this.paginationKey);
      this.currentPage = paginationParams.page;
      this.pageSize = paginationParams.pageSize;
      this.route.queryParams.subscribe((params) => {
        const pageParam = this.paginationKey === "default" ? "page" : `${this.paginationKey}Page`;
        const pageSizeParam = this.paginationKey === "default" ? "pageSize" : `${this.paginationKey}PageSize`;
        const page = params[pageParam] ? parseInt(params[pageParam], 10) : 1;
        const pageSize = params[pageSizeParam] ? parseInt(params[pageSizeParam], 10) : this.paginationService.getDefaultPageSize();
        const newPage = isNaN(page) || page < 1 ? 1 : page;
        const newPageSize = this.pageSizeOptions.includes(pageSize) ? pageSize : this.paginationService.getDefaultPageSize();
        if (newPage !== this.currentPage || newPageSize !== this.pageSize) {
          this.currentPage = newPage;
          this.pageSize = newPageSize;
          this.updatePagination();
        }
      });
    }
    this.updatePagination();
  }
  ngOnChanges(changes) {
    if (changes["data"] || changes["paginationEnabled"]) {
      this.updatePagination();
    }
  }
  updatePagination() {
    if (this.paginationEnabled && this.data) {
      const paginationResult = this.paginationService.getPaginatedData(this.data, this.currentPage, this.pageSize);
      this.paginatedData = paginationResult.paginatedData;
      this.totalPages = paginationResult.totalPages;
      this.totalItems = paginationResult.totalItems;
      this.startIndex = paginationResult.startIndex;
      this.endIndex = paginationResult.endIndex;
      this.paginatedDataChange.emit(this.paginatedData);
      this.paginationInfoChange.emit({
        currentPage: this.currentPage,
        pageSize: this.pageSize,
        totalPages: this.totalPages,
        totalItems: this.totalItems,
        startIndex: this.startIndex,
        endIndex: this.endIndex
      });
    } else {
      this.paginatedData = this.data || [];
      this.totalItems = this.data?.length || 0;
      this.paginatedDataChange.emit(this.paginatedData);
    }
  }
  onPageChange(page) {
    this.currentPage = page;
    if (this.paginationEnabled) {
      this.paginationService.updateRoute(this.route, this.currentPage, this.pageSize, this.paginationKey);
    }
    this.updatePagination();
    const tableContainer = document.querySelector(".table-container");
    if (tableContainer) {
      tableContainer.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
  onPageSizeChange() {
    this.currentPage = 1;
    if (this.paginationEnabled) {
      this.paginationService.updateRoute(this.route, this.currentPage, this.pageSize, this.paginationKey);
    }
    this.updatePagination();
  }
  static \u0275fac = function PaginatedTableWrapperComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PaginatedTableWrapperComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PaginatedTableWrapperComponent, selectors: [["app-paginated-table-wrapper"]], inputs: { paginationEnabled: "paginationEnabled", data: "data", defaultPageSize: "defaultPageSize", paginationKey: "paginationKey" }, outputs: { paginatedDataChange: "paginatedDataChange", paginationInfoChange: "paginationInfoChange" }, exportAs: ["paginatedTable"], features: [\u0275\u0275NgOnChangesFeature], ngContentSelectors: _c0, decls: 3, vars: 1, consts: [[1, "paginated-wrapper"], ["class", "pagination-container", 4, "ngIf"], [1, "pagination-container"], [1, "pagination-left"], [1, "pagination-info"], [1, "page-size-filter-section"], [1, "page-size-label"], [1, "page-size-select", 3, "ngModelChange", "change", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "pagination-right", 4, "ngIf"], [3, "value"], [1, "pagination-right"], [3, "pageChange", "currentPage", "totalPages"]], template: function PaginatedTableWrapperComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275projection(1);
      \u0275\u0275template(2, PaginatedTableWrapperComponent_div_2_Template, 11, 6, "div", 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.paginationEnabled && ctx.totalItems > 0);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgModel, RouterModule, PaginationComponent], styles: ["\n\n.paginated-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.pagination-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem;\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n  gap: 1rem;\n}\n.pagination-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n  flex-wrap: wrap;\n}\n.pagination-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.pagination-info[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #64748b;\n  font-weight: 500;\n}\n.page-size-filter-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.page-size-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #475569;\n}\n.page-size-select[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: 1px solid #cbd5e1;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  background: white;\n  color: #1f2937;\n  cursor: pointer;\n  outline: none;\n  transition: all 0.2s;\n}\n.page-size-select[_ngcontent-%COMP%]:hover {\n  border-color: #94a3b8;\n}\n.page-size-select[_ngcontent-%COMP%]:focus {\n  border-color: #16A34A;\n  box-shadow: 0 0 0 3px rgba(22, 163, 74, 0.1);\n}\n@media (max-width: 768px) {\n  .pagination-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 1rem;\n  }\n  .pagination-left[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 1rem;\n  }\n  .pagination-info[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .page-size-filter-section[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .pagination-right[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=paginated-table-wrapper.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaginatedTableWrapperComponent, [{
    type: Component,
    args: [{ selector: "app-paginated-table-wrapper", standalone: true, imports: [CommonModule, FormsModule, RouterModule, PaginationComponent], template: `
    <div class="paginated-wrapper">
      <!-- Table Content (ng-content) -->
      <ng-content></ng-content>

      <!-- Pagination with Page Size Filter -->
      <div class="pagination-container" *ngIf="paginationEnabled && totalItems > 0">
        <div class="pagination-left">
          <div class="pagination-info">
            <span>\u041F\u043E\u043A\u0430\u0437\u0430\u043D\u043E {{ startIndex }}-{{ endIndex }} \u0438\u0437 {{ totalItems }}</span>
          </div>
          <div class="page-size-filter-section">
            <label class="page-size-label">\u0421\u0442\u0440\u043E\u043A \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435:</label>
            <select [(ngModel)]="pageSize" (change)="onPageSizeChange()" class="page-size-select">
              <option *ngFor="let size of pageSizeOptions" [value]="size">{{ size }}</option>
            </select>
          </div>
        </div>
        <div class="pagination-right" *ngIf="totalPages > 1">
          <app-pagination
            [currentPage]="currentPage"
            [totalPages]="totalPages"
            (pageChange)="onPageChange($event)">
          </app-pagination>
        </div>
      </div>
    </div>
  `, exportAs: "paginatedTable", styles: ["/* angular:styles/component:css;49df39f9871da0d919efaa6a32336eb18e08fc1beb7ec91b926c50b24edb342f;/Users/baglan/repo/westwood/westwood-frontend/src/app/shared/components/paginated-table-wrapper/paginated-table-wrapper.component.ts */\n.paginated-wrapper {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.pagination-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem;\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n  gap: 1rem;\n}\n.pagination-left {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n  flex-wrap: wrap;\n}\n.pagination-right {\n  display: flex;\n  align-items: center;\n}\n.pagination-info {\n  font-size: 0.875rem;\n  color: #64748b;\n  font-weight: 500;\n}\n.page-size-filter-section {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.page-size-label {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #475569;\n}\n.page-size-select {\n  padding: 8px 12px;\n  border: 1px solid #cbd5e1;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  background: white;\n  color: #1f2937;\n  cursor: pointer;\n  outline: none;\n  transition: all 0.2s;\n}\n.page-size-select:hover {\n  border-color: #94a3b8;\n}\n.page-size-select:focus {\n  border-color: #16A34A;\n  box-shadow: 0 0 0 3px rgba(22, 163, 74, 0.1);\n}\n@media (max-width: 768px) {\n  .pagination-container {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 1rem;\n  }\n  .pagination-left {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 1rem;\n  }\n  .pagination-info {\n    text-align: center;\n  }\n  .page-size-filter-section {\n    justify-content: center;\n  }\n  .pagination-right {\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=paginated-table-wrapper.component.css.map */\n"] }]
  }], null, { paginationEnabled: [{
    type: Input
  }], data: [{
    type: Input
  }], defaultPageSize: [{
    type: Input
  }], paginationKey: [{
    type: Input
  }], paginatedDataChange: [{
    type: Output
  }], paginationInfoChange: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PaginatedTableWrapperComponent, { className: "PaginatedTableWrapperComponent", filePath: "src/app/shared/components/paginated-table-wrapper/paginated-table-wrapper.component.ts", lineNumber: 140 });
})();

export {
  PaginatedTableWrapperComponent
};
//# sourceMappingURL=chunk-2R6M6BSK.js.map
