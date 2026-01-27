import {
  BonusTypesService
} from "./chunk-RQU6EXWL.js";
import {
  AnalyticsService
} from "./chunk-IEZAC7LF.js";
import {
  LoaderComponent
} from "./chunk-3G3AASW4.js";
import {
  ModalComponent,
  PageHeaderService
} from "./chunk-EWJYX3AR.js";
import "./chunk-6FFMNYG3.js";
import {
  ToastService
} from "./chunk-PIRIPCUZ.js";
import {
  ButtonComponent,
  DefaultValueAccessor,
  FormsModule,
  MinValidator,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-FWOTYYMW.js";
import {
  ActivatedRoute,
  CommonModule,
  Component,
  Input,
  NavigationEnd,
  NgForOf,
  NgIf,
  NgSwitch,
  NgSwitchCase,
  Router,
  computed,
  filter,
  forkJoin,
  forwardRef,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
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
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-THV7WX37.js";

// src/app/shared/components/slider/slider.component.ts
function SliderComponent_label_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.value);
  }
}
function SliderComponent_label_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 5);
    \u0275\u0275text(1);
    \u0275\u0275template(2, SliderComponent_label_1_span_2_Template, 2, 1, "span", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.label, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.showValue);
  }
}
function SliderComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.min);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.max);
  }
}
var SliderComponent = class _SliderComponent {
  label = "";
  min = 0;
  max = 100;
  step = 1;
  disabled = false;
  showValue = false;
  showLabels = false;
  value = 0;
  onChangeFn = (value) => {
  };
  onTouchedFn = () => {
  };
  onInput(event) {
    const target = event.target;
    this.value = parseFloat(target.value);
    this.onChangeFn(this.value);
  }
  onBlur() {
    this.onTouchedFn();
  }
  writeValue(value) {
    this.value = value || 0;
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
  static \u0275fac = function SliderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SliderComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SliderComponent, selectors: [["app-slider"]], inputs: { label: "label", min: "min", max: "max", step: "step", disabled: "disabled", showValue: "showValue", showLabels: "showLabels" }, features: [\u0275\u0275ProvidersFeature([
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _SliderComponent),
      multi: true
    }
  ])], decls: 5, vars: 7, consts: [[1, "slider-wrapper"], ["class", "slider-label", 4, "ngIf"], [1, "slider-container"], ["type", "range", 1, "slider", 3, "input", "blur", "min", "max", "step", "value", "disabled"], ["class", "slider-labels", 4, "ngIf"], [1, "slider-label"], ["class", "slider-value", 4, "ngIf"], [1, "slider-value"], [1, "slider-labels"]], template: function SliderComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, SliderComponent_label_1_Template, 3, 2, "label", 1);
      \u0275\u0275elementStart(2, "div", 2)(3, "input", 3);
      \u0275\u0275listener("input", function SliderComponent_Template_input_input_3_listener($event) {
        return ctx.onInput($event);
      })("blur", function SliderComponent_Template_input_blur_3_listener() {
        return ctx.onBlur();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275template(4, SliderComponent_div_4_Template, 5, 2, "div", 4);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.label);
      \u0275\u0275advance(2);
      \u0275\u0275property("min", ctx.min)("max", ctx.max)("step", ctx.step)("value", ctx.value)("disabled", ctx.disabled);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showLabels);
    }
  }, dependencies: [CommonModule, NgIf], styles: ["\n\n.slider-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.slider-label[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #1a202c;\n  margin-bottom: 0.5rem;\n}\n.slider-value[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-weight: 400;\n}\n.slider-container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.slider[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 6px;\n  border-radius: 3px;\n  background: #e2e8f0;\n  outline: none;\n  -webkit-appearance: none;\n}\n.slider[_ngcontent-%COMP%]::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  appearance: none;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background: #007bff;\n  cursor: pointer;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n}\n.slider[_ngcontent-%COMP%]::-moz-range-thumb {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background: #007bff;\n  cursor: pointer;\n  border: none;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n}\n.slider[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.slider-labels[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.75rem;\n  color: #64748b;\n  margin-top: 0.25rem;\n}\n/*# sourceMappingURL=slider.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SliderComponent, [{
    type: Component,
    args: [{ selector: "app-slider", standalone: true, imports: [CommonModule], providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => SliderComponent),
        multi: true
      }
    ], template: `
    <div class="slider-wrapper">
      <label *ngIf="label" class="slider-label">
        {{ label }}
        <span class="slider-value" *ngIf="showValue">{{ value }}</span>
      </label>
      <div class="slider-container">
        <input
          type="range"
          [min]="min"
          [max]="max"
          [step]="step"
          [value]="value"
          [disabled]="disabled"
          (input)="onInput($event)"
          (blur)="onBlur()"
          class="slider"
        />
      </div>
      <div class="slider-labels" *ngIf="showLabels">
        <span>{{ min }}</span>
        <span>{{ max }}</span>
      </div>
    </div>
  `, styles: ["/* angular:styles/component:css;885f4ac4b2bf5ee5bbf22a78410a84a44afe525af430ba5f71f5c2ad746b6d78;/Users/baglan/repo/westwood/westwood-frontend/src/app/shared/components/slider/slider.component.ts */\n.slider-wrapper {\n  width: 100%;\n}\n.slider-label {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #1a202c;\n  margin-bottom: 0.5rem;\n}\n.slider-value {\n  color: #64748b;\n  font-weight: 400;\n}\n.slider-container {\n  width: 100%;\n}\n.slider {\n  width: 100%;\n  height: 6px;\n  border-radius: 3px;\n  background: #e2e8f0;\n  outline: none;\n  -webkit-appearance: none;\n}\n.slider::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  appearance: none;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background: #007bff;\n  cursor: pointer;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n}\n.slider::-moz-range-thumb {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background: #007bff;\n  cursor: pointer;\n  border: none;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n}\n.slider:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.slider-labels {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.75rem;\n  color: #64748b;\n  margin-top: 0.25rem;\n}\n/*# sourceMappingURL=slider.component.css.map */\n"] }]
  }], null, { label: [{
    type: Input
  }], min: [{
    type: Input
  }], max: [{
    type: Input
  }], step: [{
    type: Input
  }], disabled: [{
    type: Input
  }], showValue: [{
    type: Input
  }], showLabels: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SliderComponent, { className: "SliderComponent", filePath: "src/app/shared/components/slider/slider.component.ts", lineNumber: 109 });
})();

// src/app/shared/components/bonus-calculator/bonus-calculator.component.ts
function BonusCalculatorComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 102);
    \u0275\u0275element(1, "div", 103);
    \u0275\u0275elementStart(2, "p", 104);
    \u0275\u0275text(3, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0434\u0430\u043D\u043D\u044B\u0445...");
    \u0275\u0275elementEnd()();
  }
}
function BonusCalculatorComponent__svg_svg_149_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 17);
    \u0275\u0275element(1, "circle", 105)(2, "path", 106);
    \u0275\u0275elementEnd();
  }
}
function BonusCalculatorComponent__svg_svg_150_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 17);
    \u0275\u0275element(1, "path", 107)(2, "path", 108);
    \u0275\u0275elementEnd();
  }
}
function BonusCalculatorComponent__svg_svg_151_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 17);
    \u0275\u0275element(1, "path", 109);
    \u0275\u0275elementEnd();
  }
}
function BonusCalculatorComponent__svg_svg_152_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 17);
    \u0275\u0275element(1, "circle", 105)(2, "path", 106);
    \u0275\u0275elementEnd();
  }
}
var BonusCalculatorComponent = class _BonusCalculatorComponent {
  // Inputs are optional - if not provided, will fetch from API
  monthlyRevenue;
  averageCheck;
  monthlyRevenueSignal = signal(0);
  averageCheckSignal = signal(0);
  isLoading = signal(false);
  analyticsService = inject(AnalyticsService);
  toastService = inject(ToastService);
  router = inject(Router);
  route = inject(ActivatedRoute);
  navigationSubscription;
  ngOnInit() {
    if (this.monthlyRevenue !== void 0 && this.averageCheck !== void 0) {
      this.monthlyRevenueSignal.set(this.monthlyRevenue);
      this.averageCheckSignal.set(this.averageCheck);
    } else {
      this.loadAnalyticsData();
      this.navigationSubscription = this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((event) => {
        if (event.urlAfterRedirects?.includes("/bonus-program")) {
          this.loadAnalyticsData();
        }
      });
    }
  }
  ngOnDestroy() {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }
  loadAnalyticsData() {
    this.isLoading.set(true);
    forkJoin({
      revenue: this.analyticsService.getMonthlyRevenue(),
      averageCheck: this.analyticsService.getAverageCheck("MONTHLY")
    }).subscribe({
      next: (responses) => {
        if (responses.revenue.amount !== void 0 && responses.revenue.amount !== null) {
          this.monthlyRevenueSignal.set(responses.revenue.amount);
        } else if (responses.revenue.revenue !== void 0 && responses.revenue.revenue !== null) {
          this.monthlyRevenueSignal.set(responses.revenue.revenue);
        }
        if (responses.averageCheck.amount !== void 0 && responses.averageCheck.amount !== null) {
          this.averageCheckSignal.set(responses.averageCheck.amount);
        } else if (responses.averageCheck.averageCheck !== void 0 && responses.averageCheck.averageCheck !== null) {
          this.averageCheckSignal.set(responses.averageCheck.averageCheck);
        }
        this.isLoading.set(false);
      },
      error: (err) => {
        const errorMessage = err.error?.message || "\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0430\u043D\u0430\u043B\u0438\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0434\u0430\u043D\u043D\u044B\u0445";
        this.toastService.error(errorMessage);
        this.isLoading.set(false);
      }
    });
  }
  isFinancialHelpModalOpen = false;
  isScoreHelpModalOpen = false;
  earnPercent = signal(5);
  burnLimitPercent = signal(50);
  get earnPercentValue() {
    return this.earnPercent();
  }
  set earnPercentValue(value) {
    this.earnPercent.set(value);
  }
  get burnLimitPercentValue() {
    return this.burnLimitPercent();
  }
  set burnLimitPercentValue(value) {
    this.burnLimitPercent.set(value);
  }
  // Calculated metrics
  giftPerClient = computed(() => {
    return this.averageCheckSignal() * (this.earnPercent() / 100);
  });
  totalLiability = computed(() => {
    return this.monthlyRevenueSignal() * (this.earnPercent() / 100);
  });
  guaranteedCash = computed(() => {
    return this.averageCheckSignal() * (1 - this.burnLimitPercent() / 100);
  });
  guaranteedCashDifference = computed(() => {
    return this.guaranteedCash() - this.averageCheckSignal();
  });
  vulnerabilityScore = computed(() => {
    const burnLimit = this.burnLimitPercent();
    const earnPercent = this.earnPercent();
    return burnLimit * (1 + earnPercent / 10);
  });
  scoreLevel = computed(() => {
    const score = this.vulnerabilityScore();
    if (score <= 30)
      return "excellent";
    if (score > 30 && score <= 60)
      return "warning";
    return "danger";
  });
  scorePercentage = computed(() => {
    const score = this.vulnerabilityScore();
    return Math.min(score / 100 * 100, 100);
  });
  status = computed(() => {
    const earnPercentValue = this.earnPercent();
    const score = this.vulnerabilityScore();
    if (earnPercentValue < 3) {
      return {
        type: "low-motivation",
        title: "\u0421\u043B\u0430\u0431\u0430\u044F \u043C\u043E\u0442\u0438\u0432\u0430\u0446\u0438\u044F",
        description: "\u041F\u0440\u043E\u0446\u0435\u043D\u0442 \u043D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u044F \u0441\u043B\u0438\u0448\u043A\u043E\u043C \u043D\u0438\u0437\u043A\u0438\u0439, \u0447\u0442\u043E\u0431\u044B \u043C\u043E\u0442\u0438\u0432\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432 \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0442\u044C\u0441\u044F."
      };
    }
    if (score <= 30) {
      return {
        type: "excellent",
        title: "\u041E\u0442\u043B\u0438\u0447\u043D\u044B\u0439 \u0431\u0430\u043B\u0430\u043D\u0441",
        description: "\u041E\u0442\u043B\u0438\u0447\u043D\u044B\u0439 \u0431\u0430\u043B\u0430\u043D\u0441. \u0412\u0430\u0448\u0430 \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0430\u044F \u0432\u044B\u0440\u0443\u0447\u043A\u0430 \u043F\u043E\u0434 \u0437\u0430\u0449\u0438\u0442\u043E\u0439. \u0420\u0438\u0441\u043A\u0438 \u043C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u044B."
      };
    }
    if (score > 30 && score <= 60) {
      return {
        type: "warning",
        title: "\u0412\u043D\u0438\u043C\u0430\u043D\u0438\u0435",
        description: "\u0423\u043C\u0435\u0440\u0435\u043D\u043D\u044B\u0439 \u0440\u0438\u0441\u043A. \u0412\u044B \u0440\u0430\u0437\u0440\u0435\u0448\u0430\u0435\u0442\u0435 \u0441\u043F\u0438\u0441\u044B\u0432\u0430\u0442\u044C \u043E\u0449\u0443\u0442\u0438\u043C\u0443\u044E \u0447\u0430\u0441\u0442\u044C \u0447\u0435\u043A\u0430. \u0423\u0431\u0435\u0434\u0438\u0442\u0435\u0441\u044C, \u0447\u0442\u043E \u0432\u0430\u0448\u0430 \u043C\u0430\u0440\u0436\u0430 \u0432\u044B\u0448\u0435 30%."
      };
    }
    return {
      type: "danger",
      title: "\u041E\u043F\u0430\u0441\u043D\u043E",
      description: "\u041A\u0440\u0438\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0440\u0438\u0441\u043A! \u0423\u0433\u0440\u043E\u0437\u0430 \u043A\u0430\u0441\u0441\u043E\u0432\u043E\u0433\u043E \u0440\u0430\u0437\u0440\u044B\u0432\u0430. \u0412\u044B \u0442\u0435\u0440\u044F\u0435\u0442\u0435 \u0441\u043B\u0438\u0448\u043A\u043E\u043C \u043C\u043D\u043E\u0433\u043E \u0436\u0438\u0432\u044B\u0445 \u0434\u0435\u043D\u0435\u0433 \u0441 \u0437\u0430\u043A\u0430\u0437\u0430."
    };
  });
  formatCurrency(value) {
    return Math.round(value).toLocaleString("ru-RU");
  }
  formatScore(value) {
    return value.toFixed(1);
  }
  openFinancialHelpModal() {
    this.isFinancialHelpModalOpen = true;
  }
  openScoreHelpModal() {
    this.isScoreHelpModalOpen = true;
  }
  static \u0275fac = function BonusCalculatorComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BonusCalculatorComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BonusCalculatorComponent, selectors: [["app-bonus-calculator"]], inputs: { monthlyRevenue: "monthlyRevenue", averageCheck: "averageCheck" }, decls: 251, vars: 49, consts: [[1, "calculator-wrapper"], ["class", "loading-overlay", 4, "ngIf"], [1, "calculator-header"], [1, "header-icon"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 256 256", 2, "width", "100px", "height", "100px"], ["id", "icons_without_caption", "data-name", "icons without caption"], ["id", "CALCULATOR"], ["d", "M169.67 201.83H86.33a18.48 18.48 0 0 1-18.46-18.46V72.63a18.48 18.48 0 0 1 18.46-18.46h83.34a18.48 18.48 0 0 1 18.46 18.46v110.74a18.48 18.48 0 0 1-18.46 18.46zM86.33 58.17a14.47 14.47 0 0 0-14.46 14.46v110.74a14.47 14.47 0 0 0 14.46 14.46h83.34a14.48 14.48 0 0 0 14.46-14.46V72.63a14.47 14.47 0 0 0-14.46-14.46z", 1, "cls-1"], ["d", "M97.16 148.06a12 12 0 1 1 12-12 12 12 0 0 1-12 12zm0-19.91a8 8 0 1 0 8 8 8 8 0 0 0-8-8zM128.86 148.06a12 12 0 1 1 12-12 12 12 0 0 1-12 12zm0-19.91a8 8 0 1 0 8 8 8 8 0 0 0-8-8zM97.16 181.29a12 12 0 1 1 12-12 12 12 0 0 1-12 12zm0-19.91a8 8 0 1 0 8 8 8 8 0 0 0-8-8.01zM128.86 181.29a12 12 0 1 1 12-12 12 12 0 0 1-12 12zm0-19.91a8 8 0 1 0 8 8 8 8 0 0 0-8-8.01zM160.56 148.06a12 12 0 1 1 12-12 12 12 0 0 1-12 12zm0-19.91a8 8 0 1 0 8 8 8 8 0 0 0-8-8zM160.56 181.29a12 12 0 1 1 12-12 12 12 0 0 1-12 12zm0-19.91a8 8 0 1 0 8 8 8 8 0 0 0-8-8.01zM172.52 105.89H85.2V73.34h87.32zm-83.32-4h79.32V77.34H89.2z", 1, "cls-1"], [1, "calculator-title"], [1, "calculator-subtitle"], [1, "calculator-content"], [1, "main-layout"], [1, "input-section"], [1, "fixed-values"], [1, "fixed-value-item"], [1, "fixed-icon", "revenue-icon"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none"], ["d", "M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "fixed-content"], [1, "fixed-label"], [1, "fixed-value"], [1, "fixed-icon", "check-icon"], ["d", "M9 12l2 2 4-4M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "slider-group"], [1, "slider-item"], [1, "slider-header"], [1, "slider-title-wrapper"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", 1, "slider-title-icon"], ["cx", "9", "cy", "9", "r", "2", "stroke", "currentColor", "stroke-width", "1.5"], ["cx", "15", "cy", "15", "r", "2", "stroke", "currentColor", "stroke-width", "1.5"], ["d", "M5 19L19 5", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round"], [1, "slider-label-text"], [1, "slider-value-display"], [1, "slider-container-wrapper"], [3, "ngModelChange", "ngModel", "min", "max", "step", "showValue"], [1, "slider-range"], [1, "financial-breakdown"], [1, "breakdown-header"], [1, "breakdown-header-left"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", 1, "breakdown-header-icon"], [1, "breakdown-title"], ["type", "button", "aria-label", "\u041F\u043E\u043C\u043E\u0449\u044C", 1, "help-button", 3, "click"], ["width", "40px", "height", "40px", "viewBox", "-2 0 10 10", "id", "meteor-icon-kit__regular-questionmark-s", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M2 3C2 3.5523 1.5523 4 1 4C0.44772 4 0 3.5523 0 3C0 1.44772 1.4477 0 3 0C4.5523 0 6 1.44772 6 3C6 4.285 5.5004 4.8678 4.4472 5.3944C4.0004 5.6178 4 5.6183 4 6C4 6.5523 3.5523 7 3 7C2.4477 7 2 6.5523 2 6C2 4.715 2.4996 4.1322 3.5528 3.6056C3.9996 3.3822 4 3.3817 4 3C4 2.55228 3.4477 2 3 2C2.5523 2 2 2.55228 2 3zM3 10C2.4477 10 2 9.5523 2 9C2 8.4477 2.4477 8 3 8C3.5523 8 4 8.4477 4 9C4 9.5523 3.5523 10 3 10z", "fill", "#758CA3"], [1, "breakdown-items"], [1, "breakdown-item"], [1, "breakdown-item-content"], [1, "breakdown-icon-wrapper", "gift-icon"], ["d", "M20 12v9H4v-9", "stroke", "currentColor", "stroke-width", "1.5"], ["x", "2", "y", "7", "width", "20", "height", "5", "rx", "1", "stroke", "currentColor", "stroke-width", "1.5"], ["d", "M12 22V7", "stroke", "currentColor", "stroke-width", "1.5"], [1, "breakdown-text"], [1, "breakdown-label"], [1, "breakdown-value"], [1, "breakdown-icon-wrapper", "fund-icon"], [1, "breakdown-item", "highlight"], [1, "breakdown-icon-wrapper", "shield-icon-wrapper"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", 1, "shield-icon"], ["d", "M12 2L4 5v6c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V5l-8-3z", "stroke", "currentColor", "stroke-width", "1.5"], [1, "breakdown-value-group"], [1, "breakdown-value", "highlight-value"], [1, "breakdown-difference"], [1, "vulnerability-score-section"], [1, "score-header"], [1, "score-header-left"], [1, "score-label"], [1, "score-header-right"], [1, "score-badge"], [1, "score-value"], [1, "score-bar"], [1, "score-bar-fill"], [1, "score-thresholds"], [1, "threshold-item"], [1, "threshold-dot", "excellent"], [1, "threshold-label"], [1, "threshold-dot", "warning"], [1, "threshold-dot", "danger"], [1, "result-card"], [1, "result-icon-wrapper"], [1, "result-icon"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", 4, "ngIf"], [1, "result-content"], [1, "result-title"], [1, "result-description"], ["title", "\u0424\u0438\u043D\u0430\u043D\u0441\u043E\u0432\u044B\u0435 \u043F\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u0438", 3, "visibleChange", "visible", "showCloseButton"], [1, "help-modal-content"], [1, "help-item"], [1, "help-item-title"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", 1, "help-item-icon"], [1, "help-item-description"], [1, "help-item", "highlight"], ["title", "\u0418\u043D\u0434\u0435\u043A\u0441 \u0443\u044F\u0437\u0432\u0438\u043C\u043E\u0441\u0442\u0438", 3, "visibleChange", "visible", "showCloseButton"], [1, "help-list"], [1, "help-levels"], [1, "help-level", "excellent"], [1, "help-level-header"], [1, "help-level-dot", "excellent"], [1, "help-level", "warning"], [1, "help-level-dot", "warning"], [1, "help-level", "danger"], [1, "help-level-dot", "danger"], [1, "loading-overlay"], [1, "loading-spinner"], [1, "loading-text"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "2"], ["d", "M12 8v4M12 16h.01", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], ["d", "M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z", "stroke", "currentColor", "stroke-width", "2"], ["d", "M12 9v4M12 17h.01", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], ["d", "M12 2L4 5v6c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V5l-8-3z", "stroke", "currentColor", "stroke-width", "2"]], template: function BonusCalculatorComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, BonusCalculatorComponent_div_1_Template, 4, 0, "div", 1);
      \u0275\u0275elementStart(2, "div", 2)(3, "div", 3);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(4, "svg", 4)(5, "defs")(6, "style");
      \u0275\u0275text(7, ".cls-1{fill:#1d384d}");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "g", 5)(9, "g", 6);
      \u0275\u0275element(10, "path", 7)(11, "path", 8);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(12, "h2", 9);
      \u0275\u0275text(13, "\u041A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0442\u043E\u0440 \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u0438 \u0431\u043E\u043D\u0443\u0441\u043D\u043E\u0439 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u044B");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "p", 10);
      \u0275\u0275text(15, " \u041D\u0430\u0441\u0442\u0440\u043E\u0439\u0442\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u044B \u0438 \u0443\u0437\u043D\u0430\u0439\u0442\u0435, \u043D\u0430\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u0430 \u0432\u0430\u0448\u0430 \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044F ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "div", 11)(17, "div", 12)(18, "div", 13)(19, "div", 14)(20, "div", 15)(21, "div", 16);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(22, "svg", 17);
      \u0275\u0275element(23, "path", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(24, "div", 19)(25, "span", 20);
      \u0275\u0275text(26, "\u041C\u0435\u0441\u044F\u0447\u043D\u0430\u044F \u0432\u044B\u0440\u0443\u0447\u043A\u0430");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "span", 21);
      \u0275\u0275text(28);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(29, "div", 15)(30, "div", 22);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(31, "svg", 17);
      \u0275\u0275element(32, "path", 23);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(33, "div", 19)(34, "span", 20);
      \u0275\u0275text(35, "\u0421\u0440\u0435\u0434\u043D\u0438\u0439 \u0447\u0435\u043A");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "span", 21);
      \u0275\u0275text(37);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(38, "div", 24)(39, "div", 25)(40, "div", 26)(41, "div", 27);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(42, "svg", 28);
      \u0275\u0275element(43, "circle", 29)(44, "circle", 30)(45, "path", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(46, "label", 32);
      \u0275\u0275text(47, "\u041F\u0440\u043E\u0446\u0435\u043D\u0442 \u043D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u044F (\u043A\u044D\u0448\u0431\u0435\u043A)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(48, "span", 33);
      \u0275\u0275text(49);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(50, "div", 34)(51, "app-slider", 35);
      \u0275\u0275twoWayListener("ngModelChange", function BonusCalculatorComponent_Template_app_slider_ngModelChange_51_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.earnPercentValue, $event) || (ctx.earnPercentValue = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(52, "div", 36)(53, "span");
      \u0275\u0275text(54, "1%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "span");
      \u0275\u0275text(56, "20%");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(57, "div", 25)(58, "div", 26)(59, "div", 27);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(60, "svg", 28);
      \u0275\u0275element(61, "path", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(62, "label", 32);
      \u0275\u0275text(63, "\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u043F\u0440\u043E\u0446\u0435\u043D\u0442 \u043E\u043F\u043B\u0430\u0442\u044B \u0431\u043E\u043D\u0443\u0441\u0430\u043C\u0438");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(64, "span", 33);
      \u0275\u0275text(65);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(66, "div", 34)(67, "app-slider", 35);
      \u0275\u0275twoWayListener("ngModelChange", function BonusCalculatorComponent_Template_app_slider_ngModelChange_67_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.burnLimitPercentValue, $event) || (ctx.burnLimitPercentValue = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(68, "div", 36)(69, "span");
      \u0275\u0275text(70, "10%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "span");
      \u0275\u0275text(72, "100%");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(73, "div", 37)(74, "div", 38)(75, "div", 39);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(76, "svg", 40);
      \u0275\u0275element(77, "path", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(78, "h3", 41);
      \u0275\u0275text(79, "\u0424\u0438\u043D\u0430\u043D\u0441\u043E\u0432\u044B\u0435 \u043F\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u0438");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(80, "button", 42);
      \u0275\u0275listener("click", function BonusCalculatorComponent_Template_button_click_80_listener() {
        return ctx.openFinancialHelpModal();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(81, "svg", 43);
      \u0275\u0275element(82, "path", 44);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(83, "div", 45)(84, "div", 46)(85, "div", 47)(86, "div", 48);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(87, "svg", 17);
      \u0275\u0275element(88, "path", 49)(89, "rect", 50)(90, "path", 51);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(91, "div", 52)(92, "span", 53);
      \u0275\u0275text(93, "\u0414\u0430\u0440\u0438\u043C \u0441 \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u0447\u0435\u043A\u0430");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "span", 54);
      \u0275\u0275text(95);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(96, "div", 46)(97, "div", 47)(98, "div", 55);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(99, "svg", 17);
      \u0275\u0275element(100, "path", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(101, "div", 52)(102, "span", 53);
      \u0275\u0275text(103, "\u0424\u043E\u043D\u0434 \u0431\u043E\u043D\u0443\u0441\u043E\u0432 \u0437\u0430 \u043C\u0435\u0441\u044F\u0446");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(104, "span", 54);
      \u0275\u0275text(105);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(106, "div", 56)(107, "div", 47)(108, "div", 57);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(109, "svg", 58);
      \u0275\u0275element(110, "path", 59);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(111, "div", 52)(112, "span", 53);
      \u0275\u0275text(113, "\u0413\u0430\u0440\u0430\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0430\u044F \u0432\u044B\u0440\u0443\u0447\u043A\u0430 \u0441 \u0447\u0435\u043A\u0430");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(114, "div", 60)(115, "span", 61);
      \u0275\u0275text(116);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(117, "span", 62);
      \u0275\u0275text(118);
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(119, "div", 63)(120, "div", 64)(121, "div", 65)(122, "span", 66);
      \u0275\u0275text(123, "\u0418\u043D\u0434\u0435\u043A\u0441 \u0443\u044F\u0437\u0432\u0438\u043C\u043E\u0441\u0442\u0438");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(124, "div", 67)(125, "button", 42);
      \u0275\u0275listener("click", function BonusCalculatorComponent_Template_button_click_125_listener() {
        return ctx.openScoreHelpModal();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(126, "svg", 43);
      \u0275\u0275element(127, "path", 44);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(128, "div", 68)(129, "span", 69);
      \u0275\u0275text(130);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(131, "div", 70);
      \u0275\u0275element(132, "div", 71);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(133, "div", 72)(134, "span", 73);
      \u0275\u0275element(135, "span", 74);
      \u0275\u0275elementStart(136, "span", 75);
      \u0275\u0275text(137, "\u0411\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E (\u226430)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(138, "span", 73);
      \u0275\u0275element(139, "span", 76);
      \u0275\u0275elementStart(140, "span", 75);
      \u0275\u0275text(141, "\u0412\u043D\u0438\u043C\u0430\u043D\u0438\u0435 (31-60)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(142, "span", 73);
      \u0275\u0275element(143, "span", 77);
      \u0275\u0275elementStart(144, "span", 75);
      \u0275\u0275text(145, "\u041E\u043F\u0430\u0441\u043D\u043E (>60)");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(146, "div", 78)(147, "div", 79)(148, "div", 80);
      \u0275\u0275template(149, BonusCalculatorComponent__svg_svg_149_Template, 3, 0, "svg", 81)(150, BonusCalculatorComponent__svg_svg_150_Template, 3, 0, "svg", 81)(151, BonusCalculatorComponent__svg_svg_151_Template, 2, 0, "svg", 81)(152, BonusCalculatorComponent__svg_svg_152_Template, 3, 0, "svg", 81);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(153, "div", 82)(154, "h3", 83);
      \u0275\u0275text(155);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(156, "p", 84);
      \u0275\u0275text(157);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(158, "app-modal", 85);
      \u0275\u0275listener("visibleChange", function BonusCalculatorComponent_Template_app_modal_visibleChange_158_listener($event) {
        return ctx.isFinancialHelpModalOpen = $event;
      });
      \u0275\u0275elementStart(159, "div", 86)(160, "div", 87)(161, "h4", 88);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(162, "svg", 89);
      \u0275\u0275element(163, "path", 49)(164, "rect", 50)(165, "path", 51);
      \u0275\u0275elementEnd();
      \u0275\u0275text(166, " \u0414\u0430\u0440\u0438\u043C \u0441 \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u0447\u0435\u043A\u0430 ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(167, "p", 90);
      \u0275\u0275text(168, " \u0421\u0443\u043C\u043C\u0430 \u0434\u0435\u043D\u0435\u0433, \u043A\u043E\u0442\u043E\u0440\u0443\u044E \u0432\u044B \u043E\u0442\u0434\u0430\u0435\u0442\u0435 \u043A\u043B\u0438\u0435\u043D\u0442\u0443 \u0432 \u0432\u0438\u0434\u0435 \u0431\u043E\u043D\u0443\u0441\u043E\u0432 \u043F\u0440\u0438 \u043A\u0430\u0436\u0434\u043E\u0439 \u0442\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u0438. \u0420\u0430\u0441\u0441\u0447\u0438\u0442\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u043A\u0430\u043A: ");
      \u0275\u0275elementStart(169, "strong");
      \u0275\u0275text(170, "\u0421\u0440\u0435\u0434\u043D\u0438\u0439 \u0447\u0435\u043A \xD7 \u041F\u0440\u043E\u0446\u0435\u043D\u0442 \u043D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u044F");
      \u0275\u0275elementEnd();
      \u0275\u0275text(171, ". ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(172, "div", 87)(173, "h4", 88);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(174, "svg", 89);
      \u0275\u0275element(175, "path", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275text(176, " \u0424\u043E\u043D\u0434 \u0431\u043E\u043D\u0443\u0441\u043E\u0432 \u0437\u0430 \u043C\u0435\u0441\u044F\u0446 ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(177, "p", 90);
      \u0275\u0275text(178, " \u041E\u0431\u0449\u0430\u044F \u0441\u0443\u043C\u043C\u0430 \u0432\u0438\u0440\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0435\u043D\u0435\u0433 (\u0431\u043E\u043D\u0443\u0441\u043E\u0432), \u043A\u043E\u0442\u043E\u0440\u0443\u044E \u0432\u044B \u0432\u044B\u043F\u0443\u0441\u043A\u0430\u0435\u0442\u0435 \u0437\u0430 \u043C\u0435\u0441\u044F\u0446. \u042D\u0442\u043E \u0432\u0430\u0448 \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0439 \u0440\u0438\u0441\u043A. \u0420\u0430\u0441\u0441\u0447\u0438\u0442\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u043A\u0430\u043A: ");
      \u0275\u0275elementStart(179, "strong");
      \u0275\u0275text(180, "\u041C\u0435\u0441\u044F\u0447\u043D\u0430\u044F \u0432\u044B\u0440\u0443\u0447\u043A\u0430 \xD7 \u041F\u0440\u043E\u0446\u0435\u043D\u0442 \u043D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u044F");
      \u0275\u0275elementEnd();
      \u0275\u0275text(181, ". ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(182, "div", 91)(183, "h4", 88);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(184, "svg", 89);
      \u0275\u0275element(185, "path", 59);
      \u0275\u0275elementEnd();
      \u0275\u0275text(186, " \u0413\u0430\u0440\u0430\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0430\u044F \u0432\u044B\u0440\u0443\u0447\u043A\u0430 \u0441 \u0447\u0435\u043A\u0430 ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(187, "p", 90);
      \u0275\u0275text(188, " \u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0441\u0443\u043C\u043C\u0430 \u0440\u0435\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0435\u043D\u0435\u0433, \u043A\u043E\u0442\u043E\u0440\u0443\u044E \u0432\u044B \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u0435 \u0441 \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u0437\u0430\u043A\u0430\u0437\u0430, \u043D\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E \u043E\u0442 \u0442\u043E\u0433\u043E, \u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0431\u043E\u043D\u0443\u0441\u043E\u0432 \u043F\u043E\u0442\u0440\u0430\u0442\u0438\u0442 \u043A\u043B\u0438\u0435\u043D\u0442. \u042D\u0442\u043E \u0432\u0430\u0448\u0430 \u0437\u0430\u0449\u0438\u0442\u0430 \u043E\u0442 \u043A\u0430\u0441\u0441\u043E\u0432\u043E\u0433\u043E \u0440\u0430\u0437\u0440\u044B\u0432\u0430. ");
      \u0275\u0275element(189, "br")(190, "br");
      \u0275\u0275text(191, " \u0420\u0430\u0441\u0441\u0447\u0438\u0442\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u043A\u0430\u043A: ");
      \u0275\u0275elementStart(192, "strong");
      \u0275\u0275text(193, "\u0421\u0440\u0435\u0434\u043D\u0438\u0439 \u0447\u0435\u043A \xD7 (1 - \u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u043F\u0440\u043E\u0446\u0435\u043D\u0442 \u043E\u043F\u043B\u0430\u0442\u044B \u0431\u043E\u043D\u0443\u0441\u0430\u043C\u0438)");
      \u0275\u0275elementEnd();
      \u0275\u0275text(194, ". ");
      \u0275\u0275element(195, "br")(196, "br");
      \u0275\u0275elementStart(197, "strong");
      \u0275\u0275text(198, "\u0420\u0430\u0437\u043D\u0438\u0446\u0430");
      \u0275\u0275elementEnd();
      \u0275\u0275text(199, " \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442, \u043D\u0430\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0430\u044F \u0432\u044B\u0440\u0443\u0447\u043A\u0430 \u043E\u0442\u043B\u0438\u0447\u0430\u0435\u0442\u0441\u044F \u043E\u0442 \u0441\u0440\u0435\u0434\u043D\u0435\u0433\u043E \u0447\u0435\u043A\u0430. \u041E\u0442\u0440\u0438\u0446\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043E\u0437\u043D\u0430\u0447\u0430\u0435\u0442, \u0447\u0442\u043E \u0432\u044B \u0442\u0435\u0440\u044F\u0435\u0442\u0435 \u0447\u0430\u0441\u0442\u044C \u0432\u044B\u0440\u0443\u0447\u043A\u0438. ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(200, "app-modal", 92);
      \u0275\u0275listener("visibleChange", function BonusCalculatorComponent_Template_app_modal_visibleChange_200_listener($event) {
        return ctx.isScoreHelpModalOpen = $event;
      });
      \u0275\u0275elementStart(201, "div", 86)(202, "div", 87)(203, "h4", 88);
      \u0275\u0275text(204, "\u0427\u0442\u043E \u044D\u0442\u043E \u0442\u0430\u043A\u043E\u0435?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(205, "p", 90);
      \u0275\u0275text(206, " \u0418\u043D\u0434\u0435\u043A\u0441 \u0443\u044F\u0437\u0432\u0438\u043C\u043E\u0441\u0442\u0438 \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442, \u043D\u0430\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0432\u0430\u0448\u0430 \u0431\u043E\u043D\u0443\u0441\u043D\u0430\u044F \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430 \u043F\u043E\u0434\u0432\u0435\u0440\u0436\u0435\u043D\u0430 \u0440\u0438\u0441\u043A\u0443 \u043A\u0430\u0441\u0441\u043E\u0432\u043E\u0433\u043E \u0440\u0430\u0437\u0440\u044B\u0432\u0430. \u0427\u0435\u043C \u0432\u044B\u0448\u0435 \u0438\u043D\u0434\u0435\u043A\u0441, \u0442\u0435\u043C \u0431\u043E\u043B\u044C\u0448\u0435 \u0440\u0438\u0441\u043A \u043F\u043E\u0442\u0435\u0440\u044F\u0442\u044C \u0436\u0438\u0432\u044B\u0435 \u0434\u0435\u043D\u044C\u0433\u0438. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(207, "div", 87)(208, "h4", 88);
      \u0275\u0275text(209, "\u041A\u0430\u043A \u0440\u0430\u0441\u0441\u0447\u0438\u0442\u044B\u0432\u0430\u0435\u0442\u0441\u044F?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(210, "div", 90)(211, "p");
      \u0275\u0275text(212, "\u0424\u043E\u0440\u043C\u0443\u043B\u0430: ");
      \u0275\u0275elementStart(213, "strong");
      \u0275\u0275text(214, "\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u043F\u0440\u043E\u0446\u0435\u043D\u0442 \u043E\u043F\u043B\u0430\u0442\u044B \u0431\u043E\u043D\u0443\u0441\u0430\u043C\u0438 \xD7 (1 + \u041F\u0440\u043E\u0446\u0435\u043D\u0442 \u043D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u044F / 10)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(215, "p");
      \u0275\u0275text(216, "\u0418\u043D\u0434\u0435\u043A\u0441 \u0443\u0447\u0438\u0442\u044B\u0432\u0430\u0435\u0442:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(217, "ul", 93)(218, "li")(219, "strong");
      \u0275\u0275text(220, "\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u043F\u0440\u043E\u0446\u0435\u043D\u0442 \u043E\u043F\u043B\u0430\u0442\u044B \u0431\u043E\u043D\u0443\u0441\u0430\u043C\u0438");
      \u0275\u0275elementEnd();
      \u0275\u0275text(221, " \u2014 \u043F\u0440\u044F\u043C\u043E\u0439 \u0440\u0438\u0441\u043A \u043F\u043E\u0442\u0435\u0440\u0438 \u0432\u044B\u0440\u0443\u0447\u043A\u0438");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(222, "li")(223, "strong");
      \u0275\u0275text(224, "\u041F\u0440\u043E\u0446\u0435\u043D\u0442 \u043D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u044F");
      \u0275\u0275elementEnd();
      \u0275\u0275text(225, " \u2014 \u0447\u0435\u043C \u0432\u044B\u0448\u0435 \u043A\u044D\u0448\u0431\u0435\u043A, \u0442\u0435\u043C \u0447\u0430\u0449\u0435 \u043A\u043B\u0438\u0435\u043D\u0442\u044B \u0442\u0440\u0430\u0442\u044F\u0442 \u0431\u043E\u043D\u0443\u0441\u044B");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(226, "div", 87)(227, "h4", 88);
      \u0275\u0275text(228, "\u0423\u0440\u043E\u0432\u043D\u0438 \u0440\u0438\u0441\u043A\u0430");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(229, "div", 94)(230, "div", 95)(231, "div", 96);
      \u0275\u0275element(232, "span", 97);
      \u0275\u0275elementStart(233, "strong");
      \u0275\u0275text(234, "\u0411\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E (\u226430)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(235, "p");
      \u0275\u0275text(236, "\u0412\u0430\u0448\u0430 \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0430\u044F \u0432\u044B\u0440\u0443\u0447\u043A\u0430 \u043F\u043E\u0434 \u0437\u0430\u0449\u0438\u0442\u043E\u0439. \u0420\u0438\u0441\u043A\u0438 \u043C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u044B.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(237, "div", 98)(238, "div", 96);
      \u0275\u0275element(239, "span", 99);
      \u0275\u0275elementStart(240, "strong");
      \u0275\u0275text(241, "\u0412\u043D\u0438\u043C\u0430\u043D\u0438\u0435 (31-60)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(242, "p");
      \u0275\u0275text(243, "\u0423\u043C\u0435\u0440\u0435\u043D\u043D\u044B\u0439 \u0440\u0438\u0441\u043A. \u0423\u0431\u0435\u0434\u0438\u0442\u0435\u0441\u044C, \u0447\u0442\u043E \u0432\u0430\u0448\u0430 \u043C\u0430\u0440\u0436\u0430 \u0432\u044B\u0448\u0435 30%.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(244, "div", 100)(245, "div", 96);
      \u0275\u0275element(246, "span", 101);
      \u0275\u0275elementStart(247, "strong");
      \u0275\u0275text(248, "\u041E\u043F\u0430\u0441\u043D\u043E (>60)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(249, "p");
      \u0275\u0275text(250, "\u041A\u0440\u0438\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0440\u0438\u0441\u043A! \u0423\u0433\u0440\u043E\u0437\u0430 \u043A\u0430\u0441\u0441\u043E\u0432\u043E\u0433\u043E \u0440\u0430\u0437\u0440\u044B\u0432\u0430. \u0421\u0440\u043E\u0447\u043D\u043E \u043F\u0435\u0440\u0435\u0441\u043C\u043E\u0442\u0440\u0438\u0442\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438.");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading());
      \u0275\u0275advance(27);
      \u0275\u0275textInterpolate1("", ctx.formatCurrency(ctx.monthlyRevenueSignal()), " \u20B8");
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate1("", ctx.formatCurrency(ctx.averageCheckSignal()), " \u20B8");
      \u0275\u0275advance(12);
      \u0275\u0275textInterpolate1("", ctx.earnPercent(), "%");
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.earnPercentValue);
      \u0275\u0275property("min", 1)("max", 20)("step", 0.5)("showValue", false);
      \u0275\u0275advance(14);
      \u0275\u0275textInterpolate1("", ctx.burnLimitPercent(), "%");
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.burnLimitPercentValue);
      \u0275\u0275property("min", 10)("max", 100)("step", 2.5)("showValue", false);
      \u0275\u0275advance(28);
      \u0275\u0275textInterpolate1("", ctx.formatCurrency(ctx.giftPerClient()), " \u20B8");
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate1("", ctx.formatCurrency(ctx.totalLiability()), " \u20B8");
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate1("", ctx.formatCurrency(ctx.guaranteedCash()), " \u20B8");
      \u0275\u0275advance();
      \u0275\u0275classProp("positive", ctx.guaranteedCashDifference() >= 0)("negative", ctx.guaranteedCashDifference() < 0);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate2(" ", ctx.guaranteedCashDifference() >= 0 ? "+" : "", "", ctx.formatCurrency(ctx.guaranteedCashDifference()), " \u20B8 ");
      \u0275\u0275advance(10);
      \u0275\u0275classMap("score-" + ctx.scoreLevel());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.formatScore(ctx.vulnerabilityScore()));
      \u0275\u0275advance(2);
      \u0275\u0275classMap("score-" + ctx.scoreLevel());
      \u0275\u0275styleProp("width", ctx.scorePercentage(), "%");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.scoreLevel() === "excellent");
      \u0275\u0275advance(4);
      \u0275\u0275classProp("active", ctx.scoreLevel() === "warning");
      \u0275\u0275advance(4);
      \u0275\u0275classProp("active", ctx.scoreLevel() === "danger");
      \u0275\u0275advance(4);
      \u0275\u0275classMap("status-" + ctx.status().type);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.status().type === "danger");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.status().type === "warning");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.status().type === "excellent");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.status().type === "low-motivation");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.status().title);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.status().description);
      \u0275\u0275advance();
      \u0275\u0275property("visible", ctx.isFinancialHelpModalOpen)("showCloseButton", true);
      \u0275\u0275advance(42);
      \u0275\u0275property("visible", ctx.isScoreHelpModalOpen)("showCloseButton", true);
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, NgControlStatus, NgModel, SliderComponent, ModalComponent], styles: ['\n\n.calculator-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  background: white;\n  border-radius: 16px;\n  padding: 2.5rem;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);\n  margin-top: 2rem;\n  transition: all 0.3s ease;\n}\n.calculator-wrapper[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 8px 16px -4px rgba(0, 0, 0, 0.1);\n}\n.calculator-header[_ngcontent-%COMP%] {\n  margin-bottom: 2.5rem;\n  position: relative;\n}\n.header-icon[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  background:\n    linear-gradient(\n      135deg,\n      #dcfce7 0%,\n      #bbf7d0 100%);\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 1rem;\n}\n.header-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  color: #16A34A;\n}\n.calculator-title[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 0.5rem 0;\n  letter-spacing: -0.02em;\n}\n.calculator-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  color: #64748b;\n  margin: 0;\n  line-height: 1.6;\n}\n.calculator-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\n.main-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 2rem;\n}\n.input-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.fixed-values[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: 1rem;\n}\n.fixed-value-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 1.25rem;\n  background: #f8fafc;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n  transition: all 0.2s ease;\n}\n.fixed-value-item[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n  border-color: #cbd5e1;\n  // transform: translateY(-1px);\n}\n.fixed-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.fixed-icon.revenue-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #dbeafe 0%,\n      #bfdbfe 100%);\n  color: #2563eb;\n}\n.fixed-icon.check-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #dcfce7 0%,\n      #bbf7d0 100%);\n  color: #16A34A;\n}\n.fixed-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n}\n.fixed-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n  flex: 1;\n}\n.fixed-label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #64748b;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.fixed-value[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #0f172a;\n  letter-spacing: -0.01em;\n}\n.slider-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\n.slider-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  padding: 1.5rem;\n  background: #f8fafc;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n  transition: all 0.2s ease;\n}\n.slider-item[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n  border-color: #cbd5e1;\n}\n.slider-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.slider-title-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.slider-title-icon[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  color: #16A34A;\n  flex-shrink: 0;\n}\n.slider-label-text[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 600;\n  color: #475569;\n}\n.slider-value-display[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #16A34A;\n  letter-spacing: -0.02em;\n}\n.slider-container-wrapper[_ngcontent-%COMP%] {\n  padding: 0.5rem 0;\n}\n.slider-container-wrapper[_ngcontent-%COMP%]     .slider {\n  height: 8px;\n  background: #e2e8f0;\n}\n.slider-container-wrapper[_ngcontent-%COMP%]     .slider::-webkit-slider-thumb {\n  width: 24px;\n  height: 24px;\n  background: #16A34A;\n  box-shadow: 0 2px 8px rgba(22, 163, 74, 0.3);\n  transition: all 0.2s ease;\n}\n.slider-container-wrapper[_ngcontent-%COMP%]     .slider::-webkit-slider-thumb:hover {\n  background: #15803d;\n  box-shadow: 0 4px 12px rgba(22, 163, 74, 0.4);\n  // transform: scale(1.1);\n}\n.slider-container-wrapper[_ngcontent-%COMP%]     .slider::-moz-range-thumb {\n  width: 24px;\n  height: 24px;\n  background: #16A34A;\n  border: none;\n  box-shadow: 0 2px 8px rgba(22, 163, 74, 0.3);\n  transition: all 0.2s ease;\n}\n.slider-container-wrapper[_ngcontent-%COMP%]     .slider::-moz-range-thumb:hover {\n  background: #15803d;\n  box-shadow: 0 4px 12px rgba(22, 163, 74, 0.4);\n  // transform: scale(1.1);\n}\n.slider-range[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.75rem;\n  color: #94a3b8;\n  font-weight: 500;\n}\n.result-card[_ngcontent-%COMP%] {\n  padding: 1.75rem;\n  border-radius: 14px;\n  display: flex;\n  gap: 1.25rem;\n  align-items: flex-start;\n  border: 2px solid;\n  transition: all 0.3s ease;\n  position: relative;\n  overflow: hidden;\n}\n.result-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 4px;\n  background: currentColor;\n  opacity: 0.3;\n}\n.result-card.status-danger[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #fef2f2 0%,\n      #fee2e2 100%);\n  border-color: #fecaca;\n  color: #991b1b;\n}\n.result-card.status-warning[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #fffbeb 0%,\n      #fef3c7 100%);\n  border-color: #fde68a;\n  color: #92400e;\n}\n.result-card.status-excellent[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f0fdf4 0%,\n      #dcfce7 100%);\n  border-color: #bbf7d0;\n  color: #15803d;\n}\n.result-card.status-low-motivation[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f8fafc 0%,\n      #f1f5f9 100%);\n  border-color: #cbd5e1;\n  color: #64748b;\n}\n.result-icon-wrapper[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.result-icon[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 14px;\n  background: rgba(255, 255, 255, 0.8);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.result-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n}\n.result-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.result-title[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 700;\n  margin: 0 0 0.5rem 0;\n}\n.result-description[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  line-height: 1.6;\n  margin: 0;\n  opacity: 0.9;\n}\n.financial-breakdown[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border-radius: 14px;\n  padding: 1.75rem;\n  border: 1px solid #e2e8f0;\n}\n.breakdown-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1.5rem;\n}\n.breakdown-header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.breakdown-header-icon[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  color: #16A34A;\n}\n.breakdown-title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n  letter-spacing: -0.01em;\n}\n.breakdown-items[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.breakdown-item[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n  transition: all 0.2s ease;\n  overflow: hidden;\n}\n.breakdown-item[_ngcontent-%COMP%]:hover {\n  border-color: #cbd5e1;\n  // transform: translateY(-1px);\n  // box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);\n}\n.breakdown-item.highlight[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #dcfce7 0%,\n      #bbf7d0 100%);\n  border-color: #86efac;\n  box-shadow: 0 4px 12px rgba(22, 163, 74, 0.2);\n}\n.breakdown-item.highlight[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 6px 16px rgba(22, 163, 74, 0.25);\n  // transform: translateY(-2px);\n}\n.breakdown-item-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 1.25rem;\n}\n.breakdown-icon-wrapper[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.breakdown-icon-wrapper.gift-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #fef3c7 0%,\n      #fde68a 100%);\n  color: #d97706;\n}\n.breakdown-icon-wrapper.fund-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #dbeafe 0%,\n      #bfdbfe 100%);\n  color: #2563eb;\n}\n.breakdown-icon-wrapper.shield-icon-wrapper[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #dcfce7 0%,\n      #bbf7d0 100%);\n  color: #16A34A;\n}\n.breakdown-icon-wrapper[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n}\n.breakdown-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n  flex: 1;\n}\n.breakdown-label[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.breakdown-item.highlight[_ngcontent-%COMP%]   .breakdown-label[_ngcontent-%COMP%] {\n  color: #15803d;\n}\n.shield-icon[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n}\n.breakdown-value[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #0f172a;\n  letter-spacing: -0.02em;\n}\n.breakdown-item.highlight[_ngcontent-%COMP%]   .breakdown-value[_ngcontent-%COMP%] {\n  color: #15803d;\n  font-size: 1.75rem;\n}\n.breakdown-value-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n  align-items: start;\n}\n.breakdown-difference[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 600;\n  padding: 0.25rem 0.5rem;\n  border-radius: 6px;\n}\n.breakdown-difference.positive[_ngcontent-%COMP%] {\n  color: #15803d;\n  background: rgba(22, 163, 74, 0.1);\n}\n.breakdown-difference.negative[_ngcontent-%COMP%] {\n  color: #dc2626;\n  // background: rgba(220, 38, 38, 0.1);\n}\n.vulnerability-score-section[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border-radius: 14px;\n  padding: 1.5rem;\n  border: 1px solid #e2e8f0;\n  margin-top: 1rem;\n}\n.score-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n.score-header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.score-header-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.score-label[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #475569;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.score-badge[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  border-radius: 8px;\n  font-weight: 700;\n  font-size: 1.25rem;\n  letter-spacing: -0.02em;\n}\n.score-badge.score-excellent[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #dcfce7 0%,\n      #bbf7d0 100%);\n  color: #15803d;\n}\n.score-badge.score-warning[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #fef3c7 0%,\n      #fde68a 100%);\n  color: #92400e;\n}\n.score-badge.score-danger[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #fee2e2 0%,\n      #fecaca 100%);\n  color: #991b1b;\n}\n.score-value[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.score-bar[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 12px;\n  background: #e2e8f0;\n  border-radius: 6px;\n  overflow: hidden;\n  margin-bottom: 1rem;\n  position: relative;\n}\n.score-bar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 6px;\n  transition: width 0.3s ease, background 0.3s ease;\n}\n.score-bar-fill.score-excellent[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #16A34A 0%,\n      #22c55e 100%);\n}\n.score-bar-fill.score-warning[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #f59e0b 0%,\n      #fbbf24 100%);\n}\n.score-bar-fill.score-danger[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #dc2626 0%,\n      #ef4444 100%);\n}\n.score-thresholds[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 1rem;\n}\n.threshold-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  flex: 1;\n  font-size: 0.8rem;\n  color: #64748b;\n  transition: all 0.2s ease;\n}\n.threshold-item.active[_ngcontent-%COMP%] {\n  color: #0f172a;\n  font-weight: 600;\n}\n.threshold-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.threshold-dot.excellent[_ngcontent-%COMP%] {\n  background: #16A34A;\n}\n.threshold-dot.warning[_ngcontent-%COMP%] {\n  background: #f59e0b;\n}\n.threshold-dot.danger[_ngcontent-%COMP%] {\n  background: #dc2626;\n}\n.threshold-label[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.loading-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(255, 255, 255, 0.9);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  border-radius: 16px;\n  z-index: 10;\n}\n.loading-spinner[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border: 4px solid #e2e8f0;\n  border-top-color: #16A34A;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.loading-text[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #64748b;\n  font-weight: 500;\n  margin: 0;\n}\n.help-button[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  border: 1px solid #cbd5e1;\n  background: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  color: #64748b;\n  flex-shrink: 0;\n}\n.help-button[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n  border-color: #16A34A;\n  color: #16A34A;\n  // transform: scale(1.1);\n}\n.help-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n.help-modal-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n  padding: 0.5rem 0;\n}\n.help-item[_ngcontent-%COMP%] {\n  padding: 1rem;\n  background: #f8fafc;\n  border-radius: 10px;\n  border: 1px solid #e2e8f0;\n}\n.help-item.highlight[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #dcfce7 0%,\n      #bbf7d0 100%);\n  border-color: #86efac;\n}\n.help-item-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  font-size: 1rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 0.75rem 0;\n}\n.help-item-icon[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  color: #16A34A;\n  flex-shrink: 0;\n}\n.help-item-description[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  line-height: 1.6;\n  color: #475569;\n  margin: 0;\n}\n.help-item-description[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #0f172a;\n  font-weight: 600;\n}\n.help-list[_ngcontent-%COMP%] {\n  margin: 0.75rem 0 0 0;\n  padding-left: 1.5rem;\n  color: #475569;\n}\n.help-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n  line-height: 1.5;\n}\n.help-levels[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  margin-top: 0.75rem;\n}\n.help-level[_ngcontent-%COMP%] {\n  padding: 1rem;\n  background: white;\n  border-radius: 8px;\n  border: 1px solid #e2e8f0;\n}\n.help-level.excellent[_ngcontent-%COMP%] {\n  border-left: 4px solid #16A34A;\n}\n.help-level.warning[_ngcontent-%COMP%] {\n  border-left: 4px solid #f59e0b;\n}\n.help-level.danger[_ngcontent-%COMP%] {\n  border-left: 4px solid #dc2626;\n}\n.help-level-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-bottom: 0.5rem;\n  font-size: 0.95rem;\n}\n.help-level-dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.help-level-dot.excellent[_ngcontent-%COMP%] {\n  background: #16A34A;\n}\n.help-level-dot.warning[_ngcontent-%COMP%] {\n  background: #f59e0b;\n}\n.help-level-dot.danger[_ngcontent-%COMP%] {\n  background: #dc2626;\n}\n.help-level[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.85rem;\n  color: #64748b;\n  line-height: 1.5;\n}\n@media (max-width: 1024px) {\n  .main-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 768px) {\n  .calculator-wrapper[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n  .calculator-title[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .fixed-values[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .fixed-value-item[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n  }\n  .slider-item[_ngcontent-%COMP%] {\n    padding: 1.25rem;\n  }\n  .slider-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 0.5rem;\n  }\n  .result-card[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n    padding: 1.5rem;\n  }\n  .result-icon-wrapper[_ngcontent-%COMP%] {\n    margin: 0 auto;\n  }\n  .breakdown-item-content[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n  }\n  .breakdown-value-group[_ngcontent-%COMP%] {\n    align-items: center;\n  }\n  .score-thresholds[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0.5rem;\n  }\n  .threshold-item[_ngcontent-%COMP%] {\n    justify-content: flex-start;\n  }\n}\n/*# sourceMappingURL=bonus-calculator.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BonusCalculatorComponent, [{
    type: Component,
    args: [{ selector: "app-bonus-calculator", standalone: true, imports: [CommonModule, FormsModule, SliderComponent, ModalComponent], template: `
    <div class="calculator-wrapper">
      <div *ngIf="isLoading()" class="loading-overlay">
        <div class="loading-spinner"></div>
        <p class="loading-text">\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0434\u0430\u043D\u043D\u044B\u0445...</p>
      </div>
      <div class="calculator-header">
        <div class="header-icon">
         <svg style="width: 100px; height: 100px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><defs><style>.cls-1{fill:#1d384d}</style></defs><g id="icons_without_caption" data-name="icons without caption"><g id="CALCULATOR"><path class="cls-1" d="M169.67 201.83H86.33a18.48 18.48 0 0 1-18.46-18.46V72.63a18.48 18.48 0 0 1 18.46-18.46h83.34a18.48 18.48 0 0 1 18.46 18.46v110.74a18.48 18.48 0 0 1-18.46 18.46zM86.33 58.17a14.47 14.47 0 0 0-14.46 14.46v110.74a14.47 14.47 0 0 0 14.46 14.46h83.34a14.48 14.48 0 0 0 14.46-14.46V72.63a14.47 14.47 0 0 0-14.46-14.46z"/><path class="cls-1" d="M97.16 148.06a12 12 0 1 1 12-12 12 12 0 0 1-12 12zm0-19.91a8 8 0 1 0 8 8 8 8 0 0 0-8-8zM128.86 148.06a12 12 0 1 1 12-12 12 12 0 0 1-12 12zm0-19.91a8 8 0 1 0 8 8 8 8 0 0 0-8-8zM97.16 181.29a12 12 0 1 1 12-12 12 12 0 0 1-12 12zm0-19.91a8 8 0 1 0 8 8 8 8 0 0 0-8-8.01zM128.86 181.29a12 12 0 1 1 12-12 12 12 0 0 1-12 12zm0-19.91a8 8 0 1 0 8 8 8 8 0 0 0-8-8.01zM160.56 148.06a12 12 0 1 1 12-12 12 12 0 0 1-12 12zm0-19.91a8 8 0 1 0 8 8 8 8 0 0 0-8-8zM160.56 181.29a12 12 0 1 1 12-12 12 12 0 0 1-12 12zm0-19.91a8 8 0 1 0 8 8 8 8 0 0 0-8-8.01zM172.52 105.89H85.2V73.34h87.32zm-83.32-4h79.32V77.34H89.2z"/></g></g></svg>
        </div>
        <h2 class="calculator-title">\u041A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0442\u043E\u0440 \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u0438 \u0431\u043E\u043D\u0443\u0441\u043D\u043E\u0439 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u044B</h2>
        <p class="calculator-subtitle">
          \u041D\u0430\u0441\u0442\u0440\u043E\u0439\u0442\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u044B \u0438 \u0443\u0437\u043D\u0430\u0439\u0442\u0435, \u043D\u0430\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u0430 \u0432\u0430\u0448\u0430 \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044F
        </p>
      </div>

      <div class="calculator-content">
        <!-- Main Layout: Sliders Left, Financial Right -->
        <div class="main-layout">
          <!-- Left: Input Section -->
          <div class="input-section">
            <div class="fixed-values">
              <div class="fixed-value-item">
                <div class="fixed-icon revenue-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
              <div class="fixed-content">
                <span class="fixed-label">\u041C\u0435\u0441\u044F\u0447\u043D\u0430\u044F \u0432\u044B\u0440\u0443\u0447\u043A\u0430</span>
                <span class="fixed-value">{{ formatCurrency(monthlyRevenueSignal()) }} \u20B8</span>
              </div>
            </div>
            <div class="fixed-value-item">
              <div class="fixed-icon check-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                  <path d="M9 12l2 2 4-4M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <div class="fixed-content">
                <span class="fixed-label">\u0421\u0440\u0435\u0434\u043D\u0438\u0439 \u0447\u0435\u043A</span>
                <span class="fixed-value">{{ formatCurrency(averageCheckSignal()) }} \u20B8</span>
              </div>
              </div>
            </div>

            <div class="slider-group">
            <div class="slider-item">
              <div class="slider-header">
                <div class="slider-title-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="slider-title-icon">
                    <circle cx="9" cy="9" r="2" stroke="currentColor" stroke-width="1.5"/>
                    <circle cx="15" cy="15" r="2" stroke="currentColor" stroke-width="1.5"/>
                    <path d="M5 19L19 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                  </svg>
                  <label class="slider-label-text">\u041F\u0440\u043E\u0446\u0435\u043D\u0442 \u043D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u044F (\u043A\u044D\u0448\u0431\u0435\u043A)</label>
                </div>
                <span class="slider-value-display">{{ earnPercent() }}%</span>
              </div>
              <div class="slider-container-wrapper">
                <app-slider
                  [(ngModel)]="earnPercentValue"
                  [min]="1"
                  [max]="20"
                  [step]="0.5"
                  [showValue]="false">
                </app-slider>
              </div>
              <div class="slider-range">
                <span>1%</span>
                <span>20%</span>
              </div>
            </div>

            <div class="slider-item">
              <div class="slider-header">
                <div class="slider-title-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="slider-title-icon">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <label class="slider-label-text">\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u043F\u0440\u043E\u0446\u0435\u043D\u0442 \u043E\u043F\u043B\u0430\u0442\u044B \u0431\u043E\u043D\u0443\u0441\u0430\u043C\u0438</label>
                </div>
                <span class="slider-value-display">{{ burnLimitPercent() }}%</span>
              </div>
              <div class="slider-container-wrapper">
                <app-slider
                  [(ngModel)]="burnLimitPercentValue"
                  [min]="10"
                  [max]="100"
                  [step]="2.5"
                  [showValue]="false">
                </app-slider>
              </div>
              <div class="slider-range">
                <span>10%</span>
                <span>100%</span>
              </div>
            </div>
          </div>
          </div>

          <!-- Right: Financial Breakdown -->
          <div class="financial-breakdown">
            <div class="breakdown-header">
              <div class="breakdown-header-left">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="breakdown-header-icon">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <h3 class="breakdown-title">\u0424\u0438\u043D\u0430\u043D\u0441\u043E\u0432\u044B\u0435 \u043F\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u0438</h3>
              </div>
              <button class="help-button" (click)="openFinancialHelpModal()" type="button" aria-label="\u041F\u043E\u043C\u043E\u0449\u044C">
                <svg width="40px" height="40px" viewBox="-2 0 10 10" id="meteor-icon-kit__regular-questionmark-s" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 3C2 3.5523 1.5523 4 1 4C0.44772 4 0 3.5523 0 3C0 1.44772 1.4477 0 3 0C4.5523 0 6 1.44772 6 3C6 4.285 5.5004 4.8678 4.4472 5.3944C4.0004 5.6178 4 5.6183 4 6C4 6.5523 3.5523 7 3 7C2.4477 7 2 6.5523 2 6C2 4.715 2.4996 4.1322 3.5528 3.6056C3.9996 3.3822 4 3.3817 4 3C4 2.55228 3.4477 2 3 2C2.5523 2 2 2.55228 2 3zM3 10C2.4477 10 2 9.5523 2 9C2 8.4477 2.4477 8 3 8C3.5523 8 4 8.4477 4 9C4 9.5523 3.5523 10 3 10z" fill="#758CA3"/></svg>
              </button>
            </div>
            <div class="breakdown-items">
              <div class="breakdown-item">
                <div class="breakdown-item-content">
                  <div class="breakdown-icon-wrapper gift-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                      <path d="M20 12v9H4v-9" stroke="currentColor" stroke-width="1.5"/>
                      <rect x="2" y="7" width="20" height="5" rx="1" stroke="currentColor" stroke-width="1.5"/>
                      <path d="M12 22V7" stroke="currentColor" stroke-width="1.5"/>
                    </svg>
                  </div>
                  <div class="breakdown-text">
                    <span class="breakdown-label">\u0414\u0430\u0440\u0438\u043C \u0441 \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u0447\u0435\u043A\u0430</span>
                    <span class="breakdown-value">{{ formatCurrency(giftPerClient()) }} \u20B8</span>
                  </div>
                </div>
              </div>
              <div class="breakdown-item">
                <div class="breakdown-item-content">
                  <div class="breakdown-icon-wrapper fund-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <div class="breakdown-text">
                    <span class="breakdown-label">\u0424\u043E\u043D\u0434 \u0431\u043E\u043D\u0443\u0441\u043E\u0432 \u0437\u0430 \u043C\u0435\u0441\u044F\u0446</span>
                    <span class="breakdown-value">{{ formatCurrency(totalLiability()) }} \u20B8</span>
                  </div>
                </div>
              </div>
              <div class="breakdown-item highlight">
                <div class="breakdown-item-content">
                  <div class="breakdown-icon-wrapper shield-icon-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="shield-icon">
                      <path d="M12 2L4 5v6c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V5l-8-3z" stroke="currentColor" stroke-width="1.5"/>
                    </svg>
                  </div>
                  <div class="breakdown-text">
                    <span class="breakdown-label">\u0413\u0430\u0440\u0430\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0430\u044F \u0432\u044B\u0440\u0443\u0447\u043A\u0430 \u0441 \u0447\u0435\u043A\u0430</span>
                    <div class="breakdown-value-group">
                      <span class="breakdown-value highlight-value">{{ formatCurrency(guaranteedCash()) }} \u20B8</span>
                      <span class="breakdown-difference" [class.positive]="guaranteedCashDifference() >= 0" [class.negative]="guaranteedCashDifference() < 0">
                        {{ guaranteedCashDifference() >= 0 ? '+' : '' }}{{ formatCurrency(guaranteedCashDifference()) }} \u20B8
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Vulnerability Score Indicator -->
        <div class="vulnerability-score-section">
          <div class="score-header">
            <div class="score-header-left">
              <span class="score-label">\u0418\u043D\u0434\u0435\u043A\u0441 \u0443\u044F\u0437\u0432\u0438\u043C\u043E\u0441\u0442\u0438</span>
            </div>
            <div class="score-header-right">
              <button class="help-button" (click)="openScoreHelpModal()" type="button" aria-label="\u041F\u043E\u043C\u043E\u0449\u044C">
                <svg width="40px" height="40px" viewBox="-2 0 10 10" id="meteor-icon-kit__regular-questionmark-s" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 3C2 3.5523 1.5523 4 1 4C0.44772 4 0 3.5523 0 3C0 1.44772 1.4477 0 3 0C4.5523 0 6 1.44772 6 3C6 4.285 5.5004 4.8678 4.4472 5.3944C4.0004 5.6178 4 5.6183 4 6C4 6.5523 3.5523 7 3 7C2.4477 7 2 6.5523 2 6C2 4.715 2.4996 4.1322 3.5528 3.6056C3.9996 3.3822 4 3.3817 4 3C4 2.55228 3.4477 2 3 2C2.5523 2 2 2.55228 2 3zM3 10C2.4477 10 2 9.5523 2 9C2 8.4477 2.4477 8 3 8C3.5523 8 4 8.4477 4 9C4 9.5523 3.5523 10 3 10z" fill="#758CA3"/></svg>
              </button>
              <div class="score-badge" [class]="'score-' + scoreLevel()">
                <span class="score-value">{{ formatScore(vulnerabilityScore()) }}</span>
              </div>
            </div>
          </div>
          <div class="score-bar">
            <div class="score-bar-fill" [class]="'score-' + scoreLevel()" [style.width.%]="scorePercentage()"></div>
          </div>
          <div class="score-thresholds">
            <span class="threshold-item" [class.active]="scoreLevel() === 'excellent'">
              <span class="threshold-dot excellent"></span>
              <span class="threshold-label">\u0411\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E (\u226430)</span>
            </span>
            <span class="threshold-item" [class.active]="scoreLevel() === 'warning'">
              <span class="threshold-dot warning"></span>
              <span class="threshold-label">\u0412\u043D\u0438\u043C\u0430\u043D\u0438\u0435 (31-60)</span>
            </span>
            <span class="threshold-item" [class.active]="scoreLevel() === 'danger'">
              <span class="threshold-dot danger"></span>
              <span class="threshold-label">\u041E\u043F\u0430\u0441\u043D\u043E (>60)</span>
            </span>
          </div>
        </div>

        <!-- Result Card -->
        <div class="result-card" [class]="'status-' + status().type">
          <div class="result-icon-wrapper">
            <div class="result-icon">
              <svg *ngIf="status().type === 'danger'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                <path d="M12 8v4M12 16h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
              <svg *ngIf="status().type === 'warning'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" stroke="currentColor" stroke-width="2"/>
                <path d="M12 9v4M12 17h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
              <svg *ngIf="status().type === 'excellent'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L4 5v6c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V5l-8-3z" stroke="currentColor" stroke-width="2"/>
              </svg>
              <svg *ngIf="status().type === 'low-motivation'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                <path d="M12 8v4M12 16h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </div>
          </div>
          <div class="result-content">
            <h3 class="result-title">{{ status().title }}</h3>
            <p class="result-description">{{ status().description }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Financial Help Modal -->
    <app-modal
      [visible]="isFinancialHelpModalOpen"
      title="\u0424\u0438\u043D\u0430\u043D\u0441\u043E\u0432\u044B\u0435 \u043F\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u0438"
      [showCloseButton]="true"
      (visibleChange)="isFinancialHelpModalOpen = $event">
      <div class="help-modal-content">
        <div class="help-item">
          <h4 class="help-item-title">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="help-item-icon">
              <path d="M20 12v9H4v-9" stroke="currentColor" stroke-width="1.5"/>
              <rect x="2" y="7" width="20" height="5" rx="1" stroke="currentColor" stroke-width="1.5"/>
              <path d="M12 22V7" stroke="currentColor" stroke-width="1.5"/>
            </svg>
            \u0414\u0430\u0440\u0438\u043C \u0441 \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u0447\u0435\u043A\u0430
          </h4>
          <p class="help-item-description">
            \u0421\u0443\u043C\u043C\u0430 \u0434\u0435\u043D\u0435\u0433, \u043A\u043E\u0442\u043E\u0440\u0443\u044E \u0432\u044B \u043E\u0442\u0434\u0430\u0435\u0442\u0435 \u043A\u043B\u0438\u0435\u043D\u0442\u0443 \u0432 \u0432\u0438\u0434\u0435 \u0431\u043E\u043D\u0443\u0441\u043E\u0432 \u043F\u0440\u0438 \u043A\u0430\u0436\u0434\u043E\u0439 \u0442\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u0438. 
            \u0420\u0430\u0441\u0441\u0447\u0438\u0442\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u043A\u0430\u043A: <strong>\u0421\u0440\u0435\u0434\u043D\u0438\u0439 \u0447\u0435\u043A \xD7 \u041F\u0440\u043E\u0446\u0435\u043D\u0442 \u043D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u044F</strong>.
          </p>
        </div>

        <div class="help-item">
          <h4 class="help-item-title">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="help-item-icon">
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            \u0424\u043E\u043D\u0434 \u0431\u043E\u043D\u0443\u0441\u043E\u0432 \u0437\u0430 \u043C\u0435\u0441\u044F\u0446
          </h4>
          <p class="help-item-description">
            \u041E\u0431\u0449\u0430\u044F \u0441\u0443\u043C\u043C\u0430 \u0432\u0438\u0440\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0435\u043D\u0435\u0433 (\u0431\u043E\u043D\u0443\u0441\u043E\u0432), \u043A\u043E\u0442\u043E\u0440\u0443\u044E \u0432\u044B \u0432\u044B\u043F\u0443\u0441\u043A\u0430\u0435\u0442\u0435 \u0437\u0430 \u043C\u0435\u0441\u044F\u0446. 
            \u042D\u0442\u043E \u0432\u0430\u0448 \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0439 \u0440\u0438\u0441\u043A. \u0420\u0430\u0441\u0441\u0447\u0438\u0442\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u043A\u0430\u043A: <strong>\u041C\u0435\u0441\u044F\u0447\u043D\u0430\u044F \u0432\u044B\u0440\u0443\u0447\u043A\u0430 \xD7 \u041F\u0440\u043E\u0446\u0435\u043D\u0442 \u043D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u044F</strong>.
          </p>
        </div>

        <div class="help-item highlight">
          <h4 class="help-item-title">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="help-item-icon">
              <path d="M12 2L4 5v6c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V5l-8-3z" stroke="currentColor" stroke-width="1.5"/>
            </svg>
            \u0413\u0430\u0440\u0430\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0430\u044F \u0432\u044B\u0440\u0443\u0447\u043A\u0430 \u0441 \u0447\u0435\u043A\u0430
          </h4>
          <p class="help-item-description">
            \u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0441\u0443\u043C\u043C\u0430 \u0440\u0435\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0435\u043D\u0435\u0433, \u043A\u043E\u0442\u043E\u0440\u0443\u044E \u0432\u044B \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u0435 \u0441 \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u0437\u0430\u043A\u0430\u0437\u0430, \u043D\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E \u043E\u0442 \u0442\u043E\u0433\u043E, 
            \u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0431\u043E\u043D\u0443\u0441\u043E\u0432 \u043F\u043E\u0442\u0440\u0430\u0442\u0438\u0442 \u043A\u043B\u0438\u0435\u043D\u0442. \u042D\u0442\u043E \u0432\u0430\u0448\u0430 \u0437\u0430\u0449\u0438\u0442\u0430 \u043E\u0442 \u043A\u0430\u0441\u0441\u043E\u0432\u043E\u0433\u043E \u0440\u0430\u0437\u0440\u044B\u0432\u0430.
            <br><br>
            \u0420\u0430\u0441\u0441\u0447\u0438\u0442\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u043A\u0430\u043A: <strong>\u0421\u0440\u0435\u0434\u043D\u0438\u0439 \u0447\u0435\u043A \xD7 (1 - \u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u043F\u0440\u043E\u0446\u0435\u043D\u0442 \u043E\u043F\u043B\u0430\u0442\u044B \u0431\u043E\u043D\u0443\u0441\u0430\u043C\u0438)</strong>.
            <br><br>
            <strong>\u0420\u0430\u0437\u043D\u0438\u0446\u0430</strong> \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442, \u043D\u0430\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0430\u044F \u0432\u044B\u0440\u0443\u0447\u043A\u0430 \u043E\u0442\u043B\u0438\u0447\u0430\u0435\u0442\u0441\u044F \u043E\u0442 \u0441\u0440\u0435\u0434\u043D\u0435\u0433\u043E \u0447\u0435\u043A\u0430. 
            \u041E\u0442\u0440\u0438\u0446\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043E\u0437\u043D\u0430\u0447\u0430\u0435\u0442, \u0447\u0442\u043E \u0432\u044B \u0442\u0435\u0440\u044F\u0435\u0442\u0435 \u0447\u0430\u0441\u0442\u044C \u0432\u044B\u0440\u0443\u0447\u043A\u0438.
          </p>
        </div>
      </div>
    </app-modal>

    <!-- Score Help Modal -->
    <app-modal
      [visible]="isScoreHelpModalOpen"
      title="\u0418\u043D\u0434\u0435\u043A\u0441 \u0443\u044F\u0437\u0432\u0438\u043C\u043E\u0441\u0442\u0438"
      [showCloseButton]="true"
      (visibleChange)="isScoreHelpModalOpen = $event">
      <div class="help-modal-content">
        <div class="help-item">
          <h4 class="help-item-title">\u0427\u0442\u043E \u044D\u0442\u043E \u0442\u0430\u043A\u043E\u0435?</h4>
          <p class="help-item-description">
            \u0418\u043D\u0434\u0435\u043A\u0441 \u0443\u044F\u0437\u0432\u0438\u043C\u043E\u0441\u0442\u0438 \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442, \u043D\u0430\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0432\u0430\u0448\u0430 \u0431\u043E\u043D\u0443\u0441\u043D\u0430\u044F \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430 \u043F\u043E\u0434\u0432\u0435\u0440\u0436\u0435\u043D\u0430 \u0440\u0438\u0441\u043A\u0443 \u043A\u0430\u0441\u0441\u043E\u0432\u043E\u0433\u043E \u0440\u0430\u0437\u0440\u044B\u0432\u0430. 
            \u0427\u0435\u043C \u0432\u044B\u0448\u0435 \u0438\u043D\u0434\u0435\u043A\u0441, \u0442\u0435\u043C \u0431\u043E\u043B\u044C\u0448\u0435 \u0440\u0438\u0441\u043A \u043F\u043E\u0442\u0435\u0440\u044F\u0442\u044C \u0436\u0438\u0432\u044B\u0435 \u0434\u0435\u043D\u044C\u0433\u0438.
          </p>
        </div>

        <div class="help-item">
          <h4 class="help-item-title">\u041A\u0430\u043A \u0440\u0430\u0441\u0441\u0447\u0438\u0442\u044B\u0432\u0430\u0435\u0442\u0441\u044F?</h4>
          <div class="help-item-description">
            <p>\u0424\u043E\u0440\u043C\u0443\u043B\u0430: <strong>\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u043F\u0440\u043E\u0446\u0435\u043D\u0442 \u043E\u043F\u043B\u0430\u0442\u044B \u0431\u043E\u043D\u0443\u0441\u0430\u043C\u0438 \xD7 (1 + \u041F\u0440\u043E\u0446\u0435\u043D\u0442 \u043D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u044F / 10)</strong></p>
            <p>\u0418\u043D\u0434\u0435\u043A\u0441 \u0443\u0447\u0438\u0442\u044B\u0432\u0430\u0435\u0442:</p>
            <ul class="help-list">
              <li><strong>\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u043F\u0440\u043E\u0446\u0435\u043D\u0442 \u043E\u043F\u043B\u0430\u0442\u044B \u0431\u043E\u043D\u0443\u0441\u0430\u043C\u0438</strong> \u2014 \u043F\u0440\u044F\u043C\u043E\u0439 \u0440\u0438\u0441\u043A \u043F\u043E\u0442\u0435\u0440\u0438 \u0432\u044B\u0440\u0443\u0447\u043A\u0438</li>
              <li><strong>\u041F\u0440\u043E\u0446\u0435\u043D\u0442 \u043D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u044F</strong> \u2014 \u0447\u0435\u043C \u0432\u044B\u0448\u0435 \u043A\u044D\u0448\u0431\u0435\u043A, \u0442\u0435\u043C \u0447\u0430\u0449\u0435 \u043A\u043B\u0438\u0435\u043D\u0442\u044B \u0442\u0440\u0430\u0442\u044F\u0442 \u0431\u043E\u043D\u0443\u0441\u044B</li>
            </ul>
          </div>
        </div>

        <div class="help-item">
          <h4 class="help-item-title">\u0423\u0440\u043E\u0432\u043D\u0438 \u0440\u0438\u0441\u043A\u0430</h4>
          <div class="help-levels">
            <div class="help-level excellent">
              <div class="help-level-header">
                <span class="help-level-dot excellent"></span>
                <strong>\u0411\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E (\u226430)</strong>
              </div>
              <p>\u0412\u0430\u0448\u0430 \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0430\u044F \u0432\u044B\u0440\u0443\u0447\u043A\u0430 \u043F\u043E\u0434 \u0437\u0430\u0449\u0438\u0442\u043E\u0439. \u0420\u0438\u0441\u043A\u0438 \u043C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u044B.</p>
            </div>
            <div class="help-level warning">
              <div class="help-level-header">
                <span class="help-level-dot warning"></span>
                <strong>\u0412\u043D\u0438\u043C\u0430\u043D\u0438\u0435 (31-60)</strong>
              </div>
              <p>\u0423\u043C\u0435\u0440\u0435\u043D\u043D\u044B\u0439 \u0440\u0438\u0441\u043A. \u0423\u0431\u0435\u0434\u0438\u0442\u0435\u0441\u044C, \u0447\u0442\u043E \u0432\u0430\u0448\u0430 \u043C\u0430\u0440\u0436\u0430 \u0432\u044B\u0448\u0435 30%.</p>
            </div>
            <div class="help-level danger">
              <div class="help-level-header">
                <span class="help-level-dot danger"></span>
                <strong>\u041E\u043F\u0430\u0441\u043D\u043E (>60)</strong>
              </div>
              <p>\u041A\u0440\u0438\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0440\u0438\u0441\u043A! \u0423\u0433\u0440\u043E\u0437\u0430 \u043A\u0430\u0441\u0441\u043E\u0432\u043E\u0433\u043E \u0440\u0430\u0437\u0440\u044B\u0432\u0430. \u0421\u0440\u043E\u0447\u043D\u043E \u043F\u0435\u0440\u0435\u0441\u043C\u043E\u0442\u0440\u0438\u0442\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438.</p>
            </div>
          </div>
        </div>
      </div>
    </app-modal>
  `, styles: ['/* angular:styles/component:css;efd8d8d45ceb9dc6eaeb63b6116130d38a1165fe6a94f3f2c71c03ae575751af;/Users/baglan/repo/westwood/westwood-frontend/src/app/shared/components/bonus-calculator/bonus-calculator.component.ts */\n.calculator-wrapper {\n  position: relative;\n  background: white;\n  border-radius: 16px;\n  padding: 2.5rem;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);\n  margin-top: 2rem;\n  transition: all 0.3s ease;\n}\n.calculator-wrapper:hover {\n  box-shadow: 0 8px 16px -4px rgba(0, 0, 0, 0.1);\n}\n.calculator-header {\n  margin-bottom: 2.5rem;\n  position: relative;\n}\n.header-icon {\n  width: 56px;\n  height: 56px;\n  background:\n    linear-gradient(\n      135deg,\n      #dcfce7 0%,\n      #bbf7d0 100%);\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 1rem;\n}\n.header-icon svg {\n  width: 28px;\n  height: 28px;\n  color: #16A34A;\n}\n.calculator-title {\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 0.5rem 0;\n  letter-spacing: -0.02em;\n}\n.calculator-subtitle {\n  font-size: 0.95rem;\n  color: #64748b;\n  margin: 0;\n  line-height: 1.6;\n}\n.calculator-content {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\n.main-layout {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 2rem;\n}\n.input-section {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.fixed-values {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: 1rem;\n}\n.fixed-value-item {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 1.25rem;\n  background: #f8fafc;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n  transition: all 0.2s ease;\n}\n.fixed-value-item:hover {\n  background: #f1f5f9;\n  border-color: #cbd5e1;\n  // transform: translateY(-1px);\n}\n.fixed-icon {\n  width: 48px;\n  height: 48px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.fixed-icon.revenue-icon {\n  background:\n    linear-gradient(\n      135deg,\n      #dbeafe 0%,\n      #bfdbfe 100%);\n  color: #2563eb;\n}\n.fixed-icon.check-icon {\n  background:\n    linear-gradient(\n      135deg,\n      #dcfce7 0%,\n      #bbf7d0 100%);\n  color: #16A34A;\n}\n.fixed-icon svg {\n  width: 24px;\n  height: 24px;\n}\n.fixed-content {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n  flex: 1;\n}\n.fixed-label {\n  font-size: 0.8rem;\n  color: #64748b;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.fixed-value {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #0f172a;\n  letter-spacing: -0.01em;\n}\n.slider-group {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\n.slider-item {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  padding: 1.5rem;\n  background: #f8fafc;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n  transition: all 0.2s ease;\n}\n.slider-item:hover {\n  background: #f1f5f9;\n  border-color: #cbd5e1;\n}\n.slider-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.slider-title-wrapper {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.slider-title-icon {\n  width: 20px;\n  height: 20px;\n  color: #16A34A;\n  flex-shrink: 0;\n}\n.slider-label-text {\n  font-size: 0.95rem;\n  font-weight: 600;\n  color: #475569;\n}\n.slider-value-display {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #16A34A;\n  letter-spacing: -0.02em;\n}\n.slider-container-wrapper {\n  padding: 0.5rem 0;\n}\n.slider-container-wrapper ::ng-deep .slider {\n  height: 8px;\n  background: #e2e8f0;\n}\n.slider-container-wrapper ::ng-deep .slider::-webkit-slider-thumb {\n  width: 24px;\n  height: 24px;\n  background: #16A34A;\n  box-shadow: 0 2px 8px rgba(22, 163, 74, 0.3);\n  transition: all 0.2s ease;\n}\n.slider-container-wrapper ::ng-deep .slider::-webkit-slider-thumb:hover {\n  background: #15803d;\n  box-shadow: 0 4px 12px rgba(22, 163, 74, 0.4);\n  // transform: scale(1.1);\n}\n.slider-container-wrapper ::ng-deep .slider::-moz-range-thumb {\n  width: 24px;\n  height: 24px;\n  background: #16A34A;\n  border: none;\n  box-shadow: 0 2px 8px rgba(22, 163, 74, 0.3);\n  transition: all 0.2s ease;\n}\n.slider-container-wrapper ::ng-deep .slider::-moz-range-thumb:hover {\n  background: #15803d;\n  box-shadow: 0 4px 12px rgba(22, 163, 74, 0.4);\n  // transform: scale(1.1);\n}\n.slider-range {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.75rem;\n  color: #94a3b8;\n  font-weight: 500;\n}\n.result-card {\n  padding: 1.75rem;\n  border-radius: 14px;\n  display: flex;\n  gap: 1.25rem;\n  align-items: flex-start;\n  border: 2px solid;\n  transition: all 0.3s ease;\n  position: relative;\n  overflow: hidden;\n}\n.result-card::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 4px;\n  background: currentColor;\n  opacity: 0.3;\n}\n.result-card.status-danger {\n  background:\n    linear-gradient(\n      135deg,\n      #fef2f2 0%,\n      #fee2e2 100%);\n  border-color: #fecaca;\n  color: #991b1b;\n}\n.result-card.status-warning {\n  background:\n    linear-gradient(\n      135deg,\n      #fffbeb 0%,\n      #fef3c7 100%);\n  border-color: #fde68a;\n  color: #92400e;\n}\n.result-card.status-excellent {\n  background:\n    linear-gradient(\n      135deg,\n      #f0fdf4 0%,\n      #dcfce7 100%);\n  border-color: #bbf7d0;\n  color: #15803d;\n}\n.result-card.status-low-motivation {\n  background:\n    linear-gradient(\n      135deg,\n      #f8fafc 0%,\n      #f1f5f9 100%);\n  border-color: #cbd5e1;\n  color: #64748b;\n}\n.result-icon-wrapper {\n  flex-shrink: 0;\n}\n.result-icon {\n  width: 56px;\n  height: 56px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 14px;\n  background: rgba(255, 255, 255, 0.8);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.result-icon svg {\n  width: 28px;\n  height: 28px;\n}\n.result-content {\n  flex: 1;\n}\n.result-title {\n  font-size: 1.1rem;\n  font-weight: 700;\n  margin: 0 0 0.5rem 0;\n}\n.result-description {\n  font-size: 0.9rem;\n  line-height: 1.6;\n  margin: 0;\n  opacity: 0.9;\n}\n.financial-breakdown {\n  background: #f8fafc;\n  border-radius: 14px;\n  padding: 1.75rem;\n  border: 1px solid #e2e8f0;\n}\n.breakdown-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1.5rem;\n}\n.breakdown-header-left {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.breakdown-header-icon {\n  width: 24px;\n  height: 24px;\n  color: #16A34A;\n}\n.breakdown-title {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n  letter-spacing: -0.01em;\n}\n.breakdown-items {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.breakdown-item {\n  background: white;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n  transition: all 0.2s ease;\n  overflow: hidden;\n}\n.breakdown-item:hover {\n  border-color: #cbd5e1;\n  // transform: translateY(-1px);\n  // box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);\n}\n.breakdown-item.highlight {\n  background:\n    linear-gradient(\n      135deg,\n      #dcfce7 0%,\n      #bbf7d0 100%);\n  border-color: #86efac;\n  box-shadow: 0 4px 12px rgba(22, 163, 74, 0.2);\n}\n.breakdown-item.highlight:hover {\n  box-shadow: 0 6px 16px rgba(22, 163, 74, 0.25);\n  // transform: translateY(-2px);\n}\n.breakdown-item-content {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 1.25rem;\n}\n.breakdown-icon-wrapper {\n  width: 48px;\n  height: 48px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.breakdown-icon-wrapper.gift-icon {\n  background:\n    linear-gradient(\n      135deg,\n      #fef3c7 0%,\n      #fde68a 100%);\n  color: #d97706;\n}\n.breakdown-icon-wrapper.fund-icon {\n  background:\n    linear-gradient(\n      135deg,\n      #dbeafe 0%,\n      #bfdbfe 100%);\n  color: #2563eb;\n}\n.breakdown-icon-wrapper.shield-icon-wrapper {\n  background:\n    linear-gradient(\n      135deg,\n      #dcfce7 0%,\n      #bbf7d0 100%);\n  color: #16A34A;\n}\n.breakdown-icon-wrapper svg {\n  width: 24px;\n  height: 24px;\n}\n.breakdown-text {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n  flex: 1;\n}\n.breakdown-label {\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.breakdown-item.highlight .breakdown-label {\n  color: #15803d;\n}\n.shield-icon {\n  width: 24px;\n  height: 24px;\n}\n.breakdown-value {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #0f172a;\n  letter-spacing: -0.02em;\n}\n.breakdown-item.highlight .breakdown-value {\n  color: #15803d;\n  font-size: 1.75rem;\n}\n.breakdown-value-group {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n  align-items: start;\n}\n.breakdown-difference {\n  font-size: 0.85rem;\n  font-weight: 600;\n  padding: 0.25rem 0.5rem;\n  border-radius: 6px;\n}\n.breakdown-difference.positive {\n  color: #15803d;\n  background: rgba(22, 163, 74, 0.1);\n}\n.breakdown-difference.negative {\n  color: #dc2626;\n  // background: rgba(220, 38, 38, 0.1);\n}\n.vulnerability-score-section {\n  background: #f8fafc;\n  border-radius: 14px;\n  padding: 1.5rem;\n  border: 1px solid #e2e8f0;\n  margin-top: 1rem;\n}\n.score-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n.score-header-left {\n  display: flex;\n  align-items: center;\n}\n.score-header-right {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.score-label {\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #475569;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.score-badge {\n  padding: 0.5rem 1rem;\n  border-radius: 8px;\n  font-weight: 700;\n  font-size: 1.25rem;\n  letter-spacing: -0.02em;\n}\n.score-badge.score-excellent {\n  background:\n    linear-gradient(\n      135deg,\n      #dcfce7 0%,\n      #bbf7d0 100%);\n  color: #15803d;\n}\n.score-badge.score-warning {\n  background:\n    linear-gradient(\n      135deg,\n      #fef3c7 0%,\n      #fde68a 100%);\n  color: #92400e;\n}\n.score-badge.score-danger {\n  background:\n    linear-gradient(\n      135deg,\n      #fee2e2 0%,\n      #fecaca 100%);\n  color: #991b1b;\n}\n.score-value {\n  display: inline-block;\n}\n.score-bar {\n  width: 100%;\n  height: 12px;\n  background: #e2e8f0;\n  border-radius: 6px;\n  overflow: hidden;\n  margin-bottom: 1rem;\n  position: relative;\n}\n.score-bar-fill {\n  height: 100%;\n  border-radius: 6px;\n  transition: width 0.3s ease, background 0.3s ease;\n}\n.score-bar-fill.score-excellent {\n  background:\n    linear-gradient(\n      90deg,\n      #16A34A 0%,\n      #22c55e 100%);\n}\n.score-bar-fill.score-warning {\n  background:\n    linear-gradient(\n      90deg,\n      #f59e0b 0%,\n      #fbbf24 100%);\n}\n.score-bar-fill.score-danger {\n  background:\n    linear-gradient(\n      90deg,\n      #dc2626 0%,\n      #ef4444 100%);\n}\n.score-thresholds {\n  display: flex;\n  justify-content: space-between;\n  gap: 1rem;\n}\n.threshold-item {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  flex: 1;\n  font-size: 0.8rem;\n  color: #64748b;\n  transition: all 0.2s ease;\n}\n.threshold-item.active {\n  color: #0f172a;\n  font-weight: 600;\n}\n.threshold-dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.threshold-dot.excellent {\n  background: #16A34A;\n}\n.threshold-dot.warning {\n  background: #f59e0b;\n}\n.threshold-dot.danger {\n  background: #dc2626;\n}\n.threshold-label {\n  white-space: nowrap;\n}\n.loading-overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(255, 255, 255, 0.9);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  border-radius: 16px;\n  z-index: 10;\n}\n.loading-spinner {\n  width: 48px;\n  height: 48px;\n  border: 4px solid #e2e8f0;\n  border-top-color: #16A34A;\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.loading-text {\n  font-size: 0.9rem;\n  color: #64748b;\n  font-weight: 500;\n  margin: 0;\n}\n.help-button {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  border: 1px solid #cbd5e1;\n  background: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  color: #64748b;\n  flex-shrink: 0;\n}\n.help-button:hover {\n  background: #f8fafc;\n  border-color: #16A34A;\n  color: #16A34A;\n  // transform: scale(1.1);\n}\n.help-button svg {\n  width: 16px;\n  height: 16px;\n}\n.help-modal-content {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n  padding: 0.5rem 0;\n}\n.help-item {\n  padding: 1rem;\n  background: #f8fafc;\n  border-radius: 10px;\n  border: 1px solid #e2e8f0;\n}\n.help-item.highlight {\n  background:\n    linear-gradient(\n      135deg,\n      #dcfce7 0%,\n      #bbf7d0 100%);\n  border-color: #86efac;\n}\n.help-item-title {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  font-size: 1rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 0.75rem 0;\n}\n.help-item-icon {\n  width: 20px;\n  height: 20px;\n  color: #16A34A;\n  flex-shrink: 0;\n}\n.help-item-description {\n  font-size: 0.9rem;\n  line-height: 1.6;\n  color: #475569;\n  margin: 0;\n}\n.help-item-description strong {\n  color: #0f172a;\n  font-weight: 600;\n}\n.help-list {\n  margin: 0.75rem 0 0 0;\n  padding-left: 1.5rem;\n  color: #475569;\n}\n.help-list li {\n  margin-bottom: 0.5rem;\n  line-height: 1.5;\n}\n.help-levels {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  margin-top: 0.75rem;\n}\n.help-level {\n  padding: 1rem;\n  background: white;\n  border-radius: 8px;\n  border: 1px solid #e2e8f0;\n}\n.help-level.excellent {\n  border-left: 4px solid #16A34A;\n}\n.help-level.warning {\n  border-left: 4px solid #f59e0b;\n}\n.help-level.danger {\n  border-left: 4px solid #dc2626;\n}\n.help-level-header {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-bottom: 0.5rem;\n  font-size: 0.95rem;\n}\n.help-level-dot {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.help-level-dot.excellent {\n  background: #16A34A;\n}\n.help-level-dot.warning {\n  background: #f59e0b;\n}\n.help-level-dot.danger {\n  background: #dc2626;\n}\n.help-level p {\n  margin: 0;\n  font-size: 0.85rem;\n  color: #64748b;\n  line-height: 1.5;\n}\n@media (max-width: 1024px) {\n  .main-layout {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 768px) {\n  .calculator-wrapper {\n    padding: 1.5rem;\n  }\n  .calculator-title {\n    font-size: 1.5rem;\n  }\n  .fixed-values {\n    grid-template-columns: 1fr;\n  }\n  .fixed-value-item {\n    flex-direction: column;\n    text-align: center;\n  }\n  .slider-item {\n    padding: 1.25rem;\n  }\n  .slider-header {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 0.5rem;\n  }\n  .result-card {\n    flex-direction: column;\n    text-align: center;\n    padding: 1.5rem;\n  }\n  .result-icon-wrapper {\n    margin: 0 auto;\n  }\n  .breakdown-item-content {\n    flex-direction: column;\n    text-align: center;\n  }\n  .breakdown-value-group {\n    align-items: center;\n  }\n  .score-thresholds {\n    flex-direction: column;\n    gap: 0.5rem;\n  }\n  .threshold-item {\n    justify-content: flex-start;\n  }\n}\n/*# sourceMappingURL=bonus-calculator.component.css.map */\n'] }]
  }], null, { monthlyRevenue: [{
    type: Input
  }], averageCheck: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BonusCalculatorComponent, { className: "BonusCalculatorComponent", filePath: "src/app/shared/components/bonus-calculator/bonus-calculator.component.ts", lineNumber: 1236 });
})();

// src/app/features/bonus-program/pages/bonus-program-page/bonus-program-page.component.ts
function BonusProgramPageComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275element(1, "app-loader", 44);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("visible", true)("overlay", false);
  }
}
function BonusProgramPageComponent_div_3_div_1__svg_svg_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 67);
    \u0275\u0275element(1, "rect", 68)(2, "path", 69)(3, "path", 70);
    \u0275\u0275elementEnd();
  }
}
function BonusProgramPageComponent_div_3_div_1__svg_svg_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 67);
    \u0275\u0275element(1, "path", 71);
    \u0275\u0275elementEnd();
  }
}
function BonusProgramPageComponent_div_3_div_1__svg_svg_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 67);
    \u0275\u0275element(1, "path", 72)(2, "path", 73)(3, "path", 74)(4, "circle", 75)(5, "circle", 76)(6, "circle", 77);
    \u0275\u0275elementEnd();
  }
}
function BonusProgramPageComponent_div_3_div_1__svg_svg_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 67);
    \u0275\u0275element(1, "circle", 78)(2, "circle", 79)(3, "circle", 80)(4, "path", 81);
    \u0275\u0275elementEnd();
  }
}
function BonusProgramPageComponent_div_3_div_1__svg_svg_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 67);
    \u0275\u0275element(1, "path", 82)(2, "rect", 83)(3, "path", 84)(4, "path", 85)(5, "path", 86);
    \u0275\u0275elementEnd();
  }
}
function BonusProgramPageComponent_div_3_div_1__svg_svg_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 67);
    \u0275\u0275element(1, "circle", 87)(2, "circle", 88)(3, "path", 89);
    \u0275\u0275elementEnd();
  }
}
function BonusProgramPageComponent_div_3_div_1__svg_svg_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 67);
    \u0275\u0275element(1, "path", 90);
    \u0275\u0275elementEnd();
  }
}
function BonusProgramPageComponent_div_3_div_1__svg_svg_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 67);
    \u0275\u0275element(1, "path", 91)(2, "path", 92)(3, "path", 93)(4, "path", 94);
    \u0275\u0275elementEnd();
  }
}
function BonusProgramPageComponent_div_3_div_1_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 95);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 96);
    \u0275\u0275element(2, "circle", 97)(3, "path", 98);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rule_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", rule_r3.expirationDays, " \u0434\u043D. ");
  }
}
function BonusProgramPageComponent_div_3_div_1_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 99);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 96);
    \u0275\u0275element(2, "path", 100);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " \u0431\u0435\u0441\u0441\u0440\u043E\u0447\u043D\u043E ");
    \u0275\u0275elementEnd();
  }
}
function BonusProgramPageComponent_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 51)(1, "div", 52)(2, "div", 53);
    \u0275\u0275elementContainerStart(3, 54);
    \u0275\u0275template(4, BonusProgramPageComponent_div_3_div_1__svg_svg_4_Template, 4, 0, "svg", 55)(5, BonusProgramPageComponent_div_3_div_1__svg_svg_5_Template, 2, 0, "svg", 55)(6, BonusProgramPageComponent_div_3_div_1__svg_svg_6_Template, 7, 0, "svg", 55)(7, BonusProgramPageComponent_div_3_div_1__svg_svg_7_Template, 5, 0, "svg", 55)(8, BonusProgramPageComponent_div_3_div_1__svg_svg_8_Template, 6, 0, "svg", 55)(9, BonusProgramPageComponent_div_3_div_1__svg_svg_9_Template, 4, 0, "svg", 55)(10, BonusProgramPageComponent_div_3_div_1__svg_svg_10_Template, 2, 0, "svg", 55)(11, BonusProgramPageComponent_div_3_div_1__svg_svg_11_Template, 5, 0, "svg", 55);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "label", 56)(13, "input", 57);
    \u0275\u0275listener("click", function BonusProgramPageComponent_div_3_div_1_Template_input_click_13_listener($event) {
      const rule_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.onToggleClick(rule_r3, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "span", 58);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 59);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 60);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 61)(20, "div", 62)(21, "div", 63);
    \u0275\u0275text(22);
    \u0275\u0275elementStart(23, "span");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(25, BonusProgramPageComponent_div_3_div_1_div_25_Template, 5, 1, "div", 64)(26, BonusProgramPageComponent_div_3_div_1_div_26_Template, 4, 0, "div", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "button", 66);
    \u0275\u0275listener("click", function BonusProgramPageComponent_div_3_div_1_Template_button_click_27_listener() {
      const rule_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.openSettingsModal(rule_r3));
    });
    \u0275\u0275text(28, " \u041D\u0430\u0441\u0442\u0440\u043E\u0438\u0442\u044C ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const rule_r3 = ctx.$implicit;
    \u0275\u0275classProp("active-config", rule_r3.active);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngSwitch", rule_r3.icon);
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "wallet");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "party");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "cake");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "share");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "gift");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "percent");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "heart");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "trophy");
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", rule_r3.active);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(rule_r3.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(rule_r3.description);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", rule_r3.value, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(rule_r3.unit);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", rule_r3.expirationDays > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", rule_r3.expirationDays === 0);
  }
}
function BonusProgramPageComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275template(1, BonusProgramPageComponent_div_3_div_1_Template, 29, 18, "div", 46);
    \u0275\u0275elementStart(2, "div", 47);
    \u0275\u0275listener("click", function BonusProgramPageComponent_div_3_Template_div_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.openAddModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 48);
    \u0275\u0275element(4, "path", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "span", 50);
    \u0275\u0275text(6, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0431\u043E\u043D\u0443\u0441");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.bonusRules);
  }
}
function BonusProgramPageComponent_div_6_button_20__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 67);
    \u0275\u0275element(1, "rect", 68)(2, "path", 69)(3, "path", 70);
    \u0275\u0275elementEnd();
  }
}
function BonusProgramPageComponent_div_6_button_20__svg_svg_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 67);
    \u0275\u0275element(1, "path", 71);
    \u0275\u0275elementEnd();
  }
}
function BonusProgramPageComponent_div_6_button_20__svg_svg_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 67);
    \u0275\u0275element(1, "path", 72)(2, "path", 73)(3, "path", 74)(4, "circle", 75)(5, "circle", 76)(6, "circle", 77);
    \u0275\u0275elementEnd();
  }
}
function BonusProgramPageComponent_div_6_button_20__svg_svg_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 67);
    \u0275\u0275element(1, "circle", 78)(2, "circle", 79)(3, "circle", 80)(4, "path", 81);
    \u0275\u0275elementEnd();
  }
}
function BonusProgramPageComponent_div_6_button_20__svg_svg_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 67);
    \u0275\u0275element(1, "path", 82)(2, "rect", 83)(3, "path", 84)(4, "path", 85)(5, "path", 86);
    \u0275\u0275elementEnd();
  }
}
function BonusProgramPageComponent_div_6_button_20__svg_svg_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 67);
    \u0275\u0275element(1, "circle", 87)(2, "circle", 88)(3, "path", 89);
    \u0275\u0275elementEnd();
  }
}
function BonusProgramPageComponent_div_6_button_20__svg_svg_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 67);
    \u0275\u0275element(1, "path", 90);
    \u0275\u0275elementEnd();
  }
}
function BonusProgramPageComponent_div_6_button_20__svg_svg_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 67);
    \u0275\u0275element(1, "path", 91)(2, "path", 92)(3, "path", 93)(4, "path", 94);
    \u0275\u0275elementEnd();
  }
}
function BonusProgramPageComponent_div_6_button_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 106);
    \u0275\u0275listener("click", function BonusProgramPageComponent_div_6_button_20_Template_button_click_0_listener() {
      const icon_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.editIcon = icon_r7.id);
    });
    \u0275\u0275elementContainerStart(1, 54);
    \u0275\u0275template(2, BonusProgramPageComponent_div_6_button_20__svg_svg_2_Template, 4, 0, "svg", 55)(3, BonusProgramPageComponent_div_6_button_20__svg_svg_3_Template, 2, 0, "svg", 55)(4, BonusProgramPageComponent_div_6_button_20__svg_svg_4_Template, 7, 0, "svg", 55)(5, BonusProgramPageComponent_div_6_button_20__svg_svg_5_Template, 5, 0, "svg", 55)(6, BonusProgramPageComponent_div_6_button_20__svg_svg_6_Template, 6, 0, "svg", 55)(7, BonusProgramPageComponent_div_6_button_20__svg_svg_7_Template, 4, 0, "svg", 55)(8, BonusProgramPageComponent_div_6_button_20__svg_svg_8_Template, 2, 0, "svg", 55)(9, BonusProgramPageComponent_div_6_button_20__svg_svg_9_Template, 5, 0, "svg", 55);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const icon_r7 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected", ctx_r3.editIcon === icon_r7.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitch", icon_r7.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "wallet");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "party");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "cake");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "share");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "gift");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "percent");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "heart");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "trophy");
  }
}
function BonusProgramPageComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8);
    \u0275\u0275text(2, " \u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u043D\u043E\u0432\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0434\u043B\u044F \u044D\u0442\u043E\u0433\u043E \u0442\u0438\u043F\u0430 \u0431\u043E\u043D\u0443\u0441\u043E\u0432. \u0418\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0432\u0441\u0442\u0443\u043F\u044F\u0442 \u0432 \u0441\u0438\u043B\u0443 \u0434\u043B\u044F \u0432\u0441\u0435\u0445 \u0431\u0443\u0434\u0443\u0449\u0438\u0445 \u0442\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u0439. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 9)(4, "label", 10);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 21);
    \u0275\u0275twoWayListener("ngModelChange", function BonusProgramPageComponent_div_6_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.editValue, $event) || (ctx_r3.editValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 9)(8, "label", 10);
    \u0275\u0275text(9, "\u0421\u0440\u043E\u043A \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u0431\u043E\u043D\u0443\u0441\u043E\u0432");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 28)(11, "input", 21);
    \u0275\u0275twoWayListener("ngModelChange", function BonusProgramPageComponent_div_6_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.editExpirationDays, $event) || (ctx_r3.editExpirationDays = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 29);
    \u0275\u0275text(13, "\u0434\u043D\u0435\u0439");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 30);
    \u0275\u0275text(15, "0 = \u0431\u0435\u0441\u0441\u0440\u043E\u0447\u043D\u044B\u0435 \u0431\u043E\u043D\u0443\u0441\u044B");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 9)(17, "label", 10);
    \u0275\u0275text(18, "\u0418\u043A\u043E\u043D\u043A\u0430");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 31);
    \u0275\u0275template(20, BonusProgramPageComponent_div_6_button_20_Template, 10, 11, "button", 32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 39)(22, "button", 101);
    \u0275\u0275listener("click", function BonusProgramPageComponent_div_6_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.saveSettings());
    });
    \u0275\u0275text(23, " \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "button", 102);
    \u0275\u0275listener("click", function BonusProgramPageComponent_div_6_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.openDeleteModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(25, "svg", 103);
    \u0275\u0275element(26, "path", 104)(27, "path", 105);
    \u0275\u0275elementEnd();
    \u0275\u0275text(28, " \u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0431\u043E\u043D\u0443\u0441 ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.selectedRule.label);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.editValue);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.editExpirationDays);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngForOf", ctx_r3.availableIcons);
  }
}
function BonusProgramPageComponent_option_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 107);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const preType_r8 = ctx.$implicit;
    \u0275\u0275property("value", preType_r8.type);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", preType_r8.displayName, " ");
  }
}
function BonusProgramPageComponent_button_63__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 67);
    \u0275\u0275element(1, "rect", 68)(2, "path", 69)(3, "path", 70);
    \u0275\u0275elementEnd();
  }
}
function BonusProgramPageComponent_button_63__svg_svg_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 67);
    \u0275\u0275element(1, "path", 71);
    \u0275\u0275elementEnd();
  }
}
function BonusProgramPageComponent_button_63__svg_svg_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 67);
    \u0275\u0275element(1, "path", 72)(2, "path", 73)(3, "path", 74)(4, "circle", 75)(5, "circle", 76)(6, "circle", 77);
    \u0275\u0275elementEnd();
  }
}
function BonusProgramPageComponent_button_63__svg_svg_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 67);
    \u0275\u0275element(1, "circle", 78)(2, "circle", 79)(3, "circle", 80)(4, "path", 81);
    \u0275\u0275elementEnd();
  }
}
function BonusProgramPageComponent_button_63__svg_svg_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 67);
    \u0275\u0275element(1, "path", 82)(2, "rect", 83)(3, "path", 84)(4, "path", 85)(5, "path", 86);
    \u0275\u0275elementEnd();
  }
}
function BonusProgramPageComponent_button_63__svg_svg_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 67);
    \u0275\u0275element(1, "circle", 87)(2, "circle", 88)(3, "path", 89);
    \u0275\u0275elementEnd();
  }
}
function BonusProgramPageComponent_button_63__svg_svg_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 67);
    \u0275\u0275element(1, "path", 90);
    \u0275\u0275elementEnd();
  }
}
function BonusProgramPageComponent_button_63__svg_svg_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 67);
    \u0275\u0275element(1, "path", 91)(2, "path", 92)(3, "path", 93)(4, "path", 94);
    \u0275\u0275elementEnd();
  }
}
function BonusProgramPageComponent_button_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 106);
    \u0275\u0275listener("click", function BonusProgramPageComponent_button_63_Template_button_click_0_listener() {
      const icon_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.newBonus.icon = icon_r10.id);
    });
    \u0275\u0275elementContainerStart(1, 54);
    \u0275\u0275template(2, BonusProgramPageComponent_button_63__svg_svg_2_Template, 4, 0, "svg", 55)(3, BonusProgramPageComponent_button_63__svg_svg_3_Template, 2, 0, "svg", 55)(4, BonusProgramPageComponent_button_63__svg_svg_4_Template, 7, 0, "svg", 55)(5, BonusProgramPageComponent_button_63__svg_svg_5_Template, 5, 0, "svg", 55)(6, BonusProgramPageComponent_button_63__svg_svg_6_Template, 6, 0, "svg", 55)(7, BonusProgramPageComponent_button_63__svg_svg_7_Template, 4, 0, "svg", 55)(8, BonusProgramPageComponent_button_63__svg_svg_8_Template, 2, 0, "svg", 55)(9, BonusProgramPageComponent_button_63__svg_svg_9_Template, 5, 0, "svg", 55);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const icon_r10 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selected", ctx_r3.newBonus.icon === icon_r10.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitch", icon_r10.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "wallet");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "party");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "cake");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "share");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "gift");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "percent");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "heart");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "trophy");
  }
}
function BonusProgramPageComponent__svg_svg_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 108);
    \u0275\u0275element(1, "circle", 109)(2, "path", 110);
    \u0275\u0275elementEnd();
  }
}
function BonusProgramPageComponent__svg_svg_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 108);
    \u0275\u0275element(1, "circle", 109)(2, "path", 111);
    \u0275\u0275elementEnd();
  }
}
function BonusProgramPageComponent_div_80_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 115)(1, "div", 116);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 108);
    \u0275\u0275element(3, "path", 117);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "h3", 118);
    \u0275\u0275text(5, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0431\u043E\u043D\u0443\u0441?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 119);
    \u0275\u0275text(7, " \u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B, \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0431\u043E\u043D\u0443\u0441 ");
    \u0275\u0275elementStart(8, "strong");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, "?");
    \u0275\u0275element(11, "br");
    \u0275\u0275text(12, " \u042D\u0442\u043E \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u043D\u0435\u043B\u044C\u0437\u044F \u043E\u0442\u043C\u0435\u043D\u0438\u0442\u044C. \u0411\u043E\u043D\u0443\u0441\u043D\u0430\u044F \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430 \u043F\u0435\u0440\u0435\u0441\u0442\u0430\u043D\u0435\u0442 \u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u0434\u043B\u044F \u0432\u0441\u0435\u0445 \u0431\u0443\u0434\u0443\u0449\u0438\u0445 \u0442\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u0439. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 120)(14, "button", 121);
    \u0275\u0275listener("click", function BonusProgramPageComponent_div_80_div_2_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.closeDeleteModal());
    });
    \u0275\u0275text(15, "\u041E\u0442\u043C\u0435\u043D\u0430");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 122);
    \u0275\u0275listener("click", function BonusProgramPageComponent_div_80_div_2_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.proceedToDeleteStep2());
    });
    \u0275\u0275text(17, "\u0414\u0430, \u0443\u0434\u0430\u043B\u0438\u0442\u044C");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r3.selectedRule == null ? null : ctx_r3.selectedRule.title);
  }
}
function BonusProgramPageComponent_div_80_div_3_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043D\u0430\u0432\u0441\u0435\u0433\u0434\u0430");
    \u0275\u0275elementEnd();
  }
}
function BonusProgramPageComponent_div_80_div_3_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u0423\u0434\u0430\u043B\u0435\u043D\u0438\u0435...");
    \u0275\u0275elementEnd();
  }
}
function BonusProgramPageComponent_div_80_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 115)(1, "div", 123);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 108);
    \u0275\u0275element(3, "path", 124);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "h3", 118);
    \u0275\u0275text(5, "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u0435");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 119);
    \u0275\u0275text(7, " \u0414\u043B\u044F \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u044F \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u044F \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043B\u043E\u0432\u043E ");
    \u0275\u0275elementStart(8, "strong", 125);
    \u0275\u0275text(9, "\u0443\u0434\u0430\u043B\u0438\u0442\u044C");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "input", 126);
    \u0275\u0275twoWayListener("ngModelChange", function BonusProgramPageComponent_div_80_div_3_Template_input_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r3.deleteConfirmationWord, $event) || (ctx_r3.deleteConfirmationWord = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown.enter", function BonusProgramPageComponent_div_80_div_3_Template_input_keydown_enter_10_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.confirmDeleteBonus());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 120)(12, "button", 121);
    \u0275\u0275listener("click", function BonusProgramPageComponent_div_80_div_3_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.closeDeleteModal());
    });
    \u0275\u0275text(13, "\u041E\u0442\u043C\u0435\u043D\u0430");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 127);
    \u0275\u0275listener("click", function BonusProgramPageComponent_div_80_div_3_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.confirmDeleteBonus());
    });
    \u0275\u0275template(15, BonusProgramPageComponent_div_80_div_3_span_15_Template, 2, 0, "span", 128)(16, BonusProgramPageComponent_div_80_div_3_span_16_Template, 2, 0, "span", 128);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.deleteConfirmationWord);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r3.deleteConfirmationWord !== "\u0443\u0434\u0430\u043B\u0438\u0442\u044C" || ctx_r3.isDeletingBonus);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.isDeletingBonus);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.isDeletingBonus);
  }
}
function BonusProgramPageComponent_div_80_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 112);
    \u0275\u0275listener("click", function BonusProgramPageComponent_div_80_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeDeleteModal());
    });
    \u0275\u0275elementStart(1, "div", 113);
    \u0275\u0275listener("click", function BonusProgramPageComponent_div_80_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r11);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275template(2, BonusProgramPageComponent_div_80_div_2_Template, 18, 1, "div", 114)(3, BonusProgramPageComponent_div_80_div_3_Template, 17, 4, "div", 114);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r3.deleteStep === 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.deleteStep === 2);
  }
}
var BonusProgramPageComponent = class _BonusProgramPageComponent {
  pageHeaderService = inject(PageHeaderService);
  bonusTypesService = inject(BonusTypesService);
  toastService = inject(ToastService);
  isLoading = true;
  bonusRules = [];
  availableIcons = [
    {
      id: "wallet",
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" stroke-width="1.2"/><path d="M16 12h2" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/><path d="M2 10h20" stroke="currentColor" stroke-width="1.2"/></svg>'
    },
    {
      id: "party",
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path d="M12 2l2.4 7.4h7.6l-6.2 4.5 2.4 7.4-6.2-4.5-6.2 4.5 2.4-7.4-6.2-4.5h7.6L12 2z" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/></svg>'
    },
    {
      id: "cake",
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path d="M20 21H4a1 1 0 0 1-1-1v-6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1z" stroke="currentColor" stroke-width="1.2"/><path d="M3 16h18" stroke="currentColor" stroke-width="1.2"/><path d="M12 12V9m-4 3V10m8 2V10" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/><circle cx="8" cy="6" r="1" stroke="currentColor" stroke-width="1.2"/><circle cx="12" cy="6" r="1" stroke="currentColor" stroke-width="1.2"/><circle cx="16" cy="6" r="1" stroke="currentColor" stroke-width="1.2"/></svg>'
    },
    {
      id: "share",
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><circle cx="18" cy="5" r="2.5" stroke="currentColor" stroke-width="1.2"/><circle cx="6" cy="12" r="2.5" stroke="currentColor" stroke-width="1.2"/><circle cx="18" cy="19" r="2.5" stroke="currentColor" stroke-width="1.2"/><path d="M8.5 13.5l7 4M15.5 6.5l-7 4" stroke="currentColor" stroke-width="1.2"/></svg>'
    },
    {
      id: "gift",
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path d="M20 12v9H4v-9" stroke="currentColor" stroke-width="1.2"/><rect x="2" y="7" width="20" height="5" rx="1" stroke="currentColor" stroke-width="1.2"/><path d="M12 22V7" stroke="currentColor" stroke-width="1.2"/><path d="M12 7c-2-2-4-2.5-4-4.5a2 2 0 0 1 4 0c0 1.5-2 2-4 4.5" stroke="currentColor" stroke-width="1.2"/><path d="M12 7c2-2 4-2.5 4-4.5a2 2 0 0 0-4 0c0 1.5 2 2 4 4.5" stroke="currentColor" stroke-width="1.2"/></svg>'
    },
    {
      id: "percent",
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><circle cx="9" cy="9" r="2" stroke="currentColor" stroke-width="1.2"/><circle cx="15" cy="15" r="2" stroke="currentColor" stroke-width="1.2"/><path d="M5 19L19 5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg>'
    },
    {
      id: "heart",
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="currentColor" stroke-width="1.2"/></svg>'
    },
    {
      id: "trophy",
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path d="M6 9H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2" stroke="currentColor" stroke-width="1.2"/><path d="M18 9h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2" stroke="currentColor" stroke-width="1.2"/><path d="M12 15a6 6 0 0 0 6-6V3H6v6a6 6 0 0 0 6 6z" stroke="currentColor" stroke-width="1.2"/><path d="M12 15v3m-4 3h8m-6 0v-3m4 3v-3" stroke="currentColor" stroke-width="1.2"/></svg>'
    }
  ];
  isSettingsModalOpen = false;
  isAddModalOpen = false;
  isToggleConfirmModalOpen = false;
  selectedRule = null;
  pendingToggleRule = null;
  pendingToggleState = false;
  toggleConfirmTitle = "";
  toggleConfirmDescription = "";
  // Delete confirmation modal
  showDeleteModal = false;
  deleteStep = 1;
  deleteConfirmationWord = "";
  isDeletingBonus = false;
  editValue = 0;
  editExpirationDays = 0;
  editIcon = "gift";
  preconfiguredTypes = [];
  isLoadingPreconfiguredTypes = false;
  newBonus = {
    title: "",
    description: "",
    value: 0,
    unit: "\u0431\u043E\u043D\u0443\u0441",
    icon: "gift",
    expirationDays: 30,
    type: ""
  };
  ngOnInit() {
    this.pageHeaderService.setPageHeader("\u0411\u043E\u043D\u0443\u0441\u043D\u0430\u044F \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430", [
      { label: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F", route: "/home" },
      { label: "\u0411\u043E\u043D\u0443\u0441\u043D\u0430\u044F \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430" }
    ]);
    this.loadBonusTypes();
    this.loadPreconfiguredTypes();
  }
  loadPreconfiguredTypes() {
    this.isLoadingPreconfiguredTypes = true;
    this.bonusTypesService.getPreconfiguredBonusTypes().subscribe({
      next: (types) => {
        this.preconfiguredTypes = types;
        this.isLoadingPreconfiguredTypes = false;
      },
      error: (err) => {
        const errorMessage = err.error?.message || "\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u043F\u0440\u0435\u0434\u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044B\u0445 \u0442\u0438\u043F\u043E\u0432 \u0431\u043E\u043D\u0443\u0441\u043E\u0432";
        this.toastService.error(errorMessage);
        this.isLoadingPreconfiguredTypes = false;
      }
    });
  }
  loadBonusTypes() {
    this.isLoading = true;
    this.bonusTypesService.getAllBonusTypes().subscribe({
      next: (bonusTypes) => {
        this.bonusRules = bonusTypes.map((bt) => this.mapBonusTypeToRule(bt));
        this.isLoading = false;
      },
      error: (err) => {
        const errorMessage = err.error?.message || "\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0442\u0438\u043F\u043E\u0432 \u0431\u043E\u043D\u0443\u0441\u043E\u0432";
        this.toastService.error(errorMessage);
        this.isLoading = false;
      }
    });
  }
  // Map backend BonusTypeResponse to frontend BonusRule
  mapBonusTypeToRule(bonusType) {
    const value = bonusType.bonusPercentage ?? bonusType.bonusAmount ?? 0;
    const isPercentage = bonusType.bonusPercentage != null && bonusType.bonusPercentage > 0;
    const unit = isPercentage ? "%" : "\u0431\u043E\u043D\u0443\u0441";
    const label = isPercentage ? "\u041F\u0440\u043E\u0446\u0435\u043D\u0442 \u043D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u044F" : "\u0421\u0443\u043C\u043C\u0430 \u0431\u043E\u043D\u0443\u0441\u043E\u0432";
    const icon = this.mapBackendIconToFrontend(bonusType.iconType);
    const description = this.generateDescription(bonusType.type, value, isPercentage);
    return {
      id: bonusType.id.toString(),
      icon,
      title: bonusType.name,
      description,
      value,
      unit,
      label,
      active: bonusType.enabled,
      expirationDays: bonusType.expirationDays
    };
  }
  // Generate dynamic description based on bonus type and value
  generateDescription(type, value, isPercentage) {
    const valueStr = isPercentage ? `${value}%` : `${value} \u0442\u0435\u043D\u0433\u0435`;
    switch (type) {
      case "BASIC_CASHBACK":
        return `${valueStr} \u043A\u044D\u0448\u0431\u044D\u043A \u0441 \u043A\u0430\u0436\u0434\u043E\u0439 \u043E\u043F\u043B\u0430\u0442\u044B \u043A\u043B\u0438\u0435\u043D\u0442\u0430`;
      case "BIRTHDAY_BONUS":
        return `\u0424\u0438\u043A\u0441\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u0431\u043E\u043D\u0443\u0441 ${value} \u0442\u0435\u043D\u0433\u0435 \u0432 \u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F \u043A\u043B\u0438\u0435\u043D\u0442\u0430`;
      case "REFERRAL_BONUS":
        return `\u0424\u0438\u043A\u0441\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u0431\u043E\u043D\u0443\u0441 ${value} \u0442\u0435\u043D\u0433\u0435 \u0434\u043B\u044F \u0440\u0435\u0444\u0435\u0440\u0435\u0440\u0430 \u0438 \u043D\u043E\u0432\u043E\u0433\u043E \u043A\u043B\u0438\u0435\u043D\u0442\u0430 \u043F\u0440\u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0438 \u0440\u0435\u0444\u0435\u0440\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u043A\u043E\u0434\u0430`;
      case "WELCOME_BONUS":
        return `\u0424\u0438\u043A\u0441\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u0431\u043E\u043D\u0443\u0441 ${value} \u0442\u0435\u043D\u0433\u0435 \u0434\u043B\u044F \u043D\u043E\u0432\u044B\u0445 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432 \u043F\u0440\u0438 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438`;
      default:
        return isPercentage ? `${valueStr} \u043D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u0435 \u0441 \u043A\u0430\u0436\u0434\u043E\u0439 \u0442\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u0438` : `\u0424\u0438\u043A\u0441\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u0431\u043E\u043D\u0443\u0441 ${value} \u0442\u0435\u043D\u0433\u0435`;
    }
  }
  // Map backend icon type (UPPERCASE) to frontend icon (lowercase)
  mapBackendIconToFrontend(backendIcon) {
    if (!backendIcon) {
      return "gift";
    }
    return backendIcon.toLowerCase();
  }
  // Map frontend icon (lowercase) to backend icon type (UPPERCASE)
  mapFrontendIconToBackend(frontendIcon) {
    if (!frontendIcon) {
      return "GIFT";
    }
    return frontendIcon.toUpperCase();
  }
  // Map frontend BonusRule to backend CreateBonusTypeRequest
  mapRuleToCreateRequest(rule, type = "BASIC_CASHBACK") {
    const isPercentage = rule.unit === "%";
    const request = {
      name: rule.title || "",
      type,
      expirationDays: rule.expirationDays ?? 30,
      description: rule.description || "",
      iconType: this.mapFrontendIconToBackend(rule.icon || "gift")
    };
    if (isPercentage) {
      request.bonusPercentage = rule.value ?? 0;
    } else {
      request.bonusAmount = rule.value ?? 0;
    }
    return request;
  }
  onToggleClick(rule, event) {
    event.preventDefault();
    event.stopPropagation();
    const target = event.target;
    const currentState = rule.active;
    const newState = !currentState;
    this.pendingToggleRule = rule;
    this.pendingToggleState = newState;
    if (newState) {
      this.toggleConfirmTitle = `\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C "${rule.title}"?`;
      this.toggleConfirmDescription = `\u041F\u0440\u0438 \u0432\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0438 \u044D\u0442\u043E\u0433\u043E \u0431\u043E\u043D\u0443\u0441\u0430 \u043A\u043B\u0438\u0435\u043D\u0442\u044B \u0441\u043C\u043E\u0433\u0443\u0442 \u043F\u043E\u043B\u0443\u0447\u0430\u0442\u044C ${rule.value}${rule.unit === "%" ? "%" : " " + rule.unit} \u043F\u0440\u0438 \u043A\u0430\u0436\u0434\u043E\u0439 \u0442\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u0438. \u0411\u043E\u043D\u0443\u0441\u043D\u0430\u044F \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430 \u043D\u0430\u0447\u043D\u0435\u0442 \u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u0434\u043B\u044F \u0432\u0441\u0435\u0445 \u0431\u0443\u0434\u0443\u0449\u0438\u0445 \u043F\u043E\u043A\u0443\u043F\u043E\u043A.`;
    } else {
      this.toggleConfirmTitle = `\u041E\u0442\u043A\u043B\u044E\u0447\u0438\u0442\u044C "${rule.title}"?`;
      this.toggleConfirmDescription = `\u041F\u0440\u0438 \u043E\u0442\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0438 \u044D\u0442\u043E\u0433\u043E \u0431\u043E\u043D\u0443\u0441\u0430 \u043A\u043B\u0438\u0435\u043D\u0442\u044B \u0431\u043E\u043B\u044C\u0448\u0435 \u043D\u0435 \u0431\u0443\u0434\u0443\u0442 \u043F\u043E\u043B\u0443\u0447\u0430\u0442\u044C ${rule.value}${rule.unit === "%" ? "%" : " " + rule.unit} \u043F\u0440\u0438 \u0442\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u044F\u0445. \u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430 \u043F\u0435\u0440\u0435\u0441\u0442\u0430\u043D\u0435\u0442 \u043D\u0430\u0447\u0438\u0441\u043B\u044F\u0442\u044C \u0431\u043E\u043D\u0443\u0441\u044B \u0434\u043B\u044F \u0432\u0441\u0435\u0445 \u0431\u0443\u0434\u0443\u0449\u0438\u0445 \u043F\u043E\u043A\u0443\u043F\u043E\u043A. \u0421\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0435 \u043D\u0430\u043A\u043E\u043F\u043B\u0435\u043D\u043D\u044B\u0435 \u0431\u043E\u043D\u0443\u0441\u044B \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432 \u043E\u0441\u0442\u0430\u043D\u0443\u0442\u0441\u044F \u0431\u0435\u0437 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0439.`;
    }
    this.isToggleConfirmModalOpen = true;
  }
  confirmToggle() {
    if (this.pendingToggleRule) {
      const bonusTypeId = parseInt(this.pendingToggleRule.id);
      this.bonusTypesService.toggleBonusType(bonusTypeId, this.pendingToggleState).subscribe({
        next: (updatedBonusType) => {
          this.loadBonusTypes();
          this.toastService.success(this.pendingToggleState ? "\u0411\u043E\u043D\u0443\u0441 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0432\u043A\u043B\u044E\u0447\u0435\u043D" : "\u0411\u043E\u043D\u0443\u0441 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043E\u0442\u043A\u043B\u044E\u0447\u0435\u043D");
          this.isToggleConfirmModalOpen = false;
          this.pendingToggleRule = null;
        },
        error: (err) => {
          const errorMessage = err.error?.message || "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0438 \u0441\u0442\u0430\u0442\u0443\u0441\u0430 \u0431\u043E\u043D\u0443\u0441\u0430";
          this.toastService.error(errorMessage);
        }
      });
    }
  }
  cancelToggle() {
    if (this.pendingToggleRule) {
      this.pendingToggleRule = null;
    }
    this.isToggleConfirmModalOpen = false;
  }
  openSettingsModal(rule) {
    this.selectedRule = rule;
    this.editValue = rule.value;
    this.editExpirationDays = rule.expirationDays;
    this.editIcon = rule.icon;
    this.isSettingsModalOpen = true;
  }
  saveSettings() {
    if (this.selectedRule && this.editValue >= 0) {
      const bonusTypeId = parseInt(this.selectedRule.id);
      const isPercentage = this.selectedRule.unit === "%";
      const updateData = {
        name: this.selectedRule.title,
        enabled: this.selectedRule.active,
        description: this.selectedRule.description || "",
        expirationDays: this.editExpirationDays,
        iconType: this.mapFrontendIconToBackend(this.editIcon)
      };
      if (isPercentage) {
        updateData.bonusPercentage = this.editValue;
      } else {
        updateData.bonusAmount = this.editValue;
      }
      this.bonusTypesService.updateBonusType(bonusTypeId, updateData).subscribe({
        next: (updatedBonusType) => {
          const index = this.bonusRules.findIndex((r) => r.id === this.selectedRule.id);
          if (index !== -1) {
            this.bonusRules[index] = this.mapBonusTypeToRule(updatedBonusType);
          }
          this.toastService.success("\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0431\u043E\u043D\u0443\u0441\u0430 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u044B");
          this.isSettingsModalOpen = false;
          this.selectedRule = null;
        },
        error: (err) => {
          const errorMessage = err.error?.message || "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0438 \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043A";
          this.toastService.error(errorMessage);
        }
      });
    }
  }
  // Delete confirmation modal methods
  openDeleteModal() {
    this.showDeleteModal = true;
    this.deleteStep = 1;
    this.deleteConfirmationWord = "";
    this.isDeletingBonus = false;
    this.isSettingsModalOpen = false;
  }
  closeDeleteModal() {
    this.showDeleteModal = false;
    this.deleteStep = 1;
    this.deleteConfirmationWord = "";
    this.isDeletingBonus = false;
  }
  proceedToDeleteStep2() {
    this.deleteStep = 2;
  }
  confirmDeleteBonus() {
    if (this.deleteConfirmationWord !== "\u0443\u0434\u0430\u043B\u0438\u0442\u044C") {
      this.toastService.error('\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043B\u043E\u0432\u043E "\u0443\u0434\u0430\u043B\u0438\u0442\u044C" \u0434\u043B\u044F \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u044F');
      return;
    }
    if (this.selectedRule) {
      this.isDeletingBonus = true;
      const bonusTypeId = parseInt(this.selectedRule.id);
      this.bonusTypesService.deleteBonusType(bonusTypeId).subscribe({
        next: () => {
          const index = this.bonusRules.findIndex((r) => r.id === this.selectedRule.id);
          if (index !== -1) {
            this.bonusRules.splice(index, 1);
          }
          this.toastService.success("\u0411\u043E\u043D\u0443\u0441 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0443\u0434\u0430\u043B\u0435\u043D");
          this.closeDeleteModal();
          this.selectedRule = null;
        },
        error: (err) => {
          const errorMessage = err.error?.message || "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u0438 \u0431\u043E\u043D\u0443\u0441\u0430";
          this.toastService.error(errorMessage);
          this.isDeletingBonus = false;
        }
      });
    }
  }
  // Legacy method - now redirects to modal
  deleteBonus() {
    this.openDeleteModal();
  }
  openAddModal() {
    this.newBonus = {
      title: "",
      description: "",
      value: 0,
      unit: "\u0431\u043E\u043D\u0443\u0441",
      icon: "gift",
      expirationDays: 30,
      type: ""
    };
    this.isAddModalOpen = true;
  }
  addNewBonus() {
    if (!this.newBonus.title || !this.newBonus.value || !this.newBonus.type)
      return;
    const isPercentage = this.newBonus.unit === "%";
    const createData = {
      name: this.newBonus.title,
      type: this.newBonus.type,
      expirationDays: this.newBonus.expirationDays,
      description: this.newBonus.description || "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0439 \u0431\u043E\u043D\u0443\u0441",
      iconType: this.mapFrontendIconToBackend(this.newBonus.icon)
    };
    if (isPercentage) {
      createData.bonusPercentage = this.newBonus.value;
    } else {
      createData.bonusAmount = this.newBonus.value;
    }
    this.bonusTypesService.createBonusType(createData).subscribe({
      next: (createdBonusType) => {
        const newRule = this.mapBonusTypeToRule(createdBonusType);
        this.bonusRules.push(newRule);
        this.toastService.success("\u0411\u043E\u043D\u0443\u0441 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0441\u043E\u0437\u0434\u0430\u043D");
        this.isAddModalOpen = false;
        this.newBonus = {
          title: "",
          description: "",
          value: 0,
          unit: "\u0431\u043E\u043D\u0443\u0441",
          icon: "gift",
          expirationDays: 30,
          type: ""
        };
      },
      error: (err) => {
        const errorMessage = err.error?.message || "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0438 \u0431\u043E\u043D\u0443\u0441\u0430";
        this.toastService.error(errorMessage);
      }
    });
  }
  static \u0275fac = function BonusProgramPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BonusProgramPageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BonusProgramPageComponent, selectors: [["app-bonus-program-page"]], decls: 81, vars: 31, consts: [[1, "page-wrapper"], [1, "bonus-program"], ["class", "page-loading-container", 4, "ngIf"], ["class", "config-grid", 4, "ngIf"], [3, "visibleChange", "visible", "title"], ["class", "modal-body", 4, "ngIf"], ["title", "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043D\u043E\u0432\u044B\u0439 \u0431\u043E\u043D\u0443\u0441", 3, "visibleChange", "visible"], [1, "modal-body"], [1, "modal-description"], [1, "form-group"], [1, "input-label"], [1, "required-mark"], [1, "select-wrapper"], [1, "form-select", 3, "ngModelChange", "ngModel", "disabled"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", 1, "select-arrow"], ["d", "M6 9l6 6 6-6", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["type", "text", "placeholder", "\u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440: \u0411\u043E\u043D\u0443\u0441 \u0432\u044B\u0445\u043E\u0434\u043D\u043E\u0433\u043E \u0434\u043D\u044F", 1, "form-input", 3, "ngModelChange", "ngModel"], ["placeholder", "\u041A\u0440\u0430\u0442\u043A\u043E\u0435 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0443\u0441\u043B\u043E\u0432\u0438\u0439...", "rows", "3", 1, "form-textarea", 3, "ngModelChange", "ngModel"], [1, "form-row"], ["type", "number", "min", "0", "placeholder", "0", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "unit-selector"], ["type", "button", 1, "unit-option", 3, "click"], [1, "unit-icon"], [1, "unit-text"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", 1, "unit-icon-svg"], ["d", "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z", "fill", "currentColor"], [1, "expiration-input"], [1, "expiration-suffix"], [1, "input-hint"], [1, "icon-selector"], ["class", "icon-option", 3, "selected", "click", 4, "ngFor", "ngForOf"], [1, "submit-btn", 3, "click", "disabled"], [1, "toggle-confirm-content"], [1, "confirm-icon"], ["viewBox", "0 0 24 24", "fill", "none", 4, "ngIf"], [1, "confirm-description"], [1, "confirm-text"], [1, "modal-actions"], ["buttonType", "ghost", 3, "onClick"], [3, "onClick", "buttonType"], ["class", "delete-modal-overlay", 3, "click", 4, "ngIf"], [1, "page-loading-container"], ["type", "logo", "size", "large", 3, "visible", "overlay"], [1, "config-grid"], ["class", "config-card", 3, "active-config", 4, "ngFor", "ngForOf"], [1, "config-card-add", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", 1, "add-icon"], ["d", "M12 5v14M5 12h14", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], [1, "add-text"], [1, "config-card"], [1, "config-header"], [1, "config-icon"], [3, "ngSwitch"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", 4, "ngSwitchCase"], [1, "switch"], ["type", "checkbox", 3, "click", "checked"], [1, "slider"], [1, "config-title"], [1, "config-desc"], [1, "config-footer"], [1, "config-values"], [1, "config-value"], ["class", "config-expiration", 4, "ngIf"], ["class", "config-expiration forever", 4, "ngIf"], [1, "btn-config-card", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none"], ["x", "2", "y", "5", "width", "20", "height", "14", "rx", "2", "stroke", "currentColor", "stroke-width", "1.2"], ["d", "M16 12h2", "stroke", "currentColor", "stroke-width", "1.2", "stroke-linecap", "round"], ["d", "M2 10h20", "stroke", "currentColor", "stroke-width", "1.2"], ["d", "M12 2l2.4 7.4h7.6l-6.2 4.5 2.4 7.4-6.2-4.5-6.2 4.5 2.4-7.4-6.2-4.5h7.6L12 2z", "stroke", "currentColor", "stroke-width", "1.2", "stroke-linejoin", "round"], ["d", "M20 21H4a1 1 0 0 1-1-1v-6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1z", "stroke", "currentColor", "stroke-width", "1.2"], ["d", "M3 16h18", "stroke", "currentColor", "stroke-width", "1.2"], ["d", "M12 12V9m-4 3V10m8 2V10", "stroke", "currentColor", "stroke-width", "1.2", "stroke-linecap", "round"], ["cx", "8", "cy", "6", "r", "1", "stroke", "currentColor", "stroke-width", "1.2"], ["cx", "12", "cy", "6", "r", "1", "stroke", "currentColor", "stroke-width", "1.2"], ["cx", "16", "cy", "6", "r", "1", "stroke", "currentColor", "stroke-width", "1.2"], ["cx", "18", "cy", "5", "r", "2.5", "stroke", "currentColor", "stroke-width", "1.2"], ["cx", "6", "cy", "12", "r", "2.5", "stroke", "currentColor", "stroke-width", "1.2"], ["cx", "18", "cy", "19", "r", "2.5", "stroke", "currentColor", "stroke-width", "1.2"], ["d", "M8.5 13.5l7 4M15.5 6.5l-7 4", "stroke", "currentColor", "stroke-width", "1.2"], ["d", "M20 12v9H4v-9", "stroke", "currentColor", "stroke-width", "1.2"], ["x", "2", "y", "7", "width", "20", "height", "5", "rx", "1", "stroke", "currentColor", "stroke-width", "1.2"], ["d", "M12 22V7", "stroke", "currentColor", "stroke-width", "1.2"], ["d", "M12 7c-2-2-4-2.5-4-4.5a2 2 0 0 1 4 0c0 1.5-2 2-4 4.5", "stroke", "currentColor", "stroke-width", "1.2"], ["d", "M12 7c2-2 4-2.5 4-4.5a2 2 0 0 0-4 0c0 1.5 2 2 4 4.5", "stroke", "currentColor", "stroke-width", "1.2"], ["cx", "9", "cy", "9", "r", "2", "stroke", "currentColor", "stroke-width", "1.2"], ["cx", "15", "cy", "15", "r", "2", "stroke", "currentColor", "stroke-width", "1.2"], ["d", "M5 19L19 5", "stroke", "currentColor", "stroke-width", "1.2", "stroke-linecap", "round"], ["d", "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z", "stroke", "currentColor", "stroke-width", "1.2"], ["d", "M6 9H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2", "stroke", "currentColor", "stroke-width", "1.2"], ["d", "M18 9h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2", "stroke", "currentColor", "stroke-width", "1.2"], ["d", "M12 15a6 6 0 0 0 6-6V3H6v6a6 6 0 0 0 6 6z", "stroke", "currentColor", "stroke-width", "1.2"], ["d", "M12 15v3m-4 3h8m-6 0v-3m4 3v-3", "stroke", "currentColor", "stroke-width", "1.2"], [1, "config-expiration"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", 1, "expiration-icon"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "1.5"], ["d", "M12 6v6l4 2", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round"], [1, "config-expiration", "forever"], ["d", "M18.178 8c5.096 0 5.096 8 0 8-5.095 0-7.133-8-12.739-8-4.585 0-4.585 8 0 8 5.606 0 7.644-8 12.74-8z", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "submit-btn", 3, "click"], [1, "delete-btn", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", 1, "delete-icon"], ["d", "M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6h14z", "stroke", "currentColor", "stroke-width", "1.2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M10 11v6M14 11v6", "stroke", "currentColor", "stroke-width", "1.2", "stroke-linecap", "round"], [1, "icon-option", 3, "click"], [3, "value"], ["viewBox", "0 0 24 24", "fill", "none"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "2"], ["d", "M9 12l2 2 4-4", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M15 9l-6 6M9 9l6 6", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "delete-modal-overlay", 3, "click"], [1, "delete-modal", 3, "click"], ["class", "delete-modal-content", 4, "ngIf"], [1, "delete-modal-content"], [1, "delete-modal-icon", "warning"], ["d", "M12 9v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "delete-modal-title"], [1, "delete-modal-description"], [1, "delete-modal-actions"], [1, "delete-modal-btn", "cancel", 3, "click"], [1, "delete-modal-btn", "confirm", 3, "click"], [1, "delete-modal-icon", "danger"], ["d", "M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m3 0v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6h14zM10 11v6M14 11v6", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "confirm-word"], ["type", "text", "placeholder", "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043B\u043E\u0432\u043E \u0434\u043B\u044F \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u044F", 1, "delete-confirm-input", 3, "ngModelChange", "keydown.enter", "ngModel"], [1, "delete-modal-btn", "delete", 3, "click", "disabled"], [4, "ngIf"]], template: function BonusProgramPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275template(2, BonusProgramPageComponent_div_2_Template, 2, 2, "div", 2)(3, BonusProgramPageComponent_div_3_Template, 7, 1, "div", 3);
      \u0275\u0275element(4, "app-bonus-calculator");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "app-modal", 4);
      \u0275\u0275listener("visibleChange", function BonusProgramPageComponent_Template_app_modal_visibleChange_5_listener($event) {
        return ctx.isSettingsModalOpen = $event;
      });
      \u0275\u0275template(6, BonusProgramPageComponent_div_6_Template, 29, 4, "div", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "app-modal", 6);
      \u0275\u0275listener("visibleChange", function BonusProgramPageComponent_Template_app_modal_visibleChange_7_listener($event) {
        return ctx.isAddModalOpen = $event;
      });
      \u0275\u0275elementStart(8, "div", 7)(9, "div", 8);
      \u0275\u0275text(10, " \u0421\u043E\u0437\u0434\u0430\u0439\u0442\u0435 \u043D\u043E\u0432\u044B\u0439 \u0442\u0438\u043F \u0431\u043E\u043D\u0443\u0441\u0430 \u0434\u043B\u044F \u0432\u0430\u0448\u0435\u0439 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u044B \u043B\u043E\u044F\u043B\u044C\u043D\u043E\u0441\u0442\u0438. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 9)(12, "label", 10);
      \u0275\u0275text(13, " \u0422\u0438\u043F \u0431\u043E\u043D\u0443\u0441\u0430 ");
      \u0275\u0275elementStart(14, "span", 11);
      \u0275\u0275text(15, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "div", 12)(17, "select", 13);
      \u0275\u0275twoWayListener("ngModelChange", function BonusProgramPageComponent_Template_select_ngModelChange_17_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.newBonus.type, $event) || (ctx.newBonus.type = $event);
        return $event;
      });
      \u0275\u0275elementStart(18, "option", 14);
      \u0275\u0275text(19, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u0438\u043F \u0431\u043E\u043D\u0443\u0441\u0430");
      \u0275\u0275elementEnd();
      \u0275\u0275template(20, BonusProgramPageComponent_option_20_Template, 2, 2, "option", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(21, "svg", 16);
      \u0275\u0275element(22, "path", 17);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(23, "div", 9)(24, "label", 10);
      \u0275\u0275text(25, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0431\u043E\u043D\u0443\u0441\u0430");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "input", 18);
      \u0275\u0275twoWayListener("ngModelChange", function BonusProgramPageComponent_Template_input_ngModelChange_26_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.newBonus.title, $event) || (ctx.newBonus.title = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "div", 9)(28, "label", 10);
      \u0275\u0275text(29, "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "textarea", 19);
      \u0275\u0275twoWayListener("ngModelChange", function BonusProgramPageComponent_Template_textarea_ngModelChange_30_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.newBonus.description, $event) || (ctx.newBonus.description = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "div", 20)(32, "div", 9)(33, "label", 10);
      \u0275\u0275text(34, "\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "input", 21);
      \u0275\u0275twoWayListener("ngModelChange", function BonusProgramPageComponent_Template_input_ngModelChange_35_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.newBonus.value, $event) || (ctx.newBonus.value = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "div", 9)(37, "label", 10);
      \u0275\u0275text(38, "\u0415\u0434\u0438\u043D\u0438\u0446\u0430");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "div", 22)(40, "button", 23);
      \u0275\u0275listener("click", function BonusProgramPageComponent_Template_button_click_40_listener() {
        return ctx.newBonus.unit = "%";
      });
      \u0275\u0275elementStart(41, "span", 24);
      \u0275\u0275text(42, "%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "span", 25);
      \u0275\u0275text(44, "\u041F\u0440\u043E\u0446\u0435\u043D\u0442");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "button", 23);
      \u0275\u0275listener("click", function BonusProgramPageComponent_Template_button_click_45_listener() {
        return ctx.newBonus.unit = "\u0431\u043E\u043D\u0443\u0441";
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(46, "svg", 26);
      \u0275\u0275element(47, "path", 27);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(48, "span", 25);
      \u0275\u0275text(49, "\u0422\u0435\u043D\u0433\u0435");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(50, "div", 9)(51, "label", 10);
      \u0275\u0275text(52, "\u0421\u0440\u043E\u043A \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u0431\u043E\u043D\u0443\u0441\u043E\u0432");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "div", 28)(54, "input", 21);
      \u0275\u0275twoWayListener("ngModelChange", function BonusProgramPageComponent_Template_input_ngModelChange_54_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.newBonus.expirationDays, $event) || (ctx.newBonus.expirationDays = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "span", 29);
      \u0275\u0275text(56, "\u0434\u043D\u0435\u0439");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(57, "div", 30);
      \u0275\u0275text(58, "0 = \u0431\u0435\u0441\u0441\u0440\u043E\u0447\u043D\u044B\u0435 \u0431\u043E\u043D\u0443\u0441\u044B");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(59, "div", 9)(60, "label", 10);
      \u0275\u0275text(61, "\u0418\u043A\u043E\u043D\u043A\u0430");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "div", 31);
      \u0275\u0275template(63, BonusProgramPageComponent_button_63_Template, 10, 11, "button", 32);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(64, "button", 33);
      \u0275\u0275listener("click", function BonusProgramPageComponent_Template_button_click_64_listener() {
        return ctx.addNewBonus();
      });
      \u0275\u0275text(65, " \u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0431\u043E\u043D\u0443\u0441 ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(66, "app-modal", 4);
      \u0275\u0275listener("visibleChange", function BonusProgramPageComponent_Template_app_modal_visibleChange_66_listener($event) {
        return ctx.isToggleConfirmModalOpen = $event;
      });
      \u0275\u0275elementStart(67, "div", 7)(68, "div", 34)(69, "div", 35);
      \u0275\u0275template(70, BonusProgramPageComponent__svg_svg_70_Template, 3, 0, "svg", 36)(71, BonusProgramPageComponent__svg_svg_71_Template, 3, 0, "svg", 36);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "div", 37)(73, "p", 38);
      \u0275\u0275text(74);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(75, "div", 39)(76, "app-button", 40);
      \u0275\u0275listener("onClick", function BonusProgramPageComponent_Template_app_button_onClick_76_listener() {
        return ctx.cancelToggle();
      });
      \u0275\u0275text(77, " \u041E\u0442\u043C\u0435\u043D\u0430 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "app-button", 41);
      \u0275\u0275listener("onClick", function BonusProgramPageComponent_Template_app_button_onClick_78_listener() {
        return ctx.confirmToggle();
      });
      \u0275\u0275text(79);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(80, BonusProgramPageComponent_div_80_Template, 4, 2, "div", 42);
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading);
      \u0275\u0275advance(2);
      \u0275\u0275property("visible", ctx.isSettingsModalOpen)("title", "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430: " + ((ctx.selectedRule == null ? null : ctx.selectedRule.title) || ""));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedRule);
      \u0275\u0275advance();
      \u0275\u0275property("visible", ctx.isAddModalOpen);
      \u0275\u0275advance(10);
      \u0275\u0275twoWayProperty("ngModel", ctx.newBonus.type);
      \u0275\u0275property("disabled", ctx.isLoadingPreconfiguredTypes);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.preconfiguredTypes);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.newBonus.title);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.newBonus.description);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.newBonus.value);
      \u0275\u0275advance(5);
      \u0275\u0275classProp("selected", ctx.newBonus.unit === "%");
      \u0275\u0275advance(5);
      \u0275\u0275classProp("selected", ctx.newBonus.unit === "\u0431\u043E\u043D\u0443\u0441");
      \u0275\u0275advance(9);
      \u0275\u0275twoWayProperty("ngModel", ctx.newBonus.expirationDays);
      \u0275\u0275advance(9);
      \u0275\u0275property("ngForOf", ctx.availableIcons);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", !ctx.newBonus.title || !ctx.newBonus.value || !ctx.newBonus.type);
      \u0275\u0275advance(2);
      \u0275\u0275property("visible", ctx.isToggleConfirmModalOpen)("title", ctx.toggleConfirmTitle);
      \u0275\u0275advance(3);
      \u0275\u0275classProp("enable", ctx.pendingToggleState)("disable", !ctx.pendingToggleState);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.pendingToggleState);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.pendingToggleState);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.toggleConfirmDescription);
      \u0275\u0275advance(4);
      \u0275\u0275property("buttonType", ctx.pendingToggleState ? "primary" : "danger");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.pendingToggleState ? "\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C" : "\u041E\u0442\u043A\u043B\u044E\u0447\u0438\u0442\u044C", " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showDeleteModal);
    }
  }, dependencies: [
    CommonModule,
    NgForOf,
    NgIf,
    NgSwitch,
    NgSwitchCase,
    FormsModule,
    NgSelectOption,
    \u0275NgSelectMultipleOption,
    DefaultValueAccessor,
    NumberValueAccessor,
    SelectControlValueAccessor,
    NgControlStatus,
    MinValidator,
    NgModel,
    ModalComponent,
    ButtonComponent,
    BonusCalculatorComponent,
    LoaderComponent
  ], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n}\n.page-wrapper[_ngcontent-%COMP%] {\n  min-height: 100%;\n  margin: -2rem;\n  padding: 2rem;\n  background:\n    linear-gradient(\n      180deg,\n      #f0fdf4 0%,\n      #f8fafc 50%,\n      #f8fafc 100%);\n}\n.bonus-program[_ngcontent-%COMP%] {\n  max-width: 1400px;\n  margin: 0 auto;\n  position: relative;\n  min-height: 400px;\n}\n.page-loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 60vh;\n  width: 100%;\n}\n.config-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 1.5rem;\n}\n.config-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  padding: 1.5rem;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);\n  transition: 0.3s;\n  position: relative;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n.config-card[_ngcontent-%COMP%]:hover {\n  border-color: #16A34A;\n  transform: translateY(-3px);\n}\n.config-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 4px;\n  background: #cbd5e1;\n  transition: 0.3s;\n}\n.config-card.active-config[_ngcontent-%COMP%]::before {\n  background: #16A34A;\n}\n.config-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 1rem;\n}\n.config-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  background: #f1f5f9;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: 0.3s;\n}\n.config-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  color: #475569;\n  display: block;\n}\n.config-card.active-config[_ngcontent-%COMP%]   .config-icon[_ngcontent-%COMP%] {\n  background: #dcfce7;\n}\n.config-card.active-config[_ngcontent-%COMP%]   .config-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #16A34A;\n}\n.switch[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 48px;\n  height: 26px;\n}\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.slider[_ngcontent-%COMP%] {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #cbd5e1;\n  transition: 0.4s;\n  border-radius: 34px;\n}\n.slider[_ngcontent-%COMP%]:before {\n  position: absolute;\n  content: "";\n  height: 20px;\n  width: 20px;\n  left: 3px;\n  bottom: 3px;\n  background-color: white;\n  transition: 0.4s;\n  border-radius: 50%;\n}\ninput[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%] {\n  background-color: #16A34A;\n}\ninput[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%]:before {\n  transform: translateX(21px);\n}\n.config-title[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 700;\n  margin-bottom: 0.5rem;\n  color: #0f172a;\n}\n.config-desc[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #64748b;\n  margin-bottom: 1.5rem;\n  min-height: 40px;\n  flex-grow: 1;\n  line-height: 1.5;\n}\n.config-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: 1rem;\n  border-top: 1px dashed #e2e8f0;\n  margin-top: auto;\n}\n.config-values[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.config-value[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #0f172a;\n}\n.config-value[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #64748b;\n  font-weight: 500;\n  margin-left: 2px;\n}\n.config-expiration[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 0.75rem;\n  color: #64748b;\n  font-weight: 500;\n}\n.config-expiration.forever[_ngcontent-%COMP%] {\n  color: #16A34A;\n}\n.expiration-icon[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  display: block;\n}\n.btn-config-card[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 1px solid #cbd5e1;\n  color: #0f172a;\n  padding: 8px 16px;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: 0.2s;\n  font-size: 0.85rem;\n}\n.btn-config-card[_ngcontent-%COMP%]:hover {\n  border-color: #16A34A;\n  color: #16A34A;\n  background: #dcfce7;\n}\n.config-card[_ngcontent-%COMP%]:not(.active-config)   .config-value[_ngcontent-%COMP%], \n.config-card[_ngcontent-%COMP%]:not(.active-config)   .btn-config-card[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  pointer-events: none;\n  filter: grayscale(1);\n}\n.config-card-add[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 2px dashed #cbd5e1;\n  border-radius: 16px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: 0.3s;\n  min-height: 250px;\n  color: #94a3b8;\n}\n.config-card-add[_ngcontent-%COMP%]:hover {\n  border-color: #16A34A;\n  color: #16A34A;\n  background: #dcfce7;\n  transform: translateY(-3px);\n}\n.add-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  margin-bottom: 12px;\n  display: block;\n}\n.add-text[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 1rem;\n}\n.modal-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.modal-description[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 0.9rem;\n  margin-bottom: 0.5rem;\n  line-height: 1.5;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n}\n.input-label[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #475569;\n}\n.form-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 16px;\n  border: 1px solid #cbd5e1;\n  border-radius: 10px;\n  font-size: 1rem;\n  outline: none;\n  transition: 0.2s;\n}\n.form-input[_ngcontent-%COMP%]:focus {\n  border-color: #16A34A;\n  box-shadow: 0 0 0 3px #dcfce7;\n}\n.select-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n}\n.form-select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 40px 12px 16px;\n  border: 1px solid #cbd5e1;\n  border-radius: 10px;\n  font-size: 1rem;\n  outline: none;\n  transition: 0.2s;\n  background: white;\n  appearance: none;\n  cursor: pointer;\n}\n.form-select[_ngcontent-%COMP%]:focus {\n  border-color: #16A34A;\n  box-shadow: 0 0 0 3px #dcfce7;\n}\n.form-select[_ngcontent-%COMP%]:disabled {\n  background: #f1f5f9;\n  cursor: not-allowed;\n  opacity: 0.6;\n}\n.select-arrow[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 20px;\n  height: 20px;\n  color: #64748b;\n  pointer-events: none;\n}\n.required-mark[_ngcontent-%COMP%] {\n  color: #ef4444;\n  margin-left: 4px;\n}\n.expiration-input[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.expiration-input[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.expiration-suffix[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #64748b;\n  font-weight: 500;\n  white-space: nowrap;\n}\n.input-hint[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #94a3b8;\n  margin-top: 4px;\n}\n.unit-selector[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n}\n.unit-option[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  height: 46px;\n  padding: 0 12px;\n  border: 1px solid #cbd5e1;\n  border-radius: 10px;\n  background: white;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.unit-option[_ngcontent-%COMP%]:hover {\n  border-color: #16A34A;\n  background: #f0fdf4;\n}\n.unit-option.selected[_ngcontent-%COMP%] {\n  border-color: #16A34A;\n  background: #dcfce7;\n}\n.unit-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #64748b;\n  transition: color 0.2s;\n}\n.unit-option.selected[_ngcontent-%COMP%]   .unit-icon[_ngcontent-%COMP%] {\n  color: #16A34A;\n}\n.unit-icon-svg[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  color: #64748b;\n  transition: color 0.2s;\n  display: block;\n}\n.unit-option.selected[_ngcontent-%COMP%]   .unit-icon-svg[_ngcontent-%COMP%] {\n  color: #16A34A;\n}\n.unit-text[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: #64748b;\n  transition: color 0.2s;\n}\n.unit-option.selected[_ngcontent-%COMP%]   .unit-text[_ngcontent-%COMP%] {\n  color: #16A34A;\n}\n.form-textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 16px;\n  border: 1px solid #cbd5e1;\n  border-radius: 10px;\n  font-size: 1rem;\n  font-family: inherit;\n  outline: none;\n  transition: 0.2s;\n  resize: vertical;\n  min-height: 80px;\n}\n.form-textarea[_ngcontent-%COMP%]:focus {\n  border-color: #16A34A;\n  box-shadow: 0 0 0 3px #dcfce7;\n}\n.icon-selector[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.icon-option[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  background: white;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: 0.2s;\n}\n.icon-option[_ngcontent-%COMP%]:hover {\n  border-color: #16A34A;\n  background: #f0fdf4;\n}\n.icon-option.selected[_ngcontent-%COMP%] {\n  border-color: #16A34A;\n  background: #dcfce7;\n}\n.icon-option[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  color: #475569;\n  display: block;\n}\n.icon-option.selected[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #16A34A;\n}\n.modal-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: right;\n  gap: 10px;\n  margin-top: 0.5rem;\n}\n.submit-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #16A34A;\n  color: white;\n  padding: 14px;\n  border: none;\n  border-radius: 12px;\n  font-weight: 700;\n  cursor: pointer;\n  font-size: 1rem;\n  transition: 0.2s;\n}\n.submit-btn[_ngcontent-%COMP%]:hover {\n  background: #14532d;\n}\n.delete-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  background: transparent;\n  color: #dc2626;\n  padding: 12px;\n  border: 1px solid #fecaca;\n  border-radius: 12px;\n  font-weight: 600;\n  cursor: pointer;\n  font-size: 0.9rem;\n  transition: 0.2s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n.delete-btn[_ngcontent-%COMP%]:hover {\n  background: #fef2f2;\n  border-color: #dc2626;\n}\n.delete-icon[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  display: block;\n}\n.submit-btn[_ngcontent-%COMP%]:disabled {\n  background: #cbd5e1;\n  cursor: not-allowed;\n}\n.toggle-confirm-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1.5rem;\n  padding: 1rem 0;\n}\n.confirm-icon[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.confirm-icon.enable[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #16A34A;\n}\n.confirm-icon.disable[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #dc2626;\n}\n.confirm-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n}\n.confirm-description[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.confirm-text[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  line-height: 1.6;\n  color: #475569;\n  margin: 0;\n}\n.page-loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 60vh;\n  width: 100%;\n}\n.delete-modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  animation: _ngcontent-%COMP%_fadeIn 0.2s ease;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.delete-modal[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n  max-width: 420px;\n  width: 90%;\n  animation: _ngcontent-%COMP%_slideUp 0.3s ease;\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.delete-modal-content[_ngcontent-%COMP%] {\n  padding: 2rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n}\n.delete-modal-icon[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 1.25rem;\n}\n.delete-modal-icon.warning[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #d97706;\n}\n.delete-modal-icon.danger[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.delete-modal-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n}\n.delete-modal-title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0 0 0.75rem;\n}\n.delete-modal-description[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #6b7280;\n  line-height: 1.6;\n  margin: 0 0 1.5rem;\n}\n.delete-modal-description[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #1f2937;\n}\n.confirm-word[_ngcontent-%COMP%] {\n  color: #dc2626;\n  background: #fee2e2;\n  padding: 0.125rem 0.5rem;\n  border-radius: 4px;\n  font-family: monospace;\n  font-size: 0.95rem;\n}\n.delete-confirm-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.875rem 1rem;\n  border: 2px solid #e5e7eb;\n  border-radius: 10px;\n  font-size: 1rem;\n  font-family: inherit;\n  text-align: center;\n  margin-bottom: 1.5rem;\n  transition: all 0.2s ease;\n}\n.delete-confirm-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #dc2626;\n  box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);\n}\n.delete-confirm-input[_ngcontent-%COMP%]::placeholder {\n  color: #9ca3af;\n}\n.delete-modal-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  width: 100%;\n}\n.delete-modal-btn[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 0.875rem 1.5rem;\n  border-radius: 10px;\n  font-size: 0.9rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  border: none;\n}\n.delete-modal-btn.cancel[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  color: #6b7280;\n}\n.delete-modal-btn.cancel[_ngcontent-%COMP%]:hover {\n  background: #e5e7eb;\n  color: #374151;\n}\n.delete-modal-btn.confirm[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #d97706;\n}\n.delete-modal-btn.confirm[_ngcontent-%COMP%]:hover {\n  background: #fde68a;\n  color: #b45309;\n}\n.delete-modal-btn.delete[_ngcontent-%COMP%] {\n  background: #dc2626;\n  color: white;\n}\n.delete-modal-btn.delete[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #b91c1c;\n}\n.delete-modal-btn.delete[_ngcontent-%COMP%]:disabled {\n  background: #fca5a5;\n  cursor: not-allowed;\n}\n@media (max-width: 768px) {\n  .page-wrapper[_ngcontent-%COMP%] {\n    margin: -1rem;\n    padding: 1rem;\n  }\n  .config-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=bonus-program-page.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BonusProgramPageComponent, [{
    type: Component,
    args: [{ selector: "app-bonus-program-page", standalone: true, imports: [
      CommonModule,
      FormsModule,
      ModalComponent,
      ButtonComponent,
      BonusCalculatorComponent,
      LoaderComponent
    ], template: `
    <div class="page-wrapper">
      <div class="bonus-program">
        <!-- Loading State -->
        <div class="page-loading-container" *ngIf="isLoading">
          <app-loader [visible]="true" [overlay]="false" type="logo" size="large"></app-loader>
        </div>

        <!-- Config Grid -->
        <div class="config-grid" *ngIf="!isLoading">
          <!-- Bonus Cards -->
          <div 
            class="config-card" 
            *ngFor="let rule of bonusRules"
            [class.active-config]="rule.active">
            
            <div class="config-header">
              <div class="config-icon">
                <ng-container [ngSwitch]="rule.icon">
                  <svg *ngSwitchCase="'wallet'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" stroke-width="1.2"/>
                    <path d="M16 12h2" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
                    <path d="M2 10h20" stroke="currentColor" stroke-width="1.2"/>
                  </svg>
                  <svg *ngSwitchCase="'party'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2l2.4 7.4h7.6l-6.2 4.5 2.4 7.4-6.2-4.5-6.2 4.5 2.4-7.4-6.2-4.5h7.6L12 2z" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
                  </svg>
                  <svg *ngSwitchCase="'cake'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                    <path d="M20 21H4a1 1 0 0 1-1-1v-6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1z" stroke="currentColor" stroke-width="1.2"/>
                    <path d="M3 16h18" stroke="currentColor" stroke-width="1.2"/>
                    <path d="M12 12V9m-4 3V10m8 2V10" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
                    <circle cx="8" cy="6" r="1" stroke="currentColor" stroke-width="1.2"/>
                    <circle cx="12" cy="6" r="1" stroke="currentColor" stroke-width="1.2"/>
                    <circle cx="16" cy="6" r="1" stroke="currentColor" stroke-width="1.2"/>
                  </svg>
                  <svg *ngSwitchCase="'share'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                    <circle cx="18" cy="5" r="2.5" stroke="currentColor" stroke-width="1.2"/>
                    <circle cx="6" cy="12" r="2.5" stroke="currentColor" stroke-width="1.2"/>
                    <circle cx="18" cy="19" r="2.5" stroke="currentColor" stroke-width="1.2"/>
                    <path d="M8.5 13.5l7 4M15.5 6.5l-7 4" stroke="currentColor" stroke-width="1.2"/>
                  </svg>
                  <svg *ngSwitchCase="'gift'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                    <path d="M20 12v9H4v-9" stroke="currentColor" stroke-width="1.2"/>
                    <rect x="2" y="7" width="20" height="5" rx="1" stroke="currentColor" stroke-width="1.2"/>
                    <path d="M12 22V7" stroke="currentColor" stroke-width="1.2"/>
                    <path d="M12 7c-2-2-4-2.5-4-4.5a2 2 0 0 1 4 0c0 1.5-2 2-4 4.5" stroke="currentColor" stroke-width="1.2"/>
                    <path d="M12 7c2-2 4-2.5 4-4.5a2 2 0 0 0-4 0c0 1.5 2 2 4 4.5" stroke="currentColor" stroke-width="1.2"/>
                  </svg>
                  <svg *ngSwitchCase="'percent'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                    <circle cx="9" cy="9" r="2" stroke="currentColor" stroke-width="1.2"/>
                    <circle cx="15" cy="15" r="2" stroke="currentColor" stroke-width="1.2"/>
                    <path d="M5 19L19 5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
                  </svg>
                  <svg *ngSwitchCase="'heart'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="currentColor" stroke-width="1.2"/>
                  </svg>
                  <svg *ngSwitchCase="'trophy'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                    <path d="M6 9H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2" stroke="currentColor" stroke-width="1.2"/>
                    <path d="M18 9h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2" stroke="currentColor" stroke-width="1.2"/>
                    <path d="M12 15a6 6 0 0 0 6-6V3H6v6a6 6 0 0 0 6 6z" stroke="currentColor" stroke-width="1.2"/>
                    <path d="M12 15v3m-4 3h8m-6 0v-3m4 3v-3" stroke="currentColor" stroke-width="1.2"/>
                  </svg>
                </ng-container>
              </div>
              <label class="switch">
                <input 
                  type="checkbox" 
                  [checked]="rule.active"
                  (click)="onToggleClick(rule, $event)">
                <span class="slider"></span>
              </label>
            </div>
            
            <div class="config-title">{{ rule.title }}</div>
            <div class="config-desc">{{ rule.description }}</div>
            
            <div class="config-footer">
              <div class="config-values">
                <div class="config-value">
                  {{ rule.value }}<span>{{ rule.unit }}</span>
                </div>
                <div class="config-expiration" *ngIf="rule.expirationDays > 0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="expiration-icon">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"/>
                    <path d="M12 6v6l4 2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                  </svg>
                  {{ rule.expirationDays }} \u0434\u043D.
                </div>
                <div class="config-expiration forever" *ngIf="rule.expirationDays === 0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="expiration-icon">
                    <path d="M18.178 8c5.096 0 5.096 8 0 8-5.095 0-7.133-8-12.739-8-4.585 0-4.585 8 0 8 5.606 0 7.644-8 12.74-8z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  \u0431\u0435\u0441\u0441\u0440\u043E\u0447\u043D\u043E
                </div>
              </div>
              <button class="btn-config-card" (click)="openSettingsModal(rule)">
                \u041D\u0430\u0441\u0442\u0440\u043E\u0438\u0442\u044C
              </button>
            </div>
          </div>

          <!-- Add New Card -->
          <div class="config-card-add" (click)="openAddModal()">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="add-icon">
              <path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
            <span class="add-text">\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0431\u043E\u043D\u0443\u0441</span>
          </div>
        </div>

        <!-- Bonus Calculator -->
        <app-bonus-calculator>
        </app-bonus-calculator>
      </div>
    </div>

    <!-- Settings Modal -->
    <app-modal 
      [visible]="isSettingsModalOpen" 
      [title]="'\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430: ' + (selectedRule?.title || '')"
      (visibleChange)="isSettingsModalOpen = $event">
      <div class="modal-body" *ngIf="selectedRule">
        <div class="modal-description">
          \u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u043D\u043E\u0432\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0434\u043B\u044F \u044D\u0442\u043E\u0433\u043E \u0442\u0438\u043F\u0430 \u0431\u043E\u043D\u0443\u0441\u043E\u0432. \u0418\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0432\u0441\u0442\u0443\u043F\u044F\u0442 \u0432 \u0441\u0438\u043B\u0443 \u0434\u043B\u044F \u0432\u0441\u0435\u0445 \u0431\u0443\u0434\u0443\u0449\u0438\u0445 \u0442\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u0439.
        </div>
        
        <div class="form-group">
          <label class="input-label">{{ selectedRule.label }}</label>
          <input 
            type="number" 
            class="form-input"
            [(ngModel)]="editValue"
            min="0"
            placeholder="0">
        </div>

        <div class="form-group">
          <label class="input-label">\u0421\u0440\u043E\u043A \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u0431\u043E\u043D\u0443\u0441\u043E\u0432</label>
          <div class="expiration-input">
            <input 
              type="number" 
              class="form-input"
              [(ngModel)]="editExpirationDays"
              min="0"
              placeholder="0">
            <span class="expiration-suffix">\u0434\u043D\u0435\u0439</span>
          </div>
          <div class="input-hint">0 = \u0431\u0435\u0441\u0441\u0440\u043E\u0447\u043D\u044B\u0435 \u0431\u043E\u043D\u0443\u0441\u044B</div>
        </div>

        <div class="form-group">
          <label class="input-label">\u0418\u043A\u043E\u043D\u043A\u0430</label>
          <div class="icon-selector">
            <button 
              *ngFor="let icon of availableIcons"
              class="icon-option"
              [class.selected]="editIcon === icon.id"
              (click)="editIcon = icon.id">
              <ng-container [ngSwitch]="icon.id">
                <svg *ngSwitchCase="'wallet'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" stroke-width="1.2"/>
                  <path d="M16 12h2" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
                  <path d="M2 10h20" stroke="currentColor" stroke-width="1.2"/>
                </svg>
                <svg *ngSwitchCase="'party'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2l2.4 7.4h7.6l-6.2 4.5 2.4 7.4-6.2-4.5-6.2 4.5 2.4-7.4-6.2-4.5h7.6L12 2z" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
                </svg>
                <svg *ngSwitchCase="'cake'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                  <path d="M20 21H4a1 1 0 0 1-1-1v-6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1z" stroke="currentColor" stroke-width="1.2"/>
                  <path d="M3 16h18" stroke="currentColor" stroke-width="1.2"/>
                  <path d="M12 12V9m-4 3V10m8 2V10" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
                  <circle cx="8" cy="6" r="1" stroke="currentColor" stroke-width="1.2"/>
                  <circle cx="12" cy="6" r="1" stroke="currentColor" stroke-width="1.2"/>
                  <circle cx="16" cy="6" r="1" stroke="currentColor" stroke-width="1.2"/>
                </svg>
                <svg *ngSwitchCase="'share'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                  <circle cx="18" cy="5" r="2.5" stroke="currentColor" stroke-width="1.2"/>
                  <circle cx="6" cy="12" r="2.5" stroke="currentColor" stroke-width="1.2"/>
                  <circle cx="18" cy="19" r="2.5" stroke="currentColor" stroke-width="1.2"/>
                  <path d="M8.5 13.5l7 4M15.5 6.5l-7 4" stroke="currentColor" stroke-width="1.2"/>
                </svg>
                <svg *ngSwitchCase="'gift'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                  <path d="M20 12v9H4v-9" stroke="currentColor" stroke-width="1.2"/>
                  <rect x="2" y="7" width="20" height="5" rx="1" stroke="currentColor" stroke-width="1.2"/>
                  <path d="M12 22V7" stroke="currentColor" stroke-width="1.2"/>
                  <path d="M12 7c-2-2-4-2.5-4-4.5a2 2 0 0 1 4 0c0 1.5-2 2-4 4.5" stroke="currentColor" stroke-width="1.2"/>
                  <path d="M12 7c2-2 4-2.5 4-4.5a2 2 0 0 0-4 0c0 1.5 2 2 4 4.5" stroke="currentColor" stroke-width="1.2"/>
                </svg>
                <svg *ngSwitchCase="'percent'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                  <circle cx="9" cy="9" r="2" stroke="currentColor" stroke-width="1.2"/>
                  <circle cx="15" cy="15" r="2" stroke="currentColor" stroke-width="1.2"/>
                  <path d="M5 19L19 5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
                </svg>
                <svg *ngSwitchCase="'heart'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="currentColor" stroke-width="1.2"/>
                </svg>
                <svg *ngSwitchCase="'trophy'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                  <path d="M6 9H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2" stroke="currentColor" stroke-width="1.2"/>
                  <path d="M18 9h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2" stroke="currentColor" stroke-width="1.2"/>
                  <path d="M12 15a6 6 0 0 0 6-6V3H6v6a6 6 0 0 0 6 6z" stroke="currentColor" stroke-width="1.2"/>
                  <path d="M12 15v3m-4 3h8m-6 0v-3m4 3v-3" stroke="currentColor" stroke-width="1.2"/>
                </svg>
              </ng-container>
            </button>
          </div>
        </div>

        <div class="modal-actions">
          <button class="submit-btn" (click)="saveSettings()">
            \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F
          </button>
          <button class="delete-btn" (click)="openDeleteModal()">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="delete-icon">
              <path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6h14z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M10 11v6M14 11v6" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
            </svg>
            \u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0431\u043E\u043D\u0443\u0441
          </button>
        </div>
      </div>
    </app-modal>

    <!-- Add New Bonus Modal -->
    <app-modal 
      [visible]="isAddModalOpen" 
      title="\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043D\u043E\u0432\u044B\u0439 \u0431\u043E\u043D\u0443\u0441"
      (visibleChange)="isAddModalOpen = $event">
      <div class="modal-body">
        <div class="modal-description">
          \u0421\u043E\u0437\u0434\u0430\u0439\u0442\u0435 \u043D\u043E\u0432\u044B\u0439 \u0442\u0438\u043F \u0431\u043E\u043D\u0443\u0441\u0430 \u0434\u043B\u044F \u0432\u0430\u0448\u0435\u0439 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u044B \u043B\u043E\u044F\u043B\u044C\u043D\u043E\u0441\u0442\u0438.
        </div>
        
        <div class="form-group">
          <label class="input-label">
            \u0422\u0438\u043F \u0431\u043E\u043D\u0443\u0441\u0430
            <span class="required-mark">*</span>
          </label>
          <div class="select-wrapper">
            <select 
              class="form-select"
              [(ngModel)]="newBonus.type"
              [disabled]="isLoadingPreconfiguredTypes">
              <option value="">\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u0438\u043F \u0431\u043E\u043D\u0443\u0441\u0430</option>
              <option *ngFor="let preType of preconfiguredTypes" [value]="preType.type">
                {{ preType.displayName }}
              </option>
            </select>
            <svg class="select-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
              <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>

        <div class="form-group">
          <label class="input-label">\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0431\u043E\u043D\u0443\u0441\u0430</label>
          <input 
            type="text" 
            class="form-input"
            [(ngModel)]="newBonus.title"
            placeholder="\u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440: \u0411\u043E\u043D\u0443\u0441 \u0432\u044B\u0445\u043E\u0434\u043D\u043E\u0433\u043E \u0434\u043D\u044F">
        </div>

        <div class="form-group">
          <label class="input-label">\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435</label>
          <textarea 
            class="form-textarea"
            [(ngModel)]="newBonus.description"
            placeholder="\u041A\u0440\u0430\u0442\u043A\u043E\u0435 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0443\u0441\u043B\u043E\u0432\u0438\u0439..."
            rows="3"></textarea>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label class="input-label">\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435</label>
            <input 
              type="number" 
              class="form-input"
              [(ngModel)]="newBonus.value"
              min="0"
              placeholder="0">
          </div>
          <div class="form-group">
            <label class="input-label">\u0415\u0434\u0438\u043D\u0438\u0446\u0430</label>
            <div class="unit-selector">
              <button 
                type="button"
                class="unit-option"
                [class.selected]="newBonus.unit === '%'"
                (click)="newBonus.unit = '%'">
                <span class="unit-icon">%</span>
                <span class="unit-text">\u041F\u0440\u043E\u0446\u0435\u043D\u0442</span>
              </button>
              <button 
                type="button"
                class="unit-option"
                [class.selected]="newBonus.unit === '\u0431\u043E\u043D\u0443\u0441'"
                (click)="newBonus.unit = '\u0431\u043E\u043D\u0443\u0441'">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="unit-icon-svg">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor"/>
                </svg>
                <span class="unit-text">\u0422\u0435\u043D\u0433\u0435</span>
              </button>
            </div>
          </div>
        </div>

        <div class="form-group">
          <label class="input-label">\u0421\u0440\u043E\u043A \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u0431\u043E\u043D\u0443\u0441\u043E\u0432</label>
          <div class="expiration-input">
            <input 
              type="number" 
              class="form-input"
              [(ngModel)]="newBonus.expirationDays"
              min="0"
              placeholder="0">
            <span class="expiration-suffix">\u0434\u043D\u0435\u0439</span>
          </div>
          <div class="input-hint">0 = \u0431\u0435\u0441\u0441\u0440\u043E\u0447\u043D\u044B\u0435 \u0431\u043E\u043D\u0443\u0441\u044B</div>
        </div>

        <div class="form-group">
          <label class="input-label">\u0418\u043A\u043E\u043D\u043A\u0430</label>
          <div class="icon-selector">
            <button 
              *ngFor="let icon of availableIcons"
              class="icon-option"
              [class.selected]="newBonus.icon === icon.id"
              (click)="newBonus.icon = icon.id">
              <ng-container [ngSwitch]="icon.id">
                <svg *ngSwitchCase="'wallet'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" stroke-width="1.2"/>
                  <path d="M16 12h2" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
                  <path d="M2 10h20" stroke="currentColor" stroke-width="1.2"/>
                </svg>
                <svg *ngSwitchCase="'party'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2l2.4 7.4h7.6l-6.2 4.5 2.4 7.4-6.2-4.5-6.2 4.5 2.4-7.4-6.2-4.5h7.6L12 2z" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
                </svg>
                <svg *ngSwitchCase="'cake'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                  <path d="M20 21H4a1 1 0 0 1-1-1v-6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1z" stroke="currentColor" stroke-width="1.2"/>
                  <path d="M3 16h18" stroke="currentColor" stroke-width="1.2"/>
                  <path d="M12 12V9m-4 3V10m8 2V10" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
                  <circle cx="8" cy="6" r="1" stroke="currentColor" stroke-width="1.2"/>
                  <circle cx="12" cy="6" r="1" stroke="currentColor" stroke-width="1.2"/>
                  <circle cx="16" cy="6" r="1" stroke="currentColor" stroke-width="1.2"/>
                </svg>
                <svg *ngSwitchCase="'share'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                  <circle cx="18" cy="5" r="2.5" stroke="currentColor" stroke-width="1.2"/>
                  <circle cx="6" cy="12" r="2.5" stroke="currentColor" stroke-width="1.2"/>
                  <circle cx="18" cy="19" r="2.5" stroke="currentColor" stroke-width="1.2"/>
                  <path d="M8.5 13.5l7 4M15.5 6.5l-7 4" stroke="currentColor" stroke-width="1.2"/>
                </svg>
                <svg *ngSwitchCase="'gift'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                  <path d="M20 12v9H4v-9" stroke="currentColor" stroke-width="1.2"/>
                  <rect x="2" y="7" width="20" height="5" rx="1" stroke="currentColor" stroke-width="1.2"/>
                  <path d="M12 22V7" stroke="currentColor" stroke-width="1.2"/>
                  <path d="M12 7c-2-2-4-2.5-4-4.5a2 2 0 0 1 4 0c0 1.5-2 2-4 4.5" stroke="currentColor" stroke-width="1.2"/>
                  <path d="M12 7c2-2 4-2.5 4-4.5a2 2 0 0 0-4 0c0 1.5 2 2 4 4.5" stroke="currentColor" stroke-width="1.2"/>
                </svg>
                <svg *ngSwitchCase="'percent'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                  <circle cx="9" cy="9" r="2" stroke="currentColor" stroke-width="1.2"/>
                  <circle cx="15" cy="15" r="2" stroke="currentColor" stroke-width="1.2"/>
                  <path d="M5 19L19 5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
                </svg>
                <svg *ngSwitchCase="'heart'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="currentColor" stroke-width="1.2"/>
                </svg>
                <svg *ngSwitchCase="'trophy'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                  <path d="M6 9H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2" stroke="currentColor" stroke-width="1.2"/>
                  <path d="M18 9h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2" stroke="currentColor" stroke-width="1.2"/>
                  <path d="M12 15a6 6 0 0 0 6-6V3H6v6a6 6 0 0 0 6 6z" stroke="currentColor" stroke-width="1.2"/>
                  <path d="M12 15v3m-4 3h8m-6 0v-3m4 3v-3" stroke="currentColor" stroke-width="1.2"/>
                </svg>
              </ng-container>
            </button>
          </div>
        </div>

        <button 
          class="submit-btn" 
          (click)="addNewBonus()"
          [disabled]="!newBonus.title || !newBonus.value || !newBonus.type">
          \u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0431\u043E\u043D\u0443\u0441
        </button>
      </div>
    </app-modal>

    <!-- Toggle Confirmation Modal -->
    <app-modal 
      [visible]="isToggleConfirmModalOpen" 
      [title]="toggleConfirmTitle"
      (visibleChange)="isToggleConfirmModalOpen = $event">
      <div class="modal-body">
        <div class="toggle-confirm-content">
          <div class="confirm-icon" [class.enable]="pendingToggleState" [class.disable]="!pendingToggleState">
            <svg *ngIf="pendingToggleState" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
              <path d="M9 12l2 2 4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <svg *ngIf="!pendingToggleState" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
              <path d="M15 9l-6 6M9 9l6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div class="confirm-description">
            <p class="confirm-text">{{ toggleConfirmDescription }}</p>
          </div>
        </div>
        <div class="modal-actions">
          <app-button
            buttonType="ghost"
            (onClick)="cancelToggle()">
            \u041E\u0442\u043C\u0435\u043D\u0430
          </app-button>
          <app-button
            [buttonType]="pendingToggleState ? 'primary' : 'danger'"
            (onClick)="confirmToggle()">
            {{ pendingToggleState ? '\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C' : '\u041E\u0442\u043A\u043B\u044E\u0447\u0438\u0442\u044C' }}
          </app-button>
        </div>
      </div>
    </app-modal>

    <!-- Delete Bonus Confirmation Modal -->
    <div class="delete-modal-overlay" *ngIf="showDeleteModal" (click)="closeDeleteModal()">
      <div class="delete-modal" (click)="$event.stopPropagation()">
        <!-- Step 1: Initial confirmation -->
        <div class="delete-modal-content" *ngIf="deleteStep === 1">
          <div class="delete-modal-icon warning">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M12 9v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <h3 class="delete-modal-title">\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0431\u043E\u043D\u0443\u0441?</h3>
          <p class="delete-modal-description">
            \u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B, \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0431\u043E\u043D\u0443\u0441 <strong>{{ selectedRule?.title }}</strong>?<br>
            \u042D\u0442\u043E \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u043D\u0435\u043B\u044C\u0437\u044F \u043E\u0442\u043C\u0435\u043D\u0438\u0442\u044C. \u0411\u043E\u043D\u0443\u0441\u043D\u0430\u044F \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430 \u043F\u0435\u0440\u0435\u0441\u0442\u0430\u043D\u0435\u0442 \u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u0434\u043B\u044F \u0432\u0441\u0435\u0445 \u0431\u0443\u0434\u0443\u0449\u0438\u0445 \u0442\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u0439.
          </p>
          <div class="delete-modal-actions">
            <button class="delete-modal-btn cancel" (click)="closeDeleteModal()">\u041E\u0442\u043C\u0435\u043D\u0430</button>
            <button class="delete-modal-btn confirm" (click)="proceedToDeleteStep2()">\u0414\u0430, \u0443\u0434\u0430\u043B\u0438\u0442\u044C</button>
          </div>
        </div>

        <!-- Step 2: Type confirmation word -->
        <div class="delete-modal-content" *ngIf="deleteStep === 2">
          <div class="delete-modal-icon danger">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m3 0v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6h14zM10 11v6M14 11v6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <h3 class="delete-modal-title">\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u0435</h3>
          <p class="delete-modal-description">
            \u0414\u043B\u044F \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u044F \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u044F \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043B\u043E\u0432\u043E <strong class="confirm-word">\u0443\u0434\u0430\u043B\u0438\u0442\u044C</strong>
          </p>
          <input 
            type="text" 
            class="delete-confirm-input"
            [(ngModel)]="deleteConfirmationWord"
            placeholder="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043B\u043E\u0432\u043E \u0434\u043B\u044F \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u044F"
            (keydown.enter)="confirmDeleteBonus()">
          <div class="delete-modal-actions">
            <button class="delete-modal-btn cancel" (click)="closeDeleteModal()">\u041E\u0442\u043C\u0435\u043D\u0430</button>
            <button 
              class="delete-modal-btn delete" 
              [disabled]="deleteConfirmationWord !== '\u0443\u0434\u0430\u043B\u0438\u0442\u044C' || isDeletingBonus"
              (click)="confirmDeleteBonus()">
              <span *ngIf="!isDeletingBonus">\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043D\u0430\u0432\u0441\u0435\u0433\u0434\u0430</span>
              <span *ngIf="isDeletingBonus">\u0423\u0434\u0430\u043B\u0435\u043D\u0438\u0435...</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  `, styles: ['/* angular:styles/component:css;e2e3b91614033118ad3a1adb7163de63cead6dcfc4237b27784a07e2e92ac48e;/Users/baglan/repo/westwood/westwood-frontend/src/app/features/bonus-program/pages/bonus-program-page/bonus-program-page.component.ts */\n:host {\n  display: block;\n  height: 100%;\n}\n.page-wrapper {\n  min-height: 100%;\n  margin: -2rem;\n  padding: 2rem;\n  background:\n    linear-gradient(\n      180deg,\n      #f0fdf4 0%,\n      #f8fafc 50%,\n      #f8fafc 100%);\n}\n.bonus-program {\n  max-width: 1400px;\n  margin: 0 auto;\n  position: relative;\n  min-height: 400px;\n}\n.page-loading-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 60vh;\n  width: 100%;\n}\n.config-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 1.5rem;\n}\n.config-card {\n  background: white;\n  border-radius: 16px;\n  padding: 1.5rem;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);\n  transition: 0.3s;\n  position: relative;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n.config-card:hover {\n  border-color: #16A34A;\n  transform: translateY(-3px);\n}\n.config-card::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 4px;\n  background: #cbd5e1;\n  transition: 0.3s;\n}\n.config-card.active-config::before {\n  background: #16A34A;\n}\n.config-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 1rem;\n}\n.config-icon {\n  width: 48px;\n  height: 48px;\n  background: #f1f5f9;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: 0.3s;\n}\n.config-icon svg {\n  width: 24px;\n  height: 24px;\n  color: #475569;\n  display: block;\n}\n.config-card.active-config .config-icon {\n  background: #dcfce7;\n}\n.config-card.active-config .config-icon svg {\n  color: #16A34A;\n}\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 48px;\n  height: 26px;\n}\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #cbd5e1;\n  transition: 0.4s;\n  border-radius: 34px;\n}\n.slider:before {\n  position: absolute;\n  content: "";\n  height: 20px;\n  width: 20px;\n  left: 3px;\n  bottom: 3px;\n  background-color: white;\n  transition: 0.4s;\n  border-radius: 50%;\n}\ninput:checked + .slider {\n  background-color: #16A34A;\n}\ninput:checked + .slider:before {\n  transform: translateX(21px);\n}\n.config-title {\n  font-size: 1.1rem;\n  font-weight: 700;\n  margin-bottom: 0.5rem;\n  color: #0f172a;\n}\n.config-desc {\n  font-size: 0.85rem;\n  color: #64748b;\n  margin-bottom: 1.5rem;\n  min-height: 40px;\n  flex-grow: 1;\n  line-height: 1.5;\n}\n.config-footer {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: 1rem;\n  border-top: 1px dashed #e2e8f0;\n  margin-top: auto;\n}\n.config-values {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.config-value {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #0f172a;\n}\n.config-value span {\n  font-size: 0.8rem;\n  color: #64748b;\n  font-weight: 500;\n  margin-left: 2px;\n}\n.config-expiration {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 0.75rem;\n  color: #64748b;\n  font-weight: 500;\n}\n.config-expiration.forever {\n  color: #16A34A;\n}\n.expiration-icon {\n  width: 12px;\n  height: 12px;\n  display: block;\n}\n.btn-config-card {\n  background: transparent;\n  border: 1px solid #cbd5e1;\n  color: #0f172a;\n  padding: 8px 16px;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: 0.2s;\n  font-size: 0.85rem;\n}\n.btn-config-card:hover {\n  border-color: #16A34A;\n  color: #16A34A;\n  background: #dcfce7;\n}\n.config-card:not(.active-config) .config-value,\n.config-card:not(.active-config) .btn-config-card {\n  opacity: 0.5;\n  pointer-events: none;\n  filter: grayscale(1);\n}\n.config-card-add {\n  background: #f8fafc;\n  border: 2px dashed #cbd5e1;\n  border-radius: 16px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: 0.3s;\n  min-height: 250px;\n  color: #94a3b8;\n}\n.config-card-add:hover {\n  border-color: #16A34A;\n  color: #16A34A;\n  background: #dcfce7;\n  transform: translateY(-3px);\n}\n.add-icon {\n  width: 48px;\n  height: 48px;\n  margin-bottom: 12px;\n  display: block;\n}\n.add-text {\n  font-weight: 600;\n  font-size: 1rem;\n}\n.modal-body {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.modal-description {\n  color: #64748b;\n  font-size: 0.9rem;\n  margin-bottom: 0.5rem;\n  line-height: 1.5;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.form-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n}\n.input-label {\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #475569;\n}\n.form-input {\n  width: 100%;\n  padding: 12px 16px;\n  border: 1px solid #cbd5e1;\n  border-radius: 10px;\n  font-size: 1rem;\n  outline: none;\n  transition: 0.2s;\n}\n.form-input:focus {\n  border-color: #16A34A;\n  box-shadow: 0 0 0 3px #dcfce7;\n}\n.select-wrapper {\n  position: relative;\n  width: 100%;\n}\n.form-select {\n  width: 100%;\n  padding: 12px 40px 12px 16px;\n  border: 1px solid #cbd5e1;\n  border-radius: 10px;\n  font-size: 1rem;\n  outline: none;\n  transition: 0.2s;\n  background: white;\n  appearance: none;\n  cursor: pointer;\n}\n.form-select:focus {\n  border-color: #16A34A;\n  box-shadow: 0 0 0 3px #dcfce7;\n}\n.form-select:disabled {\n  background: #f1f5f9;\n  cursor: not-allowed;\n  opacity: 0.6;\n}\n.select-arrow {\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 20px;\n  height: 20px;\n  color: #64748b;\n  pointer-events: none;\n}\n.required-mark {\n  color: #ef4444;\n  margin-left: 4px;\n}\n.expiration-input {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.expiration-input .form-input {\n  flex: 1;\n}\n.expiration-suffix {\n  font-size: 0.9rem;\n  color: #64748b;\n  font-weight: 500;\n  white-space: nowrap;\n}\n.input-hint {\n  font-size: 0.75rem;\n  color: #94a3b8;\n  margin-top: 4px;\n}\n.unit-selector {\n  display: flex;\n  gap: 6px;\n}\n.unit-option {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  height: 46px;\n  padding: 0 12px;\n  border: 1px solid #cbd5e1;\n  border-radius: 10px;\n  background: white;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.unit-option:hover {\n  border-color: #16A34A;\n  background: #f0fdf4;\n}\n.unit-option.selected {\n  border-color: #16A34A;\n  background: #dcfce7;\n}\n.unit-icon {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #64748b;\n  transition: color 0.2s;\n}\n.unit-option.selected .unit-icon {\n  color: #16A34A;\n}\n.unit-icon-svg {\n  width: 16px;\n  height: 16px;\n  color: #64748b;\n  transition: color 0.2s;\n  display: block;\n}\n.unit-option.selected .unit-icon-svg {\n  color: #16A34A;\n}\n.unit-text {\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: #64748b;\n  transition: color 0.2s;\n}\n.unit-option.selected .unit-text {\n  color: #16A34A;\n}\n.form-textarea {\n  width: 100%;\n  padding: 12px 16px;\n  border: 1px solid #cbd5e1;\n  border-radius: 10px;\n  font-size: 1rem;\n  font-family: inherit;\n  outline: none;\n  transition: 0.2s;\n  resize: vertical;\n  min-height: 80px;\n}\n.form-textarea:focus {\n  border-color: #16A34A;\n  box-shadow: 0 0 0 3px #dcfce7;\n}\n.icon-selector {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.icon-option {\n  width: 40px;\n  height: 40px;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  background: white;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: 0.2s;\n}\n.icon-option:hover {\n  border-color: #16A34A;\n  background: #f0fdf4;\n}\n.icon-option.selected {\n  border-color: #16A34A;\n  background: #dcfce7;\n}\n.icon-option svg {\n  width: 20px;\n  height: 20px;\n  color: #475569;\n  display: block;\n}\n.icon-option.selected svg {\n  color: #16A34A;\n}\n.modal-actions {\n  display: flex;\n  flex-direction: row;\n  justify-content: right;\n  gap: 10px;\n  margin-top: 0.5rem;\n}\n.submit-btn {\n  width: 100%;\n  background: #16A34A;\n  color: white;\n  padding: 14px;\n  border: none;\n  border-radius: 12px;\n  font-weight: 700;\n  cursor: pointer;\n  font-size: 1rem;\n  transition: 0.2s;\n}\n.submit-btn:hover {\n  background: #14532d;\n}\n.delete-btn {\n  width: 100%;\n  background: transparent;\n  color: #dc2626;\n  padding: 12px;\n  border: 1px solid #fecaca;\n  border-radius: 12px;\n  font-weight: 600;\n  cursor: pointer;\n  font-size: 0.9rem;\n  transition: 0.2s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n.delete-btn:hover {\n  background: #fef2f2;\n  border-color: #dc2626;\n}\n.delete-icon {\n  width: 18px;\n  height: 18px;\n  display: block;\n}\n.submit-btn:disabled {\n  background: #cbd5e1;\n  cursor: not-allowed;\n}\n.toggle-confirm-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1.5rem;\n  padding: 1rem 0;\n}\n.confirm-icon {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.confirm-icon.enable {\n  background: #dcfce7;\n  color: #16A34A;\n}\n.confirm-icon.disable {\n  background: #fef2f2;\n  color: #dc2626;\n}\n.confirm-icon svg {\n  width: 32px;\n  height: 32px;\n}\n.confirm-description {\n  text-align: center;\n}\n.confirm-text {\n  font-size: 1rem;\n  line-height: 1.6;\n  color: #475569;\n  margin: 0;\n}\n.page-loading-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 60vh;\n  width: 100%;\n}\n.delete-modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  animation: fadeIn 0.2s ease;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.delete-modal {\n  background: white;\n  border-radius: 16px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n  max-width: 420px;\n  width: 90%;\n  animation: slideUp 0.3s ease;\n}\n@keyframes slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.delete-modal-content {\n  padding: 2rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n}\n.delete-modal-icon {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 1.25rem;\n}\n.delete-modal-icon.warning {\n  background: #fef3c7;\n  color: #d97706;\n}\n.delete-modal-icon.danger {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.delete-modal-icon svg {\n  width: 32px;\n  height: 32px;\n}\n.delete-modal-title {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0 0 0.75rem;\n}\n.delete-modal-description {\n  font-size: 0.9rem;\n  color: #6b7280;\n  line-height: 1.6;\n  margin: 0 0 1.5rem;\n}\n.delete-modal-description strong {\n  color: #1f2937;\n}\n.confirm-word {\n  color: #dc2626;\n  background: #fee2e2;\n  padding: 0.125rem 0.5rem;\n  border-radius: 4px;\n  font-family: monospace;\n  font-size: 0.95rem;\n}\n.delete-confirm-input {\n  width: 100%;\n  padding: 0.875rem 1rem;\n  border: 2px solid #e5e7eb;\n  border-radius: 10px;\n  font-size: 1rem;\n  font-family: inherit;\n  text-align: center;\n  margin-bottom: 1.5rem;\n  transition: all 0.2s ease;\n}\n.delete-confirm-input:focus {\n  outline: none;\n  border-color: #dc2626;\n  box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);\n}\n.delete-confirm-input::placeholder {\n  color: #9ca3af;\n}\n.delete-modal-actions {\n  display: flex;\n  gap: 0.75rem;\n  width: 100%;\n}\n.delete-modal-btn {\n  flex: 1;\n  padding: 0.875rem 1.5rem;\n  border-radius: 10px;\n  font-size: 0.9rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  border: none;\n}\n.delete-modal-btn.cancel {\n  background: #f3f4f6;\n  color: #6b7280;\n}\n.delete-modal-btn.cancel:hover {\n  background: #e5e7eb;\n  color: #374151;\n}\n.delete-modal-btn.confirm {\n  background: #fef3c7;\n  color: #d97706;\n}\n.delete-modal-btn.confirm:hover {\n  background: #fde68a;\n  color: #b45309;\n}\n.delete-modal-btn.delete {\n  background: #dc2626;\n  color: white;\n}\n.delete-modal-btn.delete:hover:not(:disabled) {\n  background: #b91c1c;\n}\n.delete-modal-btn.delete:disabled {\n  background: #fca5a5;\n  cursor: not-allowed;\n}\n@media (max-width: 768px) {\n  .page-wrapper {\n    margin: -1rem;\n    padding: 1rem;\n  }\n  .config-grid {\n    grid-template-columns: 1fr;\n  }\n  .form-row {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=bonus-program-page.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BonusProgramPageComponent, { className: "BonusProgramPageComponent", filePath: "src/app/features/bonus-program/pages/bonus-program-page/bonus-program-page.component.ts", lineNumber: 1322 });
})();
export {
  BonusProgramPageComponent
};
//# sourceMappingURL=chunk-4JRKHAKP.js.map
