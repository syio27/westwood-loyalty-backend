import {
  BehaviorSubject,
  Injectable,
  __spreadProps,
  __spreadValues,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-NKSGOSP5.js";

// src/app/core/services/page-header.service.ts
var PageHeaderService = class _PageHeaderService {
  headerDataSubject = new BehaviorSubject({
    title: "",
    breadcrumbs: []
  });
  headerData$ = this.headerDataSubject.asObservable();
  setPageHeader(title, breadcrumbs) {
    this.headerDataSubject.next({ title, breadcrumbs });
  }
  setTitle(title) {
    const current = this.headerDataSubject.value;
    this.headerDataSubject.next(__spreadProps(__spreadValues({}, current), { title }));
  }
  setBreadcrumbs(breadcrumbs) {
    const current = this.headerDataSubject.value;
    this.headerDataSubject.next(__spreadProps(__spreadValues({}, current), { breadcrumbs }));
  }
  clear() {
    this.headerDataSubject.next({ title: "", breadcrumbs: [] });
  }
  static \u0275fac = function PageHeaderService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PageHeaderService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PageHeaderService, factory: _PageHeaderService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PageHeaderService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  PageHeaderService
};
//# sourceMappingURL=chunk-AWWADESY.js.map
