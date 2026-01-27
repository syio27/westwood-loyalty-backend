import {
  ModalComponent
} from "./chunk-5JCDK4OZ.js";
import {
  ButtonComponent,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-3N5Z3XGP.js";
import {
  CommonModule,
  Component,
  EventEmitter,
  Input,
  NgIf,
  Output,
  __spreadProps,
  __spreadValues,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-MTXXT26T.js";

// src/app/shared/components/refund-confirmation-modal/refund-confirmation-modal.component.ts
function RefundConfirmationModalComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "p", 3);
    \u0275\u0275text(2, " \u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B, \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0432\u0435\u0440\u043D\u0443\u0442\u044C \u043F\u043B\u0430\u0442\u0435\u0436? ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 4)(4, "div", 5)(5, "span", 6);
    \u0275\u0275text(6, "ID \u041F\u043B\u0430\u0442\u0435\u0436\u0430:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 7);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 5)(10, "span", 6);
    \u0275\u0275text(11, "\u041A\u043B\u0438\u0435\u043D\u0442:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 8);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 5)(15, "span", 6);
    \u0275\u0275text(16, "\u0421\u0443\u043C\u043C\u0430 \u043F\u043B\u0430\u0442\u0435\u0436\u0430:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 8);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 9);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(20, "svg", 10);
    \u0275\u0275element(21, "path", 11)(22, "circle", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(23, "div", 13)(24, "strong");
    \u0275\u0275text(25, "\u0412\u043D\u0438\u043C\u0430\u043D\u0438\u0435!");
    \u0275\u0275elementEnd();
    \u0275\u0275text(26, " \u0411\u043E\u043D\u0443\u0441\u044B, \u0432\u044B\u0434\u0430\u043D\u043D\u044B\u0435 \u0437\u0430 \u044D\u0442\u043E\u0442 \u043F\u043B\u0430\u0442\u0435\u0436, \u0442\u0430\u043A\u0436\u0435 \u0431\u0443\u0434\u0443\u0442 \u043E\u0442\u043A\u0430\u0447\u0435\u043D\u044B. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 14)(28, "span", 6);
    \u0275\u0275text(29, "\u0411\u043E\u043D\u0443\u0441\u044B \u043A \u043E\u0442\u043A\u0430\u0442\u0443:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span", 15);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "div", 16)(33, "label", 17);
    \u0275\u0275text(34, "\u041F\u0440\u0438\u0447\u0438\u043D\u0430 \u0432\u043E\u0437\u0432\u0440\u0430\u0442\u0430 (\u043D\u0435\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "textarea", 18);
    \u0275\u0275twoWayListener("ngModelChange", function RefundConfirmationModalComponent_div_1_Template_textarea_ngModelChange_35_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.refundReason, $event) || (ctx_r1.refundReason = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 19)(37, "app-button", 20);
    \u0275\u0275listener("onClick", function RefundConfirmationModalComponent_div_1_Template_app_button_onClick_37_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClose());
    });
    \u0275\u0275text(38, " \u041E\u0442\u043C\u0435\u043D\u0430 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "app-button", 21);
    \u0275\u0275listener("onClick", function RefundConfirmationModalComponent_div_1_Template_app_button_onClick_39_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onConfirm());
    });
    \u0275\u0275text(40, " \u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C \u0432\u043E\u0437\u0432\u0440\u0430\u0442 ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.formatPaymentId(ctx_r1.payment.id));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.payment.clientName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r1.formatAmount(ctx_r1.payment.amount), " \u20B8");
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate1("", ctx_r1.formatAmount(ctx_r1.payment.bonusEarned), " \u20B8");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.refundReason);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.isProcessing)("loading", ctx_r1.isProcessing);
  }
}
var RefundConfirmationModalComponent = class _RefundConfirmationModalComponent {
  visible = false;
  payment = null;
  isProcessing = false;
  visibleChange = new EventEmitter();
  confirm = new EventEmitter();
  refundReason = "";
  onClose() {
    if (!this.isProcessing) {
      this.refundReason = "";
      this.visibleChange.emit(false);
    }
  }
  onConfirm() {
    if (this.payment && !this.isProcessing) {
      const paymentWithReason = __spreadProps(__spreadValues({}, this.payment), {
        refundReason: this.refundReason.trim() || void 0
      });
      this.confirm.emit(paymentWithReason);
    }
  }
  formatAmount(amount) {
    return amount.toLocaleString("ru-RU");
  }
  formatPaymentId(id) {
    return `#PAY-${id.padStart(3, "0")}`;
  }
  static \u0275fac = function RefundConfirmationModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RefundConfirmationModalComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RefundConfirmationModalComponent, selectors: [["app-refund-confirmation-modal"]], inputs: { visible: "visible", payment: "payment", isProcessing: "isProcessing" }, outputs: { visibleChange: "visibleChange", confirm: "confirm" }, decls: 2, vars: 4, consts: [[3, "visibleChange", "visible", "title", "showCloseButton"], ["class", "refund-modal-content", 4, "ngIf"], [1, "refund-modal-content"], [1, "refund-question"], [1, "refund-info"], [1, "refund-info-item"], [1, "refund-label"], [1, "refund-value", "payment-id"], [1, "refund-value"], [1, "refund-warning"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", 1, "warning-icon"], ["d", "M12 9v4M12 17h.01", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "2"], [1, "warning-text"], [1, "refund-info-item", "bonus-info"], [1, "refund-value", "bonus-amount"], [1, "refund-reason-section"], [1, "refund-reason-label"], ["placeholder", "\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u043F\u0440\u0438\u0447\u0438\u043D\u0443 \u0432\u043E\u0437\u0432\u0440\u0430\u0442\u0430...", "rows", "3", 1, "refund-reason-input", 3, "ngModelChange", "ngModel"], ["modalFooter", "", 1, "refund-modal-footer"], ["buttonType", "ghost", 3, "onClick"], ["buttonType", "danger", 3, "onClick", "disabled", "loading"]], template: function RefundConfirmationModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-modal", 0);
      \u0275\u0275listener("visibleChange", function RefundConfirmationModalComponent_Template_app_modal_visibleChange_0_listener() {
        return ctx.onClose();
      });
      \u0275\u0275template(1, RefundConfirmationModalComponent_div_1_Template, 41, 7, "div", 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("visible", ctx.visible)("title", "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u0435 \u0432\u043E\u0437\u0432\u0440\u0430\u0442\u0430")("showCloseButton", true);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.payment);
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, ModalComponent, ButtonComponent], styles: ['\n\n.refund-modal-content[_ngcontent-%COMP%] {\n  padding: 1rem 0;\n}\n.refund-question[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin-bottom: 1.5rem;\n}\n.refund-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n}\n.refund-info-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.75rem;\n  background: #f8fafc;\n  border-radius: 8px;\n}\n.refund-info-item.bonus-info[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n}\n.refund-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #64748b;\n  font-weight: 500;\n}\n.refund-value[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #1f2937;\n  font-weight: 600;\n}\n.refund-value.payment-id[_ngcontent-%COMP%] {\n  font-family: "Courier New", monospace;\n  font-size: 0.9rem;\n}\n.refund-value.bonus-amount[_ngcontent-%COMP%] {\n  color: #dc2626;\n  font-size: 1rem;\n}\n.refund-warning[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  padding: 1rem;\n  background: #fef3c7;\n  border: 1px solid #fde68a;\n  border-radius: 8px;\n  align-items: flex-start;\n}\n.warning-icon[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  color: #d97706;\n  flex-shrink: 0;\n  margin-top: 2px;\n}\n.warning-text[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #92400e;\n  line-height: 1.5;\n}\n.warning-text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.refund-reason-section[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.refund-reason-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #475569;\n  margin-bottom: 0.5rem;\n}\n.refund-reason-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  font-family: inherit;\n  resize: vertical;\n  min-height: 80px;\n  background: #ffffff;\n  color: #1f2937;\n  line-height: 1.5;\n  transition: all 0.2s ease;\n}\n.refund-reason-input[_ngcontent-%COMP%]:hover {\n  border-color: #cbd5e1;\n}\n.refund-reason-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #dc2626;\n  box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);\n}\n.refund-reason-input[_ngcontent-%COMP%]::placeholder {\n  color: #94a3b8;\n}\n.refund-modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  justify-content: flex-end;\n  margin-top: 1.5rem;\n}\n/*# sourceMappingURL=refund-confirmation-modal.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RefundConfirmationModalComponent, [{
    type: Component,
    args: [{ selector: "app-refund-confirmation-modal", standalone: true, imports: [CommonModule, FormsModule, ModalComponent, ButtonComponent], template: `
    <app-modal
      [visible]="visible"
      [title]="'\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u0435 \u0432\u043E\u0437\u0432\u0440\u0430\u0442\u0430'"
      [showCloseButton]="true"
      (visibleChange)="onClose()">
      <div class="refund-modal-content" *ngIf="payment">
        <p class="refund-question">
          \u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B, \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0432\u0435\u0440\u043D\u0443\u0442\u044C \u043F\u043B\u0430\u0442\u0435\u0436?
        </p>
        <div class="refund-info">
          <div class="refund-info-item">
            <span class="refund-label">ID \u041F\u043B\u0430\u0442\u0435\u0436\u0430:</span>
            <span class="refund-value payment-id">{{ formatPaymentId(payment.id) }}</span>
          </div>
          <div class="refund-info-item">
            <span class="refund-label">\u041A\u043B\u0438\u0435\u043D\u0442:</span>
            <span class="refund-value">{{ payment.clientName }}</span>
          </div>
          <div class="refund-info-item">
            <span class="refund-label">\u0421\u0443\u043C\u043C\u0430 \u043F\u043B\u0430\u0442\u0435\u0436\u0430:</span>
            <span class="refund-value">{{ formatAmount(payment.amount) }} \u20B8</span>
          </div>
          <div class="refund-warning">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="warning-icon">
              <path d="M12 9v4M12 17h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
            </svg>
            <div class="warning-text">
              <strong>\u0412\u043D\u0438\u043C\u0430\u043D\u0438\u0435!</strong> \u0411\u043E\u043D\u0443\u0441\u044B, \u0432\u044B\u0434\u0430\u043D\u043D\u044B\u0435 \u0437\u0430 \u044D\u0442\u043E\u0442 \u043F\u043B\u0430\u0442\u0435\u0436, \u0442\u0430\u043A\u0436\u0435 \u0431\u0443\u0434\u0443\u0442 \u043E\u0442\u043A\u0430\u0447\u0435\u043D\u044B.
            </div>
          </div>
          <div class="refund-info-item bonus-info">
            <span class="refund-label">\u0411\u043E\u043D\u0443\u0441\u044B \u043A \u043E\u0442\u043A\u0430\u0442\u0443:</span>
            <span class="refund-value bonus-amount">{{ formatAmount(payment.bonusEarned) }} \u20B8</span>
          </div>
        </div>
        <div class="refund-reason-section">
          <label class="refund-reason-label">\u041F\u0440\u0438\u0447\u0438\u043D\u0430 \u0432\u043E\u0437\u0432\u0440\u0430\u0442\u0430 (\u043D\u0435\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E)</label>
          <textarea
            [(ngModel)]="refundReason"
            class="refund-reason-input"
            placeholder="\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u043F\u0440\u0438\u0447\u0438\u043D\u0443 \u0432\u043E\u0437\u0432\u0440\u0430\u0442\u0430..."
            rows="3"></textarea>
        </div>
        <div modalFooter class="refund-modal-footer">
          <app-button
            buttonType="ghost"
            (onClick)="onClose()">
            \u041E\u0442\u043C\u0435\u043D\u0430
          </app-button>
          <app-button
            buttonType="danger"
            [disabled]="isProcessing"
            [loading]="isProcessing"
            (onClick)="onConfirm()">
            \u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C \u0432\u043E\u0437\u0432\u0440\u0430\u0442
          </app-button>
        </div>
      </div>
    </app-modal>
  `, styles: ['/* angular:styles/component:css;a118d26067f5f0f16a36b9a288e94cd873bd7cc0cd444012990d8186c7eefd9f;/Users/baglan/repo/westwood/westwood-frontend/src/app/shared/components/refund-confirmation-modal/refund-confirmation-modal.component.ts */\n.refund-modal-content {\n  padding: 1rem 0;\n}\n.refund-question {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin-bottom: 1.5rem;\n}\n.refund-info {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n}\n.refund-info-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.75rem;\n  background: #f8fafc;\n  border-radius: 8px;\n}\n.refund-info-item.bonus-info {\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n}\n.refund-label {\n  font-size: 0.875rem;\n  color: #64748b;\n  font-weight: 500;\n}\n.refund-value {\n  font-size: 0.875rem;\n  color: #1f2937;\n  font-weight: 600;\n}\n.refund-value.payment-id {\n  font-family: "Courier New", monospace;\n  font-size: 0.9rem;\n}\n.refund-value.bonus-amount {\n  color: #dc2626;\n  font-size: 1rem;\n}\n.refund-warning {\n  display: flex;\n  gap: 0.75rem;\n  padding: 1rem;\n  background: #fef3c7;\n  border: 1px solid #fde68a;\n  border-radius: 8px;\n  align-items: flex-start;\n}\n.warning-icon {\n  width: 20px;\n  height: 20px;\n  color: #d97706;\n  flex-shrink: 0;\n  margin-top: 2px;\n}\n.warning-text {\n  font-size: 0.875rem;\n  color: #92400e;\n  line-height: 1.5;\n}\n.warning-text strong {\n  font-weight: 600;\n}\n.refund-reason-section {\n  margin-bottom: 1.5rem;\n}\n.refund-reason-label {\n  display: block;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #475569;\n  margin-bottom: 0.5rem;\n}\n.refund-reason-input {\n  width: 100%;\n  padding: 0.75rem;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  font-family: inherit;\n  resize: vertical;\n  min-height: 80px;\n  background: #ffffff;\n  color: #1f2937;\n  line-height: 1.5;\n  transition: all 0.2s ease;\n}\n.refund-reason-input:hover {\n  border-color: #cbd5e1;\n}\n.refund-reason-input:focus {\n  outline: none;\n  border-color: #dc2626;\n  box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);\n}\n.refund-reason-input::placeholder {\n  color: #94a3b8;\n}\n.refund-modal-footer {\n  display: flex;\n  gap: 0.75rem;\n  justify-content: flex-end;\n  margin-top: 1.5rem;\n}\n/*# sourceMappingURL=refund-confirmation-modal.component.css.map */\n'] }]
  }], null, { visible: [{
    type: Input
  }], payment: [{
    type: Input
  }], isProcessing: [{
    type: Input
  }], visibleChange: [{
    type: Output
  }], confirm: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RefundConfirmationModalComponent, { className: "RefundConfirmationModalComponent", filePath: "src/app/shared/components/refund-confirmation-modal/refund-confirmation-modal.component.ts", lineNumber: 222 });
})();

export {
  RefundConfirmationModalComponent
};
//# sourceMappingURL=chunk-BWDLUQ5Z.js.map
