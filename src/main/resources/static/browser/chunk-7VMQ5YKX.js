import {
  BadgeComponent
} from "./chunk-F7XK3MPR.js";
import {
  PaymentsService
} from "./chunk-YFUSX3TX.js";
import {
  ModalComponent
} from "./chunk-PGQMZGPZ.js";
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
  CommonModule,
  Component,
  EventEmitter,
  Input,
  NgForOf,
  NgIf,
  Output,
  RouterLink,
  RouterModule,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
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
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-LQF2QQXA.js";

// src/app/shared/components/payment-view-modal/payment-view-modal.component.ts
var _c0 = (a0) => ["/clients", a0];
var _c1 = (a0) => ["/users", a0];
function PaymentViewModalComponent_div_1_app_badge_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-badge", 31);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("paymentMethod", ctx_r0.getPaymentMethodForBadge());
  }
}
function PaymentViewModalComponent_div_1_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "select", 33);
    \u0275\u0275twoWayListener("ngModelChange", function PaymentViewModalComponent_div_1_div_25_Template_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.selectedPaymentMethod, $event) || (ctx_r0.selectedPaymentMethod = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(2, "option", 34);
    \u0275\u0275text(3, "\u041D\u0430\u043B\u0438\u0447\u043D\u044B\u0435");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "option", 35);
    \u0275\u0275text(5, "\u041A\u0430\u0440\u0442\u0430");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "option", 36);
    \u0275\u0275text(7, "\u041F\u0435\u0440\u0435\u0432\u043E\u0434");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 37)(9, "button", 38);
    \u0275\u0275listener("click", function PaymentViewModalComponent_div_1_div_25_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.savePaymentMethod());
    });
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 39);
    \u0275\u0275listener("click", function PaymentViewModalComponent_div_1_div_25_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.cancelEditPaymentMethod());
    });
    \u0275\u0275text(12, "\u041E\u0442\u043C\u0435\u043D\u0430");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.selectedPaymentMethod);
    \u0275\u0275advance(8);
    \u0275\u0275property("disabled", ctx_r0.isSaving);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.isSaving ? "\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435..." : "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C", " ");
  }
}
function PaymentViewModalComponent_div_1_button_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 40);
    \u0275\u0275listener("click", function PaymentViewModalComponent_div_1_button_26_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.startEditPaymentMethod());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 41);
    \u0275\u0275element(2, "path", 42)(3, "path", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " \u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C ");
    \u0275\u0275elementEnd();
  }
}
function PaymentViewModalComponent_div_1_ng_container_31_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45)(1, "app-badge", 46);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 47);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const revocation_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" \u041E\u0442\u043E\u0437\u0432\u0430\u043D\u043E: -", ctx_r0.formatAmount(revocation_r4.bonusAmount), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("(", ctx_r0.getRevokeReasonLabel(revocation_r4.revokeReason), ")");
  }
}
function PaymentViewModalComponent_div_1_ng_container_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, PaymentViewModalComponent_div_1_ng_container_31_div_1_Template, 5, 2, "div", 44);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.paymentData.bonusRevocations);
  }
}
function PaymentViewModalComponent_div_1_ng_container_32_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48)(1, "app-badge", 49);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" \u041D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u043E: +", ctx_r0.formatAmount(ctx_r0.bonusInfo.bonusGranted), " ");
  }
}
function PaymentViewModalComponent_div_1_ng_container_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, PaymentViewModalComponent_div_1_ng_container_32_div_1_Template, 3, 1, "div", 23);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.bonusInfo && ctx_r0.bonusInfo.bonusGranted > 0);
  }
}
function PaymentViewModalComponent_div_1_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48)(1, "app-badge", 50);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u043E: -", ctx_r0.formatAmount(ctx_r0.bonusInfo.bonusUsed), " ");
  }
}
function PaymentViewModalComponent_div_1_span_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 51);
    \u0275\u0275text(1, "\u041D\u0435\u0442 \u0431\u043E\u043D\u0443\u0441\u043E\u0432");
    \u0275\u0275elementEnd();
  }
}
function PaymentViewModalComponent_div_1_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "span", 15);
    \u0275\u0275text(2, "\u0417\u0430\u043C\u0435\u0442\u043A\u0438");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 52);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.paymentData.notes);
  }
}
function PaymentViewModalComponent_div_1_div_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "span", 15);
    \u0275\u0275text(2, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 29);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.bonusInfo == null ? null : ctx_r0.bonusInfo.clientPhone);
  }
}
function PaymentViewModalComponent_div_1_div_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "span", 15);
    \u0275\u0275text(2, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 29);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.bonusInfo == null ? null : ctx_r0.bonusInfo.clientEmail);
  }
}
function PaymentViewModalComponent_div_1_a_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c1, ctx_r0.paymentData.enteredByUserId));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.paymentData.enteredByUsername, " ");
  }
}
function PaymentViewModalComponent_div_1_span_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.paymentData.enteredByUsername || "\u041D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D");
  }
}
function PaymentViewModalComponent_div_1_div_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "span", 15);
    \u0275\u0275text(2, "\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0435 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 29);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.formatDate(ctx_r0.paymentData.updatedAt));
  }
}
function PaymentViewModalComponent_div_1_div_61_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "span", 15);
    \u0275\u0275text(2, "\u0412\u043E\u0437\u0432\u0440\u0430\u0442 \u043F\u043B\u0430\u0442\u0435\u0436\u0430");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 53);
    \u0275\u0275listener("click", function PaymentViewModalComponent_div_1_div_61_Template_span_click_3_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openRefundedPayment(ctx_r0.paymentData.refundedPaymentTxId));
    });
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.paymentData.refundedPaymentTxId, " ");
  }
}
function PaymentViewModalComponent_div_1_div_62_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 62);
    \u0275\u0275listener("click", function PaymentViewModalComponent_div_1_div_62_button_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.toggleRefundConfirmation());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 41);
    \u0275\u0275element(2, "path", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "\u0412\u043E\u0437\u0432\u0440\u0430\u0442 \u043F\u043B\u0430\u0442\u0435\u0436\u0430");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", ctx_r0.isDeleting || ctx_r0.isRefunding);
  }
}
function PaymentViewModalComponent_div_1_div_62_div_9_p_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, " \u0411\u043E\u043D\u0443\u0441\u043D\u044B\u0435 \u0442\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u0438, \u043D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u043D\u044B\u0435 \u0437\u0430 \u044D\u0442\u043E\u0442 \u043F\u043B\u0430\u0442\u0435\u0436, \u0442\u0430\u043A\u0436\u0435 \u0431\u0443\u0434\u0443\u0442 \u0443\u0434\u0430\u043B\u0435\u043D\u044B. ");
    \u0275\u0275elementEnd();
  }
}
function PaymentViewModalComponent_div_1_div_62_div_9_p_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, " \u041E\u0440\u0438\u0433\u0438\u043D\u0430\u043B\u044C\u043D\u044B\u0439 \u043F\u043B\u0430\u0442\u0435\u0436 \u0438 \u0432\u0441\u0435 \u0441\u0432\u044F\u0437\u0430\u043D\u043D\u044B\u0435 \u0431\u043E\u043D\u0443\u0441\u043D\u044B\u0435 \u0442\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u0438 \u0442\u0430\u043A\u0436\u0435 \u0431\u0443\u0434\u0443\u0442 \u0443\u0434\u0430\u043B\u0435\u043D\u044B. ");
    \u0275\u0275elementEnd();
  }
}
function PaymentViewModalComponent_div_1_div_62_div_9_p_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, " \u0422\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u044F \u0432\u043E\u0437\u0432\u0440\u0430\u0442\u0430 \u0438 \u0432\u0441\u0435 \u0441\u0432\u044F\u0437\u0430\u043D\u043D\u044B\u0435 \u0431\u043E\u043D\u0443\u0441\u043D\u044B\u0435 \u0442\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u0438 \u0442\u0430\u043A\u0436\u0435 \u0431\u0443\u0434\u0443\u0442 \u0443\u0434\u0430\u043B\u0435\u043D\u044B. ");
    \u0275\u0275elementEnd();
  }
}
function PaymentViewModalComponent_div_1_div_62_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 64)(1, "div", 65);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 66);
    \u0275\u0275element(3, "path", 67)(4, "path", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "div", 69)(6, "strong");
    \u0275\u0275text(7, "\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B, \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u044D\u0442\u043E\u0442 \u043F\u043B\u0430\u0442\u0435\u0436?");
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, PaymentViewModalComponent_div_1_div_62_div_9_p_8_Template, 2, 0, "p", 22)(9, PaymentViewModalComponent_div_1_div_62_div_9_p_9_Template, 2, 0, "p", 22)(10, PaymentViewModalComponent_div_1_div_62_div_9_p_10_Template, 2, 0, "p", 22);
    \u0275\u0275elementStart(11, "p");
    \u0275\u0275text(12, "\u042D\u0442\u043E \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u043D\u0435\u043B\u044C\u0437\u044F \u043E\u0442\u043C\u0435\u043D\u0438\u0442\u044C.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 70)(14, "label");
    \u0275\u0275text(15, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 ");
    \u0275\u0275elementStart(16, "strong");
    \u0275\u0275text(17, "\u0443\u0434\u0430\u043B\u0438\u0442\u044C");
    \u0275\u0275elementEnd();
    \u0275\u0275text(18, " \u0434\u043B\u044F \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u044F:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "input", 71);
    \u0275\u0275twoWayListener("ngModelChange", function PaymentViewModalComponent_div_1_div_62_div_9_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.deleteConfirmText, $event) || (ctx_r0.deleteConfirmText = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup.enter", function PaymentViewModalComponent_div_1_div_62_div_9_Template_input_keyup_enter_19_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.confirmDelete());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 72)(21, "button", 73);
    \u0275\u0275listener("click", function PaymentViewModalComponent_div_1_div_62_div_9_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.confirmDelete());
    });
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 74);
    \u0275\u0275listener("click", function PaymentViewModalComponent_div_1_div_62_div_9_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.cancelDeleteConfirmation());
    });
    \u0275\u0275text(24, " \u041E\u0442\u043C\u0435\u043D\u0430 ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r0.isCompletedPayment() && ctx_r0.hasGrantedBonuses());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isRefundPayment());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isRefundedPayment());
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.deleteConfirmText);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.isDeleting || !ctx_r0.isDeleteConfirmValid());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.isDeleting ? "\u0423\u0434\u0430\u043B\u0435\u043D\u0438\u0435..." : "\u0423\u0434\u0430\u043B\u0438\u0442\u044C", " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.isDeleting);
  }
}
function PaymentViewModalComponent_div_1_div_62_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 75)(1, "div", 76)(2, "label", 77);
    \u0275\u0275text(3, "\u041F\u0440\u0438\u0447\u0438\u043D\u0430 \u0432\u043E\u0437\u0432\u0440\u0430\u0442\u0430 (\u043D\u0435\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "textarea", 78);
    \u0275\u0275twoWayListener("ngModelChange", function PaymentViewModalComponent_div_1_div_62_div_10_Template_textarea_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.refundNotes, $event) || (ctx_r0.refundNotes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 72)(6, "button", 79);
    \u0275\u0275listener("click", function PaymentViewModalComponent_div_1_div_62_div_10_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.confirmRefund());
    });
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 74);
    \u0275\u0275listener("click", function PaymentViewModalComponent_div_1_div_62_div_10_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.showRefundConfirmation = false);
    });
    \u0275\u0275text(9, " \u041E\u0442\u043C\u0435\u043D\u0430 ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.refundNotes);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.isRefunding);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.isRefunding ? "\u0412\u043E\u0437\u0432\u0440\u0430\u0442..." : "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C \u0432\u043E\u0437\u0432\u0440\u0430\u0442", " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.isRefunding);
  }
}
function PaymentViewModalComponent_div_1_div_62_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275element(1, "div", 55);
    \u0275\u0275elementStart(2, "div", 56)(3, "button", 57);
    \u0275\u0275listener("click", function PaymentViewModalComponent_div_1_div_62_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleDeleteConfirmation());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 41);
    \u0275\u0275element(5, "path", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043F\u043B\u0430\u0442\u0435\u0436");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, PaymentViewModalComponent_div_1_div_62_button_8_Template, 5, 1, "button", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, PaymentViewModalComponent_div_1_div_62_div_9_Template, 25, 7, "div", 60)(10, PaymentViewModalComponent_div_1_div_62_div_10_Template, 10, 4, "div", 61);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r0.isDeleting || ctx_r0.isRefunding);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r0.canRefund());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.showDeleteConfirmation);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.showRefundConfirmation);
  }
}
function PaymentViewModalComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "div", 5)(3, "span", 6);
    \u0275\u0275text(4, "ID \u043F\u043B\u0430\u0442\u0435\u0436\u0430");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 7);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 8)(8, "app-badge", 9);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 10)(11, "div", 11)(12, "div", 12)(13, "h3", 13);
    \u0275\u0275text(14, "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043E \u043F\u043B\u0430\u0442\u0435\u0436\u0435");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 14)(16, "span", 15);
    \u0275\u0275text(17, "\u0421\u0443\u043C\u043C\u0430");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 16);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 14)(21, "span", 15);
    \u0275\u0275text(22, "\u0421\u043F\u043E\u0441\u043E\u0431 \u043E\u043F\u043B\u0430\u0442\u044B");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 17);
    \u0275\u0275template(24, PaymentViewModalComponent_div_1_app_badge_24_Template, 1, 1, "app-badge", 18)(25, PaymentViewModalComponent_div_1_div_25_Template, 13, 3, "div", 19)(26, PaymentViewModalComponent_div_1_button_26_Template, 5, 0, "button", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 14)(28, "span", 15);
    \u0275\u0275text(29, "\u0411\u043E\u043D\u0443\u0441\u044B");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 21);
    \u0275\u0275template(31, PaymentViewModalComponent_div_1_ng_container_31_Template, 2, 1, "ng-container", 22)(32, PaymentViewModalComponent_div_1_ng_container_32_Template, 2, 1, "ng-container", 22)(33, PaymentViewModalComponent_div_1_div_33_Template, 3, 1, "div", 23)(34, PaymentViewModalComponent_div_1_span_34_Template, 2, 0, "span", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(35, PaymentViewModalComponent_div_1_div_35_Template, 5, 1, "div", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 11)(37, "div", 12)(38, "h3", 13);
    \u0275\u0275text(39, "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043E \u043A\u043B\u0438\u0435\u043D\u0442\u0435");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 14)(41, "span", 15);
    \u0275\u0275text(42, "\u041A\u043B\u0438\u0435\u043D\u0442");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "a", 26);
    \u0275\u0275text(44);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(45, PaymentViewModalComponent_div_1_div_45_Template, 5, 1, "div", 25)(46, PaymentViewModalComponent_div_1_div_46_Template, 5, 1, "div", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "div", 12)(48, "h3", 13);
    \u0275\u0275text(49, "\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "div", 14)(51, "span", 15);
    \u0275\u0275text(52, "\u0418\u043D\u0438\u0446\u0438\u0430\u0442\u043E\u0440");
    \u0275\u0275elementEnd();
    \u0275\u0275template(53, PaymentViewModalComponent_div_1_a_53_Template, 2, 4, "a", 27)(54, PaymentViewModalComponent_div_1_span_54_Template, 2, 1, "span", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "div", 14)(56, "span", 15);
    \u0275\u0275text(57, "\u0414\u0430\u0442\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "span", 29);
    \u0275\u0275text(59);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(60, PaymentViewModalComponent_div_1_div_60_Template, 5, 1, "div", 25)(61, PaymentViewModalComponent_div_1_div_61_Template, 5, 1, "div", 25);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(62, PaymentViewModalComponent_div_1_div_62_Template, 11, 4, "div", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.paymentData.txId);
    \u0275\u0275advance(2);
    \u0275\u0275property("badgeType", ctx_r0.getStatusBadgeType())("icon", ctx_r0.getStatusIcon());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getStatusLabel(), " ");
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1("", ctx_r0.formatAmount(ctx_r0.paymentData.amount), " \u20B8");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", !ctx_r0.isEditingPaymentMethod);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isEditingPaymentMethod);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isEditingPaymentMethod && !ctx_r0.isSaving);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r0.paymentData.bonusRevocations && ctx_r0.paymentData.bonusRevocations.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.paymentData.bonusRevocations || ctx_r0.paymentData.bonusRevocations.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.bonusInfo && ctx_r0.bonusInfo.bonusUsed > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (!ctx_r0.bonusInfo || ctx_r0.bonusInfo.bonusGranted === 0 && ctx_r0.bonusInfo.bonusUsed === 0) && (!ctx_r0.paymentData.bonusRevocations || ctx_r0.paymentData.bonusRevocations.length === 0));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.paymentData.notes);
    \u0275\u0275advance(8);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(23, _c0, ctx_r0.paymentData.clientId));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.paymentData.clientName, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.bonusInfo == null ? null : ctx_r0.bonusInfo.clientPhone);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.bonusInfo == null ? null : ctx_r0.bonusInfo.clientEmail);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r0.paymentData.enteredByUserId);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.paymentData.enteredByUserId);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.formatDate(ctx_r0.paymentData.createdAt));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.paymentData.updatedAt && ctx_r0.paymentData.updatedAt !== ctx_r0.paymentData.createdAt);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.paymentData.refundedPaymentTxId);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.canShowActions());
  }
}
function PaymentViewModalComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 80);
    \u0275\u0275element(1, "div", 81);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0434\u0430\u043D\u043D\u044B\u0445...");
    \u0275\u0275elementEnd()();
  }
}
var PaymentViewModalComponent = class _PaymentViewModalComponent {
  paymentsService = inject(PaymentsService);
  toastService = inject(ToastService);
  visible = false;
  paymentTxId = null;
  paymentSearchResult = null;
  // Optional: if we already have search result data
  visibleChange = new EventEmitter();
  paymentUpdated = new EventEmitter();
  paymentDeleted = new EventEmitter();
  refundedPaymentClick = new EventEmitter();
  paymentData = null;
  bonusInfo = null;
  isLoading = false;
  isEditingPaymentMethod = false;
  selectedPaymentMethod = "CASH";
  isSaving = false;
  // Delete/Refund actions
  showDeleteConfirmation = false;
  showRefundConfirmation = false;
  isDeleting = false;
  isRefunding = false;
  refundNotes = "";
  deleteConfirmText = "";
  ngOnInit() {
    if (this.paymentSearchResult) {
      this.loadPaymentFromSearchResult();
    }
  }
  ngOnChanges(changes) {
    if (changes["visible"] && changes["visible"].currentValue && this.paymentTxId) {
      this.loadPayment();
    }
    if (changes["paymentSearchResult"] && changes["paymentSearchResult"].currentValue) {
      this.loadPaymentFromSearchResult();
    }
  }
  loadPayment() {
    if (!this.paymentTxId)
      return;
    this.isLoading = true;
    this.paymentsService.getPaymentByTxId(this.paymentTxId).subscribe({
      next: (payment) => {
        this.paymentData = payment;
        this.selectedPaymentMethod = payment.paymentMethod || "CASH";
        this.isLoading = false;
        if (this.paymentSearchResult && this.paymentSearchResult.txId === payment.txId) {
          this.bonusInfo = this.paymentSearchResult;
        }
      },
      error: (err) => {
        this.toastService.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0435 \u043F\u043B\u0430\u0442\u0435\u0436\u0430");
        console.error("Error loading payment:", err);
        this.isLoading = false;
      }
    });
  }
  loadPaymentFromSearchResult() {
    if (!this.paymentSearchResult)
      return;
    this.bonusInfo = this.paymentSearchResult;
    if (this.paymentSearchResult.txId) {
      this.paymentTxId = this.paymentSearchResult.txId;
      this.loadPayment();
    }
  }
  startEditPaymentMethod() {
    this.isEditingPaymentMethod = true;
    this.selectedPaymentMethod = this.paymentData?.paymentMethod || "CASH";
  }
  cancelEditPaymentMethod() {
    this.isEditingPaymentMethod = false;
    this.selectedPaymentMethod = this.paymentData?.paymentMethod || "CASH";
  }
  savePaymentMethod() {
    if (!this.paymentData || !this.paymentTxId)
      return;
    this.isSaving = true;
    const request = {
      paymentMethod: this.selectedPaymentMethod
    };
    this.paymentsService.updatePaymentMethod(this.paymentTxId, request).subscribe({
      next: (updated) => {
        this.paymentData = updated;
        this.isEditingPaymentMethod = false;
        this.isSaving = false;
        this.toastService.success("\u0421\u043F\u043E\u0441\u043E\u0431 \u043E\u043F\u043B\u0430\u0442\u044B \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D");
        this.paymentUpdated.emit();
      },
      error: (err) => {
        this.toastService.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0438 \u0441\u043F\u043E\u0441\u043E\u0431\u0430 \u043E\u043F\u043B\u0430\u0442\u044B");
        console.error("Error updating payment method:", err);
        this.isSaving = false;
      }
    });
  }
  openRefundedPayment(txId) {
    this.refundedPaymentClick.emit(txId);
  }
  onClose() {
    this.visible = false;
    this.visibleChange.emit(false);
    this.isEditingPaymentMethod = false;
    this.showDeleteConfirmation = false;
    this.showRefundConfirmation = false;
    this.refundNotes = "";
    this.deleteConfirmText = "";
  }
  // Actions logic
  canShowActions() {
    if (!this.paymentData)
      return false;
    return true;
  }
  isRefundedPayment() {
    if (!this.paymentData)
      return false;
    return this.paymentData.status?.toUpperCase() === "REFUNDED";
  }
  canRefund() {
    if (!this.paymentData)
      return false;
    return this.isCompletedPayment();
  }
  isCompletedPayment() {
    if (!this.paymentData)
      return false;
    return this.paymentData.status?.toUpperCase() === "COMPLETED";
  }
  isRefundPayment() {
    if (!this.paymentData)
      return false;
    return this.paymentData.status?.toUpperCase() === "REFUND";
  }
  hasGrantedBonuses() {
    if (!this.bonusInfo)
      return false;
    return this.bonusInfo.bonusGranted > 0;
  }
  toggleDeleteConfirmation() {
    this.showDeleteConfirmation = !this.showDeleteConfirmation;
    this.showRefundConfirmation = false;
    if (!this.showDeleteConfirmation) {
      this.deleteConfirmText = "";
    }
  }
  cancelDeleteConfirmation() {
    this.showDeleteConfirmation = false;
    this.deleteConfirmText = "";
  }
  isDeleteConfirmValid() {
    return this.deleteConfirmText.toLowerCase().trim() === "\u0443\u0434\u0430\u043B\u0438\u0442\u044C";
  }
  toggleRefundConfirmation() {
    this.showRefundConfirmation = !this.showRefundConfirmation;
    this.showDeleteConfirmation = false;
  }
  confirmDelete() {
    if (!this.paymentData?.txId || !this.isDeleteConfirmValid())
      return;
    this.isDeleting = true;
    this.paymentsService.deletePayment(this.paymentData.txId).subscribe({
      next: () => {
        this.toastService.success("\u041F\u043B\u0430\u0442\u0435\u0436 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0443\u0434\u0430\u043B\u0435\u043D");
        this.paymentDeleted.emit(this.paymentData.txId);
        this.isDeleting = false;
        this.deleteConfirmText = "";
        this.onClose();
      },
      error: (err) => {
        const errorMessage = err.error?.message || "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u0438 \u043F\u043B\u0430\u0442\u0435\u0436\u0430";
        this.toastService.error(errorMessage);
        this.isDeleting = false;
      }
    });
  }
  confirmRefund() {
    if (!this.paymentData?.txId)
      return;
    this.isRefunding = true;
    this.paymentsService.refundPayment(this.paymentData.txId, { notes: this.refundNotes }).subscribe({
      next: () => {
        this.toastService.success("\u041F\u043B\u0430\u0442\u0435\u0436 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0435\u043D");
        this.paymentUpdated.emit();
        this.isRefunding = false;
        this.showRefundConfirmation = false;
        this.refundNotes = "";
        this.loadPayment();
      },
      error: (err) => {
        const errorMessage = err.error?.message || "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0432\u043E\u0437\u0432\u0440\u0430\u0442\u0435 \u043F\u043B\u0430\u0442\u0435\u0436\u0430";
        this.toastService.error(errorMessage);
        this.isRefunding = false;
      }
    });
  }
  formatAmount(amount) {
    return new Intl.NumberFormat("ru-RU", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(amount);
  }
  formatDate(dateString) {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("ru-RU", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    }).format(date);
  }
  getPaymentMethodForBadge() {
    if (!this.paymentData?.paymentMethod)
      return null;
    const method = this.paymentData.paymentMethod.toUpperCase();
    if (method === "CASH" || method === "CARD" || method === "TRANSFER") {
      return method;
    }
    return null;
  }
  getPaymentMethodLabel(method) {
    if (!method)
      return "\u041D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D";
    const labels = {
      "CASH": "\u041D\u0430\u043B\u0438\u0447\u043D\u044B\u0435",
      "CARD": "\u041A\u0430\u0440\u0442\u0430",
      "TRANSFER": "\u041F\u0435\u0440\u0435\u0432\u043E\u0434"
    };
    return labels[method.toUpperCase()] || method;
  }
  getRevokeReasonLabel(reason) {
    if (!reason)
      return "\u041D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D\u0430";
    const labels = {
      "PAYMENT_REFUND": "\u0412\u043E\u0437\u0432\u0440\u0430\u0442 \u043F\u043B\u0430\u0442\u0435\u0436\u0430",
      "EXPIRED": "\u0418\u0441\u0442\u0435\u043A \u0441\u0440\u043E\u043A \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F",
      "MANUAL": "\u0420\u0443\u0447\u043D\u043E\u0439 \u043E\u0442\u0437\u044B\u0432"
    };
    return labels[reason] || reason;
  }
  getStatusLabel() {
    if (!this.paymentData)
      return "";
    const status = this.paymentData.status;
    if (status === "COMPLETED")
      return "\u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E";
    if (status === "PENDING")
      return "\u0412 \u043E\u0436\u0438\u0434\u0430\u043D\u0438\u0438";
    if (status === "CANCELLED")
      return "\u041E\u0442\u043C\u0435\u043D\u0435\u043D\u043E";
    if (status === "REFUNDED")
      return "\u0412\u043E\u0437\u0432\u0440\u0430\u0449\u0435\u043D\u043E";
    return status;
  }
  getStatusBadgeType() {
    if (!this.paymentData)
      return "payment";
    const status = this.paymentData.status;
    if (status === "REFUNDED")
      return "refund";
    return "payment";
  }
  getStatusIcon() {
    if (!this.paymentData)
      return "payment";
    const status = this.paymentData.status;
    if (status === "REFUNDED")
      return "refund";
    return "payment";
  }
  static \u0275fac = function PaymentViewModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PaymentViewModalComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PaymentViewModalComponent, selectors: [["app-payment-view-modal"]], inputs: { visible: "visible", paymentTxId: "paymentTxId", paymentSearchResult: "paymentSearchResult" }, outputs: { visibleChange: "visibleChange", paymentUpdated: "paymentUpdated", paymentDeleted: "paymentDeleted", refundedPaymentClick: "refundedPaymentClick" }, features: [\u0275\u0275NgOnChangesFeature], decls: 3, vars: 5, consts: [["title", "\u0414\u0435\u0442\u0430\u043B\u0438 \u043F\u043B\u0430\u0442\u0435\u0436\u0430", 3, "closed", "visible", "showCloseButton", "size"], ["class", "payment-view-content", 4, "ngIf"], ["class", "loading-state", 4, "ngIf"], [1, "payment-view-content"], [1, "payment-header"], [1, "payment-id-section"], [1, "payment-id-label"], [1, "payment-id-value"], [1, "payment-status"], ["size", "medium", 3, "badgeType", "icon"], [1, "payment-info-grid"], [1, "info-column"], [1, "info-section"], [1, "section-title"], [1, "info-item"], [1, "info-label"], [1, "info-value", "amount"], [1, "payment-method-section"], ["badgeType", "paymentMethod", "size", "medium", 3, "paymentMethod", 4, "ngIf"], ["class", "method-selector", 4, "ngIf"], ["class", "edit-method-btn", 3, "click", 4, "ngIf"], [1, "bonus-info-section"], [4, "ngIf"], ["class", "bonus-item", 4, "ngIf"], ["class", "bonus-none", 4, "ngIf"], ["class", "info-item", 4, "ngIf"], [1, "info-value", "link", 3, "routerLink"], ["class", "info-value link", 3, "routerLink", 4, "ngIf"], ["class", "info-value", 4, "ngIf"], [1, "info-value"], ["class", "actions-section", 4, "ngIf"], ["badgeType", "paymentMethod", "size", "medium", 3, "paymentMethod"], [1, "method-selector"], [1, "method-select", 3, "ngModelChange", "ngModel"], ["value", "CASH"], ["value", "CARD"], ["value", "TRANSFER"], [1, "method-actions"], [1, "method-btn", "save", 3, "click", "disabled"], [1, "method-btn", "cancel", 3, "click"], [1, "edit-method-btn", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none"], ["d", "M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7", "stroke", "currentColor", "stroke-width", "2"], ["d", "M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z", "stroke", "currentColor", "stroke-width", "2"], ["class", "bonus-item revoked", 4, "ngFor", "ngForOf"], [1, "bonus-item", "revoked"], ["badgeType", "danger", "size", "small", "icon", "refund"], [1, "revoke-reason"], [1, "bonus-item"], ["badgeType", "bonusGranted", "size", "small", "icon", "star"], ["badgeType", "bonusUsed", "size", "small", "icon", "check"], [1, "bonus-none"], [1, "info-value", "notes"], [1, "info-value", "refund-link", 3, "click"], [1, "actions-section"], [1, "actions-divider"], [1, "actions-buttons"], [1, "action-btn", "delete-btn", 3, "click", "disabled"], ["d", "M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m3 0v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6h14zM10 11v6M14 11v6", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["class", "action-btn refund-btn", 3, "disabled", "click", 4, "ngIf"], ["class", "confirmation-area delete-confirmation", 4, "ngIf"], ["class", "confirmation-area refund-confirmation", 4, "ngIf"], [1, "action-btn", "refund-btn", 3, "click", "disabled"], ["d", "M3 10h10a5 5 0 010 10H9M3 10l4-4M3 10l4 4", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "confirmation-area", "delete-confirmation"], [1, "confirmation-warning"], ["viewBox", "0 0 24 24", "fill", "none", 1, "warning-icon"], ["d", "M12 9v4M12 17h.01", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], ["d", "M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z", "stroke", "currentColor", "stroke-width", "2"], [1, "warning-text"], [1, "delete-confirm-input"], ["type", "text", "placeholder", "\u0443\u0434\u0430\u043B\u0438\u0442\u044C", 1, "confirm-text-input", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "confirmation-actions"], [1, "confirm-btn", "danger", 3, "click", "disabled"], [1, "confirm-btn", "cancel", 3, "click", "disabled"], [1, "confirmation-area", "refund-confirmation"], [1, "refund-form"], [1, "refund-label"], ["placeholder", "\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u043F\u0440\u0438\u0447\u0438\u043D\u0443 \u0432\u043E\u0437\u0432\u0440\u0430\u0442\u0430...", "rows", "2", 1, "refund-input", 3, "ngModelChange", "ngModel"], [1, "confirm-btn", "warning", 3, "click", "disabled"], [1, "loading-state"], [1, "loader"]], template: function PaymentViewModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-modal", 0);
      \u0275\u0275listener("closed", function PaymentViewModalComponent_Template_app_modal_closed_0_listener() {
        return ctx.onClose();
      });
      \u0275\u0275template(1, PaymentViewModalComponent_div_1_Template, 63, 25, "div", 1)(2, PaymentViewModalComponent_div_2_Template, 4, 0, "div", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("visible", ctx.visible)("showCloseButton", true)("size", "large");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.paymentData);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, RouterModule, RouterLink, ModalComponent, BadgeComponent], styles: ['\n\n.payment-view-content[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.payment-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.5rem;\n  border-bottom: 2px solid #f1f5f9;\n  margin-bottom: 2rem;\n}\n.payment-id-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.payment-id-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.payment-id-value[_ngcontent-%COMP%] {\n  font-family:\n    "Courier New",\n    "Monaco",\n    "Menlo",\n    "Consolas",\n    monospace;\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #1f2937;\n  letter-spacing: 0.5px;\n}\n.payment-info-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 2rem;\n  padding: 0 1.5rem 1.5rem;\n}\n.info-column[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.info-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0 0 0.5rem 0;\n  padding-bottom: 0.75rem;\n  border-bottom: 1px solid #e2e8f0;\n}\n.info-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.info-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n.info-value[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #1f2937;\n  font-weight: 500;\n}\n.info-value.amount[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #16A34A;\n}\n.info-value.link[_ngcontent-%COMP%] {\n  color: #16A34A;\n  text-decoration: none;\n  cursor: pointer;\n  transition: color 0.2s;\n}\n.info-value.link[_ngcontent-%COMP%]:hover {\n  color: #14532d;\n  text-decoration: underline;\n}\n.info-value.refund-link[_ngcontent-%COMP%] {\n  color: #dc2626;\n  cursor: pointer;\n  text-decoration: underline;\n}\n.info-value.refund-link[_ngcontent-%COMP%]:hover {\n  color: #991b1b;\n}\n.info-value.notes[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  background: #f8fafc;\n  border-radius: 8px;\n  border: 1px solid #e2e8f0;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n}\n.revocations-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.revocation-item[_ngcontent-%COMP%] {\n  padding: 1rem;\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  border-radius: 8px;\n  border-left: 4px solid #dc2626;\n}\n.revocation-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.75rem;\n}\n.revocation-amount[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #dc2626;\n}\n.revocation-badge[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.75rem;\n  border-radius: 12px;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.revocation-badge.revoked[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.revocation-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.revocation-detail-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  font-size: 0.875rem;\n}\n.revocation-detail-item[_ngcontent-%COMP%]   .detail-label[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-weight: 500;\n  min-width: 120px;\n}\n.revocation-detail-item[_ngcontent-%COMP%]   .detail-value[_ngcontent-%COMP%] {\n  color: #1e293b;\n  flex: 1;\n}\n.revocation-detail-item[_ngcontent-%COMP%]   .detail-value.refund-link[_ngcontent-%COMP%] {\n  color: #dc2626;\n  cursor: pointer;\n  text-decoration: underline;\n}\n.revocation-detail-item[_ngcontent-%COMP%]   .detail-value.refund-link[_ngcontent-%COMP%]:hover {\n  color: #991b1b;\n}\n.payment-method-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n}\n.edit-method-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  padding: 0.35rem 0.65rem;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 6px;\n  color: #64748b;\n  font-size: 0.75rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.edit-method-btn[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n  border-color: #cbd5e1;\n  color: #1f2937;\n}\n.edit-method-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n}\n.method-selector[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  width: 100%;\n}\n.method-select[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  border: 2px solid #e2e8f0;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  background: white;\n  color: #1f2937;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.method-select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #16A34A;\n  box-shadow: 0 0 0 3px rgba(22, 163, 74, 0.1);\n}\n.method-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n}\n.method-btn[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n  border: none;\n}\n.method-btn.save[_ngcontent-%COMP%] {\n  background: #16A34A;\n  color: white;\n}\n.method-btn.save[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #14532d;\n}\n.method-btn.save[_ngcontent-%COMP%]:disabled {\n  background: #94a3b8;\n  cursor: not-allowed;\n}\n.method-btn.cancel[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #64748b;\n  border: 1px solid #e2e8f0;\n}\n.method-btn.cancel[_ngcontent-%COMP%]:hover {\n  background: #e2e8f0;\n}\n.bonus-info-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.bonus-item[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.bonus-item.revoked[_ngcontent-%COMP%] {\n  flex-direction: row;\n}\n.revoke-reason[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #dc2626;\n  font-style: italic;\n}\n.bonus-none[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  font-size: 0.875rem;\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  gap: 1rem;\n  color: #64748b;\n}\n.loader[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 4px solid #e2e8f0;\n  border-top-color: #16A34A;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.actions-section[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  padding: 0 1.5rem 1.5rem;\n}\n.actions-divider[_ngcontent-%COMP%] {\n  height: 2px;\n  background: #f1f5f9;\n  margin-bottom: 1.5rem;\n}\n.actions-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.action-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  padding: 0.5rem 0.875rem;\n  border-radius: 8px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n  border: 1.5px solid transparent;\n}\n.action-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 15px;\n  height: 15px;\n}\n.action-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.action-btn.delete-btn[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #dc2626;\n  border-color: #fecaca;\n}\n.action-btn.delete-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #fee2e2;\n  border-color: #f87171;\n}\n.action-btn.refund-btn[_ngcontent-%COMP%] {\n  background: #fefce8;\n  color: #ca8a04;\n  border-color: #fef08a;\n}\n.action-btn.refund-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #fef9c3;\n  border-color: #facc15;\n}\n.confirmation-area[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n  padding: 1.25rem;\n  border-radius: 12px;\n  animation: _ngcontent-%COMP%_slideDown 0.2s ease;\n}\n@keyframes _ngcontent-%COMP%_slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.delete-confirmation[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n}\n.refund-confirmation[_ngcontent-%COMP%] {\n  background: #fefce8;\n  border: 1px solid #fef08a;\n}\n.confirmation-warning[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  margin-bottom: 1.25rem;\n}\n.warning-icon[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  color: #dc2626;\n  flex-shrink: 0;\n  margin-top: 2px;\n}\n.refund-confirmation[_ngcontent-%COMP%]   .warning-icon[_ngcontent-%COMP%] {\n  color: #ca8a04;\n}\n.warning-text[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.warning-text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  color: #991b1b;\n  margin-bottom: 0.5rem;\n}\n.refund-confirmation[_ngcontent-%COMP%]   .warning-text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #854d0e;\n}\n.warning-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.25rem 0 0 0;\n  font-size: 0.875rem;\n  color: #b91c1c;\n}\n.refund-confirmation[_ngcontent-%COMP%]   .warning-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #a16207;\n}\n.delete-confirm-input[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.delete-confirm-input[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.875rem;\n  color: #991b1b;\n  margin-bottom: 0.5rem;\n}\n.delete-confirm-input[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #7f1d1d;\n}\n.confirm-text-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.625rem 0.75rem;\n  border: 1px solid #fecaca;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  font-family: inherit;\n  background: white;\n}\n.confirm-text-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #f87171;\n  box-shadow: 0 0 0 3px rgba(248, 113, 113, 0.15);\n}\n.refund-form[_ngcontent-%COMP%] {\n  margin-bottom: 1.25rem;\n}\n.refund-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #854d0e;\n  margin-bottom: 0.5rem;\n}\n.refund-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem;\n  border: 1px solid #fef08a;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  font-family: inherit;\n  resize: vertical;\n  background: white;\n}\n.refund-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #facc15;\n  box-shadow: 0 0 0 3px rgba(250, 204, 21, 0.2);\n}\n.confirmation-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n}\n.confirm-btn[_ngcontent-%COMP%] {\n  padding: 0.625rem 1.25rem;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n  border: none;\n}\n.confirm-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.confirm-btn.danger[_ngcontent-%COMP%] {\n  background: #dc2626;\n  color: white;\n}\n.confirm-btn.danger[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #b91c1c;\n}\n.confirm-btn.warning[_ngcontent-%COMP%] {\n  background: #ca8a04;\n  color: white;\n}\n.confirm-btn.warning[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #a16207;\n}\n.confirm-btn.cancel[_ngcontent-%COMP%] {\n  background: white;\n  color: #64748b;\n  border: 1px solid #e2e8f0;\n}\n.confirm-btn.cancel[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f8fafc;\n}\n@media (max-width: 768px) {\n  .payment-info-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 1.5rem;\n    padding: 0 1rem 1rem;\n  }\n  .payment-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 1rem;\n  }\n  .actions-section[_ngcontent-%COMP%] {\n    padding: 0 1rem 1rem;\n  }\n  .actions-buttons[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .action-btn[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n  .confirmation-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .confirm-btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=payment-view-modal.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaymentViewModalComponent, [{
    type: Component,
    args: [{ selector: "app-payment-view-modal", standalone: true, imports: [CommonModule, FormsModule, RouterModule, ModalComponent, ButtonComponent, BadgeComponent], template: `
    <app-modal
      [visible]="visible"
      title="\u0414\u0435\u0442\u0430\u043B\u0438 \u043F\u043B\u0430\u0442\u0435\u0436\u0430"
      [showCloseButton]="true"
      [size]="'large'"
      (closed)="onClose()">
      
      <div class="payment-view-content" *ngIf="paymentData">
        <!-- Header Section -->
        <div class="payment-header">
          <div class="payment-id-section">
            <span class="payment-id-label">ID \u043F\u043B\u0430\u0442\u0435\u0436\u0430</span>
            <span class="payment-id-value">{{ paymentData.txId }}</span>
          </div>
          <div class="payment-status">
            <app-badge 
              [badgeType]="getStatusBadgeType()" 
              size="medium"
              [icon]="getStatusIcon()">
              {{ getStatusLabel() }}
            </app-badge>
          </div>
        </div>

        <!-- Main Info Grid -->
        <div class="payment-info-grid">
          <!-- Left Column -->
          <div class="info-column">
            <div class="info-section">
              <h3 class="section-title">\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043E \u043F\u043B\u0430\u0442\u0435\u0436\u0435</h3>
              
              <div class="info-item">
                <span class="info-label">\u0421\u0443\u043C\u043C\u0430</span>
                <span class="info-value amount">{{ formatAmount(paymentData.amount) }} \u20B8</span>
              </div>

              <div class="info-item">
                <span class="info-label">\u0421\u043F\u043E\u0441\u043E\u0431 \u043E\u043F\u043B\u0430\u0442\u044B</span>
                <div class="payment-method-section">
                  <app-badge 
                    *ngIf="!isEditingPaymentMethod"
                    badgeType="paymentMethod" 
                    size="medium"
                    [paymentMethod]="getPaymentMethodForBadge()">
                  </app-badge>
                  <div class="method-selector" *ngIf="isEditingPaymentMethod">
                    <select [(ngModel)]="selectedPaymentMethod" class="method-select">
                      <option value="CASH">\u041D\u0430\u043B\u0438\u0447\u043D\u044B\u0435</option>
                      <option value="CARD">\u041A\u0430\u0440\u0442\u0430</option>
                      <option value="TRANSFER">\u041F\u0435\u0440\u0435\u0432\u043E\u0434</option>
                    </select>
                    <div class="method-actions">
                      <button class="method-btn save" (click)="savePaymentMethod()" [disabled]="isSaving">
                        {{ isSaving ? '\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435...' : '\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C' }}
                      </button>
                      <button class="method-btn cancel" (click)="cancelEditPaymentMethod()">\u041E\u0442\u043C\u0435\u043D\u0430</button>
                    </div>
                  </div>
                  <button class="edit-method-btn" *ngIf="!isEditingPaymentMethod && !isSaving" (click)="startEditPaymentMethod()">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" stroke="currentColor" stroke-width="2"/>
                      <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" stroke="currentColor" stroke-width="2"/>
                    </svg>
                    \u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C
                  </button>
                </div>
              </div>

              <div class="info-item">
                <span class="info-label">\u0411\u043E\u043D\u0443\u0441\u044B</span>
                <div class="bonus-info-section">
                  <!-- Revoked bonuses (show revoked badge instead of granted) -->
                  <ng-container *ngIf="paymentData.bonusRevocations && paymentData.bonusRevocations.length > 0">
                    <div class="bonus-item revoked" *ngFor="let revocation of paymentData.bonusRevocations">
                      <app-badge badgeType="danger" size="small" icon="refund">
                        \u041E\u0442\u043E\u0437\u0432\u0430\u043D\u043E: -{{ formatAmount(revocation.bonusAmount) }}
                      </app-badge>
                      <span class="revoke-reason">({{ getRevokeReasonLabel(revocation.revokeReason) }})</span>
                    </div>
                  </ng-container>
                  <!-- Active granted bonuses (only show if not revoked) -->
                  <ng-container *ngIf="!paymentData.bonusRevocations || paymentData.bonusRevocations.length === 0">
                    <div class="bonus-item" *ngIf="bonusInfo && bonusInfo.bonusGranted > 0">
                      <app-badge badgeType="bonusGranted" size="small" icon="star">
                        \u041D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u043E: +{{ formatAmount(bonusInfo.bonusGranted) }}
                      </app-badge>
                    </div>
                  </ng-container>
                  <!-- Used bonuses -->
                  <div class="bonus-item" *ngIf="bonusInfo && bonusInfo.bonusUsed > 0">
                    <app-badge badgeType="bonusUsed" size="small" icon="check">
                      \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u043E: -{{ formatAmount(bonusInfo.bonusUsed) }}
                    </app-badge>
                  </div>
                  <!-- No bonuses -->
                  <span class="bonus-none" *ngIf="(!bonusInfo || (bonusInfo.bonusGranted === 0 && bonusInfo.bonusUsed === 0)) && (!paymentData.bonusRevocations || paymentData.bonusRevocations.length === 0)">\u041D\u0435\u0442 \u0431\u043E\u043D\u0443\u0441\u043E\u0432</span>
                </div>
              </div>

              <div class="info-item" *ngIf="paymentData.notes">
                <span class="info-label">\u0417\u0430\u043C\u0435\u0442\u043A\u0438</span>
                <span class="info-value notes">{{ paymentData.notes }}</span>
              </div>
            </div>
          </div>

          <!-- Right Column -->
          <div class="info-column">
            <div class="info-section">
              <h3 class="section-title">\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043E \u043A\u043B\u0438\u0435\u043D\u0442\u0435</h3>
              
              <div class="info-item">
                <span class="info-label">\u041A\u043B\u0438\u0435\u043D\u0442</span>
                <a [routerLink]="['/clients', paymentData.clientId]" class="info-value link">
                  {{ paymentData.clientName }}
                </a>
              </div>

              <div class="info-item" *ngIf="bonusInfo?.clientPhone">
                <span class="info-label">\u0422\u0435\u043B\u0435\u0444\u043E\u043D</span>
                <span class="info-value">{{ bonusInfo?.clientPhone }}</span>
              </div>

              <div class="info-item" *ngIf="bonusInfo?.clientEmail">
                <span class="info-label">Email</span>
                <span class="info-value">{{ bonusInfo?.clientEmail }}</span>
              </div>
            </div>

            <div class="info-section">
              <h3 class="section-title">\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F</h3>
              
              <div class="info-item">
                <span class="info-label">\u0418\u043D\u0438\u0446\u0438\u0430\u0442\u043E\u0440</span>
                <a [routerLink]="['/users', paymentData.enteredByUserId]" class="info-value link" *ngIf="paymentData.enteredByUserId">
                  {{ paymentData.enteredByUsername }}
                </a>
                <span class="info-value" *ngIf="!paymentData.enteredByUserId">{{ paymentData.enteredByUsername || '\u041D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D' }}</span>
              </div>

              <div class="info-item">
                <span class="info-label">\u0414\u0430\u0442\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F</span>
                <span class="info-value">{{ formatDate(paymentData.createdAt) }}</span>
              </div>

              <div class="info-item" *ngIf="paymentData.updatedAt && paymentData.updatedAt !== paymentData.createdAt">
                <span class="info-label">\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0435 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435</span>
                <span class="info-value">{{ formatDate(paymentData.updatedAt) }}</span>
              </div>

              <div class="info-item" *ngIf="paymentData.refundedPaymentTxId">
                <span class="info-label">\u0412\u043E\u0437\u0432\u0440\u0430\u0442 \u043F\u043B\u0430\u0442\u0435\u0436\u0430</span>
                <span class="info-value refund-link" (click)="openRefundedPayment(paymentData.refundedPaymentTxId!)">
                  {{ paymentData.refundedPaymentTxId }}
                </span>
              </div>
            </div>

          </div>
        </div>

        <!-- Actions Section -->
        <div class="actions-section" *ngIf="canShowActions()">
          <div class="actions-divider"></div>
          
          <div class="actions-buttons">
            <button class="action-btn delete-btn" (click)="toggleDeleteConfirmation()" [disabled]="isDeleting || isRefunding">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m3 0v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6h14zM10 11v6M14 11v6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043F\u043B\u0430\u0442\u0435\u0436</span>
            </button>
            
            <button class="action-btn refund-btn" (click)="toggleRefundConfirmation()" [disabled]="isDeleting || isRefunding" *ngIf="canRefund()">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M3 10h10a5 5 0 010 10H9M3 10l4-4M3 10l4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>\u0412\u043E\u0437\u0432\u0440\u0430\u0442 \u043F\u043B\u0430\u0442\u0435\u0436\u0430</span>
            </button>
          </div>

          <!-- Delete Confirmation Area -->
          <div class="confirmation-area delete-confirmation" *ngIf="showDeleteConfirmation">
            <div class="confirmation-warning">
              <svg viewBox="0 0 24 24" fill="none" class="warning-icon">
                <path d="M12 9v4M12 17h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" stroke="currentColor" stroke-width="2"/>
              </svg>
              <div class="warning-text">
                <strong>\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B, \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u044D\u0442\u043E\u0442 \u043F\u043B\u0430\u0442\u0435\u0436?</strong>
                <p *ngIf="isCompletedPayment() && hasGrantedBonuses()">
                  \u0411\u043E\u043D\u0443\u0441\u043D\u044B\u0435 \u0442\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u0438, \u043D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u043D\u044B\u0435 \u0437\u0430 \u044D\u0442\u043E\u0442 \u043F\u043B\u0430\u0442\u0435\u0436, \u0442\u0430\u043A\u0436\u0435 \u0431\u0443\u0434\u0443\u0442 \u0443\u0434\u0430\u043B\u0435\u043D\u044B.
                </p>
                <p *ngIf="isRefundPayment()">
                  \u041E\u0440\u0438\u0433\u0438\u043D\u0430\u043B\u044C\u043D\u044B\u0439 \u043F\u043B\u0430\u0442\u0435\u0436 \u0438 \u0432\u0441\u0435 \u0441\u0432\u044F\u0437\u0430\u043D\u043D\u044B\u0435 \u0431\u043E\u043D\u0443\u0441\u043D\u044B\u0435 \u0442\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u0438 \u0442\u0430\u043A\u0436\u0435 \u0431\u0443\u0434\u0443\u0442 \u0443\u0434\u0430\u043B\u0435\u043D\u044B.
                </p>
                <p *ngIf="isRefundedPayment()">
                  \u0422\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u044F \u0432\u043E\u0437\u0432\u0440\u0430\u0442\u0430 \u0438 \u0432\u0441\u0435 \u0441\u0432\u044F\u0437\u0430\u043D\u043D\u044B\u0435 \u0431\u043E\u043D\u0443\u0441\u043D\u044B\u0435 \u0442\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u0438 \u0442\u0430\u043A\u0436\u0435 \u0431\u0443\u0434\u0443\u0442 \u0443\u0434\u0430\u043B\u0435\u043D\u044B.
                </p>
                <p>\u042D\u0442\u043E \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u043D\u0435\u043B\u044C\u0437\u044F \u043E\u0442\u043C\u0435\u043D\u0438\u0442\u044C.</p>
              </div>
            </div>
            <div class="delete-confirm-input">
              <label>\u0412\u0432\u0435\u0434\u0438\u0442\u0435 <strong>\u0443\u0434\u0430\u043B\u0438\u0442\u044C</strong> \u0434\u043B\u044F \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u044F:</label>
              <input 
                type="text" 
                [(ngModel)]="deleteConfirmText" 
                placeholder="\u0443\u0434\u0430\u043B\u0438\u0442\u044C"
                class="confirm-text-input"
                (keyup.enter)="confirmDelete()">
            </div>
            <div class="confirmation-actions">
              <button class="confirm-btn danger" (click)="confirmDelete()" [disabled]="isDeleting || !isDeleteConfirmValid()">
                {{ isDeleting ? '\u0423\u0434\u0430\u043B\u0435\u043D\u0438\u0435...' : '\u0423\u0434\u0430\u043B\u0438\u0442\u044C' }}
              </button>
              <button class="confirm-btn cancel" (click)="cancelDeleteConfirmation()" [disabled]="isDeleting">
                \u041E\u0442\u043C\u0435\u043D\u0430
              </button>
            </div>
          </div>

          <!-- Refund Confirmation Area -->
          <div class="confirmation-area refund-confirmation" *ngIf="showRefundConfirmation">
            <div class="refund-form">
              <label class="refund-label">\u041F\u0440\u0438\u0447\u0438\u043D\u0430 \u0432\u043E\u0437\u0432\u0440\u0430\u0442\u0430 (\u043D\u0435\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E)</label>
              <textarea 
                class="refund-input"
                [(ngModel)]="refundNotes"
                placeholder="\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u043F\u0440\u0438\u0447\u0438\u043D\u0443 \u0432\u043E\u0437\u0432\u0440\u0430\u0442\u0430..."
                rows="2"></textarea>
            </div>
            <div class="confirmation-actions">
              <button class="confirm-btn warning" (click)="confirmRefund()" [disabled]="isRefunding">
                {{ isRefunding ? '\u0412\u043E\u0437\u0432\u0440\u0430\u0442...' : '\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C \u0432\u043E\u0437\u0432\u0440\u0430\u0442' }}
              </button>
              <button class="confirm-btn cancel" (click)="showRefundConfirmation = false" [disabled]="isRefunding">
                \u041E\u0442\u043C\u0435\u043D\u0430
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="loading-state" *ngIf="isLoading">
        <div class="loader"></div>
        <span>\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0434\u0430\u043D\u043D\u044B\u0445...</span>
      </div>
    </app-modal>
  `, styles: ['/* angular:styles/component:css;48a9eb14a2fd987ecebf0ac71b8f7e5c63db853da64688fe12519665d0bfdd0f;/Users/baglan/repo/westwood/westwood-frontend/src/app/shared/components/payment-view-modal/payment-view-modal.component.ts */\n.payment-view-content {\n  padding: 0;\n}\n.payment-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.5rem;\n  border-bottom: 2px solid #f1f5f9;\n  margin-bottom: 2rem;\n}\n.payment-id-section {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.payment-id-label {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.payment-id-value {\n  font-family:\n    "Courier New",\n    "Monaco",\n    "Menlo",\n    "Consolas",\n    monospace;\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #1f2937;\n  letter-spacing: 0.5px;\n}\n.payment-info-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 2rem;\n  padding: 0 1.5rem 1.5rem;\n}\n.info-column {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.info-section {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.section-title {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0 0 0.5rem 0;\n  padding-bottom: 0.75rem;\n  border-bottom: 1px solid #e2e8f0;\n}\n.info-item {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.info-label {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n.info-value {\n  font-size: 1rem;\n  color: #1f2937;\n  font-weight: 500;\n}\n.info-value.amount {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #16A34A;\n}\n.info-value.link {\n  color: #16A34A;\n  text-decoration: none;\n  cursor: pointer;\n  transition: color 0.2s;\n}\n.info-value.link:hover {\n  color: #14532d;\n  text-decoration: underline;\n}\n.info-value.refund-link {\n  color: #dc2626;\n  cursor: pointer;\n  text-decoration: underline;\n}\n.info-value.refund-link:hover {\n  color: #991b1b;\n}\n.info-value.notes {\n  padding: 0.75rem;\n  background: #f8fafc;\n  border-radius: 8px;\n  border: 1px solid #e2e8f0;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n}\n.revocations-list {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.revocation-item {\n  padding: 1rem;\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  border-radius: 8px;\n  border-left: 4px solid #dc2626;\n}\n.revocation-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.75rem;\n}\n.revocation-amount {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #dc2626;\n}\n.revocation-badge {\n  padding: 0.25rem 0.75rem;\n  border-radius: 12px;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.revocation-badge.revoked {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.revocation-details {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.revocation-detail-item {\n  display: flex;\n  gap: 0.5rem;\n  font-size: 0.875rem;\n}\n.revocation-detail-item .detail-label {\n  color: #64748b;\n  font-weight: 500;\n  min-width: 120px;\n}\n.revocation-detail-item .detail-value {\n  color: #1e293b;\n  flex: 1;\n}\n.revocation-detail-item .detail-value.refund-link {\n  color: #dc2626;\n  cursor: pointer;\n  text-decoration: underline;\n}\n.revocation-detail-item .detail-value.refund-link:hover {\n  color: #991b1b;\n}\n.payment-method-section {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n}\n.edit-method-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  padding: 0.35rem 0.65rem;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 6px;\n  color: #64748b;\n  font-size: 0.75rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.edit-method-btn:hover {\n  background: #f1f5f9;\n  border-color: #cbd5e1;\n  color: #1f2937;\n}\n.edit-method-btn svg {\n  width: 12px;\n  height: 12px;\n}\n.method-selector {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  width: 100%;\n}\n.method-select {\n  padding: 0.75rem;\n  border: 2px solid #e2e8f0;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  background: white;\n  color: #1f2937;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.method-select:focus {\n  outline: none;\n  border-color: #16A34A;\n  box-shadow: 0 0 0 3px rgba(22, 163, 74, 0.1);\n}\n.method-actions {\n  display: flex;\n  gap: 0.5rem;\n}\n.method-btn {\n  padding: 0.5rem 1rem;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n  border: none;\n}\n.method-btn.save {\n  background: #16A34A;\n  color: white;\n}\n.method-btn.save:hover:not(:disabled) {\n  background: #14532d;\n}\n.method-btn.save:disabled {\n  background: #94a3b8;\n  cursor: not-allowed;\n}\n.method-btn.cancel {\n  background: #f1f5f9;\n  color: #64748b;\n  border: 1px solid #e2e8f0;\n}\n.method-btn.cancel:hover {\n  background: #e2e8f0;\n}\n.bonus-info-section {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.bonus-item {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.bonus-item.revoked {\n  flex-direction: row;\n}\n.revoke-reason {\n  font-size: 0.75rem;\n  color: #dc2626;\n  font-style: italic;\n}\n.bonus-none {\n  color: #94a3b8;\n  font-size: 0.875rem;\n}\n.loading-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  gap: 1rem;\n  color: #64748b;\n}\n.loader {\n  width: 40px;\n  height: 40px;\n  border: 4px solid #e2e8f0;\n  border-top-color: #16A34A;\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.actions-section {\n  margin-top: 1rem;\n  padding: 0 1.5rem 1.5rem;\n}\n.actions-divider {\n  height: 2px;\n  background: #f1f5f9;\n  margin-bottom: 1.5rem;\n}\n.actions-buttons {\n  display: flex;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.action-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  padding: 0.5rem 0.875rem;\n  border-radius: 8px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n  border: 1.5px solid transparent;\n}\n.action-btn svg {\n  width: 15px;\n  height: 15px;\n}\n.action-btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.action-btn.delete-btn {\n  background: #fef2f2;\n  color: #dc2626;\n  border-color: #fecaca;\n}\n.action-btn.delete-btn:hover:not(:disabled) {\n  background: #fee2e2;\n  border-color: #f87171;\n}\n.action-btn.refund-btn {\n  background: #fefce8;\n  color: #ca8a04;\n  border-color: #fef08a;\n}\n.action-btn.refund-btn:hover:not(:disabled) {\n  background: #fef9c3;\n  border-color: #facc15;\n}\n.confirmation-area {\n  margin-top: 1.5rem;\n  padding: 1.25rem;\n  border-radius: 12px;\n  animation: slideDown 0.2s ease;\n}\n@keyframes slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.delete-confirmation {\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n}\n.refund-confirmation {\n  background: #fefce8;\n  border: 1px solid #fef08a;\n}\n.confirmation-warning {\n  display: flex;\n  gap: 1rem;\n  margin-bottom: 1.25rem;\n}\n.warning-icon {\n  width: 24px;\n  height: 24px;\n  color: #dc2626;\n  flex-shrink: 0;\n  margin-top: 2px;\n}\n.refund-confirmation .warning-icon {\n  color: #ca8a04;\n}\n.warning-text {\n  flex: 1;\n}\n.warning-text strong {\n  display: block;\n  color: #991b1b;\n  margin-bottom: 0.5rem;\n}\n.refund-confirmation .warning-text strong {\n  color: #854d0e;\n}\n.warning-text p {\n  margin: 0.25rem 0 0 0;\n  font-size: 0.875rem;\n  color: #b91c1c;\n}\n.refund-confirmation .warning-text p {\n  color: #a16207;\n}\n.delete-confirm-input {\n  margin-bottom: 1rem;\n}\n.delete-confirm-input label {\n  display: block;\n  font-size: 0.875rem;\n  color: #991b1b;\n  margin-bottom: 0.5rem;\n}\n.delete-confirm-input label strong {\n  font-weight: 700;\n  color: #7f1d1d;\n}\n.confirm-text-input {\n  width: 100%;\n  padding: 0.625rem 0.75rem;\n  border: 1px solid #fecaca;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  font-family: inherit;\n  background: white;\n}\n.confirm-text-input:focus {\n  outline: none;\n  border-color: #f87171;\n  box-shadow: 0 0 0 3px rgba(248, 113, 113, 0.15);\n}\n.refund-form {\n  margin-bottom: 1.25rem;\n}\n.refund-label {\n  display: block;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #854d0e;\n  margin-bottom: 0.5rem;\n}\n.refund-input {\n  width: 100%;\n  padding: 0.75rem;\n  border: 1px solid #fef08a;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  font-family: inherit;\n  resize: vertical;\n  background: white;\n}\n.refund-input:focus {\n  outline: none;\n  border-color: #facc15;\n  box-shadow: 0 0 0 3px rgba(250, 204, 21, 0.2);\n}\n.confirmation-actions {\n  display: flex;\n  gap: 0.75rem;\n}\n.confirm-btn {\n  padding: 0.625rem 1.25rem;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n  border: none;\n}\n.confirm-btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.confirm-btn.danger {\n  background: #dc2626;\n  color: white;\n}\n.confirm-btn.danger:hover:not(:disabled) {\n  background: #b91c1c;\n}\n.confirm-btn.warning {\n  background: #ca8a04;\n  color: white;\n}\n.confirm-btn.warning:hover:not(:disabled) {\n  background: #a16207;\n}\n.confirm-btn.cancel {\n  background: white;\n  color: #64748b;\n  border: 1px solid #e2e8f0;\n}\n.confirm-btn.cancel:hover:not(:disabled) {\n  background: #f8fafc;\n}\n@media (max-width: 768px) {\n  .payment-info-grid {\n    grid-template-columns: 1fr;\n    gap: 1.5rem;\n    padding: 0 1rem 1rem;\n  }\n  .payment-header {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 1rem;\n  }\n  .actions-section {\n    padding: 0 1rem 1rem;\n  }\n  .actions-buttons {\n    flex-direction: column;\n  }\n  .action-btn {\n    width: 100%;\n    justify-content: center;\n  }\n  .confirmation-actions {\n    flex-direction: column;\n  }\n  .confirm-btn {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=payment-view-modal.component.css.map */\n'] }]
  }], null, { visible: [{
    type: Input
  }], paymentTxId: [{
    type: Input
  }], paymentSearchResult: [{
    type: Input
  }], visibleChange: [{
    type: Output
  }], paymentUpdated: [{
    type: Output
  }], paymentDeleted: [{
    type: Output
  }], refundedPaymentClick: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PaymentViewModalComponent, { className: "PaymentViewModalComponent", filePath: "src/app/shared/components/payment-view-modal/payment-view-modal.component.ts", lineNumber: 884 });
})();

export {
  PaymentViewModalComponent
};
//# sourceMappingURL=chunk-7VMQ5YKX.js.map
