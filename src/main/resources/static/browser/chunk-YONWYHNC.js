import {
  PageHeaderService
} from "./chunk-TXI2S3RM.js";
import {
  environment
} from "./chunk-6FFMNYG3.js";
import {
  CommonModule,
  Component,
  HttpClient,
  Injectable,
  NgForOf,
  NgSwitch,
  NgSwitchCase,
  Router,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-LQF2QQXA.js";

// src/app/core/services/reward-programs.service.ts
var API = `${environment.apiUrl}/reward-programs`;
var RewardProgramsService = class _RewardProgramsService {
  http;
  constructor(http) {
    this.http = http;
  }
  getSlots() {
    return this.http.get(`${API}/slots`);
  }
  createDraft(type) {
    return this.http.post(`${API}/draft`, { type });
  }
  static \u0275fac = function RewardProgramsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RewardProgramsService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RewardProgramsService, factory: _RewardProgramsService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RewardProgramsService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/features/bonus-program/pages/program-types-page/program-types-page.component.ts
function ProgramTypesPageComponent_article_8__svg_svg_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 22);
    \u0275\u0275element(1, "rect", 23)(2, "path", 24)(3, "path", 25);
    \u0275\u0275elementEnd();
  }
}
function ProgramTypesPageComponent_article_8__svg_svg_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 22);
    \u0275\u0275element(1, "path", 26)(2, "rect", 27)(3, "path", 28)(4, "path", 29)(5, "path", 30);
    \u0275\u0275elementEnd();
  }
}
function ProgramTypesPageComponent_article_8__svg_svg_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 22);
    \u0275\u0275element(1, "circle", 31)(2, "circle", 32)(3, "circle", 33)(4, "path", 34);
    \u0275\u0275elementEnd();
  }
}
function ProgramTypesPageComponent_article_8__svg_svg_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 22);
    \u0275\u0275element(1, "circle", 35)(2, "circle", 36)(3, "path", 37);
    \u0275\u0275elementEnd();
  }
}
function ProgramTypesPageComponent_article_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 10)(1, "div", 11)(2, "div", 12);
    \u0275\u0275elementContainerStart(3, 13);
    \u0275\u0275template(4, ProgramTypesPageComponent_article_8__svg_svg_4_Template, 4, 0, "svg", 14)(5, ProgramTypesPageComponent_article_8__svg_svg_5_Template, 6, 0, "svg", 14)(6, ProgramTypesPageComponent_article_8__svg_svg_6_Template, 5, 0, "svg", 14)(7, ProgramTypesPageComponent_article_8__svg_svg_7_Template, 4, 0, "svg", 14);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 15)(9, "h3", 16);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 17);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 18)(14, "button", 19);
    \u0275\u0275listener("click", function ProgramTypesPageComponent_article_8_Template_button_click_14_listener() {
      const card_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onCreate(card_r2));
    });
    \u0275\u0275text(15, " Create ");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(16, "svg", 20);
    \u0275\u0275element(17, "path", 21);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const card_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("ngSwitch", card_r2.icon);
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "welcome");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "gift");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "referral");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "percent");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(card_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(card_r2.description);
  }
}
var PROGRAM_TYPES = [
  { id: "welcome", title: "Welcome reward", description: "Fixed bonus after the first purchase.", section: "Acquisition", icon: "welcome" },
  { id: "birthday", title: "Birthday reward", description: "Bonus to customers on their birthday.", section: "Events", icon: "gift" },
  { id: "referral", title: "Referral", description: "Rewards for successful client referrals.", section: "Growth", icon: "referral" },
  { id: "cashback", title: "Cashback", description: "Percentage cashback on each payment.", section: "Growth", icon: "percent" }
];
var ProgramTypesPageComponent = class _ProgramTypesPageComponent {
  pageHeaderService = inject(PageHeaderService);
  router = inject(Router);
  rewardProgramsService = inject(RewardProgramsService);
  PROGRAM_TYPES = PROGRAM_TYPES;
  ngOnInit() {
    this.pageHeaderService.setPageHeader("Create Program", [
      { label: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F", route: "/home" },
      { label: "Reward Programs", route: "/bonus-program" },
      { label: "Reward Program types" }
    ]);
  }
  onCreate(card) {
    const type = this.toRewardProgramType(card.id);
    this.rewardProgramsService.createDraft(type).subscribe({
      next: (res) => {
        this.router.navigate(["/bonus-program", "create", res.uuid]);
      }
    });
  }
  toRewardProgramType(id) {
    switch (id) {
      case "welcome":
        return "WELCOME";
      case "birthday":
        return "BIRTHDAY";
      case "referral":
        return "REFERRAL";
      case "cashback":
      default:
        return "CASHBACK";
    }
  }
  static \u0275fac = function ProgramTypesPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProgramTypesPageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProgramTypesPageComponent, selectors: [["app-program-types-page"]], decls: 14, vars: 1, consts: [[1, "page-wrapper"], [1, "content-layout"], [1, "types-section"], [1, "page-title"], [1, "page-subtitle"], [1, "types-grid"], ["class", "type-card", 4, "ngFor", "ngForOf"], [1, "templates-sidebar"], [1, "templates-title"], [1, "templates-subtitle"], [1, "type-card"], [1, "type-card-header"], [1, "type-card-icon"], [3, "ngSwitch"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5", 4, "ngSwitchCase"], [1, "type-card-body"], [1, "type-card-title"], [1, "type-card-desc"], [1, "type-card-footer"], ["type", "button", 1, "btn-create", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "btn-create-arrow"], ["d", "M9 18l6-6-6-6"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5"], ["x", "3", "y", "4", "width", "18", "height", "18", "rx", "2"], ["d", "M3 10h18"], ["d", "M7 4v4M17 4v4"], ["d", "M20 12v9H4v-9"], ["x", "2", "y", "7", "width", "20", "height", "5", "rx", "1"], ["d", "M12 22V7"], ["d", "M12 7c-2-2-4-2.5-4-4.5a2 2 0 0 1 4 0c0 1.5-2 2-4 4.5"], ["d", "M12 7c2-2 4-2.5 4-4.5a2 2 0 0 0-4 0c0 1.5 2 2 4 4.5"], ["cx", "18", "cy", "5", "r", "2.5"], ["cx", "6", "cy", "12", "r", "2.5"], ["cx", "18", "cy", "19", "r", "2.5"], ["d", "M8.5 13.5l7 4M15.5 6.5l-7 4"], ["cx", "9", "cy", "9", "r", "2"], ["cx", "15", "cy", "15", "r", "2"], ["d", "M5 19L19 5"]], template: function ProgramTypesPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "section", 2)(3, "h2", 3);
      \u0275\u0275text(4, "Reward Program types");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 4);
      \u0275\u0275text(6, "Choose what kind of reward program you want to configure.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 5);
      \u0275\u0275template(8, ProgramTypesPageComponent_article_8_Template, 18, 7, "article", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "aside", 7)(10, "h3", 8);
      \u0275\u0275text(11, "Reward Program templates");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "p", 9);
      \u0275\u0275text(13, "Start quickly from a pre-configured template (coming soon).");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("ngForOf", ctx.PROGRAM_TYPES);
    }
  }, dependencies: [CommonModule, NgForOf, NgSwitch, NgSwitchCase], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n}\n.page-wrapper[_ngcontent-%COMP%] {\n  min-height: 100%;\n  margin: -2rem;\n  padding: 2rem;\n  background: #f8fafc;\n}\n.content-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) 280px;\n  gap: 1.5rem;\n  align-items: flex-start;\n}\n.types-section[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n  padding: 1.75rem 2rem 2rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 700;\n  margin: 0 0 0.25rem 0;\n  color: #0f172a;\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #64748b;\n  margin: 0 0 1.5rem 0;\n}\n.types-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  gap: 1.5rem;\n}\n.type-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  padding: 2rem 2rem 1.5rem;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n  background: #ffffff;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);\n}\n.type-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  margin-bottom: 0.25rem;\n}\n.type-card-icon[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: 14px;\n  background: #e0f2fe;\n  color: #0284c7;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.type-card-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n}\n.type-card-body[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.type-card-title[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 0.35rem 0;\n}\n.type-card-desc[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  color: #64748b;\n  margin: 0;\n  line-height: 1.5;\n}\n.type-card-footer[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.btn-create[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  padding: 0.6rem 1.25rem;\n  border-radius: 8px;\n  border: none;\n  background: #16A34A;\n  color: white;\n  font-size: 0.95rem;\n  font-weight: 600;\n  cursor: pointer;\n}\n.btn-create[_ngcontent-%COMP%]:hover {\n  background: #15803d;\n}\n.btn-create-arrow[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n}\n.templates-sidebar[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n}\n.templates-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  margin: 0 0 0.5rem 0;\n  color: #0f172a;\n}\n.templates-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #64748b;\n  margin: 0;\n}\n@media (max-width: 900px) {\n  .content-layout[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n  }\n  .templates-sidebar[_ngcontent-%COMP%] {\n    order: -1;\n  }\n}\n/*# sourceMappingURL=program-types-page.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProgramTypesPageComponent, [{
    type: Component,
    args: [{ selector: "app-program-types-page", standalone: true, imports: [CommonModule], template: `
    <div class="page-wrapper">
      <div class="content-layout">
        <!-- Left: Reward Program types -->
        <section class="types-section">
          <h2 class="page-title">Reward Program types</h2>
          <p class="page-subtitle">Choose what kind of reward program you want to configure.</p>

          <div class="types-grid">
            <article *ngFor="let card of PROGRAM_TYPES" class="type-card">
              <div class="type-card-header">
                <div class="type-card-icon">
                  <ng-container [ngSwitch]="card.icon">
                    <svg *ngSwitchCase="'welcome'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M3 10h18"/><path d="M7 4v4M17 4v4"/></svg>
                    <svg *ngSwitchCase="'gift'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20 12v9H4v-9"/><rect x="2" y="7" width="20" height="5" rx="1"/><path d="M12 22V7"/><path d="M12 7c-2-2-4-2.5-4-4.5a2 2 0 0 1 4 0c0 1.5-2 2-4 4.5"/><path d="M12 7c2-2 4-2.5 4-4.5a2 2 0 0 0-4 0c0 1.5 2 2 4 4.5"/></svg>
                    <svg *ngSwitchCase="'referral'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="18" cy="5" r="2.5"/><circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="19" r="2.5"/><path d="M8.5 13.5l7 4M15.5 6.5l-7 4"/></svg>
                    <svg *ngSwitchCase="'percent'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="9" cy="9" r="2"/><circle cx="15" cy="15" r="2"/><path d="M5 19L19 5"/></svg>
                  </ng-container>
                </div>
              </div>
              <div class="type-card-body">
                <h3 class="type-card-title">{{ card.title }}</h3>
                <p class="type-card-desc">{{ card.description }}</p>
              </div>
              <div class="type-card-footer">
                <button type="button" class="btn-create" (click)="onCreate(card)">
                  Create
                  <svg class="btn-create-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
                </button>
              </div>
            </article>
          </div>
        </section>

        <!-- Right: templates (placeholder) -->
        <aside class="templates-sidebar">
          <h3 class="templates-title">Reward Program templates</h3>
          <p class="templates-subtitle">Start quickly from a pre-configured template (coming soon).</p>
        </aside>
      </div>
    </div>
  `, styles: ["/* angular:styles/component:css;07ecae040371862ee8426db276f1f33337a32a1b1649c37e92bf3e5a83ff2bd4;/Users/baglan/repo/westwood/westwood-frontend/src/app/features/bonus-program/pages/program-types-page/program-types-page.component.ts */\n:host {\n  display: block;\n  height: 100%;\n}\n.page-wrapper {\n  min-height: 100%;\n  margin: -2rem;\n  padding: 2rem;\n  background: #f8fafc;\n}\n.content-layout {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) 280px;\n  gap: 1.5rem;\n  align-items: flex-start;\n}\n.types-section {\n  background: white;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n  padding: 1.75rem 2rem 2rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n}\n.page-title {\n  font-size: 1.4rem;\n  font-weight: 700;\n  margin: 0 0 0.25rem 0;\n  color: #0f172a;\n}\n.page-subtitle {\n  font-size: 0.9rem;\n  color: #64748b;\n  margin: 0 0 1.5rem 0;\n}\n.types-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  gap: 1.5rem;\n}\n.type-card {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  padding: 2rem 2rem 1.5rem;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n  background: #ffffff;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);\n}\n.type-card-header {\n  display: flex;\n  justify-content: flex-start;\n  margin-bottom: 0.25rem;\n}\n.type-card-icon {\n  width: 56px;\n  height: 56px;\n  border-radius: 14px;\n  background: #e0f2fe;\n  color: #0284c7;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.type-card-icon svg {\n  width: 28px;\n  height: 28px;\n}\n.type-card-body {\n  flex: 1;\n}\n.type-card-title {\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 0.35rem 0;\n}\n.type-card-desc {\n  font-size: 0.95rem;\n  color: #64748b;\n  margin: 0;\n  line-height: 1.5;\n}\n.type-card-footer {\n  margin-top: 1rem;\n}\n.btn-create {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  padding: 0.6rem 1.25rem;\n  border-radius: 8px;\n  border: none;\n  background: #16A34A;\n  color: white;\n  font-size: 0.95rem;\n  font-weight: 600;\n  cursor: pointer;\n}\n.btn-create:hover {\n  background: #15803d;\n}\n.btn-create-arrow {\n  width: 18px;\n  height: 18px;\n}\n.templates-sidebar {\n  background: white;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n}\n.templates-title {\n  font-size: 1rem;\n  font-weight: 700;\n  margin: 0 0 0.5rem 0;\n  color: #0f172a;\n}\n.templates-subtitle {\n  font-size: 0.85rem;\n  color: #64748b;\n  margin: 0;\n}\n@media (max-width: 900px) {\n  .content-layout {\n    grid-template-columns: minmax(0, 1fr);\n  }\n  .templates-sidebar {\n    order: -1;\n  }\n}\n/*# sourceMappingURL=program-types-page.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProgramTypesPageComponent, { className: "ProgramTypesPageComponent", filePath: "src/app/features/bonus-program/pages/program-types-page/program-types-page.component.ts", lineNumber: 102 });
})();
export {
  ProgramTypesPageComponent
};
//# sourceMappingURL=chunk-YONWYHNC.js.map
