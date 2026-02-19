import {
  PaginatedTableWrapperComponent
} from "./chunk-2R6M6BSK.js";
import {
  NotFoundStateComponent
} from "./chunk-D3JTW46V.js";
import "./chunk-E2ICMDXS.js";
import {
  ClientsService
} from "./chunk-BIEGUI56.js";
import {
  PhoneFormatPipe
} from "./chunk-QGMAAU7H.js";
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
import {
  ModalComponent
} from "./chunk-QYR5BNYI.js";
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
  DefaultValueAccessor,
  FormsModule,
  MaxLengthValidator,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-7NMYMP3Z.js";
import {
  IconButtonComponent
} from "./chunk-DGNBLIW7.js";
import {
  ActivatedRoute,
  ChangeDetectorRef,
  CommonModule,
  Component,
  EventEmitter,
  HostListener,
  Input,
  NgForOf,
  NgIf,
  Output,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  Subject,
  Title,
  ViewChild,
  forkJoin,
  inject,
  setClassMetadata,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
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
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpropertyInterpolate1,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-NKSGOSP5.js";

// src/app/shared/components/adjust-bonus-modal/adjust-bonus-modal.component.ts
var AdjustBonusModalComponent = class _AdjustBonusModalComponent {
  bonusesService;
  toast;
  visible = false;
  clientId = null;
  bonusBalance = 0;
  visibleChange = new EventEmitter();
  bonusAdjusted = new EventEmitter();
  isAdd = true;
  amount = null;
  reason = "";
  isSubmitting = false;
  constructor(bonusesService, toast) {
    this.bonusesService = bonusesService;
    this.toast = toast;
  }
  formatAmount(value) {
    return new Intl.NumberFormat("ru-RU").format(value);
  }
  isValid() {
    const amt = this.amount ?? 0;
    if (amt <= 0)
      return false;
    if (!this.isAdd && amt > this.bonusBalance)
      return false;
    if (!this.reason?.trim())
      return false;
    return true;
  }
  onClose() {
    if (!this.isSubmitting) {
      this.reset();
      this.visibleChange.emit(false);
    }
  }
  reset() {
    this.isAdd = true;
    this.amount = null;
    this.reason = "";
  }
  onSubmit() {
    if (!this.clientId || !this.isValid() || this.isSubmitting)
      return;
    const amt = Math.round(Number(this.amount));
    this.isSubmitting = true;
    const request = { amount: amt, reason: this.reason.trim() };
    const op$ = this.isAdd ? this.bonusesService.grantBonus(this.clientId, request) : this.bonusesService.revokeBonus(this.clientId, request);
    op$.subscribe({
      next: () => {
        this.toast.success(this.isAdd ? "\u0411\u043E\u043D\u0443\u0441\u044B \u043D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u044B" : "\u0411\u043E\u043D\u0443\u0441\u044B \u0441\u043F\u0438\u0441\u0430\u043D\u044B");
        this.reset();
        this.visibleChange.emit(false);
        this.bonusAdjusted.emit();
        this.isSubmitting = false;
      },
      error: (err) => {
        this.isSubmitting = false;
        const msg = err?.error?.message || (this.isAdd ? "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043D\u0430\u0447\u0438\u0441\u043B\u0438\u0442\u044C \u0431\u043E\u043D\u0443\u0441\u044B" : "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043F\u0438\u0441\u0430\u0442\u044C \u0431\u043E\u043D\u0443\u0441\u044B");
        this.toast.error(msg);
      }
    });
  }
  static \u0275fac = function AdjustBonusModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdjustBonusModalComponent)(\u0275\u0275directiveInject(BonusesService), \u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdjustBonusModalComponent, selectors: [["app-adjust-bonus-modal"]], inputs: { visible: "visible", clientId: "clientId", bonusBalance: "bonusBalance" }, outputs: { visibleChange: "visibleChange", bonusAdjusted: "bonusAdjusted" }, decls: 29, vars: 15, consts: [[3, "visibleChange", "visible", "title", "showCloseButton", "showFooter"], [1, "adjust-bonus-content"], [1, "adjust-bonus-subtitle"], [1, "toggle-pill"], ["type", "button", 1, "toggle-seg", "toggle-add", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none"], ["d", "M12 5v14M5 12h14", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], ["type", "button", 1, "toggle-seg", "toggle-deduct", 3, "click"], ["d", "M5 12h14", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], [1, "form-group"], [1, "amount-row"], ["type", "number", "placeholder", "0", 1, "amount-input", 3, "ngModelChange", "ngModel", "min", "max"], [1, "currency-icon"], ["type", "text", "placeholder", "\u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u043A\u043E\u043C\u043F\u0435\u043D\u0441\u0430\u0446\u0438\u044F, \u0431\u043E\u043D\u0443\u0441 \u043A\u043E \u0434\u043D\u044E \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F, \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u0438\u0440\u043E\u0432\u043A\u0430 \u0431\u0430\u043B\u0430\u043D\u0441\u0430.", 1, "reason-input", 3, "ngModelChange", "ngModel"], ["modalFooter", "", 1, "modal-footer-actions"], ["type", "button", 1, "footer-cancel", 3, "click"], ["buttonType", "primary", 3, "onClick", "disabled", "loading"]], template: function AdjustBonusModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-modal", 0);
      \u0275\u0275listener("visibleChange", function AdjustBonusModalComponent_Template_app_modal_visibleChange_0_listener() {
        return ctx.onClose();
      });
      \u0275\u0275elementStart(1, "div", 1)(2, "p", 2);
      \u0275\u0275text(3, "\u0412\u0440\u0443\u0447\u043D\u0443\u044E \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u0439\u0442\u0435 \u0438\u043B\u0438 \u0432\u044B\u0447\u0438\u0442\u0430\u0439\u0442\u0435 \u0431\u043E\u043D\u0443\u0441\u044B \u0438\u0437 \u0441\u0447\u0435\u0442\u0430 \u043A\u043B\u0438\u0435\u043D\u0442\u0430.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 3)(5, "button", 4);
      \u0275\u0275listener("click", function AdjustBonusModalComponent_Template_button_click_5_listener() {
        return ctx.isAdd = true;
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(6, "svg", 5);
      \u0275\u0275element(7, "path", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275text(8, " \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0431\u043E\u043D\u0443\u0441\u044B ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(9, "button", 7);
      \u0275\u0275listener("click", function AdjustBonusModalComponent_Template_button_click_9_listener() {
        return ctx.isAdd = false;
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(10, "svg", 5);
      \u0275\u0275element(11, "path", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275text(12, " \u0412\u044B\u0447\u0435\u0441\u0442\u044C \u0431\u043E\u043D\u0443\u0441\u044B ");
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(13, "div", 9)(14, "label");
      \u0275\u0275text(15, "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 10)(17, "input", 11);
      \u0275\u0275twoWayListener("ngModelChange", function AdjustBonusModalComponent_Template_input_ngModelChange_17_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.amount, $event) || (ctx.amount = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "span", 12);
      \u0275\u0275text(19, "\u20B8");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(20, "div", 9)(21, "label");
      \u0275\u0275text(22, "\u041F\u0440\u0438\u0447\u0438\u043D\u0430 (\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "input", 13);
      \u0275\u0275twoWayListener("ngModelChange", function AdjustBonusModalComponent_Template_input_ngModelChange_23_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.reason, $event) || (ctx.reason = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(24, "div", 14)(25, "button", 15);
      \u0275\u0275listener("click", function AdjustBonusModalComponent_Template_button_click_25_listener() {
        return ctx.onClose();
      });
      \u0275\u0275text(26, "\u041E\u0442\u043C\u0435\u043D\u0430");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "app-button", 16);
      \u0275\u0275listener("onClick", function AdjustBonusModalComponent_Template_app_button_onClick_27_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275text(28);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275property("visible", ctx.visible)("title", "\u0421\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0431\u043E\u043D\u0443\u0441\u043D\u044B\u0439 \u0431\u0430\u043B\u0430\u043D\u0441")("showCloseButton", true)("showFooter", true);
      \u0275\u0275advance(5);
      \u0275\u0275classProp("active", ctx.isAdd);
      \u0275\u0275advance(4);
      \u0275\u0275classProp("active", !ctx.isAdd);
      \u0275\u0275advance(8);
      \u0275\u0275twoWayProperty("ngModel", ctx.amount);
      \u0275\u0275property("min", 1)("max", !ctx.isAdd ? ctx.bonusBalance : null);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.reason);
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", !ctx.isValid() || ctx.isSubmitting)("loading", ctx.isSubmitting);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.isAdd ? "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0431\u043E\u043D\u0443\u0441\u044B" : "\u0412\u044B\u0447\u0435\u0441\u0442\u044C \u0431\u043E\u043D\u0443\u0441\u044B", " ");
    }
  }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, MinValidator, MaxValidator, NgModel, ModalComponent, ButtonComponent], styles: ["\n\n.adjust-bonus-content[_ngcontent-%COMP%] {\n  padding: 0.25rem 0 1rem;\n}\n.adjust-bonus-subtitle[_ngcontent-%COMP%] {\n  margin: 0 0 1.25rem 0;\n  font-size: 0.9375rem;\n  color: #64748b;\n  font-weight: 400;\n  line-height: 1.4;\n}\n.toggle-pill[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  margin-bottom: 1.5rem;\n  border-radius: 10px;\n  overflow: hidden;\n  background: #f1f5f9;\n  border: 1px solid #e2e8f0;\n}\n.toggle-seg[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1rem;\n  border: none;\n  font-size: 0.9375rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.2s, color 0.2s;\n  background: transparent;\n  color: #475569;\n}\n.toggle-seg[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n}\n.toggle-seg.toggle-add[_ngcontent-%COMP%] {\n  border-radius: 0;\n}\n.toggle-seg.toggle-deduct[_ngcontent-%COMP%] {\n  border-radius: 0;\n}\n.toggle-seg.toggle-add.active[_ngcontent-%COMP%] {\n  background: #16A34A;\n  color: white;\n}\n.toggle-seg.toggle-add.active[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  stroke: white;\n}\n.toggle-seg.toggle-deduct.active[_ngcontent-%COMP%] {\n  background: #16A34A;\n  color: white;\n}\n.toggle-seg.toggle-deduct.active[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  stroke: white;\n}\n.toggle-seg[_ngcontent-%COMP%]:not(.active):hover {\n  background: #e2e8f0;\n  color: #334155;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1.25rem;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #1e293b;\n  margin-bottom: 0.5rem;\n}\n.amount-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  background: #fff;\n  overflow: hidden;\n}\n.amount-input[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  padding: 0.75rem 1rem;\n  border: none;\n  font-size: 1rem;\n  color: #1e293b;\n  background: transparent;\n}\n.amount-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.amount-input[_ngcontent-%COMP%]::placeholder {\n  color: #94a3b8;\n}\n.currency-icon[_ngcontent-%COMP%] {\n  padding: 0 1rem;\n  font-size: 1rem;\n  font-weight: 500;\n  color: #64748b;\n  border-left: 1px solid #e2e8f0;\n}\n.reason-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem 1rem;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  font-size: 0.9375rem;\n  background: #fff;\n  color: #1e293b;\n  font-family: inherit;\n  transition: border-color 0.2s;\n}\n.reason-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #16A34A;\n}\n.reason-input[_ngcontent-%COMP%]::placeholder {\n  color: #94a3b8;\n  font-style: italic;\n}\n.modal-footer-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  gap: 1rem;\n}\n.footer-cancel[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.75rem;\n  border: none;\n  background: none;\n  font-size: 0.9375rem;\n  font-weight: 500;\n  color: #475569;\n  cursor: pointer;\n  transition: color 0.15s;\n}\n.footer-cancel[_ngcontent-%COMP%]:hover {\n  color: #1e293b;\n}\n/*# sourceMappingURL=adjust-bonus-modal.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdjustBonusModalComponent, [{
    type: Component,
    args: [{ selector: "app-adjust-bonus-modal", standalone: true, imports: [CommonModule, FormsModule, ModalComponent, ButtonComponent], template: `
    <app-modal
      [visible]="visible"
      [title]="'\u0421\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0431\u043E\u043D\u0443\u0441\u043D\u044B\u0439 \u0431\u0430\u043B\u0430\u043D\u0441'"
      [showCloseButton]="true"
      [showFooter]="true"
      (visibleChange)="onClose()">
      <div class="adjust-bonus-content">
        <p class="adjust-bonus-subtitle">\u0412\u0440\u0443\u0447\u043D\u0443\u044E \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u0439\u0442\u0435 \u0438\u043B\u0438 \u0432\u044B\u0447\u0438\u0442\u0430\u0439\u0442\u0435 \u0431\u043E\u043D\u0443\u0441\u044B \u0438\u0437 \u0441\u0447\u0435\u0442\u0430 \u043A\u043B\u0438\u0435\u043D\u0442\u0430.</p>

        <div class="toggle-pill">
          <button
            type="button"
            class="toggle-seg toggle-add"
            [class.active]="isAdd"
            (click)="isAdd = true">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
            \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0431\u043E\u043D\u0443\u0441\u044B
          </button>
          <button
            type="button"
            class="toggle-seg toggle-deduct"
            [class.active]="!isAdd"
            (click)="isAdd = false">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
            \u0412\u044B\u0447\u0435\u0441\u0442\u044C \u0431\u043E\u043D\u0443\u0441\u044B
          </button>
        </div>

        <div class="form-group">
          <label>\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E</label>
          <div class="amount-row">
            <input
              type="number"
              [(ngModel)]="amount"
              [min]="1"
              [max]="!isAdd ? bonusBalance : null"
              placeholder="0"
              class="amount-input">
            <span class="currency-icon">\u20B8</span>
          </div>
        </div>

        <div class="form-group">
          <label>\u041F\u0440\u0438\u0447\u0438\u043D\u0430 (\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E)</label>
          <input
            type="text"
            [(ngModel)]="reason"
            class="reason-input"
            placeholder="\u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u043A\u043E\u043C\u043F\u0435\u043D\u0441\u0430\u0446\u0438\u044F, \u0431\u043E\u043D\u0443\u0441 \u043A\u043E \u0434\u043D\u044E \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F, \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u0438\u0440\u043E\u0432\u043A\u0430 \u0431\u0430\u043B\u0430\u043D\u0441\u0430.">
        </div>
      </div>
      <div modalFooter class="modal-footer-actions">
        <button type="button" class="footer-cancel" (click)="onClose()">\u041E\u0442\u043C\u0435\u043D\u0430</button>
        <app-button
          buttonType="primary"
          [disabled]="!isValid() || isSubmitting"
          [loading]="isSubmitting"
          (onClick)="onSubmit()">
          {{ isAdd ? '\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0431\u043E\u043D\u0443\u0441\u044B' : '\u0412\u044B\u0447\u0435\u0441\u0442\u044C \u0431\u043E\u043D\u0443\u0441\u044B' }}
        </app-button>
      </div>
    </app-modal>
  `, styles: ["/* angular:styles/component:css;f960d842f7847bc821c7025b88b574c0a111b73b1a2591bdb5d1d55a5e538cce;/Users/baglan/repo/westwood/westwood-frontend/src/app/shared/components/adjust-bonus-modal/adjust-bonus-modal.component.ts */\n.adjust-bonus-content {\n  padding: 0.25rem 0 1rem;\n}\n.adjust-bonus-subtitle {\n  margin: 0 0 1.25rem 0;\n  font-size: 0.9375rem;\n  color: #64748b;\n  font-weight: 400;\n  line-height: 1.4;\n}\n.toggle-pill {\n  display: flex;\n  width: 100%;\n  margin-bottom: 1.5rem;\n  border-radius: 10px;\n  overflow: hidden;\n  background: #f1f5f9;\n  border: 1px solid #e2e8f0;\n}\n.toggle-seg {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1rem;\n  border: none;\n  font-size: 0.9375rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.2s, color 0.2s;\n  background: transparent;\n  color: #475569;\n}\n.toggle-seg svg {\n  width: 18px;\n  height: 18px;\n}\n.toggle-seg.toggle-add {\n  border-radius: 0;\n}\n.toggle-seg.toggle-deduct {\n  border-radius: 0;\n}\n.toggle-seg.toggle-add.active {\n  background: #16A34A;\n  color: white;\n}\n.toggle-seg.toggle-add.active svg {\n  stroke: white;\n}\n.toggle-seg.toggle-deduct.active {\n  background: #16A34A;\n  color: white;\n}\n.toggle-seg.toggle-deduct.active svg {\n  stroke: white;\n}\n.toggle-seg:not(.active):hover {\n  background: #e2e8f0;\n  color: #334155;\n}\n.form-group {\n  margin-bottom: 1.25rem;\n}\n.form-group label {\n  display: block;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #1e293b;\n  margin-bottom: 0.5rem;\n}\n.amount-row {\n  display: flex;\n  align-items: center;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  background: #fff;\n  overflow: hidden;\n}\n.amount-input {\n  flex: 1;\n  min-width: 0;\n  padding: 0.75rem 1rem;\n  border: none;\n  font-size: 1rem;\n  color: #1e293b;\n  background: transparent;\n}\n.amount-input:focus {\n  outline: none;\n}\n.amount-input::placeholder {\n  color: #94a3b8;\n}\n.currency-icon {\n  padding: 0 1rem;\n  font-size: 1rem;\n  font-weight: 500;\n  color: #64748b;\n  border-left: 1px solid #e2e8f0;\n}\n.reason-input {\n  width: 100%;\n  padding: 0.75rem 1rem;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  font-size: 0.9375rem;\n  background: #fff;\n  color: #1e293b;\n  font-family: inherit;\n  transition: border-color 0.2s;\n}\n.reason-input:focus {\n  outline: none;\n  border-color: #16A34A;\n}\n.reason-input::placeholder {\n  color: #94a3b8;\n  font-style: italic;\n}\n.modal-footer-actions {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  gap: 1rem;\n}\n.footer-cancel {\n  padding: 0.5rem 0.75rem;\n  border: none;\n  background: none;\n  font-size: 0.9375rem;\n  font-weight: 500;\n  color: #475569;\n  cursor: pointer;\n  transition: color 0.15s;\n}\n.footer-cancel:hover {\n  color: #1e293b;\n}\n/*# sourceMappingURL=adjust-bonus-modal.component.css.map */\n"] }]
  }], () => [{ type: BonusesService }, { type: ToastService }], { visible: [{
    type: Input
  }], clientId: [{
    type: Input
  }], bonusBalance: [{
    type: Input
  }], visibleChange: [{
    type: Output
  }], bonusAdjusted: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdjustBonusModalComponent, { className: "AdjustBonusModalComponent", filePath: "src/app/shared/components/adjust-bonus-modal/adjust-bonus-modal.component.ts", lineNumber: 248 });
})();

// src/app/shared/components/inline-tags/inline-tags.component.ts
var _c0 = ["addTagInput"];
function InlineTagsComponent_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.label);
  }
}
function InlineTagsComponent_span_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 14)(1, "span", 15);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 16);
    \u0275\u0275listener("click", function InlineTagsComponent_span_8_Template_button_click_3_listener() {
      const i_r3 = \u0275\u0275restoreView(_r2).index;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.removeTag(i_r3));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 5);
    \u0275\u0275element(5, "path", 17);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const tag_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tag_r4);
  }
}
function InlineTagsComponent_ng_container_9_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275listener("click", function InlineTagsComponent_ng_container_9_span_1_Template_span_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.startAddTag());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 5);
    \u0275\u0275element(2, "path", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0442\u0435\u0433 ");
    \u0275\u0275elementEnd();
  }
}
function InlineTagsComponent_ng_container_9_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 22)(1, "input", 23, 0);
    \u0275\u0275twoWayListener("ngModelChange", function InlineTagsComponent_ng_container_9_span_2_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.newTagValue, $event) || (ctx_r0.newTagValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown.enter", function InlineTagsComponent_ng_container_9_span_2_Template_input_keydown_enter_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.commitAddTag());
    })("keydown.escape", function InlineTagsComponent_ng_container_9_span_2_Template_input_keydown_escape_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.cancelAddTag());
    })("blur", function InlineTagsComponent_ng_container_9_span_2_Template_input_blur_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.commitAddTag());
    })("focus", function InlineTagsComponent_ng_container_9_span_2_Template_input_focus_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.showDropdown = true);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.newTagValue);
  }
}
function InlineTagsComponent_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, InlineTagsComponent_ng_container_9_span_1_Template, 4, 0, "span", 18)(2, InlineTagsComponent_ng_container_9_span_2_Template, 3, 1, "span", 19);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isAddingTag);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isAddingTag);
  }
}
function InlineTagsComponent_div_10_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 29);
    \u0275\u0275listener("mousedown", function InlineTagsComponent_div_10_button_7_Template_button_mousedown_0_listener($event) {
      const tag_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      ctx_r0.addFromDropdown(tag_r9);
      return \u0275\u0275resetView($event.preventDefault());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tag_r9, " ");
  }
}
function InlineTagsComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 25)(2, "span");
    \u0275\u0275text(3, "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0442\u044D\u0433\u0438");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 26);
    \u0275\u0275listener("click", function InlineTagsComponent_div_10_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showDropdown = false);
    });
    \u0275\u0275text(5, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 27);
    \u0275\u0275template(7, InlineTagsComponent_div_10_button_7_Template, 2, 1, "button", 28);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r0.getFilteredAvailable());
  }
}
function InlineTagsComponent_p_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 30);
    \u0275\u0275text(1, "\u041D\u0435\u0442 \u0442\u0435\u0433\u043E\u0432");
    \u0275\u0275elementEnd();
  }
}
var InlineTagsComponent = class _InlineTagsComponent {
  tags = [];
  availableTags = [];
  label = "";
  tagsChange = new EventEmitter();
  addTagInputRef;
  isEditing = false;
  isAddingTag = false;
  showDropdown = false;
  newTagValue = "";
  shouldFocusAddInput = false;
  ngAfterViewChecked() {
    if (this.shouldFocusAddInput && this.addTagInputRef?.nativeElement) {
      this.shouldFocusAddInput = false;
      this.addTagInputRef.nativeElement.focus();
    }
  }
  getFilteredAvailable() {
    if (!this.availableTags?.length)
      return [];
    const set = new Set(this.tags.map((t) => t.toLowerCase()));
    return this.availableTags.filter((t) => !set.has(t.toLowerCase()));
  }
  removeTag(index) {
    const removed = this.tags[index];
    const next = this.tags.filter((_, i) => i !== index);
    this.tagsChange.emit({ tags: next, removedTag: removed });
  }
  startAddTag() {
    this.isAddingTag = true;
    this.showDropdown = true;
    this.newTagValue = "";
    this.shouldFocusAddInput = true;
  }
  commitAddTag() {
    const value = this.newTagValue?.trim();
    this.isAddingTag = false;
    this.showDropdown = false;
    this.newTagValue = "";
    if (!value)
      return;
    const normalized = value.slice(0, 50);
    if (this.tags.some((t) => t.toLowerCase() === normalized.toLowerCase()))
      return;
    this.tagsChange.emit({ tags: [...this.tags, normalized] });
  }
  cancelAddTag() {
    this.isAddingTag = false;
    this.showDropdown = false;
    this.newTagValue = "";
  }
  addFromDropdown(tag) {
    if (this.tags.some((t) => t.toLowerCase() === tag.toLowerCase()))
      return;
    this.tagsChange.emit({ tags: [...this.tags, tag] });
  }
  static \u0275fac = function InlineTagsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InlineTagsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InlineTagsComponent, selectors: [["app-inline-tags"]], viewQuery: function InlineTagsComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.addTagInputRef = _t.first);
    }
  }, inputs: { tags: "tags", availableTags: "availableTags", label: "label" }, outputs: { tagsChange: "tagsChange" }, decls: 12, vars: 8, consts: [["addTagInput", ""], [1, "inline-tags"], [1, "tags-header"], ["class", "tags-label", 4, "ngIf"], ["type", "button", 1, "edit-icon-btn", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none"], ["d", "M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "tags-row"], ["class", "tag-pill", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "tags-dropdown", 4, "ngIf"], ["class", "no-tags", 4, "ngIf"], [1, "tags-label"], [1, "tag-pill"], [1, "tag-text"], ["type", "button", "aria-label", "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0442\u0435\u0433", 1, "tag-remove", 3, "click"], ["d", "M18 6L6 18M6 6l12 12", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], ["class", "add-tag-trigger", 3, "click", 4, "ngIf"], ["class", "tag-pill tag-input-pill", 4, "ngIf"], [1, "add-tag-trigger", 3, "click"], ["d", "M12 5v14M5 12h14", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], [1, "tag-pill", "tag-input-pill"], ["type", "text", "placeholder", "\u0422\u0435\u0433...", "maxlength", "50", 1, "tag-input", 3, "ngModelChange", "keydown.enter", "keydown.escape", "blur", "focus", "ngModel"], [1, "tags-dropdown"], [1, "tags-dropdown-header"], ["type", "button", 1, "tags-dropdown-close", 3, "click"], [1, "tags-dropdown-list"], ["type", "button", "class", "tag-option", 3, "mousedown", 4, "ngFor", "ngForOf"], ["type", "button", 1, "tag-option", 3, "mousedown"], [1, "no-tags"]], template: function InlineTagsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2);
      \u0275\u0275template(2, InlineTagsComponent_span_2_Template, 2, 1, "span", 3);
      \u0275\u0275elementStart(3, "button", 4);
      \u0275\u0275listener("click", function InlineTagsComponent_Template_button_click_3_listener() {
        return ctx.isEditing = !ctx.isEditing;
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(4, "svg", 5);
      \u0275\u0275element(5, "path", 6)(6, "path", 7);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(7, "div", 8);
      \u0275\u0275template(8, InlineTagsComponent_span_8_Template, 6, 1, "span", 9)(9, InlineTagsComponent_ng_container_9_Template, 3, 2, "ng-container", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275template(10, InlineTagsComponent_div_10_Template, 8, 1, "div", 11)(11, InlineTagsComponent_p_11_Template, 2, 0, "p", 12);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.label);
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.isEditing);
      \u0275\u0275attribute("aria-label", ctx.isEditing ? "\u0421\u043A\u0440\u044B\u0442\u044C \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0442\u0435\u0433\u0430" : "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0442\u0435\u0433");
      \u0275\u0275advance(5);
      \u0275\u0275property("ngForOf", ctx.tags);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isEditing);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showDropdown && ctx.getFilteredAvailable().length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.tags.length === 0 && !ctx.isAddingTag);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, MaxLengthValidator, NgModel], styles: ["\n\n.inline-tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  position: relative;\n}\n.tags-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.5rem;\n}\n.tags-label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #64748b;\n}\n.edit-icon-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 28px;\n  height: 28px;\n  padding: 0;\n  border: none;\n  background: transparent;\n  color: #64748b;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: color 0.12s ease, background 0.12s ease;\n}\n.edit-icon-btn[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n  color: #16A34A;\n}\n.edit-icon-btn.active[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  color: #16A34A;\n}\n.edit-icon-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n.tags-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 0.4rem;\n}\n.tag-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.25rem;\n  padding: 0.25rem 0.5rem 0.25rem 0.65rem;\n  background: #dcfce7;\n  color: #16A34A;\n  border-radius: 9999px;\n  font-size: 0.8125rem;\n  font-weight: 500;\n  transition: background 0.1s ease, box-shadow 0.1s ease;\n}\n.tag-pill[_ngcontent-%COMP%]:hover   .tag-remove[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.tag-text[_ngcontent-%COMP%] {\n  line-height: 1.2;\n}\n.tag-remove[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 16px;\n  height: 16px;\n  padding: 0;\n  border: none;\n  background: transparent;\n  color: #16A34A;\n  border-radius: 50%;\n  cursor: pointer;\n  opacity: 0.5;\n  transition: opacity 0.1s ease, background 0.1s ease;\n}\n.tag-remove[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n  background: rgba(22, 163, 74, 0.2);\n}\n.tag-remove[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n}\n.add-tag-trigger[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  padding: 0.25rem 0.5rem;\n  color: #64748b;\n  font-size: 0.8125rem;\n  font-weight: 500;\n  cursor: pointer;\n  border-radius: 9999px;\n  border: 1px dashed #cbd5e1;\n  background: transparent;\n  transition:\n    border-color 0.12s ease,\n    color 0.12s ease,\n    background 0.12s ease;\n}\n.add-tag-trigger[_ngcontent-%COMP%]:hover {\n  border-color: #16A34A;\n  color: #16A34A;\n  background: #f0fdf4;\n}\n.add-tag-trigger[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n}\n.tag-input-pill[_ngcontent-%COMP%] {\n  padding: 0.2rem 0.5rem;\n  background: #fff;\n  border: 1px solid #e2e8f0;\n}\n.tag-input[_ngcontent-%COMP%] {\n  width: 6rem;\n  min-width: 4rem;\n  padding: 0.1rem 0;\n  border: none;\n  font-size: 0.8125rem;\n  font-weight: 500;\n  color: #1e293b;\n  background: transparent;\n  outline: none;\n}\n.tag-input[_ngcontent-%COMP%]::placeholder {\n  color: #94a3b8;\n}\n.tags-dropdown[_ngcontent-%COMP%] {\n  margin-top: 6px;\n  background: white;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  z-index: 50;\n}\n.tags-dropdown-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 8px 12px;\n  background: #f8fafc;\n  border-bottom: 1px solid #e2e8f0;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #64748b;\n}\n.tags-dropdown-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 1.1rem;\n  color: #94a3b8;\n  cursor: pointer;\n  padding: 0;\n  line-height: 1;\n}\n.tags-dropdown-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  padding: 10px;\n  max-height: 140px;\n  overflow-y: auto;\n}\n.tag-option[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 5px 10px;\n  background: #f0fdf4;\n  border: 1px solid #bbf7d0;\n  border-radius: 20px;\n  font-size: 0.8rem;\n  font-weight: 500;\n  color: #15803d;\n  cursor: pointer;\n  transition: all 0.12s ease;\n}\n.tag-option[_ngcontent-%COMP%]:hover {\n  background: #dcfce7;\n  border-color: #86efac;\n}\n.no-tags[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.8125rem;\n  color: #94a3b8;\n  font-style: italic;\n}\n/*# sourceMappingURL=inline-tags.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InlineTagsComponent, [{
    type: Component,
    args: [{ selector: "app-inline-tags", standalone: true, imports: [CommonModule, FormsModule], template: `
    <div class="inline-tags">
      <div class="tags-header">
        <span class="tags-label" *ngIf="label">{{ label }}</span>
        <button
          type="button"
          class="edit-icon-btn"
          (click)="isEditing = !isEditing"
          [class.active]="isEditing"
          [attr.aria-label]="isEditing ? '\u0421\u043A\u0440\u044B\u0442\u044C \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0442\u0435\u0433\u0430' : '\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0442\u0435\u0433'">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
      <div class="tags-row">
        <span
          *ngFor="let tag of tags; let i = index"
          class="tag-pill">
          <span class="tag-text">{{ tag }}</span>
          <button
            type="button"
            class="tag-remove"
            (click)="removeTag(i)"
            aria-label="\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0442\u0435\u0433">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>
        </span>
        <ng-container *ngIf="isEditing">
          <span
            *ngIf="!isAddingTag"
            class="add-tag-trigger"
            (click)="startAddTag()">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
            \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0442\u0435\u0433
          </span>
          <span *ngIf="isAddingTag" class="tag-pill tag-input-pill">
            <input
              #addTagInput
              type="text"
              [(ngModel)]="newTagValue"
              (keydown.enter)="commitAddTag()"
              (keydown.escape)="cancelAddTag()"
              (blur)="commitAddTag()"
              (focus)="showDropdown = true"
              placeholder="\u0422\u0435\u0433..."
              class="tag-input"
              maxlength="50">
          </span>
        </ng-container>
      </div>
      <!-- Dropdown: same as create-client modal - list of tags not on client -->
      <div class="tags-dropdown" *ngIf="showDropdown && getFilteredAvailable().length > 0">
        <div class="tags-dropdown-header">
          <span>\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0442\u044D\u0433\u0438</span>
          <button type="button" class="tags-dropdown-close" (click)="showDropdown = false">\xD7</button>
        </div>
        <div class="tags-dropdown-list">
          <button
            type="button"
            class="tag-option"
            *ngFor="let tag of getFilteredAvailable()"
            (mousedown)="addFromDropdown(tag); $event.preventDefault()">
            {{ tag }}
          </button>
        </div>
      </div>
      <p class="no-tags" *ngIf="tags.length === 0 && !isAddingTag">\u041D\u0435\u0442 \u0442\u0435\u0433\u043E\u0432</p>
    </div>
  `, styles: ["/* angular:styles/component:css;2d2bf1dc9ab20477fa6c0546f2882cee408621ff5c36f712cbccd42d8b8e286f;/Users/baglan/repo/westwood/westwood-frontend/src/app/shared/components/inline-tags/inline-tags.component.ts */\n.inline-tags {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  position: relative;\n}\n.tags-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.5rem;\n}\n.tags-label {\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #64748b;\n}\n.edit-icon-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 28px;\n  height: 28px;\n  padding: 0;\n  border: none;\n  background: transparent;\n  color: #64748b;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: color 0.12s ease, background 0.12s ease;\n}\n.edit-icon-btn:hover {\n  background: #f1f5f9;\n  color: #16A34A;\n}\n.edit-icon-btn.active {\n  background: #f0fdf4;\n  color: #16A34A;\n}\n.edit-icon-btn svg {\n  width: 16px;\n  height: 16px;\n}\n.tags-row {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 0.4rem;\n}\n.tag-pill {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.25rem;\n  padding: 0.25rem 0.5rem 0.25rem 0.65rem;\n  background: #dcfce7;\n  color: #16A34A;\n  border-radius: 9999px;\n  font-size: 0.8125rem;\n  font-weight: 500;\n  transition: background 0.1s ease, box-shadow 0.1s ease;\n}\n.tag-pill:hover .tag-remove {\n  opacity: 1;\n}\n.tag-text {\n  line-height: 1.2;\n}\n.tag-remove {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 16px;\n  height: 16px;\n  padding: 0;\n  border: none;\n  background: transparent;\n  color: #16A34A;\n  border-radius: 50%;\n  cursor: pointer;\n  opacity: 0.5;\n  transition: opacity 0.1s ease, background 0.1s ease;\n}\n.tag-remove:hover {\n  opacity: 1;\n  background: rgba(22, 163, 74, 0.2);\n}\n.tag-remove svg {\n  width: 10px;\n  height: 10px;\n}\n.add-tag-trigger {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  padding: 0.25rem 0.5rem;\n  color: #64748b;\n  font-size: 0.8125rem;\n  font-weight: 500;\n  cursor: pointer;\n  border-radius: 9999px;\n  border: 1px dashed #cbd5e1;\n  background: transparent;\n  transition:\n    border-color 0.12s ease,\n    color 0.12s ease,\n    background 0.12s ease;\n}\n.add-tag-trigger:hover {\n  border-color: #16A34A;\n  color: #16A34A;\n  background: #f0fdf4;\n}\n.add-tag-trigger svg {\n  width: 14px;\n  height: 14px;\n}\n.tag-input-pill {\n  padding: 0.2rem 0.5rem;\n  background: #fff;\n  border: 1px solid #e2e8f0;\n}\n.tag-input {\n  width: 6rem;\n  min-width: 4rem;\n  padding: 0.1rem 0;\n  border: none;\n  font-size: 0.8125rem;\n  font-weight: 500;\n  color: #1e293b;\n  background: transparent;\n  outline: none;\n}\n.tag-input::placeholder {\n  color: #94a3b8;\n}\n.tags-dropdown {\n  margin-top: 6px;\n  background: white;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  z-index: 50;\n}\n.tags-dropdown-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 8px 12px;\n  background: #f8fafc;\n  border-bottom: 1px solid #e2e8f0;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #64748b;\n}\n.tags-dropdown-close {\n  background: none;\n  border: none;\n  font-size: 1.1rem;\n  color: #94a3b8;\n  cursor: pointer;\n  padding: 0;\n  line-height: 1;\n}\n.tags-dropdown-list {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  padding: 10px;\n  max-height: 140px;\n  overflow-y: auto;\n}\n.tag-option {\n  display: inline-flex;\n  align-items: center;\n  padding: 5px 10px;\n  background: #f0fdf4;\n  border: 1px solid #bbf7d0;\n  border-radius: 20px;\n  font-size: 0.8rem;\n  font-weight: 500;\n  color: #15803d;\n  cursor: pointer;\n  transition: all 0.12s ease;\n}\n.tag-option:hover {\n  background: #dcfce7;\n  border-color: #86efac;\n}\n.no-tags {\n  margin: 0;\n  font-size: 0.8125rem;\n  color: #94a3b8;\n  font-style: italic;\n}\n/*# sourceMappingURL=inline-tags.component.css.map */\n"] }]
  }], null, { tags: [{
    type: Input
  }], availableTags: [{
    type: Input
  }], label: [{
    type: Input
  }], tagsChange: [{
    type: Output
  }], addTagInputRef: [{
    type: ViewChild,
    args: ["addTagInput"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InlineTagsComponent, { className: "InlineTagsComponent", filePath: "src/app/shared/components/inline-tags/inline-tags.component.ts", lineNumber: 310 });
})();

// src/app/shared/components/split-button/split-button.component.ts
var _c02 = ["container"];
var _c1 = ["dropdown"];
var _c2 = ["arrowBtn"];
var _c3 = [[["", "mainIcon", ""]]];
var _c4 = ["[mainIcon]"];
function SplitButtonComponent_div_10_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 13, 3);
    \u0275\u0275listener("click", function SplitButtonComponent_div_10_button_2_Template_button_click_0_listener() {
      const item_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selectItem(item_r5));
    })("keydown.enter", function SplitButtonComponent_div_10_button_2_Template_button_keydown_enter_0_listener($event) {
      const item_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.selectItem(item_r5);
      return \u0275\u0275resetView($event.preventDefault());
    })("keydown.space", function SplitButtonComponent_div_10_button_2_Template_button_keydown_space_0_listener($event) {
      const item_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.selectItem(item_r5);
      return \u0275\u0275resetView($event.preventDefault());
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r5.label, " ");
  }
}
function SplitButtonComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11, 2);
    \u0275\u0275listener("keydown", function SplitButtonComponent_div_10_Template_div_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDropdownKeydown($event));
    });
    \u0275\u0275template(2, SplitButtonComponent_div_10_button_2_Template, 3, 1, "button", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.items);
  }
}
var SplitButtonComponent = class _SplitButtonComponent {
  mainLabel = "";
  items = [];
  mainClick = new EventEmitter();
  itemSelect = new EventEmitter();
  containerRef;
  dropdownRef;
  arrowBtnRef;
  open = false;
  onDocumentClick(event) {
    if (!this.open)
      return;
    const el = this.containerRef?.nativeElement;
    if (el && !el.contains(event.target)) {
      this.open = false;
    }
  }
  onEscape() {
    this.open = false;
  }
  ngAfterViewInit() {
  }
  onMainClick() {
    this.mainClick.emit();
  }
  toggleDropdown(event) {
    event.preventDefault();
    event.stopPropagation();
    this.open = !this.open;
    if (this.open && this.dropdownRef?.nativeElement) {
      const first = this.dropdownRef.nativeElement.querySelector(".split-button-item");
      first?.focus();
    }
  }
  onArrowKeydown(event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      this.open = !this.open;
      if (this.open && this.dropdownRef?.nativeElement) {
        const first = this.dropdownRef.nativeElement.querySelector(".split-button-item");
        setTimeout(() => first?.focus(), 0);
      }
    }
  }
  onDropdownKeydown(event) {
    const items = this.dropdownRef?.nativeElement?.querySelectorAll(".split-button-item");
    if (!items?.length)
      return;
    const current = event.target;
    const index = Array.from(items).indexOf(current);
    if (event.key === "ArrowDown" && index < items.length - 1) {
      event.preventDefault();
      items[index + 1].focus();
    } else if (event.key === "ArrowUp" && index > 0) {
      event.preventDefault();
      items[index - 1].focus();
    } else if (event.key === "Escape") {
      event.preventDefault();
      this.open = false;
      this.arrowBtnRef?.nativeElement?.focus();
    }
  }
  selectItem(item) {
    this.itemSelect.emit(item.id);
    this.open = false;
  }
  static \u0275fac = function SplitButtonComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SplitButtonComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SplitButtonComponent, selectors: [["app-split-button"]], viewQuery: function SplitButtonComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c02, 5);
      \u0275\u0275viewQuery(_c1, 5);
      \u0275\u0275viewQuery(_c2, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.containerRef = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.dropdownRef = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.arrowBtnRef = _t.first);
    }
  }, hostBindings: function SplitButtonComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function SplitButtonComponent_click_HostBindingHandler($event) {
        return ctx.onDocumentClick($event);
      }, false, \u0275\u0275resolveDocument)("keydown.escape", function SplitButtonComponent_keydown_escape_HostBindingHandler() {
        return ctx.onEscape();
      }, false, \u0275\u0275resolveDocument);
    }
  }, inputs: { mainLabel: "mainLabel", items: "items" }, outputs: { mainClick: "mainClick", itemSelect: "itemSelect" }, ngContentSelectors: _c4, decls: 11, vars: 6, consts: [["container", ""], ["arrowBtn", ""], ["dropdown", ""], ["itemBtn", ""], [1, "split-button"], ["type", "button", "aria-haspopup", "listbox", 1, "split-button-main", 3, "click"], [1, "split-button-label"], ["type", "button", "aria-haspopup", "listbox", 1, "split-button-arrow", 3, "click", "keydown"], ["viewBox", "0 0 24 24", "fill", "none", 1, "arrow-icon"], ["d", "M7 10l5 5 5-5", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["class", "split-button-dropdown", "role", "listbox", 3, "keydown", 4, "ngIf"], ["role", "listbox", 1, "split-button-dropdown", 3, "keydown"], ["type", "button", "class", "split-button-item", "role", "option", "tabindex", "0", 3, "click", "keydown.enter", "keydown.space", 4, "ngFor", "ngForOf"], ["type", "button", "role", "option", "tabindex", "0", 1, "split-button-item", 3, "click", "keydown.enter", "keydown.space"]], template: function SplitButtonComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275projectionDef(_c3);
      \u0275\u0275elementStart(0, "div", 4, 0)(2, "button", 5);
      \u0275\u0275listener("click", function SplitButtonComponent_Template_button_click_2_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onMainClick());
      });
      \u0275\u0275projection(3);
      \u0275\u0275elementStart(4, "span", 6);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "button", 7, 1);
      \u0275\u0275listener("click", function SplitButtonComponent_Template_button_click_6_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.toggleDropdown($event));
      })("keydown", function SplitButtonComponent_Template_button_keydown_6_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onArrowKeydown($event));
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(8, "svg", 8);
      \u0275\u0275element(9, "path", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(10, SplitButtonComponent_div_10_Template, 3, 1, "div", 10);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275attribute("aria-label", ctx.mainLabel)("aria-expanded", ctx.open);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.mainLabel);
      \u0275\u0275advance();
      \u0275\u0275attribute("aria-label", "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043C\u0435\u043D\u044E")("aria-expanded", ctx.open);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.open);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf], styles: ["\n\n.split-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: 100%;\n  position: relative;\n  border-radius: 10px;\n  overflow: visible;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);\n}\n.split-button-main[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  padding: 0.875rem 0.75rem 0.875rem 1rem;\n  background: #16A34A;\n  color: white;\n  border: none;\n  border-radius: 10px 0 0 10px;\n  font-weight: 600;\n  font-size: 0.9rem;\n  cursor: pointer;\n  transition: background 0.15s ease;\n  min-width: 0;\n}\n.split-button-main[_ngcontent-%COMP%]:hover {\n  background: #15803d;\n}\n.split-button-main[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: 0 0 0 2px rgba(22, 163, 74, 0.4);\n}\n.split-button-main[_ngcontent-%COMP%]     svg {\n  width: 18px;\n  height: 18px;\n  flex-shrink: 0;\n}\n.split-button-label[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.split-button-arrow[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  flex-shrink: 0;\n  padding: 0;\n  background: #16A34A;\n  color: white;\n  border: none;\n  border-left: 1px solid rgba(255, 255, 255, 0.25);\n  border-radius: 0 10px 10px 0;\n  cursor: pointer;\n  transition: background 0.15s ease;\n}\n.split-button-arrow[_ngcontent-%COMP%]:hover {\n  background: #15803d;\n}\n.split-button-arrow[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.4);\n}\n.arrow-icon[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n}\n.split-button-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  margin-top: 4px;\n  background: white;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);\n  overflow: hidden;\n  z-index: 100;\n  min-width: 100%;\n}\n.split-button-item[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  padding: 0.65rem 1rem;\n  border: none;\n  background: transparent;\n  font-size: 0.9rem;\n  font-weight: 500;\n  color: #1e293b;\n  text-align: left;\n  cursor: pointer;\n  transition: background 0.1s ease;\n}\n.split-button-item[_ngcontent-%COMP%]:hover, \n.split-button-item[_ngcontent-%COMP%]:focus {\n  background: #f0fdf4;\n  outline: none;\n}\n.split-button-item[_ngcontent-%COMP%]:not(:last-child) {\n  border-bottom: 1px solid #f1f5f9;\n}\n/*# sourceMappingURL=split-button.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SplitButtonComponent, [{
    type: Component,
    args: [{ selector: "app-split-button", standalone: true, imports: [CommonModule], template: `
    <div class="split-button" #container>
      <button
        type="button"
        class="split-button-main"
        (click)="onMainClick()"
        [attr.aria-label]="mainLabel"
        aria-haspopup="listbox"
        [attr.aria-expanded]="open">
        <ng-content select="[mainIcon]"></ng-content>
        <span class="split-button-label">{{ mainLabel }}</span>
      </button>
      <button
        type="button"
        class="split-button-arrow"
        (click)="toggleDropdown($event)"
        (keydown)="onArrowKeydown($event)"
        [attr.aria-label]="'\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043C\u0435\u043D\u044E'"
        [attr.aria-expanded]="open"
        aria-haspopup="listbox"
        #arrowBtn>
        <svg viewBox="0 0 24 24" fill="none" class="arrow-icon">
          <path d="M7 10l5 5 5-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <div
        class="split-button-dropdown"
        *ngIf="open"
        role="listbox"
        (keydown)="onDropdownKeydown($event)"
        #dropdown>
        <button
          type="button"
          class="split-button-item"
          role="option"
          *ngFor="let item of items; let i = index"
          (click)="selectItem(item)"
          (keydown.enter)="selectItem(item); $event.preventDefault()"
          (keydown.space)="selectItem(item); $event.preventDefault()"
          tabindex="0"
          #itemBtn>
          {{ item.label }}
        </button>
      </div>
    </div>
  `, styles: ["/* angular:styles/component:css;a38b5e8cc7acc98d7a33f3480568883f9b65822e485bb4e5386a82577084ffba;/Users/baglan/repo/westwood/westwood-frontend/src/app/shared/components/split-button/split-button.component.ts */\n.split-button {\n  display: inline-flex;\n  width: 100%;\n  position: relative;\n  border-radius: 10px;\n  overflow: visible;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);\n}\n.split-button-main {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  padding: 0.875rem 0.75rem 0.875rem 1rem;\n  background: #16A34A;\n  color: white;\n  border: none;\n  border-radius: 10px 0 0 10px;\n  font-weight: 600;\n  font-size: 0.9rem;\n  cursor: pointer;\n  transition: background 0.15s ease;\n  min-width: 0;\n}\n.split-button-main:hover {\n  background: #15803d;\n}\n.split-button-main:focus {\n  outline: none;\n  box-shadow: 0 0 0 2px rgba(22, 163, 74, 0.4);\n}\n.split-button-main ::ng-deep svg {\n  width: 18px;\n  height: 18px;\n  flex-shrink: 0;\n}\n.split-button-label {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.split-button-arrow {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  flex-shrink: 0;\n  padding: 0;\n  background: #16A34A;\n  color: white;\n  border: none;\n  border-left: 1px solid rgba(255, 255, 255, 0.25);\n  border-radius: 0 10px 10px 0;\n  cursor: pointer;\n  transition: background 0.15s ease;\n}\n.split-button-arrow:hover {\n  background: #15803d;\n}\n.split-button-arrow:focus {\n  outline: none;\n  box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.4);\n}\n.arrow-icon {\n  width: 18px;\n  height: 18px;\n}\n.split-button-dropdown {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  margin-top: 4px;\n  background: white;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);\n  overflow: hidden;\n  z-index: 100;\n  min-width: 100%;\n}\n.split-button-item {\n  display: block;\n  width: 100%;\n  padding: 0.65rem 1rem;\n  border: none;\n  background: transparent;\n  font-size: 0.9rem;\n  font-weight: 500;\n  color: #1e293b;\n  text-align: left;\n  cursor: pointer;\n  transition: background 0.1s ease;\n}\n.split-button-item:hover,\n.split-button-item:focus {\n  background: #f0fdf4;\n  outline: none;\n}\n.split-button-item:not(:last-child) {\n  border-bottom: 1px solid #f1f5f9;\n}\n/*# sourceMappingURL=split-button.component.css.map */\n"] }]
  }], null, { mainLabel: [{
    type: Input
  }], items: [{
    type: Input
  }], mainClick: [{
    type: Output
  }], itemSelect: [{
    type: Output
  }], containerRef: [{
    type: ViewChild,
    args: ["container"]
  }], dropdownRef: [{
    type: ViewChild,
    args: ["dropdown"]
  }], arrowBtnRef: [{
    type: ViewChild,
    args: ["arrowBtn"]
  }], onDocumentClick: [{
    type: HostListener,
    args: ["document:click", ["$event"]]
  }], onEscape: [{
    type: HostListener,
    args: ["document:keydown.escape"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SplitButtonComponent, { className: "SplitButtonComponent", filePath: "src/app/shared/components/split-button/split-button.component.ts", lineNumber: 187 });
})();

// src/app/features/profile/pages/profile-page/profile-page.component.ts
var _c03 = () => ["/clients"];
var _c12 = (a0) => ["/users", a0];
function ProfilePageComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275element(1, "app-loader", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("visible", true)("overlay", false);
  }
}
function ProfilePageComponent_app_not_found_state_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-not-found-state", 13);
  }
}
function ProfilePageComponent_div_4__svg_svg_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 17);
    \u0275\u0275element(1, "path", 44)(2, "path", 45);
    \u0275\u0275elementEnd();
  }
}
function ProfilePageComponent_div_4__svg_svg_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 17);
    \u0275\u0275element(1, "path", 46)(2, "circle", 47);
    \u0275\u0275elementEnd();
  }
}
function ProfilePageComponent_div_4_div_61_button_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 85);
    \u0275\u0275listener("click", function ProfilePageComponent_div_4_div_61_button_50_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.startEditPersonal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 17);
    \u0275\u0275element(2, "path", 86)(3, "path", 87);
    \u0275\u0275elementEnd()();
  }
}
function ProfilePageComponent_div_4_div_61_div_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 88)(1, "button", 89);
    \u0275\u0275listener("click", function ProfilePageComponent_div_4_div_61_div_51_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.savePersonal());
    });
    \u0275\u0275text(2, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 90);
    \u0275\u0275listener("click", function ProfilePageComponent_div_4_div_61_div_51_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.cancelEditPersonal());
    });
    \u0275\u0275text(4, "\u041E\u0442\u043C\u0435\u043D\u0430");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.isSavingPersonal);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isSavingPersonal);
  }
}
function ProfilePageComponent_div_4_div_61_span_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 91);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.client.firstName);
  }
}
function ProfilePageComponent_div_4_div_61_input_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 92);
    \u0275\u0275twoWayListener("ngModelChange", function ProfilePageComponent_div_4_div_61_input_57_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.editedPersonal.firstName, $event) || (ctx_r1.editedPersonal.firstName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editedPersonal.firstName);
  }
}
function ProfilePageComponent_div_4_div_61_div_58_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 91);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.client.lastName);
  }
}
function ProfilePageComponent_div_4_div_61_div_58_input_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 92);
    \u0275\u0275twoWayListener("ngModelChange", function ProfilePageComponent_div_4_div_61_div_58_input_4_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.editedPersonal.lastName, $event) || (ctx_r1.editedPersonal.lastName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editedPersonal.lastName);
  }
}
function ProfilePageComponent_div_4_div_61_div_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 72)(1, "span", 73);
    \u0275\u0275text(2, "\u0424\u0430\u043C\u0438\u043B\u0438\u044F");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ProfilePageComponent_div_4_div_61_div_58_span_3_Template, 2, 1, "span", 74)(4, ProfilePageComponent_div_4_div_61_div_58_input_4_Template, 1, 1, "input", 75);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r1.isEditingPersonal);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isEditingPersonal);
  }
}
function ProfilePageComponent_div_4_div_61_span_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 91);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.client.dateOfBirth ? ctx_r1.formatDate(ctx_r1.client.dateOfBirth) : "\u2014");
  }
}
function ProfilePageComponent_div_4_div_61_input_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 93);
    \u0275\u0275twoWayListener("ngModelChange", function ProfilePageComponent_div_4_div_61_input_63_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.editedPersonal.dateOfBirth, $event) || (ctx_r1.editedPersonal.dateOfBirth = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editedPersonal.dateOfBirth);
  }
}
function ProfilePageComponent_div_4_div_61_span_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 91);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.client.type === "business" ? "\u0411\u0438\u0437\u043D\u0435\u0441" : "\u0418\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u044B\u0439");
  }
}
function ProfilePageComponent_div_4_div_61_select_68_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 94);
    \u0275\u0275twoWayListener("ngModelChange", function ProfilePageComponent_div_4_div_61_select_68_Template_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.editedPersonal.type, $event) || (ctx_r1.editedPersonal.type = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(1, "option", 95);
    \u0275\u0275text(2, "\u0418\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u044B\u0439");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "option", 96);
    \u0275\u0275text(4, "\u0411\u0438\u0437\u043D\u0435\u0441");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editedPersonal.type);
  }
}
function ProfilePageComponent_div_4_div_61_button_73_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 85);
    \u0275\u0275listener("click", function ProfilePageComponent_div_4_div_61_button_73_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.startEditContacts());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 17);
    \u0275\u0275element(2, "path", 86)(3, "path", 87);
    \u0275\u0275elementEnd()();
  }
}
function ProfilePageComponent_div_4_div_61_div_74_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 88)(1, "button", 89);
    \u0275\u0275listener("click", function ProfilePageComponent_div_4_div_61_div_74_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.saveContacts());
    });
    \u0275\u0275text(2, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 90);
    \u0275\u0275listener("click", function ProfilePageComponent_div_4_div_61_div_74_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.cancelEditContacts());
    });
    \u0275\u0275text(4, "\u041E\u0442\u043C\u0435\u043D\u0430");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.isSavingContacts);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isSavingContacts);
  }
}
function ProfilePageComponent_div_4_div_61_span_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 91);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "phoneFormat");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, ctx_r1.client.phone));
  }
}
function ProfilePageComponent_div_4_div_61_input_80_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 97);
    \u0275\u0275twoWayListener("ngModelChange", function ProfilePageComponent_div_4_div_61_input_80_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.editedContacts.phone, $event) || (ctx_r1.editedContacts.phone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editedContacts.phone);
  }
}
function ProfilePageComponent_div_4_div_61_span_84_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 98);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.client.email || "\u2014");
  }
}
function ProfilePageComponent_div_4_div_61_input_85_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 99);
    \u0275\u0275twoWayListener("ngModelChange", function ProfilePageComponent_div_4_div_61_input_85_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.editedContacts.email, $event) || (ctx_r1.editedContacts.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editedContacts.email);
    \u0275\u0275property("disabled", true);
  }
}
function ProfilePageComponent_div_4_div_61_button_90_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 85);
    \u0275\u0275listener("click", function ProfilePageComponent_div_4_div_61_button_90_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.startEditComment());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 17);
    \u0275\u0275element(2, "path", 86)(3, "path", 87);
    \u0275\u0275elementEnd()();
  }
}
function ProfilePageComponent_div_4_div_61_div_91_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 88)(1, "button", 89);
    \u0275\u0275listener("click", function ProfilePageComponent_div_4_div_61_div_91_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.saveComment());
    });
    \u0275\u0275text(2, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 90);
    \u0275\u0275listener("click", function ProfilePageComponent_div_4_div_61_div_91_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.cancelEditComment());
    });
    \u0275\u0275text(4, "\u041E\u0442\u043C\u0435\u043D\u0430");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.isSavingComment);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isSavingComment);
  }
}
function ProfilePageComponent_div_4_div_61_p_93_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 100);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.client.comment || "\u041D\u0435\u0442 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u044F");
  }
}
function ProfilePageComponent_div_4_div_61_textarea_94_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "textarea", 101);
    \u0275\u0275twoWayListener("ngModelChange", function ProfilePageComponent_div_4_div_61_textarea_94_Template_textarea_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.editedComment, $event) || (ctx_r1.editedComment = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editedComment);
  }
}
function ProfilePageComponent_div_4_div_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48)(1, "div", 49)(2, "div", 50)(3, "h3", 51);
    \u0275\u0275text(4, "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u0438");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 52)(6, "div", 53)(7, "div", 54);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 17);
    \u0275\u0275element(9, "path", 55)(10, "rect", 56)(11, "path", 57);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(12, "div", 58)(13, "span", 59);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 60);
    \u0275\u0275text(16, "\u0422\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u0439");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 53)(18, "div", 61);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(19, "svg", 17);
    \u0275\u0275element(20, "path", 62);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(21, "div", 58)(22, "span", 59);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 60);
    \u0275\u0275text(25, "\u041E\u0431\u0449\u0430\u044F \u0441\u0443\u043C\u043C\u0430");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 53)(27, "div", 63);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(28, "svg", 17);
    \u0275\u0275element(29, "path", 64);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(30, "div", 58)(31, "span", 59);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "span", 60);
    \u0275\u0275text(34, "\u0411\u043E\u043D\u0443\u0441\u043E\u0432 \u043D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u043E");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "div", 53)(36, "div", 65);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(37, "svg", 17);
    \u0275\u0275element(38, "circle", 66)(39, "path", 67);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(40, "div", 58)(41, "span", 59);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "span", 60);
    \u0275\u0275text(44, "\u0411\u043E\u043D\u0443\u0441\u043E\u0432 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u043E");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(45, "div", 68)(46, "div", 49)(47, "div", 50)(48, "h3", 51);
    \u0275\u0275text(49, "\u041B\u0438\u0447\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435");
    \u0275\u0275elementEnd();
    \u0275\u0275template(50, ProfilePageComponent_div_4_div_61_button_50_Template, 4, 0, "button", 69)(51, ProfilePageComponent_div_4_div_61_div_51_Template, 5, 2, "div", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "div", 71)(53, "div", 72)(54, "span", 73);
    \u0275\u0275text(55);
    \u0275\u0275elementEnd();
    \u0275\u0275template(56, ProfilePageComponent_div_4_div_61_span_56_Template, 2, 1, "span", 74)(57, ProfilePageComponent_div_4_div_61_input_57_Template, 1, 1, "input", 75);
    \u0275\u0275elementEnd();
    \u0275\u0275template(58, ProfilePageComponent_div_4_div_61_div_58_Template, 5, 2, "div", 76);
    \u0275\u0275elementStart(59, "div", 72)(60, "span", 73);
    \u0275\u0275text(61, "\u0414\u0430\u0442\u0430 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F");
    \u0275\u0275elementEnd();
    \u0275\u0275template(62, ProfilePageComponent_div_4_div_61_span_62_Template, 2, 1, "span", 74)(63, ProfilePageComponent_div_4_div_61_input_63_Template, 1, 1, "input", 77);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "div", 72)(65, "span", 73);
    \u0275\u0275text(66, "\u0422\u0438\u043F \u043A\u043B\u0438\u0435\u043D\u0442\u0430");
    \u0275\u0275elementEnd();
    \u0275\u0275template(67, ProfilePageComponent_div_4_div_61_span_67_Template, 2, 1, "span", 74)(68, ProfilePageComponent_div_4_div_61_select_68_Template, 5, 1, "select", 78);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(69, "div", 49)(70, "div", 50)(71, "h3", 51);
    \u0275\u0275text(72, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B");
    \u0275\u0275elementEnd();
    \u0275\u0275template(73, ProfilePageComponent_div_4_div_61_button_73_Template, 4, 0, "button", 69)(74, ProfilePageComponent_div_4_div_61_div_74_Template, 5, 2, "div", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "div", 71)(76, "div", 72)(77, "span", 73);
    \u0275\u0275text(78, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D");
    \u0275\u0275elementEnd();
    \u0275\u0275template(79, ProfilePageComponent_div_4_div_61_span_79_Template, 3, 3, "span", 74)(80, ProfilePageComponent_div_4_div_61_input_80_Template, 1, 1, "input", 79);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "div", 72)(82, "span", 73);
    \u0275\u0275text(83, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275template(84, ProfilePageComponent_div_4_div_61_span_84_Template, 2, 1, "span", 80)(85, ProfilePageComponent_div_4_div_61_input_85_Template, 1, 2, "input", 81);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(86, "div", 49)(87, "div", 50)(88, "h3", 51);
    \u0275\u0275text(89, "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439");
    \u0275\u0275elementEnd();
    \u0275\u0275template(90, ProfilePageComponent_div_4_div_61_button_90_Template, 4, 0, "button", 69)(91, ProfilePageComponent_div_4_div_61_div_91_Template, 5, 2, "div", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(92, "div", 82);
    \u0275\u0275template(93, ProfilePageComponent_div_4_div_61_p_93_Template, 2, 1, "p", 83)(94, ProfilePageComponent_div_4_div_61_textarea_94_Template, 1, 1, "textarea", 84);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(14);
    \u0275\u0275textInterpolate(ctx_r1.clientTotals.totalPayments);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("", ctx_r1.formatAmount(ctx_r1.clientTotals.totalRevenue), " \u20B8");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.formatAmount(ctx_r1.clientTotals.totalBonusesGranted));
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r1.formatAmount(ctx_r1.clientTotals.totalBonusesUsed));
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", !ctx_r1.isEditingPersonal);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isEditingPersonal);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(!ctx_r1.isEditingPersonal && ctx_r1.client.type === "business" || ctx_r1.isEditingPersonal && ctx_r1.editedPersonal.type === "business" ? "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435" : "\u0418\u043C\u044F");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isEditingPersonal);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isEditingPersonal);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isEditingPersonal && ctx_r1.client.type !== "business" || ctx_r1.isEditingPersonal && ctx_r1.editedPersonal.type !== "business");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", !ctx_r1.isEditingPersonal);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isEditingPersonal);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", !ctx_r1.isEditingPersonal);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isEditingPersonal);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", !ctx_r1.isEditingContacts);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isEditingContacts);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", !ctx_r1.isEditingContacts);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isEditingContacts);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", !ctx_r1.isEditingContacts);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isEditingContacts);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", !ctx_r1.isEditingComment);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isEditingComment);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.isEditingComment);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isEditingComment);
  }
}
function ProfilePageComponent_div_4_div_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48)(1, "div", 102);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 17);
    \u0275\u0275element(3, "path", 33)(4, "path", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "h2");
    \u0275\u0275text(6, "\u0421\u043A\u043E\u0440\u043E");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8, '\u0420\u0430\u0437\u0434\u0435\u043B "\u041A\u043E\u0448\u0435\u043B\u0435\u043A" \u043D\u0430\u0445\u043E\u0434\u0438\u0442\u0441\u044F \u0432 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0435');
    \u0275\u0275elementEnd()()();
  }
}
function ProfilePageComponent_div_4_div_63_div_29_ng_container_17_app_badge_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-badge", 138);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bonus_r17 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" -", ctx_r1.formatAmount(bonus_r17.amount), " ");
  }
}
function ProfilePageComponent_div_4_div_63_div_29_ng_container_17_app_badge_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-badge", 139);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bonus_r17 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatAmount(bonus_r17.amount), " ");
  }
}
function ProfilePageComponent_div_4_div_63_div_29_ng_container_17_app_badge_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-badge", 139);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bonus_r17 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" -", ctx_r1.formatAmount(bonus_r17.amount), " \u20B8 ");
  }
}
function ProfilePageComponent_div_4_div_63_div_29_ng_container_17_app_badge_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-badge", 140);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_7_0;
    const bonus_r17 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatAmount((tmp_7_0 = bonus_r17.originalAmount) !== null && tmp_7_0 !== void 0 ? tmp_7_0 : bonus_r17.amount), " ");
  }
}
function ProfilePageComponent_div_4_div_63_div_29_ng_container_17_app_badge_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-badge", 141);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_7_0;
    const bonus_r17 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" +", ctx_r1.formatAmount((tmp_7_0 = bonus_r17.originalAmount) !== null && tmp_7_0 !== void 0 ? tmp_7_0 : bonus_r17.amount), " ");
  }
}
function ProfilePageComponent_div_4_div_63_div_29_ng_container_17_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 142);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function ProfilePageComponent_div_4_div_63_div_29_ng_container_17_app_badge_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-badge", 143);
    \u0275\u0275text(1, " \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u043E ");
    \u0275\u0275elementEnd();
  }
}
function ProfilePageComponent_div_4_div_63_div_29_ng_container_17_app_badge_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-badge", 144);
    \u0275\u0275text(1, " \u041E\u0442\u043E\u0437\u0432\u0430\u043D\u043E ");
    \u0275\u0275elementEnd();
  }
}
function ProfilePageComponent_div_4_div_63_div_29_ng_container_17_app_badge_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-badge", 145);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bonus_r17 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("badgeType", ctx_r1.getDaysUntilExpiry(bonus_r17.expiresAt) <= 0 ? "bonusExpired" : ctx_r1.getDaysUntilExpiry(bonus_r17.expiresAt) <= 7 ? "warning" : "success");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r1.formatAmount(bonus_r17.remainingAmount), "", bonus_r17.originalAmount != null ? " \u0438\u0437 " + ctx_r1.formatAmount(bonus_r17.originalAmount) : "", " \u20B8 ");
  }
}
function ProfilePageComponent_div_4_div_63_div_29_ng_container_17_app_badge_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-badge", 146);
    \u0275\u0275text(1, " \u0418\u0441\u0442\u0435\u043A ");
    \u0275\u0275elementEnd();
  }
}
function ProfilePageComponent_div_4_div_63_div_29_ng_container_17_span_23_app_badge_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-badge", 150);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bonus_r17 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("badgeType", ctx_r1.getDaysUntilExpiry(bonus_r17.expiresAt) <= 7 ? "warning" : "success");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r1.getDaysUntilExpiry(bonus_r17.expiresAt), " ", ctx_r1.getDaysText(ctx_r1.getDaysUntilExpiry(bonus_r17.expiresAt)), " ");
  }
}
function ProfilePageComponent_div_4_div_63_div_29_ng_container_17_span_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 147)(1, "span", 148);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ProfilePageComponent_div_4_div_63_div_29_ng_container_17_span_23_app_badge_3_Template, 2, 3, "app-badge", 149);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bonus_r17 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(bonus_r17.expiresAt));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getDaysUntilExpiry(bonus_r17.expiresAt) > 0);
  }
}
function ProfilePageComponent_div_4_div_63_div_29_ng_container_17_span_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 142);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function ProfilePageComponent_div_4_div_63_div_29_ng_container_17_tr_30_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 163);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bonus_r17 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", bonus_r17.refundReason, " ");
  }
}
function ProfilePageComponent_div_4_div_63_div_29_ng_container_17_tr_30_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 164);
    \u0275\u0275text(1, " \u041F\u0440\u0438\u0447\u0438\u043D\u0430 \u043D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D\u0430 ");
    \u0275\u0275elementEnd();
  }
}
function ProfilePageComponent_div_4_div_63_div_29_ng_container_17_tr_30_a_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 165);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bonus_r17 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c12, bonus_r17.initiatedById));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", bonus_r17.initiatedBy === "SYSTEM" ? "\u0421\u0438\u0441\u0442\u0435\u043C\u0430" : bonus_r17.initiatedBy, " ");
  }
}
function ProfilePageComponent_div_4_div_63_div_29_ng_container_17_tr_30_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 166);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bonus_r17 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", bonus_r17.initiatedBy === "SYSTEM" ? "\u0421\u0438\u0441\u0442\u0435\u043C\u0430" : bonus_r17.initiatedBy, " ");
  }
}
function ProfilePageComponent_div_4_div_63_div_29_ng_container_17_tr_30_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 167);
    \u0275\u0275text(1, " \u041D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D ");
    \u0275\u0275elementEnd();
  }
}
function ProfilePageComponent_div_4_div_63_div_29_ng_container_17_tr_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 151)(1, "td", 152)(2, "div", 153)(3, "div", 154)(4, "div", 155)(5, "span", 156);
    \u0275\u0275text(6, "\u041F\u0440\u0438\u0447\u0438\u043D\u0430 \u0432\u043E\u0437\u0432\u0440\u0430\u0442\u0430:");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, ProfilePageComponent_div_4_div_63_div_29_ng_container_17_tr_30_div_7_Template, 2, 1, "div", 157)(8, ProfilePageComponent_div_4_div_63_div_29_ng_container_17_tr_30_div_8_Template, 2, 0, "div", 158);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 159)(10, "span", 156);
    \u0275\u0275text(11, "\u0418\u043D\u0438\u0446\u0438\u0430\u0442\u043E\u0440:");
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, ProfilePageComponent_div_4_div_63_div_29_ng_container_17_tr_30_a_12_Template, 2, 4, "a", 160)(13, ProfilePageComponent_div_4_div_63_div_29_ng_container_17_tr_30_div_13_Template, 2, 1, "div", 161)(14, ProfilePageComponent_div_4_div_63_div_29_ng_container_17_tr_30_div_14_Template, 2, 0, "div", 162);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const bonus_r17 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", bonus_r17.refundReason);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !bonus_r17.refundReason);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", bonus_r17.initiatedBy && bonus_r17.initiatedById);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", bonus_r17.initiatedBy && !bonus_r17.initiatedById);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !bonus_r17.initiatedBy);
  }
}
function ProfilePageComponent_div_4_div_63_div_29_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "tr")(2, "td")(3, "span", 120);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "td")(6, "div", 121);
    \u0275\u0275template(7, ProfilePageComponent_div_4_div_63_div_29_ng_container_17_app_badge_7_Template, 2, 1, "app-badge", 122)(8, ProfilePageComponent_div_4_div_63_div_29_ng_container_17_app_badge_8_Template, 2, 1, "app-badge", 123)(9, ProfilePageComponent_div_4_div_63_div_29_ng_container_17_app_badge_9_Template, 2, 1, "app-badge", 123)(10, ProfilePageComponent_div_4_div_63_div_29_ng_container_17_app_badge_10_Template, 2, 1, "app-badge", 124)(11, ProfilePageComponent_div_4_div_63_div_29_ng_container_17_app_badge_11_Template, 2, 1, "app-badge", 125);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td")(13, "div", 126);
    \u0275\u0275template(14, ProfilePageComponent_div_4_div_63_div_29_ng_container_17_span_14_Template, 2, 0, "span", 127)(15, ProfilePageComponent_div_4_div_63_div_29_ng_container_17_app_badge_15_Template, 2, 0, "app-badge", 128)(16, ProfilePageComponent_div_4_div_63_div_29_ng_container_17_app_badge_16_Template, 2, 0, "app-badge", 129)(17, ProfilePageComponent_div_4_div_63_div_29_ng_container_17_app_badge_17_Template, 2, 3, "app-badge", 130)(18, ProfilePageComponent_div_4_div_63_div_29_ng_container_17_app_badge_18_Template, 2, 0, "app-badge", 131);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "td")(20, "span", 132);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "td");
    \u0275\u0275template(23, ProfilePageComponent_div_4_div_63_div_29_ng_container_17_span_23_Template, 4, 2, "span", 133)(24, ProfilePageComponent_div_4_div_63_div_29_ng_container_17_span_24_Template, 2, 0, "span", 127);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "td")(26, "div", 134)(27, "app-icon-button", 135);
    \u0275\u0275listener("onClick", function ProfilePageComponent_div_4_div_63_div_29_ng_container_17_Template_app_icon_button_onClick_27_listener() {
      const bonus_r17 = \u0275\u0275restoreView(_r16).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.toggleBonusRow(bonus_r17.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(28, "svg", 17);
    \u0275\u0275element(29, "path", 136);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275template(30, ProfilePageComponent_div_4_div_63_div_29_ng_container_17_tr_30_Template, 15, 5, "tr", 137);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const bonus_r17 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275classProp("expired", ctx_r1.getDaysUntilExpiry(bonus_r17.expiresAt) <= 0 && !bonus_r17.used && bonus_r17.type !== "refund" && bonus_r17.type !== "manual_revoke")("expiring-soon", ctx_r1.getDaysUntilExpiry(bonus_r17.expiresAt) <= 7 && ctx_r1.getDaysUntilExpiry(bonus_r17.expiresAt) > 0)("used", bonus_r17.used)("refund", bonus_r17.type === "refund")("manual-revoke", bonus_r17.type === "manual_revoke");
    \u0275\u0275advance(2);
    \u0275\u0275classMap("bonus-type-" + bonus_r17.type);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getBonusTypeLabel(bonus_r17.type), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", bonus_r17.used);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", bonus_r17.type === "refund");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", bonus_r17.type === "manual_revoke");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", bonus_r17.type !== "refund" && bonus_r17.type !== "manual_revoke" && !bonus_r17.used && ctx_r1.getDaysUntilExpiry(bonus_r17.expiresAt) <= 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", bonus_r17.type !== "refund" && bonus_r17.type !== "manual_revoke" && !bonus_r17.used && ctx_r1.getDaysUntilExpiry(bonus_r17.expiresAt) > 0);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", bonus_r17.type === "manual_revoke");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", bonus_r17.used);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", bonus_r17.type === "refund");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", bonus_r17.type !== "refund" && bonus_r17.type !== "manual_revoke" && !bonus_r17.used && bonus_r17.remainingAmount != null);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", bonus_r17.type !== "refund" && bonus_r17.type !== "manual_revoke" && !bonus_r17.used && bonus_r17.remainingAmount == null && ctx_r1.getDaysUntilExpiry(bonus_r17.expiresAt) <= 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(bonus_r17.used || bonus_r17.type === "refund" || bonus_r17.type === "manual_revoke" ? "\u2014" : ctx_r1.formatDate(bonus_r17.issuedAt));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !(bonus_r17.used || bonus_r17.type === "refund" || bonus_r17.type === "manual_revoke"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", bonus_r17.used || bonus_r17.type === "refund" || bonus_r17.type === "manual_revoke");
    \u0275\u0275advance(3);
    \u0275\u0275property("tooltip", ctx_r1.isBonusRowExpanded(bonus_r17.id) ? "\u0421\u043A\u0440\u044B\u0442\u044C \u0434\u0435\u0442\u0430\u043B\u0438" : "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0434\u0435\u0442\u0430\u043B\u0438");
    \u0275\u0275advance();
    \u0275\u0275classProp("rotated", ctx_r1.isBonusRowExpanded(bonus_r17.id));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.isBonusRowExpanded(bonus_r17.id));
  }
}
function ProfilePageComponent_div_4_div_63_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 117)(1, "table", 118)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "\u0422\u0438\u043F \u0431\u043E\u043D\u0443\u0441\u0430");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "\u0421\u0443\u043C\u043C\u0430 \u043D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u044F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "\u041E\u0441\u0442\u0430\u0442\u043E\u043A \u0431\u043E\u043D\u0443\u0441\u0430");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "\u041D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u043E");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "\u0418\u0441\u0442\u0435\u043A\u0430\u0435\u0442");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275template(17, ProfilePageComponent_div_4_div_63_div_29_ng_container_17_Template, 31, 30, "ng-container", 119);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const paginatedBonuses_r18 = \u0275\u0275reference(28);
    \u0275\u0275advance(17);
    \u0275\u0275property("ngForOf", paginatedBonuses_r18.paginatedData);
  }
}
function ProfilePageComponent_div_4_div_63_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 168);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 17);
    \u0275\u0275element(2, "path", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "\u041D\u0435\u0442 \u0430\u043A\u0442\u0438\u0432\u043D\u044B\u0445 \u0431\u043E\u043D\u0443\u0441\u043E\u0432");
    \u0275\u0275elementEnd()();
  }
}
function ProfilePageComponent_div_4_div_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48)(1, "div", 103)(2, "div", 104)(3, "div", 105)(4, "div", 106);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 17);
    \u0275\u0275element(6, "path", 64);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "div", 107)(8, "h3", 51);
    \u0275\u0275text(9, "\u0414\u0435\u0442\u0430\u043B\u0438 \u0431\u043E\u043D\u0443\u0441\u043E\u0432");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 108)(11, "div", 109)(12, "span", 60);
    \u0275\u0275text(13, "\u041E\u0441\u0442\u0430\u043B\u043E\u0441\u044C:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 110);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 109)(17, "span", 60);
    \u0275\u0275text(18, "\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u043E:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 111);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 109)(22, "span", 60);
    \u0275\u0275text(23, "\u0421\u0433\u043E\u0440\u0435\u043B\u043E:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 112);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(26, "div", 113)(27, "app-paginated-table-wrapper", 114, 0);
    \u0275\u0275template(29, ProfilePageComponent_div_4_div_63_div_29_Template, 18, 1, "div", 115)(30, ProfilePageComponent_div_4_div_63_div_30_Template, 5, 0, "div", 116);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(15);
    \u0275\u0275textInterpolate1("", ctx_r1.formatAmount(ctx_r1.bonusBalance), " \u20B8");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r1.formatAmount(ctx_r1.getUsedBonusesTotal()), " \u20B8");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r1.formatAmount(ctx_r1.getExpiredBonusesTotal()), " \u20B8");
    \u0275\u0275advance(2);
    \u0275\u0275property("paginationEnabled", true)("data", ctx_r1.bonusesDetails)("defaultPageSize", 10);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.bonusesDetails.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.bonusesDetails.length === 0);
  }
}
function ProfilePageComponent_div_4_div_64_tr_32_app_badge_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-badge", 141);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const payment_r20 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" +", ctx_r1.formatAmount(payment_r20.bonusEarned), " ");
  }
}
function ProfilePageComponent_div_4_div_64_tr_32_app_badge_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-badge", 138);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const payment_r20 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" -", ctx_r1.formatAmount(payment_r20.bonusUsed), " ");
  }
}
function ProfilePageComponent_div_4_div_64_tr_32_app_badge_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-badge", 139);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const payment_r20 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" -", ctx_r1.formatAmount(payment_r20.bonusRevoked), " ");
  }
}
function ProfilePageComponent_div_4_div_64_tr_32_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 200);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function ProfilePageComponent_div_4_div_64_tr_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 181)(1, "td", 182)(2, "span", 183);
    \u0275\u0275listener("click", function ProfilePageComponent_div_4_div_64_tr_32_Template_span_click_2_listener() {
      const payment_r20 = \u0275\u0275restoreView(_r19).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openPaymentView(payment_r20.id));
    });
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 184)(5, "span", 185);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td", 186)(8, "div", 121);
    \u0275\u0275template(9, ProfilePageComponent_div_4_div_64_tr_32_app_badge_9_Template, 2, 1, "app-badge", 125)(10, ProfilePageComponent_div_4_div_64_tr_32_app_badge_10_Template, 2, 1, "app-badge", 122)(11, ProfilePageComponent_div_4_div_64_tr_32_app_badge_11_Template, 2, 1, "app-badge", 123)(12, ProfilePageComponent_div_4_div_64_tr_32_span_12_Template, 2, 0, "span", 187);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td", 188);
    \u0275\u0275element(14, "app-badge", 189);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 190)(16, "app-badge", 191);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "td", 192)(19, "div", 193)(20, "span", 194);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 195);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "td", 196)(25, "div", 134)(26, "app-icon-button", 197);
    \u0275\u0275listener("onClick", function ProfilePageComponent_div_4_div_64_tr_32_Template_app_icon_button_onClick_26_listener() {
      const payment_r20 = \u0275\u0275restoreView(_r19).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openRefundModal(payment_r20));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(27, "svg", 198);
    \u0275\u0275element(28, "path", 199);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const payment_r20 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(payment_r20.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.formatAmount(payment_r20.amount), " \u20B8");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", payment_r20.bonusEarned > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", payment_r20.bonusUsed > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", payment_r20.bonusRevoked > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", payment_r20.bonusEarned === 0 && payment_r20.bonusUsed === 0 && payment_r20.bonusRevoked === 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("paymentMethod", ctx_r1.getPaymentMethodForBadge(payment_r20.paymentMethod));
    \u0275\u0275advance(2);
    \u0275\u0275property("badgeType", payment_r20.isRefund ? "refund" : "payment")("icon", payment_r20.isRefund ? "refund" : "payment");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", payment_r20.isRefund ? "\u0412\u043E\u0437\u0432\u0440\u0430\u0442" : "\u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E", " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(payment_r20.date);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(payment_r20.time);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", payment_r20.isRefund);
  }
}
function ProfilePageComponent_div_4_div_64_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 168);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 198);
    \u0275\u0275element(2, "path", 201)(3, "rect", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "\u041F\u043B\u0430\u0442\u0435\u0436\u0438 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u044B");
    \u0275\u0275elementEnd()();
  }
}
function ProfilePageComponent_div_4_div_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48)(1, "div", 169)(2, "div", 50)(3, "div", 105)(4, "div", 106);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 17);
    \u0275\u0275element(6, "path", 37);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "h3", 51);
    \u0275\u0275text(8, "\u0418\u0441\u0442\u043E\u0440\u0438\u044F \u043F\u043B\u0430\u0442\u0435\u0436\u0435\u0439");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "span", 170);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "app-paginated-table-wrapper", 171, 1)(13, "div", 117)(14, "table", 172)(15, "thead")(16, "tr")(17, "th", 173);
    \u0275\u0275text(18, "ID \u043F\u043B\u0430\u0442\u0435\u0436\u0430");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th", 174);
    \u0275\u0275text(20, "\u0421\u0443\u043C\u043C\u0430");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th", 175);
    \u0275\u0275text(22, "\u0411\u043E\u043D\u0443\u0441\u044B");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th", 176);
    \u0275\u0275text(24, "\u0421\u043F\u043E\u0441\u043E\u0431 \u043E\u043F\u043B\u0430\u0442\u044B");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "th", 177);
    \u0275\u0275text(26, "\u0421\u0442\u0430\u0442\u0443\u0441");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "th", 178);
    \u0275\u0275text(28, "\u0414\u0430\u0442\u0430 \u0438 \u0432\u0440\u0435\u043C\u044F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "th", 179);
    \u0275\u0275text(30, "\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "tbody");
    \u0275\u0275template(32, ProfilePageComponent_div_4_div_64_tr_32_Template, 29, 13, "tr", 180);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(33, ProfilePageComponent_div_4_div_64_div_33_Template, 6, 0, "div", 116);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const paginatedTable_r21 = \u0275\u0275reference(12);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1("", ctx_r1.payments.length, " \u043F\u043B\u0430\u0442\u0435\u0436\u0435\u0439");
    \u0275\u0275advance();
    \u0275\u0275property("paginationEnabled", true)("data", ctx_r1.payments)("defaultPageSize", 15);
    \u0275\u0275advance(21);
    \u0275\u0275property("ngForOf", paginatedTable_r21.paginatedData);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.payments.length === 0);
  }
}
function ProfilePageComponent_div_4_div_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48)(1, "div", 102);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 17);
    \u0275\u0275element(3, "path", 38)(4, "path", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "h2");
    \u0275\u0275text(6, "\u0421\u043A\u043E\u0440\u043E");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8, '\u0420\u0430\u0437\u0434\u0435\u043B "\u0416\u0443\u0440\u043D\u0430\u043B \u0430\u0443\u0434\u0438\u0442\u0430" \u043D\u0430\u0445\u043E\u0434\u0438\u0442\u0441\u044F \u0432 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0435');
    \u0275\u0275elementEnd()()();
  }
}
function ProfilePageComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15)(2, "a", 16);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 17);
    \u0275\u0275element(4, "path", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "\u041A\u043B\u0438\u0435\u043D\u0442\u044B");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 19);
    \u0275\u0275template(8, ProfilePageComponent_div_4__svg_svg_8_Template, 3, 0, "svg", 20)(9, ProfilePageComponent_div_4__svg_svg_9_Template, 3, 0, "svg", 20);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "h1", 21);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p", 22);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "phoneFormat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 23)(17, "app-inline-tags", 24);
    \u0275\u0275listener("tagsChange", function ProfilePageComponent_div_4_Template_app_inline_tags_tagsChange_17_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onInlineTagsChange($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 25)(19, "app-split-button", 26);
    \u0275\u0275listener("mainClick", function ProfilePageComponent_div_4_Template_app_split_button_mainClick_19_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openCreatePayment());
    })("itemSelect", function ProfilePageComponent_div_4_Template_app_split_button_itemSelect_19_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSplitButtonItemSelect($event));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(20, "svg", 27);
    \u0275\u0275element(21, "path", 28);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(22, "nav", 29)(23, "a", 30);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(24, "svg", 17);
    \u0275\u0275element(25, "path", 31)(26, "path", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(27, "span");
    \u0275\u0275text(28, "\u041E\u0431\u0449\u0435\u0435");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "a", 30);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(30, "svg", 17);
    \u0275\u0275element(31, "path", 33)(32, "path", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(33, "span");
    \u0275\u0275text(34, "\u041A\u043E\u0448\u0435\u043B\u0435\u043A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "span", 35);
    \u0275\u0275text(36, "\u0421\u043A\u043E\u0440\u043E");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "a", 30);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(38, "svg", 17);
    \u0275\u0275element(39, "path", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(40, "span");
    \u0275\u0275text(41, "\u0414\u0435\u0442\u0430\u043B\u0438 \u0431\u043E\u043D\u0443\u0441\u043E\u0432");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "a", 30);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(43, "svg", 17);
    \u0275\u0275element(44, "path", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(45, "span");
    \u0275\u0275text(46, "\u0414\u0435\u0442\u0430\u043B\u0438 \u043F\u043B\u0430\u0442\u0435\u0436\u0435\u0439");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "a", 30);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(48, "svg", 17);
    \u0275\u0275element(49, "path", 38)(50, "path", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(51, "span");
    \u0275\u0275text(52, "\u0416\u0443\u0440\u043D\u0430\u043B \u0430\u0443\u0434\u0438\u0442\u0430");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "span", 35);
    \u0275\u0275text(54, "\u0421\u043A\u043E\u0440\u043E");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(55, "button", 40);
    \u0275\u0275listener("click", function ProfilePageComponent_div_4_Template_button_click_55_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openDeleteModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(56, "svg", 17);
    \u0275\u0275element(57, "path", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(58, "span");
    \u0275\u0275text(59, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043A\u043B\u0438\u0435\u043D\u0442\u0430");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(60, "div", 42);
    \u0275\u0275template(61, ProfilePageComponent_div_4_div_61_Template, 95, 24, "div", 43)(62, ProfilePageComponent_div_4_div_62_Template, 9, 0, "div", 43)(63, ProfilePageComponent_div_4_div_63_Template, 31, 8, "div", 43)(64, ProfilePageComponent_div_4_div_64_Template, 34, 6, "div", 43)(65, ProfilePageComponent_div_4_div_65_Template, 9, 0, "div", 43);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(38, _c03));
    \u0275\u0275advance(5);
    \u0275\u0275classProp("business", ctx_r1.client.type === "business");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.client.type === "business");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.client.type === "individual");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.client.type === "business" ? "\u0411\u0438\u0437\u043D\u0435\u0441" : "\u0418\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u044B\u0439", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getFullName());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 36, ctx_r1.client.phone));
    \u0275\u0275advance(3);
    \u0275\u0275property("tags", ctx_r1.client.tags)("availableTags", ctx_r1.availableTags);
    \u0275\u0275advance(2);
    \u0275\u0275property("items", ctx_r1.splitButtonItems);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("active", ctx_r1.activeView === "general");
    \u0275\u0275propertyInterpolate1("routerLink", "/clients/", ctx_r1.client.id, "/general");
    \u0275\u0275advance(6);
    \u0275\u0275classProp("active", ctx_r1.activeView === "wallet");
    \u0275\u0275propertyInterpolate1("routerLink", "/clients/", ctx_r1.client.id, "/wallet");
    \u0275\u0275advance(8);
    \u0275\u0275classProp("active", ctx_r1.activeView === "bonus-details");
    \u0275\u0275propertyInterpolate1("routerLink", "/clients/", ctx_r1.client.id, "/bonus-details");
    \u0275\u0275advance(5);
    \u0275\u0275classProp("active", ctx_r1.activeView === "payment-details");
    \u0275\u0275propertyInterpolate1("routerLink", "/clients/", ctx_r1.client.id, "/payment-details");
    \u0275\u0275advance(5);
    \u0275\u0275classProp("active", ctx_r1.activeView === "audit-logs");
    \u0275\u0275propertyInterpolate1("routerLink", "/clients/", ctx_r1.client.id, "/audit-logs");
    \u0275\u0275advance(14);
    \u0275\u0275property("ngIf", ctx_r1.activeView === "general");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activeView === "wallet");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activeView === "bonus-details");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activeView === "payment-details");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activeView === "audit-logs");
  }
}
function ProfilePageComponent_div_8_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 205)(1, "div", 206);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 17);
    \u0275\u0275element(3, "path", 207);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "h3", 208);
    \u0275\u0275text(5, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043A\u043B\u0438\u0435\u043D\u0442\u0430?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 209);
    \u0275\u0275text(7, " \u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B, \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u043A\u043B\u0438\u0435\u043D\u0442\u0430 ");
    \u0275\u0275elementStart(8, "strong");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, "?");
    \u0275\u0275element(11, "br");
    \u0275\u0275text(12, " \u042D\u0442\u043E \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u043D\u0435\u043B\u044C\u0437\u044F \u043E\u0442\u043C\u0435\u043D\u0438\u0442\u044C. \u0412\u0441\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u043A\u043B\u0438\u0435\u043D\u0442\u0430, \u0432\u043A\u043B\u044E\u0447\u0430\u044F \u0438\u0441\u0442\u043E\u0440\u0438\u044E \u043F\u043B\u0430\u0442\u0435\u0436\u0435\u0439 \u0438 \u0431\u043E\u043D\u0443\u0441\u043E\u0432, \u0431\u0443\u0434\u0443\u0442 \u0443\u0434\u0430\u043B\u0435\u043D\u044B. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 210)(14, "button", 211);
    \u0275\u0275listener("click", function ProfilePageComponent_div_8_div_2_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeDeleteModal());
    });
    \u0275\u0275text(15, "\u041E\u0442\u043C\u0435\u043D\u0430");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 212);
    \u0275\u0275listener("click", function ProfilePageComponent_div_8_div_2_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.proceedToDeleteStep2());
    });
    \u0275\u0275text(17, "\u0414\u0430, \u0443\u0434\u0430\u043B\u0438\u0442\u044C");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.getFullName());
  }
}
function ProfilePageComponent_div_8_div_3_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043D\u0430\u0432\u0441\u0435\u0433\u0434\u0430");
    \u0275\u0275elementEnd();
  }
}
function ProfilePageComponent_div_8_div_3_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u0423\u0434\u0430\u043B\u0435\u043D\u0438\u0435...");
    \u0275\u0275elementEnd();
  }
}
function ProfilePageComponent_div_8_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 205)(1, "div", 213);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 17);
    \u0275\u0275element(3, "path", 214);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "h3", 208);
    \u0275\u0275text(5, "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u0435");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 209);
    \u0275\u0275text(7, " \u0414\u043B\u044F \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u044F \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u044F \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043B\u043E\u0432\u043E ");
    \u0275\u0275elementStart(8, "strong", 215);
    \u0275\u0275text(9, "\u0443\u0434\u0430\u043B\u0438\u0442\u044C");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "input", 216);
    \u0275\u0275twoWayListener("ngModelChange", function ProfilePageComponent_div_8_div_3_Template_input_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.deleteConfirmationWord, $event) || (ctx_r1.deleteConfirmationWord = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown.enter", function ProfilePageComponent_div_8_div_3_Template_input_keydown_enter_10_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.confirmDelete());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 210)(12, "button", 211);
    \u0275\u0275listener("click", function ProfilePageComponent_div_8_div_3_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeDeleteModal());
    });
    \u0275\u0275text(13, "\u041E\u0442\u043C\u0435\u043D\u0430");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 217);
    \u0275\u0275listener("click", function ProfilePageComponent_div_8_div_3_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.confirmDelete());
    });
    \u0275\u0275template(15, ProfilePageComponent_div_8_div_3_span_15_Template, 2, 0, "span", 218)(16, ProfilePageComponent_div_8_div_3_span_16_Template, 2, 0, "span", 218);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.deleteConfirmationWord);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.deleteConfirmationWord !== "\u0443\u0434\u0430\u043B\u0438\u0442\u044C" || ctx_r1.isDeletingClient);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isDeletingClient);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isDeletingClient);
  }
}
function ProfilePageComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 202);
    \u0275\u0275listener("click", function ProfilePageComponent_div_8_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDeleteModal());
    });
    \u0275\u0275elementStart(1, "div", 203);
    \u0275\u0275listener("click", function ProfilePageComponent_div_8_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r22);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275template(2, ProfilePageComponent_div_8_div_2_Template, 18, 1, "div", 204)(3, ProfilePageComponent_div_8_div_3_Template, 17, 4, "div", 204);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.deleteStep === 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.deleteStep === 2);
  }
}
var ProfilePageComponent = class _ProfilePageComponent {
  pageHeaderService = inject(PageHeaderService);
  route = inject(ActivatedRoute);
  router = inject(Router);
  titleService = inject(Title);
  clientsService = inject(ClientsService);
  paymentsService = inject(PaymentsService);
  bonusesService = inject(BonusesService);
  analyticsService = inject(AnalyticsService);
  toastService = inject(ToastService);
  transactionModalService = inject(TransactionModalService);
  cdr = inject(ChangeDetectorRef);
  destroy$ = new Subject();
  clientId = "";
  isLoading = true;
  clientNotFound = false;
  client = null;
  clientDetails = null;
  // Store full client details from API
  // Client totals for dashboard
  clientTotals = {
    totalPayments: 0,
    totalRevenue: 0,
    totalBonusesGranted: 0,
    totalBonusesUsed: 0
  };
  // Bonus balance
  bonusBalance = 0;
  // View management
  activeView = "general";
  isEditingComment = false;
  editedComment = "";
  isSavingComment = false;
  isEditingTags = false;
  editedTags = [];
  newTagInput = "";
  showTagsDropdown = false;
  isSavingTags = false;
  // Список доступных тэгов из API
  availableTags = [];
  isEditingPersonal = false;
  isSavingPersonal = false;
  editedPersonal = {
    firstName: "",
    lastName: "",
    type: "individual",
    dateOfBirth: null
  };
  isEditingContacts = false;
  isSavingContacts = false;
  editedContacts = {
    phone: "",
    email: ""
  };
  // Состояние сворачивания бонусов
  isBonusesExpanded = false;
  // Интерфейс для детальной информации о бонусах
  bonusesDetails = [];
  // Раскрытые строки бонусов
  expandedBonusRows = /* @__PURE__ */ new Set();
  // Mobile card expanded states
  expandedMobileBonusCards = /* @__PURE__ */ new Set();
  expandedMobilePaymentCards = /* @__PURE__ */ new Set();
  // Payment data
  payments = [];
  // Refund modal
  showRefundModal = false;
  selectedPaymentForRefund = null;
  showAdjustBonusModal = false;
  splitButtonItems = [
    { id: "create-payment", label: "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043F\u043B\u0430\u0442\u0435\u0436" },
    { id: "adjust-bonus", label: "\u0420\u0435\u0433\u0443\u043B\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0431\u043E\u043D\u0443\u0441" }
  ];
  // Payment view modal
  showPaymentViewModal = false;
  selectedPaymentTxId = null;
  selectedPaymentSearchResult = null;
  // Delete client modal
  showDeleteModal = false;
  deleteStep = 1;
  deleteConfirmationWord = "";
  isDeletingClient = false;
  ngOnInit() {
    this.pageHeaderService.setPageHeader("\u041F\u0440\u043E\u0444\u0438\u043B\u044C \u043A\u043B\u0438\u0435\u043D\u0442\u0430", [
      { label: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F", route: "/home" },
      { label: "\u041A\u043B\u0438\u0435\u043D\u0442\u044B", route: "/clients" },
      { label: "\u041F\u0440\u043E\u0444\u0438\u043B\u044C \u043A\u043B\u0438\u0435\u043D\u0442\u0430" }
    ]);
    this.route.params.subscribe((params) => {
      this.clientId = params["id"];
      const section = params["section"];
      const validSections = ["general", "wallet", "bonus-details", "payment-details", "audit-logs"];
      if (section && validSections.includes(section)) {
        this.activeView = section;
      } else if (this.clientId && !section) {
        this.router.navigate(["/clients", this.clientId, "general"], { replaceUrl: true });
      }
      if (this.clientId) {
        this.loadClientData();
      }
    });
    this.transactionModalService.transactionComplete$.pipe(takeUntil(this.destroy$)).subscribe(() => {
      const currentUrl = this.router.url;
      if (currentUrl.startsWith("/clients/") && this.clientId) {
        this.loadClientData();
      }
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  loadClientData() {
    this.isLoading = true;
    const client$ = this.clientsService.getClientById(this.clientId);
    const payments$ = this.paymentsService.getClientPayments(this.clientId, 0, 100);
    const bonusHistory$ = this.bonusesService.getClientBonusHistory(this.clientId, 0, 100);
    const bonusBalance$ = this.bonusesService.getClientBonusBalance(this.clientId);
    const totals$ = this.analyticsService.getClientTotals(this.clientId);
    const tags$ = this.clientsService.getTags();
    forkJoin({
      client: client$,
      payments: payments$,
      bonusHistory: bonusHistory$,
      bonusBalance: bonusBalance$,
      totals: totals$,
      tags: tags$
    }).subscribe({
      next: ({ client, payments, bonusHistory, bonusBalance, totals, tags }) => {
        this.clientDetails = client;
        const clientName = `${client.name}${client.surname ? " " + client.surname : ""}`.trim();
        this.titleService.setTitle(`Westwood - Client - ${clientName}`);
        this.client = {
          id: client.id,
          firstName: client.name,
          lastName: client.surname || "",
          phone: client.phone,
          email: client.email,
          tags: client.tags || [],
          comment: client.notes,
          type: client.clientType === "BUSINESS" ? "business" : "individual",
          dateOfBirth: client.dateOfBirth ?? null
        };
        const paymentsArray = payments?.content || [];
        this.payments = paymentsArray.map((p) => {
          try {
            return this.mapPaymentToItem(p);
          } catch (error) {
            console.error("Error mapping payment:", p, error);
            return null;
          }
        }).filter((p) => p !== null).sort((a, b) => {
          try {
            const dateA = /* @__PURE__ */ new Date(`${a.date} ${a.time}`);
            const dateB = /* @__PURE__ */ new Date(`${b.date} ${b.time}`);
            return dateB.getTime() - dateA.getTime();
          } catch (error) {
            console.error("Error sorting payments:", error);
            return 0;
          }
        });
        const bonusHistoryArray = bonusHistory?.content || [];
        this.bonusesDetails = bonusHistoryArray.map((b) => {
          try {
            let type = "purchase";
            if (b.eventType === "MANUAL_REVOKE")
              type = "manual_revoke";
            else if (b.grantReason === "WELCOME")
              type = "welcome";
            else if (b.eventType === "GRANTED")
              type = "purchase";
            else if (b.eventType === "USED")
              type = "purchase";
            else if (b.eventType === "REVOKED")
              type = "refund";
            else if (b.eventType === "EXPIRED")
              type = "loyalty";
            const base = {
              id: String(b.id),
              type,
              amount: b.bonusAmount,
              issuedAt: new Date(b.createdAt),
              expiresAt: b.expiresAt ? new Date(b.expiresAt) : new Date(Date.now() + 90 * 24 * 60 * 60 * 1e3),
              used: b.eventType === "USED",
              refundReason: b.revokeReason || void 0,
              initiatedBy: b.initiatedByUserName ?? b.revokedByUserName ?? void 0,
              initiatedById: b.initiatedByUserId != null ? String(b.initiatedByUserId) : void 0
            };
            if (b.originalAmount != null)
              base.originalAmount = b.originalAmount;
            if (b.remainingAmount != null)
              base.remainingAmount = b.remainingAmount;
            if (b.eventType === "MANUAL_REVOKE") {
              base.revokedByUserName = b.revokedByUserName ?? void 0;
              base.revokedAt = b.revokedAt ? new Date(b.revokedAt) : new Date(b.createdAt);
            }
            return base;
          } catch (error) {
            console.error("Error mapping bonus:", b, error);
            return null;
          }
        }).filter((b) => b !== null);
        this.bonusBalance = bonusBalance?.currentBalance ?? 0;
        this.clientTotals = totals || {
          totalPayments: 0,
          totalRevenue: 0,
          totalBonusesGranted: 0,
          totalBonusesUsed: 0
        };
        this.availableTags = Array.isArray(tags) ? tags : [];
        console.log("Loaded available tags:", this.availableTags);
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error("Error loading client data:", err);
        console.error("Error details:", {
          status: err.status,
          statusText: err.statusText,
          url: err.url,
          error: err.error,
          clientId: this.clientId
        });
        if (err.status === 404) {
          this.clientNotFound = true;
          this.isLoading = false;
          return;
        }
        this.loadClientDataIndividually();
        const errorMessage = err.error?.message || `\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0434\u0430\u043D\u043D\u044B\u0445 \u043A\u043B\u0438\u0435\u043D\u0442\u0430 (${err.status || "unknown"})`;
        this.toastService.error(errorMessage);
      }
    });
  }
  loadClientDataIndividually() {
    this.clientsService.getClientById(this.clientId).subscribe({
      next: (client) => {
        this.clientDetails = client;
        const clientName = `${client.name}${client.surname ? " " + client.surname : ""}`.trim();
        this.titleService.setTitle(`Westwood - Client - ${clientName}`);
        this.client = {
          id: client.id,
          firstName: client.name,
          lastName: client.surname || "",
          phone: client.phone,
          email: client.email,
          tags: client.tags || [],
          comment: client.notes,
          type: client.clientType === "BUSINESS" ? "business" : "individual",
          dateOfBirth: client.dateOfBirth ?? null
        };
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error("Error loading client:", err);
        if (err.status === 404) {
          this.clientNotFound = true;
        }
        this.isLoading = false;
      }
    });
    this.paymentsService.getClientPayments(this.clientId, 0, 100).subscribe({
      next: (payments) => {
        const paymentsArray = payments?.content || [];
        this.payments = paymentsArray.map((p) => {
          try {
            return this.mapPaymentToItem(p);
          } catch (error) {
            console.error("Error mapping payment:", p, error);
            return null;
          }
        }).filter((p) => p !== null).sort((a, b) => {
          try {
            const dateA = /* @__PURE__ */ new Date(`${a.date} ${a.time}`);
            const dateB = /* @__PURE__ */ new Date(`${b.date} ${b.time}`);
            return dateB.getTime() - dateA.getTime();
          } catch (error) {
            return 0;
          }
        });
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error("Error loading payments:", err);
        this.payments = [];
      }
    });
    this.bonusesService.getClientBonusHistory(this.clientId, 0, 100).subscribe({
      next: (bonusHistory) => {
        const bonusHistoryArray = bonusHistory?.content || [];
        this.bonusesDetails = bonusHistoryArray.map((b) => {
          try {
            let type = "purchase";
            if (b.eventType === "MANUAL_REVOKE")
              type = "manual_revoke";
            else if (b.grantReason === "WELCOME")
              type = "welcome";
            else if (b.eventType === "GRANTED")
              type = "purchase";
            else if (b.eventType === "USED")
              type = "purchase";
            else if (b.eventType === "REVOKED")
              type = "refund";
            else if (b.eventType === "EXPIRED")
              type = "loyalty";
            const base = {
              id: String(b.id),
              type,
              amount: b.bonusAmount,
              issuedAt: new Date(b.createdAt),
              expiresAt: b.expiresAt ? new Date(b.expiresAt) : new Date(Date.now() + 90 * 24 * 60 * 60 * 1e3),
              used: b.eventType === "USED",
              refundReason: b.revokeReason || void 0,
              initiatedBy: b.initiatedByUserName ?? b.revokedByUserName ?? void 0,
              initiatedById: b.initiatedByUserId != null ? String(b.initiatedByUserId) : void 0
            };
            if (b.originalAmount != null)
              base.originalAmount = b.originalAmount;
            if (b.remainingAmount != null)
              base.remainingAmount = b.remainingAmount;
            if (b.eventType === "MANUAL_REVOKE") {
              base.revokedByUserName = b.revokedByUserName ?? void 0;
              base.revokedAt = b.revokedAt ? new Date(b.revokedAt) : new Date(b.createdAt);
            }
            return base;
          } catch (error) {
            console.error("Error mapping bonus:", b, error);
            return null;
          }
        }).filter((b) => b !== null);
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error("Error loading bonus history:", err);
        this.bonusesDetails = [];
      }
    });
    this.bonusesService.getClientBonusBalance(this.clientId).subscribe({
      next: (bonusBalance) => {
        this.bonusBalance = bonusBalance?.currentBalance ?? 0;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error("Error loading bonus balance:", err);
        this.bonusBalance = 0;
      }
    });
    this.analyticsService.getClientTotals(this.clientId).subscribe({
      next: (totals) => {
        this.clientTotals = totals || {
          totalPayments: 0,
          totalRevenue: 0,
          totalBonusesGranted: 0,
          totalBonusesUsed: 0
        };
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error("Error loading client totals:", err);
        this.clientTotals = {
          totalPayments: 0,
          totalRevenue: 0,
          totalBonusesGranted: 0,
          totalBonusesUsed: 0
        };
      }
    });
    this.clientsService.getTags().subscribe({
      next: (tags) => {
        this.availableTags = Array.isArray(tags) ? tags : [];
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error("Error loading tags:", err);
        this.availableTags = [];
      }
    });
  }
  mapPaymentToItem(payment) {
    if (!payment) {
      console.warn("Invalid payment data: payment is null/undefined");
      return null;
    }
    if (!payment.createdAt) {
      console.warn("Invalid payment data: missing createdAt", payment);
      const now = /* @__PURE__ */ new Date();
      return {
        id: payment.txId || "unknown",
        clientId: payment.clientId || "",
        clientName: payment.clientName || "\u2014",
        clientPhone: payment.clientPhone || "\u2014",
        amount: payment.amount || 0,
        bonusEarned: payment.bonusGranted || 0,
        bonusUsed: payment.bonusUsed || 0,
        bonusRevoked: payment.bonusRevoked || 0,
        paymentMethod: payment.paymentMethod?.toLowerCase() || "cash",
        isRefund: payment.status === "REFUNDED" || !!payment.refundedPaymentTxId,
        date: this.formatDate(now),
        time: this.formatTime(now)
      };
    }
    try {
      const createdAt = new Date(payment.createdAt);
      if (isNaN(createdAt.getTime())) {
        console.warn("Invalid date format:", payment.createdAt);
        const now = /* @__PURE__ */ new Date();
        return {
          id: payment.txId,
          clientId: payment.clientId || "",
          clientName: payment.clientName || "\u2014",
          clientPhone: payment.clientPhone || "\u2014",
          amount: payment.amount || 0,
          bonusEarned: payment.bonusGranted || 0,
          bonusUsed: payment.bonusUsed || 0,
          bonusRevoked: payment.bonusRevoked || 0,
          paymentMethod: payment.paymentMethod?.toLowerCase() || "cash",
          isRefund: payment.status === "REFUNDED" || !!payment.refundedPaymentTxId,
          date: this.formatDate(now),
          time: this.formatTime(now)
        };
      }
      const dateStr = this.formatDate(createdAt);
      const timeStr = this.formatTime(createdAt);
      return {
        id: payment.txId,
        clientId: payment.clientId || "",
        clientName: payment.clientName || "\u2014",
        clientPhone: payment.clientPhone || "\u2014",
        amount: payment.amount || 0,
        bonusEarned: payment.bonusGranted || 0,
        bonusUsed: payment.bonusUsed || 0,
        bonusRevoked: payment.bonusRevoked || 0,
        paymentMethod: payment.paymentMethod?.toLowerCase() || "cash",
        isRefund: payment.status === "REFUNDED" || !!payment.refundedPaymentTxId,
        date: dateStr,
        time: timeStr
      };
    } catch (error) {
      console.error("Error mapping payment:", error, payment);
      const now = /* @__PURE__ */ new Date();
      return {
        id: payment.txId || "unknown",
        clientId: payment.clientId || "",
        clientName: payment.clientName || "\u2014",
        clientPhone: payment.clientPhone || "\u2014",
        amount: payment.amount || 0,
        bonusEarned: payment.bonusGranted || 0,
        bonusUsed: payment.bonusUsed || 0,
        bonusRevoked: payment.bonusRevoked || 0,
        paymentMethod: "cash",
        isRefund: false,
        date: this.formatDate(now),
        time: this.formatTime(now)
      };
    }
  }
  ngAfterViewInit() {
    const sidebarContent = document.querySelector(".sidebar-content");
    if (sidebarContent) {
      sidebarContent.scrollTop = 0;
    }
    window.scrollTo(0, 0);
  }
  getFullName() {
    if (!this.client)
      return "";
    return `${this.client.firstName} ${this.client.lastName}`.trim();
  }
  getInitials(name) {
    if (name) {
      const parts = name.split(" ");
      return parts.map((p) => p.charAt(0)).join("").toUpperCase().slice(0, 2);
    }
    if (!this.client)
      return "";
    const first = this.client.firstName.charAt(0).toUpperCase();
    const last = this.client.lastName ? this.client.lastName.charAt(0).toUpperCase() : "";
    return first + last;
  }
  // Tags editing
  startEditTags() {
    if (!this.client)
      return;
    this.editedTags = [...this.client.tags];
    this.isEditingTags = true;
    this.newTagInput = "";
    this.showTagsDropdown = false;
    console.log("Started editing tags. Available tags:", this.availableTags);
  }
  addTag() {
    if (!this.client || !this.newTagInput.trim())
      return;
    if (!this.client.tags.includes(this.newTagInput.trim())) {
      this.client.tags.push(this.newTagInput.trim());
    }
    this.newTagInput = "";
  }
  addTagFromDropdown(tag) {
    if (!this.client)
      return;
    if (!this.client.tags.includes(tag)) {
      this.client.tags.push(tag);
    }
    this.showTagsDropdown = false;
  }
  getFilteredTags() {
    if (!this.client)
      return [];
    if (!this.availableTags || this.availableTags.length === 0) {
      console.warn("Available tags is empty:", this.availableTags);
      return [];
    }
    const searchTerm = this.newTagInput.toLowerCase();
    const filtered = this.availableTags.filter((tag) => !this.client.tags.includes(tag) && (searchTerm === "" || tag.toLowerCase().includes(searchTerm)));
    console.log("Filtered tags:", {
      availableTags: this.availableTags,
      clientTags: this.client.tags,
      searchTerm,
      filtered
    });
    return filtered;
  }
  removeTag(index) {
    if (!this.client)
      return;
    this.client.tags.splice(index, 1);
  }
  saveTags() {
    if (!this.client)
      return;
    this.isSavingTags = true;
    const requestPayload = { tags: this.client.tags };
    console.log("Update Client Tags - Request Payload:", {
      clientId: this.clientId,
      payload: requestPayload
    });
    this.clientsService.updateClientTags(this.clientId, requestPayload).subscribe({
      next: () => {
        this.toastService.success("\u0422\u0435\u0433\u0438 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u044B");
        this.isEditingTags = false;
        this.newTagInput = "";
        this.showTagsDropdown = false;
        this.isSavingTags = false;
      },
      error: (err) => {
        const errorMessage = err.error?.message || "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0438 \u0442\u0435\u0433\u043E\u0432";
        this.toastService.error(errorMessage);
        this.cancelEditTags();
        this.isSavingTags = false;
      }
    });
  }
  cancelEditTags() {
    if (!this.client)
      return;
    this.client.tags = [...this.editedTags];
    this.isEditingTags = false;
    this.newTagInput = "";
    this.showTagsDropdown = false;
  }
  // Comment editing
  startEditComment() {
    if (!this.client)
      return;
    this.editedComment = this.client.comment || "";
    this.isEditingComment = true;
  }
  saveComment() {
    if (!this.client)
      return;
    this.isSavingComment = true;
    const requestPayload = { notes: this.editedComment };
    console.log("Update Client Notes - Request Payload:", {
      clientId: this.clientId,
      payload: requestPayload
    });
    this.clientsService.updateClientNotes(this.clientId, requestPayload).subscribe({
      next: () => {
        this.client.comment = this.editedComment;
        this.toastService.success("\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D");
        this.isEditingComment = false;
        this.isSavingComment = false;
      },
      error: (err) => {
        const errorMessage = err.error?.message || "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0438 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u044F";
        this.toastService.error(errorMessage);
        this.isSavingComment = false;
      }
    });
  }
  cancelEditComment() {
    this.isEditingComment = false;
    this.editedComment = "";
  }
  // Personal data editing
  startEditPersonal() {
    if (!this.client)
      return;
    this.editedPersonal = {
      firstName: this.client.firstName,
      lastName: this.client.lastName,
      type: this.client.type,
      dateOfBirth: this.client.dateOfBirth ?? null
    };
    this.isEditingPersonal = true;
  }
  savePersonal() {
    if (!this.client || !this.clientDetails)
      return;
    this.isSavingPersonal = true;
    const dateOfBirth = this.editedPersonal.dateOfBirth ?? this.clientDetails.dateOfBirth;
    const requestPayload = {
      phone: this.clientDetails.phone,
      name: this.editedPersonal.firstName,
      surname: this.editedPersonal.type === "business" ? null : this.editedPersonal.lastName?.trim() || void 0,
      dateOfBirth: dateOfBirth != null && String(dateOfBirth).trim() !== "" ? String(dateOfBirth).trim() : null,
      notes: this.clientDetails.notes,
      tags: this.clientDetails.tags || [],
      clientType: this.editedPersonal.type === "business" ? "BUSINESS" : "INDIVIDUAL",
      referrerId: this.clientDetails.referrerId
    };
    console.log("Update Client (Personal Data) - Request Payload:", {
      clientId: this.clientId,
      payload: requestPayload
    });
    this.clientsService.updateClient(this.clientId, requestPayload).subscribe({
      next: (updatedClient) => {
        this.clientDetails = updatedClient;
        this.client.firstName = updatedClient.name;
        this.client.lastName = updatedClient.surname || "";
        this.client.type = updatedClient.clientType === "BUSINESS" ? "business" : "individual";
        this.client.dateOfBirth = updatedClient.dateOfBirth ?? null;
        this.toastService.success("\u041B\u0438\u0447\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u044B");
        this.isEditingPersonal = false;
        this.isSavingPersonal = false;
      },
      error: (err) => {
        const errorMessage = err.error?.message || "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0438 \u043B\u0438\u0447\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445";
        this.toastService.error(errorMessage);
        this.isSavingPersonal = false;
      }
    });
  }
  cancelEditPersonal() {
    this.isEditingPersonal = false;
  }
  // Contacts editing
  startEditContacts() {
    if (!this.client)
      return;
    this.editedContacts = {
      phone: this.client.phone,
      email: this.client.email || ""
    };
    this.isEditingContacts = true;
  }
  saveContacts() {
    if (!this.client || !this.clientDetails)
      return;
    this.isSavingContacts = true;
    const requestPayload = {
      phone: this.editedContacts.phone,
      // Changed field
      name: this.clientDetails.name,
      surname: this.clientDetails.surname || "",
      dateOfBirth: this.clientDetails.dateOfBirth,
      notes: this.clientDetails.notes,
      tags: this.clientDetails.tags || [],
      clientType: this.clientDetails.clientType,
      referrerId: this.clientDetails.referrerId
    };
    console.log("Update Client (Contacts) - Request Payload:", {
      clientId: this.clientId,
      payload: requestPayload
    });
    this.clientsService.updateClient(this.clientId, requestPayload).subscribe({
      next: (updatedClient) => {
        this.clientDetails = updatedClient;
        this.client.phone = updatedClient.phone;
        this.toastService.success("\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u044B");
        this.isEditingContacts = false;
        this.isSavingContacts = false;
      },
      error: (err) => {
        const errorMessage = err.error?.message || "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0438 \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445";
        this.toastService.error(errorMessage);
        this.isSavingContacts = false;
      }
    });
  }
  cancelEditContacts() {
    this.isEditingContacts = false;
  }
  // Payment helpers
  formatPaymentId(id) {
    return id;
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
    const labels = {
      cash: "\u041D\u0430\u043B\u0438\u0447\u043D\u044B\u0435",
      card: "\u041A\u0430\u0440\u0442\u0430",
      transfer: "\u041F\u0435\u0440\u0435\u0432\u043E\u0434"
    };
    return labels[method] || method;
  }
  // Refund methods
  openRefundModal(payment) {
    if (!this.client)
      return;
    this.selectedPaymentForRefund = {
      id: payment.id,
      clientId: this.clientId,
      clientName: this.getFullName(),
      clientPhone: this.client.phone,
      amount: payment.amount,
      bonusEarned: payment.bonusEarned,
      bonusUsed: payment.bonusUsed,
      bonusRevoked: payment.bonusRevoked,
      paymentMethod: payment.paymentMethod,
      isRefund: payment.isRefund,
      date: payment.date,
      time: payment.time
    };
    this.showRefundModal = true;
  }
  closeRefundModal() {
    this.showRefundModal = false;
    this.selectedPaymentForRefund = null;
  }
  // Payment view modal methods
  openPaymentView(paymentId) {
    const payment = this.payments.find((p) => p.id === paymentId);
    if (payment) {
      this.selectedPaymentSearchResult = {
        txId: payment.id,
        clientId: this.clientId,
        clientName: this.getFullName(),
        clientPhone: this.client?.phone || "",
        clientEmail: this.client?.email || null,
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
  onPaymentUpdated() {
    this.loadClientData();
  }
  confirmRefund(notes) {
    if (!this.selectedPaymentForRefund)
      return;
    this.paymentsService.refundPayment(this.selectedPaymentForRefund.id, { notes }).subscribe({
      next: () => {
        this.toastService.success("\u0412\u043E\u0437\u0432\u0440\u0430\u0442 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D");
        this.closeRefundModal();
        this.loadClientData();
      },
      error: (err) => {
        const errorMessage = err.error?.message || "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u0438 \u0432\u043E\u0437\u0432\u0440\u0430\u0442\u0430";
        this.toastService.error(errorMessage);
      }
    });
  }
  formatTime(date) {
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  }
  // Bonus helpers
  getBonusTypeLabel(type) {
    const labels = {
      welcome: "\u041F\u0440\u0438\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439",
      referral: "\u0420\u0435\u0444\u0435\u0440\u0430\u043B\u044C\u043D\u044B\u0439",
      purchase: "\u0417\u0430 \u043F\u043E\u043A\u0443\u043F\u043A\u0443",
      promotion: "\u0410\u043A\u0446\u0438\u044F",
      loyalty: "\u041B\u043E\u044F\u043B\u044C\u043D\u043E\u0441\u0442\u044C",
      refund: "\u041E\u0442\u043E\u0437\u0432\u0430\u043D\u043E",
      used: "\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u043E",
      granted: "\u041D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u043E",
      manual_revoke: "\u0421\u043F\u0438\u0441\u0430\u043D\u043E \u0432\u0440\u0443\u0447\u043D\u0443\u044E"
    };
    return labels[type] || type;
  }
  getDaysUntilExpiry(expiresAt) {
    const now = /* @__PURE__ */ new Date();
    const expiry = new Date(expiresAt);
    const diffTime = expiry.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1e3 * 60 * 60 * 24));
    return diffDays;
  }
  getDaysText(days) {
    if (days === 1)
      return "\u0434\u0435\u043D\u044C";
    if (days >= 2 && days <= 4)
      return "\u0434\u043D\u044F";
    return "\u0434\u043D\u0435\u0439";
  }
  formatDate(date) {
    const d = typeof date === "string" ? new Date(date) : date;
    return d.toLocaleDateString("ru-RU", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric"
    });
  }
  toggleBonusesExpanded() {
    this.isBonusesExpanded = !this.isBonusesExpanded;
  }
  getActiveBonusesTotal() {
    const now = /* @__PURE__ */ new Date();
    return this.bonusesDetails.filter((bonus) => !bonus.used && new Date(bonus.expiresAt) > now).reduce((sum, bonus) => sum + bonus.amount, 0);
  }
  getUsedBonusesTotal() {
    return this.bonusesDetails.filter((bonus) => bonus.used).reduce((sum, bonus) => sum + bonus.amount, 0);
  }
  getExpiredBonusesTotal() {
    const now = /* @__PURE__ */ new Date();
    return this.bonusesDetails.filter((bonus) => !bonus.used && bonus.type !== "refund" && new Date(bonus.expiresAt) <= now).reduce((sum, bonus) => sum + bonus.amount, 0);
  }
  toggleBonusRow(bonusId) {
    if (this.expandedBonusRows.has(bonusId)) {
      this.expandedBonusRows.delete(bonusId);
    } else {
      this.expandedBonusRows.add(bonusId);
    }
  }
  isBonusRowExpanded(bonusId) {
    return this.expandedBonusRows.has(bonusId);
  }
  // Mobile card methods
  toggleMobileBonusCard(bonusId) {
    if (this.expandedMobileBonusCards.has(bonusId)) {
      this.expandedMobileBonusCards.delete(bonusId);
    } else {
      this.expandedMobileBonusCards.add(bonusId);
    }
  }
  isMobileBonusExpanded(bonusId) {
    return this.expandedMobileBonusCards.has(bonusId);
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
  // Delete client methods
  openCreatePayment() {
    if (this.client) {
      this.transactionModalService.open(this.client.phone);
    }
  }
  openAdjustBonusModal() {
    this.showAdjustBonusModal = true;
  }
  onSplitButtonItemSelect(id) {
    if (id === "create-payment")
      this.openCreatePayment();
    else if (id === "adjust-bonus")
      this.openAdjustBonusModal();
  }
  onInlineTagsChange(ev) {
    if (!this.client || !this.clientId)
      return;
    const previousTags = [...this.client.tags];
    this.client.tags = ev.tags;
    this.clientsService.updateClientTags(this.clientId, { tags: ev.tags }).subscribe({
      next: () => {
        if (ev.removedTag) {
          const removedTag = ev.removedTag;
          this.toastService.showWithAction("\u0422\u0435\u0433 \u0443\u0434\u0430\u043B\u0451\u043D", {
            label: "\u041E\u0442\u043C\u0435\u043D\u0430",
            callback: () => {
              const restored = [...this.client.tags, removedTag];
              this.client.tags = restored;
              this.clientsService.updateClientTags(this.clientId, { tags: restored }).subscribe({
                next: () => {
                },
                error: () => this.toastService.error("\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0442\u0435\u0433")
              });
            }
          }, "success", 4e3);
        }
      },
      error: (err) => {
        if (this.client)
          this.client.tags = previousTags;
        this.toastService.error(err?.error?.message || "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0438 \u0442\u0435\u0433\u043E\u0432");
      }
    });
  }
  onBonusAdjusted() {
    this.loadClientData();
  }
  openDeleteModal() {
    this.showDeleteModal = true;
    this.deleteStep = 1;
    this.deleteConfirmationWord = "";
    this.isDeletingClient = false;
  }
  closeDeleteModal() {
    this.showDeleteModal = false;
    this.deleteStep = 1;
    this.deleteConfirmationWord = "";
    this.isDeletingClient = false;
  }
  proceedToDeleteStep2() {
    this.deleteStep = 2;
  }
  confirmDelete() {
    if (this.deleteConfirmationWord !== "\u0443\u0434\u0430\u043B\u0438\u0442\u044C") {
      this.toastService.error('\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043B\u043E\u0432\u043E "\u0443\u0434\u0430\u043B\u0438\u0442\u044C" \u0434\u043B\u044F \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u044F');
      return;
    }
    this.isDeletingClient = true;
    this.clientsService.deleteClient(this.clientId).subscribe({
      next: () => {
        this.toastService.success("\u041A\u043B\u0438\u0435\u043D\u0442 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0443\u0434\u0430\u043B\u0435\u043D");
        this.closeDeleteModal();
        this.router.navigate(["/clients"]);
      },
      error: (err) => {
        const errorMessage = err.error?.message || "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u0438 \u043A\u043B\u0438\u0435\u043D\u0442\u0430";
        this.toastService.error(errorMessage);
        this.isDeletingClient = false;
      }
    });
  }
  static \u0275fac = function ProfilePageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProfilePageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProfilePageComponent, selectors: [["app-profile-page"]], decls: 9, vars: 12, consts: [["paginatedBonuses", ""], ["paginatedTable", ""], [1, "page-wrapper"], [1, "profile-container-wrapper"], ["class", "page-loading-container", 4, "ngIf"], ["title", "\u041A\u043B\u0438\u0435\u043D\u0442 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D", "description", "\u041A \u0441\u043E\u0436\u0430\u043B\u0435\u043D\u0438\u044E, \u0437\u0430\u043F\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u043C\u044B\u0439 \u043A\u043B\u0438\u0435\u043D\u0442 \u043D\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u0438\u043B\u0438 \u0431\u044B\u043B \u0443\u0434\u0430\u043B\u0435\u043D.", "backLink", "/clients", "backText", "\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043A \u043A\u043B\u0438\u0435\u043D\u0442\u0430\u043C", 4, "ngIf"], ["class", "profile-layout", 4, "ngIf"], [3, "visibleChange", "confirm", "visible", "payment"], [3, "visibleChange", "bonusAdjusted", "visible", "clientId", "bonusBalance"], [3, "visibleChange", "paymentUpdated", "visible", "paymentTxId", "paymentSearchResult"], ["class", "delete-modal-overlay", 3, "click", 4, "ngIf"], [1, "page-loading-container"], ["type", "logo", "size", "large", 3, "visible", "overlay"], ["title", "\u041A\u043B\u0438\u0435\u043D\u0442 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D", "description", "\u041A \u0441\u043E\u0436\u0430\u043B\u0435\u043D\u0438\u044E, \u0437\u0430\u043F\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u043C\u044B\u0439 \u043A\u043B\u0438\u0435\u043D\u0442 \u043D\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u0438\u043B\u0438 \u0431\u044B\u043B \u0443\u0434\u0430\u043B\u0435\u043D.", "backLink", "/clients", "backText", "\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043A \u043A\u043B\u0438\u0435\u043D\u0442\u0430\u043C"], [1, "profile-layout"], [1, "profile-sidebar"], [1, "back-link", 3, "routerLink"], ["viewBox", "0 0 24 24", "fill", "none"], ["d", "M19 12H5M12 19l-7-7 7-7", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "client-type-badge-sidebar"], ["viewBox", "0 0 24 24", "fill", "none", 4, "ngIf"], [1, "client-name-sidebar"], [1, "client-phone-sidebar"], [1, "tags-section-sidebar"], ["label", "\u0422\u0435\u0433\u0438", 3, "tagsChange", "tags", "availableTags"], [1, "split-button-wrap"], ["mainLabel", "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043F\u043B\u0430\u0442\u0435\u0436", 3, "mainClick", "itemSelect", "items"], ["mainIcon", "", "viewBox", "0 0 24 24", "fill", "none"], ["d", "M12 5v14M5 12h14", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "profile-nav", "profile-nav-scroll"], ["routerLinkActive", "active", 1, "nav-item", 3, "routerLink"], ["d", "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z", "stroke", "currentColor", "stroke-width", "1.5"], ["d", "M9 22V12h6v10", "stroke", "currentColor", "stroke-width", "1.5"], ["d", "M21 4H3a2 2 0 00-2 2v12a2 2 0 002 2h18a2 2 0 002-2V6a2 2 0 00-2-2z", "stroke", "currentColor", "stroke-width", "1.5"], ["d", "M1 10h22", "stroke", "currentColor", "stroke-width", "1.5"], [1, "nav-badge", "nav-badge-soon"], ["d", "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z", "stroke", "currentColor", "stroke-width", "1.5"], ["d", "M22 12h-4l-3 9L9 3l-3 9H2", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z", "stroke", "currentColor", "stroke-width", "1.5"], ["d", "M14 2v6h6M16 13H8M16 17H8M10 9H8", "stroke", "currentColor", "stroke-width", "1.5"], [1, "nav-item", "delete-nav-item", 3, "click"], ["d", "M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m3 0v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6h14zM10 11v6M14 11v6", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "profile-content"], ["class", "view-content", 4, "ngIf"], ["d", "M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z", "stroke", "currentColor", "stroke-width", "1.5"], ["d", "M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2", "stroke", "currentColor", "stroke-width", "1.5"], ["d", "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2", "stroke", "currentColor", "stroke-width", "1.5"], ["cx", "12", "cy", "7", "r", "4", "stroke", "currentColor", "stroke-width", "1.5"], [1, "view-content"], [1, "content-card"], [1, "card-header"], [1, "card-title"], [1, "stats-grid"], [1, "stat-card"], [1, "stat-icon", "transactions"], ["d", "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["x", "9", "y", "3", "width", "6", "height", "4", "rx", "1", "stroke", "currentColor", "stroke-width", "1.5"], ["d", "M9 12h6M9 16h6", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round"], [1, "stat-info"], [1, "stat-value"], [1, "stat-label"], [1, "stat-icon", "total-sum"], ["d", "M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "stat-icon", "bonuses-earned"], ["d", "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "stat-icon", "bonuses-used"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "1.5"], ["d", "M8 12l3 3 5-6", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "details-grid", "details-grid-general"], ["class", "card-edit-btn", 3, "click", 4, "ngIf"], ["class", "card-actions", 4, "ngIf"], [1, "info-list"], [1, "info-row"], [1, "info-label"], ["class", "info-value", 4, "ngIf"], ["class", "info-input", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["class", "info-row", 4, "ngIf"], ["class", "info-input", "type", "date", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["class", "info-select", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["class", "info-input", "type", "tel", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["class", "info-value email", 4, "ngIf"], ["class", "info-input", "type", "email", "placeholder", "Email \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D \u0434\u043B\u044F \u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F", 3, "ngModel", "disabled", "ngModelChange", 4, "ngIf"], [1, "comment-body"], ["class", "comment-text", 4, "ngIf"], ["class", "comment-textarea", "placeholder", "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 \u043E \u043A\u043B\u0438\u0435\u043D\u0442\u0435...", "rows", "3", 3, "ngModel", "ngModelChange", 4, "ngIf"], [1, "card-edit-btn", 3, "click"], ["d", "M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "card-actions"], [1, "save-btn", 3, "click", "disabled"], [1, "cancel-btn", 3, "click", "disabled"], [1, "info-value"], [1, "info-input", 3, "ngModelChange", "ngModel"], ["type", "date", 1, "info-input", 3, "ngModelChange", "ngModel"], [1, "info-select", 3, "ngModelChange", "ngModel"], ["value", "individual"], ["value", "business"], ["type", "tel", 1, "info-input", 3, "ngModelChange", "ngModel"], [1, "info-value", "email"], ["type", "email", "placeholder", "Email \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D \u0434\u043B\u044F \u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F", 1, "info-input", 3, "ngModelChange", "ngModel", "disabled"], [1, "comment-text"], ["placeholder", "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 \u043E \u043A\u043B\u0438\u0435\u043D\u0442\u0435...", "rows", "3", 1, "comment-textarea", 3, "ngModelChange", "ngModel"], [1, "coming-soon-card"], [1, "content-card", "bonuses-details-card"], [1, "card-header", "bonuses-card-header"], [1, "card-header-left"], [1, "card-icon"], [1, "card-title-section"], [1, "bonuses-stats"], [1, "stat-item"], [1, "stat-value", "active"], [1, "stat-value", "used"], [1, "stat-value", "expired"], [1, "bonuses-content"], ["paginationKey", "bonuses", 3, "paginationEnabled", "data", "defaultPageSize"], ["class", "table-container", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], [1, "table-container"], [1, "bonuses-table"], [4, "ngFor", "ngForOf"], [1, "bonus-type-badge"], [1, "bonus-info"], ["badgeType", "bonusUsed", "size", "medium", "icon", "check", "class", "bonus-badge", 4, "ngIf"], ["badgeType", "refund", "size", "medium", "icon", "refund", "class", "bonus-badge", 4, "ngIf"], ["badgeType", "bonusExpired", "size", "medium", "icon", "expired", "class", "bonus-badge", 4, "ngIf"], ["badgeType", "bonusGranted", "size", "medium", "icon", "star", "class", "bonus-badge", 4, "ngIf"], [1, "bonus-remaining-badges"], ["class", "bonus-empty-cell", 4, "ngIf"], ["badgeType", "bonusUsed", "size", "medium", "icon", "used", 4, "ngIf"], ["badgeType", "refund", "size", "medium", "icon", "refund", 4, "ngIf"], ["size", "medium", 3, "badgeType", 4, "ngIf"], ["badgeType", "bonusExpired", "size", "medium", "icon", "expired", 4, "ngIf"], [1, "bonus-date"], ["class", "bonus-expiry-cell", 4, "ngIf"], [1, "actions-cell"], ["iconButtonType", "ghost", "size", "medium", 1, "view-svg-btn", 3, "onClick", "tooltip"], ["d", "M6 9l6 6 6-6", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["class", "bonus-details-row", 4, "ngIf"], ["badgeType", "bonusUsed", "size", "medium", "icon", "check", 1, "bonus-badge"], ["badgeType", "refund", "size", "medium", "icon", "refund", 1, "bonus-badge"], ["badgeType", "bonusExpired", "size", "medium", "icon", "expired", 1, "bonus-badge"], ["badgeType", "bonusGranted", "size", "medium", "icon", "star", 1, "bonus-badge"], [1, "bonus-empty-cell"], ["badgeType", "bonusUsed", "size", "medium", "icon", "used"], ["badgeType", "refund", "size", "medium", "icon", "refund"], ["size", "medium", 3, "badgeType"], ["badgeType", "bonusExpired", "size", "medium", "icon", "expired"], [1, "bonus-expiry-cell"], [1, "bonus-expiry-date"], ["size", "medium", "class", "expires-in-badge", 3, "badgeType", 4, "ngIf"], ["size", "medium", 1, "expires-in-badge", 3, "badgeType"], [1, "bonus-details-row"], ["colspan", "6", 1, "bonus-details-cell"], [1, "bonus-details-content"], [1, "bonus-details-grid"], [1, "refund-reason-section"], [1, "refund-reason-label"], ["class", "refund-reason-text", 4, "ngIf"], ["class", "refund-reason-empty", 4, "ngIf"], [1, "bonus-initiated-by-section"], ["class", "bonus-initiated-by-link", 3, "routerLink", 4, "ngIf"], ["class", "bonus-initiated-by-text", 4, "ngIf"], ["class", "bonus-initiated-by-empty", 4, "ngIf"], [1, "refund-reason-text"], [1, "refund-reason-empty"], [1, "bonus-initiated-by-link", 3, "routerLink"], [1, "bonus-initiated-by-text"], [1, "bonus-initiated-by-empty"], [1, "empty-state"], [1, "content-card", "payments-card"], [1, "payments-count"], ["paginationKey", "payments", 3, "paginationEnabled", "data", "defaultPageSize"], [1, "payments-table"], [1, "th-id"], [1, "th-amount"], [1, "th-bonuses"], [1, "th-method"], [1, "th-status"], [1, "th-date"], [1, "th-actions"], ["class", "payment-row", 4, "ngFor", "ngForOf"], [1, "payment-row"], [1, "td-id"], [1, "payment-id", "clickable", 3, "click"], [1, "td-amount"], [1, "amount-value"], [1, "td-bonuses"], ["class", "bonus-none", 4, "ngIf"], [1, "td-method"], ["badgeType", "paymentMethod", "size", "medium", 3, "paymentMethod"], [1, "td-status"], ["size", "medium", 3, "badgeType", "icon"], [1, "td-date"], [1, "date-info"], [1, "date-text"], [1, "time-text"], [1, "td-actions"], ["iconButtonType", "refund", "size", "small", "tooltip", "\u0412\u043E\u0437\u0432\u0440\u0430\u0442", 3, "onClick", "disabled"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none"], ["d", "M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "bonus-none"], ["d", "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2", "stroke", "currentColor", "stroke-width", "1.5"], [1, "delete-modal-overlay", 3, "click"], [1, "delete-modal", 3, "click"], ["class", "delete-modal-content", 4, "ngIf"], [1, "delete-modal-content"], [1, "delete-modal-icon", "warning"], ["d", "M12 9v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "delete-modal-title"], [1, "delete-modal-description"], [1, "delete-modal-actions"], [1, "delete-modal-btn", "cancel", 3, "click"], [1, "delete-modal-btn", "confirm", 3, "click"], [1, "delete-modal-icon", "danger"], ["d", "M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m3 0v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6h14zM10 11v6M14 11v6", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "confirm-word"], ["type", "text", "placeholder", "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043B\u043E\u0432\u043E \u0434\u043B\u044F \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u044F", 1, "delete-confirm-input", 3, "ngModelChange", "keydown.enter", "ngModel"], [1, "delete-modal-btn", "delete", 3, "click", "disabled"], [4, "ngIf"]], template: function ProfilePageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3);
      \u0275\u0275template(2, ProfilePageComponent_div_2_Template, 2, 2, "div", 4)(3, ProfilePageComponent_app_not_found_state_3_Template, 1, 0, "app-not-found-state", 5)(4, ProfilePageComponent_div_4_Template, 66, 39, "div", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "app-refund-confirmation-modal", 7);
      \u0275\u0275listener("visibleChange", function ProfilePageComponent_Template_app_refund_confirmation_modal_visibleChange_5_listener() {
        return ctx.closeRefundModal();
      })("confirm", function ProfilePageComponent_Template_app_refund_confirmation_modal_confirm_5_listener($event) {
        return ctx.confirmRefund($event.refundReason || "");
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "app-adjust-bonus-modal", 8);
      \u0275\u0275listener("visibleChange", function ProfilePageComponent_Template_app_adjust_bonus_modal_visibleChange_6_listener($event) {
        return ctx.showAdjustBonusModal = $event;
      })("bonusAdjusted", function ProfilePageComponent_Template_app_adjust_bonus_modal_bonusAdjusted_6_listener() {
        return ctx.onBonusAdjusted();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "app-payment-view-modal", 9);
      \u0275\u0275listener("visibleChange", function ProfilePageComponent_Template_app_payment_view_modal_visibleChange_7_listener($event) {
        return ctx.showPaymentViewModal = $event;
      })("paymentUpdated", function ProfilePageComponent_Template_app_payment_view_modal_paymentUpdated_7_listener() {
        return ctx.onPaymentUpdated();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(8, ProfilePageComponent_div_8_Template, 4, 2, "div", 10);
    }
    if (rf & 2) {
      let tmp_6_0;
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.clientNotFound);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.client && !ctx.isLoading && !ctx.clientNotFound);
      \u0275\u0275advance();
      \u0275\u0275property("visible", ctx.showRefundModal)("payment", ctx.selectedPaymentForRefund);
      \u0275\u0275advance();
      \u0275\u0275property("visible", ctx.showAdjustBonusModal)("clientId", (tmp_6_0 = ctx.client == null ? null : ctx.client.id) !== null && tmp_6_0 !== void 0 ? tmp_6_0 : null)("bonusBalance", ctx.bonusBalance);
      \u0275\u0275advance();
      \u0275\u0275property("visible", ctx.showPaymentViewModal)("paymentTxId", ctx.selectedPaymentTxId)("paymentSearchResult", ctx.selectedPaymentSearchResult);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showDeleteModal);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, BadgeComponent, IconButtonComponent, RefundConfirmationModalComponent, RouterModule, RouterLink, RouterLinkActive, PaginatedTableWrapperComponent, LoaderComponent, NotFoundStateComponent, PaymentViewModalComponent, AdjustBonusModalComponent, InlineTagsComponent, SplitButtonComponent, PhoneFormatPipe], styles: [`

.page-wrapper[_ngcontent-%COMP%] {
  min-height: 100%;
  margin: -2rem;
  padding: 2rem;
  background:
    linear-gradient(
      180deg,
      #f0fdf4 0%,
      #f8fafc 50%,
      #f8fafc 100%);
}
.profile-container-wrapper[_ngcontent-%COMP%] {
  position: relative;
  min-height: 400px;
}
.profile-layout[_ngcontent-%COMP%] {
  display: flex;
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
}
.profile-sidebar[_ngcontent-%COMP%] {
  width: 280px;
  flex-shrink: 0;
  background: white;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
  max-height: calc(100vh - 4rem);
  position: sticky;
  top: 2rem;
  display: flex;
  flex-direction: column;
  z-index: 20;
  isolation: isolate;
}
.profile-nav-scroll[_ngcontent-%COMP%] {
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.back-link[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #64748b;
  text-decoration: none;
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
  padding: 0.5rem;
  border-radius: 8px;
  transition: all 0.2s;
}
.back-link[_ngcontent-%COMP%]:hover {
  background: #f1f5f9;
  color: #1f2937;
}
.back-link[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  width: 18px;
  height: 18px;
}
.client-type-badge-sidebar[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.4rem 0.75rem;
  background: #f0fdf4;
  color: #16A34A;
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 1rem;
}
.client-type-badge-sidebar.business[_ngcontent-%COMP%] {
  background: #dbeafe;
  color: #1d4ed8;
}
.client-type-badge-sidebar[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  width: 16px;
  height: 16px;
}
.client-name-sidebar[_ngcontent-%COMP%] {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1f2937;
  margin: 0 0 0.25rem 0;
  line-height: 1.3;
}
.client-phone-sidebar[_ngcontent-%COMP%] {
  font-size: 0.9rem;
  color: #64748b;
  margin: 0 0 1rem 0;
  line-height: 1.3;
}
.tags-section-sidebar[_ngcontent-%COMP%] {
  margin-bottom: 1.5rem;
}
.tags-section-sidebar[_ngcontent-%COMP%]   .inline-tags[_ngcontent-%COMP%] {
  --tag-transition: 0.12s ease;
}
.client-tag-sidebar[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.3rem 0.65rem;
  background: #dcfce7;
  color: #16A34A;
  border-radius: 16px;
  font-size: 0.75rem;
  font-weight: 500;
}
.no-tags[_ngcontent-%COMP%] {
  color: #94a3b8;
  font-size: 0.85rem;
  font-style: italic;
}
.split-button-wrap[_ngcontent-%COMP%] {
  margin-bottom: 1.5rem;
}
.profile-nav[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.profile-nav[_ngcontent-%COMP%]   a.nav-item[_ngcontent-%COMP%] {
  text-decoration: none;
  box-sizing: border-box;
}
.nav-item[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  background: transparent;
  border: none;
  border-radius: 10px;
  color: #64748b;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  text-align: left;
}
.nav-item[_ngcontent-%COMP%]:hover {
  background: #f1f5f9;
  color: #1f2937;
}
.nav-item.active[_ngcontent-%COMP%] {
  background: #f0fdf4;
  color: #16A34A;
  font-weight: 600;
}
.nav-item.delete-nav-item[_ngcontent-%COMP%] {
  color: #dc2626;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #e5e7eb;
}
.nav-item.delete-nav-item[_ngcontent-%COMP%]:hover {
  background: #fef2f2;
  color: #b91c1c;
}
.nav-item[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
}
.nav-badge[_ngcontent-%COMP%] {
  margin-left: auto;
  font-size: 0.7rem;
  font-weight: 600;
  padding: 0.2rem 0.5rem;
  border-radius: 6px;
}
.nav-badge-soon[_ngcontent-%COMP%] {
  background: #fef08a;
  color: #854d0e;
}
.profile-content[_ngcontent-%COMP%] {
  flex: 1;
  min-width: 0;
}
.view-content[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.details-grid-general[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}
.content-card[_ngcontent-%COMP%] {
  position: relative;
  background: white;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
}
.coming-soon-card[_ngcontent-%COMP%] {
  background: white;
  border-radius: 16px;
  padding: 4rem 2rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}
.coming-soon-card[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  width: 64px;
  height: 64px;
  color: #94a3b8;
}
.coming-soon-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0;
}
.coming-soon-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  font-size: 1rem;
  color: #64748b;
  margin: 0;
}
@media (max-width: 1024px) {
  .profile-layout[_ngcontent-%COMP%] {
    flex-direction: column;
    gap: 1.5rem;
  }
  .profile-sidebar[_ngcontent-%COMP%] {
    width: 100%;
    position: static;
  }
}
@media (max-width: 768px) {
  .profile-sidebar[_ngcontent-%COMP%] {
    padding: 1rem;
    max-height: none;
  }
  .profile-nav-scroll[_ngcontent-%COMP%] {
    overflow: visible;
    max-height: none;
  }
  .profile-nav[_ngcontent-%COMP%] {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  .nav-item[_ngcontent-%COMP%] {
    padding: 0.5rem 0.75rem;
    font-size: 0.85rem;
  }
  .nav-item.delete-nav-item[_ngcontent-%COMP%] {
    width: 100%;
    margin-top: 0.5rem;
    padding-top: 0.75rem;
  }
}
.tags-container-content[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: center;
}
.profile-container[_ngcontent-%COMP%] {
  max-width: 1200px;
  margin: 0 auto;
}
.page-loading-container[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  width: 100%;
}
.profile-header-card[_ngcontent-%COMP%] {
  background: white;
  border-radius: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
  margin-bottom: 1rem;
  position: relative;
}
.profile-header-content[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem 2rem;
}
.avatar-wrapper[_ngcontent-%COMP%] {
  position: relative;
  flex-shrink: 0;
}
.avatar-large[_ngcontent-%COMP%] {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background:
    linear-gradient(
      135deg,
      #16A34A,
      #22c55e);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 1px;
}
.status-indicator[_ngcontent-%COMP%] {
  position: absolute;
  bottom: 2px;
  right: 2px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #94a3b8;
  border: 2px solid white;
}
.status-indicator.active[_ngcontent-%COMP%] {
  background: #22c55e;
}
.profile-main-info[_ngcontent-%COMP%] {
  flex: 1;
  min-width: 0;
  position: relative;
}
.delete-client-btn[_ngcontent-%COMP%] {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #fef2f2;
  border: 1px solid #fecaca;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #dc2626;
  transition: all 0.2s ease;
  z-index: 10;
}
.delete-client-btn[_ngcontent-%COMP%]:hover {
  background: #fee2e2;
  border-color: #fca5a5;
  color: #b91c1c;
}
.delete-client-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  width: 18px;
  height: 18px;
}
.name-row[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.25rem;
}
.profile-name[_ngcontent-%COMP%] {
  font-size: 1.35rem;
  font-weight: 600;
  color: #111827;
  margin: 0;
}
.client-type-badge[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.25rem 0.6rem;
  background: #f0fdf4;
  color: #16A34A;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 500;
}
.client-type-badge.business[_ngcontent-%COMP%] {
  background: #dbeafe;
  color: #1d4ed8;
}
.client-type-badge[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  width: 14px;
  height: 14px;
}
.profile-phone[_ngcontent-%COMP%] {
  font-size: 0.9rem;
  color: #6b7280;
  margin: 0 0 0.75rem;
}
.tags-row[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.tags-container[_ngcontent-%COMP%] {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  align-items: center;
}
.client-tag[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.25rem 0.75rem;
  background: #dcfce7;
  color: #16A34A;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
}
.remove-tag-btn[_ngcontent-%COMP%] {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  color: #16A34A;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  transition: all 0.15s;
}
.remove-tag-btn[_ngcontent-%COMP%]:hover {
  background: rgba(21, 128, 61, 0.2);
}
.remove-tag-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  width: 10px;
  height: 10px;
}
.add-tag-wrapper[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
.add-tag-input[_ngcontent-%COMP%] {
  padding: 0.35rem 0.75rem;
  border: 1.5px solid #e2e8f0;
  border-radius: 20px;
  font-size: 0.8rem;
  width: 110px;
  outline: none;
  background:
    linear-gradient(
      to bottom,
      #ffffff,
      #f8fafc);
  color: #374151;
  font-weight: 500;
  transition: all 0.2s ease;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
}
.add-tag-input[_ngcontent-%COMP%]:hover {
  border-color: #cbd5e1;
}
.add-tag-input[_ngcontent-%COMP%]:focus {
  border-color: #22c55e;
  background: white;
  box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.1);
}
.add-tag-input[_ngcontent-%COMP%]::placeholder {
  color: #94a3b8;
  font-weight: 400;
}
.add-tag-confirm-btn[_ngcontent-%COMP%] {
  background: #16A34A;
  border: none;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
}
.add-tag-confirm-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  width: 12px;
  height: 12px;
}
.edit-tags-btn[_ngcontent-%COMP%] {
  background: #f0fdf4;
  border: 1px dashed #16A34A;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #16A34A;
  transition: all 0.15s;
}
.edit-tags-btn[_ngcontent-%COMP%]:hover {
  background: #dcfce7;
}
.edit-tags-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  width: 14px;
  height: 14px;
}
.tags-actions[_ngcontent-%COMP%] {
  display: flex;
  gap: 0.35rem;
}
.save-tags-btn[_ngcontent-%COMP%], 
.cancel-tags-btn[_ngcontent-%COMP%] {
  background: none;
  border: none;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.15s;
}
.save-tags-btn[_ngcontent-%COMP%] {
  background: #16A34A;
  color: white;
}
.save-tags-btn[_ngcontent-%COMP%]:hover {
  background: #14532d;
}
.cancel-tags-btn[_ngcontent-%COMP%] {
  background: #f3f4f6;
  color: #6b7280;
}
.cancel-tags-btn[_ngcontent-%COMP%]:hover {
  background: #e5e7eb;
}
.save-tags-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], 
.cancel-tags-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  width: 14px;
  height: 14px;
}
.tags-dropdown[_ngcontent-%COMP%] {
  position: absolute;
  top: 100%;
  left: 0;
  width: 500px;
  margin-top: 6px;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  z-index: 100;
  animation: _ngcontent-%COMP%_dropdownFadeIn 0.15s ease;
}
@keyframes _ngcontent-%COMP%_dropdownFadeIn {
  from {
    opacity: 0;
    transform: translateY(-4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.tags-dropdown-header[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 10px;
  background: #f8fafc;
  border-bottom: 1px solid #e2e8f0;
  font-size: 0.7rem;
  font-weight: 700;
  color: #64748b;
}
.tags-dropdown-close[_ngcontent-%COMP%] {
  background: none;
  border: none;
  font-size: 1rem;
  color: #94a3b8;
  cursor: pointer;
  padding: 0;
  line-height: 1;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  transition: all 0.15s;
}
.tags-dropdown-close[_ngcontent-%COMP%]:hover {
  color: #ef4444;
  background: #fef2f2;
}
.tags-dropdown-list[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding: 8px;
  max-height: 80px;
  overflow-y: auto;
}
.tag-option[_ngcontent-%COMP%] {
  padding: 0.25rem 0.6rem;
  background: #dcfce7;
  border: 1px solid #bbf7d0;
  color: #16A34A;
  border-radius: 16px;
  font-size: 0.75rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s ease;
}
.tag-option[_ngcontent-%COMP%]:hover {
  background: #bbf7d0;
  border-color: #22c55e;
}
.tags-row[_ngcontent-%COMP%] {
  position: relative;
}
.comment-card[_ngcontent-%COMP%] {
  background: white;
  border-radius: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
  margin-bottom: 1.5rem;
  padding: 1.25rem 1.5rem;
}
.comment-header[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.75rem;
}
.comment-title[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: #374151;
}
.comment-title[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  width: 18px;
  height: 18px;
  color: #16A34A;
}
.edit-comment-btn[_ngcontent-%COMP%] {
  background: none;
  border: none;
  padding: 0.4rem;
  cursor: pointer;
  color: #6b7280;
  border-radius: 6px;
  transition: all 0.15s;
}
.edit-comment-btn[_ngcontent-%COMP%]:hover {
  background: #f3f4f6;
  color: #16A34A;
}
.edit-comment-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  width: 16px;
  height: 16px;
}
.comment-actions[_ngcontent-%COMP%], 
.card-actions[_ngcontent-%COMP%] {
  display: flex;
  gap: 0.5rem;
}
.save-btn[_ngcontent-%COMP%], 
.cancel-btn[_ngcontent-%COMP%] {
  padding: 0.4rem 0.75rem;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  border: none;
}
.save-btn[_ngcontent-%COMP%] {
  background: #16A34A;
  color: white;
}
.save-btn[_ngcontent-%COMP%]:hover {
  background: #14532d;
}
.cancel-btn[_ngcontent-%COMP%] {
  background: #f3f4f6;
  color: #6b7280;
}
.cancel-btn[_ngcontent-%COMP%]:hover {
  background: #e5e7eb;
}
.comment-text[_ngcontent-%COMP%] {
  font-size: 0.9rem;
  color: #4b5563;
  margin: 0;
  line-height: 1.5;
}
.comment-textarea[_ngcontent-%COMP%] {
  width: 100%;
  padding: 0.875rem 1rem;
  border: 1.5px solid #e2e8f0;
  border-radius: 12px;
  font-size: 0.9rem;
  font-family: inherit;
  resize: vertical;
  min-height: 80px;
  background:
    linear-gradient(
      to bottom,
      #ffffff,
      #f8fafc);
  color: #374151;
  line-height: 1.6;
  transition: all 0.2s ease;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
}
.comment-textarea[_ngcontent-%COMP%]:hover {
  border-color: #cbd5e1;
  background:
    linear-gradient(
      to bottom,
      #ffffff,
      #f1f5f9);
}
.comment-textarea[_ngcontent-%COMP%]:focus {
  outline: none;
  border-color: #22c55e;
  background: white;
  box-shadow: 0 0 0 4px rgba(34, 197, 94, 0.12), 0 2px 4px rgba(0, 0, 0, 0.05);
}
.comment-textarea[_ngcontent-%COMP%]::placeholder {
  color: #94a3b8;
}
.stats-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin-bottom: 1.5rem;
}
.stat-card[_ngcontent-%COMP%] {
  background: white;
  border-radius: 16px;
  padding: 1.25rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
}
.stat-icon[_ngcontent-%COMP%] {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.stat-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  width: 22px;
  height: 22px;
}
.stat-icon.transactions[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      135deg,
      #dcfce7,
      #bbf7d0);
  color: #16A34A;
}
.stat-icon.total-sum[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      135deg,
      #dbeafe,
      #bfdbfe);
  color: #1d4ed8;
}
.stat-icon.bonuses-earned[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      135deg,
      #fef3c7,
      #fde68a);
  color: #d97706;
}
.stat-icon.bonuses-used[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      135deg,
      #fce7f3,
      #fbcfe8);
  color: #db2777;
}
.stat-info[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
}
.stat-value[_ngcontent-%COMP%] {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1f2937;
}
.stat-label[_ngcontent-%COMP%] {
  font-size: 0.8rem;
  color: #64748b;
}
.bonuses-details-card[_ngcontent-%COMP%] {
  background: white;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
}
.bonuses-details-card[_ngcontent-%COMP%]   .bonuses-card-header[_ngcontent-%COMP%] {
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #f1f5f9;
}
.bonuses-details-card[_ngcontent-%COMP%]   .bonuses-card-header[_ngcontent-%COMP%]   .card-header-left[_ngcontent-%COMP%] {
  flex: 1;
}
.bonuses-content[_ngcontent-%COMP%] {
  padding: 0;
}
.card-title-section[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
}
.bonuses-stats[_ngcontent-%COMP%] {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
}
.stat-item[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.stat-label[_ngcontent-%COMP%] {
  font-size: 0.8125rem;
  color: #64748b;
  font-weight: 500;
}
.stat-value[_ngcontent-%COMP%] {
  font-size: 0.875rem;
  font-weight: 700;
}
.collapse-btn[_ngcontent-%COMP%] {
  background: none;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  color: #64748b;
  border-radius: 8px;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}
.collapse-btn[_ngcontent-%COMP%]:hover {
  background: #f1f5f9;
  color: #1f2937;
}
.collapse-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  width: 20px;
  height: 20px;
  transition: transform 0.2s ease;
}
.collapse-btn.collapsed[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  transform: rotate(-90deg);
}
.bonuses-content[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%] {
  overflow-x: auto;
}
.bonuses-table[_ngcontent-%COMP%] {
  width: 100%;
  border-collapse: collapse;
}
.bonuses-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {
  background: #f8fafc;
}
.bonuses-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {
  padding: 0.875rem 1rem;
  text-align: left;
  font-size: 0.75rem;
  font-weight: 600;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border-bottom: 1px solid #e5e7eb;
}
.bonuses-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {
  padding: 0.875rem 1rem;
  border-bottom: 1px solid #f1f5f9;
}
.bonuses-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child, 
.bonuses-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {
  width: 80px;
  text-align: center;
}
.bonuses-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {
  transition: background 0.15s;
}
.bonuses-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {
  background: #f8fafc;
}
.bonuses-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.expired[_ngcontent-%COMP%] {
  background: transparent;
}
.bonuses-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.expired[_ngcontent-%COMP%]:hover {
  background: transparent;
}
.bonuses-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.expiring-soon[_ngcontent-%COMP%] {
  background: transparent;
}
.bonuses-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.expiring-soon[_ngcontent-%COMP%]:hover {
  background: transparent;
}
.bonuses-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.used[_ngcontent-%COMP%] {
  background: transparent;
  opacity: 1;
}
.bonuses-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.refund[_ngcontent-%COMP%] {
  background: transparent;
}
.bonuses-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.refund[_ngcontent-%COMP%]:hover {
  background: transparent;
}
.bonuses-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.manual-revoke[_ngcontent-%COMP%] {
  background: transparent;
}
.bonuses-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.manual-revoke[_ngcontent-%COMP%]:hover {
  background: transparent;
}
.manual-revoke-audit[_ngcontent-%COMP%], 
.remaining-amount[_ngcontent-%COMP%] {
  font-size: 0.875rem;
  color: #475569;
}
.bonus-expiry-cell[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  align-items: flex-start;
}
.bonus-expiry-cell[_ngcontent-%COMP%]   .expires-in-badge[_ngcontent-%COMP%] {
  flex-shrink: 0;
}
.bonus-empty-cell[_ngcontent-%COMP%] {
  color: #94a3b8;
}
.bonus-remaining-badges[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
}
.bonuses-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {
  border-bottom: none;
}
.bonuses-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.bonus-details-row[_ngcontent-%COMP%] {
  background: transparent;
}
.bonuses-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.bonus-details-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {
  border-top: none;
  padding: 0;
}
.bonus-details-cell[_ngcontent-%COMP%] {
  padding: 0 !important;
  background: transparent;
}
.bonus-details-content[_ngcontent-%COMP%] {
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
.bonus-details-grid[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
}
.refund-reason-section[_ngcontent-%COMP%] {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: left;
}
.bonus-initiated-by-section[_ngcontent-%COMP%] {
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: right;
  min-width: 200px;
}
.refund-reason-label[_ngcontent-%COMP%] {
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
.bonus-initiated-by-link[_ngcontent-%COMP%] {
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
.bonus-initiated-by-link[_ngcontent-%COMP%]:hover {
  color: #16A34A;
}
.bonus-initiated-by-text[_ngcontent-%COMP%] {
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
.bonus-initiated-by-empty[_ngcontent-%COMP%] {
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
.bonus-type-badge[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 600;
  color: #1f2937;
}
.bonus-type-badge.bonus-type-welcome[_ngcontent-%COMP%] {
  // color: #1e40af;
  color: #1f2937;
}
.bonus-type-badge.bonus-type-referral[_ngcontent-%COMP%] {
  // color: #92400e;
  color: #1f2937;
}
.bonus-type-badge.bonus-type-purchase[_ngcontent-%COMP%] {
  // color: #15803d;
  color: #1f2937;
}
.bonus-type-badge.bonus-type-promotion[_ngcontent-%COMP%] {
  // color: #be185d;
  color: #1f2937;
}
.bonus-type-badge.bonus-type-loyalty[_ngcontent-%COMP%] {
  // color: #3730a3;
  color: #1f2937;
}
.bonus-type-badge.bonus-type-refund[_ngcontent-%COMP%] {
  // color: #dc2626;
  color: #1f2937;
}
.bonus-amount[_ngcontent-%COMP%] {
  font-size: 0.9375rem;
  font-weight: 600;
  color: #fbbf24;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.bonus-amount.expired-amount[_ngcontent-%COMP%] {
  color: #94a3b8;
  text-decoration: line-through;
}
.bonus-date[_ngcontent-%COMP%], 
.bonus-expiry-date[_ngcontent-%COMP%] {
  font-size: 0.875rem;
  color: #1f2937;
  font-weight: 500;
}
.details-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 1rem;
}
.details-card[_ngcontent-%COMP%] {
  background: white;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
}
.card-header[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.25rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #f1f5f9;
}
.card-header-left[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.card-icon[_ngcontent-%COMP%] {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background:
    linear-gradient(
      135deg,
      #dcfce7,
      #bbf7d0);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #16A34A;
}
.card-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  width: 20px;
  height: 20px;
}
.card-title[_ngcontent-%COMP%] {
  font-size: 1rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0;
}
.card-edit-btn[_ngcontent-%COMP%] {
  background: none;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  color: #6b7280;
  border-radius: 8px;
  transition: all 0.15s;
}
.card-edit-btn[_ngcontent-%COMP%]:hover {
  background: #f3f4f6;
  color: #16A34A;
}
.card-edit-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  width: 18px;
  height: 18px;
}
.info-list[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
}
.info-row[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.info-label[_ngcontent-%COMP%] {
  font-size: 0.9rem;
  color: #64748b;
}
.info-value[_ngcontent-%COMP%] {
  font-size: 0.95rem;
  font-weight: 500;
  color: #1f2937;
}
.info-value.email[_ngcontent-%COMP%] {
  color: #16A34A;
}
.info-input[_ngcontent-%COMP%] {
  padding: 0.625rem 1rem;
  border: 1.5px solid #e2e8f0;
  border-radius: 10px;
  font-size: 0.9rem;
  font-family: inherit;
  text-align: right;
  width: 200px;
  background:
    linear-gradient(
      to bottom,
      #ffffff,
      #f8fafc);
  color: #1f2937;
  font-weight: 500;
  transition: all 0.2s ease;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
}
.info-input[_ngcontent-%COMP%]:hover {
  border-color: #cbd5e1;
  background:
    linear-gradient(
      to bottom,
      #ffffff,
      #f1f5f9);
}
.info-input[_ngcontent-%COMP%]:focus {
  outline: none;
  border-color: #22c55e;
  background: white;
  box-shadow: 0 0 0 4px rgba(34, 197, 94, 0.12), 0 2px 4px rgba(0, 0, 0, 0.05);
}
.info-input[_ngcontent-%COMP%]::placeholder {
  color: #94a3b8;
  font-weight: 400;
}
.info-input[_ngcontent-%COMP%]:disabled {
  background: #f1f5f9;
  color: #94a3b8;
  cursor: not-allowed;
  opacity: 0.6;
}
.info-input[_ngcontent-%COMP%]:disabled:hover {
  border-color: #e2e8f0;
  background: #f1f5f9;
}
.info-select[_ngcontent-%COMP%] {
  padding: 0.625rem 2.5rem 0.625rem 1rem;
  border: 1.5px solid #e2e8f0;
  border-radius: 10px;
  font-size: 0.9rem;
  font-family: inherit;
  width: 200px;
  background:
    linear-gradient(
      to bottom,
      #ffffff,
      #f8fafc);
  color: #1f2937;
  font-weight: 500;
  transition: all 0.2s ease;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2315803d' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 16px;
}
.info-select[_ngcontent-%COMP%]:hover {
  border-color: #22c55e;
  background-color: #f0fdf4;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2315803d' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
}
.info-select[_ngcontent-%COMP%]:focus {
  outline: none;
  border-color: #22c55e;
  background-color: white;
  box-shadow: 0 0 0 4px rgba(34, 197, 94, 0.12), 0 2px 4px rgba(0, 0, 0, 0.05);
}
.info-select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {
  padding: 0.75rem 1rem;
  background: white;
  color: #1f2937;
  font-weight: 500;
}
.info-select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]:hover, 
.info-select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]:checked {
  background:
    linear-gradient(
      to right,
      #f0fdf4,
      #dcfce7);
  color: #16A34A;
}
.payments-card[_ngcontent-%COMP%] {
  background: white;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
}
.payments-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {
  margin-bottom: 1rem;
}
.payments-count[_ngcontent-%COMP%] {
  font-size: 0.85rem;
  color: #64748b;
  font-weight: 500;
}
.table-container[_ngcontent-%COMP%] {
  overflow-x: auto;
}
.payments-table[_ngcontent-%COMP%] {
  width: 100%;
  border-collapse: collapse;
}
.payments-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {
  padding: 0.875rem 1rem;
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
  padding: 0.875rem 1rem;
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
  cursor: pointer;
  text-decoration: underline;
  transition: color 0.15s ease;
}
.payment-id.clickable[_ngcontent-%COMP%]:hover {
  color: #475569;
}
.td-client[_ngcontent-%COMP%] {
  min-width: 200px;
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
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: #16A34A;
  font-size: 0.875rem;
  flex-shrink: 0;
}
.client-info[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}
.client-name-link[_ngcontent-%COMP%] {
  text-decoration: none;
  color: #1f2937;
  font-weight: 600;
  font-size: 0.9375rem;
  transition: color 0.2s;
  cursor: pointer;
  display: inline-block;
}
.client-name-link[_ngcontent-%COMP%]:hover {
  color: #16A34A;
}
.client-phone[_ngcontent-%COMP%] {
  font-size: 0.8125rem;
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
.th-actions[_ngcontent-%COMP%], 
.td-actions[_ngcontent-%COMP%] {
  width: 60px;
  text-align: center;
}
.actions-cell[_ngcontent-%COMP%] {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
}
.empty-state[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 2rem;
  color: #94a3b8;
}
.empty-state[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  width: 48px;
  height: 48px;
  margin-bottom: 1rem;
}
.empty-state[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
  font-size: 0.9rem;
}
@media (max-width: 1200px) {
  .stats-grid[_ngcontent-%COMP%] {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 768px) {
  .page-wrapper[_ngcontent-%COMP%] {
    margin: -1rem;
    padding: 1rem;
  }
  .profile-header-card[_ngcontent-%COMP%] {
    border-radius: 12px;
    margin-bottom: 1rem;
  }
  .profile-header-content[_ngcontent-%COMP%] {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 1.5rem 1rem;
    position: relative;
  }
  .avatar-wrapper[_ngcontent-%COMP%] {
    margin-bottom: 0.5rem;
  }
  .avatar-large[_ngcontent-%COMP%] {
    width: 80px;
    height: 80px;
    font-size: 1.5rem;
  }
  .profile-main-info[_ngcontent-%COMP%] {
    width: 100%;
    padding-right: 0;
    padding-top: 0.5rem;
  }
  .delete-client-btn[_ngcontent-%COMP%] {
    top: 1rem;
    right: 1rem;
  }
  .name-row[_ngcontent-%COMP%] {
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    padding-right: 0;
    margin-top: 0.5rem;
  }
  .profile-name[_ngcontent-%COMP%] {
    font-size: 1.25rem;
    word-break: break-word;
    padding-right: 0;
  }
  .profile-phone[_ngcontent-%COMP%] {
    font-size: 0.9rem;
    margin: 0.5rem 0;
  }
  .tags-row[_ngcontent-%COMP%] {
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
  }
  .tags-container[_ngcontent-%COMP%] {
    justify-content: center;
    width: 100%;
  }
  .comment-card[_ngcontent-%COMP%], 
   .details-card[_ngcontent-%COMP%] {
    border-radius: 12px;
    padding: 1.25rem 1rem;
  }
  .card-header[_ngcontent-%COMP%] {
    margin-bottom: 1rem;
  }
  .card-title[_ngcontent-%COMP%] {
    font-size: 1.125rem;
  }
  .info-list[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%] {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    padding: 0.75rem 0;
  }
  .info-label[_ngcontent-%COMP%] {
    min-width: auto;
    font-size: 0.875rem;
  }
  .info-value[_ngcontent-%COMP%] {
    font-size: 0.875rem;
  }
  .stats-grid[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  .details-grid[_ngcontent-%COMP%], 
   .details-grid-general[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  .bonuses-table[_ngcontent-%COMP%], 
   .payments-table[_ngcontent-%COMP%] {
    display: none;
  }
  .mobile-bonuses-cards[_ngcontent-%COMP%], 
   .mobile-payments-cards[_ngcontent-%COMP%] {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
}
@media (min-width: 769px) {
  .mobile-bonuses-cards[_ngcontent-%COMP%], 
   .mobile-payments-cards[_ngcontent-%COMP%] {
    display: none;
  }
}
.mobile-bonuses-cards[_ngcontent-%COMP%] {
  display: none;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
}
.mobile-bonus-card[_ngcontent-%COMP%] {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  width: 100%;
}
.mobile-bonus-card-header[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}
.mobile-bonus-card-main[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex: 1;
}
.mobile-bonus-type[_ngcontent-%COMP%] {
  font-size: 0.875rem;
  font-weight: 600;
  color: #1f2937;
}
.mobile-bonus-amount[_ngcontent-%COMP%] {
  font-size: 1rem;
  font-weight: 700;
  color: #d97706;
}
.mobile-bonus-expand[_ngcontent-%COMP%] {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #64748b;
  transition: transform 0.2s;
}
.mobile-bonus-expand.expanded[_ngcontent-%COMP%] {
  transform: rotate(180deg);
}
.mobile-bonus-details[_ngcontent-%COMP%] {
  margin-top: 0.75rem;
  padding-top: 0.75rem;
  border-top: 1px solid #e5e7eb;
  display: none;
}
.mobile-bonus-details.expanded[_ngcontent-%COMP%] {
  display: block;
}
.mobile-bonus-detail-row[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
}
.mobile-bonus-detail-label[_ngcontent-%COMP%] {
  color: #64748b;
}
.mobile-bonus-detail-value[_ngcontent-%COMP%] {
  color: #1f2937;
  font-weight: 500;
}
.mobile-payment-card[_ngcontent-%COMP%] {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}
.mobile-payment-card-header[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}
.mobile-payment-card-main[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex: 1;
}
.mobile-payment-id[_ngcontent-%COMP%] {
  font-family: monospace;
  font-size: 0.875rem;
  font-weight: 600;
  color: #64748b;
}
.mobile-payment-amount[_ngcontent-%COMP%] {
  font-size: 1rem;
  font-weight: 700;
  color: #16A34A;
}
.mobile-payment-expand[_ngcontent-%COMP%] {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #64748b;
  transition: transform 0.2s;
}
.mobile-payment-expand.expanded[_ngcontent-%COMP%] {
  transform: rotate(180deg);
}
.mobile-payment-details[_ngcontent-%COMP%] {
  margin-top: 0.75rem;
  padding-top: 0.75rem;
  border-top: 1px solid #e5e7eb;
  display: none;
}
.mobile-payment-details.expanded[_ngcontent-%COMP%] {
  display: block;
}
.mobile-payment-detail-row[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
}
.mobile-payment-detail-label[_ngcontent-%COMP%] {
  color: #64748b;
}
.mobile-payment-detail-value[_ngcontent-%COMP%] {
  color: #1f2937;
  font-weight: 500;
}
.mobile-refund-btn[_ngcontent-%COMP%] {
  width: 100%;
  padding: 0.75rem;
  background: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 8px;
  color: #dc2626;
  font-weight: 600;
  font-size: 0.875rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
  transition: all 0.2s;
}
.mobile-refund-btn[_ngcontent-%COMP%]:hover {
  background: #fee2e2;
  border-color: #fca5a5;
}
.mobile-refund-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  width: 16px;
  height: 16px;
}
.delete-modal-overlay[_ngcontent-%COMP%] {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: _ngcontent-%COMP%_fadeIn 0.2s ease;
}
@keyframes _ngcontent-%COMP%_fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.delete-modal[_ngcontent-%COMP%] {
  background: white;
  border-radius: 16px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
  max-width: 420px;
  width: 90%;
  animation: _ngcontent-%COMP%_slideUp 0.3s ease;
}
@keyframes _ngcontent-%COMP%_slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.delete-modal-content[_ngcontent-%COMP%] {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.delete-modal-icon[_ngcontent-%COMP%] {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.25rem;
}
.delete-modal-icon.warning[_ngcontent-%COMP%] {
  background: #fef3c7;
  color: #d97706;
}
.delete-modal-icon.danger[_ngcontent-%COMP%] {
  background: #fee2e2;
  color: #dc2626;
}
.delete-modal-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  width: 32px;
  height: 32px;
}
.delete-modal-title[_ngcontent-%COMP%] {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 0.75rem;
}
.delete-modal-description[_ngcontent-%COMP%] {
  font-size: 0.9rem;
  color: #6b7280;
  line-height: 1.6;
  margin: 0 0 1.5rem;
}
.delete-modal-description[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {
  color: #1f2937;
}
.confirm-word[_ngcontent-%COMP%] {
  color: #dc2626;
  background: #fee2e2;
  padding: 0.125rem 0.5rem;
  border-radius: 4px;
  font-family: monospace;
  font-size: 0.95rem;
}
.delete-confirm-input[_ngcontent-%COMP%] {
  width: 100%;
  padding: 0.875rem 1rem;
  border: 2px solid #e5e7eb;
  border-radius: 10px;
  font-size: 1rem;
  font-family: inherit;
  text-align: center;
  margin-bottom: 1.5rem;
  transition: all 0.2s ease;
}
.delete-confirm-input[_ngcontent-%COMP%]:focus {
  outline: none;
  border-color: #dc2626;
  box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
}
.delete-confirm-input[_ngcontent-%COMP%]::placeholder {
  color: #9ca3af;
}
.delete-modal-actions[_ngcontent-%COMP%] {
  display: flex;
  gap: 0.75rem;
  width: 100%;
}
.delete-modal-btn[_ngcontent-%COMP%] {
  flex: 1;
  padding: 0.875rem 1.5rem;
  border-radius: 10px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
}
.delete-modal-btn.cancel[_ngcontent-%COMP%] {
  background: #f3f4f6;
  color: #6b7280;
}
.delete-modal-btn.cancel[_ngcontent-%COMP%]:hover {
  background: #e5e7eb;
  color: #374151;
}
.delete-modal-btn.confirm[_ngcontent-%COMP%] {
  background: #fef3c7;
  color: #d97706;
}
.delete-modal-btn.confirm[_ngcontent-%COMP%]:hover {
  background: #fde68a;
  color: #b45309;
}
.delete-modal-btn.delete[_ngcontent-%COMP%] {
  background: #dc2626;
  color: white;
}
.delete-modal-btn.delete[_ngcontent-%COMP%]:hover:not(:disabled) {
  background: #b91c1c;
}
.delete-modal-btn.delete[_ngcontent-%COMP%]:disabled {
  background: #fca5a5;
  cursor: not-allowed;
}
/*# sourceMappingURL=profile-page.component.css.map */`] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProfilePageComponent, [{
    type: Component,
    args: [{ selector: "app-profile-page", standalone: true, imports: [CommonModule, FormsModule, BadgeComponent, IconButtonComponent, RefundConfirmationModalComponent, RouterModule, PaginatedTableWrapperComponent, LoaderComponent, NotFoundStateComponent, PaymentViewModalComponent, AdjustBonusModalComponent, InlineTagsComponent, SplitButtonComponent, PhoneFormatPipe], template: `
    <div class="page-wrapper">
      <div class="profile-container-wrapper">
        <!-- Loading State -->
        <div class="page-loading-container" *ngIf="isLoading">
          <app-loader [visible]="true" [overlay]="false" type="logo" size="large"></app-loader>
        </div>

        <!-- Not Found State -->
        <app-not-found-state
          *ngIf="!isLoading && clientNotFound"
          title="\u041A\u043B\u0438\u0435\u043D\u0442 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D"
          description="\u041A \u0441\u043E\u0436\u0430\u043B\u0435\u043D\u0438\u044E, \u0437\u0430\u043F\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u043C\u044B\u0439 \u043A\u043B\u0438\u0435\u043D\u0442 \u043D\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u0438\u043B\u0438 \u0431\u044B\u043B \u0443\u0434\u0430\u043B\u0435\u043D."
          backLink="/clients"
          backText="\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043A \u043A\u043B\u0438\u0435\u043D\u0442\u0430\u043C">
        </app-not-found-state>

        <div class="profile-layout" *ngIf="client && !isLoading && !clientNotFound">
          <!-- Sidebar -->
          <div class="profile-sidebar">
            <!-- Back Button -->
            <a [routerLink]="['/clients']" class="back-link">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>\u041A\u043B\u0438\u0435\u043D\u0442\u044B</span>
            </a>

            <!-- Client Type Badge -->
            <div class="client-type-badge-sidebar" [class.business]="client.type === 'business'">
              <svg *ngIf="client.type === 'business'" viewBox="0 0 24 24" fill="none">
                <path d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z" stroke="currentColor" stroke-width="1.5"/>
                <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" stroke="currentColor" stroke-width="1.5"/>
              </svg>
              <svg *ngIf="client.type === 'individual'" viewBox="0 0 24 24" fill="none">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" stroke="currentColor" stroke-width="1.5"/>
                <circle cx="12" cy="7" r="4" stroke="currentColor" stroke-width="1.5"/>
              </svg>
              {{ client.type === 'business' ? '\u0411\u0438\u0437\u043D\u0435\u0441' : '\u0418\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u044B\u0439' }}
            </div>

            <!-- Client Name -->
            <h1 class="client-name-sidebar">{{ getFullName() }}</h1>
            <p class="client-phone-sidebar">{{ client.phone | phoneFormat }}</p>

            <!-- Tags (inline, auto-save) -->
            <div class="tags-section-sidebar">
              <app-inline-tags
                [tags]="client.tags"
                [availableTags]="availableTags"
                label="\u0422\u0435\u0433\u0438"
                (tagsChange)="onInlineTagsChange($event)">
              </app-inline-tags>
            </div>

            <!-- Primary client actions (split button) -->
            <div class="split-button-wrap">
              <app-split-button
                mainLabel="\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043F\u043B\u0430\u0442\u0435\u0436"
                [items]="splitButtonItems"
                (mainClick)="openCreatePayment()"
                (itemSelect)="onSplitButtonItemSelect($event)">
                <svg mainIcon viewBox="0 0 24 24" fill="none">
                  <path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </app-split-button>
            </div>

            <!-- Navigation Menu (scrollable, routable) -->
            <nav class="profile-nav profile-nav-scroll">
              <a 
                routerLink="/clients/{{ client.id }}/general"
                class="nav-item" 
                [class.active]="activeView === 'general'"
                routerLinkActive="active">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" stroke="currentColor" stroke-width="1.5"/>
                  <path d="M9 22V12h6v10" stroke="currentColor" stroke-width="1.5"/>
                </svg>
                <span>\u041E\u0431\u0449\u0435\u0435</span>
              </a>
              <a 
                routerLink="/clients/{{ client.id }}/wallet"
                class="nav-item" 
                [class.active]="activeView === 'wallet'"
                routerLinkActive="active">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M21 4H3a2 2 0 00-2 2v12a2 2 0 002 2h18a2 2 0 002-2V6a2 2 0 00-2-2z" stroke="currentColor" stroke-width="1.5"/>
                  <path d="M1 10h22" stroke="currentColor" stroke-width="1.5"/>
                </svg>
                <span>\u041A\u043E\u0448\u0435\u043B\u0435\u043A</span>
                <span class="nav-badge nav-badge-soon">\u0421\u043A\u043E\u0440\u043E</span>
              </a>
              <a 
                routerLink="/clients/{{ client.id }}/bonus-details"
                class="nav-item" 
                [class.active]="activeView === 'bonus-details'"
                routerLinkActive="active">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" stroke-width="1.5"/>
                </svg>
                <span>\u0414\u0435\u0442\u0430\u043B\u0438 \u0431\u043E\u043D\u0443\u0441\u043E\u0432</span>
              </a>
              <a 
                routerLink="/clients/{{ client.id }}/payment-details"
                class="nav-item" 
                [class.active]="activeView === 'payment-details'"
                routerLinkActive="active">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>\u0414\u0435\u0442\u0430\u043B\u0438 \u043F\u043B\u0430\u0442\u0435\u0436\u0435\u0439</span>
              </a>
              <a 
                routerLink="/clients/{{ client.id }}/audit-logs"
                class="nav-item" 
                [class.active]="activeView === 'audit-logs'"
                routerLinkActive="active">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" stroke="currentColor" stroke-width="1.5"/>
                  <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="currentColor" stroke-width="1.5"/>
                </svg>
                <span>\u0416\u0443\u0440\u043D\u0430\u043B \u0430\u0443\u0434\u0438\u0442\u0430</span>
                <span class="nav-badge nav-badge-soon">\u0421\u043A\u043E\u0440\u043E</span>
              </a>
            </nav>

            <button 
              class="nav-item delete-nav-item" 
              (click)="openDeleteModal()">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m3 0v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6h14zM10 11v6M14 11v6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043A\u043B\u0438\u0435\u043D\u0442\u0430</span>
            </button>
          </div>

          <!-- Main Content Area -->
          <div class="profile-content">
            <!-- General View -->
            <div class="view-content" *ngIf="activeView === 'general'">
              <!-- KPIs Section (on top) -->
              <div class="content-card">
                <div class="card-header">
                  <h3 class="card-title">\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u0438</h3>
                </div>
                <div class="stats-grid">
                  <div class="stat-card">
                    <div class="stat-icon transactions">
                      <svg viewBox="0 0 24 24" fill="none">
                        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <rect x="9" y="3" width="6" height="4" rx="1" stroke="currentColor" stroke-width="1.5"/>
                        <path d="M9 12h6M9 16h6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                      </svg>
                    </div>
                    <div class="stat-info">
                      <span class="stat-value">{{ clientTotals.totalPayments }}</span>
                      <span class="stat-label">\u0422\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u0439</span>
                    </div>
                  </div>
                  <div class="stat-card">
                    <div class="stat-icon total-sum">
                      <svg viewBox="0 0 24 24" fill="none">
                        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </div>
                    <div class="stat-info">
                      <span class="stat-value">{{ formatAmount(clientTotals.totalRevenue) }} \u20B8</span>
                      <span class="stat-label">\u041E\u0431\u0449\u0430\u044F \u0441\u0443\u043C\u043C\u0430</span>
                    </div>
                  </div>
                  <div class="stat-card">
                    <div class="stat-icon bonuses-earned">
                      <svg viewBox="0 0 24 24" fill="none">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </div>
                    <div class="stat-info">
                      <span class="stat-value">{{ formatAmount(clientTotals.totalBonusesGranted) }}</span>
                      <span class="stat-label">\u0411\u043E\u043D\u0443\u0441\u043E\u0432 \u043D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u043E</span>
                    </div>
                  </div>
                  <div class="stat-card">
                    <div class="stat-icon bonuses-used">
                      <svg viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"/>
                        <path d="M8 12l3 3 5-6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </div>
                    <div class="stat-info">
                      <span class="stat-value">{{ formatAmount(clientTotals.totalBonusesUsed) }}</span>
                      <span class="stat-label">\u0411\u043E\u043D\u0443\u0441\u043E\u0432 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u043E</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Personal Data + Contact in one row -->
              <div class="details-grid details-grid-general">
                <div class="content-card">
                  <div class="card-header">
                    <h3 class="card-title">\u041B\u0438\u0447\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435</h3>
                    <button class="card-edit-btn" *ngIf="!isEditingPersonal" (click)="startEditPersonal()">
                      <svg viewBox="0 0 24 24" fill="none">
                        <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </button>
                    <div class="card-actions" *ngIf="isEditingPersonal">
                      <button class="save-btn" (click)="savePersonal()" [disabled]="isSavingPersonal">\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C</button>
                      <button class="cancel-btn" (click)="cancelEditPersonal()" [disabled]="isSavingPersonal">\u041E\u0442\u043C\u0435\u043D\u0430</button>
                    </div>
                  </div>
                  <div class="info-list">
                    <div class="info-row">
                      <span class="info-label">{{ ((!isEditingPersonal && client.type === 'business') || (isEditingPersonal && editedPersonal.type === 'business')) ? '\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435' : '\u0418\u043C\u044F' }}</span>
                      <span class="info-value" *ngIf="!isEditingPersonal">{{ client.firstName }}</span>
                      <input class="info-input" *ngIf="isEditingPersonal" [(ngModel)]="editedPersonal.firstName">
                    </div>
                    <div class="info-row" *ngIf="((!isEditingPersonal && client.type !== 'business') || (isEditingPersonal && editedPersonal.type !== 'business'))">
                      <span class="info-label">\u0424\u0430\u043C\u0438\u043B\u0438\u044F</span>
                      <span class="info-value" *ngIf="!isEditingPersonal">{{ client.lastName }}</span>
                      <input class="info-input" *ngIf="isEditingPersonal" [(ngModel)]="editedPersonal.lastName">
                    </div>
                    <div class="info-row">
                      <span class="info-label">\u0414\u0430\u0442\u0430 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F</span>
                      <span class="info-value" *ngIf="!isEditingPersonal">{{ client.dateOfBirth ? formatDate(client.dateOfBirth) : '\u2014' }}</span>
                      <input class="info-input" *ngIf="isEditingPersonal" type="date" [(ngModel)]="editedPersonal.dateOfBirth">
                    </div>
                    <div class="info-row">
                      <span class="info-label">\u0422\u0438\u043F \u043A\u043B\u0438\u0435\u043D\u0442\u0430</span>
                      <span class="info-value" *ngIf="!isEditingPersonal">{{ client.type === 'business' ? '\u0411\u0438\u0437\u043D\u0435\u0441' : '\u0418\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u044B\u0439' }}</span>
                      <select class="info-select" *ngIf="isEditingPersonal" [(ngModel)]="editedPersonal.type">
                        <option value="individual">\u0418\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u044B\u0439</option>
                        <option value="business">\u0411\u0438\u0437\u043D\u0435\u0441</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="content-card">
                  <div class="card-header">
                    <h3 class="card-title">\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B</h3>
                    <button class="card-edit-btn" *ngIf="!isEditingContacts" (click)="startEditContacts()">
                      <svg viewBox="0 0 24 24" fill="none">
                        <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </button>
                    <div class="card-actions" *ngIf="isEditingContacts">
                      <button class="save-btn" (click)="saveContacts()" [disabled]="isSavingContacts">\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C</button>
                      <button class="cancel-btn" (click)="cancelEditContacts()" [disabled]="isSavingContacts">\u041E\u0442\u043C\u0435\u043D\u0430</button>
                    </div>
                  </div>
                  <div class="info-list">
                    <div class="info-row">
                      <span class="info-label">\u0422\u0435\u043B\u0435\u0444\u043E\u043D</span>
                      <span class="info-value" *ngIf="!isEditingContacts">{{ client.phone | phoneFormat }}</span>
                      <input class="info-input" *ngIf="isEditingContacts" [(ngModel)]="editedContacts.phone" type="tel">
                    </div>
                    <div class="info-row">
                      <span class="info-label">Email</span>
                      <span class="info-value email" *ngIf="!isEditingContacts">{{ client.email || '\u2014' }}</span>
                      <input class="info-input" *ngIf="isEditingContacts" [(ngModel)]="editedContacts.email" type="email" [disabled]="true" placeholder="Email \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D \u0434\u043B\u044F \u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F">
                    </div>
                  </div>
                </div>
              </div>

              <!-- Comment Section (below) -->
              <div class="content-card">
                <div class="card-header">
                  <h3 class="card-title">\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439</h3>
                  <button class="card-edit-btn" *ngIf="!isEditingComment" (click)="startEditComment()">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </button>
                  <div class="card-actions" *ngIf="isEditingComment">
                    <button class="save-btn" (click)="saveComment()" [disabled]="isSavingComment">\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C</button>
                    <button class="cancel-btn" (click)="cancelEditComment()" [disabled]="isSavingComment">\u041E\u0442\u043C\u0435\u043D\u0430</button>
                  </div>
                </div>
                <div class="comment-body">
                  <p *ngIf="!isEditingComment" class="comment-text">{{ client.comment || '\u041D\u0435\u0442 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u044F' }}</p>
                  <textarea 
                    *ngIf="isEditingComment" 
                    [(ngModel)]="editedComment" 
                    class="comment-textarea"
                    placeholder="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 \u043E \u043A\u043B\u0438\u0435\u043D\u0442\u0435..."
                    rows="3"></textarea>
                </div>
              </div>
            </div>

            <!-- Wallet View (Coming Soon) -->
            <div class="view-content" *ngIf="activeView === 'wallet'">
              <div class="coming-soon-card">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M21 4H3a2 2 0 00-2 2v12a2 2 0 002 2h18a2 2 0 002-2V6a2 2 0 00-2-2z" stroke="currentColor" stroke-width="1.5"/>
                  <path d="M1 10h22" stroke="currentColor" stroke-width="1.5"/>
                </svg>
                <h2>\u0421\u043A\u043E\u0440\u043E</h2>
                <p>\u0420\u0430\u0437\u0434\u0435\u043B "\u041A\u043E\u0448\u0435\u043B\u0435\u043A" \u043D\u0430\u0445\u043E\u0434\u0438\u0442\u0441\u044F \u0432 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0435</p>
              </div>
            </div>

            <!-- Bonus Details View -->
            <div class="view-content" *ngIf="activeView === 'bonus-details'">
              <div class="content-card bonuses-details-card">
                <div class="card-header bonuses-card-header">
                  <div class="card-header-left">
                    <div class="card-icon">
                      <svg viewBox="0 0 24 24" fill="none">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </div>
                    <div class="card-title-section">
                      <h3 class="card-title">\u0414\u0435\u0442\u0430\u043B\u0438 \u0431\u043E\u043D\u0443\u0441\u043E\u0432</h3>
                      <div class="bonuses-stats">
                        <div class="stat-item">
                          <span class="stat-label">\u041E\u0441\u0442\u0430\u043B\u043E\u0441\u044C:</span>
                          <span class="stat-value active">{{ formatAmount(bonusBalance) }} \u20B8</span>
                        </div>
                        <div class="stat-item">
                          <span class="stat-label">\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u043E:</span>
                          <span class="stat-value used">{{ formatAmount(getUsedBonusesTotal()) }} \u20B8</span>
                        </div>
                        <div class="stat-item">
                          <span class="stat-label">\u0421\u0433\u043E\u0440\u0435\u043B\u043E:</span>
                          <span class="stat-value expired">{{ formatAmount(getExpiredBonusesTotal()) }} \u20B8</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="bonuses-content">
                  <app-paginated-table-wrapper
                    [paginationEnabled]="true"
                    [data]="bonusesDetails"
                    [defaultPageSize]="10"
                    paginationKey="bonuses"
                    #paginatedBonuses>
                    <div class="table-container" *ngIf="bonusesDetails.length > 0">
                      <table class="bonuses-table">
                        <thead>
                          <tr>
                            <th>\u0422\u0438\u043F \u0431\u043E\u043D\u0443\u0441\u0430</th>
                            <th>\u0421\u0443\u043C\u043C\u0430 \u043D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u044F</th>
                            <th>\u041E\u0441\u0442\u0430\u0442\u043E\u043A \u0431\u043E\u043D\u0443\u0441\u0430</th>
                            <th>\u041D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u043E</th>
                            <th>\u0418\u0441\u0442\u0435\u043A\u0430\u0435\u0442</th>
                            <th>\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F</th>
                          </tr>
                        </thead>
                        <tbody>
                          <ng-container *ngFor="let bonus of paginatedBonuses.paginatedData">
                          <tr
                              [class.expired]="getDaysUntilExpiry(bonus.expiresAt) <= 0 && !bonus.used && bonus.type !== 'refund' && bonus.type !== 'manual_revoke'"
                              [class.expiring-soon]="getDaysUntilExpiry(bonus.expiresAt) <= 7 && getDaysUntilExpiry(bonus.expiresAt) > 0"
                              [class.used]="bonus.used"
                              [class.refund]="bonus.type === 'refund'"
                              [class.manual-revoke]="bonus.type === 'manual_revoke'">
                            <td>
                              <span class="bonus-type-badge" [class]="'bonus-type-' + bonus.type">
                                {{ getBonusTypeLabel(bonus.type) }}
                              </span>
                            </td>
                            <td>
                              <div class="bonus-info">
                                <app-badge
                                  *ngIf="bonus.used"
                                  badgeType="bonusUsed"
                                  size="medium"
                                  icon="check"
                                  class="bonus-badge">
                                  -{{ formatAmount(bonus.amount) }}
                                </app-badge>
                                <app-badge
                                  *ngIf="bonus.type === 'refund'"
                                  badgeType="refund"
                                  size="medium"
                                  icon="refund"
                                  class="bonus-badge">
                                  {{ formatAmount(bonus.amount) }}
                                </app-badge>
                                <app-badge
                                  *ngIf="bonus.type === 'manual_revoke'"
                                  badgeType="refund"
                                  size="medium"
                                  icon="refund"
                                  class="bonus-badge">
                                  -{{ formatAmount(bonus.amount) }} \u20B8
                                </app-badge>
                                <app-badge
                                  *ngIf="bonus.type !== 'refund' && bonus.type !== 'manual_revoke' && !bonus.used && getDaysUntilExpiry(bonus.expiresAt) <= 0"
                                  badgeType="bonusExpired"
                                  size="medium"
                                  icon="expired"
                                  class="bonus-badge">
                                  {{ formatAmount(bonus.originalAmount ?? bonus.amount) }}
                                </app-badge>
                                <app-badge
                                  *ngIf="bonus.type !== 'refund' && bonus.type !== 'manual_revoke' && !bonus.used && getDaysUntilExpiry(bonus.expiresAt) > 0"
                                  badgeType="bonusGranted"
                                  size="medium"
                                  icon="star"
                                  class="bonus-badge">
                                  +{{ formatAmount(bonus.originalAmount ?? bonus.amount) }}
                                </app-badge>
                              </div>
                            </td>
                            <td>
                              <div class="bonus-remaining-badges">
                                <span *ngIf="bonus.type === 'manual_revoke'" class="bonus-empty-cell">\u2014</span>
                                <app-badge
                                  *ngIf="bonus.used"
                                  badgeType="bonusUsed"
                                  size="medium"
                                  icon="used">
                                  \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u043E
                                </app-badge>
                                <app-badge
                                  *ngIf="bonus.type === 'refund'"
                                  badgeType="refund"
                                  size="medium"
                                  icon="refund">
                                  \u041E\u0442\u043E\u0437\u0432\u0430\u043D\u043E
                                </app-badge>
                                <app-badge
                                  *ngIf="bonus.type !== 'refund' && bonus.type !== 'manual_revoke' && !bonus.used && bonus.remainingAmount != null"
                                  [badgeType]="getDaysUntilExpiry(bonus.expiresAt) <= 0 ? 'bonusExpired' : (getDaysUntilExpiry(bonus.expiresAt) <= 7 ? 'warning' : 'success')"
                                  size="medium">
                                  {{ formatAmount(bonus.remainingAmount) }}{{ bonus.originalAmount != null ? ' \u0438\u0437 ' + formatAmount(bonus.originalAmount) : '' }} \u20B8
                                </app-badge>
                                <app-badge
                                  *ngIf="bonus.type !== 'refund' && bonus.type !== 'manual_revoke' && !bonus.used && bonus.remainingAmount == null && getDaysUntilExpiry(bonus.expiresAt) <= 0"
                                  badgeType="bonusExpired"
                                  size="medium"
                                  icon="expired">
                                  \u0418\u0441\u0442\u0435\u043A
                                </app-badge>
                              </div>
                            </td>
                            <td>
                              <span class="bonus-date">{{ (bonus.used || bonus.type === 'refund' || bonus.type === 'manual_revoke') ? '\u2014' : formatDate(bonus.issuedAt) }}</span>
                            </td>
                            <td>
                              <span *ngIf="!(bonus.used || bonus.type === 'refund' || bonus.type === 'manual_revoke')" class="bonus-expiry-cell">
                                <span class="bonus-expiry-date">{{ formatDate(bonus.expiresAt) }}</span>
                                <app-badge
                                  *ngIf="getDaysUntilExpiry(bonus.expiresAt) > 0"
                                  [badgeType]="getDaysUntilExpiry(bonus.expiresAt) <= 7 ? 'warning' : 'success'"
                                  size="medium"
                                  class="expires-in-badge">
                                  {{ getDaysUntilExpiry(bonus.expiresAt) }} {{ getDaysText(getDaysUntilExpiry(bonus.expiresAt)) }}
                                </app-badge>
                              </span>
                              <span *ngIf="bonus.used || bonus.type === 'refund' || bonus.type === 'manual_revoke'" class="bonus-empty-cell">\u2014</span>
                            </td>
                            <td>
                              <div class="actions-cell">
                                <app-icon-button
                                  iconButtonType="ghost"
                                  size="medium"
                                  class="view-svg-btn"
                                  [tooltip]="isBonusRowExpanded(bonus.id) ? '\u0421\u043A\u0440\u044B\u0442\u044C \u0434\u0435\u0442\u0430\u043B\u0438' : '\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0434\u0435\u0442\u0430\u043B\u0438'"
                                  (onClick)="toggleBonusRow(bonus.id)">
                                  <svg [class.rotated]="isBonusRowExpanded(bonus.id)" viewBox="0 0 24 24" fill="none">
                                    <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                  </svg>
                                </app-icon-button>
                              </div>
                            </td>
                          </tr>
                          <tr *ngIf="isBonusRowExpanded(bonus.id)" class="bonus-details-row">
                            <td colspan="6" class="bonus-details-cell">
                              <div class="bonus-details-content">
                                <div class="bonus-details-grid">
                                  <div class="refund-reason-section">
                                    <span class="refund-reason-label">\u041F\u0440\u0438\u0447\u0438\u043D\u0430 \u0432\u043E\u0437\u0432\u0440\u0430\u0442\u0430:</span>
                                    <div class="refund-reason-text" *ngIf="bonus.refundReason">
                                      {{ bonus.refundReason }}
                                    </div>
                                    <div class="refund-reason-empty" *ngIf="!bonus.refundReason">
                                      \u041F\u0440\u0438\u0447\u0438\u043D\u0430 \u043D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D\u0430
                                    </div>
                                  </div>
                                  <div class="bonus-initiated-by-section">
                                    <span class="refund-reason-label">\u0418\u043D\u0438\u0446\u0438\u0430\u0442\u043E\u0440:</span>
                                    <a *ngIf="bonus.initiatedBy && bonus.initiatedById" 
                                       [routerLink]="['/users', bonus.initiatedById]" 
                                       class="bonus-initiated-by-link">
                                      {{ bonus.initiatedBy === 'SYSTEM' ? '\u0421\u0438\u0441\u0442\u0435\u043C\u0430' : bonus.initiatedBy }}
                                    </a>
                                    <div class="bonus-initiated-by-text" *ngIf="bonus.initiatedBy && !bonus.initiatedById">
                                      {{ bonus.initiatedBy === 'SYSTEM' ? '\u0421\u0438\u0441\u0442\u0435\u043C\u0430' : bonus.initiatedBy }}
                                    </div>
                                    <div class="bonus-initiated-by-empty" *ngIf="!bonus.initiatedBy">
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
                    <div class="empty-state" *ngIf="bonusesDetails.length === 0">
                      <svg viewBox="0 0 24 24" fill="none">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                      <span>\u041D\u0435\u0442 \u0430\u043A\u0442\u0438\u0432\u043D\u044B\u0445 \u0431\u043E\u043D\u0443\u0441\u043E\u0432</span>
                    </div>
                  </app-paginated-table-wrapper>
                </div>
              </div>
            </div>

            <!-- Payment Details View -->
            <div class="view-content" *ngIf="activeView === 'payment-details'">
              <div class="content-card payments-card">
                <div class="card-header">
                  <div class="card-header-left">
                    <div class="card-icon">
                      <svg viewBox="0 0 24 24" fill="none">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </div>
                    <h3 class="card-title">\u0418\u0441\u0442\u043E\u0440\u0438\u044F \u043F\u043B\u0430\u0442\u0435\u0436\u0435\u0439</h3>
                  </div>
                  <span class="payments-count">{{ payments.length }} \u043F\u043B\u0430\u0442\u0435\u0436\u0435\u0439</span>
                </div>

                <!-- Payments Table with Pagination -->
                <app-paginated-table-wrapper
                  [paginationEnabled]="true"
                  [data]="payments"
                  [defaultPageSize]="15"
                  paginationKey="payments"
                  #paginatedTable>
                  
                  <div class="table-container">
                    <table class="payments-table">
                      <thead>
                        <tr>
                          <th class="th-id">ID \u043F\u043B\u0430\u0442\u0435\u0436\u0430</th>
                          <th class="th-amount">\u0421\u0443\u043C\u043C\u0430</th>
                          <th class="th-bonuses">\u0411\u043E\u043D\u0443\u0441\u044B</th>
                          <th class="th-method">\u0421\u043F\u043E\u0441\u043E\u0431 \u043E\u043F\u043B\u0430\u0442\u044B</th>
                          <th class="th-status">\u0421\u0442\u0430\u0442\u0443\u0441</th>
                          <th class="th-date">\u0414\u0430\u0442\u0430 \u0438 \u0432\u0440\u0435\u043C\u044F</th>
                          <th class="th-actions">\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr *ngFor="let payment of paginatedTable.paginatedData" class="payment-row">
                        <td class="td-id">
                          <span class="payment-id clickable" (click)="openPaymentView(payment.id)">{{ payment.id }}</span>
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
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <div class="empty-state" *ngIf="payments.length === 0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                      <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" stroke="currentColor" stroke-width="1.5"/>
                      <rect x="9" y="3" width="6" height="4" rx="1" stroke="currentColor" stroke-width="1.5"/>
                    </svg>
                    <span>\u041F\u043B\u0430\u0442\u0435\u0436\u0438 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u044B</span>
                  </div>
                </div>
                </app-paginated-table-wrapper>
              </div>
            </div>

            <!-- Audit Logs View (Coming Soon) -->
            <div class="view-content" *ngIf="activeView === 'audit-logs'">
              <div class="coming-soon-card">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" stroke="currentColor" stroke-width="1.5"/>
                  <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="currentColor" stroke-width="1.5"/>
                </svg>
                <h2>\u0421\u043A\u043E\u0440\u043E</h2>
                <p>\u0420\u0430\u0437\u0434\u0435\u043B "\u0416\u0443\u0440\u043D\u0430\u043B \u0430\u0443\u0434\u0438\u0442\u0430" \u043D\u0430\u0445\u043E\u0434\u0438\u0442\u0441\u044F \u0432 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0435</p>
              </div>
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
      (confirm)="confirmRefund($event.refundReason || '')">
    </app-refund-confirmation-modal>

    <!-- Adjust Bonus Modal -->
    <app-adjust-bonus-modal
      [visible]="showAdjustBonusModal"
      [clientId]="client?.id ?? null"
      [bonusBalance]="bonusBalance"
      (visibleChange)="showAdjustBonusModal = $event"
      (bonusAdjusted)="onBonusAdjusted()">
    </app-adjust-bonus-modal>

    <!-- Payment View Modal -->
    <app-payment-view-modal
      [visible]="showPaymentViewModal"
      [paymentTxId]="selectedPaymentTxId"
      [paymentSearchResult]="selectedPaymentSearchResult"
      (visibleChange)="showPaymentViewModal = $event"
      (paymentUpdated)="onPaymentUpdated()">
    </app-payment-view-modal>

    <!-- Delete Client Confirmation Modal -->
    <div class="delete-modal-overlay" *ngIf="showDeleteModal" (click)="closeDeleteModal()">
      <div class="delete-modal" (click)="$event.stopPropagation()">
        <!-- Step 1: Initial confirmation -->
        <div class="delete-modal-content" *ngIf="deleteStep === 1">
          <div class="delete-modal-icon warning">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M12 9v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <h3 class="delete-modal-title">\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043A\u043B\u0438\u0435\u043D\u0442\u0430?</h3>
          <p class="delete-modal-description">
            \u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B, \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u043A\u043B\u0438\u0435\u043D\u0442\u0430 <strong>{{ getFullName() }}</strong>?<br>
            \u042D\u0442\u043E \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u043D\u0435\u043B\u044C\u0437\u044F \u043E\u0442\u043C\u0435\u043D\u0438\u0442\u044C. \u0412\u0441\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u043A\u043B\u0438\u0435\u043D\u0442\u0430, \u0432\u043A\u043B\u044E\u0447\u0430\u044F \u0438\u0441\u0442\u043E\u0440\u0438\u044E \u043F\u043B\u0430\u0442\u0435\u0436\u0435\u0439 \u0438 \u0431\u043E\u043D\u0443\u0441\u043E\u0432, \u0431\u0443\u0434\u0443\u0442 \u0443\u0434\u0430\u043B\u0435\u043D\u044B.
          </p>
          <div class="delete-modal-actions">
            <button class="delete-modal-btn cancel" (click)="closeDeleteModal()">\u041E\u0442\u043C\u0435\u043D\u0430</button>
            <button class="delete-modal-btn confirm" (click)="proceedToDeleteStep2()">\u0414\u0430, \u0443\u0434\u0430\u043B\u0438\u0442\u044C</button>
          </div>
        </div>

        <!-- Step 2: Type confirmation word -->
        <div class="delete-modal-content" *ngIf="deleteStep === 2">
          <div class="delete-modal-icon danger">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m3 0v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6h14zM10 11v6M14 11v6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <h3 class="delete-modal-title">\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u0435</h3>
          <p class="delete-modal-description">
            \u0414\u043B\u044F \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u044F \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u044F \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043B\u043E\u0432\u043E <strong class="confirm-word">\u0443\u0434\u0430\u043B\u0438\u0442\u044C</strong>
          </p>
          <input 
            type="text" 
            class="delete-confirm-input"
            [(ngModel)]="deleteConfirmationWord"
            placeholder="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043B\u043E\u0432\u043E \u0434\u043B\u044F \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u044F"
            (keydown.enter)="confirmDelete()">
          <div class="delete-modal-actions">
            <button class="delete-modal-btn cancel" (click)="closeDeleteModal()">\u041E\u0442\u043C\u0435\u043D\u0430</button>
            <button 
              class="delete-modal-btn delete" 
              [disabled]="deleteConfirmationWord !== '\u0443\u0434\u0430\u043B\u0438\u0442\u044C' || isDeletingClient"
              (click)="confirmDelete()">
              <span *ngIf="!isDeletingClient">\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043D\u0430\u0432\u0441\u0435\u0433\u0434\u0430</span>
              <span *ngIf="isDeletingClient">\u0423\u0434\u0430\u043B\u0435\u043D\u0438\u0435...</span>
            </button>
          </div>
        </div>
      </div>
    </div>

  `, styles: [`/* angular:styles/component:css;000cbd2671051cbb2208b9bd5058da85f5226a876b0b5fe87d15c1b3085297f6;/Users/baglan/repo/westwood/westwood-frontend/src/app/features/profile/pages/profile-page/profile-page.component.ts */
.page-wrapper {
  min-height: 100%;
  margin: -2rem;
  padding: 2rem;
  background:
    linear-gradient(
      180deg,
      #f0fdf4 0%,
      #f8fafc 50%,
      #f8fafc 100%);
}
.profile-container-wrapper {
  position: relative;
  min-height: 400px;
}
.profile-layout {
  display: flex;
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
}
.profile-sidebar {
  width: 280px;
  flex-shrink: 0;
  background: white;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
  max-height: calc(100vh - 4rem);
  position: sticky;
  top: 2rem;
  display: flex;
  flex-direction: column;
  z-index: 20;
  isolation: isolate;
}
.profile-nav-scroll {
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.back-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #64748b;
  text-decoration: none;
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
  padding: 0.5rem;
  border-radius: 8px;
  transition: all 0.2s;
}
.back-link:hover {
  background: #f1f5f9;
  color: #1f2937;
}
.back-link svg {
  width: 18px;
  height: 18px;
}
.client-type-badge-sidebar {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.4rem 0.75rem;
  background: #f0fdf4;
  color: #16A34A;
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 1rem;
}
.client-type-badge-sidebar.business {
  background: #dbeafe;
  color: #1d4ed8;
}
.client-type-badge-sidebar svg {
  width: 16px;
  height: 16px;
}
.client-name-sidebar {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1f2937;
  margin: 0 0 0.25rem 0;
  line-height: 1.3;
}
.client-phone-sidebar {
  font-size: 0.9rem;
  color: #64748b;
  margin: 0 0 1rem 0;
  line-height: 1.3;
}
.tags-section-sidebar {
  margin-bottom: 1.5rem;
}
.tags-section-sidebar .inline-tags {
  --tag-transition: 0.12s ease;
}
.client-tag-sidebar {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.3rem 0.65rem;
  background: #dcfce7;
  color: #16A34A;
  border-radius: 16px;
  font-size: 0.75rem;
  font-weight: 500;
}
.no-tags {
  color: #94a3b8;
  font-size: 0.85rem;
  font-style: italic;
}
.split-button-wrap {
  margin-bottom: 1.5rem;
}
.profile-nav {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.profile-nav a.nav-item {
  text-decoration: none;
  box-sizing: border-box;
}
.nav-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  background: transparent;
  border: none;
  border-radius: 10px;
  color: #64748b;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  text-align: left;
}
.nav-item:hover {
  background: #f1f5f9;
  color: #1f2937;
}
.nav-item.active {
  background: #f0fdf4;
  color: #16A34A;
  font-weight: 600;
}
.nav-item.delete-nav-item {
  color: #dc2626;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #e5e7eb;
}
.nav-item.delete-nav-item:hover {
  background: #fef2f2;
  color: #b91c1c;
}
.nav-item svg {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
}
.nav-badge {
  margin-left: auto;
  font-size: 0.7rem;
  font-weight: 600;
  padding: 0.2rem 0.5rem;
  border-radius: 6px;
}
.nav-badge-soon {
  background: #fef08a;
  color: #854d0e;
}
.profile-content {
  flex: 1;
  min-width: 0;
}
.view-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.details-grid-general {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}
.content-card {
  position: relative;
  background: white;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
}
.coming-soon-card {
  background: white;
  border-radius: 16px;
  padding: 4rem 2rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}
.coming-soon-card svg {
  width: 64px;
  height: 64px;
  color: #94a3b8;
}
.coming-soon-card h2 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0;
}
.coming-soon-card p {
  font-size: 1rem;
  color: #64748b;
  margin: 0;
}
@media (max-width: 1024px) {
  .profile-layout {
    flex-direction: column;
    gap: 1.5rem;
  }
  .profile-sidebar {
    width: 100%;
    position: static;
  }
}
@media (max-width: 768px) {
  .profile-sidebar {
    padding: 1rem;
    max-height: none;
  }
  .profile-nav-scroll {
    overflow: visible;
    max-height: none;
  }
  .profile-nav {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  .nav-item {
    padding: 0.5rem 0.75rem;
    font-size: 0.85rem;
  }
  .nav-item.delete-nav-item {
    width: 100%;
    margin-top: 0.5rem;
    padding-top: 0.75rem;
  }
}
.tags-container-content {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: center;
}
.profile-container {
  max-width: 1200px;
  margin: 0 auto;
}
.page-loading-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  width: 100%;
}
.profile-header-card {
  background: white;
  border-radius: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
  margin-bottom: 1rem;
  position: relative;
}
.profile-header-content {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem 2rem;
}
.avatar-wrapper {
  position: relative;
  flex-shrink: 0;
}
.avatar-large {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background:
    linear-gradient(
      135deg,
      #16A34A,
      #22c55e);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 1px;
}
.status-indicator {
  position: absolute;
  bottom: 2px;
  right: 2px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #94a3b8;
  border: 2px solid white;
}
.status-indicator.active {
  background: #22c55e;
}
.profile-main-info {
  flex: 1;
  min-width: 0;
  position: relative;
}
.delete-client-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #fef2f2;
  border: 1px solid #fecaca;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #dc2626;
  transition: all 0.2s ease;
  z-index: 10;
}
.delete-client-btn:hover {
  background: #fee2e2;
  border-color: #fca5a5;
  color: #b91c1c;
}
.delete-client-btn svg {
  width: 18px;
  height: 18px;
}
.name-row {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.25rem;
}
.profile-name {
  font-size: 1.35rem;
  font-weight: 600;
  color: #111827;
  margin: 0;
}
.client-type-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.25rem 0.6rem;
  background: #f0fdf4;
  color: #16A34A;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 500;
}
.client-type-badge.business {
  background: #dbeafe;
  color: #1d4ed8;
}
.client-type-badge svg {
  width: 14px;
  height: 14px;
}
.profile-phone {
  font-size: 0.9rem;
  color: #6b7280;
  margin: 0 0 0.75rem;
}
.tags-row {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.tags-container {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  align-items: center;
}
.client-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.25rem 0.75rem;
  background: #dcfce7;
  color: #16A34A;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
}
.remove-tag-btn {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  color: #16A34A;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  transition: all 0.15s;
}
.remove-tag-btn:hover {
  background: rgba(21, 128, 61, 0.2);
}
.remove-tag-btn svg {
  width: 10px;
  height: 10px;
}
.add-tag-wrapper {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
.add-tag-input {
  padding: 0.35rem 0.75rem;
  border: 1.5px solid #e2e8f0;
  border-radius: 20px;
  font-size: 0.8rem;
  width: 110px;
  outline: none;
  background:
    linear-gradient(
      to bottom,
      #ffffff,
      #f8fafc);
  color: #374151;
  font-weight: 500;
  transition: all 0.2s ease;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
}
.add-tag-input:hover {
  border-color: #cbd5e1;
}
.add-tag-input:focus {
  border-color: #22c55e;
  background: white;
  box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.1);
}
.add-tag-input::placeholder {
  color: #94a3b8;
  font-weight: 400;
}
.add-tag-confirm-btn {
  background: #16A34A;
  border: none;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
}
.add-tag-confirm-btn svg {
  width: 12px;
  height: 12px;
}
.edit-tags-btn {
  background: #f0fdf4;
  border: 1px dashed #16A34A;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #16A34A;
  transition: all 0.15s;
}
.edit-tags-btn:hover {
  background: #dcfce7;
}
.edit-tags-btn svg {
  width: 14px;
  height: 14px;
}
.tags-actions {
  display: flex;
  gap: 0.35rem;
}
.save-tags-btn,
.cancel-tags-btn {
  background: none;
  border: none;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.15s;
}
.save-tags-btn {
  background: #16A34A;
  color: white;
}
.save-tags-btn:hover {
  background: #14532d;
}
.cancel-tags-btn {
  background: #f3f4f6;
  color: #6b7280;
}
.cancel-tags-btn:hover {
  background: #e5e7eb;
}
.save-tags-btn svg,
.cancel-tags-btn svg {
  width: 14px;
  height: 14px;
}
.tags-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  width: 500px;
  margin-top: 6px;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  z-index: 100;
  animation: dropdownFadeIn 0.15s ease;
}
@keyframes dropdownFadeIn {
  from {
    opacity: 0;
    transform: translateY(-4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.tags-dropdown-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 10px;
  background: #f8fafc;
  border-bottom: 1px solid #e2e8f0;
  font-size: 0.7rem;
  font-weight: 700;
  color: #64748b;
}
.tags-dropdown-close {
  background: none;
  border: none;
  font-size: 1rem;
  color: #94a3b8;
  cursor: pointer;
  padding: 0;
  line-height: 1;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  transition: all 0.15s;
}
.tags-dropdown-close:hover {
  color: #ef4444;
  background: #fef2f2;
}
.tags-dropdown-list {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding: 8px;
  max-height: 80px;
  overflow-y: auto;
}
.tag-option {
  padding: 0.25rem 0.6rem;
  background: #dcfce7;
  border: 1px solid #bbf7d0;
  color: #16A34A;
  border-radius: 16px;
  font-size: 0.75rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s ease;
}
.tag-option:hover {
  background: #bbf7d0;
  border-color: #22c55e;
}
.tags-row {
  position: relative;
}
.comment-card {
  background: white;
  border-radius: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
  margin-bottom: 1.5rem;
  padding: 1.25rem 1.5rem;
}
.comment-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.75rem;
}
.comment-title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: #374151;
}
.comment-title svg {
  width: 18px;
  height: 18px;
  color: #16A34A;
}
.edit-comment-btn {
  background: none;
  border: none;
  padding: 0.4rem;
  cursor: pointer;
  color: #6b7280;
  border-radius: 6px;
  transition: all 0.15s;
}
.edit-comment-btn:hover {
  background: #f3f4f6;
  color: #16A34A;
}
.edit-comment-btn svg {
  width: 16px;
  height: 16px;
}
.comment-actions,
.card-actions {
  display: flex;
  gap: 0.5rem;
}
.save-btn,
.cancel-btn {
  padding: 0.4rem 0.75rem;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  border: none;
}
.save-btn {
  background: #16A34A;
  color: white;
}
.save-btn:hover {
  background: #14532d;
}
.cancel-btn {
  background: #f3f4f6;
  color: #6b7280;
}
.cancel-btn:hover {
  background: #e5e7eb;
}
.comment-text {
  font-size: 0.9rem;
  color: #4b5563;
  margin: 0;
  line-height: 1.5;
}
.comment-textarea {
  width: 100%;
  padding: 0.875rem 1rem;
  border: 1.5px solid #e2e8f0;
  border-radius: 12px;
  font-size: 0.9rem;
  font-family: inherit;
  resize: vertical;
  min-height: 80px;
  background:
    linear-gradient(
      to bottom,
      #ffffff,
      #f8fafc);
  color: #374151;
  line-height: 1.6;
  transition: all 0.2s ease;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
}
.comment-textarea:hover {
  border-color: #cbd5e1;
  background:
    linear-gradient(
      to bottom,
      #ffffff,
      #f1f5f9);
}
.comment-textarea:focus {
  outline: none;
  border-color: #22c55e;
  background: white;
  box-shadow: 0 0 0 4px rgba(34, 197, 94, 0.12), 0 2px 4px rgba(0, 0, 0, 0.05);
}
.comment-textarea::placeholder {
  color: #94a3b8;
}
.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin-bottom: 1.5rem;
}
.stat-card {
  background: white;
  border-radius: 16px;
  padding: 1.25rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
}
.stat-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.stat-icon svg {
  width: 22px;
  height: 22px;
}
.stat-icon.transactions {
  background:
    linear-gradient(
      135deg,
      #dcfce7,
      #bbf7d0);
  color: #16A34A;
}
.stat-icon.total-sum {
  background:
    linear-gradient(
      135deg,
      #dbeafe,
      #bfdbfe);
  color: #1d4ed8;
}
.stat-icon.bonuses-earned {
  background:
    linear-gradient(
      135deg,
      #fef3c7,
      #fde68a);
  color: #d97706;
}
.stat-icon.bonuses-used {
  background:
    linear-gradient(
      135deg,
      #fce7f3,
      #fbcfe8);
  color: #db2777;
}
.stat-info {
  display: flex;
  flex-direction: column;
}
.stat-value {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1f2937;
}
.stat-label {
  font-size: 0.8rem;
  color: #64748b;
}
.bonuses-details-card {
  background: white;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
}
.bonuses-details-card .bonuses-card-header {
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #f1f5f9;
}
.bonuses-details-card .bonuses-card-header .card-header-left {
  flex: 1;
}
.bonuses-content {
  padding: 0;
}
.card-title-section {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
}
.bonuses-stats {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
}
.stat-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.stat-label {
  font-size: 0.8125rem;
  color: #64748b;
  font-weight: 500;
}
.stat-value {
  font-size: 0.875rem;
  font-weight: 700;
}
.collapse-btn {
  background: none;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  color: #64748b;
  border-radius: 8px;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}
.collapse-btn:hover {
  background: #f1f5f9;
  color: #1f2937;
}
.collapse-btn svg {
  width: 20px;
  height: 20px;
  transition: transform 0.2s ease;
}
.collapse-btn.collapsed svg {
  transform: rotate(-90deg);
}
.bonuses-content .table-container {
  overflow-x: auto;
}
.bonuses-table {
  width: 100%;
  border-collapse: collapse;
}
.bonuses-table thead {
  background: #f8fafc;
}
.bonuses-table th {
  padding: 0.875rem 1rem;
  text-align: left;
  font-size: 0.75rem;
  font-weight: 600;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border-bottom: 1px solid #e5e7eb;
}
.bonuses-table td {
  padding: 0.875rem 1rem;
  border-bottom: 1px solid #f1f5f9;
}
.bonuses-table th:last-child,
.bonuses-table td:last-child {
  width: 80px;
  text-align: center;
}
.bonuses-table tbody tr {
  transition: background 0.15s;
}
.bonuses-table tbody tr:hover {
  background: #f8fafc;
}
.bonuses-table tbody tr.expired {
  background: transparent;
}
.bonuses-table tbody tr.expired:hover {
  background: transparent;
}
.bonuses-table tbody tr.expiring-soon {
  background: transparent;
}
.bonuses-table tbody tr.expiring-soon:hover {
  background: transparent;
}
.bonuses-table tbody tr.used {
  background: transparent;
  opacity: 1;
}
.bonuses-table tbody tr.refund {
  background: transparent;
}
.bonuses-table tbody tr.refund:hover {
  background: transparent;
}
.bonuses-table tbody tr.manual-revoke {
  background: transparent;
}
.bonuses-table tbody tr.manual-revoke:hover {
  background: transparent;
}
.manual-revoke-audit,
.remaining-amount {
  font-size: 0.875rem;
  color: #475569;
}
.bonus-expiry-cell {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  align-items: flex-start;
}
.bonus-expiry-cell .expires-in-badge {
  flex-shrink: 0;
}
.bonus-empty-cell {
  color: #94a3b8;
}
.bonus-remaining-badges {
  display: flex;
  align-items: center;
}
.bonuses-table tbody tr:last-child td {
  border-bottom: none;
}
.bonuses-table tbody tr.bonus-details-row {
  background: transparent;
}
.bonuses-table tbody tr.bonus-details-row td {
  border-top: none;
  padding: 0;
}
.bonus-details-cell {
  padding: 0 !important;
  background: transparent;
}
.bonus-details-content {
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
.bonus-details-grid {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
}
.refund-reason-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: left;
}
.bonus-initiated-by-section {
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: right;
  min-width: 200px;
}
.refund-reason-label {
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
.bonus-initiated-by-link {
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
.bonus-initiated-by-link:hover {
  color: #16A34A;
}
.bonus-initiated-by-text {
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
.bonus-initiated-by-empty {
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
.bonus-type-badge {
  display: inline-flex;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 600;
  color: #1f2937;
}
.bonus-type-badge.bonus-type-welcome {
  // color: #1e40af;
  color: #1f2937;
}
.bonus-type-badge.bonus-type-referral {
  // color: #92400e;
  color: #1f2937;
}
.bonus-type-badge.bonus-type-purchase {
  // color: #15803d;
  color: #1f2937;
}
.bonus-type-badge.bonus-type-promotion {
  // color: #be185d;
  color: #1f2937;
}
.bonus-type-badge.bonus-type-loyalty {
  // color: #3730a3;
  color: #1f2937;
}
.bonus-type-badge.bonus-type-refund {
  // color: #dc2626;
  color: #1f2937;
}
.bonus-amount {
  font-size: 0.9375rem;
  font-weight: 600;
  color: #fbbf24;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.bonus-amount.expired-amount {
  color: #94a3b8;
  text-decoration: line-through;
}
.bonus-date,
.bonus-expiry-date {
  font-size: 0.875rem;
  color: #1f2937;
  font-weight: 500;
}
.details-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 1rem;
}
.details-card {
  background: white;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
}
.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.25rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #f1f5f9;
}
.card-header-left {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.card-icon {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background:
    linear-gradient(
      135deg,
      #dcfce7,
      #bbf7d0);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #16A34A;
}
.card-icon svg {
  width: 20px;
  height: 20px;
}
.card-title {
  font-size: 1rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0;
}
.card-edit-btn {
  background: none;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  color: #6b7280;
  border-radius: 8px;
  transition: all 0.15s;
}
.card-edit-btn:hover {
  background: #f3f4f6;
  color: #16A34A;
}
.card-edit-btn svg {
  width: 18px;
  height: 18px;
}
.info-list {
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
}
.info-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.info-label {
  font-size: 0.9rem;
  color: #64748b;
}
.info-value {
  font-size: 0.95rem;
  font-weight: 500;
  color: #1f2937;
}
.info-value.email {
  color: #16A34A;
}
.info-input {
  padding: 0.625rem 1rem;
  border: 1.5px solid #e2e8f0;
  border-radius: 10px;
  font-size: 0.9rem;
  font-family: inherit;
  text-align: right;
  width: 200px;
  background:
    linear-gradient(
      to bottom,
      #ffffff,
      #f8fafc);
  color: #1f2937;
  font-weight: 500;
  transition: all 0.2s ease;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
}
.info-input:hover {
  border-color: #cbd5e1;
  background:
    linear-gradient(
      to bottom,
      #ffffff,
      #f1f5f9);
}
.info-input:focus {
  outline: none;
  border-color: #22c55e;
  background: white;
  box-shadow: 0 0 0 4px rgba(34, 197, 94, 0.12), 0 2px 4px rgba(0, 0, 0, 0.05);
}
.info-input::placeholder {
  color: #94a3b8;
  font-weight: 400;
}
.info-input:disabled {
  background: #f1f5f9;
  color: #94a3b8;
  cursor: not-allowed;
  opacity: 0.6;
}
.info-input:disabled:hover {
  border-color: #e2e8f0;
  background: #f1f5f9;
}
.info-select {
  padding: 0.625rem 2.5rem 0.625rem 1rem;
  border: 1.5px solid #e2e8f0;
  border-radius: 10px;
  font-size: 0.9rem;
  font-family: inherit;
  width: 200px;
  background:
    linear-gradient(
      to bottom,
      #ffffff,
      #f8fafc);
  color: #1f2937;
  font-weight: 500;
  transition: all 0.2s ease;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2315803d' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 16px;
}
.info-select:hover {
  border-color: #22c55e;
  background-color: #f0fdf4;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2315803d' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
}
.info-select:focus {
  outline: none;
  border-color: #22c55e;
  background-color: white;
  box-shadow: 0 0 0 4px rgba(34, 197, 94, 0.12), 0 2px 4px rgba(0, 0, 0, 0.05);
}
.info-select option {
  padding: 0.75rem 1rem;
  background: white;
  color: #1f2937;
  font-weight: 500;
}
.info-select option:hover,
.info-select option:checked {
  background:
    linear-gradient(
      to right,
      #f0fdf4,
      #dcfce7);
  color: #16A34A;
}
.payments-card {
  background: white;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
}
.payments-card .card-header {
  margin-bottom: 1rem;
}
.payments-count {
  font-size: 0.85rem;
  color: #64748b;
  font-weight: 500;
}
.table-container {
  overflow-x: auto;
}
.payments-table {
  width: 100%;
  border-collapse: collapse;
}
.payments-table th {
  padding: 0.875rem 1rem;
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
  padding: 0.875rem 1rem;
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
  cursor: pointer;
  text-decoration: underline;
  transition: color 0.15s ease;
}
.payment-id.clickable:hover {
  color: #475569;
}
.td-client {
  min-width: 200px;
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
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: #16A34A;
  font-size: 0.875rem;
  flex-shrink: 0;
}
.client-info {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}
.client-name-link {
  text-decoration: none;
  color: #1f2937;
  font-weight: 600;
  font-size: 0.9375rem;
  transition: color 0.2s;
  cursor: pointer;
  display: inline-block;
}
.client-name-link:hover {
  color: #16A34A;
}
.client-phone {
  font-size: 0.8125rem;
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
.th-actions,
.td-actions {
  width: 60px;
  text-align: center;
}
.actions-cell {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
}
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 2rem;
  color: #94a3b8;
}
.empty-state svg {
  width: 48px;
  height: 48px;
  margin-bottom: 1rem;
}
.empty-state span {
  font-size: 0.9rem;
}
@media (max-width: 1200px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 768px) {
  .page-wrapper {
    margin: -1rem;
    padding: 1rem;
  }
  .profile-header-card {
    border-radius: 12px;
    margin-bottom: 1rem;
  }
  .profile-header-content {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 1.5rem 1rem;
    position: relative;
  }
  .avatar-wrapper {
    margin-bottom: 0.5rem;
  }
  .avatar-large {
    width: 80px;
    height: 80px;
    font-size: 1.5rem;
  }
  .profile-main-info {
    width: 100%;
    padding-right: 0;
    padding-top: 0.5rem;
  }
  .delete-client-btn {
    top: 1rem;
    right: 1rem;
  }
  .name-row {
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    padding-right: 0;
    margin-top: 0.5rem;
  }
  .profile-name {
    font-size: 1.25rem;
    word-break: break-word;
    padding-right: 0;
  }
  .profile-phone {
    font-size: 0.9rem;
    margin: 0.5rem 0;
  }
  .tags-row {
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
  }
  .tags-container {
    justify-content: center;
    width: 100%;
  }
  .comment-card,
  .details-card {
    border-radius: 12px;
    padding: 1.25rem 1rem;
  }
  .card-header {
    margin-bottom: 1rem;
  }
  .card-title {
    font-size: 1.125rem;
  }
  .info-list .info-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    padding: 0.75rem 0;
  }
  .info-label {
    min-width: auto;
    font-size: 0.875rem;
  }
  .info-value {
    font-size: 0.875rem;
  }
  .stats-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  .details-grid,
  .details-grid-general {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  .bonuses-table,
  .payments-table {
    display: none;
  }
  .mobile-bonuses-cards,
  .mobile-payments-cards {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
}
@media (min-width: 769px) {
  .mobile-bonuses-cards,
  .mobile-payments-cards {
    display: none;
  }
}
.mobile-bonuses-cards {
  display: none;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
}
.mobile-bonus-card {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  width: 100%;
}
.mobile-bonus-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}
.mobile-bonus-card-main {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex: 1;
}
.mobile-bonus-type {
  font-size: 0.875rem;
  font-weight: 600;
  color: #1f2937;
}
.mobile-bonus-amount {
  font-size: 1rem;
  font-weight: 700;
  color: #d97706;
}
.mobile-bonus-expand {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #64748b;
  transition: transform 0.2s;
}
.mobile-bonus-expand.expanded {
  transform: rotate(180deg);
}
.mobile-bonus-details {
  margin-top: 0.75rem;
  padding-top: 0.75rem;
  border-top: 1px solid #e5e7eb;
  display: none;
}
.mobile-bonus-details.expanded {
  display: block;
}
.mobile-bonus-detail-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
}
.mobile-bonus-detail-label {
  color: #64748b;
}
.mobile-bonus-detail-value {
  color: #1f2937;
  font-weight: 500;
}
.mobile-payment-card {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}
.mobile-payment-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}
.mobile-payment-card-main {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex: 1;
}
.mobile-payment-id {
  font-family: monospace;
  font-size: 0.875rem;
  font-weight: 600;
  color: #64748b;
}
.mobile-payment-amount {
  font-size: 1rem;
  font-weight: 700;
  color: #16A34A;
}
.mobile-payment-expand {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #64748b;
  transition: transform 0.2s;
}
.mobile-payment-expand.expanded {
  transform: rotate(180deg);
}
.mobile-payment-details {
  margin-top: 0.75rem;
  padding-top: 0.75rem;
  border-top: 1px solid #e5e7eb;
  display: none;
}
.mobile-payment-details.expanded {
  display: block;
}
.mobile-payment-detail-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
}
.mobile-payment-detail-label {
  color: #64748b;
}
.mobile-payment-detail-value {
  color: #1f2937;
  font-weight: 500;
}
.mobile-refund-btn {
  width: 100%;
  padding: 0.75rem;
  background: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 8px;
  color: #dc2626;
  font-weight: 600;
  font-size: 0.875rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
  transition: all 0.2s;
}
.mobile-refund-btn:hover {
  background: #fee2e2;
  border-color: #fca5a5;
}
.mobile-refund-btn svg {
  width: 16px;
  height: 16px;
}
.delete-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.2s ease;
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.delete-modal {
  background: white;
  border-radius: 16px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
  max-width: 420px;
  width: 90%;
  animation: slideUp 0.3s ease;
}
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.delete-modal-content {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.delete-modal-icon {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.25rem;
}
.delete-modal-icon.warning {
  background: #fef3c7;
  color: #d97706;
}
.delete-modal-icon.danger {
  background: #fee2e2;
  color: #dc2626;
}
.delete-modal-icon svg {
  width: 32px;
  height: 32px;
}
.delete-modal-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 0.75rem;
}
.delete-modal-description {
  font-size: 0.9rem;
  color: #6b7280;
  line-height: 1.6;
  margin: 0 0 1.5rem;
}
.delete-modal-description strong {
  color: #1f2937;
}
.confirm-word {
  color: #dc2626;
  background: #fee2e2;
  padding: 0.125rem 0.5rem;
  border-radius: 4px;
  font-family: monospace;
  font-size: 0.95rem;
}
.delete-confirm-input {
  width: 100%;
  padding: 0.875rem 1rem;
  border: 2px solid #e5e7eb;
  border-radius: 10px;
  font-size: 1rem;
  font-family: inherit;
  text-align: center;
  margin-bottom: 1.5rem;
  transition: all 0.2s ease;
}
.delete-confirm-input:focus {
  outline: none;
  border-color: #dc2626;
  box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
}
.delete-confirm-input::placeholder {
  color: #9ca3af;
}
.delete-modal-actions {
  display: flex;
  gap: 0.75rem;
  width: 100%;
}
.delete-modal-btn {
  flex: 1;
  padding: 0.875rem 1.5rem;
  border-radius: 10px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
}
.delete-modal-btn.cancel {
  background: #f3f4f6;
  color: #6b7280;
}
.delete-modal-btn.cancel:hover {
  background: #e5e7eb;
  color: #374151;
}
.delete-modal-btn.confirm {
  background: #fef3c7;
  color: #d97706;
}
.delete-modal-btn.confirm:hover {
  background: #fde68a;
  color: #b45309;
}
.delete-modal-btn.delete {
  background: #dc2626;
  color: white;
}
.delete-modal-btn.delete:hover:not(:disabled) {
  background: #b91c1c;
}
.delete-modal-btn.delete:disabled {
  background: #fca5a5;
  cursor: not-allowed;
}
/*# sourceMappingURL=profile-page.component.css.map */
`] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProfilePageComponent, { className: "ProfilePageComponent", filePath: "src/app/features/profile/pages/profile-page/profile-page.component.ts", lineNumber: 2994 });
})();
export {
  ProfilePageComponent
};
//# sourceMappingURL=chunk-DTI3PVV3.js.map
