import {
  NotFoundStateComponent
} from "./chunk-XCXEQJWR.js";
import {
  UsersService
} from "./chunk-AC5DBEUK.js";
import {
  PaymentViewModalComponent
} from "./chunk-LWTVJENB.js";
import {
  BadgeComponent
} from "./chunk-DTAKDRO5.js";
import {
  LoaderComponent
} from "./chunk-YU5PGG2Y.js";
import {
  TransactionModalService
} from "./chunk-JQUKQS2J.js";
import {
  PageHeaderService
} from "./chunk-5JCDK4OZ.js";
import "./chunk-6FFMNYG3.js";
import {
  ToastService
} from "./chunk-R6ELT46B.js";
import "./chunk-3N5Z3XGP.js";
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
  Title,
  inject,
  setClassMetadata,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
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
  ɵɵtextInterpolate2
} from "./chunk-MTXXT26T.js";

// src/app/features/users/pages/user-profile-page/user-profile-page.component.ts
var _c0 = (a0) => ["/clients", a0];
function UserProfilePageComponent_div_2_Template(rf, ctx) {
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
function UserProfilePageComponent_app_not_found_state_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-not-found-state", 8);
  }
}
function UserProfilePageComponent_div_4_p_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.user.phoneNumber);
  }
}
function UserProfilePageComponent_div_4_div_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "span", 35);
    \u0275\u0275text(2, "\u0421\u0442\u0430\u0442\u0443\u0441:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 36)(4, "span", 55);
    \u0275\u0275element(5, "span", 56);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("online", ctx_r0.userStatus.isOnline)("offline", !ctx_r0.userStatus.isOnline);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.userStatus.isOnline ? "\u041E\u043D\u043B\u0430\u0439\u043D" : "\u041E\u0444\u043B\u0430\u0439\u043D", " ");
  }
}
function UserProfilePageComponent_div_4_div_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "span", 35);
    \u0275\u0275text(2, "\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439 \u0440\u0430\u0437 \u043E\u043D\u043B\u0430\u0439\u043D:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 36);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.formatLastSeen((ctx_r0.userStatus == null ? null : ctx_r0.userStatus.lastSeenAt) || null));
  }
}
function UserProfilePageComponent_div_4_tr_92_app_badge_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-badge", 82);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const payment_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" +", ctx_r0.formatAmount(ctx_r0.getBonusGranted(payment_r3)), " ");
  }
}
function UserProfilePageComponent_div_4_tr_92_app_badge_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-badge", 83);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const payment_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" -", ctx_r0.formatAmount(ctx_r0.getBonusUsed(payment_r3)), " ");
  }
}
function UserProfilePageComponent_div_4_tr_92_span_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 84);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function UserProfilePageComponent_div_4_tr_92_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 57)(1, "td", 58)(2, "span", 59);
    \u0275\u0275listener("click", function UserProfilePageComponent_div_4_tr_92_Template_span_click_2_listener() {
      const payment_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openPaymentView(payment_r3.txId || payment_r3.id));
    });
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 60)(5, "div", 61)(6, "div", 62);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 63)(9, "a", 64)(10, "span", 65);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "span", 66);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(14, "td", 67)(15, "span", 68);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "td", 69)(18, "div", 70);
    \u0275\u0275template(19, UserProfilePageComponent_div_4_tr_92_app_badge_19_Template, 2, 1, "app-badge", 71)(20, UserProfilePageComponent_div_4_tr_92_app_badge_20_Template, 2, 1, "app-badge", 72)(21, UserProfilePageComponent_div_4_tr_92_span_21_Template, 2, 0, "span", 73);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "td", 74);
    \u0275\u0275element(23, "app-badge", 75);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "td", 76)(25, "app-badge", 77);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "td", 78)(28, "div", 79)(29, "span", 80);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span", 81);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const payment_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("#", payment_r3.txId || payment_r3.id, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.getInitials(payment_r3.clientName), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(15, _c0, payment_r3.clientId));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(payment_r3.clientName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(payment_r3.clientPhone);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r0.formatAmount(payment_r3.amount), " \u20B8");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.getBonusGranted(payment_r3) > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.getBonusUsed(payment_r3) > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.getBonusGranted(payment_r3) === 0 && ctx_r0.getBonusUsed(payment_r3) === 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("paymentMethod", ctx_r0.getPaymentMethodForBadge(ctx_r0.getPaymentMethod(payment_r3)));
    \u0275\u0275advance(2);
    \u0275\u0275property("badgeType", ctx_r0.isRefunded(payment_r3) ? "refund" : "payment")("icon", ctx_r0.isRefunded(payment_r3) ? "refund" : "payment");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.isRefunded(payment_r3) ? "\u0412\u043E\u0437\u0432\u0440\u0430\u0442" : "\u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E", " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.getFormattedDate(payment_r3));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getFormattedTime(payment_r3));
  }
}
function UserProfilePageComponent_div_4_div_93_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 85);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 22);
    \u0275\u0275element(2, "path", 86)(3, "rect", 87)(4, "path", 88);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "\u041D\u0435\u0442 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0439");
    \u0275\u0275elementEnd()();
  }
}
function UserProfilePageComponent_div_4_div_95_app_badge_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-badge", 107);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const payment_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("+", ctx_r0.formatAmount(ctx_r0.getBonusGranted(payment_r5)), "");
  }
}
function UserProfilePageComponent_div_4_div_95_app_badge_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-badge", 108);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const payment_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("-", ctx_r0.formatAmount(ctx_r0.getBonusUsed(payment_r5)), "");
  }
}
function UserProfilePageComponent_div_4_div_95_span_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function UserProfilePageComponent_div_4_div_95_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 89)(1, "div", 90);
    \u0275\u0275listener("click", function UserProfilePageComponent_div_4_div_95_Template_div_click_1_listener() {
      const payment_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleMobilePaymentCard(payment_r5.txId || payment_r5.id));
    });
    \u0275\u0275elementStart(2, "div", 91)(3, "div")(4, "div", 92);
    \u0275\u0275listener("click", function UserProfilePageComponent_div_4_div_95_Template_div_click_4_listener($event) {
      const payment_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      ctx_r0.openPaymentView(payment_r5.txId || payment_r5.id);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 93);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 94);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 95);
    \u0275\u0275element(10, "path", 96);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(11, "div", 97)(12, "div", 98)(13, "span", 99);
    \u0275\u0275text(14, "\u041A\u043B\u0438\u0435\u043D\u0442:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "a", 100);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 98)(18, "span", 99);
    \u0275\u0275text(19, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 101);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 98)(23, "span", 99);
    \u0275\u0275text(24, "\u0411\u043E\u043D\u0443\u0441\u044B:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 102);
    \u0275\u0275template(26, UserProfilePageComponent_div_4_div_95_app_badge_26_Template, 2, 1, "app-badge", 103)(27, UserProfilePageComponent_div_4_div_95_app_badge_27_Template, 2, 1, "app-badge", 104)(28, UserProfilePageComponent_div_4_div_95_span_28_Template, 2, 0, "span", 105);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 98)(30, "span", 99);
    \u0275\u0275text(31, "\u0421\u043F\u043E\u0441\u043E\u0431 \u043E\u043F\u043B\u0430\u0442\u044B:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span", 101);
    \u0275\u0275element(33, "app-badge", 106);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 98)(35, "span", 99);
    \u0275\u0275text(36, "\u0414\u0430\u0442\u0430:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "span", 101);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const payment_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("#", payment_r5.txId || payment_r5.id, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.formatAmount(payment_r5.amount), " \u20B8");
    \u0275\u0275advance();
    \u0275\u0275classProp("expanded", ctx_r0.isMobilePaymentExpanded(payment_r5.txId || payment_r5.id));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("expanded", ctx_r0.isMobilePaymentExpanded(payment_r5.txId || payment_r5.id));
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(15, _c0, payment_r5.clientId));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", payment_r5.clientName, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(payment_r5.clientPhone);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r0.getBonusGranted(payment_r5) > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.getBonusUsed(payment_r5) > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.getBonusGranted(payment_r5) === 0 && ctx_r0.getBonusUsed(payment_r5) === 0);
    \u0275\u0275advance(5);
    \u0275\u0275property("paymentMethod", ctx_r0.getPaymentMethodForBadge(ctx_r0.getPaymentMethod(payment_r5)));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", ctx_r0.getFormattedDate(payment_r5), " ", ctx_r0.getFormattedTime(payment_r5), "");
  }
}
function UserProfilePageComponent_div_4_div_96_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 109);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 22);
    \u0275\u0275element(2, "path", 86)(3, "rect", 87)(4, "path", 88);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "\u041D\u0435\u0442 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0439");
    \u0275\u0275elementEnd()();
  }
}
function UserProfilePageComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10)(2, "div", 11)(3, "div", 12)(4, "div", 13);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "div", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 15)(8, "div", 16)(9, "h1", 17);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "app-badge", 18);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "p", 19);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, UserProfilePageComponent_div_4_p_15_Template, 2, 1, "p", 20);
    \u0275\u0275elementStart(16, "div", 21);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(17, "svg", 22);
    \u0275\u0275element(18, "path", 23)(19, "path", 24)(20, "path", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(21, "span");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(23, "div", 26)(24, "div", 27)(25, "div", 28)(26, "div", 29);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(27, "svg", 22);
    \u0275\u0275element(28, "path", 30)(29, "circle", 31);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(30, "h3", 32);
    \u0275\u0275text(31, "\u041B\u0438\u0447\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "div", 33)(33, "div", 34)(34, "span", 35);
    \u0275\u0275text(35, "\u0418\u043C\u044F:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "span", 36);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 34)(39, "span", 35);
    \u0275\u0275text(40, "\u0424\u0430\u043C\u0438\u043B\u0438\u044F:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "span", 36);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 34)(44, "span", 35);
    \u0275\u0275text(45, "Email:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "span", 36);
    \u0275\u0275text(47);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div", 34)(49, "span", 35);
    \u0275\u0275text(50, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "span", 36);
    \u0275\u0275text(52);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "div", 34)(54, "span", 35);
    \u0275\u0275text(55, "\u0420\u043E\u043B\u044C:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "span", 36);
    \u0275\u0275text(57);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "div", 34)(59, "span", 35);
    \u0275\u0275text(60, "\u0414\u0430\u0442\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "span", 36);
    \u0275\u0275text(62);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(63, UserProfilePageComponent_div_4_div_63_Template, 7, 5, "div", 37)(64, UserProfilePageComponent_div_4_div_64_Template, 5, 1, "div", 37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "div", 38)(66, "div", 27)(67, "div", 28)(68, "div", 29);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(69, "svg", 22);
    \u0275\u0275element(70, "path", 39);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(71, "h3", 32);
    \u0275\u0275text(72, "\u0418\u0441\u0442\u043E\u0440\u0438\u044F \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0439");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(73, "div", 40)(74, "table", 41)(75, "thead")(76, "tr")(77, "th", 42);
    \u0275\u0275text(78, "ID \u043F\u043B\u0430\u0442\u0435\u0436\u0430");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "th", 43);
    \u0275\u0275text(80, "\u041A\u043B\u0438\u0435\u043D\u0442");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "th", 44);
    \u0275\u0275text(82, "\u0421\u0443\u043C\u043C\u0430");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "th", 45);
    \u0275\u0275text(84, "\u0411\u043E\u043D\u0443\u0441\u044B");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "th", 46);
    \u0275\u0275text(86, "\u0421\u043F\u043E\u0441\u043E\u0431 \u043E\u043F\u043B\u0430\u0442\u044B");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "th", 47);
    \u0275\u0275text(88, "\u0421\u0442\u0430\u0442\u0443\u0441");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(89, "th", 48);
    \u0275\u0275text(90, "\u0414\u0430\u0442\u0430 \u0438 \u0432\u0440\u0435\u043C\u044F");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(91, "tbody");
    \u0275\u0275template(92, UserProfilePageComponent_div_4_tr_92_Template, 33, 17, "tr", 49);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(93, UserProfilePageComponent_div_4_div_93_Template, 7, 0, "div", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "div", 51);
    \u0275\u0275template(95, UserProfilePageComponent_div_4_div_95_Template, 39, 17, "div", 52)(96, UserProfilePageComponent_div_4_div_96_Template, 7, 0, "div", 53);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r0.getInitials(), " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("online", ctx_r0.userStatus == null ? null : ctx_r0.userStatus.isOnline)("offline", !(ctx_r0.userStatus == null ? null : ctx_r0.userStatus.isOnline));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.getFullName());
    \u0275\u0275advance();
    \u0275\u0275property("badgeType", ctx_r0.getStatusBadgeType(ctx_r0.user.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getStatusLabel(ctx_r0.user.status), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.user.email);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.user.phoneNumber);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.user.role);
    \u0275\u0275advance(15);
    \u0275\u0275textInterpolate(ctx_r0.user.firstName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.user.lastName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.user.email);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.user.phoneNumber || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.user.role);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.formatDate(ctx_r0.user.createdAt));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.userStatus);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.userStatus == null ? null : ctx_r0.userStatus.lastSeenAt);
    \u0275\u0275advance(28);
    \u0275\u0275property("ngForOf", ctx_r0.userPayments);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.userPayments.length === 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.userPayments);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.userPayments.length === 0);
  }
}
var UserProfilePageComponent = class _UserProfilePageComponent {
  pageHeaderService = inject(PageHeaderService);
  route = inject(ActivatedRoute);
  router = inject(Router);
  titleService = inject(Title);
  usersService = inject(UsersService);
  toastService = inject(ToastService);
  transactionModalService = inject(TransactionModalService);
  destroy$ = new Subject();
  user = null;
  userPayments = [];
  isLoading = true;
  userNotFound = false;
  userStatus = null;
  expandedMobilePaymentCards = /* @__PURE__ */ new Set();
  ngOnInit() {
    const userId = this.route.snapshot.paramMap.get("id");
    if (userId) {
      this.pageHeaderService.setPageHeader("\u041F\u0440\u043E\u0444\u0438\u043B\u044C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F", [
        { label: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F", route: "/home" },
        { label: "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438", route: "/users" },
        { label: "\u041F\u0440\u043E\u0444\u0438\u043B\u044C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F" }
      ]);
      this.loadUser(userId);
      this.loadTransactions(userId);
      this.loadUserStatus(userId);
    } else {
      this.isLoading = false;
      this.toastService.error("ID \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u043D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D");
    }
    this.transactionModalService.transactionComplete$.pipe(takeUntil(this.destroy$)).subscribe(() => {
      const currentUrl = this.router.url;
      const userId2 = this.route.snapshot.paramMap.get("id");
      if (currentUrl.startsWith("/users/") && userId2) {
        this.loadTransactions(userId2);
      }
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  loadUser(userId) {
    this.usersService.getUserById(userId).subscribe({
      next: (apiUser) => {
        this.user = this.mapApiUserToUser(apiUser);
        const userName = `${this.user.firstName}${this.user.lastName ? " " + this.user.lastName : ""}`.trim();
        this.titleService.setTitle(`Westwood - User - ${userName}`);
        this.isLoading = false;
      },
      error: (err) => {
        if (err.status === 404) {
          this.userNotFound = true;
          this.isLoading = false;
          return;
        }
        const errorMessage = err.error?.message || "\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F";
        this.toastService.error(errorMessage);
        this.isLoading = false;
      }
    });
  }
  loadTransactions(userId) {
    this.usersService.getUserTransactions(userId).subscribe({
      next: (transactions) => {
        this.userPayments = transactions.map((tx) => this.mapTransactionToPayment(tx));
      },
      error: (err) => {
        const errorMessage = err.error?.message || "\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0442\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u0439";
        this.toastService.error(errorMessage);
      }
    });
  }
  loadUserStatus(userId) {
    this.usersService.getUserStatus(userId).subscribe({
      next: (status) => {
        this.userStatus = {
          isOnline: status.isOnline,
          lastSeenAt: status.lastSeenAt
        };
      },
      error: (err) => {
        console.error("Error loading user status:", err);
      }
    });
  }
  formatLastSeen(lastSeenAt) {
    if (!lastSeenAt) {
      return "\u041D\u0438\u043A\u043E\u0433\u0434\u0430";
    }
    const lastSeen = new Date(lastSeenAt);
    const now = /* @__PURE__ */ new Date();
    const diffMs = now.getTime() - lastSeen.getTime();
    const diffMins = Math.floor(diffMs / 6e4);
    const diffHours = Math.floor(diffMs / 36e5);
    const diffDays = Math.floor(diffMs / 864e5);
    if (diffMins < 1) {
      return "\u0422\u043E\u043B\u044C\u043A\u043E \u0447\u0442\u043E";
    }
    if (diffMins < 60) {
      return `${diffMins} \u043C\u0438\u043D \u043D\u0430\u0437\u0430\u0434`;
    }
    if (diffHours < 24) {
      return `${diffHours} \u0447 \u043D\u0430\u0437\u0430\u0434`;
    }
    if (diffDays < 7) {
      return `${diffDays} \u0434\u043D \u043D\u0430\u0437\u0430\u0434`;
    }
    return lastSeen.toLocaleDateString("ru-RU", { day: "numeric", month: "short", year: "numeric" });
  }
  mapApiUserToUser(apiUser) {
    return {
      id: apiUser.id,
      firstName: apiUser.firstName,
      lastName: apiUser.lastName,
      email: apiUser.email,
      phoneNumber: apiUser.phone || "\u2014",
      role: this.getRoleLabel(apiUser.roles),
      status: this.mapAccountStatusToStatus(apiUser.accountStatus, apiUser.active),
      createdAt: apiUser.createdAt || ""
    };
  }
  mapAccountStatusToStatus(accountStatus, active) {
    if (accountStatus === "PENDING_ACTIVATION") {
      return "invited";
    }
    if (active === false) {
      return "closed";
    }
    return "active";
  }
  getRoleLabel(roles) {
    if (roles.includes("SUDO"))
      return "\u0421\u0443\u043F\u0435\u0440 \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440";
    if (roles.includes("ADMIN"))
      return "\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440";
    if (roles.includes("MANAGER"))
      return "\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440";
    return roles.join(", ");
  }
  mapTransactionToPayment(tx) {
    const date = new Date(tx.createdAt);
    return {
      id: tx.txId,
      clientId: tx.clientId,
      clientName: tx.clientName,
      clientPhone: tx.clientPhone,
      amount: tx.amount,
      bonusEarned: tx.bonusGranted,
      bonusUsed: tx.bonusUsed,
      paymentMethod: tx.paymentMethod || "unknown",
      isRefund: tx.status === "REFUNDED",
      date: date.toLocaleDateString("ru-RU", { day: "2-digit", month: "2-digit", year: "numeric" }),
      time: date.toLocaleTimeString("ru-RU", { hour: "2-digit", minute: "2-digit" })
    };
  }
  getBonusGranted(payment) {
    return payment.bonusEarned || 0;
  }
  getBonusUsed(payment) {
    return payment.bonusUsed || 0;
  }
  getPaymentMethod(payment) {
    return payment.paymentMethod || "unknown";
  }
  isRefunded(payment) {
    return payment.isRefund || false;
  }
  getFormattedDate(payment) {
    return payment.date || "";
  }
  getFormattedTime(payment) {
    return payment.time || "";
  }
  ngAfterViewInit() {
    const sidebarContent = document.querySelector(".sidebar-content");
    if (sidebarContent) {
      sidebarContent.scrollTop = 0;
    }
    window.scrollTo(0, 0);
  }
  getFullName() {
    if (!this.user)
      return "";
    return `${this.user.firstName} ${this.user.lastName}`;
  }
  getInitials(name) {
    if (name) {
      const parts = name.split(" ");
      return parts.map((p) => p.charAt(0)).join("").toUpperCase().slice(0, 2);
    }
    if (!this.user)
      return "";
    return `${this.user.firstName.charAt(0)}${this.user.lastName.charAt(0)}`.toUpperCase();
  }
  getStatusBadgeType(status) {
    switch (status) {
      case "active":
        return "success";
      case "invited":
        return "warning";
      case "closed":
        return "danger";
      default:
        return "secondary";
    }
  }
  getStatusLabel(status) {
    switch (status) {
      case "invited":
        return "\u041F\u0440\u0438\u0433\u043B\u0430\u0448\u0435\u043D";
      case "active":
        return "\u0410\u043A\u0442\u0438\u0432\u043D\u044B\u0439";
      case "closed":
        return "\u0417\u0430\u043A\u0440\u044B\u0442\u044B\u0439";
      default:
        return status;
    }
  }
  formatDate(date) {
    const d = new Date(date);
    return d.toLocaleDateString("ru-RU", { day: "2-digit", month: "2-digit", year: "numeric" });
  }
  formatAmount(amount) {
    return amount.toLocaleString("ru-RU");
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
    switch (method) {
      case "cash":
        return "\u041D\u0430\u043B\u0438\u0447\u043D\u044B\u0435";
      case "card":
        return "\u041A\u0430\u0440\u0442\u0430";
      case "transfer":
        return "\u041F\u0435\u0440\u0435\u0432\u043E\u0434";
      default:
        return method;
    }
  }
  toggleMobilePaymentCard(paymentId) {
    if (this.expandedMobilePaymentCards.has(paymentId)) {
      this.expandedMobilePaymentCards.delete(paymentId);
    } else {
      this.expandedMobilePaymentCards.add(paymentId);
    }
  }
  isMobilePaymentExpanded(paymentId) {
    return this.expandedMobilePaymentCards.has(paymentId);
  }
  // Payment view modal
  showPaymentViewModal = false;
  selectedPaymentTxId = null;
  openPaymentView(paymentId) {
    this.selectedPaymentTxId = paymentId;
    this.showPaymentViewModal = true;
  }
  closePaymentView() {
    this.showPaymentViewModal = false;
    this.selectedPaymentTxId = null;
  }
  onPaymentUpdated() {
    const userId = this.route.snapshot.paramMap.get("id");
    if (userId) {
      this.loadTransactions(userId);
    }
  }
  static \u0275fac = function UserProfilePageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserProfilePageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserProfilePageComponent, selectors: [["app-user-profile-page"]], decls: 6, vars: 5, consts: [[1, "page-wrapper"], [1, "profile-container-wrapper"], ["class", "page-loading-container", 4, "ngIf"], ["title", "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D", "description", "\u041A \u0441\u043E\u0436\u0430\u043B\u0435\u043D\u0438\u044E, \u0437\u0430\u043F\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u043C\u044B\u0439 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u043D\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u0438\u043B\u0438 \u0431\u044B\u043B \u0443\u0434\u0430\u043B\u0435\u043D.", "backLink", "/users", "backText", "\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043A \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F\u043C", 4, "ngIf"], ["class", "profile-container", 4, "ngIf"], [3, "visibleChange", "paymentUpdated", "refundedPaymentClick", "visible", "paymentTxId"], [1, "page-loading-container"], ["type", "logo", "size", "large", 3, "visible", "overlay"], ["title", "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D", "description", "\u041A \u0441\u043E\u0436\u0430\u043B\u0435\u043D\u0438\u044E, \u0437\u0430\u043F\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u043C\u044B\u0439 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u043D\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u0438\u043B\u0438 \u0431\u044B\u043B \u0443\u0434\u0430\u043B\u0435\u043D.", "backLink", "/users", "backText", "\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043A \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F\u043C"], [1, "profile-container"], [1, "profile-header-card"], [1, "profile-header-content"], [1, "avatar-wrapper"], [1, "avatar-large"], [1, "status-indicator"], [1, "profile-main-info"], [1, "name-row"], [1, "profile-name"], ["size", "medium", 3, "badgeType"], [1, "profile-email"], ["class", "profile-phone", 4, "ngIf"], [1, "role-badge"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none"], ["d", "M12 2L2 7l10 5 10-5-10-5z", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M2 17l10 5 10-5", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M2 12l10 5 10-5", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "info-card"], [1, "card-header"], [1, "card-header-left"], [1, "card-icon"], ["d", "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2", "stroke", "currentColor", "stroke-width", "1.5"], ["cx", "12", "cy", "7", "r", "4", "stroke", "currentColor", "stroke-width", "1.5"], [1, "card-title"], [1, "info-content"], [1, "info-row"], [1, "info-label"], [1, "info-value"], ["class", "info-row", 4, "ngIf"], [1, "activity-card"], ["d", "M22 12h-4l-3 9L9 3l-3 9H2", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "payments-table-container", "desktop-view"], [1, "payments-table"], [1, "th-id"], [1, "th-client"], [1, "th-amount"], [1, "th-bonuses"], [1, "th-method"], [1, "th-status"], [1, "th-date"], ["class", "payment-row", 4, "ngFor", "ngForOf"], ["class", "empty-state", 4, "ngIf"], [1, "mobile-payments-cards", "mobile-view"], ["class", "mobile-payment-card", 4, "ngFor", "ngForOf"], ["class", "empty-state mobile-view", 4, "ngIf"], [1, "profile-phone"], [1, "status-badge"], [1, "status-dot"], [1, "payment-row"], [1, "td-id"], [1, "payment-id", "clickable", 3, "click"], [1, "td-client"], [1, "client-cell"], [1, "client-avatar"], [1, "client-info"], [1, "client-name-link", 3, "routerLink"], [1, "client-name"], [1, "client-phone"], [1, "td-amount"], [1, "amount-value"], [1, "td-bonuses"], [1, "bonus-info"], ["badgeType", "bonusGranted", "size", "medium", "icon", "star", "class", "bonus-badge", 4, "ngIf"], ["badgeType", "bonusUsed", "size", "medium", "icon", "check", "class", "bonus-badge", 4, "ngIf"], ["class", "bonus-none", 4, "ngIf"], [1, "td-method"], ["badgeType", "paymentMethod", "size", "medium", 3, "paymentMethod"], [1, "td-status"], ["size", "medium", 3, "badgeType", "icon"], [1, "td-date"], [1, "date-info"], [1, "date-text"], [1, "time-text"], ["badgeType", "bonusGranted", "size", "medium", "icon", "star", 1, "bonus-badge"], ["badgeType", "bonusUsed", "size", "medium", "icon", "check", 1, "bonus-badge"], [1, "bonus-none"], [1, "empty-state"], ["d", "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2", "stroke", "currentColor", "stroke-width", "1.5"], ["x", "9", "y", "3", "width", "6", "height", "4", "rx", "1", "stroke", "currentColor", "stroke-width", "1.5"], ["d", "M9 12h6M9 16h6", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round"], [1, "mobile-payment-card"], [1, "mobile-payment-card-header", 3, "click"], [1, "mobile-payment-card-main"], [1, "mobile-payment-id", "clickable", 3, "click"], [1, "mobile-payment-amount"], [1, "mobile-payment-expand"], ["viewBox", "0 0 24 24", "fill", "none"], ["d", "M6 9l6 6 6-6", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "mobile-payment-details"], [1, "detail-row"], [1, "detail-label"], [1, "detail-value", "link", 3, "routerLink"], [1, "detail-value"], [1, "detail-value", "bonus-info"], ["badgeType", "bonusGranted", "size", "small", 4, "ngIf"], ["badgeType", "bonusUsed", "size", "small", 4, "ngIf"], [4, "ngIf"], ["badgeType", "paymentMethod", "size", "small", 3, "paymentMethod"], ["badgeType", "bonusGranted", "size", "small"], ["badgeType", "bonusUsed", "size", "small"], [1, "empty-state", "mobile-view"]], template: function UserProfilePageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275template(2, UserProfilePageComponent_div_2_Template, 2, 2, "div", 2)(3, UserProfilePageComponent_app_not_found_state_3_Template, 1, 0, "app-not-found-state", 3)(4, UserProfilePageComponent_div_4_Template, 97, 23, "div", 4);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "app-payment-view-modal", 5);
      \u0275\u0275listener("visibleChange", function UserProfilePageComponent_Template_app_payment_view_modal_visibleChange_5_listener() {
        return ctx.closePaymentView();
      })("paymentUpdated", function UserProfilePageComponent_Template_app_payment_view_modal_paymentUpdated_5_listener() {
        return ctx.onPaymentUpdated();
      })("refundedPaymentClick", function UserProfilePageComponent_Template_app_payment_view_modal_refundedPaymentClick_5_listener($event) {
        return ctx.openPaymentView($event);
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.userNotFound);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.user && !ctx.userNotFound);
      \u0275\u0275advance();
      \u0275\u0275property("visible", ctx.showPaymentViewModal)("paymentTxId", ctx.selectedPaymentTxId);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, RouterLink, BadgeComponent, LoaderComponent, NotFoundStateComponent, PaymentViewModalComponent], styles: ["\n\n.page-wrapper[_ngcontent-%COMP%] {\n  min-height: 100%;\n  margin: -2rem;\n  padding: 2rem;\n  background:\n    linear-gradient(\n      180deg,\n      #f0fdf4 0%,\n      #f8fafc 50%,\n      #f8fafc 100%);\n}\n.profile-container-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 400px;\n}\n.page-loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 60vh;\n  width: 100%;\n}\n.profile-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.profile-header-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 20px;\n  padding: 2rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n}\n.profile-header-content[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 2rem;\n  align-items: flex-start;\n}\n.avatar-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  flex-shrink: 0;\n}\n.avatar-large[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  border-radius: 20px;\n  background:\n    linear-gradient(\n      135deg,\n      #16A34A 0%,\n      #22c55e 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 2rem;\n  font-weight: 700;\n  color: white;\n}\n.status-indicator[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  background: #94a3b8;\n  border: 3px solid white;\n}\n.status-indicator.online[_ngcontent-%COMP%] {\n  background: #22c55e;\n}\n.status-indicator.offline[_ngcontent-%COMP%] {\n  background: #94a3b8;\n}\n.status-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.375rem 0.75rem;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  font-weight: 500;\n}\n.status-badge.online[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  color: #16A34A;\n}\n.status-badge.offline[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #64748b;\n}\n.status-badge[_ngcontent-%COMP%]   .status-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.status-badge.online[_ngcontent-%COMP%]   .status-dot[_ngcontent-%COMP%] {\n  background: #16A34A;\n  box-shadow: 0 0 0 2px rgba(22, 163, 74, 0.2);\n}\n.status-badge.offline[_ngcontent-%COMP%]   .status-dot[_ngcontent-%COMP%] {\n  background: #94a3b8;\n}\n.profile-main-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.name-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-bottom: 0.75rem;\n}\n.profile-name[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #1f2937;\n  margin: 0;\n}\n.profile-email[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #64748b;\n  margin: 0.5rem 0;\n}\n.profile-phone[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #64748b;\n  margin: 0.5rem 0;\n}\n.role-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  background: #f0fdf4;\n  color: #16A34A;\n  padding: 0.5rem 1rem;\n  border-radius: 12px;\n  font-weight: 600;\n  font-size: 0.9375rem;\n  margin-top: 0.75rem;\n}\n.role-badge[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n}\n.info-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 20px;\n  padding: 2rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n}\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1.5rem;\n}\n.card-header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.card-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #f0fdf4,\n      #dcfce7);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #16A34A;\n}\n.card-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n.card-title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0;\n}\n.info-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.info-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 0.75rem 0;\n  border-bottom: 1px solid #f1f5f9;\n}\n.info-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.info-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #64748b;\n  min-width: 150px;\n  font-size: 0.9375rem;\n}\n.info-value[_ngcontent-%COMP%] {\n  color: #1f2937;\n  font-size: 0.9375rem;\n}\n.activity-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 20px;\n  padding: 2rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n}\n.payments-table-container[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.payments-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.payments-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: #f8fafc;\n}\n.payments-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 1rem;\n  text-align: left;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #64748b;\n  border-bottom: 1px solid #e2e8f0;\n}\n.payments-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border-bottom: 1px solid #f1f5f9;\n}\n.payments-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n.payment-id[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-weight: 600;\n  color: #64748b;\n  font-size: 0.875rem;\n}\n.payment-id.clickable[_ngcontent-%COMP%] {\n  color: #64748b;\n  cursor: pointer;\n  text-decoration: underline;\n  transition: color 0.2s;\n}\n.payment-id.clickable[_ngcontent-%COMP%]:hover {\n  color: #475569;\n}\n.mobile-payment-id.clickable[_ngcontent-%COMP%] {\n  color: #64748b;\n  cursor: pointer;\n  text-decoration: underline;\n}\n.client-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.client-avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  background:\n    linear-gradient(\n      135deg,\n      #f0fdf4,\n      #dcfce7);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n  color: #16A34A;\n  font-size: 0.875rem;\n  flex-shrink: 0;\n}\n.client-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.client-name-link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #1f2937;\n  font-weight: 600;\n  font-size: 0.9375rem;\n  transition: color 0.2s;\n  cursor: pointer;\n  display: inline-block;\n}\n.client-name-link[_ngcontent-%COMP%]:hover {\n  color: #16A34A;\n}\n.client-name-link[_ngcontent-%COMP%]   .client-name[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.client-phone[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: #64748b;\n}\n.amount-value[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #1f2937;\n  font-size: 0.9375rem;\n}\n.bonus-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n}\n.bonus-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.bonus-none[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  font-size: 0.875rem;\n}\n.date-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.date-text[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #1f2937;\n  font-weight: 500;\n}\n.time-text[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: #64748b;\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem 1rem;\n  color: #94a3b8;\n  gap: 1rem;\n}\n.empty-state[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n}\n.empty-state[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.9375rem;\n}\n.mobile-payments-cards[_ngcontent-%COMP%] {\n  display: none;\n  flex-direction: column;\n  gap: 1rem;\n}\n.mobile-payment-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 1rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n  border: 1px solid #e5e7eb;\n}\n.mobile-payment-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  cursor: pointer;\n}\n.mobile-payment-card-main[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  flex: 1;\n}\n.mobile-payment-id[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #64748b;\n}\n.mobile-payment-amount[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #16A34A;\n}\n.mobile-payment-expand[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #64748b;\n  transition: transform 0.2s;\n}\n.mobile-payment-expand.expanded[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.mobile-payment-details[_ngcontent-%COMP%] {\n  margin-top: 0.75rem;\n  padding-top: 0.75rem;\n  border-top: 1px solid #e5e7eb;\n  display: none;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.mobile-payment-details.expanded[_ngcontent-%COMP%] {\n  display: flex;\n}\n.detail-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 1rem;\n}\n.detail-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #64748b;\n  font-weight: 500;\n  flex-shrink: 0;\n}\n.detail-value[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #1f2937;\n  font-weight: 500;\n  text-align: right;\n  flex: 1;\n}\n.detail-value.link[_ngcontent-%COMP%] {\n  color: #16A34A;\n  text-decoration: none;\n}\n.detail-value.link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.detail-value.bonus-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  justify-content: flex-end;\n  flex-wrap: wrap;\n}\n@media (max-width: 768px) {\n  .page-wrapper[_ngcontent-%COMP%] {\n    margin: -1rem;\n    padding: 1rem;\n  }\n  .profile-header-card[_ngcontent-%COMP%] {\n    border-radius: 12px;\n    margin-bottom: 1rem;\n  }\n  .profile-header-content[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n    padding: 1.5rem 1rem;\n  }\n  .avatar-large[_ngcontent-%COMP%] {\n    width: 80px;\n    height: 80px;\n    font-size: 1.5rem;\n  }\n  .profile-main-info[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: center;\n  }\n  .name-row[_ngcontent-%COMP%] {\n    justify-content: center;\n    flex-wrap: wrap;\n  }\n  .profile-name[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n  .info-card[_ngcontent-%COMP%], \n   .activity-card[_ngcontent-%COMP%] {\n    border-radius: 12px;\n    padding: 1.25rem 1rem;\n  }\n  .card-header[_ngcontent-%COMP%] {\n    margin-bottom: 1rem;\n  }\n  .card-title[_ngcontent-%COMP%] {\n    font-size: 1.125rem;\n  }\n  .info-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 0.5rem;\n    padding: 0.75rem 0;\n  }\n  .info-label[_ngcontent-%COMP%] {\n    min-width: auto;\n    font-size: 0.875rem;\n  }\n  .info-value[_ngcontent-%COMP%] {\n    font-size: 0.875rem;\n  }\n  .desktop-view[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .mobile-view[_ngcontent-%COMP%] {\n    display: flex !important;\n  }\n  .payments-table-container[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n}\n@media (min-width: 769px) {\n  .mobile-view[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .desktop-view[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n}\n/*# sourceMappingURL=user-profile-page.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserProfilePageComponent, [{
    type: Component,
    args: [{ selector: "app-user-profile-page", standalone: true, imports: [CommonModule, RouterModule, BadgeComponent, LoaderComponent, NotFoundStateComponent, PaymentViewModalComponent], template: `
    <div class="page-wrapper">
      <div class="profile-container-wrapper">
        <!-- Loading State -->
        <div class="page-loading-container" *ngIf="isLoading">
          <app-loader [visible]="true" [overlay]="false" type="logo" size="large"></app-loader>
        </div>

      <!-- Not Found State -->
      <app-not-found-state
        *ngIf="!isLoading && userNotFound"
        title="\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D"
        description="\u041A \u0441\u043E\u0436\u0430\u043B\u0435\u043D\u0438\u044E, \u0437\u0430\u043F\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u043C\u044B\u0439 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u043D\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u0438\u043B\u0438 \u0431\u044B\u043B \u0443\u0434\u0430\u043B\u0435\u043D."
        backLink="/users"
        backText="\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043A \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F\u043C">
      </app-not-found-state>

      <div class="profile-container" *ngIf="!isLoading && user && !userNotFound">
        
        <!-- Profile Header Card -->
        <div class="profile-header-card">
          <div class="profile-header-content">
              <div class="avatar-wrapper">
              <div class="avatar-large">
                {{ getInitials() }}
              </div>
              <div class="status-indicator" [class.online]="userStatus?.isOnline" [class.offline]="!userStatus?.isOnline"></div>
            </div>
            <div class="profile-main-info">
              <div class="name-row">
                <h1 class="profile-name">{{ getFullName() }}</h1>
                <app-badge 
                  [badgeType]="getStatusBadgeType(user.status)" 
                  size="medium">
                  {{ getStatusLabel(user.status) }}
                </app-badge>
              </div>
              <p class="profile-email">{{ user.email }}</p>
              <p class="profile-phone" *ngIf="user.phoneNumber">{{ user.phoneNumber }}</p>
              <div class="role-badge">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M2 17l10 5 10-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M2 12l10 5 10-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>{{ user.role }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Personal Data Card -->
        <div class="info-card">
          <div class="card-header">
            <div class="card-header-left">
              <div class="card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" stroke="currentColor" stroke-width="1.5"/>
                  <circle cx="12" cy="7" r="4" stroke="currentColor" stroke-width="1.5"/>
                </svg>
              </div>
              <h3 class="card-title">\u041B\u0438\u0447\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435</h3>
            </div>
          </div>
          <div class="info-content">
            <div class="info-row">
              <span class="info-label">\u0418\u043C\u044F:</span>
              <span class="info-value">{{ user.firstName }}</span>
            </div>
            <div class="info-row">
              <span class="info-label">\u0424\u0430\u043C\u0438\u043B\u0438\u044F:</span>
              <span class="info-value">{{ user.lastName }}</span>
            </div>
            <div class="info-row">
              <span class="info-label">Email:</span>
              <span class="info-value">{{ user.email }}</span>
            </div>
            <div class="info-row">
              <span class="info-label">\u0422\u0435\u043B\u0435\u0444\u043E\u043D:</span>
              <span class="info-value">{{ user.phoneNumber || '\u2014' }}</span>
            </div>
            <div class="info-row">
              <span class="info-label">\u0420\u043E\u043B\u044C:</span>
              <span class="info-value">{{ user.role }}</span>
            </div>
            <div class="info-row">
              <span class="info-label">\u0414\u0430\u0442\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438:</span>
              <span class="info-value">{{ formatDate(user.createdAt) }}</span>
            </div>
            <div class="info-row" *ngIf="userStatus">
              <span class="info-label">\u0421\u0442\u0430\u0442\u0443\u0441:</span>
              <span class="info-value">
                <span class="status-badge" [class.online]="userStatus.isOnline" [class.offline]="!userStatus.isOnline">
                  <span class="status-dot"></span>
                  {{ userStatus.isOnline ? '\u041E\u043D\u043B\u0430\u0439\u043D' : '\u041E\u0444\u043B\u0430\u0439\u043D' }}
                </span>
              </span>
            </div>
            <div class="info-row" *ngIf="userStatus?.lastSeenAt">
              <span class="info-label">\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439 \u0440\u0430\u0437 \u043E\u043D\u043B\u0430\u0439\u043D:</span>
              <span class="info-value">{{ formatLastSeen(userStatus?.lastSeenAt || null) }}</span>
            </div>
          </div>
        </div>

        <!-- Payments History Card -->
        <div class="activity-card">
          <div class="card-header">
            <div class="card-header-left">
              <div class="card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <h3 class="card-title">\u0418\u0441\u0442\u043E\u0440\u0438\u044F \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0439</h3>
            </div>
          </div>
          <!-- Desktop Table View -->
          <div class="payments-table-container desktop-view">
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
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let payment of userPayments" class="payment-row">
                  <td class="td-id">
                    <span class="payment-id clickable" (click)="openPaymentView(payment.txId || payment.id)">#{{ payment.txId || payment.id }}</span>
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
                        *ngIf="getBonusGranted(payment) > 0"
                        badgeType="bonusGranted" 
                        size="medium"
                        icon="star"
                        class="bonus-badge">
                        +{{ formatAmount(getBonusGranted(payment)) }}
                      </app-badge>
                      <app-badge 
                        *ngIf="getBonusUsed(payment) > 0"
                        badgeType="bonusUsed" 
                        size="medium"
                        icon="check"
                        class="bonus-badge">
                        -{{ formatAmount(getBonusUsed(payment)) }}
                      </app-badge>
                      <span class="bonus-none" *ngIf="getBonusGranted(payment) === 0 && getBonusUsed(payment) === 0">\u2014</span>
                    </div>
                  </td>
                  <td class="td-method">
                    <app-badge 
                      badgeType="paymentMethod" 
                      size="medium"
                      [paymentMethod]="getPaymentMethodForBadge(getPaymentMethod(payment))">
                    </app-badge>
                  </td>
                  <td class="td-status">
                    <app-badge 
                      [badgeType]="isRefunded(payment) ? 'refund' : 'payment'" 
                      size="medium"
                      [icon]="isRefunded(payment) ? 'refund' : 'payment'">
                      {{ isRefunded(payment) ? '\u0412\u043E\u0437\u0432\u0440\u0430\u0442' : '\u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E' }}
                    </app-badge>
                  </td>
                  <td class="td-date">
                    <div class="date-info">
                      <span class="date-text">{{ getFormattedDate(payment) }}</span>
                      <span class="time-text">{{ getFormattedTime(payment) }}</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="empty-state" *ngIf="userPayments.length === 0">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" stroke="currentColor" stroke-width="1.5"/>
                <rect x="9" y="3" width="6" height="4" rx="1" stroke="currentColor" stroke-width="1.5"/>
                <path d="M9 12h6M9 16h6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
              <span>\u041D\u0435\u0442 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0439</span>
            </div>
          </div>

          <!-- Mobile Card View -->
          <div class="mobile-payments-cards mobile-view">
            <div class="mobile-payment-card" *ngFor="let payment of userPayments">
              <div class="mobile-payment-card-header" (click)="toggleMobilePaymentCard(payment.txId || payment.id)">
                <div class="mobile-payment-card-main">
                  <div>
                    <div class="mobile-payment-id clickable" (click)="openPaymentView(payment.txId || payment.id); $event.stopPropagation()">#{{ payment.txId || payment.id }}</div>
                    <div class="mobile-payment-amount">{{ formatAmount(payment.amount) }} \u20B8</div>
                  </div>
                </div>
                <div class="mobile-payment-expand" [class.expanded]="isMobilePaymentExpanded(payment.txId || payment.id)">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
              </div>
              <div class="mobile-payment-details" [class.expanded]="isMobilePaymentExpanded(payment.txId || payment.id)">
                <div class="detail-row">
                  <span class="detail-label">\u041A\u043B\u0438\u0435\u043D\u0442:</span>
                  <a [routerLink]="['/clients', payment.clientId]" class="detail-value link">
                    {{ payment.clientName }}
                  </a>
                </div>
                <div class="detail-row">
                  <span class="detail-label">\u0422\u0435\u043B\u0435\u0444\u043E\u043D:</span>
                  <span class="detail-value">{{ payment.clientPhone }}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">\u0411\u043E\u043D\u0443\u0441\u044B:</span>
                  <div class="detail-value bonus-info">
                    <app-badge *ngIf="getBonusGranted(payment) > 0" badgeType="bonusGranted" size="small">+{{ formatAmount(getBonusGranted(payment)) }}</app-badge>
                    <app-badge *ngIf="getBonusUsed(payment) > 0" badgeType="bonusUsed" size="small">-{{ formatAmount(getBonusUsed(payment)) }}</app-badge>
                    <span *ngIf="getBonusGranted(payment) === 0 && getBonusUsed(payment) === 0">\u2014</span>
                  </div>
                </div>
                <div class="detail-row">
                  <span class="detail-label">\u0421\u043F\u043E\u0441\u043E\u0431 \u043E\u043F\u043B\u0430\u0442\u044B:</span>
                  <span class="detail-value">
                    <app-badge 
                      badgeType="paymentMethod" 
                      size="small"
                      [paymentMethod]="getPaymentMethodForBadge(getPaymentMethod(payment))">
                    </app-badge>
                  </span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">\u0414\u0430\u0442\u0430:</span>
                  <span class="detail-value">{{ getFormattedDate(payment) }} {{ getFormattedTime(payment) }}</span>
                </div>
              </div>
            </div>
            <div class="empty-state mobile-view" *ngIf="userPayments.length === 0">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" stroke="currentColor" stroke-width="1.5"/>
                <rect x="9" y="3" width="6" height="4" rx="1" stroke="currentColor" stroke-width="1.5"/>
                <path d="M9 12h6M9 16h6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
              <span>\u041D\u0435\u0442 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0439</span>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>

    <!-- Payment View Modal -->
    <app-payment-view-modal
      [visible]="showPaymentViewModal"
      [paymentTxId]="selectedPaymentTxId"
      (visibleChange)="closePaymentView()"
      (paymentUpdated)="onPaymentUpdated()"
      (refundedPaymentClick)="openPaymentView($event)">
    </app-payment-view-modal>
  `, styles: ["/* angular:styles/component:css;d7d3132169d0846e0083e21a0ac5f448a840998bdc23da52a0eb9b7c1a8c03ef;/Users/baglan/repo/westwood/westwood-frontend/src/app/features/users/pages/user-profile-page/user-profile-page.component.ts */\n.page-wrapper {\n  min-height: 100%;\n  margin: -2rem;\n  padding: 2rem;\n  background:\n    linear-gradient(\n      180deg,\n      #f0fdf4 0%,\n      #f8fafc 50%,\n      #f8fafc 100%);\n}\n.profile-container-wrapper {\n  position: relative;\n  min-height: 400px;\n}\n.page-loading-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 60vh;\n  width: 100%;\n}\n.profile-container {\n  max-width: 1200px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.profile-header-card {\n  background: white;\n  border-radius: 20px;\n  padding: 2rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n}\n.profile-header-content {\n  display: flex;\n  gap: 2rem;\n  align-items: flex-start;\n}\n.avatar-wrapper {\n  position: relative;\n  flex-shrink: 0;\n}\n.avatar-large {\n  width: 100px;\n  height: 100px;\n  border-radius: 20px;\n  background:\n    linear-gradient(\n      135deg,\n      #16A34A 0%,\n      #22c55e 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 2rem;\n  font-weight: 700;\n  color: white;\n}\n.status-indicator {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  background: #94a3b8;\n  border: 3px solid white;\n}\n.status-indicator.online {\n  background: #22c55e;\n}\n.status-indicator.offline {\n  background: #94a3b8;\n}\n.status-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.375rem 0.75rem;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  font-weight: 500;\n}\n.status-badge.online {\n  background: #f0fdf4;\n  color: #16A34A;\n}\n.status-badge.offline {\n  background: #f1f5f9;\n  color: #64748b;\n}\n.status-badge .status-dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.status-badge.online .status-dot {\n  background: #16A34A;\n  box-shadow: 0 0 0 2px rgba(22, 163, 74, 0.2);\n}\n.status-badge.offline .status-dot {\n  background: #94a3b8;\n}\n.profile-main-info {\n  flex: 1;\n}\n.name-row {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-bottom: 0.75rem;\n}\n.profile-name {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #1f2937;\n  margin: 0;\n}\n.profile-email {\n  font-size: 1rem;\n  color: #64748b;\n  margin: 0.5rem 0;\n}\n.profile-phone {\n  font-size: 1rem;\n  color: #64748b;\n  margin: 0.5rem 0;\n}\n.role-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  background: #f0fdf4;\n  color: #16A34A;\n  padding: 0.5rem 1rem;\n  border-radius: 12px;\n  font-weight: 600;\n  font-size: 0.9375rem;\n  margin-top: 0.75rem;\n}\n.role-badge svg {\n  width: 18px;\n  height: 18px;\n}\n.info-card {\n  background: white;\n  border-radius: 20px;\n  padding: 2rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n}\n.card-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1.5rem;\n}\n.card-header-left {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.card-icon {\n  width: 40px;\n  height: 40px;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #f0fdf4,\n      #dcfce7);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #16A34A;\n}\n.card-icon svg {\n  width: 20px;\n  height: 20px;\n}\n.card-title {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0;\n}\n.info-content {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.info-row {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 0.75rem 0;\n  border-bottom: 1px solid #f1f5f9;\n}\n.info-row:last-child {\n  border-bottom: none;\n}\n.info-label {\n  font-weight: 600;\n  color: #64748b;\n  min-width: 150px;\n  font-size: 0.9375rem;\n}\n.info-value {\n  color: #1f2937;\n  font-size: 0.9375rem;\n}\n.activity-card {\n  background: white;\n  border-radius: 20px;\n  padding: 2rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n}\n.payments-table-container {\n  overflow-x: auto;\n}\n.payments-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.payments-table thead {\n  background: #f8fafc;\n}\n.payments-table th {\n  padding: 1rem;\n  text-align: left;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #64748b;\n  border-bottom: 1px solid #e2e8f0;\n}\n.payments-table td {\n  padding: 1rem;\n  border-bottom: 1px solid #f1f5f9;\n}\n.payments-table tbody tr:hover {\n  background: #f8fafc;\n}\n.payment-id {\n  font-family: monospace;\n  font-weight: 600;\n  color: #64748b;\n  font-size: 0.875rem;\n}\n.payment-id.clickable {\n  color: #64748b;\n  cursor: pointer;\n  text-decoration: underline;\n  transition: color 0.2s;\n}\n.payment-id.clickable:hover {\n  color: #475569;\n}\n.mobile-payment-id.clickable {\n  color: #64748b;\n  cursor: pointer;\n  text-decoration: underline;\n}\n.client-cell {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.client-avatar {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  background:\n    linear-gradient(\n      135deg,\n      #f0fdf4,\n      #dcfce7);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n  color: #16A34A;\n  font-size: 0.875rem;\n  flex-shrink: 0;\n}\n.client-info {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.client-name-link {\n  text-decoration: none;\n  color: #1f2937;\n  font-weight: 600;\n  font-size: 0.9375rem;\n  transition: color 0.2s;\n  cursor: pointer;\n  display: inline-block;\n}\n.client-name-link:hover {\n  color: #16A34A;\n}\n.client-name-link .client-name {\n  cursor: pointer;\n}\n.client-phone {\n  font-size: 0.8125rem;\n  color: #64748b;\n}\n.amount-value {\n  font-weight: 600;\n  color: #1f2937;\n  font-size: 0.9375rem;\n}\n.bonus-info {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n}\n.bonus-badge {\n  display: inline-block;\n}\n.bonus-none {\n  color: #94a3b8;\n  font-size: 0.875rem;\n}\n.date-info {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.date-text {\n  font-size: 0.875rem;\n  color: #1f2937;\n  font-weight: 500;\n}\n.time-text {\n  font-size: 0.8125rem;\n  color: #64748b;\n}\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem 1rem;\n  color: #94a3b8;\n  gap: 1rem;\n}\n.empty-state svg {\n  width: 48px;\n  height: 48px;\n}\n.empty-state span {\n  font-size: 0.9375rem;\n}\n.mobile-payments-cards {\n  display: none;\n  flex-direction: column;\n  gap: 1rem;\n}\n.mobile-payment-card {\n  background: white;\n  border-radius: 12px;\n  padding: 1rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n  border: 1px solid #e5e7eb;\n}\n.mobile-payment-card-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  cursor: pointer;\n}\n.mobile-payment-card-main {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  flex: 1;\n}\n.mobile-payment-id {\n  font-family: monospace;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #64748b;\n}\n.mobile-payment-amount {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #16A34A;\n}\n.mobile-payment-expand {\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #64748b;\n  transition: transform 0.2s;\n}\n.mobile-payment-expand.expanded {\n  transform: rotate(180deg);\n}\n.mobile-payment-details {\n  margin-top: 0.75rem;\n  padding-top: 0.75rem;\n  border-top: 1px solid #e5e7eb;\n  display: none;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.mobile-payment-details.expanded {\n  display: flex;\n}\n.detail-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 1rem;\n}\n.detail-label {\n  font-size: 0.875rem;\n  color: #64748b;\n  font-weight: 500;\n  flex-shrink: 0;\n}\n.detail-value {\n  font-size: 0.875rem;\n  color: #1f2937;\n  font-weight: 500;\n  text-align: right;\n  flex: 1;\n}\n.detail-value.link {\n  color: #16A34A;\n  text-decoration: none;\n}\n.detail-value.link:hover {\n  text-decoration: underline;\n}\n.detail-value.bonus-info {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  justify-content: flex-end;\n  flex-wrap: wrap;\n}\n@media (max-width: 768px) {\n  .page-wrapper {\n    margin: -1rem;\n    padding: 1rem;\n  }\n  .profile-header-card {\n    border-radius: 12px;\n    margin-bottom: 1rem;\n  }\n  .profile-header-content {\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n    padding: 1.5rem 1rem;\n  }\n  .avatar-large {\n    width: 80px;\n    height: 80px;\n    font-size: 1.5rem;\n  }\n  .profile-main-info {\n    width: 100%;\n    text-align: center;\n  }\n  .name-row {\n    justify-content: center;\n    flex-wrap: wrap;\n  }\n  .profile-name {\n    font-size: 1.25rem;\n  }\n  .info-card,\n  .activity-card {\n    border-radius: 12px;\n    padding: 1.25rem 1rem;\n  }\n  .card-header {\n    margin-bottom: 1rem;\n  }\n  .card-title {\n    font-size: 1.125rem;\n  }\n  .info-row {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 0.5rem;\n    padding: 0.75rem 0;\n  }\n  .info-label {\n    min-width: auto;\n    font-size: 0.875rem;\n  }\n  .info-value {\n    font-size: 0.875rem;\n  }\n  .desktop-view {\n    display: none !important;\n  }\n  .mobile-view {\n    display: flex !important;\n  }\n  .payments-table-container {\n    padding: 0;\n  }\n}\n@media (min-width: 769px) {\n  .mobile-view {\n    display: none !important;\n  }\n  .desktop-view {\n    display: block !important;\n  }\n}\n/*# sourceMappingURL=user-profile-page.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserProfilePageComponent, { className: "UserProfilePageComponent", filePath: "src/app/features/users/pages/user-profile-page/user-profile-page.component.ts", lineNumber: 940 });
})();
export {
  UserProfilePageComponent
};
//# sourceMappingURL=chunk-AVFLAUEL.js.map
