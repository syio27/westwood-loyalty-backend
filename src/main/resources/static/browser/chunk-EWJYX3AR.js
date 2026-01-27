import {
  BehaviorSubject,
  CommonModule,
  Component,
  EventEmitter,
  Injectable,
  Input,
  NgIf,
  Output,
  __spreadProps,
  __spreadValues,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-THV7WX37.js";

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

// src/app/shared/components/modal/modal.component.ts
var _c0 = ["*", [["", "modalFooter", ""]]];
var _c1 = ["*", "[modalFooter]"];
function ModalComponent_div_0_div_2_h3_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.title);
  }
}
function ModalComponent_div_0_div_2_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275listener("click", function ModalComponent_div_0_div_2_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.onClose());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 11);
    \u0275\u0275element(2, "path", 12);
    \u0275\u0275elementEnd()();
  }
}
function ModalComponent_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275template(1, ModalComponent_div_0_div_2_h3_1_Template, 2, 1, "h3", 7)(2, ModalComponent_div_0_div_2_button_2_Template, 3, 0, "button", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.showCloseButton);
  }
}
function ModalComponent_div_0_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275projection(1, 1);
    \u0275\u0275elementEnd();
  }
}
function ModalComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2);
    \u0275\u0275template(2, ModalComponent_div_0_div_2_Template, 3, 2, "div", 3);
    \u0275\u0275elementStart(3, "div", 4);
    \u0275\u0275projection(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, ModalComponent_div_0_div_5_Template, 2, 0, "div", 5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("show", ctx_r0.visible);
    \u0275\u0275advance();
    \u0275\u0275classProp("small", ctx_r0.size === "small")("large", ctx_r0.size === "large");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.title || ctx_r0.showCloseButton);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.showFooter);
  }
}
var ModalComponent = class _ModalComponent {
  visible = false;
  title = "";
  showCloseButton = true;
  showFooter = false;
  size = "medium";
  /** @deprecated No longer used - modals only close via close button */
  closeOnOverlayClick = false;
  /** @deprecated No longer used - all modals are now "important" by default */
  important = true;
  closed = new EventEmitter();
  visibleChange = new EventEmitter();
  onClose() {
    this.visible = false;
    this.visibleChange.emit(false);
    this.closed.emit();
  }
  static \u0275fac = function ModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ModalComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ModalComponent, selectors: [["app-modal"]], inputs: { visible: "visible", title: "title", showCloseButton: "showCloseButton", showFooter: "showFooter", size: "size", closeOnOverlayClick: "closeOnOverlayClick", important: "important" }, outputs: { closed: "closed", visibleChange: "visibleChange" }, ngContentSelectors: _c1, decls: 1, vars: 1, consts: [["class", "modal-overlay", 3, "show", 4, "ngIf"], [1, "modal-overlay"], [1, "modal-container"], ["class", "modal-header", 4, "ngIf"], [1, "modal-body"], ["class", "modal-footer", 4, "ngIf"], [1, "modal-header"], ["class", "modal-title", 4, "ngIf"], ["class", "close-btn", "type", "button", "aria-label", "\u0417\u0430\u043A\u0440\u044B\u0442\u044C", 3, "click", 4, "ngIf"], [1, "modal-title"], ["type", "button", "aria-label", "\u0417\u0430\u043A\u0440\u044B\u0442\u044C", 1, "close-btn", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none"], ["d", "M18 6L6 18M6 6l12 12", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "modal-footer"]], template: function ModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef(_c0);
      \u0275\u0275template(0, ModalComponent_div_0_Template, 6, 8, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.visible);
    }
  }, dependencies: [CommonModule, NgIf], styles: ["\n\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 10000;\n  opacity: 0;\n  transition: opacity 0.2s ease;\n  backdrop-filter: blur(4px);\n}\n.modal-overlay.show[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.modal-container[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  border-radius: 12px;\n  width: 90%;\n  max-width: 500px;\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);\n  transform: scale(0.95);\n  transition: transform 0.2s ease;\n}\n.modal-overlay.show[_ngcontent-%COMP%]   .modal-container[_ngcontent-%COMP%] {\n  transform: scale(1);\n}\n.modal-container.small[_ngcontent-%COMP%] {\n  max-width: 400px;\n}\n.modal-container.large[_ngcontent-%COMP%] {\n  max-width: 800px;\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1.5rem;\n  border-bottom: 1px solid #e2e8f0;\n}\n.modal-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1a202c;\n}\n.close-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 30px;\n  border: none;\n  background: #f3f4f6;\n  border-radius: 10px;\n  cursor: pointer;\n  color: #6b7280;\n  transition: all 0.2s ease;\n  flex-shrink: 0;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.close-btn[_ngcontent-%COMP%]:active {\n  transform: scale(0.95);\n}\n.close-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  overflow-y: auto;\n  flex: 1;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  border-top: 1px solid #e2e8f0;\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.75rem;\n}\n/*# sourceMappingURL=modal.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ModalComponent, [{
    type: Component,
    args: [{ selector: "app-modal", standalone: true, imports: [CommonModule], template: `
    <div class="modal-overlay" *ngIf="visible" [class.show]="visible">
      <div class="modal-container" [class.small]="size === 'small'" [class.large]="size === 'large'">
        <div class="modal-header" *ngIf="title || showCloseButton">
          <h3 class="modal-title" *ngIf="title">{{ title }}</h3>
          <button 
            *ngIf="showCloseButton"
            class="close-btn"
            type="button"
            (click)="onClose()"
            aria-label="\u0417\u0430\u043A\u0440\u044B\u0442\u044C">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
        <div class="modal-body">
          <ng-content></ng-content>
        </div>
        <div class="modal-footer" *ngIf="showFooter">
          <ng-content select="[modalFooter]"></ng-content>
        </div>
      </div>
    </div>
  `, styles: ["/* angular:styles/component:css;bd3e55f369cd191ed382b1d22b8de93dda2698e5086c98dcc842de016bdb01d1;/Users/baglan/repo/westwood/westwood-frontend/src/app/shared/components/modal/modal.component.ts */\n.modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 10000;\n  opacity: 0;\n  transition: opacity 0.2s ease;\n  backdrop-filter: blur(4px);\n}\n.modal-overlay.show {\n  opacity: 1;\n}\n.modal-container {\n  background-color: #ffffff;\n  border-radius: 12px;\n  width: 90%;\n  max-width: 500px;\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);\n  transform: scale(0.95);\n  transition: transform 0.2s ease;\n}\n.modal-overlay.show .modal-container {\n  transform: scale(1);\n}\n.modal-container.small {\n  max-width: 400px;\n}\n.modal-container.large {\n  max-width: 800px;\n}\n.modal-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1.5rem;\n  border-bottom: 1px solid #e2e8f0;\n}\n.modal-title {\n  margin: 0;\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1a202c;\n}\n.close-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 30px;\n  border: none;\n  background: #f3f4f6;\n  border-radius: 10px;\n  cursor: pointer;\n  color: #6b7280;\n  transition: all 0.2s ease;\n  flex-shrink: 0;\n}\n.close-btn:hover {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.close-btn:active {\n  transform: scale(0.95);\n}\n.close-btn svg {\n  width: 20px;\n  height: 20px;\n}\n.modal-body {\n  padding: 1.5rem;\n  overflow-y: auto;\n  flex: 1;\n}\n.modal-footer {\n  padding: 1.5rem;\n  border-top: 1px solid #e2e8f0;\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.75rem;\n}\n/*# sourceMappingURL=modal.component.css.map */\n"] }]
  }], null, { visible: [{
    type: Input
  }], title: [{
    type: Input
  }], showCloseButton: [{
    type: Input
  }], showFooter: [{
    type: Input
  }], size: [{
    type: Input
  }], closeOnOverlayClick: [{
    type: Input
  }], important: [{
    type: Input
  }], closed: [{
    type: Output
  }], visibleChange: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ModalComponent, { className: "ModalComponent", filePath: "src/app/shared/components/modal/modal.component.ts", lineNumber: 138 });
})();

export {
  PageHeaderService,
  ModalComponent
};
//# sourceMappingURL=chunk-EWJYX3AR.js.map
