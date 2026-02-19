import {
  PageHeaderService
} from "./chunk-3HAPV5CC.js";
import {
  ActivatedRoute,
  CommonModule,
  Component,
  RouterLink,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-OSQKJAMW.js";

// src/app/features/bonus-program/pages/reward-program-create-page/reward-program-create-page.component.ts
var RewardProgramCreatePageComponent = class _RewardProgramCreatePageComponent {
  type = "";
  uuid = "";
  typeLabel = "";
  route = inject(ActivatedRoute);
  pageHeaderService = inject(PageHeaderService);
  typeLabels = {
    welcome: "Welcome reward",
    birthday: "Birthday reward",
    referral: "Referral",
    cashback: "Cashback"
  };
  ngOnInit() {
    const segments = this.route.snapshot.url;
    this.type = segments.length >= 2 ? segments[1].path : "";
    this.uuid = this.route.snapshot.paramMap.get("uuid") ?? "";
    this.typeLabel = this.typeLabels[this.type] ?? this.type;
    this.pageHeaderService.setPageHeader(`Create ${this.typeLabel}`, [
      { label: "Home", route: "/home" },
      { label: "Reward Programs", route: "/bonus-program" },
      { label: `Create ${this.typeLabel}` }
    ]);
  }
  static \u0275fac = function RewardProgramCreatePageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RewardProgramCreatePageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RewardProgramCreatePageComponent, selectors: [["app-reward-program-create-page"]], decls: 17, vars: 2, consts: [[1, "page-wrapper"], [1, "in-dev-card"], [1, "in-dev-icon"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5"], ["d", "M12 6V4M12 6c-2.5 0-4.5 2-4.5 4.5S9.5 15 12 15s4.5-2 4.5-4.5S14.5 6 12 6z"], ["d", "M19.4 15a7.5 7.5 0 01-14.8 0"], [1, "in-dev-title"], [1, "in-dev-desc"], [1, "in-dev-meta"], ["routerLink", "/bonus-program", 1, "in-dev-back"]], template: function RewardProgramCreatePageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(3, "svg", 3);
      \u0275\u0275element(4, "path", 4)(5, "path", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(6, "h1", 6);
      \u0275\u0275text(7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p", 7);
      \u0275\u0275text(9, " This program type is not yet available. The creation flow and steps are currently in development. Only ");
      \u0275\u0275elementStart(10, "strong");
      \u0275\u0275text(11, "Cashback");
      \u0275\u0275elementEnd();
      \u0275\u0275text(12, " programs can be created at this time. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "p", 8);
      \u0275\u0275text(14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "a", 9);
      \u0275\u0275text(16, "\u2190 Back to Reward Programs");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1("", ctx.typeLabel, " \u2014 In development");
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1("Draft UUID: ", ctx.uuid, "");
    }
  }, dependencies: [CommonModule, RouterLink], styles: ["\n\n.page-wrapper[_ngcontent-%COMP%] {\n  padding: 2rem;\n  min-height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.in-dev-card[_ngcontent-%COMP%] {\n  max-width: 480px;\n  padding: 2rem;\n  text-align: center;\n  background: #ffffff;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.in-dev-icon[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  margin: 0 auto 1.25rem;\n  background: #fef3c7;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #d97706;\n}\n.in-dev-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n}\n.in-dev-title[_ngcontent-%COMP%] {\n  font-size: 1.35rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 0.75rem 0;\n}\n.in-dev-desc[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  color: #64748b;\n  line-height: 1.55;\n  margin: 0 0 1rem 0;\n}\n.in-dev-meta[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #94a3b8;\n  font-family: monospace;\n  margin: 0 0 1.25rem 0;\n  word-break: break-all;\n}\n.in-dev-back[_ngcontent-%COMP%] {\n  display: inline-block;\n  color: #16A34A;\n  font-weight: 600;\n  text-decoration: none;\n  font-size: 0.9rem;\n  transition: color 0.15s;\n}\n.in-dev-back[_ngcontent-%COMP%]:hover {\n  color: #15803d;\n}\n/*# sourceMappingURL=reward-program-create-page.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RewardProgramCreatePageComponent, [{
    type: Component,
    args: [{ selector: "app-reward-program-create-page", standalone: true, imports: [CommonModule, RouterLink], template: `
    <div class="page-wrapper">
      <div class="in-dev-card">
        <div class="in-dev-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M12 6V4M12 6c-2.5 0-4.5 2-4.5 4.5S9.5 15 12 15s4.5-2 4.5-4.5S14.5 6 12 6z"/>
            <path d="M19.4 15a7.5 7.5 0 01-14.8 0"/>
          </svg>
        </div>
        <h1 class="in-dev-title">{{ typeLabel }} \u2014 In development</h1>
        <p class="in-dev-desc">
          This program type is not yet available. The creation flow and steps are currently in development.
          Only <strong>Cashback</strong> programs can be created at this time.
        </p>
        <p class="in-dev-meta">Draft UUID: {{ uuid }}</p>
        <a routerLink="/bonus-program" class="in-dev-back">\u2190 Back to Reward Programs</a>
      </div>
    </div>
  `, styles: ["/* angular:styles/component:css;bde82a2e321216793cb348f16f6412223cb0dbdcbc5d9834bfc55869a59d8b6f;/Users/baglan/repo/westwood/westwood-frontend/src/app/features/bonus-program/pages/reward-program-create-page/reward-program-create-page.component.ts */\n.page-wrapper {\n  padding: 2rem;\n  min-height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.in-dev-card {\n  max-width: 480px;\n  padding: 2rem;\n  text-align: center;\n  background: #ffffff;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.in-dev-icon {\n  width: 64px;\n  height: 64px;\n  margin: 0 auto 1.25rem;\n  background: #fef3c7;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #d97706;\n}\n.in-dev-icon svg {\n  width: 32px;\n  height: 32px;\n}\n.in-dev-title {\n  font-size: 1.35rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 0.75rem 0;\n}\n.in-dev-desc {\n  font-size: 0.95rem;\n  color: #64748b;\n  line-height: 1.55;\n  margin: 0 0 1rem 0;\n}\n.in-dev-meta {\n  font-size: 0.8rem;\n  color: #94a3b8;\n  font-family: monospace;\n  margin: 0 0 1.25rem 0;\n  word-break: break-all;\n}\n.in-dev-back {\n  display: inline-block;\n  color: #16A34A;\n  font-weight: 600;\n  text-decoration: none;\n  font-size: 0.9rem;\n  transition: color 0.15s;\n}\n.in-dev-back:hover {\n  color: #15803d;\n}\n/*# sourceMappingURL=reward-program-create-page.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RewardProgramCreatePageComponent, { className: "RewardProgramCreatePageComponent", filePath: "src/app/features/bonus-program/pages/reward-program-create-page/reward-program-create-page.component.ts", lineNumber: 53 });
})();
export {
  RewardProgramCreatePageComponent
};
//# sourceMappingURL=chunk-TK6Y3SMS.js.map
