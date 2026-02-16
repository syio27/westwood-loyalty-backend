import {
  PaginationComponent
} from "./chunk-5EVUGNOD.js";
import {
  RefundConfirmationModalComponent
} from "./chunk-DWWVVINB.js";
import {
  AnalyticsService
} from "./chunk-G6CW767G.js";
import {
  PaymentViewModalComponent
} from "./chunk-7VMQ5YKX.js";
import {
  BadgeComponent
} from "./chunk-F7XK3MPR.js";
import {
  LoaderComponent
} from "./chunk-74OMJKP6.js";
import {
  PaymentsService,
  TransactionModalService
} from "./chunk-YFUSX3TX.js";
import "./chunk-PGQMZGPZ.js";
import {
  PageHeaderService
} from "./chunk-TXI2S3RM.js";
import "./chunk-6FFMNYG3.js";
import {
  ToastService
} from "./chunk-UB4WPUR7.js";
import {
  ButtonComponent
} from "./chunk-FM5G4Z36.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-CD4QMWYU.js";
import {
  IconButtonComponent
} from "./chunk-GA36L6BH.js";
import {
  ActivatedRoute,
  CommonModule,
  Component,
  NgForOf,
  NgIf,
  Router,
  RouterLink,
  RouterModule,
  Subject,
  forkJoin,
  inject,
  setClassMetadata,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-LQF2QQXA.js";

// src/app/features/payments/pages/payments-page/payments-page.component.ts
var _c0 = (a0) => ["/clients", a0];
var _c1 = (a0) => ["/users", a0];
function PaymentsPageComponent_div_2_Template(rf, ctx) {
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
function PaymentsPageComponent_div_3_app_button_113_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-button", 77);
    \u0275\u0275listener("onClick", function PaymentsPageComponent_div_3_app_button_113_Template_app_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.clearFilters());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 61);
    \u0275\u0275element(2, "path", 78);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " \u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C ");
    \u0275\u0275elementEnd();
  }
}
function PaymentsPageComponent_div_3_ng_container_144_app_badge_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-badge", 112);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const payment_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" +", ctx_r1.formatAmount(payment_r5.bonusEarned), " ");
  }
}
function PaymentsPageComponent_div_3_ng_container_144_app_badge_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-badge", 113);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const payment_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" -", ctx_r1.formatAmount(payment_r5.bonusUsed), " ");
  }
}
function PaymentsPageComponent_div_3_ng_container_144_app_badge_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-badge", 114);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const payment_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" -", ctx_r1.formatAmount(payment_r5.bonusRevoked), " ");
  }
}
function PaymentsPageComponent_div_3_ng_container_144_span_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 115);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function PaymentsPageComponent_div_3_ng_container_144_tr_43_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 128);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const payment_r5 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", payment_r5.refundReason, " ");
  }
}
function PaymentsPageComponent_div_3_ng_container_144_tr_43_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 129);
    \u0275\u0275text(1, " \u041D\u0435\u0442 \u043F\u0440\u0438\u0447\u0438\u043D\u044B \u0432\u043E\u0437\u0432\u0440\u0430\u0442\u0430 ");
    \u0275\u0275elementEnd();
  }
}
function PaymentsPageComponent_div_3_ng_container_144_tr_43_a_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 130);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const payment_r5 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c1, payment_r5.initiatedById));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", payment_r5.initiatedBy, " ");
  }
}
function PaymentsPageComponent_div_3_ng_container_144_tr_43_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 131);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const payment_r5 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", payment_r5.initiatedBy, " ");
  }
}
function PaymentsPageComponent_div_3_ng_container_144_tr_43_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 132);
    \u0275\u0275text(1, " \u041D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D ");
    \u0275\u0275elementEnd();
  }
}
function PaymentsPageComponent_div_3_ng_container_144_tr_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 116)(1, "td", 117)(2, "div", 118)(3, "div", 119)(4, "div", 120)(5, "span", 121);
    \u0275\u0275text(6, "\u041F\u0440\u0438\u0447\u0438\u043D\u0430 \u0432\u043E\u0437\u0432\u0440\u0430\u0442\u0430:");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, PaymentsPageComponent_div_3_ng_container_144_tr_43_div_7_Template, 2, 1, "div", 122)(8, PaymentsPageComponent_div_3_ng_container_144_tr_43_div_8_Template, 2, 0, "div", 123);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 124)(10, "span", 121);
    \u0275\u0275text(11, "\u0418\u043D\u0438\u0446\u0438\u0430\u0442\u043E\u0440 \u043F\u043B\u0430\u0442\u0435\u0436\u0430:");
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, PaymentsPageComponent_div_3_ng_container_144_tr_43_a_12_Template, 2, 4, "a", 125)(13, PaymentsPageComponent_div_3_ng_container_144_tr_43_div_13_Template, 2, 1, "div", 126)(14, PaymentsPageComponent_div_3_ng_container_144_tr_43_div_14_Template, 2, 0, "div", 127);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const payment_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", payment_r5.refundReason);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !payment_r5.refundReason);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", payment_r5.initiatedBy && payment_r5.initiatedById);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", payment_r5.initiatedBy && !payment_r5.initiatedById);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !payment_r5.initiatedBy);
  }
}
function PaymentsPageComponent_div_3_ng_container_144_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "tr", 79)(2, "td", 80)(3, "span", 81);
    \u0275\u0275listener("click", function PaymentsPageComponent_div_3_ng_container_144_Template_span_click_3_listener() {
      const payment_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openPaymentView(payment_r5.id));
    });
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "td", 82)(6, "div", 83)(7, "div", 84);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 85)(10, "a", 86)(11, "span", 87);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "span", 88);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(15, "td", 89)(16, "span", 90);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "td", 91)(19, "div", 92);
    \u0275\u0275template(20, PaymentsPageComponent_div_3_ng_container_144_app_badge_20_Template, 2, 1, "app-badge", 93)(21, PaymentsPageComponent_div_3_ng_container_144_app_badge_21_Template, 2, 1, "app-badge", 94)(22, PaymentsPageComponent_div_3_ng_container_144_app_badge_22_Template, 2, 1, "app-badge", 95)(23, PaymentsPageComponent_div_3_ng_container_144_span_23_Template, 2, 0, "span", 96);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "td", 97);
    \u0275\u0275element(25, "app-badge", 98);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "td", 99)(27, "app-badge", 100);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "td", 101)(30, "div", 102)(31, "span", 103);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "span", 104);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "td", 105)(36, "div", 106)(37, "app-icon-button", 107);
    \u0275\u0275listener("onClick", function PaymentsPageComponent_div_3_ng_container_144_Template_app_icon_button_onClick_37_listener() {
      const payment_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openRefundModal(payment_r5));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(38, "svg", 15);
    \u0275\u0275element(39, "path", 108);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(40, "app-icon-button", 109);
    \u0275\u0275listener("onClick", function PaymentsPageComponent_div_3_ng_container_144_Template_app_icon_button_onClick_40_listener() {
      const payment_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.togglePaymentRow(payment_r5.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(41, "svg", 61);
    \u0275\u0275element(42, "path", 110);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275template(43, PaymentsPageComponent_div_3_ng_container_144_tr_43_Template, 15, 5, "tr", 111);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const payment_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(payment_r5.id);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getInitials(payment_r5.clientName), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(21, _c0, payment_r5.clientId));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(payment_r5.clientName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(payment_r5.clientPhone);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.formatAmount(payment_r5.amount), " \u20B8");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", payment_r5.bonusEarned > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", payment_r5.bonusUsed > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", payment_r5.bonusRevoked > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", payment_r5.bonusEarned === 0 && payment_r5.bonusUsed === 0 && payment_r5.bonusRevoked === 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("paymentMethod", ctx_r1.getPaymentMethodForBadge(payment_r5.paymentMethod));
    \u0275\u0275advance(2);
    \u0275\u0275property("badgeType", payment_r5.isRefund ? "refund" : "payment")("icon", payment_r5.isRefund ? "refund" : "payment");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", payment_r5.isRefund ? "\u0412\u043E\u0437\u0432\u0440\u0430\u0442" : "\u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E", " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(payment_r5.date);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(payment_r5.time);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", payment_r5.isRefund);
    \u0275\u0275advance(3);
    \u0275\u0275property("tooltip", ctx_r1.isPaymentRowExpanded(payment_r5.id) ? "\u0421\u043A\u0440\u044B\u0442\u044C \u0434\u0435\u0442\u0430\u043B\u0438" : "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0434\u0435\u0442\u0430\u043B\u0438");
    \u0275\u0275advance();
    \u0275\u0275classProp("rotated", ctx_r1.isPaymentRowExpanded(payment_r5.id));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.isPaymentRowExpanded(payment_r5.id));
  }
}
function PaymentsPageComponent_div_3_div_145_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 133);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 15);
    \u0275\u0275element(2, "circle", 34)(3, "path", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "\u041F\u043B\u0430\u0442\u0435\u0436\u0438 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u044B");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 134);
    \u0275\u0275listener("click", function PaymentsPageComponent_div_3_div_145_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.clearFilters());
    });
    \u0275\u0275text(7, "\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u0444\u0438\u043B\u044C\u0442\u0440\u044B");
    \u0275\u0275elementEnd()();
  }
}
function PaymentsPageComponent_div_3_div_146_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 143)(1, "app-pagination", 144);
    \u0275\u0275listener("pageChange", function PaymentsPageComponent_div_3_div_146_div_17_Template_app_pagination_pageChange_1_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onPageChange($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("currentPage", ctx_r1.currentPage + 1)("totalPages", ctx_r1.getTotalPages());
  }
}
function PaymentsPageComponent_div_3_div_146_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 135)(1, "div", 136)(2, "div", 137)(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 138)(6, "label", 139);
    \u0275\u0275text(7, "\u0421\u0442\u0440\u043E\u043A \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "select", 140);
    \u0275\u0275twoWayListener("ngModelChange", function PaymentsPageComponent_div_3_div_146_Template_select_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.pageSize, $event) || (ctx_r1.pageSize = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function PaymentsPageComponent_div_3_div_146_Template_select_change_8_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPageSizeChange());
    });
    \u0275\u0275elementStart(9, "option", 141);
    \u0275\u0275text(10, "15");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "option", 141);
    \u0275\u0275text(12, "30");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "option", 141);
    \u0275\u0275text(14, "50");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "option", 141);
    \u0275\u0275text(16, "100");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(17, PaymentsPageComponent_div_3_div_146_div_17_Template, 2, 2, "div", 142);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate3("\u041F\u043E\u043A\u0430\u0437\u0430\u043D\u043E ", ctx_r1.currentPage * ctx_r1.pageSize + 1, "-", ctx_r1.Math.min((ctx_r1.currentPage + 1) * ctx_r1.pageSize, ctx_r1.totalPaymentsFound), " \u0438\u0437 ", ctx_r1.totalPaymentsFound, "");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.pageSize);
    \u0275\u0275advance();
    \u0275\u0275property("value", 15);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 30);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 50);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 100);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.getTotalPages() > 1);
  }
}
function PaymentsPageComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 8)(2, "app-button", 9);
    \u0275\u0275listener("onClick", function PaymentsPageComponent_div_3_Template_app_button_onClick_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openTransactionModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 10);
    \u0275\u0275element(4, "path", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " \u041D\u043E\u0432\u0430\u044F \u0442\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u044F ");
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "div", 12)(7, "div", 13)(8, "div", 14);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 15);
    \u0275\u0275element(10, "path", 16)(11, "rect", 17)(12, "path", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(13, "div", 19)(14, "span", 20);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 21);
    \u0275\u0275text(17, "\u0412\u0441\u0435\u0433\u043E \u043F\u043B\u0430\u0442\u0435\u0436\u0435\u0439");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 13)(19, "div", 22);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(20, "svg", 15);
    \u0275\u0275element(21, "rect", 23)(22, "path", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(23, "div", 19)(24, "span", 20);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span", 21);
    \u0275\u0275text(27, "\u041F\u043B\u0430\u0442\u0435\u0436\u0435\u0439 \u0441\u0435\u0433\u043E\u0434\u043D\u044F");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 13)(29, "div", 25);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(30, "svg", 15);
    \u0275\u0275element(31, "path", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(32, "div", 19)(33, "span", 20);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "span", 21);
    \u0275\u0275text(36, "\u041E\u0431\u0449\u0438\u0439 \u0434\u043E\u0445\u043E\u0434");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "div", 13)(38, "div", 27);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(39, "svg", 15);
    \u0275\u0275element(40, "path", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(41, "div", 19)(42, "span", 20);
    \u0275\u0275text(43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "span", 21);
    \u0275\u0275text(45, "\u0411\u043E\u043D\u0443\u0441\u043E\u0432 \u043D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u043E");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(46, "div", 29)(47, "div", 30)(48, "div", 31)(49, "div", 32);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(50, "svg", 33);
    \u0275\u0275element(51, "circle", 34)(52, "path", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(53, "input", 36);
    \u0275\u0275twoWayListener("ngModelChange", function PaymentsPageComponent_div_3_Template_input_ngModelChange_53_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchPaymentId, $event) || (ctx_r1.searchPaymentId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown.enter", function PaymentsPageComponent_div_3_Template_input_keydown_enter_53_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyFilters());
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(54, "div", 37)(55, "div", 32);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(56, "svg", 33);
    \u0275\u0275element(57, "circle", 34)(58, "path", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(59, "input", 38);
    \u0275\u0275twoWayListener("ngModelChange", function PaymentsPageComponent_div_3_Template_input_ngModelChange_59_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchClientName, $event) || (ctx_r1.searchClientName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown.enter", function PaymentsPageComponent_div_3_Template_input_keydown_enter_59_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyFilters());
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(60, "div", 37)(61, "div", 32);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(62, "svg", 33);
    \u0275\u0275element(63, "path", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(64, "input", 40);
    \u0275\u0275twoWayListener("ngModelChange", function PaymentsPageComponent_div_3_Template_input_ngModelChange_64_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchPhone, $event) || (ctx_r1.searchPhone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown.enter", function PaymentsPageComponent_div_3_Template_input_keydown_enter_64_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyFilters());
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(65, "div", 41)(66, "label", 42);
    \u0275\u0275text(67, "\u041F\u0435\u0440\u0438\u043E\u0434:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "div", 43)(69, "input", 44);
    \u0275\u0275twoWayListener("ngModelChange", function PaymentsPageComponent_div_3_Template_input_ngModelChange_69_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.dateFrom, $event) || (ctx_r1.dateFrom = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "span", 45);
    \u0275\u0275text(71, "\u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "input", 44);
    \u0275\u0275twoWayListener("ngModelChange", function PaymentsPageComponent_div_3_Template_input_ngModelChange_72_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.dateTo, $event) || (ctx_r1.dateTo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(73, "div", 30)(74, "div", 46)(75, "label", 42);
    \u0275\u0275text(76, "\u0421\u043F\u043E\u0441\u043E\u0431 \u043E\u043F\u043B\u0430\u0442\u044B:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "div", 47)(78, "button", 48);
    \u0275\u0275listener("click", function PaymentsPageComponent_div_3_Template_button_click_78_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.filterPaymentMethod = "all");
    });
    \u0275\u0275text(79, "\u0412\u0441\u0435");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "button", 48);
    \u0275\u0275listener("click", function PaymentsPageComponent_div_3_Template_button_click_80_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.filterPaymentMethod = "cash");
    });
    \u0275\u0275text(81, "\u041D\u0430\u043B\u0438\u0447\u043D\u044B\u0435");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "button", 48);
    \u0275\u0275listener("click", function PaymentsPageComponent_div_3_Template_button_click_82_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.filterPaymentMethod = "card");
    });
    \u0275\u0275text(83, "\u041A\u0430\u0440\u0442\u0430");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "button", 48);
    \u0275\u0275listener("click", function PaymentsPageComponent_div_3_Template_button_click_84_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.filterPaymentMethod = "transfer");
    });
    \u0275\u0275text(85, "\u041F\u0435\u0440\u0435\u0432\u043E\u0434");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(86, "div", 46)(87, "label", 42);
    \u0275\u0275text(88, "\u0422\u0438\u043F:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(89, "div", 47)(90, "button", 48);
    \u0275\u0275listener("click", function PaymentsPageComponent_div_3_Template_button_click_90_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.filterRefund = "all");
    });
    \u0275\u0275text(91, "\u0412\u0441\u0435");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(92, "button", 48);
    \u0275\u0275listener("click", function PaymentsPageComponent_div_3_Template_button_click_92_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.filterRefund = "paid");
    });
    \u0275\u0275text(93, "\u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "button", 48);
    \u0275\u0275listener("click", function PaymentsPageComponent_div_3_Template_button_click_94_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.filterRefund = "refund");
    });
    \u0275\u0275text(95, "\u0412\u043E\u0437\u0432\u0440\u0430\u0442");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(96, "div", 49)(97, "label", 42);
    \u0275\u0275text(98, "\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(99, "select", 50);
    \u0275\u0275twoWayListener("ngModelChange", function PaymentsPageComponent_div_3_Template_select_ngModelChange_99_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.sortField, $event) || (ctx_r1.sortField = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(100, "option", 51);
    \u0275\u0275text(101, "\u041F\u043E \u0434\u0430\u0442\u0435");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(102, "option", 52);
    \u0275\u0275text(103, "\u041F\u043E \u043A\u043B\u0438\u0435\u043D\u0442\u0443");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(104, "option", 53);
    \u0275\u0275text(105, "\u041F\u043E \u0441\u0443\u043C\u043C\u0435");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(106, "option", 54);
    \u0275\u0275text(107, "\u041F\u043E \u0441\u043F\u043E\u0441\u043E\u0431\u0443 \u043E\u043F\u043B\u0430\u0442\u044B");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(108, "button", 55);
    \u0275\u0275listener("click", function PaymentsPageComponent_div_3_Template_button_click_108_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sortDirection = ctx_r1.sortDirection === "asc" ? "desc" : "asc");
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(109, "svg", 15);
    \u0275\u0275element(110, "path", 56);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(111, "div", 57)(112, "div", 58);
    \u0275\u0275template(113, PaymentsPageComponent_div_3_app_button_113_Template, 4, 0, "app-button", 59);
    \u0275\u0275elementStart(114, "app-button", 60);
    \u0275\u0275listener("onClick", function PaymentsPageComponent_div_3_Template_app_button_onClick_114_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyFilters());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(115, "svg", 61);
    \u0275\u0275element(116, "circle", 34)(117, "path", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275text(118, " \u041F\u043E\u0438\u0441\u043A ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(119, "div", 62)(120, "span", 63);
    \u0275\u0275text(121);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(122, "div")(123, "div", 64)(124, "table", 65)(125, "thead")(126, "tr")(127, "th", 66);
    \u0275\u0275text(128, "ID \u043F\u043B\u0430\u0442\u0435\u0436\u0430");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(129, "th", 67);
    \u0275\u0275text(130, "\u041A\u043B\u0438\u0435\u043D\u0442");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(131, "th", 68);
    \u0275\u0275text(132, "\u0421\u0443\u043C\u043C\u0430");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(133, "th", 69);
    \u0275\u0275text(134, "\u0411\u043E\u043D\u0443\u0441\u044B");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(135, "th", 70);
    \u0275\u0275text(136, "\u0421\u043F\u043E\u0441\u043E\u0431 \u043E\u043F\u043B\u0430\u0442\u044B");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(137, "th", 71);
    \u0275\u0275text(138, "\u0421\u0442\u0430\u0442\u0443\u0441");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(139, "th", 72);
    \u0275\u0275text(140, "\u0414\u0430\u0442\u0430 \u0438 \u0432\u0440\u0435\u043C\u044F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(141, "th", 73);
    \u0275\u0275text(142, "\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(143, "tbody");
    \u0275\u0275template(144, PaymentsPageComponent_div_3_ng_container_144_Template, 44, 23, "ng-container", 74);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(145, PaymentsPageComponent_div_3_div_145_Template, 8, 0, "div", 75);
    \u0275\u0275elementEnd();
    \u0275\u0275template(146, PaymentsPageComponent_div_3_div_146_Template, 18, 9, "div", 76);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(15);
    \u0275\u0275textInterpolate(ctx_r1.totalPayments);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r1.paymentsToday);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("", ctx_r1.formatAmount(ctx_r1.totalRevenue), " \u20B8");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.formatAmount(ctx_r1.totalBonusesGranted));
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchPaymentId);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchClientName);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchPhone);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.dateFrom);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.dateTo);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("active", ctx_r1.filterPaymentMethod === "all");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.filterPaymentMethod === "cash");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.filterPaymentMethod === "card");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.filterPaymentMethod === "transfer");
    \u0275\u0275advance(6);
    \u0275\u0275classProp("active", ctx_r1.filterRefund === "all");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.filterRefund === "paid");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.filterRefund === "refund");
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.sortField);
    \u0275\u0275advance(10);
    \u0275\u0275classProp("desc", ctx_r1.sortDirection === "desc");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.hasActiveFilters());
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("\u041D\u0430\u0439\u0434\u0435\u043D\u043E: ", ctx_r1.totalPaymentsFound, " \u043F\u043B\u0430\u0442\u0435\u0436\u0435\u0439");
    \u0275\u0275advance(23);
    \u0275\u0275property("ngForOf", ctx_r1.payments);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.payments.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.totalPaymentsFound > 0);
  }
}
function clampPaymentPageSize(size) {
  const valid = [15, 30, 50, 100];
  return valid.includes(size) ? size : 15;
}
var PaymentsPageComponent = class _PaymentsPageComponent {
  pageHeaderService = inject(PageHeaderService);
  analyticsService = inject(AnalyticsService);
  paymentsService = inject(PaymentsService);
  toastService = inject(ToastService);
  transactionModalService = inject(TransactionModalService);
  router = inject(Router);
  route = inject(ActivatedRoute);
  destroy$ = new Subject();
  // Dashboard data
  totalPayments = 0;
  paymentsToday = 0;
  totalRevenue = 0;
  totalBonusesGranted = 0;
  isLoadingDashboard = true;
  // Filters
  searchPaymentId = "";
  searchClientName = "";
  searchPhone = "";
  dateFrom = "";
  dateTo = "";
  filterPaymentMethod = "all";
  filterRefund = "all";
  sortField = "date";
  sortDirection = "desc";
  // Refund modal
  showRefundModal = false;
  selectedPaymentForRefund = null;
  // Payment view modal
  showPaymentViewModal = false;
  selectedPaymentTxId = null;
  selectedPaymentSearchResult = null;
  // Payments data
  isLoading = false;
  payments = [];
  totalPaymentsFound = 0;
  currentPage = 0;
  pageSize = 15;
  // Раскрытые строки платежей
  expandedPaymentRows = /* @__PURE__ */ new Set();
  ngOnInit() {
    this.pageHeaderService.setPageHeader("\u041F\u043B\u0430\u0442\u0435\u0436\u0438", [
      { label: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F", route: "/home" },
      { label: "\u041F\u043B\u0430\u0442\u0435\u0436\u0438" }
    ]);
    const params = this.route.snapshot.queryParams;
    const pageFromUrl = Math.max(1, +(params["page"] ?? 1) || 1);
    const sizeFromUrl = clampPaymentPageSize(+(params["size"] ?? 0) || 15);
    this.currentPage = pageFromUrl - 1;
    this.pageSize = sizeFromUrl;
    this.loadDashboardData();
    this.loadPayments();
    this.route.queryParams.pipe(takeUntil(this.destroy$)).subscribe((params2) => {
      const p = Math.max(1, +(params2["page"] ?? 1) || 1);
      const s = clampPaymentPageSize(+(params2["size"] ?? 0) || 15);
      const pageIndex = p - 1;
      if (this.currentPage !== pageIndex || this.pageSize !== s) {
        this.currentPage = pageIndex;
        this.pageSize = s;
        this.loadPayments();
      }
    });
    this.transactionModalService.transactionComplete$.pipe(takeUntil(this.destroy$)).subscribe(() => {
      const currentUrl = this.router.url;
      if (currentUrl === "/payments" || currentUrl.startsWith("/payments")) {
        this.loadDashboardData();
        this.loadPayments();
      }
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  loadDashboardData() {
    this.isLoadingDashboard = true;
    forkJoin({
      totals: this.analyticsService.getOverallTotals(),
      daily: this.analyticsService.getDailyTransactions()
    }).subscribe({
      next: ({ totals, daily }) => {
        this.totalPayments = totals.totalPayments;
        this.totalRevenue = totals.totalRevenue;
        this.totalBonusesGranted = totals.totalBonusesGranted;
        this.paymentsToday = daily.count;
        this.isLoadingDashboard = false;
      },
      error: (err) => {
        const errorMessage = err.error?.message || "\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0434\u0430\u043D\u043D\u044B\u0445";
        this.toastService.error(errorMessage);
        this.isLoadingDashboard = false;
      }
    });
  }
  loadPayments() {
    this.isLoading = true;
    const searchRequest = this.buildSearchRequest();
    this.paymentsService.searchPayments(searchRequest).subscribe({
      next: (response) => {
        this.payments = response.content.map((result) => this.mapSearchResultToPayment(result));
        this.totalPaymentsFound = response.totalElements;
        this.isLoading = false;
      },
      error: (err) => {
        const errorMessage = err.error?.message || "\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u043F\u043B\u0430\u0442\u0435\u0436\u0435\u0439";
        this.toastService.error(errorMessage);
        this.isLoading = false;
      }
    });
  }
  buildSearchRequest() {
    const request = {
      paymentId: this.searchPaymentId.trim() || "",
      clientName: this.searchClientName.trim() || "",
      phone: this.searchPhone.trim() || "",
      periodFrom: this.dateFrom ? `${this.dateFrom}T00:00:00` : null,
      periodTo: this.dateTo ? `${this.dateTo}T23:59:59` : null,
      paymentMethod: this.filterPaymentMethod !== "all" ? this.filterPaymentMethod.toUpperCase() : null,
      paymentType: this.filterRefund === "all" ? "ALL" : this.filterRefund === "paid" ? "PAID" : "REFUND",
      sortBy: this.mapSortField(this.sortField),
      sortDirection: this.sortDirection.toUpperCase(),
      page: this.currentPage,
      size: this.pageSize
    };
    return request;
  }
  mapSortField(field) {
    switch (field) {
      case "date":
        return "date";
      case "amount":
        return "amount";
      case "clientName":
        return "clientName";
      default:
        return "date";
    }
  }
  mapSearchResultToPayment(result) {
    const createdAt = new Date(result.createdAt);
    const dateStr = this.formatDate(createdAt);
    const timeStr = this.formatTime(createdAt);
    return {
      id: result.txId,
      clientId: result.clientId,
      clientName: result.clientName,
      clientPhone: result.clientPhone,
      amount: result.amount,
      bonusEarned: result.bonusGranted,
      bonusUsed: result.bonusUsed,
      bonusRevoked: result.bonusRevoked || 0,
      paymentMethod: result.paymentMethod?.toLowerCase() || "cash",
      isRefund: result.status === "REFUNDED" || !!result.refundedPaymentTxId,
      date: dateStr,
      time: timeStr,
      refundReason: result.refundReason || void 0,
      initiatedBy: result.initiatedBy || void 0
    };
  }
  formatTime(date) {
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  }
  formatPaymentId(id) {
    return id.replace(/^PTX-/, "");
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
  togglePaymentRow(paymentId) {
    if (this.expandedPaymentRows.has(paymentId)) {
      this.expandedPaymentRows.delete(paymentId);
    } else {
      this.expandedPaymentRows.add(paymentId);
    }
  }
  isPaymentRowExpanded(paymentId) {
    return this.expandedPaymentRows.has(paymentId);
  }
  formatDateForInput(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }
  formatDate(date) {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  }
  formatAmount(amount) {
    return amount.toLocaleString("ru-RU");
  }
  getInitials(name) {
    const parts = name.split(" ");
    if (parts.length >= 2) {
      return (parts[0].charAt(0) + parts[1].charAt(0)).toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  }
  getPaymentMethodLabel(method) {
    const labels = {
      cash: "\u041D\u0430\u043B\u0438\u0447\u043D\u044B\u0435",
      card: "\u041A\u0430\u0440\u0442\u0430",
      transfer: "\u041F\u0435\u0440\u0435\u0432\u043E\u0434"
    };
    return labels[method] || method;
  }
  applyFilters() {
    this.currentPage = 0;
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { page: 1, size: this.pageSize },
      queryParamsHandling: "merge",
      replaceUrl: true
    });
    this.loadPayments();
  }
  onPageChange(page) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { page, size: this.pageSize },
      queryParamsHandling: "merge",
      replaceUrl: true
    });
    const tableContainer = document.querySelector(".table-container");
    if (tableContainer) {
      tableContainer.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
  onPageSizeChange() {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { page: 1, size: this.pageSize },
      queryParamsHandling: "merge",
      replaceUrl: true
    });
  }
  getTotalPages() {
    return Math.ceil(this.totalPaymentsFound / this.pageSize);
  }
  get Math() {
    return Math;
  }
  hasActiveFilters() {
    return this.searchPaymentId.trim() !== "" || this.searchClientName.trim() !== "" || this.searchPhone.trim() !== "" || this.dateFrom !== "" || this.dateTo !== "" || this.filterPaymentMethod !== "all" || this.filterRefund !== "all";
  }
  clearFilters() {
    this.searchPaymentId = "";
    this.searchClientName = "";
    this.searchPhone = "";
    this.dateFrom = "";
    this.dateTo = "";
    this.filterPaymentMethod = "all";
    this.filterRefund = "all";
    this.sortField = "date";
    this.sortDirection = "desc";
    this.currentPage = 0;
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { page: 1, size: this.pageSize },
      queryParamsHandling: "merge",
      replaceUrl: true
    });
    this.loadPayments();
  }
  openRefundModal(payment) {
    if (payment.isRefund) {
      return;
    }
    this.selectedPaymentForRefund = payment;
    this.showRefundModal = true;
  }
  closeRefundModal() {
    this.showRefundModal = false;
    this.selectedPaymentForRefund = null;
  }
  confirmRefund(payment) {
    if (!payment) {
      return;
    }
    const refundRequest = {
      notes: payment.refundReason || "\u0412\u043E\u0437\u0432\u0440\u0430\u0442 \u043F\u043B\u0430\u0442\u0435\u0436\u0430"
    };
    this.paymentsService.refundPayment(payment.id, refundRequest).subscribe({
      next: () => {
        this.toastService.success("\u041F\u043B\u0430\u0442\u0435\u0436 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0435\u043D");
        this.closeRefundModal();
        this.loadPayments();
        this.loadDashboardData();
      },
      error: (err) => {
        const errorMessage = err.error?.message || "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0432\u043E\u0437\u0432\u0440\u0430\u0442\u0435 \u043F\u043B\u0430\u0442\u0435\u0436\u0430";
        this.toastService.error(errorMessage);
      }
    });
  }
  openPaymentView(paymentId) {
    const payment = this.payments.find((p) => p.id === paymentId);
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
    this.loadPayments();
  }
  openTransactionModal() {
    this.transactionModalService.open();
  }
  static \u0275fac = function PaymentsPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PaymentsPageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PaymentsPageComponent, selectors: [["app-payments-page"]], decls: 6, vars: 7, consts: [[1, "page-wrapper"], [1, "payments-container"], ["class", "page-loading-container", 4, "ngIf"], [4, "ngIf"], [3, "visibleChange", "confirm", "visible", "payment"], [3, "visibleChange", "paymentUpdated", "refundedPaymentClick", "visible", "paymentTxId", "paymentSearchResult"], [1, "page-loading-container"], ["type", "logo", "size", "large", 3, "visible", "overlay"], [1, "page-header-actions"], ["buttonType", "primary", "size", "medium", 3, "onClick"], ["viewBox", "0 0 24 24", "fill", "none", 1, "create-payment-icon"], ["d", "M6 12H18M12 6V18", "stroke", "currentColor", "stroke-width", "2.5", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "dashboard-grid"], [1, "dashboard-card"], [1, "card-icon", "total-payments"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none"], ["d", "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2", "stroke", "currentColor", "stroke-width", "1.5"], ["x", "9", "y", "3", "width", "6", "height", "4", "rx", "1", "stroke", "currentColor", "stroke-width", "1.5"], ["d", "M9 12h6M9 16h6", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round"], [1, "card-info"], [1, "card-value"], [1, "card-label"], [1, "card-icon", "today-payments"], ["x", "3", "y", "4", "width", "18", "height", "18", "rx", "2", "stroke", "currentColor", "stroke-width", "1.5"], ["d", "M16 2v4M8 2v4M3 10h18", "stroke", "currentColor", "stroke-width", "1.5"], [1, "card-icon", "total-revenue"], ["d", "M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6", "stroke", "currentColor", "stroke-width", "1.5"], [1, "card-icon", "total-bonuses"], ["d", "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z", "stroke", "currentColor", "stroke-width", "1.5"], [1, "filters-section"], [1, "filters-row"], [1, "filter-group", "search-group"], [1, "search-input-wrapper"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", 1, "search-icon"], ["cx", "11", "cy", "11", "r", "8", "stroke", "currentColor", "stroke-width", "1.5"], ["d", "M21 21l-4.35-4.35", "stroke", "currentColor", "stroke-width", "1.5"], ["type", "text", "placeholder", "\u041F\u043E\u0438\u0441\u043A \u043F\u043E ID \u043F\u043B\u0430\u0442\u0435\u0436\u0430...", 1, "filter-input", 3, "ngModelChange", "keydown.enter", "ngModel"], [1, "filter-group"], ["type", "text", "placeholder", "\u041F\u043E\u0438\u0441\u043A \u043F\u043E \u043A\u043B\u0438\u0435\u043D\u0442\u0443...", 1, "filter-input", 3, "ngModelChange", "keydown.enter", "ngModel"], ["d", "M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z", "stroke", "currentColor", "stroke-width", "1.5"], ["type", "text", "placeholder", "\u041F\u043E\u0438\u0441\u043A \u043F\u043E \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0443...", 1, "filter-input", 3, "ngModelChange", "keydown.enter", "ngModel"], [1, "filter-group", "date-filter"], [1, "filter-label"], [1, "date-inputs"], ["type", "date", "placeholder", "\u0414\u0414 \u041C\u041C \u0413\u0413\u0413\u0413", 1, "date-input", 3, "ngModelChange", "ngModel"], [1, "date-separator"], [1, "filter-group", "type-filter"], [1, "type-buttons"], [1, "type-btn", 3, "click"], [1, "filter-group", "sort-group"], [1, "sort-select", 3, "ngModelChange", "ngModel"], ["value", "date"], ["value", "clientName"], ["value", "amount"], ["value", "paymentMethod"], [1, "sort-direction-btn", 3, "click"], ["d", "M12 5v14M19 12l-7 7-7-7", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "filters-footer"], [1, "button-group"], ["buttonType", "danger-outline", "size", "medium", 3, "onClick", 4, "ngIf"], ["buttonType", "primary-outline", "size", "medium", 3, "onClick"], ["viewBox", "0 0 24 24", "fill", "none"], [1, "results-info"], [1, "results-count"], [1, "table-container"], [1, "payments-table"], [1, "th-id"], [1, "th-client"], [1, "th-amount"], [1, "th-bonuses"], [1, "th-method"], [1, "th-status"], [1, "th-date"], [1, "th-actions"], [4, "ngFor", "ngForOf"], ["class", "empty-state", 4, "ngIf"], ["class", "pagination-container", 4, "ngIf"], ["buttonType", "danger-outline", "size", "medium", 3, "onClick"], ["d", "M18 6L6 18M6 6l12 12", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], [1, "payment-row"], [1, "td-id"], [1, "payment-id", "clickable", 3, "click"], [1, "td-client"], [1, "client-cell"], [1, "client-avatar"], [1, "client-info"], [1, "client-name-link", 3, "routerLink"], [1, "client-name"], [1, "client-phone"], [1, "td-amount"], [1, "amount-value"], [1, "td-bonuses"], [1, "bonus-info"], ["badgeType", "bonusGranted", "size", "medium", "icon", "star", "class", "bonus-badge", 4, "ngIf"], ["badgeType", "bonusUsed", "size", "medium", "icon", "check", "class", "bonus-badge", 4, "ngIf"], ["badgeType", "refund", "size", "medium", "icon", "refund", "class", "bonus-badge", 4, "ngIf"], ["class", "bonus-none", 4, "ngIf"], [1, "td-method"], ["badgeType", "paymentMethod", "size", "medium", 3, "paymentMethod"], [1, "td-status"], ["size", "medium", 3, "badgeType", "icon"], [1, "td-date"], [1, "date-info"], [1, "date-text"], [1, "time-text"], [1, "td-actions"], [1, "actions-cell"], ["iconButtonType", "refund", "size", "small", "tooltip", "\u0412\u043E\u0437\u0432\u0440\u0430\u0442", 3, "onClick", "disabled"], ["d", "M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["iconButtonType", "ghost", "size", "small", 3, "onClick", "tooltip"], ["d", "M6 9l6 6 6-6", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["class", "payment-details-row", 4, "ngIf"], ["badgeType", "bonusGranted", "size", "medium", "icon", "star", 1, "bonus-badge"], ["badgeType", "bonusUsed", "size", "medium", "icon", "check", 1, "bonus-badge"], ["badgeType", "refund", "size", "medium", "icon", "refund", 1, "bonus-badge"], [1, "bonus-none"], [1, "payment-details-row"], ["colspan", "8", 1, "payment-details-cell"], [1, "payment-details-content"], [1, "refund-details-grid"], [1, "refund-reason-section"], [1, "refund-label"], ["class", "refund-reason-text", 4, "ngIf"], ["class", "refund-reason-empty", 4, "ngIf"], [1, "refund-by-section"], ["class", "refund-by-link", 3, "routerLink", 4, "ngIf"], ["class", "refund-by-text", 4, "ngIf"], ["class", "refund-by-empty", 4, "ngIf"], [1, "refund-reason-text"], [1, "refund-reason-empty"], [1, "refund-by-link", 3, "routerLink"], [1, "refund-by-text"], [1, "refund-by-empty"], [1, "empty-state"], [1, "reset-btn", 3, "click"], [1, "pagination-container"], [1, "pagination-left"], [1, "pagination-info"], [1, "page-size-filter-section"], [1, "page-size-label"], [1, "page-size-select", 3, "ngModelChange", "change", "ngModel"], [3, "value"], ["class", "pagination-right", 4, "ngIf"], [1, "pagination-right"], [3, "pageChange", "currentPage", "totalPages"]], template: function PaymentsPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275template(2, PaymentsPageComponent_div_2_Template, 2, 2, "div", 2)(3, PaymentsPageComponent_div_3_Template, 147, 31, "div", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "app-refund-confirmation-modal", 4);
      \u0275\u0275listener("visibleChange", function PaymentsPageComponent_Template_app_refund_confirmation_modal_visibleChange_4_listener() {
        return ctx.closeRefundModal();
      })("confirm", function PaymentsPageComponent_Template_app_refund_confirmation_modal_confirm_4_listener($event) {
        return ctx.confirmRefund($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "app-payment-view-modal", 5);
      \u0275\u0275listener("visibleChange", function PaymentsPageComponent_Template_app_payment_view_modal_visibleChange_5_listener() {
        return ctx.closePaymentView();
      })("paymentUpdated", function PaymentsPageComponent_Template_app_payment_view_modal_paymentUpdated_5_listener() {
        return ctx.onPaymentUpdated();
      })("refundedPaymentClick", function PaymentsPageComponent_Template_app_payment_view_modal_refundedPaymentClick_5_listener($event) {
        return ctx.openPaymentView($event);
      });
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isLoadingDashboard || ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoadingDashboard && !ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("visible", ctx.showRefundModal)("payment", ctx.selectedPaymentForRefund);
      \u0275\u0275advance();
      \u0275\u0275property("visible", ctx.showPaymentViewModal)("paymentTxId", ctx.selectedPaymentTxId)("paymentSearchResult", ctx.selectedPaymentSearchResult);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, RouterModule, RouterLink, BadgeComponent, RefundConfirmationModalComponent, IconButtonComponent, ButtonComponent, LoaderComponent, PaginationComponent, PaymentViewModalComponent], styles: [`

.page-wrapper[_ngcontent-%COMP%] {
  min-height: 100%;
  margin: -2rem;
  padding: 2rem;
}
.payments-container[_ngcontent-%COMP%] {
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  min-height: 400px;
}
.page-loading-container[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  width: 100%;
}
.page-header-actions[_ngcontent-%COMP%] {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;
}
.page-header-actions[_ngcontent-%COMP%]   app-button[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}
.page-header-actions[_ngcontent-%COMP%]   .create-payment-icon[_ngcontent-%COMP%] {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
}
.dashboard-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin-bottom: 1.5rem;
}
.dashboard-card[_ngcontent-%COMP%] {
  background: white;
  border-radius: 16px;
  padding: 1.25rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  border: 1px solid #e5e7eb;
}
.card-icon[_ngcontent-%COMP%] {
  width: 50px;
  height: 50px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.card-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  width: 24px;
  height: 24px;
}
.card-icon.total-payments[_ngcontent-%COMP%] {
  color: rgb(0, 0, 0);
  background-color: #f3f4f6;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
}
.card-icon.today-payments[_ngcontent-%COMP%] {
  color: rgb(0, 0, 0);
  background-color: #f3f4f6;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
}
.card-icon.total-revenue[_ngcontent-%COMP%] {
  color: rgb(0, 0, 0);
  background-color: #f3f4f6;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
}
.card-icon.total-bonuses[_ngcontent-%COMP%] {
  color: rgb(0, 0, 0);
  background-color: #f3f4f6;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
}
.card-info[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
}
.card-value[_ngcontent-%COMP%] {
  font-size: 1.35rem;
  font-weight: 700;
  color: #1f2937;
}
.card-label[_ngcontent-%COMP%] {
  font-size: 0.8rem;
  color: #64748b;
}
.filters-section[_ngcontent-%COMP%] {
  background: white;
  border-radius: 16px;
  padding: 1.25rem;
  margin-bottom: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  border: 1px solid #e5e7eb;
}
.filters-row[_ngcontent-%COMP%] {
  display: flex;
  gap: 1rem;
  align-items: flex-end;
  flex-wrap: wrap;
}
.filters-row[_ngcontent-%COMP%]    + .filters-row[_ngcontent-%COMP%] {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #f1f5f9;
}
.filter-group[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}
.filter-label[_ngcontent-%COMP%] {
  font-size: 0.75rem;
  font-weight: 600;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.search-group[_ngcontent-%COMP%] {
  flex: 1;
  min-width: 200px;
}
.search-input-wrapper[_ngcontent-%COMP%] {
  position: relative;
  display: flex;
  align-items: center;
}
.search-icon[_ngcontent-%COMP%] {
  position: absolute;
  left: 12px;
  width: 18px;
  height: 18px;
  color: #94a3b8;
  pointer-events: none;
}
.filter-input[_ngcontent-%COMP%] {
  width: 100%;
  padding: 0.625rem 0.875rem 0.625rem 2.5rem;
  border: 1.5px solid #e2e8f0;
  border-radius: 10px;
  font-size: 0.9rem;
  background: #f8fafc;
  color: #1f2937;
  transition: all 0.2s;
}
.filter-input[_ngcontent-%COMP%]:hover {
  border-color: #cbd5e1;
}
.filter-input[_ngcontent-%COMP%]:focus {
  outline: none;
  border-color: #22c55e;
  background: white;
  box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.1);
}
.filter-input[_ngcontent-%COMP%]::placeholder {
  color: #94a3b8;
}
.date-filter[_ngcontent-%COMP%] {
  min-width: 280px;
}
.date-inputs[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.date-input[_ngcontent-%COMP%] {
  flex: 1;
  padding: 0.625rem 0.875rem;
  border: 1.5px solid #e2e8f0;
  border-radius: 10px;
  font-size: 0.9rem;
  background: #f8fafc;
  color: #1f2937;
  transition: all 0.2s;
}
.date-input[_ngcontent-%COMP%]:hover {
  border-color: #cbd5e1;
}
.date-input[_ngcontent-%COMP%]:focus {
  outline: none;
  border-color: #22c55e;
  background: white;
  box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.1);
}
.date-separator[_ngcontent-%COMP%] {
  color: #94a3b8;
  font-weight: 500;
  font-size: 0.9rem;
}
.type-filter[_ngcontent-%COMP%] {
  flex-direction: row;
  align-items: center;
}
.type-buttons[_ngcontent-%COMP%] {
  display: flex;
  border: 1.5px solid #e2e8f0;
  border-radius: 8px;
  overflow: hidden;
}
.type-btn[_ngcontent-%COMP%] {
  padding: 0.5rem 0.875rem;
  border: none;
  background: #f8fafc;
  color: #64748b;
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s;
}
.type-btn[_ngcontent-%COMP%]:not(:last-child) {
  border-right: 1px solid #e2e8f0;
}
.type-btn.active[_ngcontent-%COMP%] {
  background: #16A34A;
  color: white;
}
.type-btn[_ngcontent-%COMP%]:hover:not(.active) {
  background: #f1f5f9;
}
.sort-group[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
}
.sort-group[_ngcontent-%COMP%]   .filter-label[_ngcontent-%COMP%] {
  margin-bottom: 0;
}
.sort-select[_ngcontent-%COMP%] {
  padding: 0.5rem 2rem 0.5rem 0.75rem;
  border: 1.5px solid #e2e8f0;
  border-radius: 8px;
  font-size: 0.85rem;
  background: #f8fafc;
  color: #1f2937;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.5rem center;
}
.sort-select[_ngcontent-%COMP%]:focus {
  outline: none;
  border-color: #22c55e;
}
.sort-direction-btn[_ngcontent-%COMP%] {
  width: 36px;
  height: 36px;
  border: 1.5px solid #e2e8f0;
  border-radius: 8px;
  background: #f8fafc;
  color: #64748b;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}
.sort-direction-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  width: 18px;
  height: 18px;
  transition: transform 0.2s;
}
.sort-direction-btn[_ngcontent-%COMP%]   svg.desc[_ngcontent-%COMP%] {
  transform: rotate(180deg);
}
.sort-direction-btn[_ngcontent-%COMP%]:hover {
  border-color: #22c55e;
  color: #16A34A;
}
.filters-footer[_ngcontent-%COMP%] {
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #f1f5f9;
}
.button-group[_ngcontent-%COMP%] {
  display: flex;
  gap: 2rem;
}
.button-group[_ngcontent-%COMP%]   app-button[_ngcontent-%COMP%] {
  width: 110px;
}
.button-group[_ngcontent-%COMP%]   app-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  width: 14px;
  height: 14px;
}
.results-info[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}
.results-count[_ngcontent-%COMP%] {
  font-size: 0.85rem;
  color: #64748b;
  font-weight: 500;
}
.table-container[_ngcontent-%COMP%] {
  background: white;
  border-radius: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  border: 1px solid #e5e7eb;
  overflow: hidden;
}
.payments-table[_ngcontent-%COMP%] {
  width: 100%;
  border-collapse: collapse;
}
.payments-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {
  padding: 1rem;
  text-align: left;
  font-size: 0.75rem;
  font-weight: 600;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  background: #f8fafc;
  border-bottom: 1px solid #e5e7eb;
}
.payments-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {
  padding: 1rem;
  border-bottom: 1px solid #f1f5f9;
}
.payment-row[_ngcontent-%COMP%] {
  transition: background 0.15s;
}
.payment-row[_ngcontent-%COMP%]:hover {
  background: #f8fafc;
}
.payment-row[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {
  border-bottom: none;
}
.payments-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.payment-details-row[_ngcontent-%COMP%] {
  background: transparent;
}
.payments-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.payment-details-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {
  border-top: none;
  padding: 0;
}
.payment-details-cell[_ngcontent-%COMP%] {
  padding: 0 !important;
  background: transparent;
}
.payment-details-content[_ngcontent-%COMP%] {
  padding: 1rem 1.5rem;
  overflow: hidden;
  animation: _ngcontent-%COMP%_slideDown 0.3s ease-out;
}
@keyframes _ngcontent-%COMP%_slideDown {
  from {
    opacity: 0;
    max-height: 0;
  }
  to {
    opacity: 1;
    max-height: 300px;
  }
}
.refund-details-grid[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
}
.refund-reason-section[_ngcontent-%COMP%] {
  flex: 1;
  text-align: left;
}
.refund-by-section[_ngcontent-%COMP%] {
  flex: 0 0 auto;
  text-align: right;
  min-width: 200px;
}
.refund-by-link[_ngcontent-%COMP%] {
  display: inline-block;
  padding: 0.75rem 0;
  background: transparent;
  border: none;
  border-radius: 0;
  font-size: 0.875rem;
  color: #1f2937;
  line-height: 1.6;
  white-space: pre-wrap;
  text-align: right;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.2s ease;
}
.refund-by-link[_ngcontent-%COMP%]:hover {
  color: #16A34A;
}
.refund-reason-section[_ngcontent-%COMP%], 
.refund-by-section[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.refund-label[_ngcontent-%COMP%] {
  font-size: 0.875rem;
  font-weight: 600;
  color: #475569;
}
.refund-reason-text[_ngcontent-%COMP%] {
  padding: 0.75rem;
  background: transparent;
  border: none;
  border-radius: 0;
  font-size: 0.875rem;
  color: #1f2937;
  line-height: 1.6;
  white-space: pre-wrap;
  text-align: left;
}
.refund-by-text[_ngcontent-%COMP%] {
  padding: 0.75rem 0;
  background: transparent;
  border: none;
  border-radius: 0;
  font-size: 0.875rem;
  color: #1f2937;
  line-height: 1.6;
  white-space: pre-wrap;
  text-align: right;
}
.refund-reason-empty[_ngcontent-%COMP%] {
  padding: 0.75rem;
  background: transparent;
  border: none;
  border-radius: 0;
  font-size: 0.875rem;
  color: #94a3b8;
  font-style: italic;
  text-align: left;
}
.refund-by-empty[_ngcontent-%COMP%] {
  padding: 0.75rem 0;
  background: transparent;
  border: none;
  border-radius: 0;
  font-size: 0.875rem;
  color: #94a3b8;
  font-style: italic;
  text-align: right;
}
.actions-cell[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  transition: transform 0.3s ease;
}
.actions-cell[_ngcontent-%COMP%]   svg.rotated[_ngcontent-%COMP%] {
  transform: rotate(180deg);
}
.td-id[_ngcontent-%COMP%] {
  min-width: 100px;
}
.payment-id[_ngcontent-%COMP%] {
  font-family: monospace;
  font-weight: 600;
  color: #64748b;
  font-size: 0.875rem;
}
.payment-id.clickable[_ngcontent-%COMP%] {
  color: #64748b;
  cursor: pointer;
  text-decoration: underline;
  transition: color 0.2s;
}
.payment-id.clickable[_ngcontent-%COMP%]:hover {
  color: #475569;
}
.client-cell[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.client-avatar[_ngcontent-%COMP%] {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background:
    linear-gradient(
      135deg,
      #f0fdf4,
      #dcfce7);
  color: #16A34A;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  font-weight: 600;
  flex-shrink: 0;
}
.client-info[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}
.client-name-link[_ngcontent-%COMP%] {
  text-decoration: none;
  color: inherit;
  transition: color 0.15s;
}
.client-name-link[_ngcontent-%COMP%]:hover {
  color: #16A34A;
}
.client-name[_ngcontent-%COMP%] {
  font-size: 0.9rem;
  font-weight: 600;
  color: #1f2937;
  cursor: pointer;
}
.client-name-link[_ngcontent-%COMP%]:hover   .client-name[_ngcontent-%COMP%] {
  color: #16A34A;
}
.client-phone[_ngcontent-%COMP%] {
  font-size: 0.8rem;
  color: #64748b;
}
.amount-value[_ngcontent-%COMP%] {
  font-size: 0.95rem;
  font-weight: 600;
  color: #16A34A;
}
.bonus-info[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}
.bonus-badge[_ngcontent-%COMP%] {
  display: inline-block;
}
.bonus-none[_ngcontent-%COMP%] {
  font-size: 0.8rem;
  color: #94a3b8;
}
.date-info[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}
.date-text[_ngcontent-%COMP%] {
  font-size: 0.85rem;
  color: #1f2937;
  font-weight: 500;
}
.time-text[_ngcontent-%COMP%] {
  font-size: 0.75rem;
  color: #64748b;
}
.actions-cell[_ngcontent-%COMP%] {
  display: flex;
  gap: 0.5rem;
}
.action-link[_ngcontent-%COMP%] {
  display: inline-flex;
  text-decoration: none;
  color: inherit;
}
.empty-state[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  color: #94a3b8;
}
.empty-state[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  width: 48px;
  height: 48px;
  margin-bottom: 1rem;
}
.empty-state[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
  font-size: 1rem;
  margin-bottom: 1rem;
}
.reset-btn[_ngcontent-%COMP%] {
  padding: 0.5rem 1rem;
  background: #16A34A;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
}
.reset-btn[_ngcontent-%COMP%]:hover {
  background: #14532d;
}
.pagination-container[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  gap: 1rem;
  margin-top: 1rem;
}
.pagination-left[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}
.pagination-right[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
}
.pagination-info[_ngcontent-%COMP%] {
  font-size: 0.875rem;
  color: #64748b;
  font-weight: 500;
}
.page-size-filter-section[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.page-size-label[_ngcontent-%COMP%] {
  font-size: 0.875rem;
  font-weight: 600;
  color: #475569;
}
.page-size-select[_ngcontent-%COMP%] {
  padding: 8px 12px;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  font-size: 0.875rem;
  background: white;
  color: #1f2937;
  cursor: pointer;
  outline: none;
  transition: all 0.2s;
}
.page-size-select[_ngcontent-%COMP%]:hover {
  border-color: #94a3b8;
}
.page-size-select[_ngcontent-%COMP%]:focus {
  border-color: #16A34A;
  box-shadow: 0 0 0 3px rgba(22, 163, 74, 0.1);
}
@media (max-width: 1200px) {
  .dashboard-grid[_ngcontent-%COMP%] {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 768px) {
  .page-wrapper[_ngcontent-%COMP%] {
    margin: -1rem;
    padding: 1rem;
  }
  .dashboard-grid[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
  }
  .filters-row[_ngcontent-%COMP%] {
    flex-direction: column;
  }
  .filter-group[_ngcontent-%COMP%] {
    width: 100%;
  }
  .table-container[_ngcontent-%COMP%] {
    overflow-x: auto;
  }
  .payments-table[_ngcontent-%COMP%] {
    min-width: 900px;
  }
}
/*# sourceMappingURL=payments-page.component.css.map */`] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaymentsPageComponent, [{
    type: Component,
    args: [{ selector: "app-payments-page", standalone: true, imports: [CommonModule, FormsModule, RouterModule, BadgeComponent, RefundConfirmationModalComponent, IconButtonComponent, ButtonComponent, LoaderComponent, PaginationComponent, PaymentViewModalComponent], template: `
    <div class="page-wrapper">
      <div class="payments-container">
        <!-- Loading State -->
        <div class="page-loading-container" *ngIf="isLoadingDashboard || isLoading">
          <app-loader [visible]="true" [overlay]="false" type="logo" size="large"></app-loader>
        </div>
        
        <div *ngIf="!isLoadingDashboard && !isLoading">
        
        <!-- Header with Create Button -->
        <div class="page-header-actions">
          <app-button 
            buttonType="primary" 
            size="medium" 
            (onClick)="openTransactionModal()">
            <svg viewBox="0 0 24 24" fill="none" class="create-payment-icon">
              <path d="M6 12H18M12 6V18" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            \u041D\u043E\u0432\u0430\u044F \u0442\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u044F
          </app-button>
        </div>
        
        <!-- Dashboard Cards -->
        <div class="dashboard-grid">
          <div class="dashboard-card">
            <div class="card-icon total-payments">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" stroke="currentColor" stroke-width="1.5"/>
                <rect x="9" y="3" width="6" height="4" rx="1" stroke="currentColor" stroke-width="1.5"/>
                <path d="M9 12h6M9 16h6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
            </div>
            <div class="card-info">
              <span class="card-value">{{ totalPayments }}</span>
              <span class="card-label">\u0412\u0441\u0435\u0433\u043E \u043F\u043B\u0430\u0442\u0435\u0436\u0435\u0439</span>
            </div>
          </div>
          <div class="dashboard-card">
            <div class="card-icon today-payments">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" stroke-width="1.5"/>
                <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" stroke-width="1.5"/>
              </svg>
            </div>
            <div class="card-info">
              <span class="card-value">{{ paymentsToday }}</span>
              <span class="card-label">\u041F\u043B\u0430\u0442\u0435\u0436\u0435\u0439 \u0441\u0435\u0433\u043E\u0434\u043D\u044F</span>
            </div>
          </div>
          <div class="dashboard-card">
            <div class="card-icon total-revenue">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" stroke="currentColor" stroke-width="1.5"/>
              </svg>
            </div>
            <div class="card-info">
              <span class="card-value">{{ formatAmount(totalRevenue) }} \u20B8</span>
              <span class="card-label">\u041E\u0431\u0449\u0438\u0439 \u0434\u043E\u0445\u043E\u0434</span>
            </div>
          </div>
          <div class="dashboard-card">
            <div class="card-icon total-bonuses">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" stroke-width="1.5"/>
              </svg>
            </div>
            <div class="card-info">
              <span class="card-value">{{ formatAmount(totalBonusesGranted) }}</span>
              <span class="card-label">\u0411\u043E\u043D\u0443\u0441\u043E\u0432 \u043D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u043E</span>
            </div>
          </div>
        </div>

        <!-- Filters Section -->
        <div class="filters-section">
          <div class="filters-row">
            <!-- Search by payment ID -->
            <div class="filter-group search-group">
              <div class="search-input-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="search-icon">
                  <circle cx="11" cy="11" r="8" stroke="currentColor" stroke-width="1.5"/>
                  <path d="M21 21l-4.35-4.35" stroke="currentColor" stroke-width="1.5"/>
                </svg>
                <input 
                  type="text" 
                  [(ngModel)]="searchPaymentId"
                  (keydown.enter)="applyFilters()"
                  placeholder="\u041F\u043E\u0438\u0441\u043A \u043F\u043E ID \u043F\u043B\u0430\u0442\u0435\u0436\u0430..."
                  class="filter-input">
              </div>
            </div>

            <!-- Search by client name -->
            <div class="filter-group">
              <div class="search-input-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="search-icon">
                  <circle cx="11" cy="11" r="8" stroke="currentColor" stroke-width="1.5"/>
                  <path d="M21 21l-4.35-4.35" stroke="currentColor" stroke-width="1.5"/>
                </svg>
                <input 
                  type="text" 
                  [(ngModel)]="searchClientName" 
                  (keydown.enter)="applyFilters()"
                  placeholder="\u041F\u043E\u0438\u0441\u043A \u043F\u043E \u043A\u043B\u0438\u0435\u043D\u0442\u0443..."
                  class="filter-input">
              </div>
            </div>

            <!-- Search by phone -->
            <div class="filter-group">
              <div class="search-input-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="search-icon">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" stroke-width="1.5"/>
                </svg>
                <input 
                  type="text" 
                  [(ngModel)]="searchPhone"
                  (keydown.enter)="applyFilters()"
                  placeholder="\u041F\u043E\u0438\u0441\u043A \u043F\u043E \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0443..."
                  class="filter-input">
              </div>
            </div>

            <!-- Date filter -->
            <div class="filter-group date-filter">
              <label class="filter-label">\u041F\u0435\u0440\u0438\u043E\u0434:</label>
              <div class="date-inputs">
                <input 
                  type="date" 
                  [(ngModel)]="dateFrom" 
                  placeholder="\u0414\u0414 \u041C\u041C \u0413\u0413\u0413\u0413"
                  class="date-input">
                <span class="date-separator">\u2014</span>
                <input 
                  type="date" 
                  [(ngModel)]="dateTo" 
                  placeholder="\u0414\u0414 \u041C\u041C \u0413\u0413\u0413\u0413"
                  class="date-input">
              </div>
            </div>
          </div>

          <div class="filters-row">
            <!-- Payment method filter -->
            <div class="filter-group type-filter">
              <label class="filter-label">\u0421\u043F\u043E\u0441\u043E\u0431 \u043E\u043F\u043B\u0430\u0442\u044B:</label>
              <div class="type-buttons">
                <button 
                  class="type-btn" 
                  [class.active]="filterPaymentMethod === 'all'"
                  (click)="filterPaymentMethod = 'all'">\u0412\u0441\u0435</button>
                <button 
                  class="type-btn" 
                  [class.active]="filterPaymentMethod === 'cash'"
                  (click)="filterPaymentMethod = 'cash'">\u041D\u0430\u043B\u0438\u0447\u043D\u044B\u0435</button>
                <button 
                  class="type-btn" 
                  [class.active]="filterPaymentMethod === 'card'"
                  (click)="filterPaymentMethod = 'card'">\u041A\u0430\u0440\u0442\u0430</button>
                <button 
                  class="type-btn" 
                  [class.active]="filterPaymentMethod === 'transfer'"
                  (click)="filterPaymentMethod = 'transfer'">\u041F\u0435\u0440\u0435\u0432\u043E\u0434</button>
              </div>
            </div>

            <!-- Refund filter -->
            <div class="filter-group type-filter">
              <label class="filter-label">\u0422\u0438\u043F:</label>
              <div class="type-buttons">
                <button 
                  class="type-btn" 
                  [class.active]="filterRefund === 'all'"
                  (click)="filterRefund = 'all'">\u0412\u0441\u0435</button>
                <button 
                  class="type-btn" 
                  [class.active]="filterRefund === 'paid'"
                  (click)="filterRefund = 'paid'">\u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E</button>
                <button 
                  class="type-btn" 
                  [class.active]="filterRefund === 'refund'"
                  (click)="filterRefund = 'refund'">\u0412\u043E\u0437\u0432\u0440\u0430\u0442</button>
              </div>
            </div>

            <!-- Sort -->
            <div class="filter-group sort-group">
              <label class="filter-label">\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430:</label>
              <select [(ngModel)]="sortField" class="sort-select">
                <option value="date">\u041F\u043E \u0434\u0430\u0442\u0435</option>
                <option value="clientName">\u041F\u043E \u043A\u043B\u0438\u0435\u043D\u0442\u0443</option>
                <option value="amount">\u041F\u043E \u0441\u0443\u043C\u043C\u0435</option>
                <option value="paymentMethod">\u041F\u043E \u0441\u043F\u043E\u0441\u043E\u0431\u0443 \u043E\u043F\u043B\u0430\u0442\u044B</option>
              </select>
              <button class="sort-direction-btn" (click)="sortDirection = sortDirection === 'asc' ? 'desc' : 'asc'">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" [class.desc]="sortDirection === 'desc'">
                  <path d="M12 5v14M19 12l-7 7-7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
            </div>

          </div>

          <!-- Filter Actions Footer -->
          <div class="filters-footer">
            <div class="button-group">
              <app-button 
                buttonType="danger-outline" 
                size="medium" 
                (onClick)="clearFilters()"
                *ngIf="hasActiveFilters()">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
                \u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C
              </app-button>
              <app-button 
                buttonType="primary-outline" 
                size="medium" 
                (onClick)="applyFilters()">
                <svg viewBox="0 0 24 24" fill="none">
                  <circle cx="11" cy="11" r="8" stroke="currentColor" stroke-width="1.5"/>
                  <path d="M21 21l-4.35-4.35" stroke="currentColor" stroke-width="1.5"/>
                </svg>
                \u041F\u043E\u0438\u0441\u043A
              </app-button>
            </div>
          </div>
        </div>

        <!-- Results count -->
        <div class="results-info">
          <span class="results-count">\u041D\u0430\u0439\u0434\u0435\u043D\u043E: {{ totalPaymentsFound }} \u043F\u043B\u0430\u0442\u0435\u0436\u0435\u0439</span>
        </div>

        <!-- Payments Table with Pagination -->
        <div>
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
                <ng-container *ngFor="let payment of payments">
                  <tr class="payment-row">
                    <td class="td-id">
                      <span class="payment-id clickable" (click)="openPaymentView(payment.id)">{{ payment.id }}</span>
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
                          [tooltip]="isPaymentRowExpanded(payment.id) ? '\u0421\u043A\u0440\u044B\u0442\u044C \u0434\u0435\u0442\u0430\u043B\u0438' : '\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0434\u0435\u0442\u0430\u043B\u0438'"
                          (onClick)="togglePaymentRow(payment.id)">
                          <svg [class.rotated]="isPaymentRowExpanded(payment.id)" viewBox="0 0 24 24" fill="none">
                            <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                        </app-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr *ngIf="isPaymentRowExpanded(payment.id)" class="payment-details-row">
                    <td colspan="8" class="payment-details-cell">
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
                            <a *ngIf="payment.initiatedBy && payment.initiatedById" 
                               [routerLink]="['/users', payment.initiatedById]" 
                               class="refund-by-link">
                              {{ payment.initiatedBy }}
                            </a>
                            <div class="refund-by-text" *ngIf="payment.initiatedBy && !payment.initiatedById">
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

          <div class="empty-state" *ngIf="payments.length === 0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="8" stroke="currentColor" stroke-width="1.5"/>
              <path d="M21 21l-4.35-4.35" stroke="currentColor" stroke-width="1.5"/>
            </svg>
            <span>\u041F\u043B\u0430\u0442\u0435\u0436\u0438 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u044B</span>
            <button class="reset-btn" (click)="clearFilters()">\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u0444\u0438\u043B\u044C\u0442\u0440\u044B</button>
          </div>
        </div>

        <!-- Backend Pagination -->
        <div class="pagination-container" *ngIf="totalPaymentsFound > 0">
          <div class="pagination-left">
            <div class="pagination-info">
              <span>\u041F\u043E\u043A\u0430\u0437\u0430\u043D\u043E {{ (currentPage * pageSize) + 1 }}-{{ Math.min((currentPage + 1) * pageSize, totalPaymentsFound) }} \u0438\u0437 {{ totalPaymentsFound }}</span>
            </div>
            <div class="page-size-filter-section">
              <label class="page-size-label">\u0421\u0442\u0440\u043E\u043A \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435:</label>
              <select [(ngModel)]="pageSize" (change)="onPageSizeChange()" class="page-size-select">
                <option [value]="15">15</option>
                <option [value]="30">30</option>
                <option [value]="50">50</option>
                <option [value]="100">100</option>
              </select>
            </div>
          </div>
          <div class="pagination-right" *ngIf="getTotalPages() > 1">
            <app-pagination
              [currentPage]="currentPage + 1"
              [totalPages]="getTotalPages()"
              (pageChange)="onPageChange($event)">
            </app-pagination>
          </div>
        </div>
        </div>
      </div>
    </div>

    <!-- Refund Confirmation Modal -->
    <app-refund-confirmation-modal
      [visible]="showRefundModal"
      [payment]="selectedPaymentForRefund"
      (visibleChange)="closeRefundModal()"
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
  `, styles: [`/* angular:styles/component:css;4a55c78ae3d3f1a7cc63e2257aa0d88abd8b19b898b37655dc52d8757675f229;/Users/baglan/repo/westwood/westwood-frontend/src/app/features/payments/pages/payments-page/payments-page.component.ts */
.page-wrapper {
  min-height: 100%;
  margin: -2rem;
  padding: 2rem;
}
.payments-container {
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  min-height: 400px;
}
.page-loading-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  width: 100%;
}
.page-header-actions {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;
}
.page-header-actions app-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}
.page-header-actions .create-payment-icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
}
.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin-bottom: 1.5rem;
}
.dashboard-card {
  background: white;
  border-radius: 16px;
  padding: 1.25rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  border: 1px solid #e5e7eb;
}
.card-icon {
  width: 50px;
  height: 50px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.card-icon svg {
  width: 24px;
  height: 24px;
}
.card-icon.total-payments {
  color: rgb(0, 0, 0);
  background-color: #f3f4f6;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
}
.card-icon.today-payments {
  color: rgb(0, 0, 0);
  background-color: #f3f4f6;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
}
.card-icon.total-revenue {
  color: rgb(0, 0, 0);
  background-color: #f3f4f6;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
}
.card-icon.total-bonuses {
  color: rgb(0, 0, 0);
  background-color: #f3f4f6;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
}
.card-info {
  display: flex;
  flex-direction: column;
}
.card-value {
  font-size: 1.35rem;
  font-weight: 700;
  color: #1f2937;
}
.card-label {
  font-size: 0.8rem;
  color: #64748b;
}
.filters-section {
  background: white;
  border-radius: 16px;
  padding: 1.25rem;
  margin-bottom: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  border: 1px solid #e5e7eb;
}
.filters-row {
  display: flex;
  gap: 1rem;
  align-items: flex-end;
  flex-wrap: wrap;
}
.filters-row + .filters-row {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #f1f5f9;
}
.filter-group {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}
.filter-label {
  font-size: 0.75rem;
  font-weight: 600;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.search-group {
  flex: 1;
  min-width: 200px;
}
.search-input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}
.search-icon {
  position: absolute;
  left: 12px;
  width: 18px;
  height: 18px;
  color: #94a3b8;
  pointer-events: none;
}
.filter-input {
  width: 100%;
  padding: 0.625rem 0.875rem 0.625rem 2.5rem;
  border: 1.5px solid #e2e8f0;
  border-radius: 10px;
  font-size: 0.9rem;
  background: #f8fafc;
  color: #1f2937;
  transition: all 0.2s;
}
.filter-input:hover {
  border-color: #cbd5e1;
}
.filter-input:focus {
  outline: none;
  border-color: #22c55e;
  background: white;
  box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.1);
}
.filter-input::placeholder {
  color: #94a3b8;
}
.date-filter {
  min-width: 280px;
}
.date-inputs {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.date-input {
  flex: 1;
  padding: 0.625rem 0.875rem;
  border: 1.5px solid #e2e8f0;
  border-radius: 10px;
  font-size: 0.9rem;
  background: #f8fafc;
  color: #1f2937;
  transition: all 0.2s;
}
.date-input:hover {
  border-color: #cbd5e1;
}
.date-input:focus {
  outline: none;
  border-color: #22c55e;
  background: white;
  box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.1);
}
.date-separator {
  color: #94a3b8;
  font-weight: 500;
  font-size: 0.9rem;
}
.type-filter {
  flex-direction: row;
  align-items: center;
}
.type-buttons {
  display: flex;
  border: 1.5px solid #e2e8f0;
  border-radius: 8px;
  overflow: hidden;
}
.type-btn {
  padding: 0.5rem 0.875rem;
  border: none;
  background: #f8fafc;
  color: #64748b;
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s;
}
.type-btn:not(:last-child) {
  border-right: 1px solid #e2e8f0;
}
.type-btn.active {
  background: #16A34A;
  color: white;
}
.type-btn:hover:not(.active) {
  background: #f1f5f9;
}
.sort-group {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
}
.sort-group .filter-label {
  margin-bottom: 0;
}
.sort-select {
  padding: 0.5rem 2rem 0.5rem 0.75rem;
  border: 1.5px solid #e2e8f0;
  border-radius: 8px;
  font-size: 0.85rem;
  background: #f8fafc;
  color: #1f2937;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.5rem center;
}
.sort-select:focus {
  outline: none;
  border-color: #22c55e;
}
.sort-direction-btn {
  width: 36px;
  height: 36px;
  border: 1.5px solid #e2e8f0;
  border-radius: 8px;
  background: #f8fafc;
  color: #64748b;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}
.sort-direction-btn svg {
  width: 18px;
  height: 18px;
  transition: transform 0.2s;
}
.sort-direction-btn svg.desc {
  transform: rotate(180deg);
}
.sort-direction-btn:hover {
  border-color: #22c55e;
  color: #16A34A;
}
.filters-footer {
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #f1f5f9;
}
.button-group {
  display: flex;
  gap: 2rem;
}
.button-group app-button {
  width: 110px;
}
.button-group app-button svg {
  width: 14px;
  height: 14px;
}
.results-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}
.results-count {
  font-size: 0.85rem;
  color: #64748b;
  font-weight: 500;
}
.table-container {
  background: white;
  border-radius: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  border: 1px solid #e5e7eb;
  overflow: hidden;
}
.payments-table {
  width: 100%;
  border-collapse: collapse;
}
.payments-table th {
  padding: 1rem;
  text-align: left;
  font-size: 0.75rem;
  font-weight: 600;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  background: #f8fafc;
  border-bottom: 1px solid #e5e7eb;
}
.payments-table td {
  padding: 1rem;
  border-bottom: 1px solid #f1f5f9;
}
.payment-row {
  transition: background 0.15s;
}
.payment-row:hover {
  background: #f8fafc;
}
.payment-row:last-child td {
  border-bottom: none;
}
.payments-table tbody tr.payment-details-row {
  background: transparent;
}
.payments-table tbody tr.payment-details-row td {
  border-top: none;
  padding: 0;
}
.payment-details-cell {
  padding: 0 !important;
  background: transparent;
}
.payment-details-content {
  padding: 1rem 1.5rem;
  overflow: hidden;
  animation: slideDown 0.3s ease-out;
}
@keyframes slideDown {
  from {
    opacity: 0;
    max-height: 0;
  }
  to {
    opacity: 1;
    max-height: 300px;
  }
}
.refund-details-grid {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
}
.refund-reason-section {
  flex: 1;
  text-align: left;
}
.refund-by-section {
  flex: 0 0 auto;
  text-align: right;
  min-width: 200px;
}
.refund-by-link {
  display: inline-block;
  padding: 0.75rem 0;
  background: transparent;
  border: none;
  border-radius: 0;
  font-size: 0.875rem;
  color: #1f2937;
  line-height: 1.6;
  white-space: pre-wrap;
  text-align: right;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.2s ease;
}
.refund-by-link:hover {
  color: #16A34A;
}
.refund-reason-section,
.refund-by-section {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.refund-label {
  font-size: 0.875rem;
  font-weight: 600;
  color: #475569;
}
.refund-reason-text {
  padding: 0.75rem;
  background: transparent;
  border: none;
  border-radius: 0;
  font-size: 0.875rem;
  color: #1f2937;
  line-height: 1.6;
  white-space: pre-wrap;
  text-align: left;
}
.refund-by-text {
  padding: 0.75rem 0;
  background: transparent;
  border: none;
  border-radius: 0;
  font-size: 0.875rem;
  color: #1f2937;
  line-height: 1.6;
  white-space: pre-wrap;
  text-align: right;
}
.refund-reason-empty {
  padding: 0.75rem;
  background: transparent;
  border: none;
  border-radius: 0;
  font-size: 0.875rem;
  color: #94a3b8;
  font-style: italic;
  text-align: left;
}
.refund-by-empty {
  padding: 0.75rem 0;
  background: transparent;
  border: none;
  border-radius: 0;
  font-size: 0.875rem;
  color: #94a3b8;
  font-style: italic;
  text-align: right;
}
.actions-cell svg {
  transition: transform 0.3s ease;
}
.actions-cell svg.rotated {
  transform: rotate(180deg);
}
.td-id {
  min-width: 100px;
}
.payment-id {
  font-family: monospace;
  font-weight: 600;
  color: #64748b;
  font-size: 0.875rem;
}
.payment-id.clickable {
  color: #64748b;
  cursor: pointer;
  text-decoration: underline;
  transition: color 0.2s;
}
.payment-id.clickable:hover {
  color: #475569;
}
.client-cell {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.client-avatar {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background:
    linear-gradient(
      135deg,
      #f0fdf4,
      #dcfce7);
  color: #16A34A;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  font-weight: 600;
  flex-shrink: 0;
}
.client-info {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}
.client-name-link {
  text-decoration: none;
  color: inherit;
  transition: color 0.15s;
}
.client-name-link:hover {
  color: #16A34A;
}
.client-name {
  font-size: 0.9rem;
  font-weight: 600;
  color: #1f2937;
  cursor: pointer;
}
.client-name-link:hover .client-name {
  color: #16A34A;
}
.client-phone {
  font-size: 0.8rem;
  color: #64748b;
}
.amount-value {
  font-size: 0.95rem;
  font-weight: 600;
  color: #16A34A;
}
.bonus-info {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}
.bonus-badge {
  display: inline-block;
}
.bonus-none {
  font-size: 0.8rem;
  color: #94a3b8;
}
.date-info {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}
.date-text {
  font-size: 0.85rem;
  color: #1f2937;
  font-weight: 500;
}
.time-text {
  font-size: 0.75rem;
  color: #64748b;
}
.actions-cell {
  display: flex;
  gap: 0.5rem;
}
.action-link {
  display: inline-flex;
  text-decoration: none;
  color: inherit;
}
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  color: #94a3b8;
}
.empty-state svg {
  width: 48px;
  height: 48px;
  margin-bottom: 1rem;
}
.empty-state span {
  font-size: 1rem;
  margin-bottom: 1rem;
}
.reset-btn {
  padding: 0.5rem 1rem;
  background: #16A34A;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
}
.reset-btn:hover {
  background: #14532d;
}
.pagination-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  gap: 1rem;
  margin-top: 1rem;
}
.pagination-left {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}
.pagination-right {
  display: flex;
  align-items: center;
}
.pagination-info {
  font-size: 0.875rem;
  color: #64748b;
  font-weight: 500;
}
.page-size-filter-section {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.page-size-label {
  font-size: 0.875rem;
  font-weight: 600;
  color: #475569;
}
.page-size-select {
  padding: 8px 12px;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  font-size: 0.875rem;
  background: white;
  color: #1f2937;
  cursor: pointer;
  outline: none;
  transition: all 0.2s;
}
.page-size-select:hover {
  border-color: #94a3b8;
}
.page-size-select:focus {
  border-color: #16A34A;
  box-shadow: 0 0 0 3px rgba(22, 163, 74, 0.1);
}
@media (max-width: 1200px) {
  .dashboard-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 768px) {
  .page-wrapper {
    margin: -1rem;
    padding: 1rem;
  }
  .dashboard-grid {
    grid-template-columns: 1fr;
  }
  .filters-row {
    flex-direction: column;
  }
  .filter-group {
    width: 100%;
  }
  .table-container {
    overflow-x: auto;
  }
  .payments-table {
    min-width: 900px;
  }
}
/*# sourceMappingURL=payments-page.component.css.map */
`] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PaymentsPageComponent, { className: "PaymentsPageComponent", filePath: "src/app/features/payments/pages/payments-page/payments-page.component.ts", lineNumber: 1311 });
})();
export {
  PaymentsPageComponent
};
//# sourceMappingURL=chunk-VYLGZVDL.js.map
