import {
  Actions,
  ofType
} from "./chunk-CSVYWZXZ.js";
import {
  LinkComponent
} from "./chunk-YJBKWGLP.js";
import {
  AuthPromoPanelComponent
} from "./chunk-X42JD5RA.js";
import {
  AlertComponent,
  InputComponent
} from "./chunk-VLRWFHK2.js";
import {
  clearError,
  forgotPassword,
  forgotPasswordSuccess
} from "./chunk-KKI6AUAG.js";
import {
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  RequiredValidator,
  Validators,
  ɵNgNoValidate
} from "./chunk-KQ5UQ4IC.js";
import {
  ButtonComponent
} from "./chunk-2XLG7XQP.js";
import {
  Store,
  selectAuthError,
  selectIsLoading
} from "./chunk-MJLYS4T7.js";
import "./chunk-OQLCFRLM.js";
import {
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
} from "./chunk-OSQKJAMW.js";

// src/app/features/auth/pages/forgot-password-page/forgot-password-page.component.ts
function ForgotPasswordPageComponent_app_alert_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-alert", 15);
    \u0275\u0275listener("dismissed", function ForgotPasswordPageComponent_app_alert_12_Template_app_alert_dismissed_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.successMessage = "");
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("title", "\u0423\u0441\u043F\u0435\u0448\u043D\u043E")("dismissible", true);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.successMessage, " ");
  }
}
function ForgotPasswordPageComponent_app_alert_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-alert", 16);
    \u0275\u0275listener("dismissed", function ForgotPasswordPageComponent_app_alert_13_Template_app_alert_dismissed_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClearError());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const error_r4 = ctx.ngIf;
    \u0275\u0275property("title", "\u041E\u0448\u0438\u0431\u043A\u0430")("dismissible", true);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", error_r4, " ");
  }
}
var ForgotPasswordPageComponent = class _ForgotPasswordPageComponent {
  fb = inject(FormBuilder);
  store = inject(Store);
  actions$ = inject(Actions);
  destroy$ = new Subject();
  forgotPasswordForm;
  isLoading$;
  error$;
  successMessage = "";
  constructor() {
    this.forgotPasswordForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]]
    });
    this.isLoading$ = this.store.select(selectIsLoading);
    this.error$ = this.store.select(selectAuthError);
  }
  ngOnInit() {
    this.store.dispatch(clearError());
    this.successMessage = "";
    this.actions$.pipe(ofType(forgotPasswordSuccess), takeUntil(this.destroy$)).subscribe(() => {
      const email = this.forgotPasswordForm.value.email;
      this.successMessage = `\u041D\u0430 \u0430\u0434\u0440\u0435\u0441 ${email} \u0431\u044B\u043B\u043E \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043E \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u0434\u043B\u044F \u0441\u0431\u0440\u043E\u0441\u0430 \u043F\u0430\u0440\u043E\u043B\u044F. \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u0432\u0430\u0448\u0443 \u043F\u043E\u0447\u0442\u0443.`;
    });
    this.error$.pipe(takeUntil(this.destroy$)).subscribe((error) => {
      if (error) {
        this.successMessage = "";
      }
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  onSubmit() {
    if (this.forgotPasswordForm.valid) {
      this.successMessage = "";
      const formValue = this.forgotPasswordForm.value;
      console.log("[ForgotPasswordPage] Requesting password reset for email:", formValue.email);
      this.store.dispatch(forgotPassword({ data: { email: formValue.email } }));
    } else {
      Object.keys(this.forgotPasswordForm.controls).forEach((key) => {
        this.forgotPasswordForm.get(key)?.markAsTouched();
      });
    }
  }
  onClearError() {
    this.store.dispatch(clearError());
  }
  getErrorMessage(controlName) {
    const control = this.forgotPasswordForm.get(controlName);
    if (control?.errors && control.touched) {
      if (control.errors["required"]) {
        return "\u042D\u0442\u043E \u043F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u0434\u043B\u044F \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F";
      }
      if (control.errors["email"]) {
        return "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0444\u043E\u0440\u043C\u0430\u0442 email";
      }
    }
    return "";
  }
  static \u0275fac = function ForgotPasswordPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ForgotPasswordPageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ForgotPasswordPageComponent, selectors: [["app-forgot-password-page"]], decls: 23, vars: 11, consts: [[1, "forgot-password-page", "auth-page"], [1, "promo-panel-desktop"], [1, "form-panel"], [1, "form-content"], [1, "form-header"], ["src", "assets/tinta-logo-short-only-text.svg", "alt", "Tinta", 1, "brand-logo"], [1, "welcome-title"], [1, "back-to-login-prompt"], ["routerLink", "/auth/login"], ["type", "success", "class", "success-alert", 3, "title", "dismissible", "dismissed", 4, "ngIf"], ["type", "error", "class", "error-alert", 3, "title", "dismissible", "dismissed", 4, "ngIf"], [1, "forgot-password-form", "auth-form", 3, "ngSubmit", "formGroup"], ["id", "email", "label", "Email", "type", "email", "placeholder", "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 email", "formControlName", "email", 3, "errorMessage", "required"], ["buttonType", "primary", "type", "submit", 1, "submit-button", 3, "disabled", "loading"], [1, "form-footer"], ["type", "success", 1, "success-alert", 3, "dismissed", "title", "dismissible"], ["type", "error", 1, "error-alert", 3, "dismissed", "title", "dismissible"]], template: function ForgotPasswordPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-auth-promo-panel", 1);
      \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4);
      \u0275\u0275element(5, "img", 5);
      \u0275\u0275elementStart(6, "h3", 6);
      \u0275\u0275text(7, "\u0421\u043C\u0435\u043D\u0430 \u043F\u0430\u0440\u043E\u043B\u044F");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p", 7)(9, "app-link", 8)(10, "strong");
      \u0275\u0275text(11, "\u2190 \u041D\u0430\u0437\u0430\u0434 \u043A \u043B\u043E\u0433\u0438\u043D\u0443");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(12, ForgotPasswordPageComponent_app_alert_12_Template, 2, 3, "app-alert", 9)(13, ForgotPasswordPageComponent_app_alert_13_Template, 2, 3, "app-alert", 10);
      \u0275\u0275pipe(14, "async");
      \u0275\u0275elementStart(15, "form", 11);
      \u0275\u0275listener("ngSubmit", function ForgotPasswordPageComponent_Template_form_ngSubmit_15_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275element(16, "app-input", 12);
      \u0275\u0275elementStart(17, "app-button", 13);
      \u0275\u0275pipe(18, "async");
      \u0275\u0275text(19, " \u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "div", 14)(21, "span");
      \u0275\u0275text(22, "\xA9 2026 Tinta. \u0412\u0441\u0435 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043D\u044B.");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      let tmp_6_0;
      \u0275\u0275advance(12);
      \u0275\u0275property("ngIf", ctx.successMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(14, 7, ctx.error$));
      \u0275\u0275advance(2);
      \u0275\u0275property("formGroup", ctx.forgotPasswordForm);
      \u0275\u0275advance();
      \u0275\u0275property("errorMessage", ctx.getErrorMessage("email"))("required", true);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.forgotPasswordForm.invalid)("loading", (tmp_6_0 = \u0275\u0275pipeBind1(18, 9, ctx.isLoading$)) !== null && tmp_6_0 !== void 0 ? tmp_6_0 : false);
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
  ], styles: ['\n\n.forgot-password-page[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n  background: #F5F6F8;\n}\n.form-panel[_ngcontent-%COMP%] {\n  flex: 0 0 45%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem;\n  background: #ffffff;\n}\n.form-content[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 360px;\n  animation: _ngcontent-%COMP%_slideUp 0.5s ease-out;\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.form-header[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.brand-logo[_ngcontent-%COMP%] {\n  display: block;\n  height: 28px;\n  width: auto;\n  margin-bottom: 0.75rem;\n}\n.welcome-title[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #1a202c;\n  margin: 0 0 1rem 0;\n}\n.back-to-login-prompt[_ngcontent-%COMP%] {\n  font-size: 0.9375rem;\n  color: #64748b;\n  line-height: 1.6;\n  margin: -0.5rem 0 0 0;\n}\n[_nghost-%COMP%]     .back-to-login-prompt app-link a {\n  color: #1a202c;\n  text-decoration: underline;\n  font-weight: 600;\n}\n[_nghost-%COMP%]     .back-to-login-prompt app-link a strong {\n  color: #0F0F10 !important;\n}\n.success-alert[_ngcontent-%COMP%], \n.error-alert[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n  animation: _ngcontent-%COMP%_shake 0.5s ease-out;\n}\n@keyframes _ngcontent-%COMP%_shake {\n  0%, 100% {\n    transform: translateX(0);\n  }\n  25% {\n    transform: translateX(-10px);\n  }\n  75% {\n    transform: translateX(10px);\n  }\n}\n.forgot-password-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.submit-button[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 0.25rem;\n}\n[_nghost-%COMP%]     .submit-button button {\n  width: 100%;\n  padding: 0.875rem 1.5rem !important;\n  font-size: 1rem !important;\n  font-weight: 600 !important;\n  border-radius: 4px !important;\n  background-color: #0F0F10 !important;\n  color: white !important;\n  transition: all 0.2s ease !important;\n}\n.form-footer[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (max-width: 1024px) {\n  .auth-page[_ngcontent-%COMP%] {\n    flex-direction: column;\n    min-height: 100vh;\n    height: auto;\n    background:\n      linear-gradient(\n        135deg,\n        #f8fafc 0%,\n        #f1f5f9 50%,\n        #e2e8f0 100%);\n    position: relative;\n    overflow-x: hidden;\n    overflow-y: auto;\n  }\n  .auth-page[_ngcontent-%COMP%]::before {\n    content: "";\n    position: absolute;\n    width: 200%;\n    height: 200%;\n    top: -50%;\n    left: -50%;\n    background:\n      radial-gradient(\n        circle at 20% 30%,\n        rgba(22, 163, 74, 0.08) 0%,\n        transparent 50%),\n      radial-gradient(\n        circle at 80% 70%,\n        rgba(15, 15, 16, 0.06) 0%,\n        transparent 50%);\n    animation: float 20s ease-in-out infinite;\n    z-index: 0;\n    pointer-events: none;\n  }\n  @keyframes float {\n    0%, 100% {\n      transform: translate(0, 0) rotate(0deg);\n    }\n    33% {\n      transform: translate(30px, -30px) rotate(120deg);\n    }\n    66% {\n      transform: translate(-20px, 20px) rotate(240deg);\n    }\n  }\n  .promo-panel-desktop[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .form-panel[_ngcontent-%COMP%] {\n    flex: 1;\n    padding: 2.5rem 2rem 3rem;\n    margin-top: -50px;\n    position: relative;\n    z-index: 3;\n    background: #ffffff;\n    box-shadow: 0 -8px 32px rgba(0, 0, 0, 0.12);\n    border-top-left-radius: 30px;\n    border-top-right-radius: 30px;\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n    min-height: auto;\n  }\n  .form-content[_ngcontent-%COMP%] {\n    max-width: 480px;\n    margin: 0 auto;\n    animation: slideUpMobile 0.6s cubic-bezier(0.16, 1, 0.3, 1);\n    position: relative;\n    z-index: 2;\n  }\n  @keyframes slideUpMobile {\n    from {\n      opacity: 0;\n      transform: translateY(40px) scale(0.95);\n    }\n    to {\n      opacity: 1;\n      transform: translateY(0) scale(1);\n    }\n  }\n  .form-header[_ngcontent-%COMP%] {\n    text-align: center;\n    margin-bottom: 2rem;\n    position: relative;\n  }\n  .brand-name[_ngcontent-%COMP%] {\n    font-size: 2rem;\n    margin-bottom: 0.5rem;\n    background:\n      linear-gradient(\n        135deg,\n        #16A34A 0%,\n        #15803d 50%,\n        #0F0F10 100%);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    background-clip: text;\n    letter-spacing: -0.03em;\n  }\n  .welcome-title[_ngcontent-%COMP%] {\n    font-size: 1.75rem;\n    margin-bottom: 1rem;\n    color: #1a202c;\n    font-weight: 700;\n  }\n  .register-prompt[_ngcontent-%COMP%], \n   .login-prompt[_ngcontent-%COMP%], \n   .back-to-login-prompt[_ngcontent-%COMP%] {\n    font-size: 0.9375rem;\n    margin-top: 0.5rem;\n  }\n  .auth-form[_ngcontent-%COMP%], \n   .login-form[_ngcontent-%COMP%], \n   .register-form[_ngcontent-%COMP%], \n   .activation-form[_ngcontent-%COMP%], \n   .reset-password-form[_ngcontent-%COMP%], \n   .forgot-password-form[_ngcontent-%COMP%] {\n    gap: 1.25rem;\n    margin-top: 1rem;\n  }\n  .submit-button[_ngcontent-%COMP%] {\n    margin-top: 0.5rem;\n  }\n  [_nghost-%COMP%]     .submit-button button {\n    box-shadow: 0 4px 12px rgba(15, 15, 16, 0.2);\n    transform: translateY(0);\n    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  }\n  [_nghost-%COMP%]     .submit-button button:hover {\n    transform: translateY(-2px);\n    box-shadow: 0 6px 16px rgba(15, 15, 16, 0.3);\n  }\n  [_nghost-%COMP%]     .submit-button button:active {\n    transform: translateY(0);\n  }\n  .forgot-password-link[_ngcontent-%COMP%] {\n    margin-top: 0.75rem;\n  }\n  .warning-alert[_ngcontent-%COMP%], \n   .error-alert[_ngcontent-%COMP%], \n   .success-alert[_ngcontent-%COMP%] {\n    border-radius: 12px;\n    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  }\n}\n@media (max-width: 640px) {\n  .auth-page[_ngcontent-%COMP%] {\n    flex-direction: column;\n    min-height: 100vh;\n    height: auto;\n    background:\n      linear-gradient(\n        135deg,\n        #f8fafc 0%,\n        #f1f5f9 50%,\n        #e2e8f0 100%);\n    position: relative;\n    overflow-x: hidden;\n  }\n  .auth-page[_ngcontent-%COMP%]::before {\n    content: "";\n    position: absolute;\n    width: 200%;\n    height: 200%;\n    top: -50%;\n    left: -50%;\n    background:\n      radial-gradient(\n        circle at 20% 30%,\n        rgba(22, 163, 74, 0.08) 0%,\n        transparent 50%),\n      radial-gradient(\n        circle at 80% 70%,\n        rgba(15, 15, 16, 0.06) 0%,\n        transparent 50%);\n    animation: float 20s ease-in-out infinite;\n    z-index: 0;\n    pointer-events: none;\n  }\n  @keyframes float {\n    0%, 100% {\n      transform: translate(0, 0) rotate(0deg);\n    }\n    33% {\n      transform: translate(30px, -30px) rotate(120deg);\n    }\n    66% {\n      transform: translate(-20px, 20px) rotate(240deg);\n    }\n  }\n  .promo-panel-desktop[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .form-panel[_ngcontent-%COMP%] {\n    flex: 1;\n    padding: 2rem 1.5rem 3rem;\n    margin-top: -40px;\n    position: relative;\n    z-index: 3;\n    background: #ffffff;\n    box-shadow: 0 -8px 32px rgba(0, 0, 0, 0.12);\n    border-top-left-radius: 30px;\n    border-top-right-radius: 30px;\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n    min-height: auto;\n  }\n  .form-content[_ngcontent-%COMP%] {\n    max-width: 100%;\n    animation: slideUpMobile 0.6s cubic-bezier(0.16, 1, 0.3, 1);\n    position: relative;\n    z-index: 2;\n  }\n  @keyframes slideUpMobile {\n    from {\n      opacity: 0;\n      transform: translateY(40px) scale(0.95);\n    }\n    to {\n      opacity: 1;\n      transform: translateY(0) scale(1);\n    }\n  }\n  .form-header[_ngcontent-%COMP%] {\n    text-align: center;\n    margin-bottom: 2rem;\n    position: relative;\n  }\n  .brand-name[_ngcontent-%COMP%] {\n    font-size: 1.875rem;\n    margin-bottom: 0.5rem;\n    background:\n      linear-gradient(\n        135deg,\n        #16A34A 0%,\n        #15803d 50%,\n        #0F0F10 100%);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    background-clip: text;\n    letter-spacing: -0.03em;\n  }\n  .welcome-title[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n    margin-bottom: 1rem;\n    color: #1a202c;\n    font-weight: 700;\n  }\n  .register-prompt[_ngcontent-%COMP%], \n   .login-prompt[_ngcontent-%COMP%], \n   .back-to-login-prompt[_ngcontent-%COMP%] {\n    font-size: 0.875rem;\n    margin-top: 0.5rem;\n  }\n  .auth-form[_ngcontent-%COMP%], \n   .login-form[_ngcontent-%COMP%], \n   .register-form[_ngcontent-%COMP%], \n   .activation-form[_ngcontent-%COMP%], \n   .reset-password-form[_ngcontent-%COMP%], \n   .forgot-password-form[_ngcontent-%COMP%] {\n    gap: 1.25rem;\n    margin-top: 1rem;\n  }\n  .submit-button[_ngcontent-%COMP%] {\n    margin-top: 0.5rem;\n  }\n  [_nghost-%COMP%]     .submit-button button {\n    box-shadow: 0 4px 12px rgba(15, 15, 16, 0.2);\n    transform: translateY(0);\n    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  }\n  [_nghost-%COMP%]     .submit-button button:hover {\n    transform: translateY(-2px);\n    box-shadow: 0 6px 16px rgba(15, 15, 16, 0.3);\n  }\n  [_nghost-%COMP%]     .submit-button button:active {\n    transform: translateY(0);\n  }\n  .forgot-password-link[_ngcontent-%COMP%] {\n    margin-top: 0.75rem;\n  }\n  .warning-alert[_ngcontent-%COMP%], \n   .error-alert[_ngcontent-%COMP%], \n   .success-alert[_ngcontent-%COMP%] {\n    border-radius: 12px;\n    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  }\n  .form-footer[_ngcontent-%COMP%] {\n    margin-top: 2rem;\n    text-align: center;\n    padding-top: 1.5rem;\n    border-top: 1px solid rgba(0, 0, 0, 0.05);\n  }\n  .form-footer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n    color: #64748b;\n    opacity: 0.8;\n  }\n}\n@media (max-width: 480px) {\n  .form-panel[_ngcontent-%COMP%] {\n    padding: 1.5rem 1.25rem;\n    border-top-left-radius: 20px;\n    border-top-right-radius: 20px;\n  }\n  .brand-name[_ngcontent-%COMP%] {\n    font-size: 1.625rem;\n  }\n  .welcome-title[_ngcontent-%COMP%] {\n    font-size: 1.375rem;\n  }\n  .form-header[_ngcontent-%COMP%] {\n    margin-bottom: 1.5rem;\n  }\n  .auth-form[_ngcontent-%COMP%], \n   .login-form[_ngcontent-%COMP%], \n   .register-form[_ngcontent-%COMP%], \n   .activation-form[_ngcontent-%COMP%], \n   .reset-password-form[_ngcontent-%COMP%], \n   .forgot-password-form[_ngcontent-%COMP%] {\n    gap: 1rem;\n  }\n}\n/*# sourceMappingURL=forgot-password-page.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ForgotPasswordPageComponent, [{
    type: Component,
    args: [{ selector: "app-forgot-password-page", standalone: true, imports: [
      CommonModule,
      ReactiveFormsModule,
      RouterModule,
      AlertComponent,
      InputComponent,
      ButtonComponent,
      LinkComponent,
      AuthPromoPanelComponent
    ], template: `
    <div class="forgot-password-page auth-page">
      <!-- Left Promotional Panel -->
      <app-auth-promo-panel class="promo-panel-desktop"></app-auth-promo-panel>

      <!-- Right Forgot Password Form Panel -->
      <div class="form-panel">
        <div class="form-content">
          <div class="form-header">
            <img src="assets/tinta-logo-short-only-text.svg" alt="Tinta" class="brand-logo">
            <h3 class="welcome-title">\u0421\u043C\u0435\u043D\u0430 \u043F\u0430\u0440\u043E\u043B\u044F</h3>
            <p class="back-to-login-prompt">
              <app-link routerLink="/auth/login">
                <strong>\u2190 \u041D\u0430\u0437\u0430\u0434 \u043A \u043B\u043E\u0433\u0438\u043D\u0443</strong>
              </app-link>
            </p>
          </div>

          <app-alert
            *ngIf="successMessage"
            type="success"
            [title]="'\u0423\u0441\u043F\u0435\u0448\u043D\u043E'"
            [dismissible]="true"
            (dismissed)="successMessage = ''"
            class="success-alert">
            {{ successMessage }}
          </app-alert>

          <app-alert
            *ngIf="error$ | async as error"
            type="error"
            [title]="'\u041E\u0448\u0438\u0431\u043A\u0430'"
            [dismissible]="true"
            (dismissed)="onClearError()"
            class="error-alert">
            {{ error }}
          </app-alert>

          <form [formGroup]="forgotPasswordForm" (ngSubmit)="onSubmit()" class="forgot-password-form auth-form">
            <app-input
              id="email"
              label="Email"
              type="email"
              placeholder="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 email"
              formControlName="email"
              [errorMessage]="getErrorMessage('email')"
              [required]="true">
            </app-input>

            <app-button
              buttonType="primary"
              type="submit"
              [disabled]="forgotPasswordForm.invalid"
              [loading]="(isLoading$ | async) ?? false"
              class="submit-button">
              \u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C
            </app-button>
          </form>

        <div class="form-footer">
          <span>\xA9 2026 Tinta. \u0412\u0441\u0435 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043D\u044B.</span>
        </div>
        </div>
      </div>
    </div>
  `, styles: ['/* angular:styles/component:css;88442d81eee584ccce8e62fc8d438a0bc0b34fd95f1f3d6a275d1534a8dd8ca7;/Users/baglan/repo/westwood/westwood-frontend/src/app/features/auth/pages/forgot-password-page/forgot-password-page.component.ts */\n.forgot-password-page {\n  display: flex;\n  min-height: 100vh;\n  background: #F5F6F8;\n}\n.form-panel {\n  flex: 0 0 45%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem;\n  background: #ffffff;\n}\n.form-content {\n  width: 100%;\n  max-width: 360px;\n  animation: slideUp 0.5s ease-out;\n}\n@keyframes slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.form-header {\n  margin-bottom: 2rem;\n}\n.brand-logo {\n  display: block;\n  height: 28px;\n  width: auto;\n  margin-bottom: 0.75rem;\n}\n.welcome-title {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #1a202c;\n  margin: 0 0 1rem 0;\n}\n.back-to-login-prompt {\n  font-size: 0.9375rem;\n  color: #64748b;\n  line-height: 1.6;\n  margin: -0.5rem 0 0 0;\n}\n:host ::ng-deep .back-to-login-prompt app-link a {\n  color: #1a202c;\n  text-decoration: underline;\n  font-weight: 600;\n}\n:host ::ng-deep .back-to-login-prompt app-link a strong {\n  color: #0F0F10 !important;\n}\n.success-alert,\n.error-alert {\n  margin-bottom: 1.5rem;\n  animation: shake 0.5s ease-out;\n}\n@keyframes shake {\n  0%, 100% {\n    transform: translateX(0);\n  }\n  25% {\n    transform: translateX(-10px);\n  }\n  75% {\n    transform: translateX(10px);\n  }\n}\n.forgot-password-form {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.submit-button {\n  width: 100%;\n  margin-top: 0.25rem;\n}\n:host ::ng-deep .submit-button button {\n  width: 100%;\n  padding: 0.875rem 1.5rem !important;\n  font-size: 1rem !important;\n  font-weight: 600 !important;\n  border-radius: 4px !important;\n  background-color: #0F0F10 !important;\n  color: white !important;\n  transition: all 0.2s ease !important;\n}\n.form-footer {\n  display: none;\n}\n@media (max-width: 1024px) {\n  .auth-page {\n    flex-direction: column;\n    min-height: 100vh;\n    height: auto;\n    background:\n      linear-gradient(\n        135deg,\n        #f8fafc 0%,\n        #f1f5f9 50%,\n        #e2e8f0 100%);\n    position: relative;\n    overflow-x: hidden;\n    overflow-y: auto;\n  }\n  .auth-page::before {\n    content: "";\n    position: absolute;\n    width: 200%;\n    height: 200%;\n    top: -50%;\n    left: -50%;\n    background:\n      radial-gradient(\n        circle at 20% 30%,\n        rgba(22, 163, 74, 0.08) 0%,\n        transparent 50%),\n      radial-gradient(\n        circle at 80% 70%,\n        rgba(15, 15, 16, 0.06) 0%,\n        transparent 50%);\n    animation: float 20s ease-in-out infinite;\n    z-index: 0;\n    pointer-events: none;\n  }\n  @keyframes float {\n    0%, 100% {\n      transform: translate(0, 0) rotate(0deg);\n    }\n    33% {\n      transform: translate(30px, -30px) rotate(120deg);\n    }\n    66% {\n      transform: translate(-20px, 20px) rotate(240deg);\n    }\n  }\n  .promo-panel-desktop {\n    display: block;\n  }\n  .form-panel {\n    flex: 1;\n    padding: 2.5rem 2rem 3rem;\n    margin-top: -50px;\n    position: relative;\n    z-index: 3;\n    background: #ffffff;\n    box-shadow: 0 -8px 32px rgba(0, 0, 0, 0.12);\n    border-top-left-radius: 30px;\n    border-top-right-radius: 30px;\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n    min-height: auto;\n  }\n  .form-content {\n    max-width: 480px;\n    margin: 0 auto;\n    animation: slideUpMobile 0.6s cubic-bezier(0.16, 1, 0.3, 1);\n    position: relative;\n    z-index: 2;\n  }\n  @keyframes slideUpMobile {\n    from {\n      opacity: 0;\n      transform: translateY(40px) scale(0.95);\n    }\n    to {\n      opacity: 1;\n      transform: translateY(0) scale(1);\n    }\n  }\n  .form-header {\n    text-align: center;\n    margin-bottom: 2rem;\n    position: relative;\n  }\n  .brand-name {\n    font-size: 2rem;\n    margin-bottom: 0.5rem;\n    background:\n      linear-gradient(\n        135deg,\n        #16A34A 0%,\n        #15803d 50%,\n        #0F0F10 100%);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    background-clip: text;\n    letter-spacing: -0.03em;\n  }\n  .welcome-title {\n    font-size: 1.75rem;\n    margin-bottom: 1rem;\n    color: #1a202c;\n    font-weight: 700;\n  }\n  .register-prompt,\n  .login-prompt,\n  .back-to-login-prompt {\n    font-size: 0.9375rem;\n    margin-top: 0.5rem;\n  }\n  .auth-form,\n  .login-form,\n  .register-form,\n  .activation-form,\n  .reset-password-form,\n  .forgot-password-form {\n    gap: 1.25rem;\n    margin-top: 1rem;\n  }\n  .submit-button {\n    margin-top: 0.5rem;\n  }\n  :host ::ng-deep .submit-button button {\n    box-shadow: 0 4px 12px rgba(15, 15, 16, 0.2);\n    transform: translateY(0);\n    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  }\n  :host ::ng-deep .submit-button button:hover {\n    transform: translateY(-2px);\n    box-shadow: 0 6px 16px rgba(15, 15, 16, 0.3);\n  }\n  :host ::ng-deep .submit-button button:active {\n    transform: translateY(0);\n  }\n  .forgot-password-link {\n    margin-top: 0.75rem;\n  }\n  .warning-alert,\n  .error-alert,\n  .success-alert {\n    border-radius: 12px;\n    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  }\n}\n@media (max-width: 640px) {\n  .auth-page {\n    flex-direction: column;\n    min-height: 100vh;\n    height: auto;\n    background:\n      linear-gradient(\n        135deg,\n        #f8fafc 0%,\n        #f1f5f9 50%,\n        #e2e8f0 100%);\n    position: relative;\n    overflow-x: hidden;\n  }\n  .auth-page::before {\n    content: "";\n    position: absolute;\n    width: 200%;\n    height: 200%;\n    top: -50%;\n    left: -50%;\n    background:\n      radial-gradient(\n        circle at 20% 30%,\n        rgba(22, 163, 74, 0.08) 0%,\n        transparent 50%),\n      radial-gradient(\n        circle at 80% 70%,\n        rgba(15, 15, 16, 0.06) 0%,\n        transparent 50%);\n    animation: float 20s ease-in-out infinite;\n    z-index: 0;\n    pointer-events: none;\n  }\n  @keyframes float {\n    0%, 100% {\n      transform: translate(0, 0) rotate(0deg);\n    }\n    33% {\n      transform: translate(30px, -30px) rotate(120deg);\n    }\n    66% {\n      transform: translate(-20px, 20px) rotate(240deg);\n    }\n  }\n  .promo-panel-desktop {\n    display: block;\n  }\n  .form-panel {\n    flex: 1;\n    padding: 2rem 1.5rem 3rem;\n    margin-top: -40px;\n    position: relative;\n    z-index: 3;\n    background: #ffffff;\n    box-shadow: 0 -8px 32px rgba(0, 0, 0, 0.12);\n    border-top-left-radius: 30px;\n    border-top-right-radius: 30px;\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n    min-height: auto;\n  }\n  .form-content {\n    max-width: 100%;\n    animation: slideUpMobile 0.6s cubic-bezier(0.16, 1, 0.3, 1);\n    position: relative;\n    z-index: 2;\n  }\n  @keyframes slideUpMobile {\n    from {\n      opacity: 0;\n      transform: translateY(40px) scale(0.95);\n    }\n    to {\n      opacity: 1;\n      transform: translateY(0) scale(1);\n    }\n  }\n  .form-header {\n    text-align: center;\n    margin-bottom: 2rem;\n    position: relative;\n  }\n  .brand-name {\n    font-size: 1.875rem;\n    margin-bottom: 0.5rem;\n    background:\n      linear-gradient(\n        135deg,\n        #16A34A 0%,\n        #15803d 50%,\n        #0F0F10 100%);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    background-clip: text;\n    letter-spacing: -0.03em;\n  }\n  .welcome-title {\n    font-size: 1.5rem;\n    margin-bottom: 1rem;\n    color: #1a202c;\n    font-weight: 700;\n  }\n  .register-prompt,\n  .login-prompt,\n  .back-to-login-prompt {\n    font-size: 0.875rem;\n    margin-top: 0.5rem;\n  }\n  .auth-form,\n  .login-form,\n  .register-form,\n  .activation-form,\n  .reset-password-form,\n  .forgot-password-form {\n    gap: 1.25rem;\n    margin-top: 1rem;\n  }\n  .submit-button {\n    margin-top: 0.5rem;\n  }\n  :host ::ng-deep .submit-button button {\n    box-shadow: 0 4px 12px rgba(15, 15, 16, 0.2);\n    transform: translateY(0);\n    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  }\n  :host ::ng-deep .submit-button button:hover {\n    transform: translateY(-2px);\n    box-shadow: 0 6px 16px rgba(15, 15, 16, 0.3);\n  }\n  :host ::ng-deep .submit-button button:active {\n    transform: translateY(0);\n  }\n  .forgot-password-link {\n    margin-top: 0.75rem;\n  }\n  .warning-alert,\n  .error-alert,\n  .success-alert {\n    border-radius: 12px;\n    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  }\n  .form-footer {\n    margin-top: 2rem;\n    text-align: center;\n    padding-top: 1.5rem;\n    border-top: 1px solid rgba(0, 0, 0, 0.05);\n  }\n  .form-footer span {\n    font-size: 0.75rem;\n    color: #64748b;\n    opacity: 0.8;\n  }\n}\n@media (max-width: 480px) {\n  .form-panel {\n    padding: 1.5rem 1.25rem;\n    border-top-left-radius: 20px;\n    border-top-right-radius: 20px;\n  }\n  .brand-name {\n    font-size: 1.625rem;\n  }\n  .welcome-title {\n    font-size: 1.375rem;\n  }\n  .form-header {\n    margin-bottom: 1.5rem;\n  }\n  .auth-form,\n  .login-form,\n  .register-form,\n  .activation-form,\n  .reset-password-form,\n  .forgot-password-form {\n    gap: 1rem;\n  }\n}\n/*# sourceMappingURL=forgot-password-page.component.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ForgotPasswordPageComponent, { className: "ForgotPasswordPageComponent", filePath: "src/app/features/auth/pages/forgot-password-page/forgot-password-page.component.ts", lineNumber: 203 });
})();
export {
  ForgotPasswordPageComponent
};
//# sourceMappingURL=chunk-IZW3RUMU.js.map
