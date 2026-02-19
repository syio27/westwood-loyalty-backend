import {
  RewardProgramsService
} from "./chunk-5AEJQPRJ.js";
import {
  DialogComponent
} from "./chunk-BJMBT76H.js";
import "./chunk-QYR5BNYI.js";
import {
  PageHeaderService
} from "./chunk-AWWADESY.js";
import "./chunk-6FFMNYG3.js";
import "./chunk-H6VMPPNV.js";
import {
  ActivatedRoute,
  CommonModule,
  Component,
  DecimalPipe,
  Router,
  RouterLink,
  RouterModule,
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
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-NKSGOSP5.js";

// src/app/features/bonus-program/pages/program-view-page/program-view-page.component.ts
var _c0 = (a0) => ["/bonus-program/view", a0, "overview"];
var _c1 = (a0) => ["/bonus-program/view", a0, "tiers"];
var _c2 = (a0) => ["/bonus-program/view", a0, "schedule"];
var _forTrack0 = ($index, $item) => $item.sortOrder;
var _forTrack1 = ($index, $item) => $item.dayOfWeek;
function ProgramViewPageComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
    \u0275\u0275element(2, "div", 2);
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Loading program...");
    \u0275\u0275elementEnd()()();
  }
}
function ProgramViewPageComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 3);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 4);
    \u0275\u0275element(3, "circle", 5)(4, "path", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 7);
    \u0275\u0275listener("click", function ProgramViewPageComponent_Conditional_1_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.loadProgram());
    });
    \u0275\u0275text(8, "Retry");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
function ProgramViewPageComponent_Conditional_2_Case_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 13);
    \u0275\u0275element(1, "path", 27);
    \u0275\u0275elementEnd();
  }
}
function ProgramViewPageComponent_Conditional_2_Case_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 13);
    \u0275\u0275element(1, "rect", 28)(2, "path", 29);
    \u0275\u0275elementEnd();
  }
}
function ProgramViewPageComponent_Conditional_2_Case_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 13);
    \u0275\u0275element(1, "path", 30)(2, "path", 31);
    \u0275\u0275elementEnd();
  }
}
function ProgramViewPageComponent_Conditional_2_Case_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 13);
    \u0275\u0275element(1, "path", 32)(2, "path", 33)(3, "path", 34);
    \u0275\u0275elementEnd();
  }
}
function ProgramViewPageComponent_Conditional_2_Case_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 13);
    \u0275\u0275element(1, "circle", 5)(2, "path", 35)(3, "path", 36);
    \u0275\u0275elementEnd();
  }
}
function ProgramViewPageComponent_Conditional_2_Case_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 13);
    \u0275\u0275element(1, "circle", 5);
    \u0275\u0275elementEnd();
  }
}
function ProgramViewPageComponent_Conditional_2_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 37);
    \u0275\u0275listener("click", function ProgramViewPageComponent_Conditional_2_Conditional_18_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.confirmAction = "deactivate");
    });
    \u0275\u0275text(1, "Deactivate");
    \u0275\u0275elementEnd();
  }
}
function ProgramViewPageComponent_Conditional_2_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 38);
    \u0275\u0275listener("click", function ProgramViewPageComponent_Conditional_2_Conditional_19_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.confirmAction = "launchNow");
    });
    \u0275\u0275text(1, "Launch Now");
    \u0275\u0275elementEnd();
  }
}
function ProgramViewPageComponent_Conditional_2_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 39);
    \u0275\u0275listener("click", function ProgramViewPageComponent_Conditional_2_Conditional_20_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.confirmAction = "archive");
    });
    \u0275\u0275text(1, "Archive");
    \u0275\u0275elementEnd();
  }
}
function ProgramViewPageComponent_Conditional_2_Conditional_29_Conditional_1_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55)(1, "span", 56);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 57);
    \u0275\u0275text(4, "Bonus Lifespan");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.program.cashbackRule.bonusLifespanDays, " days");
  }
}
function ProgramViewPageComponent_Conditional_2_Conditional_29_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 40)(1, "h2", 41);
    \u0275\u0275text(2, "Cashback at a Glance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 50)(4, "div", 51)(5, "span", 52);
    \u0275\u0275text(6, "Rate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 53);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 51)(10, "span", 52);
    \u0275\u0275text(11, "Per spend");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 53);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 54)(15, "div", 55)(16, "span", 56);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 57);
    \u0275\u0275text(20, "Min. Spend");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 55)(22, "span", 56);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 57);
    \u0275\u0275text(25, "Redeem Limit");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(26, ProgramViewPageComponent_Conditional_2_Conditional_29_Conditional_1_Conditional_26_Template, 5, 1, "div", 55);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.formatCashbackValue(ctx_r1.program.cashbackRule));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.getCashbackPerSpendText(ctx_r1.program.cashbackRule));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(18, 5, ctx_r1.program.cashbackRule.minSpendAmount, "1.0-0"), " \u20B8");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r1.program.cashbackRule.redeemLimitPercent, "%");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.program.cashbackRule.bonusLifespanDays ? 26 : -1);
  }
}
function ProgramViewPageComponent_Conditional_2_Conditional_29_Conditional_54_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const rule_r7 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Bonus lifespan: ", rule_r7.bonusLifespanDays, " days");
  }
}
function ProgramViewPageComponent_Conditional_2_Conditional_29_Conditional_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58)(1, "div", 59)(2, "div", 60);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 13);
    \u0275\u0275element(4, "path", 61)(5, "path", 62);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "span", 63);
    \u0275\u0275text(7, "Earning rule");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 64);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 65)(11, "div", 60);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(12, "svg", 13);
    \u0275\u0275element(13, "path", 66);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(14, "span", 63);
    \u0275\u0275text(15, "Usage rule");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p", 64);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, ProgramViewPageComponent_Conditional_2_Conditional_29_Conditional_54_Conditional_18_Template, 3, 1, "div", 67);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 68)(20, "div", 69)(21, "div", 70);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(22, "svg", 71);
    \u0275\u0275element(23, "path", 72)(24, "path", 73)(25, "path", 74)(26, "path", 75);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(27, "h3", 76);
    \u0275\u0275text(28, "Minimum spend");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "p", 77);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 78)(32, "div", 70);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(33, "svg", 71);
    \u0275\u0275element(34, "path", 79)(35, "path", 80);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(36, "h3", 76);
    \u0275\u0275text(37, "Eligibility");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "p", 77);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const rule_r7 = ctx;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.getEarningRuleText(rule_r7));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.getUsageRuleText(rule_r7));
    \u0275\u0275advance();
    \u0275\u0275conditional(rule_r7.bonusLifespanDays ? 18 : -1);
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx_r1.getMinSpendCardText(rule_r7));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.getEligibilityCardText(rule_r7));
  }
}
function ProgramViewPageComponent_Conditional_2_Conditional_29_Conditional_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49)(1, "p");
    \u0275\u0275text(2, "No cashback rules defined for this program.");
    \u0275\u0275elementEnd()();
  }
}
function ProgramViewPageComponent_Conditional_2_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275template(1, ProgramViewPageComponent_Conditional_2_Conditional_29_Conditional_1_Template, 27, 8, "section", 40);
    \u0275\u0275elementStart(2, "section", 24)(3, "h2", 41);
    \u0275\u0275text(4, "Program Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 42)(6, "div", 43)(7, "span", 44);
    \u0275\u0275text(8, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 45);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 43)(12, "span", 44);
    \u0275\u0275text(13, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 45);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 43)(17, "span", 44);
    \u0275\u0275text(18, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 45);
    \u0275\u0275element(20, "span", 46);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 43)(23, "span", 44);
    \u0275\u0275text(24, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 47);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(27, "section", 24)(28, "h2", 41);
    \u0275\u0275text(29, "Dates");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 42)(31, "div", 43)(32, "span", 44);
    \u0275\u0275text(33, "Start");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "span", 45);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 43)(37, "span", 44);
    \u0275\u0275text(38, "End");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "span", 45);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 43)(42, "span", 44);
    \u0275\u0275text(43, "Created");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "span", 45);
    \u0275\u0275text(45);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 43)(47, "span", 44);
    \u0275\u0275text(48, "Updated");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "span", 45);
    \u0275\u0275text(50);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(51, "section", 48)(52, "h2", 41);
    \u0275\u0275text(53, "Cashback Rules");
    \u0275\u0275elementEnd();
    \u0275\u0275template(54, ProgramViewPageComponent_Conditional_2_Conditional_29_Conditional_54_Template, 40, 5)(55, ProgramViewPageComponent_Conditional_2_Conditional_29_Conditional_55_Template, 3, 0, "div", 49);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_12_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.program.type === "CASHBACK" && ctx_r1.program.cashbackRule ? 1 : -1);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.program.name || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.typeLabel(ctx_r1.program.type));
    \u0275\u0275advance(5);
    \u0275\u0275attribute("data-status", ctx_r1.program.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.statusLabel(ctx_r1.program.status), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.program.description || "\u2014");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(ctx_r1.program.startDate));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(ctx_r1.program.endDate) || "No end date");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(ctx_r1.program.createdAt));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(ctx_r1.program.updatedAt));
    \u0275\u0275advance(4);
    \u0275\u0275conditional((tmp_12_0 = ctx_r1.program.cashbackRule) ? 54 : 55, tmp_12_0);
  }
}
function ProgramViewPageComponent_Conditional_2_Conditional_30_Conditional_3_For_4_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 90)(1, "span", 91);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 92);
    \u0275\u0275element(4, "path", 93);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tier_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatTierRange(tier_r8));
  }
}
function ProgramViewPageComponent_Conditional_2_Conditional_30_Conditional_3_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 86)(1, "div", 87)(2, "span", 88);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 89);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, ProgramViewPageComponent_Conditional_2_Conditional_30_Conditional_3_For_4_Conditional_6_Template, 5, 1, "div", 90);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tier_r8 = ctx.$implicit;
    const \u0275$index_352_r9 = ctx.$index;
    const \u0275$count_352_r10 = ctx.$count;
    \u0275\u0275classProp("last", \u0275$index_352_r9 === \u0275$count_352_r10 - 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(tier_r8.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("+", tier_r8.extraEarningPercent, "%");
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_352_r9 === \u0275$count_352_r10 - 1) ? 6 : -1);
  }
}
function ProgramViewPageComponent_Conditional_2_Conditional_30_Conditional_3_For_6_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 99);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "a", 101);
    \u0275\u0275text(3, "\u2192 View clients");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tier_r12 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" You have ", ctx_r1.getTierClients(tier_r12).length, " client", ctx_r1.getTierClients(tier_r12).length === 1 ? "" : "s", " tiered in this level. ");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", ctx_r1.getTierPageLink(tier_r12));
  }
}
function ProgramViewPageComponent_Conditional_2_Conditional_30_Conditional_3_For_6_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p", 100);
    \u0275\u0275text(1, " No clients in this tier yet. ");
    \u0275\u0275elementStart(2, "button", 97);
    \u0275\u0275listener("click", function ProgramViewPageComponent_Conditional_2_Conditional_30_Conditional_3_For_6_Conditional_10_Template_button_click_2_listener($event) {
      \u0275\u0275restoreView(_r13);
      const tier_r12 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.openEligibilityPopover($event, tier_r12));
    });
    \u0275\u0275text(3, " View eligibility rules ");
    \u0275\u0275elementEnd()();
  }
}
function ProgramViewPageComponent_Conditional_2_Conditional_30_Conditional_3_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 85)(1, "div", 94)(2, "h3", 95);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 96);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 97);
    \u0275\u0275listener("click", function ProgramViewPageComponent_Conditional_2_Conditional_30_Conditional_3_For_6_Template_button_click_6_listener($event) {
      const tier_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.openEligibilityPopover($event, tier_r12));
    });
    \u0275\u0275text(7, " View eligibility rules ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 98);
    \u0275\u0275template(9, ProgramViewPageComponent_Conditional_2_Conditional_30_Conditional_3_For_6_Conditional_9_Template, 4, 3, "p", 99)(10, ProgramViewPageComponent_Conditional_2_Conditional_30_Conditional_3_For_6_Conditional_10_Template, 4, 0, "p", 100);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tier_r12 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(tier_r12.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatTierRange(tier_r12));
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.getTierClients(tier_r12).length > 0 ? 9 : 10);
  }
}
function ProgramViewPageComponent_Conditional_2_Conditional_30_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 82);
    \u0275\u0275text(1, "Customers move up tiers based on total spend during the program period.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 83);
    \u0275\u0275repeaterCreate(3, ProgramViewPageComponent_Conditional_2_Conditional_30_Conditional_3_For_4_Template, 7, 5, "div", 84, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(5, ProgramViewPageComponent_Conditional_2_Conditional_30_Conditional_3_For_6_Template, 11, 3, "div", 85, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.sortedTiers);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.sortedTiers);
  }
}
function ProgramViewPageComponent_Conditional_2_Conditional_30_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 81)(1, "div", 102);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 103);
    \u0275\u0275element(3, "path", 104);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "h3", 105);
    \u0275\u0275text(5, "This program has no tiers");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 106);
    \u0275\u0275text(7, " Tiers reward your best customers with higher cashback as they spend more. They increase motivation to return and help you recognize loyalty. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 107);
    \u0275\u0275text(9, " Add tiers when editing this program to unlock tiered rewards (e.g. Bronze, Silver, Gold) and watch repeat spend grow. ");
    \u0275\u0275elementEnd()();
  }
}
function ProgramViewPageComponent_Conditional_2_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 24)(1, "h2", 41);
    \u0275\u0275text(2, "Tiers");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ProgramViewPageComponent_Conditional_2_Conditional_30_Conditional_3_Template, 7, 0)(4, ProgramViewPageComponent_Conditional_2_Conditional_30_Conditional_4_Template, 10, 0, "div", 81);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.program.cashbackTiers && ctx_r1.program.cashbackTiers.length > 0 ? 3 : 4);
  }
}
function ProgramViewPageComponent_Conditional_2_Conditional_31_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 113);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("This program is live only until ", ctx_r1.formatDateShort(ctx_r1.program.endDate), ".");
  }
}
function ProgramViewPageComponent_Conditional_2_Conditional_31_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 113);
    \u0275\u0275text(1, "This program is always on, until you deactivate it.");
    \u0275\u0275elementEnd();
  }
}
function ProgramViewPageComponent_Conditional_2_Conditional_31_Conditional_21_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 125)(1, "span", 126);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 127);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const day_r14 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("on", day_r14.enabled)("off", !day_r14.enabled);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.dayShort(day_r14.dayOfWeek));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(day_r14.enabled ? day_r14.startTime && day_r14.endTime ? ctx_r1.formatTimeHHMM(day_r14.startTime) + " \u2013 " + ctx_r1.formatTimeHHMM(day_r14.endTime) : "All day" : "Off");
  }
}
function ProgramViewPageComponent_Conditional_2_Conditional_31_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 122);
    \u0275\u0275repeaterCreate(1, ProgramViewPageComponent_Conditional_2_Conditional_31_Conditional_21_For_2_Template, 5, 6, "div", 123, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 124);
    \u0275\u0275text(4, "Bonuses apply only during the weekly schedule below.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 124);
    \u0275\u0275text(6, "Times are shown in your local timezone.");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.sortedScheduleDays);
  }
}
function ProgramViewPageComponent_Conditional_2_Conditional_31_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 121);
    \u0275\u0275text(1, "Active every day, all day.");
    \u0275\u0275elementEnd();
  }
}
function ProgramViewPageComponent_Conditional_2_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "section", 108)(2, "h2", 41);
    \u0275\u0275text(3, "Program Period");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 109)(5, "span", 110);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 111);
    \u0275\u0275text(8, "\u2192");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 112);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(11, ProgramViewPageComponent_Conditional_2_Conditional_31_Conditional_11_Template, 2, 1, "p", 113)(12, ProgramViewPageComponent_Conditional_2_Conditional_31_Conditional_12_Template, 2, 0, "p", 113);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "section", 114)(14, "h2", 115);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(15, "svg", 116);
    \u0275\u0275element(16, "rect", 117)(17, "line", 118)(18, "line", 119)(19, "line", 120);
    \u0275\u0275elementEnd();
    \u0275\u0275text(20, " Weekly Schedule ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, ProgramViewPageComponent_Conditional_2_Conditional_31_Conditional_21_Template, 7, 0)(22, ProgramViewPageComponent_Conditional_2_Conditional_31_Conditional_22_Template, 2, 0, "p", 121);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.formatDateShort(ctx_r1.program.startDate));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.program.endDate ? ctx_r1.formatDateShort(ctx_r1.program.endDate) : "No end");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.program.endDate ? 11 : 12);
    \u0275\u0275advance(10);
    \u0275\u0275conditional(ctx_r1.program.weeklySchedules && ctx_r1.program.weeklySchedules.length > 0 ? 21 : 22);
  }
}
function ProgramViewPageComponent_Conditional_2_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 128);
    \u0275\u0275listener("click", function ProgramViewPageComponent_Conditional_2_Conditional_32_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeEligibilityPopover());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "div", 129)(2, "p", 130);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 131);
    \u0275\u0275listener("click", function ProgramViewPageComponent_Conditional_2_Conditional_32_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeEligibilityPopover());
    });
    \u0275\u0275text(5, "Close");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275styleProp("left", ctx_r1.popoverX, "px")("top", ctx_r1.popoverY, "px");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getEligibilityHumanText(ctx_r1.eligibilityPopoverTier));
  }
}
function ProgramViewPageComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "header", 8)(2, "div", 9)(3, "h1", 10);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 11)(6, "span", 12);
    \u0275\u0275template(7, ProgramViewPageComponent_Conditional_2_Case_7_Template, 2, 0, ":svg:svg", 13)(8, ProgramViewPageComponent_Conditional_2_Case_8_Template, 3, 0, ":svg:svg", 13)(9, ProgramViewPageComponent_Conditional_2_Case_9_Template, 3, 0, ":svg:svg", 13)(10, ProgramViewPageComponent_Conditional_2_Case_10_Template, 4, 0, ":svg:svg", 13)(11, ProgramViewPageComponent_Conditional_2_Case_11_Template, 4, 0, ":svg:svg", 13)(12, ProgramViewPageComponent_Conditional_2_Case_12_Template, 2, 0, ":svg:svg", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 14);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 15)(16, "button", 16);
    \u0275\u0275listener("click", function ProgramViewPageComponent_Conditional_2_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAdjustProgram());
    });
    \u0275\u0275text(17, "Adjust Program");
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, ProgramViewPageComponent_Conditional_2_Conditional_18_Template, 2, 0, "button", 17)(19, ProgramViewPageComponent_Conditional_2_Conditional_19_Template, 2, 0, "button", 18)(20, ProgramViewPageComponent_Conditional_2_Conditional_20_Template, 2, 0, "button", 19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 20)(22, "a", 21);
    \u0275\u0275text(23, "Overview");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "a", 21);
    \u0275\u0275text(25, "Tiers");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "a", 21);
    \u0275\u0275text(27, "Schedule");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 22);
    \u0275\u0275template(29, ProgramViewPageComponent_Conditional_2_Conditional_29_Template, 56, 11, "div", 23)(30, ProgramViewPageComponent_Conditional_2_Conditional_30_Template, 5, 1, "section", 24)(31, ProgramViewPageComponent_Conditional_2_Conditional_31_Template, 23, 4, "div", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275template(32, ProgramViewPageComponent_Conditional_2_Conditional_32_Template, 6, 5);
    \u0275\u0275elementStart(33, "app-dialog", 26);
    \u0275\u0275listener("confirmed", function ProgramViewPageComponent_Conditional_2_Template_app_dialog_confirmed_33_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onConfirmAction());
    })("cancelled", function ProgramViewPageComponent_Conditional_2_Template_app_dialog_cancelled_33_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmAction = null);
    })("closed", function ProgramViewPageComponent_Conditional_2_Template_app_dialog_closed_33_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmAction = null);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.program.name || "Untitled Program");
    \u0275\u0275advance();
    \u0275\u0275attribute("data-status", ctx_r1.program.status);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_3_0 = ctx_r1.program.status) === "ACTIVE" ? 7 : tmp_3_0 === "SCHEDULED" ? 8 : tmp_3_0 === "DRAFT" ? 9 : tmp_3_0 === "ARCHIVED" ? 10 : tmp_3_0 === "INACTIVE" ? 11 : 12);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.statusLabel(ctx_r1.program.status));
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.program.status === "ACTIVE" ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.program.status === "SCHEDULED" ? 19 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.program.status === "INACTIVE" ? 20 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(21, _c0, ctx_r1.viewUuid));
    \u0275\u0275attribute("aria-selected", ctx_r1.activeTab === "overview");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(23, _c1, ctx_r1.viewUuid));
    \u0275\u0275attribute("aria-selected", ctx_r1.activeTab === "tiers");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(25, _c2, ctx_r1.viewUuid));
    \u0275\u0275attribute("aria-selected", ctx_r1.activeTab === "schedule");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.activeTab === "overview" ? 29 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.activeTab === "tiers" ? 30 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.activeTab === "schedule" ? 31 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.eligibilityPopoverTier ? 32 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("visible", !!ctx_r1.confirmAction)("title", ctx_r1.confirmDialogTitle)("message", ctx_r1.confirmDialogMessage)("confirmLabel", ctx_r1.confirmDialogConfirmLabel);
  }
}
var ProgramViewPageComponent = class _ProgramViewPageComponent {
  program = null;
  loading = true;
  error = null;
  activeTab = "overview";
  confirmAction = null;
  get confirmDialogTitle() {
    if (!this.confirmAction)
      return "";
    const t = {
      deactivate: "Deactivate program?",
      archive: "Archive program?",
      launchNow: "Launch program now?"
    };
    return t[this.confirmAction];
  }
  get confirmDialogMessage() {
    if (!this.confirmAction)
      return "";
    const m = {
      deactivate: "This program will be deactivated and will stop affecting customers.",
      archive: "This program will be moved to the archive.",
      launchNow: "It will start affecting customers and the start date will be set to today."
    };
    return m[this.confirmAction];
  }
  get confirmDialogConfirmLabel() {
    if (!this.confirmAction)
      return "Confirm";
    const l = {
      deactivate: "Deactivate",
      archive: "Archive",
      launchNow: "Launch now"
    };
    return l[this.confirmAction];
  }
  /** UUID from route for tab links */
  get viewUuid() {
    return this.uuid;
  }
  /** Sorted Mon–Sun for display */
  get sortedTiers() {
    if (!this.program?.cashbackTiers?.length)
      return [];
    return [...this.program.cashbackTiers].sort((a, b) => a.sortOrder - b.sortOrder);
  }
  /** Schedule grouped (e.g. "Mon – Fri: 08:00 – 18:00") */
  get scheduleGroups() {
    if (!this.program?.weeklySchedules?.length)
      return [];
    return this.groupSchedule(this.sortedScheduleDays);
  }
  /** True when different days have different times (use list view instead of bars) */
  get hasDifferentScheduleTimes() {
    const days = this.sortedScheduleDays;
    const enabled = days.filter((d) => d.enabled);
    if (enabled.length <= 1)
      return false;
    const first = enabled[0];
    const same = enabled.every((d) => d.startTime === first?.startTime && d.endTime === first?.endTime);
    return !same;
  }
  /** One entry per weekday, Mon–Sun order (always 7; missing days are off) */
  get sortedScheduleDays() {
    const order = ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"];
    if (!this.program?.weeklySchedules?.length) {
      return order.map((dayOfWeek) => ({ dayOfWeek, enabled: false, startTime: null, endTime: null }));
    }
    const byDay = /* @__PURE__ */ new Map();
    for (const d of this.program.weeklySchedules) {
      if (!byDay.has(d.dayOfWeek))
        byDay.set(d.dayOfWeek, d);
    }
    return order.map((dayOfWeek) => byDay.get(dayOfWeek) ?? { dayOfWeek, enabled: false, startTime: null, endTime: null });
  }
  eligibilityPopoverTier = null;
  popoverX = 0;
  popoverY = 0;
  uuid = "";
  pageHeaderService = inject(PageHeaderService);
  route = inject(ActivatedRoute);
  router = inject(Router);
  rewardService = inject(RewardProgramsService);
  tierClientsMap = /* @__PURE__ */ new Map();
  routeParamSub;
  static VALID_TABS = ["overview", "tiers", "schedule"];
  ngOnInit() {
    this.uuid = this.route.snapshot.paramMap.get("uuid") || "";
    if (!this.uuid) {
      this.error = "Missing program identifier.";
      this.loading = false;
      return;
    }
    this.syncTabFromRoute();
    this.routeParamSub = this.route.paramMap.subscribe(() => this.syncTabFromRoute());
    this.loadProgram();
  }
  ngOnDestroy() {
    this.routeParamSub?.unsubscribe();
    this.pageHeaderService.clear();
  }
  syncTabFromRoute() {
    const tab = this.route.snapshot.paramMap.get("tab") ?? "overview";
    if (_ProgramViewPageComponent.VALID_TABS.includes(tab)) {
      this.activeTab = tab;
    } else {
      this.router.navigate(["/bonus-program/view", this.uuid, "overview"], { replaceUrl: true });
    }
  }
  loadProgram() {
    this.loading = true;
    this.error = null;
    this.tierClientsMap.clear();
    this.rewardService.getProgram(this.uuid).subscribe({
      next: (p) => {
        if (p.status === "DRAFT") {
          this.router.navigate(["/bonus-program", "create", p.type.toLowerCase(), p.uuid]);
          return;
        }
        this.program = p;
        this.loading = false;
        this.setPageHeader();
        this.loadTieredClientsForTiersSection();
      },
      error: (err) => {
        this.error = err?.error?.message || "Failed to load program.";
        this.loading = false;
      }
    });
  }
  /** Load tiered clients once to populate inline "Clients in this tier" per tier */
  loadTieredClientsForTiersSection() {
    if (!this.program?.uuid || !this.program.cashbackTiers?.length)
      return;
    this.rewardService.getTieredClients(this.program.uuid, 0, 500).subscribe({
      next: (res) => {
        const bySortOrder = /* @__PURE__ */ new Map();
        for (const row of res.content) {
          const list = bySortOrder.get(row.tierSortOrder) ?? [];
          list.push({
            clientUuid: row.clientUuid,
            name: row.clientName,
            phone: row.phone ?? void 0,
            totalSpend: row.programPeriodSpend
          });
          bySortOrder.set(row.tierSortOrder, list);
        }
        this.tierClientsMap = bySortOrder;
      }
    });
  }
  setPageHeader() {
    if (!this.program)
      return;
    this.pageHeaderService.setPageHeader("Program View", [
      { label: "Home", route: "/home" },
      { label: "Reward Programs", route: "/bonus-program" },
      { label: "Program View", route: "/bonus-program/view/" + this.program.uuid }
    ]);
  }
  /** Group consecutive days with same schedule into "Mon – Fri: 08:00 – 18:00" */
  groupSchedule(days) {
    const short = {
      MONDAY: "Mon",
      TUESDAY: "Tue",
      WEDNESDAY: "Wed",
      THURSDAY: "Thu",
      FRIDAY: "Fri",
      SATURDAY: "Sat",
      SUNDAY: "Sun"
    };
    const groups = [];
    let i = 0;
    while (i < days.length) {
      const d = days[i];
      const time = d.enabled ? d.startTime && d.endTime ? `${d.startTime} \u2013 ${d.endTime}` : "All day" : "Off";
      let j = i + 1;
      while (j < days.length && days[j].enabled === d.enabled && (d.enabled ? days[j].startTime === d.startTime && days[j].endTime === d.endTime : true)) {
        j++;
      }
      const startDay = short[d.dayOfWeek] ?? d.dayOfWeek;
      const endDay = j - 1 > i ? short[days[j - 1].dayOfWeek] ?? days[j - 1].dayOfWeek : startDay;
      const label = startDay === endDay ? startDay : `${startDay} \u2013 ${endDay}`;
      groups.push({ label, time, enabled: d.enabled });
      i = j;
    }
    return groups;
  }
  formatTierRange(tier) {
    const min = tier.minAmount.toLocaleString("en-US") + " \u20B8";
    const max = tier.maxAmount != null ? tier.maxAmount.toLocaleString("en-US") + " \u20B8" : "No cap";
    return `${min} \u2013 ${max}`;
  }
  dayShort(dayOfWeek) {
    const m = {
      MONDAY: "Mon",
      TUESDAY: "Tue",
      WEDNESDAY: "Wed",
      THURSDAY: "Thu",
      FRIDAY: "Fri",
      SATURDAY: "Sat",
      SUNDAY: "Sun"
    };
    return m[dayOfWeek] ?? dayOfWeek;
  }
  getEarningRuleText(rule) {
    const value = rule.cashbackType === "PERCENTAGE" ? `${rule.cashbackValue}%` : `${rule.cashbackValue} pts`;
    const min = rule.minSpendAmount.toLocaleString("en-US");
    return `Earn ${value} back on every purchase over ${min} \u20B8.`;
  }
  getUsageRuleText(rule) {
    const parts = [];
    parts.push(`Redeem up ${rule.redeemLimitPercent}% of your bill.`);
    if (rule.bonusLifespanDays != null) {
      parts.push(`Points expire in ${rule.bonusLifespanDays} days.`);
    }
    return parts.join(" ");
  }
  getEligibilityHumanText(tier) {
    const min = tier.minAmount.toLocaleString("en-US");
    if (tier.maxAmount != null) {
      const maxStr = tier.maxAmount.toLocaleString("en-US");
      return `To reach ${tier.name}, a customer must spend between ${min} \u20B8 and ${maxStr} \u20B8 within the program period.`;
    }
    return `To reach ${tier.name}, a customer must spend a total of ${min} \u20B8 or more within the program period.`;
  }
  openEligibilityPopover(event, tier) {
    this.eligibilityPopoverTier = tier;
    const rect = event.target.getBoundingClientRect();
    this.popoverX = Math.min(rect.left, window.innerWidth - 340);
    this.popoverY = rect.bottom + 8;
  }
  closeEligibilityPopover() {
    this.eligibilityPopoverTier = null;
  }
  getTierPageLink(tier) {
    if (!this.program?.uuid)
      return ["/bonus-program"];
    return ["/bonus-program", "view", this.program.uuid, "tier", encodeURIComponent(tier.name)];
  }
  onAdjustProgram() {
  }
  getTierClients(tier) {
    return this.tierClientsMap.get(tier.sortOrder) ?? [];
  }
  typeLabel(t) {
    const m = {
      CASHBACK: "Cashback",
      WELCOME: "Welcome",
      BIRTHDAY: "Birthday",
      REFERRAL: "Referral"
    };
    return m[t] ?? t;
  }
  statusLabel(s) {
    const m = {
      ACTIVE: "Active",
      SCHEDULED: "Scheduled",
      DRAFT: "Draft",
      INACTIVE: "Inactive",
      ARCHIVED: "Archived"
    };
    return m[s] ?? s;
  }
  cashbackTypeLabel(t) {
    return t === "PERCENTAGE" ? "Percentage (%)" : "Bonus Points";
  }
  eligibilityLabel(t) {
    const m = {
      ALL: "All items and categories",
      SPECIFIC_ITEMS: "Specific items",
      SPECIFIC_CATEGORIES: "Specific categories",
      SPECIFIC_SERVICES: "Specific services"
    };
    return m[t] ?? t;
  }
  /** Copy for the Min. spend criteria card */
  getMinSpendCardText(rule) {
    const amount = rule.minSpendAmount.toLocaleString("en-US");
    return `Bonuses apply only to payment transactions that meet or exceed ${amount} \u20B8.`;
  }
  /** Copy for the Eligibility criteria card */
  getEligibilityCardText(rule) {
    const t = rule.eligibilityType;
    if (t === "ALL")
      return "Bonuses apply to all purchases\u2014any item or category qualifies.";
    if (t === "SPECIFIC_ITEMS")
      return "Bonuses apply only to transactions made to buy specific items.";
    if (t === "SPECIFIC_CATEGORIES")
      return "Bonuses apply only to transactions made to buy items from specific categories.";
    if (t === "SPECIFIC_SERVICES")
      return "Bonuses apply only to transactions made to buy specific services.";
    return `Bonuses apply to purchases of ${this.eligibilityLabel(t).toLowerCase()}.`;
  }
  formatDate(iso) {
    if (!iso)
      return "\u2014";
    try {
      return new Date(iso).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      });
    } catch {
      return iso;
    }
  }
  formatDateShort(iso) {
    if (!iso)
      return "\u2014";
    try {
      return new Date(iso).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric"
      });
    } catch {
      return iso;
    }
  }
  /** Time as HH:MM (strips seconds if present, e.g. 08:00:00 → 08:00) */
  formatTimeHHMM(value) {
    if (!value)
      return "\u2014";
    const trimmed = value.trim();
    if (trimmed.length >= 5)
      return trimmed.slice(0, 5);
    return trimmed;
  }
  getCashbackPerSpendText(rule) {
    if (rule.cashbackType === "PERCENTAGE") {
      return `${rule.cashbackValue} \u20B8 back per 100\u20B8`;
    }
    return `${rule.cashbackValue} pts per ${rule.pointsSpendThreshold} \u20B8`;
  }
  formatCashbackValue(rule) {
    return rule.cashbackType === "PERCENTAGE" ? `${rule.cashbackValue}%` : `${rule.cashbackValue} pts`;
  }
  onConfirmAction() {
    const action = this.confirmAction;
    this.confirmAction = null;
    if (!action || !this.program)
      return;
    if (action === "deactivate")
      this.doDeactivate();
    else if (action === "archive")
      this.doArchive();
    else if (action === "launchNow")
      this.doLaunchNow();
  }
  doDeactivate() {
    if (!this.program)
      return;
    this.rewardService.deactivateProgram(this.program.uuid).subscribe({
      next: (p) => {
        this.program = p;
        this.setPageHeader();
      },
      error: () => {
      }
    });
  }
  doLaunchNow() {
    if (!this.program)
      return;
    this.rewardService.launchCashbackProgram(this.program.uuid, { immediate: true }).subscribe({
      next: (p) => {
        this.program = p;
        this.setPageHeader();
      },
      error: () => {
      }
    });
  }
  doArchive() {
    if (!this.program)
      return;
    this.rewardService.archiveProgram(this.program.uuid).subscribe({
      next: (p) => {
        this.program = p;
        this.setPageHeader();
      },
      error: () => {
      }
    });
  }
  static \u0275fac = function ProgramViewPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProgramViewPageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProgramViewPageComponent, selectors: [["app-program-view-page"]], decls: 3, vars: 3, consts: [[1, "page-shell"], [1, "loading-state"], [1, "spinner"], [1, "error-state"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5", 1, "error-icon"], ["cx", "12", "cy", "12", "r", "10"], ["d", "M12 8v4m0 4h.01"], [1, "btn-retry", 3, "click"], [1, "program-summary"], [1, "summary-left"], [1, "summary-title"], [1, "summary-badge", "status"], ["aria-hidden", "true", 1, "summary-badge-icon"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], [1, "summary-badge-text"], [1, "summary-actions"], ["type", "button", 1, "btn-action", "btn-secondary", 3, "click"], ["type", "button", 1, "btn-action", "btn-outline-danger"], ["type", "button", 1, "btn-action", "btn-primary"], ["type", "button", 1, "btn-action", "btn-outline"], ["role", "tablist", 1, "tabs-bar"], ["role", "tab", 1, "tab-item", 3, "routerLink"], [1, "tab-content"], [1, "tab-cards", "overview-cards"], [1, "card"], [1, "tab-cards"], ["cancelLabel", "Cancel", 3, "confirmed", "cancelled", "closed", "visible", "title", "message", "confirmLabel"], ["d", "M20 6L9 17l-5-5"], ["x", "3", "y", "4", "width", "18", "height", "18", "rx", "2"], ["d", "M16 2v4M8 2v4M3 10h18"], ["d", "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"], ["d", "M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"], ["d", "M21 8v13H3V8"], ["d", "M1 3h22v5H1z"], ["d", "M10 12h4"], ["d", "M10 15V9"], ["d", "M14 15V9"], ["type", "button", 1, "btn-action", "btn-outline-danger", 3, "click"], ["type", "button", 1, "btn-action", "btn-primary", 3, "click"], ["type", "button", 1, "btn-action", "btn-outline", 3, "click"], [1, "card", "card-span", "cashback-glance"], [1, "card-title"], [1, "info-list"], [1, "info-row"], [1, "info-label"], [1, "info-value"], [1, "status-dot"], [1, "info-value", "description-text"], [1, "card", "card-span", "rules-card"], [1, "empty-inline"], [1, "glance-two-views"], [1, "glance-view"], [1, "glance-view-label"], [1, "glance-view-value"], [1, "stats-row"], [1, "stat-block"], [1, "stat-value"], [1, "stat-label"], [1, "rules-two-col"], [1, "rule-box", "earning"], [1, "rule-box-icon"], ["d", "M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"], ["d", "M3 6h18M16 10a4 4 0 01-8 0"], [1, "rule-box-label"], [1, "rule-box-text"], [1, "rule-box", "usage"], ["d", "M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"], [1, "rule-box-meta"], [1, "rules-criteria-row"], [1, "criteria-card", "min-spend"], [1, "criteria-card-icon"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M21 12V7H5a2 2 0 01 0-4h14v4"], ["d", "M3 5v14a2 2 0 002 2h16a2 2 0 002-2V9"], ["d", "M18 12v4"], ["d", "M14 12v4"], [1, "criteria-card-title"], [1, "criteria-card-text"], [1, "criteria-card", "eligibility"], ["d", "M9 11l3 3L22 4"], ["d", "M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14"], [1, "empty-tiers"], [1, "card-desc"], [1, "progress-track"], [1, "track-segment", 3, "last"], [1, "tier-detail"], [1, "track-segment"], [1, "track-node"], [1, "track-tier-name"], [1, "track-tier-badge"], [1, "track-connector"], [1, "track-range"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "track-arrow"], ["d", "M5 12h14M12 5l7 7-7 7"], [1, "tier-detail-header"], [1, "tier-detail-title"], [1, "tier-detail-range"], ["type", "button", 1, "link-eligibility", 3, "click"], [1, "tier-clients-section"], [1, "tier-clients-summary"], [1, "tier-clients-empty"], [1, "link-view-clients", 3, "routerLink"], [1, "empty-tiers-icon"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5"], ["d", "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"], [1, "empty-tiers-title"], [1, "empty-tiers-desc"], [1, "empty-tiers-cta"], [1, "card", "card-span", "program-period-card"], [1, "period-hero"], [1, "period-date", "start"], [1, "period-sep"], [1, "period-date", "end"], [1, "period-info-copy"], [1, "card", "card-span"], [1, "card-title", "card-title-with-icon"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "card-title-icon"], ["x", "3", "y", "4", "width", "18", "height", "18", "rx", "2", "ry", "2"], ["x1", "16", "y1", "2", "x2", "16", "y2", "6"], ["x1", "8", "y1", "2", "x2", "8", "y2", "6"], ["x1", "3", "y1", "10", "x2", "21", "y2", "10"], [1, "strip-all-day"], [1, "schedule-blocks"], [1, "schedule-block", 3, "on", "off"], [1, "schedule-timezone-note"], [1, "schedule-block"], [1, "schedule-block-day"], [1, "schedule-block-time"], [1, "popover-backdrop", 3, "click"], ["role", "dialog", "aria-label", "Eligibility rules", 1, "popover"], [1, "popover-text"], ["type", "button", 1, "popover-close", 3, "click"]], template: function ProgramViewPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, ProgramViewPageComponent_Conditional_0_Template, 5, 0, "div", 0)(1, ProgramViewPageComponent_Conditional_1_Template, 9, 1, "div", 0)(2, ProgramViewPageComponent_Conditional_2_Template, 34, 27, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.loading ? 0 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.loading && ctx.error ? 1 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.loading && !ctx.error && ctx.program ? 2 : -1);
    }
  }, dependencies: [CommonModule, DecimalPipe, RouterModule, RouterLink, DialogComponent], styles: ['\n\n.page-shell[_ngcontent-%COMP%] {\n  max-width: 1400px;\n  margin: 0 auto;\n  padding: 0 1.5rem 3rem;\n}\n.loading-state[_ngcontent-%COMP%], \n.error-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  padding: 6rem 0;\n  color: #64748b;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 3px solid #e2e8f0;\n  border-top-color: var(--primary-color, #15803d);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin .7s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.error-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  color: #ef4444;\n}\n.btn-retry[_ngcontent-%COMP%] {\n  padding: 0.5rem 1.25rem;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  background: #fff;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  color: #0f172a;\n  transition: all 0.15s;\n}\n.btn-retry[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary-color, #15803d);\n  color: var(--primary-color, #15803d);\n}\n.program-summary[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-bottom: 1.75rem;\n  flex-wrap: wrap;\n}\n.summary-left[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.summary-title[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n  letter-spacing: -0.03em;\n  line-height: 1.2;\n}\n.summary-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  padding: 0.25rem 1rem;\n  border-radius: 6px;\n  align-self: flex-start;\n}\n.summary-badge-icon[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: 16px;\n  height: 16px;\n  flex-shrink: 0;\n}\n.summary-badge-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.summary-badge-text[_ngcontent-%COMP%] {\n  text-transform: none;\n}\n.summary-badge[data-status=ACTIVE][_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #15803d;\n}\n.summary-badge[data-status=SCHEDULED][_ngcontent-%COMP%] {\n  background: #e0f2fe;\n  color: #0369a1;\n}\n.summary-badge[data-status=DRAFT][_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.summary-badge[data-status=INACTIVE][_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.summary-badge[data-status=ARCHIVED][_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #475569;\n}\n.summary-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  flex-shrink: 0;\n}\n.btn-action[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  border-radius: 8px;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  cursor: pointer;\n  border: 1px solid transparent;\n  transition: all 0.15s;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #475569;\n  border-color: #e2e8f0;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #e2e8f0;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: var(--primary-color, #15803d);\n  color: #fff;\n  border-color: var(--primary-color, #15803d);\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: var(--primary-color-hover, #14532d);\n}\n.btn-outline[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #475569;\n  border-color: #e2e8f0;\n}\n.btn-outline[_ngcontent-%COMP%]:hover {\n  border-color: #94a3b8;\n}\n.btn-outline-danger[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #dc2626;\n  border-color: #fecaca;\n}\n.btn-outline-danger[_ngcontent-%COMP%]:hover {\n  background: #fef2f2;\n  border-color: #f87171;\n}\n.tabs-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0;\n  border-bottom: 1px solid #cbd5e1;\n  margin-bottom: 1.5rem;\n}\n.tab-item[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.25rem;\n  background: none;\n  border: none;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #64748b;\n  cursor: pointer;\n  position: relative;\n  transition: color 0.15s;\n  border-radius: 6px 6px 0 0;\n  text-decoration: none;\n}\n.tab-item[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: -1px;\n  height: 2px;\n  background: transparent;\n  border-radius: 1px;\n  transition: background 0.15s;\n}\n.tab-item[_ngcontent-%COMP%]:hover {\n  color: #0f172a;\n}\n.tab-item[aria-selected=true][_ngcontent-%COMP%] {\n  color: var(--primary-color, #15803d);\n}\n.tab-item[aria-selected=true][_ngcontent-%COMP%]::after {\n  background: var(--primary-color, #15803d);\n}\n.tab-content[_ngcontent-%COMP%] {\n  min-height: 280px;\n}\n.tab-cards[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 1.25rem;\n}\n.tab-cards[_ngcontent-%COMP%]   .card-span[_ngcontent-%COMP%] {\n  grid-column: 1 / -1;\n}\n.card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #cbd5e1;\n  border-radius: 12px;\n  padding: 1.25rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);\n}\n.card-title[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  margin: 0 0 0.75rem 0;\n  padding-bottom: 0.5rem;\n  border-bottom: 1px solid #e2e8f0;\n}\n.card-title-with-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.card-title-icon[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  color: #64748b;\n  flex-shrink: 0;\n}\n.card-desc[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: #64748b;\n  margin: 0 0 0.75rem 0;\n  line-height: 1.45;\n}\n.overview-cards[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 1.25rem;\n}\n.overview-cards[_ngcontent-%COMP%]   .card-span[_ngcontent-%COMP%] {\n  grid-column: 1 / -1;\n}\n.cashback-glance[_ngcontent-%COMP%]   .stats-row[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  padding-top: 1rem;\n  border-top: 1px solid #e2e8f0;\n}\n.glance-two-views[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 2rem;\n  flex-wrap: wrap;\n  margin-bottom: 0;\n}\n.glance-view[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.2rem;\n}\n.glance-view-label[_ngcontent-%COMP%] {\n  font-size: 0.6875rem;\n  font-weight: 600;\n  color: #94a3b8;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.glance-view-value[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #0f172a;\n  letter-spacing: -0.02em;\n}\n.stats-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1.5rem;\n  flex-wrap: wrap;\n}\n.stat-block[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n  min-width: 100px;\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #0f172a;\n  letter-spacing: -0.02em;\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 0.6875rem;\n  font-weight: 500;\n  color: #94a3b8;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.rule-box-meta[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #64748b;\n  margin-top: 0.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.2rem;\n}\n.info-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.info-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 0.75rem;\n}\n.info-label[_ngcontent-%COMP%] {\n  font-size: 0.6875rem;\n  font-weight: 500;\n  color: #94a3b8;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  flex-shrink: 0;\n}\n.info-value[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 700;\n  color: #0f172a;\n  text-align: right;\n}\n.description-text[_ngcontent-%COMP%] {\n  text-align: right;\n  max-width: 220px;\n  line-height: 1.4;\n  white-space: pre-wrap;\n  font-weight: 500;\n}\n.status-dot[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  margin-right: 0.25rem;\n  vertical-align: middle;\n}\n.status-dot[data-status=ACTIVE][_ngcontent-%COMP%] {\n  background: #22c55e;\n}\n.status-dot[data-status=SCHEDULED][_ngcontent-%COMP%] {\n  background: #0ea5e9;\n}\n.status-dot[data-status=DRAFT][_ngcontent-%COMP%] {\n  background: #f59e0b;\n}\n.status-dot[data-status=INACTIVE][_ngcontent-%COMP%] {\n  background: #ef4444;\n}\n.status-dot[data-status=ARCHIVED][_ngcontent-%COMP%] {\n  background: #94a3b8;\n}\n.schedule-strip[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.strip-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.4rem 0.5rem;\n  border-radius: 6px;\n  font-size: 0.8125rem;\n}\n.strip-row[_ngcontent-%COMP%]:not(.off) {\n  background: #f0fdf4;\n}\n.strip-row.off[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #94a3b8;\n}\n.strip-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #0f172a;\n}\n.strip-row.off[_ngcontent-%COMP%]   .strip-label[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  font-weight: 500;\n}\n.strip-time[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--primary-color, #15803d);\n}\n.strip-row.off[_ngcontent-%COMP%]   .strip-time[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  font-weight: 500;\n  font-style: italic;\n}\n.strip-all-day[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: #64748b;\n  margin: 0;\n}\n.program-period-card[_ngcontent-%COMP%]   .period-hero[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n  margin-bottom: 1rem;\n}\n.period-date[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 700;\n  color: #0f172a;\n  padding: 0.5rem 1rem;\n  border-radius: 10px;\n  background: #f0fdf4;\n  border: 1px solid #dcfce7;\n}\n.period-date.end[_ngcontent-%COMP%]:empty {\n  display: none;\n}\n.period-sep[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #94a3b8;\n  font-weight: 600;\n}\n.period-info-copy[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: #64748b;\n  line-height: 1.5;\n  margin: 0 0 0.35rem 0;\n}\n.schedule-by-day[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.35rem;\n}\n.schedule-blocks[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  gap: 0.5rem;\n}\n.schedule-block[_ngcontent-%COMP%] {\n  min-height: 72px;\n  padding: 0.75rem;\n  border-radius: 10px;\n  border: 1px solid transparent;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 0.35rem;\n  text-align: center;\n}\n.schedule-block.on[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  border-color: #86efac;\n  color: #166534;\n}\n.schedule-block.off[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  border-color: #e2e8f0;\n  color: #64748b;\n}\n.schedule-block-day[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.schedule-block.on[_ngcontent-%COMP%]   .schedule-block-day[_ngcontent-%COMP%] {\n  color: #15803d;\n}\n.schedule-block.off[_ngcontent-%COMP%]   .schedule-block-day[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.schedule-block-time[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  font-weight: 600;\n}\n.schedule-block.on[_ngcontent-%COMP%]   .schedule-block-time[_ngcontent-%COMP%] {\n  color: #0f172a;\n}\n.schedule-block.off[_ngcontent-%COMP%]   .schedule-block-time[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  font-style: italic;\n  font-weight: 500;\n}\n.schedule-timezone-note[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #94a3b8;\n  margin: 0.75rem 0 0 0;\n}\n.empty-inline[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #94a3b8;\n  margin: 0;\n}\n.rules-card[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.rules-two-col[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n}\n.rule-box[_ngcontent-%COMP%] {\n  padding: 1rem 1.25rem;\n  border-radius: 10px;\n  border: 1px solid #e2e8f0;\n  background: #f8fafc;\n}\n.rule-box-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 8px;\n  background: #e8f4ec;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #15803d;\n  margin-bottom: 0.75rem;\n}\n.rule-box-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n.rule-box-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.6875rem;\n  font-weight: 700;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  margin-bottom: 0.35rem;\n}\n.rule-box-text[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #0f172a;\n  line-height: 1.5;\n  margin: 0;\n  font-weight: 500;\n}\n.rules-criteria-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n  margin-top: 1.25rem;\n  padding-top: 1.25rem;\n  border-top: 1px solid #e2e8f0;\n}\n.criteria-card[_ngcontent-%COMP%] {\n  padding: 1rem 1.25rem;\n  border-radius: 10px;\n  border: 1px solid #e2e8f0;\n  background: #f8fafc;\n}\n.criteria-card-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 0.75rem;\n  background: #e8f4ec;\n  color: #15803d;\n}\n.criteria-card-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n.criteria-card-title[_ngcontent-%COMP%] {\n  font-size: 0.6875rem;\n  font-weight: 700;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  margin: 0 0 0.35rem 0;\n}\n.criteria-card-text[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #0f172a;\n  line-height: 1.5;\n  margin: 0;\n  font-weight: 500;\n}\n.schedule-visual[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.schedule-days-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  gap: 0.25rem;\n  text-align: center;\n}\n.schedule-day-abbr[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #64748b;\n}\n.schedule-bars-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  gap: 0.25rem;\n}\n.schedule-bar[_ngcontent-%COMP%] {\n  height: 28px;\n  border-radius: 6px;\n  transition: background 0.15s;\n}\n.schedule-bar.on[_ngcontent-%COMP%] {\n  background: #86efac;\n  border: 1px solid #4ade80;\n}\n.schedule-bar.off[_ngcontent-%COMP%] {\n  background: #e2e8f0;\n  border: 1px solid #cbd5e1;\n}\n.schedule-summary[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #0f172a;\n  font-weight: 600;\n  margin: 0;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem 1rem;\n}\n.schedule-summary-item[_ngcontent-%COMP%] {\n  display: inline;\n}\n.progress-track[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 0;\n  margin-bottom: 1.5rem;\n  padding: 0.75rem 0;\n}\n.track-segment[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.track-node[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.25rem;\n  padding: 0.75rem 1rem;\n  background: #f0fdf4;\n  border: 1px solid #dcfce7;\n  border-radius: 10px;\n  min-width: 90px;\n}\n.track-tier-name[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 700;\n  color: #0f172a;\n}\n.track-tier-badge[_ngcontent-%COMP%] {\n  font-size: 0.6875rem;\n  font-weight: 700;\n  color: var(--primary-color, #15803d);\n}\n.track-connector[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  padding: 0 0.5rem;\n  color: #94a3b8;\n  font-size: 0.6875rem;\n}\n.track-range[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #64748b;\n}\n.track-arrow[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  flex-shrink: 0;\n}\n.track-segment.last[_ngcontent-%COMP%]   .track-connector[_ngcontent-%COMP%] {\n  display: none;\n}\n.tier-detail[_ngcontent-%COMP%] {\n  border: 1px solid #cbd5e1;\n  border-radius: 12px;\n  padding: 1.25rem;\n  background: #ffffff;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);\n}\n.tier-detail[_ngcontent-%COMP%]    + .tier-detail[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.tier-detail-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n  margin-bottom: 0.75rem;\n}\n.tier-detail-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n}\n.tier-detail-range[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: #64748b;\n  font-weight: 600;\n}\n.link-eligibility[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: 0;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  color: var(--primary-color, #15803d);\n  cursor: pointer;\n  text-decoration: underline;\n  text-underline-offset: 2px;\n}\n.link-eligibility[_ngcontent-%COMP%]:hover {\n  color: var(--primary-color-hover, #14532d);\n}\n.tier-clients-section[_ngcontent-%COMP%] {\n  padding-top: 0.75rem;\n  border-top: 1px solid #f1f5f9;\n}\n.tier-clients-summary[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.875rem;\n  color: #475569;\n  display: flex;\n  align-items: center;\n  gap: 0.35rem;\n  flex-wrap: wrap;\n}\n.link-view-clients[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: 0;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: var(--primary-color, #15803d);\n  cursor: pointer;\n  text-decoration: none;\n  display: inline-flex;\n  align-items: center;\n}\n.link-view-clients[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.tier-clients-empty[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0.75rem 1rem;\n  background: #f8fafc;\n  border-radius: 8px;\n  border: 1px dashed #cbd5e1;\n  font-size: 0.8125rem;\n  color: #64748b;\n  display: flex;\n  align-items: center;\n  gap: 0.35rem;\n  flex-wrap: wrap;\n}\n.tier-clients-empty[_ngcontent-%COMP%]   .link-eligibility[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n}\n.tiered-clients-modal-body[_ngcontent-%COMP%] {\n  min-height: 200px;\n}\n.tiered-clients-loading[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  padding: 3rem;\n  color: #64748b;\n}\n.tiered-clients-loading[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border: 3px solid #e2e8f0;\n  border-top-color: var(--primary-color, #15803d);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin .7s linear infinite;\n}\n.tiered-clients-empty-msg[_ngcontent-%COMP%] {\n  font-size: 0.9375rem;\n  color: #64748b;\n  margin: 0;\n  padding: 1.5rem;\n}\n.tiered-clients-table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  margin-bottom: 1rem;\n}\n.tiered-clients-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.875rem;\n}\n.tiered-clients-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 0.6rem 0.75rem;\n  font-weight: 600;\n  color: #64748b;\n  font-size: 0.6875rem;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  background: #f8fafc;\n  border-bottom: 1px solid #e2e8f0;\n}\n.tiered-clients-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.6rem 0.75rem;\n  border-bottom: 1px solid #f1f5f9;\n  color: #0f172a;\n}\n.tiered-clients-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n.tiered-clients-table[_ngcontent-%COMP%]   .client-link[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--primary-color, #15803d);\n  text-decoration: none;\n}\n.tiered-clients-table[_ngcontent-%COMP%]   .client-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.tier-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.2rem 0.5rem;\n  border-radius: 6px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  background: #e8f4ec;\n  color: #15803d;\n}\n.progress-to-next[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.progress-bar-track[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 6px;\n  border-radius: 3px;\n  background: #e2e8f0;\n  overflow: hidden;\n  flex-shrink: 0;\n}\n.progress-bar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 3px;\n  background: var(--primary-color, #15803d);\n  transition: width 0.3s ease;\n}\n.progress-label[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  font-weight: 600;\n  color: #0f172a;\n  white-space: nowrap;\n}\n.next-tier-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #64748b;\n  white-space: nowrap;\n}\n.top-tier-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #64748b;\n  font-style: italic;\n}\n.link-profile[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  font-weight: 600;\n  color: var(--primary-color, #15803d);\n  text-decoration: none;\n}\n.link-profile[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.tiered-clients-pagination[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  flex-wrap: wrap;\n  padding-top: 1rem;\n  border-top: 1px solid #e2e8f0;\n}\n.tiered-clients-pagination[_ngcontent-%COMP%]   .page-btn[_ngcontent-%COMP%] {\n  padding: 0.4rem 0.75rem;\n  border-radius: 8px;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  background: #f1f5f9;\n  border: 1px solid #e2e8f0;\n  color: #475569;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.tiered-clients-pagination[_ngcontent-%COMP%]   .page-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #e2e8f0;\n  border-color: #cbd5e1;\n  color: #0f172a;\n}\n.tiered-clients-pagination[_ngcontent-%COMP%]   .page-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.tiered-clients-pagination[_ngcontent-%COMP%]   .page-info[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: #64748b;\n}\n.empty-tiers[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 2.5rem 1.5rem;\n  background: #ffffff;\n  border: 1px solid #cbd5e1;\n  border-radius: 12px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);\n}\n.empty-tiers-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  margin: 0 auto 1rem;\n  border-radius: 10px;\n  background: #e2e8f0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #94a3b8;\n}\n.empty-tiers-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n}\n.empty-tiers-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 0.5rem 0;\n}\n.empty-tiers-desc[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #64748b;\n  line-height: 1.5;\n  margin: 0 0 0.75rem 0;\n  max-width: 400px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.empty-tiers-cta[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: #94a3b8;\n  line-height: 1.45;\n  margin: 0;\n}\n.popover-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.2);\n  z-index: 40;\n}\n.popover[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 50;\n  max-width: 320px;\n  padding: 1rem 1.25rem;\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.12);\n}\n.popover-text[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #0f172a;\n  line-height: 1.5;\n  margin: 0 0 0.75rem 0;\n}\n.popover-close[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  padding: 0.5rem;\n  background: #f1f5f9;\n  border: none;\n  border-radius: 6px;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  color: #475569;\n  cursor: pointer;\n}\n.popover-close[_ngcontent-%COMP%]:hover {\n  background: #e2e8f0;\n}\n@media (max-width: 900px) {\n  .tab-cards[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .rules-two-col[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .rules-criteria-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .schedule-blocks[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(4, 1fr);\n  }\n  .progress-track[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .track-segment[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .track-connector[_ngcontent-%COMP%] {\n    padding: 0.25rem 0 0.25rem 1rem;\n  }\n  .track-arrow[_ngcontent-%COMP%] {\n    transform: rotate(-90deg);\n  }\n}\n@media (max-width: 520px) {\n  .schedule-blocks[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 640px) {\n  .program-summary[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .summary-left[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .info-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0.15rem;\n  }\n  .info-value[_ngcontent-%COMP%] {\n    text-align: left;\n  }\n}\n/*# sourceMappingURL=program-view-page.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProgramViewPageComponent, [{
    type: Component,
    args: [{ selector: "app-program-view-page", standalone: true, imports: [CommonModule, RouterModule, DialogComponent], template: `
    @if (loading) {
      <div class="page-shell">
        <div class="loading-state">
          <div class="spinner"></div>
          <p>Loading program...</p>
        </div>
      </div>
    }

    @if (!loading && error) {
      <div class="page-shell">
        <div class="error-state">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="error-icon">
            <circle cx="12" cy="12" r="10"/><path d="M12 8v4m0 4h.01"/>
          </svg>
          <p>{{ error }}</p>
          <button class="btn-retry" (click)="loadProgram()">Retry</button>
        </div>
      </div>
    }

    @if (!loading && !error && program) {
      <div class="page-shell">
        <!-- Program Summary (contextual header) -->
        <header class="program-summary">
          <div class="summary-left">
            <h1 class="summary-title">{{ program.name || 'Untitled Program' }}</h1>
            <span class="summary-badge status" [attr.data-status]="program.status">
              <span class="summary-badge-icon" aria-hidden="true">
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
              <span class="summary-badge-text">{{ statusLabel(program.status) }}</span>
            </span>
          </div>
          <div class="summary-actions">
            <button type="button" class="btn-action btn-secondary" (click)="onAdjustProgram()">Adjust Program</button>
            @if (program.status === 'ACTIVE') {
              <button type="button" class="btn-action btn-outline-danger" (click)="confirmAction = 'deactivate'">Deactivate</button>
            }
            @if (program.status === 'SCHEDULED') {
              <button type="button" class="btn-action btn-primary" (click)="confirmAction = 'launchNow'">Launch Now</button>
            }
            @if (program.status === 'INACTIVE') {
              <button type="button" class="btn-action btn-outline" (click)="confirmAction = 'archive'">Archive</button>
            }
          </div>
        </header>

        <!-- Tabs (routable) -->
        <div class="tabs-bar" role="tablist">
          <a [routerLink]="['/bonus-program/view', viewUuid, 'overview']" class="tab-item" role="tab" [attr.aria-selected]="activeTab === 'overview'">Overview</a>
          <a [routerLink]="['/bonus-program/view', viewUuid, 'tiers']" class="tab-item" role="tab" [attr.aria-selected]="activeTab === 'tiers'">Tiers</a>
          <a [routerLink]="['/bonus-program/view', viewUuid, 'schedule']" class="tab-item" role="tab" [attr.aria-selected]="activeTab === 'schedule'">Schedule</a>
        </div>

        <div class="tab-content">
          <!-- OVERVIEW (combined: Cashback at a glance, Program info, Dates, Rules) -->
          @if (activeTab === 'overview') {
            <div class="tab-cards overview-cards">
              @if (program.type === 'CASHBACK' && program.cashbackRule) {
                <section class="card card-span cashback-glance">
                  <h2 class="card-title">Cashback at a Glance</h2>
                  <div class="glance-two-views">
                    <div class="glance-view">
                      <span class="glance-view-label">Rate</span>
                      <span class="glance-view-value">{{ formatCashbackValue(program.cashbackRule) }}</span>
                    </div>
                    <div class="glance-view">
                      <span class="glance-view-label">Per spend</span>
                      <span class="glance-view-value">{{ getCashbackPerSpendText(program.cashbackRule) }}</span>
                    </div>
                  </div>
                  <div class="stats-row"> 
                    <div class="stat-block">
                      <span class="stat-value">{{ program.cashbackRule.minSpendAmount | number:'1.0-0' }} \u20B8</span>
                      <span class="stat-label">Min. Spend</span>
                    </div>
                    <div class="stat-block">
                      <span class="stat-value">{{ program.cashbackRule.redeemLimitPercent }}%</span>
                      <span class="stat-label">Redeem Limit</span>
                    </div>
                    @if (program.cashbackRule.bonusLifespanDays) {
                      <div class="stat-block">
                        <span class="stat-value">{{ program.cashbackRule.bonusLifespanDays }} days</span>
                        <span class="stat-label">Bonus Lifespan</span>
                      </div>
                    }
                  </div>
                </section>
              }
              <section class="card">
                <h2 class="card-title">Program Information</h2>
                <div class="info-list">
                  <div class="info-row">
                    <span class="info-label">Name</span>
                    <span class="info-value">{{ program.name || '\u2014' }}</span>
                  </div>
                  <div class="info-row">
                    <span class="info-label">Type</span>
                    <span class="info-value">{{ typeLabel(program.type) }}</span>
                  </div>
                  <div class="info-row">
                    <span class="info-label">Status</span>
                    <span class="info-value">
                      <span class="status-dot" [attr.data-status]="program.status"></span>
                      {{ statusLabel(program.status) }}
                    </span>
                  </div>
                  <div class="info-row">
                    <span class="info-label">Description</span>
                    <span class="info-value description-text">{{ program.description || '\u2014' }}</span>
                  </div>
                </div>
              </section>
              <section class="card">
                <h2 class="card-title">Dates</h2>
                <div class="info-list">
                  <div class="info-row">
                    <span class="info-label">Start</span>
                    <span class="info-value">{{ formatDate(program.startDate) }}</span>
                  </div>
                  <div class="info-row">
                    <span class="info-label">End</span>
                    <span class="info-value">{{ formatDate(program.endDate) || 'No end date' }}</span>
                  </div>
                  <div class="info-row">
                    <span class="info-label">Created</span>
                    <span class="info-value">{{ formatDate(program.createdAt) }}</span>
                  </div>
                  <div class="info-row">
                    <span class="info-label">Updated</span>
                    <span class="info-value">{{ formatDate(program.updatedAt) }}</span>
                  </div>
                </div>
              </section>
              <section class="card card-span rules-card">
                <h2 class="card-title">Cashback Rules</h2>
                @if (program.cashbackRule; as rule) {
                  <div class="rules-two-col">
                    <div class="rule-box earning">
                      <div class="rule-box-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><path d="M3 6h18M16 10a4 4 0 01-8 0"/></svg>
                      </div>
                      <span class="rule-box-label">Earning rule</span>
                      <p class="rule-box-text">{{ getEarningRuleText(rule) }}</p>
                    </div>
                    <div class="rule-box usage">
                      <div class="rule-box-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>
                      </div>
                      <span class="rule-box-label">Usage rule</span>
                      <p class="rule-box-text">{{ getUsageRuleText(rule) }}</p>
                      @if (rule.bonusLifespanDays) {
                        <div class="rule-box-meta">
                          <span>Bonus lifespan: {{ rule.bonusLifespanDays }} days</span>
                        </div>
                      }
                    </div>
                  </div>
                  <div class="rules-criteria-row">
                    <div class="criteria-card min-spend">
                      <div class="criteria-card-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12V7H5a2 2 0 01 0-4h14v4"/><path d="M3 5v14a2 2 0 002 2h16a2 2 0 002-2V9"/><path d="M18 12v4"/><path d="M14 12v4"/></svg>
                      </div>
                      <h3 class="criteria-card-title">Minimum spend</h3>
                      <p class="criteria-card-text">{{ getMinSpendCardText(rule) }}</p>
                    </div>
                    <div class="criteria-card eligibility">
                      <div class="criteria-card-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14"/></svg>
                      </div>
                      <h3 class="criteria-card-title">Eligibility</h3>
                      <p class="criteria-card-text">{{ getEligibilityCardText(rule) }}</p>
                    </div>
                  </div>
                } @else {
                  <div class="empty-inline">
                    <p>No cashback rules defined for this program.</p>
                  </div>
                }
              </section>
            </div>
          }

          <!-- TIERS -->
          @if (activeTab === 'tiers') {
            <section class="card">
              <h2 class="card-title">Tiers</h2>
              @if (program.cashbackTiers && program.cashbackTiers.length > 0) {
                <p class="card-desc">Customers move up tiers based on total spend during the program period.</p>

                <!-- Progress track -->
                <div class="progress-track">
                  @for (tier of sortedTiers; track tier.sortOrder; let i = $index; let last = $last) {
                    <div class="track-segment" [class.last]="last">
                      <div class="track-node">
                        <span class="track-tier-name">{{ tier.name }}</span>
                        <span class="track-tier-badge">+{{ tier.extraEarningPercent }}%</span>
                      </div>
                      @if (!last) {
                        <div class="track-connector">
                          <span class="track-range">{{ formatTierRange(tier) }}</span>
                          <svg class="track-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                        </div>
                      }
                    </div>
                  }
                </div>

                <!-- Per-tier detail + clients -->
                @for (tier of sortedTiers; track tier.sortOrder; let i = $index) {
                  <div class="tier-detail">
                    <div class="tier-detail-header">
                      <h3 class="tier-detail-title">{{ tier.name }}</h3>
                      <span class="tier-detail-range">{{ formatTierRange(tier) }}</span>
                      <button type="button" class="link-eligibility" (click)="openEligibilityPopover($event, tier)">
                        View eligibility rules
                      </button>
                    </div>
                    <div class="tier-clients-section">
                      @if (getTierClients(tier).length > 0) {
                        <p class="tier-clients-summary">
                          You have {{ getTierClients(tier).length }} client{{ getTierClients(tier).length === 1 ? '' : 's' }} tiered in this level.
                          <a [routerLink]="getTierPageLink(tier)" class="link-view-clients">\u2192 View clients</a>
                        </p>
                      } @else {
                        <p class="tier-clients-empty">
                          No clients in this tier yet.
                          <button type="button" class="link-eligibility" (click)="openEligibilityPopover($event, tier)">
                            View eligibility rules
                          </button>
                        </p>
                      }
                    </div>
                  </div>
                }
              } @else {
                <div class="empty-tiers">
                  <div class="empty-tiers-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                      <path d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"/>
                    </svg>
                  </div>
                  <h3 class="empty-tiers-title">This program has no tiers</h3>
                  <p class="empty-tiers-desc">
                    Tiers reward your best customers with higher cashback as they spend more. They increase motivation to return and help you recognize loyalty.
                  </p>
                  <p class="empty-tiers-cta">
                    Add tiers when editing this program to unlock tiered rewards (e.g. Bronze, Silver, Gold) and watch repeat spend grow.
                  </p>
                </div>
              }
            </section>
          }

          <!-- SCHEDULE -->
          @if (activeTab === 'schedule') {
            <div class="tab-cards">
              <section class="card card-span program-period-card">
                <h2 class="card-title">Program Period</h2>
                <div class="period-hero">
                  <span class="period-date start">{{ formatDateShort(program.startDate) }}</span>
                  <span class="period-sep">\u2192</span>
                  <span class="period-date end">{{ program.endDate ? formatDateShort(program.endDate) : 'No end' }}</span>
                </div>
                @if (program.endDate) {
                  <p class="period-info-copy">This program is live only until {{ formatDateShort(program.endDate) }}.</p>
                } @else {
                  <p class="period-info-copy">This program is always on, until you deactivate it.</p>
                }
              </section>
              <section class="card card-span">
                <h2 class="card-title card-title-with-icon">
                  <svg class="card-title-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                  Weekly Schedule
                </h2>
                @if (program.weeklySchedules && program.weeklySchedules.length > 0) {
                  <div class="schedule-blocks">
                    @for (day of sortedScheduleDays; track day.dayOfWeek) {
                      <div class="schedule-block" [class.on]="day.enabled" [class.off]="!day.enabled">
                        <span class="schedule-block-day">{{ dayShort(day.dayOfWeek) }}</span>
                        <span class="schedule-block-time">{{ day.enabled ? (day.startTime && day.endTime ? formatTimeHHMM(day.startTime) + ' \u2013 ' + formatTimeHHMM(day.endTime) : 'All day') : 'Off' }}</span>
                      </div>
                    }
                  </div>
                  <p class="schedule-timezone-note">Bonuses apply only during the weekly schedule below.</p>
                  <p class="schedule-timezone-note">Times are shown in your local timezone.</p>
                } @else {
                  <p class="strip-all-day">Active every day, all day.</p>
                }
              </section>
            </div>
          }
        </div>

        <!-- Eligibility popover -->
        @if (eligibilityPopoverTier) {
          <div class="popover-backdrop" (click)="closeEligibilityPopover()"></div>
          <div class="popover" [style.left.px]="popoverX" [style.top.px]="popoverY" role="dialog" aria-label="Eligibility rules">
            <p class="popover-text">{{ getEligibilityHumanText(eligibilityPopoverTier) }}</p>
            <button type="button" class="popover-close" (click)="closeEligibilityPopover()">Close</button>
          </div>
        }

        <app-dialog
          [visible]="!!confirmAction"
          [title]="confirmDialogTitle"
          [message]="confirmDialogMessage"
          [confirmLabel]="confirmDialogConfirmLabel"
          cancelLabel="Cancel"
          (confirmed)="onConfirmAction()"
          (cancelled)="confirmAction = null"
          (closed)="confirmAction = null">
        </app-dialog>
      </div>
    }
  `, styles: ['/* angular:styles/component:css;73f5d0a8d98b7ded422f4e4cace735113a393fcfe6ad9f7c04513750c114934a;/Users/baglan/repo/westwood/westwood-frontend/src/app/features/bonus-program/pages/program-view-page/program-view-page.component.ts */\n.page-shell {\n  max-width: 1400px;\n  margin: 0 auto;\n  padding: 0 1.5rem 3rem;\n}\n.loading-state,\n.error-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  padding: 6rem 0;\n  color: #64748b;\n}\n.spinner {\n  width: 36px;\n  height: 36px;\n  border: 3px solid #e2e8f0;\n  border-top-color: var(--primary-color, #15803d);\n  border-radius: 50%;\n  animation: spin .7s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.error-icon {\n  width: 40px;\n  height: 40px;\n  color: #ef4444;\n}\n.btn-retry {\n  padding: 0.5rem 1.25rem;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  background: #fff;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  color: #0f172a;\n  transition: all 0.15s;\n}\n.btn-retry:hover {\n  border-color: var(--primary-color, #15803d);\n  color: var(--primary-color, #15803d);\n}\n.program-summary {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-bottom: 1.75rem;\n  flex-wrap: wrap;\n}\n.summary-left {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.summary-title {\n  font-size: 2.5rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n  letter-spacing: -0.03em;\n  line-height: 1.2;\n}\n.summary-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  padding: 0.25rem 1rem;\n  border-radius: 6px;\n  align-self: flex-start;\n}\n.summary-badge-icon {\n  display: inline-flex;\n  width: 16px;\n  height: 16px;\n  flex-shrink: 0;\n}\n.summary-badge-icon svg {\n  width: 100%;\n  height: 100%;\n}\n.summary-badge-text {\n  text-transform: none;\n}\n.summary-badge[data-status=ACTIVE] {\n  background: #dcfce7;\n  color: #15803d;\n}\n.summary-badge[data-status=SCHEDULED] {\n  background: #e0f2fe;\n  color: #0369a1;\n}\n.summary-badge[data-status=DRAFT] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.summary-badge[data-status=INACTIVE] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.summary-badge[data-status=ARCHIVED] {\n  background: #f1f5f9;\n  color: #475569;\n}\n.summary-actions {\n  display: flex;\n  gap: 0.5rem;\n  flex-shrink: 0;\n}\n.btn-action {\n  padding: 0.5rem 1rem;\n  border-radius: 8px;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  cursor: pointer;\n  border: 1px solid transparent;\n  transition: all 0.15s;\n}\n.btn-secondary {\n  background: #f1f5f9;\n  color: #475569;\n  border-color: #e2e8f0;\n}\n.btn-secondary:hover {\n  background: #e2e8f0;\n}\n.btn-primary {\n  background: var(--primary-color, #15803d);\n  color: #fff;\n  border-color: var(--primary-color, #15803d);\n}\n.btn-primary:hover {\n  background: var(--primary-color-hover, #14532d);\n}\n.btn-outline {\n  background: #fff;\n  color: #475569;\n  border-color: #e2e8f0;\n}\n.btn-outline:hover {\n  border-color: #94a3b8;\n}\n.btn-outline-danger {\n  background: #fff;\n  color: #dc2626;\n  border-color: #fecaca;\n}\n.btn-outline-danger:hover {\n  background: #fef2f2;\n  border-color: #f87171;\n}\n.tabs-bar {\n  display: flex;\n  gap: 0;\n  border-bottom: 1px solid #cbd5e1;\n  margin-bottom: 1.5rem;\n}\n.tab-item {\n  padding: 0.75rem 1.25rem;\n  background: none;\n  border: none;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #64748b;\n  cursor: pointer;\n  position: relative;\n  transition: color 0.15s;\n  border-radius: 6px 6px 0 0;\n  text-decoration: none;\n}\n.tab-item::after {\n  content: "";\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: -1px;\n  height: 2px;\n  background: transparent;\n  border-radius: 1px;\n  transition: background 0.15s;\n}\n.tab-item:hover {\n  color: #0f172a;\n}\n.tab-item[aria-selected=true] {\n  color: var(--primary-color, #15803d);\n}\n.tab-item[aria-selected=true]::after {\n  background: var(--primary-color, #15803d);\n}\n.tab-content {\n  min-height: 280px;\n}\n.tab-cards {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 1.25rem;\n}\n.tab-cards .card-span {\n  grid-column: 1 / -1;\n}\n.card {\n  background: #ffffff;\n  border: 1px solid #cbd5e1;\n  border-radius: 12px;\n  padding: 1.25rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);\n}\n.card-title {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  margin: 0 0 0.75rem 0;\n  padding-bottom: 0.5rem;\n  border-bottom: 1px solid #e2e8f0;\n}\n.card-title-with-icon {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.card-title-icon {\n  width: 18px;\n  height: 18px;\n  color: #64748b;\n  flex-shrink: 0;\n}\n.card-desc {\n  font-size: 0.8125rem;\n  color: #64748b;\n  margin: 0 0 0.75rem 0;\n  line-height: 1.45;\n}\n.overview-cards {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 1.25rem;\n}\n.overview-cards .card-span {\n  grid-column: 1 / -1;\n}\n.cashback-glance .stats-row {\n  margin-top: 1rem;\n  padding-top: 1rem;\n  border-top: 1px solid #e2e8f0;\n}\n.glance-two-views {\n  display: flex;\n  gap: 2rem;\n  flex-wrap: wrap;\n  margin-bottom: 0;\n}\n.glance-view {\n  display: flex;\n  flex-direction: column;\n  gap: 0.2rem;\n}\n.glance-view-label {\n  font-size: 0.6875rem;\n  font-weight: 600;\n  color: #94a3b8;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.glance-view-value {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #0f172a;\n  letter-spacing: -0.02em;\n}\n.stats-row {\n  display: flex;\n  gap: 1.5rem;\n  flex-wrap: wrap;\n}\n.stat-block {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n  min-width: 100px;\n}\n.stat-value {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #0f172a;\n  letter-spacing: -0.02em;\n}\n.stat-label {\n  font-size: 0.6875rem;\n  font-weight: 500;\n  color: #94a3b8;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.rule-box-meta {\n  font-size: 0.75rem;\n  color: #64748b;\n  margin-top: 0.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.2rem;\n}\n.info-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.info-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 0.75rem;\n}\n.info-label {\n  font-size: 0.6875rem;\n  font-weight: 500;\n  color: #94a3b8;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  flex-shrink: 0;\n}\n.info-value {\n  font-size: 0.875rem;\n  font-weight: 700;\n  color: #0f172a;\n  text-align: right;\n}\n.description-text {\n  text-align: right;\n  max-width: 220px;\n  line-height: 1.4;\n  white-space: pre-wrap;\n  font-weight: 500;\n}\n.status-dot {\n  display: inline-block;\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  margin-right: 0.25rem;\n  vertical-align: middle;\n}\n.status-dot[data-status=ACTIVE] {\n  background: #22c55e;\n}\n.status-dot[data-status=SCHEDULED] {\n  background: #0ea5e9;\n}\n.status-dot[data-status=DRAFT] {\n  background: #f59e0b;\n}\n.status-dot[data-status=INACTIVE] {\n  background: #ef4444;\n}\n.status-dot[data-status=ARCHIVED] {\n  background: #94a3b8;\n}\n.schedule-strip {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.strip-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.4rem 0.5rem;\n  border-radius: 6px;\n  font-size: 0.8125rem;\n}\n.strip-row:not(.off) {\n  background: #f0fdf4;\n}\n.strip-row.off {\n  background: #f1f5f9;\n  color: #94a3b8;\n}\n.strip-label {\n  font-weight: 600;\n  color: #0f172a;\n}\n.strip-row.off .strip-label {\n  color: #94a3b8;\n  font-weight: 500;\n}\n.strip-time {\n  font-weight: 600;\n  color: var(--primary-color, #15803d);\n}\n.strip-row.off .strip-time {\n  color: #94a3b8;\n  font-weight: 500;\n  font-style: italic;\n}\n.strip-all-day {\n  font-size: 0.8125rem;\n  color: #64748b;\n  margin: 0;\n}\n.program-period-card .period-hero {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n  margin-bottom: 1rem;\n}\n.period-date {\n  font-size: 1.125rem;\n  font-weight: 700;\n  color: #0f172a;\n  padding: 0.5rem 1rem;\n  border-radius: 10px;\n  background: #f0fdf4;\n  border: 1px solid #dcfce7;\n}\n.period-date.end:empty {\n  display: none;\n}\n.period-sep {\n  font-size: 1rem;\n  color: #94a3b8;\n  font-weight: 600;\n}\n.period-info-copy {\n  font-size: 0.8125rem;\n  color: #64748b;\n  line-height: 1.5;\n  margin: 0 0 0.35rem 0;\n}\n.schedule-by-day {\n  display: flex;\n  flex-direction: column;\n  gap: 0.35rem;\n}\n.schedule-blocks {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  gap: 0.5rem;\n}\n.schedule-block {\n  min-height: 72px;\n  padding: 0.75rem;\n  border-radius: 10px;\n  border: 1px solid transparent;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 0.35rem;\n  text-align: center;\n}\n.schedule-block.on {\n  background: #dcfce7;\n  border-color: #86efac;\n  color: #166534;\n}\n.schedule-block.off {\n  background: #f1f5f9;\n  border-color: #e2e8f0;\n  color: #64748b;\n}\n.schedule-block-day {\n  font-size: 0.75rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.schedule-block.on .schedule-block-day {\n  color: #15803d;\n}\n.schedule-block.off .schedule-block-day {\n  color: #94a3b8;\n}\n.schedule-block-time {\n  font-size: 0.8125rem;\n  font-weight: 600;\n}\n.schedule-block.on .schedule-block-time {\n  color: #0f172a;\n}\n.schedule-block.off .schedule-block-time {\n  color: #94a3b8;\n  font-style: italic;\n  font-weight: 500;\n}\n.schedule-timezone-note {\n  font-size: 0.75rem;\n  color: #94a3b8;\n  margin: 0.75rem 0 0 0;\n}\n.empty-inline {\n  font-size: 0.875rem;\n  color: #94a3b8;\n  margin: 0;\n}\n.rules-card {\n  width: 100%;\n}\n.rules-two-col {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n}\n.rule-box {\n  padding: 1rem 1.25rem;\n  border-radius: 10px;\n  border: 1px solid #e2e8f0;\n  background: #f8fafc;\n}\n.rule-box-icon {\n  width: 40px;\n  height: 40px;\n  border-radius: 8px;\n  background: #e8f4ec;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #15803d;\n  margin-bottom: 0.75rem;\n}\n.rule-box-icon svg {\n  width: 20px;\n  height: 20px;\n}\n.rule-box-label {\n  display: block;\n  font-size: 0.6875rem;\n  font-weight: 700;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  margin-bottom: 0.35rem;\n}\n.rule-box-text {\n  font-size: 0.875rem;\n  color: #0f172a;\n  line-height: 1.5;\n  margin: 0;\n  font-weight: 500;\n}\n.rules-criteria-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n  margin-top: 1.25rem;\n  padding-top: 1.25rem;\n  border-top: 1px solid #e2e8f0;\n}\n.criteria-card {\n  padding: 1rem 1.25rem;\n  border-radius: 10px;\n  border: 1px solid #e2e8f0;\n  background: #f8fafc;\n}\n.criteria-card-icon {\n  width: 40px;\n  height: 40px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 0.75rem;\n  background: #e8f4ec;\n  color: #15803d;\n}\n.criteria-card-icon svg {\n  width: 20px;\n  height: 20px;\n}\n.criteria-card-title {\n  font-size: 0.6875rem;\n  font-weight: 700;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  margin: 0 0 0.35rem 0;\n}\n.criteria-card-text {\n  font-size: 0.875rem;\n  color: #0f172a;\n  line-height: 1.5;\n  margin: 0;\n  font-weight: 500;\n}\n.schedule-visual {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.schedule-days-row {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  gap: 0.25rem;\n  text-align: center;\n}\n.schedule-day-abbr {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #64748b;\n}\n.schedule-bars-row {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  gap: 0.25rem;\n}\n.schedule-bar {\n  height: 28px;\n  border-radius: 6px;\n  transition: background 0.15s;\n}\n.schedule-bar.on {\n  background: #86efac;\n  border: 1px solid #4ade80;\n}\n.schedule-bar.off {\n  background: #e2e8f0;\n  border: 1px solid #cbd5e1;\n}\n.schedule-summary {\n  font-size: 0.875rem;\n  color: #0f172a;\n  font-weight: 600;\n  margin: 0;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem 1rem;\n}\n.schedule-summary-item {\n  display: inline;\n}\n.progress-track {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 0;\n  margin-bottom: 1.5rem;\n  padding: 0.75rem 0;\n}\n.track-segment {\n  display: flex;\n  align-items: center;\n}\n.track-node {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.25rem;\n  padding: 0.75rem 1rem;\n  background: #f0fdf4;\n  border: 1px solid #dcfce7;\n  border-radius: 10px;\n  min-width: 90px;\n}\n.track-tier-name {\n  font-size: 0.875rem;\n  font-weight: 700;\n  color: #0f172a;\n}\n.track-tier-badge {\n  font-size: 0.6875rem;\n  font-weight: 700;\n  color: var(--primary-color, #15803d);\n}\n.track-connector {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  padding: 0 0.5rem;\n  color: #94a3b8;\n  font-size: 0.6875rem;\n}\n.track-range {\n  font-weight: 600;\n  color: #64748b;\n}\n.track-arrow {\n  width: 16px;\n  height: 16px;\n  flex-shrink: 0;\n}\n.track-segment.last .track-connector {\n  display: none;\n}\n.tier-detail {\n  border: 1px solid #cbd5e1;\n  border-radius: 12px;\n  padding: 1.25rem;\n  background: #ffffff;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);\n}\n.tier-detail + .tier-detail {\n  margin-top: 1rem;\n}\n.tier-detail-header {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n  margin-bottom: 0.75rem;\n}\n.tier-detail-title {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n}\n.tier-detail-range {\n  font-size: 0.8125rem;\n  color: #64748b;\n  font-weight: 600;\n}\n.link-eligibility {\n  background: none;\n  border: none;\n  padding: 0;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  color: var(--primary-color, #15803d);\n  cursor: pointer;\n  text-decoration: underline;\n  text-underline-offset: 2px;\n}\n.link-eligibility:hover {\n  color: var(--primary-color-hover, #14532d);\n}\n.tier-clients-section {\n  padding-top: 0.75rem;\n  border-top: 1px solid #f1f5f9;\n}\n.tier-clients-summary {\n  margin: 0;\n  font-size: 0.875rem;\n  color: #475569;\n  display: flex;\n  align-items: center;\n  gap: 0.35rem;\n  flex-wrap: wrap;\n}\n.link-view-clients {\n  background: none;\n  border: none;\n  padding: 0;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: var(--primary-color, #15803d);\n  cursor: pointer;\n  text-decoration: none;\n  display: inline-flex;\n  align-items: center;\n}\n.link-view-clients:hover {\n  text-decoration: underline;\n}\n.tier-clients-empty {\n  margin: 0;\n  padding: 0.75rem 1rem;\n  background: #f8fafc;\n  border-radius: 8px;\n  border: 1px dashed #cbd5e1;\n  font-size: 0.8125rem;\n  color: #64748b;\n  display: flex;\n  align-items: center;\n  gap: 0.35rem;\n  flex-wrap: wrap;\n}\n.tier-clients-empty .link-eligibility {\n  font-size: 0.8125rem;\n}\n.tiered-clients-modal-body {\n  min-height: 200px;\n}\n.tiered-clients-loading {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  padding: 3rem;\n  color: #64748b;\n}\n.tiered-clients-loading .spinner {\n  width: 32px;\n  height: 32px;\n  border: 3px solid #e2e8f0;\n  border-top-color: var(--primary-color, #15803d);\n  border-radius: 50%;\n  animation: spin .7s linear infinite;\n}\n.tiered-clients-empty-msg {\n  font-size: 0.9375rem;\n  color: #64748b;\n  margin: 0;\n  padding: 1.5rem;\n}\n.tiered-clients-table-wrap {\n  overflow-x: auto;\n  margin-bottom: 1rem;\n}\n.tiered-clients-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.875rem;\n}\n.tiered-clients-table th {\n  text-align: left;\n  padding: 0.6rem 0.75rem;\n  font-weight: 600;\n  color: #64748b;\n  font-size: 0.6875rem;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  background: #f8fafc;\n  border-bottom: 1px solid #e2e8f0;\n}\n.tiered-clients-table td {\n  padding: 0.6rem 0.75rem;\n  border-bottom: 1px solid #f1f5f9;\n  color: #0f172a;\n}\n.tiered-clients-table tbody tr:hover {\n  background: #f8fafc;\n}\n.tiered-clients-table .client-link {\n  font-weight: 600;\n  color: var(--primary-color, #15803d);\n  text-decoration: none;\n}\n.tiered-clients-table .client-link:hover {\n  text-decoration: underline;\n}\n.tier-badge {\n  display: inline-block;\n  padding: 0.2rem 0.5rem;\n  border-radius: 6px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  background: #e8f4ec;\n  color: #15803d;\n}\n.progress-to-next {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.progress-bar-track {\n  width: 80px;\n  height: 6px;\n  border-radius: 3px;\n  background: #e2e8f0;\n  overflow: hidden;\n  flex-shrink: 0;\n}\n.progress-bar-fill {\n  height: 100%;\n  border-radius: 3px;\n  background: var(--primary-color, #15803d);\n  transition: width 0.3s ease;\n}\n.progress-label {\n  font-size: 0.8125rem;\n  font-weight: 600;\n  color: #0f172a;\n  white-space: nowrap;\n}\n.next-tier-label {\n  font-size: 0.75rem;\n  color: #64748b;\n  white-space: nowrap;\n}\n.top-tier-label {\n  font-size: 0.75rem;\n  color: #64748b;\n  font-style: italic;\n}\n.link-profile {\n  font-size: 0.8125rem;\n  font-weight: 600;\n  color: var(--primary-color, #15803d);\n  text-decoration: none;\n}\n.link-profile:hover {\n  text-decoration: underline;\n}\n.tiered-clients-pagination {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  flex-wrap: wrap;\n  padding-top: 1rem;\n  border-top: 1px solid #e2e8f0;\n}\n.tiered-clients-pagination .page-btn {\n  padding: 0.4rem 0.75rem;\n  border-radius: 8px;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  background: #f1f5f9;\n  border: 1px solid #e2e8f0;\n  color: #475569;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.tiered-clients-pagination .page-btn:hover:not(:disabled) {\n  background: #e2e8f0;\n  border-color: #cbd5e1;\n  color: #0f172a;\n}\n.tiered-clients-pagination .page-btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.tiered-clients-pagination .page-info {\n  font-size: 0.8125rem;\n  color: #64748b;\n}\n.empty-tiers {\n  text-align: center;\n  padding: 2.5rem 1.5rem;\n  background: #ffffff;\n  border: 1px solid #cbd5e1;\n  border-radius: 12px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);\n}\n.empty-tiers-icon {\n  width: 48px;\n  height: 48px;\n  margin: 0 auto 1rem;\n  border-radius: 10px;\n  background: #e2e8f0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #94a3b8;\n}\n.empty-tiers-icon svg {\n  width: 24px;\n  height: 24px;\n}\n.empty-tiers-title {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 0.5rem 0;\n}\n.empty-tiers-desc {\n  font-size: 0.875rem;\n  color: #64748b;\n  line-height: 1.5;\n  margin: 0 0 0.75rem 0;\n  max-width: 400px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.empty-tiers-cta {\n  font-size: 0.8125rem;\n  color: #94a3b8;\n  line-height: 1.45;\n  margin: 0;\n}\n.popover-backdrop {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.2);\n  z-index: 40;\n}\n.popover {\n  position: fixed;\n  z-index: 50;\n  max-width: 320px;\n  padding: 1rem 1.25rem;\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.12);\n}\n.popover-text {\n  font-size: 0.875rem;\n  color: #0f172a;\n  line-height: 1.5;\n  margin: 0 0 0.75rem 0;\n}\n.popover-close {\n  display: block;\n  width: 100%;\n  padding: 0.5rem;\n  background: #f1f5f9;\n  border: none;\n  border-radius: 6px;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  color: #475569;\n  cursor: pointer;\n}\n.popover-close:hover {\n  background: #e2e8f0;\n}\n@media (max-width: 900px) {\n  .tab-cards {\n    grid-template-columns: 1fr;\n  }\n  .rules-two-col {\n    grid-template-columns: 1fr;\n  }\n  .rules-criteria-row {\n    grid-template-columns: 1fr;\n  }\n  .schedule-blocks {\n    grid-template-columns: repeat(4, 1fr);\n  }\n  .progress-track {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .track-segment {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .track-connector {\n    padding: 0.25rem 0 0.25rem 1rem;\n  }\n  .track-arrow {\n    transform: rotate(-90deg);\n  }\n}\n@media (max-width: 520px) {\n  .schedule-blocks {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 640px) {\n  .program-summary {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .summary-left {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .info-row {\n    flex-direction: column;\n    gap: 0.15rem;\n  }\n  .info-value {\n    text-align: left;\n  }\n}\n/*# sourceMappingURL=program-view-page.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProgramViewPageComponent, { className: "ProgramViewPageComponent", filePath: "src/app/features/bonus-program/pages/program-view-page/program-view-page.component.ts", lineNumber: 836 });
})();
export {
  ProgramViewPageComponent
};
//# sourceMappingURL=chunk-ID7TYUH3.js.map
