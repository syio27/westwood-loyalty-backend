import {
  BehaviorSubject,
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-NKSGOSP5.js";

// src/app/core/services/toast.service.ts
var ToastService = class _ToastService {
  toastsSubject = new BehaviorSubject([]);
  toasts$ = this.toastsSubject.asObservable();
  defaultDuration = 3e3;
  // 3 секунды
  show(message, type = "success", duration = this.defaultDuration) {
    const toast = {
      id: this.generateId(),
      message,
      type,
      duration
    };
    const currentToasts = this.toastsSubject.value;
    this.toastsSubject.next([...currentToasts, toast]);
  }
  success(message, duration = this.defaultDuration) {
    this.show(message, "success", duration);
  }
  error(message, duration = this.defaultDuration) {
    this.show(message, "error", duration);
  }
  /**
   * Show a toast with an optional action button (e.g. "Undo").
   */
  showWithAction(message, action, type = "success", duration = this.defaultDuration) {
    const toast = {
      id: this.generateId(),
      message,
      type,
      duration,
      action
    };
    const currentToasts = this.toastsSubject.value;
    this.toastsSubject.next([...currentToasts, toast]);
  }
  remove(id) {
    const currentToasts = this.toastsSubject.value;
    this.toastsSubject.next(currentToasts.filter((toast) => toast.id !== id));
  }
  clear() {
    this.toastsSubject.next([]);
  }
  generateId() {
    return `toast-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }
  static \u0275fac = function ToastService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToastService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ToastService, factory: _ToastService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  ToastService
};
//# sourceMappingURL=chunk-O5QEVFND.js.map
