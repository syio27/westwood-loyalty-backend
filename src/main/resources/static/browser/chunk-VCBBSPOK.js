import {
  RewardProgramsService
} from "./chunk-5AEJQPRJ.js";
import {
  PageHeaderService
} from "./chunk-AWWADESY.js";
import "./chunk-6FFMNYG3.js";
import {
  CommonModule,
  Component,
  NgForOf,
  NgIf,
  NgSwitch,
  NgSwitchCase,
  Router,
  RouterLink,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
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
  ɵɵtextInterpolate
} from "./chunk-NKSGOSP5.js";

// src/app/features/bonus-program/pages/program-types-page/program-types-page.component.ts
function ProgramTypesPageComponent_article_10__svg_svg_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 23);
    \u0275\u0275element(1, "rect", 24)(2, "path", 25)(3, "path", 26);
    \u0275\u0275elementEnd();
  }
}
function ProgramTypesPageComponent_article_10__svg_svg_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 23);
    \u0275\u0275element(1, "path", 27)(2, "rect", 28)(3, "path", 29)(4, "path", 30)(5, "path", 31);
    \u0275\u0275elementEnd();
  }
}
function ProgramTypesPageComponent_article_10__svg_svg_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 23);
    \u0275\u0275element(1, "circle", 32)(2, "circle", 33)(3, "circle", 34)(4, "path", 35);
    \u0275\u0275elementEnd();
  }
}
function ProgramTypesPageComponent_article_10__svg_svg_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 23);
    \u0275\u0275element(1, "circle", 36)(2, "circle", 37)(3, "path", 38);
    \u0275\u0275elementEnd();
  }
}
function ProgramTypesPageComponent_article_10_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 39);
    \u0275\u0275text(1, "Already active");
    \u0275\u0275elementEnd();
  }
}
function ProgramTypesPageComponent_article_10_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 40);
    \u0275\u0275text(1, "Scheduled");
    \u0275\u0275elementEnd();
  }
}
function ProgramTypesPageComponent_article_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 8)(1, "div", 9)(2, "div", 10);
    \u0275\u0275elementContainerStart(3, 11);
    \u0275\u0275template(4, ProgramTypesPageComponent_article_10__svg_svg_4_Template, 4, 0, "svg", 12)(5, ProgramTypesPageComponent_article_10__svg_svg_5_Template, 6, 0, "svg", 12)(6, ProgramTypesPageComponent_article_10__svg_svg_6_Template, 5, 0, "svg", 12)(7, ProgramTypesPageComponent_article_10__svg_svg_7_Template, 4, 0, "svg", 12);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, ProgramTypesPageComponent_article_10_span_8_Template, 2, 0, "span", 13)(9, ProgramTypesPageComponent_article_10_span_9_Template, 2, 0, "span", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 15)(11, "h3", 16);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p", 17);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 18)(16, "button", 19);
    \u0275\u0275listener("click", function ProgramTypesPageComponent_article_10_Template_button_click_16_listener() {
      const card_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onCreate(card_r2));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(17, "svg", 20);
    \u0275\u0275element(18, "path", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(19, "span", 22);
    \u0275\u0275text(20, "Create");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const card_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
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
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.getSlotState(card_r2) === "ACTIVE");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.getSlotState(card_r2) === "SCHEDULED");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(card_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(card_r2.description);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.isSlotBlocked(card_r2));
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
  slots = [];
  ngOnInit() {
    this.pageHeaderService.setPageHeader("Create Program", [
      { label: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F", route: "/home" },
      { label: "Reward Programs", route: "/bonus-program" },
      { label: "Reward Program types" }
    ]);
    this.rewardProgramsService.getSlots().subscribe({
      next: (list) => this.slots = list
    });
  }
  getSlotState(card) {
    const type = this.toRewardProgramType(card.id);
    const slot = this.slots.find((s) => s.type === type);
    if (!slot || slot.status === "NOT_CREATED" || slot.status === "DRAFT" || slot.status === "INACTIVE" || slot.status === "ARCHIVED")
      return null;
    return slot.status;
  }
  isSlotBlocked(card) {
    const state = this.getSlotState(card);
    return state === "ACTIVE" || state === "SCHEDULED";
  }
  onCreate(card) {
    if (this.isSlotBlocked(card))
      return;
    const type = this.toRewardProgramType(card.id);
    const typeSlug = card.id;
    this.rewardProgramsService.createDraft(type).subscribe({
      next: (res) => {
        this.router.navigate(["/bonus-program", "create", typeSlug, res.uuid]);
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProgramTypesPageComponent, selectors: [["app-program-types-page"]], decls: 11, vars: 1, consts: [[1, "page-wrapper"], ["routerLink", "/bonus-program", 1, "back-link"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "back-icon"], ["d", "M19 12H5M12 19l-7-7 7-7"], [1, "page-title"], [1, "page-subtitle"], [1, "types-grid"], ["class", "type-card", 4, "ngFor", "ngForOf"], [1, "type-card"], [1, "type-card-header"], [1, "type-card-icon"], [3, "ngSwitch"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5", 4, "ngSwitchCase"], ["class", "slot-badge slot-active", 4, "ngIf"], ["class", "slot-badge slot-scheduled", 4, "ngIf"], [1, "type-card-body"], [1, "type-card-title"], [1, "type-card-desc"], [1, "type-card-footer"], ["type", "button", "title", "Create program", "aria-label", "Create program", 1, "btn-go", 3, "click", "disabled"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "btn-go-arrow"], ["d", "M5 12h14M12 5l7 7-7 7"], [1, "btn-go-label"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5"], ["x", "3", "y", "4", "width", "18", "height", "18", "rx", "2"], ["d", "M3 10h18"], ["d", "M7 4v4M17 4v4"], ["d", "M20 12v9H4v-9"], ["x", "2", "y", "7", "width", "20", "height", "5", "rx", "1"], ["d", "M12 22V7"], ["d", "M12 7c-2-2-4-2.5-4-4.5a2 2 0 0 1 4 0c0 1.5-2 2-4 4.5"], ["d", "M12 7c2-2 4-2.5 4-4.5a2 2 0 0 0-4 0c0 1.5 2 2 4 4.5"], ["cx", "18", "cy", "5", "r", "2.5"], ["cx", "6", "cy", "12", "r", "2.5"], ["cx", "18", "cy", "19", "r", "2.5"], ["d", "M8.5 13.5l7 4M15.5 6.5l-7 4"], ["cx", "9", "cy", "9", "r", "2"], ["cx", "15", "cy", "15", "r", "2"], ["d", "M5 19L19 5"], [1, "slot-badge", "slot-active"], [1, "slot-badge", "slot-scheduled"]], template: function ProgramTypesPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "a", 1);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(2, "svg", 2);
      \u0275\u0275element(3, "path", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275text(4, " Back ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(5, "h2", 4);
      \u0275\u0275text(6, "Reward Program types");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 5);
      \u0275\u0275text(8, "Choose what kind of reward program you want to configure.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 6);
      \u0275\u0275template(10, ProgramTypesPageComponent_article_10_Template, 21, 10, "article", 7);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275property("ngForOf", ctx.PROGRAM_TYPES);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, NgSwitch, NgSwitchCase, RouterLink], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n}\n.page-wrapper[_ngcontent-%COMP%] {\n  min-height: 100%;\n  margin: -2rem;\n  padding: 2rem;\n  background: #f8fafc;\n}\n.back-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.9rem;\n  font-weight: 500;\n  color: #475569;\n  text-decoration: none;\n  margin-bottom: 1rem;\n  transition: color 0.2s;\n}\n.back-link[_ngcontent-%COMP%]:hover {\n  color: #16A34A;\n}\n.back-icon[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 700;\n  margin: 0 0 0.25rem 0;\n  color: #0f172a;\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #64748b;\n  margin: 0 0 1.5rem 0;\n}\n.types-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  gap: 1.5rem;\n  margin-top: 1.5rem;\n}\n.type-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  padding: 2rem 2rem 1.5rem;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n  background: #ffffff;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);\n}\n.type-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 0.25rem;\n  gap: 0.5rem;\n}\n.slot-badge[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  padding: 0.25rem 0.5rem;\n  border-radius: 6px;\n  flex-shrink: 0;\n}\n.slot-active[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #16A34A;\n}\n.slot-scheduled[_ngcontent-%COMP%] {\n  background: #e0f2fe;\n  color: #0369a1;\n}\n.type-card-icon[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: 14px;\n  background: #dcfce7;\n  color: #16A34A;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.type-card-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n}\n.type-card-body[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.type-card-title[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 0.35rem 0;\n}\n.type-card-desc[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  color: #64748b;\n  margin: 0;\n  line-height: 1.5;\n}\n.type-card-footer[_ngcontent-%COMP%] {\n  margin-top: 1.25rem;\n  display: flex;\n  justify-content: flex-end;\n}\n.btn-go[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.4rem;\n  padding: 0 1.25rem;\n  height: 44px;\n  border: none;\n  border-radius: 22px;\n  background: transparent;\n  color: #94a3b8;\n  cursor: pointer;\n  transition: color 0.2s, background 0.2s;\n}\n.btn-go[_ngcontent-%COMP%]:hover:not(:disabled) {\n  color: #16A34A;\n  background: #dcfce7;\n}\n.btn-go[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn-go-arrow[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n  flex-shrink: 0;\n}\n.btn-go-label[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 500;\n}\n/*# sourceMappingURL=program-types-page.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProgramTypesPageComponent, [{
    type: Component,
    args: [{ selector: "app-program-types-page", standalone: true, imports: [CommonModule, RouterLink], template: `
    <div class="page-wrapper">
      <a routerLink="/bonus-program" class="back-link">
        <svg class="back-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
        Back
      </a>
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
            <span *ngIf="getSlotState(card) === 'ACTIVE'" class="slot-badge slot-active">Already active</span>
            <span *ngIf="getSlotState(card) === 'SCHEDULED'" class="slot-badge slot-scheduled">Scheduled</span>
          </div>
          <div class="type-card-body">
            <h3 class="type-card-title">{{ card.title }}</h3>
            <p class="type-card-desc">{{ card.description }}</p>
          </div>
          <div class="type-card-footer">
            <button type="button" class="btn-go" [disabled]="isSlotBlocked(card)" (click)="onCreate(card)" title="Create program" aria-label="Create program">
              <svg class="btn-go-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              <span class="btn-go-label">Create</span>
            </button>
          </div>
        </article>
      </div>
    </div>
  `, styles: ["/* angular:styles/component:css;b44f731ab8aaeb74399bb5deb165dd72e5de3ece71591bd71b84811b860e427e;/Users/baglan/repo/westwood/westwood-frontend/src/app/features/bonus-program/pages/program-types-page/program-types-page.component.ts */\n:host {\n  display: block;\n  height: 100%;\n}\n.page-wrapper {\n  min-height: 100%;\n  margin: -2rem;\n  padding: 2rem;\n  background: #f8fafc;\n}\n.back-link {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.9rem;\n  font-weight: 500;\n  color: #475569;\n  text-decoration: none;\n  margin-bottom: 1rem;\n  transition: color 0.2s;\n}\n.back-link:hover {\n  color: #16A34A;\n}\n.back-icon {\n  width: 20px;\n  height: 20px;\n}\n.page-title {\n  font-size: 1.4rem;\n  font-weight: 700;\n  margin: 0 0 0.25rem 0;\n  color: #0f172a;\n}\n.page-subtitle {\n  font-size: 0.9rem;\n  color: #64748b;\n  margin: 0 0 1.5rem 0;\n}\n.types-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  gap: 1.5rem;\n  margin-top: 1.5rem;\n}\n.type-card {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  padding: 2rem 2rem 1.5rem;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n  background: #ffffff;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);\n}\n.type-card-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 0.25rem;\n  gap: 0.5rem;\n}\n.slot-badge {\n  font-size: 0.75rem;\n  font-weight: 600;\n  padding: 0.25rem 0.5rem;\n  border-radius: 6px;\n  flex-shrink: 0;\n}\n.slot-active {\n  background: #dcfce7;\n  color: #16A34A;\n}\n.slot-scheduled {\n  background: #e0f2fe;\n  color: #0369a1;\n}\n.type-card-icon {\n  width: 56px;\n  height: 56px;\n  border-radius: 14px;\n  background: #dcfce7;\n  color: #16A34A;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.type-card-icon svg {\n  width: 28px;\n  height: 28px;\n}\n.type-card-body {\n  flex: 1;\n}\n.type-card-title {\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 0.35rem 0;\n}\n.type-card-desc {\n  font-size: 0.95rem;\n  color: #64748b;\n  margin: 0;\n  line-height: 1.5;\n}\n.type-card-footer {\n  margin-top: 1.25rem;\n  display: flex;\n  justify-content: flex-end;\n}\n.btn-go {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.4rem;\n  padding: 0 1.25rem;\n  height: 44px;\n  border: none;\n  border-radius: 22px;\n  background: transparent;\n  color: #94a3b8;\n  cursor: pointer;\n  transition: color 0.2s, background 0.2s;\n}\n.btn-go:hover:not(:disabled) {\n  color: #16A34A;\n  background: #dcfce7;\n}\n.btn-go:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn-go-arrow {\n  width: 22px;\n  height: 22px;\n  flex-shrink: 0;\n}\n.btn-go-label {\n  font-size: 0.9rem;\n  font-weight: 500;\n}\n/*# sourceMappingURL=program-types-page.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProgramTypesPageComponent, { className: "ProgramTypesPageComponent", filePath: "src/app/features/bonus-program/pages/program-types-page/program-types-page.component.ts", lineNumber: 96 });
})();
export {
  ProgramTypesPageComponent
};
//# sourceMappingURL=chunk-VCBBSPOK.js.map
