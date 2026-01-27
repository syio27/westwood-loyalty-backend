import {
  MessageTemplatesService,
  MessagesService
} from "./chunk-C3OA33IV.js";
import {
  BonusTypesService
} from "./chunk-JRRO4TOD.js";
import {
  ClientsService
} from "./chunk-7CF6I6GG.js";
import {
  UsersService
} from "./chunk-AC5DBEUK.js";
import {
  logout
} from "./chunk-ZQ7HKAUA.js";
import {
  PaymentsService,
  TransactionModalService
} from "./chunk-JQUKQS2J.js";
import {
  ModalComponent,
  PageHeaderService
} from "./chunk-5JCDK4OZ.js";
import "./chunk-6FFMNYG3.js";
import {
  ToastService
} from "./chunk-R6ELT46B.js";
import {
  ButtonComponent,
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgModel,
  NumberValueAccessor,
  RadioControlValueAccessor
} from "./chunk-3N5Z3XGP.js";
import {
  Store,
  selectIsAuthenticated
} from "./chunk-BKXXGTMV.js";
import {
  IconButtonComponent
} from "./chunk-2T4DCDN7.js";
import {
  AsyncPipe,
  BehaviorSubject,
  CommonModule,
  Component,
  DomSanitizer,
  EventEmitter,
  Injectable,
  Input,
  NavigationEnd,
  NgForOf,
  NgIf,
  Output,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
  Subject,
  ViewChild,
  __spreadProps,
  __spreadValues,
  catchError,
  effect,
  filter,
  inject,
  interval,
  of,
  setClassMetadata,
  signal,
  takeUntil,
  tap,
  timeout,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-MTXXT26T.js";

// src/app/core/services/sidebar.service.ts
var SidebarService = class _SidebarService {
  collapsedSource = new BehaviorSubject(false);
  closedSource = new BehaviorSubject(false);
  collapsed$ = this.collapsedSource.asObservable();
  closed$ = this.closedSource.asObservable();
  setCollapsed(collapsed) {
    this.collapsedSource.next(collapsed);
  }
  setClosed(closed) {
    this.closedSource.next(closed);
  }
  get isCollapsed() {
    return this.collapsedSource.value;
  }
  get isClosed() {
    return this.closedSource.value;
  }
  static \u0275fac = function SidebarService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SidebarService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SidebarService, factory: _SidebarService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/layouts/sidebar/sidebar.component.ts
var _c0 = ["*"];
var _c1 = (a0) => ({ exact: a0 });
var _c2 = () => ({ exact: false });
function SidebarComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275listener("click", function SidebarComponent_div_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeSidebar());
    });
    \u0275\u0275elementEnd();
  }
}
function SidebarComponent_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.logoText);
  }
}
function SidebarComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "app-button", 19);
    \u0275\u0275listener("onClick", function SidebarComponent_div_11_Template_app_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCreateClick());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 20);
    \u0275\u0275element(3, "path", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span", 22);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("tooltip", ctx_r1.createButtonLabel);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.createButtonLabel);
  }
}
function SidebarComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "app-icon-button", 24);
    \u0275\u0275listener("onClick", function SidebarComponent_div_12_Template_app_icon_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCreateClick());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 25);
    \u0275\u0275element(3, "path", 21);
    \u0275\u0275elementEnd()()();
  }
}
function SidebarComponent_ul_13_li_1_a_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r6 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r6.label);
  }
}
function SidebarComponent_ul_13_li_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 31);
    \u0275\u0275listener("click", function SidebarComponent_ul_13_li_1_a_1_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onMenuItemClick());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(1, "svg", 32);
    \u0275\u0275template(2, SidebarComponent_ul_13_li_1_a_1_span_2_Template, 2, 1, "span", 33);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", item_r6.route)("routerLinkActiveOptions", \u0275\u0275pureFunction1(5, _c1, item_r6.exact !== false))("title", ctx_r1.isCollapsed() ? item_r6.label : "");
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", ctx_r1.sanitizeHtml(item_r6.iconPath), \u0275\u0275sanitizeHtml);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isCollapsed());
  }
}
function SidebarComponent_ul_13_li_1_div_2_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 31);
    \u0275\u0275listener("click", function SidebarComponent_ul_13_li_1_div_2_a_1_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onMenuItemClick());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(1, "svg", 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r6 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r1.isChildActive(item_r6));
    \u0275\u0275property("routerLink", item_r6.children[0].route)("routerLinkActiveOptions", \u0275\u0275pureFunction0(6, _c2))("title", item_r6.label);
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", ctx_r1.sanitizeHtml(item_r6.iconPath), \u0275\u0275sanitizeHtml);
  }
}
function SidebarComponent_ul_13_li_1_div_2_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 40);
    \u0275\u0275listener("click", function SidebarComponent_ul_13_li_1_div_2_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const item_r6 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleDropdown(item_r6.label));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(1, "svg", 32);
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(2, "span", 34);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 41);
    \u0275\u0275element(5, "path", 42);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r6 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("expanded", ctx_r1.expandedMenus[item_r6.label])("active", ctx_r1.isChildActive(item_r6));
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", ctx_r1.sanitizeHtml(item_r6.iconPath), \u0275\u0275sanitizeHtml);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r6.label);
    \u0275\u0275advance();
    \u0275\u0275classProp("rotated", ctx_r1.expandedMenus[item_r6.label]);
  }
}
function SidebarComponent_ul_13_li_1_div_2_a_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 43);
    \u0275\u0275listener("click", function SidebarComponent_ul_13_li_1_div_2_a_4_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onMenuItemClick());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(1, "svg", 44);
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(2, "span", 45);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const child_r10 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("routerLink", child_r10.route);
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", ctx_r1.sanitizeHtml(child_r10.iconPath), \u0275\u0275sanitizeHtml);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(child_r10.label);
  }
}
function SidebarComponent_ul_13_li_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275template(1, SidebarComponent_ul_13_li_1_div_2_a_1_Template, 2, 7, "a", 36)(2, SidebarComponent_ul_13_li_1_div_2_button_2_Template, 6, 8, "button", 37);
    \u0275\u0275elementStart(3, "div", 38);
    \u0275\u0275template(4, SidebarComponent_ul_13_li_1_div_2_a_4_Template, 4, 3, "a", 39);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isCollapsed());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isCollapsed());
    \u0275\u0275advance();
    \u0275\u0275classProp("open", ctx_r1.expandedMenus[item_r6.label] && !ctx_r1.isCollapsed());
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", item_r6.children);
  }
}
function SidebarComponent_ul_13_li_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 28);
    \u0275\u0275template(1, SidebarComponent_ul_13_li_1_a_1_Template, 3, 7, "a", 29)(2, SidebarComponent_ul_13_li_1_div_2_Template, 5, 5, "div", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    \u0275\u0275classProp("has-children", item_r6.children == null ? null : item_r6.children.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r6.route && !(item_r6.children == null ? null : item_r6.children.length));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r6.children == null ? null : item_r6.children.length);
  }
}
function SidebarComponent_ul_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 26);
    \u0275\u0275template(1, SidebarComponent_ul_13_li_1_Template, 3, 4, "li", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.menuItems);
  }
}
function SidebarComponent_div_14_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 64);
    \u0275\u0275text(1, "\u041F\u0440\u043E\u0444\u0438\u043B\u044C");
    \u0275\u0275elementEnd();
  }
}
function SidebarComponent_div_14_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 64);
    \u0275\u0275text(1, "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438");
    \u0275\u0275elementEnd();
  }
}
function SidebarComponent_div_14_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 64);
    \u0275\u0275text(1, "\u0412\u044B\u0439\u0442\u0438");
    \u0275\u0275elementEnd();
  }
}
function SidebarComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46)(1, "div", 47)(2, "a", 48);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 49);
    \u0275\u0275element(4, "path", 50)(5, "circle", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, SidebarComponent_div_14_span_6_Template, 2, 0, "span", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "a", 53);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 49);
    \u0275\u0275element(9, "path", 54)(10, "path", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, SidebarComponent_div_14_span_11_Template, 2, 0, "span", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(12, "div", 56)(13, "button", 57);
    \u0275\u0275listener("click", function SidebarComponent_div_14_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onLogoutClick());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(14, "svg", 49);
    \u0275\u0275element(15, "path", 58)(16, "polyline", 59)(17, "line", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, SidebarComponent_div_14_span_18_Template, 2, 0, "span", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(19, "button", 61);
    \u0275\u0275listener("click", function SidebarComponent_div_14_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleClosed());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(20, "svg", 62);
    \u0275\u0275element(21, "path", 63);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("title", ctx_r1.isCollapsed() ? "\u041F\u0440\u043E\u0444\u0438\u043B\u044C" : "");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", !ctx_r1.isCollapsed());
    \u0275\u0275advance();
    \u0275\u0275property("title", ctx_r1.isCollapsed() ? "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438" : "");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", !ctx_r1.isCollapsed());
    \u0275\u0275advance(2);
    \u0275\u0275property("title", ctx_r1.isCollapsed() ? "\u0412\u044B\u0439\u0442\u0438" : "");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", !ctx_r1.isCollapsed());
    \u0275\u0275advance();
    \u0275\u0275property("title", ctx_r1.isCollapsed() ? "\u0420\u0430\u0437\u0432\u0435\u0440\u043D\u0443\u0442\u044C" : "\u0421\u0432\u0435\u0440\u043D\u0443\u0442\u044C");
    \u0275\u0275advance();
    \u0275\u0275classProp("rotated", ctx_r1.isCollapsed());
  }
}
var SidebarComponent = class _SidebarComponent {
  sanitizer;
  isCollapsed = signal(false);
  isClosed = signal(false);
  isMobile = false;
  expandedMenus = {};
  menuItems = [
    {
      label: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F",
      iconPath: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><polyline points="9,22 9,12 15,12 15,22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
      route: "/home",
      exact: true
    },
    {
      label: "\u041A\u043B\u0438\u0435\u043D\u0442\u044B",
      iconPath: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="9" cy="7" r="4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
      route: "/clients"
    },
    {
      label: "\u041F\u043B\u0430\u0442\u0435\u0436\u0438",
      iconPath: '<path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
      route: "/payments"
    },
    {
      label: "\u041A\u043E\u043C\u043C\u0443\u043D\u0438\u043A\u0430\u0446\u0438\u0438",
      iconPath: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
      children: [
        {
          label: "WhatsApp",
          iconPath: '<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" fill="currentColor"/><path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" stroke="currentColor" stroke-width="1.5"/>',
          route: "/communications/whatsapp"
        }
        // {
        //   label: 'Email',
        //   iconPath: '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M22 6l-10 7L2 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
        //   route: '/communications/email'
        // }
      ]
    },
    {
      label: "\u0411\u043E\u043D\u0443\u0441\u043D\u0430\u044F \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430",
      iconPath: '<path d="M20 12v10H4V12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><rect x="2" y="7" width="20" height="5" rx="1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 22V7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 7c-2.5-2.5-5-3-5-5a2.5 2.5 0 0 1 5 0c0 2-2.5 2.5-5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 7c2.5-2.5 5-3 5-5a2.5 2.5 0 0 0-5 0c0 2 2.5 2.5 5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
      route: "/bonus-program",
      exact: false
    },
    {
      label: "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438",
      iconPath: '<path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
      route: "/users"
    }
  ];
  logoText = "WestWood";
  createButtonLabel = "\u041D\u043E\u0432\u0430\u044F \u0442\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u044F";
  collapsedChange = new EventEmitter();
  closedChange = new EventEmitter();
  createClick = new EventEmitter();
  logoutClick = new EventEmitter();
  constructor(sanitizer) {
    this.sanitizer = sanitizer;
    if (typeof window !== "undefined") {
      this.checkMobile();
      window.addEventListener("resize", () => {
        this.checkMobile();
      });
    }
    effect(() => {
      const collapsed = this.isCollapsed();
      const closed = this.isClosed();
      this.collapsedChange.emit(collapsed);
      this.closedChange.emit(closed);
      this.sidebarService.setCollapsed(collapsed);
      this.sidebarService.setClosed(closed);
    });
  }
  sidebarService = inject(SidebarService);
  transactionModalService = inject(TransactionModalService);
  store = inject(Store);
  sanitizeHtml(html) {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
  checkMobile() {
    const wasMobile = this.isMobile;
    this.isMobile = window.innerWidth < 768;
    if (this.isMobile && !wasMobile) {
      this.isClosed.set(true);
      this.isCollapsed.set(false);
    } else if (!this.isMobile && wasMobile) {
      this.isClosed.set(false);
    }
  }
  toggleSidebar() {
    if (!this.isMobile) {
      this.isCollapsed.update((val) => !val);
    }
  }
  toggleClosed() {
    if (this.isMobile) {
      this.isClosed.update((val) => !val);
    } else {
      this.isCollapsed.update((val) => !val);
      this.isClosed.set(false);
    }
  }
  openSidebar() {
    this.isClosed.set(false);
  }
  closeSidebar() {
    this.isClosed.set(true);
  }
  onMenuItemClick() {
    if (this.isMobile) {
      this.closeSidebar();
    }
  }
  onCreateClick() {
    this.transactionModalService.open();
    this.createClick.emit();
  }
  onLogoutClick() {
    this.store.dispatch(logout());
    this.logoutClick.emit();
  }
  toggleDropdown(label) {
    if (this.isCollapsed()) {
      this.expandedMenus[label] = !this.expandedMenus[label];
    } else {
      this.expandedMenus[label] = !this.expandedMenus[label];
    }
  }
  isChildActive(item) {
    if (!item.children)
      return false;
    const currentUrl = window.location.pathname;
    return item.children.some((child) => currentUrl.startsWith(child.route));
  }
  static \u0275fac = function SidebarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SidebarComponent)(\u0275\u0275directiveInject(DomSanitizer));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SidebarComponent, selectors: [["app-sidebar"]], inputs: { menuItems: "menuItems", logoText: "logoText", createButtonLabel: "createButtonLabel" }, outputs: { collapsedChange: "collapsedChange", closedChange: "closedChange", createClick: "createClick", logoutClick: "logoutClick" }, ngContentSelectors: _c0, decls: 17, vars: 14, consts: [["class", "sidebar-overlay", 3, "click", 4, "ngIf"], [1, "sidebar-container"], [1, "sidebar"], [1, "sidebar-header"], [1, "sidebar-logo"], ["routerLink", "/home", 1, "logo-link"], ["viewBox", "0 0 24 24", "fill", "none", 1, "logo-icon"], ["d", "M12 2L2 7l10 5 10-5-10-5z", "fill", "currentColor", "opacity", "0.8"], ["d", "M2 17l10 5 10-5", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M2 12l10 5 10-5", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["class", "logo-text", 4, "ngIf"], ["class", "sidebar-create", 4, "ngIf"], ["class", "sidebar-create-collapsed", 4, "ngIf"], ["class", "sidebar-nav", 4, "ngIf"], ["class", "sidebar-footer", 4, "ngIf"], [1, "sidebar-content"], [1, "sidebar-overlay", 3, "click"], [1, "logo-text"], [1, "sidebar-create"], ["buttonType", "ghost", "size", "medium", 3, "onClick", "tooltip"], ["viewBox", "0 0 24 24", "fill", "none", 1, "create-icon"], ["d", "M6 12H18M12 6V18", "stroke", "currentColor", "stroke-width", "2.5", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "create-label"], [1, "sidebar-create-collapsed"], ["iconButtonType", "ghost", "size", "large", 3, "onClick"], ["viewBox", "0 0 24 24", "fill", "none"], [1, "sidebar-nav"], ["class", "nav-item", 3, "has-children", 4, "ngFor", "ngForOf"], [1, "nav-item"], ["routerLinkActive", "active", "class", "nav-link", 3, "routerLink", "routerLinkActiveOptions", "title", "click", 4, "ngIf"], ["class", "nav-dropdown", 4, "ngIf"], ["routerLinkActive", "active", 1, "nav-link", 3, "click", "routerLink", "routerLinkActiveOptions", "title"], ["viewBox", "0 0 24 24", "fill", "none", 1, "nav-icon", 3, "innerHTML"], ["class", "nav-label", 4, "ngIf"], [1, "nav-label"], [1, "nav-dropdown"], ["routerLinkActive", "active", "class", "nav-link", 3, "routerLink", "routerLinkActiveOptions", "title", "active", "click", 4, "ngIf"], ["class", "nav-link nav-dropdown-toggle", 3, "expanded", "active", "click", 4, "ngIf"], [1, "nav-submenu"], ["routerLinkActive", "active", "class", "nav-sublink", 3, "routerLink", "click", 4, "ngFor", "ngForOf"], [1, "nav-link", "nav-dropdown-toggle", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", 1, "dropdown-arrow"], ["d", "M6 9l6 6 6-6", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["routerLinkActive", "active", 1, "nav-sublink", 3, "click", "routerLink"], ["viewBox", "0 0 24 24", "fill", "none", 1, "nav-subicon", 3, "innerHTML"], [1, "nav-sublabel"], [1, "sidebar-footer"], [1, "footer-actions"], ["routerLink", "/profile", "routerLinkActive", "active", 1, "footer-link", 3, "title"], ["viewBox", "0 0 24 24", "fill", "none", 1, "footer-icon"], ["d", "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["cx", "12", "cy", "7", "r", "4", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["class", "footer-label", 4, "ngIf"], ["routerLink", "/settings", "routerLinkActive", "active", 1, "footer-link", 3, "title"], ["d", "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "footer-bottom-row"], [1, "footer-link", "logout-link", 3, "click", "title"], ["d", "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["points", "16,17 21,12 16,7", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["x1", "21", "y1", "12", "x2", "9", "y2", "12", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "toggle-btn", 3, "click", "title"], ["viewBox", "0 0 24 24", "fill", "none", 1, "toggle-icon"], ["d", "M15 18l-6-6 6-6", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "footer-label"]], template: function SidebarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275template(0, SidebarComponent_div_0_Template, 1, 0, "div", 0);
      \u0275\u0275elementStart(1, "div", 1)(2, "nav", 2)(3, "div", 3)(4, "div", 4)(5, "a", 5);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(6, "svg", 6);
      \u0275\u0275element(7, "path", 7)(8, "path", 8)(9, "path", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275template(10, SidebarComponent_span_10_Template, 2, 1, "span", 10);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(11, SidebarComponent_div_11_Template, 6, 2, "div", 11)(12, SidebarComponent_div_12_Template, 4, 0, "div", 12)(13, SidebarComponent_ul_13_Template, 2, 1, "ul", 13)(14, SidebarComponent_div_14_Template, 22, 9, "div", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(15, "div", 15);
      \u0275\u0275projection(16);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", !ctx.isClosed() && ctx.isMobile);
      \u0275\u0275advance();
      \u0275\u0275classProp("sidebar-collapsed", ctx.isCollapsed())("sidebar-closed", ctx.isClosed());
      \u0275\u0275advance();
      \u0275\u0275classProp("collapsed", ctx.isCollapsed())("closed", ctx.isClosed());
      \u0275\u0275advance(8);
      \u0275\u0275property("ngIf", !ctx.isCollapsed());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isCollapsed() && !ctx.isClosed());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isCollapsed() && !ctx.isClosed());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isClosed());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isClosed());
    }
  }, dependencies: [
    CommonModule,
    NgForOf,
    NgIf,
    RouterModule,
    RouterLink,
    RouterLinkActive,
    IconButtonComponent,
    ButtonComponent
  ], styles: ["\n\n.sidebar-container[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100vh;\n  overflow-x: hidden;\n}\n.sidebar[_ngcontent-%COMP%] {\n  width: 240px;\n  background: #ffffff;\n  border-right: 1px solid #e5e7eb;\n  height: 100vh;\n  position: fixed;\n  left: 0;\n  top: 0;\n  display: flex;\n  flex-direction: column;\n  transition: width 0.2s cubic-bezier(0.4, 0.0, 0.2, 1);\n  z-index: 102;\n  overflow-y: auto;\n  overflow-x: hidden;\n  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.08);\n}\n.sidebar.collapsed[_ngcontent-%COMP%] {\n  width: 64px;\n}\n.sidebar.closed[_ngcontent-%COMP%] {\n  transform: translateX(-100%);\n}\n@media (min-width: 769px) {\n  .sidebar.closed[_ngcontent-%COMP%] {\n    transform: translateX(0);\n    width: 64px;\n  }\n  .sidebar-container.sidebar-closed[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%] {\n    margin-left: 64px;\n  }\n}\n.sidebar-header[_ngcontent-%COMP%] {\n  height: 64px;\n  display: flex;\n  align-items: center;\n  padding: 0 16px;\n  justify-content: left;\n  overflow-x: hidden;\n  border-bottom: 1px solid #e5e7eb;\n}\n.sidebar-logo[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.logo-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  text-decoration: none;\n  color: inherit;\n}\n.logo-icon[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  color: #15803d;\n  flex-shrink: 0;\n}\n.logo-text[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #1a202c;\n  letter-spacing: -0.02em;\n  white-space: nowrap;\n  overflow: hidden;\n  transition: opacity 0.15s ease, width 0.15s ease;\n}\n.sidebar.collapsed[_ngcontent-%COMP%]   .logo-link[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n.sidebar-create[_ngcontent-%COMP%] {\n  padding: 12px;\n}\n.sidebar-create-collapsed[_ngcontent-%COMP%] {\n  padding: 12px;\n  display: flex;\n  justify-content: center;\n}\n.sidebar-create-collapsed[_ngcontent-%COMP%]   app-icon-button[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n}\n[_nghost-%COMP%]     .sidebar-create-collapsed .icon-button {\n  width: 44px;\n  height: 44px;\n  padding: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: var(--create-btn-bg, #f3f4f6) !important;\n  border: 1px solid var(--create-btn-border, #e5e7eb) !important;\n}\n[_nghost-%COMP%]     .sidebar-create-collapsed .icon-button .icon-content {\n  color: var(--create-icon-color, var(--primary-color, #15803d)) !important;\n}\n[_nghost-%COMP%]     .sidebar-create-collapsed .icon-button svg {\n  width: 32px;\n  height: 32px;\n}\n[_nghost-%COMP%]     .sidebar-create-collapsed .icon-button:hover {\n  background-color: var(--create-btn-bg-hover, #e5e7eb) !important;\n}\n.sidebar-create[_ngcontent-%COMP%]   app-button[_ngcontent-%COMP%] {\n  width: 100%;\n  display: block;\n}\n[_nghost-%COMP%]     .sidebar-create app-button button {\n  width: 100%;\n  height: 44px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  justify-content: flex-start;\n  padding: 12px;\n  border-radius: 8px;\n  background-color: var(--create-btn-bg, #f3f4f6) !important;\n  border: 1px solid var(--create-btn-border, #e5e7eb) !important;\n  color: #1f2937 !important;\n  font-weight: 500;\n  font-size: 0.875rem;\n  box-sizing: border-box;\n  overflow: hidden;\n  white-space: nowrap;\n}\n[_nghost-%COMP%]     .sidebar-create app-button button:hover {\n  background-color: var(--create-btn-bg-hover, #e5e7eb) !important;\n}\n[_nghost-%COMP%]     .sidebar-create app-button button:active {\n  background-color: #d1d5db !important;\n}\n[_nghost-%COMP%]     .sidebar-create app-button button svg.create-icon {\n  width: 32px;\n  height: 32px;\n  color: var(--create-icon-color, var(--primary-color, #007bff));\n  flex-shrink: 0;\n}\n.create-label[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: inline-flex;\n  align-items: center;\n  line-height: 1.5;\n}\n.sidebar-create-collapsed[_ngcontent-%COMP%]   .icon-content[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n.create-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 500;\n}\n.sidebar-nav[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 8px 12px;\n  margin: 0;\n  flex: 1;\n  overflow-y: auto;\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.sidebar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 0;\n  min-width: 0;\n}\n.nav-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 12px;\n  text-decoration: none;\n  color: #6b7280;\n  border-radius: 8px;\n  transition: all 0.15s ease;\n  overflow: hidden;\n  min-width: 0;\n}\n.nav-link[_ngcontent-%COMP%]:hover {\n  background-color: #f3f4f6;\n  color: #1f2937;\n}\n.nav-link.active[_ngcontent-%COMP%] {\n  background-color: #f0fdf4;\n  color: #15803d;\n}\n.nav-link.active[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%] {\n  color: #15803d;\n}\n.nav-icon[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  flex-shrink: 0;\n}\n.nav-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 500;\n  white-space: nowrap;\n  flex: 1;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  min-width: 0;\n  opacity: 1;\n  transition: opacity 0.15s ease;\n}\n.nav-dropdown[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.nav-dropdown-toggle[_ngcontent-%COMP%] {\n  width: 100%;\n  background: none;\n  border: none;\n  font-family: inherit;\n  cursor: pointer;\n  text-align: left;\n}\n.dropdown-arrow[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  flex-shrink: 0;\n  color: #9ca3af;\n  transition: transform 0.2s ease;\n}\n.dropdown-arrow.rotated[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.nav-submenu[_ngcontent-%COMP%] {\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.2s ease;\n  padding-left: 8px;\n}\n.nav-submenu.open[_ngcontent-%COMP%] {\n  max-height: 200px;\n}\n.nav-sublink[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 12px 8px 24px;\n  text-decoration: none;\n  color: #6b7280;\n  border-radius: 6px;\n  transition: all 0.15s ease;\n  font-size: 0.8125rem;\n}\n.nav-sublink[_ngcontent-%COMP%]:hover {\n  background-color: #f3f4f6;\n  color: #1f2937;\n}\n.nav-sublink.active[_ngcontent-%COMP%] {\n  background-color: #f0fdf4;\n  color: #15803d;\n}\n.nav-subicon[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  flex-shrink: 0;\n}\n.nav-sublabel[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.sidebar.collapsed[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  justify-content: center;\n  padding: 10px;\n}\n.sidebar.collapsed[_ngcontent-%COMP%]   .nav-dropdown-toggle[_ngcontent-%COMP%]   .dropdown-arrow[_ngcontent-%COMP%] {\n  display: none;\n}\n.sidebar.collapsed[_ngcontent-%COMP%]   .nav-submenu[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 64px;\n  top: 0;\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  padding: 8px;\n  max-height: none;\n  width: max-content;\n  min-width: 160px;\n  z-index: 200;\n}\n.sidebar.collapsed[_ngcontent-%COMP%]   .nav-dropdown[_ngcontent-%COMP%] {\n  position: relative;\n}\n.sidebar.collapsed[_ngcontent-%COMP%]   .nav-submenu[_ngcontent-%COMP%]   .nav-sublink[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n}\n.sidebar.collapsed[_ngcontent-%COMP%]   .nav-label[_ngcontent-%COMP%], \n.sidebar.collapsed[_ngcontent-%COMP%]   .sidebar-create[_ngcontent-%COMP%], \n.sidebar.collapsed[_ngcontent-%COMP%]   .logo-text[_ngcontent-%COMP%], \n.sidebar.collapsed[_ngcontent-%COMP%]   .footer-label[_ngcontent-%COMP%] {\n  opacity: 0;\n  width: 0;\n  overflow: hidden;\n  pointer-events: none;\n}\n@media (max-width: 768px) {\n  .sidebar.closed[_ngcontent-%COMP%]   .sidebar-logo[_ngcontent-%COMP%], \n   .sidebar.closed[_ngcontent-%COMP%]   .sidebar-create[_ngcontent-%COMP%], \n   .sidebar.closed[_ngcontent-%COMP%]   .sidebar-nav[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.sidebar-footer[_ngcontent-%COMP%] {\n  padding: 12px;\n  border-top: 1px solid #e5e7eb;\n  margin-top: auto;\n}\n.footer-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.footer-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 12px;\n  text-decoration: none;\n  color: #6b7280;\n  border-radius: 8px;\n  transition: all 0.15s ease;\n  cursor: pointer;\n  background: none;\n  border: none;\n  width: 100%;\n  font-size: 0.875rem;\n  font-family: inherit;\n}\n.footer-link[_ngcontent-%COMP%]:hover {\n  background-color: #f3f4f6;\n  color: #1f2937;\n}\n.footer-link.active[_ngcontent-%COMP%] {\n  background-color: #f0fdf4;\n  color: #15803d;\n}\n.footer-link.active[_ngcontent-%COMP%]   .footer-icon[_ngcontent-%COMP%] {\n  color: #15803d;\n}\n.footer-icon[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  flex-shrink: 0;\n}\n.footer-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  white-space: nowrap;\n  overflow: hidden;\n  transition: opacity 0.15s ease, width 0.15s ease;\n}\n.logout-link[_ngcontent-%COMP%]:hover {\n  color: #dc2626;\n}\n.logout-link[_ngcontent-%COMP%]:hover   .footer-icon[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.footer-bottom-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-top: 8px;\n  padding-top: 8px;\n  border-top: 1px solid #e5e7eb;\n}\n.footer-bottom-row[_ngcontent-%COMP%]   .footer-link[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.toggle-btn[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #f3f4f6;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.15s ease;\n  flex-shrink: 0;\n}\n.toggle-btn[_ngcontent-%COMP%]:hover {\n  background: #e5e7eb;\n}\n.toggle-icon[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  color: #6b7280;\n  transition: transform 0.2s ease;\n}\n.toggle-icon.rotated[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.sidebar.collapsed[_ngcontent-%COMP%]   .footer-link[_ngcontent-%COMP%] {\n  justify-content: center;\n  padding: 10px;\n}\n.sidebar.collapsed[_ngcontent-%COMP%]   .footer-bottom-row[_ngcontent-%COMP%] {\n  flex-direction: column;\n  gap: 4px;\n}\n.sidebar.collapsed[_ngcontent-%COMP%]   .footer-bottom-row[_ngcontent-%COMP%]   .footer-link[_ngcontent-%COMP%] {\n  flex: none;\n  width: 100%;\n}\n.sidebar.collapsed[_ngcontent-%COMP%]   .toggle-btn[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.sidebar-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 101;\n  backdrop-filter: blur(4px);\n}\n.sidebar-content[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-left: 240px;\n  transition: margin-left 0.2s cubic-bezier(0.4, 0.0, 0.2, 1);\n  will-change: margin-left;\n  overflow-x: hidden;\n  overflow-y: auto;\n  height: 100vh;\n  width: calc(100vw - 240px);\n  max-width: calc(100vw - 240px);\n}\n.sidebar-container.sidebar-collapsed[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%] {\n  margin-left: 64px;\n  width: calc(100vw - 64px);\n  max-width: calc(100vw - 64px);\n}\n.sidebar-container.sidebar-closed[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%] {\n  margin-left: 0;\n  width: 100vw;\n  max-width: 100vw;\n}\n.sidebar[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n.sidebar[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.sidebar[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #d1d5db;\n  border-radius: 3px;\n}\n.sidebar[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #9ca3af;\n}\n@media (max-width: 768px) {\n  .sidebar[_ngcontent-%COMP%] {\n    transform: translateX(-100%);\n  }\n  .sidebar[_ngcontent-%COMP%]:not(.closed) {\n    transform: translateX(0);\n  }\n  .sidebar-content[_ngcontent-%COMP%] {\n    margin-left: 0;\n    width: 100vw;\n    max-width: 100vw;\n  }\n  .sidebar-container.sidebar-closed[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%] {\n    margin-left: 0;\n    width: 100vw;\n    max-width: 100vw;\n  }\n}\n/*# sourceMappingURL=sidebar.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarComponent, [{
    type: Component,
    args: [{ selector: "app-sidebar", standalone: true, imports: [
      CommonModule,
      RouterModule,
      IconButtonComponent,
      ButtonComponent
    ], template: `
    <!-- Overlay \u0434\u043B\u044F \u043E\u0442\u043A\u0440\u044B\u0442\u043E\u0433\u043E sidebar \u043D\u0430 \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0445 (\u043A\u043B\u0438\u043A \u0437\u0430\u043A\u0440\u044B\u0432\u0430\u0435\u0442 sidebar) -->
    <div 
      class="sidebar-overlay" 
      *ngIf="!isClosed() && isMobile"
      (click)="closeSidebar()">
    </div>

    <div class="sidebar-container" [class.sidebar-collapsed]="isCollapsed()" [class.sidebar-closed]="isClosed()">
      <nav class="sidebar" [class.collapsed]="isCollapsed()" [class.closed]="isClosed()">
        <!-- Header \u0441 \u043B\u043E\u0433\u043E\u0442\u0438\u043F\u043E\u043C -->
        <div class="sidebar-header">
          <div class="sidebar-logo">
            <a routerLink="/home" class="logo-link">
              <svg class="logo-icon" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7l10 5 10-5-10-5z" fill="currentColor" opacity="0.8"/>
                <path d="M2 17l10 5 10-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2 12l10 5 10-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span class="logo-text" *ngIf="!isCollapsed()">{{ logoText }}</span>
            </a>
          </div>
        </div>

        <!-- \u041A\u043D\u043E\u043F\u043A\u0430 Create -->
        <div class="sidebar-create" *ngIf="!isCollapsed() && !isClosed()">
          <app-button
            buttonType="ghost"
            size="medium"
            (onClick)="onCreateClick()"
            [tooltip]="createButtonLabel">
            <svg class="create-icon" viewBox="0 0 24 24" fill="none">
              <path d="M6 12H18M12 6V18" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span class="create-label">{{ createButtonLabel }}</span>
          </app-button>
        </div>
        <div class="sidebar-create-collapsed" *ngIf="isCollapsed() && !isClosed()">
          <app-icon-button
            iconButtonType="ghost"
            size="large"
            (onClick)="onCreateClick()">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M6 12H18M12 6V18" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </app-icon-button>
        </div>

        <!-- \u041D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u043E\u043D\u043D\u043E\u0435 \u043C\u0435\u043D\u044E -->
        <ul class="sidebar-nav" *ngIf="!isClosed()">
          <li *ngFor="let item of menuItems" class="nav-item" [class.has-children]="item.children?.length">
            <!-- \u041E\u0431\u044B\u0447\u043D\u044B\u0439 \u043F\u0443\u043D\u043A\u0442 \u043C\u0435\u043D\u044E -->
            <a
              *ngIf="item.route && !item.children?.length"
              [routerLink]="item.route"
              routerLinkActive="active"
              [routerLinkActiveOptions]="{exact: item.exact !== false}"
              (click)="onMenuItemClick()"
              [title]="isCollapsed() ? item.label : ''"
              class="nav-link"
            >
              <svg viewBox="0 0 24 24" fill="none" class="nav-icon" [innerHTML]="sanitizeHtml(item.iconPath)"></svg>
              <span class="nav-label" *ngIf="!isCollapsed()">{{ item.label }}</span>
            </a>
            
            <!-- \u041F\u0443\u043D\u043A\u0442 \u0441 \u043F\u043E\u0434\u043C\u0435\u043D\u044E -->
            <div *ngIf="item.children?.length" class="nav-dropdown">
              <!-- \u0412 \u0441\u0432\u0451\u0440\u043D\u0443\u0442\u043E\u043C \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0438 - \u0441\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u043F\u0435\u0440\u0432\u044B\u0439 child -->
              <a 
                *ngIf="isCollapsed()"
                [routerLink]="item.children![0].route"
                routerLinkActive="active"
                [routerLinkActiveOptions]="{exact: false}"
                (click)="onMenuItemClick()"
                [title]="item.label"
                class="nav-link"
                [class.active]="isChildActive(item)">
                <svg viewBox="0 0 24 24" fill="none" class="nav-icon" [innerHTML]="sanitizeHtml(item.iconPath)"></svg>
              </a>
              
              <!-- \u0412 \u0440\u0430\u0437\u0432\u0451\u0440\u043D\u0443\u0442\u043E\u043C \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0438 - dropdown -->
              <button 
                *ngIf="!isCollapsed()"
                class="nav-link nav-dropdown-toggle"
                [class.expanded]="expandedMenus[item.label]"
                [class.active]="isChildActive(item)"
                (click)="toggleDropdown(item.label)">
                <svg viewBox="0 0 24 24" fill="none" class="nav-icon" [innerHTML]="sanitizeHtml(item.iconPath)"></svg>
                <span class="nav-label">{{ item.label }}</span>
                <svg viewBox="0 0 24 24" fill="none" class="dropdown-arrow" [class.rotated]="expandedMenus[item.label]">
                  <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
              
              <div class="nav-submenu" [class.open]="expandedMenus[item.label] && !isCollapsed()">
                <a
                  *ngFor="let child of item.children"
                  [routerLink]="child.route"
                  routerLinkActive="active"
                  (click)="onMenuItemClick()"
                  class="nav-sublink">
                  <svg viewBox="0 0 24 24" fill="none" class="nav-subicon" [innerHTML]="sanitizeHtml(child.iconPath)"></svg>
                  <span class="nav-sublabel">{{ child.label }}</span>
                </a>
              </div>
            </div>
          </li>
        </ul>

        <!-- Footer \u0441 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F\u043C\u0438 -->
        <div class="sidebar-footer" *ngIf="!isClosed()">
          <div class="footer-actions">
            <a routerLink="/profile" routerLinkActive="active" class="footer-link" [title]="isCollapsed() ? '\u041F\u0440\u043E\u0444\u0438\u043B\u044C' : ''">
              <svg viewBox="0 0 24 24" fill="none" class="footer-icon">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="12" cy="7" r="4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span class="footer-label" *ngIf="!isCollapsed()">\u041F\u0440\u043E\u0444\u0438\u043B\u044C</span>
            </a>
            <a routerLink="/settings" routerLinkActive="active" class="footer-link" [title]="isCollapsed() ? '\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438' : ''">
              <svg viewBox="0 0 24 24" fill="none" class="footer-icon">
                <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span class="footer-label" *ngIf="!isCollapsed()">\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438</span>
            </a>
            <div class="footer-bottom-row">
              <button class="footer-link logout-link" (click)="onLogoutClick()" [title]="isCollapsed() ? '\u0412\u044B\u0439\u0442\u0438' : ''">
                <svg viewBox="0 0 24 24" fill="none" class="footer-icon">
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <polyline points="16,17 21,12 16,7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <line x1="21" y1="12" x2="9" y2="12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span class="footer-label" *ngIf="!isCollapsed()">\u0412\u044B\u0439\u0442\u0438</span>
              </button>
              <button 
                class="toggle-btn" 
                (click)="toggleClosed()"
                [title]="isCollapsed() ? '\u0420\u0430\u0437\u0432\u0435\u0440\u043D\u0443\u0442\u044C' : '\u0421\u0432\u0435\u0440\u043D\u0443\u0442\u044C'">
                <svg viewBox="0 0 24 24" fill="none" class="toggle-icon" [class.rotated]="isCollapsed()">
                  <path d="M15 18l-6-6 6-6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div class="sidebar-content">
        <ng-content></ng-content>
      </div>
    </div>
  `, styles: ["/* angular:styles/component:css;3d0778ac7a88251fa852d07b140493375484466cb552325e450dbee30d49ca94;/Users/baglan/repo/westwood/westwood-frontend/src/app/layouts/sidebar/sidebar.component.ts */\n.sidebar-container {\n  display: flex;\n  height: 100vh;\n  overflow-x: hidden;\n}\n.sidebar {\n  width: 240px;\n  background: #ffffff;\n  border-right: 1px solid #e5e7eb;\n  height: 100vh;\n  position: fixed;\n  left: 0;\n  top: 0;\n  display: flex;\n  flex-direction: column;\n  transition: width 0.2s cubic-bezier(0.4, 0.0, 0.2, 1);\n  z-index: 102;\n  overflow-y: auto;\n  overflow-x: hidden;\n  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.08);\n}\n.sidebar.collapsed {\n  width: 64px;\n}\n.sidebar.closed {\n  transform: translateX(-100%);\n}\n@media (min-width: 769px) {\n  .sidebar.closed {\n    transform: translateX(0);\n    width: 64px;\n  }\n  .sidebar-container.sidebar-closed .sidebar-content {\n    margin-left: 64px;\n  }\n}\n.sidebar-header {\n  height: 64px;\n  display: flex;\n  align-items: center;\n  padding: 0 16px;\n  justify-content: left;\n  overflow-x: hidden;\n  border-bottom: 1px solid #e5e7eb;\n}\n.sidebar-logo {\n  display: flex;\n  justify-content: center;\n}\n.logo-link {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  text-decoration: none;\n  color: inherit;\n}\n.logo-icon {\n  width: 28px;\n  height: 28px;\n  color: #15803d;\n  flex-shrink: 0;\n}\n.logo-text {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #1a202c;\n  letter-spacing: -0.02em;\n  white-space: nowrap;\n  overflow: hidden;\n  transition: opacity 0.15s ease, width 0.15s ease;\n}\n.sidebar.collapsed .logo-link {\n  justify-content: center;\n}\n.sidebar-create {\n  padding: 12px;\n}\n.sidebar-create-collapsed {\n  padding: 12px;\n  display: flex;\n  justify-content: center;\n}\n.sidebar-create-collapsed app-icon-button {\n  width: 44px;\n  height: 44px;\n}\n:host ::ng-deep .sidebar-create-collapsed .icon-button {\n  width: 44px;\n  height: 44px;\n  padding: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: var(--create-btn-bg, #f3f4f6) !important;\n  border: 1px solid var(--create-btn-border, #e5e7eb) !important;\n}\n:host ::ng-deep .sidebar-create-collapsed .icon-button .icon-content {\n  color: var(--create-icon-color, var(--primary-color, #15803d)) !important;\n}\n:host ::ng-deep .sidebar-create-collapsed .icon-button svg {\n  width: 32px;\n  height: 32px;\n}\n:host ::ng-deep .sidebar-create-collapsed .icon-button:hover {\n  background-color: var(--create-btn-bg-hover, #e5e7eb) !important;\n}\n.sidebar-create app-button {\n  width: 100%;\n  display: block;\n}\n:host ::ng-deep .sidebar-create app-button button {\n  width: 100%;\n  height: 44px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  justify-content: flex-start;\n  padding: 12px;\n  border-radius: 8px;\n  background-color: var(--create-btn-bg, #f3f4f6) !important;\n  border: 1px solid var(--create-btn-border, #e5e7eb) !important;\n  color: #1f2937 !important;\n  font-weight: 500;\n  font-size: 0.875rem;\n  box-sizing: border-box;\n  overflow: hidden;\n  white-space: nowrap;\n}\n:host ::ng-deep .sidebar-create app-button button:hover {\n  background-color: var(--create-btn-bg-hover, #e5e7eb) !important;\n}\n:host ::ng-deep .sidebar-create app-button button:active {\n  background-color: #d1d5db !important;\n}\n:host ::ng-deep .sidebar-create app-button button svg.create-icon {\n  width: 32px;\n  height: 32px;\n  color: var(--create-icon-color, var(--primary-color, #007bff));\n  flex-shrink: 0;\n}\n.create-label {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: inline-flex;\n  align-items: center;\n  line-height: 1.5;\n}\n.sidebar-create-collapsed .icon-content {\n  color: #ffffff;\n}\n.create-label {\n  font-size: 0.875rem;\n  font-weight: 500;\n}\n.sidebar-nav {\n  list-style: none;\n  padding: 8px 12px;\n  margin: 0;\n  flex: 1;\n  overflow-y: auto;\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.sidebar-nav li {\n  margin: 0;\n  min-width: 0;\n}\n.nav-link {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 12px;\n  text-decoration: none;\n  color: #6b7280;\n  border-radius: 8px;\n  transition: all 0.15s ease;\n  overflow: hidden;\n  min-width: 0;\n}\n.nav-link:hover {\n  background-color: #f3f4f6;\n  color: #1f2937;\n}\n.nav-link.active {\n  background-color: #f0fdf4;\n  color: #15803d;\n}\n.nav-link.active .nav-icon {\n  color: #15803d;\n}\n.nav-icon {\n  width: 20px;\n  height: 20px;\n  flex-shrink: 0;\n}\n.nav-label {\n  font-size: 0.875rem;\n  font-weight: 500;\n  white-space: nowrap;\n  flex: 1;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  min-width: 0;\n  opacity: 1;\n  transition: opacity 0.15s ease;\n}\n.nav-dropdown {\n  display: flex;\n  flex-direction: column;\n}\n.nav-dropdown-toggle {\n  width: 100%;\n  background: none;\n  border: none;\n  font-family: inherit;\n  cursor: pointer;\n  text-align: left;\n}\n.dropdown-arrow {\n  width: 16px;\n  height: 16px;\n  flex-shrink: 0;\n  color: #9ca3af;\n  transition: transform 0.2s ease;\n}\n.dropdown-arrow.rotated {\n  transform: rotate(180deg);\n}\n.nav-submenu {\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.2s ease;\n  padding-left: 8px;\n}\n.nav-submenu.open {\n  max-height: 200px;\n}\n.nav-sublink {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 12px 8px 24px;\n  text-decoration: none;\n  color: #6b7280;\n  border-radius: 6px;\n  transition: all 0.15s ease;\n  font-size: 0.8125rem;\n}\n.nav-sublink:hover {\n  background-color: #f3f4f6;\n  color: #1f2937;\n}\n.nav-sublink.active {\n  background-color: #f0fdf4;\n  color: #15803d;\n}\n.nav-subicon {\n  width: 16px;\n  height: 16px;\n  flex-shrink: 0;\n}\n.nav-sublabel {\n  font-weight: 500;\n}\n.sidebar.collapsed .nav-link {\n  justify-content: center;\n  padding: 10px;\n}\n.sidebar.collapsed .nav-dropdown-toggle .dropdown-arrow {\n  display: none;\n}\n.sidebar.collapsed .nav-submenu {\n  position: absolute;\n  left: 64px;\n  top: 0;\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  padding: 8px;\n  max-height: none;\n  width: max-content;\n  min-width: 160px;\n  z-index: 200;\n}\n.sidebar.collapsed .nav-dropdown {\n  position: relative;\n}\n.sidebar.collapsed .nav-submenu .nav-sublink {\n  padding: 8px 12px;\n}\n.sidebar.collapsed .nav-label,\n.sidebar.collapsed .sidebar-create,\n.sidebar.collapsed .logo-text,\n.sidebar.collapsed .footer-label {\n  opacity: 0;\n  width: 0;\n  overflow: hidden;\n  pointer-events: none;\n}\n@media (max-width: 768px) {\n  .sidebar.closed .sidebar-logo,\n  .sidebar.closed .sidebar-create,\n  .sidebar.closed .sidebar-nav {\n    display: none;\n  }\n}\n.sidebar-footer {\n  padding: 12px;\n  border-top: 1px solid #e5e7eb;\n  margin-top: auto;\n}\n.footer-actions {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.footer-link {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 12px;\n  text-decoration: none;\n  color: #6b7280;\n  border-radius: 8px;\n  transition: all 0.15s ease;\n  cursor: pointer;\n  background: none;\n  border: none;\n  width: 100%;\n  font-size: 0.875rem;\n  font-family: inherit;\n}\n.footer-link:hover {\n  background-color: #f3f4f6;\n  color: #1f2937;\n}\n.footer-link.active {\n  background-color: #f0fdf4;\n  color: #15803d;\n}\n.footer-link.active .footer-icon {\n  color: #15803d;\n}\n.footer-icon {\n  width: 20px;\n  height: 20px;\n  flex-shrink: 0;\n}\n.footer-label {\n  font-weight: 500;\n  white-space: nowrap;\n  overflow: hidden;\n  transition: opacity 0.15s ease, width 0.15s ease;\n}\n.logout-link:hover {\n  color: #dc2626;\n}\n.logout-link:hover .footer-icon {\n  color: #dc2626;\n}\n.footer-bottom-row {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-top: 8px;\n  padding-top: 8px;\n  border-top: 1px solid #e5e7eb;\n}\n.footer-bottom-row .footer-link {\n  flex: 1;\n}\n.toggle-btn {\n  width: 36px;\n  height: 36px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #f3f4f6;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.15s ease;\n  flex-shrink: 0;\n}\n.toggle-btn:hover {\n  background: #e5e7eb;\n}\n.toggle-icon {\n  width: 18px;\n  height: 18px;\n  color: #6b7280;\n  transition: transform 0.2s ease;\n}\n.toggle-icon.rotated {\n  transform: rotate(180deg);\n}\n.sidebar.collapsed .footer-link {\n  justify-content: center;\n  padding: 10px;\n}\n.sidebar.collapsed .footer-bottom-row {\n  flex-direction: column;\n  gap: 4px;\n}\n.sidebar.collapsed .footer-bottom-row .footer-link {\n  flex: none;\n  width: 100%;\n}\n.sidebar.collapsed .toggle-btn {\n  width: 100%;\n}\n.sidebar-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 101;\n  backdrop-filter: blur(4px);\n}\n.sidebar-content {\n  flex: 1;\n  margin-left: 240px;\n  transition: margin-left 0.2s cubic-bezier(0.4, 0.0, 0.2, 1);\n  will-change: margin-left;\n  overflow-x: hidden;\n  overflow-y: auto;\n  height: 100vh;\n  width: calc(100vw - 240px);\n  max-width: calc(100vw - 240px);\n}\n.sidebar-container.sidebar-collapsed .sidebar-content {\n  margin-left: 64px;\n  width: calc(100vw - 64px);\n  max-width: calc(100vw - 64px);\n}\n.sidebar-container.sidebar-closed .sidebar-content {\n  margin-left: 0;\n  width: 100vw;\n  max-width: 100vw;\n}\n.sidebar::-webkit-scrollbar {\n  width: 6px;\n}\n.sidebar::-webkit-scrollbar-track {\n  background: transparent;\n}\n.sidebar::-webkit-scrollbar-thumb {\n  background: #d1d5db;\n  border-radius: 3px;\n}\n.sidebar::-webkit-scrollbar-thumb:hover {\n  background: #9ca3af;\n}\n@media (max-width: 768px) {\n  .sidebar {\n    transform: translateX(-100%);\n  }\n  .sidebar:not(.closed) {\n    transform: translateX(0);\n  }\n  .sidebar-content {\n    margin-left: 0;\n    width: 100vw;\n    max-width: 100vw;\n  }\n  .sidebar-container.sidebar-closed .sidebar-content {\n    margin-left: 0;\n    width: 100vw;\n    max-width: 100vw;\n  }\n}\n/*# sourceMappingURL=sidebar.component.css.map */\n"] }]
  }], () => [{ type: DomSanitizer }], { menuItems: [{
    type: Input
  }], logoText: [{
    type: Input
  }], createButtonLabel: [{
    type: Input
  }], collapsedChange: [{
    type: Output
  }], closedChange: [{
    type: Output
  }], createClick: [{
    type: Output
  }], logoutClick: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SidebarComponent, { className: "SidebarComponent", filePath: "src/app/layouts/sidebar/sidebar.component.ts", lineNumber: 764 });
})();

// src/app/shared/components/breadcrumbs/breadcrumbs.component.ts
function BreadcrumbsComponent_a_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 2);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const last_r2 = ctx.last;
    \u0275\u0275classProp("last", last_r2);
    \u0275\u0275property("routerLink", item_r1.route)("href", item_r1.url, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r1.label, " ");
  }
}
var BreadcrumbsComponent = class _BreadcrumbsComponent {
  items = [];
  static \u0275fac = function BreadcrumbsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BreadcrumbsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BreadcrumbsComponent, selectors: [["app-breadcrumbs"]], inputs: { items: "items" }, decls: 2, vars: 1, consts: [[1, "breadcrumbs"], ["class", "breadcrumb-item", 3, "routerLink", "href", "last", 4, "ngFor", "ngForOf"], [1, "breadcrumb-item", 3, "routerLink", "href"]], template: function BreadcrumbsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "nav", 0);
      \u0275\u0275template(1, BreadcrumbsComponent_a_1_Template, 2, 5, "a", 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.items);
    }
  }, dependencies: [CommonModule, NgForOf, RouterModule, RouterLink], styles: ['\n\n.breadcrumbs[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.875rem;\n}\n.breadcrumb-item[_ngcontent-%COMP%] {\n  color: #64748b;\n  text-decoration: none;\n  transition: color 0.2s ease;\n}\n.breadcrumb-item[_ngcontent-%COMP%]:not(.last):hover {\n  color: #007bff;\n}\n.breadcrumb-item[_ngcontent-%COMP%]:not(.last)::after {\n  content: "\\203a";\n  margin-left: 0.5rem;\n  color: #cbd5e1;\n}\n.breadcrumb-item.last[_ngcontent-%COMP%] {\n  color: #1a202c;\n  font-weight: 500;\n  cursor: default;\n  pointer-events: none;\n}\n/*# sourceMappingURL=breadcrumbs.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BreadcrumbsComponent, [{
    type: Component,
    args: [{ selector: "app-breadcrumbs", standalone: true, imports: [CommonModule, RouterModule], template: `
    <nav class="breadcrumbs">
      <a
        *ngFor="let item of items; let last = last; let i = index"
        [routerLink]="item.route"
        [href]="item.url"
        class="breadcrumb-item"
        [class.last]="last">
        {{ item.label }}
      </a>
    </nav>
  `, styles: ['/* angular:styles/component:css;314faa4f3ccf0652d3d16917a1af53a593c5685b74f33d5cc8f79a9a6c6222bd;/Users/baglan/repo/westwood/westwood-frontend/src/app/shared/components/breadcrumbs/breadcrumbs.component.ts */\n.breadcrumbs {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.875rem;\n}\n.breadcrumb-item {\n  color: #64748b;\n  text-decoration: none;\n  transition: color 0.2s ease;\n}\n.breadcrumb-item:not(.last):hover {\n  color: #007bff;\n}\n.breadcrumb-item:not(.last)::after {\n  content: "\\203a";\n  margin-left: 0.5rem;\n  color: #cbd5e1;\n}\n.breadcrumb-item.last {\n  color: #1a202c;\n  font-weight: 500;\n  cursor: default;\n  pointer-events: none;\n}\n/*# sourceMappingURL=breadcrumbs.component.css.map */\n'] }]
  }], null, { items: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BreadcrumbsComponent, { className: "BreadcrumbsComponent", filePath: "src/app/shared/components/breadcrumbs/breadcrumbs.component.ts", lineNumber: 59 });
})();

// src/app/layouts/page-header/page-header.component.ts
function PageHeaderComponent_div_0_ng_container_1_app_breadcrumbs_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-breadcrumbs", 5);
  }
  if (rf & 2) {
    const data_r1 = \u0275\u0275nextContext(2).ngIf;
    \u0275\u0275property("items", data_r1.breadcrumbs);
  }
}
function PageHeaderComponent_div_0_ng_container_1_h1_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h1", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r1 = \u0275\u0275nextContext(2).ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(data_r1.title);
  }
}
function PageHeaderComponent_div_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, PageHeaderComponent_div_0_ng_container_1_app_breadcrumbs_1_Template, 1, 1, "app-breadcrumbs", 3)(2, PageHeaderComponent_div_0_ng_container_1_h1_2_Template, 2, 1, "h1", 4);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const data_r1 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", data_r1.breadcrumbs.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", data_r1.title);
  }
}
function PageHeaderComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275template(1, PageHeaderComponent_div_0_ng_container_1_Template, 3, 2, "ng-container", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r1 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", data_r1.title || data_r1.breadcrumbs.length);
  }
}
var PageHeaderComponent = class _PageHeaderComponent {
  pageHeaderService = inject(PageHeaderService);
  static \u0275fac = function PageHeaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PageHeaderComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PageHeaderComponent, selectors: [["app-page-header"]], decls: 2, vars: 3, consts: [["class", "page-header", 4, "ngIf"], [1, "page-header"], [4, "ngIf"], [3, "items", 4, "ngIf"], ["class", "page-title", 4, "ngIf"], [3, "items"], [1, "page-title"]], template: function PageHeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, PageHeaderComponent_div_0_Template, 2, 1, "div", 0);
      \u0275\u0275pipe(1, "async");
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(1, 1, ctx.pageHeaderService.headerData$));
    }
  }, dependencies: [CommonModule, NgIf, AsyncPipe, RouterModule, BreadcrumbsComponent], styles: ["\n\n.page-header[_ngcontent-%COMP%] {\n  padding: 1.5rem 0 3.5rem 0;\n}\n[_nghost-%COMP%]     .breadcrumbs {\n  margin-bottom: 0.5rem;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n  letter-spacing: -0.02em;\n}\n@media (max-width: 768px) {\n  .page-header[_ngcontent-%COMP%] {\n    padding: 1rem 0;\n    margin-top: 0;\n    position: relative;\n    z-index: 1;\n  }\n  .page-title[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n}\n/*# sourceMappingURL=page-header.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PageHeaderComponent, [{
    type: Component,
    args: [{ selector: "app-page-header", standalone: true, imports: [CommonModule, RouterModule, BreadcrumbsComponent], template: `
    <div class="page-header" *ngIf="(pageHeaderService.headerData$ | async) as data">
      <ng-container *ngIf="data.title || data.breadcrumbs.length">
        <app-breadcrumbs 
          *ngIf="data.breadcrumbs.length" 
          [items]="data.breadcrumbs">
        </app-breadcrumbs>
        <h1 class="page-title" *ngIf="data.title">{{ data.title }}</h1>
      </ng-container>
    </div>
  `, styles: ["/* angular:styles/component:css;c1ec4a66103ad99a9a693290b4da24d9e12364023ed46be0468e23633f471fd0;/Users/baglan/repo/westwood/westwood-frontend/src/app/layouts/page-header/page-header.component.ts */\n.page-header {\n  padding: 1.5rem 0 3.5rem 0;\n}\n:host ::ng-deep .breadcrumbs {\n  margin-bottom: 0.5rem;\n}\n.page-title {\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n  letter-spacing: -0.02em;\n}\n@media (max-width: 768px) {\n  .page-header {\n    padding: 1rem 0;\n    margin-top: 0;\n    position: relative;\n    z-index: 1;\n  }\n  .page-title {\n    font-size: 1.5rem;\n  }\n}\n/*# sourceMappingURL=page-header.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PageHeaderComponent, { className: "PageHeaderComponent", filePath: "src/app/layouts/page-header/page-header.component.ts", lineNumber: 53 });
})();

// src/app/layouts/mobile-header/mobile-header.component.ts
var MobileHeaderComponent = class _MobileHeaderComponent {
  logoText = "WestWood";
  menuClick = new EventEmitter();
  onMenuClick() {
    this.menuClick.emit();
  }
  static \u0275fac = function MobileHeaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MobileHeaderComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MobileHeaderComponent, selectors: [["app-mobile-header"]], inputs: { logoText: "logoText" }, outputs: { menuClick: "menuClick" }, decls: 12, vars: 1, consts: [[1, "mobile-header"], [1, "mobile-header-content"], ["routerLink", "/home", 1, "mobile-logo-link"], ["viewBox", "0 0 24 24", "fill", "none", 1, "mobile-logo-icon"], ["d", "M12 2L2 7l10 5 10-5-10-5z", "fill", "currentColor", "opacity", "0.8"], ["d", "M2 17l10 5 10-5", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M2 12l10 5 10-5", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "mobile-logo-text"], ["iconButtonType", "ghost", "size", "medium", 3, "onClick"], ["viewBox", "0 0 24 24", "fill", "none"], ["d", "M3 12h18M3 6h18M3 18h18", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"]], template: function MobileHeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "header", 0)(1, "div", 1)(2, "a", 2);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(3, "svg", 3);
      \u0275\u0275element(4, "path", 4)(5, "path", 5)(6, "path", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(7, "span", 7);
      \u0275\u0275text(8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "app-icon-button", 8);
      \u0275\u0275listener("onClick", function MobileHeaderComponent_Template_app_icon_button_onClick_9_listener() {
        return ctx.onMenuClick();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(10, "svg", 9);
      \u0275\u0275element(11, "path", 10);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.logoText);
    }
  }, dependencies: [CommonModule, RouterModule, RouterLink, IconButtonComponent], styles: ["\n\n.mobile-header[_ngcontent-%COMP%] {\n  display: none;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 64px;\n  background: #ffffff;\n  border-bottom: 1px solid #e5e7eb;\n  z-index: 101;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.mobile-header-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 100%;\n  padding: 0 1rem;\n}\n.mobile-logo-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  text-decoration: none;\n  color: inherit;\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n}\n.mobile-logo-icon[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  color: #15803d;\n  flex-shrink: 0;\n}\n.mobile-logo-text[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #1a202c;\n  letter-spacing: -0.02em;\n  white-space: nowrap;\n}\n@media (max-width: 768px) {\n  .mobile-header[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n/*# sourceMappingURL=mobile-header.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MobileHeaderComponent, [{
    type: Component,
    args: [{ selector: "app-mobile-header", standalone: true, imports: [CommonModule, RouterModule, IconButtonComponent], template: `
    <header class="mobile-header">
      <div class="mobile-header-content">
        <a routerLink="/home" class="mobile-logo-link">
          <svg class="mobile-logo-icon" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L2 7l10 5 10-5-10-5z" fill="currentColor" opacity="0.8"/>
            <path d="M2 17l10 5 10-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2 12l10 5 10-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span class="mobile-logo-text">{{ logoText }}</span>
        </a>
        <app-icon-button
          iconButtonType="ghost"
          size="medium"
          (onClick)="onMenuClick()">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </app-icon-button>
      </div>
    </header>
  `, styles: ["/* angular:styles/component:css;77b3b6a953bbacdb2b3882d53b3574d725f71efdea5bed6c046f347754b00f2e;/Users/baglan/repo/westwood/westwood-frontend/src/app/layouts/mobile-header/mobile-header.component.ts */\n.mobile-header {\n  display: none;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 64px;\n  background: #ffffff;\n  border-bottom: 1px solid #e5e7eb;\n  z-index: 101;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.mobile-header-content {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 100%;\n  padding: 0 1rem;\n}\n.mobile-logo-link {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  text-decoration: none;\n  color: inherit;\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n}\n.mobile-logo-icon {\n  width: 28px;\n  height: 28px;\n  color: #15803d;\n  flex-shrink: 0;\n}\n.mobile-logo-text {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #1a202c;\n  letter-spacing: -0.02em;\n  white-space: nowrap;\n}\n@media (max-width: 768px) {\n  .mobile-header {\n    display: block;\n  }\n}\n/*# sourceMappingURL=mobile-header.component.css.map */\n"] }]
  }], null, { logoText: [{
    type: Input
  }], menuClick: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MobileHeaderComponent, { className: "MobileHeaderComponent", filePath: "src/app/layouts/mobile-header/mobile-header.component.ts", lineNumber: 88 });
})();

// src/app/shared/components/dialog/dialog.component.ts
var _c02 = ["*"];
function DialogComponent_div_0_p_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.message);
  }
}
function DialogComponent_div_0_div_5_app_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-button", 9);
    \u0275\u0275listener("onClick", function DialogComponent_div_0_div_5_app_button_1_Template_app_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onCancel());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.cancelLabel, " ");
  }
}
function DialogComponent_div_0_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275template(1, DialogComponent_div_0_div_5_app_button_1_Template, 2, 1, "app-button", 7);
    \u0275\u0275elementStart(2, "app-button", 8);
    \u0275\u0275listener("onClick", function DialogComponent_div_0_div_5_Template_app_button_onClick_2_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onConfirm());
    });
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.cancelLabel);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.confirmLabel, " ");
  }
}
function DialogComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "app-modal", 2);
    \u0275\u0275listener("closed", function DialogComponent_div_0_Template_app_modal_closed_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClose());
    });
    \u0275\u0275elementStart(2, "div", 3);
    \u0275\u0275template(3, DialogComponent_div_0_p_3_Template, 2, 1, "p", 4);
    \u0275\u0275projection(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, DialogComponent_div_0_div_5_Template, 4, 2, "div", 5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("visible", ctx_r1.visible)("title", ctx_r1.title)("showCloseButton", ctx_r1.dismissible)("showFooter", ctx_r1.showActions)("size", ctx_r1.size);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.message);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.showActions);
  }
}
var DialogComponent = class _DialogComponent {
  visible = false;
  title = "";
  message = "";
  confirmLabel = "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C";
  cancelLabel = "\u041E\u0442\u043C\u0435\u043D\u0430";
  showActions = true;
  dismissible = true;
  size = "medium";
  confirmed = new EventEmitter();
  cancelled = new EventEmitter();
  closed = new EventEmitter();
  onConfirm() {
    this.confirmed.emit();
  }
  onCancel() {
    this.cancelled.emit();
    this.onClose();
  }
  onClose() {
    this.visible = false;
    this.closed.emit();
  }
  static \u0275fac = function DialogComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DialogComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DialogComponent, selectors: [["app-dialog"]], inputs: { visible: "visible", title: "title", message: "message", confirmLabel: "confirmLabel", cancelLabel: "cancelLabel", showActions: "showActions", dismissible: "dismissible", size: "size" }, outputs: { confirmed: "confirmed", cancelled: "cancelled", closed: "closed" }, ngContentSelectors: _c02, decls: 1, vars: 1, consts: [["class", "dialog-wrapper", 4, "ngIf"], [1, "dialog-wrapper"], [3, "closed", "visible", "title", "showCloseButton", "showFooter", "size"], [1, "dialog-content"], [4, "ngIf"], ["modalFooter", "", 4, "ngIf"], ["modalFooter", ""], ["buttonType", "ghost", 3, "onClick", 4, "ngIf"], ["buttonType", "primary", 3, "onClick"], ["buttonType", "ghost", 3, "onClick"]], template: function DialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275template(0, DialogComponent_div_0_Template, 6, 7, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.visible);
    }
  }, dependencies: [CommonModule, NgIf, ModalComponent, ButtonComponent], styles: ["\n\n.dialog-wrapper[_ngcontent-%COMP%]     .modal-overlay {\n  z-index: 10001 !important;\n  background-color: rgba(0, 0, 0, 0.6) !important;\n}\n.dialog-content[_ngcontent-%COMP%] {\n  color: #1a202c;\n  line-height: 1.6;\n}\n.dialog-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n/*# sourceMappingURL=dialog.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DialogComponent, [{
    type: Component,
    args: [{ selector: "app-dialog", standalone: true, imports: [CommonModule, ModalComponent, ButtonComponent], template: `
    <div class="dialog-wrapper" *ngIf="visible">
      <app-modal
        [visible]="visible"
        [title]="title"
        [showCloseButton]="dismissible"
        [showFooter]="showActions"
        [size]="size"
        (closed)="onClose()">
        <div class="dialog-content">
          <p *ngIf="message">{{ message }}</p>
          <ng-content></ng-content>
        </div>
        <div modalFooter *ngIf="showActions">
          <app-button
            *ngIf="cancelLabel"
            buttonType="ghost"
            (onClick)="onCancel()">
            {{ cancelLabel }}
          </app-button>
          <app-button
            buttonType="primary"
            (onClick)="onConfirm()">
            {{ confirmLabel }}
          </app-button>
        </div>
      </app-modal>
    </div>
  `, styles: ["/* angular:styles/component:css;8bc9f9a9fff9b619b12650dada6551978d3770c287e955dbc48430e6b3367bbd;/Users/baglan/repo/westwood/westwood-frontend/src/app/shared/components/dialog/dialog.component.ts */\n.dialog-wrapper ::ng-deep .modal-overlay {\n  z-index: 10001 !important;\n  background-color: rgba(0, 0, 0, 0.6) !important;\n}\n.dialog-content {\n  color: #1a202c;\n  line-height: 1.6;\n}\n.dialog-content p {\n  margin: 0;\n}\n/*# sourceMappingURL=dialog.component.css.map */\n"] }]
  }], null, { visible: [{
    type: Input
  }], title: [{
    type: Input
  }], message: [{
    type: Input
  }], confirmLabel: [{
    type: Input
  }], cancelLabel: [{
    type: Input
  }], showActions: [{
    type: Input
  }], dismissible: [{
    type: Input
  }], size: [{
    type: Input
  }], confirmed: [{
    type: Output
  }], cancelled: [{
    type: Output
  }], closed: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DialogComponent, { className: "DialogComponent", filePath: "src/app/shared/components/dialog/dialog.component.ts", lineNumber: 55 });
})();

// src/app/shared/components/transaction-modal/transaction-modal.component.ts
function TransactionModalComponent_div_1_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 17);
    \u0275\u0275element(2, "circle", 18)(3, "path", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u043E\u043C\u0435\u0440 \u0434\u043B\u044F \u043F\u043E\u0438\u0441\u043A\u0430 \u0438\u043B\u0438 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u043A\u043B\u0438\u0435\u043D\u0442\u0430 ");
    \u0275\u0275elementEnd();
  }
}
function TransactionModalComponent_div_1_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "span");
    \u0275\u0275text(2, "\u041F\u043E\u0438\u0441\u043A \u043A\u043B\u0438\u0435\u043D\u0442\u0430...");
    \u0275\u0275elementEnd()();
  }
}
function TransactionModalComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "label", 7);
    \u0275\u0275text(2, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 8)(4, "input", 9);
    \u0275\u0275twoWayListener("ngModelChange", function TransactionModalComponent_div_1_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchPhone, $event) || (ctx_r1.searchPhone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keypress", function TransactionModalComponent_div_1_Template_input_keypress_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSearchKeypress($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 10);
    \u0275\u0275listener("click", function TransactionModalComponent_div_1_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handleSearch());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 11);
    \u0275\u0275element(7, "circle", 12)(8, "path", 13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(9, TransactionModalComponent_div_1_div_9_Template, 5, 0, "div", 14)(10, TransactionModalComponent_div_1_div_10_Template, 3, 0, "div", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchPhone);
    \u0275\u0275property("disabled", ctx_r1.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.isLoading);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", !ctx_r1.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isLoading && ctx_r1.currentStep === "search");
  }
}
function TransactionModalComponent_div_2__svg_path_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 60);
  }
}
function TransactionModalComponent_div_2__svg_path_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 61);
  }
}
function TransactionModalComponent_div_2_div_19_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 64);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tag_r4);
  }
}
function TransactionModalComponent_div_2_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62);
    \u0275\u0275template(1, TransactionModalComponent_div_2_div_19_span_1_Template, 2, 1, "span", 63);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.foundClient.tags);
  }
}
function TransactionModalComponent_div_2_div_20_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 69);
    \u0275\u0275text(1, "\u0435\u0449\u0451...");
    \u0275\u0275elementEnd();
  }
}
function TransactionModalComponent_div_2_div_20_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 70);
    \u0275\u0275text(1, "\u0441\u0432\u0435\u0440\u043D\u0443\u0442\u044C");
    \u0275\u0275elementEnd();
  }
}
function TransactionModalComponent_div_2_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 65);
    \u0275\u0275listener("click", function TransactionModalComponent_div_2_div_20_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleComment());
    });
    \u0275\u0275elementStart(1, "span", 66);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, TransactionModalComponent_div_2_div_20_span_3_Template, 2, 0, "span", 67)(4, TransactionModalComponent_div_2_div_20_span_4_Template, 2, 0, "span", 68);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.isCommentExpanded ? ctx_r1.foundClient.comment : ctx_r1.getTruncatedComment(ctx_r1.foundClient.comment));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isCommentExpanded && ctx_r1.foundClient.comment.length > 50);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isCommentExpanded);
  }
}
function TransactionModalComponent_div_2_div_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 71)(1, "label", 72)(2, "input", 73);
    \u0275\u0275twoWayListener("ngModelChange", function TransactionModalComponent_div_2_div_44_Template_input_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.useBonuses, $event) || (ctx_r1.useBonuses = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function TransactionModalComponent_div_2_div_44_Template_input_change_2_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onUseBonusesChange());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "span", 74);
    \u0275\u0275elementStart(4, "span", 75);
    \u0275\u0275text(5, "\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0431\u043E\u043D\u0443\u0441\u044B");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "span", 76);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.useBonuses);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("\u0414\u043E\u0441\u0442\u0443\u043F\u043D\u043E: ", ctx_r1.foundClient.balance, "");
  }
}
function TransactionModalComponent_div_2_div_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 77)(1, "label", 7);
    \u0275\u0275text(2, "\u0421\u043F\u0438\u0441\u0430\u0442\u044C \u0431\u043E\u043D\u0443\u0441\u043E\u0432");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 78);
    \u0275\u0275twoWayListener("ngModelChange", function TransactionModalComponent_div_2_div_45_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.bonusesToUse, $event) || (ctx_r1.bonusesToUse = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function TransactionModalComponent_div_2_div_45_Template_input_input_3_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onBonusesChange());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 79);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.bonusesToUse);
    \u0275\u0275property("max", ctx_r1.getMaxBonuses());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" \u041C\u0430\u043A\u0441\u0438\u043C\u0443\u043C: ", ctx_r1.getMaxBonuses(), " \u0431\u043E\u043D\u0443\u0441\u043E\u0432 ");
  }
}
function TransactionModalComponent_div_2_div_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 80)(1, "span", 50);
    \u0275\u0275text(2, "\u0421\u043A\u0438\u0434\u043A\u0430 \u0431\u043E\u043D\u0443\u0441\u0430\u043C\u0438:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 53);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\u2212", ctx_r1.bonusesToUse, " \u20B8");
  }
}
function TransactionModalComponent_div_2_div_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 81)(1, "span", 50);
    \u0275\u0275text(2, "\u0411\u0443\u0434\u0435\u0442 \u043D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u043E:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 82);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("+", ctx_r1.calculatedBonus, " \u0431\u043E\u043D\u0443\u0441\u043E\u0432");
  }
}
function TransactionModalComponent_div_2_div_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 83);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 84);
    \u0275\u0275element(2, "path", 85)(3, "path", 86);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "\u041F\u0440\u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0438 \u0431\u043E\u043D\u0443\u0441\u043E\u0432 \u043D\u043E\u0432\u044B\u0435 \u0431\u043E\u043D\u0443\u0441\u044B \u043D\u0435 \u043D\u0430\u0447\u0438\u0441\u043B\u044F\u044E\u0442\u0441\u044F");
    \u0275\u0275elementEnd()();
  }
}
function TransactionModalComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 22)(2, "div", 23)(3, "div", 24);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 25)(6, "div", 26);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 27)(9, "div", 28);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(10, "svg", 29);
    \u0275\u0275element(11, "path", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(13, "div", 31);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(14, "svg", 32);
    \u0275\u0275template(15, TransactionModalComponent_div_2__svg_path_15_Template, 1, 0, "path", 33)(16, TransactionModalComponent_div_2__svg_path_16_Template, 1, 0, "path", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275template(19, TransactionModalComponent_div_2_div_19_Template, 2, 1, "div", 35)(20, TransactionModalComponent_div_2_div_20_Template, 5, 3, "div", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 37)(22, "label", 7);
    \u0275\u0275text(23, "\u0421\u0443\u043C\u043C\u0430 \u043F\u043E\u043A\u0443\u043F\u043A\u0438 (\u20B8)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "input", 38);
    \u0275\u0275twoWayListener("ngModelChange", function TransactionModalComponent_div_2_Template_input_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.purchaseAmount, $event) || (ctx_r1.purchaseAmount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function TransactionModalComponent_div_2_Template_input_input_24_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAmountChange());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 37)(26, "label", 7);
    \u0275\u0275text(27, "\u0421\u043F\u043E\u0441\u043E\u0431 \u043E\u043F\u043B\u0430\u0442\u044B");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 39)(29, "label", 40)(30, "input", 41);
    \u0275\u0275twoWayListener("ngModelChange", function TransactionModalComponent_div_2_Template_input_ngModelChange_30_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedPaymentMethod, $event) || (ctx_r1.selectedPaymentMethod = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(31, "span", 42);
    \u0275\u0275elementStart(32, "span", 43);
    \u0275\u0275text(33, "\u041D\u0430\u043B\u0438\u0447\u043D\u044B\u0435");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "label", 40)(35, "input", 44);
    \u0275\u0275twoWayListener("ngModelChange", function TransactionModalComponent_div_2_Template_input_ngModelChange_35_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedPaymentMethod, $event) || (ctx_r1.selectedPaymentMethod = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(36, "span", 42);
    \u0275\u0275elementStart(37, "span", 43);
    \u0275\u0275text(38, "\u041A\u0430\u0440\u0442\u0430");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "label", 40)(40, "input", 45);
    \u0275\u0275twoWayListener("ngModelChange", function TransactionModalComponent_div_2_Template_input_ngModelChange_40_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedPaymentMethod, $event) || (ctx_r1.selectedPaymentMethod = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(41, "span", 42);
    \u0275\u0275elementStart(42, "span", 43);
    \u0275\u0275text(43, "\u041F\u0435\u0440\u0435\u0432\u043E\u0434");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(44, TransactionModalComponent_div_2_div_44_Template, 8, 2, "div", 46)(45, TransactionModalComponent_div_2_div_45_Template, 6, 3, "div", 47);
    \u0275\u0275elementStart(46, "div", 48)(47, "div", 49)(48, "span", 50);
    \u0275\u0275text(49, "ID \u043F\u043B\u0430\u0442\u0435\u0436\u0430:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "span", 51);
    \u0275\u0275text(51);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "div", 52)(53, "span", 50);
    \u0275\u0275text(54, "\u0421\u0443\u043C\u043C\u0430 \u043F\u043E\u043A\u0443\u043F\u043A\u0438:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "span", 53);
    \u0275\u0275text(56);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(57, TransactionModalComponent_div_2_div_57_Template, 5, 1, "div", 54);
    \u0275\u0275elementStart(58, "div", 55)(59, "span", 50);
    \u0275\u0275text(60, "\u041A \u043E\u043F\u043B\u0430\u0442\u0435:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "span", 53);
    \u0275\u0275text(62);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(63, TransactionModalComponent_div_2_div_63_Template, 5, 1, "div", 56)(64, TransactionModalComponent_div_2_div_64_Template, 6, 0, "div", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "button", 58);
    \u0275\u0275listener("click", function TransactionModalComponent_div_2_Template_button_click_65_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.completeTransaction());
    });
    \u0275\u0275text(66);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "button", 59);
    \u0275\u0275listener("click", function TransactionModalComponent_div_2_Template_button_click_67_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275text(68, "\u2190 \u041D\u0430\u0437\u0430\u0434 \u043A \u043F\u043E\u0438\u0441\u043A\u0443");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("business-client", ctx_r1.foundClient.type === "business");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getInitials(ctx_r1.foundClient.name), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.foundClient.name);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.foundClient.balance, " \u0431\u043E\u043D\u0443\u0441\u043E\u0432 ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.foundClient.type === "business");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.foundClient.type === "individual");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.foundClient.type === "business" ? "\u0411\u0438\u0437\u043D\u0435\u0441" : "\u0418\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u044B\u0439");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.foundClient.tags && ctx_r1.foundClient.tags.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.foundClient.comment);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.purchaseAmount);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedPaymentMethod);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedPaymentMethod);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedPaymentMethod);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.foundClient && ctx_r1.foundClient.balance > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.useBonuses && ctx_r1.foundClient);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("#", ctx_r1.paymentId || "\u2014", "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r1.purchaseAmount || 0, " \u20B8");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.useBonuses && ctx_r1.bonusesToUse > 0);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r1.getFinalAmount(), " \u20B8");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.useBonuses);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.useBonuses);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.purchaseAmount || ctx_r1.purchaseAmount <= 0 || ctx_r1.isLoading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isLoading ? "\u041E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0430..." : "\u041F\u0440\u043E\u0432\u0435\u0441\u0442\u0438 \u0442\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u044E", " ");
  }
}
function TransactionModalComponent_div_3_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 106);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 107);
    \u0275\u0275element(2, "path", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "div", 108)(4, "span", 109);
    \u0275\u0275text(5, "\u041F\u0440\u0438\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u0431\u043E\u043D\u0443\u0441");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 110);
    \u0275\u0275text(7, "\u041A\u043B\u0438\u0435\u043D\u0442 \u043F\u043E\u043B\u0443\u0447\u0438\u0442 ");
    \u0275\u0275elementStart(8, "strong");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " \u0431\u043E\u043D\u0443\u0441\u043E\u0432 \u043F\u043E\u0441\u043B\u0435 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.welcomeBonusAmount);
  }
}
function TransactionModalComponent_div_3_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37)(1, "label", 7);
    \u0275\u0275text(2, "\u0424\u0430\u043C\u0438\u043B\u0438\u044F (\u043D\u0435\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 111);
    \u0275\u0275twoWayListener("ngModelChange", function TransactionModalComponent_div_3_div_15_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.newClientSurname, $event) || (ctx_r1.newClientSurname = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newClientSurname);
  }
}
function TransactionModalComponent_div_3_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37)(1, "label", 7);
    \u0275\u0275text(2, "\u0414\u0430\u0442\u0430 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F (\u043D\u0435\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 112);
    \u0275\u0275twoWayListener("ngModelChange", function TransactionModalComponent_div_3_div_16_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.newClientBirthday, $event) || (ctx_r1.newClientBirthday = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newClientBirthday);
  }
}
function TransactionModalComponent_div_3_div_37_button_7_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 120);
    \u0275\u0275text(1, "\u2713");
    \u0275\u0275elementEnd();
  }
}
function TransactionModalComponent_div_3_div_37_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 118);
    \u0275\u0275listener("click", function TransactionModalComponent_div_3_div_37_button_7_Template_button_click_0_listener() {
      const tag_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.addTag(tag_r13));
    });
    \u0275\u0275text(1);
    \u0275\u0275template(2, TransactionModalComponent_div_3_div_37_button_7_span_2_Template, 2, 0, "span", 119);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r13 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("selected", ctx_r1.isTagSelected(tag_r13));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tag_r13, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isTagSelected(tag_r13));
  }
}
function TransactionModalComponent_div_3_div_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 113)(1, "div", 114)(2, "span");
    \u0275\u0275text(3, "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0442\u044D\u0433\u0438");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 115);
    \u0275\u0275listener("click", function TransactionModalComponent_div_3_div_37_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.showTagsDropdown = false);
    });
    \u0275\u0275text(5, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 116);
    \u0275\u0275template(7, TransactionModalComponent_div_3_div_37_button_7_Template, 3, 4, "button", 117);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r1.availableTags);
  }
}
function TransactionModalComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 87)(1, "div", 88);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 89);
    \u0275\u0275element(3, "circle", 90)(4, "path", 91);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " \u041A\u043B\u0438\u0435\u043D\u0442 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D. \u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043D\u043E\u0432\u043E\u0433\u043E \u043F\u0440\u043E\u0444\u0438\u043B\u044F. ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, TransactionModalComponent_div_3_div_6_Template, 11, 1, "div", 92);
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "div", 37)(8, "label", 7);
    \u0275\u0275text(9, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "input", 93);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 37)(12, "label", 7);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 94);
    \u0275\u0275twoWayListener("ngModelChange", function TransactionModalComponent_div_3_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newClientName, $event) || (ctx_r1.newClientName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(15, TransactionModalComponent_div_3_div_15_Template, 4, 1, "div", 95)(16, TransactionModalComponent_div_3_div_16_Template, 4, 1, "div", 95);
    \u0275\u0275elementStart(17, "div", 37)(18, "label", 7);
    \u0275\u0275text(19, "\u0422\u0438\u043F \u043A\u043B\u0438\u0435\u043D\u0442\u0430");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 96)(21, "label", 97)(22, "input", 98);
    \u0275\u0275twoWayListener("ngModelChange", function TransactionModalComponent_div_3_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newClientType, $event) || (ctx_r1.newClientType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "span", 99);
    \u0275\u0275elementStart(24, "span", 100);
    \u0275\u0275text(25, "\u0418\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u044B\u0439");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "label", 97)(27, "input", 101);
    \u0275\u0275twoWayListener("ngModelChange", function TransactionModalComponent_div_3_Template_input_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newClientType, $event) || (ctx_r1.newClientType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(28, "span", 99);
    \u0275\u0275elementStart(29, "span", 100);
    \u0275\u0275text(30, "\u0411\u0438\u0437\u043D\u0435\u0441");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(31, "div", 37)(32, "label", 7);
    \u0275\u0275text(33, "\u0422\u044D\u0433\u0438");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "input", 102);
    \u0275\u0275twoWayListener("ngModelChange", function TransactionModalComponent_div_3_Template_input_ngModelChange_34_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newClientTags, $event) || (ctx_r1.newClientTags = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("focus", function TransactionModalComponent_div_3_Template_input_focus_34_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showTagsDropdown = true);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 103);
    \u0275\u0275text(36, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u044D\u0433\u0438 \u0447\u0435\u0440\u0435\u0437 \u0437\u0430\u043F\u044F\u0442\u0443\u044E \u0438\u043B\u0438 \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0438\u0437 \u0441\u043F\u0438\u0441\u043A\u0430");
    \u0275\u0275elementEnd();
    \u0275\u0275template(37, TransactionModalComponent_div_3_div_37_Template, 8, 1, "div", 104);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 37)(39, "label", 7);
    \u0275\u0275text(40, "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 (\u043D\u0435\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "textarea", 105);
    \u0275\u0275twoWayListener("ngModelChange", function TransactionModalComponent_div_3_Template_textarea_ngModelChange_41_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newClientComment, $event) || (ctx_r1.newClientComment = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "button", 58);
    \u0275\u0275listener("click", function TransactionModalComponent_div_3_Template_button_click_42_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.createClient());
    });
    \u0275\u0275text(43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "button", 59);
    \u0275\u0275listener("click", function TransactionModalComponent_div_3_Template_button_click_44_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275text(45, "\u2190 \u041D\u0430\u0437\u0430\u0434 \u043A \u043F\u043E\u0438\u0441\u043A\u0443");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r1.welcomeBonusAmount > 0);
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r1.searchPhone);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.newClientType === "business" ? "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u043B\u0438\u0435\u043D\u0442\u0430" : "\u0418\u043C\u044F");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newClientName);
    \u0275\u0275property("placeholder", ctx_r1.newClientType === "business" ? "\u0422\u041E\u041E \xAB\u041A\u043B\u0438\u0435\u043D\u0442\xBB" : "\u0418\u0432\u0430\u043D");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.newClientType === "individual");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.newClientType === "individual");
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newClientType);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newClientType);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newClientTags);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.showTagsDropdown && ctx_r1.availableTags.length > 0);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newClientComment);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.newClientName || ctx_r1.isLoading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isLoading ? "\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435..." : "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043A\u043B\u0438\u0435\u043D\u0442\u0430", " ");
  }
}
function TransactionModalComponent_div_4_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 134)(1, "label", 135);
    \u0275\u0275text(2, "\u0412\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0439 \u0448\u0430\u0431\u043B\u043E\u043D");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 136)(4, "div", 137)(5, "div", 138);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 139);
    \u0275\u0275element(7, "path", 140)(8, "path", 141);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "div", 142)(10, "h4", 143);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 144);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 145)(15, "p", 146);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r1.selectedWelcomeTemplate.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.selectedWelcomeTemplate.type === "bonus_accrued" ? "\u041D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u043D\u044B\u0435 \u0431\u043E\u043D\u0443\u0441\u044B" : "\u0421\u0440\u043E\u043A \u0438\u0441\u0442\u0435\u0447\u0435\u043D\u0438\u044F \u0431\u043E\u043D\u0443\u0441\u043E\u0432");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.selectedWelcomeTemplate.content);
  }
}
function TransactionModalComponent_div_4_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 147);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 148);
    \u0275\u0275element(2, "circle", 90)(3, "path", 91);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "div", 149)(5, "span", 150);
    \u0275\u0275text(6, "\u0428\u0430\u0431\u043B\u043E\u043D \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 151);
    \u0275\u0275text(8, '\u0421\u043E\u0437\u0434\u0430\u0439\u0442\u0435 \u0448\u0430\u0431\u043B\u043E\u043D \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F \u0442\u0438\u043F\u0430 "BASIC_CASHBACK_BONUS_GRANT" \u0432 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430\u0445');
    \u0275\u0275elementEnd()()();
  }
}
function TransactionModalComponent_div_4_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 152)(1, "label", 153);
    \u0275\u0275text(2, "\u0421\u043E\u0434\u0435\u0440\u0436\u0438\u043C\u043E\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 154)(4, "p", 155);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.getFormattedMessage());
  }
}
function TransactionModalComponent_div_4_app_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-button", 156);
    \u0275\u0275listener("click", function TransactionModalComponent_div_4_app_button_14_Template_app_button_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.sendWelcomeMessage());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 157);
    \u0275\u0275element(2, "path", 158)(3, "path", 159);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.isSendingMessage);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.isSendingMessage ? "\u041E\u0442\u043F\u0440\u0430\u0432\u043A\u0430..." : "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0432 WhatsApp", " ");
  }
}
function TransactionModalComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 121)(1, "div", 122);
    \u0275\u0275template(2, TransactionModalComponent_div_4_div_2_Template, 17, 3, "div", 123)(3, TransactionModalComponent_div_4_div_3_Template, 9, 0, "div", 124);
    \u0275\u0275elementStart(4, "div", 125)(5, "label", 126);
    \u0275\u0275text(6, "\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430 \u043F\u043E\u043B\u0443\u0447\u0430\u0442\u0435\u043B\u044F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 127);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 128);
    \u0275\u0275element(9, "path", 129);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(10, "span", 130);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(12, TransactionModalComponent_div_4_div_12_Template, 6, 1, "div", 131);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 132);
    \u0275\u0275template(14, TransactionModalComponent_div_4_app_button_14_Template, 5, 2, "app-button", 133);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.selectedWelcomeTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.selectedWelcomeTemplate);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.getPhoneForMessage());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedWelcomeTemplate);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.selectedWelcomeTemplate);
  }
}
var TransactionModalComponent = class _TransactionModalComponent {
  clientsService = inject(ClientsService);
  paymentsService = inject(PaymentsService);
  messageTemplatesService = inject(MessageTemplatesService);
  messagesService = inject(MessagesService);
  bonusTypesService = inject(BonusTypesService);
  toastService = inject(ToastService);
  visible = false;
  welcomeMessageTemplates = [];
  // Шаблоны приветственных сообщений
  visibleChange = new EventEmitter();
  transactionComplete = new EventEmitter();
  messageSent = new EventEmitter();
  currentStep = "search";
  searchPhone = "";
  foundClient = null;
  purchaseAmount = null;
  calculatedBonus = 0;
  useBonuses = false;
  bonusesToUse = 0;
  paymentId = null;
  draftPayment = null;
  isLoading = false;
  selectedPaymentMethod = "CASH";
  bonusPercentage = null;
  // Bonus percentage from API
  newClientName = "";
  newClientSurname = "";
  newClientType = "individual";
  newClientTags = "";
  newClientComment = "";
  newClientEmail = "";
  newClientBirthday = "";
  isCommentExpanded = false;
  showTagsDropdown = false;
  // Send message
  isSendingMessage = false;
  pendingTransactionResult = null;
  selectedWelcomeTemplate = null;
  populatedMessageContent = "";
  // Track if current client was just created (for transaction result)
  isNewlyCreatedClient = false;
  // Список доступных тэгов из API
  availableTags = [];
  // Cancel confirmation
  showCancelConfirmation = false;
  // Welcome bonus amount for new clients
  welcomeBonusAmount = 0;
  ngOnChanges(changes) {
    if (changes["visible"]) {
      this.toggleBodyScroll(changes["visible"].currentValue);
      if (changes["visible"].currentValue) {
        this.loadAvailableTags();
        this.loadWelcomeBonusAmount();
      }
    }
  }
  loadWelcomeBonusAmount() {
    this.bonusTypesService.getBonusTypesByFlow("create_client").pipe(timeout(5e3), catchError((err) => {
      console.warn("Error loading welcome bonus amount:", err);
      return of(null);
    })).subscribe({
      next: (bonusType) => {
        if (bonusType && bonusType.enabled && bonusType.bonusAmount !== null && bonusType.bonusAmount !== void 0) {
          this.welcomeBonusAmount = bonusType.bonusAmount;
          console.log("Welcome bonus amount loaded:", this.welcomeBonusAmount);
        } else {
          this.welcomeBonusAmount = 0;
        }
      }
    });
  }
  loadAvailableTags() {
    this.clientsService.getTags().subscribe({
      next: (tags) => {
        this.availableTags = Array.isArray(tags) ? tags : [];
      },
      error: (err) => {
        console.error("Error loading tags:", err);
        this.availableTags = [];
      }
    });
  }
  ngOnDestroy() {
    this.toggleBodyScroll(false);
  }
  toggleBodyScroll(disable) {
    if (typeof document !== "undefined") {
      document.body.style.overflow = disable ? "hidden" : "";
    }
  }
  getModalTitle() {
    switch (this.currentStep) {
      case "search":
        return "\u041D\u043E\u0432\u0430\u044F \u043F\u0440\u043E\u0434\u0430\u0436\u0430";
      case "found":
        return "\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u0435 \u043F\u043E\u043A\u0443\u043F\u043A\u0438";
      case "new":
        return "\u041D\u043E\u0432\u044B\u0439 \u043A\u043B\u0438\u0435\u043D\u0442";
      case "notify":
        return "\u0423\u0432\u0435\u0434\u043E\u043C\u0438\u0442\u044C \u043A\u043B\u0438\u0435\u043D\u0442\u0430";
      default:
        return "\u041D\u043E\u0432\u0430\u044F \u043F\u0440\u043E\u0434\u0430\u0436\u0430";
    }
  }
  onClose() {
    const isPaymentCreationStep = this.currentStep === "found" || this.currentStep === "new";
    const isPaymentCompleted = this.currentStep === "notify" || this.pendingTransactionResult !== null;
    if (this.draftPayment && isPaymentCreationStep && !isPaymentCompleted) {
      this.showCancelConfirmation = true;
    } else {
      this.closeModal();
    }
  }
  confirmCancel() {
    if (this.currentStep === "notify") {
      this.showCancelConfirmation = false;
      this.currentStep = "found";
      return;
    }
    if (this.draftPayment) {
      this.paymentsService.deleteDraftPayment(this.draftPayment.txId).subscribe({
        next: () => {
          this.toastService.success("\u0427\u0435\u0440\u043D\u043E\u0432\u0438\u043A \u043F\u043B\u0430\u0442\u0435\u0436\u0430 \u0443\u0434\u0430\u043B\u0435\u043D");
          this.showCancelConfirmation = false;
          this.closeModal();
        },
        error: (err) => {
          console.error("Error deleting draft payment:", err);
          const errorMessage = err.error?.message || "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u0438 \u0447\u0435\u0440\u043D\u043E\u0432\u0438\u043A\u0430 \u043F\u043B\u0430\u0442\u0435\u0436\u0430";
          this.toastService.error(errorMessage);
          this.showCancelConfirmation = false;
          this.closeModal();
        }
      });
    } else {
      this.showCancelConfirmation = false;
      this.closeModal();
    }
  }
  closeModal() {
    this.resetForm();
    this.visible = false;
    this.visibleChange.emit(false);
  }
  onSearchKeypress(event) {
    if (event.key === "Enter") {
      this.handleSearch();
    }
  }
  handleSearch() {
    const cleanPhone = this.searchPhone.trim();
    if (cleanPhone.length < 3) {
      this.toastService.error("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0439 \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430");
      return;
    }
    this.isLoading = true;
    this.clientsService.getClientByPhone(cleanPhone).subscribe({
      next: (response) => {
        this.foundClient = {
          id: response.clientId,
          name: response.name,
          surname: response.surname || "",
          phone: cleanPhone,
          balance: response.currentBonusBalance || 0,
          // Use currentBonusBalance from API
          type: response.clientType === "BUSINESS" ? "business" : "individual",
          // Use clientType from API
          tags: response.tags || [],
          comment: response.comment || void 0
        };
        this.isNewlyCreatedClient = false;
        this.createDraftPayment();
      },
      error: (err) => {
        if (err.status === 404) {
          this.isLoading = false;
          this.currentStep = "new";
        } else {
          const errorMessage = err.error?.message || "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u043F\u043E\u0438\u0441\u043A\u0435 \u043A\u043B\u0438\u0435\u043D\u0442\u0430";
          this.toastService.error(errorMessage);
          this.isLoading = false;
        }
      }
    });
  }
  createDraftPayment() {
    if (!this.foundClient) {
      console.error("createDraftPayment called but foundClient is null");
      this.isLoading = false;
      return;
    }
    this.isLoading = true;
    console.log("Loading bonus configuration for new_payment flow...");
    this.bonusTypesService.getBonusTypesByFlow("new_payment").pipe(
      timeout(5e3),
      // 5 second timeout
      catchError((err) => {
        console.warn("Error or timeout loading bonus configuration, continuing with default:", err);
        return of(null);
      })
    ).subscribe({
      next: (bonusType) => {
        console.log("Bonus type loaded:", bonusType);
        if (bonusType && bonusType.enabled && bonusType.bonusPercentage !== null && bonusType.bonusPercentage !== void 0) {
          this.bonusPercentage = bonusType.bonusPercentage / 100;
          console.log("Using bonus percentage:", bonusType.bonusPercentage, "% (", this.bonusPercentage, "as decimal)");
        } else {
          this.bonusPercentage = 0;
          console.log("Bonus type is disabled or has no percentage, using 0%");
        }
        console.log("Creating draft payment for client:", this.foundClient.id);
        this.paymentsService.createDraftPayment({ clientId: this.foundClient.id }).subscribe({
          next: (draft) => {
            console.log("Draft payment created:", draft);
            this.draftPayment = draft;
            this.paymentId = draft.txId;
            this.currentStep = "found";
            this.isLoading = false;
            this.calculateBonus();
          },
          error: (err) => {
            console.error("Error creating draft payment:", err);
            const errorMessage = err.error?.message || "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0438 \u0447\u0435\u0440\u043D\u043E\u0432\u0438\u043A\u0430 \u043F\u043B\u0430\u0442\u0435\u0436\u0430";
            this.toastService.error(errorMessage);
            this.isLoading = false;
          }
        });
      },
      error: (err) => {
        console.error("Unexpected error in bonus config subscription:", err);
        this.bonusPercentage = 0;
        this.paymentsService.createDraftPayment({ clientId: this.foundClient.id }).subscribe({
          next: (draft) => {
            this.draftPayment = draft;
            this.paymentId = draft.txId;
            this.currentStep = "found";
            this.isLoading = false;
            this.calculateBonus();
          },
          error: (err2) => {
            const errorMessage = err2.error?.message || "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0438 \u0447\u0435\u0440\u043D\u043E\u0432\u0438\u043A\u0430 \u043F\u043B\u0430\u0442\u0435\u0436\u0430";
            this.toastService.error(errorMessage);
            this.isLoading = false;
          }
        });
      }
    });
  }
  calculateBonus() {
    if (this.useBonuses) {
      this.calculatedBonus = 0;
    } else {
      const rate = this.bonusPercentage ?? 0;
      this.calculatedBonus = Math.floor((this.purchaseAmount || 0) * rate);
    }
  }
  onAmountChange() {
    this.validateBonuses();
    this.calculateBonus();
  }
  onUseBonusesChange() {
    if (!this.useBonuses) {
      this.bonusesToUse = 0;
    }
    this.calculateBonus();
  }
  onBonusesChange() {
    this.validateBonuses();
    this.calculateBonus();
  }
  validateBonuses() {
    const max = this.getMaxBonuses();
    if (this.bonusesToUse > max) {
      this.bonusesToUse = max;
    }
    if (this.bonusesToUse < 0) {
      this.bonusesToUse = 0;
    }
  }
  getMaxBonuses() {
    if (!this.foundClient)
      return 0;
    return this.foundClient.balance;
  }
  getFinalAmount() {
    const amount = this.purchaseAmount || 0;
    const discount = this.useBonuses ? this.bonusesToUse : 0;
    return Math.max(0, amount - discount);
  }
  completeTransaction() {
    if (!this.foundClient || !this.purchaseAmount || !this.draftPayment) {
      this.toastService.error("\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u0432\u0441\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043F\u043E\u043B\u044F");
      return;
    }
    this.isLoading = true;
    const completeRequest = {
      originalAmount: this.purchaseAmount,
      bonusAmountUsed: this.useBonuses && this.bonusesToUse > 0 ? this.bonusesToUse : null,
      notes: "Payment for services",
      paymentMethod: this.selectedPaymentMethod
    };
    console.log("=== COMPLETE PAYMENT REQUEST ===");
    console.log("Payment TX ID:", this.draftPayment.txId);
    console.log("Full Request Payload:", JSON.stringify(completeRequest, null, 2));
    console.log("================================");
    this.paymentsService.completePayment(this.draftPayment.txId, completeRequest).subscribe({
      next: () => {
        const result = {
          clientName: this.foundClient.name,
          phone: this.foundClient.phone,
          amount: this.purchaseAmount,
          bonuses: this.calculatedBonus,
          isNewClient: this.isNewlyCreatedClient
        };
        this.pendingTransactionResult = result;
        this.isLoading = false;
        const finalAmount = this.getFinalAmount();
        const bonusText = this.useBonuses && this.bonusesToUse > 0 ? ` (\u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u043E \u0431\u043E\u043D\u0443\u0441\u043E\u0432: ${this.bonusesToUse} \u20B8)` : this.calculatedBonus > 0 ? ` (\u043D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u043E \u0431\u043E\u043D\u0443\u0441\u043E\u0432: ${this.calculatedBonus} \u20B8)` : "";
        this.toastService.success(`\u041F\u043B\u0430\u0442\u0435\u0436 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0441\u043E\u0437\u0434\u0430\u043D \u043D\u0430 \u0441\u0443\u043C\u043C\u0443 ${finalAmount} \u20B8${bonusText}`);
        if (this.useBonuses && this.bonusesToUse > 0) {
          this.draftPayment = null;
          this.finishTransaction();
        } else {
          this.openSendMessageModal();
        }
      },
      error: (err) => {
        const errorMessage = err.error?.message || "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0438\u0438 \u043F\u043B\u0430\u0442\u0435\u0436\u0430";
        this.toastService.error(errorMessage);
        this.isLoading = false;
      }
    });
  }
  createClient() {
    if (!this.newClientName) {
      this.toastService.error("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043C\u044F \u043A\u043B\u0438\u0435\u043D\u0442\u0430");
      return;
    }
    this.isLoading = true;
    const tags = this.newClientTags.split(",").map((t) => t.trim()).filter((t) => t.length > 0);
    let name = this.newClientName;
    let surname = this.newClientSurname;
    if (this.newClientType === "individual" && !surname) {
      const nameParts = this.newClientName.trim().split(/\s+/);
      if (nameParts.length > 1) {
        name = nameParts[0];
        surname = nameParts.slice(1).join(" ");
      }
    }
    const createRequest = {
      phone: this.searchPhone.trim(),
      name,
      surname: surname || void 0,
      dateOfBirth: this.newClientBirthday || null,
      notes: this.newClientComment || null,
      tags: tags.length > 0 ? tags : void 0,
      clientType: this.newClientType === "business" ? "BUSINESS" : "INDIVIDUAL",
      referrerId: null,
      email: this.newClientEmail || null
    };
    console.log("=== CREATE CLIENT REQUEST ===");
    console.log("Full Request Payload:", JSON.stringify(createRequest, null, 2));
    console.log("============================");
    this.clientsService.createClient(createRequest).subscribe({
      next: (createdClient) => {
        this.clientsService.getClientByPhone(this.searchPhone.trim()).subscribe({
          next: (response) => {
            this.foundClient = {
              id: response.clientId,
              name: response.name,
              surname: response.surname || "",
              phone: this.searchPhone.trim(),
              balance: response.currentBonusBalance || 0,
              // Use actual bonus balance (includes welcome bonus)
              type: response.clientType === "BUSINESS" ? "business" : "individual",
              tags: response.tags || [],
              comment: response.comment || void 0
            };
            this.isNewlyCreatedClient = true;
            this.createDraftPayment();
          },
          error: (err) => {
            console.warn("Failed to fetch client after creation, using created client data:", err);
            this.foundClient = {
              id: createdClient.id,
              name: createdClient.name,
              surname: createdClient.surname || "",
              phone: this.searchPhone.trim(),
              balance: 0,
              type: createdClient.clientType === "BUSINESS" ? "business" : "individual",
              tags: createdClient.tags || [],
              comment: createdClient.notes || void 0
            };
            this.isNewlyCreatedClient = true;
            this.createDraftPayment();
          }
        });
      },
      error: (err) => {
        const errorMessage = err.error?.message || "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0438 \u043A\u043B\u0438\u0435\u043D\u0442\u0430";
        this.toastService.error(errorMessage);
        this.isLoading = false;
      }
    });
  }
  openSendMessageModal() {
    if (!this.foundClient || !this.draftPayment)
      return;
    this.isLoading = true;
    const templateType = "BASIC_CASHBACK_BONUS_GRANT";
    this.messageTemplatesService.getAllTemplates(templateType).subscribe({
      next: (templates) => {
        if (templates && templates.length > 0) {
          this.selectedWelcomeTemplate = templates[0];
          if (!this.draftPayment) {
            this.isLoading = false;
            this.toastService.error("\u041E\u0448\u0438\u0431\u043A\u0430: \u0447\u0435\u0440\u043D\u043E\u0432\u0438\u043A \u043F\u043B\u0430\u0442\u0435\u0436\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D");
            return;
          }
          this.messageTemplatesService.getPopulatedTemplate(templateType, this.foundClient.id, this.draftPayment.txId).subscribe({
            next: (populated) => {
              this.populatedMessageContent = populated.populatedContent;
              this.isLoading = false;
              this.currentStep = "notify";
            },
            error: (err) => {
              console.error("Error loading populated template:", err);
              this.populatedMessageContent = this.getFormattedMessage();
              this.isLoading = false;
              this.currentStep = "notify";
            }
          });
        } else {
          this.selectedWelcomeTemplate = null;
          this.populatedMessageContent = "";
          this.isLoading = false;
          this.currentStep = "notify";
        }
      },
      error: (err) => {
        console.error("Error loading template:", err);
        this.selectedWelcomeTemplate = null;
        this.populatedMessageContent = "";
        this.isLoading = false;
        this.currentStep = "notify";
      }
    });
  }
  goBackFromNotify() {
    this.currentStep = "found";
  }
  finishTransaction() {
    this.isSendingMessage = false;
    if (this.pendingTransactionResult) {
      const result = this.pendingTransactionResult;
      this.pendingTransactionResult = null;
      this.draftPayment = null;
      this.transactionComplete.emit(result);
      this.onClose();
    }
  }
  getClientNameForMessage() {
    if (this.pendingTransactionResult) {
      return this.pendingTransactionResult.clientName;
    }
    return this.foundClient?.name || this.newClientName || "\u041A\u043B\u0438\u0435\u043D\u0442";
  }
  getAvatarLetterForMessage() {
    const name = this.getClientNameForMessage();
    return name ? name[0].toUpperCase() : "\u041A";
  }
  getPhoneForMessage() {
    if (this.pendingTransactionResult) {
      return this.pendingTransactionResult.phone;
    }
    return this.foundClient?.phone || this.searchPhone || "";
  }
  getFormattedMessage() {
    if (this.populatedMessageContent) {
      return this.populatedMessageContent;
    }
    if (!this.selectedWelcomeTemplate) {
      return "\u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C! \u0421\u043F\u0430\u0441\u0438\u0431\u043E \u0437\u0430 \u043F\u043E\u043A\u0443\u043F\u043A\u0443.";
    }
    let message = this.selectedWelcomeTemplate.content || "";
    const clientName = this.getClientNameForMessage();
    const phone = this.getPhoneForMessage();
    message = message.replace(/\{clientName\}/g, clientName);
    message = message.replace(/\{clientPhone\}/g, phone);
    message = message.replace(/\{clientBonus\}/g, String(this.pendingTransactionResult?.bonuses || 0));
    message = message.replace(/\{clientBonusExp\}/g, "30 \u0434\u043D\u0435\u0439");
    message = message.replace(/\{clientEmail\}/g, "");
    message = message.replace(/\{clientTotalAmount\}/g, String(this.pendingTransactionResult?.amount || 0));
    message = message.replace(/\{clientTotalTransactions\}/g, "1");
    message = message.replace(/\{clientLastVisit\}/g, "\u0421\u0435\u0433\u043E\u0434\u043D\u044F");
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = message;
    message = tempDiv.textContent || tempDiv.innerText || message;
    return message;
  }
  sendWelcomeMessage() {
    if (this.isSendingMessage || !this.foundClient)
      return;
    const phone = this.getPhoneForMessage();
    const message = this.getFormattedMessage();
    if (!phone || !message) {
      this.toastService.error("\u041D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430 \u0438\u043B\u0438 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435");
      return;
    }
    this.isSendingMessage = true;
    this.messagesService.sendMessage({
      clientId: this.foundClient.id,
      messageContent: message,
      channel: "WHATSAPP"
    }).subscribe({
      next: () => {
        this.openWhatsAppWeb(phone, message);
        this.toastService.success("\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u0437\u0430\u043F\u0438\u0441\u0430\u043D\u043E, \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u0435\u0442\u0441\u044F WhatsApp");
        this.messageSent.emit({ phone, message });
        this.finishTransaction();
      },
      error: (err) => {
        const errorMessage = err.error?.message || "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F";
        this.toastService.error(errorMessage);
        this.isSendingMessage = false;
      }
    });
  }
  openWhatsAppWeb(phone, message) {
    let cleanPhone = phone.replace(/[\s\-\(\)\+]/g, "");
    if (cleanPhone.startsWith("8")) {
      cleanPhone = "7" + cleanPhone.substring(1);
    }
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  }
  goBack() {
    const isPaymentCreationStep = this.currentStep === "found" || this.currentStep === "new" || this.currentStep === "notify";
    if (this.draftPayment && isPaymentCreationStep) {
      this.showCancelConfirmation = true;
    } else {
      this.resetToSearch();
    }
  }
  resetToSearch() {
    this.currentStep = "search";
    this.foundClient = null;
    this.purchaseAmount = null;
    this.calculatedBonus = 0;
    this.useBonuses = false;
    this.bonusesToUse = 0;
    this.draftPayment = null;
    this.paymentId = null;
    this.bonusPercentage = null;
    this.newClientName = "";
    this.newClientSurname = "";
    this.newClientEmail = "";
    this.newClientBirthday = "";
    this.newClientType = "individual";
    this.newClientTags = "";
    this.newClientComment = "";
    this.isCommentExpanded = false;
    this.showTagsDropdown = false;
    this.isNewlyCreatedClient = false;
  }
  getInitials(name) {
    return name.split(" ").map((n) => n[0]).join("").toUpperCase().substring(0, 2);
  }
  toggleComment() {
    this.isCommentExpanded = !this.isCommentExpanded;
  }
  getTruncatedComment(comment) {
    const maxLength = 50;
    if (comment.length <= maxLength) {
      return comment;
    }
    return comment.substring(0, maxLength).trim() + "...";
  }
  addTag(tag) {
    const currentTags = this.newClientTags.split(",").map((t) => t.trim()).filter((t) => t.length > 0);
    if (currentTags.includes(tag)) {
      const index = currentTags.indexOf(tag);
      currentTags.splice(index, 1);
    } else {
      currentTags.push(tag);
    }
    this.newClientTags = currentTags.join(", ");
  }
  isTagSelected(tag) {
    const currentTags = this.newClientTags.split(",").map((t) => t.trim()).filter((t) => t.length > 0);
    return currentTags.includes(tag);
  }
  resetForm() {
    this.currentStep = "search";
    this.searchPhone = "";
    this.foundClient = null;
    this.purchaseAmount = null;
    this.calculatedBonus = 0;
    this.useBonuses = false;
    this.bonusesToUse = 0;
    this.paymentId = null;
    this.draftPayment = null;
    this.bonusPercentage = null;
    this.newClientName = "";
    this.newClientSurname = "";
    this.newClientEmail = "";
    this.newClientBirthday = "";
    this.newClientType = "individual";
    this.newClientTags = "";
    this.newClientComment = "";
    this.isCommentExpanded = false;
    this.showTagsDropdown = false;
    this.pendingTransactionResult = null;
    this.selectedWelcomeTemplate = null;
    this.populatedMessageContent = "";
    this.isSendingMessage = false;
    this.isNewlyCreatedClient = false;
    this.isLoading = false;
    this.showCancelConfirmation = false;
    this.selectedPaymentMethod = "CASH";
  }
  static \u0275fac = function TransactionModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TransactionModalComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TransactionModalComponent, selectors: [["app-transaction-modal"]], inputs: { visible: "visible", welcomeMessageTemplates: "welcomeMessageTemplates" }, outputs: { visibleChange: "visibleChange", transactionComplete: "transactionComplete", messageSent: "messageSent" }, features: [\u0275\u0275NgOnChangesFeature], decls: 6, vars: 9, consts: [[3, "closed", "visible", "title", "showCloseButton"], ["class", "step-search", 4, "ngIf"], ["class", "step-found", 4, "ngIf"], ["class", "step-new", 4, "ngIf"], ["class", "step-notify", 4, "ngIf"], ["title", "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u0435", "message", "\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B, \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u043E\u0442\u043C\u0435\u043D\u0438\u0442\u044C \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043F\u043B\u0430\u0442\u0435\u0436\u0430? \u0427\u0435\u0440\u043D\u043E\u0432\u0438\u043A \u043F\u043B\u0430\u0442\u0435\u0436\u0430 \u0431\u0443\u0434\u0435\u0442 \u0443\u0434\u0430\u043B\u0435\u043D.", "confirmLabel", "\u0414\u0430, \u043E\u0442\u043C\u0435\u043D\u0438\u0442\u044C", "cancelLabel", "\u041D\u0435\u0442", 3, "confirmed", "cancelled", "visible", "dismissible"], [1, "step-search"], [1, "input-label"], [1, "search-row"], ["type", "tel", "placeholder", "8 900 000 00 00", 1, "search-input", 3, "ngModelChange", "keypress", "ngModel", "disabled"], [1, "search-btn", 3, "click", "disabled"], ["viewBox", "0 0 24 24", "fill", "none", 1, "search-icon"], ["cx", "11", "cy", "11", "r", "8", "stroke", "currentColor", "stroke-width", "2"], ["d", "M21 21l-4.35-4.35", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], ["class", "search-hint", 4, "ngIf"], ["class", "loading-indicator", 4, "ngIf"], [1, "search-hint"], ["viewBox", "0 0 24 24", "fill", "none", 1, "hint-icon"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "1.5"], ["d", "M12 16v-4M12 8h.01", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], [1, "loading-indicator"], [1, "step-found"], [1, "client-card"], [1, "client-card-header"], [1, "client-avatar"], [1, "client-info"], [1, "client-name"], [1, "client-bonus-row"], [1, "client-bonus"], ["viewBox", "0 0 24 24", "fill", "none", 1, "star-icon"], ["d", "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z", "fill", "currentColor"], [1, "client-type-badge"], ["viewBox", "0 0 24 24", "fill", "none", 1, "type-icon"], ["d", "M20 7h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM10 4h4v3h-4V4z", "fill", "currentColor", 4, "ngIf"], ["d", "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z", "fill", "currentColor", 4, "ngIf"], ["class", "client-tags", 4, "ngIf"], ["class", "client-comment", 3, "click", 4, "ngIf"], [1, "form-group"], ["type", "number", "placeholder", "0.00", "min", "1", 1, "form-input", 3, "ngModelChange", "input", "ngModel"], [1, "payment-method-radio-group"], [1, "payment-method-radio-label"], ["type", "radio", "name", "paymentMethod", "value", "CASH", 1, "payment-method-radio-input", 3, "ngModelChange", "ngModel"], [1, "payment-method-radio-custom"], [1, "payment-method-radio-text"], ["type", "radio", "name", "paymentMethod", "value", "CARD", 1, "payment-method-radio-input", 3, "ngModelChange", "ngModel"], ["type", "radio", "name", "paymentMethod", "value", "TRANSFER", 1, "payment-method-radio-input", 3, "ngModelChange", "ngModel"], ["class", "use-bonus-toggle", 4, "ngIf"], ["class", "form-group bonus-input-group", 4, "ngIf"], [1, "transaction-summary"], [1, "summary-row", "payment-id"], [1, "summary-label"], [1, "summary-value", "id-value"], [1, "summary-row"], [1, "summary-value"], ["class", "summary-row discount", 4, "ngIf"], [1, "summary-row", "total"], ["class", "summary-row earned", 4, "ngIf"], ["class", "bonus-warning", 4, "ngIf"], [1, "submit-btn", 3, "click", "disabled"], [1, "back-btn", 3, "click"], ["d", "M20 7h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM10 4h4v3h-4V4z", "fill", "currentColor"], ["d", "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z", "fill", "currentColor"], [1, "client-tags"], ["class", "client-tag", 4, "ngFor", "ngForOf"], [1, "client-tag"], [1, "client-comment", 3, "click"], [1, "comment-text"], ["class", "comment-more", 4, "ngIf"], ["class", "comment-less", 4, "ngIf"], [1, "comment-more"], [1, "comment-less"], [1, "use-bonus-toggle"], [1, "toggle-label"], ["type", "checkbox", 1, "toggle-checkbox", 3, "ngModelChange", "change", "ngModel"], [1, "toggle-switch"], [1, "toggle-text"], [1, "available-bonus"], [1, "form-group", "bonus-input-group"], ["type", "number", "min", "0", "placeholder", "0", 1, "form-input", 3, "ngModelChange", "input", "ngModel", "max"], [1, "bonus-hint"], [1, "summary-row", "discount"], [1, "summary-row", "earned"], [1, "summary-value", "bonus"], [1, "bonus-warning"], ["viewBox", "0 0 24 24", "fill", "none", 1, "warning-icon"], ["d", "M12 9v4M12 17h.01", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], ["d", "M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z", "stroke", "currentColor", "stroke-width", "2"], [1, "step-new"], [1, "alert-box"], ["viewBox", "0 0 24 24", "fill", "none", 1, "alert-icon"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "2"], ["d", "M12 8v4M12 16h.01", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], ["class", "bonus-hint-box", 4, "ngIf"], ["type", "text", "disabled", "", 1, "form-input", "disabled", 3, "value"], ["type", "text", 1, "form-input", 3, "ngModelChange", "ngModel", "placeholder"], ["class", "form-group", 4, "ngIf"], [1, "radio-group"], [1, "radio-label"], ["type", "radio", "name", "clientType", "value", "individual", 1, "radio-input", 3, "ngModelChange", "ngModel"], [1, "radio-custom"], [1, "radio-text"], ["type", "radio", "name", "clientType", "value", "business", 1, "radio-input", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "VIP, \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u044B\u0439, \u043D\u043E\u0432\u044B\u0439...", 1, "form-input", 3, "ngModelChange", "focus", "ngModel"], [1, "input-hint"], ["class", "tags-dropdown", 4, "ngIf"], ["placeholder", "\u0417\u0430\u043C\u0435\u0442\u043A\u0438 \u043E \u043A\u043B\u0438\u0435\u043D\u0442\u0435...", "rows", "3", 1, "form-textarea", 3, "ngModelChange", "ngModel"], [1, "bonus-hint-box"], ["viewBox", "0 0 24 24", "fill", "none", 1, "bonus-icon"], [1, "bonus-text"], [1, "bonus-label"], [1, "bonus-value"], ["type", "text", "placeholder", "\u0418\u0432\u0430\u043D\u043E\u0432", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "date", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "tags-dropdown"], [1, "tags-dropdown-header"], ["type", "button", 1, "tags-dropdown-close", 3, "click"], [1, "tags-dropdown-list"], ["type", "button", "class", "tag-option", 3, "selected", "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "tag-option", 3, "click"], ["class", "tag-check", 4, "ngIf"], [1, "tag-check"], [1, "step-notify"], [1, "send-message-content"], ["class", "template-section", 4, "ngIf"], ["class", "template-not-found", 4, "ngIf"], [1, "phone-section"], [1, "phone-label"], [1, "phone-display"], ["viewBox", "0 0 24 24", "fill", "none", 1, "phone-icon"], ["d", "M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z", "stroke", "currentColor", "stroke-width", "1.5"], [1, "phone-number"], ["class", "message-content-section", 4, "ngIf"], [1, "notify-actions"], ["buttonType", "primary", "size", "large", "class", "send-message-btn", 3, "disabled", "click", 4, "ngIf"], [1, "template-section"], [1, "template-section-label"], [1, "template-card-display"], [1, "template-card-header"], [1, "template-icon"], ["viewBox", "0 0 24 24", "fill", "none"], ["d", "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z", "stroke", "currentColor", "stroke-width", "1.5"], ["d", "M14 2v6h6M16 13H8M16 17H8M10 9H8", "stroke", "currentColor", "stroke-width", "1.5"], [1, "template-info"], [1, "template-name-display"], [1, "template-type-badge"], [1, "template-content-display"], [1, "template-content-text"], [1, "template-not-found"], ["viewBox", "0 0 24 24", "fill", "none", 1, "not-found-icon"], [1, "not-found-text"], [1, "not-found-title"], [1, "not-found-subtitle"], [1, "message-content-section"], [1, "message-content-label"], [1, "message-content-box"], [1, "message-text"], ["buttonType", "primary", "size", "large", 1, "send-message-btn", 3, "click", "disabled"], ["viewBox", "0 0 24 24", "fill", "none", 1, "whatsapp-icon"], ["d", "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z", "fill", "currentColor"], ["d", "M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z", "fill", "currentColor"]], template: function TransactionModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-modal", 0);
      \u0275\u0275listener("closed", function TransactionModalComponent_Template_app_modal_closed_0_listener() {
        return ctx.onClose();
      });
      \u0275\u0275template(1, TransactionModalComponent_div_1_Template, 11, 5, "div", 1)(2, TransactionModalComponent_div_2_Template, 69, 24, "div", 2)(3, TransactionModalComponent_div_3_Template, 46, 14, "div", 3)(4, TransactionModalComponent_div_4_Template, 15, 5, "div", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "app-dialog", 5);
      \u0275\u0275listener("confirmed", function TransactionModalComponent_Template_app_dialog_confirmed_5_listener() {
        return ctx.confirmCancel();
      })("cancelled", function TransactionModalComponent_Template_app_dialog_cancelled_5_listener() {
        return ctx.showCancelConfirmation = false;
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("visible", ctx.visible)("title", ctx.getModalTitle())("showCloseButton", true);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.currentStep === "search");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.currentStep === "found" && ctx.foundClient);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.currentStep === "new");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.currentStep === "notify");
      \u0275\u0275advance();
      \u0275\u0275property("visible", ctx.showCancelConfirmation)("dismissible", false);
    }
  }, dependencies: [
    CommonModule,
    NgForOf,
    NgIf,
    FormsModule,
    DefaultValueAccessor,
    NumberValueAccessor,
    CheckboxControlValueAccessor,
    RadioControlValueAccessor,
    NgControlStatus,
    MinValidator,
    MaxValidator,
    NgModel,
    ModalComponent,
    ButtonComponent,
    DialogComponent
  ], styles: ['\n\n.input-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #475569;\n  margin-bottom: 0.5rem;\n}\n.search-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n.search-input[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 12px 16px;\n  border: 1px solid #cbd5e1;\n  border-radius: 10px;\n  font-size: 1rem;\n  outline: none;\n  transition: 0.2s;\n}\n.search-input[_ngcontent-%COMP%]:focus {\n  border-color: #16A34A;\n  box-shadow: 0 0 0 3px #dcfce7;\n}\n.search-btn[_ngcontent-%COMP%] {\n  background: #e2e8f0;\n  border: none;\n  padding: 0 16px;\n  border-radius: 10px;\n  cursor: pointer;\n  transition: 0.2s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.search-btn[_ngcontent-%COMP%]:hover {\n  background: #cbd5e1;\n}\n.search-icon[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  color: #64748b;\n}\n.search-hint[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  color: #64748b;\n  font-size: 0.85rem;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.hint-icon[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n.client-card[_ngcontent-%COMP%] {\n  background: #16A34A;\n  color: white;\n  padding: 16px;\n  border-radius: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  margin: 1rem 0 2.5rem 0;\n  animation: _ngcontent-%COMP%_slideDown 0.3s ease;\n}\n.client-card.business-client[_ngcontent-%COMP%] {\n  background: #2563eb;\n}\n.client-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n}\n.client-avatar[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.2);\n  border: 2px solid white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 1.1rem;\n  flex-shrink: 0;\n}\n.client-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.client-name[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 1.1rem;\n}\n.client-bonus-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-top: 4px;\n}\n.client-bonus[_ngcontent-%COMP%] {\n  background: #facc15;\n  color: #713f12;\n  font-size: 0.75rem;\n  font-weight: 700;\n  padding: 4px 10px;\n  border-radius: 20px;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.client-type-badge[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  background: rgba(255, 255, 255, 0.2);\n  padding: 4px 10px;\n  border-radius: 20px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.type-icon[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  color: white;\n}\n.client-tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.client-tag[_ngcontent-%COMP%] {\n  background: rgba(220, 252, 231, 0.9);\n  color: #15803d;\n  font-size: 0.75rem;\n  font-weight: 600;\n  padding: 4px 10px;\n  border-radius: 12px;\n}\n.client-card.business-client[_ngcontent-%COMP%]   .client-tag[_ngcontent-%COMP%] {\n  background: rgba(219, 234, 254, 0.9);\n  color: #1e40af;\n}\n.client-comment[_ngcontent-%COMP%] {\n  background: rgba(220, 252, 231, 0.9);\n  color: #15803d;\n  font-size: 0.8rem;\n  padding: 10px 14px;\n  border-radius: 10px;\n  cursor: pointer;\n  transition: background 0.2s;\n  line-height: 1.4;\n}\n.client-comment[_ngcontent-%COMP%]:hover {\n  background: rgba(220, 252, 231, 1);\n}\n.client-card.business-client[_ngcontent-%COMP%]   .client-comment[_ngcontent-%COMP%] {\n  background: rgba(219, 234, 254, 0.9);\n  color: #1e40af;\n}\n.client-card.business-client[_ngcontent-%COMP%]   .client-comment[_ngcontent-%COMP%]:hover {\n  background: rgba(219, 234, 254, 1);\n}\n.comment-text[_ngcontent-%COMP%] {\n  display: inline;\n}\n.comment-more[_ngcontent-%COMP%], \n.comment-less[_ngcontent-%COMP%] {\n  color: #16A34A;\n  font-weight: 600;\n  margin-left: 4px;\n}\n.star-icon[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n}\n.check-icon[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  opacity: 0.5;\n}\n.alert-box[_ngcontent-%COMP%] {\n  background: #fff7ed;\n  border: 1px solid #fdba74;\n  color: #9a3412;\n  padding: 12px;\n  border-radius: 12px;\n  font-size: 0.9rem;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 1.5rem;\n  animation: _ngcontent-%COMP%_slideDown 0.3s ease;\n}\n.alert-icon[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  flex-shrink: 0;\n}\n.bonus-hint-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 1rem;\n  background:\n    linear-gradient(\n      135deg,\n      #fef3c7 0%,\n      #fde68a 100%);\n  border: 1px solid #fcd34d;\n  border-radius: 12px;\n  margin-bottom: 1.5rem;\n  animation: _ngcontent-%COMP%_slideDown 0.3s ease;\n}\n.bonus-icon[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  color: #d97706;\n  flex-shrink: 0;\n}\n.bonus-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.bonus-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #92400e;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.bonus-value[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #78350f;\n}\n.bonus-value[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #d97706;\n  font-weight: 700;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.form-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 16px;\n  border: 1px solid #cbd5e1;\n  border-radius: 10px;\n  font-size: 1rem;\n  outline: none;\n  transition: 0.2s;\n}\n.form-input[_ngcontent-%COMP%]:focus {\n  border-color: #16A34A;\n  box-shadow: 0 0 0 3px #dcfce7;\n}\n.form-input.disabled[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #64748b;\n}\n.form-input[type=date][_ngcontent-%COMP%] {\n  font-family: inherit;\n  color: #1f2937;\n}\n.form-input[type=date][_ngcontent-%COMP%]::-webkit-calendar-picker-indicator {\n  cursor: pointer;\n  opacity: 0.6;\n}\n.form-input[type=date][_ngcontent-%COMP%]::-webkit-calendar-picker-indicator:hover {\n  opacity: 1;\n}\n.input-hint[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #94a3b8;\n  margin-top: 0.25rem;\n}\n.tags-dropdown[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  background: white;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n}\n.tags-dropdown-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 14px;\n  background: #f8fafc;\n  border-bottom: 1px solid #e2e8f0;\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #64748b;\n}\n.tags-dropdown-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 1.25rem;\n  color: #94a3b8;\n  cursor: pointer;\n  padding: 0;\n  line-height: 1;\n}\n.tags-dropdown-close[_ngcontent-%COMP%]:hover {\n  color: #64748b;\n}\n.tags-dropdown-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  padding: 12px;\n  max-height: 150px;\n  overflow-y: auto;\n}\n.tag-option[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 12px;\n  background: #f0fdf4;\n  border: 1px solid #bbf7d0;\n  border-radius: 20px;\n  font-size: 0.8rem;\n  font-weight: 500;\n  color: #15803d;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.tag-option[_ngcontent-%COMP%]:hover {\n  background: #dcfce7;\n  border-color: #86efac;\n}\n.tag-option.selected[_ngcontent-%COMP%] {\n  background: #16A34A;\n  border-color: #16A34A;\n  color: white;\n}\n.tag-check[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n}\n.form-textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 16px;\n  border: 1px solid #cbd5e1;\n  border-radius: 10px;\n  font-size: 1rem;\n  font-family: inherit;\n  outline: none;\n  transition: 0.2s;\n  resize: vertical;\n  min-height: 80px;\n}\n.form-textarea[_ngcontent-%COMP%]:focus {\n  border-color: #16A34A;\n  box-shadow: 0 0 0 3px #dcfce7;\n}\n.radio-group[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1.5rem;\n}\n.radio-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  font-size: 0.9rem;\n  color: #374151;\n}\n.radio-input[_ngcontent-%COMP%] {\n  display: none;\n}\n.radio-custom[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border: 2px solid #cbd5e1;\n  border-radius: 50%;\n  position: relative;\n  transition: 0.2s;\n}\n.radio-custom[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  width: 10px;\n  height: 10px;\n  background: #16A34A;\n  border-radius: 50%;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(0);\n  transition: 0.2s;\n}\n.radio-input[_ngcontent-%COMP%]:checked    + .radio-custom[_ngcontent-%COMP%] {\n  border-color: #16A34A;\n}\n.radio-input[_ngcontent-%COMP%]:checked    + .radio-custom[_ngcontent-%COMP%]::after {\n  transform: translate(-50%, -50%) scale(1);\n}\n.radio-text[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.use-bonus-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem;\n  background: #f8fafc;\n  border-radius: 12px;\n  margin-bottom: 1rem;\n}\n.toggle-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  cursor: pointer;\n}\n.toggle-checkbox[_ngcontent-%COMP%] {\n  display: none;\n}\n.toggle-switch[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 24px;\n  background: #cbd5e1;\n  border-radius: 12px;\n  position: relative;\n  transition: 0.2s;\n}\n.toggle-switch[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  background: white;\n  border-radius: 50%;\n  top: 2px;\n  left: 2px;\n  transition: 0.2s;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n}\n.toggle-checkbox[_ngcontent-%COMP%]:checked    + .toggle-switch[_ngcontent-%COMP%] {\n  background: #16A34A;\n}\n.toggle-checkbox[_ngcontent-%COMP%]:checked    + .toggle-switch[_ngcontent-%COMP%]::after {\n  left: 22px;\n}\n.toggle-text[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #1f2937;\n}\n.available-bonus[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #16A34A;\n  font-weight: 600;\n}\n.bonus-input-group[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideDown 0.2s ease;\n}\n.bonus-hint[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #64748b;\n  margin-top: 0.5rem;\n}\n.transaction-summary[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border-radius: 12px;\n  padding: 1rem;\n  margin: 1.5rem 0;\n}\n.summary-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.5rem 0;\n}\n.summary-row[_ngcontent-%COMP%]:not(:last-child) {\n  border-bottom: 1px solid #e2e8f0;\n}\n.summary-row.payment-id[_ngcontent-%COMP%] {\n  padding-bottom: 0.75rem;\n  border-bottom: 2px solid #e2e8f0;\n  margin-bottom: 0.5rem;\n}\n.summary-label[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 0.9rem;\n}\n.summary-value[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #1f2937;\n}\n.summary-value.id-value[_ngcontent-%COMP%] {\n  font-family:\n    "Courier New",\n    "Monaco",\n    "Menlo",\n    "Consolas",\n    monospace;\n  font-size: 0.85rem;\n  color: #475569;\n  letter-spacing: 0.5px;\n  background: #f1f5f9;\n  padding: 0.375rem 0.75rem;\n  border-radius: 8px;\n  font-weight: 700;\n  border: 1px solid #e2e8f0;\n}\n.summary-row.discount[_ngcontent-%COMP%]   .summary-value[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.summary-row.total[_ngcontent-%COMP%] {\n  padding-top: 0.75rem;\n}\n.summary-row.total[_ngcontent-%COMP%]   .summary-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #1f2937;\n}\n.summary-row.total[_ngcontent-%COMP%]   .summary-value[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  color: #16A34A;\n}\n.summary-row.earned[_ngcontent-%COMP%]   .summary-value.bonus[_ngcontent-%COMP%] {\n  color: #16A34A;\n}\n.bonus-warning[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  background: #fef3c7;\n  border: 1px solid #fcd34d;\n  border-radius: 8px;\n  padding: 0.75rem;\n  margin-top: 0.75rem;\n  font-size: 0.85rem;\n  color: #92400e;\n}\n.bonus-warning[_ngcontent-%COMP%]   .warning-icon[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  flex-shrink: 0;\n  stroke: #f59e0b;\n}\n.submit-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #16A34A;\n  color: white;\n  padding: 14px;\n  border: none;\n  border-radius: 12px;\n  font-weight: 700;\n  cursor: pointer;\n  font-size: 1rem;\n  transition: 0.2s;\n}\n.submit-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #14532d;\n}\n.submit-btn[_ngcontent-%COMP%]:disabled {\n  background: #94a3b8;\n  cursor: not-allowed;\n}\n.back-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #64748b;\n  cursor: pointer;\n  margin-top: 12px;\n  font-size: 0.85rem;\n  width: 100%;\n  text-align: center;\n  padding: 8px;\n}\n.back-btn[_ngcontent-%COMP%]:hover {\n  color: #16A34A;\n}\n@keyframes _ngcontent-%COMP%_slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.send-message-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n  padding: 0.5rem 0;\n}\n.send-message-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  display: block;\n}\n.send-message-btn[_ngcontent-%COMP%]     button {\n  width: 100% !important;\n  justify-content: center;\n}\n.template-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.template-section-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #475569;\n}\n.template-card-display[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 2px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 1.25rem;\n  transition: all 0.2s;\n}\n.template-card-display[_ngcontent-%COMP%]:hover {\n  border-color: #25D366;\n  box-shadow: 0 2px 8px rgba(37, 211, 102, 0.1);\n}\n.template-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.template-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background:\n    linear-gradient(\n      135deg,\n      #dcfce7 0%,\n      #bbf7d0 100%);\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.template-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  color: #16a34a;\n}\n.template-info[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.template-name-display[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0;\n}\n.template-type-badge[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #64748b;\n  background: #f1f5f9;\n  padding: 0.25rem 0.5rem;\n  border-radius: 6px;\n  display: inline-block;\n  width: fit-content;\n}\n.template-content-display[_ngcontent-%COMP%] {\n  padding-top: 1rem;\n  border-top: 1px solid #e2e8f0;\n}\n.template-content-text[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.9375rem;\n  line-height: 1.6;\n  color: #1f2937;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n}\n.template-not-found[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 1.5rem;\n  background: #fef3c7;\n  border: 1px solid #fcd34d;\n  border-radius: 12px;\n  margin-bottom: 1.5rem;\n}\n.not-found-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  color: #d97706;\n  flex-shrink: 0;\n}\n.not-found-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.not-found-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #92400e;\n}\n.not-found-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #b45309;\n}\n.phone-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.phone-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #475569;\n}\n.phone-display[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 1rem;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n}\n.phone-icon[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  color: #16A34A;\n  flex-shrink: 0;\n}\n.phone-number[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #1f2937;\n  font-family: "Courier New", monospace;\n}\n.message-content-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.message-content-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #475569;\n}\n.message-content-box[_ngcontent-%COMP%] {\n  padding: 1.25rem;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  max-height: 300px;\n  overflow-y: auto;\n}\n.message-text[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.9375rem;\n  line-height: 1.6;\n  color: #1f2937;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n}\n.message-text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:deep(.variable-tag) {\n  color: rgb(22, 158, 163) !important;\n  font-style: italic !important;\n  font-weight: 500 !important;\n  font-family:\n    "Courier New",\n    "Monaco",\n    "Menlo",\n    "Consolas",\n    monospace !important;\n  background: rgba(22, 158, 163, 0.2) !important;\n  padding: 2px 6px !important;\n  border-radius: 4px !important;\n  border: 1px solid rgba(22, 158, 163, 0.3) !important;\n  display: inline !important;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.875rem;\n  padding: 1.25rem 0 0 0;\n  border-top: 2px solid #f1f5f9;\n  margin-top: 0.5rem;\n}\n.btn-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.send-icon[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n}\n.step-notify[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideDown 0.3s ease;\n}\n.notify-actions[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n}\n.send-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  background: #25D366;\n}\n.send-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #128C7E;\n}\n.whatsapp-icon[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n.loading-indicator[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  text-align: center;\n  color: #64748b;\n  font-size: 0.9rem;\n  padding: 0.75rem;\n  background: #f8fafc;\n  border-radius: 8px;\n}\n.payment-method-radio-group[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.payment-method-radio-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  cursor: pointer;\n  font-size: 0.9rem;\n  color: #374151;\n  padding: 0.75rem 1rem;\n  border: 2px solid #e2e8f0;\n  border-radius: 10px;\n  transition: all 0.2s;\n  flex: 1;\n  min-width: 120px;\n  justify-content: center;\n}\n.payment-method-radio-label[_ngcontent-%COMP%]:hover {\n  border-color: #cbd5e1;\n  background: #f8fafc;\n}\n.payment-method-radio-input[_ngcontent-%COMP%] {\n  display: none;\n}\n.payment-method-radio-custom[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  border: 2px solid #cbd5e1;\n  border-radius: 50%;\n  position: relative;\n  transition: 0.2s;\n  flex-shrink: 0;\n}\n.payment-method-radio-custom[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  width: 10px;\n  height: 10px;\n  background: #16A34A;\n  border-radius: 50%;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(0);\n  transition: 0.2s;\n}\n.payment-method-radio-input[_ngcontent-%COMP%]:checked    + .payment-method-radio-custom[_ngcontent-%COMP%] {\n  border-color: #16A34A;\n}\n.payment-method-radio-input[_ngcontent-%COMP%]:checked    + .payment-method-radio-custom[_ngcontent-%COMP%]::after {\n  transform: translate(-50%, -50%) scale(1);\n}\n.payment-method-radio-input[_ngcontent-%COMP%]:checked    ~ .payment-method-radio-text[_ngcontent-%COMP%] {\n  color: #16A34A;\n  font-weight: 600;\n}\n.payment-method-radio-label[_ngcontent-%COMP%]:has(.payment-method-radio-input:checked) {\n  border-color: #16A34A;\n  background: #f0fdf4;\n}\n.payment-method-radio-text[_ngcontent-%COMP%] {\n  font-weight: 500;\n  transition: 0.2s;\n}\n/*# sourceMappingURL=transaction-modal.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TransactionModalComponent, [{
    type: Component,
    args: [{ selector: "app-transaction-modal", standalone: true, imports: [
      CommonModule,
      FormsModule,
      ModalComponent,
      ButtonComponent,
      DialogComponent
    ], template: `
    <app-modal
      [visible]="visible"
      [title]="getModalTitle()"
      [showCloseButton]="true"
      (closed)="onClose()">
      
      <!-- Step 1: Search -->
      <div class="step-search" *ngIf="currentStep === 'search'">
        <label class="input-label">\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430</label>
        <div class="search-row">
          <input
            type="tel"
            class="search-input"
            [(ngModel)]="searchPhone"
            placeholder="8 900 000 00 00"
            [disabled]="isLoading"
            (keypress)="onSearchKeypress($event)">
          <button class="search-btn" (click)="handleSearch()" [disabled]="isLoading">
            <svg viewBox="0 0 24 24" fill="none" class="search-icon">
              <circle cx="11" cy="11" r="8" stroke="currentColor" stroke-width="2"/>
              <path d="M21 21l-4.35-4.35" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>
        </div>
        <div class="search-hint" *ngIf="!isLoading">
          <svg viewBox="0 0 24 24" fill="none" class="hint-icon">
            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"/>
            <path d="M12 16v-4M12 8h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
          \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u043E\u043C\u0435\u0440 \u0434\u043B\u044F \u043F\u043E\u0438\u0441\u043A\u0430 \u0438\u043B\u0438 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u043A\u043B\u0438\u0435\u043D\u0442\u0430
        </div>
        <div class="loading-indicator" *ngIf="isLoading && currentStep === 'search'">
          <span>\u041F\u043E\u0438\u0441\u043A \u043A\u043B\u0438\u0435\u043D\u0442\u0430...</span>
        </div>
      </div>

      <!-- Step 2: Client Found -->
      <div class="step-found" *ngIf="currentStep === 'found' && foundClient">
        <div class="client-card" [class.business-client]="foundClient.type === 'business'">
          <div class="client-card-header">
            <div class="client-avatar">
              {{ getInitials(foundClient.name) }}
            </div>
            <div class="client-info">
              <div class="client-name">{{ foundClient.name }}</div>
              <div class="client-bonus-row">
                <div class="client-bonus">
                  <svg viewBox="0 0 24 24" fill="none" class="star-icon">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor"/>
                  </svg>
                  {{ foundClient.balance }} \u0431\u043E\u043D\u0443\u0441\u043E\u0432
                </div>
                <div class="client-type-badge">
                  <svg viewBox="0 0 24 24" fill="none" class="type-icon">
                    <path *ngIf="foundClient.type === 'business'" d="M20 7h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM10 4h4v3h-4V4z" fill="currentColor"/>
                    <path *ngIf="foundClient.type === 'individual'" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="currentColor"/>
                  </svg>
                  <span>{{ foundClient.type === 'business' ? '\u0411\u0438\u0437\u043D\u0435\u0441' : '\u0418\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u044B\u0439' }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Tags -->
          <div class="client-tags" *ngIf="foundClient.tags && foundClient.tags.length > 0">
            <span class="client-tag" *ngFor="let tag of foundClient.tags">{{ tag }}</span>
          </div>

          <!-- Comment -->
          <div class="client-comment" *ngIf="foundClient.comment" (click)="toggleComment()">
            <span class="comment-text">{{ isCommentExpanded ? foundClient.comment : getTruncatedComment(foundClient.comment) }}</span>
            <span class="comment-more" *ngIf="!isCommentExpanded && foundClient.comment.length > 50">\u0435\u0449\u0451...</span>
            <span class="comment-less" *ngIf="isCommentExpanded">\u0441\u0432\u0435\u0440\u043D\u0443\u0442\u044C</span>
          </div>
        </div>

        <div class="form-group">
          <label class="input-label">\u0421\u0443\u043C\u043C\u0430 \u043F\u043E\u043A\u0443\u043F\u043A\u0438 (\u20B8)</label>
          <input
            type="number"
            class="form-input"
            [(ngModel)]="purchaseAmount"
            placeholder="0.00"
            min="1"
            (input)="onAmountChange()">
        </div>

        <!-- Payment Method Selector -->
        <div class="form-group">
          <label class="input-label">\u0421\u043F\u043E\u0441\u043E\u0431 \u043E\u043F\u043B\u0430\u0442\u044B</label>
          <div class="payment-method-radio-group">
            <label class="payment-method-radio-label">
              <input
                type="radio"
                name="paymentMethod"
                value="CASH"
                [(ngModel)]="selectedPaymentMethod"
                class="payment-method-radio-input">
              <span class="payment-method-radio-custom"></span>
              <span class="payment-method-radio-text">\u041D\u0430\u043B\u0438\u0447\u043D\u044B\u0435</span>
            </label>
            <label class="payment-method-radio-label">
              <input
                type="radio"
                name="paymentMethod"
                value="CARD"
                [(ngModel)]="selectedPaymentMethod"
                class="payment-method-radio-input">
              <span class="payment-method-radio-custom"></span>
              <span class="payment-method-radio-text">\u041A\u0430\u0440\u0442\u0430</span>
            </label>
            <label class="payment-method-radio-label">
              <input
                type="radio"
                name="paymentMethod"
                value="TRANSFER"
                [(ngModel)]="selectedPaymentMethod"
                class="payment-method-radio-input">
              <span class="payment-method-radio-custom"></span>
              <span class="payment-method-radio-text">\u041F\u0435\u0440\u0435\u0432\u043E\u0434</span>
            </label>
          </div>
        </div>

        <!-- Use Bonuses Toggle -->
        <div class="use-bonus-toggle" *ngIf="foundClient && foundClient.balance > 0">
          <label class="toggle-label">
            <input
              type="checkbox"
              [(ngModel)]="useBonuses"
              (change)="onUseBonusesChange()"
              class="toggle-checkbox">
            <span class="toggle-switch"></span>
            <span class="toggle-text">\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0431\u043E\u043D\u0443\u0441\u044B</span>
          </label>
          <span class="available-bonus">\u0414\u043E\u0441\u0442\u0443\u043F\u043D\u043E: {{ foundClient.balance }}</span>
        </div>

        <!-- Bonus Input -->
        <div class="form-group bonus-input-group" *ngIf="useBonuses && foundClient">
          <label class="input-label">\u0421\u043F\u0438\u0441\u0430\u0442\u044C \u0431\u043E\u043D\u0443\u0441\u043E\u0432</label>
          <input
            type="number"
            class="form-input"
            [(ngModel)]="bonusesToUse"
            [max]="getMaxBonuses()"
            min="0"
            (input)="onBonusesChange()"
            placeholder="0">
          <div class="bonus-hint">
            \u041C\u0430\u043A\u0441\u0438\u043C\u0443\u043C: {{ getMaxBonuses() }} \u0431\u043E\u043D\u0443\u0441\u043E\u0432
          </div>
        </div>

        <!-- Summary -->
        <div class="transaction-summary">
          <div class="summary-row payment-id">
            <span class="summary-label">ID \u043F\u043B\u0430\u0442\u0435\u0436\u0430:</span>
            <span class="summary-value id-value">#{{ paymentId || '\u2014' }}</span>
          </div>
          <div class="summary-row">
            <span class="summary-label">\u0421\u0443\u043C\u043C\u0430 \u043F\u043E\u043A\u0443\u043F\u043A\u0438:</span>
            <span class="summary-value">{{ purchaseAmount || 0 }} \u20B8</span>
          </div>
          <div class="summary-row discount" *ngIf="useBonuses && bonusesToUse > 0">
            <span class="summary-label">\u0421\u043A\u0438\u0434\u043A\u0430 \u0431\u043E\u043D\u0443\u0441\u0430\u043C\u0438:</span>
            <span class="summary-value">\u2212{{ bonusesToUse }} \u20B8</span>
          </div>
          <div class="summary-row total">
            <span class="summary-label">\u041A \u043E\u043F\u043B\u0430\u0442\u0435:</span>
            <span class="summary-value">{{ getFinalAmount() }} \u20B8</span>
          </div>
          <div class="summary-row earned" *ngIf="!useBonuses">
            <span class="summary-label">\u0411\u0443\u0434\u0435\u0442 \u043D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u043E:</span>
            <span class="summary-value bonus">+{{ calculatedBonus }} \u0431\u043E\u043D\u0443\u0441\u043E\u0432</span>
          </div>
          <div class="bonus-warning" *ngIf="useBonuses">
            <svg viewBox="0 0 24 24" fill="none" class="warning-icon">
              <path d="M12 9v4M12 17h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" stroke="currentColor" stroke-width="2"/>
            </svg>
            <span>\u041F\u0440\u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0438 \u0431\u043E\u043D\u0443\u0441\u043E\u0432 \u043D\u043E\u0432\u044B\u0435 \u0431\u043E\u043D\u0443\u0441\u044B \u043D\u0435 \u043D\u0430\u0447\u0438\u0441\u043B\u044F\u044E\u0442\u0441\u044F</span>
          </div>
        </div>

        <button class="submit-btn" (click)="completeTransaction()" [disabled]="!purchaseAmount || purchaseAmount <= 0 || isLoading">
          {{ isLoading ? '\u041E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0430...' : '\u041F\u0440\u043E\u0432\u0435\u0441\u0442\u0438 \u0442\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u044E' }}
        </button>

        <button class="back-btn" (click)="goBack()">\u2190 \u041D\u0430\u0437\u0430\u0434 \u043A \u043F\u043E\u0438\u0441\u043A\u0443</button>
      </div>

      <!-- Step 3: New Client -->
      <div class="step-new" *ngIf="currentStep === 'new'">
        <div class="alert-box">
          <svg viewBox="0 0 24 24" fill="none" class="alert-icon">
            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
            <path d="M12 8v4M12 16h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
          \u041A\u043B\u0438\u0435\u043D\u0442 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D. \u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043D\u043E\u0432\u043E\u0433\u043E \u043F\u0440\u043E\u0444\u0438\u043B\u044F.
        </div>
        
        <!-- Welcome Bonus Hint -->
        <div class="bonus-hint-box" *ngIf="welcomeBonusAmount > 0">
          <svg viewBox="0 0 24 24" fill="none" class="bonus-icon">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor"/>
          </svg>
          <div class="bonus-text">
            <span class="bonus-label">\u041F\u0440\u0438\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u0431\u043E\u043D\u0443\u0441</span>
            <span class="bonus-value">\u041A\u043B\u0438\u0435\u043D\u0442 \u043F\u043E\u043B\u0443\u0447\u0438\u0442 <strong>{{ welcomeBonusAmount }}</strong> \u0431\u043E\u043D\u0443\u0441\u043E\u0432 \u043F\u043E\u0441\u043B\u0435 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F</span>
          </div>
        </div>

        <div class="form-group">
          <label class="input-label">\u0422\u0435\u043B\u0435\u0444\u043E\u043D</label>
          <input type="text" class="form-input disabled" [value]="searchPhone" disabled>
        </div>

        <div class="form-group">
          <label class="input-label">{{ newClientType === 'business' ? '\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u043B\u0438\u0435\u043D\u0442\u0430' : '\u0418\u043C\u044F' }}</label>
          <input
            type="text"
            class="form-input"
            [(ngModel)]="newClientName"
            [placeholder]="newClientType === 'business' ? '\u0422\u041E\u041E \xAB\u041A\u043B\u0438\u0435\u043D\u0442\xBB' : '\u0418\u0432\u0430\u043D'">
        </div>

        <div class="form-group" *ngIf="newClientType === 'individual'">
          <label class="input-label">\u0424\u0430\u043C\u0438\u043B\u0438\u044F (\u043D\u0435\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E)</label>
          <input
            type="text"
            class="form-input"
            [(ngModel)]="newClientSurname"
            placeholder="\u0418\u0432\u0430\u043D\u043E\u0432">
        </div>

        <div class="form-group" *ngIf="newClientType === 'individual'">
          <label class="input-label">\u0414\u0430\u0442\u0430 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F (\u043D\u0435\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E)</label>
          <input
            type="date"
            class="form-input"
            [(ngModel)]="newClientBirthday">
        </div>

        <!-- Client Type Radio -->
        <div class="form-group">
          <label class="input-label">\u0422\u0438\u043F \u043A\u043B\u0438\u0435\u043D\u0442\u0430</label>
          <div class="radio-group">
            <label class="radio-label">
              <input
                type="radio"
                name="clientType"
                value="individual"
                [(ngModel)]="newClientType"
                class="radio-input">
              <span class="radio-custom"></span>
              <span class="radio-text">\u0418\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u044B\u0439</span>
            </label>
            <label class="radio-label">
              <input
                type="radio"
                name="clientType"
                value="business"
                [(ngModel)]="newClientType"
                class="radio-input">
              <span class="radio-custom"></span>
              <span class="radio-text">\u0411\u0438\u0437\u043D\u0435\u0441</span>
            </label>
          </div>
        </div>

        <!-- Tags -->
        <div class="form-group">
          <label class="input-label">\u0422\u044D\u0433\u0438</label>
          <input
            type="text"
            class="form-input"
            [(ngModel)]="newClientTags"
            placeholder="VIP, \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u044B\u0439, \u043D\u043E\u0432\u044B\u0439..."
            (focus)="showTagsDropdown = true">
          <div class="input-hint">\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u044D\u0433\u0438 \u0447\u0435\u0440\u0435\u0437 \u0437\u0430\u043F\u044F\u0442\u0443\u044E \u0438\u043B\u0438 \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0438\u0437 \u0441\u043F\u0438\u0441\u043A\u0430</div>
          
          <!-- Tags Dropdown -->
          <div class="tags-dropdown" *ngIf="showTagsDropdown && availableTags.length > 0">
            <div class="tags-dropdown-header">
              <span>\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0442\u044D\u0433\u0438</span>
              <button type="button" class="tags-dropdown-close" (click)="showTagsDropdown = false">\xD7</button>
            </div>
            <div class="tags-dropdown-list">
              <button 
                type="button"
                class="tag-option" 
                *ngFor="let tag of availableTags"
                (click)="addTag(tag)"
                [class.selected]="isTagSelected(tag)">
                {{ tag }}
                <span class="tag-check" *ngIf="isTagSelected(tag)">\u2713</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Comment -->
        <div class="form-group">
          <label class="input-label">\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 (\u043D\u0435\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E)</label>
          <textarea
            class="form-textarea"
            [(ngModel)]="newClientComment"
            placeholder="\u0417\u0430\u043C\u0435\u0442\u043A\u0438 \u043E \u043A\u043B\u0438\u0435\u043D\u0442\u0435..."
            rows="3"></textarea>
        </div>

        <button class="submit-btn" (click)="createClient()" [disabled]="!newClientName || isLoading">
          {{ isLoading ? '\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435...' : '\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043A\u043B\u0438\u0435\u043D\u0442\u0430' }}
        </button>

        <button class="back-btn" (click)="goBack()">\u2190 \u041D\u0430\u0437\u0430\u0434 \u043A \u043F\u043E\u0438\u0441\u043A\u0443</button>
      </div>

      <!-- Step 4: Notify -->
      <div class="step-notify" *ngIf="currentStep === 'notify'">
        <div class="send-message-content">
          <!-- Selected Template -->
          <div class="template-section" *ngIf="selectedWelcomeTemplate">
            <label class="template-section-label">\u0412\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0439 \u0448\u0430\u0431\u043B\u043E\u043D</label>
            <div class="template-card-display">
              <div class="template-card-header">
                <div class="template-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" stroke="currentColor" stroke-width="1.5"/>
                    <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="currentColor" stroke-width="1.5"/>
                  </svg>
                </div>
                <div class="template-info">
                  <h4 class="template-name-display">{{ selectedWelcomeTemplate.name }}</h4>
                  <span class="template-type-badge">{{ selectedWelcomeTemplate.type === 'bonus_accrued' ? '\u041D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u043D\u044B\u0435 \u0431\u043E\u043D\u0443\u0441\u044B' : '\u0421\u0440\u043E\u043A \u0438\u0441\u0442\u0435\u0447\u0435\u043D\u0438\u044F \u0431\u043E\u043D\u0443\u0441\u043E\u0432' }}</span>
                </div>
              </div>
              <div class="template-content-display">
                <p class="template-content-text">{{ selectedWelcomeTemplate.content }}</p>
              </div>
            </div>
          </div>

          <!-- Template Not Found -->
          <div class="template-not-found" *ngIf="!selectedWelcomeTemplate">
            <svg viewBox="0 0 24 24" fill="none" class="not-found-icon">
              <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
              <path d="M12 8v4M12 16h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
            <div class="not-found-text">
              <span class="not-found-title">\u0428\u0430\u0431\u043B\u043E\u043D \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D</span>
              <span class="not-found-subtitle">\u0421\u043E\u0437\u0434\u0430\u0439\u0442\u0435 \u0448\u0430\u0431\u043B\u043E\u043D \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F \u0442\u0438\u043F\u0430 "BASIC_CASHBACK_BONUS_GRANT" \u0432 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430\u0445</span>
            </div>
          </div>

          <!-- Phone Number -->
          <div class="phone-section">
            <label class="phone-label">\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430 \u043F\u043E\u043B\u0443\u0447\u0430\u0442\u0435\u043B\u044F</label>
            <div class="phone-display">
              <svg viewBox="0 0 24 24" fill="none" class="phone-icon">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" stroke-width="1.5"/>
              </svg>
              <span class="phone-number">{{ getPhoneForMessage() }}</span>
            </div>
          </div>

          <!-- Message Content -->
          <div class="message-content-section" *ngIf="selectedWelcomeTemplate">
            <label class="message-content-label">\u0421\u043E\u0434\u0435\u0440\u0436\u0438\u043C\u043E\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F</label>
            <div class="message-content-box">
              <p class="message-text">{{ getFormattedMessage() }}</p>
            </div>
          </div>
        </div>

        <div class="notify-actions">
          <app-button 
            *ngIf="selectedWelcomeTemplate"
            buttonType="primary"  
            size="large"
            class="send-message-btn"
            (click)="sendWelcomeMessage()" 
            [disabled]="isSendingMessage">
            <svg viewBox="0 0 24 24" fill="none" class="whatsapp-icon">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" fill="currentColor"/>
              <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" fill="currentColor"/>
            </svg>
            {{ isSendingMessage ? '\u041E\u0442\u043F\u0440\u0430\u0432\u043A\u0430...' : '\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0432 WhatsApp' }}
          </app-button>
        </div>
      </div>
    </app-modal>

    <!-- Confirmation Dialog - Outside main modal for proper z-index -->
    <app-dialog
      [visible]="showCancelConfirmation"
      title="\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u0435"
      message="\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B, \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u043E\u0442\u043C\u0435\u043D\u0438\u0442\u044C \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043F\u043B\u0430\u0442\u0435\u0436\u0430? \u0427\u0435\u0440\u043D\u043E\u0432\u0438\u043A \u043F\u043B\u0430\u0442\u0435\u0436\u0430 \u0431\u0443\u0434\u0435\u0442 \u0443\u0434\u0430\u043B\u0435\u043D."
      confirmLabel="\u0414\u0430, \u043E\u0442\u043C\u0435\u043D\u0438\u0442\u044C"
      cancelLabel="\u041D\u0435\u0442"
      [dismissible]="false"
      (confirmed)="confirmCancel()"
      (cancelled)="showCancelConfirmation = false">
    </app-dialog>
  `, styles: ['/* angular:styles/component:css;547697b7735c2a8a60bf1dc10651a1709d8cc2802f408048ac78310138e3d0d5;/Users/baglan/repo/westwood/westwood-frontend/src/app/shared/components/transaction-modal/transaction-modal.component.ts */\n.input-label {\n  display: block;\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #475569;\n  margin-bottom: 0.5rem;\n}\n.search-row {\n  display: flex;\n  gap: 10px;\n}\n.search-input {\n  flex: 1;\n  padding: 12px 16px;\n  border: 1px solid #cbd5e1;\n  border-radius: 10px;\n  font-size: 1rem;\n  outline: none;\n  transition: 0.2s;\n}\n.search-input:focus {\n  border-color: #16A34A;\n  box-shadow: 0 0 0 3px #dcfce7;\n}\n.search-btn {\n  background: #e2e8f0;\n  border: none;\n  padding: 0 16px;\n  border-radius: 10px;\n  cursor: pointer;\n  transition: 0.2s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.search-btn:hover {\n  background: #cbd5e1;\n}\n.search-icon {\n  width: 20px;\n  height: 20px;\n  color: #64748b;\n}\n.search-hint {\n  margin-top: 1rem;\n  color: #64748b;\n  font-size: 0.85rem;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.hint-icon {\n  width: 16px;\n  height: 16px;\n}\n.client-card {\n  background: #16A34A;\n  color: white;\n  padding: 16px;\n  border-radius: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  margin: 1rem 0 2.5rem 0;\n  animation: slideDown 0.3s ease;\n}\n.client-card.business-client {\n  background: #2563eb;\n}\n.client-card-header {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n}\n.client-avatar {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.2);\n  border: 2px solid white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 1.1rem;\n  flex-shrink: 0;\n}\n.client-info {\n  flex: 1;\n}\n.client-name {\n  font-weight: 700;\n  font-size: 1.1rem;\n}\n.client-bonus-row {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-top: 4px;\n}\n.client-bonus {\n  background: #facc15;\n  color: #713f12;\n  font-size: 0.75rem;\n  font-weight: 700;\n  padding: 4px 10px;\n  border-radius: 20px;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.client-type-badge {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  background: rgba(255, 255, 255, 0.2);\n  padding: 4px 10px;\n  border-radius: 20px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.type-icon {\n  width: 14px;\n  height: 14px;\n  color: white;\n}\n.client-tags {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.client-tag {\n  background: rgba(220, 252, 231, 0.9);\n  color: #15803d;\n  font-size: 0.75rem;\n  font-weight: 600;\n  padding: 4px 10px;\n  border-radius: 12px;\n}\n.client-card.business-client .client-tag {\n  background: rgba(219, 234, 254, 0.9);\n  color: #1e40af;\n}\n.client-comment {\n  background: rgba(220, 252, 231, 0.9);\n  color: #15803d;\n  font-size: 0.8rem;\n  padding: 10px 14px;\n  border-radius: 10px;\n  cursor: pointer;\n  transition: background 0.2s;\n  line-height: 1.4;\n}\n.client-comment:hover {\n  background: rgba(220, 252, 231, 1);\n}\n.client-card.business-client .client-comment {\n  background: rgba(219, 234, 254, 0.9);\n  color: #1e40af;\n}\n.client-card.business-client .client-comment:hover {\n  background: rgba(219, 234, 254, 1);\n}\n.comment-text {\n  display: inline;\n}\n.comment-more,\n.comment-less {\n  color: #16A34A;\n  font-weight: 600;\n  margin-left: 4px;\n}\n.star-icon {\n  width: 12px;\n  height: 12px;\n}\n.check-icon {\n  width: 24px;\n  height: 24px;\n  opacity: 0.5;\n}\n.alert-box {\n  background: #fff7ed;\n  border: 1px solid #fdba74;\n  color: #9a3412;\n  padding: 12px;\n  border-radius: 12px;\n  font-size: 0.9rem;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 1.5rem;\n  animation: slideDown 0.3s ease;\n}\n.alert-icon {\n  width: 20px;\n  height: 20px;\n  flex-shrink: 0;\n}\n.bonus-hint-box {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 1rem;\n  background:\n    linear-gradient(\n      135deg,\n      #fef3c7 0%,\n      #fde68a 100%);\n  border: 1px solid #fcd34d;\n  border-radius: 12px;\n  margin-bottom: 1.5rem;\n  animation: slideDown 0.3s ease;\n}\n.bonus-icon {\n  width: 32px;\n  height: 32px;\n  color: #d97706;\n  flex-shrink: 0;\n}\n.bonus-text {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.bonus-label {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #92400e;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.bonus-value {\n  font-size: 0.9rem;\n  color: #78350f;\n}\n.bonus-value strong {\n  color: #d97706;\n  font-weight: 700;\n}\n.form-group {\n  margin-bottom: 1rem;\n}\n.form-input {\n  width: 100%;\n  padding: 12px 16px;\n  border: 1px solid #cbd5e1;\n  border-radius: 10px;\n  font-size: 1rem;\n  outline: none;\n  transition: 0.2s;\n}\n.form-input:focus {\n  border-color: #16A34A;\n  box-shadow: 0 0 0 3px #dcfce7;\n}\n.form-input.disabled {\n  background: #f1f5f9;\n  color: #64748b;\n}\n.form-input[type=date] {\n  font-family: inherit;\n  color: #1f2937;\n}\n.form-input[type=date]::-webkit-calendar-picker-indicator {\n  cursor: pointer;\n  opacity: 0.6;\n}\n.form-input[type=date]::-webkit-calendar-picker-indicator:hover {\n  opacity: 1;\n}\n.input-hint {\n  font-size: 0.75rem;\n  color: #94a3b8;\n  margin-top: 0.25rem;\n}\n.tags-dropdown {\n  margin-top: 8px;\n  background: white;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n}\n.tags-dropdown-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 14px;\n  background: #f8fafc;\n  border-bottom: 1px solid #e2e8f0;\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #64748b;\n}\n.tags-dropdown-close {\n  background: none;\n  border: none;\n  font-size: 1.25rem;\n  color: #94a3b8;\n  cursor: pointer;\n  padding: 0;\n  line-height: 1;\n}\n.tags-dropdown-close:hover {\n  color: #64748b;\n}\n.tags-dropdown-list {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  padding: 12px;\n  max-height: 150px;\n  overflow-y: auto;\n}\n.tag-option {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 12px;\n  background: #f0fdf4;\n  border: 1px solid #bbf7d0;\n  border-radius: 20px;\n  font-size: 0.8rem;\n  font-weight: 500;\n  color: #15803d;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.tag-option:hover {\n  background: #dcfce7;\n  border-color: #86efac;\n}\n.tag-option.selected {\n  background: #16A34A;\n  border-color: #16A34A;\n  color: white;\n}\n.tag-check {\n  font-size: 0.7rem;\n}\n.form-textarea {\n  width: 100%;\n  padding: 12px 16px;\n  border: 1px solid #cbd5e1;\n  border-radius: 10px;\n  font-size: 1rem;\n  font-family: inherit;\n  outline: none;\n  transition: 0.2s;\n  resize: vertical;\n  min-height: 80px;\n}\n.form-textarea:focus {\n  border-color: #16A34A;\n  box-shadow: 0 0 0 3px #dcfce7;\n}\n.radio-group {\n  display: flex;\n  gap: 1.5rem;\n}\n.radio-label {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  font-size: 0.9rem;\n  color: #374151;\n}\n.radio-input {\n  display: none;\n}\n.radio-custom {\n  width: 20px;\n  height: 20px;\n  border: 2px solid #cbd5e1;\n  border-radius: 50%;\n  position: relative;\n  transition: 0.2s;\n}\n.radio-custom::after {\n  content: "";\n  position: absolute;\n  width: 10px;\n  height: 10px;\n  background: #16A34A;\n  border-radius: 50%;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(0);\n  transition: 0.2s;\n}\n.radio-input:checked + .radio-custom {\n  border-color: #16A34A;\n}\n.radio-input:checked + .radio-custom::after {\n  transform: translate(-50%, -50%) scale(1);\n}\n.radio-text {\n  font-weight: 500;\n}\n.use-bonus-toggle {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem;\n  background: #f8fafc;\n  border-radius: 12px;\n  margin-bottom: 1rem;\n}\n.toggle-label {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  cursor: pointer;\n}\n.toggle-checkbox {\n  display: none;\n}\n.toggle-switch {\n  width: 44px;\n  height: 24px;\n  background: #cbd5e1;\n  border-radius: 12px;\n  position: relative;\n  transition: 0.2s;\n}\n.toggle-switch::after {\n  content: "";\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  background: white;\n  border-radius: 50%;\n  top: 2px;\n  left: 2px;\n  transition: 0.2s;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n}\n.toggle-checkbox:checked + .toggle-switch {\n  background: #16A34A;\n}\n.toggle-checkbox:checked + .toggle-switch::after {\n  left: 22px;\n}\n.toggle-text {\n  font-weight: 500;\n  color: #1f2937;\n}\n.available-bonus {\n  font-size: 0.85rem;\n  color: #16A34A;\n  font-weight: 600;\n}\n.bonus-input-group {\n  animation: slideDown 0.2s ease;\n}\n.bonus-hint {\n  font-size: 0.8rem;\n  color: #64748b;\n  margin-top: 0.5rem;\n}\n.transaction-summary {\n  background: #f8fafc;\n  border-radius: 12px;\n  padding: 1rem;\n  margin: 1.5rem 0;\n}\n.summary-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.5rem 0;\n}\n.summary-row:not(:last-child) {\n  border-bottom: 1px solid #e2e8f0;\n}\n.summary-row.payment-id {\n  padding-bottom: 0.75rem;\n  border-bottom: 2px solid #e2e8f0;\n  margin-bottom: 0.5rem;\n}\n.summary-label {\n  color: #64748b;\n  font-size: 0.9rem;\n}\n.summary-value {\n  font-weight: 600;\n  color: #1f2937;\n}\n.summary-value.id-value {\n  font-family:\n    "Courier New",\n    "Monaco",\n    "Menlo",\n    "Consolas",\n    monospace;\n  font-size: 0.85rem;\n  color: #475569;\n  letter-spacing: 0.5px;\n  background: #f1f5f9;\n  padding: 0.375rem 0.75rem;\n  border-radius: 8px;\n  font-weight: 700;\n  border: 1px solid #e2e8f0;\n}\n.summary-row.discount .summary-value {\n  color: #dc2626;\n}\n.summary-row.total {\n  padding-top: 0.75rem;\n}\n.summary-row.total .summary-label {\n  font-weight: 600;\n  color: #1f2937;\n}\n.summary-row.total .summary-value {\n  font-size: 1.25rem;\n  color: #16A34A;\n}\n.summary-row.earned .summary-value.bonus {\n  color: #16A34A;\n}\n.bonus-warning {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  background: #fef3c7;\n  border: 1px solid #fcd34d;\n  border-radius: 8px;\n  padding: 0.75rem;\n  margin-top: 0.75rem;\n  font-size: 0.85rem;\n  color: #92400e;\n}\n.bonus-warning .warning-icon {\n  width: 18px;\n  height: 18px;\n  flex-shrink: 0;\n  stroke: #f59e0b;\n}\n.submit-btn {\n  width: 100%;\n  background: #16A34A;\n  color: white;\n  padding: 14px;\n  border: none;\n  border-radius: 12px;\n  font-weight: 700;\n  cursor: pointer;\n  font-size: 1rem;\n  transition: 0.2s;\n}\n.submit-btn:hover:not(:disabled) {\n  background: #14532d;\n}\n.submit-btn:disabled {\n  background: #94a3b8;\n  cursor: not-allowed;\n}\n.back-btn {\n  background: none;\n  border: none;\n  color: #64748b;\n  cursor: pointer;\n  margin-top: 12px;\n  font-size: 0.85rem;\n  width: 100%;\n  text-align: center;\n  padding: 8px;\n}\n.back-btn:hover {\n  color: #16A34A;\n}\n@keyframes slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.send-message-content {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n  padding: 0.5rem 0;\n}\n.send-message-btn {\n  width: 100%;\n  display: block;\n}\n.send-message-btn ::ng-deep button {\n  width: 100% !important;\n  justify-content: center;\n}\n.template-section {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.template-section-label {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #475569;\n}\n.template-card-display {\n  background: #f8fafc;\n  border: 2px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 1.25rem;\n  transition: all 0.2s;\n}\n.template-card-display:hover {\n  border-color: #25D366;\n  box-shadow: 0 2px 8px rgba(37, 211, 102, 0.1);\n}\n.template-card-header {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.template-icon {\n  width: 40px;\n  height: 40px;\n  background:\n    linear-gradient(\n      135deg,\n      #dcfce7 0%,\n      #bbf7d0 100%);\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.template-icon svg {\n  width: 20px;\n  height: 20px;\n  color: #16a34a;\n}\n.template-info {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.template-name-display {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0;\n}\n.template-type-badge {\n  font-size: 0.75rem;\n  color: #64748b;\n  background: #f1f5f9;\n  padding: 0.25rem 0.5rem;\n  border-radius: 6px;\n  display: inline-block;\n  width: fit-content;\n}\n.template-content-display {\n  padding-top: 1rem;\n  border-top: 1px solid #e2e8f0;\n}\n.template-content-text {\n  margin: 0;\n  font-size: 0.9375rem;\n  line-height: 1.6;\n  color: #1f2937;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n}\n.template-not-found {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 1.5rem;\n  background: #fef3c7;\n  border: 1px solid #fcd34d;\n  border-radius: 12px;\n  margin-bottom: 1.5rem;\n}\n.not-found-icon {\n  width: 40px;\n  height: 40px;\n  color: #d97706;\n  flex-shrink: 0;\n}\n.not-found-text {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.not-found-title {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #92400e;\n}\n.not-found-subtitle {\n  font-size: 0.875rem;\n  color: #b45309;\n}\n.phone-section {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.phone-label {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #475569;\n}\n.phone-display {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 1rem;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n}\n.phone-icon {\n  width: 20px;\n  height: 20px;\n  color: #16A34A;\n  flex-shrink: 0;\n}\n.phone-number {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #1f2937;\n  font-family: "Courier New", monospace;\n}\n.message-content-section {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.message-content-label {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #475569;\n}\n.message-content-box {\n  padding: 1.25rem;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  max-height: 300px;\n  overflow-y: auto;\n}\n.message-text {\n  margin: 0;\n  font-size: 0.9375rem;\n  line-height: 1.6;\n  color: #1f2937;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n}\n.message-text :deep(.variable-tag) {\n  color: rgb(22, 158, 163) !important;\n  font-style: italic !important;\n  font-weight: 500 !important;\n  font-family:\n    "Courier New",\n    "Monaco",\n    "Menlo",\n    "Consolas",\n    monospace !important;\n  background: rgba(22, 158, 163, 0.2) !important;\n  padding: 2px 6px !important;\n  border-radius: 4px !important;\n  border: 1px solid rgba(22, 158, 163, 0.3) !important;\n  display: inline !important;\n}\n.modal-footer {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.875rem;\n  padding: 1.25rem 0 0 0;\n  border-top: 2px solid #f1f5f9;\n  margin-top: 0.5rem;\n}\n.btn-content {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.send-icon {\n  width: 18px;\n  height: 18px;\n}\n.step-notify {\n  animation: slideDown 0.3s ease;\n}\n.notify-actions {\n  margin-top: 1.5rem;\n}\n.send-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  background: #25D366;\n}\n.send-btn:hover:not(:disabled) {\n  background: #128C7E;\n}\n.whatsapp-icon {\n  width: 20px;\n  height: 20px;\n}\n.loading-indicator {\n  margin-top: 1rem;\n  text-align: center;\n  color: #64748b;\n  font-size: 0.9rem;\n  padding: 0.75rem;\n  background: #f8fafc;\n  border-radius: 8px;\n}\n.payment-method-radio-group {\n  display: flex;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.payment-method-radio-label {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  cursor: pointer;\n  font-size: 0.9rem;\n  color: #374151;\n  padding: 0.75rem 1rem;\n  border: 2px solid #e2e8f0;\n  border-radius: 10px;\n  transition: all 0.2s;\n  flex: 1;\n  min-width: 120px;\n  justify-content: center;\n}\n.payment-method-radio-label:hover {\n  border-color: #cbd5e1;\n  background: #f8fafc;\n}\n.payment-method-radio-input {\n  display: none;\n}\n.payment-method-radio-custom {\n  width: 18px;\n  height: 18px;\n  border: 2px solid #cbd5e1;\n  border-radius: 50%;\n  position: relative;\n  transition: 0.2s;\n  flex-shrink: 0;\n}\n.payment-method-radio-custom::after {\n  content: "";\n  position: absolute;\n  width: 10px;\n  height: 10px;\n  background: #16A34A;\n  border-radius: 50%;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(0);\n  transition: 0.2s;\n}\n.payment-method-radio-input:checked + .payment-method-radio-custom {\n  border-color: #16A34A;\n}\n.payment-method-radio-input:checked + .payment-method-radio-custom::after {\n  transform: translate(-50%, -50%) scale(1);\n}\n.payment-method-radio-input:checked ~ .payment-method-radio-text {\n  color: #16A34A;\n  font-weight: 600;\n}\n.payment-method-radio-label:has(.payment-method-radio-input:checked) {\n  border-color: #16A34A;\n  background: #f0fdf4;\n}\n.payment-method-radio-text {\n  font-weight: 500;\n  transition: 0.2s;\n}\n/*# sourceMappingURL=transaction-modal.component.css.map */\n'] }]
  }], null, { visible: [{
    type: Input
  }], welcomeMessageTemplates: [{
    type: Input
  }], visibleChange: [{
    type: Output
  }], transactionComplete: [{
    type: Output
  }], messageSent: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TransactionModalComponent, { className: "TransactionModalComponent", filePath: "src/app/shared/components/transaction-modal/transaction-modal.component.ts", lineNumber: 1494 });
})();

// src/app/layouts/main-layout/main-layout.component.ts
var _c03 = ["sidebar"];
var _c12 = ["*"];
var MainLayoutComponent = class _MainLayoutComponent {
  sidebar;
  isSidebarCollapsed = false;
  isSidebarClosed = false;
  transactionModalService = inject(TransactionModalService);
  welcomeMessageTemplates = [];
  ngOnInit() {
    this.loadWelcomeMessageTemplates();
  }
  onSidebarCollapsed(collapsed) {
    this.isSidebarCollapsed = collapsed;
  }
  onSidebarClosed(closed) {
    this.isSidebarClosed = closed;
  }
  onMobileMenuClick() {
    if (this.sidebar) {
      this.sidebar.openSidebar();
    }
  }
  onTransactionComplete(result) {
    console.log("Transaction completed:", result);
    this.transactionModalService.emitTransactionComplete(result);
  }
  onMessageSent(event) {
    console.log("Message sent:", event);
    const encodedMessage = encodeURIComponent(event.message);
    const whatsappUrl = `https://wa.me/${event.phone.replace(/\D/g, "")}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  }
  loadWelcomeMessageTemplates() {
    try {
      const templatesJson = localStorage.getItem("whatsapp_message_templates");
      if (templatesJson) {
        const templates = JSON.parse(templatesJson);
        this.welcomeMessageTemplates = templates.map((t) => __spreadProps(__spreadValues({}, t), {
          createdAt: new Date(t.createdAt)
        }));
      } else {
        this.welcomeMessageTemplates = [{
          id: "default",
          name: "\u041F\u0440\u0438\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435",
          type: "bonus_accrued",
          content: "\u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C, {clientName}! \u0421\u043F\u0430\u0441\u0438\u0431\u043E \u0437\u0430 \u043F\u043E\u043A\u0443\u043F\u043A\u0443. \u0412\u0430\u043C \u043D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u043E {clientBonus} \u0431\u043E\u043D\u0443\u0441\u043E\u0432.",
          createdAt: /* @__PURE__ */ new Date()
        }];
      }
    } catch (e) {
      console.error("Failed to load templates", e);
      this.welcomeMessageTemplates = [];
    }
  }
  getHeaderMarginLeft() {
    if (this.isSidebarClosed && window.innerWidth < 769) {
      return 0;
    }
    if (this.isSidebarClosed) {
      return 64;
    }
    return this.isSidebarCollapsed ? 64 : 240;
  }
  static \u0275fac = function MainLayoutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MainLayoutComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MainLayoutComponent, selectors: [["app-main-layout"]], viewQuery: function MainLayoutComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c03, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sidebar = _t.first);
    }
  }, ngContentSelectors: _c12, decls: 10, vars: 5, consts: [["sidebar", ""], [1, "main-layout"], [3, "menuClick", "logoText"], [3, "collapsedChange", "closedChange"], [1, "main-content-wrapper"], [1, "main-content"], [3, "visibleChange", "transactionComplete", "messageSent", "visible", "welcomeMessageTemplates"]], template: function MainLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275projectionDef();
      \u0275\u0275elementStart(0, "div", 1)(1, "app-mobile-header", 2);
      \u0275\u0275listener("menuClick", function MainLayoutComponent_Template_app_mobile_header_menuClick_1_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onMobileMenuClick());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "app-sidebar", 3, 0);
      \u0275\u0275listener("collapsedChange", function MainLayoutComponent_Template_app_sidebar_collapsedChange_2_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSidebarCollapsed($event));
      })("closedChange", function MainLayoutComponent_Template_app_sidebar_closedChange_2_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSidebarClosed($event));
      });
      \u0275\u0275elementStart(4, "div", 4);
      \u0275\u0275element(5, "app-page-header");
      \u0275\u0275elementStart(6, "main", 5);
      \u0275\u0275projection(7);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(8, "app-transaction-modal", 6);
      \u0275\u0275pipe(9, "async");
      \u0275\u0275listener("visibleChange", function MainLayoutComponent_Template_app_transaction_modal_visibleChange_8_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.transactionModalService.close());
      })("transactionComplete", function MainLayoutComponent_Template_app_transaction_modal_transactionComplete_8_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onTransactionComplete($event));
      })("messageSent", function MainLayoutComponent_Template_app_transaction_modal_messageSent_8_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onMessageSent($event));
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_2_0;
      \u0275\u0275advance();
      \u0275\u0275property("logoText", "WestWood");
      \u0275\u0275advance(7);
      \u0275\u0275property("visible", (tmp_2_0 = \u0275\u0275pipeBind1(9, 3, ctx.transactionModalService.visible$)) !== null && tmp_2_0 !== void 0 ? tmp_2_0 : false)("welcomeMessageTemplates", ctx.welcomeMessageTemplates);
    }
  }, dependencies: [CommonModule, AsyncPipe, SidebarComponent, PageHeaderComponent, MobileHeaderComponent, TransactionModalComponent], styles: ["\n\n.main-layout[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  overflow-x: hidden;\n  width: 100%;\n}\n.main-content-wrapper[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  padding: 0 2rem;\n  background-color: #f9fafb;\n}\napp-page-header[_ngcontent-%COMP%] {\n  display: block;\n  background-color: #f9fafb;\n}\n.main-content[_ngcontent-%COMP%] {\n  flex: 1;\n  background-color: #f9fafb;\n}\n@media (max-width: 768px) {\n  .main-content-wrapper[_ngcontent-%COMP%] {\n    padding: 0 1rem;\n    padding-top: 80px;\n  }\n  app-page-header[_ngcontent-%COMP%] {\n    padding-top: 0.5rem;\n  }\n}\n/*# sourceMappingURL=main-layout.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MainLayoutComponent, [{
    type: Component,
    args: [{ selector: "app-main-layout", standalone: true, imports: [CommonModule, SidebarComponent, PageHeaderComponent, MobileHeaderComponent, TransactionModalComponent], template: `
    <div class="main-layout">
      <!-- Mobile Header (only visible on mobile) -->
      <app-mobile-header 
        [logoText]="'WestWood'"
        (menuClick)="onMobileMenuClick()">
      </app-mobile-header>
      
      <app-sidebar #sidebar (collapsedChange)="onSidebarCollapsed($event)" (closedChange)="onSidebarClosed($event)">
        <div class="main-content-wrapper">
          <app-page-header></app-page-header>
          <main class="main-content">
            <ng-content></ng-content>
          </main>
        </div>
      </app-sidebar>
    </div>

    <!-- Global Transaction Modal -->
    <app-transaction-modal
      [visible]="(transactionModalService.visible$ | async) ?? false"
      [welcomeMessageTemplates]="welcomeMessageTemplates"
      (visibleChange)="transactionModalService.close()"
      (transactionComplete)="onTransactionComplete($event)"
      (messageSent)="onMessageSent($event)">
    </app-transaction-modal>
  `, styles: ["/* angular:styles/component:css;35cd209d3ea9c00e3db2cd8d2e0c14d380f23081f75a063d89b2fa92b4d6f1cd;/Users/baglan/repo/westwood/westwood-frontend/src/app/layouts/main-layout/main-layout.component.ts */\n.main-layout {\n  min-height: 100vh;\n  display: flex;\n  overflow-x: hidden;\n  width: 100%;\n}\n.main-content-wrapper {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  padding: 0 2rem;\n  background-color: #f9fafb;\n}\napp-page-header {\n  display: block;\n  background-color: #f9fafb;\n}\n.main-content {\n  flex: 1;\n  background-color: #f9fafb;\n}\n@media (max-width: 768px) {\n  .main-content-wrapper {\n    padding: 0 1rem;\n    padding-top: 80px;\n  }\n  app-page-header {\n    padding-top: 0.5rem;\n  }\n}\n/*# sourceMappingURL=main-layout.component.css.map */\n"] }]
  }], null, { sidebar: [{
    type: ViewChild,
    args: ["sidebar"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MainLayoutComponent, { className: "MainLayoutComponent", filePath: "src/app/layouts/main-layout/main-layout.component.ts", lineNumber: 80 });
})();

// src/app/core/services/user-activity.service.ts
var UserActivityService = class _UserActivityService {
  usersService;
  heartbeatInterval = null;
  HEARTBEAT_INTERVAL_MS = 6e4;
  // 1 minute
  constructor(usersService) {
    this.usersService = usersService;
  }
  /**
   * Start sending periodic heartbeat
   */
  startHeartbeat() {
    if (this.heartbeatInterval) {
      return;
    }
    this.sendHeartbeat();
    this.heartbeatInterval = interval(this.HEARTBEAT_INTERVAL_MS).pipe(tap(() => this.sendHeartbeat()), catchError((error) => {
      console.error("Error in heartbeat interval:", error);
      return of(null);
    })).subscribe();
  }
  /**
   * Stop sending periodic heartbeat
   */
  stopHeartbeat() {
    if (this.heartbeatInterval) {
      this.heartbeatInterval.unsubscribe();
      this.heartbeatInterval = null;
    }
  }
  /**
   * Send heartbeat to server
   */
  sendHeartbeat() {
    this.usersService.updateHeartbeat().pipe(catchError((error) => {
      return of(null);
    })).subscribe();
  }
  ngOnDestroy() {
    this.stopHeartbeat();
  }
  static \u0275fac = function UserActivityService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserActivityService)(\u0275\u0275inject(UsersService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UserActivityService, factory: _UserActivityService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserActivityService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: UsersService }], null);
})();

// src/app/layouts/main-layout-wrapper/main-layout-wrapper.component.ts
var MainLayoutWrapperComponent = class _MainLayoutWrapperComponent {
  router = inject(Router);
  store = inject(Store);
  userActivityService = inject(UserActivityService);
  destroy$ = new Subject();
  ngOnInit() {
    this.store.select(selectIsAuthenticated).pipe(takeUntil(this.destroy$)).subscribe((isAuthenticated) => {
      if (isAuthenticated) {
        this.userActivityService.startHeartbeat();
      } else {
        this.userActivityService.stopHeartbeat();
      }
    });
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd), takeUntil(this.destroy$)).subscribe(() => {
      setTimeout(() => {
        const sidebarContent = document.querySelector(".sidebar-content");
        if (sidebarContent) {
          sidebarContent.scrollTop = 0;
        }
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      }, 0);
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    this.userActivityService.stopHeartbeat();
  }
  static \u0275fac = function MainLayoutWrapperComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MainLayoutWrapperComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MainLayoutWrapperComponent, selectors: [["app-main-layout-wrapper"]], decls: 2, vars: 0, template: function MainLayoutWrapperComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-main-layout");
      \u0275\u0275element(1, "router-outlet");
      \u0275\u0275elementEnd();
    }
  }, dependencies: [RouterOutlet, MainLayoutComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MainLayoutWrapperComponent, [{
    type: Component,
    args: [{
      selector: "app-main-layout-wrapper",
      standalone: true,
      imports: [RouterOutlet, MainLayoutComponent],
      template: `
    <app-main-layout>
      <router-outlet></router-outlet>
    </app-main-layout>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MainLayoutWrapperComponent, { className: "MainLayoutWrapperComponent", filePath: "src/app/layouts/main-layout-wrapper/main-layout-wrapper.component.ts", lineNumber: 21 });
})();
export {
  MainLayoutWrapperComponent
};
//# sourceMappingURL=chunk-XV2I7TPG.js.map
