import {
  CommonModule,
  Component,
  EventEmitter,
  Input,
  NgIf,
  Output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext
} from "./chunk-NKSGOSP5.js";

// src/app/shared/components/button/button.component.ts
var _c0 = ["*"];
function ButtonComponent_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 2);
    \u0275\u0275text(1, "\u27F3");
    \u0275\u0275elementEnd();
  }
}
var ButtonComponent = class _ButtonComponent {
  buttonType = "primary";
  size = "medium";
  disabled = false;
  loading = false;
  type = "button";
  tooltip = "";
  onClick = new EventEmitter();
  getButtonClasses() {
    return `${this.buttonType} ${this.size}`;
  }
  static \u0275fac = function ButtonComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ButtonComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ButtonComponent, selectors: [["app-button"]], inputs: { buttonType: "buttonType", size: "size", disabled: "disabled", loading: "loading", type: "type", tooltip: "tooltip" }, outputs: { onClick: "onClick" }, ngContentSelectors: _c0, decls: 3, vars: 6, consts: [[3, "click", "disabled", "type", "title"], ["class", "button-spinner", 4, "ngIf"], [1, "button-spinner"]], template: function ButtonComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275elementStart(0, "button", 0);
      \u0275\u0275listener("click", function ButtonComponent_Template_button_click_0_listener($event) {
        return ctx.onClick.emit($event);
      });
      \u0275\u0275template(1, ButtonComponent_span_1_Template, 2, 0, "span", 1);
      \u0275\u0275projection(2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classMap(ctx.getButtonClasses());
      \u0275\u0275property("disabled", ctx.disabled || ctx.loading)("type", ctx.type)("title", ctx.tooltip);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
    }
  }, dependencies: [CommonModule, NgIf], styles: ["\n\nbutton[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  padding: 0.625rem 1.25rem;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  font-weight: 500;\n  font-size: 0.875rem;\n  transition: all 0.2s ease;\n  white-space: nowrap;\n}\nbutton[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  flex-shrink: 0;\n  display: block;\n}\nbutton.small[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\nbutton[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\nbutton.primary[_ngcontent-%COMP%] {\n  background-color: var(--primary-color, #16A34A);\n  color: #ffffff;\n}\nbutton.primary-outline[_ngcontent-%COMP%] {\n  background-color: #16A34A;\n  border: 1.5px solid #16A34A;\n  color: #ffffff;\n}\nbutton.primary-outline[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #15803d;\n  border-color: #15803d;\n}\nbutton.secondary[_ngcontent-%COMP%] {\n  background-color: #6c757d;\n  color: #ffffff;\n}\nbutton.danger[_ngcontent-%COMP%] {\n  background-color: #dc3545;\n  color: #ffffff;\n}\nbutton.danger-outline[_ngcontent-%COMP%] {\n  background-color: #fef2f2;\n  border: 1.5px solid #fecaca;\n  color: #dc2626;\n}\nbutton.danger-outline[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #fee2e2;\n  border-color: #fca5a5;\n}\nbutton.success[_ngcontent-%COMP%] {\n  background-color: #28a745;\n  color: #ffffff;\n}\nbutton.outline[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border: 1px solid var(--primary-color, #007bff);\n  color: var(--primary-color, #007bff);\n}\nbutton.ghost[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: #64748b;\n}\nbutton.small[_ngcontent-%COMP%] {\n  padding: 0.375rem 0.75rem;\n  font-size: 0.75rem;\n}\nbutton.large[_ngcontent-%COMP%] {\n  padding: 0.875rem 1.75rem;\n  font-size: 1rem;\n}\n.button-spinner[_ngcontent-%COMP%] {\n  display: inline-block;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=button.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonComponent, [{
    type: Component,
    args: [{ selector: "app-button", standalone: true, imports: [CommonModule], template: `
    <button
      [class]="getButtonClasses()"
      [disabled]="disabled || loading"
      [type]="type"
      [title]="tooltip"
      (click)="onClick.emit($event)"
    >
      <span *ngIf="loading" class="button-spinner">\u27F3</span>
      <ng-content></ng-content>
    </button>
  `, styles: ["/* angular:styles/component:css;35147d500fc777ab35cf5ae5fcccd05c0582c2104150478deeef0eddfe1b3dc1;/Users/baglan/repo/westwood/westwood-frontend/src/app/shared/components/button/button.component.ts */\nbutton {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  padding: 0.625rem 1.25rem;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  font-weight: 500;\n  font-size: 0.875rem;\n  transition: all 0.2s ease;\n  white-space: nowrap;\n}\nbutton svg {\n  width: 18px;\n  height: 18px;\n  flex-shrink: 0;\n  display: block;\n}\nbutton.small svg {\n  width: 16px;\n  height: 16px;\n}\nbutton:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\nbutton.primary {\n  background-color: var(--primary-color, #16A34A);\n  color: #ffffff;\n}\nbutton.primary-outline {\n  background-color: #16A34A;\n  border: 1.5px solid #16A34A;\n  color: #ffffff;\n}\nbutton.primary-outline:hover:not(:disabled) {\n  background-color: #15803d;\n  border-color: #15803d;\n}\nbutton.secondary {\n  background-color: #6c757d;\n  color: #ffffff;\n}\nbutton.danger {\n  background-color: #dc3545;\n  color: #ffffff;\n}\nbutton.danger-outline {\n  background-color: #fef2f2;\n  border: 1.5px solid #fecaca;\n  color: #dc2626;\n}\nbutton.danger-outline:hover:not(:disabled) {\n  background-color: #fee2e2;\n  border-color: #fca5a5;\n}\nbutton.success {\n  background-color: #28a745;\n  color: #ffffff;\n}\nbutton.outline {\n  background-color: transparent;\n  border: 1px solid var(--primary-color, #007bff);\n  color: var(--primary-color, #007bff);\n}\nbutton.ghost {\n  background-color: transparent;\n  color: #64748b;\n}\nbutton.small {\n  padding: 0.375rem 0.75rem;\n  font-size: 0.75rem;\n}\nbutton.large {\n  padding: 0.875rem 1.75rem;\n  font-size: 1rem;\n}\n.button-spinner {\n  display: inline-block;\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=button.component.css.map */\n"] }]
  }], null, { buttonType: [{
    type: Input
  }], size: [{
    type: Input
  }], disabled: [{
    type: Input
  }], loading: [{
    type: Input
  }], type: [{
    type: Input
  }], tooltip: [{
    type: Input
  }], onClick: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ButtonComponent, { className: "ButtonComponent", filePath: "src/app/shared/components/button/button.component.ts", lineNumber: 130 });
})();

export {
  ButtonComponent
};
//# sourceMappingURL=chunk-H6VMPPNV.js.map
