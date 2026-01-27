import {
  CommonModule,
  Component,
  EventEmitter,
  Input,
  NgIf,
  Output,
  ViewEncapsulation,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-MTXXT26T.js";

// src/app/shared/components/icon-button/icon-button.component.ts
var _c0 = ["*"];
function IconButtonComponent_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.icon);
  }
}
var IconButtonComponent = class _IconButtonComponent {
  icon = "";
  iconButtonType = "ghost";
  size = "medium";
  disabled = false;
  type = "button";
  tooltip = "";
  onClick = new EventEmitter();
  getButtonClasses() {
    return `${this.iconButtonType} ${this.size}`;
  }
  static \u0275fac = function IconButtonComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IconButtonComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _IconButtonComponent, selectors: [["app-icon-button"]], inputs: { icon: "icon", iconButtonType: "iconButtonType", size: "size", disabled: "disabled", type: "type", tooltip: "tooltip" }, outputs: { onClick: "onClick" }, ngContentSelectors: _c0, decls: 4, vars: 6, consts: [[1, "icon-button", 3, "click", "disabled", "type", "title"], [1, "icon-content"], [4, "ngIf"]], template: function IconButtonComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275elementStart(0, "button", 0);
      \u0275\u0275listener("click", function IconButtonComponent_Template_button_click_0_listener($event) {
        return ctx.onClick.emit($event);
      });
      \u0275\u0275elementStart(1, "span", 1);
      \u0275\u0275projection(2);
      \u0275\u0275template(3, IconButtonComponent_span_3_Template, 2, 1, "span", 2);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275classMap(ctx.getButtonClasses());
      \u0275\u0275property("disabled", ctx.disabled)("type", ctx.type)("title", ctx.tooltip);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.icon);
    }
  }, dependencies: [CommonModule, NgIf], styles: ["/* angular:styles/component:css;9860d2d17d134eb089186b9784525c908c6bc5f35578a77c4b1a8728764e80d7;/Users/baglan/repo/westwood/westwood-frontend/src/app/shared/components/icon-button/icon-button.component.ts */\napp-icon-button .icon-button {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.15s;\n  background: white;\n  color: rgb(0, 61, 146);\n  width: 32px;\n  height: 32px;\n  padding: 0;\n}\napp-icon-button .icon-button:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\napp-icon-button .icon-button.small {\n  width: 28px;\n  height: 28px;\n}\napp-icon-button .icon-button.large {\n  width: 40px;\n  height: 40px;\n}\napp-icon-button .icon-content {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n}\napp-icon-button svg {\n  width: 16px;\n  height: 16px;\n  display: block;\n  flex-shrink: 0;\n}\napp-icon-button svg path,\napp-icon-button svg circle,\napp-icon-button svg rect,\napp-icon-button svg line {\n  stroke: currentColor !important;\n}\napp-icon-button .icon-button.small svg {\n  width: 14px;\n  height: 14px;\n}\napp-icon-button .icon-button.large svg {\n  width: 20px;\n  height: 20px;\n}\napp-icon-button .icon-button.primary {\n  background-color: var(--primary-color, #007bff);\n  color: #ffffff;\n}\napp-icon-button .icon-button.primary:hover:not(:disabled) {\n  background-color: var(--primary-color-hover, #0056b3);\n}\napp-icon-button .icon-button.secondary {\n  background-color: #6c757d;\n  color: #ffffff;\n}\napp-icon-button .icon-button.secondary:hover:not(:disabled) {\n  background-color: #545b62;\n}\napp-icon-button .icon-button.danger {\n  background-color: #dc3545;\n  color: #ffffff;\n}\napp-icon-button .icon-button.danger:hover:not(:disabled) {\n  background-color: #c82333;\n}\napp-icon-button .icon-button.ghost {\n  background-color: transparent;\n  border: none;\n  color: #64748b;\n}\napp-icon-button .icon-button.ghost:hover:not(:disabled) {\n  background-color: #f1f5f9;\n  color: #1a202c;\n}\napp-icon-button .icon-button.outline {\n  background-color: transparent;\n  border: 1px solid #cbd5e1;\n  color: #64748b;\n}\napp-icon-button .icon-button.outline:hover:not(:disabled) {\n  background-color: #f8f9fa;\n  border-color: var(--primary-color, #007bff);\n  color: var(--primary-color, #007bff);\n}\napp-icon-button .icon-button.view {\n  background: white;\n  border: 1px solid #e2e8f0;\n  color: #64748b;\n}\napp-icon-button .icon-button.view:hover:not(:disabled) {\n  background: #f0fdf4;\n  border-color: #bbf7d0;\n  color: #16A34A;\n}\napp-icon-button .icon-button.refund {\n  background: white;\n  border: 1px solid #e2e8f0;\n  color: #64748b;\n}\napp-icon-button .icon-button.refund:hover:not(:disabled) {\n  background: #fef2f2;\n  border-color: #fecaca;\n  color: #dc2626;\n}\napp-icon-button .icon-button.refund:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\napp-icon-button .icon-button.edit {\n  background: white;\n  border: 1px solid #e2e8f0;\n  color: #64748b;\n}\napp-icon-button .icon-button.edit:hover:not(:disabled) {\n  background: #f0fdf4;\n  border-color: #bbf7d0;\n  color: #16A34A;\n}\n/*# sourceMappingURL=icon-button.component.css.map */\n"], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IconButtonComponent, [{
    type: Component,
    args: [{ selector: "app-icon-button", standalone: true, imports: [CommonModule], encapsulation: ViewEncapsulation.None, template: `
    <button
      class="icon-button"
      [class]="getButtonClasses()"
      [disabled]="disabled"
      [type]="type"
      [title]="tooltip"
      (click)="onClick.emit($event)"
    >
      <span class="icon-content">
        <ng-content></ng-content>
        <span *ngIf="icon">{{ icon }}</span>
      </span>
    </button>
  `, styles: ["/* angular:styles/component:css;9860d2d17d134eb089186b9784525c908c6bc5f35578a77c4b1a8728764e80d7;/Users/baglan/repo/westwood/westwood-frontend/src/app/shared/components/icon-button/icon-button.component.ts */\napp-icon-button .icon-button {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.15s;\n  background: white;\n  color: rgb(0, 61, 146);\n  width: 32px;\n  height: 32px;\n  padding: 0;\n}\napp-icon-button .icon-button:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\napp-icon-button .icon-button.small {\n  width: 28px;\n  height: 28px;\n}\napp-icon-button .icon-button.large {\n  width: 40px;\n  height: 40px;\n}\napp-icon-button .icon-content {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n}\napp-icon-button svg {\n  width: 16px;\n  height: 16px;\n  display: block;\n  flex-shrink: 0;\n}\napp-icon-button svg path,\napp-icon-button svg circle,\napp-icon-button svg rect,\napp-icon-button svg line {\n  stroke: currentColor !important;\n}\napp-icon-button .icon-button.small svg {\n  width: 14px;\n  height: 14px;\n}\napp-icon-button .icon-button.large svg {\n  width: 20px;\n  height: 20px;\n}\napp-icon-button .icon-button.primary {\n  background-color: var(--primary-color, #007bff);\n  color: #ffffff;\n}\napp-icon-button .icon-button.primary:hover:not(:disabled) {\n  background-color: var(--primary-color-hover, #0056b3);\n}\napp-icon-button .icon-button.secondary {\n  background-color: #6c757d;\n  color: #ffffff;\n}\napp-icon-button .icon-button.secondary:hover:not(:disabled) {\n  background-color: #545b62;\n}\napp-icon-button .icon-button.danger {\n  background-color: #dc3545;\n  color: #ffffff;\n}\napp-icon-button .icon-button.danger:hover:not(:disabled) {\n  background-color: #c82333;\n}\napp-icon-button .icon-button.ghost {\n  background-color: transparent;\n  border: none;\n  color: #64748b;\n}\napp-icon-button .icon-button.ghost:hover:not(:disabled) {\n  background-color: #f1f5f9;\n  color: #1a202c;\n}\napp-icon-button .icon-button.outline {\n  background-color: transparent;\n  border: 1px solid #cbd5e1;\n  color: #64748b;\n}\napp-icon-button .icon-button.outline:hover:not(:disabled) {\n  background-color: #f8f9fa;\n  border-color: var(--primary-color, #007bff);\n  color: var(--primary-color, #007bff);\n}\napp-icon-button .icon-button.view {\n  background: white;\n  border: 1px solid #e2e8f0;\n  color: #64748b;\n}\napp-icon-button .icon-button.view:hover:not(:disabled) {\n  background: #f0fdf4;\n  border-color: #bbf7d0;\n  color: #16A34A;\n}\napp-icon-button .icon-button.refund {\n  background: white;\n  border: 1px solid #e2e8f0;\n  color: #64748b;\n}\napp-icon-button .icon-button.refund:hover:not(:disabled) {\n  background: #fef2f2;\n  border-color: #fecaca;\n  color: #dc2626;\n}\napp-icon-button .icon-button.refund:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\napp-icon-button .icon-button.edit {\n  background: white;\n  border: 1px solid #e2e8f0;\n  color: #64748b;\n}\napp-icon-button .icon-button.edit:hover:not(:disabled) {\n  background: #f0fdf4;\n  border-color: #bbf7d0;\n  color: #16A34A;\n}\n/*# sourceMappingURL=icon-button.component.css.map */\n"] }]
  }], null, { icon: [{
    type: Input
  }], iconButtonType: [{
    type: Input
  }], size: [{
    type: Input
  }], disabled: [{
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(IconButtonComponent, { className: "IconButtonComponent", filePath: "src/app/shared/components/icon-button/icon-button.component.ts", lineNumber: 182 });
})();

export {
  IconButtonComponent
};
//# sourceMappingURL=chunk-2T4DCDN7.js.map
