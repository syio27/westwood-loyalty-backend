import {
  PageHeaderService
} from "./chunk-TXI2S3RM.js";
import {
  ActivatedRoute,
  CommonModule,
  Component,
  NgForOf,
  NgIf,
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
  ɵɵtextInterpolate2
} from "./chunk-LQF2QQXA.js";

// src/app/features/bonus-program/pages/create-program-wizard/create-program-wizard.component.ts
function CreateProgramWizardComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "form", 15)(2, "div", 16)(3, "label", 17)(4, "span", 18);
    \u0275\u0275text(5, "Program name *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "input", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "label", 20)(8, "span", 18);
    \u0275\u0275text(9, "Auto update");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "input", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 16)(12, "label", 22)(13, "span", 18);
    \u0275\u0275text(14, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "textarea", 23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 24)(17, "p", 25);
    \u0275\u0275text(18, "Auto update");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p", 26);
    \u0275\u0275text(20, " Auto update will keep this program active and allow you to adjust rules after launch without recreating the campaign. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 27)(22, "label", 17)(23, "span", 18);
    \u0275\u0275text(24, "Start date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(25, "input", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "label", 17)(27, "span", 18);
    \u0275\u0275text(28, "End date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "input", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 29)(31, "label", 30);
    \u0275\u0275element(32, "input", 21);
    \u0275\u0275elementStart(33, "span");
    \u0275\u0275text(34, "New customers will auto-join once any earning rule is fulfilled");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "label", 30);
    \u0275\u0275element(36, "input", 21);
    \u0275\u0275elementStart(37, "span");
    \u0275\u0275text(38, "Customers can join this campaign only once");
    \u0275\u0275elementEnd()()()()();
  }
}
function CreateProgramWizardComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "p", 31);
    \u0275\u0275text(2, "This step will be implemented with backend.");
    \u0275\u0275elementEnd()();
  }
}
function CreateProgramWizardComponent_li_11_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 39);
    \u0275\u0275element(2, "path", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function CreateProgramWizardComponent_li_11_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const step_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(step_r1.num);
  }
}
function CreateProgramWizardComponent_li_11_div_7_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 44);
    \u0275\u0275listener("click", function CreateProgramWizardComponent_li_11_div_7_button_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.continue());
    });
    \u0275\u0275text(1, "Next step");
    \u0275\u0275elementEnd();
  }
}
function CreateProgramWizardComponent_li_11_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41)(1, "p", 42);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, CreateProgramWizardComponent_li_11_div_7_button_3_Template, 2, 0, "button", 43);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(step_r1.hint);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.currentStep < ctx_r2.STEPS.length);
  }
}
function CreateProgramWizardComponent_li_11_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 45);
  }
}
function CreateProgramWizardComponent_li_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 32)(1, "div", 33)(2, "span", 34);
    \u0275\u0275template(3, CreateProgramWizardComponent_li_11_ng_container_3_Template, 3, 0, "ng-container", 35)(4, CreateProgramWizardComponent_li_11_ng_container_4_Template, 2, 1, "ng-container", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 36);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, CreateProgramWizardComponent_li_11_div_7_Template, 4, 2, "div", 37)(8, CreateProgramWizardComponent_li_11_div_8_Template, 1, 0, "div", 38);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r1 = ctx.$implicit;
    const last_r4 = ctx.last;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.currentStep === step_r1.num)("done", ctx_r2.currentStep > step_r1.num)("future", ctx_r2.currentStep < step_r1.num);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.currentStep > step_r1.num);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.currentStep <= step_r1.num);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(step_r1.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.currentStep === step_r1.num);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !last_r4);
  }
}
var STEPS = [
  { num: 1, label: "Program details", hint: "Define basic information and validity for this reward program." },
  { num: 2, label: "Earning rules", hint: "Configure when and how customers earn rewards." },
  { num: 3, label: "Rewards catalog", hint: "Set up what customers can redeem their points or bonuses for." },
  { num: 4, label: "Tiers (optional)", hint: "Optionally add tiers to differentiate customer groups." },
  { num: 5, label: "Notifications (optional)", hint: "Configure messages sent to customers about this program." },
  { num: 6, label: "Summary", hint: "Review all settings before activating the program." }
];
var CreateProgramWizardComponent = class _CreateProgramWizardComponent {
  pageHeaderService = inject(PageHeaderService);
  route = inject(ActivatedRoute);
  STEPS = STEPS;
  currentStep = 1;
  draftUuid = "";
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.draftUuid = params.get("uuid") ?? "";
    });
    this.pageHeaderService.setPageHeader("Create Program", [
      { label: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F", route: "/home" },
      { label: "Reward Programs", route: "/bonus-program" },
      { label: "Create Program" }
    ]);
  }
  back() {
    if (this.currentStep > 1)
      this.currentStep--;
  }
  continue() {
    if (this.currentStep < STEPS.length)
      this.currentStep++;
  }
  static \u0275fac = function CreateProgramWizardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CreateProgramWizardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CreateProgramWizardComponent, selectors: [["app-create-program-wizard"]], decls: 19, vars: 8, consts: [[1, "wizard-wrapper"], [1, "wizard-layout"], [1, "wizard-main"], [1, "step-number"], ["class", "step-content", 4, "ngIf"], [1, "steps-sidebar"], [1, "sidebar-title"], [1, "steps-list"], ["class", "step-item", 3, "active", "done", "future", 4, "ngFor", "ngForOf"], [1, "sidebar-footer"], ["routerLink", "/bonus-program", 1, "btn-cancel"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M18 6L6 18M6 6l12 12"], ["type", "button", 1, "btn-save-draft"], [1, "step-content"], [1, "details-form"], [1, "form-row"], [1, "field"], [1, "field-label"], ["type", "text", "placeholder", "e.g. Weekend cashback", 1, "field-input"], [1, "field", "field-inline-toggle"], ["type", "checkbox"], [1, "field", "full-width"], ["rows", "3", "placeholder", "Describe this reward program for your team.", 1, "field-textarea"], [1, "helper-banner"], [1, "helper-title"], [1, "helper-text"], [1, "form-row", "two-columns"], ["type", "date", 1, "field-input"], [1, "form-row", "toggles-row"], [1, "toggle-field"], [1, "step-placeholder"], [1, "step-item"], [1, "step-row"], [1, "step-num"], [4, "ngIf"], [1, "step-label"], ["class", "step-active-detail", 4, "ngIf"], ["class", "step-connector", 4, "ngIf"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "3"], ["d", "M5 13l4 4L19 7"], [1, "step-active-detail"], [1, "step-hint"], ["type", "button", "class", "btn-next-step", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn-next-step", 3, "click"], [1, "step-connector"]], template: function CreateProgramWizardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "main", 2)(3, "h2", 3);
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275template(5, CreateProgramWizardComponent_div_5_Template, 39, 0, "div", 4)(6, CreateProgramWizardComponent_div_6_Template, 3, 0, "div", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "aside", 5)(8, "h3", 6);
      \u0275\u0275text(9, "New reward program");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "ul", 7);
      \u0275\u0275template(11, CreateProgramWizardComponent_li_11_Template, 9, 11, "li", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 9)(13, "a", 10);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(14, "svg", 11);
      \u0275\u0275element(15, "path", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275text(16, " Cancel ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(17, "button", 13);
      \u0275\u0275text(18);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate2("", ctx.currentStep, ". ", ctx.STEPS[ctx.currentStep - 1].label, "");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.currentStep === 1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.currentStep > 1);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngForOf", ctx.STEPS);
      \u0275\u0275advance(6);
      \u0275\u0275classProp("btn-create", ctx.currentStep === ctx.STEPS.length);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.currentStep === ctx.STEPS.length ? "Create" : "Save draft", " ");
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterLink], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n}\n.wizard-wrapper[_ngcontent-%COMP%] {\n  min-height: 100%;\n  margin: -2rem;\n  padding: 2rem;\n  background: #f8fafc;\n}\n.wizard-layout[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1.5rem;\n  align-items: flex-start;\n}\n.wizard-main[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  background: white;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n  padding: 2rem 2.5rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n}\n.step-number[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 1.5rem 0;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid #e2e8f0;\n}\n.step-content[_ngcontent-%COMP%] {\n}\n.step-placeholder[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #94a3b8;\n  margin: 0;\n}\n.details-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  align-items: flex-start;\n}\n.form-row.two-columns[_ngcontent-%COMP%]    > .field[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.form-row[_ngcontent-%COMP%]   .full-width[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.35rem;\n  flex: 1;\n}\n.field-label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #475569;\n}\n.field-input[_ngcontent-%COMP%], \n.field-textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 8px;\n  border: 1px solid #cbd5e1;\n  padding: 0.5rem 0.75rem;\n  font-size: 0.9rem;\n  color: #0f172a;\n  background: #ffffff;\n}\n.field-input[_ngcontent-%COMP%]:focus, \n.field-textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #16A34A;\n  box-shadow: 0 0 0 1px #16A34A22;\n}\n.field-textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 72px;\n}\n.field-inline-toggle[_ngcontent-%COMP%] {\n  max-width: 220px;\n  align-self: flex-end;\n}\n.helper-banner[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  border: 1px solid #fed7aa;\n  background: #fff7ed;\n  padding: 0.75rem 0.9rem;\n  font-size: 0.8rem;\n  color: #9a3412;\n}\n.helper-title[_ngcontent-%COMP%] {\n  margin: 0 0 0.15rem 0;\n  font-weight: 600;\n}\n.helper-text[_ngcontent-%COMP%] {\n  margin: 0;\n  line-height: 1.4;\n}\n.toggles-row[_ngcontent-%COMP%] {\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.toggle-field[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.85rem;\n  color: #475569;\n}\n.toggle-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n.steps-sidebar[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 320px;\n  background: white;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n  padding: 1.75rem;\n  display: flex;\n  flex-direction: column;\n}\n.sidebar-title[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 1.5rem 0;\n  padding-bottom: 1.1rem;\n  border-bottom: 1px solid #e2e8f0;\n}\n.steps-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  flex: 1;\n}\n.step-item[_ngcontent-%COMP%] {\n  position: relative;\n}\n.step-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.85rem;\n}\n.step-num[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.875rem;\n  font-weight: 700;\n  flex-shrink: 0;\n  background: #f1f5f9;\n  color: #94a3b8;\n  transition: all 0.2s;\n}\n.step-num[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n.step-item.active[_ngcontent-%COMP%]   .step-num[_ngcontent-%COMP%] {\n  background: #16A34A;\n  color: white;\n}\n.step-item.done[_ngcontent-%COMP%]   .step-num[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #16A34A;\n}\n.step-label[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  color: #94a3b8;\n  font-weight: 500;\n}\n.step-item.active[_ngcontent-%COMP%]   .step-label[_ngcontent-%COMP%] {\n  color: #0f172a;\n  font-weight: 600;\n}\n.step-item.done[_ngcontent-%COMP%]   .step-label[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n.step-active-detail[_ngcontent-%COMP%] {\n  margin-left: calc(36px + 0.85rem);\n  padding: 0.5rem 0 0.25rem 0;\n}\n.step-hint[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #64748b;\n  line-height: 1.45;\n  margin: 0 0 0.85rem 0;\n}\n.btn-next-step[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.5rem 1.25rem;\n  background: #0f172a;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 0.85rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.btn-next-step[_ngcontent-%COMP%]:hover {\n  background: #1e293b;\n}\n.step-connector[_ngcontent-%COMP%] {\n  width: 2px;\n  height: 20px;\n  background: #e2e8f0;\n  margin: 4px 0 4px 17px;\n  border-radius: 1px;\n}\n.step-item.done[_ngcontent-%COMP%]   .step-connector[_ngcontent-%COMP%] {\n  background: #bbf7d0;\n}\n.sidebar-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.75rem;\n  margin-top: 1.5rem;\n  padding-top: 1rem;\n  border-top: 1px solid #e2e8f0;\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: #ef4444;\n  text-decoration: none;\n  cursor: pointer;\n  background: none;\n  border: none;\n  transition: color 0.15s;\n}\n.btn-cancel[_ngcontent-%COMP%]:hover {\n  color: #dc2626;\n}\n.btn-cancel[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 15px;\n  height: 15px;\n}\n.btn-save-draft[_ngcontent-%COMP%] {\n  padding: 0.5rem 1.25rem;\n  border: 1px solid #e2e8f0;\n  border-radius: 6px;\n  background: white;\n  color: #0f172a;\n  font-size: 0.85rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.btn-save-draft[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n  border-color: #cbd5e1;\n}\n.btn-save-draft.btn-create[_ngcontent-%COMP%] {\n  background: #16A34A;\n  color: white;\n  border-color: #16A34A;\n}\n.btn-save-draft.btn-create[_ngcontent-%COMP%]:hover {\n  background: #15803d;\n  border-color: #15803d;\n}\n@media (max-width: 768px) {\n  .wizard-layout[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .steps-sidebar[_ngcontent-%COMP%] {\n    width: 100%;\n    order: -1;\n  }\n  .section-cards[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=create-program-wizard.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CreateProgramWizardComponent, [{
    type: Component,
    args: [{ selector: "app-create-program-wizard", standalone: true, imports: [CommonModule, RouterLink], template: `
    <div class="wizard-wrapper">
      <div class="wizard-layout">
        <!-- ====== LEFT: Main content ====== -->
        <main class="wizard-main">
          <h2 class="step-number">{{ currentStep }}. {{ STEPS[currentStep - 1].label }}</h2>

          <!-- Step 1: Program details -->
          <div *ngIf="currentStep === 1" class="step-content">
            <form class="details-form">
              <div class="form-row">
                <label class="field">
                  <span class="field-label">Program name *</span>
                  <input class="field-input" type="text" placeholder="e.g. Weekend cashback" />
                </label>
                <label class="field field-inline-toggle">
                  <span class="field-label">Auto update</span>
                  <input type="checkbox" />
                </label>
              </div>

              <div class="form-row">
                <label class="field full-width">
                  <span class="field-label">Description</span>
                  <textarea class="field-textarea" rows="3" placeholder="Describe this reward program for your team."></textarea>
                </label>
              </div>

              <div class="helper-banner">
                <p class="helper-title">Auto update</p>
                <p class="helper-text">
                  Auto update will keep this program active and allow you to adjust rules after launch
                  without recreating the campaign.
                </p>
              </div>

              <div class="form-row two-columns">
                <label class="field">
                  <span class="field-label">Start date</span>
                  <input class="field-input" type="date" />
                </label>
                <label class="field">
                  <span class="field-label">End date</span>
                  <input class="field-input" type="date" />
                </label>
              </div>

              <div class="form-row toggles-row">
                <label class="toggle-field">
                  <input type="checkbox" />
                  <span>New customers will auto-join once any earning rule is fulfilled</span>
                </label>
                <label class="toggle-field">
                  <input type="checkbox" />
                  <span>Customers can join this campaign only once</span>
                </label>
              </div>
            </form>
          </div>

          <!-- Placeholder for steps 2-6 -->
          <div *ngIf="currentStep > 1" class="step-content">
            <p class="step-placeholder">This step will be implemented with backend.</p>
          </div>
        </main>

        <!-- ====== RIGHT: Sidebar stepper card ====== -->
        <aside class="steps-sidebar">
          <h3 class="sidebar-title">New reward program</h3>

          <ul class="steps-list">
            <li *ngFor="let step of STEPS; let last = last"
                class="step-item"
                [class.active]="currentStep === step.num"
                [class.done]="currentStep > step.num"
                [class.future]="currentStep < step.num">
              <div class="step-row">
                <span class="step-num">
                  <ng-container *ngIf="currentStep > step.num">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 13l4 4L19 7"/></svg>
                  </ng-container>
                  <ng-container *ngIf="currentStep <= step.num">{{ step.num }}</ng-container>
                </span>
                <span class="step-label">{{ step.label }}</span>
              </div>
              <!-- Active step: hint + Next step button -->
              <div *ngIf="currentStep === step.num" class="step-active-detail">
                <p class="step-hint">{{ step.hint }}</p>
                <button type="button" class="btn-next-step" (click)="continue()" *ngIf="currentStep < STEPS.length">Next step</button>
              </div>
              <!-- Connector line -->
              <div class="step-connector" *ngIf="!last"></div>
            </li>
          </ul>

          <!-- Sidebar footer -->
          <div class="sidebar-footer">
            <a routerLink="/bonus-program" class="btn-cancel">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
              Cancel
            </a>
            <button type="button" class="btn-save-draft" [class.btn-create]="currentStep === STEPS.length">
              {{ currentStep === STEPS.length ? 'Create' : 'Save draft' }}
            </button>
          </div>
        </aside>
      </div>
    </div>
  `, styles: ["/* angular:styles/component:css;474ef15809f562e096cd28bbd402471c867e611996c50958a2c35e6978f79e7a;/Users/baglan/repo/westwood/westwood-frontend/src/app/features/bonus-program/pages/create-program-wizard/create-program-wizard.component.ts */\n:host {\n  display: block;\n  height: 100%;\n}\n.wizard-wrapper {\n  min-height: 100%;\n  margin: -2rem;\n  padding: 2rem;\n  background: #f8fafc;\n}\n.wizard-layout {\n  display: flex;\n  gap: 1.5rem;\n  align-items: flex-start;\n}\n.wizard-main {\n  flex: 1;\n  min-width: 0;\n  background: white;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n  padding: 2rem 2.5rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n}\n.step-number {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 1.5rem 0;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid #e2e8f0;\n}\n.step-content {\n}\n.step-placeholder {\n  font-size: 0.9rem;\n  color: #94a3b8;\n  margin: 0;\n}\n.details-form {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n.form-row {\n  display: flex;\n  gap: 1rem;\n  align-items: flex-start;\n}\n.form-row.two-columns > .field {\n  flex: 1;\n}\n.form-row .full-width {\n  flex: 1;\n}\n.field {\n  display: flex;\n  flex-direction: column;\n  gap: 0.35rem;\n  flex: 1;\n}\n.field-label {\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #475569;\n}\n.field-input,\n.field-textarea {\n  width: 100%;\n  border-radius: 8px;\n  border: 1px solid #cbd5e1;\n  padding: 0.5rem 0.75rem;\n  font-size: 0.9rem;\n  color: #0f172a;\n  background: #ffffff;\n}\n.field-input:focus,\n.field-textarea:focus {\n  outline: none;\n  border-color: #16A34A;\n  box-shadow: 0 0 0 1px #16A34A22;\n}\n.field-textarea {\n  resize: vertical;\n  min-height: 72px;\n}\n.field-inline-toggle {\n  max-width: 220px;\n  align-self: flex-end;\n}\n.helper-banner {\n  border-radius: 8px;\n  border: 1px solid #fed7aa;\n  background: #fff7ed;\n  padding: 0.75rem 0.9rem;\n  font-size: 0.8rem;\n  color: #9a3412;\n}\n.helper-title {\n  margin: 0 0 0.15rem 0;\n  font-weight: 600;\n}\n.helper-text {\n  margin: 0;\n  line-height: 1.4;\n}\n.toggles-row {\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.toggle-field {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.85rem;\n  color: #475569;\n}\n.toggle-field input {\n  width: 16px;\n  height: 16px;\n}\n.steps-sidebar {\n  flex-shrink: 0;\n  width: 320px;\n  background: white;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n  padding: 1.75rem;\n  display: flex;\n  flex-direction: column;\n}\n.sidebar-title {\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 1.5rem 0;\n  padding-bottom: 1.1rem;\n  border-bottom: 1px solid #e2e8f0;\n}\n.steps-list {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  flex: 1;\n}\n.step-item {\n  position: relative;\n}\n.step-row {\n  display: flex;\n  align-items: center;\n  gap: 0.85rem;\n}\n.step-num {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.875rem;\n  font-weight: 700;\n  flex-shrink: 0;\n  background: #f1f5f9;\n  color: #94a3b8;\n  transition: all 0.2s;\n}\n.step-num svg {\n  width: 16px;\n  height: 16px;\n}\n.step-item.active .step-num {\n  background: #16A34A;\n  color: white;\n}\n.step-item.done .step-num {\n  background: #dcfce7;\n  color: #16A34A;\n}\n.step-label {\n  font-size: 0.95rem;\n  color: #94a3b8;\n  font-weight: 500;\n}\n.step-item.active .step-label {\n  color: #0f172a;\n  font-weight: 600;\n}\n.step-item.done .step-label {\n  color: #64748b;\n}\n.step-active-detail {\n  margin-left: calc(36px + 0.85rem);\n  padding: 0.5rem 0 0.25rem 0;\n}\n.step-hint {\n  font-size: 0.85rem;\n  color: #64748b;\n  line-height: 1.45;\n  margin: 0 0 0.85rem 0;\n}\n.btn-next-step {\n  display: inline-block;\n  padding: 0.5rem 1.25rem;\n  background: #0f172a;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 0.85rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.btn-next-step:hover {\n  background: #1e293b;\n}\n.step-connector {\n  width: 2px;\n  height: 20px;\n  background: #e2e8f0;\n  margin: 4px 0 4px 17px;\n  border-radius: 1px;\n}\n.step-item.done .step-connector {\n  background: #bbf7d0;\n}\n.sidebar-footer {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.75rem;\n  margin-top: 1.5rem;\n  padding-top: 1rem;\n  border-top: 1px solid #e2e8f0;\n}\n.btn-cancel {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: #ef4444;\n  text-decoration: none;\n  cursor: pointer;\n  background: none;\n  border: none;\n  transition: color 0.15s;\n}\n.btn-cancel:hover {\n  color: #dc2626;\n}\n.btn-cancel svg {\n  width: 15px;\n  height: 15px;\n}\n.btn-save-draft {\n  padding: 0.5rem 1.25rem;\n  border: 1px solid #e2e8f0;\n  border-radius: 6px;\n  background: white;\n  color: #0f172a;\n  font-size: 0.85rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.btn-save-draft:hover {\n  background: #f8fafc;\n  border-color: #cbd5e1;\n}\n.btn-save-draft.btn-create {\n  background: #16A34A;\n  color: white;\n  border-color: #16A34A;\n}\n.btn-save-draft.btn-create:hover {\n  background: #15803d;\n  border-color: #15803d;\n}\n@media (max-width: 768px) {\n  .wizard-layout {\n    flex-direction: column;\n  }\n  .steps-sidebar {\n    width: 100%;\n    order: -1;\n  }\n  .section-cards {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=create-program-wizard.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CreateProgramWizardComponent, { className: "CreateProgramWizardComponent", filePath: "src/app/features/bonus-program/pages/create-program-wizard/create-program-wizard.component.ts", lineNumber: 273 });
})();
export {
  CreateProgramWizardComponent
};
//# sourceMappingURL=chunk-JUDBLHBF.js.map
