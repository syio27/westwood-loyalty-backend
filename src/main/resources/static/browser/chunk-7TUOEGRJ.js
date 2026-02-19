import {
  RewardProgramsService,
  rewardProgramTypeToSlug
} from "./chunk-BN7EQLZ2.js";
import {
  DialogComponent
} from "./chunk-OD4UAX33.js";
import "./chunk-WG54KTTL.js";
import {
  PageHeaderService
} from "./chunk-3HAPV5CC.js";
import "./chunk-6FFMNYG3.js";
import {
  ToastService
} from "./chunk-LKUGJXQB.js";
import {
  FormsModule
} from "./chunk-KQ5UQ4IC.js";
import "./chunk-2XLG7XQP.js";
import {
  CommonModule,
  Component,
  HostListener,
  NgForOf,
  Router,
  RouterLink,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
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
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3
} from "./chunk-OSQKJAMW.js";

// src/app/features/bonus-program/pages/bonus-program-page/bonus-program-page.component.ts
function BonusProgramPageComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 11);
    \u0275\u0275text(1, "Loading programs\u2026");
    \u0275\u0275elementEnd();
  }
}
function BonusProgramPageComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.loadError);
  }
}
function BonusProgramPageComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 15);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 16);
    \u0275\u0275element(3, "path", 17)(4, "rect", 18)(5, "path", 19)(6, "path", 20)(7, "path", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9, "You don't have programs created");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "a", 22);
    \u0275\u0275text(11, "Create loyalty program");
    \u0275\u0275elementEnd()()();
  }
}
function BonusProgramPageComponent_Conditional_28_tr_23_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const program_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.formatBonusType(program_r4).line2);
  }
}
function BonusProgramPageComponent_Conditional_28_tr_23_Case_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 32);
    \u0275\u0275element(1, "path", 54);
    \u0275\u0275elementEnd();
  }
}
function BonusProgramPageComponent_Conditional_28_tr_23_Case_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 32);
    \u0275\u0275element(1, "rect", 55)(2, "path", 56);
    \u0275\u0275elementEnd();
  }
}
function BonusProgramPageComponent_Conditional_28_tr_23_Case_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 32);
    \u0275\u0275element(1, "path", 57)(2, "path", 58);
    \u0275\u0275elementEnd();
  }
}
function BonusProgramPageComponent_Conditional_28_tr_23_Case_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 32);
    \u0275\u0275element(1, "path", 59)(2, "path", 60)(3, "path", 61);
    \u0275\u0275elementEnd();
  }
}
function BonusProgramPageComponent_Conditional_28_tr_23_Case_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 32);
    \u0275\u0275element(1, "circle", 62)(2, "path", 63)(3, "path", 64);
    \u0275\u0275elementEnd();
  }
}
function BonusProgramPageComponent_Conditional_28_tr_23_Case_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 32);
    \u0275\u0275element(1, "circle", 62);
    \u0275\u0275elementEnd();
  }
}
function BonusProgramPageComponent_Conditional_28_tr_23_Conditional_31_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 66);
    \u0275\u0275listener("click", function BonusProgramPageComponent_Conditional_28_tr_23_Conditional_31_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const program_r4 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.actionContinueCreate(program_r4));
    });
    \u0275\u0275text(1, "Continue editing");
    \u0275\u0275elementEnd();
  }
}
function BonusProgramPageComponent_Conditional_28_tr_23_Conditional_31_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 66);
    \u0275\u0275listener("click", function BonusProgramPageComponent_Conditional_28_tr_23_Conditional_31_Conditional_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const program_r4 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.actionFullView(program_r4));
    });
    \u0275\u0275text(1, "Full view");
    \u0275\u0275elementEnd();
  }
}
function BonusProgramPageComponent_Conditional_28_tr_23_Conditional_31_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 66);
    \u0275\u0275listener("click", function BonusProgramPageComponent_Conditional_28_tr_23_Conditional_31_Conditional_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const program_r4 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.actionLaunchNow(program_r4));
    });
    \u0275\u0275text(1, "Launch now");
    \u0275\u0275elementEnd();
  }
}
function BonusProgramPageComponent_Conditional_28_tr_23_Conditional_31_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 68);
    \u0275\u0275listener("click", function BonusProgramPageComponent_Conditional_28_tr_23_Conditional_31_Conditional_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const program_r4 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.actionDeactivate(program_r4));
    });
    \u0275\u0275text(1, "Deactivate");
    \u0275\u0275elementEnd();
  }
}
function BonusProgramPageComponent_Conditional_28_tr_23_Conditional_31_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 68);
    \u0275\u0275listener("click", function BonusProgramPageComponent_Conditional_28_tr_23_Conditional_31_Conditional_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const program_r4 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.actionDelete(program_r4));
    });
    \u0275\u0275text(1, "Delete");
    \u0275\u0275elementEnd();
  }
}
function BonusProgramPageComponent_Conditional_28_tr_23_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275template(1, BonusProgramPageComponent_Conditional_28_tr_23_Conditional_31_Conditional_1_Template, 2, 0, "button", 65)(2, BonusProgramPageComponent_Conditional_28_tr_23_Conditional_31_Conditional_2_Template, 2, 0, "button", 65);
    \u0275\u0275elementStart(3, "button", 66);
    \u0275\u0275listener("click", function BonusProgramPageComponent_Conditional_28_tr_23_Conditional_31_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r5);
      const program_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.actionReports(program_r4));
    });
    \u0275\u0275text(4, "Reports");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, BonusProgramPageComponent_Conditional_28_tr_23_Conditional_31_Conditional_5_Template, 2, 0, "button", 65)(6, BonusProgramPageComponent_Conditional_28_tr_23_Conditional_31_Conditional_6_Template, 2, 0, "button", 67)(7, BonusProgramPageComponent_Conditional_28_tr_23_Conditional_31_Conditional_7_Template, 2, 0, "button", 67);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const program_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(program_r4.status === "DRAFT" ? 1 : 2);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(program_r4.status === "SCHEDULED" ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(program_r4.status === "ACTIVE" ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(program_r4.status === "INACTIVE" || program_r4.status === "ARCHIVED" || program_r4.status === "DRAFT" ? 7 : -1);
  }
}
function BonusProgramPageComponent_Conditional_28_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 37);
    \u0275\u0275listener("click", function BonusProgramPageComponent_Conditional_28_tr_23_Template_tr_click_0_listener() {
      const program_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.goToProgram(program_r4));
    });
    \u0275\u0275elementStart(1, "td")(2, "span", 38);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "span", 39);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td")(8, "div", 40)(9, "span", 41);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, BonusProgramPageComponent_Conditional_28_tr_23_Conditional_11_Template, 2, 1, "span", 42);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td", 43);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td")(15, "span", 44)(16, "span", 45);
    \u0275\u0275template(17, BonusProgramPageComponent_Conditional_28_tr_23_Case_17_Template, 2, 0, ":svg:svg", 32)(18, BonusProgramPageComponent_Conditional_28_tr_23_Case_18_Template, 3, 0, ":svg:svg", 32)(19, BonusProgramPageComponent_Conditional_28_tr_23_Case_19_Template, 3, 0, ":svg:svg", 32)(20, BonusProgramPageComponent_Conditional_28_tr_23_Case_20_Template, 4, 0, ":svg:svg", 32)(21, BonusProgramPageComponent_Conditional_28_tr_23_Case_21_Template, 4, 0, ":svg:svg", 32)(22, BonusProgramPageComponent_Conditional_28_tr_23_Case_22_Template, 2, 0, ":svg:svg", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 46);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "td", 47);
    \u0275\u0275listener("click", function BonusProgramPageComponent_Conditional_28_tr_23_Template_td_click_25_listener($event) {
      \u0275\u0275restoreView(_r3);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(26, "button", 48);
    \u0275\u0275listener("click", function BonusProgramPageComponent_Conditional_28_tr_23_Template_button_click_26_listener() {
      const program_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleMenu(program_r4.uuid));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(27, "svg", 49);
    \u0275\u0275element(28, "circle", 50)(29, "circle", 51)(30, "circle", 52);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(31, BonusProgramPageComponent_Conditional_28_tr_23_Conditional_31_Template, 8, 4, "div", 53);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_14_0;
    const program_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(program_r4.name || "Untitled");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.typeToLabel(program_r4.type));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.formatBonusType(program_r4).line1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.formatBonusType(program_r4).line2 ? 11 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formatDateRange(program_r4.startDate, program_r4.endDate));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", program_r4.status === "ACTIVE")("scheduled", program_r4.status === "SCHEDULED")("draft", program_r4.status === "DRAFT")("archived", program_r4.status === "ARCHIVED")("inactive", program_r4.status === "INACTIVE");
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-hidden", true);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_14_0 = program_r4.status) === "ACTIVE" ? 17 : tmp_14_0 === "SCHEDULED" ? 18 : tmp_14_0 === "DRAFT" ? 19 : tmp_14_0 === "ARCHIVED" ? 20 : tmp_14_0 === "INACTIVE" ? 21 : 22);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.statusToLabel(program_r4.status));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-expanded", ctx_r0.openMenuUuid === program_r4.uuid);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r0.openMenuUuid === program_r4.uuid ? 31 : -1);
  }
}
function BonusProgramPageComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "table", 24)(2, "colgroup");
    \u0275\u0275element(3, "col", 25)(4, "col", 26)(5, "col", 25)(6, "col", 27)(7, "col", 26)(8, "col", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "thead")(10, "tr")(11, "th");
    \u0275\u0275text(12, "Program name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Program type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Bonus type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Start date \u2013 End date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th");
    \u0275\u0275text(20, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "tbody");
    \u0275\u0275template(23, BonusProgramPageComponent_Conditional_28_tr_23_Template, 32, 20, "tr", 29);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 30)(25, "button", 31);
    \u0275\u0275listener("click", function BonusProgramPageComponent_Conditional_28_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.currentPage = ctx_r0.currentPage - 1);
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(26, "svg", 32);
    \u0275\u0275element(27, "path", 33);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(28, "span", 34);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "button", 35);
    \u0275\u0275listener("click", function BonusProgramPageComponent_Conditional_28_Template_button_click_30_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.currentPage = ctx_r0.currentPage + 1);
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(31, "svg", 32);
    \u0275\u0275element(32, "path", 36);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(23);
    \u0275\u0275property("ngForOf", ctx_r0.paginatedPrograms);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.currentPage <= 1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate3("", ctx_r0.filteredPrograms.length === 0 ? 0 : (ctx_r0.currentPage - 1) * ctx_r0.pageSize + 1, "-", ctx_r0.Math.min(ctx_r0.currentPage * ctx_r0.pageSize, ctx_r0.filteredPrograms.length), " of ", ctx_r0.filteredPrograms.length, "");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.currentPage * ctx_r0.pageSize >= ctx_r0.filteredPrograms.length);
  }
}
function formatDateRange(startDate, endDate) {
  const start = startDate ? new Date(startDate).toLocaleDateString() : "\u2014";
  const end = endDate ? new Date(endDate).toLocaleDateString() : "\u221E";
  return `${start} \u2013 ${end}`;
}
function typeToLabel(type) {
  const map = {
    WELCOME: "Welcome",
    BIRTHDAY: "Birthday",
    REFERRAL: "Referral",
    CASHBACK: "Cashback"
  };
  return map[type] ?? type;
}
function statusToLabel(status) {
  const map = {
    DRAFT: "Draft",
    SCHEDULED: "Scheduled",
    ACTIVE: "Active",
    INACTIVE: "Inactive",
    ARCHIVED: "Archived"
  };
  return map[status] ?? status;
}
function formatBonusType(program) {
  if (program.type !== "CASHBACK") {
    return { line1: "\u2014", line2: "" };
  }
  const ct = program.cashbackType;
  const value = program.cashbackValue ?? 0;
  const minSpend = program.minSpendAmount ?? 0;
  const ptsThreshold = program.pointsSpendThreshold;
  if (ct === "PERCENTAGE") {
    return { line1: "Percentage", line2: `${value}% per order` };
  }
  if (ct === "BONUS_POINTS") {
    const per = ptsThreshold != null && Number(ptsThreshold) > 0 ? ` per ${Number(ptsThreshold)} spend` : " per order";
    return { line1: "Bonus points", line2: `${value} pts earned${per}` };
  }
  return { line1: "\u2014", line2: "" };
}
var BonusProgramPageComponent = class _BonusProgramPageComponent {
  pageHeaderService = inject(PageHeaderService);
  router = inject(Router);
  toast = inject(ToastService);
  rewardProgramsService = inject(RewardProgramsService);
  activeTab = "All";
  currentPage = 1;
  pageSize = 10;
  Math = Math;
  programs = [];
  loading = false;
  loadError = "";
  openMenuUuid = null;
  actionInProgress = null;
  confirmState = null;
  get confirmDialogTitle() {
    if (!this.confirmState)
      return "";
    const t = {
      launchNow: "Launch program now?",
      deactivate: "Deactivate program?",
      delete: "Delete program?"
    };
    return t[this.confirmState.action];
  }
  get confirmDialogMessage() {
    if (!this.confirmState)
      return "";
    const m = {
      launchNow: "It will start affecting customers joining the loyalty program and the start date will be set to today.",
      deactivate: "This program will be deactivated and will stop affecting customers.",
      delete: "This program will be permanently deleted. This cannot be undone."
    };
    return m[this.confirmState.action];
  }
  get confirmDialogConfirmLabel() {
    if (!this.confirmState)
      return "Confirm";
    const l = {
      launchNow: "Launch now",
      deactivate: "Deactivate",
      delete: "Delete"
    };
    return l[this.confirmState.action];
  }
  onDocumentClick() {
    this.openMenuUuid = null;
  }
  formatDateRange = formatDateRange;
  typeToLabel = typeToLabel;
  statusToLabel = statusToLabel;
  formatBonusType = formatBonusType;
  get filteredPrograms() {
    let list = this.programs;
    if (this.activeTab !== "All") {
      const status = this.activeTab.toUpperCase();
      list = list.filter((p) => p.status === status);
    }
    return list;
  }
  get paginatedPrograms() {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.filteredPrograms.slice(start, start + this.pageSize);
  }
  ngOnInit() {
    this.pageHeaderService.setPageHeader("Reward Programs", [
      { label: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F", route: "/home" },
      { label: "Reward Programs" }
    ]);
    this.loadPrograms();
  }
  loadPrograms() {
    this.loading = true;
    this.loadError = "";
    this.rewardProgramsService.listPrograms().subscribe({
      next: (list) => {
        this.programs = list;
        this.loading = false;
      },
      error: (err) => {
        this.loadError = err?.error?.message || "Failed to load programs.";
        this.loading = false;
      }
    });
  }
  toggleMenu(uuid) {
    this.openMenuUuid = this.openMenuUuid === uuid ? null : uuid;
  }
  actionFullView(program) {
    this.openMenuUuid = null;
    this.router.navigate(["/bonus-program", "view", program.uuid]);
  }
  actionContinueCreate(program) {
    this.openMenuUuid = null;
    this.goToDraftWizard(program);
  }
  actionReports(program) {
    this.openMenuUuid = null;
    this.toast.show("Reports coming soon", "success");
  }
  actionLaunchNow(program) {
    this.openMenuUuid = null;
    this.confirmState = { action: "launchNow", program };
  }
  buildLaunchNowPayload(res) {
    const r = res.cashbackRule;
    const schedules = (res.weeklySchedules || []).map((s) => ({
      dayOfWeek: s.dayOfWeek,
      enabled: s.enabled,
      startTime: s.startTime ?? null,
      endTime: s.endTime ?? null
    }));
    const tiers = (res.cashbackTiers || []).map((t, i) => ({
      name: t.name,
      minAmount: t.minAmount,
      maxAmount: t.maxAmount ?? null,
      extraEarningPercent: t.extraEarningPercent,
      sortOrder: i
    }));
    return {
      immediate: true,
      name: res.name ?? null,
      description: res.description ?? null,
      cashbackType: r?.cashbackType ?? null,
      cashbackValue: r?.cashbackValue ?? null,
      minSpendAmount: r?.minSpendAmount ?? null,
      eligibilityType: r?.eligibilityType ?? null,
      redeemLimitPercent: r?.redeemLimitPercent ?? null,
      bonusLifespanDays: r?.bonusLifespanDays ?? null,
      pointsSpendThreshold: r?.pointsSpendThreshold ?? null,
      startDate: (/* @__PURE__ */ new Date()).toISOString(),
      endDate: res.endDate ?? null,
      weeklySchedules: schedules.length > 0 ? schedules : null,
      tiers: tiers.length > 0 ? tiers : null
    };
  }
  actionDeactivate(program) {
    this.openMenuUuid = null;
    this.confirmState = { action: "deactivate", program };
  }
  actionDelete(program) {
    this.openMenuUuid = null;
    this.confirmState = { action: "delete", program };
  }
  onConfirmAction() {
    const state = this.confirmState;
    if (!state || this.actionInProgress)
      return;
    this.confirmState = null;
    const program = state.program;
    this.actionInProgress = program.uuid;
    if (state.action === "launchNow") {
      this.rewardProgramsService.getProgram(program.uuid).subscribe({
        next: (full) => {
          const payload = this.buildLaunchNowPayload(full);
          this.rewardProgramsService.launchCashbackProgram(program.uuid, payload).subscribe({
            next: () => {
              this.actionInProgress = null;
              this.toast.success("Program launched");
              this.loadPrograms();
            },
            error: (err) => {
              this.actionInProgress = null;
              this.toast.error(err?.error?.message || "Failed to launch program");
            }
          });
        },
        error: (err) => {
          this.actionInProgress = null;
          this.toast.error(err?.error?.message || "Failed to load program");
        }
      });
      return;
    }
    if (state.action === "deactivate") {
      this.rewardProgramsService.deactivateProgram(program.uuid).subscribe({
        next: () => {
          this.actionInProgress = null;
          this.toast.success("Program deactivated");
          this.loadPrograms();
        },
        error: (err) => {
          this.actionInProgress = null;
          this.toast.error(err?.error?.message || "Failed to deactivate");
        }
      });
      return;
    }
    if (state.action === "delete") {
      this.rewardProgramsService.deleteProgram(program.uuid).subscribe({
        next: () => {
          this.actionInProgress = null;
          this.toast.success("Program deleted");
          this.loadPrograms();
        },
        error: (err) => {
          this.actionInProgress = null;
          this.toast.error(err?.error?.message || "Failed to delete");
        }
      });
    }
  }
  goToProgram(program) {
    if (program.status === "DRAFT") {
      this.goToDraftWizard(program);
    } else {
      this.router.navigate(["/bonus-program", "view", program.uuid]);
    }
  }
  goToDraftWizard(program) {
    const slug = rewardProgramTypeToSlug(program.type);
    if (program.type === "CASHBACK") {
      this.router.navigate(["/bonus-program", "create", slug, program.uuid, "steps", 1]);
    } else {
      this.router.navigate(["/bonus-program", "create", slug, program.uuid]);
    }
  }
  static \u0275fac = function BonusProgramPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BonusProgramPageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BonusProgramPageComponent, selectors: [["app-bonus-program-page"]], hostBindings: function BonusProgramPageComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function BonusProgramPageComponent_click_HostBindingHandler() {
        return ctx.onDocumentClick();
      }, false, \u0275\u0275resolveDocument);
    }
  }, decls: 30, vars: 19, consts: [[1, "page-wrapper"], [1, "programs-container"], [1, "intro-row"], [1, "intro-text"], ["routerLink", "/bonus-program/programs", 1, "btn-create-program"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "btn-icon"], ["d", "M12 5v14M5 12h14"], [1, "tabs-row"], [1, "tabs"], ["type", "button", 1, "tab", 3, "click"], [1, "tab-count"], [1, "loading-message"], [1, "error-message"], [1, "table-wrap", "empty-state-wrap"], ["cancelLabel", "Cancel", 3, "confirmed", "cancelled", "closed", "visible", "title", "message", "confirmLabel"], [1, "empty-state"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5"], ["d", "M20 12v9H4v-9"], ["x", "2", "y", "7", "width", "20", "height", "5", "rx", "1"], ["d", "M12 22V7"], ["d", "M12 7c-2-2-4-2.5-4-4.5a2 2 0 0 1 4 0c0 1.5-2 2-4 4.5"], ["d", "M12 7c2-2 4-2.5 4-4.5a2 2 0 0 0-4 0c0 1.5 2 2 4 4.5"], ["routerLink", "/bonus-program/programs", 1, "btn-create-loyalty"], [1, "table-wrap"], [1, "programs-table"], [2, "width", "22%"], [2, "width", "14%"], [2, "width", "20%"], [2, "width", "8%"], ["class", "program-row", 3, "click", 4, "ngFor", "ngForOf"], [1, "pagination"], ["type", "button", "aria-label", "Previous", 1, "page-btn", 3, "click", "disabled"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M15 18l-6-6 6-6"], [1, "page-info"], ["type", "button", "aria-label", "Next", 1, "page-btn", 3, "click", "disabled"], ["d", "M9 18l6-6-6-6"], [1, "program-row", 3, "click"], [1, "program-name"], [1, "program-type-label"], [1, "bonus-type-cell"], [1, "bonus-type-line1"], [1, "bonus-type-line2"], [1, "date-cell"], [1, "status-pill"], [1, "status-icon"], [1, "status-text"], [1, "action-cell", 3, "click"], ["type", "button", "aria-label", "Actions", 1, "btn-menu", 3, "click"], ["viewBox", "0 0 24 24", "fill", "currentColor", 1, "dots-icon"], ["cx", "12", "cy", "6", "r", "1.5"], ["cx", "12", "cy", "12", "r", "1.5"], ["cx", "12", "cy", "18", "r", "1.5"], [1, "menu-dropdown"], ["d", "M20 6L9 17l-5-5"], ["x", "3", "y", "4", "width", "18", "height", "18", "rx", "2"], ["d", "M16 2v4M8 2v4M3 10h18"], ["d", "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"], ["d", "M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"], ["d", "M21 8v13H3V8"], ["d", "M1 3h22v5H1z"], ["d", "M10 12h4"], ["cx", "12", "cy", "12", "r", "10"], ["d", "M10 15V9"], ["d", "M14 15V9"], ["type", "button", 1, "menu-item"], ["type", "button", 1, "menu-item", 3, "click"], ["type", "button", 1, "menu-item", "menu-item-danger"], ["type", "button", 1, "menu-item", "menu-item-danger", 3, "click"]], template: function BonusProgramPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "p", 3);
      \u0275\u0275text(4, " Increase engagement with your loyalty program. Create a promotion where members can earn extra points when they shop at designated times \u2014 perfect for happy hour or holidays. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "a", 4);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(6, "svg", 5);
      \u0275\u0275element(7, "path", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275text(8, " Create program ");
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(9, "div", 7)(10, "div", 8)(11, "button", 9);
      \u0275\u0275listener("click", function BonusProgramPageComponent_Template_button_click_11_listener() {
        return ctx.activeTab = "All";
      });
      \u0275\u0275text(12, "All");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "button", 9);
      \u0275\u0275listener("click", function BonusProgramPageComponent_Template_button_click_13_listener() {
        return ctx.activeTab = "Active";
      });
      \u0275\u0275text(14, "Active");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "button", 9);
      \u0275\u0275listener("click", function BonusProgramPageComponent_Template_button_click_15_listener() {
        return ctx.activeTab = "Draft";
      });
      \u0275\u0275text(16, "Draft");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "button", 9);
      \u0275\u0275listener("click", function BonusProgramPageComponent_Template_button_click_17_listener() {
        return ctx.activeTab = "Scheduled";
      });
      \u0275\u0275text(18, "Scheduled");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "button", 9);
      \u0275\u0275listener("click", function BonusProgramPageComponent_Template_button_click_19_listener() {
        return ctx.activeTab = "Inactive";
      });
      \u0275\u0275text(20, "Inactive");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "button", 9);
      \u0275\u0275listener("click", function BonusProgramPageComponent_Template_button_click_21_listener() {
        return ctx.activeTab = "Archived";
      });
      \u0275\u0275text(22, "Archived");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "span", 10);
      \u0275\u0275text(24);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(25, BonusProgramPageComponent_Conditional_25_Template, 2, 0, "p", 11)(26, BonusProgramPageComponent_Conditional_26_Template, 2, 1, "p", 12)(27, BonusProgramPageComponent_Conditional_27_Template, 12, 0, "div", 13)(28, BonusProgramPageComponent_Conditional_28_Template, 33, 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "app-dialog", 14);
      \u0275\u0275listener("confirmed", function BonusProgramPageComponent_Template_app_dialog_confirmed_29_listener() {
        return ctx.onConfirmAction();
      })("cancelled", function BonusProgramPageComponent_Template_app_dialog_cancelled_29_listener() {
        return ctx.confirmState = null;
      })("closed", function BonusProgramPageComponent_Template_app_dialog_closed_29_listener() {
        return ctx.confirmState = null;
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275classProp("active", ctx.activeTab === "All");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.activeTab === "Active");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.activeTab === "Draft");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.activeTab === "Scheduled");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.activeTab === "Inactive");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.activeTab === "Archived");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2("", ctx.filteredPrograms.length, " program", ctx.filteredPrograms.length === 1 ? "" : "s", "");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading ? 25 : ctx.loadError ? 26 : ctx.programs.length === 0 ? 27 : 28);
      \u0275\u0275advance(4);
      \u0275\u0275property("visible", !!ctx.confirmState)("title", ctx.confirmDialogTitle)("message", ctx.confirmDialogMessage)("confirmLabel", ctx.confirmDialogConfirmLabel);
    }
  }, dependencies: [CommonModule, NgForOf, FormsModule, RouterLink, DialogComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n}\n.page-wrapper[_ngcontent-%COMP%] {\n  min-height: 100%;\n  margin: -2rem;\n  padding: 2rem;\n  background:\n    linear-gradient(\n      180deg,\n      #f1f5f9 0%,\n      #f8fafc 100%);\n}\n.programs-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.intro-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 1.5rem;\n  margin-bottom: 1.5rem;\n  flex-wrap: wrap;\n}\n.intro-text[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  font-size: 0.95rem;\n  color: #475569;\n  line-height: 1.6;\n  margin: 0;\n  max-width: 720px;\n}\n.btn-create-program[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.6rem 1.25rem;\n  background: #16A34A;\n  color: white;\n  border-radius: 10px;\n  font-size: 0.9rem;\n  font-weight: 600;\n  text-decoration: none;\n  transition: all 0.2s;\n  box-shadow: 0 1px 3px rgba(22, 163, 74, 0.25);\n}\n.btn-create-program[_ngcontent-%COMP%]:hover {\n  background: #15803d;\n  color: white;\n  transform: translateY(-1px);\n  box-shadow: 0 2px 6px rgba(22, 163, 74, 0.3);\n}\n.btn-icon[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n}\n.tabs-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1.25rem;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0;\n  background: white;\n  border-radius: 10px;\n  padding: 4px;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);\n  border: 1px solid #e2e8f0;\n}\n.tab[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  border: none;\n  background: transparent;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #64748b;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.tab[_ngcontent-%COMP%]:hover {\n  color: #0f172a;\n  background: #f1f5f9;\n}\n.tab.active[_ngcontent-%COMP%] {\n  background: #16A34A;\n  color: white;\n}\n.tab-count[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #64748b;\n  font-weight: 500;\n}\n.loading-message[_ngcontent-%COMP%], \n.error-message[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  text-align: center;\n  color: #64748b;\n}\n.error-message[_ngcontent-%COMP%] {\n  color: #b91c1c;\n}\n.empty-state-wrap[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  border: 1px solid #e2e8f0;\n  overflow: visible;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -2px rgba(0, 0, 0, 0.05);\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  color: #64748b;\n}\n.empty-state[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  margin-bottom: 1rem;\n  color: #94a3b8;\n}\n.empty-state[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  margin-bottom: 1.25rem;\n}\n.btn-create-loyalty[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.6rem 1.25rem;\n  background: #16A34A;\n  color: white;\n  border-radius: 10px;\n  font-size: 0.9rem;\n  font-weight: 600;\n  text-decoration: none;\n  transition: all 0.2s;\n  box-shadow: 0 1px 3px rgba(22, 163, 74, 0.25);\n}\n.btn-create-loyalty[_ngcontent-%COMP%]:hover {\n  background: #15803d;\n  color: white;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  border: 1px solid #e2e8f0;\n  overflow: visible;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -2px rgba(0, 0, 0, 0.05);\n}\n.programs-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  table-layout: fixed;\n}\n.programs-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.programs-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 1rem 1.25rem;\n  vertical-align: middle;\n}\n.programs-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 700;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  background: #f8fafc;\n  border-bottom: 1px solid #e2e8f0;\n}\n.programs-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 1rem 1.25rem;\n  border-bottom: 1px solid #f1f5f9;\n  font-size: 0.9rem;\n  color: #334155;\n}\n.program-row[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.program-row[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n.program-row[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.program-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #0f172a;\n}\n.program-type-label[_ngcontent-%COMP%] {\n  color: #475569;\n}\n.bonus-type-cell[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.15rem;\n}\n.bonus-type-line1[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #0f172a;\n}\n.bonus-type-line2[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #64748b;\n}\n.date-cell[_ngcontent-%COMP%] {\n  color: #475569;\n  font-variant-numeric: tabular-nums;\n}\n.status-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  padding: 0.35rem 0.75rem;\n  border-radius: 9999px;\n  font-size: 0.8rem;\n  font-weight: 600;\n}\n.status-icon[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: 16px;\n  height: 16px;\n}\n.status-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.status-text[_ngcontent-%COMP%] {\n  text-transform: none;\n}\n.status-pill.active[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #166534;\n}\n.status-pill.scheduled[_ngcontent-%COMP%] {\n  background: #e0f2fe;\n  color: #0369a1;\n}\n.status-pill.draft[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #b45309;\n}\n.status-pill.archived[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #64748b;\n}\n.status-pill.inactive[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #b91c1c;\n}\n.action-cell[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: right;\n}\n.btn-menu[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  border: none;\n  border-radius: 10px;\n  background: transparent;\n  color: #64748b;\n  cursor: pointer;\n  transition: color 0.2s, background 0.2s;\n}\n.btn-menu[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n  color: #0f172a;\n}\n.dots-icon[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n.menu-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  right: 0;\n  margin-top: 4px;\n  min-width: 160px;\n  background: white;\n  border-radius: 10px;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.12);\n  border: 1px solid #e2e8f0;\n  padding: 4px;\n  z-index: 100;\n}\n.menu-item[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  text-align: left;\n  padding: 0.5rem 0.75rem;\n  border: none;\n  background: none;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  color: #334155;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.menu-item[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n}\n.menu-item-danger[_ngcontent-%COMP%] {\n  color: #b91c1c;\n}\n.menu-item-danger[_ngcontent-%COMP%]:hover {\n  background: #fef2f2;\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  margin-top: 1.5rem;\n}\n.page-btn[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  background: white;\n  color: #475569;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.page-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f8fafc;\n  border-color: #16A34A;\n  color: #16A34A;\n}\n.page-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.page-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n}\n.page-info[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #64748b;\n}\n/*# sourceMappingURL=bonus-program-page.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BonusProgramPageComponent, [{
    type: Component,
    args: [{ selector: "app-bonus-program-page", standalone: true, imports: [CommonModule, FormsModule, RouterLink, DialogComponent], template: `
    <div class="page-wrapper">
      <div class="programs-container">
        <div class="intro-row">
          <p class="intro-text">
            Increase engagement with your loyalty program. Create a promotion where members can earn extra points when they shop at designated times \u2014 perfect for happy hour or holidays.
          </p>
          <a routerLink="/bonus-program/programs" class="btn-create-program">
            <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 5v14M5 12h14"/>
            </svg>
            Create program
          </a>
        </div>

        <div class="tabs-row">
          <div class="tabs">
            <button type="button" class="tab" [class.active]="activeTab === 'All'" (click)="activeTab = 'All'">All</button>
            <button type="button" class="tab" [class.active]="activeTab === 'Active'" (click)="activeTab = 'Active'">Active</button>
            <button type="button" class="tab" [class.active]="activeTab === 'Draft'" (click)="activeTab = 'Draft'">Draft</button>
            <button type="button" class="tab" [class.active]="activeTab === 'Scheduled'" (click)="activeTab = 'Scheduled'">Scheduled</button>
            <button type="button" class="tab" [class.active]="activeTab === 'Inactive'" (click)="activeTab = 'Inactive'">Inactive</button>
            <button type="button" class="tab" [class.active]="activeTab === 'Archived'" (click)="activeTab = 'Archived'">Archived</button>
          </div>
          <span class="tab-count">{{ filteredPrograms.length }} program{{ filteredPrograms.length === 1 ? '' : 's' }}</span>
        </div>

        @if (loading) {
          <p class="loading-message">Loading programs\u2026</p>
        } @else if (loadError) {
          <p class="error-message">{{ loadError }}</p>
        } @else if (programs.length === 0) {
          <div class="table-wrap empty-state-wrap">
            <div class="empty-state">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M20 12v9H4v-9"/><rect x="2" y="7" width="20" height="5" rx="1"/><path d="M12 22V7"/><path d="M12 7c-2-2-4-2.5-4-4.5a2 2 0 0 1 4 0c0 1.5-2 2-4 4.5"/><path d="M12 7c2-2 4-2.5 4-4.5a2 2 0 0 0-4 0c0 1.5 2 2 4 4.5"/>
              </svg>
              <span>You don't have programs created</span>
              <a routerLink="/bonus-program/programs" class="btn-create-loyalty">Create loyalty program</a>
            </div>
          </div>
        } @else {
          <div class="table-wrap">
            <table class="programs-table">
              <colgroup>
                <col style="width:22%">
                <col style="width:14%">
                <col style="width:22%">
                <col style="width:20%">
                <col style="width:14%">
                <col style="width:8%">
              </colgroup>
              <thead>
                <tr>
                  <th>Program name</th>
                  <th>Program type</th>
                  <th>Bonus type</th>
                  <th>Start date \u2013 End date</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let program of paginatedPrograms" class="program-row" (click)="goToProgram(program)">
                  <td>
                    <span class="program-name">{{ program.name || 'Untitled' }}</span>
                  </td>
                  <td>
                    <span class="program-type-label">{{ typeToLabel(program.type) }}</span>
                  </td>
                  <td>
                    <div class="bonus-type-cell">
                      <span class="bonus-type-line1">{{ formatBonusType(program).line1 }}</span>
                      @if (formatBonusType(program).line2) {
                        <span class="bonus-type-line2">{{ formatBonusType(program).line2 }}</span>
                      }
                    </div>
                  </td>
                  <td class="date-cell">{{ formatDateRange(program.startDate, program.endDate) }}</td>
                  <td>
                    <span class="status-pill" [class.active]="program.status === 'ACTIVE'" [class.scheduled]="program.status === 'SCHEDULED'" [class.draft]="program.status === 'DRAFT'" [class.archived]="program.status === 'ARCHIVED'" [class.inactive]="program.status === 'INACTIVE'">
                      <span class="status-icon" [attr.aria-hidden]="true">
                        @switch (program.status) {
                          @case ('ACTIVE') {
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>
                          }
                          @case ('SCHEDULED') {
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
                          }
                          @case ('DRAFT') {
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                          }
                          @case ('ARCHIVED') {
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 8v13H3V8"/><path d="M1 3h22v5H1z"/><path d="M10 12h4"/></svg>
                          }
                          @case ('INACTIVE') {
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M10 15V9"/><path d="M14 15V9"/></svg>
                          }
                          @default {
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>
                          }
                        }
                      </span>
                      <span class="status-text">{{ statusToLabel(program.status) }}</span>
                    </span>
                  </td>
                  <td class="action-cell" (click)="$event.stopPropagation()">
                    <button type="button" class="btn-menu" (click)="toggleMenu(program.uuid)" [attr.aria-expanded]="openMenuUuid === program.uuid" aria-label="Actions">
                      <svg class="dots-icon" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="6" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="12" cy="18" r="1.5"/></svg>
                    </button>
                    @if (openMenuUuid === program.uuid) {
                      <div class="menu-dropdown">
                        @if (program.status === 'DRAFT') {
                          <button type="button" class="menu-item" (click)="actionContinueCreate(program)">Continue editing</button>
                        } @else {
                          <button type="button" class="menu-item" (click)="actionFullView(program)">Full view</button>
                        }
                        <button type="button" class="menu-item" (click)="actionReports(program)">Reports</button>
                        @if (program.status === 'SCHEDULED') {
                          <button type="button" class="menu-item" (click)="actionLaunchNow(program)">Launch now</button>
                        }
                        @if (program.status === 'ACTIVE') {
                          <button type="button" class="menu-item menu-item-danger" (click)="actionDeactivate(program)">Deactivate</button>
                        }
                        @if (program.status === 'INACTIVE' || program.status === 'ARCHIVED' || program.status === 'DRAFT') {
                          <button type="button" class="menu-item menu-item-danger" (click)="actionDelete(program)">Delete</button>
                        }
                      </div>
                    }
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="pagination">
            <button type="button" class="page-btn" [disabled]="currentPage <= 1" (click)="currentPage = currentPage - 1" aria-label="Previous">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <span class="page-info">{{ filteredPrograms.length === 0 ? 0 : (currentPage - 1) * pageSize + 1 }}-{{ Math.min(currentPage * pageSize, filteredPrograms.length) }} of {{ filteredPrograms.length }}</span>
            <button type="button" class="page-btn" [disabled]="currentPage * pageSize >= filteredPrograms.length" (click)="currentPage = currentPage + 1" aria-label="Next">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
            </button>
          </div>
        }
      </div>
    </div>

    <app-dialog
      [visible]="!!confirmState"
      [title]="confirmDialogTitle"
      [message]="confirmDialogMessage"
      [confirmLabel]="confirmDialogConfirmLabel"
      cancelLabel="Cancel"
      (confirmed)="onConfirmAction()"
      (cancelled)="confirmState = null"
      (closed)="confirmState = null">
    </app-dialog>
  `, styles: ["/* angular:styles/component:css;5ece4acc7ee982b53d1848aedf15139dd0d5f60c6743f1f935057376119180a6;/Users/baglan/repo/westwood/westwood-frontend/src/app/features/bonus-program/pages/bonus-program-page/bonus-program-page.component.ts */\n:host {\n  display: block;\n  height: 100%;\n}\n.page-wrapper {\n  min-height: 100%;\n  margin: -2rem;\n  padding: 2rem;\n  background:\n    linear-gradient(\n      180deg,\n      #f1f5f9 0%,\n      #f8fafc 100%);\n}\n.programs-container {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.intro-row {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 1.5rem;\n  margin-bottom: 1.5rem;\n  flex-wrap: wrap;\n}\n.intro-text {\n  flex: 1;\n  min-width: 0;\n  font-size: 0.95rem;\n  color: #475569;\n  line-height: 1.6;\n  margin: 0;\n  max-width: 720px;\n}\n.btn-create-program {\n  flex-shrink: 0;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.6rem 1.25rem;\n  background: #16A34A;\n  color: white;\n  border-radius: 10px;\n  font-size: 0.9rem;\n  font-weight: 600;\n  text-decoration: none;\n  transition: all 0.2s;\n  box-shadow: 0 1px 3px rgba(22, 163, 74, 0.25);\n}\n.btn-create-program:hover {\n  background: #15803d;\n  color: white;\n  transform: translateY(-1px);\n  box-shadow: 0 2px 6px rgba(22, 163, 74, 0.3);\n}\n.btn-icon {\n  width: 18px;\n  height: 18px;\n}\n.tabs-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1.25rem;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.tabs {\n  display: flex;\n  gap: 0;\n  background: white;\n  border-radius: 10px;\n  padding: 4px;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);\n  border: 1px solid #e2e8f0;\n}\n.tab {\n  padding: 0.5rem 1rem;\n  border: none;\n  background: transparent;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #64748b;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.tab:hover {\n  color: #0f172a;\n  background: #f1f5f9;\n}\n.tab.active {\n  background: #16A34A;\n  color: white;\n}\n.tab-count {\n  font-size: 0.875rem;\n  color: #64748b;\n  font-weight: 500;\n}\n.loading-message,\n.error-message {\n  padding: 1.5rem;\n  text-align: center;\n  color: #64748b;\n}\n.error-message {\n  color: #b91c1c;\n}\n.empty-state-wrap {\n  background: white;\n  border-radius: 16px;\n  border: 1px solid #e2e8f0;\n  overflow: visible;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -2px rgba(0, 0, 0, 0.05);\n}\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  color: #64748b;\n}\n.empty-state svg {\n  width: 56px;\n  height: 56px;\n  margin-bottom: 1rem;\n  color: #94a3b8;\n}\n.empty-state span {\n  font-size: 1rem;\n  margin-bottom: 1.25rem;\n}\n.btn-create-loyalty {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.6rem 1.25rem;\n  background: #16A34A;\n  color: white;\n  border-radius: 10px;\n  font-size: 0.9rem;\n  font-weight: 600;\n  text-decoration: none;\n  transition: all 0.2s;\n  box-shadow: 0 1px 3px rgba(22, 163, 74, 0.25);\n}\n.btn-create-loyalty:hover {\n  background: #15803d;\n  color: white;\n}\n.table-wrap {\n  background: white;\n  border-radius: 16px;\n  border: 1px solid #e2e8f0;\n  overflow: visible;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -2px rgba(0, 0, 0, 0.05);\n}\n.programs-table {\n  width: 100%;\n  border-collapse: collapse;\n  table-layout: fixed;\n}\n.programs-table th,\n.programs-table td {\n  text-align: left;\n  padding: 1rem 1.25rem;\n  vertical-align: middle;\n}\n.programs-table th {\n  font-size: 0.7rem;\n  font-weight: 700;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  background: #f8fafc;\n  border-bottom: 1px solid #e2e8f0;\n}\n.programs-table td {\n  padding: 1rem 1.25rem;\n  border-bottom: 1px solid #f1f5f9;\n  font-size: 0.9rem;\n  color: #334155;\n}\n.program-row {\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.program-row:hover {\n  background: #f8fafc;\n}\n.program-row:last-child td {\n  border-bottom: none;\n}\n.program-name {\n  font-weight: 600;\n  color: #0f172a;\n}\n.program-type-label {\n  color: #475569;\n}\n.bonus-type-cell {\n  display: flex;\n  flex-direction: column;\n  gap: 0.15rem;\n}\n.bonus-type-line1 {\n  font-weight: 500;\n  color: #0f172a;\n}\n.bonus-type-line2 {\n  font-size: 0.8rem;\n  color: #64748b;\n}\n.date-cell {\n  color: #475569;\n  font-variant-numeric: tabular-nums;\n}\n.status-pill {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  padding: 0.35rem 0.75rem;\n  border-radius: 9999px;\n  font-size: 0.8rem;\n  font-weight: 600;\n}\n.status-icon {\n  display: inline-flex;\n  width: 16px;\n  height: 16px;\n}\n.status-icon svg {\n  width: 100%;\n  height: 100%;\n}\n.status-text {\n  text-transform: none;\n}\n.status-pill.active {\n  background: #dcfce7;\n  color: #166534;\n}\n.status-pill.scheduled {\n  background: #e0f2fe;\n  color: #0369a1;\n}\n.status-pill.draft {\n  background: #fef3c7;\n  color: #b45309;\n}\n.status-pill.archived {\n  background: #f1f5f9;\n  color: #64748b;\n}\n.status-pill.inactive {\n  background: #fee2e2;\n  color: #b91c1c;\n}\n.action-cell {\n  position: relative;\n  text-align: right;\n}\n.btn-menu {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  border: none;\n  border-radius: 10px;\n  background: transparent;\n  color: #64748b;\n  cursor: pointer;\n  transition: color 0.2s, background 0.2s;\n}\n.btn-menu:hover {\n  background: #f1f5f9;\n  color: #0f172a;\n}\n.dots-icon {\n  width: 20px;\n  height: 20px;\n}\n.menu-dropdown {\n  position: absolute;\n  top: 100%;\n  right: 0;\n  margin-top: 4px;\n  min-width: 160px;\n  background: white;\n  border-radius: 10px;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.12);\n  border: 1px solid #e2e8f0;\n  padding: 4px;\n  z-index: 100;\n}\n.menu-item {\n  display: block;\n  width: 100%;\n  text-align: left;\n  padding: 0.5rem 0.75rem;\n  border: none;\n  background: none;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  color: #334155;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.menu-item:hover {\n  background: #f1f5f9;\n}\n.menu-item-danger {\n  color: #b91c1c;\n}\n.menu-item-danger:hover {\n  background: #fef2f2;\n}\n.pagination {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  margin-top: 1.5rem;\n}\n.page-btn {\n  width: 38px;\n  height: 38px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  background: white;\n  color: #475569;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.page-btn:hover:not(:disabled) {\n  background: #f8fafc;\n  border-color: #16A34A;\n  color: #16A34A;\n}\n.page-btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.page-btn svg {\n  width: 18px;\n  height: 18px;\n}\n.page-info {\n  font-size: 0.875rem;\n  color: #64748b;\n}\n/*# sourceMappingURL=bonus-program-page.component.css.map */\n"] }]
  }], null, { onDocumentClick: [{
    type: HostListener,
    args: ["document:click"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BonusProgramPageComponent, { className: "BonusProgramPageComponent", filePath: "src/app/features/bonus-program/pages/bonus-program-page/bonus-program-page.component.ts", lineNumber: 309 });
})();
export {
  BonusProgramPageComponent
};
//# sourceMappingURL=chunk-7TUOEGRJ.js.map
