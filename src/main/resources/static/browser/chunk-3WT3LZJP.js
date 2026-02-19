import {
  FormsModule,
  NG_VALUE_ACCESSOR
} from "./chunk-7NMYMP3Z.js";
import {
  CommonModule,
  Component,
  ElementRef,
  HostListener,
  Input,
  NgForOf,
  NgIf,
  forwardRef,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-NKSGOSP5.js";

// src/app/shared/components/select/select.component.ts
function SelectComponent_label_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function SelectComponent_label_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 8);
    \u0275\u0275text(1);
    \u0275\u0275template(2, SelectComponent_label_1_span_2_Template, 2, 0, "span", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.label, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.required);
  }
}
function SelectComponent_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275listener("click", function SelectComponent_div_7_div_1_Template_div_click_0_listener($event) {
      const option_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.selectOption(option_r3, $event));
    })("mouseenter", function SelectComponent_div_7_div_1_Template_div_mouseenter_0_listener() {
      const i_r4 = \u0275\u0275restoreView(_r2).index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.highlightedIndex = i_r4);
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected", option_r3.value === ctx_r0.value)("disabled", option_r3.disabled)("highlighted", ctx_r0.highlightedIndex === i_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r3.label, " ");
  }
}
function SelectComponent_div_7_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1, "No options");
    \u0275\u0275elementEnd();
  }
}
function SelectComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275template(1, SelectComponent_div_7_div_1_Template, 2, 7, "div", 12)(2, SelectComponent_div_7_div_2_Template, 2, 0, "div", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.options);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.options.length === 0);
  }
}
function SelectComponent_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMessage);
  }
}
var SelectComponent = class _SelectComponent {
  elementRef;
  id = "";
  label = "";
  placeholder = "";
  options = [];
  disabled = false;
  required = false;
  errorMessage = "";
  value = "";
  isOpen = false;
  highlightedIndex = -1;
  onChangeFn = (value) => {
  };
  onTouchedFn = () => {
  };
  constructor(elementRef) {
    this.elementRef = elementRef;
  }
  get selectedLabel() {
    const found = this.options.find((o) => o.value === this.value);
    return found ? found.label : "";
  }
  toggle() {
    if (this.disabled)
      return;
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      const idx = this.options.findIndex((o) => o.value === this.value);
      this.highlightedIndex = idx >= 0 ? idx : 0;
    }
  }
  selectOption(option, event) {
    event.stopPropagation();
    if (option.disabled)
      return;
    this.value = option.value;
    this.onChangeFn(this.value);
    this.isOpen = false;
  }
  onKeydown(event) {
    if (this.disabled)
      return;
    switch (event.key) {
      case "Enter":
      case " ":
        event.preventDefault();
        if (this.isOpen && this.highlightedIndex >= 0) {
          const opt = this.options[this.highlightedIndex];
          if (opt && !opt.disabled) {
            this.selectOption(opt, event);
          }
        } else {
          this.toggle();
        }
        break;
      case "ArrowDown":
        event.preventDefault();
        if (!this.isOpen) {
          this.isOpen = true;
        }
        this.moveHighlight(1);
        break;
      case "ArrowUp":
        event.preventDefault();
        this.moveHighlight(-1);
        break;
      case "Escape":
        this.isOpen = false;
        break;
    }
  }
  moveHighlight(direction) {
    let next = this.highlightedIndex + direction;
    while (next >= 0 && next < this.options.length && this.options[next].disabled) {
      next += direction;
    }
    if (next >= 0 && next < this.options.length) {
      this.highlightedIndex = next;
    }
  }
  onBlurTrigger() {
    setTimeout(() => {
      if (!this.elementRef.nativeElement.contains(document.activeElement)) {
        this.isOpen = false;
        this.onTouchedFn();
      }
    }, 150);
  }
  onDocumentClick(event) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isOpen = false;
    }
  }
  writeValue(value) {
    this.value = value || "";
  }
  registerOnChange(fn) {
    this.onChangeFn = fn;
  }
  registerOnTouched(fn) {
    this.onTouchedFn = fn;
  }
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  static \u0275fac = function SelectComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SelectComponent)(\u0275\u0275directiveInject(ElementRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SelectComponent, selectors: [["app-select"]], hostBindings: function SelectComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function SelectComponent_click_HostBindingHandler($event) {
        return ctx.onDocumentClick($event);
      }, false, \u0275\u0275resolveDocument);
    }
  }, inputs: { id: "id", label: "label", placeholder: "placeholder", options: "options", disabled: "disabled", required: "required", errorMessage: "errorMessage" }, features: [\u0275\u0275ProvidersFeature([
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _SelectComponent),
      multi: true
    }
  ])], decls: 9, vars: 14, consts: [[1, "select-wrapper"], ["class", "select-label", 4, "ngIf"], ["tabindex", "0", 1, "select-trigger", 3, "click", "keydown", "blur"], [1, "select-value"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "select-chevron"], ["d", "M6 9l6 6 6-6"], ["class", "select-dropdown", 4, "ngIf"], ["class", "error-message", 4, "ngIf"], [1, "select-label"], ["class", "required-mark", 4, "ngIf"], [1, "required-mark"], [1, "select-dropdown"], ["class", "select-option", 3, "selected", "disabled", "highlighted", "click", "mouseenter", 4, "ngFor", "ngForOf"], ["class", "select-empty", 4, "ngIf"], [1, "select-option", 3, "click", "mouseenter"], [1, "select-empty"], [1, "error-message"]], template: function SelectComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, SelectComponent_label_1_Template, 3, 2, "label", 1);
      \u0275\u0275elementStart(2, "div", 2);
      \u0275\u0275listener("click", function SelectComponent_Template_div_click_2_listener() {
        return ctx.toggle();
      })("keydown", function SelectComponent_Template_div_keydown_2_listener($event) {
        return ctx.onKeydown($event);
      })("blur", function SelectComponent_Template_div_blur_2_listener() {
        return ctx.onBlurTrigger();
      });
      \u0275\u0275elementStart(3, "span", 3);
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(5, "svg", 4);
      \u0275\u0275element(6, "path", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(7, SelectComponent_div_7_Template, 3, 2, "div", 6)(8, SelectComponent_span_8_Template, 2, 1, "span", 7);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.label);
      \u0275\u0275advance();
      \u0275\u0275classProp("open", ctx.isOpen)("error", !!ctx.errorMessage)("disabled", ctx.disabled);
      \u0275\u0275advance();
      \u0275\u0275classProp("placeholder", !ctx.selectedLabel);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.selectedLabel || ctx.placeholder || "Select...", " ");
      \u0275\u0275advance();
      \u0275\u0275classProp("rotated", ctx.isOpen);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isOpen);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule], styles: ["\n\n.select-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  width: 100%;\n  position: relative;\n}\n.select-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 0.875rem;\n  color: #1a202c;\n}\n.required-mark[_ngcontent-%COMP%] {\n  color: #dc3545;\n  margin-left: 0.25rem;\n}\n.select-trigger[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.5rem;\n  width: 100%;\n  padding: 0.625rem 0.875rem;\n  border: 1px solid var(--color-input-border);\n  border-radius: 6px;\n  font-size: 0.875rem;\n  background-color: #ffffff;\n  color: #1a202c;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  -webkit-user-select: none;\n  user-select: none;\n  outline: none;\n}\n.select-trigger[_ngcontent-%COMP%]:hover:not(.disabled) {\n  border-color: var(--color-input-border-hover);\n}\n.select-trigger[_ngcontent-%COMP%]:focus:not(.disabled) {\n  border-color: var(--color-input-border-focus);\n  box-shadow: 0 0 0 3px var(--color-input-shadow-focus);\n}\n.select-trigger.open[_ngcontent-%COMP%] {\n  border-color: var(--color-input-border-focus);\n  box-shadow: 0 0 0 3px var(--color-input-shadow-focus);\n}\n.select-trigger.disabled[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  color: #94a3b8;\n  cursor: not-allowed;\n}\n.select-trigger.error[_ngcontent-%COMP%] {\n  border-color: var(--color-input-error);\n}\n.select-trigger.error[_ngcontent-%COMP%]:focus, \n.select-trigger.error.open[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 3px var(--color-input-error-shadow);\n}\n.select-value[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.select-value.placeholder[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.select-chevron[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  color: #94a3b8;\n  flex-shrink: 0;\n  transition: transform 0.2s ease;\n}\n.select-chevron.rotated[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.select-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  z-index: 50;\n  margin-top: 4px;\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.04);\n  max-height: 240px;\n  overflow-y: auto;\n  padding: 4px;\n}\n.select-option[_ngcontent-%COMP%] {\n  padding: 0.625rem 0.875rem;\n  font-size: 0.875rem;\n  color: #1a202c;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: background-color 0.1s ease;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.select-option[_ngcontent-%COMP%]:hover, \n.select-option.highlighted[_ngcontent-%COMP%] {\n  background-color: #f0fdf4;\n  color: #15803d;\n}\n.select-option.selected[_ngcontent-%COMP%] {\n  background-color: #dcfce7;\n  color: #15803d;\n  font-weight: 600;\n}\n.select-option.disabled[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  cursor: not-allowed;\n}\n.select-option.disabled[_ngcontent-%COMP%]:hover {\n  background-color: transparent;\n  color: #94a3b8;\n}\n.select-empty[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  font-size: 0.85rem;\n  color: #94a3b8;\n  text-align: center;\n}\n.error-message[_ngcontent-%COMP%] {\n  color: #dc3545;\n  font-size: 0.75rem;\n}\n/*# sourceMappingURL=select.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectComponent, [{
    type: Component,
    args: [{ selector: "app-select", standalone: true, imports: [CommonModule, FormsModule], providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => SelectComponent),
        multi: true
      }
    ], template: `
    <div class="select-wrapper">
      <label *ngIf="label" class="select-label">
        {{ label }}
        <span *ngIf="required" class="required-mark">*</span>
      </label>

      <div
        class="select-trigger"
        [class.open]="isOpen"
        [class.error]="!!errorMessage"
        [class.disabled]="disabled"
        (click)="toggle()"
        tabindex="0"
        (keydown)="onKeydown($event)"
        (blur)="onBlurTrigger()"
      >
        <span class="select-value" [class.placeholder]="!selectedLabel">
          {{ selectedLabel || placeholder || 'Select...' }}
        </span>
        <svg class="select-chevron" [class.rotated]="isOpen" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M6 9l6 6 6-6"/>
        </svg>
      </div>

      <div class="select-dropdown" *ngIf="isOpen">
        <div
          *ngFor="let option of options; let i = index"
          class="select-option"
          [class.selected]="option.value === value"
          [class.disabled]="option.disabled"
          [class.highlighted]="highlightedIndex === i"
          (click)="selectOption(option, $event)"
          (mouseenter)="highlightedIndex = i"
        >
          {{ option.label }}
        </div>
        <div class="select-empty" *ngIf="options.length === 0">No options</div>
      </div>

      <span *ngIf="errorMessage" class="error-message">{{ errorMessage }}</span>
    </div>
  `, styles: ["/* angular:styles/component:css;454eb1cd5fd6352ee661c3f2938f0243d2dcdd388a3b01ce96c51bd6021c3f25;/Users/baglan/repo/westwood/westwood-frontend/src/app/shared/components/select/select.component.ts */\n.select-wrapper {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  width: 100%;\n  position: relative;\n}\n.select-label {\n  font-weight: 500;\n  font-size: 0.875rem;\n  color: #1a202c;\n}\n.required-mark {\n  color: #dc3545;\n  margin-left: 0.25rem;\n}\n.select-trigger {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.5rem;\n  width: 100%;\n  padding: 0.625rem 0.875rem;\n  border: 1px solid var(--color-input-border);\n  border-radius: 6px;\n  font-size: 0.875rem;\n  background-color: #ffffff;\n  color: #1a202c;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  -webkit-user-select: none;\n  user-select: none;\n  outline: none;\n}\n.select-trigger:hover:not(.disabled) {\n  border-color: var(--color-input-border-hover);\n}\n.select-trigger:focus:not(.disabled) {\n  border-color: var(--color-input-border-focus);\n  box-shadow: 0 0 0 3px var(--color-input-shadow-focus);\n}\n.select-trigger.open {\n  border-color: var(--color-input-border-focus);\n  box-shadow: 0 0 0 3px var(--color-input-shadow-focus);\n}\n.select-trigger.disabled {\n  background-color: #f8f9fa;\n  color: #94a3b8;\n  cursor: not-allowed;\n}\n.select-trigger.error {\n  border-color: var(--color-input-error);\n}\n.select-trigger.error:focus,\n.select-trigger.error.open {\n  box-shadow: 0 0 0 3px var(--color-input-error-shadow);\n}\n.select-value {\n  flex: 1;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.select-value.placeholder {\n  color: #94a3b8;\n}\n.select-chevron {\n  width: 18px;\n  height: 18px;\n  color: #94a3b8;\n  flex-shrink: 0;\n  transition: transform 0.2s ease;\n}\n.select-chevron.rotated {\n  transform: rotate(180deg);\n}\n.select-dropdown {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  z-index: 50;\n  margin-top: 4px;\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.04);\n  max-height: 240px;\n  overflow-y: auto;\n  padding: 4px;\n}\n.select-option {\n  padding: 0.625rem 0.875rem;\n  font-size: 0.875rem;\n  color: #1a202c;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: background-color 0.1s ease;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.select-option:hover,\n.select-option.highlighted {\n  background-color: #f0fdf4;\n  color: #15803d;\n}\n.select-option.selected {\n  background-color: #dcfce7;\n  color: #15803d;\n  font-weight: 600;\n}\n.select-option.disabled {\n  color: #94a3b8;\n  cursor: not-allowed;\n}\n.select-option.disabled:hover {\n  background-color: transparent;\n  color: #94a3b8;\n}\n.select-empty {\n  padding: 0.75rem;\n  font-size: 0.85rem;\n  color: #94a3b8;\n  text-align: center;\n}\n.error-message {\n  color: #dc3545;\n  font-size: 0.75rem;\n}\n/*# sourceMappingURL=select.component.css.map */\n"] }]
  }], () => [{ type: ElementRef }], { id: [{
    type: Input
  }], label: [{
    type: Input
  }], placeholder: [{
    type: Input
  }], options: [{
    type: Input
  }], disabled: [{
    type: Input
  }], required: [{
    type: Input
  }], errorMessage: [{
    type: Input
  }], onDocumentClick: [{
    type: HostListener,
    args: ["document:click", ["$event"]]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SelectComponent, { className: "SelectComponent", filePath: "src/app/shared/components/select/select.component.ts", lineNumber: 216 });
})();

export {
  SelectComponent
};
//# sourceMappingURL=chunk-3WT3LZJP.js.map
