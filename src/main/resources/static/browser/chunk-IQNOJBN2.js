import {
  AuthPromoPanelComponent
} from "./chunk-HE2MDFZ5.js";
import {
  AlertComponent,
  InputComponent
} from "./chunk-HLUWAVKV.js";
import {
  clearError,
  resetPassword
} from "./chunk-RGRYYUAV.js";
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
} from "./chunk-FWOTYYMW.js";
import {
  Store,
  selectAuthError,
  selectIsLoading
} from "./chunk-TXMBCBB4.js";
import "./chunk-6F7JLQXK.js";
import {
  ActivatedRoute,
  CommonModule,
  Component,
  NgIf,
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
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-THV7WX37.js";

// src/app/features/auth/pages/reset-password-page/reset-password-page.component.ts
function ResetPasswordPageComponent_app_alert_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-alert", 14);
    \u0275\u0275listener("dismissed", function ResetPasswordPageComponent_app_alert_9_Template_app_alert_dismissed_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.errorMessage = "");
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("title", "\u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u043C\u0435\u043D\u044B \u043F\u0430\u0440\u043E\u043B\u044F")("dismissible", true);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.errorMessage, " ");
  }
}
function ResetPasswordPageComponent_app_alert_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-alert", 15);
    \u0275\u0275listener("dismissed", function ResetPasswordPageComponent_app_alert_10_Template_app_alert_dismissed_0_listener() {
      \u0275\u0275restoreView(_r3);
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
var ResetPasswordPageComponent = class _ResetPasswordPageComponent {
  fb = inject(FormBuilder);
  route = inject(ActivatedRoute);
  store = inject(Store);
  destroy$ = new Subject();
  resetPasswordForm;
  isLoading = false;
  errorMessage = "";
  successMessage = "";
  resetToken = null;
  constructor() {
    this.resetPasswordForm = this.fb.group({
      password: ["", [Validators.required, Validators.minLength(6)]],
      confirmPassword: ["", [Validators.required]]
    }, { validators: this.passwordMatchValidator });
  }
  ngOnInit() {
    this.store.dispatch(clearError());
    this.resetToken = this.route.snapshot.queryParams["token"];
    if (!this.resetToken) {
      this.errorMessage = "\u0422\u043E\u043A\u0435\u043D \u0441\u0431\u0440\u043E\u0441\u0430 \u043F\u0430\u0440\u043E\u043B\u044F \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D. \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u0441\u0441\u044B\u043B\u043A\u0443 \u0438\u0437 \u043F\u0438\u0441\u044C\u043C\u0430.";
    }
    this.store.select(selectIsLoading).pipe(takeUntil(this.destroy$)).subscribe((isLoading) => {
      this.isLoading = isLoading;
    });
    this.store.select(selectAuthError).pipe(takeUntil(this.destroy$)).subscribe((error) => {
      if (error) {
        this.errorMessage = error;
        this.successMessage = "";
      }
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  passwordMatchValidator(control) {
    const password = control.get("password");
    const confirmPassword = control.get("confirmPassword");
    if (password && confirmPassword && password.value !== confirmPassword.value) {
      confirmPassword.setErrors({ passwordMismatch: true });
      return { passwordMismatch: true };
    }
    if (confirmPassword && confirmPassword.errors && confirmPassword.errors["passwordMismatch"] && password && password.value === confirmPassword.value) {
      confirmPassword.setErrors(null);
    }
    return null;
  }
  onSubmit() {
    if (this.resetPasswordForm.valid && this.resetToken) {
      this.errorMessage = "";
      this.successMessage = "";
      const formValue = this.resetPasswordForm.value;
      const resetData = {
        token: this.resetToken,
        password: formValue.password
      };
      console.log("[ResetPasswordPage] Resetting password with token:", this.resetToken);
      this.store.dispatch(resetPassword({ data: resetData }));
    } else if (!this.resetToken) {
      this.errorMessage = "\u0422\u043E\u043A\u0435\u043D \u0441\u0431\u0440\u043E\u0441\u0430 \u043F\u0430\u0440\u043E\u043B\u044F \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D. \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u0441\u0441\u044B\u043B\u043A\u0443 \u0438\u0437 \u043F\u0438\u0441\u044C\u043C\u0430.";
    }
  }
  getErrorMessage(controlName) {
    const control = this.resetPasswordForm.get(controlName);
    if (control?.errors && control.touched) {
      if (control.errors["required"]) {
        return "\u042D\u0442\u043E \u043F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u0434\u043B\u044F \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F";
      }
      if (control.errors["minlength"]) {
        return `\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0434\u043B\u0438\u043D\u0430: ${control.errors["minlength"].requiredLength} \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432`;
      }
      if (control.errors["passwordMismatch"]) {
        return "\u041F\u0430\u0440\u043E\u043B\u0438 \u043D\u0435 \u0441\u043E\u0432\u043F\u0430\u0434\u0430\u044E\u0442";
      }
    }
    return "";
  }
  static \u0275fac = function ResetPasswordPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ResetPasswordPageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ResetPasswordPageComponent, selectors: [["app-reset-password-page"]], decls: 19, vars: 11, consts: [[1, "reset-password-page", "auth-page"], [1, "promo-panel-desktop"], [1, "form-panel"], [1, "form-content"], [1, "form-header"], [1, "brand-name"], [1, "welcome-title"], ["type", "error", "class", "error-alert", 3, "title", "dismissible", "dismissed", 4, "ngIf"], ["type", "success", "class", "success-alert", 3, "title", "dismissible", "dismissed", 4, "ngIf"], [1, "reset-password-form", "auth-form", 3, "ngSubmit", "formGroup"], ["id", "password", "label", "\u041D\u043E\u0432\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C", "type", "password", "placeholder", "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u043E\u0432\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C", "formControlName", "password", 3, "errorMessage", "required", "showPasswordToggle"], ["id", "confirmPassword", "label", "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C", "type", "password", "placeholder", "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u043D\u043E\u0432\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C", "formControlName", "confirmPassword", 3, "errorMessage", "required", "showPasswordToggle"], ["buttonType", "primary", "type", "submit", 1, "submit-button", 3, "disabled", "loading"], [1, "form-footer"], ["type", "error", 1, "error-alert", 3, "dismissed", "title", "dismissible"], ["type", "success", 1, "success-alert", 3, "dismissed", "title", "dismissible"]], template: function ResetPasswordPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-auth-promo-panel", 1);
      \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h2", 5);
      \u0275\u0275text(6, "WestWood");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "h3", 6);
      \u0275\u0275text(8, "\u0421\u043C\u0435\u043D\u0430 \u043F\u0430\u0440\u043E\u043B\u044F");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(9, ResetPasswordPageComponent_app_alert_9_Template, 2, 3, "app-alert", 7)(10, ResetPasswordPageComponent_app_alert_10_Template, 2, 3, "app-alert", 8);
      \u0275\u0275elementStart(11, "form", 9);
      \u0275\u0275listener("ngSubmit", function ResetPasswordPageComponent_Template_form_ngSubmit_11_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275element(12, "app-input", 10)(13, "app-input", 11);
      \u0275\u0275elementStart(14, "app-button", 12);
      \u0275\u0275text(15, " \u0421\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "div", 13)(17, "span");
      \u0275\u0275text(18, "\xA9 2026 WestWood. \u0412\u0441\u0435 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043D\u044B.");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.successMessage);
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.resetPasswordForm);
      \u0275\u0275advance();
      \u0275\u0275property("errorMessage", ctx.getErrorMessage("password"))("required", true)("showPasswordToggle", true);
      \u0275\u0275advance();
      \u0275\u0275property("errorMessage", ctx.getErrorMessage("confirmPassword"))("required", true)("showPasswordToggle", true);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.resetPasswordForm.invalid)("loading", ctx.isLoading);
    }
  }, dependencies: [
    CommonModule,
    NgIf,
    ReactiveFormsModule,
    \u0275NgNoValidate,
    NgControlStatus,
    NgControlStatusGroup,
    RequiredValidator,
    FormGroupDirective,
    FormControlName,
    RouterModule,
    AlertComponent,
    InputComponent,
    ButtonComponent,
    AuthPromoPanelComponent
  ], styles: ['\n\n.reset-password-page[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n  height: 100vh;\n  background: #F5F6F8;\n}\n.form-panel[_ngcontent-%COMP%] {\n  flex: 0 0 45%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem;\n  background: #ffffff;\n}\n.form-content[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 360px;\n  animation: _ngcontent-%COMP%_slideUp 0.5s ease-out;\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.form-header[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.brand-name[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: #1a202c;\n  margin: 0 0 0.75rem 0;\n  letter-spacing: -0.02em;\n}\n.welcome-title[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #1a202c;\n  margin: 0;\n}\n.error-alert[_ngcontent-%COMP%], \n.success-alert[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n  animation: _ngcontent-%COMP%_shake 0.5s ease-out;\n}\n@keyframes _ngcontent-%COMP%_shake {\n  0%, 100% {\n    transform: translateX(0);\n  }\n  25% {\n    transform: translateX(-10px);\n  }\n  75% {\n    transform: translateX(10px);\n  }\n}\n.reset-password-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.submit-button[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 0.25rem;\n}\n[_nghost-%COMP%]     .submit-button button {\n  width: 100%;\n  padding: 0.875rem 1.5rem !important;\n  font-size: 1rem !important;\n  font-weight: 600 !important;\n  border-radius: 4px !important;\n  background-color: #0F0F10 !important;\n  color: white !important;\n  transition: all 0.2s ease !important;\n}\n.form-footer[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (max-width: 1024px) {\n  .auth-page[_ngcontent-%COMP%] {\n    flex-direction: column;\n    min-height: 100vh;\n    height: auto;\n    background:\n      linear-gradient(\n        135deg,\n        #f8fafc 0%,\n        #f1f5f9 50%,\n        #e2e8f0 100%);\n    position: relative;\n    overflow-x: hidden;\n    overflow-y: auto;\n  }\n  .auth-page[_ngcontent-%COMP%]::before {\n    content: "";\n    position: absolute;\n    width: 200%;\n    height: 200%;\n    top: -50%;\n    left: -50%;\n    background:\n      radial-gradient(\n        circle at 20% 30%,\n        rgba(22, 163, 74, 0.08) 0%,\n        transparent 50%),\n      radial-gradient(\n        circle at 80% 70%,\n        rgba(15, 15, 16, 0.06) 0%,\n        transparent 50%);\n    animation: float 20s ease-in-out infinite;\n    z-index: 0;\n    pointer-events: none;\n  }\n  @keyframes float {\n    0%, 100% {\n      transform: translate(0, 0) rotate(0deg);\n    }\n    33% {\n      transform: translate(30px, -30px) rotate(120deg);\n    }\n    66% {\n      transform: translate(-20px, 20px) rotate(240deg);\n    }\n  }\n  .promo-panel-desktop[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .form-panel[_ngcontent-%COMP%] {\n    flex: 1;\n    padding: 2.5rem 2rem 3rem;\n    margin-top: -50px;\n    position: relative;\n    z-index: 3;\n    background: #ffffff;\n    box-shadow: 0 -8px 32px rgba(0, 0, 0, 0.12);\n    border-top-left-radius: 30px;\n    border-top-right-radius: 30px;\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n    min-height: auto;\n  }\n  .form-content[_ngcontent-%COMP%] {\n    max-width: 480px;\n    margin: 0 auto;\n    animation: slideUpMobile 0.6s cubic-bezier(0.16, 1, 0.3, 1);\n    position: relative;\n    z-index: 2;\n  }\n  @keyframes slideUpMobile {\n    from {\n      opacity: 0;\n      transform: translateY(40px) scale(0.95);\n    }\n    to {\n      opacity: 1;\n      transform: translateY(0) scale(1);\n    }\n  }\n  .form-header[_ngcontent-%COMP%] {\n    text-align: center;\n    margin-bottom: 2rem;\n    position: relative;\n  }\n  .brand-name[_ngcontent-%COMP%] {\n    font-size: 2rem;\n    margin-bottom: 0.5rem;\n    background:\n      linear-gradient(\n        135deg,\n        #16A34A 0%,\n        #15803d 50%,\n        #0F0F10 100%);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    background-clip: text;\n    letter-spacing: -0.03em;\n  }\n  .welcome-title[_ngcontent-%COMP%] {\n    font-size: 1.75rem;\n    margin-bottom: 1rem;\n    color: #1a202c;\n    font-weight: 700;\n  }\n  .register-prompt[_ngcontent-%COMP%], \n   .login-prompt[_ngcontent-%COMP%], \n   .back-to-login-prompt[_ngcontent-%COMP%] {\n    font-size: 0.9375rem;\n    margin-top: 0.5rem;\n  }\n  .auth-form[_ngcontent-%COMP%], \n   .login-form[_ngcontent-%COMP%], \n   .register-form[_ngcontent-%COMP%], \n   .activation-form[_ngcontent-%COMP%], \n   .reset-password-form[_ngcontent-%COMP%], \n   .forgot-password-form[_ngcontent-%COMP%] {\n    gap: 1.25rem;\n    margin-top: 1rem;\n  }\n  .submit-button[_ngcontent-%COMP%] {\n    margin-top: 0.5rem;\n  }\n  [_nghost-%COMP%]     .submit-button button {\n    box-shadow: 0 4px 12px rgba(15, 15, 16, 0.2);\n    transform: translateY(0);\n    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  }\n  [_nghost-%COMP%]     .submit-button button:hover {\n    transform: translateY(-2px);\n    box-shadow: 0 6px 16px rgba(15, 15, 16, 0.3);\n  }\n  [_nghost-%COMP%]     .submit-button button:active {\n    transform: translateY(0);\n  }\n  .forgot-password-link[_ngcontent-%COMP%] {\n    margin-top: 0.75rem;\n  }\n  .warning-alert[_ngcontent-%COMP%], \n   .error-alert[_ngcontent-%COMP%], \n   .success-alert[_ngcontent-%COMP%] {\n    border-radius: 12px;\n    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  }\n}\n@media (max-width: 640px) {\n  .auth-page[_ngcontent-%COMP%] {\n    flex-direction: column;\n    min-height: 100vh;\n    height: auto;\n    background:\n      linear-gradient(\n        135deg,\n        #f8fafc 0%,\n        #f1f5f9 50%,\n        #e2e8f0 100%);\n    position: relative;\n    overflow-x: hidden;\n  }\n  .auth-page[_ngcontent-%COMP%]::before {\n    content: "";\n    position: absolute;\n    width: 200%;\n    height: 200%;\n    top: -50%;\n    left: -50%;\n    background:\n      radial-gradient(\n        circle at 20% 30%,\n        rgba(22, 163, 74, 0.08) 0%,\n        transparent 50%),\n      radial-gradient(\n        circle at 80% 70%,\n        rgba(15, 15, 16, 0.06) 0%,\n        transparent 50%);\n    animation: float 20s ease-in-out infinite;\n    z-index: 0;\n    pointer-events: none;\n  }\n  @keyframes float {\n    0%, 100% {\n      transform: translate(0, 0) rotate(0deg);\n    }\n    33% {\n      transform: translate(30px, -30px) rotate(120deg);\n    }\n    66% {\n      transform: translate(-20px, 20px) rotate(240deg);\n    }\n  }\n  .promo-panel-desktop[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .form-panel[_ngcontent-%COMP%] {\n    flex: 1;\n    padding: 2rem 1.5rem 3rem;\n    margin-top: -40px;\n    position: relative;\n    z-index: 3;\n    background: #ffffff;\n    box-shadow: 0 -8px 32px rgba(0, 0, 0, 0.12);\n    border-top-left-radius: 30px;\n    border-top-right-radius: 30px;\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n    min-height: auto;\n  }\n  .form-content[_ngcontent-%COMP%] {\n    max-width: 100%;\n    animation: slideUpMobile 0.6s cubic-bezier(0.16, 1, 0.3, 1);\n    position: relative;\n    z-index: 2;\n  }\n  @keyframes slideUpMobile {\n    from {\n      opacity: 0;\n      transform: translateY(40px) scale(0.95);\n    }\n    to {\n      opacity: 1;\n      transform: translateY(0) scale(1);\n    }\n  }\n  .form-header[_ngcontent-%COMP%] {\n    text-align: center;\n    margin-bottom: 2rem;\n    position: relative;\n  }\n  .brand-name[_ngcontent-%COMP%] {\n    font-size: 1.875rem;\n    margin-bottom: 0.5rem;\n    background:\n      linear-gradient(\n        135deg,\n        #16A34A 0%,\n        #15803d 50%,\n        #0F0F10 100%);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    background-clip: text;\n    letter-spacing: -0.03em;\n  }\n  .welcome-title[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n    margin-bottom: 1rem;\n    color: #1a202c;\n    font-weight: 700;\n  }\n  .register-prompt[_ngcontent-%COMP%], \n   .login-prompt[_ngcontent-%COMP%], \n   .back-to-login-prompt[_ngcontent-%COMP%] {\n    font-size: 0.875rem;\n    margin-top: 0.5rem;\n  }\n  .auth-form[_ngcontent-%COMP%], \n   .login-form[_ngcontent-%COMP%], \n   .register-form[_ngcontent-%COMP%], \n   .activation-form[_ngcontent-%COMP%], \n   .reset-password-form[_ngcontent-%COMP%], \n   .forgot-password-form[_ngcontent-%COMP%] {\n    gap: 1.25rem;\n    margin-top: 1rem;\n  }\n  .submit-button[_ngcontent-%COMP%] {\n    margin-top: 0.5rem;\n  }\n  [_nghost-%COMP%]     .submit-button button {\n    box-shadow: 0 4px 12px rgba(15, 15, 16, 0.2);\n    transform: translateY(0);\n    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  }\n  [_nghost-%COMP%]     .submit-button button:hover {\n    transform: translateY(-2px);\n    box-shadow: 0 6px 16px rgba(15, 15, 16, 0.3);\n  }\n  [_nghost-%COMP%]     .submit-button button:active {\n    transform: translateY(0);\n  }\n  .forgot-password-link[_ngcontent-%COMP%] {\n    margin-top: 0.75rem;\n  }\n  .warning-alert[_ngcontent-%COMP%], \n   .error-alert[_ngcontent-%COMP%], \n   .success-alert[_ngcontent-%COMP%] {\n    border-radius: 12px;\n    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  }\n  .form-footer[_ngcontent-%COMP%] {\n    margin-top: 2rem;\n    text-align: center;\n    padding-top: 1.5rem;\n    border-top: 1px solid rgba(0, 0, 0, 0.05);\n  }\n  .form-footer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n    color: #64748b;\n    opacity: 0.8;\n  }\n}\n@media (max-width: 480px) {\n  .form-panel[_ngcontent-%COMP%] {\n    padding: 1.5rem 1.25rem;\n    border-top-left-radius: 20px;\n    border-top-right-radius: 20px;\n  }\n  .brand-name[_ngcontent-%COMP%] {\n    font-size: 1.625rem;\n  }\n  .welcome-title[_ngcontent-%COMP%] {\n    font-size: 1.375rem;\n  }\n  .form-header[_ngcontent-%COMP%] {\n    margin-bottom: 1.5rem;\n  }\n  .auth-form[_ngcontent-%COMP%], \n   .login-form[_ngcontent-%COMP%], \n   .register-form[_ngcontent-%COMP%], \n   .activation-form[_ngcontent-%COMP%], \n   .reset-password-form[_ngcontent-%COMP%], \n   .forgot-password-form[_ngcontent-%COMP%] {\n    gap: 1rem;\n  }\n}\n/*# sourceMappingURL=reset-password-page.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResetPasswordPageComponent, [{
    type: Component,
    args: [{ selector: "app-reset-password-page", standalone: true, imports: [
      CommonModule,
      ReactiveFormsModule,
      RouterModule,
      AlertComponent,
      InputComponent,
      ButtonComponent,
      AuthPromoPanelComponent
    ], template: `
    <div class="reset-password-page auth-page">
      <!-- Left Promotional Panel -->
      <app-auth-promo-panel class="promo-panel-desktop"></app-auth-promo-panel>

      <!-- Right Reset Password Form Panel -->
      <div class="form-panel">
        <div class="form-content">
          <div class="form-header">
            <h2 class="brand-name">WestWood</h2>
            <h3 class="welcome-title">\u0421\u043C\u0435\u043D\u0430 \u043F\u0430\u0440\u043E\u043B\u044F</h3>
          </div>

          <app-alert
            *ngIf="errorMessage"
            type="error"
            [title]="'\u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u043C\u0435\u043D\u044B \u043F\u0430\u0440\u043E\u043B\u044F'"
            [dismissible]="true"
            (dismissed)="errorMessage = ''"
            class="error-alert">
            {{ errorMessage }}
          </app-alert>

          <app-alert
            *ngIf="successMessage"
            type="success"
            [title]="'\u0423\u0441\u043F\u0435\u0448\u043D\u043E'"
            [dismissible]="true"
            (dismissed)="successMessage = ''"
            class="success-alert">
            {{ successMessage }}
          </app-alert>

          <form [formGroup]="resetPasswordForm" (ngSubmit)="onSubmit()" class="reset-password-form auth-form">
            <app-input
              id="password"
              label="\u041D\u043E\u0432\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C"
              type="password"
              placeholder="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u043E\u0432\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C"
              formControlName="password"
              [errorMessage]="getErrorMessage('password')"
              [required]="true"
              [showPasswordToggle]="true">
            </app-input>

            <app-input
              id="confirmPassword"
              label="\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C"
              type="password"
              placeholder="\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u043D\u043E\u0432\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C"
              formControlName="confirmPassword"
              [errorMessage]="getErrorMessage('confirmPassword')"
              [required]="true"
              [showPasswordToggle]="true">
            </app-input>

            <app-button
              buttonType="primary"
              type="submit"
              [disabled]="resetPasswordForm.invalid"
              [loading]="isLoading"
              class="submit-button">
              \u0421\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C
            </app-button>
          </form>

          <div class="form-footer">
            <span>\xA9 2026 WestWood. \u0412\u0441\u0435 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043D\u044B.</span>
          </div>
        </div>
      </div>
    </div>
  `, styles: ['/* angular:styles/component:css;4f0c250928aeab7f8209e428c5e5c6b1254b5936eebee3c510df4c2a4ed79440;/Users/baglan/repo/westwood/westwood-frontend/src/app/features/auth/pages/reset-password-page/reset-password-page.component.ts */\n.reset-password-page {\n  display: flex;\n  min-height: 100vh;\n  height: 100vh;\n  background: #F5F6F8;\n}\n.form-panel {\n  flex: 0 0 45%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem;\n  background: #ffffff;\n}\n.form-content {\n  width: 100%;\n  max-width: 360px;\n  animation: slideUp 0.5s ease-out;\n}\n@keyframes slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.form-header {\n  margin-bottom: 2rem;\n}\n.brand-name {\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: #1a202c;\n  margin: 0 0 0.75rem 0;\n  letter-spacing: -0.02em;\n}\n.welcome-title {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #1a202c;\n  margin: 0;\n}\n.error-alert,\n.success-alert {\n  margin-bottom: 1.5rem;\n  animation: shake 0.5s ease-out;\n}\n@keyframes shake {\n  0%, 100% {\n    transform: translateX(0);\n  }\n  25% {\n    transform: translateX(-10px);\n  }\n  75% {\n    transform: translateX(10px);\n  }\n}\n.reset-password-form {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.submit-button {\n  width: 100%;\n  margin-top: 0.25rem;\n}\n:host ::ng-deep .submit-button button {\n  width: 100%;\n  padding: 0.875rem 1.5rem !important;\n  font-size: 1rem !important;\n  font-weight: 600 !important;\n  border-radius: 4px !important;\n  background-color: #0F0F10 !important;\n  color: white !important;\n  transition: all 0.2s ease !important;\n}\n.form-footer {\n  display: none;\n}\n@media (max-width: 1024px) {\n  .auth-page {\n    flex-direction: column;\n    min-height: 100vh;\n    height: auto;\n    background:\n      linear-gradient(\n        135deg,\n        #f8fafc 0%,\n        #f1f5f9 50%,\n        #e2e8f0 100%);\n    position: relative;\n    overflow-x: hidden;\n    overflow-y: auto;\n  }\n  .auth-page::before {\n    content: "";\n    position: absolute;\n    width: 200%;\n    height: 200%;\n    top: -50%;\n    left: -50%;\n    background:\n      radial-gradient(\n        circle at 20% 30%,\n        rgba(22, 163, 74, 0.08) 0%,\n        transparent 50%),\n      radial-gradient(\n        circle at 80% 70%,\n        rgba(15, 15, 16, 0.06) 0%,\n        transparent 50%);\n    animation: float 20s ease-in-out infinite;\n    z-index: 0;\n    pointer-events: none;\n  }\n  @keyframes float {\n    0%, 100% {\n      transform: translate(0, 0) rotate(0deg);\n    }\n    33% {\n      transform: translate(30px, -30px) rotate(120deg);\n    }\n    66% {\n      transform: translate(-20px, 20px) rotate(240deg);\n    }\n  }\n  .promo-panel-desktop {\n    display: block;\n  }\n  .form-panel {\n    flex: 1;\n    padding: 2.5rem 2rem 3rem;\n    margin-top: -50px;\n    position: relative;\n    z-index: 3;\n    background: #ffffff;\n    box-shadow: 0 -8px 32px rgba(0, 0, 0, 0.12);\n    border-top-left-radius: 30px;\n    border-top-right-radius: 30px;\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n    min-height: auto;\n  }\n  .form-content {\n    max-width: 480px;\n    margin: 0 auto;\n    animation: slideUpMobile 0.6s cubic-bezier(0.16, 1, 0.3, 1);\n    position: relative;\n    z-index: 2;\n  }\n  @keyframes slideUpMobile {\n    from {\n      opacity: 0;\n      transform: translateY(40px) scale(0.95);\n    }\n    to {\n      opacity: 1;\n      transform: translateY(0) scale(1);\n    }\n  }\n  .form-header {\n    text-align: center;\n    margin-bottom: 2rem;\n    position: relative;\n  }\n  .brand-name {\n    font-size: 2rem;\n    margin-bottom: 0.5rem;\n    background:\n      linear-gradient(\n        135deg,\n        #16A34A 0%,\n        #15803d 50%,\n        #0F0F10 100%);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    background-clip: text;\n    letter-spacing: -0.03em;\n  }\n  .welcome-title {\n    font-size: 1.75rem;\n    margin-bottom: 1rem;\n    color: #1a202c;\n    font-weight: 700;\n  }\n  .register-prompt,\n  .login-prompt,\n  .back-to-login-prompt {\n    font-size: 0.9375rem;\n    margin-top: 0.5rem;\n  }\n  .auth-form,\n  .login-form,\n  .register-form,\n  .activation-form,\n  .reset-password-form,\n  .forgot-password-form {\n    gap: 1.25rem;\n    margin-top: 1rem;\n  }\n  .submit-button {\n    margin-top: 0.5rem;\n  }\n  :host ::ng-deep .submit-button button {\n    box-shadow: 0 4px 12px rgba(15, 15, 16, 0.2);\n    transform: translateY(0);\n    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  }\n  :host ::ng-deep .submit-button button:hover {\n    transform: translateY(-2px);\n    box-shadow: 0 6px 16px rgba(15, 15, 16, 0.3);\n  }\n  :host ::ng-deep .submit-button button:active {\n    transform: translateY(0);\n  }\n  .forgot-password-link {\n    margin-top: 0.75rem;\n  }\n  .warning-alert,\n  .error-alert,\n  .success-alert {\n    border-radius: 12px;\n    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  }\n}\n@media (max-width: 640px) {\n  .auth-page {\n    flex-direction: column;\n    min-height: 100vh;\n    height: auto;\n    background:\n      linear-gradient(\n        135deg,\n        #f8fafc 0%,\n        #f1f5f9 50%,\n        #e2e8f0 100%);\n    position: relative;\n    overflow-x: hidden;\n  }\n  .auth-page::before {\n    content: "";\n    position: absolute;\n    width: 200%;\n    height: 200%;\n    top: -50%;\n    left: -50%;\n    background:\n      radial-gradient(\n        circle at 20% 30%,\n        rgba(22, 163, 74, 0.08) 0%,\n        transparent 50%),\n      radial-gradient(\n        circle at 80% 70%,\n        rgba(15, 15, 16, 0.06) 0%,\n        transparent 50%);\n    animation: float 20s ease-in-out infinite;\n    z-index: 0;\n    pointer-events: none;\n  }\n  @keyframes float {\n    0%, 100% {\n      transform: translate(0, 0) rotate(0deg);\n    }\n    33% {\n      transform: translate(30px, -30px) rotate(120deg);\n    }\n    66% {\n      transform: translate(-20px, 20px) rotate(240deg);\n    }\n  }\n  .promo-panel-desktop {\n    display: block;\n  }\n  .form-panel {\n    flex: 1;\n    padding: 2rem 1.5rem 3rem;\n    margin-top: -40px;\n    position: relative;\n    z-index: 3;\n    background: #ffffff;\n    box-shadow: 0 -8px 32px rgba(0, 0, 0, 0.12);\n    border-top-left-radius: 30px;\n    border-top-right-radius: 30px;\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n    min-height: auto;\n  }\n  .form-content {\n    max-width: 100%;\n    animation: slideUpMobile 0.6s cubic-bezier(0.16, 1, 0.3, 1);\n    position: relative;\n    z-index: 2;\n  }\n  @keyframes slideUpMobile {\n    from {\n      opacity: 0;\n      transform: translateY(40px) scale(0.95);\n    }\n    to {\n      opacity: 1;\n      transform: translateY(0) scale(1);\n    }\n  }\n  .form-header {\n    text-align: center;\n    margin-bottom: 2rem;\n    position: relative;\n  }\n  .brand-name {\n    font-size: 1.875rem;\n    margin-bottom: 0.5rem;\n    background:\n      linear-gradient(\n        135deg,\n        #16A34A 0%,\n        #15803d 50%,\n        #0F0F10 100%);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    background-clip: text;\n    letter-spacing: -0.03em;\n  }\n  .welcome-title {\n    font-size: 1.5rem;\n    margin-bottom: 1rem;\n    color: #1a202c;\n    font-weight: 700;\n  }\n  .register-prompt,\n  .login-prompt,\n  .back-to-login-prompt {\n    font-size: 0.875rem;\n    margin-top: 0.5rem;\n  }\n  .auth-form,\n  .login-form,\n  .register-form,\n  .activation-form,\n  .reset-password-form,\n  .forgot-password-form {\n    gap: 1.25rem;\n    margin-top: 1rem;\n  }\n  .submit-button {\n    margin-top: 0.5rem;\n  }\n  :host ::ng-deep .submit-button button {\n    box-shadow: 0 4px 12px rgba(15, 15, 16, 0.2);\n    transform: translateY(0);\n    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  }\n  :host ::ng-deep .submit-button button:hover {\n    transform: translateY(-2px);\n    box-shadow: 0 6px 16px rgba(15, 15, 16, 0.3);\n  }\n  :host ::ng-deep .submit-button button:active {\n    transform: translateY(0);\n  }\n  .forgot-password-link {\n    margin-top: 0.75rem;\n  }\n  .warning-alert,\n  .error-alert,\n  .success-alert {\n    border-radius: 12px;\n    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  }\n  .form-footer {\n    margin-top: 2rem;\n    text-align: center;\n    padding-top: 1.5rem;\n    border-top: 1px solid rgba(0, 0, 0, 0.05);\n  }\n  .form-footer span {\n    font-size: 0.75rem;\n    color: #64748b;\n    opacity: 0.8;\n  }\n}\n@media (max-width: 480px) {\n  .form-panel {\n    padding: 1.5rem 1.25rem;\n    border-top-left-radius: 20px;\n    border-top-right-radius: 20px;\n  }\n  .brand-name {\n    font-size: 1.625rem;\n  }\n  .welcome-title {\n    font-size: 1.375rem;\n  }\n  .form-header {\n    margin-bottom: 1.5rem;\n  }\n  .auth-form,\n  .login-form,\n  .register-form,\n  .activation-form,\n  .reset-password-form,\n  .forgot-password-form {\n    gap: 1rem;\n  }\n}\n/*# sourceMappingURL=reset-password-page.component.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ResetPasswordPageComponent, { className: "ResetPasswordPageComponent", filePath: "src/app/features/auth/pages/reset-password-page/reset-password-page.component.ts", lineNumber: 192 });
})();
export {
  ResetPasswordPageComponent
};
//# sourceMappingURL=chunk-IQNOJBN2.js.map
