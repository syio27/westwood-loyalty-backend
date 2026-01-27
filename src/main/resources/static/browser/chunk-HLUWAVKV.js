import {
  FormsModule,
  NG_VALUE_ACCESSOR
} from "./chunk-FWOTYYMW.js";
import {
  IconButtonComponent
} from "./chunk-6F7JLQXK.js";
import {
  CommonModule,
  Component,
  EventEmitter,
  Input,
  NgIf,
  Output,
  forwardRef,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
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
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-THV7WX37.js";

// src/app/shared/components/alert/alert.component.ts
var _c0 = ["*"];
function AlertComponent_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getIcon());
  }
}
function AlertComponent_div_0_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.title);
  }
}
function AlertComponent_div_0_app_icon_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-icon-button", 9);
    \u0275\u0275listener("onClick", function AlertComponent_div_0_app_icon_button_6_Template_app_icon_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onDismiss());
    });
    \u0275\u0275elementEnd();
  }
}
function AlertComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275template(1, AlertComponent_div_0_div_1_Template, 3, 1, "div", 2);
    \u0275\u0275elementStart(2, "div", 3);
    \u0275\u0275template(3, AlertComponent_div_0_div_3_Template, 2, 1, "div", 4);
    \u0275\u0275elementStart(4, "div", 5);
    \u0275\u0275projection(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, AlertComponent_div_0_app_icon_button_6_Template, 1, 0, "app-icon-button", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.getClasses());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.showIcon);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.title);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.dismissible);
  }
}
var AlertComponent = class _AlertComponent {
  type = "info";
  title = "";
  dismissible = false;
  showIcon = true;
  visible = true;
  dismissed = new EventEmitter();
  getClasses() {
    return this.type;
  }
  getIcon() {
    const icons = {
      success: "\u2713",
      info: "\u2139",
      warning: "\u26A0",
      error: "\u2715"
    };
    return icons[this.type];
  }
  onDismiss() {
    this.visible = false;
    this.dismissed.emit();
  }
  static \u0275fac = function AlertComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AlertComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AlertComponent, selectors: [["app-alert"]], inputs: { type: "type", title: "title", dismissible: "dismissible", showIcon: "showIcon", visible: "visible" }, outputs: { dismissed: "dismissed" }, ngContentSelectors: _c0, decls: 1, vars: 1, consts: [["class", "alert", 3, "class", 4, "ngIf"], [1, "alert"], ["class", "alert-icon", 4, "ngIf"], [1, "alert-content"], ["class", "alert-title", 4, "ngIf"], [1, "alert-message"], ["icon", "\u2715", "class", "alert-dismiss-button", "iconButtonType", "ghost", "size", "small", 3, "onClick", 4, "ngIf"], [1, "alert-icon"], [1, "alert-title"], ["icon", "\u2715", "iconButtonType", "ghost", "size", "small", 1, "alert-dismiss-button", 3, "onClick"]], template: function AlertComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275template(0, AlertComponent_div_0_Template, 7, 5, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.visible);
    }
  }, dependencies: [CommonModule, NgIf, IconButtonComponent], styles: ["\n\n.alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.75rem;\n  padding: 1rem;\n  border-radius: 8px;\n  border: 1px solid;\n  margin-bottom: 1rem;\n}\n.alert.success[_ngcontent-%COMP%] {\n  background-color: #f0fdf4;\n  border-color: #86efac;\n  color: #15803d;\n}\n.alert.info[_ngcontent-%COMP%] {\n  background-color: #eff6ff;\n  border-color: #93c5fd;\n  color: #1e40af;\n}\n.alert.warning[_ngcontent-%COMP%] {\n  background-color: #fffbeb;\n  border-color: #fde047;\n  color: #854d0e;\n}\n.alert.error[_ngcontent-%COMP%] {\n  background-color: #fef2f2;\n  border-color: #fca5a5;\n  color: #991b1b;\n}\n.alert-icon[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  flex-shrink: 0;\n  margin-top: 0.125rem;\n}\n.alert-content[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.alert-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.875rem;\n  margin-bottom: 0.25rem;\n}\n.alert-message[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  line-height: 1.5;\n}\n.alert-dismiss-button[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  margin-top: -0.25rem;\n  margin-right: -0.25rem;\n}\n.alert.success[_ngcontent-%COMP%]   .alert-dismiss-button[_ngcontent-%COMP%]     .icon-button {\n  color: #15803d;\n}\n.alert.success[_ngcontent-%COMP%]   .alert-dismiss-button[_ngcontent-%COMP%]     .icon-button:hover:not(:disabled) {\n  background-color: rgba(22, 163, 74, 0.1);\n  color: #15803d;\n}\n.alert.info[_ngcontent-%COMP%]   .alert-dismiss-button[_ngcontent-%COMP%]     .icon-button {\n  color: #1e40af;\n}\n.alert.info[_ngcontent-%COMP%]   .alert-dismiss-button[_ngcontent-%COMP%]     .icon-button:hover:not(:disabled) {\n  background-color: rgba(30, 64, 175, 0.1);\n  color: #1e40af;\n}\n.alert.warning[_ngcontent-%COMP%]   .alert-dismiss-button[_ngcontent-%COMP%]     .icon-button {\n  color: #854d0e;\n}\n.alert.warning[_ngcontent-%COMP%]   .alert-dismiss-button[_ngcontent-%COMP%]     .icon-button:hover:not(:disabled) {\n  background-color: rgba(133, 77, 14, 0.1);\n  color: #854d0e;\n}\n.alert.error[_ngcontent-%COMP%]   .alert-dismiss-button[_ngcontent-%COMP%]     .icon-button {\n  color: #991b1b;\n}\n.alert.error[_ngcontent-%COMP%]   .alert-dismiss-button[_ngcontent-%COMP%]     .icon-button:hover:not(:disabled) {\n  background-color: rgba(153, 27, 27, 0.1);\n  color: #991b1b;\n}\n/*# sourceMappingURL=alert.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AlertComponent, [{
    type: Component,
    args: [{ selector: "app-alert", standalone: true, imports: [CommonModule, IconButtonComponent], template: `
    <div class="alert" [class]="getClasses()" *ngIf="visible">
      <div class="alert-icon" *ngIf="showIcon">
        <span>{{ getIcon() }}</span>
      </div>
      <div class="alert-content">
        <div class="alert-title" *ngIf="title">{{ title }}</div>
        <div class="alert-message">
          <ng-content></ng-content>
        </div>
      </div>
      <app-icon-button
        *ngIf="dismissible"
        icon="\u2715"
        class="alert-dismiss-button"
        iconButtonType="ghost"
        size="small"
        (onClick)="onDismiss()">
      </app-icon-button>
    </div>
  `, styles: ["/* angular:styles/component:css;4fafd73f0078f1d94ba9466eba663aff9217b90c4fc226d3e5beea363ee0d672;/Users/baglan/repo/westwood/westwood-frontend/src/app/shared/components/alert/alert.component.ts */\n.alert {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.75rem;\n  padding: 1rem;\n  border-radius: 8px;\n  border: 1px solid;\n  margin-bottom: 1rem;\n}\n.alert.success {\n  background-color: #f0fdf4;\n  border-color: #86efac;\n  color: #15803d;\n}\n.alert.info {\n  background-color: #eff6ff;\n  border-color: #93c5fd;\n  color: #1e40af;\n}\n.alert.warning {\n  background-color: #fffbeb;\n  border-color: #fde047;\n  color: #854d0e;\n}\n.alert.error {\n  background-color: #fef2f2;\n  border-color: #fca5a5;\n  color: #991b1b;\n}\n.alert-icon {\n  font-size: 1.25rem;\n  flex-shrink: 0;\n  margin-top: 0.125rem;\n}\n.alert-content {\n  flex: 1;\n  min-width: 0;\n}\n.alert-title {\n  font-weight: 600;\n  font-size: 0.875rem;\n  margin-bottom: 0.25rem;\n}\n.alert-message {\n  font-size: 0.875rem;\n  line-height: 1.5;\n}\n.alert-dismiss-button {\n  flex-shrink: 0;\n  margin-top: -0.25rem;\n  margin-right: -0.25rem;\n}\n.alert.success .alert-dismiss-button ::ng-deep .icon-button {\n  color: #15803d;\n}\n.alert.success .alert-dismiss-button ::ng-deep .icon-button:hover:not(:disabled) {\n  background-color: rgba(22, 163, 74, 0.1);\n  color: #15803d;\n}\n.alert.info .alert-dismiss-button ::ng-deep .icon-button {\n  color: #1e40af;\n}\n.alert.info .alert-dismiss-button ::ng-deep .icon-button:hover:not(:disabled) {\n  background-color: rgba(30, 64, 175, 0.1);\n  color: #1e40af;\n}\n.alert.warning .alert-dismiss-button ::ng-deep .icon-button {\n  color: #854d0e;\n}\n.alert.warning .alert-dismiss-button ::ng-deep .icon-button:hover:not(:disabled) {\n  background-color: rgba(133, 77, 14, 0.1);\n  color: #854d0e;\n}\n.alert.error .alert-dismiss-button ::ng-deep .icon-button {\n  color: #991b1b;\n}\n.alert.error .alert-dismiss-button ::ng-deep .icon-button:hover:not(:disabled) {\n  background-color: rgba(153, 27, 27, 0.1);\n  color: #991b1b;\n}\n/*# sourceMappingURL=alert.component.css.map */\n"] }]
  }], null, { type: [{
    type: Input
  }], title: [{
    type: Input
  }], dismissible: [{
    type: Input
  }], showIcon: [{
    type: Input
  }], visible: [{
    type: Input
  }], dismissed: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AlertComponent, { className: "AlertComponent", filePath: "src/app/shared/components/alert/alert.component.ts", lineNumber: 138 });
})();

// src/app/shared/components/input/input.component.ts
function InputComponent_label_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function InputComponent_label_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 11);
    \u0275\u0275text(1);
    \u0275\u0275template(2, InputComponent_label_1_span_2_Template, 2, 0, "span", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("for", ctx_r0.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.label, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.required);
  }
}
function InputComponent_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.prefix);
  }
}
function InputComponent_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.suffix);
  }
}
function InputComponent_button_6__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 18);
    \u0275\u0275element(1, "path", 19)(2, "circle", 20);
    \u0275\u0275elementEnd();
  }
}
function InputComponent_button_6__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 18);
    \u0275\u0275element(1, "path", 21)(2, "line", 22);
    \u0275\u0275elementEnd();
  }
}
function InputComponent_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 16);
    \u0275\u0275listener("click", function InputComponent_button_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.togglePasswordVisibility());
    });
    \u0275\u0275template(1, InputComponent_button_6__svg_svg_1_Template, 3, 0, "svg", 17)(2, InputComponent_button_6__svg_svg_2_Template, 3, 0, "svg", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275attribute("aria-label", ctx_r0.showPassword ? "\u0421\u043A\u0440\u044B\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C" : "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.showPassword);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.showPassword);
  }
}
function InputComponent_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMessage);
  }
}
function InputComponent_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.hint);
  }
}
function InputComponent_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r0.value.length, " / ", ctx_r0.maxLength, " ");
  }
}
var InputComponent = class _InputComponent {
  id = "";
  label = "";
  type = "text";
  placeholder = "";
  disabled = false;
  readonly = false;
  required = false;
  errorMessage = "";
  hint = "";
  prefix = "";
  suffix = "";
  maxLength;
  showCharCount = false;
  showPasswordToggle = false;
  value = "";
  hasError = false;
  showPassword = false;
  onChange = (value) => {
  };
  onTouched = () => {
  };
  onInput(event) {
    const target = event.target;
    this.value = target.value;
    this.onChange(this.value);
    this.hasError = false;
  }
  onBlur() {
    this.onTouched();
  }
  onFocus() {
    this.hasError = false;
  }
  getErrorMessage() {
    return this.errorMessage || "";
  }
  writeValue(value) {
    this.value = value || "";
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  getInputType() {
    if (this.type === "password" && this.showPassword) {
      return "text";
    }
    return this.type;
  }
  static \u0275fac = function InputComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InputComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InputComponent, selectors: [["app-input"]], inputs: { id: "id", label: "label", type: "type", placeholder: "placeholder", disabled: "disabled", readonly: "readonly", required: "required", errorMessage: "errorMessage", hint: "hint", prefix: "prefix", suffix: "suffix", maxLength: "maxLength", showCharCount: "showCharCount", showPasswordToggle: "showPasswordToggle" }, features: [\u0275\u0275ProvidersFeature([
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _InputComponent),
      multi: true
    }
  ])], decls: 11, vars: 20, consts: [[1, "input-wrapper"], ["class", "input-label", 3, "for", 4, "ngIf"], [1, "input-container"], ["class", "input-prefix", 4, "ngIf"], [3, "input", "blur", "focus", "id", "type", "placeholder", "value", "disabled", "readonly"], ["class", "input-suffix", 4, "ngIf"], ["type", "button", "class", "password-toggle-btn", 3, "click", 4, "ngIf"], [1, "input-footer"], ["class", "error-message", 4, "ngIf"], ["class", "hint-message", 4, "ngIf"], ["class", "char-count", 4, "ngIf"], [1, "input-label", 3, "for"], ["class", "required-mark", 4, "ngIf"], [1, "required-mark"], [1, "input-prefix"], [1, "input-suffix"], ["type", "button", 1, "password-toggle-btn", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "class", "eye-icon", 4, "ngIf"], ["viewBox", "0 0 24 24", "fill", "none", 1, "eye-icon"], ["d", "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["cx", "12", "cy", "12", "r", "3", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["x1", "1", "y1", "1", "x2", "23", "y2", "23", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "error-message"], [1, "hint-message"], [1, "char-count"]], template: function InputComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, InputComponent_label_1_Template, 3, 3, "label", 1);
      \u0275\u0275elementStart(2, "div", 2);
      \u0275\u0275template(3, InputComponent_span_3_Template, 2, 1, "span", 3);
      \u0275\u0275elementStart(4, "input", 4);
      \u0275\u0275listener("input", function InputComponent_Template_input_input_4_listener($event) {
        return ctx.onInput($event);
      })("blur", function InputComponent_Template_input_blur_4_listener() {
        return ctx.onBlur();
      })("focus", function InputComponent_Template_input_focus_4_listener() {
        return ctx.onFocus();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(5, InputComponent_span_5_Template, 2, 1, "span", 5)(6, InputComponent_button_6_Template, 3, 3, "button", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 7);
      \u0275\u0275template(8, InputComponent_span_8_Template, 2, 1, "span", 8)(9, InputComponent_span_9_Template, 2, 1, "span", 9)(10, InputComponent_span_10_Template, 2, 2, "span", 10);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.label);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.prefix);
      \u0275\u0275advance();
      \u0275\u0275classProp("error", ctx.hasError || !!ctx.errorMessage)("has-prefix", ctx.prefix)("has-suffix", ctx.suffix || ctx.showPasswordToggle && ctx.type === "password");
      \u0275\u0275property("id", ctx.id)("type", ctx.getInputType())("placeholder", ctx.placeholder)("value", ctx.value)("disabled", ctx.disabled)("readonly", ctx.readonly);
      \u0275\u0275attribute("maxlength", ctx.maxLength);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.suffix);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showPasswordToggle && ctx.type === "password");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hint && !ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.maxLength && ctx.showCharCount);
    }
  }, dependencies: [CommonModule, NgIf, FormsModule], styles: ["\n\n.input-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  width: 100%;\n}\n.input-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 0.875rem;\n  color: #1a202c;\n}\n.required-mark[_ngcontent-%COMP%] {\n  color: #dc3545;\n  margin-left: 0.25rem;\n}\n.input-container[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\ninput[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.625rem 0.875rem;\n  border: 1px solid #cbd5e1;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  transition: all 0.2s ease;\n  background-color: #ffffff;\n  color: #1a202c;\n}\ninput[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #007bff;\n  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);\n}\ninput.error[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n}\ninput.error[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 3px rgba(220, 53, 69, 0.1);\n}\ninput[_ngcontent-%COMP%]:disabled {\n  background-color: #f8f9fa;\n  color: #94a3b8;\n  cursor: not-allowed;\n}\ninput.readonly[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  cursor: default;\n}\ninput.has-prefix[_ngcontent-%COMP%] {\n  padding-left: 2.5rem;\n}\ninput.has-suffix[_ngcontent-%COMP%] {\n  padding-right: 2.5rem;\n}\n.input-prefix[_ngcontent-%COMP%], \n.input-suffix[_ngcontent-%COMP%] {\n  position: absolute;\n  color: #64748b;\n  font-size: 0.875rem;\n  pointer-events: none;\n}\n.input-prefix[_ngcontent-%COMP%] {\n  left: 0.875rem;\n}\n.input-suffix[_ngcontent-%COMP%] {\n  right: 0.875rem;\n}\n.password-toggle-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0.75rem;\n  background: none;\n  border: none;\n  padding: 0.25rem;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #64748b;\n  transition: color 0.2s ease;\n  z-index: 1;\n}\n.password-toggle-btn[_ngcontent-%COMP%]:hover {\n  color: #1a202c;\n}\n.password-toggle-btn[_ngcontent-%COMP%]:focus {\n  outline: none;\n  color: #15803d;\n}\n.eye-icon[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  display: block;\n}\n.input-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  min-height: 1.25rem;\n}\n.error-message[_ngcontent-%COMP%] {\n  color: #dc3545;\n  font-size: 0.75rem;\n}\n.hint-message[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 0.75rem;\n}\n.char-count[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  font-size: 0.75rem;\n  margin-left: auto;\n}\n/*# sourceMappingURL=input.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputComponent, [{
    type: Component,
    args: [{ selector: "app-input", standalone: true, imports: [CommonModule, FormsModule], providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => InputComponent),
        multi: true
      }
    ], template: `
    <div class="input-wrapper">
      <label *ngIf="label" [for]="id" class="input-label">
        {{ label }}
        <span *ngIf="required" class="required-mark">*</span>
      </label>
      <div class="input-container">
        <span *ngIf="prefix" class="input-prefix">{{ prefix }}</span>
        <input
          [id]="id"
          [type]="getInputType()"
          [placeholder]="placeholder"
          [value]="value"
          [disabled]="disabled"
          [readonly]="readonly"
          [attr.maxlength]="maxLength"
          (input)="onInput($event)"
          (blur)="onBlur()"
          (focus)="onFocus()"
          [class.error]="hasError || !!errorMessage"
          [class.has-prefix]="prefix"
          [class.has-suffix]="suffix || (showPasswordToggle && type === 'password')"
        />
        <span *ngIf="suffix" class="input-suffix">{{ suffix }}</span>
        <button
          *ngIf="showPasswordToggle && type === 'password'"
          type="button"
          class="password-toggle-btn"
          (click)="togglePasswordVisibility()"
          [attr.aria-label]="showPassword ? '\u0421\u043A\u0440\u044B\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C' : '\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C'">
          <svg *ngIf="!showPassword" viewBox="0 0 24 24" fill="none" class="eye-icon">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <svg *ngIf="showPassword" viewBox="0 0 24 24" fill="none" class="eye-icon">
            <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <line x1="1" y1="1" x2="23" y2="23" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
      <div class="input-footer">
        <span *ngIf="errorMessage" class="error-message">{{ errorMessage }}</span>
        <span *ngIf="hint && !errorMessage" class="hint-message">{{ hint }}</span>
        <span *ngIf="maxLength && showCharCount" class="char-count">
          {{ value.length }} / {{ maxLength }}
        </span>
      </div>
    </div>
  `, styles: ["/* angular:styles/component:css;a94fa5395943206b1b29fa760adc373abc5792c86046f2bc071f72544aa3c190;/Users/baglan/repo/westwood/westwood-frontend/src/app/shared/components/input/input.component.ts */\n.input-wrapper {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  width: 100%;\n}\n.input-label {\n  font-weight: 500;\n  font-size: 0.875rem;\n  color: #1a202c;\n}\n.required-mark {\n  color: #dc3545;\n  margin-left: 0.25rem;\n}\n.input-container {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\ninput {\n  width: 100%;\n  padding: 0.625rem 0.875rem;\n  border: 1px solid #cbd5e1;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  transition: all 0.2s ease;\n  background-color: #ffffff;\n  color: #1a202c;\n}\ninput:focus {\n  outline: none;\n  border-color: #007bff;\n  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);\n}\ninput.error {\n  border-color: #dc3545;\n}\ninput.error:focus {\n  box-shadow: 0 0 0 3px rgba(220, 53, 69, 0.1);\n}\ninput:disabled {\n  background-color: #f8f9fa;\n  color: #94a3b8;\n  cursor: not-allowed;\n}\ninput.readonly {\n  background-color: #f8f9fa;\n  cursor: default;\n}\ninput.has-prefix {\n  padding-left: 2.5rem;\n}\ninput.has-suffix {\n  padding-right: 2.5rem;\n}\n.input-prefix,\n.input-suffix {\n  position: absolute;\n  color: #64748b;\n  font-size: 0.875rem;\n  pointer-events: none;\n}\n.input-prefix {\n  left: 0.875rem;\n}\n.input-suffix {\n  right: 0.875rem;\n}\n.password-toggle-btn {\n  position: absolute;\n  right: 0.75rem;\n  background: none;\n  border: none;\n  padding: 0.25rem;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #64748b;\n  transition: color 0.2s ease;\n  z-index: 1;\n}\n.password-toggle-btn:hover {\n  color: #1a202c;\n}\n.password-toggle-btn:focus {\n  outline: none;\n  color: #15803d;\n}\n.eye-icon {\n  width: 20px;\n  height: 20px;\n  display: block;\n}\n.input-footer {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  min-height: 1.25rem;\n}\n.error-message {\n  color: #dc3545;\n  font-size: 0.75rem;\n}\n.hint-message {\n  color: #64748b;\n  font-size: 0.75rem;\n}\n.char-count {\n  color: #94a3b8;\n  font-size: 0.75rem;\n  margin-left: auto;\n}\n/*# sourceMappingURL=input.component.css.map */\n"] }]
  }], null, { id: [{
    type: Input
  }], label: [{
    type: Input
  }], type: [{
    type: Input
  }], placeholder: [{
    type: Input
  }], disabled: [{
    type: Input
  }], readonly: [{
    type: Input
  }], required: [{
    type: Input
  }], errorMessage: [{
    type: Input
  }], hint: [{
    type: Input
  }], prefix: [{
    type: Input
  }], suffix: [{
    type: Input
  }], maxLength: [{
    type: Input
  }], showCharCount: [{
    type: Input
  }], showPasswordToggle: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InputComponent, { className: "InputComponent", filePath: "src/app/shared/components/input/input.component.ts", lineNumber: 204 });
})();

export {
  AlertComponent,
  InputComponent
};
//# sourceMappingURL=chunk-HLUWAVKV.js.map
