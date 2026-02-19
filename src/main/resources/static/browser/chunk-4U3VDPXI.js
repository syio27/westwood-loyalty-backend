import {
  RewardProgramsService
} from "./chunk-BN7EQLZ2.js";
import {
  AlertComponent,
  InputComponent
} from "./chunk-VLRWFHK2.js";
import {
  PageHeaderService
} from "./chunk-3HAPV5CC.js";
import "./chunk-6FFMNYG3.js";
import {
  ToastService
} from "./chunk-LKUGJXQB.js";
import {
  DefaultValueAccessor,
  FormArrayName,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormGroupName,
  FormsModule,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  ReactiveFormsModule,
  RequiredValidator,
  Validators
} from "./chunk-KQ5UQ4IC.js";
import {
  ButtonComponent
} from "./chunk-2XLG7XQP.js";
import "./chunk-OQLCFRLM.js";
import {
  ActivatedRoute,
  CommonModule,
  Component,
  DecimalPipe,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  NgForOf,
  NgIf,
  Output,
  Router,
  Subject,
  finalize,
  forwardRef,
  inject,
  setClassMetadata,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-OSQKJAMW.js";

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

// src/app/features/bonus-program/pages/create-program-wizard/steps/step-program-details.component.ts
function StepProgramDetailsComponent_p_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 9);
    \u0275\u0275text(1, " Customers earn a percentage of the transaction amount as bonus points. ");
    \u0275\u0275elementEnd();
  }
}
function StepProgramDetailsComponent_p_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 9);
    \u0275\u0275text(1, " Customers earn a fixed number of bonus points per spend threshold (e.g. 1 point per 1,000 tg). ");
    \u0275\u0275elementEnd();
  }
}
function StepProgramDetailsComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "app-input", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("required", true)("errorMessage", ctx_r0.getError("cashbackValue"));
  }
}
function StepProgramDetailsComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 12);
    \u0275\u0275element(2, "app-input", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 12);
    \u0275\u0275element(4, "app-input", 14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("required", true)("errorMessage", ctx_r0.getError("cashbackValue"));
    \u0275\u0275advance(2);
    \u0275\u0275property("required", true)("errorMessage", ctx_r0.getError("pointsSpendThreshold"));
  }
}
var StepProgramDetailsComponent = class _StepProgramDetailsComponent {
  form;
  cashbackTypeOptions = [
    { value: "PERCENTAGE", label: "Percentage (%)" },
    { value: "BONUS_POINTS", label: "Bonus Points" }
  ];
  getError(field) {
    const control = this.form.get(field);
    if (control && control.touched && control.invalid) {
      if (control.errors?.["required"])
        return "This field is required";
      if (control.errors?.["min"])
        return `Minimum value is ${control.errors["min"].min}`;
      if (control.errors?.["max"])
        return `Maximum value is ${control.errors["max"].max}`;
    }
    return "";
  }
  static \u0275fac = function StepProgramDetailsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StepProgramDetailsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StepProgramDetailsComponent, selectors: [["app-step-program-details"]], inputs: { form: "form" }, decls: 13, vars: 10, consts: [[1, "step-form", 3, "formGroup"], [1, "form-group"], ["id", "programName", "label", "Program name", "placeholder", "e.g. Weekend Cashback", "formControlName", "name", 3, "required", "errorMessage"], [1, "field-label"], ["rows", "3", "placeholder", "Describe this reward program for your team.", "formControlName", "description", 1, "field-textarea"], ["id", "cashbackType", "label", "Cashback type", "placeholder", "Select cashback type", "formControlName", "cashbackType", 3, "options", "required", "errorMessage"], ["class", "field-hint", 4, "ngIf"], ["class", "form-group", 4, "ngIf"], ["class", "form-row", 4, "ngIf"], [1, "field-hint"], ["id", "cashbackValue", "label", "Cashback rate (%)", "type", "number", "placeholder", "e.g. 5", "suffix", "%", "formControlName", "cashbackValue", 3, "required", "errorMessage"], [1, "form-row"], [1, "form-group", "flex-1"], ["id", "cashbackValue", "label", "Points earned", "type", "number", "placeholder", "e.g. 1", "formControlName", "cashbackValue", "hint", "Points awarded per threshold", 3, "required", "errorMessage"], ["id", "pointsSpendThreshold", "label", "Per spend amount", "type", "number", "placeholder", "e.g. 1000", "formControlName", "pointsSpendThreshold", "hint", "Spend amount required to earn above points", 3, "required", "errorMessage"]], template: function StepProgramDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275element(2, "app-input", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 1)(4, "label", 3);
      \u0275\u0275text(5, "Description");
      \u0275\u0275elementEnd();
      \u0275\u0275element(6, "textarea", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 1);
      \u0275\u0275element(8, "app-select", 5);
      \u0275\u0275template(9, StepProgramDetailsComponent_p_9_Template, 2, 0, "p", 6)(10, StepProgramDetailsComponent_p_10_Template, 2, 0, "p", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275template(11, StepProgramDetailsComponent_div_11_Template, 2, 2, "div", 7)(12, StepProgramDetailsComponent_div_12_Template, 5, 4, "div", 8);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_6_0;
      let tmp_7_0;
      let tmp_8_0;
      let tmp_9_0;
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(2);
      \u0275\u0275property("required", true)("errorMessage", ctx.getError("name"));
      \u0275\u0275advance(6);
      \u0275\u0275property("options", ctx.cashbackTypeOptions)("required", true)("errorMessage", ctx.getError("cashbackType"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ((tmp_6_0 = ctx.form.get("cashbackType")) == null ? null : tmp_6_0.value) === "PERCENTAGE");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ((tmp_7_0 = ctx.form.get("cashbackType")) == null ? null : tmp_7_0.value) === "BONUS_POINTS");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ((tmp_8_0 = ctx.form.get("cashbackType")) == null ? null : tmp_8_0.value) === "PERCENTAGE");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ((tmp_9_0 = ctx.form.get("cashbackType")) == null ? null : tmp_9_0.value) === "BONUS_POINTS");
    }
  }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, FormGroupDirective, FormControlName, InputComponent, SelectComponent], styles: ["\n\n.step-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n.step-form[_ngcontent-%COMP%]    > .form-group[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n}\n.flex-1[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.field-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 0.875rem;\n  color: #1a202c;\n  margin-bottom: 0.25rem;\n}\n.field-textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 6px;\n  border: 1px solid var(--color-input-border);\n  padding: 0.625rem 0.875rem;\n  font-size: 0.875rem;\n  color: #1a202c;\n  background: #ffffff;\n  resize: vertical;\n  min-height: 72px;\n  font-family: inherit;\n}\n.field-textarea[_ngcontent-%COMP%]:hover {\n  border-color: var(--color-input-border-hover);\n}\n.field-textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--color-input-border-focus);\n  box-shadow: 0 0 0 3px var(--color-input-shadow-focus);\n}\n.field-hint[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #64748b;\n  margin: 0.25rem 0 0 0;\n  line-height: 1.4;\n}\n/*# sourceMappingURL=step-program-details.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepProgramDetailsComponent, [{
    type: Component,
    args: [{ selector: "app-step-program-details", standalone: true, imports: [CommonModule, ReactiveFormsModule, InputComponent, SelectComponent], template: `
    <div class="step-form" [formGroup]="form">
      <div class="form-group">
        <app-input
          id="programName"
          label="Program name"
          placeholder="e.g. Weekend Cashback"
          formControlName="name"
          [required]="true"
          [errorMessage]="getError('name')"
        ></app-input>
      </div>

      <div class="form-group">
        <label class="field-label">Description</label>
        <textarea
          class="field-textarea"
          rows="3"
          placeholder="Describe this reward program for your team."
          formControlName="description"
        ></textarea>
      </div>

      <div class="form-group">
        <app-select
          id="cashbackType"
          label="Cashback type"
          placeholder="Select cashback type"
          formControlName="cashbackType"
          [options]="cashbackTypeOptions"
          [required]="true"
          [errorMessage]="getError('cashbackType')"
        ></app-select>
        <p class="field-hint" *ngIf="form.get('cashbackType')?.value === 'PERCENTAGE'">
          Customers earn a percentage of the transaction amount as bonus points.
        </p>
        <p class="field-hint" *ngIf="form.get('cashbackType')?.value === 'BONUS_POINTS'">
          Customers earn a fixed number of bonus points per spend threshold (e.g. 1 point per 1,000 tg).
        </p>
      </div>

      <div class="form-group" *ngIf="form.get('cashbackType')?.value === 'PERCENTAGE'">
        <app-input
          id="cashbackValue"
          label="Cashback rate (%)"
          type="number"
          placeholder="e.g. 5"
          suffix="%"
          formControlName="cashbackValue"
          [required]="true"
          [errorMessage]="getError('cashbackValue')"
        ></app-input>
      </div>

      <div class="form-row" *ngIf="form.get('cashbackType')?.value === 'BONUS_POINTS'">
        <div class="form-group flex-1">
          <app-input
            id="cashbackValue"
            label="Points earned"
            type="number"
            placeholder="e.g. 1"
            formControlName="cashbackValue"
            [required]="true"
            hint="Points awarded per threshold"
            [errorMessage]="getError('cashbackValue')"
          ></app-input>
        </div>
        <div class="form-group flex-1">
          <app-input
            id="pointsSpendThreshold"
            label="Per spend amount"
            type="number"
            placeholder="e.g. 1000"
            formControlName="pointsSpendThreshold"
            [required]="true"
            hint="Spend amount required to earn above points"
            [errorMessage]="getError('pointsSpendThreshold')"
          ></app-input>
        </div>
      </div>
    </div>
  `, styles: ["/* angular:styles/component:css;a805b176e055f2be8df9c520abd94f083c5858743ca821f92aaeb39b3175d48d;/Users/baglan/repo/westwood/westwood-frontend/src/app/features/bonus-program/pages/create-program-wizard/steps/step-program-details.component.ts */\n.step-form {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n.step-form > .form-group {\n  margin: 0;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.form-row {\n  display: flex;\n  gap: 1rem;\n}\n.flex-1 {\n  flex: 1;\n}\n.field-label {\n  font-weight: 500;\n  font-size: 0.875rem;\n  color: #1a202c;\n  margin-bottom: 0.25rem;\n}\n.field-textarea {\n  width: 100%;\n  border-radius: 6px;\n  border: 1px solid var(--color-input-border);\n  padding: 0.625rem 0.875rem;\n  font-size: 0.875rem;\n  color: #1a202c;\n  background: #ffffff;\n  resize: vertical;\n  min-height: 72px;\n  font-family: inherit;\n}\n.field-textarea:hover {\n  border-color: var(--color-input-border-hover);\n}\n.field-textarea:focus {\n  outline: none;\n  border-color: var(--color-input-border-focus);\n  box-shadow: 0 0 0 3px var(--color-input-shadow-focus);\n}\n.field-hint {\n  font-size: 0.8rem;\n  color: #64748b;\n  margin: 0.25rem 0 0 0;\n  line-height: 1.4;\n}\n/*# sourceMappingURL=step-program-details.component.css.map */\n"] }]
  }], null, { form: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StepProgramDetailsComponent, { className: "StepProgramDetailsComponent", filePath: "src/app/features/bonus-program/pages/create-program-wizard/steps/step-program-details.component.ts", lineNumber: 110 });
})();

// src/app/shared/components/switch/switch.component.ts
function SwitchComponent_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.label);
  }
}
var SwitchComponent = class _SwitchComponent {
  label = "";
  disabled = false;
  checked = false;
  onChangeFn = (value) => {
  };
  onTouchedFn = () => {
  };
  onChange(event) {
    const target = event.target;
    this.checked = target.checked;
    this.onChangeFn(this.checked);
  }
  onBlur() {
    this.onTouchedFn();
  }
  writeValue(value) {
    this.checked = value || false;
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
  static \u0275fac = function SwitchComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SwitchComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SwitchComponent, selectors: [["app-switch"]], inputs: { label: "label", disabled: "disabled" }, features: [\u0275\u0275ProvidersFeature([
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _SwitchComponent),
      multi: true
    }
  ])], decls: 6, vars: 7, consts: [[1, "switch-wrapper"], ["type", "checkbox", 1, "switch-input", 3, "change", "blur", "checked", "disabled"], [1, "switch-label"], [1, "switch-track"], [1, "switch-thumb"], ["class", "switch-text", 4, "ngIf"], [1, "switch-text"]], template: function SwitchComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "label", 0)(1, "input", 1);
      \u0275\u0275listener("change", function SwitchComponent_Template_input_change_1_listener($event) {
        return ctx.onChange($event);
      })("blur", function SwitchComponent_Template_input_blur_1_listener() {
        return ctx.onBlur();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "span", 2)(3, "span", 3);
      \u0275\u0275element(4, "span", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275template(5, SwitchComponent_span_5_Template, 2, 1, "span", 5);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("disabled", ctx.disabled);
      \u0275\u0275advance();
      \u0275\u0275property("checked", ctx.checked)("disabled", ctx.disabled);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("checked", ctx.checked);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.label);
    }
  }, dependencies: [CommonModule, NgIf, FormsModule], styles: ["\n\n.switch-wrapper[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.switch-wrapper.disabled[_ngcontent-%COMP%] {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.switch-input[_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.switch-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.switch-track[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 24px;\n  background-color: #cbd5e1;\n  border-radius: 12px;\n  position: relative;\n  transition: background-color 0.2s ease;\n  flex-shrink: 0;\n}\n.switch-track.checked[_ngcontent-%COMP%] {\n  background-color: var(--primary-color);\n}\n.switch-thumb[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  background-color: #ffffff;\n  border-radius: 50%;\n  position: absolute;\n  top: 2px;\n  left: 2px;\n  transition: transform 0.2s ease;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n}\n.switch-track.checked[_ngcontent-%COMP%]   .switch-thumb[_ngcontent-%COMP%] {\n  transform: translateX(20px);\n}\n.switch-text[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #1a202c;\n}\n.switch-wrapper[_ngcontent-%COMP%]:hover:not(.disabled)   .switch-track[_ngcontent-%COMP%]:not(.checked) {\n  background-color: #94a3b8;\n}\n/*# sourceMappingURL=switch.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SwitchComponent, [{
    type: Component,
    args: [{ selector: "app-switch", standalone: true, imports: [CommonModule, FormsModule], providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => SwitchComponent),
        multi: true
      }
    ], template: `
    <label class="switch-wrapper" [class.disabled]="disabled">
      <input
        type="checkbox"
        [checked]="checked"
        [disabled]="disabled"
        (change)="onChange($event)"
        (blur)="onBlur()"
        class="switch-input"
      />
      <span class="switch-label">
        <span class="switch-track" [class.checked]="checked">
          <span class="switch-thumb"></span>
        </span>
        <span class="switch-text" *ngIf="label">{{ label }}</span>
      </span>
    </label>
  `, styles: ["/* angular:styles/component:css;2a43714663b2b50a5b92d4a71acfdc06a1df4e39de63347dec6d01158998c002;/Users/baglan/repo/westwood/westwood-frontend/src/app/shared/components/switch/switch.component.ts */\n.switch-wrapper {\n  display: inline-flex;\n  align-items: center;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.switch-wrapper.disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.switch-input {\n  position: absolute;\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.switch-label {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.switch-track {\n  width: 44px;\n  height: 24px;\n  background-color: #cbd5e1;\n  border-radius: 12px;\n  position: relative;\n  transition: background-color 0.2s ease;\n  flex-shrink: 0;\n}\n.switch-track.checked {\n  background-color: var(--primary-color);\n}\n.switch-thumb {\n  width: 20px;\n  height: 20px;\n  background-color: #ffffff;\n  border-radius: 50%;\n  position: absolute;\n  top: 2px;\n  left: 2px;\n  transition: transform 0.2s ease;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n}\n.switch-track.checked .switch-thumb {\n  transform: translateX(20px);\n}\n.switch-text {\n  font-size: 0.875rem;\n  color: #1a202c;\n}\n.switch-wrapper:hover:not(.disabled) .switch-track:not(.checked) {\n  background-color: #94a3b8;\n}\n/*# sourceMappingURL=switch.component.css.map */\n"] }]
  }], null, { label: [{
    type: Input
  }], disabled: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SwitchComponent, { className: "SwitchComponent", filePath: "src/app/shared/components/switch/switch.component.ts", lineNumber: 100 });
})();

// src/app/shared/components/date-picker/date-picker.component.ts
var _c0 = [[["", "labelExtra", ""]]];
var _c1 = ["[labelExtra]"];
function DatePickerComponent_label_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function DatePickerComponent_label_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 10);
    \u0275\u0275text(1);
    \u0275\u0275template(2, DatePickerComponent_label_1_span_2_Template, 2, 0, "span", 11);
    \u0275\u0275projection(3);
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
function DatePickerComponent_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 13);
    \u0275\u0275listener("click", function DatePickerComponent_button_8_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.clearValue($event));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 14);
    \u0275\u0275element(2, "path", 15);
    \u0275\u0275elementEnd()();
  }
}
function DatePickerComponent_div_9_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r4);
  }
}
function DatePickerComponent_div_9_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 31);
    \u0275\u0275listener("click", function DatePickerComponent_div_9_button_14_Template_button_click_0_listener($event) {
      const day_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.selectDay(day_r6, $event));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r6 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("other-month", !day_r6.isCurrentMonth)("today", day_r6.isToday)("selected", day_r6.isSelected)("past", day_r6.isPast && ctx_r0.disablePast);
    \u0275\u0275property("disabled", day_r6.isPast && ctx_r0.disablePast);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", day_r6.date, " ");
  }
}
function DatePickerComponent_div_9_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 33)(2, "label", 34);
    \u0275\u0275text(3, "Time");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "app-select", 35);
    \u0275\u0275listener("click", function DatePickerComponent_div_9_div_15_Template_app_select_click_4_listener($event) {
      \u0275\u0275restoreView(_r7);
      return \u0275\u0275resetView($event.stopPropagation());
    })("ngModelChange", function DatePickerComponent_div_9_div_15_Template_app_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onTimeChange($event));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("options", ctx_r0.effectiveTimeOptions)("placeholder", "Time")("ngModel", ctx_r0.selectedTime);
  }
}
function DatePickerComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17)(2, "span", 18);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 19)(5, "button", 20);
    \u0275\u0275listener("click", function DatePickerComponent_div_9_Template_button_click_5_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.prevMonth($event));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 14);
    \u0275\u0275element(7, "path", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "button", 20);
    \u0275\u0275listener("click", function DatePickerComponent_div_9_Template_button_click_8_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.nextMonth($event));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 14);
    \u0275\u0275element(10, "path", 22);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(11, "div", 23);
    \u0275\u0275template(12, DatePickerComponent_div_9_span_12_Template, 2, 1, "span", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 25);
    \u0275\u0275template(14, DatePickerComponent_div_9_button_14_Template, 2, 10, "button", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, DatePickerComponent_div_9_div_15_Template, 5, 3, "div", 27);
    \u0275\u0275elementStart(16, "div", 28)(17, "button", 29);
    \u0275\u0275listener("click", function DatePickerComponent_div_9_Template_button_click_17_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.goToToday($event));
    });
    \u0275\u0275text(18, "Today");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r0.monthNames[ctx_r0.viewMonth], " ", ctx_r0.viewYear, "");
    \u0275\u0275advance(9);
    \u0275\u0275property("ngForOf", ctx_r0.dayHeaders);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.calendarDays);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.showTime);
  }
}
function DatePickerComponent_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMessage);
  }
}
var DatePickerComponent = class _DatePickerComponent {
  elementRef;
  id = "";
  label = "";
  placeholder = "";
  disabled = false;
  required = false;
  errorMessage = "";
  clearable = true;
  showTime = false;
  /** When true (default), past days and past times (when today is selected) are not selectable. */
  disablePast = true;
  value = "";
  // ISO string: "2025-03-15T08:00" or "2025-03-15"
  isOpen = false;
  viewMonth = 0;
  // 0-indexed
  viewYear = 2025;
  calendarDays = [];
  selectedTime = "08:00";
  monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  dayHeaders = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  allTimeOptions = [];
  onChangeFn = (value) => {
  };
  onTouchedFn = () => {
  };
  constructor(elementRef) {
    this.elementRef = elementRef;
  }
  ngOnInit() {
    const now = /* @__PURE__ */ new Date();
    this.viewMonth = now.getMonth();
    this.viewYear = now.getFullYear();
    if (this.showTime) {
      this.allTimeOptions = this.generateTimeOptions();
    }
    this.buildCalendar();
  }
  // ─── Calendar rendering ────────────────────────────────────────────
  buildCalendar() {
    const today = /* @__PURE__ */ new Date();
    const selDate = this.value ? new Date(this.value) : null;
    const firstDay = new Date(this.viewYear, this.viewMonth, 1);
    const startWeekday = firstDay.getDay();
    const daysInMonth = new Date(this.viewYear, this.viewMonth + 1, 0).getDate();
    const prevMonthDays = new Date(this.viewYear, this.viewMonth, 0).getDate();
    const days = [];
    for (let i = startWeekday - 1; i >= 0; i--) {
      const d = prevMonthDays - i;
      const m = this.viewMonth - 1;
      const y = m < 0 ? this.viewYear - 1 : this.viewYear;
      const month = m < 0 ? 11 : m;
      days.push(this.makeDay(d, month, y, false, today, selDate));
    }
    for (let d = 1; d <= daysInMonth; d++) {
      days.push(this.makeDay(d, this.viewMonth, this.viewYear, true, today, selDate));
    }
    const remaining = 42 - days.length;
    for (let d = 1; d <= remaining; d++) {
      const m = this.viewMonth + 1;
      const y = m > 11 ? this.viewYear + 1 : this.viewYear;
      const month = m > 11 ? 0 : m;
      days.push(this.makeDay(d, month, y, false, today, selDate));
    }
    this.calendarDays = days;
  }
  makeDay(date, month, year, isCurrent, today, sel) {
    const d = new Date(year, month, date);
    const todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    return {
      date,
      month,
      year,
      isCurrentMonth: isCurrent,
      isToday: d.getTime() === todayStart.getTime(),
      isSelected: sel ? d.getDate() === sel.getDate() && d.getMonth() === sel.getMonth() && d.getFullYear() === sel.getFullYear() : false,
      isPast: d < todayStart
    };
  }
  // ─── Navigation ────────────────────────────────────────────────────
  prevMonth(event) {
    event.stopPropagation();
    this.viewMonth--;
    if (this.viewMonth < 0) {
      this.viewMonth = 11;
      this.viewYear--;
    }
    this.buildCalendar();
  }
  nextMonth(event) {
    event.stopPropagation();
    this.viewMonth++;
    if (this.viewMonth > 11) {
      this.viewMonth = 0;
      this.viewYear++;
    }
    this.buildCalendar();
  }
  goToToday(event) {
    event.stopPropagation();
    const now = /* @__PURE__ */ new Date();
    this.viewMonth = now.getMonth();
    this.viewYear = now.getFullYear();
    const pad = (n) => n.toString().padStart(2, "0");
    const dateStr = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
    if (this.showTime) {
      const minutes = now.getMinutes();
      const h = minutes < 30 ? now.getHours() : now.getHours() + 1;
      const m = minutes < 30 ? 30 : 0;
      const hour = h >= 24 ? 23 : h;
      const min = h >= 24 ? 30 : m;
      this.selectedTime = `${pad(hour)}:${pad(min)}`;
      this.value = `${dateStr}T${this.selectedTime}`;
    } else {
      this.value = dateStr;
    }
    this.onChangeFn(this.value);
    this.buildCalendar();
  }
  // ─── Selection ─────────────────────────────────────────────────────
  selectDay(day, event) {
    event.stopPropagation();
    if (day.isPast && this.disablePast)
      return;
    const pad = (n) => n.toString().padStart(2, "0");
    const dateStr = `${day.year}-${pad(day.month + 1)}-${pad(day.date)}`;
    let timeToUse = this.selectedTime;
    if (this.showTime && day.isToday && this.disablePast) {
      const next = this.nextTimeSlotFromNow();
      if (next)
        timeToUse = next;
      this.selectedTime = timeToUse;
    }
    if (this.showTime) {
      this.value = `${dateStr}T${timeToUse}`;
    } else {
      this.value = dateStr;
    }
    this.onChangeFn(this.value);
    this.viewMonth = day.month;
    this.viewYear = day.year;
    this.buildCalendar();
    if (!this.showTime) {
      this.isOpen = false;
    }
  }
  onTimeChange(time) {
    if (this.value) {
      const datePart = this.value.split("T")[0];
      let timeToUse = time;
      if (this.showTime && this.disablePast && this.isSelectedDateToday()) {
        const next = this.nextTimeSlotFromNow();
        if (next && this.isTimeInPast(time)) {
          timeToUse = next;
        }
      }
      this.selectedTime = timeToUse;
      this.value = `${datePart}T${timeToUse}`;
      this.onChangeFn(this.value);
    } else {
      this.selectedTime = time;
    }
  }
  isTimeInPast(timeStr) {
    const [h, m] = timeStr.split(":").map(Number);
    const now = /* @__PURE__ */ new Date();
    const currentMinutes = now.getHours() * 60 + now.getMinutes();
    const slotMinutes = h * 60 + m;
    return slotMinutes < currentMinutes;
  }
  toggleCalendar() {
    if (this.disabled)
      return;
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      if (this.value) {
        const d = new Date(this.value);
        if (!isNaN(d.getTime())) {
          this.viewMonth = d.getMonth();
          this.viewYear = d.getFullYear();
          if (this.showTime) {
            const pad = (n) => n.toString().padStart(2, "0");
            let t = `${pad(d.getHours())}:${pad(d.getMinutes())}`;
            if (this.disablePast && this.isSelectedDateToday()) {
              const next = this.nextTimeSlotFromNow();
              if (next) {
                t = next;
                const datePart = this.value.split("T")[0];
                this.value = `${datePart}T${t}`;
                this.onChangeFn(this.value);
              }
            }
            this.selectedTime = t;
          }
        }
      }
      this.buildCalendar();
    }
  }
  clearValue(event) {
    event.stopPropagation();
    this.value = "";
    this.onChangeFn(this.value);
  }
  // ─── Display ───────────────────────────────────────────────────────
  formatDisplay(val) {
    if (!val)
      return "";
    try {
      const d = new Date(val);
      if (isNaN(d.getTime()))
        return val;
      const opts = { year: "numeric", month: "short", day: "numeric" };
      if (this.showTime) {
        opts.hour = "2-digit";
        opts.minute = "2-digit";
      }
      return d.toLocaleString("en-US", opts);
    } catch {
      return val;
    }
  }
  // ─── Time options ──────────────────────────────────────────────────
  generateTimeOptions() {
    const options = [];
    for (let h = 0; h < 24; h++) {
      const hour = h.toString().padStart(2, "0");
      options.push({ value: `${hour}:00`, label: `${hour}:00` });
      options.push({ value: `${hour}:30`, label: `${hour}:30` });
    }
    return options;
  }
  isSelectedDateToday() {
    if (!this.value)
      return false;
    const d = new Date(this.value);
    if (isNaN(d.getTime()))
      return false;
    const today = /* @__PURE__ */ new Date();
    return d.getFullYear() === today.getFullYear() && d.getMonth() === today.getMonth() && d.getDate() === today.getDate();
  }
  nextTimeSlotFromNow() {
    const now = /* @__PURE__ */ new Date();
    const min = now.getMinutes();
    const h = min < 30 ? now.getHours() : now.getHours() + 1;
    const m = min < 30 ? 30 : 0;
    if (h >= 24)
      return "23:30";
    const pad = (n) => n.toString().padStart(2, "0");
    return `${pad(h)}:${pad(m)}`;
  }
  /** When disablePast and selected date is today, only show times from now onwards. */
  get effectiveTimeOptions() {
    if (!this.showTime || !this.disablePast || !this.value)
      return this.allTimeOptions;
    const today = /* @__PURE__ */ new Date();
    const todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const valDate = new Date(this.value);
    if (isNaN(valDate.getTime()))
      return this.allTimeOptions;
    const valDayStart = new Date(valDate.getFullYear(), valDate.getMonth(), valDate.getDate());
    if (valDayStart.getTime() !== todayStart.getTime())
      return this.allTimeOptions;
    const now = /* @__PURE__ */ new Date();
    const currentMinutes = now.getHours() * 60 + now.getMinutes();
    return this.allTimeOptions.filter((opt) => {
      const [h, m] = opt.value.split(":").map(Number);
      const slotMinutes = h * 60 + m;
      return slotMinutes > currentMinutes;
    });
  }
  // ─── Click outside ─────────────────────────────────────────────────
  onDocumentClick(event) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isOpen = false;
    }
  }
  // ─── ControlValueAccessor ──────────────────────────────────────────
  writeValue(value) {
    this.value = value || "";
    if (this.value && this.showTime) {
      try {
        const d = new Date(this.value);
        if (!isNaN(d.getTime())) {
          const pad = (n) => n.toString().padStart(2, "0");
          let t = `${pad(d.getHours())}:${pad(d.getMinutes())}`;
          if (this.disablePast && this.isSelectedDateToday()) {
            const next = this.nextTimeSlotFromNow();
            if (next) {
              t = next;
              const datePart = this.value.split("T")[0];
              this.value = `${datePart}T${t}`;
              this.onChangeFn(this.value);
            }
          }
          this.selectedTime = t;
        }
      } catch {
      }
    }
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
  static \u0275fac = function DatePickerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DatePickerComponent)(\u0275\u0275directiveInject(ElementRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DatePickerComponent, selectors: [["app-date-picker"]], hostBindings: function DatePickerComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function DatePickerComponent_click_HostBindingHandler($event) {
        return ctx.onDocumentClick($event);
      }, false, \u0275\u0275resolveDocument);
    }
  }, inputs: { id: "id", label: "label", placeholder: "placeholder", disabled: "disabled", required: "required", errorMessage: "errorMessage", clearable: "clearable", showTime: "showTime", disablePast: "disablePast" }, features: [\u0275\u0275ProvidersFeature([
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _DatePickerComponent),
      multi: true
    }
  ])], ngContentSelectors: _c1, decls: 11, vars: 15, consts: [[1, "dp-wrapper"], ["class", "dp-label", 4, "ngIf"], ["tabindex", "0", 1, "dp-trigger", 3, "click", "keydown.escape"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5", 1, "dp-icon"], ["x", "3", "y", "4", "width", "18", "height", "18", "rx", "2", "ry", "2"], ["d", "M16 2v4M8 2v4M3 10h18"], [1, "dp-display"], ["type", "button", "class", "dp-clear", 3, "click", 4, "ngIf"], ["class", "dp-dropdown", 4, "ngIf"], ["class", "error-message", 4, "ngIf"], [1, "dp-label"], ["class", "required-mark", 4, "ngIf"], [1, "required-mark"], ["type", "button", 1, "dp-clear", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M18 6L6 18M6 6l12 12"], [1, "dp-dropdown"], [1, "dp-header"], [1, "dp-month-year"], [1, "dp-nav"], ["type", "button", 1, "dp-nav-btn", 3, "click"], ["d", "M15 18l-6-6 6-6"], ["d", "M9 18l6-6-6-6"], [1, "dp-day-headers"], ["class", "dp-day-header", 4, "ngFor", "ngForOf"], [1, "dp-grid"], ["type", "button", "class", "dp-day", 3, "other-month", "today", "selected", "past", "disabled", "click", 4, "ngFor", "ngForOf"], ["class", "dp-time-row", 4, "ngIf"], [1, "dp-footer"], ["type", "button", 1, "dp-today-btn", 3, "click"], [1, "dp-day-header"], ["type", "button", 1, "dp-day", 3, "click", "disabled"], [1, "dp-time-row"], [1, "dp-time-field"], [1, "dp-time-label"], [3, "click", "ngModelChange", "options", "placeholder", "ngModel"], [1, "error-message"]], template: function DatePickerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef(_c0);
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, DatePickerComponent_label_1_Template, 4, 2, "label", 1);
      \u0275\u0275elementStart(2, "div", 2);
      \u0275\u0275listener("click", function DatePickerComponent_Template_div_click_2_listener() {
        return ctx.toggleCalendar();
      })("keydown.escape", function DatePickerComponent_Template_div_keydown_escape_2_listener() {
        return ctx.isOpen = false;
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(3, "svg", 3);
      \u0275\u0275element(4, "rect", 4)(5, "path", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(6, "span", 6);
      \u0275\u0275text(7);
      \u0275\u0275elementEnd();
      \u0275\u0275template(8, DatePickerComponent_button_8_Template, 3, 0, "button", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275template(9, DatePickerComponent_div_9_Template, 19, 5, "div", 8)(10, DatePickerComponent_span_10_Template, 2, 1, "span", 9);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.label);
      \u0275\u0275advance();
      \u0275\u0275classProp("open", ctx.isOpen)("error", !!ctx.errorMessage)("disabled", ctx.disabled)("has-value", !!ctx.value);
      \u0275\u0275advance(4);
      \u0275\u0275classProp("placeholder", !ctx.value);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.value ? ctx.formatDisplay(ctx.value) : ctx.placeholder || "Select date", " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.value && ctx.clearable && !ctx.disabled);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isOpen);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgControlStatus, NgModel, SelectComponent], styles: ["\n\n.dp-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  width: 100%;\n  position: relative;\n}\n.dp-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 0.875rem;\n  color: #1a202c;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.required-mark[_ngcontent-%COMP%] {\n  color: #dc3545;\n  margin-left: 0.25rem;\n}\n.dp-trigger[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.625rem;\n  width: 100%;\n  padding: 0.625rem 0.875rem;\n  border: 1px solid var(--color-input-border);\n  border-radius: 6px;\n  font-size: 0.875rem;\n  background: #ffffff;\n  color: #1a202c;\n  cursor: pointer;\n  transition: all 0.2s;\n  outline: none;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.dp-trigger[_ngcontent-%COMP%]:hover:not(.disabled) {\n  border-color: var(--color-input-border-hover);\n}\n.dp-trigger[_ngcontent-%COMP%]:focus:not(.disabled), \n.dp-trigger.open[_ngcontent-%COMP%] {\n  border-color: var(--color-input-border-focus);\n  box-shadow: 0 0 0 3px var(--color-input-shadow-focus);\n}\n.dp-trigger.disabled[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  color: #94a3b8;\n  cursor: not-allowed;\n}\n.dp-trigger.error[_ngcontent-%COMP%] {\n  border-color: var(--color-input-error);\n}\n.dp-trigger.error[_ngcontent-%COMP%]:focus, \n.dp-trigger.error.open[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 3px var(--color-input-error-shadow);\n}\n.dp-icon[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  color: #94a3b8;\n  flex-shrink: 0;\n}\n.dp-trigger.has-value[_ngcontent-%COMP%]   .dp-icon[_ngcontent-%COMP%] {\n  color: #16A34A;\n}\n.dp-display[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.dp-display.placeholder[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dp-clear[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: 0.125rem;\n  cursor: pointer;\n  color: #94a3b8;\n  display: flex;\n  transition: color 0.15s;\n}\n.dp-clear[_ngcontent-%COMP%]:hover {\n  color: #ef4444;\n}\n.dp-clear[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n.dp-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 50;\n  margin-top: 4px;\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(0, 0, 0, 0.04);\n  padding: 1rem;\n  min-width: 280px;\n  width: max-content;\n}\n.dp-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.75rem;\n}\n.dp-month-year[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #0f172a;\n}\n.dp-nav[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.25rem;\n}\n.dp-nav-btn[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 6px;\n  border: 1px solid #e2e8f0;\n  background: #ffffff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: #475569;\n  transition: all 0.15s;\n}\n.dp-nav-btn[_ngcontent-%COMP%]:hover {\n  background: #f0fdf4;\n  border-color: #bbf7d0;\n  color: #16A34A;\n}\n.dp-nav-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n.dp-day-headers[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  gap: 0;\n  margin-bottom: 0.25rem;\n}\n.dp-day-header[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #94a3b8;\n  padding: 0.25rem 0;\n}\n.dp-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  gap: 2px;\n}\n.dp-day[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.85rem;\n  color: #1a202c;\n  border: none;\n  background: transparent;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.1s;\n  font-weight: 500;\n}\n.dp-day[_ngcontent-%COMP%]:hover:not(:disabled):not(.selected) {\n  background: #f0fdf4;\n  color: #16A34A;\n}\n.dp-day.other-month[_ngcontent-%COMP%] {\n  color: #cbd5e1;\n}\n.dp-day.other-month[_ngcontent-%COMP%]:hover:not(:disabled):not(.selected) {\n  color: #94a3b8;\n}\n.dp-day.today[_ngcontent-%COMP%]:not(.selected) {\n  border: 1.5px solid #16A34A;\n  color: #16A34A;\n  font-weight: 700;\n}\n.dp-day.selected[_ngcontent-%COMP%] {\n  background: #0f172a;\n  color: #ffffff;\n  font-weight: 700;\n}\n.dp-day.past[_ngcontent-%COMP%] {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.dp-time-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  margin-top: 0.75rem;\n  padding-top: 0.75rem;\n  border-top: 1px solid #f1f5f9;\n}\n.dp-time-field[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 0.2rem;\n}\n.dp-time-label[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 600;\n  color: #64748b;\n}\n.dp-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: 0.5rem;\n  padding-top: 0.5rem;\n  border-top: 1px solid #f1f5f9;\n}\n.dp-today-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #16A34A;\n  cursor: pointer;\n  padding: 0.25rem 0.75rem;\n  border-radius: 4px;\n  transition: all 0.15s;\n}\n.dp-today-btn[_ngcontent-%COMP%]:hover {\n  background: #f0fdf4;\n}\n.error-message[_ngcontent-%COMP%] {\n  color: #dc3545;\n  font-size: 0.75rem;\n}\n/*# sourceMappingURL=date-picker.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DatePickerComponent, [{
    type: Component,
    args: [{ selector: "app-date-picker", standalone: true, imports: [CommonModule, FormsModule, SelectComponent], providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => DatePickerComponent),
        multi: true
      }
    ], template: `
    <div class="dp-wrapper">
      <label *ngIf="label" class="dp-label">
        {{ label }}
        <span *ngIf="required" class="required-mark">*</span>
        <ng-content select="[labelExtra]"></ng-content>
      </label>

      <!-- Trigger -->
      <div
        class="dp-trigger"
        [class.open]="isOpen"
        [class.error]="!!errorMessage"
        [class.disabled]="disabled"
        [class.has-value]="!!value"
        (click)="toggleCalendar()"
        tabindex="0"
        (keydown.escape)="isOpen = false"
      >
        <svg class="dp-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
          <path d="M16 2v4M8 2v4M3 10h18"/>
        </svg>
        <span class="dp-display" [class.placeholder]="!value">
          {{ value ? formatDisplay(value) : placeholder || 'Select date' }}
        </span>
        <button *ngIf="value && clearable && !disabled" type="button" class="dp-clear" (click)="clearValue($event)">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
        </button>
      </div>

      <!-- Calendar dropdown -->
      <div class="dp-dropdown" *ngIf="isOpen">
        <!-- Header: month/year + nav -->
        <div class="dp-header">
          <span class="dp-month-year">{{ monthNames[viewMonth] }} {{ viewYear }}</span>
          <div class="dp-nav">
            <button type="button" class="dp-nav-btn" (click)="prevMonth($event)">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <button type="button" class="dp-nav-btn" (click)="nextMonth($event)">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
            </button>
          </div>
        </div>

        <!-- Day headers -->
        <div class="dp-day-headers">
          <span *ngFor="let d of dayHeaders" class="dp-day-header">{{ d }}</span>
        </div>

        <!-- Day grid -->
        <div class="dp-grid">
          <button
            *ngFor="let day of calendarDays"
            type="button"
            class="dp-day"
            [class.other-month]="!day.isCurrentMonth"
            [class.today]="day.isToday"
            [class.selected]="day.isSelected"
            [class.past]="day.isPast && disablePast"
            [disabled]="day.isPast && disablePast"
            (click)="selectDay(day, $event)"
          >
            {{ day.date }}
          </button>
        </div>

        <!-- Optional time selection -->
        <div class="dp-time-row" *ngIf="showTime">
          <div class="dp-time-field">
            <label class="dp-time-label">Time</label>
            <app-select
              [options]="effectiveTimeOptions"
              [placeholder]="'Time'"
              (click)="$event.stopPropagation()"
              [ngModel]="selectedTime"
              (ngModelChange)="onTimeChange($event)"
            ></app-select>
          </div>
        </div>

        <!-- Footer -->
        <div class="dp-footer">
          <button type="button" class="dp-today-btn" (click)="goToToday($event)">Today</button>
        </div>
      </div>

      <span *ngIf="errorMessage" class="error-message">{{ errorMessage }}</span>
    </div>
  `, styles: ["/* angular:styles/component:css;555067654951550487ff5fc101462d0161dd27fe6cf432765cad2c53906b864a;/Users/baglan/repo/westwood/westwood-frontend/src/app/shared/components/date-picker/date-picker.component.ts */\n.dp-wrapper {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  width: 100%;\n  position: relative;\n}\n.dp-label {\n  font-weight: 500;\n  font-size: 0.875rem;\n  color: #1a202c;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.required-mark {\n  color: #dc3545;\n  margin-left: 0.25rem;\n}\n.dp-trigger {\n  display: flex;\n  align-items: center;\n  gap: 0.625rem;\n  width: 100%;\n  padding: 0.625rem 0.875rem;\n  border: 1px solid var(--color-input-border);\n  border-radius: 6px;\n  font-size: 0.875rem;\n  background: #ffffff;\n  color: #1a202c;\n  cursor: pointer;\n  transition: all 0.2s;\n  outline: none;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.dp-trigger:hover:not(.disabled) {\n  border-color: var(--color-input-border-hover);\n}\n.dp-trigger:focus:not(.disabled),\n.dp-trigger.open {\n  border-color: var(--color-input-border-focus);\n  box-shadow: 0 0 0 3px var(--color-input-shadow-focus);\n}\n.dp-trigger.disabled {\n  background: #f8f9fa;\n  color: #94a3b8;\n  cursor: not-allowed;\n}\n.dp-trigger.error {\n  border-color: var(--color-input-error);\n}\n.dp-trigger.error:focus,\n.dp-trigger.error.open {\n  box-shadow: 0 0 0 3px var(--color-input-error-shadow);\n}\n.dp-icon {\n  width: 18px;\n  height: 18px;\n  color: #94a3b8;\n  flex-shrink: 0;\n}\n.dp-trigger.has-value .dp-icon {\n  color: #16A34A;\n}\n.dp-display {\n  flex: 1;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.dp-display.placeholder {\n  color: #94a3b8;\n}\n.dp-clear {\n  background: none;\n  border: none;\n  padding: 0.125rem;\n  cursor: pointer;\n  color: #94a3b8;\n  display: flex;\n  transition: color 0.15s;\n}\n.dp-clear:hover {\n  color: #ef4444;\n}\n.dp-clear svg {\n  width: 16px;\n  height: 16px;\n}\n.dp-dropdown {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 50;\n  margin-top: 4px;\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(0, 0, 0, 0.04);\n  padding: 1rem;\n  min-width: 280px;\n  width: max-content;\n}\n.dp-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.75rem;\n}\n.dp-month-year {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #0f172a;\n}\n.dp-nav {\n  display: flex;\n  gap: 0.25rem;\n}\n.dp-nav-btn {\n  width: 32px;\n  height: 32px;\n  border-radius: 6px;\n  border: 1px solid #e2e8f0;\n  background: #ffffff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: #475569;\n  transition: all 0.15s;\n}\n.dp-nav-btn:hover {\n  background: #f0fdf4;\n  border-color: #bbf7d0;\n  color: #16A34A;\n}\n.dp-nav-btn svg {\n  width: 16px;\n  height: 16px;\n}\n.dp-day-headers {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  gap: 0;\n  margin-bottom: 0.25rem;\n}\n.dp-day-header {\n  text-align: center;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #94a3b8;\n  padding: 0.25rem 0;\n}\n.dp-grid {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  gap: 2px;\n}\n.dp-day {\n  width: 36px;\n  height: 36px;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.85rem;\n  color: #1a202c;\n  border: none;\n  background: transparent;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.1s;\n  font-weight: 500;\n}\n.dp-day:hover:not(:disabled):not(.selected) {\n  background: #f0fdf4;\n  color: #16A34A;\n}\n.dp-day.other-month {\n  color: #cbd5e1;\n}\n.dp-day.other-month:hover:not(:disabled):not(.selected) {\n  color: #94a3b8;\n}\n.dp-day.today:not(.selected) {\n  border: 1.5px solid #16A34A;\n  color: #16A34A;\n  font-weight: 700;\n}\n.dp-day.selected {\n  background: #0f172a;\n  color: #ffffff;\n  font-weight: 700;\n}\n.dp-day.past {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.dp-time-row {\n  display: flex;\n  gap: 0.5rem;\n  margin-top: 0.75rem;\n  padding-top: 0.75rem;\n  border-top: 1px solid #f1f5f9;\n}\n.dp-time-field {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 0.2rem;\n}\n.dp-time-label {\n  font-size: 0.7rem;\n  font-weight: 600;\n  color: #64748b;\n}\n.dp-footer {\n  display: flex;\n  justify-content: center;\n  margin-top: 0.5rem;\n  padding-top: 0.5rem;\n  border-top: 1px solid #f1f5f9;\n}\n.dp-today-btn {\n  background: none;\n  border: none;\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #16A34A;\n  cursor: pointer;\n  padding: 0.25rem 0.75rem;\n  border-radius: 4px;\n  transition: all 0.15s;\n}\n.dp-today-btn:hover {\n  background: #f0fdf4;\n}\n.error-message {\n  color: #dc3545;\n  font-size: 0.75rem;\n}\n/*# sourceMappingURL=date-picker.component.css.map */\n"] }]
  }], () => [{ type: ElementRef }], { id: [{
    type: Input
  }], label: [{
    type: Input
  }], placeholder: [{
    type: Input
  }], disabled: [{
    type: Input
  }], required: [{
    type: Input
  }], errorMessage: [{
    type: Input
  }], clearable: [{
    type: Input
  }], showTime: [{
    type: Input
  }], disablePast: [{
    type: Input
  }], onDocumentClick: [{
    type: HostListener,
    args: ["document:click", ["$event"]]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DatePickerComponent, { className: "DatePickerComponent", filePath: "src/app/shared/components/date-picker/date-picker.component.ts", lineNumber: 239 });
})();

// src/app/features/bonus-program/pages/create-program-wizard/steps/step-schedule.component.ts
function StepScheduleComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "app-date-picker", 12)(2, "button", 13);
    \u0275\u0275listener("click", function StepScheduleComponent_div_9_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removeEndDate());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 14);
    \u0275\u0275element(4, "path", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " Remove ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("showTime", true)("clearable", false);
  }
}
function StepScheduleComponent_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 16);
    \u0275\u0275listener("click", function StepScheduleComponent_button_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showEndDate = true);
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 14);
    \u0275\u0275element(2, "path", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Add end date ");
    \u0275\u0275elementEnd();
  }
}
function StepScheduleComponent_p_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 18);
    \u0275\u0275text(1, "This program will run indefinitely until manually stopped.");
    \u0275\u0275elementEnd();
  }
}
function StepScheduleComponent_div_18_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 25)(2, "label", 26);
    \u0275\u0275text(3, "Start time");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "app-select", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 28);
    \u0275\u0275text(6, "\u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 25)(8, "label", 26);
    \u0275\u0275text(9, "End time");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "app-select", 29);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("options", ctx_r1.timeOptions);
    \u0275\u0275advance(6);
    \u0275\u0275property("options", ctx_r1.timeOptions);
  }
}
function StepScheduleComponent_div_18_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "span", 31);
    \u0275\u0275text(2, "Off");
    \u0275\u0275elementEnd()();
  }
}
function StepScheduleComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 20);
    \u0275\u0275element(2, "app-switch", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, StepScheduleComponent_div_18_div_3_Template, 11, 2, "div", 22)(4, StepScheduleComponent_div_18_div_4_Template, 3, 0, "div", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_6_0;
    let tmp_7_0;
    const dayGroup_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("enabled", (tmp_3_0 = dayGroup_r4.get("enabled")) == null ? null : tmp_3_0.value);
    \u0275\u0275property("formGroupName", i_r5);
    \u0275\u0275advance(2);
    \u0275\u0275property("label", ctx_r1.getShortDayLabel(i_r5));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_6_0 = dayGroup_r4.get("enabled")) == null ? null : tmp_6_0.value);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !((tmp_7_0 = dayGroup_r4.get("enabled")) == null ? null : tmp_7_0.value));
  }
}
var DAY_LABELS = {
  MONDAY: "Mon",
  TUESDAY: "Tue",
  WEDNESDAY: "Wed",
  THURSDAY: "Thu",
  FRIDAY: "Fri",
  SATURDAY: "Sat",
  SUNDAY: "Sun"
};
var StepScheduleComponent = class _StepScheduleComponent {
  form;
  showEndDate = false;
  timeOptions = [];
  days = [
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
    "SUNDAY"
  ];
  ngOnInit() {
    this.timeOptions = this.generateTimeOptions();
    const endDateValue = this.form.get("endDate")?.value;
    if (endDateValue) {
      this.showEndDate = true;
    }
  }
  get weeklySchedulesArray() {
    return this.form.get("weeklySchedules");
  }
  getShortDayLabel(index) {
    return DAY_LABELS[this.days[index]];
  }
  removeEndDate() {
    this.form.get("endDate")?.setValue("");
    this.showEndDate = false;
  }
  generateTimeOptions() {
    const options = [];
    for (let h = 0; h < 24; h++) {
      const hour = h.toString().padStart(2, "0");
      options.push({ value: `${hour}:00`, label: `${hour}:00` });
      options.push({ value: `${hour}:30`, label: `${hour}:30` });
    }
    return options;
  }
  static \u0275fac = function StepScheduleComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StepScheduleComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StepScheduleComponent, selectors: [["app-step-schedule"]], inputs: { form: "form" }, decls: 19, vars: 8, consts: [[1, "step-form", 3, "formGroup"], [1, "section"], [1, "section-title"], [1, "section-desc"], [1, "form-row"], [1, "form-group", "flex-1"], ["label", "Start date", "placeholder", "Select start date", "formControlName", "startDate", 3, "showTime", "required", "errorMessage"], ["class", "form-group flex-1", 4, "ngIf"], ["type", "button", "class", "btn-add-enddate", 3, "click", 4, "ngIf"], ["class", "field-hint", 4, "ngIf"], ["formArrayName", "weeklySchedules", 1, "schedule-grid"], ["class", "schedule-row", 3, "enabled", "formGroupName", 4, "ngFor", "ngForOf"], ["label", "End date", "placeholder", "Select end date", "formControlName", "endDate", 3, "showTime", "clearable"], ["labelExtra", "", "type", "button", 1, "btn-remove-field", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M18 6L6 18M6 6l12 12"], ["type", "button", 1, "btn-add-enddate", 3, "click"], ["d", "M12 5v14M5 12h14"], [1, "field-hint"], [1, "schedule-row", 3, "formGroupName"], [1, "day-toggle"], ["formControlName", "enabled", 3, "label"], ["class", "time-range", 4, "ngIf"], ["class", "time-off", 4, "ngIf"], [1, "time-range"], [1, "time-field"], [1, "small-label"], ["formControlName", "startTime", "placeholder", "Start", 3, "options"], [1, "time-sep"], ["formControlName", "endTime", "placeholder", "End", 3, "options"], [1, "time-off"], [1, "off-label"]], template: function StepScheduleComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h3", 2);
      \u0275\u0275text(3, "Program dates");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5, "Set when this program will be active.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 4)(7, "div", 5);
      \u0275\u0275element(8, "app-date-picker", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275template(9, StepScheduleComponent_div_9_Template, 6, 2, "div", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275template(10, StepScheduleComponent_button_10_Template, 4, 0, "button", 8)(11, StepScheduleComponent_p_11_Template, 2, 0, "p", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 1)(13, "h3", 2);
      \u0275\u0275text(14, "Weekly schedule");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "p", 3);
      \u0275\u0275text(16, " Configure which days and hours the program is effective. If no days are enabled, the program applies 24/7 during the active period. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 10);
      \u0275\u0275template(18, StepScheduleComponent_div_18_Template, 5, 6, "div", 11);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      let tmp_3_0;
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(8);
      \u0275\u0275property("showTime", true)("required", true)("errorMessage", ((tmp_3_0 = ctx.form.get("startDate")) == null ? null : tmp_3_0.touched) && ((tmp_3_0 = ctx.form.get("startDate")) == null ? null : tmp_3_0.invalid) ? "Start date is required" : "");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showEndDate);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.showEndDate);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.showEndDate);
      \u0275\u0275advance(7);
      \u0275\u0275property("ngForOf", ctx.weeklySchedulesArray.controls);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, NgControlStatus, NgControlStatusGroup, RequiredValidator, FormGroupDirective, FormControlName, FormGroupName, FormArrayName, SwitchComponent, SelectComponent, DatePickerComponent], styles: ["\n\n.step-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.75rem;\n}\n.section[_ngcontent-%COMP%] {\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 0.25rem 0;\n}\n.section-desc[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #64748b;\n  margin: 0 0 1rem 0;\n  line-height: 1.45;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.35rem;\n}\n.flex-1[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.field-hint[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #64748b;\n  margin: 0.5rem 0 0 0;\n}\n.btn-add-enddate[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  background: none;\n  border: 1px dashed #cbd5e1;\n  border-radius: 6px;\n  padding: 0.5rem 1rem;\n  color: #16A34A;\n  font-size: 0.85rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.15s;\n  margin-top: 0.5rem;\n}\n.btn-add-enddate[_ngcontent-%COMP%]:hover {\n  border-color: #16A34A;\n  background: #f0fdf4;\n}\n.btn-add-enddate[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n.btn-remove-field[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.25rem;\n  background: none;\n  border: none;\n  padding: 0;\n  margin-left: auto;\n  color: #ef4444;\n  font-size: 0.75rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: color 0.15s;\n}\n.btn-remove-field[_ngcontent-%COMP%]:hover {\n  color: #dc2626;\n}\n.btn-remove-field[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n}\n.schedule-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.schedule-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 0.65rem 1rem;\n  border-radius: 8px;\n  background: #f8fafc;\n  border: 1px solid #f1f5f9;\n  transition: all 0.15s;\n}\n.schedule-row.enabled[_ngcontent-%COMP%] {\n  background: #fafffe;\n  border-color: #dcfce7;\n}\n.day-toggle[_ngcontent-%COMP%] {\n  min-width: 120px;\n}\n.time-range[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 0.5rem;\n  flex: 1;\n}\n.time-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.2rem;\n  flex: 1;\n}\n.small-label[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: #64748b;\n  font-weight: 500;\n}\n.time-sep[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  font-weight: 600;\n  padding-bottom: 0.625rem;\n}\n.time-off[_ngcontent-%COMP%] {\n}\n.off-label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #94a3b8;\n  font-style: italic;\n}\n/*# sourceMappingURL=step-schedule.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepScheduleComponent, [{
    type: Component,
    args: [{ selector: "app-step-schedule", standalone: true, imports: [CommonModule, ReactiveFormsModule, SwitchComponent, SelectComponent, DatePickerComponent], template: `
    <div class="step-form" [formGroup]="form">
      <!-- Date range -->
      <div class="section">
        <h3 class="section-title">Program dates</h3>
        <p class="section-desc">Set when this program will be active.</p>

        <div class="form-row">
          <div class="form-group flex-1">
            <app-date-picker
              label="Start date"
              placeholder="Select start date"
              formControlName="startDate"
              [showTime]="true"
              [required]="true"
              [errorMessage]="form.get('startDate')?.touched && form.get('startDate')?.invalid ? 'Start date is required' : ''"
            ></app-date-picker>
          </div>

          <!-- End date: shown only if toggled on -->
          <div class="form-group flex-1" *ngIf="showEndDate">
            <app-date-picker
              label="End date"
              placeholder="Select end date"
              formControlName="endDate"
              [showTime]="true"
              [clearable]="false"
            >
              <button labelExtra type="button" class="btn-remove-field" (click)="removeEndDate()">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
                Remove
              </button>
            </app-date-picker>
          </div>
        </div>

        <button
          *ngIf="!showEndDate"
          type="button"
          class="btn-add-enddate"
          (click)="showEndDate = true"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>
          Add end date
        </button>
        <p class="field-hint" *ngIf="!showEndDate">This program will run indefinitely until manually stopped.</p>
      </div>

      <!-- Weekly time windows -->
      <div class="section">
        <h3 class="section-title">Weekly schedule</h3>
        <p class="section-desc">
          Configure which days and hours the program is effective.
          If no days are enabled, the program applies 24/7 during the active period.
        </p>

        <div class="schedule-grid" formArrayName="weeklySchedules">
          <div
            *ngFor="let dayGroup of weeklySchedulesArray.controls; let i = index"
            class="schedule-row"
            [class.enabled]="dayGroup.get('enabled')?.value"
            [formGroupName]="i"
          >
            <div class="day-toggle">
              <app-switch
                [label]="getShortDayLabel(i)"
                formControlName="enabled"
              ></app-switch>
            </div>

            <div class="time-range" *ngIf="dayGroup.get('enabled')?.value">
              <div class="time-field">
                <label class="small-label">Start time</label>
                <app-select
                  formControlName="startTime"
                  [options]="timeOptions"
                  placeholder="Start"
                ></app-select>
              </div>
              <span class="time-sep">\u2014</span>
              <div class="time-field">
                <label class="small-label">End time</label>
                <app-select
                  formControlName="endTime"
                  [options]="timeOptions"
                  placeholder="End"
                ></app-select>
              </div>
            </div>

            <div class="time-off" *ngIf="!dayGroup.get('enabled')?.value">
              <span class="off-label">Off</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `, styles: ["/* angular:styles/component:css;56747adda4a5309e7db0d4e307b803fa705c7c6d438786181770aa294cad421f;/Users/baglan/repo/westwood/westwood-frontend/src/app/features/bonus-program/pages/create-program-wizard/steps/step-schedule.component.ts */\n.step-form {\n  display: flex;\n  flex-direction: column;\n  gap: 1.75rem;\n}\n.section {\n}\n.section-title {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 0.25rem 0;\n}\n.section-desc {\n  font-size: 0.85rem;\n  color: #64748b;\n  margin: 0 0 1rem 0;\n  line-height: 1.45;\n}\n.form-row {\n  display: flex;\n  gap: 1rem;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 0.35rem;\n}\n.flex-1 {\n  flex: 1;\n}\n.field-hint {\n  font-size: 0.8rem;\n  color: #64748b;\n  margin: 0.5rem 0 0 0;\n}\n.btn-add-enddate {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  background: none;\n  border: 1px dashed #cbd5e1;\n  border-radius: 6px;\n  padding: 0.5rem 1rem;\n  color: #16A34A;\n  font-size: 0.85rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.15s;\n  margin-top: 0.5rem;\n}\n.btn-add-enddate:hover {\n  border-color: #16A34A;\n  background: #f0fdf4;\n}\n.btn-add-enddate svg {\n  width: 16px;\n  height: 16px;\n}\n.btn-remove-field {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.25rem;\n  background: none;\n  border: none;\n  padding: 0;\n  margin-left: auto;\n  color: #ef4444;\n  font-size: 0.75rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: color 0.15s;\n}\n.btn-remove-field:hover {\n  color: #dc2626;\n}\n.btn-remove-field svg {\n  width: 14px;\n  height: 14px;\n}\n.schedule-grid {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.schedule-row {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 0.65rem 1rem;\n  border-radius: 8px;\n  background: #f8fafc;\n  border: 1px solid #f1f5f9;\n  transition: all 0.15s;\n}\n.schedule-row.enabled {\n  background: #fafffe;\n  border-color: #dcfce7;\n}\n.day-toggle {\n  min-width: 120px;\n}\n.time-range {\n  display: flex;\n  align-items: flex-end;\n  gap: 0.5rem;\n  flex: 1;\n}\n.time-field {\n  display: flex;\n  flex-direction: column;\n  gap: 0.2rem;\n  flex: 1;\n}\n.small-label {\n  font-size: 0.7rem;\n  color: #64748b;\n  font-weight: 500;\n}\n.time-sep {\n  color: #94a3b8;\n  font-weight: 600;\n  padding-bottom: 0.625rem;\n}\n.time-off {\n}\n.off-label {\n  font-size: 0.8rem;\n  color: #94a3b8;\n  font-style: italic;\n}\n/*# sourceMappingURL=step-schedule.component.css.map */\n"] }]
  }], null, { form: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StepScheduleComponent, { className: "StepScheduleComponent", filePath: "src/app/features/bonus-program/pages/create-program-wizard/steps/step-schedule.component.ts", lineNumber: 169 });
})();

// src/app/shared/components/number-field/number-field.component.ts
function NumberFieldComponent_label_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function NumberFieldComponent_label_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 8);
    \u0275\u0275text(1);
    \u0275\u0275template(2, NumberFieldComponent_label_1_span_2_Template, 2, 0, "span", 9);
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
function NumberFieldComponent_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.prefix);
  }
}
function NumberFieldComponent_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.suffix);
  }
}
function NumberFieldComponent_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMessage);
  }
}
function NumberFieldComponent_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.hint);
  }
}
var NumberFieldComponent = class _NumberFieldComponent {
  id = "";
  label = "";
  placeholder = "";
  disabled = false;
  required = false;
  min;
  max;
  step;
  prefix = "";
  suffix = "";
  errorMessage = "";
  hint = "";
  value = null;
  onChangeFn = (value) => {
  };
  onTouchedFn = () => {
  };
  onInput(event) {
    const target = event.target;
    this.value = target.value ? parseFloat(target.value) : null;
    this.onChangeFn(this.value);
  }
  onBlur() {
    this.onTouchedFn();
  }
  writeValue(value) {
    this.value = value ?? null;
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
  static \u0275fac = function NumberFieldComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NumberFieldComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NumberFieldComponent, selectors: [["app-number-field"]], inputs: { id: "id", label: "label", placeholder: "placeholder", disabled: "disabled", required: "required", min: "min", max: "max", step: "step", prefix: "prefix", suffix: "suffix", errorMessage: "errorMessage", hint: "hint" }, features: [\u0275\u0275ProvidersFeature([
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _NumberFieldComponent),
      multi: true
    }
  ])], decls: 8, vars: 18, consts: [[1, "number-field-wrapper"], ["class", "number-field-label", 3, "for", 4, "ngIf"], [1, "number-field-container"], ["class", "number-field-prefix", 4, "ngIf"], ["type", "number", 1, "number-field", 3, "input", "blur", "id", "placeholder", "value", "disabled", "min", "max", "step"], ["class", "number-field-suffix", 4, "ngIf"], ["class", "error-message", 4, "ngIf"], ["class", "hint-message", 4, "ngIf"], [1, "number-field-label", 3, "for"], ["class", "required-mark", 4, "ngIf"], [1, "required-mark"], [1, "number-field-prefix"], [1, "number-field-suffix"], [1, "error-message"], [1, "hint-message"]], template: function NumberFieldComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, NumberFieldComponent_label_1_Template, 3, 3, "label", 1);
      \u0275\u0275elementStart(2, "div", 2);
      \u0275\u0275template(3, NumberFieldComponent_span_3_Template, 2, 1, "span", 3);
      \u0275\u0275elementStart(4, "input", 4);
      \u0275\u0275listener("input", function NumberFieldComponent_Template_input_input_4_listener($event) {
        return ctx.onInput($event);
      })("blur", function NumberFieldComponent_Template_input_blur_4_listener() {
        return ctx.onBlur();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(5, NumberFieldComponent_span_5_Template, 2, 1, "span", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275template(6, NumberFieldComponent_span_6_Template, 2, 1, "span", 6)(7, NumberFieldComponent_span_7_Template, 2, 1, "span", 7);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.label);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.prefix);
      \u0275\u0275advance();
      \u0275\u0275classProp("error", !!ctx.errorMessage)("has-prefix", ctx.prefix)("has-suffix", ctx.suffix);
      \u0275\u0275property("id", ctx.id)("placeholder", ctx.placeholder)("value", ctx.value)("disabled", ctx.disabled)("min", ctx.min)("max", ctx.max)("step", ctx.step);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.suffix);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hint && !ctx.errorMessage);
    }
  }, dependencies: [CommonModule, NgIf, FormsModule], styles: ["\n\n.number-field-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  width: 100%;\n}\n.number-field-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 0.875rem;\n  color: #1a202c;\n}\n.required-mark[_ngcontent-%COMP%] {\n  color: #dc3545;\n  margin-left: 0.25rem;\n}\n.number-field-container[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.number-field[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.625rem 0.875rem;\n  border: 1px solid var(--color-input-border);\n  border-radius: 6px;\n  font-size: 0.875rem;\n  transition: all 0.2s ease;\n  background-color: #ffffff;\n  color: #1a202c;\n}\n.number-field[_ngcontent-%COMP%]:hover {\n  border-color: var(--color-input-border-hover);\n}\n.number-field[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--color-input-border-focus);\n  box-shadow: 0 0 0 3px var(--color-input-shadow-focus);\n}\n.number-field[_ngcontent-%COMP%]:disabled {\n  background-color: #f8f9fa;\n  color: #94a3b8;\n  cursor: not-allowed;\n}\n.number-field.error[_ngcontent-%COMP%] {\n  border-color: var(--color-input-error);\n}\n.number-field.has-prefix[_ngcontent-%COMP%] {\n  padding-left: 2.5rem;\n}\n.number-field.has-suffix[_ngcontent-%COMP%] {\n  padding-right: 2.5rem;\n}\n.number-field-prefix[_ngcontent-%COMP%], \n.number-field-suffix[_ngcontent-%COMP%] {\n  position: absolute;\n  color: #64748b;\n  font-size: 0.875rem;\n  pointer-events: none;\n}\n.number-field-prefix[_ngcontent-%COMP%] {\n  left: 0.875rem;\n}\n.number-field-suffix[_ngcontent-%COMP%] {\n  right: 0.875rem;\n}\n.error-message[_ngcontent-%COMP%] {\n  color: #dc3545;\n  font-size: 0.75rem;\n}\n.hint-message[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 0.75rem;\n}\n/*# sourceMappingURL=number-field.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NumberFieldComponent, [{
    type: Component,
    args: [{ selector: "app-number-field", standalone: true, imports: [CommonModule, FormsModule], providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => NumberFieldComponent),
        multi: true
      }
    ], template: `
    <div class="number-field-wrapper">
      <label *ngIf="label" [for]="id" class="number-field-label">
        {{ label }}
        <span *ngIf="required" class="required-mark">*</span>
      </label>
      <div class="number-field-container">
        <span *ngIf="prefix" class="number-field-prefix">{{ prefix }}</span>
        <input
          [id]="id"
          type="number"
          [placeholder]="placeholder"
          [value]="value"
          [disabled]="disabled"
          [min]="min"
          [max]="max"
          [step]="step"
          (input)="onInput($event)"
          (blur)="onBlur()"
          class="number-field"
          [class.error]="!!errorMessage"
          [class.has-prefix]="prefix"
          [class.has-suffix]="suffix"
        />
        <span *ngIf="suffix" class="number-field-suffix">{{ suffix }}</span>
      </div>
      <span *ngIf="errorMessage" class="error-message">{{ errorMessage }}</span>
      <span *ngIf="hint && !errorMessage" class="hint-message">{{ hint }}</span>
    </div>
  `, styles: ["/* angular:styles/component:css;bce198c7684eb3c0d4b292f53ac98d646791f1920cb4a6bf35865cd6eceb7fa0;/Users/baglan/repo/westwood/westwood-frontend/src/app/shared/components/number-field/number-field.component.ts */\n.number-field-wrapper {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  width: 100%;\n}\n.number-field-label {\n  font-weight: 500;\n  font-size: 0.875rem;\n  color: #1a202c;\n}\n.required-mark {\n  color: #dc3545;\n  margin-left: 0.25rem;\n}\n.number-field-container {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.number-field {\n  width: 100%;\n  padding: 0.625rem 0.875rem;\n  border: 1px solid var(--color-input-border);\n  border-radius: 6px;\n  font-size: 0.875rem;\n  transition: all 0.2s ease;\n  background-color: #ffffff;\n  color: #1a202c;\n}\n.number-field:hover {\n  border-color: var(--color-input-border-hover);\n}\n.number-field:focus {\n  outline: none;\n  border-color: var(--color-input-border-focus);\n  box-shadow: 0 0 0 3px var(--color-input-shadow-focus);\n}\n.number-field:disabled {\n  background-color: #f8f9fa;\n  color: #94a3b8;\n  cursor: not-allowed;\n}\n.number-field.error {\n  border-color: var(--color-input-error);\n}\n.number-field.has-prefix {\n  padding-left: 2.5rem;\n}\n.number-field.has-suffix {\n  padding-right: 2.5rem;\n}\n.number-field-prefix,\n.number-field-suffix {\n  position: absolute;\n  color: #64748b;\n  font-size: 0.875rem;\n  pointer-events: none;\n}\n.number-field-prefix {\n  left: 0.875rem;\n}\n.number-field-suffix {\n  right: 0.875rem;\n}\n.error-message {\n  color: #dc3545;\n  font-size: 0.75rem;\n}\n.hint-message {\n  color: #64748b;\n  font-size: 0.75rem;\n}\n/*# sourceMappingURL=number-field.component.css.map */\n"] }]
  }], null, { id: [{
    type: Input
  }], label: [{
    type: Input
  }], placeholder: [{
    type: Input
  }], disabled: [{
    type: Input
  }], required: [{
    type: Input
  }], min: [{
    type: Input
  }], max: [{
    type: Input
  }], step: [{
    type: Input
  }], prefix: [{
    type: Input
  }], suffix: [{
    type: Input
  }], errorMessage: [{
    type: Input
  }], hint: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NumberFieldComponent, { className: "NumberFieldComponent", filePath: "src/app/shared/components/number-field/number-field.component.ts", lineNumber: 137 });
})();

// src/app/features/bonus-program/pages/create-program-wizard/steps/step-rules.component.ts
function StepRulesComponent_p_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 22);
    \u0275\u0275text(1, " Specific item/category/service filtering will be available when multi-tenancy is supported. ");
    \u0275\u0275elementEnd();
  }
}
function StepRulesComponent_button_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275listener("click", function StepRulesComponent_button_22_Template_button_click_0_listener() {
      const p_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setRedeem(p_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.redeemValue === p_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", p_r2, "%");
  }
}
function StepRulesComponent_p_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 24);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Example: Purchase 10,000 \u2014 customer can cover up to ", \u0275\u0275pipeBind2(2, 1, 1e4 * ctx_r2.redeemValue / 100, "1.0-0"), " using points. ");
  }
}
var StepRulesComponent = class _StepRulesComponent {
  form;
  redeemPresets = [25, 50, 75, 100];
  eligibilityOptions = [
    { value: "ALL", label: "All items and categories" },
    { value: "SPECIFIC_ITEMS", label: "Specific items", disabled: true },
    { value: "SPECIFIC_CATEGORIES", label: "Specific categories", disabled: true },
    { value: "SPECIFIC_SERVICES", label: "Specific services", disabled: true }
  ];
  get redeemValue() {
    return this.form.get("redeemLimitPercent")?.value ?? 100;
  }
  setRedeem(val) {
    this.form.get("redeemLimitPercent")?.setValue(val);
  }
  adjustRedeem(delta) {
    let newVal = this.redeemValue + delta;
    newVal = Math.max(0, Math.min(100, newVal));
    this.form.get("redeemLimitPercent")?.setValue(newVal);
  }
  onRedeemInput(event) {
    const target = event.target;
    let val = parseInt(target.value, 10);
    if (isNaN(val))
      val = 0;
    val = Math.max(0, Math.min(100, val));
    this.form.get("redeemLimitPercent")?.setValue(val);
  }
  static \u0275fac = function StepRulesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StepRulesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StepRulesComponent, selectors: [["app-step-rules"]], inputs: { form: "form" }, decls: 34, vars: 12, consts: [[1, "step-form", 3, "formGroup"], [1, "form-group"], ["id", "minSpendAmount", "label", "Minimum spend amount", "placeholder", "0", "formControlName", "minSpendAmount", "hint", "Set to 0 for any transaction amount to qualify.", 3, "min"], ["id", "eligibilityType", "label", "Transaction eligibility", "formControlName", "eligibilityType", 3, "options", "required"], ["class", "field-hint", 4, "ngIf"], [1, "field-label"], [1, "redeem-input-row"], [1, "redeem-stepper"], ["type", "button", 1, "stepper-btn", 3, "click", "disabled"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5"], ["d", "M5 12h14"], [1, "redeem-value-wrap"], ["type", "number", "min", "0", "max", "100", 1, "redeem-input", 3, "input", "value"], [1, "redeem-unit"], ["d", "M12 5v14M5 12h14"], [1, "preset-chips"], ["type", "button", "class", "preset-chip", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "redeem-context"], [1, "context-text"], ["class", "context-example", 4, "ngIf"], [1, "context-recommend"], ["id", "bonusLifespanDays", "label", "Bonus lifespan (days)", "placeholder", "e.g. 90", "formControlName", "bonusLifespanDays", "hint", "Leave empty for bonuses that never expire. Set a value for time-limited bonuses.", 3, "min"], [1, "field-hint"], ["type", "button", 1, "preset-chip", 3, "click"], [1, "context-example"]], template: function StepRulesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275element(2, "app-number-field", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 1);
      \u0275\u0275element(4, "app-select", 3);
      \u0275\u0275template(5, StepRulesComponent_p_5_Template, 2, 0, "p", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 1)(7, "label", 5);
      \u0275\u0275text(8, "Redeem up to");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 6)(10, "div", 7)(11, "button", 8);
      \u0275\u0275listener("click", function StepRulesComponent_Template_button_click_11_listener() {
        return ctx.adjustRedeem(-5);
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(12, "svg", 9);
      \u0275\u0275element(13, "path", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(14, "div", 11)(15, "input", 12);
      \u0275\u0275listener("input", function StepRulesComponent_Template_input_input_15_listener($event) {
        return ctx.onRedeemInput($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "span", 13);
      \u0275\u0275text(17, "%");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "button", 8);
      \u0275\u0275listener("click", function StepRulesComponent_Template_button_click_18_listener() {
        return ctx.adjustRedeem(5);
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(19, "svg", 9);
      \u0275\u0275element(20, "path", 14);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(21, "div", 15);
      \u0275\u0275template(22, StepRulesComponent_button_22_Template, 2, 3, "button", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div", 17)(24, "p", 18);
      \u0275\u0275text(25, " Customer can pay up to ");
      \u0275\u0275elementStart(26, "strong");
      \u0275\u0275text(27);
      \u0275\u0275elementEnd();
      \u0275\u0275text(28, " of purchase using points. ");
      \u0275\u0275elementEnd();
      \u0275\u0275template(29, StepRulesComponent_p_29_Template, 3, 4, "p", 19);
      \u0275\u0275elementStart(30, "p", 20);
      \u0275\u0275text(31, "Recommended: 30\u201370%");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(32, "div", 1);
      \u0275\u0275element(33, "app-number-field", 21);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      let tmp_4_0;
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(2);
      \u0275\u0275property("min", 0);
      \u0275\u0275advance(2);
      \u0275\u0275property("options", ctx.eligibilityOptions)("required", true);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ((tmp_4_0 = ctx.form.get("eligibilityType")) == null ? null : tmp_4_0.value) !== "ALL");
      \u0275\u0275advance(6);
      \u0275\u0275property("disabled", ctx.redeemValue <= 0);
      \u0275\u0275advance(4);
      \u0275\u0275property("value", ctx.redeemValue);
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", ctx.redeemValue >= 100);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngForOf", ctx.redeemPresets);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1("", ctx.redeemValue, "%");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.redeemValue > 0);
      \u0275\u0275advance(4);
      \u0275\u0275property("min", 0);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, DecimalPipe, ReactiveFormsModule, NgControlStatus, NgControlStatusGroup, RequiredValidator, FormGroupDirective, FormControlName, SelectComponent, NumberFieldComponent], styles: ["\n\n.step-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.field-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 0.875rem;\n  color: #1a202c;\n  margin-bottom: 0.25rem;\n}\n.field-hint[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #64748b;\n  margin: 0.25rem 0 0 0;\n}\n.redeem-input-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.redeem-stepper[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  background: #ffffff;\n  overflow: hidden;\n}\n.stepper-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 44px;\n  background: #f8fafc;\n  border: none;\n  cursor: pointer;\n  color: #475569;\n  transition: all 0.15s;\n}\n.stepper-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f0fdf4;\n  color: #16A34A;\n}\n.stepper-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.stepper-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n.redeem-value-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.2rem;\n  padding: 0 0.5rem;\n  min-width: 72px;\n  justify-content: center;\n}\n.redeem-input[_ngcontent-%COMP%] {\n  width: 48px;\n  text-align: center;\n  border: none;\n  outline: none;\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #0f172a;\n  background: transparent;\n  -moz-appearance: textfield;\n}\n.redeem-input[_ngcontent-%COMP%]::-webkit-inner-spin-button, \n.redeem-input[_ngcontent-%COMP%]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n.redeem-unit[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #64748b;\n}\n.preset-chips[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  margin-top: 0.5rem;\n}\n.preset-chip[_ngcontent-%COMP%] {\n  padding: 0.375rem 0.875rem;\n  border: 1px solid #e2e8f0;\n  border-radius: 20px;\n  background: #ffffff;\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #475569;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.preset-chip[_ngcontent-%COMP%]:hover {\n  border-color: #16A34A;\n  color: #16A34A;\n  background: #f0fdf4;\n}\n.preset-chip.active[_ngcontent-%COMP%] {\n  background: #16A34A;\n  color: #ffffff;\n  border-color: #16A34A;\n}\n.redeem-context[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  padding: 0.75rem 1rem;\n  background: #f8fafc;\n  border-radius: 8px;\n  border: 1px solid #f1f5f9;\n}\n.context-text[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #0f172a;\n  margin: 0 0 0.25rem 0;\n}\n.context-example[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #64748b;\n  margin: 0 0 0.25rem 0;\n}\n.context-recommend[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #16A34A;\n  font-weight: 600;\n  margin: 0;\n}\n/*# sourceMappingURL=step-rules.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepRulesComponent, [{
    type: Component,
    args: [{ selector: "app-step-rules", standalone: true, imports: [CommonModule, ReactiveFormsModule, SelectComponent, NumberFieldComponent], template: `
    <div class="step-form" [formGroup]="form">
      <!-- Min spend -->
      <div class="form-group">
        <app-number-field
          id="minSpendAmount"
          label="Minimum spend amount"
          placeholder="0"
          formControlName="minSpendAmount"
          [min]="0"
          hint="Set to 0 for any transaction amount to qualify."
        ></app-number-field>
      </div>

      <!-- Eligibility -->
      <div class="form-group">
        <app-select
          id="eligibilityType"
          label="Transaction eligibility"
          formControlName="eligibilityType"
          [options]="eligibilityOptions"
          [required]="true"
        ></app-select>
        <p class="field-hint" *ngIf="form.get('eligibilityType')?.value !== 'ALL'">
          Specific item/category/service filtering will be available when multi-tenancy is supported.
        </p>
      </div>

      <!-- Redeem limit \u2014 numeric input + presets -->
      <div class="form-group">
        <label class="field-label">Redeem up to</label>

        <div class="redeem-input-row">
          <div class="redeem-stepper">
            <button type="button" class="stepper-btn" (click)="adjustRedeem(-5)" [disabled]="redeemValue <= 0">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14"/></svg>
            </button>
            <div class="redeem-value-wrap">
              <input
                type="number"
                class="redeem-input"
                [value]="redeemValue"
                (input)="onRedeemInput($event)"
                min="0"
                max="100"
              />
              <span class="redeem-unit">%</span>
            </div>
            <button type="button" class="stepper-btn" (click)="adjustRedeem(5)" [disabled]="redeemValue >= 100">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg>
            </button>
          </div>
        </div>

        <div class="preset-chips">
          <button
            *ngFor="let p of redeemPresets"
            type="button"
            class="preset-chip"
            [class.active]="redeemValue === p"
            (click)="setRedeem(p)"
          >{{ p }}%</button>
        </div>

        <!-- Contextual help -->
        <div class="redeem-context">
          <p class="context-text">
            Customer can pay up to <strong>{{ redeemValue }}%</strong> of purchase using points.
          </p>
          <p class="context-example" *ngIf="redeemValue > 0">
            Example: Purchase 10,000 \u2014 customer can cover up to {{ (10000 * redeemValue / 100) | number:'1.0-0' }} using points.
          </p>
          <p class="context-recommend">Recommended: 30\u201370%</p>
        </div>
      </div>

      <!-- Bonus lifespan -->
      <div class="form-group">
        <app-number-field
          id="bonusLifespanDays"
          label="Bonus lifespan (days)"
          placeholder="e.g. 90"
          formControlName="bonusLifespanDays"
          [min]="0"
          hint="Leave empty for bonuses that never expire. Set a value for time-limited bonuses."
        ></app-number-field>
      </div>
    </div>
  `, styles: ["/* angular:styles/component:css;93b480a3d61b4fe9abd7bd6476012e0e8da9d8fd980f128afc8b5f91067a121f;/Users/baglan/repo/westwood/westwood-frontend/src/app/features/bonus-program/pages/create-program-wizard/steps/step-rules.component.ts */\n.step-form {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.field-label {\n  font-weight: 500;\n  font-size: 0.875rem;\n  color: #1a202c;\n  margin-bottom: 0.25rem;\n}\n.field-hint {\n  font-size: 0.8rem;\n  color: #64748b;\n  margin: 0.25rem 0 0 0;\n}\n.redeem-input-row {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.redeem-stepper {\n  display: inline-flex;\n  align-items: center;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  background: #ffffff;\n  overflow: hidden;\n}\n.stepper-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 44px;\n  background: #f8fafc;\n  border: none;\n  cursor: pointer;\n  color: #475569;\n  transition: all 0.15s;\n}\n.stepper-btn:hover:not(:disabled) {\n  background: #f0fdf4;\n  color: #16A34A;\n}\n.stepper-btn:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.stepper-btn svg {\n  width: 16px;\n  height: 16px;\n}\n.redeem-value-wrap {\n  display: flex;\n  align-items: center;\n  gap: 0.2rem;\n  padding: 0 0.5rem;\n  min-width: 72px;\n  justify-content: center;\n}\n.redeem-input {\n  width: 48px;\n  text-align: center;\n  border: none;\n  outline: none;\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #0f172a;\n  background: transparent;\n  -moz-appearance: textfield;\n}\n.redeem-input::-webkit-inner-spin-button,\n.redeem-input::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n.redeem-unit {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #64748b;\n}\n.preset-chips {\n  display: flex;\n  gap: 0.5rem;\n  margin-top: 0.5rem;\n}\n.preset-chip {\n  padding: 0.375rem 0.875rem;\n  border: 1px solid #e2e8f0;\n  border-radius: 20px;\n  background: #ffffff;\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #475569;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.preset-chip:hover {\n  border-color: #16A34A;\n  color: #16A34A;\n  background: #f0fdf4;\n}\n.preset-chip.active {\n  background: #16A34A;\n  color: #ffffff;\n  border-color: #16A34A;\n}\n.redeem-context {\n  margin-top: 0.5rem;\n  padding: 0.75rem 1rem;\n  background: #f8fafc;\n  border-radius: 8px;\n  border: 1px solid #f1f5f9;\n}\n.context-text {\n  font-size: 0.85rem;\n  color: #0f172a;\n  margin: 0 0 0.25rem 0;\n}\n.context-example {\n  font-size: 0.8rem;\n  color: #64748b;\n  margin: 0 0 0.25rem 0;\n}\n.context-recommend {\n  font-size: 0.75rem;\n  color: #16A34A;\n  font-weight: 600;\n  margin: 0;\n}\n/*# sourceMappingURL=step-rules.component.css.map */\n"] }]
  }], null, { form: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StepRulesComponent, { className: "StepRulesComponent", filePath: "src/app/features/bonus-program/pages/create-program-wizard/steps/step-rules.component.ts", lineNumber: 158 });
})();

// src/app/features/bonus-program/pages/create-program-wizard/steps/step-tiers.component.ts
function StepTiersComponent_div_8__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 17);
    \u0275\u0275element(1, "circle", 18)(2, "circle", 19)(3, "path", 20);
    \u0275\u0275elementEnd();
  }
}
function StepTiersComponent_div_8__svg_svg_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 17);
    \u0275\u0275element(1, "path", 21);
    \u0275\u0275elementEnd();
  }
}
function StepTiersComponent_div_8_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "strong");
    \u0275\u0275text(2, "Percentage mode");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " \u2014 each tier adds extra ");
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5, "%");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " on top of the base cashback rate. ");
    \u0275\u0275elementStart(7, "span", 23);
    \u0275\u0275text(8, "e.g. Base 5% + Silver tier 1% = customer earns 6%");
    \u0275\u0275elementEnd()();
  }
}
function StepTiersComponent_div_8_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "strong");
    \u0275\u0275text(2, "Bonus Points mode");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " \u2014 each tier adds ");
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5, "extra points");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " per spend threshold on top of the base earn rate. ");
    \u0275\u0275elementStart(7, "span", 23);
    \u0275\u0275text(8, "e.g. Base 1 pt per 1,000 + Silver tier +1 = customer earns 2 pts per 1,000");
    \u0275\u0275elementEnd()();
  }
}
function StepTiersComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "span", 14);
    \u0275\u0275template(2, StepTiersComponent_div_8__svg_svg_2_Template, 4, 0, "svg", 15)(3, StepTiersComponent_div_8__svg_svg_3_Template, 2, 0, "svg", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, StepTiersComponent_div_8_div_4_Template, 9, 0, "div", 16)(5, StepTiersComponent_div_8_div_5_Template, 9, 0, "div", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.isPercentage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isPercentage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isPercentage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isPercentage);
  }
}
function StepTiersComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 25)(2, "span", 26);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 27);
    \u0275\u0275listener("click", function StepTiersComponent_div_10_Template_button_click_4_listener() {
      const i_r3 = \u0275\u0275restoreView(_r2).index;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.removeTier(i_r3));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 17);
    \u0275\u0275element(6, "path", 28);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "div", 29)(8, "div", 30);
    \u0275\u0275element(9, "app-input", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 32)(11, "div", 30);
    \u0275\u0275element(12, "app-number-field", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 30);
    \u0275\u0275element(14, "app-number-field", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 30);
    \u0275\u0275element(16, "app-number-field", 35);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const i_r3 = ctx.index;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroupName", i_r3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Tier ", i_r3 + 1, "");
    \u0275\u0275advance(6);
    \u0275\u0275property("id", "tierName" + i_r3)("required", true)("errorMessage", ctx_r0.getTierError(i_r3, "name"));
    \u0275\u0275advance(3);
    \u0275\u0275property("id", "tierMin" + i_r3)("min", 0)("required", true)("errorMessage", ctx_r0.getTierError(i_r3, "minAmount"));
    \u0275\u0275advance(2);
    \u0275\u0275property("id", "tierMax" + i_r3)("min", 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("id", "tierExtra" + i_r3)("label", ctx_r0.extraEarningLabel)("placeholder", ctx_r0.extraEarningPlaceholder)("min", 0)("required", true)("hint", ctx_r0.extraEarningHint)("errorMessage", ctx_r0.getTierError(i_r3, "extraEarningPercent"));
  }
}
function StepTiersComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "p", 37);
    \u0275\u0275text(2, "No tiers configured");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 38);
    \u0275\u0275text(4, "All customers will earn at the base rate. Add tiers above to reward higher spenders.");
    \u0275\u0275elementEnd()();
  }
}
var StepTiersComponent = class _StepTiersComponent {
  form;
  fb = new FormBuilder();
  get tiersArray() {
    return this.form.get("tiers");
  }
  get cashbackType() {
    return this.form.get("cashbackType")?.value || null;
  }
  get isPercentage() {
    return this.cashbackType === "PERCENTAGE";
  }
  get extraEarningLabel() {
    return this.isPercentage ? "Extra earning (%)" : "Extra points";
  }
  get extraEarningPlaceholder() {
    return this.isPercentage ? "e.g. 2" : "e.g. 1";
  }
  get extraEarningHint() {
    return this.isPercentage ? "Added on top of the base % rate" : "Extra points per spend threshold";
  }
  addTier() {
    const nextSort = this.tiersArray.length;
    this.tiersArray.push(this.fb.group({
      name: ["", Validators.required],
      minAmount: [0, [Validators.required, Validators.min(0)]],
      maxAmount: [null],
      extraEarningPercent: [0, [Validators.required, Validators.min(0)]],
      sortOrder: [nextSort]
    }));
  }
  removeTier(index) {
    this.tiersArray.removeAt(index);
    this.tiersArray.controls.forEach((ctrl, i) => {
      ctrl.get("sortOrder")?.setValue(i);
    });
  }
  getTierError(tierIndex, field) {
    const control = this.tiersArray.at(tierIndex)?.get(field);
    if (control && control.touched && control.invalid) {
      if (control.errors?.["required"])
        return "Required";
      if (control.errors?.["min"])
        return `Min ${control.errors["min"].min}`;
    }
    return "";
  }
  static \u0275fac = function StepTiersComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StepTiersComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StepTiersComponent, selectors: [["app-step-tiers"]], inputs: { form: "form" }, decls: 15, vars: 4, consts: [[1, "step-form", 3, "formGroup"], [1, "info-banner"], ["aria-hidden", "true", 1, "info-banner-icon"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "stroke-linecap", "round"], ["cx", "12", "cy", "12", "r", "9"], ["d", "M12 16V12M12 9h.01"], [1, "info-banner-text"], ["class", "type-context-banner", 4, "ngIf"], ["formArrayName", "tiers", 1, "tiers-list"], ["class", "tier-card", 3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "add-tier-row"], ["buttonType", "primary", "size", "medium", 3, "onClick"], ["class", "empty-state", 4, "ngIf"], [1, "type-context-banner"], [1, "ctx-icon"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 4, "ngIf"], ["class", "ctx-text", 4, "ngIf"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["cx", "9", "cy", "9", "r", "2.5"], ["cx", "15", "cy", "15", "r", "2.5"], ["d", "M5.5 18.5l13-13"], ["d", "M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"], [1, "ctx-text"], [1, "ctx-example"], [1, "tier-card", 3, "formGroupName"], [1, "tier-header"], [1, "tier-number"], ["type", "button", "title", "Remove tier", 1, "btn-remove", 3, "click"], ["d", "M18 6L6 18M6 6l12 12"], [1, "tier-fields"], [1, "form-group"], ["label", "Tier name", "placeholder", "e.g. Bronze, Silver, Gold", "formControlName", "name", 3, "id", "required", "errorMessage"], [1, "form-row", "three-col"], ["label", "Min spend", "placeholder", "0", "formControlName", "minAmount", 3, "id", "min", "required", "errorMessage"], ["label", "Max spend", "placeholder", "No limit", "formControlName", "maxAmount", "hint", "Leave empty for unlimited", 3, "id", "min"], ["formControlName", "extraEarningPercent", 3, "id", "label", "placeholder", "min", "required", "hint", "errorMessage"], [1, "empty-state"], [1, "empty-title"], [1, "empty-desc"]], template: function StepTiersComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(3, "svg", 3);
      \u0275\u0275element(4, "circle", 4)(5, "path", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(6, "p", 6);
      \u0275\u0275text(7, " Tiers are optional. They let you reward loyal customers with extra earning rates based on their accumulated spending. Tier progress resets when the program is closed. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(8, StepTiersComponent_div_8_Template, 6, 4, "div", 7);
      \u0275\u0275elementStart(9, "div", 8);
      \u0275\u0275template(10, StepTiersComponent_div_10_Template, 17, 18, "div", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 10)(12, "app-button", 11);
      \u0275\u0275listener("onClick", function StepTiersComponent_Template_app_button_onClick_12_listener() {
        return ctx.addTier();
      });
      \u0275\u0275text(13, " + Add tier ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(14, StepTiersComponent_div_14_Template, 5, 0, "div", 12);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(8);
      \u0275\u0275property("ngIf", ctx.cashbackType);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.tiersArray.controls);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.tiersArray.length === 0);
    }
  }, dependencies: [
    CommonModule,
    NgForOf,
    NgIf,
    ReactiveFormsModule,
    NgControlStatus,
    NgControlStatusGroup,
    RequiredValidator,
    FormGroupDirective,
    FormControlName,
    FormGroupName,
    FormArrayName,
    InputComponent,
    NumberFieldComponent,
    ButtonComponent
  ], styles: ["\n\n.step-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.info-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.75rem;\n  padding: 1rem 1.25rem;\n  border-radius: 8px;\n  background: #f0f9ff;\n  border: 1px solid #bae6fd;\n}\n.info-banner-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #0ea5e9;\n}\n.info-banner-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n}\n.info-banner-text[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  color: #0f172a;\n  font-weight: 600;\n}\n.tiers-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.tier-card[_ngcontent-%COMP%] {\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 1rem 1.25rem;\n  background: #fafbfc;\n}\n.tier-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.75rem;\n}\n.tier-number[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: #0f172a;\n}\n.btn-remove[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0.25rem;\n  color: #94a3b8;\n  transition: color 0.15s;\n}\n.btn-remove[_ngcontent-%COMP%]:hover {\n  color: #ef4444;\n}\n.btn-remove[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n}\n.tier-fields[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n}\n.form-row.three-col[_ngcontent-%COMP%]    > .form-group[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.add-tier-row[_ngcontent-%COMP%] {\n  display: flex;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 1.5rem 0;\n}\n.empty-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 600;\n  color: #64748b;\n  margin: 0 0 0.25rem 0;\n}\n.empty-desc[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #94a3b8;\n  margin: 0;\n}\n.type-context-banner[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  align-items: flex-start;\n  padding: 0.875rem 1rem;\n  border-radius: 8px;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n}\n.ctx-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 36px;\n  height: 36px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #dcfce7;\n  border-radius: 8px;\n  color: #16A34A;\n}\n.ctx-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n}\n.ctx-text[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #475569;\n  line-height: 1.5;\n}\n.ctx-example[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.8rem;\n  color: #94a3b8;\n  margin-top: 0.15rem;\n}\n/*# sourceMappingURL=step-tiers.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepTiersComponent, [{
    type: Component,
    args: [{ selector: "app-step-tiers", standalone: true, imports: [
      CommonModule,
      ReactiveFormsModule,
      InputComponent,
      NumberFieldComponent,
      ButtonComponent
    ], template: `
    <div class="step-form" [formGroup]="form">
      <div class="info-banner">
        <span class="info-banner-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
            <circle cx="12" cy="12" r="9"/>
            <path d="M12 16V12M12 9h.01"/>
          </svg>
        </span>
        <p class="info-banner-text">
          Tiers are optional. They let you reward loyal customers with extra earning rates
          based on their accumulated spending. Tier progress resets when the program is closed.
        </p>
      </div>

      <!-- Context banner based on cashback type -->
      <div class="type-context-banner" *ngIf="cashbackType">
        <span class="ctx-icon">
          <svg *ngIf="isPercentage" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="9" r="2.5"/><circle cx="15" cy="15" r="2.5"/><path d="M5.5 18.5l13-13"/></svg>
          <svg *ngIf="!isPercentage" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>
        </span>
        <div class="ctx-text" *ngIf="isPercentage">
          <strong>Percentage mode</strong> \u2014 each tier adds extra <strong>%</strong> on top of the base cashback rate.
          <span class="ctx-example">e.g. Base 5% + Silver tier 1% = customer earns 6%</span>
        </div>
        <div class="ctx-text" *ngIf="!isPercentage">
          <strong>Bonus Points mode</strong> \u2014 each tier adds <strong>extra points</strong> per spend threshold on top of the base earn rate.
          <span class="ctx-example">e.g. Base 1 pt per 1,000 + Silver tier +1 = customer earns 2 pts per 1,000</span>
        </div>
      </div>

      <div class="tiers-list" formArrayName="tiers">
        <div
          *ngFor="let tier of tiersArray.controls; let i = index"
          class="tier-card"
          [formGroupName]="i"
        >
          <div class="tier-header">
            <span class="tier-number">Tier {{ i + 1 }}</span>
            <button type="button" class="btn-remove" (click)="removeTier(i)" title="Remove tier">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </button>
          </div>

          <div class="tier-fields">
            <div class="form-group">
              <app-input
                [id]="'tierName' + i"
                label="Tier name"
                placeholder="e.g. Bronze, Silver, Gold"
                formControlName="name"
                [required]="true"
                [errorMessage]="getTierError(i, 'name')"
              ></app-input>
            </div>

            <div class="form-row three-col">
              <div class="form-group">
                <app-number-field
                  [id]="'tierMin' + i"
                  label="Min spend"
                  placeholder="0"
                  formControlName="minAmount"
                  [min]="0"
                  [required]="true"
                  [errorMessage]="getTierError(i, 'minAmount')"
                ></app-number-field>
              </div>
              <div class="form-group">
                <app-number-field
                  [id]="'tierMax' + i"
                  label="Max spend"
                  placeholder="No limit"
                  formControlName="maxAmount"
                  [min]="0"
                  hint="Leave empty for unlimited"
                ></app-number-field>
              </div>
              <div class="form-group">
                <app-number-field
                  [id]="'tierExtra' + i"
                  [label]="extraEarningLabel"
                  [placeholder]="extraEarningPlaceholder"
                  formControlName="extraEarningPercent"
                  [min]="0"
                  [required]="true"
                  [hint]="extraEarningHint"
                  [errorMessage]="getTierError(i, 'extraEarningPercent')"
                ></app-number-field>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="add-tier-row">
        <app-button buttonType="primary" size="medium" (onClick)="addTier()">
          + Add tier
        </app-button>
      </div>

      <div class="empty-state" *ngIf="tiersArray.length === 0">
        <p class="empty-title">No tiers configured</p>
        <p class="empty-desc">All customers will earn at the base rate. Add tiers above to reward higher spenders.</p>
      </div>
    </div>
  `, styles: ["/* angular:styles/component:css;f46694e8a486329788e4522522bb29caee23bf13b0242ebb10aa01ae110216c0;/Users/baglan/repo/westwood/westwood-frontend/src/app/features/bonus-program/pages/create-program-wizard/steps/step-tiers.component.ts */\n.step-form {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.info-banner {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.75rem;\n  padding: 1rem 1.25rem;\n  border-radius: 8px;\n  background: #f0f9ff;\n  border: 1px solid #bae6fd;\n}\n.info-banner-icon {\n  flex-shrink: 0;\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #0ea5e9;\n}\n.info-banner-icon svg {\n  width: 22px;\n  height: 22px;\n}\n.info-banner-text {\n  margin: 0;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  color: #0f172a;\n  font-weight: 600;\n}\n.tiers-list {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.tier-card {\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 1rem 1.25rem;\n  background: #fafbfc;\n}\n.tier-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.75rem;\n}\n.tier-number {\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: #0f172a;\n}\n.btn-remove {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0.25rem;\n  color: #94a3b8;\n  transition: color 0.15s;\n}\n.btn-remove:hover {\n  color: #ef4444;\n}\n.btn-remove svg {\n  width: 18px;\n  height: 18px;\n}\n.tier-fields {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.form-row {\n  display: flex;\n  gap: 0.75rem;\n}\n.form-row.three-col > .form-group {\n  flex: 1;\n}\n.add-tier-row {\n  display: flex;\n}\n.empty-state {\n  text-align: center;\n  padding: 1.5rem 0;\n}\n.empty-title {\n  font-size: 0.95rem;\n  font-weight: 600;\n  color: #64748b;\n  margin: 0 0 0.25rem 0;\n}\n.empty-desc {\n  font-size: 0.8rem;\n  color: #94a3b8;\n  margin: 0;\n}\n.type-context-banner {\n  display: flex;\n  gap: 0.75rem;\n  align-items: flex-start;\n  padding: 0.875rem 1rem;\n  border-radius: 8px;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n}\n.ctx-icon {\n  flex-shrink: 0;\n  width: 36px;\n  height: 36px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #dcfce7;\n  border-radius: 8px;\n  color: #16A34A;\n}\n.ctx-icon svg {\n  width: 18px;\n  height: 18px;\n}\n.ctx-text {\n  font-size: 0.85rem;\n  color: #475569;\n  line-height: 1.5;\n}\n.ctx-example {\n  display: block;\n  font-size: 0.8rem;\n  color: #94a3b8;\n  margin-top: 0.15rem;\n}\n/*# sourceMappingURL=step-tiers.component.css.map */\n"] }]
  }], null, { form: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StepTiersComponent, { className: "StepTiersComponent", filePath: "src/app/features/bonus-program/pages/create-program-wizard/steps/step-tiers.component.ts", lineNumber: 186 });
})();

// src/app/features/bonus-program/pages/create-program-wizard/steps/step-notifications.component.ts
var StepNotificationsComponent = class _StepNotificationsComponent {
  static \u0275fac = function StepNotificationsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StepNotificationsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StepNotificationsComponent, selectors: [["app-step-notifications"]], decls: 11, vars: 1, consts: [[1, "step-content"], [1, "info-banner"], ["aria-hidden", "true", 1, "info-banner-icon"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "stroke-linecap", "round"], ["cx", "12", "cy", "12", "r", "9"], ["d", "M12 16V12M12 9h.01"], [1, "info-banner-text"], [1, "action-row"], ["buttonType", "primary", 3, "disabled"]], template: function StepNotificationsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(3, "svg", 3);
      \u0275\u0275element(4, "circle", 4)(5, "path", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(6, "p", 6);
      \u0275\u0275text(7, " Set up automated text message marketing campaigns, or send manual ones, to keep your Loyalty members coming back more often. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 7)(9, "app-button", 8);
      \u0275\u0275text(10, " Promote this program ");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275property("disabled", true);
    }
  }, dependencies: [CommonModule, ButtonComponent], styles: ["\n\n.step-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n.info-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.75rem;\n  padding: 1rem 1.25rem;\n  border-radius: 8px;\n  background: #f0f9ff;\n  border: 1px solid #bae6fd;\n}\n.info-banner-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #0ea5e9;\n}\n.info-banner-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n}\n.info-banner-text[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  color: #0f172a;\n  font-weight: 600;\n}\n.action-row[_ngcontent-%COMP%] {\n  display: flex;\n}\n/*# sourceMappingURL=step-notifications.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepNotificationsComponent, [{
    type: Component,
    args: [{ selector: "app-step-notifications", standalone: true, imports: [CommonModule, ButtonComponent], template: `
    <div class="step-content">
      <div class="info-banner">
        <span class="info-banner-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
            <circle cx="12" cy="12" r="9"/>
            <path d="M12 16V12M12 9h.01"/>
          </svg>
        </span>
        <p class="info-banner-text">
          Set up automated text message marketing campaigns, or send manual ones,
          to keep your Loyalty members coming back more often.
        </p>
      </div>

      <div class="action-row">
        <app-button buttonType="primary" [disabled]="true">
          Promote this program
        </app-button>
      </div>
    </div>
  `, styles: ["/* angular:styles/component:css;d1debcb139913c35c3a1f8986538f958d3bbe3bad043cc430ce0523fd2c45059;/Users/baglan/repo/westwood/westwood-frontend/src/app/features/bonus-program/pages/create-program-wizard/steps/step-notifications.component.ts */\n.step-content {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n.info-banner {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.75rem;\n  padding: 1rem 1.25rem;\n  border-radius: 8px;\n  background: #f0f9ff;\n  border: 1px solid #bae6fd;\n}\n.info-banner-icon {\n  flex-shrink: 0;\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #0ea5e9;\n}\n.info-banner-icon svg {\n  width: 22px;\n  height: 22px;\n}\n.info-banner-text {\n  margin: 0;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  color: #0f172a;\n  font-weight: 600;\n}\n.action-row {\n  display: flex;\n}\n/*# sourceMappingURL=step-notifications.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StepNotificationsComponent, { className: "StepNotificationsComponent", filePath: "src/app/features/bonus-program/pages/create-program-wizard/steps/step-notifications.component.ts", lineNumber: 54 });
})();

// src/app/features/bonus-program/pages/create-program-wizard/steps/step-summary.component.ts
function StepSummaryComponent_app_alert_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-alert", 20);
    \u0275\u0275listener("dismissed", function StepSummaryComponent_app_alert_1_Template_app_alert_dismissed_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.launchError = "");
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("dismissible", true);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.launchError, " ");
  }
}
function StepSummaryComponent_p_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 21);
    \u0275\u0275text(1, " This program will be ");
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3, "scheduled");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " and automatically activated on the start date. ");
    \u0275\u0275elementEnd();
  }
}
function StepSummaryComponent_p_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 21);
    \u0275\u0275text(1, " This program will be ");
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3, "launched immediately");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " and become active right away. ");
    \u0275\u0275elementEnd();
  }
}
function StepSummaryComponent_div_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "span", 15);
    \u0275\u0275text(2, "Active days");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 16);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.enabledDays.join(", "));
  }
}
function StepSummaryComponent_div_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "span", 15);
    \u0275\u0275text(2, "Active days");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 16);
    \u0275\u0275text(4, "All days (24/7)");
    \u0275\u0275elementEnd()();
  }
}
function StepSummaryComponent_div_99_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275text(1, "No tiers configured");
    \u0275\u0275elementEnd();
  }
}
function StepSummaryComponent_div_100_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "span", 28);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_5_0;
    const tier_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tier_r3.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tier_r3.minAmount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_5_0 = tier_r3.maxAmount) !== null && tmp_5_0 !== void 0 ? tmp_5_0 : "\u221E");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("+", tier_r3.extraEarningPercent, "%");
  }
}
function StepSummaryComponent_div_100_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 25)(2, "span");
    \u0275\u0275text(3, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "Min");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7, "Max");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9, "Extra %");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(10, StepSummaryComponent_div_100_div_10_Template, 9, 4, "div", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275property("ngForOf", ctx_r1.tiersValue);
  }
}
var StepSummaryComponent = class _StepSummaryComponent {
  form;
  isScheduledLaunch = false;
  isFormValidForLaunch = false;
  launching = false;
  goToStep = new EventEmitter();
  launch = new EventEmitter();
  launchError = "";
  get formValue() {
    return this.form.getRawValue();
  }
  get tiersValue() {
    const tiers = this.form.get("tiers");
    return tiers ? tiers.getRawValue() : [];
  }
  get enabledDays() {
    const schedules = this.form.get("weeklySchedules");
    if (!schedules)
      return [];
    return schedules.getRawValue().filter((s) => s.enabled).map((s) => {
      const label = s.dayOfWeek.charAt(0) + s.dayOfWeek.slice(1).toLowerCase();
      const time = s.startTime && s.endTime ? ` (${s.startTime}\u2013${s.endTime})` : "";
      return label + time;
    });
  }
  formatCashbackType() {
    const type = this.formValue.cashbackType;
    if (type === "PERCENTAGE")
      return "Percentage (%)";
    if (type === "BONUS_POINTS")
      return "Bonus Points";
    return "\u2014";
  }
  formatCashbackValue() {
    const type = this.formValue.cashbackType;
    const value = this.formValue.cashbackValue;
    if (!value && value !== 0)
      return "\u2014";
    if (type === "PERCENTAGE")
      return `${value}%`;
    if (type === "BONUS_POINTS") {
      const threshold = this.formValue.pointsSpendThreshold;
      return threshold ? `${value} point(s) per ${threshold} spent` : `${value} points`;
    }
    return String(value);
  }
  formatEligibility() {
    const map = {
      ALL: "All transactions",
      SPECIFIC_ITEMS: "Specific items",
      SPECIFIC_CATEGORIES: "Specific categories",
      SPECIFIC_SERVICES: "Specific services"
    };
    return map[this.formValue.eligibilityType] || "\u2014";
  }
  formatDate(iso) {
    if (!iso)
      return "\u2014";
    try {
      return new Date(iso).toLocaleString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      });
    } catch {
      return iso;
    }
  }
  static \u0275fac = function StepSummaryComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StepSummaryComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StepSummaryComponent, selectors: [["app-step-summary"]], inputs: { form: "form", isScheduledLaunch: "isScheduledLaunch", isFormValidForLaunch: "isFormValidForLaunch", launching: "launching" }, outputs: { goToStep: "goToStep", launch: "launch" }, decls: 101, vars: 19, consts: [[1, "step-content"], ["type", "error", 3, "dismissible", "dismissed", 4, "ngIf"], [1, "launch-section"], [1, "launch-info"], ["class", "launch-text", 4, "ngIf"], ["type", "button", 1, "btn-launch-cta", 3, "click", "disabled"], [1, "summary-section"], [1, "section-heading"], [1, "section-num"], ["type", "button", "title", "Edit", 1, "btn-edit", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"], ["d", "M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"], [1, "summary-grid"], [1, "summary-item"], [1, "item-label"], [1, "item-value"], ["class", "summary-item full-width", 4, "ngIf"], ["class", "no-data", 4, "ngIf"], ["class", "tiers-table", 4, "ngIf"], ["type", "error", 3, "dismissed", "dismissible"], [1, "launch-text"], [1, "summary-item", "full-width"], [1, "no-data"], [1, "tiers-table"], [1, "tier-row", "tier-header-row"], ["class", "tier-row", 4, "ngFor", "ngForOf"], [1, "tier-row"], [1, "tier-name"]], template: function StepSummaryComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, StepSummaryComponent_app_alert_1_Template, 2, 2, "app-alert", 1);
      \u0275\u0275elementStart(2, "div", 2)(3, "div", 3);
      \u0275\u0275template(4, StepSummaryComponent_p_4_Template, 5, 0, "p", 4)(5, StepSummaryComponent_p_5_Template, 5, 0, "p", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "button", 5);
      \u0275\u0275listener("click", function StepSummaryComponent_Template_button_click_6_listener() {
        return ctx.launch.emit();
      });
      \u0275\u0275text(7);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 6)(9, "h3", 7)(10, "span", 8);
      \u0275\u0275text(11, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275text(12, " Program Details ");
      \u0275\u0275elementStart(13, "button", 9);
      \u0275\u0275listener("click", function StepSummaryComponent_Template_button_click_13_listener() {
        return ctx.goToStep.emit(1);
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(14, "svg", 10);
      \u0275\u0275element(15, "path", 11)(16, "path", 12);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(17, "div", 13)(18, "div", 14)(19, "span", 15);
      \u0275\u0275text(20, "Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "span", 16);
      \u0275\u0275text(22);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "div", 14)(24, "span", 15);
      \u0275\u0275text(25, "Description");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "span", 16);
      \u0275\u0275text(27);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "div", 14)(29, "span", 15);
      \u0275\u0275text(30, "Cashback type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "span", 16);
      \u0275\u0275text(32);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "div", 14)(34, "span", 15);
      \u0275\u0275text(35, "Cashback value");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "span", 16);
      \u0275\u0275text(37);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(38, "div", 6)(39, "h3", 7)(40, "span", 8);
      \u0275\u0275text(41, "2");
      \u0275\u0275elementEnd();
      \u0275\u0275text(42, " Schedule ");
      \u0275\u0275elementStart(43, "button", 9);
      \u0275\u0275listener("click", function StepSummaryComponent_Template_button_click_43_listener() {
        return ctx.goToStep.emit(2);
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(44, "svg", 10);
      \u0275\u0275element(45, "path", 11)(46, "path", 12);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(47, "div", 13)(48, "div", 14)(49, "span", 15);
      \u0275\u0275text(50, "Start date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "span", 16);
      \u0275\u0275text(52);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(53, "div", 14)(54, "span", 15);
      \u0275\u0275text(55, "End date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "span", 16);
      \u0275\u0275text(57);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(58, StepSummaryComponent_div_58_Template, 5, 1, "div", 17)(59, StepSummaryComponent_div_59_Template, 5, 0, "div", 17);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(60, "div", 6)(61, "h3", 7)(62, "span", 8);
      \u0275\u0275text(63, "3");
      \u0275\u0275elementEnd();
      \u0275\u0275text(64, " Rules ");
      \u0275\u0275elementStart(65, "button", 9);
      \u0275\u0275listener("click", function StepSummaryComponent_Template_button_click_65_listener() {
        return ctx.goToStep.emit(3);
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(66, "svg", 10);
      \u0275\u0275element(67, "path", 11)(68, "path", 12);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(69, "div", 13)(70, "div", 14)(71, "span", 15);
      \u0275\u0275text(72, "Min spend");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "span", 16);
      \u0275\u0275text(74);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(75, "div", 14)(76, "span", 15);
      \u0275\u0275text(77, "Eligibility");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "span", 16);
      \u0275\u0275text(79);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(80, "div", 14)(81, "span", 15);
      \u0275\u0275text(82, "Redeem limit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "span", 16);
      \u0275\u0275text(84);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(85, "div", 14)(86, "span", 15);
      \u0275\u0275text(87, "Bonus lifespan");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "span", 16);
      \u0275\u0275text(89);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(90, "div", 6)(91, "h3", 7)(92, "span", 8);
      \u0275\u0275text(93, "4");
      \u0275\u0275elementEnd();
      \u0275\u0275text(94, " Tiers ");
      \u0275\u0275elementStart(95, "button", 9);
      \u0275\u0275listener("click", function StepSummaryComponent_Template_button_click_95_listener() {
        return ctx.goToStep.emit(4);
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(96, "svg", 10);
      \u0275\u0275element(97, "path", 11)(98, "path", 12);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(99, StepSummaryComponent_div_99_Template, 2, 0, "div", 18)(100, StepSummaryComponent_div_100_Template, 11, 1, "div", 19);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      let tmp_13_0;
      let tmp_15_0;
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.launchError);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.isScheduledLaunch);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isScheduledLaunch);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", !ctx.isFormValidForLaunch || ctx.launching);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.launching ? "Launching..." : ctx.isScheduledLaunch ? "Schedule" : "Launch now", " ");
      \u0275\u0275advance(15);
      \u0275\u0275textInterpolate(ctx.formValue.name || "\u2014");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.formValue.description || "\u2014");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.formatCashbackType());
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.formatCashbackValue());
      \u0275\u0275advance(15);
      \u0275\u0275textInterpolate(ctx.formValue.startDate ? ctx.formatDate(ctx.formValue.startDate) : "\u2014");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.formValue.endDate ? ctx.formatDate(ctx.formValue.endDate) : "Ongoing");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.enabledDays.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.enabledDays.length === 0);
      \u0275\u0275advance(15);
      \u0275\u0275textInterpolate((tmp_13_0 = ctx.formValue.minSpendAmount) !== null && tmp_13_0 !== void 0 ? tmp_13_0 : 0);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.formatEligibility());
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1("Up to ", (tmp_15_0 = ctx.formValue.redeemLimitPercent) !== null && tmp_15_0 !== void 0 ? tmp_15_0 : 100, "%");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.formValue.bonusLifespanDays ? ctx.formValue.bonusLifespanDays + " days" : "Never expires");
      \u0275\u0275advance(10);
      \u0275\u0275property("ngIf", ctx.tiersValue.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.tiersValue.length > 0);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, AlertComponent], styles: ["\n\n.step-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n.summary-section[_ngcontent-%COMP%] {\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 1rem 1.25rem;\n  background: #ffffff;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 0.75rem 0;\n  padding-bottom: 0.5rem;\n  border-bottom: 1px solid #f1f5f9;\n}\n.section-num[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  background: #dcfce7;\n  color: #16A34A;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.75rem;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.btn-edit[_ngcontent-%COMP%] {\n  margin-left: auto;\n  background: none;\n  border: none;\n  padding: 0.25rem;\n  color: #16A34A;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.btn-edit[_ngcontent-%COMP%]:hover {\n  color: #15803d;\n}\n.btn-edit[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n}\n.summary-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.5rem 1.5rem;\n}\n.summary-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.15rem;\n}\n.summary-item.full-width[_ngcontent-%COMP%] {\n  grid-column: 1 / -1;\n}\n.item-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #94a3b8;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.02em;\n}\n.item-value[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #0f172a;\n}\n.no-data[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #94a3b8;\n  font-style: italic;\n}\n.tiers-table[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.tier-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2fr 1fr 1fr 1fr;\n  gap: 0.5rem;\n  padding: 0.5rem 0;\n  font-size: 0.85rem;\n  color: #475569;\n  border-bottom: 1px solid #f1f5f9;\n}\n.tier-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.tier-header-row[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #94a3b8;\n  font-size: 0.75rem;\n  text-transform: uppercase;\n}\n.tier-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #0f172a;\n}\n.launch-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 1rem 1.25rem;\n  border-radius: 10px;\n  background: #f0fdf4;\n  border: 1px solid #bbf7d0;\n}\n.launch-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.launch-text[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #15803d;\n  margin: 0;\n  line-height: 1.5;\n}\n.btn-launch-cta[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  padding: 0.5rem 1.25rem;\n  border: none;\n  border-radius: 6px;\n  background: #16A34A;\n  color: white;\n  font-size: 0.85rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.btn-launch-cta[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #15803d;\n}\n.btn-launch-cta[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=step-summary.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepSummaryComponent, [{
    type: Component,
    args: [{ selector: "app-step-summary", standalone: true, imports: [CommonModule, AlertComponent], template: `
    <div class="step-content">
      <!-- Errors -->
      <app-alert *ngIf="launchError" type="error" [dismissible]="true" (dismissed)="launchError = ''">
        {{ launchError }}
      </app-alert>

      <!-- Launch CTA: first thing user sees, with Launch | Schedule on the right -->
      <div class="launch-section">
        <div class="launch-info">
          <p class="launch-text" *ngIf="isScheduledLaunch">
            This program will be <strong>scheduled</strong> and automatically activated on the start date.
          </p>
          <p class="launch-text" *ngIf="!isScheduledLaunch">
            This program will be <strong>launched immediately</strong> and become active right away.
          </p>
        </div>
        <button
          type="button"
          class="btn-launch-cta"
          [disabled]="!isFormValidForLaunch || launching"
          (click)="launch.emit()"
        >
          {{ launching ? 'Launching...' : (isScheduledLaunch ? 'Schedule' : 'Launch now') }}
        </button>
      </div>

      <!-- Program details -->
      <div class="summary-section">
        <h3 class="section-heading">
          <span class="section-num">1</span>
          Program Details
          <button type="button" class="btn-edit" (click)="goToStep.emit(1)" title="Edit">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
          </button>
        </h3>
        <div class="summary-grid">
          <div class="summary-item">
            <span class="item-label">Name</span>
            <span class="item-value">{{ formValue.name || '\u2014' }}</span>
          </div>
          <div class="summary-item">
            <span class="item-label">Description</span>
            <span class="item-value">{{ formValue.description || '\u2014' }}</span>
          </div>
          <div class="summary-item">
            <span class="item-label">Cashback type</span>
            <span class="item-value">{{ formatCashbackType() }}</span>
          </div>
          <div class="summary-item">
            <span class="item-label">Cashback value</span>
            <span class="item-value">{{ formatCashbackValue() }}</span>
          </div>
        </div>
      </div>

      <!-- Schedule -->
      <div class="summary-section">
        <h3 class="section-heading">
          <span class="section-num">2</span>
          Schedule
          <button type="button" class="btn-edit" (click)="goToStep.emit(2)" title="Edit">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
          </button>
        </h3>
        <div class="summary-grid">
          <div class="summary-item">
            <span class="item-label">Start date</span>
            <span class="item-value">{{ formValue.startDate ? formatDate(formValue.startDate) : '\u2014' }}</span>
          </div>
          <div class="summary-item">
            <span class="item-label">End date</span>
            <span class="item-value">{{ formValue.endDate ? formatDate(formValue.endDate) : 'Ongoing' }}</span>
          </div>
          <div class="summary-item full-width" *ngIf="enabledDays.length > 0">
            <span class="item-label">Active days</span>
            <span class="item-value">{{ enabledDays.join(', ') }}</span>
          </div>
          <div class="summary-item full-width" *ngIf="enabledDays.length === 0">
            <span class="item-label">Active days</span>
            <span class="item-value">All days (24/7)</span>
          </div>
        </div>
      </div>

      <!-- Rules -->
      <div class="summary-section">
        <h3 class="section-heading">
          <span class="section-num">3</span>
          Rules
          <button type="button" class="btn-edit" (click)="goToStep.emit(3)" title="Edit">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
          </button>
        </h3>
        <div class="summary-grid">
          <div class="summary-item">
            <span class="item-label">Min spend</span>
            <span class="item-value">{{ formValue.minSpendAmount ?? 0 }}</span>
          </div>
          <div class="summary-item">
            <span class="item-label">Eligibility</span>
            <span class="item-value">{{ formatEligibility() }}</span>
          </div>
          <div class="summary-item">
            <span class="item-label">Redeem limit</span>
            <span class="item-value">Up to {{ formValue.redeemLimitPercent ?? 100 }}%</span>
          </div>
          <div class="summary-item">
            <span class="item-label">Bonus lifespan</span>
            <span class="item-value">{{ formValue.bonusLifespanDays ? formValue.bonusLifespanDays + ' days' : 'Never expires' }}</span>
          </div>
        </div>
      </div>

      <!-- Tiers -->
      <div class="summary-section">
        <h3 class="section-heading">
          <span class="section-num">4</span>
          Tiers
          <button type="button" class="btn-edit" (click)="goToStep.emit(4)" title="Edit">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
          </button>
        </h3>
        <div *ngIf="tiersValue.length === 0" class="no-data">No tiers configured</div>
        <div *ngIf="tiersValue.length > 0" class="tiers-table">
          <div class="tier-row tier-header-row">
            <span>Name</span>
            <span>Min</span>
            <span>Max</span>
            <span>Extra %</span>
          </div>
          <div class="tier-row" *ngFor="let tier of tiersValue">
            <span class="tier-name">{{ tier.name }}</span>
            <span>{{ tier.minAmount }}</span>
            <span>{{ tier.maxAmount ?? '\u221E' }}</span>
            <span>+{{ tier.extraEarningPercent }}%</span>
          </div>
        </div>
      </div>
    </div>
  `, styles: ["/* angular:styles/component:css;05475e3878b6211151acabc4bb4d9013dafb9344bb0e6303ab3c452e24074384;/Users/baglan/repo/westwood/westwood-frontend/src/app/features/bonus-program/pages/create-program-wizard/steps/step-summary.component.ts */\n.step-content {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n.summary-section {\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 1rem 1.25rem;\n  background: #ffffff;\n}\n.section-heading {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 0.75rem 0;\n  padding-bottom: 0.5rem;\n  border-bottom: 1px solid #f1f5f9;\n}\n.section-num {\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  background: #dcfce7;\n  color: #16A34A;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.75rem;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.btn-edit {\n  margin-left: auto;\n  background: none;\n  border: none;\n  padding: 0.25rem;\n  color: #16A34A;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.btn-edit:hover {\n  color: #15803d;\n}\n.btn-edit svg {\n  width: 18px;\n  height: 18px;\n}\n.summary-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.5rem 1.5rem;\n}\n.summary-item {\n  display: flex;\n  flex-direction: column;\n  gap: 0.15rem;\n}\n.summary-item.full-width {\n  grid-column: 1 / -1;\n}\n.item-label {\n  font-size: 0.75rem;\n  color: #94a3b8;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.02em;\n}\n.item-value {\n  font-size: 0.875rem;\n  color: #0f172a;\n}\n.no-data {\n  font-size: 0.85rem;\n  color: #94a3b8;\n  font-style: italic;\n}\n.tiers-table {\n  display: flex;\n  flex-direction: column;\n}\n.tier-row {\n  display: grid;\n  grid-template-columns: 2fr 1fr 1fr 1fr;\n  gap: 0.5rem;\n  padding: 0.5rem 0;\n  font-size: 0.85rem;\n  color: #475569;\n  border-bottom: 1px solid #f1f5f9;\n}\n.tier-row:last-child {\n  border-bottom: none;\n}\n.tier-header-row {\n  font-weight: 600;\n  color: #94a3b8;\n  font-size: 0.75rem;\n  text-transform: uppercase;\n}\n.tier-name {\n  font-weight: 600;\n  color: #0f172a;\n}\n.launch-section {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 1rem 1.25rem;\n  border-radius: 10px;\n  background: #f0fdf4;\n  border: 1px solid #bbf7d0;\n}\n.launch-info {\n  flex: 1;\n  min-width: 0;\n}\n.launch-text {\n  font-size: 0.9rem;\n  color: #15803d;\n  margin: 0;\n  line-height: 1.5;\n}\n.btn-launch-cta {\n  flex-shrink: 0;\n  padding: 0.5rem 1.25rem;\n  border: none;\n  border-radius: 6px;\n  background: #16A34A;\n  color: white;\n  font-size: 0.85rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.btn-launch-cta:hover:not(:disabled) {\n  background: #15803d;\n}\n.btn-launch-cta:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=step-summary.component.css.map */\n"] }]
  }], null, { form: [{
    type: Input
  }], isScheduledLaunch: [{
    type: Input
  }], isFormValidForLaunch: [{
    type: Input
  }], launching: [{
    type: Input
  }], goToStep: [{
    type: Output
  }], launch: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StepSummaryComponent, { className: "StepSummaryComponent", filePath: "src/app/features/bonus-program/pages/create-program-wizard/steps/step-summary.component.ts", lineNumber: 212 });
})();

// src/app/features/bonus-program/pages/create-program-wizard/create-program-wizard.component.ts
function CreateProgramWizardComponent_app_alert_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-alert", 16);
    \u0275\u0275listener("dismissed", function CreateProgramWizardComponent_app_alert_5_Template_app_alert_dismissed_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.globalError = "");
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("dismissible", true);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.globalError, " ");
  }
}
function CreateProgramWizardComponent_app_step_program_details_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-step-program-details", 17);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("form", ctx_r1.form);
  }
}
function CreateProgramWizardComponent_app_step_schedule_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-step-schedule", 17);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("form", ctx_r1.form);
  }
}
function CreateProgramWizardComponent_app_step_rules_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-step-rules", 17);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("form", ctx_r1.form);
  }
}
function CreateProgramWizardComponent_app_step_tiers_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-step-tiers", 17);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("form", ctx_r1.form);
  }
}
function CreateProgramWizardComponent_app_step_notifications_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-step-notifications");
  }
}
function CreateProgramWizardComponent_app_step_summary_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-step-summary", 18);
    \u0275\u0275listener("goToStep", function CreateProgramWizardComponent_app_step_summary_11_Template_app_step_summary_goToStep_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToStep($event));
    })("launch", function CreateProgramWizardComponent_app_step_summary_11_Template_app_step_summary_launch_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.launch());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("form", ctx_r1.form)("isScheduledLaunch", ctx_r1.isScheduledLaunch)("isFormValidForLaunch", ctx_r1.isFormValidForLaunch)("launching", ctx_r1.launching);
  }
}
function CreateProgramWizardComponent_li_16_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 25);
    \u0275\u0275element(2, "path", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function CreateProgramWizardComponent_li_16_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const step_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(step_r5.num);
  }
}
function CreateProgramWizardComponent_li_16_div_7_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 30);
    \u0275\u0275listener("click", function CreateProgramWizardComponent_li_16_div_7_button_3_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      ctx_r1.nextStep();
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(1, " Next step ");
    \u0275\u0275elementEnd();
  }
}
function CreateProgramWizardComponent_li_16_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "p", 28);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, CreateProgramWizardComponent_li_16_div_7_button_3_Template, 2, 0, "button", 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(step_r5.hint);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentStep < ctx_r1.STEPS.length);
  }
}
function CreateProgramWizardComponent_li_16_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 31);
  }
}
function CreateProgramWizardComponent_li_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 19);
    \u0275\u0275listener("click", function CreateProgramWizardComponent_li_16_Template_li_click_0_listener() {
      const step_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToStep(step_r5.num));
    });
    \u0275\u0275elementStart(1, "div", 20)(2, "span", 21);
    \u0275\u0275template(3, CreateProgramWizardComponent_li_16_ng_container_3_Template, 3, 0, "ng-container", 6)(4, CreateProgramWizardComponent_li_16_ng_container_4_Template, 2, 1, "ng-container", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 22);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, CreateProgramWizardComponent_li_16_div_7_Template, 4, 2, "div", 23)(8, CreateProgramWizardComponent_li_16_div_8_Template, 1, 0, "div", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r5 = ctx.$implicit;
    const last_r7 = ctx.last;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r1.currentStep === step_r5.num)("done", ctx_r1.isStepDone(step_r5.num))("future", ctx_r1.currentStep < step_r5.num && !ctx_r1.isStepDone(step_r5.num));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.isStepDone(step_r5.num));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isStepDone(step_r5.num));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(step_r5.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentStep === step_r5.num);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !last_r7);
  }
}
function CreateProgramWizardComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 32);
    \u0275\u0275listener("click", function CreateProgramWizardComponent_Conditional_20_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.launch());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r1.launching);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.launching ? "Launching..." : ctx_r1.isScheduledLaunch ? "Schedule" : "Launch now", " ");
  }
}
function CreateProgramWizardComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 33);
    \u0275\u0275listener("click", function CreateProgramWizardComponent_Conditional_21_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveDraft());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r1.saving);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.saving ? "Saving..." : "Save draft", " ");
  }
}
var STEPS = [
  { num: 1, label: "Program details", hint: "Define basic information about this cashback program." },
  { num: 2, label: "Schedule", hint: "Set program dates and weekly active hours." },
  { num: 3, label: "Rules", hint: "Configure spending rules and redeem limits." },
  { num: 4, label: "Tiers (optional)", hint: "Optionally add tiers to reward loyal customers." },
  { num: 5, label: "Notifications", hint: "Preview promotional messaging options." },
  { num: 6, label: "Summary & Launch", hint: "Review all settings and launch the program." }
];
var ALL_DAYS = [
  "MONDAY",
  "TUESDAY",
  "WEDNESDAY",
  "THURSDAY",
  "FRIDAY",
  "SATURDAY",
  "SUNDAY"
];
var CreateProgramWizardComponent = class _CreateProgramWizardComponent {
  pageHeaderService = inject(PageHeaderService);
  route = inject(ActivatedRoute);
  router = inject(Router);
  fb = inject(FormBuilder);
  toast = inject(ToastService);
  rewardProgramsService = inject(RewardProgramsService);
  destroy$ = new Subject();
  STEPS = STEPS;
  currentStep = 1;
  /** Highest step number the user has opened (by next or by clicking). Used so optional steps only show green after visit. */
  maxStepVisited = 1;
  draftUuid = "";
  saving = false;
  launching = false;
  globalError = "";
  form;
  get stepsBaseUrl() {
    return `/bonus-program/create/cashback/${this.draftUuid}/steps`;
  }
  /** Step shows green + check only if user has visited it AND the step is valid (mandatory filled, or optional with no invalid data e.g. tiers). */
  isStepDone(stepNum) {
    if (this.maxStepVisited < stepNum)
      return false;
    return this.isStepComplete(stepNum);
  }
  /** True if this step is complete: required fields valid; for step 4, tiers array valid if any. */
  isStepComplete(stepNum) {
    if (!this.form)
      return false;
    switch (stepNum) {
      case 1: {
        const name = this.form.get("name");
        const cashbackType = this.form.get("cashbackType");
        const cashbackValue = this.form.get("cashbackValue");
        const pts = this.form.get("pointsSpendThreshold");
        const type = cashbackType?.value;
        const nameVal = name?.value;
        const hasName = typeof nameVal === "string" && nameVal.trim().length > 0;
        return !!(hasName && cashbackType?.valid && cashbackValue?.valid && (type !== "BONUS_POINTS" || pts?.value != null && Number(pts?.value) > 0));
      }
      case 2: {
        const start = this.form.get("startDate");
        const v = start?.value;
        return !!(start?.valid && v != null && String(v).trim().length > 0);
      }
      case 3: {
        const minSpend = this.form.get("minSpendAmount");
        return minSpend?.valid === true;
      }
      case 4: {
        const tiers = this.form.get("tiers");
        return tiers?.valid === true;
      }
      case 5:
      case 6:
        return true;
      default:
        return false;
    }
  }
  /** True when all mandatory fields for launch are filled; then show Launch/Schedule on any step. */
  get isFormValidForLaunch() {
    if (!this.form)
      return false;
    return this.isStepComplete(1) && this.isStepComplete(2) && this.form.get("tiers")?.valid !== false;
  }
  ngOnInit() {
    this.route.paramMap.pipe(takeUntil(this.destroy$)).subscribe((params) => {
      this.draftUuid = params.get("uuid") ?? "";
      const stepParam = params.get("step");
      if (stepParam) {
        const step = parseInt(stepParam, 10);
        if (step >= 1 && step <= STEPS.length) {
          this.currentStep = step;
          this.maxStepVisited = Math.max(this.maxStepVisited, step);
        } else {
          this.router.navigate(["/bonus-program", "create", "cashback", this.draftUuid, "steps", "1"], { replaceUrl: true });
        }
      }
    });
    this.pageHeaderService.setPageHeader("Create Cashback Program", [
      { label: "Home", route: "/home" },
      { label: "Reward Programs", route: "/bonus-program" },
      { label: "Create Cashback Program" }
    ]);
    this.buildForm();
    this.loadExistingDraft();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  // ─── Form building ─────────────────────────────────────────────────
  buildForm() {
    this.form = this.fb.group({
      // Step 1: Details
      name: ["", Validators.required],
      description: [""],
      cashbackType: ["", Validators.required],
      cashbackValue: [null, [Validators.required, Validators.min(0)]],
      pointsSpendThreshold: [null],
      // Step 2: Schedule
      startDate: ["", Validators.required],
      endDate: [""],
      weeklySchedules: this.fb.array(ALL_DAYS.map((day) => {
        const isWeekday = ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY"].includes(day);
        return this.fb.group({
          dayOfWeek: [day],
          enabled: [isWeekday],
          startTime: ["08:00"],
          endTime: ["18:00"]
        });
      })),
      // Step 3: Rules
      minSpendAmount: [0, Validators.min(0)],
      eligibilityType: ["ALL"],
      redeemLimitPercent: [100],
      bonusLifespanDays: [null],
      // Step 4: Tiers
      tiers: this.fb.array([])
    });
  }
  // ─── Load existing draft from backend ──────────────────────────────
  loadExistingDraft() {
    if (!this.draftUuid)
      return;
    this.rewardProgramsService.getProgram(this.draftUuid).pipe(takeUntil(this.destroy$)).subscribe({
      next: (program) => {
        if (program.status !== "DRAFT") {
          this.router.navigate(["/bonus-program", "view", program.uuid], { replaceUrl: true });
          return;
        }
        this.patchFormFromResponse(program);
      },
      error: () => {
      }
      // Draft might not have data yet — that's fine
    });
  }
  patchFormFromResponse(p) {
    this.form.patchValue({
      name: p.name || "",
      description: p.description || "",
      startDate: p.startDate ? this.toLocalDatetime(p.startDate) : "",
      endDate: p.endDate ? this.toLocalDatetime(p.endDate) : ""
    });
    if (p.cashbackRule) {
      this.form.patchValue({
        cashbackType: p.cashbackRule.cashbackType,
        cashbackValue: p.cashbackRule.cashbackValue,
        pointsSpendThreshold: p.cashbackRule.pointsSpendThreshold,
        minSpendAmount: p.cashbackRule.minSpendAmount,
        eligibilityType: p.cashbackRule.eligibilityType,
        redeemLimitPercent: p.cashbackRule.redeemLimitPercent,
        bonusLifespanDays: p.cashbackRule.bonusLifespanDays
      });
    }
    if (p.weeklySchedules && p.weeklySchedules.length > 0) {
      const schedulesArray = this.form.get("weeklySchedules");
      p.weeklySchedules.forEach((ws) => {
        const dayIndex = ALL_DAYS.indexOf(ws.dayOfWeek);
        if (dayIndex >= 0) {
          schedulesArray.at(dayIndex).patchValue({
            enabled: ws.enabled,
            startTime: ws.startTime || "08:00",
            endTime: ws.endTime || "22:00"
          });
        }
      });
    }
    if (p.cashbackTiers && p.cashbackTiers.length > 0) {
      const tiersArray = this.form.get("tiers");
      tiersArray.clear();
      p.cashbackTiers.forEach((t) => {
        tiersArray.push(this.fb.group({
          name: [t.name, Validators.required],
          minAmount: [t.minAmount, [Validators.required, Validators.min(0)]],
          maxAmount: [t.maxAmount],
          extraEarningPercent: [t.extraEarningPercent, [Validators.required, Validators.min(0)]],
          sortOrder: [t.sortOrder]
        }));
      });
    }
  }
  toLocalDatetime(iso) {
    if (!iso)
      return "";
    try {
      const d = new Date(iso);
      const pad = (n) => n.toString().padStart(2, "0");
      return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
    } catch {
      return iso;
    }
  }
  // ─── Navigation ────────────────────────────────────────────────────
  goToStep(step) {
    if (step >= 1 && step <= STEPS.length) {
      this.router.navigate(["/bonus-program", "create", "cashback", this.draftUuid, "steps", step.toString()]);
    }
  }
  nextStep() {
    if (this.currentStep < STEPS.length) {
      const next = this.currentStep + 1;
      this.router.navigate(["/bonus-program", "create", "cashback", this.draftUuid, "steps", next.toString()]);
    }
  }
  onCancel() {
    if (!this.draftUuid) {
      this.router.navigate(["/bonus-program"]);
      return;
    }
    this.rewardProgramsService.deleteProgram(this.draftUuid).subscribe({
      next: () => this.router.navigate(["/bonus-program"]),
      error: () => this.router.navigate(["/bonus-program"])
    });
  }
  // ─── Build request payload ─────────────────────────────────────────
  buildSaveDraftPayload() {
    const v = this.form.getRawValue();
    const schedules = v.weeklySchedules.filter((s) => s.enabled).map((s) => ({
      dayOfWeek: s.dayOfWeek,
      enabled: true,
      startTime: s.startTime || null,
      endTime: s.endTime || null
    }));
    const tiers = v.tiers.map((t, i) => ({
      name: t.name,
      minAmount: t.minAmount,
      maxAmount: t.maxAmount ?? null,
      extraEarningPercent: t.extraEarningPercent,
      sortOrder: i
    }));
    return {
      name: v.name || void 0,
      description: v.description || void 0,
      cashbackType: v.cashbackType || void 0,
      cashbackValue: v.cashbackValue ?? void 0,
      pointsSpendThreshold: v.pointsSpendThreshold ?? void 0,
      minSpendAmount: v.minSpendAmount ?? void 0,
      eligibilityType: v.eligibilityType || void 0,
      redeemLimitPercent: v.redeemLimitPercent ?? void 0,
      bonusLifespanDays: v.bonusLifespanDays ?? void 0,
      startDate: v.startDate ? new Date(v.startDate).toISOString() : void 0,
      endDate: v.endDate ? new Date(v.endDate).toISOString() : null,
      weeklySchedules: schedules.length > 0 ? schedules : void 0,
      tiers: tiers.length > 0 ? tiers : void 0
    };
  }
  // ─── Save Draft ────────────────────────────────────────────────────
  saveDraft() {
    if (!this.draftUuid || this.saving)
      return;
    this.saving = true;
    this.globalError = "";
    const payload = this.buildSaveDraftPayload();
    this.rewardProgramsService.saveCashbackDraft(this.draftUuid, payload).pipe(takeUntil(this.destroy$), finalize(() => this.saving = false)).subscribe({
      next: () => {
        this.toast.success("Draft saved");
        this.router.navigate(["/bonus-program"]);
      },
      error: (err) => {
        const status = err?.status ?? 0;
        const message = err?.error?.message || "Failed to save draft. Please try again.";
        if (status >= 500) {
          this.toast.error(message);
        } else {
          this.globalError = message;
        }
      }
    });
  }
  // ─── Launch ────────────────────────────────────────────────────────
  get isScheduledLaunch() {
    const startDate = this.form.get("startDate")?.value;
    if (!startDate)
      return false;
    return new Date(startDate) > /* @__PURE__ */ new Date();
  }
  launch() {
    if (!this.draftUuid || this.launching)
      return;
    this.form.markAllAsTouched();
    this.launching = true;
    this.globalError = "";
    const v = this.form.getRawValue();
    const schedules = v.weeklySchedules.filter((s) => s.enabled).map((s) => ({
      dayOfWeek: s.dayOfWeek,
      enabled: true,
      startTime: s.startTime || null,
      endTime: s.endTime || null
    }));
    const tiers = v.tiers.map((t, i) => ({
      name: t.name,
      minAmount: t.minAmount,
      maxAmount: t.maxAmount ?? null,
      extraEarningPercent: t.extraEarningPercent,
      sortOrder: i
    }));
    const payload = {
      immediate: !this.isScheduledLaunch,
      name: v.name ?? null,
      description: v.description ?? null,
      cashbackType: v.cashbackType ?? null,
      cashbackValue: v.cashbackValue != null ? Number(v.cashbackValue) : null,
      pointsSpendThreshold: v.pointsSpendThreshold != null ? Number(v.pointsSpendThreshold) : null,
      minSpendAmount: v.minSpendAmount != null ? Number(v.minSpendAmount) : null,
      eligibilityType: v.eligibilityType ?? null,
      redeemLimitPercent: v.redeemLimitPercent != null ? Number(v.redeemLimitPercent) : null,
      bonusLifespanDays: v.bonusLifespanDays != null ? Number(v.bonusLifespanDays) : null,
      startDate: v.startDate ? new Date(v.startDate).toISOString() : null,
      endDate: v.endDate ? new Date(v.endDate).toISOString() : null,
      weeklySchedules: schedules.length > 0 ? schedules : null,
      tiers: tiers.length > 0 ? tiers : null
    };
    this.rewardProgramsService.launchCashbackProgram(this.draftUuid, payload).pipe(takeUntil(this.destroy$), finalize(() => this.launching = false)).subscribe({
      next: () => {
        this.toast.success(this.isScheduledLaunch ? "Program scheduled" : "Program launched");
        this.router.navigate(["/bonus-program"]);
      },
      error: (err) => {
        const status = err?.status ?? 0;
        const message = err?.error?.message || "Failed to launch program. Please review your configuration.";
        if (status >= 500) {
          this.toast.error(message);
        } else {
          this.globalError = message;
        }
      }
    });
  }
  static \u0275fac = function CreateProgramWizardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CreateProgramWizardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CreateProgramWizardComponent, selectors: [["app-create-program-wizard"]], decls: 22, vars: 11, consts: [[1, "wizard-wrapper"], [1, "wizard-layout"], [1, "wizard-main"], [1, "step-title"], ["type", "error", 3, "dismissible", "dismissed", 4, "ngIf"], [3, "form", 4, "ngIf"], [4, "ngIf"], [3, "form", "isScheduledLaunch", "isFormValidForLaunch", "launching", "goToStep", "launch", 4, "ngIf"], [1, "steps-sidebar"], [1, "sidebar-title"], [1, "steps-list"], ["class", "step-item", 3, "active", "done", "future", "click", 4, "ngFor", "ngForOf"], [1, "sidebar-footer"], ["type", "button", 1, "btn-cancel", 3, "click"], ["type", "button", 1, "btn-save-draft", "btn-launch", 3, "disabled"], ["type", "button", 1, "btn-save-draft", 3, "disabled"], ["type", "error", 3, "dismissed", "dismissible"], [3, "form"], [3, "goToStep", "launch", "form", "isScheduledLaunch", "isFormValidForLaunch", "launching"], [1, "step-item", 3, "click"], [1, "step-row"], [1, "step-num"], [1, "step-label"], ["class", "step-active-detail", 4, "ngIf"], ["class", "step-connector", 4, "ngIf"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "3"], ["d", "M5 13l4 4L19 7"], [1, "step-active-detail"], [1, "step-hint"], ["type", "button", "class", "btn-next-step", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn-next-step", 3, "click"], [1, "step-connector"], ["type", "button", 1, "btn-save-draft", "btn-launch", 3, "click", "disabled"], ["type", "button", 1, "btn-save-draft", 3, "click", "disabled"]], template: function CreateProgramWizardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "main", 2)(3, "h2", 3);
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275template(5, CreateProgramWizardComponent_app_alert_5_Template, 2, 2, "app-alert", 4)(6, CreateProgramWizardComponent_app_step_program_details_6_Template, 1, 1, "app-step-program-details", 5)(7, CreateProgramWizardComponent_app_step_schedule_7_Template, 1, 1, "app-step-schedule", 5)(8, CreateProgramWizardComponent_app_step_rules_8_Template, 1, 1, "app-step-rules", 5)(9, CreateProgramWizardComponent_app_step_tiers_9_Template, 1, 1, "app-step-tiers", 5)(10, CreateProgramWizardComponent_app_step_notifications_10_Template, 1, 0, "app-step-notifications", 6)(11, CreateProgramWizardComponent_app_step_summary_11_Template, 1, 4, "app-step-summary", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "aside", 8)(13, "h3", 9);
      \u0275\u0275text(14, "Cashback Program");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "ul", 10);
      \u0275\u0275template(16, CreateProgramWizardComponent_li_16_Template, 9, 11, "li", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 12)(18, "button", 13);
      \u0275\u0275listener("click", function CreateProgramWizardComponent_Template_button_click_18_listener() {
        return ctx.onCancel();
      });
      \u0275\u0275text(19, " Cancel ");
      \u0275\u0275elementEnd();
      \u0275\u0275template(20, CreateProgramWizardComponent_Conditional_20_Template, 2, 2, "button", 14)(21, CreateProgramWizardComponent_Conditional_21_Template, 2, 2, "button", 15);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate2("", ctx.currentStep, ". ", ctx.STEPS[ctx.currentStep - 1].label, "");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.globalError);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.currentStep === 1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.currentStep === 2);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.currentStep === 3);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.currentStep === 4);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.currentStep === 5);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.currentStep === 6);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngForOf", ctx.STEPS);
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.isFormValidForLaunch ? 20 : 21);
    }
  }, dependencies: [
    CommonModule,
    NgForOf,
    NgIf,
    ReactiveFormsModule,
    AlertComponent,
    StepProgramDetailsComponent,
    StepScheduleComponent,
    StepRulesComponent,
    StepTiersComponent,
    StepNotificationsComponent,
    StepSummaryComponent
  ], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n}\n.wizard-wrapper[_ngcontent-%COMP%] {\n  min-height: 100%;\n  margin: -2rem;\n  padding: 2rem;\n  background: #f8fafc;\n}\n.wizard-layout[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1.5rem;\n  align-items: flex-start;\n}\n.wizard-main[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  background: white;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n  padding: 2rem 2.5rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n}\n.step-title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 1.5rem 0;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid #e2e8f0;\n}\n.steps-sidebar[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 320px;\n  background: white;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n  padding: 1.75rem;\n  display: flex;\n  flex-direction: column;\n  position: sticky;\n  top: 2rem;\n}\n.sidebar-title[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 1.5rem 0;\n  padding-bottom: 1.1rem;\n  border-bottom: 1px solid #e2e8f0;\n}\n.steps-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  flex: 1;\n}\n.step-item[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n}\n.step-item.future[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.step-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.85rem;\n}\n.step-num[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.875rem;\n  font-weight: 700;\n  flex-shrink: 0;\n  background: #f1f5f9;\n  color: #94a3b8;\n  transition: all 0.2s;\n}\n.step-num[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n.step-item.active[_ngcontent-%COMP%]   .step-num[_ngcontent-%COMP%] {\n  background: #16A34A;\n  color: white;\n}\n.step-item.done[_ngcontent-%COMP%]   .step-num[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #16A34A;\n}\n.step-label[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  color: #94a3b8;\n  font-weight: 500;\n  transition: color 0.15s;\n}\n.step-item.active[_ngcontent-%COMP%]   .step-label[_ngcontent-%COMP%] {\n  color: #0f172a;\n  font-weight: 600;\n}\n.step-item.done[_ngcontent-%COMP%]   .step-label[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n.step-item[_ngcontent-%COMP%]:hover   .step-label[_ngcontent-%COMP%] {\n  color: #0f172a;\n}\n.step-active-detail[_ngcontent-%COMP%] {\n  margin-left: calc(36px + 0.85rem);\n  padding: 0.5rem 0 0.25rem 0;\n}\n.step-hint[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #64748b;\n  line-height: 1.45;\n  margin: 0 0 0.85rem 0;\n}\n.btn-next-step[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.5rem 1.25rem;\n  background: #0f172a;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 0.85rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.btn-next-step[_ngcontent-%COMP%]:hover {\n  background: #1e293b;\n}\n.step-connector[_ngcontent-%COMP%] {\n  width: 2px;\n  height: 20px;\n  background: #e2e8f0;\n  margin: 4px 0 4px 17px;\n  border-radius: 1px;\n}\n.step-item.done[_ngcontent-%COMP%]   .step-connector[_ngcontent-%COMP%] {\n  background: #bbf7d0;\n}\n.sidebar-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 1.25rem;\n  margin-top: 1.5rem;\n  padding-top: 1rem;\n  border-top: 1px solid #e2e8f0;\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: #ef4444;\n  text-decoration: none;\n  cursor: pointer;\n  background: none;\n  border: none;\n  transition: color 0.15s;\n}\n.btn-cancel[_ngcontent-%COMP%]:hover {\n  color: #dc2626;\n}\n.btn-save-draft[_ngcontent-%COMP%] {\n  padding: 0.5rem 1.25rem;\n  border: 1px solid #e2e8f0;\n  border-radius: 6px;\n  background: white;\n  color: #0f172a;\n  font-size: 0.85rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.btn-save-draft[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n  border-color: #cbd5e1;\n}\n.btn-save-draft[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-save-draft.btn-launch[_ngcontent-%COMP%] {\n  background: #16A34A;\n  color: white;\n  border-color: #16A34A;\n}\n.btn-save-draft.btn-launch[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #15803d;\n  border-color: #15803d;\n}\n@media (max-width: 768px) {\n  .wizard-layout[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .steps-sidebar[_ngcontent-%COMP%] {\n    width: 100%;\n    order: -1;\n    position: static;\n  }\n}\n/*# sourceMappingURL=create-program-wizard.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CreateProgramWizardComponent, [{
    type: Component,
    args: [{ selector: "app-create-program-wizard", standalone: true, imports: [
      CommonModule,
      ReactiveFormsModule,
      AlertComponent,
      StepProgramDetailsComponent,
      StepScheduleComponent,
      StepRulesComponent,
      StepTiersComponent,
      StepNotificationsComponent,
      StepSummaryComponent
    ], template: `
    <div class="wizard-wrapper">
      <div class="wizard-layout">
        <!-- ====== LEFT: Main content ====== -->
        <main class="wizard-main">
          <h2 class="step-title">{{ currentStep }}. {{ STEPS[currentStep - 1].label }}</h2>

          <!-- Global error -->
          <app-alert *ngIf="globalError" type="error" [dismissible]="true" (dismissed)="globalError = ''">
            {{ globalError }}
          </app-alert>

          <!-- Step 1: Program Details -->
          <app-step-program-details
            *ngIf="currentStep === 1"
            [form]="form"
          ></app-step-program-details>

          <!-- Step 2: Schedule -->
          <app-step-schedule
            *ngIf="currentStep === 2"
            [form]="form"
          ></app-step-schedule>

          <!-- Step 3: Rules -->
          <app-step-rules
            *ngIf="currentStep === 3"
            [form]="form"
          ></app-step-rules>

          <!-- Step 4: Tiers -->
          <app-step-tiers
            *ngIf="currentStep === 4"
            [form]="form"
          ></app-step-tiers>

          <!-- Step 5: Notifications -->
          <app-step-notifications
            *ngIf="currentStep === 5"
          ></app-step-notifications>

          <!-- Step 6: Summary -->
          <app-step-summary
            *ngIf="currentStep === 6"
            [form]="form"
            [isScheduledLaunch]="isScheduledLaunch"
            [isFormValidForLaunch]="isFormValidForLaunch"
            [launching]="launching"
            (goToStep)="goToStep($event)"
            (launch)="launch()"
          ></app-step-summary>
        </main>

        <!-- ====== RIGHT: Sidebar stepper card ====== -->
        <aside class="steps-sidebar">
          <h3 class="sidebar-title">Cashback Program</h3>

          <ul class="steps-list">
            <li *ngFor="let step of STEPS; let last = last"
                class="step-item"
                [class.active]="currentStep === step.num"
                [class.done]="isStepDone(step.num)"
                [class.future]="currentStep < step.num && !isStepDone(step.num)"
                (click)="goToStep(step.num)">
              <div class="step-row">
                <span class="step-num">
                  <ng-container *ngIf="isStepDone(step.num)">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 13l4 4L19 7"/></svg>
                  </ng-container>
                  <ng-container *ngIf="!isStepDone(step.num)">{{ step.num }}</ng-container>
                </span>
                <span class="step-label">{{ step.label }}</span>
              </div>
              <!-- Active step hint + next -->
              <div *ngIf="currentStep === step.num" class="step-active-detail">
                <p class="step-hint">{{ step.hint }}</p>
                <button
                  *ngIf="currentStep < STEPS.length"
                  type="button"
                  class="btn-next-step"
                  (click)="nextStep(); $event.stopPropagation()"
                >
                  Next step
                </button>
              </div>
              <!-- Connector -->
              <div class="step-connector" *ngIf="!last"></div>
            </li>
          </ul>

          <!-- Sidebar footer -->
          <div class="sidebar-footer">
            <button type="button" class="btn-cancel" (click)="onCancel()">
              Cancel
            </button>
            @if (isFormValidForLaunch) {
              <button
                type="button"
                class="btn-save-draft btn-launch"
                [disabled]="launching"
                (click)="launch()"
              >
                {{ launching ? 'Launching...' : (isScheduledLaunch ? 'Schedule' : 'Launch now') }}
              </button>
            } @else {
              <button
                type="button"
                class="btn-save-draft"
                [disabled]="saving"
                (click)="saveDraft()"
              >
                {{ saving ? 'Saving...' : 'Save draft' }}
              </button>
            }
          </div>
        </aside>
      </div>
    </div>
  `, styles: ["/* angular:styles/component:css;b6c9efd1fb5101352687687480cfcd03631a86effba04b584513647971a39282;/Users/baglan/repo/westwood/westwood-frontend/src/app/features/bonus-program/pages/create-program-wizard/create-program-wizard.component.ts */\n:host {\n  display: block;\n  height: 100%;\n}\n.wizard-wrapper {\n  min-height: 100%;\n  margin: -2rem;\n  padding: 2rem;\n  background: #f8fafc;\n}\n.wizard-layout {\n  display: flex;\n  gap: 1.5rem;\n  align-items: flex-start;\n}\n.wizard-main {\n  flex: 1;\n  min-width: 0;\n  background: white;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n  padding: 2rem 2.5rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n}\n.step-title {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 1.5rem 0;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid #e2e8f0;\n}\n.steps-sidebar {\n  flex-shrink: 0;\n  width: 320px;\n  background: white;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n  padding: 1.75rem;\n  display: flex;\n  flex-direction: column;\n  position: sticky;\n  top: 2rem;\n}\n.sidebar-title {\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 1.5rem 0;\n  padding-bottom: 1.1rem;\n  border-bottom: 1px solid #e2e8f0;\n}\n.steps-list {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  flex: 1;\n}\n.step-item {\n  position: relative;\n  cursor: pointer;\n}\n.step-item.future {\n  cursor: pointer;\n}\n.step-row {\n  display: flex;\n  align-items: center;\n  gap: 0.85rem;\n}\n.step-num {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.875rem;\n  font-weight: 700;\n  flex-shrink: 0;\n  background: #f1f5f9;\n  color: #94a3b8;\n  transition: all 0.2s;\n}\n.step-num svg {\n  width: 16px;\n  height: 16px;\n}\n.step-item.active .step-num {\n  background: #16A34A;\n  color: white;\n}\n.step-item.done .step-num {\n  background: #dcfce7;\n  color: #16A34A;\n}\n.step-label {\n  font-size: 0.95rem;\n  color: #94a3b8;\n  font-weight: 500;\n  transition: color 0.15s;\n}\n.step-item.active .step-label {\n  color: #0f172a;\n  font-weight: 600;\n}\n.step-item.done .step-label {\n  color: #64748b;\n}\n.step-item:hover .step-label {\n  color: #0f172a;\n}\n.step-active-detail {\n  margin-left: calc(36px + 0.85rem);\n  padding: 0.5rem 0 0.25rem 0;\n}\n.step-hint {\n  font-size: 0.85rem;\n  color: #64748b;\n  line-height: 1.45;\n  margin: 0 0 0.85rem 0;\n}\n.btn-next-step {\n  display: inline-block;\n  padding: 0.5rem 1.25rem;\n  background: #0f172a;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 0.85rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.btn-next-step:hover {\n  background: #1e293b;\n}\n.step-connector {\n  width: 2px;\n  height: 20px;\n  background: #e2e8f0;\n  margin: 4px 0 4px 17px;\n  border-radius: 1px;\n}\n.step-item.done .step-connector {\n  background: #bbf7d0;\n}\n.sidebar-footer {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 1.25rem;\n  margin-top: 1.5rem;\n  padding-top: 1rem;\n  border-top: 1px solid #e2e8f0;\n}\n.btn-cancel {\n  display: inline-flex;\n  align-items: center;\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: #ef4444;\n  text-decoration: none;\n  cursor: pointer;\n  background: none;\n  border: none;\n  transition: color 0.15s;\n}\n.btn-cancel:hover {\n  color: #dc2626;\n}\n.btn-save-draft {\n  padding: 0.5rem 1.25rem;\n  border: 1px solid #e2e8f0;\n  border-radius: 6px;\n  background: white;\n  color: #0f172a;\n  font-size: 0.85rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.btn-save-draft:hover {\n  background: #f8fafc;\n  border-color: #cbd5e1;\n}\n.btn-save-draft:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-save-draft.btn-launch {\n  background: #16A34A;\n  color: white;\n  border-color: #16A34A;\n}\n.btn-save-draft.btn-launch:hover:not(:disabled) {\n  background: #15803d;\n  border-color: #15803d;\n}\n@media (max-width: 768px) {\n  .wizard-layout {\n    flex-direction: column;\n  }\n  .steps-sidebar {\n    width: 100%;\n    order: -1;\n    position: static;\n  }\n}\n/*# sourceMappingURL=create-program-wizard.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CreateProgramWizardComponent, { className: "CreateProgramWizardComponent", filePath: "src/app/features/bonus-program/pages/create-program-wizard/create-program-wizard.component.ts", lineNumber: 285 });
})();
export {
  CreateProgramWizardComponent
};
//# sourceMappingURL=chunk-4U3VDPXI.js.map
