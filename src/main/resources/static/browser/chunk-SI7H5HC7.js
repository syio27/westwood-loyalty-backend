import {
  BonusTypesService
} from "./chunk-Y4YK5CTC.js";
import {
  AnalyticsService
} from "./chunk-HWLVB6TN.js";
import {
  LoaderComponent
} from "./chunk-5RYSXL5K.js";
import {
  PageHeaderService
} from "./chunk-AWWADESY.js";
import "./chunk-6FFMNYG3.js";
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
  ChangeDetectorRef,
  CommonModule,
  Component,
  DecimalPipe,
  NgForOf,
  NgIf,
  Router,
  catchError,
  inject,
  of,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-NKSGOSP5.js";

// src/app/features/reports/pages/bonus-type-report-page/bonus-type-report-page.component.ts
function BonusTypeReportPageComponent_option_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bt_r1 = ctx.$implicit;
    \u0275\u0275property("value", bt_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(bt_r1.name);
  }
}
function BonusTypeReportPageComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275element(1, "app-loader", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("visible", true)("overlay", false);
  }
}
function BonusTypeReportPageComponent_ng_container_25_span_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const label_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(label_r2);
  }
}
function BonusTypeReportPageComponent_ng_container_25_span_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 73);
  }
  if (rf & 2) {
    const i_r3 = ctx.index;
    \u0275\u0275styleProp("top", i_r3 / 4 * 100, "%");
  }
}
function BonusTypeReportPageComponent_ng_container_25_div_172_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 74)(1, "span", 32);
    \u0275\u0275text(2, "Retention rate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 33);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r3.formatPct(ctx_r3.report.retentionRatePercent), "%");
  }
}
function BonusTypeReportPageComponent_ng_container_25_div_173_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 74)(1, "span", 32);
    \u0275\u0275text(2, "Conversion Rate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 33);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 32);
    \u0275\u0275text(6, "CAC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 33);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r3.formatPct(ctx_r3.report.conversionRatePercent), "%");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r3.formatMoney(ctx_r3.report.cac), " \u20B8");
  }
}
function BonusTypeReportPageComponent_ng_container_25_section_174_option_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const y_r6 = ctx.$implicit;
    \u0275\u0275property("value", y_r6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(y_r6);
  }
}
function BonusTypeReportPageComponent_ng_container_25_section_174_div_13_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const label_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(label_r7);
  }
}
function BonusTypeReportPageComponent_ng_container_25_section_174_div_13_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 94);
  }
  if (rf & 2) {
    const i_r8 = ctx.index;
    \u0275\u0275styleProp("top", i_r8 / 4 * 100, "%");
  }
}
function BonusTypeReportPageComponent_ng_container_25_section_174_div_13_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 95)(1, "div", 96)(2, "div", 97);
    \u0275\u0275listener("click", function BonusTypeReportPageComponent_ng_container_25_section_174_div_13_div_8_Template_div_click_2_listener() {
      const point_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r3.selectMonth(point_r10.yearMonth));
    });
    \u0275\u0275elementStart(3, "div", 98)(4, "div", 99);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 100);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 100);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 100);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 101);
    \u0275\u0275listener("click", function BonusTypeReportPageComponent_ng_container_25_section_174_div_13_div_8_Template_div_click_12_listener() {
      const point_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r3.selectMonth(point_r10.yearMonth));
    });
    \u0275\u0275elementStart(13, "div", 98)(14, "div", 99);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 100);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 100);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 100);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 102);
    \u0275\u0275listener("click", function BonusTypeReportPageComponent_ng_container_25_section_174_div_13_div_8_Template_div_click_22_listener() {
      const point_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r3.selectMonth(point_r10.yearMonth));
    });
    \u0275\u0275elementStart(23, "div", 98)(24, "div", 99);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 100);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 100);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 100);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(32, "div", 103);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_8_0;
    let tmp_13_0;
    let tmp_16_0;
    let tmp_18_0;
    const point_r10 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275classProp("selected", ctx_r3.isMonthSelected(point_r10));
    \u0275\u0275advance();
    \u0275\u0275styleProp("height", ctx_r3.monthlyChartMax ? point_r10.avgCheckWithBonus / ctx_r3.monthlyChartMax * 100 : 0, "%");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(point_r10.month);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u0412\u044B\u0440\u0443\u0447\u043A\u0430: ", ctx_r3.formatMoneyShort((tmp_8_0 = point_r10.revenue) !== null && tmp_8_0 !== void 0 ? tmp_8_0 : 0), "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u0421\u0440\u0435\u0434\u043D\u0438\u0439 \u0447\u0435\u043A \u0441 \u0431\u043E\u043D\u0443\u0441\u043E\u043C: ", ctx_r3.formatMoneyShort(point_r10.avgCheckWithBonus), "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u0421\u0440\u0435\u0434\u043D\u0438\u0439 \u0447\u0435\u043A \u0431\u0435\u0437 \u0431\u043E\u043D\u0443\u0441\u043E\u0432: ", ctx_r3.formatMoneyShort(point_r10.avgCheckWithoutBonus), "");
    \u0275\u0275advance();
    \u0275\u0275styleProp("height", ctx_r3.monthlyChartMax ? point_r10.avgCheckWithoutBonus / ctx_r3.monthlyChartMax * 100 : 0, "%");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(point_r10.month);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u0412\u044B\u0440\u0443\u0447\u043A\u0430: ", ctx_r3.formatMoneyShort((tmp_13_0 = point_r10.revenue) !== null && tmp_13_0 !== void 0 ? tmp_13_0 : 0), "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u0421\u0440\u0435\u0434\u043D\u0438\u0439 \u0447\u0435\u043A \u0441 \u0431\u043E\u043D\u0443\u0441\u043E\u043C: ", ctx_r3.formatMoneyShort(point_r10.avgCheckWithBonus), "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u0421\u0440\u0435\u0434\u043D\u0438\u0439 \u0447\u0435\u043A \u0431\u0435\u0437 \u0431\u043E\u043D\u0443\u0441\u043E\u0432: ", ctx_r3.formatMoneyShort(point_r10.avgCheckWithoutBonus), "");
    \u0275\u0275advance();
    \u0275\u0275styleProp("height", ctx_r3.monthlyRevenueMax ? ((tmp_16_0 = point_r10.revenue) !== null && tmp_16_0 !== void 0 ? tmp_16_0 : 0) / ctx_r3.monthlyRevenueMax * 100 : 0, "%");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(point_r10.month);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u0412\u044B\u0440\u0443\u0447\u043A\u0430: ", ctx_r3.formatMoneyShort((tmp_18_0 = point_r10.revenue) !== null && tmp_18_0 !== void 0 ? tmp_18_0 : 0), "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u0421\u0440\u0435\u0434\u043D\u0438\u0439 \u0447\u0435\u043A \u0441 \u0431\u043E\u043D\u0443\u0441\u043E\u043C: ", ctx_r3.formatMoneyShort(point_r10.avgCheckWithBonus), "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u0421\u0440\u0435\u0434\u043D\u0438\u0439 \u0447\u0435\u043A \u0431\u0435\u0437 \u0431\u043E\u043D\u0443\u0441\u043E\u0432: ", ctx_r3.formatMoneyShort(point_r10.avgCheckWithoutBonus), "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(point_r10.month);
  }
}
function BonusTypeReportPageComponent_ng_container_25_section_174_div_13_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const label_r11 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(label_r11);
  }
}
function BonusTypeReportPageComponent_ng_container_25_section_174_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 83)(1, "div", 84)(2, "div", 85);
    \u0275\u0275template(3, BonusTypeReportPageComponent_ng_container_25_section_174_div_13_span_3_Template, 2, 1, "span", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 86)(5, "div", 87);
    \u0275\u0275template(6, BonusTypeReportPageComponent_ng_container_25_section_174_div_13_span_6_Template, 1, 2, "span", 88);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 89);
    \u0275\u0275template(8, BonusTypeReportPageComponent_ng_container_25_section_174_div_13_div_8_Template, 34, 21, "div", 90);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 91);
    \u0275\u0275template(10, BonusTypeReportPageComponent_ng_container_25_section_174_div_13_span_10_Template, 2, 1, "span", 51);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 92)(12, "span", 60);
    \u0275\u0275text(13, "\u0421\u0440\u0435\u0434\u043D\u0438\u0439 \u0447\u0435\u043A \u0441 \u0431\u043E\u043D\u0443\u0441\u043E\u043C");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 61);
    \u0275\u0275text(15, "\u0421\u0440\u0435\u0434\u043D\u0438\u0439 \u0447\u0435\u043A \u0431\u0435\u0437 \u0431\u043E\u043D\u0443\u0441\u043E\u0432");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 93);
    \u0275\u0275text(17, "\u0412\u044B\u0440\u0443\u0447\u043A\u0430 \u0437\u0430 \u043C\u0435\u0441\u044F\u0446");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r3.getMonthlyLeftAxisLabels());
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r3.getMonthlyLeftAxisLabels());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r3.monthlyChartData);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r3.getMonthlyRightAxisLabels());
  }
}
function BonusTypeReportPageComponent_ng_container_25_section_174_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 104);
    \u0275\u0275element(1, "app-loader", 105);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("visible", true)("overlay", false);
  }
}
function BonusTypeReportPageComponent_ng_container_25_section_174_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 75)(1, "div", 76)(2, "div", 77);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 27);
    \u0275\u0275element(4, "path", 67)(5, "path", 68)(6, "path", 69)(7, "path", 70);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "h3", 78);
    \u0275\u0275text(9, "\u0421\u0440\u0435\u0434\u043D\u0438\u0439 \u0447\u0435\u043A \u0438 \u0432\u044B\u0440\u0443\u0447\u043A\u0430 \u043F\u043E \u043C\u0435\u0441\u044F\u0446\u0430\u043C");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 79)(11, "select", 80);
    \u0275\u0275listener("ngModelChange", function BonusTypeReportPageComponent_ng_container_25_section_174_Template_select_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.onChartYearChange($event));
    });
    \u0275\u0275template(12, BonusTypeReportPageComponent_ng_container_25_section_174_option_12_Template, 2, 2, "option", 7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(13, BonusTypeReportPageComponent_ng_container_25_section_174_div_13_Template, 18, 4, "div", 81)(14, BonusTypeReportPageComponent_ng_container_25_section_174_div_14_Template, 2, 2, "div", 82);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(11);
    \u0275\u0275property("ngModel", ctx_r3.chartYear);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.availableChartYears);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.isMonthlyChartLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.isMonthlyChartLoading);
  }
}
function BonusTypeReportPageComponent_ng_container_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 19)(2, "div", 20)(3, "h2", 21);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 22);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 23)(8, "section", 24)(9, "div", 25)(10, "div", 26);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(11, "svg", 27);
    \u0275\u0275element(12, "path", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(13, "h3", 29);
    \u0275\u0275text(14, "\u0422\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u0438");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 30)(16, "div", 31)(17, "span", 32);
    \u0275\u0275text(18, "\u041A\u043E\u043B-\u0432\u043E \u0442\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u0439");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 33);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 31)(23, "span", 32);
    \u0275\u0275text(24, "\u0421\u0440\u0435\u0434\u043D\u0438\u0439 \u0447\u0435\u043A \u0441 \u0431\u043E\u043D\u0443\u0441\u043E\u043C");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 33);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 31)(28, "span", 32);
    \u0275\u0275text(29, "\u0421\u0440\u0435\u0434\u043D\u0438\u0439 \u0447\u0435\u043A \u0431\u0435\u0437 \u0431\u043E\u043D\u0443\u0441\u043E\u0432");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span", 33);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(32, "div", 34)(33, "h3", 35);
    \u0275\u0275text(34, "\u041F\u0440\u043E\u0434\u0430\u0436\u0438");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 36);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(36, "svg", 37);
    \u0275\u0275element(37, "circle", 38)(38, "circle", 39)(39, "circle", 40);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(40, "div", 41)(41, "div", 42);
    \u0275\u0275element(42, "span", 43);
    \u0275\u0275elementStart(43, "span", 44);
    \u0275\u0275text(44, "\u0421 \u0431\u043E\u043D\u0443\u0441\u0430\u043C\u0438");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "span", 45);
    \u0275\u0275text(46);
    \u0275\u0275pipe(47, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "span", 46);
    \u0275\u0275text(49);
    \u0275\u0275pipe(50, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "div", 42);
    \u0275\u0275element(52, "span", 47);
    \u0275\u0275elementStart(53, "span", 44);
    \u0275\u0275text(54, "\u0411\u0435\u0437 \u0431\u043E\u043D\u0443\u0441\u043E\u0432");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "span", 45);
    \u0275\u0275text(56);
    \u0275\u0275pipe(57, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "span", 46);
    \u0275\u0275text(59);
    \u0275\u0275pipe(60, "number");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(61, "div", 48)(62, "h3", 35);
    \u0275\u0275text(63, "\u0421\u0440\u0435\u0434\u043D\u0438\u0439 \u0447\u0435\u043A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "div", 49)(65, "div", 50);
    \u0275\u0275template(66, BonusTypeReportPageComponent_ng_container_25_span_66_Template, 2, 1, "span", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "div", 52)(68, "div", 53);
    \u0275\u0275template(69, BonusTypeReportPageComponent_ng_container_25_span_69_Template, 1, 2, "span", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "div", 55)(71, "div", 56);
    \u0275\u0275element(72, "div", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "div", 56);
    \u0275\u0275element(74, "div", 58);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(75, "div", 59)(76, "span", 60);
    \u0275\u0275text(77, "\u0421 \u0431\u043E\u043D\u0443\u0441\u043E\u043C");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "span", 61);
    \u0275\u0275text(79, "\u0411\u0435\u0437 \u0431\u043E\u043D\u0443\u0441\u0430");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(80, "div", 62)(81, "h3", 35);
    \u0275\u0275text(82, "\u0412 \u043E\u0431\u043E\u0440\u043E\u0442\u0435 / \u041F\u043E\u0442\u0440\u0430\u0447\u0435\u043D\u043E");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "div", 36);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(84, "svg", 37);
    \u0275\u0275element(85, "circle", 38)(86, "circle", 39)(87, "circle", 40);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(88, "div", 41)(89, "div", 42);
    \u0275\u0275element(90, "span", 43);
    \u0275\u0275elementStart(91, "span", 44);
    \u0275\u0275text(92, "\u0412 \u043E\u0431\u043E\u0440\u043E\u0442\u0435");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "span", 45);
    \u0275\u0275text(94);
    \u0275\u0275pipe(95, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "span", 46);
    \u0275\u0275text(97);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(98, "div", 42);
    \u0275\u0275element(99, "span", 47);
    \u0275\u0275elementStart(100, "span", 44);
    \u0275\u0275text(101, "\u041F\u043E\u0442\u0440\u0430\u0447\u0435\u043D\u043E");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(102, "span", 45);
    \u0275\u0275text(103);
    \u0275\u0275pipe(104, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(105, "span", 46);
    \u0275\u0275text(106);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(107, "div", 63)(108, "section", 24)(109, "div", 25)(110, "div", 64);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(111, "svg", 27);
    \u0275\u0275element(112, "path", 65);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(113, "h3", 29);
    \u0275\u0275text(114, "\u0411\u043E\u043D\u0443\u0441\u044B");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(115, "div", 30)(116, "div", 31)(117, "span", 32);
    \u0275\u0275text(118, "\u0421\u0443\u043C\u043C\u0430 \u0432\u044B\u0434\u0435\u043B\u0435\u043D\u043D\u044B\u0445");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(119, "span", 33);
    \u0275\u0275text(120);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(121, "div", 31)(122, "span", 32);
    \u0275\u0275text(123, "\u0412 \u043E\u0431\u043E\u0440\u043E\u0442\u0435");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(124, "span", 33);
    \u0275\u0275text(125);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(126, "div", 31)(127, "span", 32);
    \u0275\u0275text(128, "\u0421\u0433\u043E\u0440\u0435\u0432\u0448\u0438\u0435");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(129, "span", 33);
    \u0275\u0275text(130);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(131, "div", 31)(132, "span", 32);
    \u0275\u0275text(133, "\u041F\u043E\u0442\u0440\u0430\u0447\u0435\u043D\u043D\u044B\u0435");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(134, "span", 33);
    \u0275\u0275text(135);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(136, "section", 24)(137, "div", 25)(138, "div", 66);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(139, "svg", 27);
    \u0275\u0275element(140, "path", 67)(141, "path", 68)(142, "path", 69)(143, "path", 70);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(144, "h3", 29);
    \u0275\u0275text(145, "\u042D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u044C");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(146, "div", 30)(147, "div", 31)(148, "span", 32);
    \u0275\u0275text(149, "Redemption rate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(150, "span", 33);
    \u0275\u0275text(151);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(152, "div", 31)(153, "span", 32);
    \u0275\u0275text(154, "Effective discount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(155, "span", 33);
    \u0275\u0275text(156);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(157, "div", 31)(158, "span", 32);
    \u0275\u0275text(159, "Burn rate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(160, "span", 33);
    \u0275\u0275text(161);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(162, "div", 31)(163, "span", 32);
    \u0275\u0275text(164, "AOV uplift");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(165, "span", 33);
    \u0275\u0275text(166);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(167, "div", 31)(168, "span", 32);
    \u0275\u0275text(169, "Incremental revenue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(170, "span", 33);
    \u0275\u0275text(171);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(172, BonusTypeReportPageComponent_ng_container_25_div_172_Template, 5, 1, "div", 71)(173, BonusTypeReportPageComponent_ng_container_25_div_173_Template, 9, 2, "div", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275template(174, BonusTypeReportPageComponent_ng_container_25_section_174_Template, 15, 4, "section", 72);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_12_0;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r3.report.bonusTypeName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.formatPeriod(ctx_r3.report.periodFrom, ctx_r3.report.periodTo));
    \u0275\u0275advance(14);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 37, ctx_r3.displayTransactionCount));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r3.formatMoney(ctx_r3.report.avgCheckWithBonus), " \u20B8");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r3.formatMoney(ctx_r3.report.avgCheckWithoutBonus), " \u20B8");
    \u0275\u0275advance(7);
    \u0275\u0275attribute("stroke-dasharray", ctx_r3.getDonutSalesDash());
    \u0275\u0275advance();
    \u0275\u0275attribute("stroke-dasharray", ctx_r3.getDonutSalesDash())("stroke-dashoffset", ctx_r3.getDonutSalesOffset());
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(47, 39, ctx_r3.donutSalesWithPercent, "1.0-0"), "%");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(50, 42, ctx_r3.report.transactionCount));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(57, 44, ctx_r3.donutSalesWithoutPercent, "1.0-0"), "%");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(60, 47, (tmp_12_0 = ctx_r3.report.transactionCountWithoutBonus) !== null && tmp_12_0 !== void 0 ? tmp_12_0 : 0));
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r3.getAvgCheckAxisLabels());
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r3.getAvgCheckAxisLabels());
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("height", ctx_r3.report.avgCheckWithBonus / ctx_r3.maxAvgForBarRounded * 100, "%");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("height", ctx_r3.report.avgCheckWithoutBonus / ctx_r3.maxAvgForBarRounded * 100, "%");
    \u0275\u0275advance(12);
    \u0275\u0275attribute("stroke-dasharray", ctx_r3.getDonutBonusDash());
    \u0275\u0275advance();
    \u0275\u0275attribute("stroke-dasharray", ctx_r3.getDonutBonusSpentDash())("stroke-dashoffset", ctx_r3.getDonutBonusOffset());
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(95, 49, ctx_r3.donutBonusInCirculationPercent, "1.0-0"), "%");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r3.formatMoney(ctx_r3.report.inCirculation), " \u20B8");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(104, 52, 100 - ctx_r3.donutBonusInCirculationPercent, "1.0-0"), "%");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r3.formatMoney(ctx_r3.report.spentAmount), " \u20B8");
    \u0275\u0275advance(14);
    \u0275\u0275textInterpolate1("", ctx_r3.formatMoney(ctx_r3.report.totalGranted), " \u20B8");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r3.formatMoney(ctx_r3.report.inCirculation), " \u20B8");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r3.formatMoney(ctx_r3.report.burnedAmount), " \u20B8");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r3.formatMoney(ctx_r3.report.spentAmount), " \u20B8");
    \u0275\u0275advance(16);
    \u0275\u0275textInterpolate1("", ctx_r3.formatPct(ctx_r3.report.redemptionRatePercent), "%");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r3.formatPct(ctx_r3.report.effectiveDiscountPercent), "%");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r3.formatPct(ctx_r3.report.burnRatePercent), "%");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r3.formatPct(ctx_r3.report.aovUpliftPercent), "%");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r3.formatPct(ctx_r3.report.incrementalRevenuePercent), "%");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.showRetention);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.showReferral);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.monthlyChartData == null ? null : ctx_r3.monthlyChartData.length);
  }
}
function BonusTypeReportPageComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 106)(1, "p");
    \u0275\u0275text(2, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u0438\u043F \u0431\u043E\u043D\u0443\u0441\u0430 \u0434\u043B\u044F \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u0430 \u043E\u0442\u0447\u0451\u0442\u0430.");
    \u0275\u0275elementEnd()();
  }
}
function BonusTypeReportPageComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 107)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.errorMessage);
  }
}
var BonusTypeReportPageComponent = class _BonusTypeReportPageComponent {
  pageHeader = inject(PageHeaderService);
  bonusTypesService = inject(BonusTypesService);
  analyticsService = inject(AnalyticsService);
  cdr = inject(ChangeDetectorRef);
  router = inject(Router);
  route = inject(ActivatedRoute);
  bonusTypes = [];
  selectedBonusTypeId = null;
  period = "1m";
  report = null;
  /** Monthly data for the chart block only (always 12 months of chartYear). */
  monthlyChartData = null;
  isLoading = false;
  isMonthlyChartLoading = false;
  errorMessage = null;
  /** Selected month from monthly chart (click); main report then shows that month's data. */
  selectedMonthForBar = null;
  /** Year for monthly chart; only affects the "Средний чек и выручка по месяцам" block. */
  chartYear = (/* @__PURE__ */ new Date()).getFullYear();
  _initialLoadDone = false;
  get showRetention() {
    if (!this.report)
      return false;
    const type = this.getSelectedBonusType();
    return type != null && (type.type === "WELCOME" || type.type === "BIRTHDAY");
  }
  get showReferral() {
    const type = this.getSelectedBonusType();
    return type != null && type.type === "REFERRAL";
  }
  /** Для "Общая статистика" — все транзакции за период (как в главном меню). Для выбранного типа бонуса — только транзакции с этим бонусом. */
  get displayTransactionCount() {
    if (!this.report)
      return 0;
    if (this.selectedBonusTypeId == null) {
      return this.report.transactionCount + (this.report.transactionCountWithoutBonus ?? 0);
    }
    return this.report.transactionCount;
  }
  getSelectedBonusType() {
    if (this.selectedBonusTypeId == null)
      return void 0;
    return this.bonusTypes.find((bt) => bt.id === this.selectedBonusTypeId);
  }
  ngOnInit() {
    this.pageHeader.setPageHeader("\u041E\u0442\u0447\u0451\u0442 \u043F\u043E \u0442\u0438\u043F\u0430\u043C \u0431\u043E\u043D\u0443\u0441\u043E\u0432", [
      { label: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F", route: "/home" },
      { label: "\u041E\u0442\u0447\u0451\u0442 \u043F\u043E \u0442\u0438\u043F\u0430\u043C \u0431\u043E\u043D\u0443\u0441\u043E\u0432" }
    ]);
    this.applyStateFromQueryParams(this.route.snapshot.queryParams);
    this.loadBonusTypes();
  }
  applyStateFromQueryParams(params) {
    const period = params["period"];
    if (period && ["1m", "3m", "6m", "1y", "all"].includes(period)) {
      this.period = period;
    }
    const bonusType = params["bonusType"];
    if (bonusType !== void 0) {
      if (bonusType === "all" || bonusType === "") {
        this.selectedBonusTypeId = null;
      } else {
        const id = Number(bonusType);
        if (!isNaN(id))
          this.selectedBonusTypeId = id;
      }
    }
    const month = params["month"];
    if (month && /^\d{4}-\d{2}$/.test(month)) {
      this.selectedMonthForBar = month;
    }
    const year = params["year"];
    if (year) {
      const y = parseInt(year, 10);
      if (!isNaN(y) && y >= 2e3 && y <= 2100)
        this.chartYear = y;
    }
  }
  updateUrlFromState() {
    const queryParams = {
      period: this.period,
      bonusType: this.selectedBonusTypeId ?? "all",
      year: this.chartYear
    };
    if (this.selectedMonthForBar) {
      queryParams["month"] = this.selectedMonthForBar;
    } else {
      queryParams["month"] = null;
    }
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: Object.fromEntries(Object.entries(queryParams).filter(([, v]) => v != null && v !== "")),
      replaceUrl: true
    });
  }
  loadBonusTypes() {
    this.bonusTypesService.getActiveBonusTypes().pipe(catchError(() => of([]))).subscribe((list) => {
      this.bonusTypes = list;
      if (!this._initialLoadDone) {
        this._initialLoadDone = true;
        this.selectedBonusTypeId = this.selectedBonusTypeId ?? null;
        if (this.selectedMonthForBar) {
          const [y, m] = this.selectedMonthForBar.split("-").map(Number);
          const from = new Date(y, m - 1, 1, 0, 0, 0);
          const to = new Date(y, m, 0, 23, 59, 59);
          this.loadReportForRange(this.toLocalISOString(from, "00:00:00"), this.toLocalISOString(to, "23:59:59"));
        } else {
          this.loadReport();
        }
        this.loadMonthlyChartData();
      }
      this.cdr.markForCheck();
    });
  }
  onBonusTypeChange(id) {
    const num = id === "" || id === "all" ? null : Number(id);
    this.selectedBonusTypeId = num;
    this.updateUrlFromState();
    this.loadReport();
    this.loadMonthlyChartData();
  }
  onPeriodChange(p) {
    this.period = p;
    this.updateUrlFromState();
    this.loadReport();
  }
  onChartYearChange(year) {
    const y = typeof year === "string" ? parseInt(year, 10) : year;
    if (!isNaN(y)) {
      this.chartYear = y;
      this.updateUrlFromState();
      this.loadMonthlyChartData();
    }
  }
  get availableChartYears() {
    const current = (/* @__PURE__ */ new Date()).getFullYear();
    const years = [];
    for (let y = current; y >= current - 5; y--)
      years.push(y);
    return years;
  }
  /** Click on a month bar: load report for that month and update cards + charts. */
  selectMonth(yearMonth) {
    this.selectedMonthForBar = yearMonth;
    this.updateUrlFromState();
    const [y, m] = yearMonth.split("-").map(Number);
    const from = new Date(y, m - 1, 1, 0, 0, 0);
    const to = new Date(y, m, 0, 23, 59, 59);
    this.loadReportForRange(this.toLocalISOString(from, "00:00:00"), this.toLocalISOString(to, "23:59:59"));
  }
  loadReportForRange(from, to) {
    this.isLoading = true;
    this.errorMessage = null;
    this.analyticsService.getBonusTypeReport(this.selectedBonusTypeId, from, to).pipe(catchError((err) => {
      this.errorMessage = err?.error?.message || "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043E\u0442\u0447\u0451\u0442";
      return of(null);
    })).subscribe((data) => {
      this.report = data ?? null;
      this.isLoading = false;
      this.cdr.markForCheck();
    });
  }
  getPeriodRange() {
    const now = /* @__PURE__ */ new Date();
    const to = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59);
    let from;
    switch (this.period) {
      case "3m":
        from = new Date(now.getFullYear(), now.getMonth() - 3, 1, 0, 0, 0);
        break;
      case "6m":
        from = new Date(now.getFullYear(), now.getMonth() - 6, 1, 0, 0, 0);
        break;
      case "1y":
        from = new Date(now.getFullYear() - 1, now.getMonth(), 1, 0, 0, 0);
        break;
      case "all":
        from = new Date(2e3, 0, 1, 0, 0, 0);
        break;
      default:
        from = new Date(now.getFullYear(), now.getMonth(), 1, 0, 0, 0);
    }
    return {
      from: this.toLocalISOString(from, "00:00:00"),
      to: this.toLocalISOString(to, "23:59:59")
    };
  }
  /** Формат даты без перевода в UTC, чтобы первый день месяца отображался корректно (01.02, а не 31.01). */
  toLocalISOString(d, time) {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${y}-${m}-${day}T${time}`;
  }
  loadReport() {
    this.isLoading = true;
    this.errorMessage = null;
    this.selectedMonthForBar = null;
    this.updateUrlFromState();
    const { from, to } = this.getPeriodRange();
    this.analyticsService.getBonusTypeReport(this.selectedBonusTypeId, from, to).pipe(catchError((err) => {
      this.errorMessage = err?.error?.message || "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043E\u0442\u0447\u0451\u0442";
      return of(null);
    })).subscribe((data) => {
      this.report = data ?? null;
      this.isLoading = false;
      this.cdr.markForCheck();
    });
  }
  /** Load only monthly chart data (12 months of chartYear); does not change report. */
  loadMonthlyChartData() {
    this.isMonthlyChartLoading = true;
    const from = `${this.chartYear}-01-01T00:00:00`;
    const to = `${this.chartYear}-12-31T23:59:59`;
    this.analyticsService.getBonusTypeReport(this.selectedBonusTypeId, from, to).pipe(catchError(() => of(null))).subscribe((data) => {
      this.monthlyChartData = data?.monthlyData ?? null;
      this.isMonthlyChartLoading = false;
      this.cdr.markForCheck();
    });
  }
  get donutSalesWithPercent() {
    if (!this.report)
      return 0;
    const t = this.report.transactionCount + (this.report.transactionCountWithoutBonus ?? 0);
    return t === 0 ? 0 : this.report.transactionCount / t * 100;
  }
  get donutSalesWithoutPercent() {
    if (!this.report)
      return 100 - this.donutSalesWithPercent;
    const t = this.report.transactionCount + (this.report.transactionCountWithoutBonus ?? 0);
    return t === 0 ? 100 : (this.report.transactionCountWithoutBonus ?? 0) / t * 100;
  }
  getDonutSalesDash() {
    const c = 2 * Math.PI * 40;
    const len = this.donutSalesWithPercent / 100 * c;
    return `${len} ${c}`;
  }
  getDonutSalesOffset() {
    const c = 2 * Math.PI * 40;
    const len = this.donutSalesWithPercent / 100 * c;
    return -len;
  }
  get donutBonusInCirculationPercent() {
    if (!this.report)
      return 0;
    const total = Number(this.report.inCirculation) + Number(this.report.spentAmount);
    return total === 0 ? 0 : Number(this.report.inCirculation) / total * 100;
  }
  getDonutBonusDash() {
    const c = 2 * Math.PI * 40;
    const len = this.donutBonusInCirculationPercent / 100 * c;
    return `${len} ${c}`;
  }
  getDonutBonusSpentDash() {
    const c = 2 * Math.PI * 40;
    const spent = 100 - this.donutBonusInCirculationPercent;
    const len = spent / 100 * c;
    return `${len} ${c}`;
  }
  getDonutBonusOffset() {
    const c = 2 * Math.PI * 40;
    const len = this.donutBonusInCirculationPercent / 100 * c;
    return -len;
  }
  get maxAvgForBar() {
    if (!this.report)
      return 100;
    return Math.max(Number(this.report.avgCheckWithBonus) || 0, Number(this.report.avgCheckWithoutBonus) || 0, 1);
  }
  get maxAvgForBarRounded() {
    return this.niceRoundMax(this.maxAvgForBar) || 100;
  }
  getAvgCheckAxisLabels() {
    const max = this.maxAvgForBarRounded || 100;
    const labels = [];
    for (let i = 4; i >= 0; i--) {
      const v = Math.round(max * i / 4);
      labels.push(this.formatYAxisValue(v) + " \u20B8");
    }
    return labels;
  }
  /** Rounded max for axis scale (like main menu). */
  niceRoundMax(value) {
    if (value <= 0)
      return 100;
    const order = Math.pow(10, Math.floor(Math.log10(value)));
    const normalized = value / order;
    const nice = normalized <= 1 ? 1 : normalized <= 2 ? 2 : normalized <= 5 ? 5 : 10;
    return Math.ceil(nice * order / 1e3) * 1e3 || 100;
  }
  get monthlyChartMax() {
    if (!this.monthlyChartData?.length)
      return 100;
    let m = 0;
    for (const d of this.monthlyChartData) {
      m = Math.max(m, d.avgCheckWithBonus ?? 0, d.avgCheckWithoutBonus ?? 0);
    }
    return this.niceRoundMax(m) || 100;
  }
  get monthlyRevenueMax() {
    if (!this.monthlyChartData?.length)
      return 1;
    let m = 0;
    for (const d of this.monthlyChartData) {
      m = Math.max(m, d.revenue ?? 0);
    }
    return this.niceRoundMax(m) || 1;
  }
  /** Axis labels for left (avg check) - dynamic rounded like main menu. */
  getMonthlyLeftAxisLabels() {
    const max = this.monthlyChartMax || 100;
    const labels = [];
    for (let i = 4; i >= 0; i--) {
      const v = Math.round(max * i / 4);
      labels.push(this.formatYAxisValue(v) + " \u20B8");
    }
    return labels;
  }
  getMonthlyRightAxisLabels() {
    const max = this.monthlyRevenueMax || 1;
    const labels = [];
    for (let i = 4; i >= 0; i--) {
      const v = Math.round(max * i / 4);
      labels.push(this.formatYAxisValue(v) + " \u20B8");
    }
    return labels;
  }
  formatYAxisValue(value) {
    if (value >= 1e6) {
      const millions = value / 1e6;
      const str = millions % 1 === 0 ? `${millions}` : millions.toFixed(1);
      return `${str.replace(".", ",")} \u043C\u043B\u043D`;
    }
    if (value >= 1e3) {
      const thousands = value / 1e3;
      const str = thousands % 1 === 0 ? `${thousands}` : thousands.toFixed(1);
      return `${str.replace(".", ",")} \u0442\u044B\u0441`;
    }
    return value.toLocaleString("ru-RU");
  }
  formatMoney(value) {
    if (value == null || isNaN(value))
      return "0";
    return value.toLocaleString("ru-RU", { minimumFractionDigits: 0, maximumFractionDigits: 0 });
  }
  /** Rounded short format for tooltips (like main menu). */
  formatMoneyShort(value) {
    if (value == null || isNaN(value))
      return "0";
    if (value >= 1e6) {
      const m = value / 1e6;
      return (m % 1 === 0 ? m : m.toFixed(1)) + " \u043C\u043B\u043D \u20B8";
    }
    if (value >= 1e3) {
      const t = value / 1e3;
      return (t % 1 === 0 ? t : t.toFixed(1)) + " \u0442\u044B\u0441 \u20B8";
    }
    return value.toLocaleString("ru-RU") + " \u20B8";
  }
  formatPct(value) {
    if (value == null || isNaN(value))
      return "\u2014";
    return value.toFixed(1);
  }
  formatPeriod(from, to) {
    if (!from || !to)
      return "";
    const d1 = new Date(from);
    const d2 = new Date(to);
    return `${d1.toLocaleDateString("ru-RU")} \u2014 ${d2.toLocaleDateString("ru-RU")}`;
  }
  isMonthSelected(point) {
    return this.selectedMonthForBar === point.yearMonth;
  }
  static \u0275fac = function BonusTypeReportPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BonusTypeReportPageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BonusTypeReportPageComponent, selectors: [["app-bonus-type-report-page"]], decls: 28, vars: 7, consts: [[1, "report-page"], [1, "report-header"], [1, "report-controls"], [1, "control-group"], [1, "control-label"], [1, "control-select", 3, "ngModelChange", "ngModel"], ["value", "all"], [3, "value", 4, "ngFor", "ngForOf"], ["value", "1m"], ["value", "3m"], ["value", "6m"], ["value", "1y"], ["class", "page-loading-container", 4, "ngIf"], [4, "ngIf"], ["class", "report-empty", 4, "ngIf"], ["class", "report-error", 4, "ngIf"], [3, "value"], [1, "page-loading-container"], ["type", "logo", "size", "large", 3, "visible", "overlay"], [1, "report-content"], [1, "report-title-row"], [1, "report-title"], [1, "report-period"], [1, "report-card-groups", "report-row-one"], [1, "report-card-group"], [1, "card-group-header"], [1, "card-group-icon", "card-group-icon-transactions"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5"], ["d", "M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"], [1, "card-group-title"], [1, "metric-list"], [1, "metric-row"], [1, "metric-label"], [1, "metric-value"], [1, "report-chart-card", "donut-chart-card"], [1, "chart-title"], [1, "donut-container"], ["viewBox", "0 0 100 100", "preserveAspectRatio", "xMidYMid meet", 1, "donut-chart"], ["cx", "50", "cy", "50", "r", "40", "fill", "none", "stroke", "#94a3b8", "stroke-width", "16"], ["cx", "50", "cy", "50", "r", "40", "fill", "none", "stroke", "#22c55e", "stroke-width", "16", "stroke-dashoffset", "0", "transform", "rotate(-90 50 50)"], ["cx", "50", "cy", "50", "r", "40", "fill", "none", "stroke", "#94a3b8", "stroke-width", "16", "transform", "rotate(-90 50 50)"], [1, "donut-legend", "donut-legend-right"], [1, "legend-item"], [1, "legend-color", "loyalty"], [1, "legend-label"], [1, "legend-value"], [1, "legend-count"], [1, "legend-color", "non-loyalty"], [1, "report-chart-card", "avg-check-chart-card"], [1, "avg-check-chart-inner"], [1, "avg-check-y-axis"], [4, "ngFor", "ngForOf"], [1, "avg-check-chart-area"], ["aria-hidden", "true", 1, "avg-check-grid"], ["class", "avg-check-grid-line", 3, "top", 4, "ngFor", "ngForOf"], [1, "avg-check-bars-row"], [1, "avg-check-bar-track"], [1, "avg-check-bar-fill", "with-bonus"], [1, "avg-check-bar-fill", "without-bonus"], [1, "avg-check-legend-inline"], [1, "leg", "green"], [1, "leg", "grey"], [1, "report-chart-card", "donut-chart-card", "donut-in-circulation"], [1, "report-card-groups", "report-row-two"], [1, "card-group-icon", "card-group-icon-bonus"], ["d", "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"], [1, "card-group-icon", "card-group-icon-kpi"], ["d", "M3 3v18h18"], ["d", "M18 17V9"], ["d", "M13 17V5"], ["d", "M8 17v-3"], ["class", "block-extra", 4, "ngIf"], ["class", "report-block monthly-block report-monthly-inline", 4, "ngIf"], [1, "avg-check-grid-line"], [1, "block-extra"], [1, "report-block", "monthly-block", "report-monthly-inline"], [1, "block-header"], [1, "block-icon", "block-icon-chart"], [1, "block-title"], [1, "month-chart-year-select"], [1, "control-select", "year-select", 3, "ngModelChange", "ngModel"], ["class", "monthly-chart", 4, "ngIf"], ["class", "monthly-chart-loading", 4, "ngIf"], [1, "monthly-chart"], [1, "monthly-chart-inner"], [1, "monthly-y-axis-left"], [1, "monthly-chart-area"], ["aria-hidden", "true", 1, "monthly-chart-grid"], ["class", "monthly-grid-line", 3, "top", 4, "ngFor", "ngForOf"], [1, "monthly-bars"], ["class", "month-cell", 4, "ngFor", "ngForOf"], [1, "monthly-y-axis-right"], [1, "monthly-legend"], [1, "leg", "blue"], [1, "monthly-grid-line"], [1, "month-cell"], [1, "month-bars-group"], [1, "month-bar-clickable", "with-bonus", 3, "click"], [1, "month-bar-tooltip"], [1, "tooltip-title"], [1, "tooltip-row"], [1, "month-bar-clickable", "without-bonus", 3, "click"], [1, "month-bar-clickable", "revenue", 3, "click"], [1, "month-label"], [1, "monthly-chart-loading"], ["type", "logo", "size", "small", 3, "visible", "overlay"], [1, "report-empty"], [1, "report-error"]], template: function BonusTypeReportPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "label", 4);
      \u0275\u0275text(5, "\u0422\u0438\u043F \u0431\u043E\u043D\u0443\u0441\u0430");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "select", 5);
      \u0275\u0275listener("ngModelChange", function BonusTypeReportPageComponent_Template_select_ngModelChange_6_listener($event) {
        return ctx.onBonusTypeChange($event);
      });
      \u0275\u0275elementStart(7, "option", 6);
      \u0275\u0275text(8, "\u041E\u0431\u0449\u0430\u044F \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430");
      \u0275\u0275elementEnd();
      \u0275\u0275template(9, BonusTypeReportPageComponent_option_9_Template, 2, 2, "option", 7);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 3)(11, "label", 4);
      \u0275\u0275text(12, "\u041F\u0435\u0440\u0438\u043E\u0434");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "select", 5);
      \u0275\u0275listener("ngModelChange", function BonusTypeReportPageComponent_Template_select_ngModelChange_13_listener($event) {
        return ctx.onPeriodChange($event);
      });
      \u0275\u0275elementStart(14, "option", 8);
      \u0275\u0275text(15, "\u0417\u0430 \u043C\u0435\u0441\u044F\u0446");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "option", 9);
      \u0275\u0275text(17, "\u0417\u0430 3 \u043C\u0435\u0441\u044F\u0446\u0430");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "option", 10);
      \u0275\u0275text(19, "\u0417\u0430 6 \u043C\u0435\u0441\u044F\u0446\u0435\u0432");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "option", 11);
      \u0275\u0275text(21, "\u0417\u0430 \u0433\u043E\u0434");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "option", 6);
      \u0275\u0275text(23, "\u0417\u0430 \u0432\u0441\u0435 \u0432\u0440\u0435\u043C\u044F");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275template(24, BonusTypeReportPageComponent_div_24_Template, 2, 2, "div", 12)(25, BonusTypeReportPageComponent_ng_container_25_Template, 175, 55, "ng-container", 13)(26, BonusTypeReportPageComponent_div_26_Template, 3, 0, "div", 14)(27, BonusTypeReportPageComponent_div_27_Template, 3, 1, "div", 15);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275advance(6);
      \u0275\u0275property("ngModel", (tmp_0_0 = ctx.selectedBonusTypeId) !== null && tmp_0_0 !== void 0 ? tmp_0_0 : "all");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.bonusTypes);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngModel", ctx.period);
      \u0275\u0275advance(11);
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.report);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && !ctx.report && !ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, DecimalPipe, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgModel, LoaderComponent], styles: ['\n\n.report-page[_ngcontent-%COMP%] {\n  padding: 0 2rem;\n  width: 100%;\n  max-width: none;\n}\n@media (max-width: 768px) {\n  .report-page[_ngcontent-%COMP%] {\n    padding: 0 1rem;\n  }\n}\n.report-header[_ngcontent-%COMP%] {\n  margin-bottom: 1.25rem;\n}\n.report-controls[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1.25rem;\n  align-items: flex-end;\n}\n.control-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.35rem;\n}\n.control-label[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 600;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.control-select[_ngcontent-%COMP%] {\n  min-width: 200px;\n  padding: 0.5rem 0.75rem;\n  font-size: 0.875rem;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  background: #fff;\n  color: #0f172a;\n  cursor: pointer;\n}\n.control-select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #22c55e;\n  box-shadow: 0 0 0 2px rgba(34, 197, 94, 0.1);\n}\n.page-loading-container[_ngcontent-%COMP%] {\n  min-height: 200px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.report-title-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 1rem;\n  margin-bottom: 1.25rem;\n  flex-wrap: wrap;\n}\n.report-period[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #0f172a;\n  margin: 0;\n}\n.report-title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n}\n.report-card-groups[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  gap: 1rem;\n  margin-bottom: 1.25rem;\n}\n.report-row-one[_ngcontent-%COMP%] {\n  flex-wrap: nowrap;\n}\n.report-row-one[_ngcontent-%COMP%]   .report-card-group[_ngcontent-%COMP%], \n.report-row-one[_ngcontent-%COMP%]   .report-chart-card[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  max-width: none;\n}\n.report-row-one[_ngcontent-%COMP%]   .report-chart-card[_ngcontent-%COMP%] {\n  width: auto;\n}\n.report-row-two[_ngcontent-%COMP%] {\n  flex-wrap: nowrap;\n  align-items: stretch;\n}\n.report-row-two[_ngcontent-%COMP%]   .report-card-group[_ngcontent-%COMP%] {\n  flex: 0 1 280px;\n  min-width: 0;\n}\n.report-row-two[_ngcontent-%COMP%]   .report-block.monthly-block.report-monthly-inline[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  margin-bottom: 0;\n}\n@media (max-width: 1024px) {\n  .report-card-groups[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .report-row-one[_ngcontent-%COMP%]   .report-card-group[_ngcontent-%COMP%], \n   .report-row-one[_ngcontent-%COMP%]   .report-chart-card[_ngcontent-%COMP%] {\n    flex: 1 1 200px;\n  }\n  .report-row-two[_ngcontent-%COMP%]   .report-block.monthly-block[_ngcontent-%COMP%] {\n    flex: 1 1 100%;\n  }\n}\n.report-card-group[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  background: #fff;\n  border-radius: 14px;\n  padding: 1rem 1.25rem;\n  border: 1px solid #e5e7eb;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n}\n.report-card-group[_ngcontent-%COMP%]   .card-group-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-bottom: 0.75rem;\n  padding-bottom: 0.5rem;\n  border-bottom: 1px solid #f1f5f9;\n}\n.report-card-group[_ngcontent-%COMP%]   .card-group-icon[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.report-card-group[_ngcontent-%COMP%]   .card-group-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n}\n.card-group-icon-transactions[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #dcfce7 0%,\n      #bbf7d0 100%);\n  color: #15803d;\n}\n.card-group-icon-bonus[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #fef3c7 0%,\n      #fde68a 100%);\n  color: #b45309;\n}\n.card-group-icon-kpi[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #e0e7ff 0%,\n      #c7d2fe 100%);\n  color: #4338ca;\n}\n.report-card-group[_ngcontent-%COMP%]   .card-group-title[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n}\n.report-card-group[_ngcontent-%COMP%]   .metric-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.35rem;\n}\n.report-card-group[_ngcontent-%COMP%]   .metric-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  gap: 0.5rem;\n  font-size: 0.8125rem;\n}\n.report-card-group[_ngcontent-%COMP%]   .metric-label[_ngcontent-%COMP%] {\n  color: #64748b;\n  flex-shrink: 0;\n}\n.report-card-group[_ngcontent-%COMP%]   .metric-value[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.9375rem;\n  color: #0f172a;\n}\n.report-card-group[_ngcontent-%COMP%]   .block-extra[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n  margin-top: 0.5rem;\n  padding-top: 0.5rem;\n  border-top: 1px solid #f1f5f9;\n  font-size: 0.8125rem;\n}\n.report-chart-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  padding: 1rem 1.25rem;\n  border: 1px solid #e5e7eb;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.report-chart-card[_ngcontent-%COMP%]   .chart-title[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #0f172a;\n  margin: 0 0 0.75rem 0;\n}\n.report-chart-card[_ngcontent-%COMP%]   .donut-container[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 160px;\n}\n.report-chart-card[_ngcontent-%COMP%]   .donut-chart[_ngcontent-%COMP%] {\n  width: 140px;\n  height: 140px;\n  display: block;\n}\n.donut-legend-right[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n  padding-top: 0.5rem;\n  font-size: 0.8125rem;\n}\n.donut-legend-right[_ngcontent-%COMP%]   .legend-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n}\n.donut-legend-right[_ngcontent-%COMP%]   .legend-color[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 2px;\n  flex-shrink: 0;\n}\n.donut-legend-right[_ngcontent-%COMP%]   .legend-color.loyalty[_ngcontent-%COMP%] {\n  background: #22c55e;\n}\n.donut-legend-right[_ngcontent-%COMP%]   .legend-color.non-loyalty[_ngcontent-%COMP%] {\n  background: #94a3b8;\n}\n.donut-legend-right[_ngcontent-%COMP%]   .legend-label[_ngcontent-%COMP%] {\n  color: #64748b;\n  flex-shrink: 0;\n}\n.donut-legend-right[_ngcontent-%COMP%]   .legend-value[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 0.9375rem;\n  color: #0f172a;\n}\n.donut-legend-right[_ngcontent-%COMP%]   .legend-count[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-size: 0.8125rem;\n  color: #64748b;\n  font-weight: 500;\n}\n.avg-check-chart-card[_ngcontent-%COMP%] {\n  min-height: 220px;\n}\n.avg-check-chart-inner[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  min-height: 180px;\n  align-items: stretch;\n}\n.avg-check-y-axis[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 160px;\n  padding-right: 0.5rem;\n  font-size: 0.65rem;\n  font-weight: 600;\n  color: #94a3b8;\n  text-align: right;\n  flex-shrink: 0;\n}\n.avg-check-chart-area[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  position: relative;\n  height: 160px;\n}\n.avg-check-grid[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  height: 160px;\n  pointer-events: none;\n}\n.avg-check-grid-line[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  height: 1px;\n  background: #e2e8f0;\n  opacity: 0.5;\n}\n.avg-check-grid-line[_ngcontent-%COMP%]:nth-child(1) {\n  top: 0;\n}\n.avg-check-grid-line[_ngcontent-%COMP%]:nth-child(2) {\n  top: 25%;\n}\n.avg-check-grid-line[_ngcontent-%COMP%]:nth-child(3) {\n  top: 50%;\n}\n.avg-check-grid-line[_ngcontent-%COMP%]:nth-child(4) {\n  top: 75%;\n}\n.avg-check-grid-line[_ngcontent-%COMP%]:nth-child(5) {\n  top: 100%;\n}\n.avg-check-bars-row[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  align-items: flex-end;\n  gap: 8px;\n  height: 160px;\n  padding: 0 0.5rem;\n}\n.avg-check-bar-track[_ngcontent-%COMP%] {\n  flex: 1;\n  max-width: 48px;\n  height: 100%;\n  display: flex;\n  align-items: flex-end;\n  border-radius: 4px 4px 0 0;\n  overflow: hidden;\n}\n.avg-check-bar-fill[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 4px 4px 0 0;\n  min-height: 4px;\n  transition: height 0.3s ease;\n}\n.avg-check-bar-fill.with-bonus[_ngcontent-%COMP%] {\n  background: #22c55e;\n}\n.avg-check-bar-fill.without-bonus[_ngcontent-%COMP%] {\n  background: #94a3b8;\n}\n.avg-check-legend-inline[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  margin-top: 0.5rem;\n  padding-top: 0.5rem;\n  border-top: 1px solid #f1f5f9;\n  font-size: 0.75rem;\n  color: #64748b;\n}\n.avg-check-legend-inline[_ngcontent-%COMP%]   .leg.green[_ngcontent-%COMP%]::before {\n  content: "";\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  border-radius: 2px;\n  background: #22c55e;\n  margin-right: 0.35rem;\n  vertical-align: middle;\n}\n.avg-check-legend-inline[_ngcontent-%COMP%]   .leg.grey[_ngcontent-%COMP%]::before {\n  content: "";\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  border-radius: 2px;\n  background: #94a3b8;\n  margin-right: 0.35rem;\n  vertical-align: middle;\n}\n.donut-in-circulation[_ngcontent-%COMP%]   .donut-container[_ngcontent-%COMP%] {\n  min-height: 140px;\n}\n.donut-in-circulation[_ngcontent-%COMP%]   .donut-chart[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n}\n.report-block[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 14px;\n  margin-bottom: 1.25rem;\n  overflow: visible;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n}\n.block-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 1rem 1.25rem;\n  border-bottom: 1px solid #f1f5f9;\n}\n.block-icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.block-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n.block-icon-chart[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #e0e7ff 0%,\n      #c7d2fe 100%);\n  color: #4338ca;\n}\n.block-title[_ngcontent-%COMP%] {\n  font-size: 0.9375rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n  flex: 1;\n}\n.month-chart-year-select[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.year-select[_ngcontent-%COMP%] {\n  min-width: 90px;\n  padding: 0.35rem 0.5rem;\n  font-size: 0.8125rem;\n}\n.monthly-chart[_ngcontent-%COMP%] {\n  padding: 1rem 1.25rem;\n  width: 100%;\n}\n.monthly-chart-inner[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  min-height: 280px;\n}\n.monthly-y-axis-left[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 64px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding-right: 0.5rem;\n  font-size: 0.65rem;\n  font-weight: 600;\n  color: #94a3b8;\n  text-align: right;\n}\n.monthly-chart-area[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n}\n.monthly-chart-grid[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  height: 200px;\n  pointer-events: none;\n}\n.monthly-grid-line[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  height: 1px;\n  background: #e2e8f0;\n  opacity: 0.5;\n}\n.monthly-grid-line[_ngcontent-%COMP%]:nth-child(1) {\n  top: 0;\n}\n.monthly-grid-line[_ngcontent-%COMP%]:nth-child(2) {\n  top: 25%;\n}\n.monthly-grid-line[_ngcontent-%COMP%]:nth-child(3) {\n  top: 50%;\n}\n.monthly-grid-line[_ngcontent-%COMP%]:nth-child(4) {\n  top: 75%;\n}\n.monthly-grid-line[_ngcontent-%COMP%]:nth-child(5) {\n  top: 100%;\n}\n.monthly-bars[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 2px;\n  flex: 1;\n  min-height: 200px;\n  padding: 0.5rem 0 1rem 0;\n  position: relative;\n  z-index: 1;\n}\n.month-cell[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.35rem;\n  padding: 0.2rem;\n}\n.month-cell[_ngcontent-%COMP%]   .month-label[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  color: #64748b;\n  text-align: center;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 100%;\n  order: 2;\n}\n.month-bars-group[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 2px;\n  align-items: flex-end;\n  height: 200px;\n  width: 100%;\n  max-width: 48px;\n  order: 1;\n}\n.month-bar-clickable[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 10px;\n  border-radius: 3px 3px 0 0;\n  min-height: 4px;\n  transition: height 0.2s ease, opacity 0.2s;\n  cursor: pointer;\n  position: relative;\n}\n.month-bars-group.selected[_ngcontent-%COMP%]   .month-bar-clickable.with-bonus[_ngcontent-%COMP%], \n.month-bars-group.selected[_ngcontent-%COMP%]   .month-bar-clickable.without-bonus[_ngcontent-%COMP%], \n.month-bars-group.selected[_ngcontent-%COMP%]   .month-bar-clickable.revenue[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.15);\n}\n.month-bar-clickable[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n.month-bar-clickable.with-bonus[_ngcontent-%COMP%] {\n  background: #22c55e;\n}\n.month-bar-clickable.without-bonus[_ngcontent-%COMP%] {\n  background: #94a3b8;\n}\n.month-bar-clickable.revenue[_ngcontent-%COMP%] {\n  background: #3b82f6;\n}\n.month-bar-tooltip[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 100%;\n  left: 50%;\n  transform: translateX(-50%) translateY(-6px);\n  background: #1f2937;\n  color: #fff;\n  padding: 0.5rem 0.65rem;\n  border-radius: 8px;\n  font-size: 0.7rem;\n  white-space: nowrap;\n  z-index: 9999;\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity 0.15s, transform 0.15s;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n}\n.month-bar-clickable[_ngcontent-%COMP%]:hover   .month-bar-tooltip[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateX(-50%) translateY(-4px);\n}\n.month-bar-tooltip[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  margin-left: -6px;\n  border: 6px solid transparent;\n  border-top-color: #1f2937;\n}\n.tooltip-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  margin-bottom: 0.25rem;\n  padding-bottom: 0.2rem;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n  font-size: 0.75rem;\n}\n.tooltip-row[_ngcontent-%COMP%] {\n  margin-top: 0.15rem;\n  font-size: 0.7rem;\n}\n.monthly-y-axis-right[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 64px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding-left: 0.5rem;\n  font-size: 0.65rem;\n  font-weight: 600;\n  color: #94a3b8;\n  text-align: left;\n}\n.monthly-legend[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1.25rem;\n  font-size: 0.7rem;\n  margin-top: 0.75rem;\n  padding-top: 0.5rem;\n  border-top: 1px solid #f1f5f9;\n}\n.monthly-legend[_ngcontent-%COMP%]   .leg[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.35rem;\n}\n.monthly-legend[_ngcontent-%COMP%]   .leg.green[_ngcontent-%COMP%]::before {\n  content: "";\n  width: 10px;\n  height: 10px;\n  border-radius: 2px;\n  background: #22c55e;\n}\n.monthly-legend[_ngcontent-%COMP%]   .leg.grey[_ngcontent-%COMP%]::before {\n  content: "";\n  width: 10px;\n  height: 10px;\n  border-radius: 2px;\n  background: #94a3b8;\n}\n.monthly-legend[_ngcontent-%COMP%]   .leg.blue[_ngcontent-%COMP%]::before {\n  content: "";\n  width: 10px;\n  height: 10px;\n  border-radius: 2px;\n  background: #3b82f6;\n}\n.monthly-chart-loading[_ngcontent-%COMP%] {\n  padding: 2rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 200px;\n}\n.report-empty[_ngcontent-%COMP%], \n.report-error[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  text-align: center;\n  font-size: 0.875rem;\n  color: #64748b;\n  background: #f8fafc;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.report-error[_ngcontent-%COMP%] {\n  color: #dc2626;\n  background: #fef2f2;\n  border-color: #fecaca;\n}\n/*# sourceMappingURL=bonus-type-report-page.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BonusTypeReportPageComponent, [{
    type: Component,
    args: [{ selector: "app-bonus-type-report-page", standalone: true, imports: [CommonModule, FormsModule, LoaderComponent], template: `<div class="report-page">
  <div class="report-header">
    <div class="report-controls">
      <div class="control-group">
        <label class="control-label">\u0422\u0438\u043F \u0431\u043E\u043D\u0443\u0441\u0430</label>
        <select class="control-select" [ngModel]="selectedBonusTypeId ?? 'all'" (ngModelChange)="onBonusTypeChange($event)">
          <option value="all">\u041E\u0431\u0449\u0430\u044F \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430</option>
          <option *ngFor="let bt of bonusTypes" [value]="bt.id">{{ bt.name }}</option>
        </select>
      </div>
      <div class="control-group">
        <label class="control-label">\u041F\u0435\u0440\u0438\u043E\u0434</label>
        <select class="control-select" [ngModel]="period" (ngModelChange)="onPeriodChange($event)">
          <option value="1m">\u0417\u0430 \u043C\u0435\u0441\u044F\u0446</option>
          <option value="3m">\u0417\u0430 3 \u043C\u0435\u0441\u044F\u0446\u0430</option>
          <option value="6m">\u0417\u0430 6 \u043C\u0435\u0441\u044F\u0446\u0435\u0432</option>
          <option value="1y">\u0417\u0430 \u0433\u043E\u0434</option>
          <option value="all">\u0417\u0430 \u0432\u0441\u0435 \u0432\u0440\u0435\u043C\u044F</option>
        </select>
      </div>
    </div>
  </div>

  <div class="page-loading-container" *ngIf="isLoading">
    <app-loader [visible]="true" [overlay]="false" type="logo" size="large"></app-loader>
  </div>

  <ng-container *ngIf="!isLoading && report">
    <div class="report-content">
      <div class="report-title-row">
        <h2 class="report-title">{{ report.bonusTypeName }}</h2>
        <p class="report-period">{{ formatPeriod(report.periodFrom, report.periodTo) }}</p>
      </div>

      <!-- Row 1: \u0422\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u0438 | \u041F\u0440\u043E\u0434\u0430\u0436\u0438 | \u0421\u0440\u0435\u0434\u043D\u0438\u0439 \u0447\u0435\u043A | \u0412 \u043E\u0431\u043E\u0440\u043E\u0442\u0435/\u041F\u043E\u0442\u0440\u0430\u0447\u0435\u043D\u043E (one row) -->
      <div class="report-card-groups report-row-one">
        <section class="report-card-group">
          <div class="card-group-header">
            <div class="card-group-icon card-group-icon-transactions">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>
            </div>
            <h3 class="card-group-title">\u0422\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u0438</h3>
          </div>
          <div class="metric-list">
            <div class="metric-row">
              <span class="metric-label">\u041A\u043E\u043B-\u0432\u043E \u0442\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u0439</span>
              <span class="metric-value">{{ displayTransactionCount | number }}</span>
            </div>
            <div class="metric-row">
              <span class="metric-label">\u0421\u0440\u0435\u0434\u043D\u0438\u0439 \u0447\u0435\u043A \u0441 \u0431\u043E\u043D\u0443\u0441\u043E\u043C</span>
              <span class="metric-value">{{ formatMoney(report.avgCheckWithBonus) }} \u20B8</span>
            </div>
            <div class="metric-row">
              <span class="metric-label">\u0421\u0440\u0435\u0434\u043D\u0438\u0439 \u0447\u0435\u043A \u0431\u0435\u0437 \u0431\u043E\u043D\u0443\u0441\u043E\u0432</span>
              <span class="metric-value">{{ formatMoney(report.avgCheckWithoutBonus) }} \u20B8</span>
            </div>
          </div>
        </section>
        <div class="report-chart-card donut-chart-card">
          <h3 class="chart-title">\u041F\u0440\u043E\u0434\u0430\u0436\u0438</h3>
          <div class="donut-container">
            <svg class="donut-chart" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
              <circle cx="50" cy="50" r="40" fill="none" stroke="#94a3b8" stroke-width="16"/>
              <circle cx="50" cy="50" r="40" fill="none" stroke="#22c55e" stroke-width="16"
                [attr.stroke-dasharray]="getDonutSalesDash()" stroke-dashoffset="0" transform="rotate(-90 50 50)"/>
              <circle cx="50" cy="50" r="40" fill="none" stroke="#94a3b8" stroke-width="16"
                [attr.stroke-dasharray]="getDonutSalesDash()" [attr.stroke-dashoffset]="getDonutSalesOffset()" transform="rotate(-90 50 50)"/>
            </svg>
          </div>
          <div class="donut-legend donut-legend-right">
            <div class="legend-item">
              <span class="legend-color loyalty"></span>
              <span class="legend-label">\u0421 \u0431\u043E\u043D\u0443\u0441\u0430\u043C\u0438</span>
              <span class="legend-value">{{ donutSalesWithPercent | number:'1.0-0' }}%</span>
              <span class="legend-count">{{ report.transactionCount | number }}</span>
            </div>
            <div class="legend-item">
              <span class="legend-color non-loyalty"></span>
              <span class="legend-label">\u0411\u0435\u0437 \u0431\u043E\u043D\u0443\u0441\u043E\u0432</span>
              <span class="legend-value">{{ donutSalesWithoutPercent | number:'1.0-0' }}%</span>
              <span class="legend-count">{{ (report.transactionCountWithoutBonus ?? 0) | number }}</span>
            </div>
          </div>
        </div>
        <div class="report-chart-card avg-check-chart-card">
          <h3 class="chart-title">\u0421\u0440\u0435\u0434\u043D\u0438\u0439 \u0447\u0435\u043A</h3>
          <div class="avg-check-chart-inner">
            <div class="avg-check-y-axis">
              <span *ngFor="let label of getAvgCheckAxisLabels()">{{ label }}</span>
            </div>
            <div class="avg-check-chart-area">
              <div class="avg-check-grid" aria-hidden="true">
                <span *ngFor="let label of getAvgCheckAxisLabels(); let i = index" class="avg-check-grid-line" [style.top.%]="(i / 4) * 100"></span>
              </div>
              <div class="avg-check-bars-row">
                <div class="avg-check-bar-track">
                  <div class="avg-check-bar-fill with-bonus" [style.height.%]="(report.avgCheckWithBonus / maxAvgForBarRounded) * 100"></div>
                </div>
                <div class="avg-check-bar-track">
                  <div class="avg-check-bar-fill without-bonus" [style.height.%]="(report.avgCheckWithoutBonus / maxAvgForBarRounded) * 100"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="avg-check-legend-inline">
            <span class="leg green">\u0421 \u0431\u043E\u043D\u0443\u0441\u043E\u043C</span>
            <span class="leg grey">\u0411\u0435\u0437 \u0431\u043E\u043D\u0443\u0441\u0430</span>
          </div>
        </div>
        <div class="report-chart-card donut-chart-card donut-in-circulation">
          <h3 class="chart-title">\u0412 \u043E\u0431\u043E\u0440\u043E\u0442\u0435 / \u041F\u043E\u0442\u0440\u0430\u0447\u0435\u043D\u043E</h3>
          <div class="donut-container">
            <svg class="donut-chart" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
              <circle cx="50" cy="50" r="40" fill="none" stroke="#94a3b8" stroke-width="16"/>
              <circle cx="50" cy="50" r="40" fill="none" stroke="#22c55e" stroke-width="16"
                [attr.stroke-dasharray]="getDonutBonusDash()" stroke-dashoffset="0" transform="rotate(-90 50 50)"/>
              <circle cx="50" cy="50" r="40" fill="none" stroke="#94a3b8" stroke-width="16"
                [attr.stroke-dasharray]="getDonutBonusSpentDash()" [attr.stroke-dashoffset]="getDonutBonusOffset()" transform="rotate(-90 50 50)"/>
            </svg>
          </div>
          <div class="donut-legend donut-legend-right">
            <div class="legend-item">
              <span class="legend-color loyalty"></span>
              <span class="legend-label">\u0412 \u043E\u0431\u043E\u0440\u043E\u0442\u0435</span>
              <span class="legend-value">{{ donutBonusInCirculationPercent | number:'1.0-0' }}%</span>
              <span class="legend-count">{{ formatMoney(report.inCirculation) }} \u20B8</span>
            </div>
            <div class="legend-item">
              <span class="legend-color non-loyalty"></span>
              <span class="legend-label">\u041F\u043E\u0442\u0440\u0430\u0447\u0435\u043D\u043E</span>
              <span class="legend-value">{{ 100 - donutBonusInCirculationPercent | number:'1.0-0' }}%</span>
              <span class="legend-count">{{ formatMoney(report.spentAmount) }} \u20B8</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Row 2: \u0411\u043E\u043D\u0443\u0441\u044B | \u042D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u044C | \u0421\u0440\u0435\u0434\u043D\u0438\u0439 \u0447\u0435\u043A \u0438 \u0432\u044B\u0440\u0443\u0447\u043A\u0430 \u043F\u043E \u043C\u0435\u0441\u044F\u0446\u0430\u043C (monthly chart on the right) -->
      <div class="report-card-groups report-row-two">
        <section class="report-card-group">
          <div class="card-group-header">
            <div class="card-group-icon card-group-icon-bonus">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            </div>
            <h3 class="card-group-title">\u0411\u043E\u043D\u0443\u0441\u044B</h3>
          </div>
          <div class="metric-list">
            <div class="metric-row">
              <span class="metric-label">\u0421\u0443\u043C\u043C\u0430 \u0432\u044B\u0434\u0435\u043B\u0435\u043D\u043D\u044B\u0445</span>
              <span class="metric-value">{{ formatMoney(report.totalGranted) }} \u20B8</span>
            </div>
            <div class="metric-row">
              <span class="metric-label">\u0412 \u043E\u0431\u043E\u0440\u043E\u0442\u0435</span>
              <span class="metric-value">{{ formatMoney(report.inCirculation) }} \u20B8</span>
            </div>
            <div class="metric-row">
              <span class="metric-label">\u0421\u0433\u043E\u0440\u0435\u0432\u0448\u0438\u0435</span>
              <span class="metric-value">{{ formatMoney(report.burnedAmount) }} \u20B8</span>
            </div>
            <div class="metric-row">
              <span class="metric-label">\u041F\u043E\u0442\u0440\u0430\u0447\u0435\u043D\u043D\u044B\u0435</span>
              <span class="metric-value">{{ formatMoney(report.spentAmount) }} \u20B8</span>
            </div>
          </div>
        </section>
        <section class="report-card-group">
          <div class="card-group-header">
            <div class="card-group-icon card-group-icon-kpi">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>
            </div>
            <h3 class="card-group-title">\u042D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u044C</h3>
          </div>
          <div class="metric-list">
            <div class="metric-row"><span class="metric-label">Redemption rate</span><span class="metric-value">{{ formatPct(report.redemptionRatePercent) }}%</span></div>
            <div class="metric-row"><span class="metric-label">Effective discount</span><span class="metric-value">{{ formatPct(report.effectiveDiscountPercent) }}%</span></div>
            <div class="metric-row"><span class="metric-label">Burn rate</span><span class="metric-value">{{ formatPct(report.burnRatePercent) }}%</span></div>
            <div class="metric-row"><span class="metric-label">AOV uplift</span><span class="metric-value">{{ formatPct(report.aovUpliftPercent) }}%</span></div>
            <div class="metric-row"><span class="metric-label">Incremental revenue</span><span class="metric-value">{{ formatPct(report.incrementalRevenuePercent) }}%</span></div>
          </div>
          <div class="block-extra" *ngIf="showRetention">
            <span class="metric-label">Retention rate</span>
            <span class="metric-value">{{ formatPct(report.retentionRatePercent) }}%</span>
          </div>
          <div class="block-extra" *ngIf="showReferral">
            <span class="metric-label">Conversion Rate</span>
            <span class="metric-value">{{ formatPct(report.conversionRatePercent) }}%</span>
            <span class="metric-label">CAC</span>
            <span class="metric-value">{{ formatMoney(report.cac) }} \u20B8</span>
          </div>
        </section>
        <section class="report-block monthly-block report-monthly-inline" *ngIf="monthlyChartData?.length">
        <div class="block-header">
          <div class="block-icon block-icon-chart">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>
          </div>
          <h3 class="block-title">\u0421\u0440\u0435\u0434\u043D\u0438\u0439 \u0447\u0435\u043A \u0438 \u0432\u044B\u0440\u0443\u0447\u043A\u0430 \u043F\u043E \u043C\u0435\u0441\u044F\u0446\u0430\u043C</h3>
          <div class="month-chart-year-select">
            <select class="control-select year-select" [ngModel]="chartYear" (ngModelChange)="onChartYearChange($event)">
              <option *ngFor="let y of availableChartYears" [value]="y">{{ y }}</option>
            </select>
          </div>
        </div>
        <div class="monthly-chart" *ngIf="!isMonthlyChartLoading">
          <div class="monthly-chart-inner">
            <div class="monthly-y-axis-left">
              <span *ngFor="let label of getMonthlyLeftAxisLabels()">{{ label }}</span>
            </div>
            <div class="monthly-chart-area">
              <div class="monthly-chart-grid" aria-hidden="true">
                <span *ngFor="let label of getMonthlyLeftAxisLabels(); let i = index" class="monthly-grid-line" [style.top.%]="(i / 4) * 100"></span>
              </div>
              <div class="monthly-bars">
                <div *ngFor="let point of monthlyChartData" class="month-cell">
                  <div class="month-bars-group" [class.selected]="isMonthSelected(point)">
                    <div class="month-bar-clickable with-bonus"
                         [style.height.%]="monthlyChartMax ? (point.avgCheckWithBonus / monthlyChartMax) * 100 : 0"
                         (click)="selectMonth(point.yearMonth)">
                      <div class="month-bar-tooltip">
                        <div class="tooltip-title">{{ point.month }}</div>
                        <div class="tooltip-row">\u0412\u044B\u0440\u0443\u0447\u043A\u0430: {{ formatMoneyShort(point.revenue ?? 0) }}</div>
                        <div class="tooltip-row">\u0421\u0440\u0435\u0434\u043D\u0438\u0439 \u0447\u0435\u043A \u0441 \u0431\u043E\u043D\u0443\u0441\u043E\u043C: {{ formatMoneyShort(point.avgCheckWithBonus) }}</div>
                        <div class="tooltip-row">\u0421\u0440\u0435\u0434\u043D\u0438\u0439 \u0447\u0435\u043A \u0431\u0435\u0437 \u0431\u043E\u043D\u0443\u0441\u043E\u0432: {{ formatMoneyShort(point.avgCheckWithoutBonus) }}</div>
                      </div>
                    </div>
                    <div class="month-bar-clickable without-bonus"
                         [style.height.%]="monthlyChartMax ? (point.avgCheckWithoutBonus / monthlyChartMax) * 100 : 0"
                         (click)="selectMonth(point.yearMonth)">
                      <div class="month-bar-tooltip">
                        <div class="tooltip-title">{{ point.month }}</div>
                        <div class="tooltip-row">\u0412\u044B\u0440\u0443\u0447\u043A\u0430: {{ formatMoneyShort(point.revenue ?? 0) }}</div>
                        <div class="tooltip-row">\u0421\u0440\u0435\u0434\u043D\u0438\u0439 \u0447\u0435\u043A \u0441 \u0431\u043E\u043D\u0443\u0441\u043E\u043C: {{ formatMoneyShort(point.avgCheckWithBonus) }}</div>
                        <div class="tooltip-row">\u0421\u0440\u0435\u0434\u043D\u0438\u0439 \u0447\u0435\u043A \u0431\u0435\u0437 \u0431\u043E\u043D\u0443\u0441\u043E\u0432: {{ formatMoneyShort(point.avgCheckWithoutBonus) }}</div>
                      </div>
                    </div>
                    <div class="month-bar-clickable revenue"
                         [style.height.%]="monthlyRevenueMax ? (point.revenue ?? 0) / monthlyRevenueMax * 100 : 0"
                         (click)="selectMonth(point.yearMonth)">
                      <div class="month-bar-tooltip">
                        <div class="tooltip-title">{{ point.month }}</div>
                        <div class="tooltip-row">\u0412\u044B\u0440\u0443\u0447\u043A\u0430: {{ formatMoneyShort(point.revenue ?? 0) }}</div>
                        <div class="tooltip-row">\u0421\u0440\u0435\u0434\u043D\u0438\u0439 \u0447\u0435\u043A \u0441 \u0431\u043E\u043D\u0443\u0441\u043E\u043C: {{ formatMoneyShort(point.avgCheckWithBonus) }}</div>
                        <div class="tooltip-row">\u0421\u0440\u0435\u0434\u043D\u0438\u0439 \u0447\u0435\u043A \u0431\u0435\u0437 \u0431\u043E\u043D\u0443\u0441\u043E\u0432: {{ formatMoneyShort(point.avgCheckWithoutBonus) }}</div>
                      </div>
                    </div>
                  </div>
                  <div class="month-label">{{ point.month }}</div>
                </div>
              </div>
            </div>
            <div class="monthly-y-axis-right">
              <span *ngFor="let label of getMonthlyRightAxisLabels()">{{ label }}</span>
            </div>
          </div>
          <div class="monthly-legend">
            <span class="leg green">\u0421\u0440\u0435\u0434\u043D\u0438\u0439 \u0447\u0435\u043A \u0441 \u0431\u043E\u043D\u0443\u0441\u043E\u043C</span>
            <span class="leg grey">\u0421\u0440\u0435\u0434\u043D\u0438\u0439 \u0447\u0435\u043A \u0431\u0435\u0437 \u0431\u043E\u043D\u0443\u0441\u043E\u0432</span>
            <span class="leg blue">\u0412\u044B\u0440\u0443\u0447\u043A\u0430 \u0437\u0430 \u043C\u0435\u0441\u044F\u0446</span>
          </div>
        </div>
        <div class="monthly-chart-loading" *ngIf="isMonthlyChartLoading">
          <app-loader [visible]="true" [overlay]="false" type="logo" size="small"></app-loader>
        </div>
        </section>
      </div>
    </div>
  </ng-container>

  <div *ngIf="!isLoading && !report && !errorMessage" class="report-empty">
    <p>\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u0438\u043F \u0431\u043E\u043D\u0443\u0441\u0430 \u0434\u043B\u044F \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u0430 \u043E\u0442\u0447\u0451\u0442\u0430.</p>
  </div>
  <div *ngIf="errorMessage" class="report-error">
    <p>{{ errorMessage }}</p>
  </div>
</div>
`, styles: ['/* src/app/features/reports/pages/bonus-type-report-page/bonus-type-report-page.component.scss */\n.report-page {\n  padding: 0 2rem;\n  width: 100%;\n  max-width: none;\n}\n@media (max-width: 768px) {\n  .report-page {\n    padding: 0 1rem;\n  }\n}\n.report-header {\n  margin-bottom: 1.25rem;\n}\n.report-controls {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1.25rem;\n  align-items: flex-end;\n}\n.control-group {\n  display: flex;\n  flex-direction: column;\n  gap: 0.35rem;\n}\n.control-label {\n  font-size: 0.7rem;\n  font-weight: 600;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.control-select {\n  min-width: 200px;\n  padding: 0.5rem 0.75rem;\n  font-size: 0.875rem;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  background: #fff;\n  color: #0f172a;\n  cursor: pointer;\n}\n.control-select:focus {\n  outline: none;\n  border-color: #22c55e;\n  box-shadow: 0 0 0 2px rgba(34, 197, 94, 0.1);\n}\n.page-loading-container {\n  min-height: 200px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.report-title-row {\n  display: flex;\n  align-items: baseline;\n  gap: 1rem;\n  margin-bottom: 1.25rem;\n  flex-wrap: wrap;\n}\n.report-period {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #0f172a;\n  margin: 0;\n}\n.report-title {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n}\n.report-card-groups {\n  display: flex;\n  flex-direction: row;\n  gap: 1rem;\n  margin-bottom: 1.25rem;\n}\n.report-row-one {\n  flex-wrap: nowrap;\n}\n.report-row-one .report-card-group,\n.report-row-one .report-chart-card {\n  flex: 1;\n  min-width: 0;\n  max-width: none;\n}\n.report-row-one .report-chart-card {\n  width: auto;\n}\n.report-row-two {\n  flex-wrap: nowrap;\n  align-items: stretch;\n}\n.report-row-two .report-card-group {\n  flex: 0 1 280px;\n  min-width: 0;\n}\n.report-row-two .report-block.monthly-block.report-monthly-inline {\n  flex: 1;\n  min-width: 0;\n  margin-bottom: 0;\n}\n@media (max-width: 1024px) {\n  .report-card-groups {\n    flex-wrap: wrap;\n  }\n  .report-row-one .report-card-group,\n  .report-row-one .report-chart-card {\n    flex: 1 1 200px;\n  }\n  .report-row-two .report-block.monthly-block {\n    flex: 1 1 100%;\n  }\n}\n.report-card-group {\n  flex: 1;\n  min-width: 0;\n  background: #fff;\n  border-radius: 14px;\n  padding: 1rem 1.25rem;\n  border: 1px solid #e5e7eb;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n}\n.report-card-group .card-group-header {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-bottom: 0.75rem;\n  padding-bottom: 0.5rem;\n  border-bottom: 1px solid #f1f5f9;\n}\n.report-card-group .card-group-icon {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.report-card-group .card-group-icon svg {\n  width: 18px;\n  height: 18px;\n}\n.card-group-icon-transactions {\n  background:\n    linear-gradient(\n      135deg,\n      #dcfce7 0%,\n      #bbf7d0 100%);\n  color: #15803d;\n}\n.card-group-icon-bonus {\n  background:\n    linear-gradient(\n      135deg,\n      #fef3c7 0%,\n      #fde68a 100%);\n  color: #b45309;\n}\n.card-group-icon-kpi {\n  background:\n    linear-gradient(\n      135deg,\n      #e0e7ff 0%,\n      #c7d2fe 100%);\n  color: #4338ca;\n}\n.report-card-group .card-group-title {\n  font-size: 0.8125rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n}\n.report-card-group .metric-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0.35rem;\n}\n.report-card-group .metric-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  gap: 0.5rem;\n  font-size: 0.8125rem;\n}\n.report-card-group .metric-label {\n  color: #64748b;\n  flex-shrink: 0;\n}\n.report-card-group .metric-value {\n  font-weight: 600;\n  font-size: 0.9375rem;\n  color: #0f172a;\n}\n.report-card-group .block-extra {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n  margin-top: 0.5rem;\n  padding-top: 0.5rem;\n  border-top: 1px solid #f1f5f9;\n  font-size: 0.8125rem;\n}\n.report-chart-card {\n  background: #fff;\n  border-radius: 14px;\n  padding: 1rem 1.25rem;\n  border: 1px solid #e5e7eb;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.report-chart-card .chart-title {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #0f172a;\n  margin: 0 0 0.75rem 0;\n}\n.report-chart-card .donut-container {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 160px;\n}\n.report-chart-card .donut-chart {\n  width: 140px;\n  height: 140px;\n  display: block;\n}\n.donut-legend-right {\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n  padding-top: 0.5rem;\n  font-size: 0.8125rem;\n}\n.donut-legend-right .legend-item {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n}\n.donut-legend-right .legend-color {\n  width: 10px;\n  height: 10px;\n  border-radius: 2px;\n  flex-shrink: 0;\n}\n.donut-legend-right .legend-color.loyalty {\n  background: #22c55e;\n}\n.donut-legend-right .legend-color.non-loyalty {\n  background: #94a3b8;\n}\n.donut-legend-right .legend-label {\n  color: #64748b;\n  flex-shrink: 0;\n}\n.donut-legend-right .legend-value {\n  font-weight: 700;\n  font-size: 0.9375rem;\n  color: #0f172a;\n}\n.donut-legend-right .legend-count {\n  margin-left: auto;\n  font-size: 0.8125rem;\n  color: #64748b;\n  font-weight: 500;\n}\n.avg-check-chart-card {\n  min-height: 220px;\n}\n.avg-check-chart-inner {\n  display: flex;\n  flex: 1;\n  min-height: 180px;\n  align-items: stretch;\n}\n.avg-check-y-axis {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 160px;\n  padding-right: 0.5rem;\n  font-size: 0.65rem;\n  font-weight: 600;\n  color: #94a3b8;\n  text-align: right;\n  flex-shrink: 0;\n}\n.avg-check-chart-area {\n  flex: 1;\n  min-width: 0;\n  position: relative;\n  height: 160px;\n}\n.avg-check-grid {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  height: 160px;\n  pointer-events: none;\n}\n.avg-check-grid-line {\n  position: absolute;\n  left: 0;\n  right: 0;\n  height: 1px;\n  background: #e2e8f0;\n  opacity: 0.5;\n}\n.avg-check-grid-line:nth-child(1) {\n  top: 0;\n}\n.avg-check-grid-line:nth-child(2) {\n  top: 25%;\n}\n.avg-check-grid-line:nth-child(3) {\n  top: 50%;\n}\n.avg-check-grid-line:nth-child(4) {\n  top: 75%;\n}\n.avg-check-grid-line:nth-child(5) {\n  top: 100%;\n}\n.avg-check-bars-row {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  align-items: flex-end;\n  gap: 8px;\n  height: 160px;\n  padding: 0 0.5rem;\n}\n.avg-check-bar-track {\n  flex: 1;\n  max-width: 48px;\n  height: 100%;\n  display: flex;\n  align-items: flex-end;\n  border-radius: 4px 4px 0 0;\n  overflow: hidden;\n}\n.avg-check-bar-fill {\n  width: 100%;\n  border-radius: 4px 4px 0 0;\n  min-height: 4px;\n  transition: height 0.3s ease;\n}\n.avg-check-bar-fill.with-bonus {\n  background: #22c55e;\n}\n.avg-check-bar-fill.without-bonus {\n  background: #94a3b8;\n}\n.avg-check-legend-inline {\n  display: flex;\n  gap: 1rem;\n  margin-top: 0.5rem;\n  padding-top: 0.5rem;\n  border-top: 1px solid #f1f5f9;\n  font-size: 0.75rem;\n  color: #64748b;\n}\n.avg-check-legend-inline .leg.green::before {\n  content: "";\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  border-radius: 2px;\n  background: #22c55e;\n  margin-right: 0.35rem;\n  vertical-align: middle;\n}\n.avg-check-legend-inline .leg.grey::before {\n  content: "";\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  border-radius: 2px;\n  background: #94a3b8;\n  margin-right: 0.35rem;\n  vertical-align: middle;\n}\n.donut-in-circulation .donut-container {\n  min-height: 140px;\n}\n.donut-in-circulation .donut-chart {\n  width: 120px;\n  height: 120px;\n}\n.report-block {\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 14px;\n  margin-bottom: 1.25rem;\n  overflow: visible;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n}\n.block-header {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 1rem 1.25rem;\n  border-bottom: 1px solid #f1f5f9;\n}\n.block-icon {\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.block-icon svg {\n  width: 20px;\n  height: 20px;\n}\n.block-icon-chart {\n  background:\n    linear-gradient(\n      135deg,\n      #e0e7ff 0%,\n      #c7d2fe 100%);\n  color: #4338ca;\n}\n.block-title {\n  font-size: 0.9375rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n  flex: 1;\n}\n.month-chart-year-select {\n  flex-shrink: 0;\n}\n.year-select {\n  min-width: 90px;\n  padding: 0.35rem 0.5rem;\n  font-size: 0.8125rem;\n}\n.monthly-chart {\n  padding: 1rem 1.25rem;\n  width: 100%;\n}\n.monthly-chart-inner {\n  display: flex;\n  width: 100%;\n  min-height: 280px;\n}\n.monthly-y-axis-left {\n  flex-shrink: 0;\n  width: 64px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding-right: 0.5rem;\n  font-size: 0.65rem;\n  font-weight: 600;\n  color: #94a3b8;\n  text-align: right;\n}\n.monthly-chart-area {\n  flex: 1;\n  min-width: 0;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n}\n.monthly-chart-grid {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  height: 200px;\n  pointer-events: none;\n}\n.monthly-grid-line {\n  position: absolute;\n  left: 0;\n  right: 0;\n  height: 1px;\n  background: #e2e8f0;\n  opacity: 0.5;\n}\n.monthly-grid-line:nth-child(1) {\n  top: 0;\n}\n.monthly-grid-line:nth-child(2) {\n  top: 25%;\n}\n.monthly-grid-line:nth-child(3) {\n  top: 50%;\n}\n.monthly-grid-line:nth-child(4) {\n  top: 75%;\n}\n.monthly-grid-line:nth-child(5) {\n  top: 100%;\n}\n.monthly-bars {\n  display: flex;\n  align-items: flex-end;\n  gap: 2px;\n  flex: 1;\n  min-height: 200px;\n  padding: 0.5rem 0 1rem 0;\n  position: relative;\n  z-index: 1;\n}\n.month-cell {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.35rem;\n  padding: 0.2rem;\n}\n.month-cell .month-label {\n  font-size: 0.6rem;\n  color: #64748b;\n  text-align: center;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 100%;\n  order: 2;\n}\n.month-bars-group {\n  display: flex;\n  gap: 2px;\n  align-items: flex-end;\n  height: 200px;\n  width: 100%;\n  max-width: 48px;\n  order: 1;\n}\n.month-bar-clickable {\n  flex: 1;\n  min-width: 10px;\n  border-radius: 3px 3px 0 0;\n  min-height: 4px;\n  transition: height 0.2s ease, opacity 0.2s;\n  cursor: pointer;\n  position: relative;\n}\n.month-bars-group.selected .month-bar-clickable.with-bonus,\n.month-bars-group.selected .month-bar-clickable.without-bonus,\n.month-bars-group.selected .month-bar-clickable.revenue {\n  box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.15);\n}\n.month-bar-clickable:hover {\n  opacity: 0.9;\n}\n.month-bar-clickable.with-bonus {\n  background: #22c55e;\n}\n.month-bar-clickable.without-bonus {\n  background: #94a3b8;\n}\n.month-bar-clickable.revenue {\n  background: #3b82f6;\n}\n.month-bar-tooltip {\n  position: absolute;\n  bottom: 100%;\n  left: 50%;\n  transform: translateX(-50%) translateY(-6px);\n  background: #1f2937;\n  color: #fff;\n  padding: 0.5rem 0.65rem;\n  border-radius: 8px;\n  font-size: 0.7rem;\n  white-space: nowrap;\n  z-index: 9999;\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity 0.15s, transform 0.15s;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n}\n.month-bar-clickable:hover .month-bar-tooltip {\n  opacity: 1;\n  transform: translateX(-50%) translateY(-4px);\n}\n.month-bar-tooltip::after {\n  content: "";\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  margin-left: -6px;\n  border: 6px solid transparent;\n  border-top-color: #1f2937;\n}\n.tooltip-title {\n  font-weight: 700;\n  margin-bottom: 0.25rem;\n  padding-bottom: 0.2rem;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n  font-size: 0.75rem;\n}\n.tooltip-row {\n  margin-top: 0.15rem;\n  font-size: 0.7rem;\n}\n.monthly-y-axis-right {\n  flex-shrink: 0;\n  width: 64px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding-left: 0.5rem;\n  font-size: 0.65rem;\n  font-weight: 600;\n  color: #94a3b8;\n  text-align: left;\n}\n.monthly-legend {\n  display: flex;\n  gap: 1.25rem;\n  font-size: 0.7rem;\n  margin-top: 0.75rem;\n  padding-top: 0.5rem;\n  border-top: 1px solid #f1f5f9;\n}\n.monthly-legend .leg {\n  display: flex;\n  align-items: center;\n  gap: 0.35rem;\n}\n.monthly-legend .leg.green::before {\n  content: "";\n  width: 10px;\n  height: 10px;\n  border-radius: 2px;\n  background: #22c55e;\n}\n.monthly-legend .leg.grey::before {\n  content: "";\n  width: 10px;\n  height: 10px;\n  border-radius: 2px;\n  background: #94a3b8;\n}\n.monthly-legend .leg.blue::before {\n  content: "";\n  width: 10px;\n  height: 10px;\n  border-radius: 2px;\n  background: #3b82f6;\n}\n.monthly-chart-loading {\n  padding: 2rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 200px;\n}\n.report-empty,\n.report-error {\n  padding: 1.5rem;\n  text-align: center;\n  font-size: 0.875rem;\n  color: #64748b;\n  background: #f8fafc;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.report-error {\n  color: #dc2626;\n  background: #fef2f2;\n  border-color: #fecaca;\n}\n/*# sourceMappingURL=bonus-type-report-page.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BonusTypeReportPageComponent, { className: "BonusTypeReportPageComponent", filePath: "src/app/features/reports/pages/bonus-type-report-page/bonus-type-report-page.component.ts", lineNumber: 21 });
})();
export {
  BonusTypeReportPageComponent
};
//# sourceMappingURL=chunk-SI7H5HC7.js.map
