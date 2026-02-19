import {
  RefundConfirmationModalComponent
} from "./chunk-MZCDXXPW.js";
import {
  PaymentViewModalComponent
} from "./chunk-BBZP5VVU.js";
import {
  BonusesService
} from "./chunk-OA7JZSDG.js";
import {
  BadgeComponent
} from "./chunk-D4QAE3H6.js";
import {
  AnalyticsService
} from "./chunk-HWLVB6TN.js";
import {
  LoaderComponent
} from "./chunk-5RYSXL5K.js";
import {
  PaymentsService,
  TransactionModalService
} from "./chunk-SPCU656E.js";
import "./chunk-QYR5BNYI.js";
import {
  PageHeaderService
} from "./chunk-AWWADESY.js";
import "./chunk-6FFMNYG3.js";
import {
  ToastService
} from "./chunk-O5QEVFND.js";
import {
  ButtonComponent
} from "./chunk-H6VMPPNV.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-7NMYMP3Z.js";
import {
  Store,
  selectUser
} from "./chunk-MCKFT77T.js";
import {
  IconButtonComponent
} from "./chunk-DGNBLIW7.js";
import {
  ChangeDetectorRef,
  CommonModule,
  Component,
  DecimalPipe,
  NgForOf,
  NgIf,
  Router,
  RouterLink,
  RouterModule,
  Subject,
  catchError,
  forkJoin,
  inject,
  of,
  setClassMetadata,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
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
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3
} from "./chunk-NKSGOSP5.js";

// src/app/features/home/pages/home-page/home-page.component.ts
var _c0 = () => ["/clients"];
var _c1 = () => ({ sort: "totalAmount", order: "desc" });
var _c2 = (a0) => ["/clients", a0];
function HomePageComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "app-loader", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("visible", true)("overlay", false);
  }
}
function HomePageComponent_div_3_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 87)(1, "div", 88)(2, "div", 89);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 90);
    \u0275\u0275element(4, "path", 91);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "div", 92)(6, "span", 93);
    \u0275\u0275text(7, "\u0411\u043E\u043D\u0443\u0441\u044B \u0438\u0441\u0442\u0435\u043A\u0430\u044E\u0442 \u0432 \u0431\u043B\u0438\u0436\u0430\u0439\u0448\u0438\u0435 7 \u0434\u043D\u0435\u0439");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 94);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "a", 95);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(11, "svg", 90);
    \u0275\u0275element(12, "path", 96);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate3("", ctx_r1.expiringSoon.clientCount, " ", ctx_r1.expiringSoon.clientCount === 1 ? "\u043A\u043B\u0438\u0435\u043D\u0442" : ctx_r1.expiringSoon.clientCount < 5 ? "\u043A\u043B\u0438\u0435\u043D\u0442\u0430" : "\u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432", " \xB7 ", ctx_r1.formatAmount(ctx_r1.expiringSoon.totalAmount), " \u20B8");
  }
}
function HomePageComponent_div_3_div_17_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 102);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const kpi_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classProp("positive", kpi_r3.changeType === "positive")("negative", kpi_r3.changeType === "negative");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(kpi_r3.change);
  }
}
function HomePageComponent_div_3_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 97)(1, "span", 98);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 99)(4, "span", 100);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, HomePageComponent_div_3_div_17_span_6_Template, 2, 5, "span", 101);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const kpi_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(kpi_r3.label);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(kpi_r3.value);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", kpi_r3.change);
  }
}
function HomePageComponent_div_3_div_26_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 102);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const kpi_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classProp("positive", kpi_r4.changeType === "positive")("negative", kpi_r4.changeType === "negative");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(kpi_r4.change);
  }
}
function HomePageComponent_div_3_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 97)(1, "span", 98);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 99)(4, "span", 100);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, HomePageComponent_div_3_div_26_span_6_Template, 2, 5, "span", 101);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const kpi_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(kpi_r4.label);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(kpi_r4.value);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", kpi_r4.change);
  }
}
function HomePageComponent_div_3_div_50_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 105);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 106);
    \u0275\u0275element(2, "circle", 107)(3, "path", 108);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const kpi_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("title", kpi_r5.tooltip);
  }
}
function HomePageComponent_div_3_div_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 103)(1, "span", 98);
    \u0275\u0275text(2);
    \u0275\u0275template(3, HomePageComponent_div_3_div_50_span_3_Template, 4, 1, "span", 104);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 100);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const kpi_r5 = ctx.$implicit;
    \u0275\u0275property("title", kpi_r5.tooltip);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", kpi_r5.label, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", kpi_r5.tooltip);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(kpi_r5.value);
  }
}
function HomePageComponent_div_3_div_61_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 102);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const kpi_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classProp("positive", kpi_r6.changeType === "positive")("negative", kpi_r6.changeType === "negative");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(kpi_r6.change);
  }
}
function HomePageComponent_div_3_div_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 97)(1, "span", 98);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 99)(4, "span", 100);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, HomePageComponent_div_3_div_61_span_6_Template, 2, 5, "span", 101);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const kpi_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(kpi_r6.label);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(kpi_r6.value);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", kpi_r6.change);
  }
}
function HomePageComponent_div_3_div_62_li_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 116)(1, "a", 117)(2, "span", 118);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 119);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const c_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(3, _c2, c_r7.clientId));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r7.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.formatAmount(c_r7.totalSpent), " \u20B8");
  }
}
function HomePageComponent_div_3_div_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 109)(1, "div", 110)(2, "span", 111);
    \u0275\u0275text(3, "\u0422\u043E\u043F \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 112);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 113);
    \u0275\u0275element(6, "path", 96);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "ul", 114);
    \u0275\u0275template(8, HomePageComponent_div_3_div_62_li_8_Template, 6, 5, "li", 115);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(3, _c0))("queryParams", \u0275\u0275pureFunction0(4, _c1));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.topCustomers.slice(0, 3));
  }
}
function HomePageComponent_div_3_span_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const label_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(label_r8);
  }
}
function HomePageComponent_div_3_div_87_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 125)(1, "span", 126);
    \u0275\u0275text(2, "\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u043E:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 131);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const point_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("-", ctx_r1.formatAmount(point_r9.bonusUsed), "");
  }
}
function HomePageComponent_div_3_div_87_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 120);
    \u0275\u0275element(1, "div", 121);
    \u0275\u0275elementStart(2, "div", 122)(3, "div", 123);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 124)(6, "div", 125)(7, "span", 126);
    \u0275\u0275text(8, "\u0412\u044B\u0440\u0443\u0447\u043A\u0430:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 127);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 125)(12, "span", 126);
    \u0275\u0275text(13, "\u0422\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u0439:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 128);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 125)(17, "span", 126);
    \u0275\u0275text(18, "\u041D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u043E:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 129);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(21, HomePageComponent_div_3_div_87_div_21_Template, 5, 1, "div", 130);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const point_r9 = ctx.$implicit;
    const last_r10 = ctx.last;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("left", point_r9.x / 600 * 100, "%")("top", point_r9.y / 300 * 100, "%");
    \u0275\u0275advance();
    \u0275\u0275classProp("last-point", last_r10);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", point_r9.day, " ", ctx_r1.getMonthName(), "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r1.formatAmount(point_r9.revenue), " \u20B8");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(point_r9.transactions);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("+", ctx_r1.formatAmount(point_r9.bonusEarned), "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", point_r9.bonusUsed > 0);
  }
}
function HomePageComponent_div_3_span_92_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const label_r11 = ctx.$implicit;
    const i_r12 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("left", ctx_r1.getXAxisLabelPositions()[i_r12] / 600 * 100, "%");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(label_r11);
  }
}
function HomePageComponent_div_3_div_93_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 132)(1, "h3", 47);
    \u0275\u0275text(2, "\u041F\u0440\u043E\u0434\u0430\u0436\u0438");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 133);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 134);
    \u0275\u0275element(5, "circle", 135)(6, "circle", 136)(7, "circle", 137);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "div", 138)(9, "div", 139);
    \u0275\u0275element(10, "span", 140);
    \u0275\u0275elementStart(11, "div")(12, "div", 141);
    \u0275\u0275text(13, "\u0421 \u0431\u043E\u043D\u0443\u0441\u0430\u043C\u0438");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 142);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 143);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 139);
    \u0275\u0275element(21, "span", 144);
    \u0275\u0275elementStart(22, "div")(23, "div", 141);
    \u0275\u0275text(24, "\u0411\u0435\u0437 \u0431\u043E\u043D\u0443\u0441\u043E\u0432");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 142);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 143);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "number");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275attribute("stroke-dasharray", ctx_r1.getDonutLoyaltyDash());
    \u0275\u0275advance();
    \u0275\u0275attribute("stroke-dasharray", ctx_r1.getDonutNonLoyaltyDash())("stroke-dashoffset", ctx_r1.getDonutNonLoyaltyOffset());
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(16, 7, ctx_r1.salesByLoyalty.loyaltyPercent, "1.0-0"), "%");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 10, ctx_r1.salesByLoyalty.loyaltyCount));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(27, 12, ctx_r1.salesByLoyalty.nonLoyaltyPercent, "1.0-0"), "%");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(30, 15, ctx_r1.salesByLoyalty.nonLoyaltyCount));
  }
}
function HomePageComponent_div_3_ng_container_121_app_badge_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-badge", 183);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const payment_r14 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" +", ctx_r1.formatAmount(payment_r14.bonusEarned), " ");
  }
}
function HomePageComponent_div_3_ng_container_121_app_badge_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-badge", 184);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const payment_r14 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" -", ctx_r1.formatAmount(payment_r14.bonusUsed), " ");
  }
}
function HomePageComponent_div_3_ng_container_121_app_badge_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-badge", 185);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const payment_r14 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" -", ctx_r1.formatAmount(payment_r14.bonusRevoked), " ");
  }
}
function HomePageComponent_div_3_ng_container_121_span_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 186);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function HomePageComponent_div_3_ng_container_121_tr_48_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 198);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const payment_r14 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", payment_r14.refundReason, " ");
  }
}
function HomePageComponent_div_3_ng_container_121_tr_48_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 199);
    \u0275\u0275text(1, " \u041D\u0435\u0442 \u043F\u0440\u0438\u0447\u0438\u043D\u044B \u0432\u043E\u0437\u0432\u0440\u0430\u0442\u0430 ");
    \u0275\u0275elementEnd();
  }
}
function HomePageComponent_div_3_ng_container_121_tr_48_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 200);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const payment_r14 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", payment_r14.initiatedBy, " ");
  }
}
function HomePageComponent_div_3_ng_container_121_tr_48_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 201);
    \u0275\u0275text(1, " \u041D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D ");
    \u0275\u0275elementEnd();
  }
}
function HomePageComponent_div_3_ng_container_121_tr_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 187)(1, "td", 188)(2, "div", 189)(3, "div", 190)(4, "div", 191)(5, "span", 192);
    \u0275\u0275text(6, "\u041F\u0440\u0438\u0447\u0438\u043D\u0430 \u0432\u043E\u0437\u0432\u0440\u0430\u0442\u0430:");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, HomePageComponent_div_3_ng_container_121_tr_48_div_7_Template, 2, 1, "div", 193)(8, HomePageComponent_div_3_ng_container_121_tr_48_div_8_Template, 2, 0, "div", 194);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 195)(10, "span", 192);
    \u0275\u0275text(11, "\u0418\u043D\u0438\u0446\u0438\u0430\u0442\u043E\u0440 \u043F\u043B\u0430\u0442\u0435\u0436\u0430:");
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, HomePageComponent_div_3_ng_container_121_tr_48_div_12_Template, 2, 1, "div", 196)(13, HomePageComponent_div_3_ng_container_121_tr_48_div_13_Template, 2, 0, "div", 197);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const payment_r14 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", payment_r14.refundReason);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !payment_r14.refundReason);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", payment_r14.initiatedBy);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !payment_r14.initiatedBy);
  }
}
function HomePageComponent_div_3_ng_container_121_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "tr", 145)(2, "td", 146)(3, "span", 147);
    \u0275\u0275listener("click", function HomePageComponent_div_3_ng_container_121_Template_span_click_3_listener() {
      const payment_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openPaymentView(payment_r14.id));
    });
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "td", 148)(6, "div", 149)(7, "div", 150);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 151)(10, "a", 152)(11, "span", 153);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "span", 154);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(15, "td", 155)(16, "span", 156);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "td", 157)(19, "div", 158);
    \u0275\u0275template(20, HomePageComponent_div_3_ng_container_121_app_badge_20_Template, 2, 1, "app-badge", 159)(21, HomePageComponent_div_3_ng_container_121_app_badge_21_Template, 2, 1, "app-badge", 160)(22, HomePageComponent_div_3_ng_container_121_app_badge_22_Template, 2, 1, "app-badge", 161)(23, HomePageComponent_div_3_ng_container_121_span_23_Template, 2, 0, "span", 162);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "td", 163);
    \u0275\u0275element(25, "app-badge", 164);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "td", 165)(27, "app-badge", 166);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "td", 167)(30, "div", 168)(31, "span", 169);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "span", 170);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "td", 171)(36, "div", 172)(37, "a", 173)(38, "app-icon-button", 174);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(39, "svg", 175);
    \u0275\u0275element(40, "path", 176)(41, "circle", 177);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(42, "app-icon-button", 178);
    \u0275\u0275listener("onClick", function HomePageComponent_div_3_ng_container_121_Template_app_icon_button_onClick_42_listener() {
      const payment_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openRefundModal(payment_r14));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(43, "svg", 175);
    \u0275\u0275element(44, "path", 179);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(45, "app-icon-button", 180);
    \u0275\u0275listener("onClick", function HomePageComponent_div_3_ng_container_121_Template_app_icon_button_onClick_45_listener() {
      const payment_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleRowExpansion(payment_r14.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(46, "svg", 90);
    \u0275\u0275element(47, "path", 181);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275template(48, HomePageComponent_div_3_ng_container_121_tr_48_Template, 14, 4, "tr", 182);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const payment_r14 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("expanded", ctx_r1.isRowExpanded(payment_r14.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("#", ctx_r1.formatPaymentId(payment_r14.id), "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getInitials(payment_r14.clientName), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(24, _c2, payment_r14.clientId));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(payment_r14.clientName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(payment_r14.clientPhone);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.formatAmount(payment_r14.amount), " \u20B8");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", payment_r14.bonusEarned > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", payment_r14.bonusUsed > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", payment_r14.bonusRevoked > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", payment_r14.bonusEarned === 0 && payment_r14.bonusUsed === 0 && payment_r14.bonusRevoked === 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("paymentMethod", ctx_r1.getPaymentMethodForBadge(payment_r14.paymentMethod));
    \u0275\u0275advance(2);
    \u0275\u0275property("badgeType", payment_r14.isRefund ? "refund" : "payment")("icon", payment_r14.isRefund ? "refund" : "payment");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", payment_r14.isRefund ? "\u0412\u043E\u0437\u0432\u0440\u0430\u0442" : "\u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E", " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(payment_r14.date);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(payment_r14.time);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(26, _c2, payment_r14.clientId));
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", payment_r14.isRefund);
    \u0275\u0275advance(3);
    \u0275\u0275property("tooltip", ctx_r1.isRowExpanded(payment_r14.id) ? "\u0421\u043A\u0440\u044B\u0442\u044C \u0434\u0435\u0442\u0430\u043B\u0438" : "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0434\u0435\u0442\u0430\u043B\u0438");
    \u0275\u0275advance();
    \u0275\u0275classProp("rotated", ctx_r1.isRowExpanded(payment_r14.id));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.isRowExpanded(payment_r14.id));
  }
}
function HomePageComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 8)(2, "app-button", 9);
    \u0275\u0275listener("onClick", function HomePageComponent_div_3_Template_app_button_onClick_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openTransactionModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 10);
    \u0275\u0275element(4, "path", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "span", 12);
    \u0275\u0275text(6, "\u041D\u043E\u0432\u0430\u044F \u0442\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u044F");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(7, HomePageComponent_div_3_div_7_Template, 13, 3, "div", 13);
    \u0275\u0275elementStart(8, "div", 14)(9, "section", 15)(10, "div", 16)(11, "div", 17);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(12, "svg", 18);
    \u0275\u0275element(13, "path", 19);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(14, "h3", 20);
    \u0275\u0275text(15, "\u041F\u043B\u0430\u0442\u0435\u0436\u0438");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 21);
    \u0275\u0275template(17, HomePageComponent_div_3_div_17_Template, 7, 3, "div", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "section", 15)(19, "div", 16)(20, "div", 23);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(21, "svg", 24);
    \u0275\u0275element(22, "path", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(23, "h3", 20);
    \u0275\u0275text(24, "\u0411\u043E\u043D\u0443\u0441\u044B");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 21);
    \u0275\u0275template(26, HomePageComponent_div_3_div_26_Template, 7, 3, "div", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "section", 15)(28, "div", 26)(29, "div", 27);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(30, "svg", 18);
    \u0275\u0275element(31, "path", 28)(32, "path", 29)(33, "path", 30)(34, "path", 31);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(35, "h3", 20);
    \u0275\u0275text(36, "KPI");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 32)(38, "select", 33);
    \u0275\u0275listener("ngModelChange", function HomePageComponent_div_3_Template_select_ngModelChange_38_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onKpiPeriodChange($event));
    });
    \u0275\u0275elementStart(39, "option", 34);
    \u0275\u0275text(40, "\u0417\u0430 \u043C\u0435\u0441\u044F\u0446");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "option", 35);
    \u0275\u0275text(42, "\u0417\u0430 3 \u043C\u0435\u0441\u044F\u0446\u0430");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "option", 36);
    \u0275\u0275text(44, "\u0417\u0430 6 \u043C\u0435\u0441\u044F\u0446\u0435\u0432");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "option", 37);
    \u0275\u0275text(46, "\u0417\u0430 \u0433\u043E\u0434");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "option", 38);
    \u0275\u0275text(48, "\u0417\u0430 \u0432\u0441\u0435 \u0432\u0440\u0435\u043C\u044F");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(49, "div", 21);
    \u0275\u0275template(50, HomePageComponent_div_3_div_50_Template, 6, 4, "div", 39);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "section", 15)(52, "div", 16)(53, "div", 40);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(54, "svg", 18);
    \u0275\u0275element(55, "path", 41)(56, "circle", 42)(57, "path", 43);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(58, "h3", 20);
    \u0275\u0275text(59, "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "div", 21);
    \u0275\u0275template(61, HomePageComponent_div_3_div_61_Template, 7, 3, "div", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275template(62, HomePageComponent_div_3_div_62_Template, 9, 5, "div", 44);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "div", 45)(64, "div", 46)(65, "h3", 47);
    \u0275\u0275text(66, "\u0412\u044B\u0440\u0443\u0447\u043A\u0430 \u0437\u0430 \u043C\u0435\u0441\u044F\u0446");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "div", 48)(68, "div", 49)(69, "div", 50);
    \u0275\u0275template(70, HomePageComponent_div_3_span_70_Template, 2, 1, "span", 51);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(71, "div", 52)(72, "div", 53);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(73, "svg", 54)(74, "defs")(75, "linearGradient", 55);
    \u0275\u0275element(76, "stop", 56)(77, "stop", 57);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(78, "g", 58);
    \u0275\u0275element(79, "line", 59)(80, "line", 60)(81, "line", 61)(82, "line", 62)(83, "line", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275element(84, "path", 64)(85, "path", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(86, "div", 66);
    \u0275\u0275template(87, HomePageComponent_div_3_div_87_Template, 22, 12, "div", 67);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(88, "div", 68)(89, "span", 69);
    \u0275\u0275text(90, "\u0414\u043D\u0438");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(91, "div", 70);
    \u0275\u0275template(92, HomePageComponent_div_3_span_92_Template, 2, 3, "span", 71);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275template(93, HomePageComponent_div_3_div_93_Template, 31, 17, "div", 72);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "div", 73)(95, "div", 74)(96, "h3", 75);
    \u0275\u0275text(97, "\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0435 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(98, "a", 76);
    \u0275\u0275text(99, "\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0432\u0441\u0435 \u2192");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(100, "div", 77)(101, "table", 78)(102, "thead")(103, "tr")(104, "th", 79);
    \u0275\u0275text(105, "ID \u043F\u043B\u0430\u0442\u0435\u0436\u0430");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(106, "th", 80);
    \u0275\u0275text(107, "\u041A\u043B\u0438\u0435\u043D\u0442");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(108, "th", 81);
    \u0275\u0275text(109, "\u0421\u0443\u043C\u043C\u0430");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(110, "th", 82);
    \u0275\u0275text(111, "\u0411\u043E\u043D\u0443\u0441\u044B");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(112, "th", 83);
    \u0275\u0275text(113, "\u0421\u043F\u043E\u0441\u043E\u0431 \u043E\u043F\u043B\u0430\u0442\u044B");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(114, "th", 84);
    \u0275\u0275text(115, "\u0421\u0442\u0430\u0442\u0443\u0441");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(116, "th", 85);
    \u0275\u0275text(117, "\u0414\u0430\u0442\u0430 \u0438 \u0432\u0440\u0435\u043C\u044F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(118, "th", 86);
    \u0275\u0275text(119, "\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(120, "tbody");
    \u0275\u0275template(121, HomePageComponent_div_3_ng_container_121_Template, 49, 28, "ng-container", 51);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r1.expiringSoon && ctx_r1.expiringSoon.clientCount > 0);
    \u0275\u0275advance(10);
    \u0275\u0275property("ngForOf", ctx_r1.paymentCards);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngForOf", ctx_r1.bonusCards);
    \u0275\u0275advance(12);
    \u0275\u0275property("ngModel", ctx_r1.kpiPeriod);
    \u0275\u0275advance(12);
    \u0275\u0275property("ngForOf", ctx_r1.kpiMetricCards);
    \u0275\u0275advance(11);
    \u0275\u0275property("ngForOf", ctx_r1.userCards);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.topCustomers.length > 0);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngForOf", ctx_r1.getYAxisLabels());
    \u0275\u0275advance(14);
    \u0275\u0275attribute("d", ctx_r1.getAreaPath());
    \u0275\u0275advance();
    \u0275\u0275attribute("d", ctx_r1.getChartPath());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.getChartData());
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r1.getXAxisLabels());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.salesByLoyalty);
    \u0275\u0275advance(28);
    \u0275\u0275property("ngForOf", ctx_r1.recentPayments);
  }
}
var HomePageComponent = class _HomePageComponent {
  store;
  user$;
  pageHeaderService = inject(PageHeaderService);
  transactionModalService = inject(TransactionModalService);
  analyticsService = inject(AnalyticsService);
  bonusesService = inject(BonusesService);
  paymentsService = inject(PaymentsService);
  toastService = inject(ToastService);
  cdr = inject(ChangeDetectorRef);
  // Refund modal
  showRefundModal = false;
  selectedPaymentForRefund = null;
  // Payment view modal
  showPaymentViewModal = false;
  selectedPaymentTxId = null;
  selectedPaymentSearchResult = null;
  isProcessingRefund = false;
  // Expanded rows
  expandedRows = /* @__PURE__ */ new Set();
  // Loading state
  isLoading = true;
  isChartLoading = true;
  isLoadingPayments = false;
  // Card groups (Платежи, Бонусы, KPI, Пользователи)
  paymentCards = [];
  bonusCards = [];
  kpiMetricCards = [];
  userCards = [];
  topCustomers = [];
  // Bonuses in circulation (for Бонусы group)
  bonusesInCirculationAmount = null;
  // Sales by loyalty (for donut chart)
  salesByLoyalty = null;
  // KPI period: '1m' | '3m' | '6m' | '1y' | 'all'
  kpiPeriod = "1m";
  // Chart Y-axis: max value for dynamic labels
  chartYAxisMax = 3e4;
  // Bonuses expiring soon (for home card; null until loaded)
  expiringSoon = null;
  // Recent Payments Data
  recentPayments = [];
  destroy$ = new Subject();
  router = inject(Router);
  constructor(store) {
    this.store = store;
    this.user$ = this.store.select(selectUser);
  }
  ngOnInit() {
    this.pageHeaderService.setPageHeader("\u0411\u044B\u0441\u0442\u0440\u044B\u0439 \u041E\u0431\u0437\u043E\u0440", [
      { label: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F" }
    ]);
    this.loadAnalyticsData();
    this.loadChartData();
    this.loadRecentPayments();
    this.loadExpiringBonuses();
    this.transactionModalService.transactionComplete$.pipe(takeUntil(this.destroy$)).subscribe(() => {
      const currentUrl = this.router.url;
      if (currentUrl === "/home" || currentUrl.startsWith("/home")) {
        this.loadAnalyticsData();
        this.loadChartData();
        this.loadRecentPayments();
        this.loadExpiringBonuses();
      }
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  loadAnalyticsData() {
    this.isLoading = true;
    const { from, to } = this.getKpiPeriodRange();
    forkJoin({
      monthlyRevenue: this.analyticsService.getMonthlyRevenue().pipe(catchError(() => of({ revenue: 0, changePercent: 0, amount: 0 }))),
      dailyRevenue: this.analyticsService.getDailyRevenue().pipe(catchError(() => of({ revenue: 0, changePercent: 0, amount: 0 }))),
      dailyTransactions: this.analyticsService.getDailyTransactions().pipe(catchError(() => of({ count: 0, changeAbsolute: 0 }))),
      newClients: this.analyticsService.getNewClients("DAILY").pipe(catchError(() => of({ count: 0, changeAbsolute: 0, type: "NEW", period: "DAILY" }))),
      averageCheck: this.analyticsService.getAverageCheck("MONTHLY").pipe(catchError(() => of({ averageCheck: 0, changePercent: 0, amount: 0 }))),
      bonusesAccrued: this.analyticsService.getBonusesAccrued("MONTHLY").pipe(catchError(() => of({ amount: 0, changePercentage: 0 }))),
      dailyRefunds: this.analyticsService.getDailyRefunds().pipe(catchError(() => of({ count: 0, changeAbsolute: 0 }))),
      activeClients: this.analyticsService.getActiveClients().pipe(catchError(() => of({ count: 0, changeAbsolute: 0 }))),
      kpiDashboard: this.analyticsService.getKpiDashboard(from, to).pipe(catchError(() => of(null))),
      topCustomers: this.analyticsService.getTopCustomers().pipe(catchError(() => of([]))),
      bonusesInCirculation: this.analyticsService.getBonusesInCirculation().pipe(catchError(() => of({ amount: 0 }))),
      salesByLoyalty: this.analyticsService.getSalesByLoyalty().pipe(catchError(() => of({ loyaltyCount: 0, nonLoyaltyCount: 0, loyaltyPercent: 0, nonLoyaltyPercent: 100 })))
    }).subscribe({
      next: (data) => {
        this.topCustomers = data.topCustomers || [];
        this.bonusesInCirculationAmount = data.bonusesInCirculation?.amount ?? 0;
        this.salesByLoyalty = data.salesByLoyalty ?? null;
        this.updateKpiCards(data);
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error("Error loading analytics data:", error);
        this.isLoading = false;
        this.bonusesInCirculationAmount = 0;
        this.salesByLoyalty = null;
        this.updateKpiCards({
          monthlyRevenue: { amount: 0 },
          dailyRevenue: { amount: 0 },
          dailyTransactions: { count: 0 },
          newClients: { count: 0, changeAbsolute: 0, type: "NEW", period: "DAILY" },
          averageCheck: { amount: 0 },
          bonusesAccrued: { amount: 0 },
          dailyRefunds: { count: 0 },
          activeClients: { count: 0 },
          kpiDashboard: null,
          topCustomers: [],
          bonusesInCirculation: { amount: 0 },
          salesByLoyalty: { loyaltyCount: 0, nonLoyaltyCount: 0, loyaltyPercent: 0, nonLoyaltyPercent: 100 }
        });
        this.cdr.detectChanges();
      }
    });
  }
  loadExpiringBonuses() {
    this.bonusesService.getBonusesExpiringSoon().pipe(catchError((err) => {
      console.error("Error loading expiring bonuses:", err);
      return of({ clientCount: 0, totalAmount: 0, clients: [] });
    })).subscribe({
      next: (data) => {
        this.expiringSoon = data.clientCount > 0 ? data : null;
        this.cdr.markForCheck();
      }
    });
  }
  loadRecentPayments() {
    this.isLoadingPayments = true;
    this.paymentsService.searchPayments({
      page: 0,
      size: 5,
      sortBy: "date",
      sortDirection: "DESC"
    }).pipe(catchError((error) => {
      console.error("Error loading recent payments:", error);
      return of({ content: [], totalElements: 0, totalPages: 0, page: 0, size: 5 });
    })).subscribe({
      next: (response) => {
        console.log("Recent payments received:", response);
        this.recentPayments = response.content.map((payment) => this.convertPaymentToRecentPayment(payment));
        this.isLoadingPayments = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error("Error in recent payments subscription:", error);
        this.isLoadingPayments = false;
        this.cdr.detectChanges();
      }
    });
  }
  convertPaymentToRecentPayment(payment) {
    if (!payment.createdAt) {
      const now = /* @__PURE__ */ new Date();
      return {
        id: payment.txId || "",
        clientId: payment.clientId || "",
        clientName: payment.clientName || "\u2014",
        clientPhone: payment.clientPhone || "\u2014",
        amount: payment.amount || 0,
        bonusEarned: payment.bonusGranted || 0,
        bonusUsed: payment.bonusUsed || 0,
        bonusRevoked: payment.bonusRevoked || 0,
        paymentMethod: "card",
        isRefund: payment.status === "REFUNDED" || payment.refundedPaymentTxId !== null,
        date: now.toLocaleDateString("ru-RU"),
        time: now.toLocaleTimeString("ru-RU", { hour: "2-digit", minute: "2-digit" }),
        initiatedBy: payment.initiatedBy || null,
        refundReason: payment.refundReason || null
      };
    }
    const createdAt = new Date(payment.createdAt);
    if (isNaN(createdAt.getTime())) {
      const now = /* @__PURE__ */ new Date();
      createdAt.setTime(now.getTime());
    }
    const day = String(createdAt.getDate()).padStart(2, "0");
    const month = String(createdAt.getMonth() + 1).padStart(2, "0");
    const year = createdAt.getFullYear();
    const dateStr = `${day}.${month}.${year}`;
    const hours = String(createdAt.getHours()).padStart(2, "0");
    const minutes = String(createdAt.getMinutes()).padStart(2, "0");
    const timeStr = `${hours}:${minutes}`;
    let paymentMethod = "card";
    if (payment.paymentMethod) {
      const method = payment.paymentMethod.toLowerCase();
      if (method.includes("cash") || method.includes("\u043D\u0430\u043B\u0438\u0447")) {
        paymentMethod = "cash";
      } else if (method.includes("transfer") || method.includes("\u043F\u0435\u0440\u0435\u0432\u043E\u0434")) {
        paymentMethod = "transfer";
      } else {
        paymentMethod = "card";
      }
    }
    return {
      id: payment.txId || "",
      clientId: payment.clientId || "",
      clientName: payment.clientName || "\u2014",
      clientPhone: payment.clientPhone || "\u2014",
      amount: payment.amount || 0,
      bonusEarned: payment.bonusGranted || 0,
      bonusUsed: payment.bonusUsed || 0,
      bonusRevoked: payment.bonusRevoked || 0,
      paymentMethod,
      isRefund: payment.status === "REFUNDED" || payment.refundedPaymentTxId !== null,
      date: dateStr,
      time: timeStr,
      initiatedBy: payment.initiatedBy || null,
      refundReason: payment.refundReason || null
    };
  }
  loadChartData() {
    this.isChartLoading = true;
    const now = /* @__PURE__ */ new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth() + 1;
    console.log("Loading chart data for:", currentYear, currentMonth);
    this.analyticsService.getMonthlyRevenueChart(currentYear, currentMonth).pipe(catchError((error) => {
      console.error("Error loading chart data:", error);
      console.error("Error status:", error.status);
      let fallbackYear = currentYear;
      let fallbackMonth = currentMonth - 1;
      if (fallbackMonth < 1) {
        fallbackMonth = 12;
        fallbackYear = currentYear - 1;
      }
      console.log("Trying fallback date:", fallbackYear, fallbackMonth);
      return this.analyticsService.getMonthlyRevenueChart(fallbackYear, fallbackMonth).pipe(catchError((fallbackError) => {
        console.error("Fallback also failed:", fallbackError);
        return of({ dailyData: [], year: fallbackYear, month: fallbackMonth });
      }));
    })).subscribe({
      next: (chartData) => {
        console.log("Chart data received:", chartData);
        console.log("Chart data array length:", chartData.dailyData?.length);
        const dataArray = chartData.dailyData || chartData.data || [];
        this.updateChartData(dataArray);
        this.isChartLoading = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error("Subscription error:", error);
        this.isChartLoading = false;
        this.cdr.detectChanges();
      }
    });
  }
  updateKpiCards(data) {
    const kpi = data.kpiDashboard;
    const monthlyRevenue = data.monthlyRevenue?.amount ?? data.monthlyRevenue?.revenue ?? 0;
    const monthlyRevenueChange = data.monthlyRevenue?.changePercentage ?? data.monthlyRevenue?.changePercent;
    const dailyRevenue = data.dailyRevenue?.amount ?? data.dailyRevenue?.revenue ?? 0;
    const dailyRevenueChange = data.dailyRevenue?.changePercentage ?? data.dailyRevenue?.changePercent;
    const averageCheck = data.averageCheck?.amount ?? data.averageCheck?.averageCheck ?? 0;
    const averageCheckChange = data.averageCheck?.changePercentage ?? data.averageCheck?.changePercent;
    const bonusesAccrued = data.bonusesAccrued?.amount ?? data.bonusesAccrued?.count ?? 0;
    const bonusesAccruedChange = data.bonusesAccrued?.changePercentage ?? data.bonusesAccrued?.changePercent;
    this.paymentCards = [
      { iconId: "month", iconBg: "linear-gradient(135deg, #f0fdf4, #dcfce7)", value: this.formatCurrency(monthlyRevenue), label: "\u0412\u044B\u0440\u0443\u0447\u043A\u0430 \u0437\u0430 \u043C\u0435\u0441\u044F\u0446", change: monthlyRevenueChange != null ? `${monthlyRevenueChange > 0 ? "+" : ""}${monthlyRevenueChange.toFixed(0)}%` : void 0, changeType: monthlyRevenueChange != null && monthlyRevenueChange >= 0 ? "positive" : "negative" },
      { iconId: "today", iconBg: "linear-gradient(135deg, #f0fdf4, #dcfce7)", value: this.formatCurrency(dailyRevenue), label: "\u0412\u044B\u0440\u0443\u0447\u043A\u0430 \u0437\u0430 \u0441\u0435\u0433\u043E\u0434\u043D\u044F", change: dailyRevenueChange != null ? `${dailyRevenueChange > 0 ? "+" : ""}${dailyRevenueChange.toFixed(0)}%` : void 0, changeType: dailyRevenueChange != null && dailyRevenueChange >= 0 ? "positive" : "negative" },
      { iconId: "average", iconBg: "linear-gradient(135deg, #f0fdf4, #dcfce7)", value: this.formatCurrency(averageCheck), label: "\u0421\u0440\u0435\u0434\u043D\u0438\u0439 \u0447\u0435\u043A", change: averageCheckChange != null ? `${averageCheckChange > 0 ? "+" : ""}${averageCheckChange.toFixed(0)}%` : void 0, changeType: averageCheckChange != null && averageCheckChange >= 0 ? "positive" : "negative" },
      { iconId: "transactions", iconBg: "linear-gradient(135deg, #f0fdf4, #dcfce7)", value: (data.dailyTransactions?.count ?? 0).toString(), label: "\u041A\u043E\u043B-\u0432\u043E \u0442\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u0439", change: data.dailyTransactions?.changeAbsolute != null ? `${data.dailyTransactions.changeAbsolute > 0 ? "+" : ""}${data.dailyTransactions.changeAbsolute}` : void 0, changeType: data.dailyTransactions?.changeAbsolute != null && data.dailyTransactions.changeAbsolute >= 0 ? "positive" : "negative" },
      { iconId: "average", iconBg: "linear-gradient(135deg, #fef3c7, #fde68a)", value: kpi?.uplift?.avgCheckWithBonus != null ? this.formatCurrency(Number(kpi.uplift.avgCheckWithBonus)) : "\u2014", label: "\u0421\u0440\u0435\u0434\u043D\u0438\u0439 \u0447\u0435\u043A \u0441 \u0431\u043E\u043D\u0443\u0441\u0430\u043C\u0438" },
      { iconId: "average", iconBg: "linear-gradient(135deg, #e0f2fe, #bae6fd)", value: kpi?.uplift?.avgCheckRegular != null ? this.formatCurrency(Number(kpi.uplift.avgCheckRegular)) : "\u2014", label: "\u0421\u0440\u0435\u0434\u043D\u0438\u0439 \u0447\u0435\u043A \u0431\u0435\u0437 \u0431\u043E\u043D\u0443\u0441\u043E\u0432" }
    ];
    const inCirculation = data.bonusesInCirculation?.amount ?? this.bonusesInCirculationAmount ?? 0;
    this.bonusCards = [
      { iconId: "bonus", iconBg: "linear-gradient(135deg, #f0fdf4, #dcfce7)", value: this.formatCurrency(inCirculation), label: "\u0411\u043E\u043D\u0443\u0441\u044B \u0432 \u043E\u0431\u043E\u0440\u043E\u0442\u0435" },
      { iconId: "bonus", iconBg: "linear-gradient(135deg, #f0fdf4, #dcfce7)", value: this.formatCurrency(bonusesAccrued), label: "\u041D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u043D\u044B\u0435 \u0431\u043E\u043D\u0443\u0441\u044B", change: bonusesAccruedChange != null ? `${bonusesAccruedChange > 0 ? "+" : ""}${bonusesAccruedChange.toFixed(0)}%` : void 0, changeType: bonusesAccruedChange != null && bonusesAccruedChange >= 0 ? "positive" : "negative" },
      { iconId: "refunds", iconBg: "linear-gradient(135deg, #fef2f2, #fee2e2)", value: (data.dailyRefunds?.count ?? 0).toString(), label: "\u0412\u043E\u0437\u0432\u0440\u0430\u0442\u044B", change: data.dailyRefunds?.changeAbsolute != null ? `${data.dailyRefunds.changeAbsolute > 0 ? "+" : ""}${data.dailyRefunds.changeAbsolute}` : void 0, changeType: data.dailyRefunds?.changeAbsolute != null && data.dailyRefunds.changeAbsolute >= 0 ? "positive" : "negative" },
      { iconId: "bonus", iconBg: "linear-gradient(135deg, #fef3c7, #fde68a)", value: kpi?.efficiency?.burnedAmount != null ? this.formatCurrency(Number(kpi.efficiency.burnedAmount)) : "0 \u20B8", label: "\u0421\u0433\u043E\u0440\u0435\u0432\u0448\u0438\u0435 \u0431\u043E\u043D\u0443\u0441\u044B (\u0441\u0443\u043C\u043C\u0430)" }
    ];
    const retention = kpi?.retention?.retentionRate != null ? Number(kpi.retention.retentionRate).toFixed(1) : "\u2014";
    const redemptionRate = kpi?.efficiency?.redemptionRate != null ? Number(kpi.efficiency.redemptionRate).toFixed(1) + "%" : "\u2014";
    const effectiveDiscount = kpi?.efficiency?.effectiveDiscount != null ? Number(kpi.efficiency.effectiveDiscount).toFixed(1) + "%" : "\u2014";
    const burnRate = kpi?.efficiency?.burnRate != null ? Number(kpi.efficiency.burnRate).toFixed(1) + "%" : "\u2014";
    const aovUplift = kpi?.uplift?.aovUplift != null ? Number(kpi.uplift.aovUplift).toFixed(1) + "%" : "\u2014";
    const incRevPerc = kpi?.revenue?.incrementalRevenuePercentage != null ? Number(kpi.revenue.incrementalRevenuePercentage).toFixed(1) + "%" : "\u2014";
    this.kpiMetricCards = [
      { iconId: "average", iconBg: "linear-gradient(135deg, #e0e7ff, #c7d2fe)", value: retention + (retention !== "\u2014" ? "%" : ""), label: "Retention", tooltip: "\u0414\u043E\u043B\u044F \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432, \u0441\u043E\u0432\u0435\u0440\u0448\u0438\u0432\u0448\u0438\u0445 2 \u0438 \u0431\u043E\u043B\u0435\u0435 \u043F\u043E\u043A\u0443\u043F\u043E\u043A \u0432 \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u043E\u043C \u043F\u0435\u0440\u0438\u043E\u0434\u0435, \u043E\u0442 \u043E\u0431\u0449\u0435\u0433\u043E \u0447\u0438\u0441\u043B\u0430 \u0430\u043A\u0442\u0438\u0432\u043D\u044B\u0445 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432. \u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442 \u0443\u0434\u0435\u0440\u0436\u0430\u043D\u0438\u0435." },
      { iconId: "average", iconBg: "linear-gradient(135deg, #e0e7ff, #c7d2fe)", value: redemptionRate, label: "Redemption rate", tooltip: "\u0414\u043E\u043B\u044F \u043D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u043D\u044B\u0445 \u0431\u043E\u043D\u0443\u0441\u043E\u0432, \u043A\u043E\u0442\u043E\u0440\u0443\u044E \u043A\u043B\u0438\u0435\u043D\u0442\u044B \u043F\u043E\u0442\u0440\u0430\u0442\u0438\u043B\u0438 \u0432 \u043F\u0435\u0440\u0438\u043E\u0434\u0435. \u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442, \u043D\u0430\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0430\u043A\u0442\u0438\u0432\u043D\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0442 \u0431\u043E\u043D\u0443\u0441\u044B." },
      { iconId: "average", iconBg: "linear-gradient(135deg, #e0e7ff, #c7d2fe)", value: effectiveDiscount, label: "Effective discount", tooltip: "\u0421\u0440\u0435\u0434\u043D\u0438\u0439 \u0444\u0430\u043A\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0441\u043A\u0438\u0434\u043E\u0447\u043D\u044B\u0439 \u043F\u0440\u043E\u0446\u0435\u043D\u0442 \u043F\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u043D\u044B\u043C \u0431\u043E\u043D\u0443\u0441\u0430\u043C \u043E\u0442\u043D\u043E\u0441\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0432\u044B\u0440\u0443\u0447\u043A\u0438 \u0432 \u043F\u0435\u0440\u0438\u043E\u0434\u0435." },
      { iconId: "average", iconBg: "linear-gradient(135deg, #e0e7ff, #c7d2fe)", value: burnRate, label: "Burn rate", tooltip: "\u0414\u043E\u043B\u044F \u043D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u043D\u044B\u0445 \u0437\u0430 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0435 12 \u043C\u0435\u0441\u044F\u0446\u0435\u0432 \u0431\u043E\u043D\u0443\u0441\u043E\u0432, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u0441\u0433\u043E\u0440\u0435\u043B\u0430 (\u0438\u0441\u0442\u0435\u043A \u0441\u0440\u043E\u043A). \u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442 \u043F\u043E\u0442\u0435\u0440\u0438 \u043E\u0442 \u043D\u0435\u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F." },
      { iconId: "average", iconBg: "linear-gradient(135deg, #e0e7ff, #c7d2fe)", value: aovUplift, label: "AOV uplift", tooltip: "\u0420\u0430\u0437\u043D\u0438\u0446\u0430 \u0441\u0440\u0435\u0434\u043D\u0435\u0433\u043E \u0447\u0435\u043A\u0430 \u043C\u0435\u0436\u0434\u0443 \u043F\u043B\u0430\u0442\u0435\u0436\u0430\u043C\u0438 \u0441 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435\u043C \u0431\u043E\u043D\u0443\u0441\u043E\u0432 \u0438 \u0431\u0435\u0437. \u041F\u043E\u043B\u043E\u0436\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 uplift \u2014 \u043A\u043B\u0438\u0435\u043D\u0442\u044B \u0441 \u0431\u043E\u043D\u0443\u0441\u0430\u043C\u0438 \u0442\u0440\u0430\u0442\u044F\u0442 \u0431\u043E\u043B\u044C\u0448\u0435." },
      { iconId: "average", iconBg: "linear-gradient(135deg, #e0e7ff, #c7d2fe)", value: incRevPerc, label: "Incremental revenue %", tooltip: "\u0414\u043E\u043B\u044F \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0439 \u0432\u044B\u0440\u0443\u0447\u043A\u0438 \u043E\u0442 \u043F\u043B\u0430\u0442\u0435\u0436\u0435\u0439 \u0441 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435\u043C \u0431\u043E\u043D\u0443\u0441\u043E\u0432 \u0432 \u043E\u0431\u0449\u0435\u0439 \u0432\u044B\u0440\u0443\u0447\u043A\u0435 \u043F\u0435\u0440\u0438\u043E\u0434\u0430." }
    ];
    const returningCount = kpi?.retention?.returningClientsCount ?? 0;
    this.userCards = [
      { iconId: "clients", iconBg: "linear-gradient(135deg, #f0fdf4, #dcfce7)", value: (data.newClients?.count ?? 0).toString(), label: "\u041D\u043E\u0432\u044B\u0435 \u043A\u043B\u0438\u0435\u043D\u0442\u044B", change: data.newClients?.changeAbsolute != null ? `${data.newClients.changeAbsolute > 0 ? "+" : ""}${data.newClients.changeAbsolute}` : void 0, changeType: data.newClients?.changeAbsolute != null && data.newClients.changeAbsolute >= 0 ? "positive" : "negative" },
      { iconId: "clients", iconBg: "linear-gradient(135deg, #f0fdf4, #dcfce7)", value: String(returningCount), label: "\u0412\u0435\u0440\u043D\u0443\u0432\u0448\u0438\u0435\u0441\u044F \u043A\u043B\u0438\u0435\u043D\u0442\u044B" },
      { iconId: "clients", iconBg: "linear-gradient(135deg, #f0fdf4, #dcfce7)", value: (data.activeClients?.count ?? 0).toString(), label: "\u0410\u043A\u0442\u0438\u0432\u043D\u044B\u0435 \u043A\u043B\u0438\u0435\u043D\u0442\u044B", change: data.activeClients?.changeAbsolute != null ? `${data.activeClients.changeAbsolute > 0 ? "+" : ""}${data.activeClients.changeAbsolute}` : void 0, changeType: data.activeClients?.changeAbsolute != null && data.activeClients.changeAbsolute >= 0 ? "positive" : "negative" }
    ];
  }
  updateChartData(chartData) {
    console.log("Updating chart data with:", chartData);
    if (!chartData || chartData.length === 0) {
      console.log("Chart data is empty, clearing cache");
      this._chartDataCache = null;
      this.chartYAxisMax = 3e4;
      this.cdr.markForCheck();
      return;
    }
    const daysInMonth = this.getDaysInCurrentMonth();
    const svgWidth = 600;
    const svgHeight = 300;
    const padding = 50;
    const chartWidth = svgWidth - padding * 2;
    const chartHeight = svgHeight - padding * 2;
    const maxRevenue = Math.max(...chartData.map((d) => d.revenue || d.amount || 0), 1);
    this.chartYAxisMax = this.niceRoundMax(maxRevenue);
    const scaleMax = this.chartYAxisMax;
    const points = chartData.map((dataPoint) => {
      const day = dataPoint.day || dataPoint.dayNumber || 1;
      const dayRatio = daysInMonth > 1 ? (day - 1) / (daysInMonth - 1) : 0;
      const x = padding + dayRatio * chartWidth;
      const revenue = dataPoint.revenue || dataPoint.amount || 0;
      const y = svgHeight - padding - revenue / scaleMax * chartHeight;
      const transactions = dataPoint.transactionCount ?? dataPoint.transactions ?? 0;
      const bonusEarned = dataPoint.bonusesGranted ?? dataPoint.bonusEarned ?? dataPoint.bonusesAccrued ?? 0;
      const bonusUsed = dataPoint.bonusesUsed ?? dataPoint.bonusUsed ?? 0;
      return {
        x,
        y,
        day,
        revenue,
        transactions,
        bonusEarned,
        bonusUsed
      };
    });
    console.log("Updated chart cache with", points.length, "points");
    this._chartDataCache = points;
    this.cdr.markForCheck();
  }
  /** Round max value to a nice step for Y-axis (e.g. 27300 -> 30000). */
  niceRoundMax(value) {
    if (value <= 0)
      return 1e4;
    const order = Math.pow(10, Math.floor(Math.log10(value)));
    const normalized = value / order;
    const nice = normalized <= 1 ? 1 : normalized <= 2 ? 2 : normalized <= 5 ? 5 : 10;
    return Math.ceil(nice * order / 1e3) * 1e3 || 1e4;
  }
  /** Format value for Y-axis: 50000 -> "50 тыс", 10000000 -> "10 млн", then append " тг". */
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
  getYAxisLabels() {
    const max = this.chartYAxisMax || 3e4;
    const steps = 6;
    const labels = [];
    for (let i = steps; i >= 0; i--) {
      const v = Math.round(max * i / steps);
      labels.push(this.formatYAxisValue(v) + " \u0442\u0433");
    }
    return labels;
  }
  formatCurrency(amount, showSymbol = true) {
    if (amount === null || amount === void 0 || isNaN(amount)) {
      return showSymbol ? "0 \u20B8" : "0";
    }
    const formatted = amount.toLocaleString("ru-RU", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    });
    return showSymbol ? `${formatted} \u20B8` : formatted;
  }
  getInitials(name) {
    if (!name || name.trim() === "") {
      return "\u2014";
    }
    const parts = name.trim().split(" ").filter((n) => n.length > 0);
    if (parts.length === 0) {
      return "\u2014";
    }
    return parts.map((n) => n[0]).join("").toUpperCase().slice(0, 2);
  }
  formatAmount(amount) {
    return amount.toLocaleString("ru-RU", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    });
  }
  formatPaymentId(id) {
    if (!id)
      return "\u2014";
    if (id.includes("-")) {
      return id;
    }
    const numId = parseInt(id, 10);
    if (isNaN(numId)) {
      return id;
    }
    return `PAY-${String(numId).padStart(3, "0")}`;
  }
  getPaymentMethodForBadge(method) {
    if (!method)
      return null;
    const upperMethod = method.toUpperCase();
    if (upperMethod === "CASH" || upperMethod === "CARD" || upperMethod === "TRANSFER") {
      return upperMethod;
    }
    return null;
  }
  getPaymentMethodLabel(method) {
    const labels = {
      cash: "\u041D\u0430\u043B\u0438\u0447\u043D\u044B\u0435",
      card: "\u041A\u0430\u0440\u0442\u0430",
      transfer: "\u041F\u0435\u0440\u0435\u0432\u043E\u0434"
    };
    return labels[method] || method;
  }
  openTransactionModal() {
    this.transactionModalService.open();
  }
  openRefundModal(payment) {
    if (payment.isRefund) {
      return;
    }
    this.isProcessingRefund = false;
    const paymentForModal = {
      id: payment.id,
      clientId: payment.clientId,
      clientName: payment.clientName,
      clientPhone: payment.clientPhone,
      amount: payment.amount,
      bonusEarned: payment.bonusEarned,
      bonusUsed: payment.bonusUsed,
      bonusRevoked: payment.bonusRevoked,
      paymentMethod: payment.paymentMethod,
      isRefund: payment.isRefund,
      date: payment.date,
      time: payment.time
    };
    this.selectedPaymentForRefund = paymentForModal;
    this.showRefundModal = true;
  }
  closeRefundModal() {
    if (!this.isProcessingRefund) {
      this.showRefundModal = false;
      this.selectedPaymentForRefund = null;
      this.isProcessingRefund = false;
    }
  }
  onRefundModalVisibleChange(visible) {
    if (!visible && !this.isProcessingRefund) {
      this.closeRefundModal();
    }
  }
  confirmRefund(payment) {
    if (!payment || this.isProcessingRefund) {
      return;
    }
    this.isProcessingRefund = true;
    this.paymentsService.refundPayment(payment.id, {
      notes: payment.refundReason || ""
    }).subscribe({
      next: () => {
        this.toastService.success("\u0412\u043E\u0437\u0432\u0440\u0430\u0442 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D");
        this.loadRecentPayments();
        this.isProcessingRefund = false;
        this.showRefundModal = false;
        this.selectedPaymentForRefund = null;
      },
      error: (error) => {
        console.error("Error processing refund:", error);
        const errorMessage = error?.error?.message || "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0438 \u0432\u043E\u0437\u0432\u0440\u0430\u0442\u0430";
        this.toastService.error(errorMessage);
      }
    });
  }
  toggleRowExpansion(paymentId) {
    if (this.expandedRows.has(paymentId)) {
      this.expandedRows.delete(paymentId);
    } else {
      this.expandedRows.add(paymentId);
    }
  }
  isRowExpanded(paymentId) {
    return this.expandedRows.has(paymentId);
  }
  getDaysInCurrentMonth() {
    const now = /* @__PURE__ */ new Date();
    return new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
  }
  getChartDataPoints() {
    if (this._chartDataCache && this._chartDataCache.length > 0) {
      return this._chartDataCache;
    }
    const daysInMonth = this.getDaysInCurrentMonth();
    const svgWidth = 600;
    const svgHeight = 300;
    const padding = 50;
    const chartWidth = svgWidth - padding * 2;
    const chartHeight = svgHeight - padding * 2;
    const points = [];
    if (daysInMonth === 0)
      return points;
    for (let day = 1; day <= daysInMonth; day++) {
      const dayRatio = daysInMonth > 1 ? (day - 1) / (daysInMonth - 1) : 0;
      const x = padding + dayRatio * chartWidth;
      const baseRevenue = 5e3 + day / daysInMonth * 2e4;
      const variation = Math.sin(day * 0.2) * 2e3;
      const revenue = Math.round(baseRevenue + variation);
      const transactions = Math.floor(5 + Math.random() * 20 + day / daysInMonth * 10);
      const bonusEarned = Math.round(revenue * 0.01 * (0.8 + Math.random() * 0.4));
      const bonusUsed = Math.round(revenue * 5e-3 * Math.random());
      const y = svgHeight - padding - revenue / 3e4 * chartHeight;
      points.push({ x, y, day, revenue, transactions, bonusEarned, bonusUsed });
    }
    return points;
  }
  // Cache chart data to avoid recalculating on every hover
  _chartDataCache = null;
  getChartData() {
    if (this._chartDataCache && this._chartDataCache.length > 0) {
      return this._chartDataCache;
    }
    if (!this.isChartLoading) {
      return this.getChartDataPoints();
    }
    return [];
  }
  getMonthName() {
    const months = [
      "\u044F\u043D\u0432\u0430\u0440\u044F",
      "\u0444\u0435\u0432\u0440\u0430\u043B\u044F",
      "\u043C\u0430\u0440\u0442\u0430",
      "\u0430\u043F\u0440\u0435\u043B\u044F",
      "\u043C\u0430\u044F",
      "\u0438\u044E\u043D\u044F",
      "\u0438\u044E\u043B\u044F",
      "\u0430\u0432\u0433\u0443\u0441\u0442\u0430",
      "\u0441\u0435\u043D\u0442\u044F\u0431\u0440\u044F",
      "\u043E\u043A\u0442\u044F\u0431\u0440\u044F",
      "\u043D\u043E\u044F\u0431\u0440\u044F",
      "\u0434\u0435\u043A\u0430\u0431\u0440\u044F"
    ];
    return months[(/* @__PURE__ */ new Date()).getMonth()];
  }
  getTransactionsText(count) {
    const lastDigit = count % 10;
    const lastTwoDigits = count % 100;
    if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
      return "\u0442\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u0439";
    }
    if (lastDigit === 1) {
      return "\u0442\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u044F";
    }
    if (lastDigit >= 2 && lastDigit <= 4) {
      return "\u0442\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u0438";
    }
    return "\u0442\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u0439";
  }
  getChartPath() {
    const points = this.getChartData();
    if (points.length === 0)
      return "";
    let path = `M${points[0].x},${points[0].y}`;
    for (let i = 1; i < points.length; i++) {
      path += ` L${points[i].x},${points[i].y}`;
    }
    return path;
  }
  getAreaPath() {
    const points = this.getChartData();
    if (points.length === 0)
      return "";
    const svgHeight = 300;
    const padding = 50;
    let path = `M${points[0].x},${svgHeight - padding}`;
    path += ` L${points[0].x},${points[0].y}`;
    for (let i = 1; i < points.length; i++) {
      path += ` L${points[i].x},${points[i].y}`;
    }
    path += ` L${points[points.length - 1].x},${svgHeight - padding} Z`;
    return path;
  }
  getXAxisLabels() {
    const daysInMonth = this.getDaysInCurrentMonth();
    const labels = [];
    const positions = [
      1,
      Math.ceil(daysInMonth * 0.25),
      Math.ceil(daysInMonth * 0.5),
      Math.ceil(daysInMonth * 0.75),
      daysInMonth
    ];
    const uniquePositions = [...new Set(positions)].sort((a, b) => a - b);
    return uniquePositions.map((day) => day.toString());
  }
  /** Donut: r=40, circumference ≈ 251. */
  getDonutCircumference() {
    return 2 * Math.PI * 40;
  }
  getDonutLoyaltyDash() {
    if (!this.salesByLoyalty)
      return "0 251";
    const c = this.getDonutCircumference();
    const len = this.salesByLoyalty.loyaltyPercent / 100 * c;
    return `${len} ${c}`;
  }
  getDonutNonLoyaltyDash() {
    if (!this.salesByLoyalty)
      return "0 251";
    const c = this.getDonutCircumference();
    const len = this.salesByLoyalty.nonLoyaltyPercent / 100 * c;
    return `${len} ${c}`;
  }
  getDonutNonLoyaltyOffset() {
    if (!this.salesByLoyalty)
      return 0;
    const c = this.getDonutCircumference();
    const len = this.salesByLoyalty.loyaltyPercent / 100 * c;
    return -len;
  }
  getKpiPeriodRange() {
    const now = /* @__PURE__ */ new Date();
    const to = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59);
    let from;
    switch (this.kpiPeriod) {
      case "3m":
        from = new Date(now.getFullYear(), now.getMonth() - 3, now.getDate(), 0, 0, 0);
        break;
      case "6m":
        from = new Date(now.getFullYear(), now.getMonth() - 6, now.getDate(), 0, 0, 0);
        break;
      case "1y":
        from = new Date(now.getFullYear() - 1, now.getMonth(), now.getDate(), 0, 0, 0);
        break;
      case "all":
        from = new Date(2e3, 0, 1, 0, 0, 0);
        break;
      default:
        from = new Date(now.getFullYear(), now.getMonth(), 1, 0, 0, 0);
    }
    const fromStr = from.toISOString().slice(0, 19).replace("T", "T");
    const toStr = to.toISOString().slice(0, 19).replace("T", "T");
    return { from: fromStr, to: toStr };
  }
  onKpiPeriodChange(period) {
    this.kpiPeriod = period;
    const { from, to } = this.getKpiPeriodRange();
    this.analyticsService.getKpiDashboard(from, to).pipe(catchError(() => of(null))).subscribe((kpi) => {
      this.buildKpiMetricCardsOnly(kpi);
      this.cdr.detectChanges();
    });
  }
  /** Build only kpiMetricCards from KPI response (used when period changes). */
  buildKpiMetricCardsOnly(kpi) {
    const retention = kpi?.retention?.retentionRate != null ? Number(kpi.retention.retentionRate).toFixed(1) : "\u2014";
    const redemptionRate = kpi?.efficiency?.redemptionRate != null ? Number(kpi.efficiency.redemptionRate).toFixed(1) + "%" : "\u2014";
    const effectiveDiscount = kpi?.efficiency?.effectiveDiscount != null ? Number(kpi.efficiency.effectiveDiscount).toFixed(1) + "%" : "\u2014";
    const burnRate = kpi?.efficiency?.burnRate != null ? Number(kpi.efficiency.burnRate).toFixed(1) + "%" : "\u2014";
    const aovUplift = kpi?.uplift?.aovUplift != null ? Number(kpi.uplift.aovUplift).toFixed(1) + "%" : "\u2014";
    const incRevPerc = kpi?.revenue?.incrementalRevenuePercentage != null ? Number(kpi.revenue.incrementalRevenuePercentage).toFixed(1) + "%" : "\u2014";
    this.kpiMetricCards = [
      { iconId: "average", iconBg: "linear-gradient(135deg, #e0e7ff, #c7d2fe)", value: retention + (retention !== "\u2014" ? "%" : ""), label: "Retention", tooltip: "\u0414\u043E\u043B\u044F \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432, \u0441\u043E\u0432\u0435\u0440\u0448\u0438\u0432\u0448\u0438\u0445 2 \u0438 \u0431\u043E\u043B\u0435\u0435 \u043F\u043E\u043A\u0443\u043F\u043E\u043A \u0432 \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u043E\u043C \u043F\u0435\u0440\u0438\u043E\u0434\u0435, \u043E\u0442 \u043E\u0431\u0449\u0435\u0433\u043E \u0447\u0438\u0441\u043B\u0430 \u0430\u043A\u0442\u0438\u0432\u043D\u044B\u0445 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432. \u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442 \u0443\u0434\u0435\u0440\u0436\u0430\u043D\u0438\u0435." },
      { iconId: "average", iconBg: "linear-gradient(135deg, #e0e7ff, #c7d2fe)", value: redemptionRate, label: "Redemption rate", tooltip: "\u0414\u043E\u043B\u044F \u043D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u043D\u044B\u0445 \u0431\u043E\u043D\u0443\u0441\u043E\u0432, \u043A\u043E\u0442\u043E\u0440\u0443\u044E \u043A\u043B\u0438\u0435\u043D\u0442\u044B \u043F\u043E\u0442\u0440\u0430\u0442\u0438\u043B\u0438 \u0432 \u043F\u0435\u0440\u0438\u043E\u0434\u0435. \u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442, \u043D\u0430\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0430\u043A\u0442\u0438\u0432\u043D\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0442 \u0431\u043E\u043D\u0443\u0441\u044B." },
      { iconId: "average", iconBg: "linear-gradient(135deg, #e0e7ff, #c7d2fe)", value: effectiveDiscount, label: "Effective discount", tooltip: "\u0421\u0440\u0435\u0434\u043D\u0438\u0439 \u0444\u0430\u043A\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0441\u043A\u0438\u0434\u043E\u0447\u043D\u044B\u0439 \u043F\u0440\u043E\u0446\u0435\u043D\u0442 \u043F\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u043D\u044B\u043C \u0431\u043E\u043D\u0443\u0441\u0430\u043C \u043E\u0442\u043D\u043E\u0441\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0432\u044B\u0440\u0443\u0447\u043A\u0438 \u0432 \u043F\u0435\u0440\u0438\u043E\u0434\u0435." },
      { iconId: "average", iconBg: "linear-gradient(135deg, #e0e7ff, #c7d2fe)", value: burnRate, label: "Burn rate", tooltip: "\u0414\u043E\u043B\u044F \u043D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u043D\u044B\u0445 \u0437\u0430 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0435 12 \u043C\u0435\u0441\u044F\u0446\u0435\u0432 \u0431\u043E\u043D\u0443\u0441\u043E\u0432, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u0441\u0433\u043E\u0440\u0435\u043B\u0430 (\u0438\u0441\u0442\u0435\u043A \u0441\u0440\u043E\u043A). \u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442 \u043F\u043E\u0442\u0435\u0440\u0438 \u043E\u0442 \u043D\u0435\u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F." },
      { iconId: "average", iconBg: "linear-gradient(135deg, #e0e7ff, #c7d2fe)", value: aovUplift, label: "AOV uplift", tooltip: "\u0420\u0430\u0437\u043D\u0438\u0446\u0430 \u0441\u0440\u0435\u0434\u043D\u0435\u0433\u043E \u0447\u0435\u043A\u0430 \u043C\u0435\u0436\u0434\u0443 \u043F\u043B\u0430\u0442\u0435\u0436\u0430\u043C\u0438 \u0441 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435\u043C \u0431\u043E\u043D\u0443\u0441\u043E\u0432 \u0438 \u0431\u0435\u0437. \u041F\u043E\u043B\u043E\u0436\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 uplift \u2014 \u043A\u043B\u0438\u0435\u043D\u0442\u044B \u0441 \u0431\u043E\u043D\u0443\u0441\u0430\u043C\u0438 \u0442\u0440\u0430\u0442\u044F\u0442 \u0431\u043E\u043B\u044C\u0448\u0435." },
      { iconId: "average", iconBg: "linear-gradient(135deg, #e0e7ff, #c7d2fe)", value: incRevPerc, label: "Incremental revenue %", tooltip: "\u0414\u043E\u043B\u044F \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0439 \u0432\u044B\u0440\u0443\u0447\u043A\u0438 \u043E\u0442 \u043F\u043B\u0430\u0442\u0435\u0436\u0435\u0439 \u0441 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435\u043C \u0431\u043E\u043D\u0443\u0441\u043E\u0432 \u0432 \u043E\u0431\u0449\u0435\u0439 \u0432\u044B\u0440\u0443\u0447\u043A\u0435 \u043F\u0435\u0440\u0438\u043E\u0434\u0430." }
    ];
  }
  getXAxisLabelPositions() {
    const daysInMonth = this.getDaysInCurrentMonth();
    const svgWidth = 600;
    const padding = 50;
    const chartWidth = svgWidth - padding * 2;
    const labels = this.getXAxisLabels();
    return labels.map((label) => {
      const day = parseInt(label, 10);
      const dayRatio = daysInMonth > 1 ? (day - 1) / (daysInMonth - 1) : 0;
      return padding + dayRatio * chartWidth;
    });
  }
  openPaymentView(paymentId) {
    const payment = this.recentPayments.find((p) => p.id === paymentId);
    if (payment) {
      this.selectedPaymentSearchResult = {
        txId: payment.id,
        clientId: payment.clientId,
        clientName: payment.clientName,
        clientPhone: payment.clientPhone,
        clientEmail: null,
        amount: payment.amount,
        status: payment.isRefund ? "REFUNDED" : "COMPLETED",
        paymentMethod: payment.paymentMethod?.toUpperCase(),
        initiatedBy: payment.initiatedBy || null,
        createdAt: payment.date + "T" + payment.time,
        refundedPaymentTxId: null,
        bonusGranted: payment.bonusEarned,
        bonusUsed: payment.bonusUsed,
        bonusRevoked: payment.bonusRevoked,
        refundReason: payment.refundReason || null
      };
    }
    this.selectedPaymentTxId = paymentId;
    this.showPaymentViewModal = true;
  }
  closePaymentView() {
    this.showPaymentViewModal = false;
    this.selectedPaymentTxId = null;
    this.selectedPaymentSearchResult = null;
  }
  onPaymentUpdated() {
    this.loadRecentPayments();
  }
  static \u0275fac = function HomePageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HomePageComponent)(\u0275\u0275directiveInject(Store));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomePageComponent, selectors: [["app-home-page"]], decls: 6, vars: 8, consts: [[1, "page-wrapper"], [1, "dashboard"], ["class", "page-loading-container", 4, "ngIf"], [4, "ngIf"], [3, "visibleChange", "confirm", "visible", "payment", "isProcessing"], [3, "visibleChange", "paymentUpdated", "refundedPaymentClick", "visible", "paymentTxId", "paymentSearchResult"], [1, "page-loading-container"], ["type", "logo", "size", "large", 3, "visible", "overlay"], [1, "dashboard-header"], ["buttonType", "primary", "size", "medium", 3, "onClick"], ["viewBox", "0 0 24 24", "fill", "none", 1, "create-icon"], ["d", "M6 12H18M12 6V18", "stroke", "currentColor", "stroke-width", "2.5", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "create-label"], ["class", "expiring-bonuses-card", 4, "ngIf"], [1, "card-groups"], [1, "card-group"], [1, "card-group-header"], [1, "card-group-icon", "card-group-icon-payments"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"], [1, "card-group-title"], [1, "metric-list"], ["class", "metric-row", 4, "ngFor", "ngForOf"], [1, "card-group-icon", "card-group-icon-bonus"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5"], ["d", "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"], [1, "card-group-header", "card-group-header-kpi"], [1, "card-group-icon", "card-group-icon-kpi"], ["d", "M3 3v18h18"], ["d", "M18 17V9"], ["d", "M13 17V5"], ["d", "M8 17v-3"], [1, "kpi-period-select-wrapper"], [1, "kpi-period-select", 3, "ngModelChange", "ngModel"], ["value", "1m"], ["value", "3m"], ["value", "6m"], ["value", "1y"], ["value", "all"], ["class", "metric-row kpi-metric-row", 3, "title", 4, "ngFor", "ngForOf"], [1, "card-group-icon", "card-group-icon-users"], ["d", "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"], ["cx", "9", "cy", "7", "r", "4"], ["d", "M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"], ["class", "top-customers-list", 4, "ngIf"], [1, "charts-section"], [1, "chart-card", "line-chart-card"], [1, "chart-title"], [1, "chart-container"], [1, "chart-y-axis"], [1, "chart-y-axis-inner"], [4, "ngFor", "ngForOf"], [1, "chart-area"], [1, "chart-svg-wrapper"], ["viewBox", "0 0 600 300", "preserveAspectRatio", "none", 1, "line-chart"], ["id", "chartGradient", "x1", "0%", "y1", "0%", "x2", "0%", "y2", "100%"], ["offset", "0%", 2, "stop-color", "#22c55e", "stop-opacity", "0.3"], ["offset", "100%", 2, "stop-color", "#22c55e", "stop-opacity", "0.02"], ["stroke", "#e2e8f0", "stroke-width", "1", "opacity", "0.5"], ["x1", "50", "y1", "50", "x2", "550", "y2", "50", "vector-effect", "non-scaling-stroke"], ["x1", "50", "y1", "100", "x2", "550", "y2", "100", "vector-effect", "non-scaling-stroke"], ["x1", "50", "y1", "150", "x2", "550", "y2", "150", "vector-effect", "non-scaling-stroke"], ["x1", "50", "y1", "200", "x2", "550", "y2", "200", "vector-effect", "non-scaling-stroke"], ["x1", "50", "y1", "250", "x2", "550", "y2", "250", "vector-effect", "non-scaling-stroke"], ["fill", "url(#chartGradient)"], ["fill", "none", "stroke", "#22c55e", "stroke-width", "2.5", "stroke-linecap", "round", "stroke-linejoin", "round", "vector-effect", "non-scaling-stroke"], [1, "chart-points"], ["class", "chart-point-wrapper", 3, "left", "top", 4, "ngFor", "ngForOf"], [1, "chart-x-axis"], [1, "chart-x-axis-caption"], [1, "chart-x-axis-labels"], [3, "left", 4, "ngFor", "ngForOf"], ["class", "chart-card donut-chart-card", 4, "ngIf"], [1, "table-section"], [1, "table-header"], [1, "table-title"], ["routerLink", "/payments", 1, "view-all-link"], [1, "table-container"], [1, "payments-table"], [1, "th-id"], [1, "th-client"], [1, "th-amount"], [1, "th-bonuses"], [1, "th-method"], [1, "th-status"], [1, "th-date"], [1, "th-actions"], [1, "expiring-bonuses-card"], [1, "expiring-bonuses-content"], [1, "expiring-bonuses-icon"], ["viewBox", "0 0 24 24", "fill", "none"], ["d", "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z", "stroke", "currentColor", "stroke-width", "1.5"], [1, "expiring-bonuses-stats"], [1, "expiring-bonuses-label"], [1, "expiring-bonuses-value"], ["routerLink", "/bonus-expiring", "title", "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043A \u0441\u043F\u0438\u0441\u043A\u0443", 1, "expiring-bonuses-link"], ["d", "M9 18l6-6-6-6", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "metric-row"], [1, "metric-label"], [1, "metric-right"], [1, "metric-value"], ["class", "metric-change", 3, "positive", "negative", 4, "ngIf"], [1, "metric-change"], [1, "metric-row", "kpi-metric-row", 3, "title"], ["class", "metric-tooltip-icon", "tabindex", "0", 3, "title", 4, "ngIf"], ["tabindex", "0", 1, "metric-tooltip-icon", 3, "title"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["cx", "12", "cy", "12", "r", "10"], ["d", "M12 16v-4M12 8h.01"], [1, "top-customers-list"], [1, "top-customers-header"], [1, "top-customers-title"], ["title", "\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0432\u0441\u0435\u0445 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432 \u043F\u043E \u0441\u0443\u043C\u043C\u0435 \u0442\u0440\u0430\u0442", 1, "top-customers-link", 3, "routerLink", "queryParams"], ["viewBox", "0 0 24 24", "fill", "none", 1, "top-customers-arrow"], [1, "top-customers-ul"], ["class", "top-customer-item", 4, "ngFor", "ngForOf"], [1, "top-customer-item"], [1, "top-customer-link", 3, "routerLink"], [1, "top-customer-name"], [1, "top-customer-spent"], [1, "chart-point-wrapper"], [1, "chart-point"], [1, "chart-tooltip"], [1, "tooltip-day"], [1, "tooltip-stats"], [1, "tooltip-row"], [1, "tooltip-label"], [1, "tooltip-revenue"], [1, "tooltip-value"], [1, "tooltip-bonus-earned"], ["class", "tooltip-row", 4, "ngIf"], [1, "tooltip-bonus-used"], [1, "chart-card", "donut-chart-card"], [1, "donut-container"], ["viewBox", "0 0 100 100", "preserveAspectRatio", "xMidYMid meet", 1, "donut-chart"], ["cx", "50", "cy", "50", "r", "40", "fill", "none", "stroke", "#e2e8f0", "stroke-width", "16"], ["cx", "50", "cy", "50", "r", "40", "fill", "none", "stroke", "#22c55e", "stroke-width", "16", "stroke-dashoffset", "0", "transform", "rotate(-90 50 50)"], ["cx", "50", "cy", "50", "r", "40", "fill", "none", "stroke", "#e2e8f0", "stroke-width", "16", "transform", "rotate(-90 50 50)"], [1, "donut-legend"], [1, "legend-item"], [1, "legend-color", "loyalty"], [1, "legend-label"], [1, "legend-value"], [1, "legend-count"], [1, "legend-color", "non-loyalty"], [1, "payment-row"], [1, "td-id"], [1, "payment-id", "clickable", 3, "click"], [1, "td-client"], [1, "client-cell"], [1, "client-avatar"], [1, "client-info"], [1, "client-name-link", 3, "routerLink"], [1, "client-name"], [1, "client-phone"], [1, "td-amount"], [1, "amount-value"], [1, "td-bonuses"], [1, "bonus-info"], ["badgeType", "bonusGranted", "size", "medium", "icon", "star", "class", "bonus-badge", 4, "ngIf"], ["badgeType", "bonusUsed", "size", "medium", "icon", "check", "class", "bonus-badge", 4, "ngIf"], ["badgeType", "refund", "size", "medium", "icon", "refund", "class", "bonus-badge", 4, "ngIf"], ["class", "bonus-none", 4, "ngIf"], [1, "td-method"], ["badgeType", "paymentMethod", "size", "medium", 3, "paymentMethod"], [1, "td-status"], ["size", "medium", 3, "badgeType", "icon"], [1, "td-date"], [1, "date-info"], [1, "date-text"], [1, "time-text"], [1, "td-actions"], [1, "actions-cell"], [1, "action-link", 3, "routerLink"], ["iconButtonType", "view", "size", "small", "tooltip", "\u041F\u0440\u043E\u0441\u043C\u043E\u0442\u0440 \u043A\u043B\u0438\u0435\u043D\u0442\u0430"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none"], ["d", "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z", "stroke", "currentColor", "stroke-width", "1.5"], ["cx", "12", "cy", "12", "r", "3", "stroke", "currentColor", "stroke-width", "1.5"], ["iconButtonType", "refund", "size", "small", "tooltip", "\u0412\u043E\u0437\u0432\u0440\u0430\u0442", 3, "onClick", "disabled"], ["d", "M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["iconButtonType", "ghost", "size", "small", 3, "onClick", "tooltip"], ["d", "M6 9l6 6 6-6", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["class", "payment-details-row", 4, "ngIf"], ["badgeType", "bonusGranted", "size", "medium", "icon", "star", 1, "bonus-badge"], ["badgeType", "bonusUsed", "size", "medium", "icon", "check", 1, "bonus-badge"], ["badgeType", "refund", "size", "medium", "icon", "refund", 1, "bonus-badge"], [1, "bonus-none"], [1, "payment-details-row"], ["colspan", "9", 1, "payment-details-cell"], [1, "payment-details-content"], [1, "refund-details-grid"], [1, "refund-reason-section"], [1, "refund-label"], ["class", "refund-reason-text", 4, "ngIf"], ["class", "refund-reason-empty", 4, "ngIf"], [1, "refund-by-section"], ["class", "refund-by-text", 4, "ngIf"], ["class", "refund-by-empty", 4, "ngIf"], [1, "refund-reason-text"], [1, "refund-reason-empty"], [1, "refund-by-text"], [1, "refund-by-empty"]], template: function HomePageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275template(2, HomePageComponent_div_2_Template, 2, 2, "div", 2)(3, HomePageComponent_div_3_Template, 122, 14, "div", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "app-refund-confirmation-modal", 4);
      \u0275\u0275listener("visibleChange", function HomePageComponent_Template_app_refund_confirmation_modal_visibleChange_4_listener($event) {
        return ctx.onRefundModalVisibleChange($event);
      })("confirm", function HomePageComponent_Template_app_refund_confirmation_modal_confirm_4_listener($event) {
        return ctx.confirmRefund($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "app-payment-view-modal", 5);
      \u0275\u0275listener("visibleChange", function HomePageComponent_Template_app_payment_view_modal_visibleChange_5_listener() {
        return ctx.closePaymentView();
      })("paymentUpdated", function HomePageComponent_Template_app_payment_view_modal_paymentUpdated_5_listener() {
        return ctx.onPaymentUpdated();
      })("refundedPaymentClick", function HomePageComponent_Template_app_payment_view_modal_refundedPaymentClick_5_listener($event) {
        return ctx.openPaymentView($event);
      });
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("visible", ctx.showRefundModal)("payment", ctx.selectedPaymentForRefund)("isProcessing", ctx.isProcessingRefund);
      \u0275\u0275advance();
      \u0275\u0275property("visible", ctx.showPaymentViewModal)("paymentTxId", ctx.selectedPaymentTxId)("paymentSearchResult", ctx.selectedPaymentSearchResult);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, DecimalPipe, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgModel, RouterModule, RouterLink, BadgeComponent, ButtonComponent, RefundConfirmationModalComponent, IconButtonComponent, PaymentViewModalComponent, LoaderComponent], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n}\n.page-wrapper[_ngcontent-%COMP%] {\n  min-height: 100%;\n  margin: -2rem;\n  padding: 2rem;\n  background:\n    linear-gradient(\n      180deg,\n      #f0fdf4 0%,\n      #f8fafc 50%,\n      #f8fafc 100%);\n}\n.dashboard[_ngcontent-%COMP%] {\n  max-width: 1400px;\n  margin: 0 auto;\n  position: relative;\n  min-height: 400px;\n}\n.page-loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 60vh;\n  width: 100%;\n}\n.dashboard-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-start;\n  margin-bottom: 2rem;\n}\n.dashboard-title[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 0.25rem 0;\n}\n.refunds-icon[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.dashboard-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.9375rem;\n  color: #64748b;\n  margin: 0;\n}\n.new-transaction-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  background: #16A34A;\n  color: white;\n  border: none;\n  border-radius: 12px;\n  font-size: 0.9375rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.new-transaction-btn[_ngcontent-%COMP%]:hover {\n  background: #15803d;\n}\n.new-transaction-btn[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n}\n.expiring-bonuses-card[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #fef3c7 0%,\n      #fde68a 100%);\n  border: 1px solid #fcd34d;\n  border-radius: 16px;\n  padding: 1rem 1.25rem;\n  margin-bottom: 1.5rem;\n}\n.expiring-bonuses-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.expiring-bonuses-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  background: rgba(217, 119, 6, 0.15);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.expiring-bonuses-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  color: #d97706;\n}\n.expiring-bonuses-stats[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.expiring-bonuses-label[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  font-weight: 600;\n  color: #92400e;\n}\n.expiring-bonuses-value[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #78350f;\n}\n.expiring-bonuses-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  background: rgba(217, 119, 6, 0.2);\n  color: #b45309;\n  transition: background 0.2s, color 0.2s;\n}\n.expiring-bonuses-link[_ngcontent-%COMP%]:hover {\n  background: rgba(217, 119, 6, 0.3);\n  color: #92400e;\n}\n.expiring-bonuses-link[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n.card-groups[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  gap: 1.25rem;\n  margin-bottom: 1.5rem;\n}\n.card-group[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  background: #ffffff;\n  border-radius: 14px;\n  padding: 1rem 1.25rem;\n  border: 1px solid #e5e7eb;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n  transition: box-shadow 0.2s ease;\n}\n.card-group[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);\n}\n.card-group-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.625rem;\n  margin-bottom: 0.75rem;\n  padding-bottom: 0.625rem;\n  border-bottom: 1px solid #f1f5f9;\n}\n.card-group-icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.card-group-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n.card-group-icon-payments[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #dcfce7 0%,\n      #bbf7d0 100%);\n  color: #15803d;\n}\n.card-group-icon-bonus[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #fef3c7 0%,\n      #fde68a 100%);\n  color: #b45309;\n}\n.card-group-icon-kpi[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #e0e7ff 0%,\n      #c7d2fe 100%);\n  color: #4338ca;\n}\n.card-group-icon-users[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #fce7f3 0%,\n      #fbcfe8 100%);\n  color: #be185d;\n}\n.card-group-header-kpi[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.card-group-header-kpi[_ngcontent-%COMP%]   .card-group-title[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.kpi-period-select-wrapper[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.kpi-period-select[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  padding: 0.25rem 0.5rem;\n  border: 1px solid #e2e8f0;\n  border-radius: 6px;\n  background: #fff;\n  color: #0f172a;\n  cursor: pointer;\n}\n.kpi-period-select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #22c55e;\n}\n.metric-tooltip-icon[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  margin-left: 0.25rem;\n  cursor: help;\n  vertical-align: middle;\n  color: #64748b;\n}\n.metric-tooltip-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  display: block;\n}\n.metric-tooltip-icon[_ngcontent-%COMP%]:hover {\n  color: #22c55e;\n}\n.card-group-title[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n  letter-spacing: 0.01em;\n}\n.metric-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.375rem;\n}\n.metric-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n  gap: 0.5rem;\n  font-size: 0.8125rem;\n  line-height: 1.45;\n  padding: 0.25rem 0;\n}\n.metric-label[_ngcontent-%COMP%] {\n  color: #64748b;\n  flex-shrink: 0;\n}\n.metric-right[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: baseline;\n  gap: 0.35rem;\n}\n.metric-value[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #0f172a;\n}\n.metric-change[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.metric-change.positive[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.metric-change.negative[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.top-customers-list[_ngcontent-%COMP%] {\n  margin-top: 0.625rem;\n  padding-top: 0.625rem;\n  border-top: 1px solid #f1f5f9;\n}\n.top-customers-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.5rem;\n  margin-bottom: 0.35rem;\n}\n.top-customers-title[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #64748b;\n}\n.top-customers-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: #64748b;\n  text-decoration: none;\n  padding: 0.2rem;\n  border-radius: 6px;\n  transition: color 0.15s, background 0.15s;\n}\n.top-customers-link[_ngcontent-%COMP%]:hover {\n  color: #16a34a;\n  background: rgba(22, 163, 74, 0.08);\n}\n.top-customers-arrow[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n.top-customers-ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.top-customer-item[_ngcontent-%COMP%] {\n  margin-bottom: 0.125rem;\n}\n.top-customer-link[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.25rem 0;\n  text-decoration: none;\n  color: #0f172a;\n  font-size: 0.8125rem;\n  transition: color 0.15s;\n}\n.top-customer-link[_ngcontent-%COMP%]:hover {\n  color: #16a34a;\n}\n.top-customer-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 70%;\n}\n.top-customer-spent[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #16a34a;\n  flex-shrink: 0;\n}\n@media (max-width: 900px) {\n  .card-groups[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .card-group[_ngcontent-%COMP%] {\n    min-width: calc(50% - 0.5rem);\n  }\n}\n@media (max-width: 500px) {\n  .card-group[_ngcontent-%COMP%] {\n    min-width: 100%;\n  }\n}\n.kpi-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 1rem;\n}\n.kpi-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.25rem;\n}\n.kpi-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  color: #16A34A;\n  display: block;\n}\n.kpi-change[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  font-weight: 600;\n  padding: 0.25rem 0.625rem;\n  border-radius: 20px;\n  background: #f0fdf4;\n  color: #16A34A;\n}\n.kpi-change.positive[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  color: #16A34A;\n}\n.kpi-change.negative[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #dc2626;\n}\n.kpi-value[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin-bottom: 0.25rem;\n}\n.kpi-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #64748b;\n}\n.charts-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n}\n@media (max-width: 1024px) {\n  .charts-section[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.chart-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n}\n.chart-title[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #0f172a;\n  margin: 0 0 1.5rem 0;\n}\n.line-chart-card[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  min-height: 350px;\n  overflow: visible;\n}\n.chart-container[_ngcontent-%COMP%] {\n  display: flex;\n  height: 320px;\n  overflow: visible;\n}\n.chart-y-axis[_ngcontent-%COMP%] {\n  height: 300px;\n  flex-shrink: 0;\n  padding-right: 1rem;\n  font-size: 0.75rem;\n  color: #94a3b8;\n}\n.chart-y-axis-inner[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 250px;\n}\n.chart-area[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  min-height: 0;\n  overflow: visible;\n}\n.chart-svg-wrapper[_ngcontent-%COMP%] {\n  height: 300px;\n  flex-shrink: 0;\n  position: relative;\n  overflow: visible;\n}\n.line-chart[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: block;\n}\n.chart-points[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: visible;\n}\n.chart-point-wrapper[_ngcontent-%COMP%] {\n  position: absolute;\n  transform: translate(-50%, -50%);\n  cursor: pointer;\n  z-index: 1;\n  pointer-events: auto;\n  padding: 8px;\n}\n.chart-point-wrapper[_ngcontent-%COMP%]:hover {\n  z-index: 10;\n}\n.chart-point[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  background: #22c55e;\n  border-radius: 50%;\n  transition: transform 0.15s ease, box-shadow 0.15s ease;\n}\n.chart-point-wrapper[_ngcontent-%COMP%]:hover   .chart-point[_ngcontent-%COMP%] {\n  transform: scale(1.3);\n  box-shadow: 0 0 0 4px rgba(34, 197, 94, 0.2);\n}\n.chart-point.last-point[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  background: white;\n  border: 2.5px solid #22c55e;\n  box-sizing: border-box;\n}\n.chart-tooltip[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: calc(100% + 10px);\n  left: 50%;\n  transform: translateX(-50%) translateY(6px) scale(0.97);\n  background: #1f2937;\n  color: white;\n  padding: 0.625rem 0.875rem;\n  border-radius: 8px;\n  font-size: 0.8125rem;\n  white-space: nowrap;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  pointer-events: none;\n}\n.chart-tooltip[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  transform: translateX(-50%);\n  border: 6px solid transparent;\n  border-top-color: #1f2937;\n  transition: opacity 0.3s ease;\n}\n.chart-point-wrapper[_ngcontent-%COMP%]:hover   .chart-tooltip[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n  transform: translateX(-50%) translateY(0) scale(1);\n}\n.tooltip-day[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin-bottom: 0.5rem;\n  padding-bottom: 0.375rem;\n  border-bottom: 1px solid #374151;\n  color: #f3f4f6;\n}\n.tooltip-stats[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.tooltip-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 1rem;\n}\n.tooltip-label[_ngcontent-%COMP%] {\n  color: #9ca3af;\n  font-size: 0.75rem;\n}\n.tooltip-value[_ngcontent-%COMP%] {\n  color: #f3f4f6;\n  font-weight: 500;\n}\n.tooltip-revenue[_ngcontent-%COMP%] {\n  color: #22c55e;\n  font-weight: 600;\n}\n.tooltip-bonus-earned[_ngcontent-%COMP%] {\n  color: #fbbf24;\n  font-weight: 600;\n}\n.tooltip-bonus-used[_ngcontent-%COMP%] {\n  color: #f472b6;\n  font-weight: 600;\n}\n.chart-x-axis[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 0.5rem;\n  height: 20px;\n  padding-top: 0.5rem;\n  font-size: 0.75rem;\n  color: #94a3b8;\n}\n.chart-x-axis-caption[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  font-size: 0.75rem;\n  color: #94a3b8;\n}\n.chart-x-axis-labels[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1;\n  height: 100%;\n}\n.chart-x-axis-labels[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n  transform: translateX(-50%);\n}\n.donut-chart-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 280px;\n  width: 320px;\n  flex-shrink: 0;\n}\n.donut-container[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1.5rem;\n  overflow: visible;\n  min-height: 220px;\n}\n.donut-chart[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  display: block;\n  overflow: visible;\n}\n.donut-legend[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 2rem;\n  padding-top: 0.5rem;\n}\n.legend-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.8125rem;\n  color: #64748b;\n}\n.legend-color[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  border-radius: 3px;\n  flex-shrink: 0;\n}\n.legend-color.loyalty[_ngcontent-%COMP%] {\n  background: #22c55e;\n}\n.legend-color.non-loyalty[_ngcontent-%COMP%] {\n  background: #e2e8f0;\n}\n.legend-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #64748b;\n}\n.legend-value[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 1rem;\n  color: #0f172a;\n}\n.legend-count[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: #64748b;\n  margin-top: 0.15rem;\n}\n.table-section[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.table-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n.table-title[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #0f172a;\n  margin: 0;\n}\n.view-all-link[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #16A34A;\n  text-decoration: none;\n  font-weight: 500;\n  transition: color 0.2s ease;\n}\n.view-all-link[_ngcontent-%COMP%]:hover {\n  color: #15803d;\n}\n.table-container[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n  border: 1px solid #e5e7eb;\n  overflow: hidden;\n}\n.payments-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.payments-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 1rem;\n  text-align: left;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  background: #f8fafc;\n  border-bottom: 1px solid #e5e7eb;\n}\n.payments-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border-bottom: 1px solid #f1f5f9;\n}\n.payment-row[_ngcontent-%COMP%] {\n  transition: background 0.15s;\n}\n.payment-row[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n.payment-row[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.td-id[_ngcontent-%COMP%] {\n  min-width: 100px;\n}\n.payment-id[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-weight: 600;\n  color: #64748b;\n  font-size: 0.875rem;\n}\n.payment-id.clickable[_ngcontent-%COMP%] {\n  color: #64748b;\n  cursor: pointer;\n  text-decoration: underline;\n  transition: color 0.2s;\n}\n.payment-id.clickable[_ngcontent-%COMP%]:hover {\n  color: #475569;\n}\n.client-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.client-avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  background:\n    linear-gradient(\n      135deg,\n      #f0fdf4,\n      #dcfce7);\n  color: #16A34A;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.875rem;\n  font-weight: 600;\n  flex-shrink: 0;\n  flex-shrink: 0;\n}\n.client-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.15rem;\n}\n.client-name-link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: inherit;\n  transition: color 0.15s;\n}\n.client-name-link[_ngcontent-%COMP%]:hover {\n  color: #16A34A;\n}\n.client-name[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #1f2937;\n  cursor: pointer;\n}\n.client-name-link[_ngcontent-%COMP%]:hover   .client-name[_ngcontent-%COMP%] {\n  color: #16A34A;\n}\n.client-phone[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #64748b;\n}\n.amount-value[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 600;\n  color: #16A34A;\n}\n.bonus-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n}\n.bonus-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.bonus-none[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #94a3b8;\n}\n.date-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.15rem;\n}\n.date-text[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #1f2937;\n  font-weight: 500;\n}\n.time-text[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #64748b;\n}\n.actions-cell[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n}\n.action-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  text-decoration: none;\n  color: inherit;\n}\n.payments-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.payment-details-row[_ngcontent-%COMP%] {\n  background: transparent;\n}\n.payments-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.payment-details-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-top: none;\n  padding: 0;\n}\n.payment-details-cell[_ngcontent-%COMP%] {\n  padding: 0 !important;\n  background: transparent;\n}\n.payment-details-content[_ngcontent-%COMP%] {\n  padding: 1rem 1.5rem;\n  overflow: hidden;\n  animation: _ngcontent-%COMP%_slideDown 0.3s ease-out;\n}\n@keyframes _ngcontent-%COMP%_slideDown {\n  from {\n    opacity: 0;\n    max-height: 0;\n  }\n  to {\n    opacity: 1;\n    max-height: 300px;\n  }\n}\n.refund-details-grid[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 2rem;\n}\n.refund-reason-section[_ngcontent-%COMP%] {\n  flex: 1;\n  text-align: left;\n}\n.refund-by-section[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  text-align: right;\n  min-width: 200px;\n}\n.refund-reason-section[_ngcontent-%COMP%], \n.refund-by-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.refund-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #475569;\n}\n.refund-reason-text[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  background: transparent;\n  border: none;\n  border-radius: 0;\n  font-size: 0.875rem;\n  color: #1f2937;\n  line-height: 1.6;\n  white-space: pre-wrap;\n  text-align: left;\n}\n.refund-by-text[_ngcontent-%COMP%] {\n  padding: 0.75rem 0;\n  background: transparent;\n  border: none;\n  border-radius: 0;\n  font-size: 0.875rem;\n  color: #1f2937;\n  line-height: 1.6;\n  white-space: pre-wrap;\n  text-align: right;\n}\n.refund-reason-empty[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  background: transparent;\n  border: none;\n  border-radius: 0;\n  font-size: 0.875rem;\n  color: #94a3b8;\n  font-style: italic;\n  text-align: left;\n}\n.refund-by-empty[_ngcontent-%COMP%] {\n  padding: 0.75rem 0;\n  background: transparent;\n  border: none;\n  border-radius: 0;\n  font-size: 0.875rem;\n  color: #94a3b8;\n  font-style: italic;\n  text-align: right;\n}\n.actions-cell[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  transition: transform 0.3s ease;\n}\n.actions-cell[_ngcontent-%COMP%]   svg.rotated[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n[_nghost-%COMP%]     app-button svg, \napp-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  flex-shrink: 0;\n  display: block;\n}\n[_nghost-%COMP%]     app-button.size-small svg, \napp-button.size-small[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n.btn-icon[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  flex-shrink: 0;\n  display: block;\n}\n[_nghost-%COMP%]     .dashboard-header app-button button {\n  height: 44px;\n  padding: 0 1rem;\n}\n[_nghost-%COMP%]     .dashboard-header app-button button svg.create-icon {\n  width: 32px;\n  height: 32px;\n  flex-shrink: 0;\n}\n[_nghost-%COMP%]     app-button button .create-label {\n  display: inline-flex;\n  align-items: center;\n  line-height: 1.5;\n}\n@media (max-width: 768px) {\n  .page-wrapper[_ngcontent-%COMP%] {\n    margin: -1rem;\n    padding: 1rem;\n  }\n  .dashboard-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n  }\n  .new-transaction-btn[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n  .clients-table[_ngcontent-%COMP%] {\n    display: block;\n    overflow-x: auto;\n  }\n}\n/*# sourceMappingURL=home-page.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomePageComponent, [{
    type: Component,
    args: [{ selector: "app-home-page", standalone: true, imports: [CommonModule, FormsModule, RouterModule, BadgeComponent, ButtonComponent, RefundConfirmationModalComponent, IconButtonComponent, PaymentViewModalComponent, LoaderComponent], template: `
    <div class="page-wrapper">
      <div class="dashboard">
        <!-- Loading: \u0442\u043E\u043B\u044C\u043A\u043E \u0431\u043B\u043E\u043A \u0430\u043D\u0430\u043B\u0438\u0442\u0438\u043A\u0438 (\u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438). \u0413\u0440\u0430\u0444\u0438\u043A \u0438 \u0442\u0430\u0431\u043B\u0438\u0446\u0430 \u0433\u0440\u0443\u0437\u044F\u0442\u0441\u044F \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u043E. -->
        <div class="page-loading-container" *ngIf="isLoading">
          <app-loader [visible]="true" [overlay]="false" type="logo" size="large"></app-loader>
        </div>
        
        <div *ngIf="!isLoading">
          <!-- Header -->
      <div class="dashboard-header">
        <app-button
          buttonType="primary"
          size="medium"
          (onClick)="openTransactionModal()">
          <svg class="create-icon" viewBox="0 0 24 24" fill="none">
            <path d="M6 12H18M12 6V18" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span class="create-label">\u041D\u043E\u0432\u0430\u044F \u0442\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u044F</span>
        </app-button>
      </div>

      <!-- Bonuses expiring soon card (only when there are expiring bonuses) -->
      <div class="expiring-bonuses-card" *ngIf="expiringSoon && expiringSoon.clientCount > 0">
        <div class="expiring-bonuses-content">
          <div class="expiring-bonuses-icon">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" stroke-width="1.5"/>
            </svg>
          </div>
          <div class="expiring-bonuses-stats">
            <span class="expiring-bonuses-label">\u0411\u043E\u043D\u0443\u0441\u044B \u0438\u0441\u0442\u0435\u043A\u0430\u044E\u0442 \u0432 \u0431\u043B\u0438\u0436\u0430\u0439\u0448\u0438\u0435 7 \u0434\u043D\u0435\u0439</span>
            <span class="expiring-bonuses-value">{{ expiringSoon.clientCount }} {{ expiringSoon.clientCount === 1 ? '\u043A\u043B\u0438\u0435\u043D\u0442' : expiringSoon.clientCount < 5 ? '\u043A\u043B\u0438\u0435\u043D\u0442\u0430' : '\u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432' }} \xB7 {{ formatAmount(expiringSoon.totalAmount) }} \u20B8</span>
          </div>
          <a routerLink="/bonus-expiring" class="expiring-bonuses-link" title="\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043A \u0441\u043F\u0438\u0441\u043A\u0443">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M9 18l6-6-6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- \u0413\u0440\u0443\u043F\u043F\u044B \u0432 \u043E\u0434\u043D\u0443 \u0441\u0442\u0440\u043E\u043A\u0443 \u0441 \u0438\u043A\u043E\u043D\u043A\u0430\u043C\u0438 -->
      <div class="card-groups">
        <section class="card-group">
          <div class="card-group-header">
            <div class="card-group-icon card-group-icon-payments">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>
            </div>
            <h3 class="card-group-title">\u041F\u043B\u0430\u0442\u0435\u0436\u0438</h3>
          </div>
          <div class="metric-list">
            <div class="metric-row" *ngFor="let kpi of paymentCards">
              <span class="metric-label">{{ kpi.label }}</span>
              <span class="metric-right">
                <span class="metric-value">{{ kpi.value }}</span>
                <span class="metric-change" *ngIf="kpi.change" [class.positive]="kpi.changeType === 'positive'" [class.negative]="kpi.changeType === 'negative'">{{ kpi.change }}</span>
              </span>
            </div>
          </div>
        </section>
        <section class="card-group">
          <div class="card-group-header">
            <div class="card-group-icon card-group-icon-bonus">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            </div>
            <h3 class="card-group-title">\u0411\u043E\u043D\u0443\u0441\u044B</h3>
          </div>
          <div class="metric-list">
            <div class="metric-row" *ngFor="let kpi of bonusCards">
              <span class="metric-label">{{ kpi.label }}</span>
              <span class="metric-right">
                <span class="metric-value">{{ kpi.value }}</span>
                <span class="metric-change" *ngIf="kpi.change" [class.positive]="kpi.changeType === 'positive'" [class.negative]="kpi.changeType === 'negative'">{{ kpi.change }}</span>
              </span>
            </div>
          </div>
        </section>
        <section class="card-group">
          <div class="card-group-header card-group-header-kpi">
            <div class="card-group-icon card-group-icon-kpi">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>
            </div>
            <h3 class="card-group-title">KPI</h3>
            <div class="kpi-period-select-wrapper">
              <select class="kpi-period-select" [ngModel]="kpiPeriod" (ngModelChange)="onKpiPeriodChange($event)">
                <option value="1m">\u0417\u0430 \u043C\u0435\u0441\u044F\u0446</option>
                <option value="3m">\u0417\u0430 3 \u043C\u0435\u0441\u044F\u0446\u0430</option>
                <option value="6m">\u0417\u0430 6 \u043C\u0435\u0441\u044F\u0446\u0435\u0432</option>
                <option value="1y">\u0417\u0430 \u0433\u043E\u0434</option>
                <option value="all">\u0417\u0430 \u0432\u0441\u0435 \u0432\u0440\u0435\u043C\u044F</option>
              </select>
            </div>
          </div>
            <div class="metric-list">
            <div class="metric-row kpi-metric-row" *ngFor="let kpi of kpiMetricCards" [title]="kpi.tooltip">
              <span class="metric-label">
                {{ kpi.label }}
                <span class="metric-tooltip-icon" *ngIf="kpi.tooltip" [title]="kpi.tooltip" tabindex="0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
                </span>
              </span>
              <span class="metric-value">{{ kpi.value }}</span>
            </div>
          </div>
        </section>
        <section class="card-group">
          <div class="card-group-header">
            <div class="card-group-icon card-group-icon-users">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>
            </div>
            <h3 class="card-group-title">\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438</h3>
          </div>
          <div class="metric-list">
            <div class="metric-row" *ngFor="let kpi of userCards">
              <span class="metric-label">{{ kpi.label }}</span>
              <span class="metric-right">
                <span class="metric-value">{{ kpi.value }}</span>
                <span class="metric-change" *ngIf="kpi.change" [class.positive]="kpi.changeType === 'positive'" [class.negative]="kpi.changeType === 'negative'">{{ kpi.change }}</span>
              </span>
            </div>
          </div>
          <div class="top-customers-list" *ngIf="topCustomers.length > 0">
            <div class="top-customers-header">
              <span class="top-customers-title">\u0422\u043E\u043F \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432</span>
              <a [routerLink]="['/clients']" [queryParams]="{ sort: 'totalAmount', order: 'desc' }" class="top-customers-link" title="\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0432\u0441\u0435\u0445 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432 \u043F\u043E \u0441\u0443\u043C\u043C\u0435 \u0442\u0440\u0430\u0442">
                <svg viewBox="0 0 24 24" fill="none" class="top-customers-arrow">
                  <path d="M9 18l6-6-6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
            </div>
            <ul class="top-customers-ul">
              <li class="top-customer-item" *ngFor="let c of topCustomers.slice(0, 3)">
                <a [routerLink]="['/clients', c.clientId]" class="top-customer-link">
                  <span class="top-customer-name">{{ c.name }}</span>
                  <span class="top-customer-spent">{{ formatAmount(c.totalSpent) }} \u20B8</span>
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>

      <!-- Charts Section: line chart + donut -->
      <div class="charts-section">
        <!-- Line Chart -->
        <div class="chart-card line-chart-card">
          <h3 class="chart-title">\u0412\u044B\u0440\u0443\u0447\u043A\u0430 \u0437\u0430 \u043C\u0435\u0441\u044F\u0446</h3>
          <div class="chart-container">
            <div class="chart-y-axis">
              <div class="chart-y-axis-inner">
                <span *ngFor="let label of getYAxisLabels()">{{ label }}</span>
              </div>
            </div>
            <div class="chart-area">
              <div class="chart-svg-wrapper">
                <svg viewBox="0 0 600 300" preserveAspectRatio="none" class="line-chart">
                  <defs>
                    <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" style="stop-color:#22c55e;stop-opacity:0.3" />
                      <stop offset="100%" style="stop-color:#22c55e;stop-opacity:0.02" />
                    </linearGradient>
                  </defs>
                  <!-- Grid lines -->
                  <g stroke="#e2e8f0" stroke-width="1" opacity="0.5">
                    <line x1="50" y1="50" x2="550" y2="50" vector-effect="non-scaling-stroke"/>
                    <line x1="50" y1="100" x2="550" y2="100" vector-effect="non-scaling-stroke"/>
                    <line x1="50" y1="150" x2="550" y2="150" vector-effect="non-scaling-stroke"/>
                    <line x1="50" y1="200" x2="550" y2="200" vector-effect="non-scaling-stroke"/>
                    <line x1="50" y1="250" x2="550" y2="250" vector-effect="non-scaling-stroke"/>
                  </g>
                  <!-- Area fill -->
                  <path [attr.d]="getAreaPath()" fill="url(#chartGradient)" />
                  <!-- Line -->
                  <path [attr.d]="getChartPath()" fill="none" stroke="#22c55e" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
                </svg>
                <!-- Data points rendered as HTML for correct circles -->
                <div class="chart-points">
                  <div 
                    *ngFor="let point of getChartData(); let last = last"
                    class="chart-point-wrapper"
                    [style.left.%]="(point.x / 600) * 100"
                    [style.top.%]="(point.y / 300) * 100">
                    <div class="chart-point" [class.last-point]="last"></div>
                    <div class="chart-tooltip">
                      <div class="tooltip-day">{{ point.day }} {{ getMonthName() }}</div>
                      <div class="tooltip-stats">
                        <div class="tooltip-row">
                          <span class="tooltip-label">\u0412\u044B\u0440\u0443\u0447\u043A\u0430:</span>
                          <span class="tooltip-revenue">{{ formatAmount(point.revenue) }} \u20B8</span>
                        </div>
                        <div class="tooltip-row">
                          <span class="tooltip-label">\u0422\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u0439:</span>
                          <span class="tooltip-value">{{ point.transactions }}</span>
                        </div>
                        <div class="tooltip-row">
                          <span class="tooltip-label">\u041D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u043E:</span>
                          <span class="tooltip-bonus-earned">+{{ formatAmount(point.bonusEarned) }}</span>
                        </div>
                        <div class="tooltip-row" *ngIf="point.bonusUsed > 0">
                          <span class="tooltip-label">\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u043E:</span>
                          <span class="tooltip-bonus-used">-{{ formatAmount(point.bonusUsed) }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="chart-x-axis">
                <span class="chart-x-axis-caption">\u0414\u043D\u0438</span>
                <div class="chart-x-axis-labels">
                  <span *ngFor="let label of getXAxisLabels(); let i = index" [style.left.%]="(getXAxisLabelPositions()[i] / 600) * 100">{{ label }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Donut: Sales by Loyalty (Loyalty vs Non-loyalty) -->
        <div class="chart-card donut-chart-card" *ngIf="salesByLoyalty">
          <h3 class="chart-title">\u041F\u0440\u043E\u0434\u0430\u0436\u0438</h3>
          <div class="donut-container">
            <svg class="donut-chart" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
              <circle cx="50" cy="50" r="40" fill="none" stroke="#e2e8f0" stroke-width="16"/>
              <circle cx="50" cy="50" r="40" fill="none" stroke="#22c55e" stroke-width="16"
                [attr.stroke-dasharray]="getDonutLoyaltyDash()"
                stroke-dashoffset="0" transform="rotate(-90 50 50)"/>
              <circle cx="50" cy="50" r="40" fill="none" stroke="#e2e8f0" stroke-width="16"
                [attr.stroke-dasharray]="getDonutNonLoyaltyDash()"
                [attr.stroke-dashoffset]="getDonutNonLoyaltyOffset()" transform="rotate(-90 50 50)"/>
            </svg>
          </div>
          <div class="donut-legend">
            <div class="legend-item">
              <span class="legend-color loyalty"></span>
              <div>
                <div class="legend-label">\u0421 \u0431\u043E\u043D\u0443\u0441\u0430\u043C\u0438</div>
                <div class="legend-value">{{ (salesByLoyalty.loyaltyPercent | number:'1.0-0') }}%</div>
                <div class="legend-count">{{ salesByLoyalty.loyaltyCount | number }}</div>
              </div>
            </div>
            <div class="legend-item">
              <span class="legend-color non-loyalty"></span>
              <div>
                <div class="legend-label">\u0411\u0435\u0437 \u0431\u043E\u043D\u0443\u0441\u043E\u0432</div>
                <div class="legend-value">{{ (salesByLoyalty.nonLoyaltyPercent | number:'1.0-0') }}%</div>
                <div class="legend-count">{{ salesByLoyalty.nonLoyaltyCount | number }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Recent Payments Table -->
      <div class="table-section">
        <div class="table-header">
          <h3 class="table-title">\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0435 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438</h3>
          <a routerLink="/payments" class="view-all-link">\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0432\u0441\u0435 \u2192</a>
        </div>
        <div class="table-container">
          <table class="payments-table">
            <thead>
              <tr>
                <th class="th-id">ID \u043F\u043B\u0430\u0442\u0435\u0436\u0430</th>
                <th class="th-client">\u041A\u043B\u0438\u0435\u043D\u0442</th>
                <th class="th-amount">\u0421\u0443\u043C\u043C\u0430</th>
                <th class="th-bonuses">\u0411\u043E\u043D\u0443\u0441\u044B</th>
                <th class="th-method">\u0421\u043F\u043E\u0441\u043E\u0431 \u043E\u043F\u043B\u0430\u0442\u044B</th>
                <th class="th-status">\u0421\u0442\u0430\u0442\u0443\u0441</th>
                <th class="th-date">\u0414\u0430\u0442\u0430 \u0438 \u0432\u0440\u0435\u043C\u044F</th>
                <th class="th-actions">\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F</th>
              </tr>
            </thead>
            <tbody>
              <ng-container *ngFor="let payment of recentPayments">
              <tr class="payment-row" [class.expanded]="isRowExpanded(payment.id)">
                <td class="td-id">
                  <span class="payment-id clickable" (click)="openPaymentView(payment.id)">#{{ formatPaymentId(payment.id) }}</span>
                </td>
                <td class="td-client">
                  <div class="client-cell">
                    <div class="client-avatar">
                      {{ getInitials(payment.clientName) }}
                    </div>
                    <div class="client-info">
                      <a [routerLink]="['/clients', payment.clientId]" class="client-name-link">
                        <span class="client-name">{{ payment.clientName }}</span>
                      </a>
                      <span class="client-phone">{{ payment.clientPhone }}</span>
                    </div>
                  </div>
                </td>
                <td class="td-amount">
                  <span class="amount-value">{{ formatAmount(payment.amount) }} \u20B8</span>
                </td>
                <td class="td-bonuses">
                  <div class="bonus-info">
                    <app-badge 
                      *ngIf="payment.bonusEarned > 0"
                      badgeType="bonusGranted" 
                      size="medium"
                      icon="star"
                      class="bonus-badge">
                      +{{ formatAmount(payment.bonusEarned) }}
                    </app-badge>
                    <app-badge 
                      *ngIf="payment.bonusUsed > 0"
                      badgeType="bonusUsed" 
                      size="medium"
                      icon="check"
                      class="bonus-badge">
                      -{{ formatAmount(payment.bonusUsed) }}
                    </app-badge>
                    <app-badge 
                      *ngIf="payment.bonusRevoked > 0"
                      badgeType="refund" 
                      size="medium"
                      icon="refund"
                      class="bonus-badge">
                      -{{ formatAmount(payment.bonusRevoked) }}
                    </app-badge>
                    <span class="bonus-none" *ngIf="payment.bonusEarned === 0 && payment.bonusUsed === 0 && payment.bonusRevoked === 0">\u2014</span>
                  </div>
                </td>
                <td class="td-method">
                  <app-badge 
                    badgeType="paymentMethod" 
                    size="medium"
                    [paymentMethod]="getPaymentMethodForBadge(payment.paymentMethod)">
                  </app-badge>
                </td>
                <td class="td-status">
                  <app-badge 
                    [badgeType]="payment.isRefund ? 'refund' : 'payment'" 
                    size="medium"
                    [icon]="payment.isRefund ? 'refund' : 'payment'">
                    {{ payment.isRefund ? '\u0412\u043E\u0437\u0432\u0440\u0430\u0442' : '\u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E' }}
                  </app-badge>
                </td>
                <td class="td-date">
                  <div class="date-info">
                    <span class="date-text">{{ payment.date }}</span>
                    <span class="time-text">{{ payment.time }}</span>
                  </div>
                </td>
                <td class="td-actions">
                  <div class="actions-cell">
                    <a [routerLink]="['/clients', payment.clientId]" class="action-link">
                      <app-icon-button
                        iconButtonType="view"
                        size="small"
                        tooltip="\u041F\u0440\u043E\u0441\u043C\u043E\u0442\u0440 \u043A\u043B\u0438\u0435\u043D\u0442\u0430">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" stroke-width="1.5"/>
                          <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="1.5"/>
                        </svg>
                      </app-icon-button>
                    </a>
                    <app-icon-button
                      iconButtonType="refund"
                      size="small"
                      tooltip="\u0412\u043E\u0437\u0432\u0440\u0430\u0442"
                      [disabled]="payment.isRefund"
                      (onClick)="openRefundModal(payment)">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                        <path d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </app-icon-button>
                    <app-icon-button
                      iconButtonType="ghost"
                      size="small"
                      [tooltip]="isRowExpanded(payment.id) ? '\u0421\u043A\u0440\u044B\u0442\u044C \u0434\u0435\u0442\u0430\u043B\u0438' : '\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0434\u0435\u0442\u0430\u043B\u0438'"
                      (onClick)="toggleRowExpansion(payment.id)">
                      <svg [class.rotated]="isRowExpanded(payment.id)" viewBox="0 0 24 24" fill="none">
                        <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </app-icon-button>
                  </div>
                </td>
              </tr>
              <!-- Expandable row -->
              <tr *ngIf="isRowExpanded(payment.id)" class="payment-details-row">
                <td colspan="9" class="payment-details-cell">
                  <div class="payment-details-content">
                    <div class="refund-details-grid">
                      <div class="refund-reason-section">
                        <span class="refund-label">\u041F\u0440\u0438\u0447\u0438\u043D\u0430 \u0432\u043E\u0437\u0432\u0440\u0430\u0442\u0430:</span>
                        <div class="refund-reason-text" *ngIf="payment.refundReason">
                          {{ payment.refundReason }}
                        </div>
                        <div class="refund-reason-empty" *ngIf="!payment.refundReason">
                          \u041D\u0435\u0442 \u043F\u0440\u0438\u0447\u0438\u043D\u044B \u0432\u043E\u0437\u0432\u0440\u0430\u0442\u0430
                        </div>
                      </div>
                      <div class="refund-by-section">
                        <span class="refund-label">\u0418\u043D\u0438\u0446\u0438\u0430\u0442\u043E\u0440 \u043F\u043B\u0430\u0442\u0435\u0436\u0430:</span>
                        <div class="refund-by-text" *ngIf="payment.initiatedBy">
                          {{ payment.initiatedBy }}
                        </div>
                        <div class="refund-by-empty" *ngIf="!payment.initiatedBy">
                          \u041D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              </ng-container>
            </tbody>
          </table>
        </div>
        </div>
      </div>
    </div>

    <!-- Refund Confirmation Modal -->
    <app-refund-confirmation-modal
      [visible]="showRefundModal"
      [payment]="selectedPaymentForRefund"
      [isProcessing]="isProcessingRefund"
      (visibleChange)="onRefundModalVisibleChange($event)"
      (confirm)="confirmRefund($event)">
    </app-refund-confirmation-modal>

    <!-- Payment View Modal -->
    <app-payment-view-modal
      [visible]="showPaymentViewModal"
      [paymentTxId]="selectedPaymentTxId"
      [paymentSearchResult]="selectedPaymentSearchResult"
      (visibleChange)="closePaymentView()"
      (paymentUpdated)="onPaymentUpdated()"
      (refundedPaymentClick)="openPaymentView($event)">
    </app-payment-view-modal>
  </div>
  `, styles: ['/* angular:styles/component:css;009af5e5f2d51930c69f8ca7e4fe9d82cb59a32285e530a0f0df1d19a40db362;/Users/baglan/repo/westwood/westwood-frontend/src/app/features/home/pages/home-page/home-page.component.ts */\n:host {\n  display: block;\n  height: 100%;\n}\n.page-wrapper {\n  min-height: 100%;\n  margin: -2rem;\n  padding: 2rem;\n  background:\n    linear-gradient(\n      180deg,\n      #f0fdf4 0%,\n      #f8fafc 50%,\n      #f8fafc 100%);\n}\n.dashboard {\n  max-width: 1400px;\n  margin: 0 auto;\n  position: relative;\n  min-height: 400px;\n}\n.page-loading-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 60vh;\n  width: 100%;\n}\n.dashboard-header {\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-start;\n  margin-bottom: 2rem;\n}\n.dashboard-title {\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 0.25rem 0;\n}\n.refunds-icon {\n  color: #dc2626;\n}\n.dashboard-subtitle {\n  font-size: 0.9375rem;\n  color: #64748b;\n  margin: 0;\n}\n.new-transaction-btn {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  background: #16A34A;\n  color: white;\n  border: none;\n  border-radius: 12px;\n  font-size: 0.9375rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.new-transaction-btn:hover {\n  background: #15803d;\n}\n.new-transaction-btn .btn-icon {\n  width: 18px;\n  height: 18px;\n}\n.expiring-bonuses-card {\n  background:\n    linear-gradient(\n      135deg,\n      #fef3c7 0%,\n      #fde68a 100%);\n  border: 1px solid #fcd34d;\n  border-radius: 16px;\n  padding: 1rem 1.25rem;\n  margin-bottom: 1.5rem;\n}\n.expiring-bonuses-content {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.expiring-bonuses-icon {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  background: rgba(217, 119, 6, 0.15);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.expiring-bonuses-icon svg {\n  width: 24px;\n  height: 24px;\n  color: #d97706;\n}\n.expiring-bonuses-stats {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.expiring-bonuses-label {\n  font-size: 0.8125rem;\n  font-weight: 600;\n  color: #92400e;\n}\n.expiring-bonuses-value {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #78350f;\n}\n.expiring-bonuses-link {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  background: rgba(217, 119, 6, 0.2);\n  color: #b45309;\n  transition: background 0.2s, color 0.2s;\n}\n.expiring-bonuses-link:hover {\n  background: rgba(217, 119, 6, 0.3);\n  color: #92400e;\n}\n.expiring-bonuses-link svg {\n  width: 20px;\n  height: 20px;\n}\n.card-groups {\n  display: flex;\n  flex-direction: row;\n  gap: 1.25rem;\n  margin-bottom: 1.5rem;\n}\n.card-group {\n  flex: 1;\n  min-width: 0;\n  background: #ffffff;\n  border-radius: 14px;\n  padding: 1rem 1.25rem;\n  border: 1px solid #e5e7eb;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n  transition: box-shadow 0.2s ease;\n}\n.card-group:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);\n}\n.card-group-header {\n  display: flex;\n  align-items: center;\n  gap: 0.625rem;\n  margin-bottom: 0.75rem;\n  padding-bottom: 0.625rem;\n  border-bottom: 1px solid #f1f5f9;\n}\n.card-group-icon {\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.card-group-icon svg {\n  width: 20px;\n  height: 20px;\n}\n.card-group-icon-payments {\n  background:\n    linear-gradient(\n      135deg,\n      #dcfce7 0%,\n      #bbf7d0 100%);\n  color: #15803d;\n}\n.card-group-icon-bonus {\n  background:\n    linear-gradient(\n      135deg,\n      #fef3c7 0%,\n      #fde68a 100%);\n  color: #b45309;\n}\n.card-group-icon-kpi {\n  background:\n    linear-gradient(\n      135deg,\n      #e0e7ff 0%,\n      #c7d2fe 100%);\n  color: #4338ca;\n}\n.card-group-icon-users {\n  background:\n    linear-gradient(\n      135deg,\n      #fce7f3 0%,\n      #fbcfe8 100%);\n  color: #be185d;\n}\n.card-group-header-kpi {\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.card-group-header-kpi .card-group-title {\n  flex: 1;\n  min-width: 0;\n}\n.kpi-period-select-wrapper {\n  flex-shrink: 0;\n}\n.kpi-period-select {\n  font-size: 0.75rem;\n  padding: 0.25rem 0.5rem;\n  border: 1px solid #e2e8f0;\n  border-radius: 6px;\n  background: #fff;\n  color: #0f172a;\n  cursor: pointer;\n}\n.kpi-period-select:focus {\n  outline: none;\n  border-color: #22c55e;\n}\n.metric-tooltip-icon {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  margin-left: 0.25rem;\n  cursor: help;\n  vertical-align: middle;\n  color: #64748b;\n}\n.metric-tooltip-icon svg {\n  width: 14px;\n  height: 14px;\n  display: block;\n}\n.metric-tooltip-icon:hover {\n  color: #22c55e;\n}\n.card-group-title {\n  font-size: 0.875rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n  letter-spacing: 0.01em;\n}\n.metric-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0.375rem;\n}\n.metric-row {\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n  gap: 0.5rem;\n  font-size: 0.8125rem;\n  line-height: 1.45;\n  padding: 0.25rem 0;\n}\n.metric-label {\n  color: #64748b;\n  flex-shrink: 0;\n}\n.metric-right {\n  display: inline-flex;\n  align-items: baseline;\n  gap: 0.35rem;\n}\n.metric-value {\n  font-weight: 600;\n  color: #0f172a;\n}\n.metric-change {\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.metric-change.positive {\n  color: #16a34a;\n}\n.metric-change.negative {\n  color: #dc2626;\n}\n.top-customers-list {\n  margin-top: 0.625rem;\n  padding-top: 0.625rem;\n  border-top: 1px solid #f1f5f9;\n}\n.top-customers-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.5rem;\n  margin-bottom: 0.35rem;\n}\n.top-customers-title {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #64748b;\n}\n.top-customers-link {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: #64748b;\n  text-decoration: none;\n  padding: 0.2rem;\n  border-radius: 6px;\n  transition: color 0.15s, background 0.15s;\n}\n.top-customers-link:hover {\n  color: #16a34a;\n  background: rgba(22, 163, 74, 0.08);\n}\n.top-customers-arrow {\n  width: 16px;\n  height: 16px;\n}\n.top-customers-ul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.top-customer-item {\n  margin-bottom: 0.125rem;\n}\n.top-customer-link {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.25rem 0;\n  text-decoration: none;\n  color: #0f172a;\n  font-size: 0.8125rem;\n  transition: color 0.15s;\n}\n.top-customer-link:hover {\n  color: #16a34a;\n}\n.top-customer-name {\n  font-weight: 500;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 70%;\n}\n.top-customer-spent {\n  font-weight: 600;\n  color: #16a34a;\n  flex-shrink: 0;\n}\n@media (max-width: 900px) {\n  .card-groups {\n    flex-wrap: wrap;\n  }\n  .card-group {\n    min-width: calc(50% - 0.5rem);\n  }\n}\n@media (max-width: 500px) {\n  .card-group {\n    min-width: 100%;\n  }\n}\n.kpi-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 1rem;\n}\n.kpi-icon {\n  width: 48px;\n  height: 48px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.25rem;\n}\n.kpi-icon svg {\n  width: 24px;\n  height: 24px;\n  color: #16A34A;\n  display: block;\n}\n.kpi-change {\n  font-size: 0.8125rem;\n  font-weight: 600;\n  padding: 0.25rem 0.625rem;\n  border-radius: 20px;\n  background: #f0fdf4;\n  color: #16A34A;\n}\n.kpi-change.positive {\n  background: #f0fdf4;\n  color: #16A34A;\n}\n.kpi-change.negative {\n  background: #fef2f2;\n  color: #dc2626;\n}\n.kpi-value {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin-bottom: 0.25rem;\n}\n.kpi-label {\n  font-size: 0.875rem;\n  color: #64748b;\n}\n.charts-section {\n  display: flex;\n  flex-direction: row;\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n}\n@media (max-width: 1024px) {\n  .charts-section {\n    flex-direction: column;\n  }\n}\n.chart-card {\n  background: white;\n  border-radius: 16px;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n}\n.chart-title {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #0f172a;\n  margin: 0 0 1.5rem 0;\n}\n.line-chart-card {\n  flex: 1;\n  min-width: 0;\n  min-height: 350px;\n  overflow: visible;\n}\n.chart-container {\n  display: flex;\n  height: 320px;\n  overflow: visible;\n}\n.chart-y-axis {\n  height: 300px;\n  flex-shrink: 0;\n  padding-right: 1rem;\n  font-size: 0.75rem;\n  color: #94a3b8;\n}\n.chart-y-axis-inner {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 250px;\n}\n.chart-area {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  min-height: 0;\n  overflow: visible;\n}\n.chart-svg-wrapper {\n  height: 300px;\n  flex-shrink: 0;\n  position: relative;\n  overflow: visible;\n}\n.line-chart {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: block;\n}\n.chart-points {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: visible;\n}\n.chart-point-wrapper {\n  position: absolute;\n  transform: translate(-50%, -50%);\n  cursor: pointer;\n  z-index: 1;\n  pointer-events: auto;\n  padding: 8px;\n}\n.chart-point-wrapper:hover {\n  z-index: 10;\n}\n.chart-point {\n  width: 10px;\n  height: 10px;\n  background: #22c55e;\n  border-radius: 50%;\n  transition: transform 0.15s ease, box-shadow 0.15s ease;\n}\n.chart-point-wrapper:hover .chart-point {\n  transform: scale(1.3);\n  box-shadow: 0 0 0 4px rgba(34, 197, 94, 0.2);\n}\n.chart-point.last-point {\n  width: 12px;\n  height: 12px;\n  background: white;\n  border: 2.5px solid #22c55e;\n  box-sizing: border-box;\n}\n.chart-tooltip {\n  position: absolute;\n  bottom: calc(100% + 10px);\n  left: 50%;\n  transform: translateX(-50%) translateY(6px) scale(0.97);\n  background: #1f2937;\n  color: white;\n  padding: 0.625rem 0.875rem;\n  border-radius: 8px;\n  font-size: 0.8125rem;\n  white-space: nowrap;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  pointer-events: none;\n}\n.chart-tooltip::after {\n  content: "";\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  transform: translateX(-50%);\n  border: 6px solid transparent;\n  border-top-color: #1f2937;\n  transition: opacity 0.3s ease;\n}\n.chart-point-wrapper:hover .chart-tooltip {\n  opacity: 1;\n  visibility: visible;\n  transform: translateX(-50%) translateY(0) scale(1);\n}\n.tooltip-day {\n  font-weight: 600;\n  margin-bottom: 0.5rem;\n  padding-bottom: 0.375rem;\n  border-bottom: 1px solid #374151;\n  color: #f3f4f6;\n}\n.tooltip-stats {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.tooltip-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 1rem;\n}\n.tooltip-label {\n  color: #9ca3af;\n  font-size: 0.75rem;\n}\n.tooltip-value {\n  color: #f3f4f6;\n  font-weight: 500;\n}\n.tooltip-revenue {\n  color: #22c55e;\n  font-weight: 600;\n}\n.tooltip-bonus-earned {\n  color: #fbbf24;\n  font-weight: 600;\n}\n.tooltip-bonus-used {\n  color: #f472b6;\n  font-weight: 600;\n}\n.chart-x-axis {\n  display: flex;\n  align-items: baseline;\n  gap: 0.5rem;\n  height: 20px;\n  padding-top: 0.5rem;\n  font-size: 0.75rem;\n  color: #94a3b8;\n}\n.chart-x-axis-caption {\n  flex-shrink: 0;\n  font-size: 0.75rem;\n  color: #94a3b8;\n}\n.chart-x-axis-labels {\n  position: relative;\n  flex: 1;\n  height: 100%;\n}\n.chart-x-axis-labels span {\n  position: absolute;\n  transform: translateX(-50%);\n}\n.donut-chart-card {\n  display: flex;\n  flex-direction: column;\n  min-width: 280px;\n  width: 320px;\n  flex-shrink: 0;\n}\n.donut-container {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1.5rem;\n  overflow: visible;\n  min-height: 220px;\n}\n.donut-chart {\n  width: 200px;\n  height: 200px;\n  display: block;\n  overflow: visible;\n}\n.donut-legend {\n  display: flex;\n  justify-content: center;\n  gap: 2rem;\n  padding-top: 0.5rem;\n}\n.legend-item {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.8125rem;\n  color: #64748b;\n}\n.legend-color {\n  width: 12px;\n  height: 12px;\n  border-radius: 3px;\n  flex-shrink: 0;\n}\n.legend-color.loyalty {\n  background: #22c55e;\n}\n.legend-color.non-loyalty {\n  background: #e2e8f0;\n}\n.legend-label {\n  font-size: 0.75rem;\n  color: #64748b;\n}\n.legend-value {\n  font-weight: 700;\n  font-size: 1rem;\n  color: #0f172a;\n}\n.legend-count {\n  font-size: 0.8125rem;\n  color: #64748b;\n  margin-top: 0.15rem;\n}\n.table-section {\n  margin-bottom: 2rem;\n}\n.table-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n.table-title {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #0f172a;\n  margin: 0;\n}\n.view-all-link {\n  font-size: 0.875rem;\n  color: #16A34A;\n  text-decoration: none;\n  font-weight: 500;\n  transition: color 0.2s ease;\n}\n.view-all-link:hover {\n  color: #15803d;\n}\n.table-container {\n  background: white;\n  border-radius: 16px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n  border: 1px solid #e5e7eb;\n  overflow: hidden;\n}\n.payments-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.payments-table th {\n  padding: 1rem;\n  text-align: left;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  background: #f8fafc;\n  border-bottom: 1px solid #e5e7eb;\n}\n.payments-table td {\n  padding: 1rem;\n  border-bottom: 1px solid #f1f5f9;\n}\n.payment-row {\n  transition: background 0.15s;\n}\n.payment-row:hover {\n  background: #f8fafc;\n}\n.payment-row:last-child td {\n  border-bottom: none;\n}\n.td-id {\n  min-width: 100px;\n}\n.payment-id {\n  font-family: monospace;\n  font-weight: 600;\n  color: #64748b;\n  font-size: 0.875rem;\n}\n.payment-id.clickable {\n  color: #64748b;\n  cursor: pointer;\n  text-decoration: underline;\n  transition: color 0.2s;\n}\n.payment-id.clickable:hover {\n  color: #475569;\n}\n.client-cell {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.client-avatar {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  background:\n    linear-gradient(\n      135deg,\n      #f0fdf4,\n      #dcfce7);\n  color: #16A34A;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.875rem;\n  font-weight: 600;\n  flex-shrink: 0;\n  flex-shrink: 0;\n}\n.client-info {\n  display: flex;\n  flex-direction: column;\n  gap: 0.15rem;\n}\n.client-name-link {\n  text-decoration: none;\n  color: inherit;\n  transition: color 0.15s;\n}\n.client-name-link:hover {\n  color: #16A34A;\n}\n.client-name {\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #1f2937;\n  cursor: pointer;\n}\n.client-name-link:hover .client-name {\n  color: #16A34A;\n}\n.client-phone {\n  font-size: 0.8rem;\n  color: #64748b;\n}\n.amount-value {\n  font-size: 0.95rem;\n  font-weight: 600;\n  color: #16A34A;\n}\n.bonus-info {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n}\n.bonus-badge {\n  display: inline-block;\n}\n.bonus-none {\n  font-size: 0.8rem;\n  color: #94a3b8;\n}\n.date-info {\n  display: flex;\n  flex-direction: column;\n  gap: 0.15rem;\n}\n.date-text {\n  font-size: 0.85rem;\n  color: #1f2937;\n  font-weight: 500;\n}\n.time-text {\n  font-size: 0.75rem;\n  color: #64748b;\n}\n.actions-cell {\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n}\n.action-link {\n  display: inline-flex;\n  text-decoration: none;\n  color: inherit;\n}\n.payments-table tbody tr.payment-details-row {\n  background: transparent;\n}\n.payments-table tbody tr.payment-details-row td {\n  border-top: none;\n  padding: 0;\n}\n.payment-details-cell {\n  padding: 0 !important;\n  background: transparent;\n}\n.payment-details-content {\n  padding: 1rem 1.5rem;\n  overflow: hidden;\n  animation: slideDown 0.3s ease-out;\n}\n@keyframes slideDown {\n  from {\n    opacity: 0;\n    max-height: 0;\n  }\n  to {\n    opacity: 1;\n    max-height: 300px;\n  }\n}\n.refund-details-grid {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 2rem;\n}\n.refund-reason-section {\n  flex: 1;\n  text-align: left;\n}\n.refund-by-section {\n  flex: 0 0 auto;\n  text-align: right;\n  min-width: 200px;\n}\n.refund-reason-section,\n.refund-by-section {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.refund-label {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #475569;\n}\n.refund-reason-text {\n  padding: 0.75rem;\n  background: transparent;\n  border: none;\n  border-radius: 0;\n  font-size: 0.875rem;\n  color: #1f2937;\n  line-height: 1.6;\n  white-space: pre-wrap;\n  text-align: left;\n}\n.refund-by-text {\n  padding: 0.75rem 0;\n  background: transparent;\n  border: none;\n  border-radius: 0;\n  font-size: 0.875rem;\n  color: #1f2937;\n  line-height: 1.6;\n  white-space: pre-wrap;\n  text-align: right;\n}\n.refund-reason-empty {\n  padding: 0.75rem;\n  background: transparent;\n  border: none;\n  border-radius: 0;\n  font-size: 0.875rem;\n  color: #94a3b8;\n  font-style: italic;\n  text-align: left;\n}\n.refund-by-empty {\n  padding: 0.75rem 0;\n  background: transparent;\n  border: none;\n  border-radius: 0;\n  font-size: 0.875rem;\n  color: #94a3b8;\n  font-style: italic;\n  text-align: right;\n}\n.actions-cell svg {\n  transition: transform 0.3s ease;\n}\n.actions-cell svg.rotated {\n  transform: rotate(180deg);\n}\n:host ::ng-deep app-button svg,\napp-button svg {\n  width: 18px;\n  height: 18px;\n  flex-shrink: 0;\n  display: block;\n}\n:host ::ng-deep app-button.size-small svg,\napp-button.size-small svg {\n  width: 16px;\n  height: 16px;\n}\n.btn-icon {\n  width: 18px;\n  height: 18px;\n  flex-shrink: 0;\n  display: block;\n}\n:host ::ng-deep .dashboard-header app-button button {\n  height: 44px;\n  padding: 0 1rem;\n}\n:host ::ng-deep .dashboard-header app-button button svg.create-icon {\n  width: 32px;\n  height: 32px;\n  flex-shrink: 0;\n}\n:host ::ng-deep app-button button .create-label {\n  display: inline-flex;\n  align-items: center;\n  line-height: 1.5;\n}\n@media (max-width: 768px) {\n  .page-wrapper {\n    margin: -1rem;\n    padding: 1rem;\n  }\n  .dashboard-header {\n    flex-direction: column;\n    gap: 1rem;\n  }\n  .new-transaction-btn {\n    width: 100%;\n    justify-content: center;\n  }\n  .clients-table {\n    display: block;\n    overflow-x: auto;\n  }\n}\n/*# sourceMappingURL=home-page.component.css.map */\n'] }]
  }], () => [{ type: Store }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomePageComponent, { className: "HomePageComponent", filePath: "src/app/features/home/pages/home-page/home-page.component.ts", lineNumber: 1644 });
})();
export {
  HomePageComponent
};
//# sourceMappingURL=chunk-YR2I3ZVU.js.map
