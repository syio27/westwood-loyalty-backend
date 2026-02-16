import {
  PhoneFormatPipe
} from "./chunk-OUAWC6NU.js";
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
  TransactionModalService
} from "./chunk-YFUSX3TX.js";
import "./chunk-PGQMZGPZ.js";
import {
  PageHeaderService
} from "./chunk-TXI2S3RM.js";
import {
  environment
} from "./chunk-6FFMNYG3.js";
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
  NgModel
} from "./chunk-CD4QMWYU.js";
import {
  IconButtonComponent
} from "./chunk-GA36L6BH.js";
import {
  CommonModule,
  Component,
  HttpClient,
  Injectable,
  NgForOf,
  NgIf,
  Router,
  RouterLink,
  RouterModule,
  Subject,
  inject,
  setClassMetadata,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-LQF2QQXA.js";

// src/app/core/services/profile.service.ts
var ProfileService = class _ProfileService {
  http;
  apiUrl = `${environment.apiUrl}/user/profile`;
  constructor(http) {
    this.http = http;
    console.log("[ProfileService] Initialized with API URL:", this.apiUrl);
  }
  /**
   * Get current authenticated user's profile
   * @returns UserProfile with full user information
   */
  getProfile() {
    console.log("[ProfileService] GET", this.apiUrl);
    return this.http.get(this.apiUrl);
  }
  /**
   * Update current user's profile
   * @param data - email, firstName, lastName, phone
   * @returns Updated UserProfile
   */
  updateProfile(data) {
    return this.http.put(this.apiUrl, data);
  }
  /**
   * Change current user's password
   * @param data - currentPassword, newPassword, confirmPassword
   * @returns void (204 No Content on success)
   */
  changePassword(data) {
    return this.http.put(`${this.apiUrl}/password`, data);
  }
  /**
   * Get current user's payment transactions (operations history)
   * @returns Array of user's payment transactions
   */
  getUserTransactions() {
    return this.http.get(`${this.apiUrl}/transactions`);
  }
  static \u0275fac = function ProfileService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProfileService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProfileService, factory: _ProfileService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProfileService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/features/users/pages/account-page/account-page.component.ts
var _c0 = (a0) => ["/clients", a0];
function AccountPageComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "app-loader", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("visible", true)("overlay", false);
  }
}
function AccountPageComponent_div_3_p_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 64);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "phoneFormat");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, ctx_r0.profile.phone));
  }
}
function AccountPageComponent_div_3_app_icon_button_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-icon-button", 65);
    \u0275\u0275listener("onClick", function AccountPageComponent_div_3_app_icon_button_32_Template_app_icon_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.startEditPersonal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 66);
    \u0275\u0275element(2, "path", 67)(3, "path", 68);
    \u0275\u0275elementEnd()();
  }
}
function AccountPageComponent_div_3_div_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 69)(1, "app-button", 70);
    \u0275\u0275listener("onClick", function AccountPageComponent_div_3_div_33_Template_app_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.cancelEditPersonal());
    });
    \u0275\u0275text(2, " \u041E\u0442\u043C\u0435\u043D\u0430 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "app-button", 71);
    \u0275\u0275listener("onClick", function AccountPageComponent_div_3_div_33_Template_app_button_onClick_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.savePersonal());
    });
    \u0275\u0275text(4, " \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.isSavingPersonal);
    \u0275\u0275advance(2);
    \u0275\u0275property("loading", ctx_r0.isSavingPersonal);
  }
}
function AccountPageComponent_div_3_span_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.profile.firstName);
  }
}
function AccountPageComponent_div_3_input_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 72);
    \u0275\u0275twoWayListener("ngModelChange", function AccountPageComponent_div_3_input_39_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.editedPersonal.firstName, $event) || (ctx_r0.editedPersonal.firstName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.editedPersonal.firstName);
  }
}
function AccountPageComponent_div_3_span_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.profile.lastName);
  }
}
function AccountPageComponent_div_3_input_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 73);
    \u0275\u0275twoWayListener("ngModelChange", function AccountPageComponent_div_3_input_44_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.editedPersonal.lastName, $event) || (ctx_r0.editedPersonal.lastName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.editedPersonal.lastName);
  }
}
function AccountPageComponent_div_3_span_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.profile.email);
  }
}
function AccountPageComponent_div_3_input_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 74);
    \u0275\u0275twoWayListener("ngModelChange", function AccountPageComponent_div_3_input_49_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.editedPersonal.email, $event) || (ctx_r0.editedPersonal.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.editedPersonal.email);
  }
}
function AccountPageComponent_div_3_span_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 41);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "phoneFormat");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, ctx_r0.profile.phone) || "\u2014");
  }
}
function AccountPageComponent_div_3_input_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 75);
    \u0275\u0275twoWayListener("ngModelChange", function AccountPageComponent_div_3_input_54_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.editedPersonal.phone, $event) || (ctx_r0.editedPersonal.phone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.editedPersonal.phone);
  }
}
function AccountPageComponent_div_3_app_icon_button_74_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-icon-button", 76);
    \u0275\u0275listener("onClick", function AccountPageComponent_div_3_app_icon_button_74_Template_app_icon_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.startEditPassword());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 66);
    \u0275\u0275element(2, "path", 67)(3, "path", 68);
    \u0275\u0275elementEnd()();
  }
}
function AccountPageComponent_div_3_div_75_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 69)(1, "app-button", 70);
    \u0275\u0275listener("onClick", function AccountPageComponent_div_3_div_75_Template_app_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.cancelEditPassword());
    });
    \u0275\u0275text(2, " \u041E\u0442\u043C\u0435\u043D\u0430 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "app-button", 77);
    \u0275\u0275listener("onClick", function AccountPageComponent_div_3_div_75_Template_app_button_onClick_3_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.savePassword());
    });
    \u0275\u0275text(4, " \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.isSavingPassword);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r0.isPasswordFormValid())("loading", ctx_r0.isSavingPassword);
  }
}
function AccountPageComponent_div_3_div_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "div", 34)(2, "span", 35);
    \u0275\u0275text(3, "\u041F\u0430\u0440\u043E\u043B\u044C:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 41);
    \u0275\u0275text(5, "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022");
    \u0275\u0275elementEnd()()();
  }
}
function AccountPageComponent_div_3_div_77_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 86);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.passwordError, " ");
  }
}
function AccountPageComponent_div_3_div_77_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 87);
    \u0275\u0275text(1, " \u041F\u0430\u0440\u043E\u043B\u0438 \u043D\u0435 \u0441\u043E\u0432\u043F\u0430\u0434\u0430\u044E\u0442 ");
    \u0275\u0275elementEnd();
  }
}
function AccountPageComponent_div_3_div_77_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 78);
    \u0275\u0275template(1, AccountPageComponent_div_3_div_77_div_1_Template, 2, 1, "div", 79);
    \u0275\u0275elementStart(2, "div", 80)(3, "label", 81);
    \u0275\u0275text(4, "\u0422\u0435\u043A\u0443\u0449\u0438\u0439 \u043F\u0430\u0440\u043E\u043B\u044C");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 82);
    \u0275\u0275twoWayListener("ngModelChange", function AccountPageComponent_div_3_div_77_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.passwordData.currentPassword, $event) || (ctx_r0.passwordData.currentPassword = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 80)(7, "label", 81);
    \u0275\u0275text(8, "\u041D\u043E\u0432\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 83);
    \u0275\u0275twoWayListener("ngModelChange", function AccountPageComponent_div_3_div_77_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.passwordData.newPassword, $event) || (ctx_r0.passwordData.newPassword = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 80)(11, "label", 81);
    \u0275\u0275text(12, "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u043D\u043E\u0432\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 84);
    \u0275\u0275twoWayListener("ngModelChange", function AccountPageComponent_div_3_div_77_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.passwordData.confirmPassword, $event) || (ctx_r0.passwordData.confirmPassword = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, AccountPageComponent_div_3_div_77_div_14_Template, 2, 0, "div", 85);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.passwordError);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.passwordData.currentPassword);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.passwordData.newPassword);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.passwordData.confirmPassword);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.passwordData.newPassword && ctx_r0.passwordData.confirmPassword && ctx_r0.passwordData.newPassword !== ctx_r0.passwordData.confirmPassword);
  }
}
function AccountPageComponent_div_3_tr_105_app_badge_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-badge", 114);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const payment_r12 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" +", ctx_r0.formatAmount(payment_r12.bonusEarned), " ");
  }
}
function AccountPageComponent_div_3_tr_105_app_badge_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-badge", 115);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const payment_r12 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" -", ctx_r0.formatAmount(payment_r12.bonusUsed), " ");
  }
}
function AccountPageComponent_div_3_tr_105_app_badge_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-badge", 116);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const payment_r12 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" -", ctx_r0.formatAmount(payment_r12.bonusRevoked), " ");
  }
}
function AccountPageComponent_div_3_tr_105_span_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 117);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function AccountPageComponent_div_3_tr_105_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 88)(1, "td", 89)(2, "span", 90);
    \u0275\u0275listener("click", function AccountPageComponent_div_3_tr_105_Template_span_click_2_listener() {
      const payment_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openPaymentView(payment_r12.txId));
    });
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 91)(5, "div", 92)(6, "div", 93);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 94)(9, "a", 95)(10, "span", 96);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "span", 97);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(14, "td", 98)(15, "span", 99);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "td", 100)(18, "div", 101);
    \u0275\u0275template(19, AccountPageComponent_div_3_tr_105_app_badge_19_Template, 2, 1, "app-badge", 102)(20, AccountPageComponent_div_3_tr_105_app_badge_20_Template, 2, 1, "app-badge", 103)(21, AccountPageComponent_div_3_tr_105_app_badge_21_Template, 2, 1, "app-badge", 104)(22, AccountPageComponent_div_3_tr_105_span_22_Template, 2, 0, "span", 105);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "td", 106);
    \u0275\u0275element(24, "app-badge", 107);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "td", 108)(26, "app-badge", 109);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "td", 110)(29, "div", 111)(30, "span", 112);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span", 113);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const payment_r12 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("#", payment_r12.txId, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.getInitials(payment_r12.clientName), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(16, _c0, payment_r12.clientId));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(payment_r12.clientName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(payment_r12.clientPhone);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r0.formatAmount(payment_r12.amount), " \u20B8");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", payment_r12.bonusEarned > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", payment_r12.bonusUsed > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", payment_r12.bonusRevoked > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", payment_r12.bonusEarned === 0 && payment_r12.bonusUsed === 0 && payment_r12.bonusRevoked === 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("paymentMethod", ctx_r0.getPaymentMethodForBadge(payment_r12.paymentMethod));
    \u0275\u0275advance(2);
    \u0275\u0275property("badgeType", payment_r12.isRefund ? "refund" : "payment")("icon", payment_r12.isRefund ? "refund" : "payment");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", payment_r12.isRefund ? "\u0412\u043E\u0437\u0432\u0440\u0430\u0442" : "\u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E", " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(payment_r12.date);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(payment_r12.time);
  }
}
function AccountPageComponent_div_3_div_106_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 118);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 20);
    \u0275\u0275element(2, "path", 119)(3, "rect", 120)(4, "path", 121);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "\u041D\u0435\u0442 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0439");
    \u0275\u0275elementEnd()();
  }
}
function AccountPageComponent_div_3_div_108_app_badge_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-badge", 140);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const payment_r14 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("+", ctx_r0.formatAmount(payment_r14.bonusEarned), "");
  }
}
function AccountPageComponent_div_3_div_108_app_badge_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-badge", 141);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const payment_r14 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("-", ctx_r0.formatAmount(payment_r14.bonusUsed), "");
  }
}
function AccountPageComponent_div_3_div_108_app_badge_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-badge", 142);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const payment_r14 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("-", ctx_r0.formatAmount(payment_r14.bonusRevoked), "");
  }
}
function AccountPageComponent_div_3_div_108_span_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function AccountPageComponent_div_3_div_108_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 122)(1, "div", 123);
    \u0275\u0275listener("click", function AccountPageComponent_div_3_div_108_Template_div_click_1_listener() {
      const payment_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleMobilePaymentCard(payment_r14.id));
    });
    \u0275\u0275elementStart(2, "div", 124)(3, "div")(4, "div", 125);
    \u0275\u0275listener("click", function AccountPageComponent_div_3_div_108_Template_div_click_4_listener($event) {
      const payment_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      ctx_r0.openPaymentView(payment_r14.txId);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 126);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 127);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 66);
    \u0275\u0275element(10, "path", 128);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(11, "div", 129)(12, "div", 130)(13, "span", 131);
    \u0275\u0275text(14, "\u041A\u043B\u0438\u0435\u043D\u0442:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "a", 132);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 130)(18, "span", 131);
    \u0275\u0275text(19, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 133);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 130)(23, "span", 131);
    \u0275\u0275text(24, "\u0411\u043E\u043D\u0443\u0441\u044B:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 134);
    \u0275\u0275template(26, AccountPageComponent_div_3_div_108_app_badge_26_Template, 2, 1, "app-badge", 135)(27, AccountPageComponent_div_3_div_108_app_badge_27_Template, 2, 1, "app-badge", 136)(28, AccountPageComponent_div_3_div_108_app_badge_28_Template, 2, 1, "app-badge", 137)(29, AccountPageComponent_div_3_div_108_span_29_Template, 2, 0, "span", 138);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 130)(31, "span", 131);
    \u0275\u0275text(32, "\u0421\u043F\u043E\u0441\u043E\u0431 \u043E\u043F\u043B\u0430\u0442\u044B:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "span", 133);
    \u0275\u0275element(34, "app-badge", 139);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 130)(36, "span", 131);
    \u0275\u0275text(37, "\u0414\u0430\u0442\u0430:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "span", 133);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const payment_r14 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("#", payment_r14.txId, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.formatAmount(payment_r14.amount), " \u20B8");
    \u0275\u0275advance();
    \u0275\u0275classProp("expanded", ctx_r0.isMobilePaymentExpanded(payment_r14.id));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("expanded", ctx_r0.isMobilePaymentExpanded(payment_r14.id));
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(16, _c0, payment_r14.clientId));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", payment_r14.clientName, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(payment_r14.clientPhone);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", payment_r14.bonusEarned > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", payment_r14.bonusUsed > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", payment_r14.bonusRevoked > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", payment_r14.bonusEarned === 0 && payment_r14.bonusUsed === 0 && payment_r14.bonusRevoked === 0);
    \u0275\u0275advance(5);
    \u0275\u0275property("paymentMethod", ctx_r0.getPaymentMethodForBadge(payment_r14.paymentMethod));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", payment_r14.date, " ", payment_r14.time, "");
  }
}
function AccountPageComponent_div_3_div_109_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 143);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 20);
    \u0275\u0275element(2, "path", 119)(3, "rect", 120)(4, "path", 121);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "\u041D\u0435\u0442 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0439");
    \u0275\u0275elementEnd()();
  }
}
function AccountPageComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8)(2, "div", 9)(3, "div", 10)(4, "div", 11);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "div", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 13)(8, "div", 14)(9, "h1", 15);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "app-badge", 16);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "p", 17);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, AccountPageComponent_div_3_p_15_Template, 3, 3, "p", 18);
    \u0275\u0275elementStart(16, "div", 19);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(17, "svg", 20);
    \u0275\u0275element(18, "path", 21)(19, "path", 22)(20, "path", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(21, "span");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(23, "div", 24)(24, "div", 25)(25, "div", 26)(26, "div", 27);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(27, "svg", 20);
    \u0275\u0275element(28, "path", 28)(29, "circle", 29);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(30, "h3", 30);
    \u0275\u0275text(31, "\u041B\u0438\u0447\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(32, AccountPageComponent_div_3_app_icon_button_32_Template, 4, 0, "app-icon-button", 31)(33, AccountPageComponent_div_3_div_33_Template, 5, 2, "div", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 33)(35, "div", 34)(36, "span", 35);
    \u0275\u0275text(37, "\u0418\u043C\u044F:");
    \u0275\u0275elementEnd();
    \u0275\u0275template(38, AccountPageComponent_div_3_span_38_Template, 2, 1, "span", 36)(39, AccountPageComponent_div_3_input_39_Template, 1, 1, "input", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 34)(41, "span", 35);
    \u0275\u0275text(42, "\u0424\u0430\u043C\u0438\u043B\u0438\u044F:");
    \u0275\u0275elementEnd();
    \u0275\u0275template(43, AccountPageComponent_div_3_span_43_Template, 2, 1, "span", 36)(44, AccountPageComponent_div_3_input_44_Template, 1, 1, "input", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 34)(46, "span", 35);
    \u0275\u0275text(47, "Email:");
    \u0275\u0275elementEnd();
    \u0275\u0275template(48, AccountPageComponent_div_3_span_48_Template, 2, 1, "span", 36)(49, AccountPageComponent_div_3_input_49_Template, 1, 1, "input", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "div", 34)(51, "span", 35);
    \u0275\u0275text(52, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D:");
    \u0275\u0275elementEnd();
    \u0275\u0275template(53, AccountPageComponent_div_3_span_53_Template, 3, 3, "span", 36)(54, AccountPageComponent_div_3_input_54_Template, 1, 1, "input", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "div", 34)(56, "span", 35);
    \u0275\u0275text(57, "\u0420\u043E\u043B\u044C:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "span", 41);
    \u0275\u0275text(59);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "div", 42)(61, "span", 35);
    \u0275\u0275text(62, "\u0414\u0430\u0442\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "span", 41);
    \u0275\u0275text(64);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(65, "div", 24)(66, "div", 25)(67, "div", 26)(68, "div", 27);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(69, "svg", 20);
    \u0275\u0275element(70, "rect", 43)(71, "path", 44);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(72, "h3", 30);
    \u0275\u0275text(73, "\u0411\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u044C");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(74, AccountPageComponent_div_3_app_icon_button_74_Template, 4, 0, "app-icon-button", 45)(75, AccountPageComponent_div_3_div_75_Template, 5, 3, "div", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275template(76, AccountPageComponent_div_3_div_76_Template, 6, 0, "div", 46)(77, AccountPageComponent_div_3_div_77_Template, 15, 5, "div", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "div", 48)(79, "div", 25)(80, "div", 26)(81, "div", 27);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(82, "svg", 20);
    \u0275\u0275element(83, "path", 49);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(84, "h3", 30);
    \u0275\u0275text(85, "\u0418\u0441\u0442\u043E\u0440\u0438\u044F \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0439");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(86, "div", 50)(87, "table", 51)(88, "thead")(89, "tr")(90, "th", 52);
    \u0275\u0275text(91, "ID \u043F\u043B\u0430\u0442\u0435\u0436\u0430");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(92, "th", 53);
    \u0275\u0275text(93, "\u041A\u043B\u0438\u0435\u043D\u0442");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "th", 54);
    \u0275\u0275text(95, "\u0421\u0443\u043C\u043C\u0430");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "th", 55);
    \u0275\u0275text(97, "\u0411\u043E\u043D\u0443\u0441\u044B");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(98, "th", 56);
    \u0275\u0275text(99, "\u0421\u043F\u043E\u0441\u043E\u0431 \u043E\u043F\u043B\u0430\u0442\u044B");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(100, "th", 57);
    \u0275\u0275text(101, "\u0421\u0442\u0430\u0442\u0443\u0441");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(102, "th", 58);
    \u0275\u0275text(103, "\u0414\u0430\u0442\u0430 \u0438 \u0432\u0440\u0435\u043C\u044F");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(104, "tbody");
    \u0275\u0275template(105, AccountPageComponent_div_3_tr_105_Template, 34, 18, "tr", 59);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(106, AccountPageComponent_div_3_div_106_Template, 7, 0, "div", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(107, "div", 61);
    \u0275\u0275template(108, AccountPageComponent_div_3_div_108_Template, 40, 18, "div", 62)(109, AccountPageComponent_div_3_div_109_Template, 7, 0, "div", 63);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r0.getInitials(), " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r0.profile.active);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.getFullName());
    \u0275\u0275advance();
    \u0275\u0275property("badgeType", ctx_r0.getStatusBadgeType(ctx_r0.profile.active));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getStatusLabel(ctx_r0.profile.active), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.profile.email);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.profile.phone);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.getRoleLabel(ctx_r0.profile.roles));
    \u0275\u0275advance(10);
    \u0275\u0275property("ngIf", !ctx_r0.isEditingPersonal);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isEditingPersonal);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", !ctx_r0.isEditingPersonal);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isEditingPersonal);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", !ctx_r0.isEditingPersonal);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isEditingPersonal);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", !ctx_r0.isEditingPersonal);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isEditingPersonal);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", !ctx_r0.isEditingPersonal);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isEditingPersonal);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.getRoleLabel(ctx_r0.profile.roles));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.formatDate(ctx_r0.profile.createdAt));
    \u0275\u0275advance(10);
    \u0275\u0275property("ngIf", !ctx_r0.isEditingPassword);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isEditingPassword);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isEditingPassword);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isEditingPassword);
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
var AccountPageComponent = class _AccountPageComponent {
  pageHeaderService = inject(PageHeaderService);
  profileService = inject(ProfileService);
  toastService = inject(ToastService);
  transactionModalService = inject(TransactionModalService);
  router = inject(Router);
  destroy$ = new Subject();
  // Profile data
  profile = null;
  isLoading = true;
  // User payments (mock data for now)
  userPayments = [];
  expandedMobilePaymentCards = /* @__PURE__ */ new Set();
  // Edit states
  isEditingPersonal = false;
  isSavingPersonal = false;
  editedPersonal = {
    firstName: "",
    lastName: "",
    email: "",
    phone: ""
  };
  isEditingPassword = false;
  isSavingPassword = false;
  passwordData = {
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  };
  passwordError = null;
  ngOnInit() {
    this.pageHeaderService.setPageHeader("\u041B\u0438\u0447\u043D\u044B\u0439 \u043A\u0430\u0431\u0438\u043D\u0435\u0442", [
      { label: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F", route: "/home" },
      { label: "\u041F\u0440\u043E\u0444\u0438\u043B\u044C" }
    ]);
    this.loadProfile();
    this.transactionModalService.transactionComplete$.pipe(takeUntil(this.destroy$)).subscribe(() => {
      const currentUrl = this.router.url;
      if (currentUrl === "/profile" || currentUrl.startsWith("/profile")) {
        this.loadProfile();
      }
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  loadProfile() {
    this.isLoading = true;
    this.profileService.getProfile().subscribe({
      next: (profile) => {
        console.log("[AccountPage] Profile loaded:", profile);
        console.log("[AccountPage] Profile firstName:", profile.firstName);
        console.log("[AccountPage] Profile lastName:", profile.lastName);
        console.log("[AccountPage] Profile email:", profile.email);
        this.profile = profile;
        this.isLoading = false;
        this.loadUserTransactions();
      },
      error: (err) => {
        console.error("[AccountPage] Error loading profile:", err);
        const errorMessage = err.error?.message || "\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u043F\u0440\u043E\u0444\u0438\u043B\u044F";
        this.toastService.error(errorMessage);
        this.isLoading = false;
      }
    });
  }
  getFullName() {
    if (!this.profile)
      return "";
    return `${this.profile.firstName} ${this.profile.lastName}`;
  }
  getInitials(name) {
    if (name) {
      const parts = name.split(" ");
      return parts.map((p) => p.charAt(0)).join("").toUpperCase().slice(0, 2);
    }
    if (!this.profile)
      return "";
    return `${this.profile.firstName.charAt(0)}${this.profile.lastName.charAt(0)}`.toUpperCase();
  }
  getStatusBadgeType(active) {
    return active ? "success" : "danger";
  }
  getStatusLabel(active) {
    return active ? "\u0410\u043A\u0442\u0438\u0432\u043D\u044B\u0439" : "\u041D\u0435\u0430\u043A\u0442\u0438\u0432\u043D\u044B\u0439";
  }
  getRoleLabel(roles) {
    if (roles.includes("ADMIN"))
      return "\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440";
    if (roles.includes("MANAGER"))
      return "\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440";
    return "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C";
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
  // Personal Data Editing
  startEditPersonal() {
    if (!this.profile)
      return;
    this.editedPersonal = {
      firstName: this.profile.firstName,
      lastName: this.profile.lastName,
      email: this.profile.email,
      phone: this.profile.phone || ""
    };
    this.isEditingPersonal = true;
  }
  savePersonal() {
    if (!this.profile)
      return;
    this.isSavingPersonal = true;
    const updateData = {
      email: this.editedPersonal.email,
      firstName: this.editedPersonal.firstName,
      lastName: this.editedPersonal.lastName,
      phone: this.editedPersonal.phone || void 0
    };
    this.profileService.updateProfile(updateData).subscribe({
      next: (updatedProfile) => {
        this.profile = updatedProfile;
        this.isEditingPersonal = false;
        this.isSavingPersonal = false;
        this.toastService.success("\u041F\u0440\u043E\u0444\u0438\u043B\u044C \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D");
      },
      error: (err) => {
        const errorMessage = err.error?.message || "\u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F \u043F\u0440\u043E\u0444\u0438\u043B\u044F";
        this.toastService.error(errorMessage);
        this.isSavingPersonal = false;
      }
    });
  }
  cancelEditPersonal() {
    this.isEditingPersonal = false;
    this.editedPersonal = {
      firstName: "",
      lastName: "",
      email: "",
      phone: ""
    };
  }
  // Password Editing
  startEditPassword() {
    this.passwordData = {
      currentPassword: "",
      newPassword: "",
      confirmPassword: ""
    };
    this.isEditingPassword = true;
    this.passwordError = null;
  }
  savePassword() {
    if (!this.isPasswordFormValid())
      return;
    this.isSavingPassword = true;
    this.passwordError = null;
    const passwordRequest = {
      currentPassword: this.passwordData.currentPassword,
      newPassword: this.passwordData.newPassword,
      confirmPassword: this.passwordData.confirmPassword
    };
    this.profileService.changePassword(passwordRequest).subscribe({
      next: () => {
        this.isEditingPassword = false;
        this.isSavingPassword = false;
        this.passwordData = {
          currentPassword: "",
          newPassword: "",
          confirmPassword: ""
        };
        this.toastService.success("\u041F\u0430\u0440\u043E\u043B\u044C \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0438\u0437\u043C\u0435\u043D\u0435\u043D");
      },
      error: (err) => {
        const errorMessage = err.error?.message || "\u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u043C\u0435\u043D\u044B \u043F\u0430\u0440\u043E\u043B\u044F";
        this.passwordError = errorMessage;
        this.toastService.error(errorMessage);
        this.isSavingPassword = false;
      }
    });
  }
  cancelEditPassword() {
    this.isEditingPassword = false;
    this.passwordError = null;
    this.passwordData = {
      currentPassword: "",
      newPassword: "",
      confirmPassword: ""
    };
  }
  isPasswordFormValid() {
    return !!(this.passwordData.currentPassword && this.passwordData.newPassword && this.passwordData.confirmPassword && this.passwordData.newPassword === this.passwordData.confirmPassword && this.passwordData.newPassword.length >= 6);
  }
  loadUserTransactions() {
    this.profileService.getUserTransactions().subscribe({
      next: (transactions) => {
        console.log("[AccountPage] User transactions loaded:", transactions);
        this.userPayments = transactions.map((t) => this.mapTransactionToPayment(t));
      },
      error: (err) => {
        console.error("[AccountPage] Error loading user transactions:", err);
        this.userPayments = [];
      }
    });
  }
  mapTransactionToPayment(transaction) {
    const date = new Date(transaction.createdAt);
    const dateStr = date.toLocaleDateString("ru-RU", { day: "2-digit", month: "2-digit", year: "numeric" });
    const timeStr = date.toLocaleTimeString("ru-RU", { hour: "2-digit", minute: "2-digit" });
    let paymentMethod = "cash";
    if (transaction.paymentMethod) {
      const method = transaction.paymentMethod.toLowerCase();
      if (method.includes("card") || method.includes("\u043A\u0430\u0440\u0442")) {
        paymentMethod = "card";
      } else if (method.includes("transfer") || method.includes("\u043F\u0435\u0440\u0435\u0432\u043E\u0434")) {
        paymentMethod = "transfer";
      }
    }
    return {
      id: transaction.txId,
      // Keep full txId for display
      txId: transaction.txId,
      // Keep full txId for API calls
      clientId: transaction.clientId,
      clientName: transaction.clientName,
      clientPhone: transaction.clientPhone,
      amount: transaction.amount,
      bonusEarned: transaction.bonusGranted,
      bonusUsed: transaction.bonusUsed,
      bonusRevoked: transaction.bonusRevoked || 0,
      paymentMethod,
      isRefund: transaction.status === "REFUNDED" || transaction.refundedPaymentTxId !== null,
      date: dateStr,
      time: timeStr
    };
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
  selectedPaymentSearchResult = null;
  openPaymentView(paymentId) {
    const payment = this.userPayments.find((p) => p.txId === paymentId);
    if (payment) {
      this.selectedPaymentSearchResult = {
        txId: payment.txId,
        clientId: payment.clientId,
        clientName: payment.clientName,
        clientPhone: payment.clientPhone,
        clientEmail: null,
        amount: payment.amount,
        status: payment.isRefund ? "REFUNDED" : "COMPLETED",
        paymentMethod: payment.paymentMethod?.toUpperCase(),
        initiatedBy: null,
        createdAt: payment.date + "T" + payment.time,
        refundedPaymentTxId: null,
        bonusGranted: payment.bonusEarned,
        bonusUsed: payment.bonusUsed,
        bonusRevoked: payment.bonusRevoked,
        refundReason: null
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
    this.loadUserTransactions();
  }
  static \u0275fac = function AccountPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AccountPageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AccountPageComponent, selectors: [["app-account-page"]], decls: 5, vars: 5, consts: [[1, "page-wrapper"], [1, "profile-container-wrapper"], ["class", "page-loading-container", 4, "ngIf"], ["class", "profile-container", 4, "ngIf"], [3, "visibleChange", "paymentUpdated", "refundedPaymentClick", "visible", "paymentTxId", "paymentSearchResult"], [1, "page-loading-container"], ["type", "logo", "size", "large", 3, "visible", "overlay"], [1, "profile-container"], [1, "profile-header-card"], [1, "profile-header-content"], [1, "avatar-wrapper"], [1, "avatar-large"], [1, "status-indicator"], [1, "profile-main-info"], [1, "name-row"], [1, "profile-name"], ["size", "medium", 3, "badgeType"], [1, "profile-email"], ["class", "profile-phone", 4, "ngIf"], [1, "role-badge"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none"], ["d", "M12 2L2 7l10 5 10-5-10-5z", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M2 17l10 5 10-5", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M2 12l10 5 10-5", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "info-card"], [1, "card-header"], [1, "card-header-left"], [1, "card-icon"], ["d", "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2", "stroke", "currentColor", "stroke-width", "1.5"], ["cx", "12", "cy", "7", "r", "4", "stroke", "currentColor", "stroke-width", "1.5"], [1, "card-title"], ["iconButtonType", "edit", "size", "large", "tooltip", "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C", 3, "onClick", 4, "ngIf"], ["class", "card-actions", 4, "ngIf"], [1, "info-content"], [1, "info-row"], [1, "info-label"], ["class", "info-value", 4, "ngIf"], ["class", "info-input", "placeholder", "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043C\u044F", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["class", "info-input", "placeholder", "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0444\u0430\u043C\u0438\u043B\u0438\u044E", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["class", "info-input", "type", "email", "placeholder", "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 email", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["class", "info-input", "type", "tel", "placeholder", "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043B\u0435\u0444\u043E\u043D", 3, "ngModel", "ngModelChange", 4, "ngIf"], [1, "info-value"], [1, "info-row", "readonly"], ["x", "3", "y", "11", "width", "18", "height", "11", "rx", "2", "stroke", "currentColor", "stroke-width", "1.5"], ["d", "M7 11V7a5 5 0 0110 0v4", "stroke", "currentColor", "stroke-width", "1.5"], ["iconButtonType", "edit", "size", "large", "tooltip", "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C", 3, "onClick", 4, "ngIf"], ["class", "info-content", 4, "ngIf"], ["class", "password-form", 4, "ngIf"], [1, "activity-card"], ["d", "M22 12h-4l-3 9L9 3l-3 9H2", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "payments-table-container", "desktop-view"], [1, "payments-table"], [1, "th-id"], [1, "th-client"], [1, "th-amount"], [1, "th-bonuses"], [1, "th-method"], [1, "th-status"], [1, "th-date"], ["class", "payment-row", 4, "ngFor", "ngForOf"], ["class", "empty-state", 4, "ngIf"], [1, "mobile-payments-cards", "mobile-view"], ["class", "mobile-payment-card", 4, "ngFor", "ngForOf"], ["class", "empty-state mobile-view", 4, "ngIf"], [1, "profile-phone"], ["iconButtonType", "edit", "size", "large", "tooltip", "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C", 3, "onClick"], ["viewBox", "0 0 24 24", "fill", "none"], ["d", "M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "card-actions"], ["buttonType", "ghost", "size", "medium", 3, "onClick", "disabled"], ["buttonType", "primary", "size", "medium", 3, "onClick", "loading"], ["placeholder", "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043C\u044F", 1, "info-input", 3, "ngModelChange", "ngModel"], ["placeholder", "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0444\u0430\u043C\u0438\u043B\u0438\u044E", 1, "info-input", 3, "ngModelChange", "ngModel"], ["type", "email", "placeholder", "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 email", 1, "info-input", 3, "ngModelChange", "ngModel"], ["type", "tel", "placeholder", "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043B\u0435\u0444\u043E\u043D", 1, "info-input", 3, "ngModelChange", "ngModel"], ["iconButtonType", "edit", "size", "large", "tooltip", "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C", 3, "onClick"], ["buttonType", "primary", "size", "medium", 3, "onClick", "disabled", "loading"], [1, "password-form"], ["class", "error-message server-error", 4, "ngIf"], [1, "form-group"], [1, "form-label"], ["type", "password", "placeholder", "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043A\u0443\u0449\u0438\u0439 \u043F\u0430\u0440\u043E\u043B\u044C", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "password", "placeholder", "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u043E\u0432\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C (\u043C\u0438\u043D\u0438\u043C\u0443\u043C 6 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432)", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "password", "placeholder", "\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u043D\u043E\u0432\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C", 1, "form-input", 3, "ngModelChange", "ngModel"], ["class", "error-message", 4, "ngIf"], [1, "error-message", "server-error"], [1, "error-message"], [1, "payment-row"], [1, "td-id"], [1, "payment-id", "clickable", 3, "click"], [1, "td-client"], [1, "client-cell"], [1, "client-avatar"], [1, "client-info"], [1, "client-name-link", 3, "routerLink"], [1, "client-name"], [1, "client-phone"], [1, "td-amount"], [1, "amount-value"], [1, "td-bonuses"], [1, "bonus-info"], ["badgeType", "bonusGranted", "size", "medium", "icon", "star", "class", "bonus-badge", 4, "ngIf"], ["badgeType", "bonusUsed", "size", "medium", "icon", "check", "class", "bonus-badge", 4, "ngIf"], ["badgeType", "refund", "size", "medium", "icon", "refund", "class", "bonus-badge", 4, "ngIf"], ["class", "bonus-none", 4, "ngIf"], [1, "td-method"], ["badgeType", "paymentMethod", "size", "medium", 3, "paymentMethod"], [1, "td-status"], ["size", "medium", 3, "badgeType", "icon"], [1, "td-date"], [1, "date-info"], [1, "date-text"], [1, "time-text"], ["badgeType", "bonusGranted", "size", "medium", "icon", "star", 1, "bonus-badge"], ["badgeType", "bonusUsed", "size", "medium", "icon", "check", 1, "bonus-badge"], ["badgeType", "refund", "size", "medium", "icon", "refund", 1, "bonus-badge"], [1, "bonus-none"], [1, "empty-state"], ["d", "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2", "stroke", "currentColor", "stroke-width", "1.5"], ["x", "9", "y", "3", "width", "6", "height", "4", "rx", "1", "stroke", "currentColor", "stroke-width", "1.5"], ["d", "M9 12h6M9 16h6", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round"], [1, "mobile-payment-card"], [1, "mobile-payment-card-header", 3, "click"], [1, "mobile-payment-card-main"], [1, "mobile-payment-id", "clickable", 3, "click"], [1, "mobile-payment-amount"], [1, "mobile-payment-expand"], ["d", "M6 9l6 6 6-6", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "mobile-payment-details"], [1, "detail-row"], [1, "detail-label"], [1, "detail-value", "link", 3, "routerLink"], [1, "detail-value"], [1, "detail-value", "bonus-info"], ["badgeType", "bonusGranted", "size", "small", 4, "ngIf"], ["badgeType", "bonusUsed", "size", "small", 4, "ngIf"], ["badgeType", "refund", "size", "small", 4, "ngIf"], [4, "ngIf"], ["badgeType", "paymentMethod", "size", "small", 3, "paymentMethod"], ["badgeType", "bonusGranted", "size", "small"], ["badgeType", "bonusUsed", "size", "small"], ["badgeType", "refund", "size", "small"], [1, "empty-state", "mobile-view"]], template: function AccountPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275template(2, AccountPageComponent_div_2_Template, 2, 2, "div", 2)(3, AccountPageComponent_div_3_Template, 110, 29, "div", 3);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "app-payment-view-modal", 4);
      \u0275\u0275listener("visibleChange", function AccountPageComponent_Template_app_payment_view_modal_visibleChange_4_listener() {
        return ctx.closePaymentView();
      })("paymentUpdated", function AccountPageComponent_Template_app_payment_view_modal_paymentUpdated_4_listener() {
        return ctx.onPaymentUpdated();
      })("refundedPaymentClick", function AccountPageComponent_Template_app_payment_view_modal_refundedPaymentClick_4_listener($event) {
        return ctx.openPaymentView($event);
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.profile && !ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("visible", ctx.showPaymentViewModal)("paymentTxId", ctx.selectedPaymentTxId)("paymentSearchResult", ctx.selectedPaymentSearchResult);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, RouterModule, RouterLink, BadgeComponent, ButtonComponent, IconButtonComponent, LoaderComponent, PaymentViewModalComponent, PhoneFormatPipe], styles: ["\n\n.page-wrapper[_ngcontent-%COMP%] {\n  min-height: 100%;\n  margin: -2rem;\n  padding: 2rem;\n  background:\n    linear-gradient(\n      180deg,\n      #f0fdf4 0%,\n      #f8fafc 50%,\n      #f8fafc 100%);\n}\n.profile-container-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 400px;\n}\n.page-loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 60vh;\n  width: 100%;\n}\n.profile-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.profile-header-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 20px;\n  padding: 2rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n}\n.profile-header-content[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 2rem;\n  align-items: flex-start;\n}\n.avatar-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  flex-shrink: 0;\n}\n.avatar-large[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  border-radius: 20px;\n  background:\n    linear-gradient(\n      135deg,\n      #16A34A 0%,\n      #22c55e 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 2rem;\n  font-weight: 700;\n  color: white;\n}\n.status-indicator[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  background: #94a3b8;\n  border: 3px solid white;\n}\n.status-indicator.active[_ngcontent-%COMP%] {\n  background: #22c55e;\n}\n.profile-main-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.name-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-bottom: 0.75rem;\n}\n.profile-name[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #1f2937;\n  margin: 0;\n}\n.profile-email[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #64748b;\n  margin: 0.5rem 0;\n}\n.profile-phone[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #64748b;\n  margin: 0.5rem 0;\n}\n.role-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  background: #f0fdf4;\n  color: #16A34A;\n  padding: 0.5rem 1rem;\n  border-radius: 12px;\n  font-weight: 600;\n  font-size: 0.9375rem;\n  margin-top: 0.75rem;\n}\n.role-badge[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n}\n.info-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 20px;\n  padding: 2rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n}\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1.5rem;\n}\n.card-header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.card-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #f0fdf4,\n      #dcfce7);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #16A34A;\n}\n.card-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n.card-title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0;\n}\n.card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n}\n.info-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.info-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 0.75rem 0;\n  border-bottom: 1px solid #f1f5f9;\n}\n.info-row.readonly[_ngcontent-%COMP%] {\n  opacity: 0.7;\n}\n.info-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.info-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #64748b;\n  min-width: 150px;\n  font-size: 0.9375rem;\n}\n.info-value[_ngcontent-%COMP%] {\n  color: #1f2937;\n  font-size: 0.9375rem;\n}\n.info-input[_ngcontent-%COMP%] {\n  flex: 1;\n  max-width: 300px;\n  padding: 0.625rem 1rem;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 10px;\n  font-size: 0.9375rem;\n  font-family: inherit;\n  background:\n    linear-gradient(\n      to bottom,\n      #ffffff,\n      #f8fafc);\n  color: #1f2937;\n  font-weight: 500;\n  transition: all 0.2s ease;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);\n}\n.info-input[_ngcontent-%COMP%]:hover {\n  border-color: #cbd5e1;\n  background:\n    linear-gradient(\n      to bottom,\n      #ffffff,\n      #f1f5f9);\n}\n.info-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #22c55e;\n  background: white;\n  box-shadow: 0 0 0 4px rgba(34, 197, 94, 0.12), 0 2px 4px rgba(0, 0, 0, 0.05);\n}\n.info-input[_ngcontent-%COMP%]::placeholder {\n  color: #94a3b8;\n  font-weight: 400;\n}\n.password-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.form-label[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #475569;\n}\n.form-input[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 400px;\n  padding: 0.75rem 1rem;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 10px;\n  font-size: 0.9375rem;\n  font-family: inherit;\n  background:\n    linear-gradient(\n      to bottom,\n      #ffffff,\n      #f8fafc);\n  color: #1f2937;\n  font-weight: 500;\n  transition: all 0.2s ease;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);\n}\n.form-input[_ngcontent-%COMP%]:hover {\n  border-color: #cbd5e1;\n  background:\n    linear-gradient(\n      to bottom,\n      #ffffff,\n      #f1f5f9);\n}\n.form-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #22c55e;\n  background: white;\n  box-shadow: 0 0 0 4px rgba(34, 197, 94, 0.12), 0 2px 4px rgba(0, 0, 0, 0.05);\n}\n.form-input[_ngcontent-%COMP%]::placeholder {\n  color: #94a3b8;\n  font-weight: 400;\n}\n.error-message[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #dc2626;\n  margin-top: 0.25rem;\n}\n.error-message.server-error[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  border-radius: 8px;\n  margin-bottom: 1rem;\n}\n.activity-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 20px;\n  padding: 2rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n}\n.payments-table-container[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.payments-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.payments-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: #f8fafc;\n}\n.payments-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 1rem;\n  text-align: left;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #64748b;\n  border-bottom: 1px solid #e2e8f0;\n}\n.payments-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border-bottom: 1px solid #f1f5f9;\n}\n.payments-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n.payment-id[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-weight: 600;\n  color: #64748b;\n  font-size: 0.875rem;\n}\n.payment-id.clickable[_ngcontent-%COMP%] {\n  color: #64748b;\n  cursor: pointer;\n  text-decoration: underline;\n  transition: color 0.2s;\n}\n.payment-id.clickable[_ngcontent-%COMP%]:hover {\n  color: #475569;\n}\n.mobile-payment-id.clickable[_ngcontent-%COMP%] {\n  color: #64748b;\n  cursor: pointer;\n  text-decoration: underline;\n}\n.client-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.client-avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  background:\n    linear-gradient(\n      135deg,\n      #f0fdf4,\n      #dcfce7);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n  color: #16A34A;\n  font-size: 0.875rem;\n  flex-shrink: 0;\n}\n.client-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.client-name-link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #1f2937;\n  font-weight: 600;\n  font-size: 0.9375rem;\n  transition: color 0.2s;\n  cursor: pointer;\n  display: inline-block;\n}\n.client-name-link[_ngcontent-%COMP%]:hover {\n  color: #16A34A;\n}\n.client-name-link[_ngcontent-%COMP%]   .client-name[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.client-phone[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: #64748b;\n}\n.amount-value[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 600;\n  color: #16A34A;\n}\n.bonus-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n}\n.bonus-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.bonus-none[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  font-size: 0.875rem;\n}\n.date-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.date-text[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #1f2937;\n  font-weight: 500;\n}\n.time-text[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: #64748b;\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem 1rem;\n  color: #94a3b8;\n  gap: 1rem;\n}\n.empty-state[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n}\n.empty-state[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.9375rem;\n}\n.mobile-payments-cards[_ngcontent-%COMP%] {\n  display: none;\n  flex-direction: column;\n  gap: 1rem;\n}\n.mobile-payment-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 1rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n  border: 1px solid #e5e7eb;\n}\n.mobile-payment-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  cursor: pointer;\n}\n.mobile-payment-card-main[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  flex: 1;\n}\n.mobile-payment-id[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #64748b;\n}\n.mobile-payment-amount[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #16A34A;\n}\n.mobile-payment-expand[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #64748b;\n  transition: transform 0.2s;\n}\n.mobile-payment-expand.expanded[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.mobile-payment-details[_ngcontent-%COMP%] {\n  margin-top: 0.75rem;\n  padding-top: 0.75rem;\n  border-top: 1px solid #e5e7eb;\n  display: none;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.mobile-payment-details.expanded[_ngcontent-%COMP%] {\n  display: flex;\n}\n.detail-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 1rem;\n}\n.detail-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #64748b;\n  font-weight: 500;\n  flex-shrink: 0;\n}\n.detail-value[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #1f2937;\n  font-weight: 500;\n  text-align: right;\n  flex: 1;\n}\n.detail-value.link[_ngcontent-%COMP%] {\n  color: #16A34A;\n  text-decoration: none;\n}\n.detail-value.link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.detail-value.bonus-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  justify-content: flex-end;\n  flex-wrap: wrap;\n}\n@media (max-width: 768px) {\n  .page-wrapper[_ngcontent-%COMP%] {\n    margin: -1rem;\n    padding: 1rem;\n  }\n  .profile-header-card[_ngcontent-%COMP%] {\n    border-radius: 12px;\n    margin-bottom: 1rem;\n  }\n  .profile-header-content[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n    padding: 1.5rem 1rem;\n  }\n  .avatar-large[_ngcontent-%COMP%] {\n    width: 80px;\n    height: 80px;\n    font-size: 1.5rem;\n  }\n  .profile-main-info[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: center;\n  }\n  .name-row[_ngcontent-%COMP%] {\n    justify-content: center;\n    flex-wrap: wrap;\n  }\n  .profile-name[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n  .info-card[_ngcontent-%COMP%], \n   .activity-card[_ngcontent-%COMP%] {\n    border-radius: 12px;\n    padding: 1.25rem 1rem;\n  }\n  .card-header[_ngcontent-%COMP%] {\n    margin-bottom: 1rem;\n  }\n  .card-title[_ngcontent-%COMP%] {\n    font-size: 1.125rem;\n  }\n  .info-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 0.5rem;\n    padding: 0.75rem 0;\n  }\n  .info-label[_ngcontent-%COMP%] {\n    min-width: auto;\n    font-size: 0.875rem;\n  }\n  .info-value[_ngcontent-%COMP%] {\n    font-size: 0.875rem;\n  }\n  .info-input[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n  .form-input[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n  .desktop-view[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .mobile-view[_ngcontent-%COMP%] {\n    display: flex !important;\n  }\n  .payments-table-container[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n}\n@media (min-width: 769px) {\n  .mobile-view[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .desktop-view[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n}\n/*# sourceMappingURL=account-page.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccountPageComponent, [{
    type: Component,
    args: [{ selector: "app-account-page", standalone: true, imports: [CommonModule, FormsModule, RouterModule, BadgeComponent, ButtonComponent, IconButtonComponent, LoaderComponent, PaymentViewModalComponent, PhoneFormatPipe], template: `
    <div class="page-wrapper">
      <div class="profile-container-wrapper">
        <!-- Loading State -->
        <div class="page-loading-container" *ngIf="isLoading">
          <app-loader [visible]="true" [overlay]="false" type="logo" size="large"></app-loader>
        </div>
        
        <div class="profile-container" *ngIf="profile && !isLoading">
        
        <!-- Profile Header Card -->
        <div class="profile-header-card">
          <div class="profile-header-content">
            <div class="avatar-wrapper">
              <div class="avatar-large">
                {{ getInitials() }}
              </div>
              <div class="status-indicator" [class.active]="profile.active"></div>
            </div>
            <div class="profile-main-info">
              <div class="name-row">
                <h1 class="profile-name">{{ getFullName() }}</h1>
                <app-badge 
                  [badgeType]="getStatusBadgeType(profile.active)" 
                  size="medium">
                  {{ getStatusLabel(profile.active) }}
                </app-badge>
              </div>
              <p class="profile-email">{{ profile.email }}</p>
              <p class="profile-phone" *ngIf="profile.phone">{{ profile.phone | phoneFormat }}</p>
              <div class="role-badge">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M2 17l10 5 10-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M2 12l10 5 10-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>{{ getRoleLabel(profile.roles) }}</span>
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
            <app-icon-button
              *ngIf="!isEditingPersonal"
              iconButtonType="edit"
              size="large"
              tooltip="\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C"
              (onClick)="startEditPersonal()">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </app-icon-button>
            <div class="card-actions" *ngIf="isEditingPersonal">
              <app-button buttonType="ghost" size="medium" (onClick)="cancelEditPersonal()" [disabled]="isSavingPersonal">
                \u041E\u0442\u043C\u0435\u043D\u0430
              </app-button>
              <app-button buttonType="primary" size="medium" (onClick)="savePersonal()" [loading]="isSavingPersonal">
                \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C
              </app-button>
            </div>
          </div>
          <div class="info-content">
            <div class="info-row">
              <span class="info-label">\u0418\u043C\u044F:</span>
              <span class="info-value" *ngIf="!isEditingPersonal">{{ profile.firstName }}</span>
              <input class="info-input" *ngIf="isEditingPersonal" [(ngModel)]="editedPersonal.firstName" placeholder="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043C\u044F">
            </div>
            <div class="info-row">
              <span class="info-label">\u0424\u0430\u043C\u0438\u043B\u0438\u044F:</span>
              <span class="info-value" *ngIf="!isEditingPersonal">{{ profile.lastName }}</span>
              <input class="info-input" *ngIf="isEditingPersonal" [(ngModel)]="editedPersonal.lastName" placeholder="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0444\u0430\u043C\u0438\u043B\u0438\u044E">
            </div>
            <div class="info-row">
              <span class="info-label">Email:</span>
              <span class="info-value" *ngIf="!isEditingPersonal">{{ profile.email }}</span>
              <input class="info-input" *ngIf="isEditingPersonal" [(ngModel)]="editedPersonal.email" type="email" placeholder="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 email">
            </div>
            <div class="info-row">
              <span class="info-label">\u0422\u0435\u043B\u0435\u0444\u043E\u043D:</span>
              <span class="info-value" *ngIf="!isEditingPersonal">{{ (profile.phone | phoneFormat) || '\u2014' }}</span>
              <input class="info-input" *ngIf="isEditingPersonal" [(ngModel)]="editedPersonal.phone" type="tel" placeholder="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043B\u0435\u0444\u043E\u043D">
            </div>
            <div class="info-row">
              <span class="info-label">\u0420\u043E\u043B\u044C:</span>
              <span class="info-value">{{ getRoleLabel(profile.roles) }}</span>
            </div>
            <div class="info-row readonly">
              <span class="info-label">\u0414\u0430\u0442\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438:</span>
              <span class="info-value">{{ formatDate(profile.createdAt) }}</span>
            </div>
          </div>
        </div>

        <!-- Password Change Card -->
        <div class="info-card">
          <div class="card-header">
            <div class="card-header-left">
              <div class="card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" stroke-width="1.5"/>
                  <path d="M7 11V7a5 5 0 0110 0v4" stroke="currentColor" stroke-width="1.5"/>
                </svg>
              </div>
              <h3 class="card-title">\u0411\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u044C</h3>
            </div>
            <app-icon-button
              *ngIf="!isEditingPassword"
              iconButtonType="edit"
              size="large"
              tooltip="\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C"
              (onClick)="startEditPassword()">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </app-icon-button>
            <div class="card-actions" *ngIf="isEditingPassword">
              <app-button buttonType="ghost" size="medium" (onClick)="cancelEditPassword()" [disabled]="isSavingPassword">
                \u041E\u0442\u043C\u0435\u043D\u0430
              </app-button>
              <app-button buttonType="primary" size="medium" (onClick)="savePassword()" [disabled]="!isPasswordFormValid()" [loading]="isSavingPassword">
                \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C
              </app-button>
            </div>
          </div>
          <div class="info-content" *ngIf="!isEditingPassword">
            <div class="info-row">
              <span class="info-label">\u041F\u0430\u0440\u043E\u043B\u044C:</span>
              <span class="info-value">\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022</span>
            </div>
          </div>
          <div class="password-form" *ngIf="isEditingPassword">
            <div class="error-message server-error" *ngIf="passwordError">
              {{ passwordError }}
            </div>
            <div class="form-group">
              <label class="form-label">\u0422\u0435\u043A\u0443\u0449\u0438\u0439 \u043F\u0430\u0440\u043E\u043B\u044C</label>
              <input 
                type="password" 
                class="form-input" 
                [(ngModel)]="passwordData.currentPassword"
                placeholder="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043A\u0443\u0449\u0438\u0439 \u043F\u0430\u0440\u043E\u043B\u044C">
            </div>
            <div class="form-group">
              <label class="form-label">\u041D\u043E\u0432\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C</label>
              <input 
                type="password" 
                class="form-input" 
                [(ngModel)]="passwordData.newPassword"
                placeholder="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u043E\u0432\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C (\u043C\u0438\u043D\u0438\u043C\u0443\u043C 6 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432)">
            </div>
            <div class="form-group">
              <label class="form-label">\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u043D\u043E\u0432\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C</label>
              <input 
                type="password" 
                class="form-input" 
                [(ngModel)]="passwordData.confirmPassword"
                placeholder="\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u043D\u043E\u0432\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C">
              <div class="error-message" *ngIf="passwordData.newPassword && passwordData.confirmPassword && passwordData.newPassword !== passwordData.confirmPassword">
                \u041F\u0430\u0440\u043E\u043B\u0438 \u043D\u0435 \u0441\u043E\u0432\u043F\u0430\u0434\u0430\u044E\u0442
              </div>
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
                    <span class="payment-id clickable" (click)="openPaymentView(payment.txId)">#{{ payment.txId }}</span>
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
              <div class="mobile-payment-card-header" (click)="toggleMobilePaymentCard(payment.id)">
                <div class="mobile-payment-card-main">
                  <div>
                    <div class="mobile-payment-id clickable" (click)="openPaymentView(payment.txId); $event.stopPropagation()">#{{ payment.txId }}</div>
                    <div class="mobile-payment-amount">{{ formatAmount(payment.amount) }} \u20B8</div>
                  </div>
                </div>
                <div class="mobile-payment-expand" [class.expanded]="isMobilePaymentExpanded(payment.id)">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
              </div>
              <div class="mobile-payment-details" [class.expanded]="isMobilePaymentExpanded(payment.id)">
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
                    <app-badge *ngIf="payment.bonusEarned > 0" badgeType="bonusGranted" size="small">+{{ formatAmount(payment.bonusEarned) }}</app-badge>
                    <app-badge *ngIf="payment.bonusUsed > 0" badgeType="bonusUsed" size="small">-{{ formatAmount(payment.bonusUsed) }}</app-badge>
                    <app-badge *ngIf="payment.bonusRevoked > 0" badgeType="refund" size="small">-{{ formatAmount(payment.bonusRevoked) }}</app-badge>
                    <span *ngIf="payment.bonusEarned === 0 && payment.bonusUsed === 0 && payment.bonusRevoked === 0">\u2014</span>
                  </div>
                </div>
                <div class="detail-row">
                  <span class="detail-label">\u0421\u043F\u043E\u0441\u043E\u0431 \u043E\u043F\u043B\u0430\u0442\u044B:</span>
                  <span class="detail-value">
                    <app-badge 
                      badgeType="paymentMethod" 
                      size="small"
                      [paymentMethod]="getPaymentMethodForBadge(payment.paymentMethod)">
                    </app-badge>
                  </span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">\u0414\u0430\u0442\u0430:</span>
                  <span class="detail-value">{{ payment.date }} {{ payment.time }}</span>
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
      [paymentSearchResult]="selectedPaymentSearchResult"
      (visibleChange)="closePaymentView()"
      (paymentUpdated)="onPaymentUpdated()"
      (refundedPaymentClick)="openPaymentView($event)">
    </app-payment-view-modal>
  `, styles: ["/* angular:styles/component:css;7bb654879a043d1aa1c68fe176b631eac834ebd4063b39d851c7a4792b531c36;/Users/baglan/repo/westwood/westwood-frontend/src/app/features/users/pages/account-page/account-page.component.ts */\n.page-wrapper {\n  min-height: 100%;\n  margin: -2rem;\n  padding: 2rem;\n  background:\n    linear-gradient(\n      180deg,\n      #f0fdf4 0%,\n      #f8fafc 50%,\n      #f8fafc 100%);\n}\n.profile-container-wrapper {\n  position: relative;\n  min-height: 400px;\n}\n.page-loading-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 60vh;\n  width: 100%;\n}\n.profile-container {\n  max-width: 1200px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.profile-header-card {\n  background: white;\n  border-radius: 20px;\n  padding: 2rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n}\n.profile-header-content {\n  display: flex;\n  gap: 2rem;\n  align-items: flex-start;\n}\n.avatar-wrapper {\n  position: relative;\n  flex-shrink: 0;\n}\n.avatar-large {\n  width: 100px;\n  height: 100px;\n  border-radius: 20px;\n  background:\n    linear-gradient(\n      135deg,\n      #16A34A 0%,\n      #22c55e 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 2rem;\n  font-weight: 700;\n  color: white;\n}\n.status-indicator {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  background: #94a3b8;\n  border: 3px solid white;\n}\n.status-indicator.active {\n  background: #22c55e;\n}\n.profile-main-info {\n  flex: 1;\n}\n.name-row {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-bottom: 0.75rem;\n}\n.profile-name {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #1f2937;\n  margin: 0;\n}\n.profile-email {\n  font-size: 1rem;\n  color: #64748b;\n  margin: 0.5rem 0;\n}\n.profile-phone {\n  font-size: 1rem;\n  color: #64748b;\n  margin: 0.5rem 0;\n}\n.role-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  background: #f0fdf4;\n  color: #16A34A;\n  padding: 0.5rem 1rem;\n  border-radius: 12px;\n  font-weight: 600;\n  font-size: 0.9375rem;\n  margin-top: 0.75rem;\n}\n.role-badge svg {\n  width: 18px;\n  height: 18px;\n}\n.info-card {\n  background: white;\n  border-radius: 20px;\n  padding: 2rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n}\n.card-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1.5rem;\n}\n.card-header-left {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.card-icon {\n  width: 40px;\n  height: 40px;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #f0fdf4,\n      #dcfce7);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #16A34A;\n}\n.card-icon svg {\n  width: 20px;\n  height: 20px;\n}\n.card-title {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0;\n}\n.card-actions {\n  display: flex;\n  gap: 0.5rem;\n}\n.info-content {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.info-row {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 0.75rem 0;\n  border-bottom: 1px solid #f1f5f9;\n}\n.info-row.readonly {\n  opacity: 0.7;\n}\n.info-row:last-child {\n  border-bottom: none;\n}\n.info-label {\n  font-weight: 600;\n  color: #64748b;\n  min-width: 150px;\n  font-size: 0.9375rem;\n}\n.info-value {\n  color: #1f2937;\n  font-size: 0.9375rem;\n}\n.info-input {\n  flex: 1;\n  max-width: 300px;\n  padding: 0.625rem 1rem;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 10px;\n  font-size: 0.9375rem;\n  font-family: inherit;\n  background:\n    linear-gradient(\n      to bottom,\n      #ffffff,\n      #f8fafc);\n  color: #1f2937;\n  font-weight: 500;\n  transition: all 0.2s ease;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);\n}\n.info-input:hover {\n  border-color: #cbd5e1;\n  background:\n    linear-gradient(\n      to bottom,\n      #ffffff,\n      #f1f5f9);\n}\n.info-input:focus {\n  outline: none;\n  border-color: #22c55e;\n  background: white;\n  box-shadow: 0 0 0 4px rgba(34, 197, 94, 0.12), 0 2px 4px rgba(0, 0, 0, 0.05);\n}\n.info-input::placeholder {\n  color: #94a3b8;\n  font-weight: 400;\n}\n.password-form {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.form-label {\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #475569;\n}\n.form-input {\n  width: 100%;\n  max-width: 400px;\n  padding: 0.75rem 1rem;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 10px;\n  font-size: 0.9375rem;\n  font-family: inherit;\n  background:\n    linear-gradient(\n      to bottom,\n      #ffffff,\n      #f8fafc);\n  color: #1f2937;\n  font-weight: 500;\n  transition: all 0.2s ease;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);\n}\n.form-input:hover {\n  border-color: #cbd5e1;\n  background:\n    linear-gradient(\n      to bottom,\n      #ffffff,\n      #f1f5f9);\n}\n.form-input:focus {\n  outline: none;\n  border-color: #22c55e;\n  background: white;\n  box-shadow: 0 0 0 4px rgba(34, 197, 94, 0.12), 0 2px 4px rgba(0, 0, 0, 0.05);\n}\n.form-input::placeholder {\n  color: #94a3b8;\n  font-weight: 400;\n}\n.error-message {\n  font-size: 0.8rem;\n  color: #dc2626;\n  margin-top: 0.25rem;\n}\n.error-message.server-error {\n  padding: 0.75rem 1rem;\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  border-radius: 8px;\n  margin-bottom: 1rem;\n}\n.activity-card {\n  background: white;\n  border-radius: 20px;\n  padding: 2rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n}\n.payments-table-container {\n  overflow-x: auto;\n}\n.payments-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.payments-table thead {\n  background: #f8fafc;\n}\n.payments-table th {\n  padding: 1rem;\n  text-align: left;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #64748b;\n  border-bottom: 1px solid #e2e8f0;\n}\n.payments-table td {\n  padding: 1rem;\n  border-bottom: 1px solid #f1f5f9;\n}\n.payments-table tbody tr:hover {\n  background: #f8fafc;\n}\n.payment-id {\n  font-family: monospace;\n  font-weight: 600;\n  color: #64748b;\n  font-size: 0.875rem;\n}\n.payment-id.clickable {\n  color: #64748b;\n  cursor: pointer;\n  text-decoration: underline;\n  transition: color 0.2s;\n}\n.payment-id.clickable:hover {\n  color: #475569;\n}\n.mobile-payment-id.clickable {\n  color: #64748b;\n  cursor: pointer;\n  text-decoration: underline;\n}\n.client-cell {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.client-avatar {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  background:\n    linear-gradient(\n      135deg,\n      #f0fdf4,\n      #dcfce7);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n  color: #16A34A;\n  font-size: 0.875rem;\n  flex-shrink: 0;\n}\n.client-info {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.client-name-link {\n  text-decoration: none;\n  color: #1f2937;\n  font-weight: 600;\n  font-size: 0.9375rem;\n  transition: color 0.2s;\n  cursor: pointer;\n  display: inline-block;\n}\n.client-name-link:hover {\n  color: #16A34A;\n}\n.client-name-link .client-name {\n  cursor: pointer;\n}\n.client-phone {\n  font-size: 0.8125rem;\n  color: #64748b;\n}\n.amount-value {\n  font-size: 0.95rem;\n  font-weight: 600;\n  color: #16A34A;\n}\n.bonus-info {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n}\n.bonus-badge {\n  display: inline-block;\n}\n.bonus-none {\n  color: #94a3b8;\n  font-size: 0.875rem;\n}\n.date-info {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.date-text {\n  font-size: 0.875rem;\n  color: #1f2937;\n  font-weight: 500;\n}\n.time-text {\n  font-size: 0.8125rem;\n  color: #64748b;\n}\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem 1rem;\n  color: #94a3b8;\n  gap: 1rem;\n}\n.empty-state svg {\n  width: 48px;\n  height: 48px;\n}\n.empty-state span {\n  font-size: 0.9375rem;\n}\n.mobile-payments-cards {\n  display: none;\n  flex-direction: column;\n  gap: 1rem;\n}\n.mobile-payment-card {\n  background: white;\n  border-radius: 12px;\n  padding: 1rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n  border: 1px solid #e5e7eb;\n}\n.mobile-payment-card-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  cursor: pointer;\n}\n.mobile-payment-card-main {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  flex: 1;\n}\n.mobile-payment-id {\n  font-family: monospace;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #64748b;\n}\n.mobile-payment-amount {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #16A34A;\n}\n.mobile-payment-expand {\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #64748b;\n  transition: transform 0.2s;\n}\n.mobile-payment-expand.expanded {\n  transform: rotate(180deg);\n}\n.mobile-payment-details {\n  margin-top: 0.75rem;\n  padding-top: 0.75rem;\n  border-top: 1px solid #e5e7eb;\n  display: none;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.mobile-payment-details.expanded {\n  display: flex;\n}\n.detail-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 1rem;\n}\n.detail-label {\n  font-size: 0.875rem;\n  color: #64748b;\n  font-weight: 500;\n  flex-shrink: 0;\n}\n.detail-value {\n  font-size: 0.875rem;\n  color: #1f2937;\n  font-weight: 500;\n  text-align: right;\n  flex: 1;\n}\n.detail-value.link {\n  color: #16A34A;\n  text-decoration: none;\n}\n.detail-value.link:hover {\n  text-decoration: underline;\n}\n.detail-value.bonus-info {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  justify-content: flex-end;\n  flex-wrap: wrap;\n}\n@media (max-width: 768px) {\n  .page-wrapper {\n    margin: -1rem;\n    padding: 1rem;\n  }\n  .profile-header-card {\n    border-radius: 12px;\n    margin-bottom: 1rem;\n  }\n  .profile-header-content {\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n    padding: 1.5rem 1rem;\n  }\n  .avatar-large {\n    width: 80px;\n    height: 80px;\n    font-size: 1.5rem;\n  }\n  .profile-main-info {\n    width: 100%;\n    text-align: center;\n  }\n  .name-row {\n    justify-content: center;\n    flex-wrap: wrap;\n  }\n  .profile-name {\n    font-size: 1.25rem;\n  }\n  .info-card,\n  .activity-card {\n    border-radius: 12px;\n    padding: 1.25rem 1rem;\n  }\n  .card-header {\n    margin-bottom: 1rem;\n  }\n  .card-title {\n    font-size: 1.125rem;\n  }\n  .info-row {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 0.5rem;\n    padding: 0.75rem 0;\n  }\n  .info-label {\n    min-width: auto;\n    font-size: 0.875rem;\n  }\n  .info-value {\n    font-size: 0.875rem;\n  }\n  .info-input {\n    max-width: 100%;\n  }\n  .form-input {\n    max-width: 100%;\n  }\n  .desktop-view {\n    display: none !important;\n  }\n  .mobile-view {\n    display: flex !important;\n  }\n  .payments-table-container {\n    padding: 0;\n  }\n}\n@media (min-width: 769px) {\n  .mobile-view {\n    display: none !important;\n  }\n  .desktop-view {\n    display: block !important;\n  }\n}\n/*# sourceMappingURL=account-page.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AccountPageComponent, { className: "AccountPageComponent", filePath: "src/app/features/users/pages/account-page/account-page.component.ts", lineNumber: 1092 });
})();
export {
  AccountPageComponent
};
//# sourceMappingURL=chunk-R63RLLVK.js.map
