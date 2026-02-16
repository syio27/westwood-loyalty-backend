import {
  CommonModule,
  Component,
  Input,
  NgIf,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-LQF2QQXA.js";

// src/app/shared/components/badge/badge.component.ts
var _c0 = ["*"];
function BadgeComponent_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 4);
  }
}
function BadgeComponent_span_2__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 7);
    \u0275\u0275element(1, "path", 8);
    \u0275\u0275elementEnd();
  }
}
function BadgeComponent_span_2__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 7);
    \u0275\u0275element(1, "circle", 9)(2, "path", 10);
    \u0275\u0275elementEnd();
  }
}
function BadgeComponent_span_2__svg_svg_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 7);
    \u0275\u0275element(1, "path", 11);
    \u0275\u0275elementEnd();
  }
}
function BadgeComponent_span_2__svg_svg_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 7);
    \u0275\u0275element(1, "path", 12);
    \u0275\u0275elementEnd();
  }
}
function BadgeComponent_span_2__svg_svg_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 7);
    \u0275\u0275element(1, "circle", 9)(2, "path", 13);
    \u0275\u0275elementEnd();
  }
}
function BadgeComponent_span_2__svg_svg_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 7);
    \u0275\u0275element(1, "path", 14);
    \u0275\u0275elementEnd();
  }
}
function BadgeComponent_span_2__svg_svg_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 7);
    \u0275\u0275element(1, "rect", 15)(2, "circle", 16)(3, "path", 17);
    \u0275\u0275elementEnd();
  }
}
function BadgeComponent_span_2__svg_svg_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 7);
    \u0275\u0275element(1, "rect", 18)(2, "path", 19)(3, "circle", 20)(4, "circle", 21);
    \u0275\u0275elementEnd();
  }
}
function BadgeComponent_span_2__svg_svg_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 7);
    \u0275\u0275element(1, "path", 22);
    \u0275\u0275elementEnd();
  }
}
function BadgeComponent_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 5);
    \u0275\u0275template(1, BadgeComponent_span_2__svg_svg_1_Template, 2, 0, "svg", 6)(2, BadgeComponent_span_2__svg_svg_2_Template, 3, 0, "svg", 6)(3, BadgeComponent_span_2__svg_svg_3_Template, 2, 0, "svg", 6)(4, BadgeComponent_span_2__svg_svg_4_Template, 2, 0, "svg", 6)(5, BadgeComponent_span_2__svg_svg_5_Template, 3, 0, "svg", 6)(6, BadgeComponent_span_2__svg_svg_6_Template, 2, 0, "svg", 6)(7, BadgeComponent_span_2__svg_svg_7_Template, 4, 0, "svg", 6)(8, BadgeComponent_span_2__svg_svg_8_Template, 5, 0, "svg", 6)(9, BadgeComponent_span_2__svg_svg_9_Template, 2, 0, "svg", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.getDisplayIcon() === "star");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.getDisplayIcon() === "check");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.getDisplayIcon() === "refund");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.getDisplayIcon() === "payment");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.getDisplayIcon() === "expired");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.getDisplayIcon() === "used");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.getDisplayIcon() === "cash");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.getDisplayIcon() === "card");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.getDisplayIcon() === "transfer");
  }
}
function BadgeComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getPaymentMethodLabel(), " ");
  }
}
function BadgeComponent_ng_content_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0, 0, ["*ngIf", "badgeType !== 'paymentMethod' || !paymentMethod"]);
  }
}
var BadgeComponent = class _BadgeComponent {
  badgeType = "primary";
  size = "medium";
  dot = false;
  icon = null;
  paymentMethod = null;
  // For payment method badges
  getBadgeClasses() {
    return `${this.badgeType} ${this.size}`;
  }
  hasIcon() {
    return !!this.icon || !!this.getPaymentMethodIcon();
  }
  getDisplayIcon() {
    if (this.icon)
      return this.icon;
    return this.getPaymentMethodIcon();
  }
  getPaymentMethodIcon() {
    if (this.paymentMethod) {
      const method = this.paymentMethod.toLowerCase();
      if (method === "cash")
        return "cash";
      if (method === "card")
        return "card";
      if (method === "transfer")
        return "transfer";
    }
    return null;
  }
  getPaymentMethodLabel() {
    if (this.paymentMethod) {
      const method = this.paymentMethod.toLowerCase();
      if (method === "cash")
        return "\u041D\u0430\u043B\u0438\u0447\u043D\u044B\u0435";
      if (method === "card")
        return "\u041A\u0430\u0440\u0442\u0430";
      if (method === "transfer")
        return "\u041F\u0435\u0440\u0435\u0432\u043E\u0434";
    }
    return "";
  }
  static \u0275fac = function BadgeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BadgeComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BadgeComponent, selectors: [["app-badge"]], inputs: { badgeType: "badgeType", size: "size", dot: "dot", icon: "icon", paymentMethod: "paymentMethod" }, ngContentSelectors: _c0, decls: 5, vars: 10, consts: [[1, "badge"], ["class", "badge-dot", 4, "ngIf"], ["class", "badge-icon", 4, "ngIf"], [4, "ngIf"], [1, "badge-dot"], [1, "badge-icon"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", 4, "ngIf"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none"], ["d", "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z", "fill", "currentColor"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "1.5"], ["d", "M8 12l3 3 5-6", "stroke", "currentColor", "stroke-width", "1.5"], ["d", "M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6", "stroke", "currentColor", "stroke-width", "1.5"], ["d", "M12 6v6l4 2", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round"], ["d", "M20 6L9 17l-5-5", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["x", "2", "y", "7", "width", "20", "height", "14", "rx", "2", "stroke", "currentColor", "stroke-width", "1.5"], ["cx", "12", "cy", "14", "r", "3", "stroke", "currentColor", "stroke-width", "1.5"], ["d", "M7 5v2M17 5v2", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round"], ["x", "2", "y", "5", "width", "20", "height", "14", "rx", "2", "stroke", "currentColor", "stroke-width", "1.5"], ["d", "M2 10h20", "stroke", "currentColor", "stroke-width", "1.5"], ["cx", "7", "cy", "15", "r", "1", "fill", "currentColor"], ["cx", "10", "cy", "15", "r", "1", "fill", "currentColor"], ["d", "M7 16l-4-4m0 0l4-4m-4 4h18M17 8l4 4m0 0l-4 4m4-4H3", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"]], template: function BadgeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275elementStart(0, "span", 0);
      \u0275\u0275template(1, BadgeComponent_span_1_Template, 1, 0, "span", 1)(2, BadgeComponent_span_2_Template, 10, 9, "span", 2)(3, BadgeComponent_ng_container_3_Template, 2, 1, "ng-container", 3)(4, BadgeComponent_ng_content_4_Template, 1, 0, "ng-content", 3);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classMap(ctx.getBadgeClasses());
      \u0275\u0275classProp("dot", ctx.dot)("with-icon", ctx.hasIcon());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.dot);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasIcon());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.badgeType === "paymentMethod" && ctx.paymentMethod);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.badgeType !== "paymentMethod" || !ctx.paymentMethod);
    }
  }, dependencies: [CommonModule, NgIf], styles: ["\n\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  padding: 0.2rem 0.6rem;\n  border-radius: 20px;\n  font-weight: 500;\n  font-size: 0.8rem;\n  line-height: 1.5;\n  white-space: nowrap;\n}\n.badge.small[_ngcontent-%COMP%] {\n  padding: 0.15rem 0.5rem;\n  font-size: 0.7rem;\n}\n.badge.large[_ngcontent-%COMP%] {\n  padding: 0.3rem 0.8rem;\n  font-size: 0.9rem;\n}\n.badge.medium[_ngcontent-%COMP%] {\n  padding: 0.2rem 0.6rem;\n  font-size: 0.8rem;\n}\n.badge.primary[_ngcontent-%COMP%] {\n  background-color: #007bff;\n  color: #ffffff;\n}\n.badge.secondary[_ngcontent-%COMP%] {\n  background-color: #6c757d;\n  color: #ffffff;\n}\n.badge.success[_ngcontent-%COMP%] {\n  background-color: #28a745;\n  color: #ffffff;\n}\n.badge.danger[_ngcontent-%COMP%] {\n  background-color: #dc3545;\n  color: #ffffff;\n}\n.badge.warning[_ngcontent-%COMP%] {\n  background-color: #ffc107;\n  color: #1a202c;\n}\n.badge.info[_ngcontent-%COMP%] {\n  background-color: #17a2b8;\n  color: #ffffff;\n}\n.badge.payment[_ngcontent-%COMP%] {\n  background-color: #dcfce7;\n  color: #16A34A;\n}\n.badge.refund[_ngcontent-%COMP%] {\n  background-color: #fee2e2;\n  color: #dc2626;\n}\n.badge.bonusGranted[_ngcontent-%COMP%] {\n  background-color: #fef3c7;\n  color: #d97706;\n}\n.badge.bonusUsed[_ngcontent-%COMP%] {\n  background-color: #fce7f3;\n  color: #db2777;\n}\n.badge.bonusExpired[_ngcontent-%COMP%] {\n  background-color: #f3f4f6;\n  color: #64748b;\n}\n.badge.paymentMethod[_ngcontent-%COMP%] {\n  background-color: #dcfce7;\n  color: #16A34A;\n}\n.badge.dot[_ngcontent-%COMP%] {\n  padding-left: 0.375rem;\n}\n.badge.with-icon[_ngcontent-%COMP%] {\n  padding-left: 0.5rem;\n}\n.badge-icon[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  margin-right: 0.25rem;\n}\n.badge-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  display: block;\n  flex-shrink: 0;\n}\n.badge.large[_ngcontent-%COMP%]   .badge-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n.badge.small[_ngcontent-%COMP%]   .badge-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n}\n.badge-dot[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background-color: currentColor;\n}\n.badge.large[_ngcontent-%COMP%]   .badge-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n}\n.badge.small[_ngcontent-%COMP%]   .badge-dot[_ngcontent-%COMP%] {\n  width: 4px;\n  height: 4px;\n}\n/*# sourceMappingURL=badge.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BadgeComponent, [{
    type: Component,
    args: [{ selector: "app-badge", standalone: true, imports: [CommonModule], template: `
    <span class="badge" [class]="getBadgeClasses()" [class.dot]="dot" [class.with-icon]="hasIcon()">
      <span *ngIf="dot" class="badge-dot"></span>
      <span *ngIf="hasIcon()" class="badge-icon">
        <svg *ngIf="getDisplayIcon() === 'star'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor"/>
        </svg>
        <svg *ngIf="getDisplayIcon() === 'check'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"/>
          <path d="M8 12l3 3 5-6" stroke="currentColor" stroke-width="1.5"/>
        </svg>
        <svg *ngIf="getDisplayIcon() === 'refund'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
          <path d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <svg *ngIf="getDisplayIcon() === 'payment'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" stroke="currentColor" stroke-width="1.5"/>
        </svg>
        <svg *ngIf="getDisplayIcon() === 'expired'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"/>
          <path d="M12 6v6l4 2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
        <svg *ngIf="getDisplayIcon() === 'used'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
          <path d="M20 6L9 17l-5-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <svg *ngIf="getDisplayIcon() === 'cash'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
          <rect x="2" y="7" width="20" height="14" rx="2" stroke="currentColor" stroke-width="1.5"/>
          <circle cx="12" cy="14" r="3" stroke="currentColor" stroke-width="1.5"/>
          <path d="M7 5v2M17 5v2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
        <svg *ngIf="getDisplayIcon() === 'card'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
          <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" stroke-width="1.5"/>
          <path d="M2 10h20" stroke="currentColor" stroke-width="1.5"/>
          <circle cx="7" cy="15" r="1" fill="currentColor"/>
          <circle cx="10" cy="15" r="1" fill="currentColor"/>
        </svg>
        <svg *ngIf="getDisplayIcon() === 'transfer'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
          <path d="M7 16l-4-4m0 0l4-4m-4 4h18M17 8l4 4m0 0l-4 4m4-4H3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span>
      <ng-container *ngIf="badgeType === 'paymentMethod' && paymentMethod">
        {{ getPaymentMethodLabel() }}
      </ng-container>
      <ng-content *ngIf="badgeType !== 'paymentMethod' || !paymentMethod"></ng-content>
    </span>
  `, styles: ["/* angular:styles/component:css;708bf5f8a0afdfaf0b841113649a45f99cea93abf440a56935c04d5119325507;/Users/baglan/repo/westwood/westwood-frontend/src/app/shared/components/badge/badge.component.ts */\n.badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  padding: 0.2rem 0.6rem;\n  border-radius: 20px;\n  font-weight: 500;\n  font-size: 0.8rem;\n  line-height: 1.5;\n  white-space: nowrap;\n}\n.badge.small {\n  padding: 0.15rem 0.5rem;\n  font-size: 0.7rem;\n}\n.badge.large {\n  padding: 0.3rem 0.8rem;\n  font-size: 0.9rem;\n}\n.badge.medium {\n  padding: 0.2rem 0.6rem;\n  font-size: 0.8rem;\n}\n.badge.primary {\n  background-color: #007bff;\n  color: #ffffff;\n}\n.badge.secondary {\n  background-color: #6c757d;\n  color: #ffffff;\n}\n.badge.success {\n  background-color: #28a745;\n  color: #ffffff;\n}\n.badge.danger {\n  background-color: #dc3545;\n  color: #ffffff;\n}\n.badge.warning {\n  background-color: #ffc107;\n  color: #1a202c;\n}\n.badge.info {\n  background-color: #17a2b8;\n  color: #ffffff;\n}\n.badge.payment {\n  background-color: #dcfce7;\n  color: #16A34A;\n}\n.badge.refund {\n  background-color: #fee2e2;\n  color: #dc2626;\n}\n.badge.bonusGranted {\n  background-color: #fef3c7;\n  color: #d97706;\n}\n.badge.bonusUsed {\n  background-color: #fce7f3;\n  color: #db2777;\n}\n.badge.bonusExpired {\n  background-color: #f3f4f6;\n  color: #64748b;\n}\n.badge.paymentMethod {\n  background-color: #dcfce7;\n  color: #16A34A;\n}\n.badge.dot {\n  padding-left: 0.375rem;\n}\n.badge.with-icon {\n  padding-left: 0.5rem;\n}\n.badge-icon {\n  display: inline-flex;\n  align-items: center;\n  margin-right: 0.25rem;\n}\n.badge-icon svg {\n  width: 14px;\n  height: 14px;\n  display: block;\n  flex-shrink: 0;\n}\n.badge.large .badge-icon svg {\n  width: 16px;\n  height: 16px;\n}\n.badge.small .badge-icon svg {\n  width: 12px;\n  height: 12px;\n}\n.badge-dot {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background-color: currentColor;\n}\n.badge.large .badge-dot {\n  width: 8px;\n  height: 8px;\n}\n.badge.small .badge-dot {\n  width: 4px;\n  height: 4px;\n}\n/*# sourceMappingURL=badge.component.css.map */\n"] }]
  }], null, { badgeType: [{
    type: Input
  }], size: [{
    type: Input
  }], dot: [{
    type: Input
  }], icon: [{
    type: Input
  }], paymentMethod: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BadgeComponent, { className: "BadgeComponent", filePath: "src/app/shared/components/badge/badge.component.ts", lineNumber: 193 });
})();

export {
  BadgeComponent
};
//# sourceMappingURL=chunk-F7XK3MPR.js.map
