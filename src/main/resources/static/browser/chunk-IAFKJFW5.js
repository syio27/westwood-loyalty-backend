import {
  PageHeaderService
} from "./chunk-TXI2S3RM.js";
import {
  CheckboxControlValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-CD4QMWYU.js";
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
  ɵɵclassProp,
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
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-LQF2QQXA.js";

// src/app/features/bonus-program/pages/bonus-program-page/bonus-program-page.component.ts
function BonusProgramPageComponent_tr_48__svg_svg_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 42);
    \u0275\u0275element(1, "path", 43)(2, "rect", 44)(3, "path", 45)(4, "path", 46)(5, "path", 47);
    \u0275\u0275elementEnd();
  }
}
function BonusProgramPageComponent_tr_48__svg_svg_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 42);
    \u0275\u0275element(1, "circle", 48)(2, "circle", 49)(3, "circle", 50)(4, "path", 51);
    \u0275\u0275elementEnd();
  }
}
function BonusProgramPageComponent_tr_48__svg_svg_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 42);
    \u0275\u0275element(1, "path", 52)(2, "path", 53)(3, "path", 54)(4, "circle", 55)(5, "circle", 56)(6, "circle", 57);
    \u0275\u0275elementEnd();
  }
}
function BonusProgramPageComponent_tr_48__svg_svg_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 42);
    \u0275\u0275element(1, "circle", 58)(2, "circle", 59)(3, "path", 60);
    \u0275\u0275elementEnd();
  }
}
function BonusProgramPageComponent_tr_48__svg_svg_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 42);
    \u0275\u0275element(1, "circle", 61)(2, "path", 62);
    \u0275\u0275elementEnd();
  }
}
function BonusProgramPageComponent_tr_48_span_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const program_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(program_r2.statusDetail);
  }
}
function BonusProgramPageComponent_tr_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 29);
    \u0275\u0275listener("click", function BonusProgramPageComponent_tr_48_Template_tr_click_0_listener() {
      const program_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goToProgram(program_r2));
    });
    \u0275\u0275elementStart(1, "td")(2, "div", 16)(3, "label", 30);
    \u0275\u0275listener("click", function BonusProgramPageComponent_tr_48_Template_label_click_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(4, "input", 31);
    \u0275\u0275listener("change", function BonusProgramPageComponent_tr_48_Template_input_change_4_listener() {
      const program_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleSelect(program_r2.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "span", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 32);
    \u0275\u0275elementContainerStart(7, 33);
    \u0275\u0275template(8, BonusProgramPageComponent_tr_48__svg_svg_8_Template, 6, 0, "svg", 34)(9, BonusProgramPageComponent_tr_48__svg_svg_9_Template, 5, 0, "svg", 34)(10, BonusProgramPageComponent_tr_48__svg_svg_10_Template, 7, 0, "svg", 34)(11, BonusProgramPageComponent_tr_48__svg_svg_11_Template, 4, 0, "svg", 34)(12, BonusProgramPageComponent_tr_48__svg_svg_12_Template, 3, 0, "svg", 34);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 35)(14, "span", 36);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 37);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(18, "td");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "td");
    \u0275\u0275template(23, BonusProgramPageComponent_tr_48_span_23_Template, 2, 1, "span", 38);
    \u0275\u0275elementStart(24, "span", 39);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "td", 40);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(27, "svg", 41);
    \u0275\u0275element(28, "path", 28);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const program_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("checked", ctx_r2.selectedIds.has(program_r2.id));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("grey", program_r2.status !== "Active");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitch", program_r2.icon);
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "gift");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "referral");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "cake");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "percent");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "clock");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(program_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Type: ", program_r2.type, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(program_r2.reward);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(program_r2.customers);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", program_r2.statusDetail);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", program_r2.status === "Active")("scheduled", program_r2.status === "Scheduled");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(program_r2.status);
  }
}
var BonusProgramPageComponent = class _BonusProgramPageComponent {
  pageHeaderService = inject(PageHeaderService);
  router = inject(Router);
  activeTab = "All";
  selectAll = false;
  selectedIds = /* @__PURE__ */ new Set();
  currentPage = 1;
  pageSize = 10;
  Math = Math;
  /** Mock data - replace with API */
  programs = [
    { id: "1", name: "Welcome Bonus", type: "Acquisition", reward: "Acquisition", customers: "3000 bonus, 45% of new customers", status: "Active", icon: "gift" },
    { id: "2", name: "Referral Program", type: "Growth", reward: "Growth", customers: "500 bonus, 12% of customers", status: "Active", icon: "referral" },
    { id: "3", name: "Birthday Reward", type: "Event", reward: "Event", customers: "1500 bonus, 57% of active customers", status: "Active", icon: "cake" },
    { id: "4", name: "Weekend Cashback", type: "Cashback", reward: "5% cashback", customers: "5% cashback", status: "Scheduled", statusDetail: "Starts tomorrow", icon: "percent" },
    { id: "5", name: "Weekend Cashback", type: "Cashback", reward: "5% Cashback", customers: "", status: "Scheduled", icon: "clock" }
  ];
  get filteredPrograms() {
    if (this.activeTab === "All")
      return this.programs;
    return this.programs.filter((p) => p.status === this.activeTab);
  }
  ngOnInit() {
    this.pageHeaderService.setPageHeader("Reward Programs", [
      { label: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F", route: "/home" },
      { label: "Reward Programs" }
    ]);
  }
  toggleSelectAll() {
    if (this.selectAll) {
      this.filteredPrograms.forEach((p) => this.selectedIds.add(p.id));
    } else {
      this.filteredPrograms.forEach((p) => this.selectedIds.delete(p.id));
    }
  }
  toggleSelect(id) {
    if (this.selectedIds.has(id))
      this.selectedIds.delete(id);
    else
      this.selectedIds.add(id);
    this.selectAll = this.filteredPrograms.length > 0 && this.filteredPrograms.every((p) => this.selectedIds.has(p.id));
  }
  goToProgram(program) {
  }
  static \u0275fac = function BonusProgramPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BonusProgramPageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BonusProgramPageComponent, selectors: [["app-bonus-program-page"]], decls: 58, vars: 18, consts: [[1, "page-wrapper"], [1, "programs-container"], [1, "header-actions-row"], ["routerLink", "/bonus-program/programs", 1, "btn-create-program"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "btn-icon"], ["d", "M12 5v14M5 12h14"], [1, "tabs-row"], [1, "tabs"], ["type", "button", 1, "tab", 3, "click"], [1, "tab-count"], [1, "table-wrap"], [1, "programs-table"], [2, "width", "40%"], [2, "width", "15%"], [2, "width", "25%"], [2, "width", "5%"], [1, "cell-flex"], [1, "checkbox-wrap"], ["type", "checkbox", 3, "ngModelChange", "change", "ngModel"], [1, "checkmark"], [1, "sort-indicator"], ["class", "program-row", 3, "click", 4, "ngFor", "ngForOf"], [1, "pagination"], ["type", "button", "aria-label", "Previous", 1, "page-btn", 3, "disabled"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M15 18l-6-6 6-6"], [1, "page-info"], ["type", "button", "aria-label", "Next", 1, "page-btn", 3, "disabled"], ["d", "M9 18l6-6-6-6"], [1, "program-row", 3, "click"], [1, "checkbox-wrap", 3, "click"], ["type", "checkbox", 3, "change", "checked"], [1, "program-icon"], [3, "ngSwitch"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5", 4, "ngSwitchCase"], [1, "program-info"], [1, "program-name"], [1, "program-type"], ["class", "status-detail", 4, "ngIf"], [1, "status-pill"], [1, "td-action"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "row-arrow"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5"], ["d", "M20 12v9H4v-9"], ["x", "2", "y", "7", "width", "20", "height", "5", "rx", "1"], ["d", "M12 22V7"], ["d", "M12 7c-2-2-4-2.5-4-4.5a2 2 0 0 1 4 0c0 1.5-2 2-4 4.5"], ["d", "M12 7c2-2 4-2.5 4-4.5a2 2 0 0 0-4 0c0 1.5 2 2 4 4.5"], ["cx", "18", "cy", "5", "r", "2.5"], ["cx", "6", "cy", "12", "r", "2.5"], ["cx", "18", "cy", "19", "r", "2.5"], ["d", "M8.5 13.5l7 4M15.5 6.5l-7 4"], ["d", "M20 21H4a1 1 0 0 1-1-1v-6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1z"], ["d", "M3 16h18"], ["d", "M12 12V9m-4 3V10m8 2V10"], ["cx", "8", "cy", "6", "r", "1"], ["cx", "12", "cy", "6", "r", "1"], ["cx", "16", "cy", "6", "r", "1"], ["cx", "9", "cy", "9", "r", "2"], ["cx", "15", "cy", "15", "r", "2"], ["d", "M5 19L19 5"], ["cx", "12", "cy", "12", "r", "10"], ["d", "M12 6v6l4 2"], [1, "status-detail"]], template: function BonusProgramPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "a", 3);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(4, "svg", 4);
      \u0275\u0275element(5, "path", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275text(6, " Create program ");
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(7, "div", 6)(8, "div", 7)(9, "button", 8);
      \u0275\u0275listener("click", function BonusProgramPageComponent_Template_button_click_9_listener() {
        return ctx.activeTab = "All";
      });
      \u0275\u0275text(10, "All");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "button", 8);
      \u0275\u0275listener("click", function BonusProgramPageComponent_Template_button_click_11_listener() {
        return ctx.activeTab = "Active";
      });
      \u0275\u0275text(12, "Active");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "button", 8);
      \u0275\u0275listener("click", function BonusProgramPageComponent_Template_button_click_13_listener() {
        return ctx.activeTab = "Draft";
      });
      \u0275\u0275text(14, "Draft");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "button", 8);
      \u0275\u0275listener("click", function BonusProgramPageComponent_Template_button_click_15_listener() {
        return ctx.activeTab = "Scheduled";
      });
      \u0275\u0275text(16, "Scheduled");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "button", 8);
      \u0275\u0275listener("click", function BonusProgramPageComponent_Template_button_click_17_listener() {
        return ctx.activeTab = "Archived";
      });
      \u0275\u0275text(18, "Archived");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "span", 9);
      \u0275\u0275text(20);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "div", 10)(22, "table", 11)(23, "colgroup");
      \u0275\u0275element(24, "col", 12)(25, "col", 13)(26, "col", 14)(27, "col", 13)(28, "col", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "thead")(30, "tr")(31, "th")(32, "div", 16)(33, "label", 17)(34, "input", 18);
      \u0275\u0275twoWayListener("ngModelChange", function BonusProgramPageComponent_Template_input_ngModelChange_34_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectAll, $event) || (ctx.selectAll = $event);
        return $event;
      });
      \u0275\u0275listener("change", function BonusProgramPageComponent_Template_input_change_34_listener() {
        return ctx.toggleSelectAll();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(35, "span", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "span");
      \u0275\u0275text(37, "Campaign");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(38, "th");
      \u0275\u0275text(39, "Reward");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "th");
      \u0275\u0275text(41, "Customers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "th");
      \u0275\u0275text(43, "Status ");
      \u0275\u0275elementStart(44, "span", 20);
      \u0275\u0275text(45, "\u25BE");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(46, "th");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(47, "tbody");
      \u0275\u0275template(48, BonusProgramPageComponent_tr_48_Template, 29, 19, "tr", 21);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(49, "div", 22)(50, "button", 23);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(51, "svg", 24);
      \u0275\u0275element(52, "path", 25);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(53, "span", 26);
      \u0275\u0275text(54);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "button", 27);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(56, "svg", 24);
      \u0275\u0275element(57, "path", 28);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275classProp("active", ctx.activeTab === "All");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.activeTab === "Active");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.activeTab === "Draft");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.activeTab === "Scheduled");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.activeTab === "Archived");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.filteredPrograms.length);
      \u0275\u0275advance(14);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectAll);
      \u0275\u0275advance(14);
      \u0275\u0275property("ngForOf", ctx.filteredPrograms);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.currentPage <= 1);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate3("", (ctx.currentPage - 1) * ctx.pageSize + 1, "-", ctx.Math.min(ctx.currentPage * ctx.pageSize, ctx.filteredPrograms.length), " of ", ctx.filteredPrograms.length, "");
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.currentPage * ctx.pageSize >= ctx.filteredPrograms.length);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, NgSwitch, NgSwitchCase, FormsModule, CheckboxControlValueAccessor, NgControlStatus, NgModel, RouterLink], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n}\n.page-wrapper[_ngcontent-%COMP%] {\n  min-height: 100%;\n  margin: -2rem;\n  padding: 2rem;\n  background: #f8fafc;\n}\n.programs-container[_ngcontent-%COMP%] {\n  max-width: 100%;\n  margin: 0 auto;\n}\n.header-actions-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  margin-bottom: 1rem;\n}\n.btn-create-program[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 1rem;\n  background: #16A34A;\n  color: white;\n  border-radius: 8px;\n  font-size: 0.9rem;\n  font-weight: 600;\n  text-decoration: none;\n  transition: background 0.2s;\n}\n.btn-create-program[_ngcontent-%COMP%]:hover {\n  background: #15803d;\n  color: white;\n}\n.btn-icon[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n}\n.tabs-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1rem;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0;\n  background: #f1f5f9;\n  border-radius: 8px;\n  padding: 2px;\n}\n.tab[_ngcontent-%COMP%] {\n  padding: 0.4rem 1rem;\n  border: none;\n  background: transparent;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #64748b;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.tab[_ngcontent-%COMP%]:hover {\n  color: #475569;\n}\n.tab.active[_ngcontent-%COMP%] {\n  background: #16A34A;\n  color: white;\n}\n.tab-count[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #64748b;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n  overflow: hidden;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);\n}\n.programs-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  table-layout: fixed;\n}\n.programs-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.programs-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 0.75rem 1rem;\n  vertical-align: middle;\n}\n.programs-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  background: #f8fafc;\n  border-bottom: 1px solid #e2e8f0;\n}\n.programs-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.875rem 1rem;\n  border-bottom: 1px solid #f1f5f9;\n  font-size: 0.9rem;\n  color: #475569;\n}\n.program-row[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.program-row[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n.program-row[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.cell-flex[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  min-width: 0;\n}\n.checkbox-wrap[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  cursor: pointer;\n  flex-shrink: 0;\n}\n.checkbox-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0;\n  width: 18px;\n  height: 18px;\n  cursor: pointer;\n}\n.checkmark[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  border: 2px solid #cbd5e1;\n  border-radius: 4px;\n  flex-shrink: 0;\n}\n.checkbox-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .checkmark[_ngcontent-%COMP%] {\n  background: #16A34A;\n  border-color: #16A34A;\n}\n.checkbox-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .checkmark[_ngcontent-%COMP%]::after {\n  content: "";\n  display: block;\n  width: 5px;\n  height: 10px;\n  border: solid white;\n  border-width: 0 2px 2px 0;\n  margin: 2px 0 0 5px;\n  transform: rotate(45deg);\n}\n.program-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 8px;\n  background: #dcfce7;\n  color: #16A34A;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.program-icon.grey[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #94a3b8;\n}\n.program-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n}\n.program-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.15rem;\n  min-width: 0;\n  overflow: hidden;\n}\n.program-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #0f172a;\n  font-size: 0.95rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.program-type[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #64748b;\n}\n.status-detail[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.8rem;\n  color: #64748b;\n  margin-bottom: 0.15rem;\n}\n.status-pill[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.2rem 0.6rem;\n  border-radius: 9999px;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.status-pill.active[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #16A34A;\n}\n.status-pill.scheduled[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #64748b;\n}\n.status-pill[_ngcontent-%COMP%]:not(.active):not(.scheduled) {\n  background: #f1f5f9;\n  color: #64748b;\n}\n.sort-indicator[_ngcontent-%COMP%] {\n  margin-left: 0.25rem;\n  opacity: 0.6;\n  font-size: 0.65rem;\n}\n.td-action[_ngcontent-%COMP%] {\n  text-align: right !important;\n}\n.row-arrow[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  color: #94a3b8;\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  margin-top: 1.25rem;\n}\n.page-btn[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  background: white;\n  color: #475569;\n  cursor: pointer;\n}\n.page-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f8fafc;\n  border-color: #16A34A;\n  color: #16A34A;\n}\n.page-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.page-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n}\n.page-info[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #64748b;\n}\n/*# sourceMappingURL=bonus-program-page.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BonusProgramPageComponent, [{
    type: Component,
    args: [{ selector: "app-bonus-program-page", standalone: true, imports: [CommonModule, FormsModule, RouterLink], template: `
    <div class="page-wrapper">
      <div class="programs-container">
        <!-- Actions only - breadcrumb & title come from layout PageHeader -->
        <div class="header-actions-row">
          <a routerLink="/bonus-program/programs" class="btn-create-program">
            <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 5v14M5 12h14"/>
            </svg>
            Create program
          </a>
        </div>

        <!-- Tabs + count -->
        <div class="tabs-row">
          <div class="tabs">
            <button type="button" class="tab" [class.active]="activeTab === 'All'" (click)="activeTab = 'All'">All</button>
            <button type="button" class="tab" [class.active]="activeTab === 'Active'" (click)="activeTab = 'Active'">Active</button>
            <button type="button" class="tab" [class.active]="activeTab === 'Draft'" (click)="activeTab = 'Draft'">Draft</button>
            <button type="button" class="tab" [class.active]="activeTab === 'Scheduled'" (click)="activeTab = 'Scheduled'">Scheduled</button>
            <button type="button" class="tab" [class.active]="activeTab === 'Archived'" (click)="activeTab = 'Archived'">Archived</button>
          </div>
          <span class="tab-count">{{ filteredPrograms.length }}</span>
        </div>

        <!-- Table -->
        <div class="table-wrap">
          <table class="programs-table">
            <colgroup>
              <col style="width:40%">
              <col style="width:15%">
              <col style="width:25%">
              <col style="width:15%">
              <col style="width:5%">
            </colgroup>
            <thead>
              <tr>
                <th>
                  <div class="cell-flex">
                    <label class="checkbox-wrap">
                      <input type="checkbox" [(ngModel)]="selectAll" (change)="toggleSelectAll()">
                      <span class="checkmark"></span>
                    </label>
                    <span>Campaign</span>
                  </div>
                </th>
                <th>Reward</th>
                <th>Customers</th>
                <th>Status <span class="sort-indicator">\u25BE</span></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let program of filteredPrograms" class="program-row" (click)="goToProgram(program)">
                <td>
                  <div class="cell-flex">
                    <label class="checkbox-wrap" (click)="$event.stopPropagation()">
                      <input type="checkbox" [checked]="selectedIds.has(program.id)" (change)="toggleSelect(program.id)">
                      <span class="checkmark"></span>
                    </label>
                    <div class="program-icon" [class.grey]="program.status !== 'Active'">
                      <ng-container [ngSwitch]="program.icon">
                        <svg *ngSwitchCase="'gift'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20 12v9H4v-9"/><rect x="2" y="7" width="20" height="5" rx="1"/><path d="M12 22V7"/><path d="M12 7c-2-2-4-2.5-4-4.5a2 2 0 0 1 4 0c0 1.5-2 2-4 4.5"/><path d="M12 7c2-2 4-2.5 4-4.5a2 2 0 0 0-4 0c0 1.5 2 2 4 4.5"/></svg>
                        <svg *ngSwitchCase="'referral'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="18" cy="5" r="2.5"/><circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="19" r="2.5"/><path d="M8.5 13.5l7 4M15.5 6.5l-7 4"/></svg>
                        <svg *ngSwitchCase="'cake'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20 21H4a1 1 0 0 1-1-1v-6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1z"/><path d="M3 16h18"/><path d="M12 12V9m-4 3V10m8 2V10"/><circle cx="8" cy="6" r="1"/><circle cx="12" cy="6" r="1"/><circle cx="16" cy="6" r="1"/></svg>
                        <svg *ngSwitchCase="'percent'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="9" cy="9" r="2"/><circle cx="15" cy="15" r="2"/><path d="M5 19L19 5"/></svg>
                        <svg *ngSwitchCase="'clock'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                      </ng-container>
                    </div>
                    <div class="program-info">
                      <span class="program-name">{{ program.name }}</span>
                      <span class="program-type">Type: {{ program.type }}</span>
                    </div>
                  </div>
                </td>
                <td>{{ program.reward }}</td>
                <td>{{ program.customers }}</td>
                <td>
                  <span *ngIf="program.statusDetail" class="status-detail">{{ program.statusDetail }}</span>
                  <span class="status-pill" [class.active]="program.status === 'Active'" [class.scheduled]="program.status === 'Scheduled'">{{ program.status }}</span>
                </td>
                <td class="td-action">
                  <svg class="row-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Pagination -->
        <div class="pagination">
          <button type="button" class="page-btn" [disabled]="currentPage <= 1" aria-label="Previous">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <span class="page-info">{{ (currentPage - 1) * pageSize + 1 }}-{{ Math.min(currentPage * pageSize, filteredPrograms.length) }} of {{ filteredPrograms.length }}</span>
          <button type="button" class="page-btn" [disabled]="currentPage * pageSize >= filteredPrograms.length" aria-label="Next">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>
      </div>
    </div>
  `, styles: ['/* angular:styles/component:css;57516718f13c3869b718532e0bcfa3c6733bf026c96424939d6b79a4f7e74d96;/Users/baglan/repo/westwood/westwood-frontend/src/app/features/bonus-program/pages/bonus-program-page/bonus-program-page.component.ts */\n:host {\n  display: block;\n  height: 100%;\n}\n.page-wrapper {\n  min-height: 100%;\n  margin: -2rem;\n  padding: 2rem;\n  background: #f8fafc;\n}\n.programs-container {\n  max-width: 100%;\n  margin: 0 auto;\n}\n.header-actions-row {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  margin-bottom: 1rem;\n}\n.btn-create-program {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 1rem;\n  background: #16A34A;\n  color: white;\n  border-radius: 8px;\n  font-size: 0.9rem;\n  font-weight: 600;\n  text-decoration: none;\n  transition: background 0.2s;\n}\n.btn-create-program:hover {\n  background: #15803d;\n  color: white;\n}\n.btn-icon {\n  width: 18px;\n  height: 18px;\n}\n.tabs-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1rem;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.tabs {\n  display: flex;\n  gap: 0;\n  background: #f1f5f9;\n  border-radius: 8px;\n  padding: 2px;\n}\n.tab {\n  padding: 0.4rem 1rem;\n  border: none;\n  background: transparent;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #64748b;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.tab:hover {\n  color: #475569;\n}\n.tab.active {\n  background: #16A34A;\n  color: white;\n}\n.tab-count {\n  font-size: 0.875rem;\n  color: #64748b;\n}\n.table-wrap {\n  background: white;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n  overflow: hidden;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);\n}\n.programs-table {\n  width: 100%;\n  border-collapse: collapse;\n  table-layout: fixed;\n}\n.programs-table th,\n.programs-table td {\n  text-align: left;\n  padding: 0.75rem 1rem;\n  vertical-align: middle;\n}\n.programs-table th {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  background: #f8fafc;\n  border-bottom: 1px solid #e2e8f0;\n}\n.programs-table td {\n  padding: 0.875rem 1rem;\n  border-bottom: 1px solid #f1f5f9;\n  font-size: 0.9rem;\n  color: #475569;\n}\n.program-row {\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.program-row:hover {\n  background: #f8fafc;\n}\n.program-row:last-child td {\n  border-bottom: none;\n}\n.cell-flex {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  min-width: 0;\n}\n.checkbox-wrap {\n  display: inline-flex;\n  align-items: center;\n  cursor: pointer;\n  flex-shrink: 0;\n}\n.checkbox-wrap input {\n  position: absolute;\n  opacity: 0;\n  width: 18px;\n  height: 18px;\n  cursor: pointer;\n}\n.checkmark {\n  width: 18px;\n  height: 18px;\n  border: 2px solid #cbd5e1;\n  border-radius: 4px;\n  flex-shrink: 0;\n}\n.checkbox-wrap input:checked + .checkmark {\n  background: #16A34A;\n  border-color: #16A34A;\n}\n.checkbox-wrap input:checked + .checkmark::after {\n  content: "";\n  display: block;\n  width: 5px;\n  height: 10px;\n  border: solid white;\n  border-width: 0 2px 2px 0;\n  margin: 2px 0 0 5px;\n  transform: rotate(45deg);\n}\n.program-icon {\n  width: 40px;\n  height: 40px;\n  border-radius: 8px;\n  background: #dcfce7;\n  color: #16A34A;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.program-icon.grey {\n  background: #f1f5f9;\n  color: #94a3b8;\n}\n.program-icon svg {\n  width: 22px;\n  height: 22px;\n}\n.program-info {\n  display: flex;\n  flex-direction: column;\n  gap: 0.15rem;\n  min-width: 0;\n  overflow: hidden;\n}\n.program-name {\n  font-weight: 600;\n  color: #0f172a;\n  font-size: 0.95rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.program-type {\n  font-size: 0.8rem;\n  color: #64748b;\n}\n.status-detail {\n  display: block;\n  font-size: 0.8rem;\n  color: #64748b;\n  margin-bottom: 0.15rem;\n}\n.status-pill {\n  display: inline-block;\n  padding: 0.2rem 0.6rem;\n  border-radius: 9999px;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.status-pill.active {\n  background: #dcfce7;\n  color: #16A34A;\n}\n.status-pill.scheduled {\n  background: #f1f5f9;\n  color: #64748b;\n}\n.status-pill:not(.active):not(.scheduled) {\n  background: #f1f5f9;\n  color: #64748b;\n}\n.sort-indicator {\n  margin-left: 0.25rem;\n  opacity: 0.6;\n  font-size: 0.65rem;\n}\n.td-action {\n  text-align: right !important;\n}\n.row-arrow {\n  width: 20px;\n  height: 20px;\n  color: #94a3b8;\n}\n.pagination {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  margin-top: 1.25rem;\n}\n.page-btn {\n  width: 36px;\n  height: 36px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  background: white;\n  color: #475569;\n  cursor: pointer;\n}\n.page-btn:hover:not(:disabled) {\n  background: #f8fafc;\n  border-color: #16A34A;\n  color: #16A34A;\n}\n.page-btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.page-btn svg {\n  width: 18px;\n  height: 18px;\n}\n.page-info {\n  font-size: 0.875rem;\n  color: #64748b;\n}\n/*# sourceMappingURL=bonus-program-page.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BonusProgramPageComponent, { className: "BonusProgramPageComponent", filePath: "src/app/features/bonus-program/pages/bonus-program-page/bonus-program-page.component.ts", lineNumber: 186 });
})();
export {
  BonusProgramPageComponent
};
//# sourceMappingURL=chunk-IAFKJFW5.js.map
