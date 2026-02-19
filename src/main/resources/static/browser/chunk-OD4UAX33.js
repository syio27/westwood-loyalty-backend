import {
  ModalComponent
} from "./chunk-WG54KTTL.js";
import {
  ButtonComponent
} from "./chunk-2XLG7XQP.js";
import {
  CommonModule,
  Component,
  EventEmitter,
  Input,
  NgIf,
  Output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-OSQKJAMW.js";

// src/app/shared/components/dialog/dialog.component.ts
var _c0 = ["*"];
function DialogComponent_div_0_p_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.message);
  }
}
function DialogComponent_div_0_div_5_app_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-button", 9);
    \u0275\u0275listener("onClick", function DialogComponent_div_0_div_5_app_button_1_Template_app_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onCancel());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.cancelLabel, " ");
  }
}
function DialogComponent_div_0_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275template(1, DialogComponent_div_0_div_5_app_button_1_Template, 2, 1, "app-button", 7);
    \u0275\u0275elementStart(2, "app-button", 8);
    \u0275\u0275listener("onClick", function DialogComponent_div_0_div_5_Template_app_button_onClick_2_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onConfirm());
    });
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.cancelLabel);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.confirmLabel, " ");
  }
}
function DialogComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "app-modal", 2);
    \u0275\u0275listener("closed", function DialogComponent_div_0_Template_app_modal_closed_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClose());
    });
    \u0275\u0275elementStart(2, "div", 3);
    \u0275\u0275template(3, DialogComponent_div_0_p_3_Template, 2, 1, "p", 4);
    \u0275\u0275projection(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, DialogComponent_div_0_div_5_Template, 4, 2, "div", 5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("visible", ctx_r1.visible)("title", ctx_r1.title)("showCloseButton", ctx_r1.dismissible)("showFooter", ctx_r1.showActions)("size", ctx_r1.size);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.message);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.showActions);
  }
}
var DialogComponent = class _DialogComponent {
  visible = false;
  title = "";
  message = "";
  confirmLabel = "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C";
  cancelLabel = "\u041E\u0442\u043C\u0435\u043D\u0430";
  showActions = true;
  dismissible = true;
  size = "medium";
  confirmed = new EventEmitter();
  cancelled = new EventEmitter();
  closed = new EventEmitter();
  onConfirm() {
    this.confirmed.emit();
  }
  onCancel() {
    this.cancelled.emit();
    this.onClose();
  }
  onClose() {
    this.visible = false;
    this.closed.emit();
  }
  static \u0275fac = function DialogComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DialogComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DialogComponent, selectors: [["app-dialog"]], inputs: { visible: "visible", title: "title", message: "message", confirmLabel: "confirmLabel", cancelLabel: "cancelLabel", showActions: "showActions", dismissible: "dismissible", size: "size" }, outputs: { confirmed: "confirmed", cancelled: "cancelled", closed: "closed" }, ngContentSelectors: _c0, decls: 1, vars: 1, consts: [["class", "dialog-wrapper", 4, "ngIf"], [1, "dialog-wrapper"], [3, "closed", "visible", "title", "showCloseButton", "showFooter", "size"], [1, "dialog-content"], [4, "ngIf"], ["modalFooter", "", 4, "ngIf"], ["modalFooter", ""], ["buttonType", "ghost", 3, "onClick", 4, "ngIf"], ["buttonType", "primary", 3, "onClick"], ["buttonType", "ghost", 3, "onClick"]], template: function DialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275template(0, DialogComponent_div_0_Template, 6, 7, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.visible);
    }
  }, dependencies: [CommonModule, NgIf, ModalComponent, ButtonComponent], styles: ["\n\n.dialog-wrapper[_ngcontent-%COMP%]     .modal-overlay {\n  z-index: 10001 !important;\n  background-color: rgba(0, 0, 0, 0.6) !important;\n}\n.dialog-content[_ngcontent-%COMP%] {\n  color: #1a202c;\n  line-height: 1.6;\n}\n.dialog-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n/*# sourceMappingURL=dialog.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DialogComponent, [{
    type: Component,
    args: [{ selector: "app-dialog", standalone: true, imports: [CommonModule, ModalComponent, ButtonComponent], template: `
    <div class="dialog-wrapper" *ngIf="visible">
      <app-modal
        [visible]="visible"
        [title]="title"
        [showCloseButton]="dismissible"
        [showFooter]="showActions"
        [size]="size"
        (closed)="onClose()">
        <div class="dialog-content">
          <p *ngIf="message">{{ message }}</p>
          <ng-content></ng-content>
        </div>
        <div modalFooter *ngIf="showActions">
          <app-button
            *ngIf="cancelLabel"
            buttonType="ghost"
            (onClick)="onCancel()">
            {{ cancelLabel }}
          </app-button>
          <app-button
            buttonType="primary"
            (onClick)="onConfirm()">
            {{ confirmLabel }}
          </app-button>
        </div>
      </app-modal>
    </div>
  `, styles: ["/* angular:styles/component:css;8bc9f9a9fff9b619b12650dada6551978d3770c287e955dbc48430e6b3367bbd;/Users/baglan/repo/westwood/westwood-frontend/src/app/shared/components/dialog/dialog.component.ts */\n.dialog-wrapper ::ng-deep .modal-overlay {\n  z-index: 10001 !important;\n  background-color: rgba(0, 0, 0, 0.6) !important;\n}\n.dialog-content {\n  color: #1a202c;\n  line-height: 1.6;\n}\n.dialog-content p {\n  margin: 0;\n}\n/*# sourceMappingURL=dialog.component.css.map */\n"] }]
  }], null, { visible: [{
    type: Input
  }], title: [{
    type: Input
  }], message: [{
    type: Input
  }], confirmLabel: [{
    type: Input
  }], cancelLabel: [{
    type: Input
  }], showActions: [{
    type: Input
  }], dismissible: [{
    type: Input
  }], size: [{
    type: Input
  }], confirmed: [{
    type: Output
  }], cancelled: [{
    type: Output
  }], closed: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DialogComponent, { className: "DialogComponent", filePath: "src/app/shared/components/dialog/dialog.component.ts", lineNumber: 55 });
})();

export {
  DialogComponent
};
//# sourceMappingURL=chunk-OD4UAX33.js.map
