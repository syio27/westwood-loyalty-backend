import {
  NotFoundStateComponent
} from "./chunk-D3JTW46V.js";
import {
  PaginationComponent
} from "./chunk-E2ICMDXS.js";
import {
  SelectComponent
} from "./chunk-3WT3LZJP.js";
import {
  RewardProgramsService
} from "./chunk-5AEJQPRJ.js";
import {
  LoaderComponent
} from "./chunk-5RYSXL5K.js";
import {
  PageHeaderService
} from "./chunk-AWWADESY.js";
import "./chunk-6FFMNYG3.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-7NMYMP3Z.js";
import "./chunk-DGNBLIW7.js";
import {
  ActivatedRoute,
  CommonModule,
  Component,
  DecimalPipe,
  NgIf,
  RouterLink,
  RouterModule,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-NKSGOSP5.js";

// src/app/features/bonus-program/pages/program-tier-page/program-tier-page.component.ts
var _c0 = (a0) => ["/clients", a0];
var _forTrack0 = ($index, $item) => $item.clientUuid;
function ProgramTierPageComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "app-loader", 3);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading\u2026");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("visible", true)("overlay", false);
  }
}
function ProgramTierPageComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-not-found-state", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("title", "Tier not found")("description", "This tier does not exist for this program or the program is not available.")("backLink", ctx_r0.programBackUrl());
  }
}
function ProgramTierPageComponent_Conditional_3_div_10_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "span", 20);
    \u0275\u0275text(2, "Extra earning");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 23);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", t_r3.extraEarningPercent, "%");
  }
}
function ProgramTierPageComponent_Conditional_3_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 19)(2, "span", 20);
    \u0275\u0275text(3, "Spend range");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 21);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 22)(7, "span", 20);
    \u0275\u0275text(8, "Clients in tier");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 23);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(11, ProgramTierPageComponent_Conditional_3_div_10_div_11_Template, 5, 1, "div", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const t_r3 = ctx.ngIf;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.formatTierRange(t_r3));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((tmp_4_0 = (tmp_4_0 = ctx_r0.tieredData()) == null ? null : tmp_4_0.totalElements) !== null && tmp_4_0 !== void 0 ? tmp_4_0 : 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", t_r3.extraEarningPercent != null);
  }
}
function ProgramTierPageComponent_Conditional_3_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275element(1, "app-loader", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("visible", true)("overlay", false);
  }
}
function ProgramTierPageComponent_Conditional_3_Conditional_18_Conditional_14_For_1_Conditional_10_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u2192 ", row_r4.nextTierName, "");
  }
}
function ProgramTierPageComponent_Conditional_3_Conditional_18_Conditional_14_For_1_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 35);
    \u0275\u0275element(2, "div", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 37);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, ProgramTierPageComponent_Conditional_3_Conditional_18_Conditional_14_For_1_Conditional_10_Conditional_6_Template, 2, 1, "span", 38);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", row_r4.percentToNextTier, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(5, 4, row_r4.percentToNextTier, "1.0-1"), "%");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(row_r4.nextTierName ? 6 : -1);
  }
}
function ProgramTierPageComponent_Conditional_3_Conditional_18_Conditional_14_For_1_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 33);
    \u0275\u0275text(1, "Top tier");
    \u0275\u0275elementEnd();
  }
}
function ProgramTierPageComponent_Conditional_3_Conditional_18_Conditional_14_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 30)(1, "td")(2, "a", 31);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275template(10, ProgramTierPageComponent_Conditional_3_Conditional_18_Conditional_14_For_1_Conditional_10_Template, 7, 7, "div", 32)(11, ProgramTierPageComponent_Conditional_3_Conditional_18_Conditional_14_For_1_Conditional_11_Template, 2, 0, "span", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td")(13, "a", 34);
    \u0275\u0275text(14, "Profile");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(9, _c0, row_r4.clientUuid));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.clientName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.phone || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(8, 6, row_r4.programPeriodSpend, "1.0-0"), " \u20B8");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(row_r4.percentToNextTier != null ? 10 : 11);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(11, _c0, row_r4.clientUuid));
  }
}
function ProgramTierPageComponent_Conditional_3_Conditional_18_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, ProgramTierPageComponent_Conditional_3_Conditional_18_Conditional_14_For_1_Template, 15, 13, "tr", 30, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275repeater(ctx_r0.tieredData().content);
  }
}
function ProgramTierPageComponent_Conditional_3_Conditional_18_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 28)(1, "td", 39)(2, "div", 40)(3, "span");
    \u0275\u0275text(4, "No clients in this tier yet. Tiering is based on spend during the program period.");
    \u0275\u0275elementEnd()()()();
  }
}
function ProgramTierPageComponent_Conditional_3_Conditional_18_Conditional_16_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r6 = ctx.$implicit;
    \u0275\u0275property("value", opt_r6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r6);
  }
}
function ProgramTierPageComponent_Conditional_3_Conditional_18_Conditional_16_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 47)(1, "app-pagination", 48);
    \u0275\u0275listener("pageChange", function ProgramTierPageComponent_Conditional_3_Conditional_18_Conditional_16_Conditional_11_Template_app_pagination_pageChange_1_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.onPageChange($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("currentPage", ctx_r0.currentPage() + 1)("totalPages", ctx_r0.getTotalPages());
  }
}
function ProgramTierPageComponent_Conditional_3_Conditional_18_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 41)(2, "div", 42)(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 43)(6, "label", 44);
    \u0275\u0275text(7, "\u0421\u0442\u0440\u043E\u043A \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "select", 45);
    \u0275\u0275twoWayListener("ngModelChange", function ProgramTierPageComponent_Conditional_3_Conditional_18_Conditional_16_Template_select_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.pageSize, $event) || (ctx_r0.pageSize = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function ProgramTierPageComponent_Conditional_3_Conditional_18_Conditional_16_Template_select_change_8_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.onPageSizeChange());
    });
    \u0275\u0275repeaterCreate(9, ProgramTierPageComponent_Conditional_3_Conditional_18_Conditional_16_For_10_Template, 2, 2, "option", 46, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(11, ProgramTierPageComponent_Conditional_3_Conditional_18_Conditional_16_Conditional_11_Template, 2, 2, "div", 47);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate3("\u041F\u043E\u043A\u0430\u0437\u0430\u043D\u043E ", ctx_r0.currentPage() * ctx_r0.pageSize + 1, "-", ctx_r0.Math.min((ctx_r0.currentPage() + 1) * ctx_r0.pageSize, ctx_r0.tieredData().totalElements), " \u0438\u0437 ", ctx_r0.tieredData().totalElements, "");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.pageSize);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.pageSizeOptions);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.getTotalPages() > 1 ? 11 : -1);
  }
}
function ProgramTierPageComponent_Conditional_3_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "table", 27)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Client");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Contact");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Spend (program period)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Progress to next tier");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "tbody");
    \u0275\u0275template(14, ProgramTierPageComponent_Conditional_3_Conditional_18_Conditional_14_Template, 2, 0)(15, ProgramTierPageComponent_Conditional_3_Conditional_18_Conditional_15_Template, 5, 0, "tr", 28);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(16, ProgramTierPageComponent_Conditional_3_Conditional_18_Conditional_16_Template, 12, 5, "div", 29);
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(14);
    \u0275\u0275conditional(((tmp_2_0 = ctx_r0.tieredData()) == null ? null : tmp_2_0.content == null ? null : tmp_2_0.content.length) ? 14 : 15);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r0.loadingClients() && ((tmp_3_0 = (tmp_3_0 = ctx_r0.tieredData()) == null ? null : tmp_3_0.totalElements) !== null && tmp_3_0 !== void 0 ? tmp_3_0 : 0) > 0 ? 16 : -1);
  }
}
function ProgramTierPageComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "header", 4)(1, "a", 5);
    \u0275\u0275text(2, "\u2190 Program");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h1", 6);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 7);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "section", 8)(8, "h2", 9);
    \u0275\u0275text(9, "Tier at a glance");
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, ProgramTierPageComponent_Conditional_3_div_10_Template, 12, 3, "div", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 11)(12, "input", 12);
    \u0275\u0275listener("ngModelChange", function ProgramTierPageComponent_Conditional_3_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onSearchChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 13);
    \u0275\u0275listener("ngModelChange", function ProgramTierPageComponent_Conditional_3_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onSearchPhoneChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 14)(15, "app-select", 15);
    \u0275\u0275twoWayListener("ngModelChange", function ProgramTierPageComponent_Conditional_3_Template_app_select_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.sortValue, $event) || (ctx_r0.sortValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ProgramTierPageComponent_Conditional_3_Template_app_select_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onSortValueChange($event));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 16);
    \u0275\u0275template(17, ProgramTierPageComponent_Conditional_3_Conditional_17_Template, 2, 2, "div", 17)(18, ProgramTierPageComponent_Conditional_3_Conditional_18_Template, 17, 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", ctx_r0.programViewLink());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((tmp_2_0 = ctx_r0.tier()) == null ? null : tmp_2_0.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_3_0 = ctx_r0.program()) == null ? null : tmp_3_0.name);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r0.tier());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r0.searchQuery());
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r0.searchPhoneQuery());
    \u0275\u0275advance(2);
    \u0275\u0275property("options", ctx_r0.sortOptions);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.sortValue);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.loadingClients() ? 17 : 18);
  }
}
var PAGE_SIZE_OPTIONS = [15, 30, 50, 100];
var ProgramTierPageComponent = class _ProgramTierPageComponent {
  route = inject(ActivatedRoute);
  rewardService = inject(RewardProgramsService);
  pageHeaderService = inject(PageHeaderService);
  programUuid = "";
  tierNameParam = "";
  loading = signal(true);
  notFound = signal(false);
  loadingClients = signal(false);
  program = signal(null);
  tier = signal(null);
  tieredData = signal(null);
  searchQuery = signal("");
  searchPhoneQuery = signal("");
  currentPage = signal(0);
  sortValue = "programPeriodSpend,desc";
  sortOptions = [
    { value: "programPeriodSpend,desc", label: "Spending (high to low)" },
    { value: "programPeriodSpend,asc", label: "Spending (low to high)" },
    { value: "percentToNextTier,desc", label: "% to next level (high to low)" },
    { value: "percentToNextTier,asc", label: "% to next level (low to high)" }
  ];
  searchDebounce = null;
  searchPhoneDebounce = null;
  pageSize = 15;
  pageSizeOptions = PAGE_SIZE_OPTIONS;
  Math = Math;
  ngOnInit() {
    const uuid = this.route.snapshot.paramMap.get("uuid") ?? "";
    const tierName = this.route.snapshot.paramMap.get("tierName") ?? "";
    if (!uuid || !tierName) {
      this.notFound.set(true);
      this.loading.set(false);
      return;
    }
    this.programUuid = uuid;
    this.tierNameParam = decodeURIComponent(tierName);
    this.rewardService.getProgram(uuid).subscribe({
      next: (p) => {
        if (p.status === "DRAFT") {
          this.notFound.set(true);
          this.loading.set(false);
          return;
        }
        this.program.set(p);
        const t = p.cashbackTiers?.find((c) => c.name.toLowerCase() === this.tierNameParam.toLowerCase());
        if (!t) {
          this.notFound.set(true);
          this.loading.set(false);
          return;
        }
        this.tier.set(t);
        this.loading.set(false);
        this.setPageHeader();
        this.loadClients();
      },
      error: () => {
        this.notFound.set(true);
        this.loading.set(false);
      }
    });
  }
  setPageHeader() {
    const p = this.program();
    const t = this.tier();
    if (!p || !t)
      return;
    this.pageHeaderService.setPageHeader("Tier View", [
      { label: "Program View", route: "/bonus-program/view/" + p.uuid + "/tiers" },
      { label: "Tier View" }
    ]);
  }
  programViewLink() {
    const u = this.program()?.uuid;
    return u ? ["/bonus-program", "view", u, "tiers"] : ["/bonus-program"];
  }
  programBackUrl() {
    const u = this.program()?.uuid ?? this.programUuid;
    return u ? `/bonus-program/view/${u}/tiers` : "/bonus-program";
  }
  formatTierRange(t) {
    const min = t.minAmount.toLocaleString("en-US") + " \u20B8";
    const max = t.maxAmount != null ? t.maxAmount.toLocaleString("en-US") + " \u20B8" : "No cap";
    return `${min} \u2013 ${max}`;
  }
  onSearchChange(q) {
    this.searchQuery.set(q);
    if (this.searchDebounce)
      clearTimeout(this.searchDebounce);
    this.searchDebounce = setTimeout(() => {
      this.currentPage.set(0);
      this.loadClients();
    }, 300);
  }
  onSearchPhoneChange(q) {
    this.searchPhoneQuery.set(q);
    if (this.searchPhoneDebounce)
      clearTimeout(this.searchPhoneDebounce);
    this.searchPhoneDebounce = setTimeout(() => {
      this.currentPage.set(0);
      this.loadClients();
    }, 300);
  }
  onSortValueChange(value) {
    this.sortValue = value;
    this.currentPage.set(0);
    this.loadClients();
  }
  goToPage(page) {
    this.currentPage.set(page);
    this.loadClients();
  }
  getTotalPages() {
    return this.tieredData()?.totalPages ?? 0;
  }
  onPageSizeChange() {
    this.currentPage.set(0);
    this.loadClients();
  }
  onPageChange(pageOneBased) {
    this.goToPage(pageOneBased - 1);
  }
  loadClients() {
    const uuid = this.program()?.uuid;
    if (!uuid)
      return;
    this.loadingClients.set(true);
    const search = this.searchQuery().trim() || void 0;
    const searchPhone = this.searchPhoneQuery().trim() || void 0;
    this.rewardService.getTieredClients(uuid, this.currentPage(), this.pageSize, this.tierNameParam, search, searchPhone, this.sortValue).subscribe({
      next: (data) => {
        this.tieredData.set(data);
        this.loadingClients.set(false);
      },
      error: () => this.loadingClients.set(false)
    });
  }
  static \u0275fac = function ProgramTierPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProgramTierPageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProgramTierPageComponent, selectors: [["app-program-tier-page"]], decls: 4, vars: 1, consts: [[1, "page-shell"], [1, "loading-state"], ["backText", "Back to program", 3, "title", "description", "backLink"], ["type", "logo", "size", "large", 3, "visible", "overlay"], [1, "tier-header"], [1, "back-link", 3, "routerLink"], [1, "tier-title"], [1, "tier-subtitle"], [1, "glance-section", "card"], [1, "glance-title"], ["class", "glance-grid", 4, "ngIf"], [1, "toolbar"], ["type", "text", "placeholder", "Search by client name\u2026", 1, "tier-input", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Search by phone\u2026", 1, "tier-input", 3, "ngModelChange", "ngModel"], [1, "sort-control"], ["placeholder", "Sort by\u2026", 3, "ngModelChange", "options", "ngModel"], [1, "table-and-pagination-wrapper"], [1, "table-loading"], [1, "glance-grid"], [1, "glance-item", "glance-item-spend"], [1, "glance-label"], [1, "glance-value", "glance-value-nowrap"], [1, "glance-item"], [1, "glance-value"], ["class", "glance-item", 4, "ngIf"], ["type", "spinner", "size", "small", 3, "visible", "overlay"], [1, "table-container"], [1, "tier-table"], [1, "empty-row"], [1, "pagination-container"], [1, "tier-row"], [1, "client-link", 3, "routerLink"], [1, "progress-cell"], [1, "top-tier-text"], [1, "link-profile", 3, "routerLink"], [1, "progress-bar-track"], [1, "progress-bar-fill"], [1, "progress-text"], [1, "next-tier-text"], ["colspan", "5", 1, "empty-state-cell"], [1, "empty-state"], [1, "pagination-left"], [1, "pagination-info"], [1, "page-size-filter-section"], [1, "page-size-label"], [1, "page-size-select", 3, "ngModelChange", "change", "ngModel"], [3, "value"], [1, "pagination-right"], [3, "pageChange", "currentPage", "totalPages"]], template: function ProgramTierPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, ProgramTierPageComponent_Conditional_1_Template, 4, 2, "div", 1)(2, ProgramTierPageComponent_Conditional_2_Template, 1, 3, "app-not-found-state", 2)(3, ProgramTierPageComponent_Conditional_3_Template, 19, 9);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading() ? 1 : ctx.notFound() ? 2 : 3);
    }
  }, dependencies: [CommonModule, NgIf, DecimalPipe, RouterModule, RouterLink, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, NotFoundStateComponent, LoaderComponent, SelectComponent, PaginationComponent], styles: ["\n\n.page-shell[_ngcontent-%COMP%] {\n  max-width: 1400px;\n  margin: 0 auto;\n  padding: 0 1.5rem 3rem;\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  padding: 4rem 0;\n  color: #64748b;\n}\n.tier-header[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.back-link[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 0.875rem;\n  color: var(--primary-color, #15803d);\n  text-decoration: none;\n  margin-bottom: 0.5rem;\n}\n.back-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.tier-title[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 0.25rem 0;\n}\n.tier-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.9375rem;\n  color: #64748b;\n  margin: 0;\n}\n.card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n  padding: 1.25rem;\n  margin-bottom: 1.25rem;\n}\n.glance-title[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #94a3b8;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  margin: 0 0 1rem 0;\n}\n.glance-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));\n  gap: 1rem;\n}\n.glance-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.glance-item-spend[_ngcontent-%COMP%] {\n  grid-column: 1 / -1;\n  width: 100%;\n}\n.glance-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #64748b;\n}\n.glance-value[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #0f172a;\n}\n.glance-value-nowrap[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  width: 100%;\n}\n.toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  flex-wrap: wrap;\n  margin-bottom: 1rem;\n}\n.tier-input[_ngcontent-%COMP%] {\n  padding: 0.625rem 0.875rem;\n  border: 1px solid var(--color-input-border, #cbd5e1);\n  border-radius: 6px;\n  font-size: 0.875rem;\n  background: #fff;\n  color: #1a202c;\n  transition: border-color 0.2s, box-shadow 0.2s;\n}\n.tier-input[_ngcontent-%COMP%]:hover {\n  border-color: var(--color-input-border-hover, #94a3b8);\n}\n.tier-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--color-input-border-focus, var(--primary-color, #15803d));\n  box-shadow: 0 0 0 3px var(--color-input-shadow-focus, rgba(22, 163, 74, 0.1));\n}\n.tier-input[_ngcontent-%COMP%]::placeholder {\n  color: #94a3b8;\n}\n.sort-control[_ngcontent-%COMP%] {\n  min-width: 200px;\n}\n.table-loading[_ngcontent-%COMP%] {\n  padding: 2rem;\n  text-align: center;\n}\n.table-container[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 16px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n  border: 1px solid #e5e7eb;\n  overflow: hidden;\n}\n.tier-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.875rem;\n}\n.tier-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 1rem;\n  text-align: left;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  background: #f8fafc;\n  border-bottom: 1px solid #e5e7eb;\n}\n.tier-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border-bottom: 1px solid #f1f5f9;\n  color: #0f172a;\n}\n.tier-row[_ngcontent-%COMP%] {\n  transition: background 0.15s;\n}\n.tier-row[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n.tier-row[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.client-link[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--primary-color, #15803d);\n  text-decoration: none;\n}\n.client-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.progress-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.progress-bar-track[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 6px;\n  border-radius: 3px;\n  background: #e2e8f0;\n  overflow: hidden;\n}\n.progress-bar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 3px;\n  background: var(--primary-color, #15803d);\n}\n.progress-text[_ngcontent-%COMP%] {\n  font-weight: 600;\n  white-space: nowrap;\n}\n.next-tier-text[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #64748b;\n}\n.top-tier-text[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: #64748b;\n  font-style: italic;\n}\n.link-profile[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  font-weight: 600;\n  color: var(--primary-color, #15803d);\n  text-decoration: none;\n}\n.link-profile[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.table-and-pagination-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n.empty-row[_ngcontent-%COMP%]   td.empty-state-cell[_ngcontent-%COMP%] {\n  padding: 0;\n  border-bottom: none;\n  vertical-align: middle;\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  color: #64748b;\n}\n.empty-state[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  text-align: center;\n}\n.pagination-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  padding: 1rem;\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n  gap: 1rem;\n  margin-top: 1rem;\n  box-sizing: border-box;\n}\n.pagination-left[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 1.5rem;\n  flex-shrink: 0;\n}\n.pagination-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-shrink: 0;\n  margin-left: auto;\n}\n.pagination-info[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #64748b;\n  font-weight: 500;\n}\n.page-size-filter-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.page-size-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #475569;\n}\n.page-size-select[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: 1px solid #cbd5e1;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  background: white;\n  color: #1f2937;\n  cursor: pointer;\n  outline: none;\n  transition: all 0.2s;\n}\n.page-size-select[_ngcontent-%COMP%]:hover {\n  border-color: #94a3b8;\n}\n.page-size-select[_ngcontent-%COMP%]:focus {\n  border-color: var(--primary-color, #15803d);\n  box-shadow: 0 0 0 3px rgba(22, 163, 74, 0.1);\n}\n/*# sourceMappingURL=program-tier-page.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProgramTierPageComponent, [{
    type: Component,
    args: [{ selector: "app-program-tier-page", standalone: true, imports: [CommonModule, RouterModule, FormsModule, NotFoundStateComponent, LoaderComponent, SelectComponent, PaginationComponent], template: `
    <div class="page-shell">
      @if (loading()) {
        <div class="loading-state">
          <app-loader [visible]="true" [overlay]="false" type="logo" size="large"></app-loader>
          <p>Loading\u2026</p>
        </div>
      } @else if (notFound()) {
        <app-not-found-state
          [title]="'Tier not found'"
          [description]="'This tier does not exist for this program or the program is not available.'"
          [backLink]="programBackUrl()"
          backText="Back to program">
        </app-not-found-state>
      } @else {
        <header class="tier-header">
          <a [routerLink]="programViewLink()" class="back-link">\u2190 Program</a>
          <h1 class="tier-title">{{ tier()?.name }}</h1>
          <p class="tier-subtitle">{{ program()?.name }}</p>
        </header>

        <!-- Tier at a glance -->
        <section class="glance-section card">
          <h2 class="glance-title">Tier at a glance</h2>
          <div class="glance-grid" *ngIf="tier() as t">
            <div class="glance-item glance-item-spend">
              <span class="glance-label">Spend range</span>
              <span class="glance-value glance-value-nowrap">{{ formatTierRange(t) }}</span>
            </div>
            <div class="glance-item">
              <span class="glance-label">Clients in tier</span>
              <span class="glance-value">{{ tieredData()?.totalElements ?? 0 }}</span>
            </div>
            <div class="glance-item" *ngIf="t.extraEarningPercent != null">
              <span class="glance-label">Extra earning</span>
              <span class="glance-value">{{ t.extraEarningPercent }}%</span>
            </div>
          </div>
        </section>

        <!-- Search and sort (all sent to backend) -->
        <div class="toolbar">
          <input
            type="text"
            class="tier-input"
            placeholder="Search by client name\u2026"
            [ngModel]="searchQuery()"
            (ngModelChange)="onSearchChange($event)" />
          <input
            type="text"
            class="tier-input"
            placeholder="Search by phone\u2026"
            [ngModel]="searchPhoneQuery()"
            (ngModelChange)="onSearchPhoneChange($event)" />
          <div class="sort-control">
            <app-select
              [options]="sortOptions"
              [(ngModel)]="sortValue"
              (ngModelChange)="onSortValueChange($event)"
              placeholder="Sort by\u2026">
            </app-select>
          </div>
        </div>

        <!-- Table (same layout as clients / payments: no card, pagination bar below) -->
        <div class="table-and-pagination-wrapper">
          @if (loadingClients()) {
            <div class="table-loading">
              <app-loader [visible]="true" [overlay]="false" type="spinner" size="small"></app-loader>
            </div>
          } @else {
            <div class="table-container">
              <table class="tier-table">
                <thead>
                  <tr>
                    <th>Client</th>
                    <th>Contact</th>
                    <th>Spend (program period)</th>
                    <th>Progress to next tier</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  @if (tieredData()?.content?.length) {
                    @for (row of tieredData()!.content; track row.clientUuid) {
                      <tr class="tier-row">
                        <td>
                          <a [routerLink]="['/clients', row.clientUuid]" class="client-link">{{ row.clientName }}</a>
                        </td>
                        <td>{{ row.phone || '\u2014' }}</td>
                        <td>{{ row.programPeriodSpend | number:'1.0-0' }} \u20B8</td>
                        <td>
                          @if (row.percentToNextTier != null) {
                            <div class="progress-cell">
                              <div class="progress-bar-track">
                                <div class="progress-bar-fill" [style.width.%]="row.percentToNextTier"></div>
                              </div>
                              <span class="progress-text">{{ row.percentToNextTier | number:'1.0-1' }}%</span>
                              @if (row.nextTierName) {
                                <span class="next-tier-text">\u2192 {{ row.nextTierName }}</span>
                              }
                            </div>
                          } @else {
                            <span class="top-tier-text">Top tier</span>
                          }
                        </td>
                        <td>
                          <a [routerLink]="['/clients', row.clientUuid]" class="link-profile">Profile</a>
                        </td>
                      </tr>
                    }
                  } @else {
                    <tr class="empty-row">
                      <td colspan="5" class="empty-state-cell">
                        <div class="empty-state">
                          <span>No clients in this tier yet. Tiering is based on spend during the program period.</span>
                        </div>
                      </td>
                    </tr>
                  }
                </tbody>
              </table>
            </div>
            @if (!loadingClients() && (tieredData()?.totalElements ?? 0) > 0) {
              <div class="pagination-container">
                <div class="pagination-left">
                  <div class="pagination-info">
                    <span>\u041F\u043E\u043A\u0430\u0437\u0430\u043D\u043E {{ (currentPage() * pageSize) + 1 }}-{{ Math.min((currentPage() + 1) * pageSize, tieredData()!.totalElements) }} \u0438\u0437 {{ tieredData()!.totalElements }}</span>
                  </div>
                  <div class="page-size-filter-section">
                    <label class="page-size-label">\u0421\u0442\u0440\u043E\u043A \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435:</label>
                    <select [(ngModel)]="pageSize" (change)="onPageSizeChange()" class="page-size-select">
                      @for (opt of pageSizeOptions; track opt) {
                        <option [value]="opt">{{ opt }}</option>
                      }
                    </select>
                  </div>
                </div>
                @if (getTotalPages() > 1) {
                  <div class="pagination-right">
                    <app-pagination
                      [currentPage]="currentPage() + 1"
                      [totalPages]="getTotalPages()"
                      (pageChange)="onPageChange($event)">
                    </app-pagination>
                  </div>
                }
              </div>
            }
          }
        </div>
      }
    </div>
  `, styles: ["/* angular:styles/component:css;101b157e1590ba6fe02f6bbc68c2a54d85eb9dfe0d9f261e8d0be6eb699982ac;/Users/baglan/repo/westwood/westwood-frontend/src/app/features/bonus-program/pages/program-tier-page/program-tier-page.component.ts */\n.page-shell {\n  max-width: 1400px;\n  margin: 0 auto;\n  padding: 0 1.5rem 3rem;\n}\n.loading-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  padding: 4rem 0;\n  color: #64748b;\n}\n.tier-header {\n  margin-bottom: 1.5rem;\n}\n.back-link {\n  display: inline-block;\n  font-size: 0.875rem;\n  color: var(--primary-color, #15803d);\n  text-decoration: none;\n  margin-bottom: 0.5rem;\n}\n.back-link:hover {\n  text-decoration: underline;\n}\n.tier-title {\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 0.25rem 0;\n}\n.tier-subtitle {\n  font-size: 0.9375rem;\n  color: #64748b;\n  margin: 0;\n}\n.card {\n  background: #fff;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n  padding: 1.25rem;\n  margin-bottom: 1.25rem;\n}\n.glance-title {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #94a3b8;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  margin: 0 0 1rem 0;\n}\n.glance-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));\n  gap: 1rem;\n}\n.glance-item {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.glance-item-spend {\n  grid-column: 1 / -1;\n  width: 100%;\n}\n.glance-label {\n  font-size: 0.75rem;\n  color: #64748b;\n}\n.glance-value {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #0f172a;\n}\n.glance-value-nowrap {\n  white-space: nowrap;\n  width: 100%;\n}\n.toolbar {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  flex-wrap: wrap;\n  margin-bottom: 1rem;\n}\n.tier-input {\n  padding: 0.625rem 0.875rem;\n  border: 1px solid var(--color-input-border, #cbd5e1);\n  border-radius: 6px;\n  font-size: 0.875rem;\n  background: #fff;\n  color: #1a202c;\n  transition: border-color 0.2s, box-shadow 0.2s;\n}\n.tier-input:hover {\n  border-color: var(--color-input-border-hover, #94a3b8);\n}\n.tier-input:focus {\n  outline: none;\n  border-color: var(--color-input-border-focus, var(--primary-color, #15803d));\n  box-shadow: 0 0 0 3px var(--color-input-shadow-focus, rgba(22, 163, 74, 0.1));\n}\n.tier-input::placeholder {\n  color: #94a3b8;\n}\n.sort-control {\n  min-width: 200px;\n}\n.table-loading {\n  padding: 2rem;\n  text-align: center;\n}\n.table-container {\n  background: #fff;\n  border-radius: 16px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n  border: 1px solid #e5e7eb;\n  overflow: hidden;\n}\n.tier-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.875rem;\n}\n.tier-table th {\n  padding: 1rem;\n  text-align: left;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  background: #f8fafc;\n  border-bottom: 1px solid #e5e7eb;\n}\n.tier-table td {\n  padding: 1rem;\n  border-bottom: 1px solid #f1f5f9;\n  color: #0f172a;\n}\n.tier-row {\n  transition: background 0.15s;\n}\n.tier-row:hover {\n  background: #f8fafc;\n}\n.tier-row:last-child td {\n  border-bottom: none;\n}\n.client-link {\n  font-weight: 600;\n  color: var(--primary-color, #15803d);\n  text-decoration: none;\n}\n.client-link:hover {\n  text-decoration: underline;\n}\n.progress-cell {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.progress-bar-track {\n  width: 80px;\n  height: 6px;\n  border-radius: 3px;\n  background: #e2e8f0;\n  overflow: hidden;\n}\n.progress-bar-fill {\n  height: 100%;\n  border-radius: 3px;\n  background: var(--primary-color, #15803d);\n}\n.progress-text {\n  font-weight: 600;\n  white-space: nowrap;\n}\n.next-tier-text {\n  font-size: 0.75rem;\n  color: #64748b;\n}\n.top-tier-text {\n  font-size: 0.8125rem;\n  color: #64748b;\n  font-style: italic;\n}\n.link-profile {\n  font-size: 0.8125rem;\n  font-weight: 600;\n  color: var(--primary-color, #15803d);\n  text-decoration: none;\n}\n.link-profile:hover {\n  text-decoration: underline;\n}\n.table-and-pagination-wrapper {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n.empty-row td.empty-state-cell {\n  padding: 0;\n  border-bottom: none;\n  vertical-align: middle;\n}\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  color: #64748b;\n}\n.empty-state span {\n  font-size: 1rem;\n  text-align: center;\n}\n.pagination-container {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  padding: 1rem;\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n  gap: 1rem;\n  margin-top: 1rem;\n  box-sizing: border-box;\n}\n.pagination-left {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 1.5rem;\n  flex-shrink: 0;\n}\n.pagination-right {\n  display: flex;\n  align-items: center;\n  flex-shrink: 0;\n  margin-left: auto;\n}\n.pagination-info {\n  font-size: 0.875rem;\n  color: #64748b;\n  font-weight: 500;\n}\n.page-size-filter-section {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.page-size-label {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #475569;\n}\n.page-size-select {\n  padding: 8px 12px;\n  border: 1px solid #cbd5e1;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  background: white;\n  color: #1f2937;\n  cursor: pointer;\n  outline: none;\n  transition: all 0.2s;\n}\n.page-size-select:hover {\n  border-color: #94a3b8;\n}\n.page-size-select:focus {\n  border-color: var(--primary-color, #15803d);\n  box-shadow: 0 0 0 3px rgba(22, 163, 74, 0.1);\n}\n/*# sourceMappingURL=program-tier-page.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProgramTierPageComponent, { className: "ProgramTierPageComponent", filePath: "src/app/features/bonus-program/pages/program-tier-page/program-tier-page.component.ts", lineNumber: 263 });
})();
export {
  ProgramTierPageComponent
};
//# sourceMappingURL=chunk-WTCPOZVF.js.map
