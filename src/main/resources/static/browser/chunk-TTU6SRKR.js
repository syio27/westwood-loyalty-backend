import {
  ClientsService
} from "./chunk-GE67K5I4.js";
import {
  PhoneFormatPipe
} from "./chunk-OUAWC6NU.js";
import {
  BonusesService
} from "./chunk-VOO7HGWJ.js";
import {
  LoaderComponent
} from "./chunk-74OMJKP6.js";
import {
  PageHeaderService
} from "./chunk-TXI2S3RM.js";
import "./chunk-6FFMNYG3.js";
import {
  ToastService
} from "./chunk-UB4WPUR7.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgModel,
  NumberValueAccessor
} from "./chunk-CD4QMWYU.js";
import {
  ChangeDetectorRef,
  CommonModule,
  Component,
  NgForOf,
  NgIf,
  RouterLink,
  RouterModule,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
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
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-LQF2QQXA.js";

// src/app/features/bonus-management/pages/bonus-management-page/bonus-management-page.component.ts
var _c0 = (a0) => ["/clients", a0];
function BonusManagementPageComponent_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 15);
  }
}
function BonusManagementPageComponent_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u041D\u0430\u0439\u0442\u0438");
    \u0275\u0275elementEnd();
  }
}
function BonusManagementPageComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 18);
    \u0275\u0275element(3, "circle", 19)(4, "path", 20)(5, "line", 21)(6, "line", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "h3");
    \u0275\u0275text(8, "\u041A\u043B\u0438\u0435\u043D\u0442 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p");
    \u0275\u0275text(10, "\u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E\u0441\u0442\u044C \u0432\u0432\u0435\u0434\u0435\u043D\u043D\u043E\u0433\u043E \u043D\u043E\u043C\u0435\u0440\u0430 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430");
    \u0275\u0275elementEnd()();
  }
}
function BonusManagementPageComponent_div_19_div_20_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 64);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tag_r2);
  }
}
function BonusManagementPageComponent_div_19_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62);
    \u0275\u0275template(1, BonusManagementPageComponent_div_19_div_20_span_1_Template, 2, 1, "span", 63);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.client.tags);
  }
}
function BonusManagementPageComponent_div_19__svg_svg_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 18);
    \u0275\u0275element(1, "path", 65);
    \u0275\u0275elementEnd();
  }
}
function BonusManagementPageComponent_div_19_span_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 66);
  }
}
function BonusManagementPageComponent_div_19__svg_svg_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 18);
    \u0275\u0275element(1, "path", 67);
    \u0275\u0275elementEnd();
  }
}
function BonusManagementPageComponent_div_19_span_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 66);
  }
}
function BonusManagementPageComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 24)(2, "div", 25)(3, "div", 26);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 27)(6, "h3", 28);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 29);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "phoneFormat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 30);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "a", 31);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(14, "svg", 18);
    \u0275\u0275element(15, "path", 32)(16, "path", 33)(17, "path", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275text(19, "\u041F\u0440\u043E\u0444\u0438\u043B\u044C");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(20, BonusManagementPageComponent_div_19_div_20_Template, 2, 1, "div", 35);
    \u0275\u0275elementStart(21, "div", 36)(22, "div", 37);
    \u0275\u0275text(23, "\u0422\u0435\u043A\u0443\u0449\u0438\u0439 \u0431\u0430\u043B\u0430\u043D\u0441 \u0431\u043E\u043D\u0443\u0441\u043E\u0432");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 38);
    \u0275\u0275text(25);
    \u0275\u0275elementStart(26, "span", 39);
    \u0275\u0275text(27, "\u20B8");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(28, "div", 40)(29, "div", 41)(30, "div", 42)(31, "div", 43);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(32, "svg", 18);
    \u0275\u0275element(33, "path", 44);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(34, "div", 45)(35, "h4");
    \u0275\u0275text(36, "\u041D\u0430\u0447\u0438\u0441\u043B\u0438\u0442\u044C \u0431\u043E\u043D\u0443\u0441\u044B");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "p");
    \u0275\u0275text(38, "\u0412\u0440\u0443\u0447\u043D\u0443\u044E \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0431\u043E\u043D\u0443\u0441\u044B \u043A\u043B\u0438\u0435\u043D\u0442\u0443");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(39, "div", 46)(40, "div", 47)(41, "label");
    \u0275\u0275text(42, "\u0421\u0443\u043C\u043C\u0430 \u0431\u043E\u043D\u0443\u0441\u043E\u0432");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 48)(44, "input", 49);
    \u0275\u0275twoWayListener("ngModelChange", function BonusManagementPageComponent_div_19_Template_input_ngModelChange_44_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.grantAmount, $event) || (ctx_r2.grantAmount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "span", 50);
    \u0275\u0275text(46, "\u20B8");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(47, "div", 47)(48, "label");
    \u0275\u0275text(49, "\u041F\u0440\u0438\u0447\u0438\u043D\u0430 \u043D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u044F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "textarea", 51);
    \u0275\u0275twoWayListener("ngModelChange", function BonusManagementPageComponent_div_19_Template_textarea_ngModelChange_50_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.grantReason, $event) || (ctx_r2.grantReason = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "button", 52);
    \u0275\u0275listener("click", function BonusManagementPageComponent_div_19_Template_button_click_51_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.grantBonus());
    });
    \u0275\u0275template(52, BonusManagementPageComponent_div_19__svg_svg_52_Template, 2, 0, "svg", 53)(53, BonusManagementPageComponent_div_19_span_53_Template, 1, 0, "span", 54);
    \u0275\u0275text(54);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(55, "div", 55)(56, "div", 42)(57, "div", 56);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(58, "svg", 18);
    \u0275\u0275element(59, "path", 57);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(60, "div", 45)(61, "h4");
    \u0275\u0275text(62, "\u0421\u043F\u0438\u0441\u0430\u0442\u044C \u0431\u043E\u043D\u0443\u0441\u044B");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "p");
    \u0275\u0275text(64, "\u0412\u0440\u0443\u0447\u043D\u0443\u044E \u0441\u043F\u0438\u0441\u0430\u0442\u044C \u0431\u043E\u043D\u0443\u0441\u044B \u0443 \u043A\u043B\u0438\u0435\u043D\u0442\u0430");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(65, "div", 46)(66, "div", 47)(67, "label");
    \u0275\u0275text(68, " \u0421\u0443\u043C\u043C\u0430 \u0441\u043F\u0438\u0441\u0430\u043D\u0438\u044F ");
    \u0275\u0275elementStart(69, "span", 58);
    \u0275\u0275text(70);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(71, "div", 48)(72, "input", 59);
    \u0275\u0275twoWayListener("ngModelChange", function BonusManagementPageComponent_div_19_Template_input_ngModelChange_72_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.revokeAmount, $event) || (ctx_r2.revokeAmount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "span", 50);
    \u0275\u0275text(74, "\u20B8");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(75, "div", 47)(76, "label");
    \u0275\u0275text(77, "\u041F\u0440\u0438\u0447\u0438\u043D\u0430 \u0441\u043F\u0438\u0441\u0430\u043D\u0438\u044F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "textarea", 60);
    \u0275\u0275twoWayListener("ngModelChange", function BonusManagementPageComponent_div_19_Template_textarea_ngModelChange_78_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.revokeReason, $event) || (ctx_r2.revokeReason = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(79, "button", 61);
    \u0275\u0275listener("click", function BonusManagementPageComponent_div_19_Template_button_click_79_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.revokeBonus());
    });
    \u0275\u0275template(80, BonusManagementPageComponent_div_19__svg_svg_80_Template, 2, 0, "svg", 53)(81, BonusManagementPageComponent_div_19_span_81_Template, 1, 0, "span", 54);
    \u0275\u0275text(82);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r2.getInitials(), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r2.client.firstName, " ", ctx_r2.client.lastName || "", "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 24, ctx_r2.client.phone));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("business", ctx_r2.client.type === "business");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.client.type === "business" ? "\u0411\u0438\u0437\u043D\u0435\u0441" : "\u0418\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u044B\u0439", " ");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(26, _c0, ctx_r2.client.id));
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r2.client.tags && ctx_r2.client.tags.length > 0);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r2.formatAmount(ctx_r2.bonusBalance), " ");
    \u0275\u0275advance(19);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.grantAmount);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.grantReason);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r2.grantAmount || ctx_r2.grantAmount <= 0 || ctx_r2.isGranting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isGranting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isGranting);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.isGranting ? "\u041D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u0435..." : "\u041D\u0430\u0447\u0438\u0441\u043B\u0438\u0442\u044C \u0431\u043E\u043D\u0443\u0441\u044B", " ");
    \u0275\u0275advance(16);
    \u0275\u0275textInterpolate1("\u043C\u0430\u043A\u0441. ", ctx_r2.formatAmount(ctx_r2.bonusBalance), " \u20B8");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.revokeAmount);
    \u0275\u0275property("max", ctx_r2.bonusBalance);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.revokeReason);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r2.revokeAmount || ctx_r2.revokeAmount <= 0 || ctx_r2.revokeAmount > ctx_r2.bonusBalance || ctx_r2.isRevoking || ctx_r2.bonusBalance <= 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isRevoking);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isRevoking);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.isRevoking ? "\u0421\u043F\u0438\u0441\u0430\u043D\u0438\u0435..." : "\u0421\u043F\u0438\u0441\u0430\u0442\u044C \u0431\u043E\u043D\u0443\u0441\u044B", " ");
  }
}
var BonusManagementPageComponent = class _BonusManagementPageComponent {
  pageHeaderService = inject(PageHeaderService);
  clientsService = inject(ClientsService);
  bonusesService = inject(BonusesService);
  toastService = inject(ToastService);
  cdr = inject(ChangeDetectorRef);
  searchPhone = "";
  isSearching = false;
  searchPerformed = false;
  client = null;
  bonusBalance = 0;
  grantAmount = null;
  grantReason = "";
  isGranting = false;
  revokeAmount = null;
  revokeReason = "";
  isRevoking = false;
  ngOnInit() {
    this.pageHeaderService.setPageHeader("\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0431\u043E\u043D\u0443\u0441\u0430\u043C\u0438", [
      { label: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F", route: "/home" },
      { label: "\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0431\u043E\u043D\u0443\u0441\u0430\u043C\u0438" }
    ]);
  }
  searchClient() {
    if (!this.searchPhone.trim())
      return;
    this.isSearching = true;
    this.searchPerformed = true;
    this.client = null;
    let phone = this.searchPhone.trim().replace(/[\s\-\(\)]/g, "");
    if (phone.startsWith("8")) {
      phone = "+7" + phone.substring(1);
    } else if (!phone.startsWith("+")) {
      phone = "+" + phone;
    }
    this.clientsService.searchClientByPhone(phone).subscribe({
      next: (result) => {
        if (result) {
          this.client = {
            id: result.id,
            firstName: result.firstName,
            lastName: result.lastName,
            phone: result.phone,
            email: result.email || null,
            type: result.type || "individual",
            tags: result.tags || []
          };
          this.loadBonusBalance();
        }
        this.isSearching = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error("Search error:", err);
        this.isSearching = false;
        this.client = null;
        this.cdr.detectChanges();
      }
    });
  }
  loadBonusBalance() {
    if (!this.client)
      return;
    this.bonusesService.getClientBonusBalance(this.client.id).subscribe({
      next: (balance) => {
        this.bonusBalance = balance.currentBalance;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error("Error loading balance:", err);
        this.bonusBalance = 0;
      }
    });
  }
  grantBonus() {
    if (!this.client || !this.grantAmount || this.grantAmount <= 0)
      return;
    this.isGranting = true;
    this.bonusesService.grantBonus(this.client.id, {
      amount: this.grantAmount,
      reason: this.grantReason || void 0
    }).subscribe({
      next: (balance) => {
        this.bonusBalance = balance.currentBalance;
        this.toastService.success(`\u0423\u0441\u043F\u0435\u0448\u043D\u043E \u043D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u043E ${this.formatAmount(this.grantAmount)} \u20B8 \u0431\u043E\u043D\u0443\u0441\u043E\u0432`);
        this.grantAmount = null;
        this.grantReason = "";
        this.isGranting = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        const errorMessage = err.error?.message || "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u043D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u0438 \u0431\u043E\u043D\u0443\u0441\u043E\u0432";
        this.toastService.error(errorMessage);
        this.isGranting = false;
        this.cdr.detectChanges();
      }
    });
  }
  revokeBonus() {
    if (!this.client || !this.revokeAmount || this.revokeAmount <= 0 || this.revokeAmount > this.bonusBalance)
      return;
    this.isRevoking = true;
    this.bonusesService.revokeBonus(this.client.id, {
      amount: this.revokeAmount,
      reason: this.revokeReason || void 0
    }).subscribe({
      next: (balance) => {
        this.bonusBalance = balance.currentBalance;
        this.toastService.success(`\u0423\u0441\u043F\u0435\u0448\u043D\u043E \u0441\u043F\u0438\u0441\u0430\u043D\u043E ${this.formatAmount(this.revokeAmount)} \u20B8 \u0431\u043E\u043D\u0443\u0441\u043E\u0432`);
        this.revokeAmount = null;
        this.revokeReason = "";
        this.isRevoking = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        const errorMessage = err.error?.message || "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0441\u043F\u0438\u0441\u0430\u043D\u0438\u0438 \u0431\u043E\u043D\u0443\u0441\u043E\u0432";
        this.toastService.error(errorMessage);
        this.isRevoking = false;
        this.cdr.detectChanges();
      }
    });
  }
  getInitials() {
    if (!this.client)
      return "";
    const first = this.client.firstName?.charAt(0) || "";
    const last = this.client.lastName?.charAt(0) || "";
    return (first + last).toUpperCase() || "?";
  }
  formatAmount(amount) {
    if (amount === null || amount === void 0)
      return "0";
    return new Intl.NumberFormat("ru-RU").format(amount);
  }
  static \u0275fac = function BonusManagementPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BonusManagementPageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BonusManagementPageComponent, selectors: [["app-bonus-management-page"]], decls: 20, vars: 7, consts: [[1, "bonus-management-page"], [1, "search-section"], [1, "search-header"], [1, "search-form"], [1, "search-input-wrapper"], ["viewBox", "0 0 24 24", "fill", "none", 1, "search-icon"], ["cx", "11", "cy", "11", "r", "8", "stroke", "currentColor", "stroke-width", "2"], ["d", "M21 21l-4.35-4.35", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], ["type", "tel", "placeholder", "+7 (___) ___-__-__", 1, "search-input", 3, "ngModelChange", "keydown.enter", "ngModel", "disabled"], [1, "search-btn", 3, "click", "disabled"], ["class", "spinner", 4, "ngIf"], [4, "ngIf"], [1, "search-hint"], ["class", "no-result", 4, "ngIf"], ["class", "content-grid", 4, "ngIf"], [1, "spinner"], [1, "no-result"], [1, "no-result-icon"], ["viewBox", "0 0 24 24", "fill", "none"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "1.5"], ["d", "M8 15s1.5 2 4 2 4-2 4-2", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round"], ["x1", "9", "y1", "9", "x2", "9.01", "y2", "9", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], ["x1", "15", "y1", "9", "x2", "15.01", "y2", "9", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], [1, "content-grid"], [1, "client-card"], [1, "client-card-header"], [1, "client-avatar"], [1, "client-info"], [1, "client-name"], [1, "client-phone"], [1, "client-type-badge"], [1, "view-profile-link", 3, "routerLink"], ["d", "M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round"], ["d", "M15 3h6v6", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M10 14L21 3", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round"], ["class", "client-tags", 4, "ngIf"], [1, "balance-section"], [1, "balance-label"], [1, "balance-value"], [1, "currency"], [1, "bonus-actions"], [1, "action-card", "grant"], [1, "action-card-header"], [1, "action-icon", "grant"], ["d", "M12 5v14M5 12h14", "stroke", "currentColor", "stroke-width", "2.5", "stroke-linecap", "round"], [1, "action-title"], [1, "action-form"], [1, "form-group"], [1, "amount-input-wrapper"], ["type", "number", "placeholder", "0", "min", "1", 1, "amount-input", 3, "ngModelChange", "ngModel"], [1, "input-suffix"], ["placeholder", "\u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440: \u041A\u043E\u043C\u043F\u0435\u043D\u0441\u0430\u0446\u0438\u044F \u0437\u0430 \u043D\u0435\u0443\u0434\u043E\u0431\u0441\u0442\u0432\u0430, \u043F\u043E\u0434\u0430\u0440\u043E\u043A \u043D\u0430 \u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F...", "rows", "2", 1, "reason-textarea", 3, "ngModelChange", "ngModel"], [1, "action-submit-btn", "grant-btn", 3, "click", "disabled"], ["viewBox", "0 0 24 24", "fill", "none", 4, "ngIf"], ["class", "spinner white", 4, "ngIf"], [1, "action-card", "revoke"], [1, "action-icon", "revoke"], ["d", "M5 12h14", "stroke", "currentColor", "stroke-width", "2.5", "stroke-linecap", "round"], [1, "max-badge"], ["type", "number", "placeholder", "0", "min", "1", 1, "amount-input", 3, "ngModelChange", "ngModel", "max"], ["placeholder", "\u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440: \u041A\u043E\u0440\u0440\u0435\u043A\u0442\u0438\u0440\u043E\u0432\u043A\u0430 \u0431\u0430\u043B\u0430\u043D\u0441\u0430, \u043E\u0448\u0438\u0431\u043E\u0447\u043D\u043E\u0435 \u043D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u0435...", "rows", "2", 1, "reason-textarea", 3, "ngModelChange", "ngModel"], [1, "action-submit-btn", "revoke-btn", 3, "click", "disabled"], [1, "client-tags"], ["class", "tag", 4, "ngFor", "ngForOf"], [1, "tag"], ["d", "M12 5v14M5 12h14", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], [1, "spinner", "white"], ["d", "M5 12h14", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"]], template: function BonusManagementPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2");
      \u0275\u0275text(4, "\u041F\u043E\u0438\u0441\u043A \u043A\u043B\u0438\u0435\u043D\u0442\u0430");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p");
      \u0275\u0275text(6, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430 \u0434\u043B\u044F \u043F\u043E\u0438\u0441\u043A\u0430 \u043A\u043B\u0438\u0435\u043D\u0442\u0430");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 3)(8, "div", 4);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(9, "svg", 5);
      \u0275\u0275element(10, "circle", 6)(11, "path", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(12, "input", 8);
      \u0275\u0275twoWayListener("ngModelChange", function BonusManagementPageComponent_Template_input_ngModelChange_12_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchPhone, $event) || (ctx.searchPhone = $event);
        return $event;
      });
      \u0275\u0275listener("keydown.enter", function BonusManagementPageComponent_Template_input_keydown_enter_12_listener() {
        return ctx.searchClient();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "button", 9);
      \u0275\u0275listener("click", function BonusManagementPageComponent_Template_button_click_13_listener() {
        return ctx.searchClient();
      });
      \u0275\u0275template(14, BonusManagementPageComponent_span_14_Template, 1, 0, "span", 10)(15, BonusManagementPageComponent_span_15_Template, 2, 0, "span", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "p", 12);
      \u0275\u0275text(17, "\u041F\u0440\u0438\u043C\u0435\u0440: +77001234567 \u0438\u043B\u0438 87001234567");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(18, BonusManagementPageComponent_div_18_Template, 11, 0, "div", 13)(19, BonusManagementPageComponent_div_19_Template, 83, 28, "div", 14);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchPhone);
      \u0275\u0275property("disabled", ctx.isSearching);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", !ctx.searchPhone.trim() || ctx.isSearching);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isSearching);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isSearching);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.searchPerformed && !ctx.client && !ctx.isSearching);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.client);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, MinValidator, MaxValidator, NgModel, RouterModule, RouterLink, PhoneFormatPipe], styles: ["\n\n.bonus-management-page[_ngcontent-%COMP%] {\n  max-width: 1000px;\n  margin: 0 auto;\n  padding: 2rem;\n}\n.search-section[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  padding: 2rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n  border: 1px solid #e5e7eb;\n  margin-bottom: 1.5rem;\n}\n.search-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 1.5rem;\n}\n.search-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem 0;\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #1f2937;\n}\n.search-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #64748b;\n  font-size: 0.95rem;\n}\n.search-form[_ngcontent-%COMP%] {\n  max-width: 500px;\n  margin: 0 auto;\n}\n.search-input-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  background: #f8fafc;\n  border: 2px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 0.5rem 0.75rem;\n  transition: all 0.2s;\n}\n.search-input-wrapper[_ngcontent-%COMP%]:focus-within {\n  border-color: #16A34A;\n  background: white;\n  box-shadow: 0 0 0 4px rgba(22, 163, 74, 0.1);\n}\n.search-icon[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  color: #94a3b8;\n  flex-shrink: 0;\n}\n.search-input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  background: transparent;\n  font-size: 1.125rem;\n  color: #1f2937;\n  outline: none;\n  padding: 0.5rem 0;\n}\n.search-input[_ngcontent-%COMP%]::placeholder {\n  color: #94a3b8;\n}\n.search-btn[_ngcontent-%COMP%] {\n  padding: 0.625rem 1.5rem;\n  background: #16A34A;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-size: 0.95rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 90px;\n}\n.search-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #15803d;\n}\n.search-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.search-hint[_ngcontent-%COMP%] {\n  margin: 0.75rem 0 0 0;\n  font-size: 0.8rem;\n  color: #94a3b8;\n  text-align: center;\n}\n.no-result[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  padding: 3rem;\n  text-align: center;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n  border: 1px solid #e5e7eb;\n}\n.no-result-icon[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  margin: 0 auto 1rem;\n  color: #94a3b8;\n}\n.no-result-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.no-result[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem 0;\n  font-size: 1.25rem;\n  color: #374151;\n}\n.no-result[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #64748b;\n}\n.content-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 1.5rem;\n}\n.client-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n  border: 1px solid #e5e7eb;\n}\n.client-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n}\n.client-avatar[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      #16A34A 0%,\n      #22c55e 100%);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.25rem;\n  font-weight: 600;\n  flex-shrink: 0;\n}\n.client-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.client-name[_ngcontent-%COMP%] {\n  margin: 0 0 0.25rem 0;\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1f2937;\n}\n.client-phone[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem 0;\n  color: #64748b;\n  font-size: 0.95rem;\n}\n.client-type-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.25rem 0.75rem;\n  background: #f0fdf4;\n  color: #16A34A;\n  border-radius: 20px;\n  font-size: 0.75rem;\n  font-weight: 500;\n}\n.client-type-badge.business[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  color: #2563eb;\n}\n.view-profile-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 1rem;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  color: #64748b;\n  text-decoration: none;\n  font-size: 0.875rem;\n  font-weight: 500;\n  transition: all 0.2s;\n}\n.view-profile-link[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n  color: #1f2937;\n}\n.view-profile-link[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n}\n.client-tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  margin-top: 1rem;\n  padding-top: 1rem;\n  border-top: 1px solid #f1f5f9;\n}\n.tag[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.75rem;\n  background: #f1f5f9;\n  color: #475569;\n  border-radius: 20px;\n  font-size: 0.75rem;\n  font-weight: 500;\n}\n.balance-section[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n  padding: 1.25rem;\n  background:\n    linear-gradient(\n      135deg,\n      #f0fdf4 0%,\n      #dcfce7 100%);\n  border-radius: 12px;\n  text-align: center;\n}\n.balance-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #16A34A;\n  font-weight: 500;\n  margin-bottom: 0.5rem;\n}\n.balance-value[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 700;\n  color: #15803d;\n}\n.balance-value[_ngcontent-%COMP%]   .currency[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 600;\n}\n.bonus-actions[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1.5rem;\n}\n.action-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n  border: 1px solid #e5e7eb;\n  transition: all 0.2s;\n}\n.action-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.action-card.grant[_ngcontent-%COMP%] {\n  border-top: 3px solid #16A34A;\n}\n.action-card.revoke[_ngcontent-%COMP%] {\n  border-top: 3px solid #ea580c;\n}\n.action-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n}\n.action-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.action-icon.grant[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #16A34A;\n}\n.action-icon.revoke[_ngcontent-%COMP%] {\n  background: #fed7aa;\n  color: #ea580c;\n}\n.action-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n}\n.action-title[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 0.25rem 0;\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: #1f2937;\n}\n.action-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.85rem;\n  color: #64748b;\n}\n.action-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #475569;\n  text-transform: uppercase;\n  letter-spacing: 0.025em;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.max-badge[_ngcontent-%COMP%] {\n  font-weight: 400;\n  text-transform: none;\n  color: #94a3b8;\n  font-size: 0.75rem;\n}\n.amount-input-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.amount-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.875rem 3rem 0.875rem 1rem;\n  border: 2px solid #e2e8f0;\n  border-radius: 10px;\n  font-size: 1.25rem;\n  font-weight: 600;\n  background: #f8fafc;\n  transition: all 0.2s;\n}\n.amount-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #16A34A;\n  background: white;\n  box-shadow: 0 0 0 4px rgba(22, 163, 74, 0.1);\n}\n.input-suffix[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 1rem;\n  color: #94a3b8;\n  font-size: 1.125rem;\n  font-weight: 500;\n}\n.reason-textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem 1rem;\n  border: 2px solid #e2e8f0;\n  border-radius: 10px;\n  font-size: 0.95rem;\n  background: #f8fafc;\n  resize: none;\n  transition: all 0.2s;\n  font-family: inherit;\n}\n.reason-textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #16A34A;\n  background: white;\n  box-shadow: 0 0 0 4px rgba(22, 163, 74, 0.1);\n}\n.reason-textarea[_ngcontent-%COMP%]::placeholder {\n  color: #94a3b8;\n}\n.action-submit-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  padding: 0.875rem 1.5rem;\n  border: none;\n  border-radius: 10px;\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n  margin-top: 0.5rem;\n}\n.action-submit-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n.action-submit-btn.grant-btn[_ngcontent-%COMP%] {\n  background: #16A34A;\n  color: white;\n}\n.action-submit-btn.grant-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #15803d;\n}\n.action-submit-btn.revoke-btn[_ngcontent-%COMP%] {\n  background: #ea580c;\n  color: white;\n}\n.action-submit-btn.revoke-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #c2410c;\n}\n.action-submit-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border: 2px solid rgba(0, 0, 0, 0.1);\n  border-top-color: #16A34A;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n.spinner.white[_ngcontent-%COMP%] {\n  border-color: rgba(255, 255, 255, 0.3);\n  border-top-color: white;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 768px) {\n  .bonus-management-page[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .search-section[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n  .search-input-wrapper[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0.5rem;\n    padding: 0.5rem;\n  }\n  .search-input[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: center;\n  }\n  .search-btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .client-card-header[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .view-profile-link[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n    margin-top: 0.5rem;\n  }\n  .bonus-actions[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=bonus-management-page.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BonusManagementPageComponent, [{
    type: Component,
    args: [{ selector: "app-bonus-management-page", standalone: true, imports: [CommonModule, FormsModule, RouterModule, LoaderComponent, PhoneFormatPipe], template: `
    <div class="bonus-management-page">
      <!-- Search Section -->
      <div class="search-section">
        <div class="search-header">
          <h2>\u041F\u043E\u0438\u0441\u043A \u043A\u043B\u0438\u0435\u043D\u0442\u0430</h2>
          <p>\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430 \u0434\u043B\u044F \u043F\u043E\u0438\u0441\u043A\u0430 \u043A\u043B\u0438\u0435\u043D\u0442\u0430</p>
        </div>
        
        <div class="search-form">
          <div class="search-input-wrapper">
            <svg class="search-icon" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="8" stroke="currentColor" stroke-width="2"/>
              <path d="M21 21l-4.35-4.35" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
            <input 
              type="tel"
              [(ngModel)]="searchPhone"
              (keydown.enter)="searchClient()"
              placeholder="+7 (___) ___-__-__"
              class="search-input"
              [disabled]="isSearching">
            <button 
              class="search-btn" 
              (click)="searchClient()"
              [disabled]="!searchPhone.trim() || isSearching">
              <span *ngIf="isSearching" class="spinner"></span>
              <span *ngIf="!isSearching">\u041D\u0430\u0439\u0442\u0438</span>
            </button>
          </div>
          <p class="search-hint">\u041F\u0440\u0438\u043C\u0435\u0440: +77001234567 \u0438\u043B\u0438 87001234567</p>
        </div>
      </div>

      <!-- No Result -->
      <div class="no-result" *ngIf="searchPerformed && !client && !isSearching">
        <div class="no-result-icon">
          <svg viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"/>
            <path d="M8 15s1.5 2 4 2 4-2 4-2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            <line x1="9" y1="9" x2="9.01" y2="9" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            <line x1="15" y1="9" x2="15.01" y2="9" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </div>
        <h3>\u041A\u043B\u0438\u0435\u043D\u0442 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D</h3>
        <p>\u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E\u0441\u0442\u044C \u0432\u0432\u0435\u0434\u0435\u043D\u043D\u043E\u0433\u043E \u043D\u043E\u043C\u0435\u0440\u0430 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430</p>
      </div>

      <!-- Client Card & Bonus Management -->
      <div class="content-grid" *ngIf="client">
        <!-- Client Info Card -->
        <div class="client-card">
          <div class="client-card-header">
            <div class="client-avatar">
              {{ getInitials() }}
            </div>
            <div class="client-info">
              <h3 class="client-name">{{ client.firstName }} {{ client.lastName || '' }}</h3>
              <p class="client-phone">{{ client.phone | phoneFormat }}</p>
              <span class="client-type-badge" [class.business]="client.type === 'business'">
                {{ client.type === 'business' ? '\u0411\u0438\u0437\u043D\u0435\u0441' : '\u0418\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u044B\u0439' }}
              </span>
            </div>
            <a [routerLink]="['/clients', client.id]" class="view-profile-link">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M15 3h6v6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10 14L21 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
              <span>\u041F\u0440\u043E\u0444\u0438\u043B\u044C</span>
            </a>
          </div>
          
          <div class="client-tags" *ngIf="client.tags && client.tags.length > 0">
            <span class="tag" *ngFor="let tag of client.tags">{{ tag }}</span>
          </div>

          <div class="balance-section">
            <div class="balance-label">\u0422\u0435\u043A\u0443\u0449\u0438\u0439 \u0431\u0430\u043B\u0430\u043D\u0441 \u0431\u043E\u043D\u0443\u0441\u043E\u0432</div>
            <div class="balance-value">{{ formatAmount(bonusBalance) }} <span class="currency">\u20B8</span></div>
          </div>
        </div>

        <!-- Bonus Actions -->
        <div class="bonus-actions">
          <!-- Grant Bonus Card -->
          <div class="action-card grant">
            <div class="action-card-header">
              <div class="action-icon grant">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
                </svg>
              </div>
              <div class="action-title">
                <h4>\u041D\u0430\u0447\u0438\u0441\u043B\u0438\u0442\u044C \u0431\u043E\u043D\u0443\u0441\u044B</h4>
                <p>\u0412\u0440\u0443\u0447\u043D\u0443\u044E \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0431\u043E\u043D\u0443\u0441\u044B \u043A\u043B\u0438\u0435\u043D\u0442\u0443</p>
              </div>
            </div>
            
            <div class="action-form">
              <div class="form-group">
                <label>\u0421\u0443\u043C\u043C\u0430 \u0431\u043E\u043D\u0443\u0441\u043E\u0432</label>
                <div class="amount-input-wrapper">
                  <input 
                    type="number" 
                    [(ngModel)]="grantAmount" 
                    placeholder="0"
                    min="1"
                    class="amount-input">
                  <span class="input-suffix">\u20B8</span>
                </div>
              </div>
              
              <div class="form-group">
                <label>\u041F\u0440\u0438\u0447\u0438\u043D\u0430 \u043D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u044F</label>
                <textarea 
                  [(ngModel)]="grantReason"
                  placeholder="\u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440: \u041A\u043E\u043C\u043F\u0435\u043D\u0441\u0430\u0446\u0438\u044F \u0437\u0430 \u043D\u0435\u0443\u0434\u043E\u0431\u0441\u0442\u0432\u0430, \u043F\u043E\u0434\u0430\u0440\u043E\u043A \u043D\u0430 \u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F..."
                  class="reason-textarea"
                  rows="2"></textarea>
              </div>
              
              <button 
                class="action-submit-btn grant-btn"
                (click)="grantBonus()"
                [disabled]="!grantAmount || grantAmount <= 0 || isGranting">
                <svg viewBox="0 0 24 24" fill="none" *ngIf="!isGranting">
                  <path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
                <span *ngIf="isGranting" class="spinner white"></span>
                {{ isGranting ? '\u041D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u0435...' : '\u041D\u0430\u0447\u0438\u0441\u043B\u0438\u0442\u044C \u0431\u043E\u043D\u0443\u0441\u044B' }}
              </button>
            </div>
          </div>

          <!-- Revoke Bonus Card -->
          <div class="action-card revoke">
            <div class="action-card-header">
              <div class="action-icon revoke">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
                </svg>
              </div>
              <div class="action-title">
                <h4>\u0421\u043F\u0438\u0441\u0430\u0442\u044C \u0431\u043E\u043D\u0443\u0441\u044B</h4>
                <p>\u0412\u0440\u0443\u0447\u043D\u0443\u044E \u0441\u043F\u0438\u0441\u0430\u0442\u044C \u0431\u043E\u043D\u0443\u0441\u044B \u0443 \u043A\u043B\u0438\u0435\u043D\u0442\u0430</p>
              </div>
            </div>
            
            <div class="action-form">
              <div class="form-group">
                <label>
                  \u0421\u0443\u043C\u043C\u0430 \u0441\u043F\u0438\u0441\u0430\u043D\u0438\u044F 
                  <span class="max-badge">\u043C\u0430\u043A\u0441. {{ formatAmount(bonusBalance) }} \u20B8</span>
                </label>
                <div class="amount-input-wrapper">
                  <input 
                    type="number" 
                    [(ngModel)]="revokeAmount" 
                    placeholder="0"
                    min="1"
                    [max]="bonusBalance"
                    class="amount-input">
                  <span class="input-suffix">\u20B8</span>
                </div>
              </div>
              
              <div class="form-group">
                <label>\u041F\u0440\u0438\u0447\u0438\u043D\u0430 \u0441\u043F\u0438\u0441\u0430\u043D\u0438\u044F</label>
                <textarea 
                  [(ngModel)]="revokeReason"
                  placeholder="\u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440: \u041A\u043E\u0440\u0440\u0435\u043A\u0442\u0438\u0440\u043E\u0432\u043A\u0430 \u0431\u0430\u043B\u0430\u043D\u0441\u0430, \u043E\u0448\u0438\u0431\u043E\u0447\u043D\u043E\u0435 \u043D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u0435..."
                  class="reason-textarea"
                  rows="2"></textarea>
              </div>
              
              <button 
                class="action-submit-btn revoke-btn"
                (click)="revokeBonus()"
                [disabled]="!revokeAmount || revokeAmount <= 0 || revokeAmount > bonusBalance || isRevoking || bonusBalance <= 0">
                <svg viewBox="0 0 24 24" fill="none" *ngIf="!isRevoking">
                  <path d="M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
                <span *ngIf="isRevoking" class="spinner white"></span>
                {{ isRevoking ? '\u0421\u043F\u0438\u0441\u0430\u043D\u0438\u0435...' : '\u0421\u043F\u0438\u0441\u0430\u0442\u044C \u0431\u043E\u043D\u0443\u0441\u044B' }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `, styles: ["/* angular:styles/component:css;9ed6834b91a944eacd4aefa477e449b399dfeeb1791ff242d2f3b44fa5af9422;/Users/baglan/repo/westwood/westwood-frontend/src/app/features/bonus-management/pages/bonus-management-page/bonus-management-page.component.ts */\n.bonus-management-page {\n  max-width: 1000px;\n  margin: 0 auto;\n  padding: 2rem;\n}\n.search-section {\n  background: white;\n  border-radius: 16px;\n  padding: 2rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n  border: 1px solid #e5e7eb;\n  margin-bottom: 1.5rem;\n}\n.search-header {\n  text-align: center;\n  margin-bottom: 1.5rem;\n}\n.search-header h2 {\n  margin: 0 0 0.5rem 0;\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #1f2937;\n}\n.search-header p {\n  margin: 0;\n  color: #64748b;\n  font-size: 0.95rem;\n}\n.search-form {\n  max-width: 500px;\n  margin: 0 auto;\n}\n.search-input-wrapper {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  background: #f8fafc;\n  border: 2px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 0.5rem 0.75rem;\n  transition: all 0.2s;\n}\n.search-input-wrapper:focus-within {\n  border-color: #16A34A;\n  background: white;\n  box-shadow: 0 0 0 4px rgba(22, 163, 74, 0.1);\n}\n.search-icon {\n  width: 24px;\n  height: 24px;\n  color: #94a3b8;\n  flex-shrink: 0;\n}\n.search-input {\n  flex: 1;\n  border: none;\n  background: transparent;\n  font-size: 1.125rem;\n  color: #1f2937;\n  outline: none;\n  padding: 0.5rem 0;\n}\n.search-input::placeholder {\n  color: #94a3b8;\n}\n.search-btn {\n  padding: 0.625rem 1.5rem;\n  background: #16A34A;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-size: 0.95rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 90px;\n}\n.search-btn:hover:not(:disabled) {\n  background: #15803d;\n}\n.search-btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.search-hint {\n  margin: 0.75rem 0 0 0;\n  font-size: 0.8rem;\n  color: #94a3b8;\n  text-align: center;\n}\n.no-result {\n  background: white;\n  border-radius: 16px;\n  padding: 3rem;\n  text-align: center;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n  border: 1px solid #e5e7eb;\n}\n.no-result-icon {\n  width: 64px;\n  height: 64px;\n  margin: 0 auto 1rem;\n  color: #94a3b8;\n}\n.no-result-icon svg {\n  width: 100%;\n  height: 100%;\n}\n.no-result h3 {\n  margin: 0 0 0.5rem 0;\n  font-size: 1.25rem;\n  color: #374151;\n}\n.no-result p {\n  margin: 0;\n  color: #64748b;\n}\n.content-grid {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 1.5rem;\n}\n.client-card {\n  background: white;\n  border-radius: 16px;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n  border: 1px solid #e5e7eb;\n}\n.client-card-header {\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n}\n.client-avatar {\n  width: 56px;\n  height: 56px;\n  border-radius: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      #16A34A 0%,\n      #22c55e 100%);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.25rem;\n  font-weight: 600;\n  flex-shrink: 0;\n}\n.client-info {\n  flex: 1;\n}\n.client-name {\n  margin: 0 0 0.25rem 0;\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1f2937;\n}\n.client-phone {\n  margin: 0 0 0.5rem 0;\n  color: #64748b;\n  font-size: 0.95rem;\n}\n.client-type-badge {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.25rem 0.75rem;\n  background: #f0fdf4;\n  color: #16A34A;\n  border-radius: 20px;\n  font-size: 0.75rem;\n  font-weight: 500;\n}\n.client-type-badge.business {\n  background: #eff6ff;\n  color: #2563eb;\n}\n.view-profile-link {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 1rem;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  color: #64748b;\n  text-decoration: none;\n  font-size: 0.875rem;\n  font-weight: 500;\n  transition: all 0.2s;\n}\n.view-profile-link:hover {\n  background: #f1f5f9;\n  color: #1f2937;\n}\n.view-profile-link svg {\n  width: 18px;\n  height: 18px;\n}\n.client-tags {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  margin-top: 1rem;\n  padding-top: 1rem;\n  border-top: 1px solid #f1f5f9;\n}\n.tag {\n  padding: 0.25rem 0.75rem;\n  background: #f1f5f9;\n  color: #475569;\n  border-radius: 20px;\n  font-size: 0.75rem;\n  font-weight: 500;\n}\n.balance-section {\n  margin-top: 1.5rem;\n  padding: 1.25rem;\n  background:\n    linear-gradient(\n      135deg,\n      #f0fdf4 0%,\n      #dcfce7 100%);\n  border-radius: 12px;\n  text-align: center;\n}\n.balance-label {\n  font-size: 0.875rem;\n  color: #16A34A;\n  font-weight: 500;\n  margin-bottom: 0.5rem;\n}\n.balance-value {\n  font-size: 2.5rem;\n  font-weight: 700;\n  color: #15803d;\n}\n.balance-value .currency {\n  font-size: 1.5rem;\n  font-weight: 600;\n}\n.bonus-actions {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1.5rem;\n}\n.action-card {\n  background: white;\n  border-radius: 16px;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n  border: 1px solid #e5e7eb;\n  transition: all 0.2s;\n}\n.action-card:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.action-card.grant {\n  border-top: 3px solid #16A34A;\n}\n.action-card.revoke {\n  border-top: 3px solid #ea580c;\n}\n.action-card-header {\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n}\n.action-icon {\n  width: 48px;\n  height: 48px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.action-icon.grant {\n  background: #dcfce7;\n  color: #16A34A;\n}\n.action-icon.revoke {\n  background: #fed7aa;\n  color: #ea580c;\n}\n.action-icon svg {\n  width: 26px;\n  height: 26px;\n}\n.action-title h4 {\n  margin: 0 0 0.25rem 0;\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: #1f2937;\n}\n.action-title p {\n  margin: 0;\n  font-size: 0.85rem;\n  color: #64748b;\n}\n.action-form {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.form-group label {\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #475569;\n  text-transform: uppercase;\n  letter-spacing: 0.025em;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.max-badge {\n  font-weight: 400;\n  text-transform: none;\n  color: #94a3b8;\n  font-size: 0.75rem;\n}\n.amount-input-wrapper {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.amount-input {\n  width: 100%;\n  padding: 0.875rem 3rem 0.875rem 1rem;\n  border: 2px solid #e2e8f0;\n  border-radius: 10px;\n  font-size: 1.25rem;\n  font-weight: 600;\n  background: #f8fafc;\n  transition: all 0.2s;\n}\n.amount-input:focus {\n  outline: none;\n  border-color: #16A34A;\n  background: white;\n  box-shadow: 0 0 0 4px rgba(22, 163, 74, 0.1);\n}\n.input-suffix {\n  position: absolute;\n  right: 1rem;\n  color: #94a3b8;\n  font-size: 1.125rem;\n  font-weight: 500;\n}\n.reason-textarea {\n  width: 100%;\n  padding: 0.75rem 1rem;\n  border: 2px solid #e2e8f0;\n  border-radius: 10px;\n  font-size: 0.95rem;\n  background: #f8fafc;\n  resize: none;\n  transition: all 0.2s;\n  font-family: inherit;\n}\n.reason-textarea:focus {\n  outline: none;\n  border-color: #16A34A;\n  background: white;\n  box-shadow: 0 0 0 4px rgba(22, 163, 74, 0.1);\n}\n.reason-textarea::placeholder {\n  color: #94a3b8;\n}\n.action-submit-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  padding: 0.875rem 1.5rem;\n  border: none;\n  border-radius: 10px;\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n  margin-top: 0.5rem;\n}\n.action-submit-btn svg {\n  width: 20px;\n  height: 20px;\n}\n.action-submit-btn.grant-btn {\n  background: #16A34A;\n  color: white;\n}\n.action-submit-btn.grant-btn:hover:not(:disabled) {\n  background: #15803d;\n}\n.action-submit-btn.revoke-btn {\n  background: #ea580c;\n  color: white;\n}\n.action-submit-btn.revoke-btn:hover:not(:disabled) {\n  background: #c2410c;\n}\n.action-submit-btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.spinner {\n  width: 20px;\n  height: 20px;\n  border: 2px solid rgba(0, 0, 0, 0.1);\n  border-top-color: #16A34A;\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n}\n.spinner.white {\n  border-color: rgba(255, 255, 255, 0.3);\n  border-top-color: white;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 768px) {\n  .bonus-management-page {\n    padding: 1rem;\n  }\n  .search-section {\n    padding: 1.5rem;\n  }\n  .search-input-wrapper {\n    flex-direction: column;\n    gap: 0.5rem;\n    padding: 0.5rem;\n  }\n  .search-input {\n    width: 100%;\n    text-align: center;\n  }\n  .search-btn {\n    width: 100%;\n  }\n  .client-card-header {\n    flex-wrap: wrap;\n  }\n  .view-profile-link {\n    width: 100%;\n    justify-content: center;\n    margin-top: 0.5rem;\n  }\n  .bonus-actions {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=bonus-management-page.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BonusManagementPageComponent, { className: "BonusManagementPageComponent", filePath: "src/app/features/bonus-management/pages/bonus-management-page/bonus-management-page.component.ts", lineNumber: 760 });
})();
export {
  BonusManagementPageComponent
};
//# sourceMappingURL=chunk-TTU6SRKR.js.map
