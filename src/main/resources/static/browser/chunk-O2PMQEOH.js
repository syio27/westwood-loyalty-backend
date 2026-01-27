import {
  LinkComponent
} from "./chunk-ZUZR2UA5.js";
import {
  AuthPromoPanelComponent
} from "./chunk-BI4VU43F.js";
import {
  AlertComponent,
  InputComponent
} from "./chunk-MV3LGAS7.js";
import {
  clearError,
  login
} from "./chunk-ZQ7HKAUA.js";
import {
  ButtonComponent,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  RequiredValidator,
  Validators,
  ɵNgNoValidate
} from "./chunk-3N5Z3XGP.js";
import {
  Store,
  selectAuthError,
  selectIsLoading
} from "./chunk-BKXXGTMV.js";
import "./chunk-2T4DCDN7.js";
import {
  ActivatedRoute,
  AsyncPipe,
  CommonModule,
  Component,
  NgIf,
  RouterLink,
  RouterModule,
  Subject,
  inject,
  setClassMetadata,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-MTXXT26T.js";

// src/app/features/auth/pages/login-page/login-page.component.ts
function LoginPageComponent_app_alert_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-alert", 16);
    \u0275\u0275listener("dismissed", function LoginPageComponent_app_alert_9_Template_app_alert_dismissed_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sessionExpired = false);
    });
    \u0275\u0275text(1, " \u0412\u0430\u0448\u0430 \u0441\u0435\u0441\u0441\u0438\u044F \u0438\u0441\u0442\u0435\u043A\u043B\u0430. \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0432\u043E\u0439\u0434\u0438\u0442\u0435 \u0441\u043D\u043E\u0432\u0430. ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("title", "\u0421\u0435\u0441\u0441\u0438\u044F \u0438\u0441\u0442\u0435\u043A\u043B\u0430")("dismissible", true);
  }
}
function LoginPageComponent_app_alert_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-alert", 17);
    \u0275\u0275listener("dismissed", function LoginPageComponent_app_alert_10_Template_app_alert_dismissed_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClearError());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const error_r4 = ctx.ngIf;
    \u0275\u0275property("title", "\u041E\u0448\u0438\u0431\u043A\u0430 \u0432\u0445\u043E\u0434\u0430")("dismissible", true);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", error_r4, " ");
  }
}
var LoginPageComponent = class _LoginPageComponent {
  fb = inject(FormBuilder);
  store = inject(Store);
  route = inject(ActivatedRoute);
  destroy$ = new Subject();
  loginForm;
  isLoading$;
  error$;
  sessionExpired = false;
  constructor() {
    this.loginForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]]
    });
    this.isLoading$ = this.store.select(selectIsLoading);
    this.error$ = this.store.select(selectAuthError);
  }
  ngOnInit() {
    this.store.dispatch(clearError());
    this.sessionExpired = false;
    this.route.queryParams.pipe(takeUntil(this.destroy$)).subscribe((params) => {
      if (params["sessionExpired"] || params["expired"]) {
        this.sessionExpired = true;
      }
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  onSubmit() {
    if (this.loginForm.valid) {
      const credentials = this.loginForm.value;
      this.store.dispatch(login({ credentials }));
    }
  }
  onClearError() {
    this.store.dispatch(clearError());
  }
  getErrorMessage(controlName) {
    const control = this.loginForm.get(controlName);
    if (control?.errors && control.touched) {
      if (control.errors["required"]) {
        return "\u042D\u0442\u043E \u043F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u0434\u043B\u044F \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F";
      }
      if (control.errors["email"]) {
        return "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0444\u043E\u0440\u043C\u0430\u0442 email";
      }
      if (control.errors["minlength"]) {
        return `\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0434\u043B\u0438\u043D\u0430: ${control.errors["minlength"].requiredLength} \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432`;
      }
    }
    return "";
  }
  static \u0275fac = function LoginPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoginPageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginPageComponent, selectors: [["app-login-page"]], decls: 26, vars: 14, consts: [[1, "login-page", "auth-page"], [1, "promo-panel-desktop"], [1, "form-panel"], [1, "form-content"], [1, "form-header"], [1, "brand-name"], [1, "welcome-title"], ["type", "warning", "class", "warning-alert", 3, "title", "dismissible", "dismissed", 4, "ngIf"], ["type", "error", "class", "error-alert", 3, "title", "dismissible", "dismissed", 4, "ngIf"], [1, "login-form", "auth-form", 3, "ngSubmit", "formGroup"], ["id", "email", "label", "Email", "type", "email", "placeholder", "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 email", "formControlName", "email", 3, "errorMessage", "required"], ["id", "password", "label", "\u041F\u0430\u0440\u043E\u043B\u044C", "type", "password", "placeholder", "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C", "formControlName", "password", 3, "errorMessage", "required", "showPasswordToggle"], ["buttonType", "primary", "type", "submit", 1, "submit-button", 3, "disabled", "loading"], [1, "forgot-password-link"], ["routerLink", "/auth/forgot-password"], [1, "form-footer"], ["type", "warning", 1, "warning-alert", 3, "dismissed", "title", "dismissible"], ["type", "error", 1, "error-alert", 3, "dismissed", "title", "dismissible"]], template: function LoginPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-auth-promo-panel", 1);
      \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h2", 5);
      \u0275\u0275text(6, "WestWood");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "h3", 6);
      \u0275\u0275text(8, "\u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C!");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(9, LoginPageComponent_app_alert_9_Template, 2, 2, "app-alert", 7)(10, LoginPageComponent_app_alert_10_Template, 2, 3, "app-alert", 8);
      \u0275\u0275pipe(11, "async");
      \u0275\u0275elementStart(12, "form", 9);
      \u0275\u0275listener("ngSubmit", function LoginPageComponent_Template_form_ngSubmit_12_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275element(13, "app-input", 10)(14, "app-input", 11);
      \u0275\u0275elementStart(15, "app-button", 12);
      \u0275\u0275pipe(16, "async");
      \u0275\u0275text(17, " \u0412\u043E\u0439\u0442\u0438 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 13)(19, "app-link", 14);
      \u0275\u0275text(20, " \u0417\u0430\u0431\u044B\u043B \u043F\u0430\u0440\u043E\u043B\u044C? ");
      \u0275\u0275elementStart(21, "strong");
      \u0275\u0275text(22, "\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u0437\u0434\u0435\u0441\u044C");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(23, "div", 15)(24, "span");
      \u0275\u0275text(25, "\xA9 2026 WestWood. \u0412\u0441\u0435 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043D\u044B.");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      let tmp_9_0;
      \u0275\u0275advance(9);
      \u0275\u0275property("ngIf", ctx.sessionExpired);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(11, 10, ctx.error$));
      \u0275\u0275advance(2);
      \u0275\u0275property("formGroup", ctx.loginForm);
      \u0275\u0275advance();
      \u0275\u0275property("errorMessage", ctx.getErrorMessage("email"))("required", true);
      \u0275\u0275advance();
      \u0275\u0275property("errorMessage", ctx.getErrorMessage("password"))("required", true)("showPasswordToggle", true);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.loginForm.invalid)("loading", (tmp_9_0 = \u0275\u0275pipeBind1(16, 12, ctx.isLoading$)) !== null && tmp_9_0 !== void 0 ? tmp_9_0 : false);
    }
  }, dependencies: [
    CommonModule,
    NgIf,
    AsyncPipe,
    ReactiveFormsModule,
    \u0275NgNoValidate,
    NgControlStatus,
    NgControlStatusGroup,
    RequiredValidator,
    FormGroupDirective,
    FormControlName,
    RouterModule,
    RouterLink,
    AlertComponent,
    InputComponent,
    ButtonComponent,
    LinkComponent,
    AuthPromoPanelComponent
  ], styles: ['\n\n.login-page[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n  background: #F5F6F8;\n}\n.form-panel[_ngcontent-%COMP%] {\n  flex: 0 0 45%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem;\n  background: #ffffff;\n}\n.form-content[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 360px;\n  animation: _ngcontent-%COMP%_slideUp 0.5s ease-out;\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.form-header[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.brand-name[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: #1a202c;\n  margin: 0 0 0.75rem 0;\n  letter-spacing: -0.02em;\n}\n.welcome-title[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #1a202c;\n  margin: 0 0 1rem 0;\n}\n.warning-alert[_ngcontent-%COMP%], \n.error-alert[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n  animation: _ngcontent-%COMP%_shake 0.5s ease-out;\n}\n@keyframes _ngcontent-%COMP%_shake {\n  0%, 100% {\n    transform: translateX(0);\n  }\n  25% {\n    transform: translateX(-10px);\n  }\n  75% {\n    transform: translateX(10px);\n  }\n}\n.login-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.submit-button[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 0.25rem;\n}\n[_nghost-%COMP%]     .submit-button button {\n  width: 100%;\n  padding: 0.875rem 1.5rem !important;\n  font-size: 1rem !important;\n  font-weight: 600 !important;\n  border-radius: 4px !important;\n  background-color: #0F0F10 !important;\n  color: white !important;\n  transition: all 0.2s ease !important;\n}\n.forgot-password-link[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 0.25rem;\n}\n[_nghost-%COMP%]     .forgot-password-link app-link a {\n  color: #6b7280 !important;\n  font-weight: 500;\n  font-size: 0.875rem;\n  transition: color 0.2s ease;\n  text-decoration: none;\n}\n[_nghost-%COMP%]     .forgot-password-link app-link a strong {\n  color: #0F0F10 !important;\n  text-decoration: underline;\n  font-weight: 600;\n}\n.form-footer[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (max-width: 1024px) {\n  .auth-page[_ngcontent-%COMP%] {\n    flex-direction: column;\n    min-height: 100vh;\n    height: auto;\n    background:\n      linear-gradient(\n        135deg,\n        #f8fafc 0%,\n        #f1f5f9 50%,\n        #e2e8f0 100%);\n    position: relative;\n    overflow-x: hidden;\n    overflow-y: auto;\n  }\n  .auth-page[_ngcontent-%COMP%]::before {\n    content: "";\n    position: absolute;\n    width: 200%;\n    height: 200%;\n    top: -50%;\n    left: -50%;\n    background:\n      radial-gradient(\n        circle at 20% 30%,\n        rgba(22, 163, 74, 0.08) 0%,\n        transparent 50%),\n      radial-gradient(\n        circle at 80% 70%,\n        rgba(15, 15, 16, 0.06) 0%,\n        transparent 50%);\n    animation: float 20s ease-in-out infinite;\n    z-index: 0;\n    pointer-events: none;\n  }\n  @keyframes float {\n    0%, 100% {\n      transform: translate(0, 0) rotate(0deg);\n    }\n    33% {\n      transform: translate(30px, -30px) rotate(120deg);\n    }\n    66% {\n      transform: translate(-20px, 20px) rotate(240deg);\n    }\n  }\n  .promo-panel-desktop[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .form-panel[_ngcontent-%COMP%] {\n    flex: 1;\n    padding: 2.5rem 2rem 3rem;\n    margin-top: -50px;\n    position: relative;\n    z-index: 3;\n    background: #ffffff;\n    box-shadow: 0 -8px 32px rgba(0, 0, 0, 0.12);\n    border-top-left-radius: 30px;\n    border-top-right-radius: 30px;\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n    min-height: auto;\n  }\n  .form-content[_ngcontent-%COMP%] {\n    max-width: 480px;\n    margin: 0 auto;\n    animation: slideUpMobile 0.6s cubic-bezier(0.16, 1, 0.3, 1);\n    position: relative;\n    z-index: 2;\n  }\n  @keyframes slideUpMobile {\n    from {\n      opacity: 0;\n      transform: translateY(40px) scale(0.95);\n    }\n    to {\n      opacity: 1;\n      transform: translateY(0) scale(1);\n    }\n  }\n  .form-header[_ngcontent-%COMP%] {\n    text-align: center;\n    margin-bottom: 2rem;\n    position: relative;\n  }\n  .brand-name[_ngcontent-%COMP%] {\n    font-size: 2rem;\n    margin-bottom: 0.5rem;\n    background:\n      linear-gradient(\n        135deg,\n        #16A34A 0%,\n        #15803d 50%,\n        #0F0F10 100%);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    background-clip: text;\n    letter-spacing: -0.03em;\n  }\n  .welcome-title[_ngcontent-%COMP%] {\n    font-size: 1.75rem;\n    margin-bottom: 1rem;\n    color: #1a202c;\n    font-weight: 700;\n  }\n  .register-prompt[_ngcontent-%COMP%], \n   .login-prompt[_ngcontent-%COMP%], \n   .back-to-login-prompt[_ngcontent-%COMP%] {\n    font-size: 0.9375rem;\n    margin-top: 0.5rem;\n  }\n  .auth-form[_ngcontent-%COMP%], \n   .login-form[_ngcontent-%COMP%], \n   .register-form[_ngcontent-%COMP%], \n   .activation-form[_ngcontent-%COMP%], \n   .reset-password-form[_ngcontent-%COMP%], \n   .forgot-password-form[_ngcontent-%COMP%] {\n    gap: 1.25rem;\n    margin-top: 1rem;\n  }\n  .submit-button[_ngcontent-%COMP%] {\n    margin-top: 0.5rem;\n  }\n  [_nghost-%COMP%]     .submit-button button {\n    box-shadow: 0 4px 12px rgba(15, 15, 16, 0.2);\n    transform: translateY(0);\n    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  }\n  [_nghost-%COMP%]     .submit-button button:hover {\n    transform: translateY(-2px);\n    box-shadow: 0 6px 16px rgba(15, 15, 16, 0.3);\n  }\n  [_nghost-%COMP%]     .submit-button button:active {\n    transform: translateY(0);\n  }\n  .forgot-password-link[_ngcontent-%COMP%] {\n    margin-top: 0.75rem;\n  }\n  .warning-alert[_ngcontent-%COMP%], \n   .error-alert[_ngcontent-%COMP%], \n   .success-alert[_ngcontent-%COMP%] {\n    border-radius: 12px;\n    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  }\n}\n@media (max-width: 640px) {\n  .auth-page[_ngcontent-%COMP%] {\n    flex-direction: column;\n    min-height: 100vh;\n    height: auto;\n    background:\n      linear-gradient(\n        135deg,\n        #f8fafc 0%,\n        #f1f5f9 50%,\n        #e2e8f0 100%);\n    position: relative;\n    overflow-x: hidden;\n  }\n  .auth-page[_ngcontent-%COMP%]::before {\n    content: "";\n    position: absolute;\n    width: 200%;\n    height: 200%;\n    top: -50%;\n    left: -50%;\n    background:\n      radial-gradient(\n        circle at 20% 30%,\n        rgba(22, 163, 74, 0.08) 0%,\n        transparent 50%),\n      radial-gradient(\n        circle at 80% 70%,\n        rgba(15, 15, 16, 0.06) 0%,\n        transparent 50%);\n    animation: float 20s ease-in-out infinite;\n    z-index: 0;\n    pointer-events: none;\n  }\n  @keyframes float {\n    0%, 100% {\n      transform: translate(0, 0) rotate(0deg);\n    }\n    33% {\n      transform: translate(30px, -30px) rotate(120deg);\n    }\n    66% {\n      transform: translate(-20px, 20px) rotate(240deg);\n    }\n  }\n  .promo-panel-desktop[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .form-panel[_ngcontent-%COMP%] {\n    flex: 1;\n    padding: 2rem 1.5rem 3rem;\n    margin-top: -40px;\n    position: relative;\n    z-index: 3;\n    background: #ffffff;\n    box-shadow: 0 -8px 32px rgba(0, 0, 0, 0.12);\n    border-top-left-radius: 30px;\n    border-top-right-radius: 30px;\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n    min-height: auto;\n  }\n  .form-content[_ngcontent-%COMP%] {\n    max-width: 100%;\n    animation: slideUpMobile 0.6s cubic-bezier(0.16, 1, 0.3, 1);\n    position: relative;\n    z-index: 2;\n  }\n  @keyframes slideUpMobile {\n    from {\n      opacity: 0;\n      transform: translateY(40px) scale(0.95);\n    }\n    to {\n      opacity: 1;\n      transform: translateY(0) scale(1);\n    }\n  }\n  .form-header[_ngcontent-%COMP%] {\n    text-align: center;\n    margin-bottom: 2rem;\n    position: relative;\n  }\n  .brand-name[_ngcontent-%COMP%] {\n    font-size: 1.875rem;\n    margin-bottom: 0.5rem;\n    background:\n      linear-gradient(\n        135deg,\n        #16A34A 0%,\n        #15803d 50%,\n        #0F0F10 100%);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    background-clip: text;\n    letter-spacing: -0.03em;\n  }\n  .welcome-title[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n    margin-bottom: 1rem;\n    color: #1a202c;\n    font-weight: 700;\n  }\n  .register-prompt[_ngcontent-%COMP%], \n   .login-prompt[_ngcontent-%COMP%], \n   .back-to-login-prompt[_ngcontent-%COMP%] {\n    font-size: 0.875rem;\n    margin-top: 0.5rem;\n  }\n  .auth-form[_ngcontent-%COMP%], \n   .login-form[_ngcontent-%COMP%], \n   .register-form[_ngcontent-%COMP%], \n   .activation-form[_ngcontent-%COMP%], \n   .reset-password-form[_ngcontent-%COMP%], \n   .forgot-password-form[_ngcontent-%COMP%] {\n    gap: 1.25rem;\n    margin-top: 1rem;\n  }\n  .submit-button[_ngcontent-%COMP%] {\n    margin-top: 0.5rem;\n  }\n  [_nghost-%COMP%]     .submit-button button {\n    box-shadow: 0 4px 12px rgba(15, 15, 16, 0.2);\n    transform: translateY(0);\n    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  }\n  [_nghost-%COMP%]     .submit-button button:hover {\n    transform: translateY(-2px);\n    box-shadow: 0 6px 16px rgba(15, 15, 16, 0.3);\n  }\n  [_nghost-%COMP%]     .submit-button button:active {\n    transform: translateY(0);\n  }\n  .forgot-password-link[_ngcontent-%COMP%] {\n    margin-top: 0.75rem;\n  }\n  .warning-alert[_ngcontent-%COMP%], \n   .error-alert[_ngcontent-%COMP%], \n   .success-alert[_ngcontent-%COMP%] {\n    border-radius: 12px;\n    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  }\n  .form-footer[_ngcontent-%COMP%] {\n    margin-top: 2rem;\n    text-align: center;\n    padding-top: 1.5rem;\n    border-top: 1px solid rgba(0, 0, 0, 0.05);\n  }\n  .form-footer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n    color: #64748b;\n    opacity: 0.8;\n  }\n}\n@media (max-width: 480px) {\n  .form-panel[_ngcontent-%COMP%] {\n    padding: 1.5rem 1.25rem;\n    border-top-left-radius: 20px;\n    border-top-right-radius: 20px;\n  }\n  .brand-name[_ngcontent-%COMP%] {\n    font-size: 1.625rem;\n  }\n  .welcome-title[_ngcontent-%COMP%] {\n    font-size: 1.375rem;\n  }\n  .form-header[_ngcontent-%COMP%] {\n    margin-bottom: 1.5rem;\n  }\n  .auth-form[_ngcontent-%COMP%], \n   .login-form[_ngcontent-%COMP%], \n   .register-form[_ngcontent-%COMP%], \n   .activation-form[_ngcontent-%COMP%], \n   .reset-password-form[_ngcontent-%COMP%], \n   .forgot-password-form[_ngcontent-%COMP%] {\n    gap: 1rem;\n  }\n}\n/*# sourceMappingURL=login-page.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginPageComponent, [{
    type: Component,
    args: [{ selector: "app-login-page", standalone: true, imports: [
      CommonModule,
      ReactiveFormsModule,
      RouterModule,
      AlertComponent,
      InputComponent,
      ButtonComponent,
      LinkComponent,
      AuthPromoPanelComponent
    ], template: `
    <div class="login-page auth-page">
      <!-- Left Promotional Panel -->
      <app-auth-promo-panel class="promo-panel-desktop"></app-auth-promo-panel>

      <!-- Right Login Form Panel -->
      <div class="form-panel">
        <div class="form-content">
          <div class="form-header">
            <h2 class="brand-name">WestWood</h2>
            <h3 class="welcome-title">\u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C!</h3>
          </div>

        <!-- Session expired message -->
        <app-alert
          *ngIf="sessionExpired"
          type="warning"
          [title]="'\u0421\u0435\u0441\u0441\u0438\u044F \u0438\u0441\u0442\u0435\u043A\u043B\u0430'"
          [dismissible]="true"
          (dismissed)="sessionExpired = false"
          class="warning-alert">
          \u0412\u0430\u0448\u0430 \u0441\u0435\u0441\u0441\u0438\u044F \u0438\u0441\u0442\u0435\u043A\u043B\u0430. \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0432\u043E\u0439\u0434\u0438\u0442\u0435 \u0441\u043D\u043E\u0432\u0430.
        </app-alert>

        <app-alert
          *ngIf="error$ | async as error"
          type="error"
          [title]="'\u041E\u0448\u0438\u0431\u043A\u0430 \u0432\u0445\u043E\u0434\u0430'"
          [dismissible]="true"
          (dismissed)="onClearError()"
          class="error-alert">
          {{ error }}
        </app-alert>

        <form [formGroup]="loginForm" (ngSubmit)="onSubmit()" class="login-form auth-form">
          <app-input
            id="email"
            label="Email"
            type="email"
            placeholder="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 email"
            formControlName="email"
            [errorMessage]="getErrorMessage('email')"
            [required]="true">
          </app-input>

          <app-input
            id="password"
            label="\u041F\u0430\u0440\u043E\u043B\u044C"
            type="password"
            placeholder="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C"
            formControlName="password"
            [errorMessage]="getErrorMessage('password')"
            [required]="true"
            [showPasswordToggle]="true">
          </app-input>

          <app-button
            buttonType="primary"
            type="submit"
            [disabled]="loginForm.invalid"
            [loading]="(isLoading$ | async) ?? false"
            class="submit-button">
            \u0412\u043E\u0439\u0442\u0438
          </app-button>

          <div class="forgot-password-link">
            <app-link routerLink="/auth/forgot-password">
              \u0417\u0430\u0431\u044B\u043B \u043F\u0430\u0440\u043E\u043B\u044C? <strong>\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u0437\u0434\u0435\u0441\u044C</strong>
            </app-link>
          </div>
        </form>

        <div class="form-footer">
          <span>\xA9 2026 WestWood. \u0412\u0441\u0435 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043D\u044B.</span>
        </div>
        </div>
      </div>
    </div>
  `, styles: ['/* angular:styles/component:css;9296584a79dd4453388e812949c733e6343c43dc0783f599db3ea102fb9ea06d;/Users/baglan/repo/westwood/westwood-frontend/src/app/features/auth/pages/login-page/login-page.component.ts */\n.login-page {\n  display: flex;\n  min-height: 100vh;\n  background: #F5F6F8;\n}\n.form-panel {\n  flex: 0 0 45%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem;\n  background: #ffffff;\n}\n.form-content {\n  width: 100%;\n  max-width: 360px;\n  animation: slideUp 0.5s ease-out;\n}\n@keyframes slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.form-header {\n  margin-bottom: 1rem;\n}\n.brand-name {\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: #1a202c;\n  margin: 0 0 0.75rem 0;\n  letter-spacing: -0.02em;\n}\n.welcome-title {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #1a202c;\n  margin: 0 0 1rem 0;\n}\n.warning-alert,\n.error-alert {\n  margin-bottom: 1.5rem;\n  animation: shake 0.5s ease-out;\n}\n@keyframes shake {\n  0%, 100% {\n    transform: translateX(0);\n  }\n  25% {\n    transform: translateX(-10px);\n  }\n  75% {\n    transform: translateX(10px);\n  }\n}\n.login-form {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.submit-button {\n  width: 100%;\n  margin-top: 0.25rem;\n}\n:host ::ng-deep .submit-button button {\n  width: 100%;\n  padding: 0.875rem 1.5rem !important;\n  font-size: 1rem !important;\n  font-weight: 600 !important;\n  border-radius: 4px !important;\n  background-color: #0F0F10 !important;\n  color: white !important;\n  transition: all 0.2s ease !important;\n}\n.forgot-password-link {\n  text-align: center;\n  margin-top: 0.25rem;\n}\n:host ::ng-deep .forgot-password-link app-link a {\n  color: #6b7280 !important;\n  font-weight: 500;\n  font-size: 0.875rem;\n  transition: color 0.2s ease;\n  text-decoration: none;\n}\n:host ::ng-deep .forgot-password-link app-link a strong {\n  color: #0F0F10 !important;\n  text-decoration: underline;\n  font-weight: 600;\n}\n.form-footer {\n  display: none;\n}\n@media (max-width: 1024px) {\n  .auth-page {\n    flex-direction: column;\n    min-height: 100vh;\n    height: auto;\n    background:\n      linear-gradient(\n        135deg,\n        #f8fafc 0%,\n        #f1f5f9 50%,\n        #e2e8f0 100%);\n    position: relative;\n    overflow-x: hidden;\n    overflow-y: auto;\n  }\n  .auth-page::before {\n    content: "";\n    position: absolute;\n    width: 200%;\n    height: 200%;\n    top: -50%;\n    left: -50%;\n    background:\n      radial-gradient(\n        circle at 20% 30%,\n        rgba(22, 163, 74, 0.08) 0%,\n        transparent 50%),\n      radial-gradient(\n        circle at 80% 70%,\n        rgba(15, 15, 16, 0.06) 0%,\n        transparent 50%);\n    animation: float 20s ease-in-out infinite;\n    z-index: 0;\n    pointer-events: none;\n  }\n  @keyframes float {\n    0%, 100% {\n      transform: translate(0, 0) rotate(0deg);\n    }\n    33% {\n      transform: translate(30px, -30px) rotate(120deg);\n    }\n    66% {\n      transform: translate(-20px, 20px) rotate(240deg);\n    }\n  }\n  .promo-panel-desktop {\n    display: block;\n  }\n  .form-panel {\n    flex: 1;\n    padding: 2.5rem 2rem 3rem;\n    margin-top: -50px;\n    position: relative;\n    z-index: 3;\n    background: #ffffff;\n    box-shadow: 0 -8px 32px rgba(0, 0, 0, 0.12);\n    border-top-left-radius: 30px;\n    border-top-right-radius: 30px;\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n    min-height: auto;\n  }\n  .form-content {\n    max-width: 480px;\n    margin: 0 auto;\n    animation: slideUpMobile 0.6s cubic-bezier(0.16, 1, 0.3, 1);\n    position: relative;\n    z-index: 2;\n  }\n  @keyframes slideUpMobile {\n    from {\n      opacity: 0;\n      transform: translateY(40px) scale(0.95);\n    }\n    to {\n      opacity: 1;\n      transform: translateY(0) scale(1);\n    }\n  }\n  .form-header {\n    text-align: center;\n    margin-bottom: 2rem;\n    position: relative;\n  }\n  .brand-name {\n    font-size: 2rem;\n    margin-bottom: 0.5rem;\n    background:\n      linear-gradient(\n        135deg,\n        #16A34A 0%,\n        #15803d 50%,\n        #0F0F10 100%);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    background-clip: text;\n    letter-spacing: -0.03em;\n  }\n  .welcome-title {\n    font-size: 1.75rem;\n    margin-bottom: 1rem;\n    color: #1a202c;\n    font-weight: 700;\n  }\n  .register-prompt,\n  .login-prompt,\n  .back-to-login-prompt {\n    font-size: 0.9375rem;\n    margin-top: 0.5rem;\n  }\n  .auth-form,\n  .login-form,\n  .register-form,\n  .activation-form,\n  .reset-password-form,\n  .forgot-password-form {\n    gap: 1.25rem;\n    margin-top: 1rem;\n  }\n  .submit-button {\n    margin-top: 0.5rem;\n  }\n  :host ::ng-deep .submit-button button {\n    box-shadow: 0 4px 12px rgba(15, 15, 16, 0.2);\n    transform: translateY(0);\n    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  }\n  :host ::ng-deep .submit-button button:hover {\n    transform: translateY(-2px);\n    box-shadow: 0 6px 16px rgba(15, 15, 16, 0.3);\n  }\n  :host ::ng-deep .submit-button button:active {\n    transform: translateY(0);\n  }\n  .forgot-password-link {\n    margin-top: 0.75rem;\n  }\n  .warning-alert,\n  .error-alert,\n  .success-alert {\n    border-radius: 12px;\n    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  }\n}\n@media (max-width: 640px) {\n  .auth-page {\n    flex-direction: column;\n    min-height: 100vh;\n    height: auto;\n    background:\n      linear-gradient(\n        135deg,\n        #f8fafc 0%,\n        #f1f5f9 50%,\n        #e2e8f0 100%);\n    position: relative;\n    overflow-x: hidden;\n  }\n  .auth-page::before {\n    content: "";\n    position: absolute;\n    width: 200%;\n    height: 200%;\n    top: -50%;\n    left: -50%;\n    background:\n      radial-gradient(\n        circle at 20% 30%,\n        rgba(22, 163, 74, 0.08) 0%,\n        transparent 50%),\n      radial-gradient(\n        circle at 80% 70%,\n        rgba(15, 15, 16, 0.06) 0%,\n        transparent 50%);\n    animation: float 20s ease-in-out infinite;\n    z-index: 0;\n    pointer-events: none;\n  }\n  @keyframes float {\n    0%, 100% {\n      transform: translate(0, 0) rotate(0deg);\n    }\n    33% {\n      transform: translate(30px, -30px) rotate(120deg);\n    }\n    66% {\n      transform: translate(-20px, 20px) rotate(240deg);\n    }\n  }\n  .promo-panel-desktop {\n    display: block;\n  }\n  .form-panel {\n    flex: 1;\n    padding: 2rem 1.5rem 3rem;\n    margin-top: -40px;\n    position: relative;\n    z-index: 3;\n    background: #ffffff;\n    box-shadow: 0 -8px 32px rgba(0, 0, 0, 0.12);\n    border-top-left-radius: 30px;\n    border-top-right-radius: 30px;\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n    min-height: auto;\n  }\n  .form-content {\n    max-width: 100%;\n    animation: slideUpMobile 0.6s cubic-bezier(0.16, 1, 0.3, 1);\n    position: relative;\n    z-index: 2;\n  }\n  @keyframes slideUpMobile {\n    from {\n      opacity: 0;\n      transform: translateY(40px) scale(0.95);\n    }\n    to {\n      opacity: 1;\n      transform: translateY(0) scale(1);\n    }\n  }\n  .form-header {\n    text-align: center;\n    margin-bottom: 2rem;\n    position: relative;\n  }\n  .brand-name {\n    font-size: 1.875rem;\n    margin-bottom: 0.5rem;\n    background:\n      linear-gradient(\n        135deg,\n        #16A34A 0%,\n        #15803d 50%,\n        #0F0F10 100%);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    background-clip: text;\n    letter-spacing: -0.03em;\n  }\n  .welcome-title {\n    font-size: 1.5rem;\n    margin-bottom: 1rem;\n    color: #1a202c;\n    font-weight: 700;\n  }\n  .register-prompt,\n  .login-prompt,\n  .back-to-login-prompt {\n    font-size: 0.875rem;\n    margin-top: 0.5rem;\n  }\n  .auth-form,\n  .login-form,\n  .register-form,\n  .activation-form,\n  .reset-password-form,\n  .forgot-password-form {\n    gap: 1.25rem;\n    margin-top: 1rem;\n  }\n  .submit-button {\n    margin-top: 0.5rem;\n  }\n  :host ::ng-deep .submit-button button {\n    box-shadow: 0 4px 12px rgba(15, 15, 16, 0.2);\n    transform: translateY(0);\n    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  }\n  :host ::ng-deep .submit-button button:hover {\n    transform: translateY(-2px);\n    box-shadow: 0 6px 16px rgba(15, 15, 16, 0.3);\n  }\n  :host ::ng-deep .submit-button button:active {\n    transform: translateY(0);\n  }\n  .forgot-password-link {\n    margin-top: 0.75rem;\n  }\n  .warning-alert,\n  .error-alert,\n  .success-alert {\n    border-radius: 12px;\n    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  }\n  .form-footer {\n    margin-top: 2rem;\n    text-align: center;\n    padding-top: 1.5rem;\n    border-top: 1px solid rgba(0, 0, 0, 0.05);\n  }\n  .form-footer span {\n    font-size: 0.75rem;\n    color: #64748b;\n    opacity: 0.8;\n  }\n}\n@media (max-width: 480px) {\n  .form-panel {\n    padding: 1.5rem 1.25rem;\n    border-top-left-radius: 20px;\n    border-top-right-radius: 20px;\n  }\n  .brand-name {\n    font-size: 1.625rem;\n  }\n  .welcome-title {\n    font-size: 1.375rem;\n  }\n  .form-header {\n    margin-bottom: 1.5rem;\n  }\n  .auth-form,\n  .login-form,\n  .register-form,\n  .activation-form,\n  .reset-password-form,\n  .forgot-password-form {\n    gap: 1rem;\n  }\n}\n/*# sourceMappingURL=login-page.component.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginPageComponent, { className: "LoginPageComponent", filePath: "src/app/features/auth/pages/login-page/login-page.component.ts", lineNumber: 219 });
})();
export {
  LoginPageComponent
};
//# sourceMappingURL=chunk-O2PMQEOH.js.map
