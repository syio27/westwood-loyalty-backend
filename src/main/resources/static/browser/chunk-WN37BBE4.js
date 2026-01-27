import {
  PaginatedTableWrapperComponent
} from "./chunk-CW5RRJN6.js";
import "./chunk-ACJ3P3PZ.js";
import {
  UsersService
} from "./chunk-K4OZ67OM.js";
import {
  PhoneFormatPipe
} from "./chunk-2SOXI6WJ.js";
import {
  BadgeComponent
} from "./chunk-I22BZ6HB.js";
import {
  LoaderComponent
} from "./chunk-3G3AASW4.js";
import {
  ModalComponent,
  PageHeaderService
} from "./chunk-EWJYX3AR.js";
import "./chunk-6FFMNYG3.js";
import {
  ToastService
} from "./chunk-PIRIPCUZ.js";
import {
  ButtonComponent,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-FWOTYYMW.js";
import {
  Store,
  selectUserId
} from "./chunk-TXMBCBB4.js";
import "./chunk-6F7JLQXK.js";
import {
  CommonModule,
  Component,
  NgForOf,
  NgIf,
  RouterLink,
  RouterModule,
  Subject,
  inject,
  interval,
  setClassMetadata,
  takeUntil,
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
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-THV7WX37.js";

// src/app/features/users/pages/users-page/users-page.component.ts
function UsersPageComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275element(1, "app-loader", 43);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("visible", true)("overlay", false);
  }
}
function UsersPageComponent_div_3_tr_25_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const user_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatLastSeen(ctx_r1.getUserStatus(user_r3.id).lastSeenAt), " ");
  }
}
function UsersPageComponent_div_3_tr_25_ng_container_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "app-button", 72);
    \u0275\u0275listener("onClick", function UsersPageComponent_div_3_tr_25_ng_container_29_Template_app_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r4);
      const user_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onLockClick(user_r3));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 32);
    \u0275\u0275element(3, "rect", 73)(4, "path", 74);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
}
function UsersPageComponent_div_3_tr_25_ng_container_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "app-button", 75);
    \u0275\u0275listener("onClick", function UsersPageComponent_div_3_tr_25_ng_container_30_Template_app_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r5);
      const user_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDeleteClick(user_r3));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 32);
    \u0275\u0275element(3, "path", 76)(4, "path", 77);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "app-button", 78);
    \u0275\u0275listener("onClick", function UsersPageComponent_div_3_tr_25_ng_container_30_Template_app_button_onClick_5_listener() {
      \u0275\u0275restoreView(_r5);
      const user_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.activateUser(user_r3));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 32);
    \u0275\u0275element(7, "path", 79);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
}
function UsersPageComponent_div_3_tr_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 55)(3, "a", 56)(4, "span", 57);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(6, "td")(7, "span", 58);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td")(10, "app-badge", 59);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td")(13, "div", 60)(14, "div", 61);
    \u0275\u0275element(15, "span", 62);
    \u0275\u0275elementStart(16, "span", 63);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(18, UsersPageComponent_div_3_tr_25_div_18_Template, 2, 1, "div", 64);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "td")(20, "span", 65);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "td")(23, "div", 66)(24, "a", 67)(25, "app-button", 68);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(26, "svg", 32);
    \u0275\u0275element(27, "path", 69)(28, "circle", 70);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(29, UsersPageComponent_div_3_tr_25_ng_container_29_Template, 5, 0, "ng-container", 5)(30, UsersPageComponent_div_3_tr_25_ng_container_30_Template, 8, 0, "ng-container", 5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_11_0;
    let tmp_12_0;
    let tmp_13_0;
    let tmp_14_0;
    const user_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("current-user-row", ctx_r1.isCurrentUser(user_r3));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", ctx_r1.getUserRoute(user_r3));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", user_r3.firstName, " ", user_r3.lastName, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(user_r3.role);
    \u0275\u0275advance(2);
    \u0275\u0275property("badgeType", ctx_r1.getStatusBadgeType(user_r3.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getStatusLabel(user_r3.status), " ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("online", (tmp_11_0 = ctx_r1.getUserStatus(user_r3.id)) == null ? null : tmp_11_0.isOnline)("offline", !((tmp_12_0 = ctx_r1.getUserStatus(user_r3.id)) == null ? null : tmp_12_0.isOnline));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(((tmp_13_0 = ctx_r1.getUserStatus(user_r3.id)) == null ? null : tmp_13_0.isOnline) ? "\u041E\u043D\u043B\u0430\u0439\u043D" : "\u041E\u0444\u043B\u0430\u0439\u043D");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_14_0 = ctx_r1.getUserStatus(user_r3.id)) == null ? null : tmp_14_0.lastSeenAt);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(user_r3.createdAt));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", ctx_r1.getUserRoute(user_r3));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", user_r3.status !== "closed" && user_r3.id !== ctx_r1.currentUserId);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", user_r3.status === "closed");
  }
}
function UsersPageComponent_div_3_a_28_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 89)(1, "span", 90);
    \u0275\u0275text(2, "\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439 \u0440\u0430\u0437:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 91);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const user_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.formatLastSeen(ctx_r1.getUserStatus(user_r6.id).lastSeenAt));
  }
}
function UsersPageComponent_div_3_a_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 80)(1, "div", 81)(2, "div", 82);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 83)(5, "div", 84);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 85);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 86)(10, "app-badge", 87);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 88)(13, "div", 89)(14, "span", 90);
    \u0275\u0275text(15, "\u0420\u043E\u043B\u044C:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 91);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 89)(19, "span", 90);
    \u0275\u0275text(20, "\u0421\u0442\u0430\u0442\u0443\u0441:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 92);
    \u0275\u0275element(22, "span", 62);
    \u0275\u0275elementStart(23, "span", 63);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(25, UsersPageComponent_div_3_a_28_div_25_Template, 5, 1, "div", 93);
    \u0275\u0275elementStart(26, "div", 89)(27, "span", 90);
    \u0275\u0275text(28, "\u0414\u0430\u0442\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span", 91);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_13_0;
    let tmp_14_0;
    let tmp_15_0;
    const user_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("current-user", ctx_r1.isCurrentUser(user_r6));
    \u0275\u0275property("routerLink", ctx_r1.getUserRoute(user_r6));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getInitials(user_r6), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", user_r6.firstName, " ", user_r6.lastName, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r6.email);
    \u0275\u0275advance(2);
    \u0275\u0275property("badgeType", ctx_r1.getStatusBadgeType(user_r6.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getStatusLabel(user_r6.status), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(user_r6.role);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("online", (tmp_13_0 = ctx_r1.getUserStatus(user_r6.id)) == null ? null : tmp_13_0.isOnline);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(((tmp_14_0 = ctx_r1.getUserStatus(user_r6.id)) == null ? null : tmp_14_0.isOnline) ? "\u041E\u043D\u043B\u0430\u0439\u043D" : "\u041E\u0444\u043B\u0430\u0439\u043D");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_15_0 = ctx_r1.getUserStatus(user_r6.id)) == null ? null : tmp_15_0.lastSeenAt) && !((tmp_15_0 = ctx_r1.getUserStatus(user_r6.id)) == null ? null : tmp_15_0.isOnline));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(user_r6.createdAt));
  }
}
function UsersPageComponent_div_3_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 94);
    \u0275\u0275element(1, "app-loader");
    \u0275\u0275elementEnd();
  }
}
function UsersPageComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 44)(2, "app-button", 45);
    \u0275\u0275listener("onClick", function UsersPageComponent_div_3_Template_app_button_onClick_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openAddUserModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 46);
    \u0275\u0275element(4, "path", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043D\u043E\u0432\u043E\u0433\u043E \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F ");
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "app-paginated-table-wrapper", 48, 0)(8, "div", 49)(9, "table", 50)(10, "thead")(11, "tr")(12, "th");
    \u0275\u0275text(13, "\u0418\u043C\u044F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "\u0420\u043E\u043B\u044C");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "\u0421\u0442\u0430\u0442\u0443\u0441");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th");
    \u0275\u0275text(19, "\u041E\u043D\u043B\u0430\u0439\u043D");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th");
    \u0275\u0275text(21, "\u0414\u0430\u0442\u0430 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u044F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "th");
    \u0275\u0275text(23, "\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "tbody");
    \u0275\u0275template(25, UsersPageComponent_div_3_tr_25_Template, 31, 18, "tr", 51);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 52, 1);
    \u0275\u0275listener("scroll", function UsersPageComponent_div_3_Template_div_scroll_26_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onMobileScroll($event));
    });
    \u0275\u0275template(28, UsersPageComponent_div_3_a_28_Template, 31, 15, "a", 53)(29, UsersPageComponent_div_3_div_29_Template, 2, 0, "div", 54);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const paginatedTable_r7 = \u0275\u0275reference(7);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("paginationEnabled", false)("data", ctx_r1.filteredUsers)("defaultPageSize", 15);
    \u0275\u0275advance(19);
    \u0275\u0275property("ngForOf", paginatedTable_r7.paginatedData);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.mobileUsers);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isLoadingMore);
  }
}
function UsersPageComponent_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 95);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getErrorMessage("email"), " ");
  }
}
function UsersPageComponent_span_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 95);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getErrorMessage("phoneNumber"), " ");
  }
}
function UsersPageComponent_span_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 95);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getErrorMessage("firstName"), " ");
  }
}
function UsersPageComponent_span_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 95);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getErrorMessage("lastName"), " ");
  }
}
function UsersPageComponent_span_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 95);
    \u0275\u0275text(1, " \u0420\u043E\u043B\u044C \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u0430 \u0434\u043B\u044F \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F ");
    \u0275\u0275elementEnd();
  }
}
var UsersPageComponent = class _UsersPageComponent {
  pageHeaderService = inject(PageHeaderService);
  fb = inject(FormBuilder);
  usersService = inject(UsersService);
  toastService = inject(ToastService);
  store = inject(Store);
  destroy$ = new Subject();
  showAddUserModal = false;
  addUserForm;
  isLoading = true;
  isInviting = false;
  currentUserId = null;
  // Lock confirmation modal
  isLockConfirmModalOpen = false;
  pendingLockUser = null;
  lockConfirmTitle = "";
  lockConfirmDescription = "";
  // Delete confirmation modal
  isDeleteConfirmModalOpen = false;
  pendingDeleteUser = null;
  deleteConfirmTitle = "";
  deleteConfirmDescription = "";
  users = [];
  filteredUsers = [];
  mobileUsers = [];
  // For mobile infinite scroll
  userStatuses = /* @__PURE__ */ new Map();
  isLoadingMore = false;
  mobilePage = 0;
  mobilePageSize = 20;
  // Load more items per scroll on mobile
  hasMoreUsers = true;
  constructor() {
    this.addUserForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      phoneNumber: ["", [Validators.required]],
      firstName: ["", [Validators.required]],
      lastName: ["", [Validators.required]],
      role: ["", [Validators.required]]
    });
  }
  ngOnInit() {
    this.pageHeaderService.setPageHeader("\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438", [
      { label: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F", route: "/home" },
      { label: "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438" }
    ]);
    this.store.select(selectUserId).pipe(takeUntil(this.destroy$)).subscribe((userId) => {
      this.currentUserId = userId ? String(userId) : null;
      if (this.users.length > 0) {
        this.sortUsersWithCurrentUserFirst();
      }
    });
    this.loadUsers();
    interval(3e4).pipe(takeUntil(this.destroy$)).subscribe(() => {
      if (this.users.length > 0) {
        this.loadUserStatuses();
      }
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  loadUsers() {
    this.isLoading = true;
    this.usersService.getUsers().subscribe({
      next: (apiUsers) => {
        this.users = apiUsers.map((user) => this.mapApiUserToUser(user));
        this.sortUsersWithCurrentUserFirst();
        this.mobileUsers = [...this.filteredUsers];
        this.mobilePage = 0;
        this.hasMoreUsers = true;
        this.loadUserStatuses();
        this.isLoading = false;
      },
      error: (err) => {
        const errorMessage = err.error?.message || "\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439";
        this.toastService.error(errorMessage);
        this.isLoading = false;
      }
    });
  }
  loadMoreMobileUsers() {
    if (this.isLoadingMore || !this.hasMoreUsers) {
      return;
    }
    this.isLoadingMore = true;
    const startIndex = (this.mobilePage + 1) * this.mobilePageSize;
    const endIndex = startIndex + this.mobilePageSize;
    const moreUsers = this.filteredUsers.slice(startIndex, endIndex);
    if (moreUsers.length > 0) {
      this.mobileUsers = [...this.mobileUsers, ...moreUsers];
      this.mobilePage++;
      this.hasMoreUsers = endIndex < this.filteredUsers.length;
    } else {
      this.hasMoreUsers = false;
    }
    this.isLoadingMore = false;
  }
  onMobileScroll(event) {
    const target = event.target;
    const scrollTop = target.scrollTop;
    const scrollHeight = target.scrollHeight;
    const clientHeight = target.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight * 0.8) {
      this.loadMoreMobileUsers();
    }
  }
  getInitials(user) {
    const first = user.firstName?.charAt(0)?.toUpperCase() || "";
    const last = user.lastName?.charAt(0)?.toUpperCase() || "";
    return first + last || "?";
  }
  loadUserStatuses() {
    this.usersService.getAllUsersStatus().subscribe({
      next: (statuses) => {
        this.userStatuses.clear();
        statuses.forEach((status) => {
          this.userStatuses.set(status.userId, {
            isOnline: status.isOnline,
            lastSeenAt: status.lastSeenAt
          });
        });
      },
      error: (err) => {
        console.error("Error loading user statuses:", err);
      }
    });
  }
  getUserStatus(userId) {
    return this.userStatuses.get(userId) || null;
  }
  formatLastSeen(lastSeenAt) {
    if (!lastSeenAt) {
      return "\u041D\u0438\u043A\u043E\u0433\u0434\u0430";
    }
    const lastSeen = new Date(lastSeenAt);
    const now = /* @__PURE__ */ new Date();
    const diffMs = now.getTime() - lastSeen.getTime();
    const diffMins = Math.floor(diffMs / 6e4);
    const diffHours = Math.floor(diffMs / 36e5);
    const diffDays = Math.floor(diffMs / 864e5);
    if (diffMins < 1) {
      return "\u0422\u043E\u043B\u044C\u043A\u043E \u0447\u0442\u043E";
    }
    if (diffMins < 60) {
      return `${diffMins} \u043C\u0438\u043D \u043D\u0430\u0437\u0430\u0434`;
    }
    if (diffHours < 24) {
      return `${diffHours} \u0447 \u043D\u0430\u0437\u0430\u0434`;
    }
    if (diffDays < 7) {
      return `${diffDays} \u0434\u043D \u043D\u0430\u0437\u0430\u0434`;
    }
    return lastSeen.toLocaleDateString("ru-RU", { day: "numeric", month: "short", year: "numeric" });
  }
  sortUsersWithCurrentUserFirst() {
    if (!this.currentUserId) {
      this.filteredUsers = [...this.users];
      this.mobileUsers = [...this.filteredUsers];
      return;
    }
    const currentUser = this.users.find((u) => u.id === this.currentUserId);
    const otherUsers = this.users.filter((u) => u.id !== this.currentUserId);
    if (currentUser) {
      this.filteredUsers = [currentUser, ...otherUsers];
    } else {
      this.filteredUsers = [...this.users];
    }
    this.mobileUsers = [...this.filteredUsers.slice(0, this.mobilePageSize)];
    this.mobilePage = 0;
    this.hasMoreUsers = this.filteredUsers.length > this.mobilePageSize;
  }
  isCurrentUser(user) {
    return this.currentUserId !== null && user.id === this.currentUserId;
  }
  mapApiUserToUser(apiUser) {
    return {
      id: apiUser.id,
      firstName: apiUser.firstName,
      lastName: apiUser.lastName,
      email: apiUser.email,
      phoneNumber: apiUser.phone || "\u2014",
      role: this.getRoleLabel(apiUser.roles),
      status: this.mapAccountStatusToStatus(apiUser.accountStatus, apiUser.active),
      createdAt: apiUser.createdAt || ""
    };
  }
  mapAccountStatusToStatus(accountStatus, active) {
    if (accountStatus === "PENDING_ACTIVATION") {
      return "invited";
    }
    if (accountStatus === "LOCKED" || active === false) {
      return "closed";
    }
    return "active";
  }
  getRoleLabel(roles) {
    if (roles.includes("SUDO"))
      return "\u0421\u0443\u043F\u0435\u0440 \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440";
    if (roles.includes("ADMIN"))
      return "\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440";
    if (roles.includes("MANAGER"))
      return "\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440";
    return roles.join(", ");
  }
  openAddUserModal() {
    this.showAddUserModal = true;
    this.addUserForm.reset();
    this.isInviting = false;
  }
  closeAddUserModal() {
    this.showAddUserModal = false;
    this.addUserForm.reset();
    this.isInviting = false;
  }
  onSubmitAddUser() {
    if (this.addUserForm.valid && !this.isInviting) {
      this.isInviting = true;
      const formValue = this.addUserForm.value;
      const inviteData = {
        email: formValue.email,
        phone: formValue.phoneNumber,
        // Map phoneNumber to phone
        firstName: formValue.firstName,
        lastName: formValue.lastName,
        role: formValue.role
      };
      console.log("[UsersPage] Inviting user with data:", inviteData);
      this.usersService.inviteUser(inviteData).subscribe({
        next: (response) => {
          console.log("[UsersPage] Invite success:", response);
          this.toastService.success("\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043F\u0440\u0438\u0433\u043B\u0430\u0448\u0435\u043D");
          this.closeAddUserModal();
          this.loadUsers();
        },
        error: (err) => {
          console.error("[UsersPage] Invite error:", err);
          const errorMessage = err.error?.message || err.error?.errors || "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F";
          this.toastService.error(typeof errorMessage === "string" ? errorMessage : JSON.stringify(errorMessage));
        }
      });
    } else {
      Object.keys(this.addUserForm.controls).forEach((key) => {
        this.addUserForm.get(key)?.markAsTouched();
      });
    }
  }
  getErrorMessage(fieldName) {
    const control = this.addUserForm.get(fieldName);
    if (control?.hasError("required")) {
      return "\u042D\u0442\u043E \u043F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u0434\u043B\u044F \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F";
    }
    if (control?.hasError("email")) {
      return "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0439 email";
    }
    return "";
  }
  getStatusBadgeType(status) {
    switch (status) {
      case "active":
        return "success";
      case "invited":
        return "warning";
      case "closed":
        return "danger";
      default:
        return "secondary";
    }
  }
  getStatusLabel(status) {
    switch (status) {
      case "invited":
        return "\u041F\u0440\u0438\u0433\u043B\u0430\u0448\u0435\u043D";
      case "active":
        return "\u0410\u043A\u0442\u0438\u0432\u043D\u044B\u0439";
      case "closed":
        return "\u0417\u0430\u043A\u0440\u044B\u0442\u044B\u0439";
      default:
        return status;
    }
  }
  formatDate(date) {
    const d = new Date(date);
    return d.toLocaleDateString("ru-RU", { day: "2-digit", month: "2-digit", year: "numeric" });
  }
  onLockClick(user) {
    this.pendingLockUser = user;
    this.lockConfirmTitle = `\u0417\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F "${user.firstName} ${user.lastName}"?`;
    this.lockConfirmDescription = `\u041F\u0440\u0438 \u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u043A\u0435 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C ${user.firstName} ${user.lastName} (${user.email}) \u043F\u043E\u0442\u0435\u0440\u044F\u0435\u0442 \u0434\u043E\u0441\u0442\u0443\u043F \u043A \u0441\u0438\u0441\u0442\u0435\u043C\u0435. \u0415\u0433\u043E \u043F\u0440\u043E\u0444\u0438\u043B\u044C \u0431\u0443\u0434\u0435\u0442 \u0437\u0430\u043A\u0440\u044B\u0442, \u0438 \u043E\u043D \u043D\u0435 \u0441\u043C\u043E\u0436\u0435\u0442 \u0432\u044B\u043F\u043E\u043B\u043D\u044F\u0442\u044C \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438 \u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0435. \u0412\u044B \u0441\u043C\u043E\u0436\u0435\u0442\u0435 \u0440\u0430\u0437\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u043F\u043E\u0437\u0436\u0435 \u0438\u043B\u0438 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0435\u0433\u043E \u043F\u0440\u043E\u0444\u0438\u043B\u044C.`;
    this.isLockConfirmModalOpen = true;
  }
  confirmLock() {
    if (this.pendingLockUser) {
      this.usersService.lockUser(this.pendingLockUser.id).subscribe({
        next: (updatedUser) => {
          const index = this.users.findIndex((u) => u.id === this.pendingLockUser.id);
          if (index !== -1) {
            this.users[index] = this.mapApiUserToUser(updatedUser);
            this.sortUsersWithCurrentUserFirst();
          }
          this.toastService.success("\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0437\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043D");
          this.isLockConfirmModalOpen = false;
          this.pendingLockUser = null;
        },
        error: (err) => {
          const errorMessage = err.error?.message || "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u043A\u0435 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F";
          this.toastService.error(errorMessage);
        }
      });
    }
  }
  cancelLock() {
    this.isLockConfirmModalOpen = false;
    this.pendingLockUser = null;
  }
  onDeleteClick(user) {
    this.pendingDeleteUser = user;
    this.deleteConfirmTitle = `\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0437\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0445 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439?`;
    this.deleteConfirmDescription = `\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B, \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0432\u0441\u0435\u0445 \u0437\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0445 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439? \u042D\u0442\u043E \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u043D\u0435\u043B\u044C\u0437\u044F \u043E\u0442\u043C\u0435\u043D\u0438\u0442\u044C. \u0412\u0441\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u0437\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0445 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439 \u0431\u0443\u0434\u0443\u0442 \u0431\u0435\u0437\u0432\u043E\u0437\u0432\u0440\u0430\u0442\u043D\u043E \u0443\u0434\u0430\u043B\u0435\u043D\u044B \u0438\u0437 \u0441\u0438\u0441\u0442\u0435\u043C\u044B.`;
    this.isDeleteConfirmModalOpen = true;
  }
  confirmDelete() {
    if (this.pendingDeleteUser) {
      this.usersService.deleteLockedUsers().subscribe({
        next: (response) => {
          this.toastService.success(`\u0423\u0441\u043F\u0435\u0448\u043D\u043E \u0443\u0434\u0430\u043B\u0435\u043D\u043E \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439: ${response.deletedCount}`);
          this.loadUsers();
          this.isDeleteConfirmModalOpen = false;
          this.pendingDeleteUser = null;
        },
        error: (err) => {
          const errorMessage = err.error?.message || "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u0438 \u0437\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0445 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439";
          this.toastService.error(errorMessage);
        }
      });
    }
  }
  cancelDelete() {
    this.isDeleteConfirmModalOpen = false;
    this.pendingDeleteUser = null;
  }
  activateUser(user) {
    this.usersService.unlockUser(user.id).subscribe({
      next: (updatedUser) => {
        const index = this.users.findIndex((u) => u.id === user.id);
        if (index !== -1) {
          this.users[index] = this.mapApiUserToUser(updatedUser);
          this.sortUsersWithCurrentUserFirst();
        }
        this.toastService.success("\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0440\u0430\u0437\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043D");
      },
      error: (err) => {
        const errorMessage = err.error?.message || "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0440\u0430\u0437\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u043A\u0435 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F";
        this.toastService.error(errorMessage);
      }
    });
  }
  getUserRoute(user) {
    if (this.currentUserId && user.id === this.currentUserId) {
      return ["/profile"];
    }
    return ["/users", user.id];
  }
  static \u0275fac = function UsersPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UsersPageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UsersPageComponent, selectors: [["app-users-page"]], decls: 87, vars: 28, consts: [["paginatedTable", ""], ["mobileCardsContainer", ""], [1, "page-wrapper"], [1, "users-container"], ["class", "page-loading-container", 4, "ngIf"], [4, "ngIf"], ["title", "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043D\u043E\u0432\u043E\u0433\u043E \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F", 3, "closed", "visible", "showCloseButton"], [3, "ngSubmit", "formGroup"], [1, "form-group"], [1, "form-label"], [1, "required-mark"], ["type", "email", "formControlName", "email", "placeholder", "user@example.com", 1, "form-input"], ["class", "error-message", 4, "ngIf"], ["type", "tel", "formControlName", "phoneNumber", "placeholder", "+7 (777) 123-45-67", 1, "form-input"], ["type", "text", "formControlName", "firstName", "placeholder", "\u0418\u0432\u0430\u043D", 1, "form-input"], ["type", "text", "formControlName", "lastName", "placeholder", "\u0418\u0432\u0430\u043D\u043E\u0432", 1, "form-input"], [1, "select-label"], [1, "select-wrapper"], ["formControlName", "role", 1, "form-select"], ["value", ""], ["value", "SUDO"], ["value", "ADMIN"], ["value", "MANAGER"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", 1, "select-arrow"], ["d", "M6 9l6 6 6-6", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "modal-footer"], ["buttonType", "ghost", 3, "onClick"], ["buttonType", "primary", "type", "submit", 3, "disabled", "loading"], [3, "visibleChange", "visible", "title"], [1, "modal-body"], [1, "toggle-confirm-content"], [1, "confirm-icon", "disable"], ["viewBox", "0 0 24 24", "fill", "none"], ["x", "3", "y", "11", "width", "18", "height", "11", "rx", "2", "stroke", "currentColor", "stroke-width", "2"], ["d", "M7 11V7a5 5 0 0110 0v4", "stroke", "currentColor", "stroke-width", "2"], [1, "confirm-description"], [1, "confirm-text"], [1, "modal-actions"], ["buttonType", "danger", 3, "onClick"], [1, "confirm-icon", "delete"], ["d", "M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2", "stroke", "currentColor", "stroke-width", "2"], ["d", "M10 11v6M14 11v6", "stroke", "currentColor", "stroke-width", "2"], [1, "page-loading-container"], ["type", "logo", "size", "large", 3, "visible", "overlay"], [1, "page-header-section"], ["buttonType", "primary", "size", "medium", 3, "onClick"], ["viewBox", "0 0 24 24", "fill", "none", 1, "btn-icon"], ["d", "M12 5v14M5 12h14", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [3, "paginationEnabled", "data", "defaultPageSize"], [1, "table-container", "desktop-view"], [1, "users-table"], [3, "current-user-row", 4, "ngFor", "ngForOf"], [1, "mobile-users-cards", "mobile-view", 3, "scroll"], ["class", "mobile-user-card", 3, "routerLink", "current-user", 4, "ngFor", "ngForOf"], ["class", "mobile-loading", 4, "ngIf"], [1, "user-name-cell"], [1, "user-name-link", 3, "routerLink"], [1, "user-name"], [1, "user-role"], ["size", "medium", 3, "badgeType"], [1, "online-status-cell"], [1, "status-indicator"], [1, "status-dot"], [1, "status-text"], ["class", "last-seen", 4, "ngIf"], [1, "user-date"], [1, "actions-cell"], ["title", "\u041F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C", 1, "action-link", 3, "routerLink"], ["buttonType", "ghost", "size", "small"], ["d", "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z", "stroke", "currentColor", "stroke-width", "1.5"], ["cx", "12", "cy", "12", "r", "3", "stroke", "currentColor", "stroke-width", "1.5"], [1, "last-seen"], ["buttonType", "ghost", "size", "small", "title", "\u0417\u0430\u043A\u0440\u044B\u0442\u044C \u043F\u0440\u043E\u0444\u0438\u043B\u044C", 3, "onClick"], ["x", "3", "y", "11", "width", "18", "height", "11", "rx", "2", "stroke", "currentColor", "stroke-width", "1.5"], ["d", "M7 11V7a5 5 0 0110 0v4", "stroke", "currentColor", "stroke-width", "1.5"], ["buttonType", "ghost", "size", "small", "title", "\u0423\u0434\u0430\u043B\u0438\u0442\u044C", 3, "onClick"], ["d", "M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2", "stroke", "currentColor", "stroke-width", "1.5"], ["d", "M10 11v6M14 11v6", "stroke", "currentColor", "stroke-width", "1.5"], ["buttonType", "ghost", "size", "small", "title", "\u0410\u043A\u0442\u0438\u0432\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043E\u0431\u0440\u0430\u0442\u043D\u043E", 3, "onClick"], ["d", "M20 6L9 17l-5-5", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "mobile-user-card", 3, "routerLink"], [1, "card-header-section"], [1, "card-avatar"], [1, "card-header-info"], [1, "card-name"], [1, "card-email"], [1, "card-status-badge"], ["size", "small", 3, "badgeType"], [1, "card-body-section"], [1, "card-info-row"], [1, "info-label"], [1, "info-value"], [1, "status-indicator-inline"], ["class", "card-info-row", 4, "ngIf"], [1, "mobile-loading"], [1, "error-message"]], template: function UsersPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3);
      \u0275\u0275template(2, UsersPageComponent_div_2_Template, 2, 2, "div", 4)(3, UsersPageComponent_div_3_Template, 30, 6, "div", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "app-modal", 6);
      \u0275\u0275listener("closed", function UsersPageComponent_Template_app_modal_closed_4_listener() {
        return ctx.closeAddUserModal();
      });
      \u0275\u0275elementStart(5, "form", 7);
      \u0275\u0275listener("ngSubmit", function UsersPageComponent_Template_form_ngSubmit_5_listener() {
        return ctx.onSubmitAddUser();
      });
      \u0275\u0275elementStart(6, "div", 8)(7, "label", 9);
      \u0275\u0275text(8, " Email ");
      \u0275\u0275elementStart(9, "span", 10);
      \u0275\u0275text(10, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(11, "input", 11);
      \u0275\u0275template(12, UsersPageComponent_span_12_Template, 2, 1, "span", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 8)(14, "label", 9);
      \u0275\u0275text(15, " \u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430 ");
      \u0275\u0275elementStart(16, "span", 10);
      \u0275\u0275text(17, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(18, "input", 13);
      \u0275\u0275template(19, UsersPageComponent_span_19_Template, 2, 1, "span", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 8)(21, "label", 9);
      \u0275\u0275text(22, " \u0418\u043C\u044F ");
      \u0275\u0275elementStart(23, "span", 10);
      \u0275\u0275text(24, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(25, "input", 14);
      \u0275\u0275template(26, UsersPageComponent_span_26_Template, 2, 1, "span", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 8)(28, "label", 9);
      \u0275\u0275text(29, " \u0424\u0430\u043C\u0438\u043B\u0438\u044F ");
      \u0275\u0275elementStart(30, "span", 10);
      \u0275\u0275text(31, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(32, "input", 15);
      \u0275\u0275template(33, UsersPageComponent_span_33_Template, 2, 1, "span", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "div", 8)(35, "label", 16);
      \u0275\u0275text(36, " \u0420\u043E\u043B\u044C ");
      \u0275\u0275elementStart(37, "span", 10);
      \u0275\u0275text(38, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "div", 17)(40, "select", 18)(41, "option", 19);
      \u0275\u0275text(42, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0440\u043E\u043B\u044C");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "option", 20);
      \u0275\u0275text(44, "\u0421\u0443\u043F\u0435\u0440 \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "option", 21);
      \u0275\u0275text(46, "\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "option", 22);
      \u0275\u0275text(48, "\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440");
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(49, "svg", 23);
      \u0275\u0275element(50, "path", 24);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(51, UsersPageComponent_span_51_Template, 2, 0, "span", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(52, "div", 25)(53, "app-button", 26);
      \u0275\u0275listener("onClick", function UsersPageComponent_Template_app_button_onClick_53_listener() {
        return ctx.closeAddUserModal();
      });
      \u0275\u0275text(54, " \u041E\u0442\u043C\u0435\u043D\u0430 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "app-button", 27);
      \u0275\u0275text(56, " \u041F\u0440\u0438\u0433\u043B\u0430\u0441\u0438\u0442\u044C ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(57, "app-modal", 28);
      \u0275\u0275listener("visibleChange", function UsersPageComponent_Template_app_modal_visibleChange_57_listener($event) {
        return ctx.isLockConfirmModalOpen = $event;
      });
      \u0275\u0275elementStart(58, "div", 29)(59, "div", 30)(60, "div", 31);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(61, "svg", 32);
      \u0275\u0275element(62, "rect", 33)(63, "path", 34);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(64, "div", 35)(65, "p", 36);
      \u0275\u0275text(66);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(67, "div", 37)(68, "app-button", 26);
      \u0275\u0275listener("onClick", function UsersPageComponent_Template_app_button_onClick_68_listener() {
        return ctx.cancelLock();
      });
      \u0275\u0275text(69, " \u041E\u0442\u043C\u0435\u043D\u0430 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "app-button", 38);
      \u0275\u0275listener("onClick", function UsersPageComponent_Template_app_button_onClick_70_listener() {
        return ctx.confirmLock();
      });
      \u0275\u0275text(71, " \u0417\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u0442\u044C ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(72, "app-modal", 28);
      \u0275\u0275listener("visibleChange", function UsersPageComponent_Template_app_modal_visibleChange_72_listener($event) {
        return ctx.isDeleteConfirmModalOpen = $event;
      });
      \u0275\u0275elementStart(73, "div", 29)(74, "div", 30)(75, "div", 39);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(76, "svg", 32);
      \u0275\u0275element(77, "path", 40)(78, "path", 41);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(79, "div", 35)(80, "p", 36);
      \u0275\u0275text(81);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(82, "div", 37)(83, "app-button", 26);
      \u0275\u0275listener("onClick", function UsersPageComponent_Template_app_button_onClick_83_listener() {
        return ctx.cancelDelete();
      });
      \u0275\u0275text(84, " \u041E\u0442\u043C\u0435\u043D\u0430 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "app-button", 38);
      \u0275\u0275listener("onClick", function UsersPageComponent_Template_app_button_onClick_85_listener() {
        return ctx.confirmDelete();
      });
      \u0275\u0275text(86, " \u0423\u0434\u0430\u043B\u0438\u0442\u044C ");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      let tmp_5_0;
      let tmp_6_0;
      let tmp_7_0;
      let tmp_8_0;
      let tmp_9_0;
      let tmp_10_0;
      let tmp_11_0;
      let tmp_12_0;
      let tmp_13_0;
      let tmp_14_0;
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("visible", ctx.showAddUserModal)("showCloseButton", true);
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.addUserForm);
      \u0275\u0275advance(6);
      \u0275\u0275classProp("error", ((tmp_5_0 = ctx.addUserForm.get("email")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx.addUserForm.get("email")) == null ? null : tmp_5_0.touched));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ((tmp_6_0 = ctx.addUserForm.get("email")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx.addUserForm.get("email")) == null ? null : tmp_6_0.touched));
      \u0275\u0275advance(6);
      \u0275\u0275classProp("error", ((tmp_7_0 = ctx.addUserForm.get("phoneNumber")) == null ? null : tmp_7_0.invalid) && ((tmp_7_0 = ctx.addUserForm.get("phoneNumber")) == null ? null : tmp_7_0.touched));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ((tmp_8_0 = ctx.addUserForm.get("phoneNumber")) == null ? null : tmp_8_0.invalid) && ((tmp_8_0 = ctx.addUserForm.get("phoneNumber")) == null ? null : tmp_8_0.touched));
      \u0275\u0275advance(6);
      \u0275\u0275classProp("error", ((tmp_9_0 = ctx.addUserForm.get("firstName")) == null ? null : tmp_9_0.invalid) && ((tmp_9_0 = ctx.addUserForm.get("firstName")) == null ? null : tmp_9_0.touched));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ((tmp_10_0 = ctx.addUserForm.get("firstName")) == null ? null : tmp_10_0.invalid) && ((tmp_10_0 = ctx.addUserForm.get("firstName")) == null ? null : tmp_10_0.touched));
      \u0275\u0275advance(6);
      \u0275\u0275classProp("error", ((tmp_11_0 = ctx.addUserForm.get("lastName")) == null ? null : tmp_11_0.invalid) && ((tmp_11_0 = ctx.addUserForm.get("lastName")) == null ? null : tmp_11_0.touched));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ((tmp_12_0 = ctx.addUserForm.get("lastName")) == null ? null : tmp_12_0.invalid) && ((tmp_12_0 = ctx.addUserForm.get("lastName")) == null ? null : tmp_12_0.touched));
      \u0275\u0275advance(7);
      \u0275\u0275classProp("error", ((tmp_13_0 = ctx.addUserForm.get("role")) == null ? null : tmp_13_0.invalid) && ((tmp_13_0 = ctx.addUserForm.get("role")) == null ? null : tmp_13_0.touched));
      \u0275\u0275advance(11);
      \u0275\u0275property("ngIf", ((tmp_14_0 = ctx.addUserForm.get("role")) == null ? null : tmp_14_0.invalid) && ((tmp_14_0 = ctx.addUserForm.get("role")) == null ? null : tmp_14_0.touched));
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", ctx.addUserForm.invalid || ctx.isInviting)("loading", ctx.isInviting);
      \u0275\u0275advance(2);
      \u0275\u0275property("visible", ctx.isLockConfirmModalOpen)("title", ctx.lockConfirmTitle);
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(ctx.lockConfirmDescription);
      \u0275\u0275advance(6);
      \u0275\u0275property("visible", ctx.isDeleteConfirmModalOpen)("title", ctx.deleteConfirmTitle);
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(ctx.deleteConfirmDescription);
    }
  }, dependencies: [
    CommonModule,
    NgForOf,
    NgIf,
    FormsModule,
    \u0275NgNoValidate,
    NgSelectOption,
    \u0275NgSelectMultipleOption,
    DefaultValueAccessor,
    SelectControlValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    ReactiveFormsModule,
    FormGroupDirective,
    FormControlName,
    RouterModule,
    RouterLink,
    BadgeComponent,
    ModalComponent,
    ButtonComponent,
    PaginatedTableWrapperComponent,
    LoaderComponent
  ], styles: ["\n\n.page-wrapper[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      #f0fdf4 0%,\n      #f8fafc 50%,\n      #f8fafc 100%);\n  min-height: calc(100vh - 64px);\n  padding: 2rem;\n  margin: -2rem;\n}\n.users-container[_ngcontent-%COMP%] {\n  max-width: 1400px;\n  margin: 0 auto;\n  position: relative;\n  min-height: 400px;\n}\n.page-loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 60vh;\n  width: 100%;\n}\n.page-header-section[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n  display: flex;\n  justify-content: flex-end;\n}\n.add-user-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  background: #16A34A;\n  color: white;\n  border: none;\n  border-radius: 12px;\n  padding: 0.75rem 1.5rem;\n  font-size: 0.9375rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.add-user-btn[_ngcontent-%COMP%]:hover {\n  background: #15803d;\n}\n.add-user-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n}\n.table-container[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  overflow: hidden;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n}\n.users-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.users-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: #f8fafc;\n}\n.users-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 1rem 1.5rem;\n  text-align: left;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #64748b;\n  border-bottom: 1px solid #e2e8f0;\n}\n.users-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 1rem 1.5rem;\n  border-bottom: 1px solid #f1f5f9;\n}\n.users-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n.users-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.current-user-row[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  border-left: 3px solid #64748b;\n}\n.users-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.current-user-row[_ngcontent-%COMP%]:hover {\n  background: #e2e8f0;\n}\n.users-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.user-name-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.user-name-link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #1f2937;\n  transition: color 0.2s;\n  cursor: pointer;\n}\n.user-name-link[_ngcontent-%COMP%]:hover {\n  color: #16A34A;\n}\n.user-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: inherit;\n}\n.user-role[_ngcontent-%COMP%] {\n  color: #475569;\n  font-size: 0.9375rem;\n}\n.user-date[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 0.875rem;\n}\n.online-status-cell[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.status-indicator[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.status-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.status-indicator.online[_ngcontent-%COMP%]   .status-dot[_ngcontent-%COMP%] {\n  background: #16A34A;\n  box-shadow: 0 0 0 2px rgba(22, 163, 74, 0.2);\n}\n.status-indicator.offline[_ngcontent-%COMP%]   .status-dot[_ngcontent-%COMP%] {\n  background: #94a3b8;\n}\n.status-text[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #475569;\n}\n.status-indicator.online[_ngcontent-%COMP%]   .status-text[_ngcontent-%COMP%] {\n  color: #16A34A;\n}\n.last-seen[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #94a3b8;\n  margin-top: 0.125rem;\n}\n.actions-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.action-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  text-decoration: none;\n  color: inherit;\n}\n[_nghost-%COMP%]     app-button svg, \napp-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  flex-shrink: 0;\n  display: block;\n}\n[_nghost-%COMP%]     app-button.size-small svg, \napp-button.size-small[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n.btn-icon[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  flex-shrink: 0;\n  display: block;\n}\n.action-btn[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  background: white;\n  color: #64748b;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.15s;\n  padding: 0;\n}\n.action-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n.action-btn.view[_ngcontent-%COMP%]:hover {\n  background: #f0fdf4;\n  border-color: #bbf7d0;\n  color: #16A34A;\n}\n.action-btn.lock[_ngcontent-%COMP%]:hover {\n  background: #fef2f2;\n  border-color: #fecaca;\n  color: #dc2626;\n}\n.action-btn.delete[_ngcontent-%COMP%]:hover {\n  background: #fef2f2;\n  border-color: #fecaca;\n  color: #dc2626;\n}\n.action-btn.activate[_ngcontent-%COMP%]:hover {\n  background: #f0fdf4;\n  border-color: #bbf7d0;\n  color: #16A34A;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1.25rem;\n}\n.form-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #475569;\n  margin-bottom: 0.5rem;\n}\n.select-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #475569;\n  margin-bottom: 0.5rem;\n}\n.form-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 16px;\n  border: 1px solid #cbd5e1;\n  border-radius: 10px;\n  font-size: 1rem;\n  outline: none;\n  transition: 0.2s;\n}\n.form-input[_ngcontent-%COMP%]:focus {\n  border-color: #16A34A;\n  box-shadow: 0 0 0 3px #dcfce7;\n}\n.form-input.error[_ngcontent-%COMP%] {\n  border-color: #dc2626;\n}\n.required-mark[_ngcontent-%COMP%] {\n  color: #dc2626;\n  margin-left: 0.25rem;\n}\n.select-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n}\n.form-select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 40px 12px 16px;\n  border: 1px solid #cbd5e1;\n  border-radius: 10px;\n  font-size: 1rem;\n  outline: none;\n  transition: all 0.2s ease;\n  background: white;\n  color: #1f2937;\n  appearance: none;\n  cursor: pointer;\n  font-weight: 500;\n}\n.form-select[_ngcontent-%COMP%]:hover {\n  border-color: #94a3b8;\n}\n.form-select[_ngcontent-%COMP%]:focus {\n  border-color: #16A34A;\n  box-shadow: 0 0 0 3px rgba(21, 128, 61, 0.1);\n}\n.form-select.error[_ngcontent-%COMP%] {\n  border-color: #dc2626;\n}\n.form-select.error[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);\n}\n.select-arrow[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 20px;\n  height: 20px;\n  color: #64748b;\n  pointer-events: none;\n  transition: transform 0.2s ease;\n}\n.select-wrapper[_ngcontent-%COMP%]:hover   .select-arrow[_ngcontent-%COMP%] {\n  color: #475569;\n}\n.form-select[_ngcontent-%COMP%]:focus    + .select-arrow[_ngcontent-%COMP%] {\n  color: #16A34A;\n}\n.form-select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  padding: 12px;\n  font-weight: 500;\n}\n.form-select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]:first-child {\n  color: #94a3b8;\n  font-weight: 400;\n}\n.error-message[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.75rem;\n  color: #dc2626;\n  margin-top: 0.25rem;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.75rem;\n  margin-top: 1.5rem;\n  padding-top: 1.5rem;\n  border-top: 1px solid #e2e8f0;\n}\n.toggle-confirm-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1.5rem;\n  padding: 1rem 0;\n}\n.confirm-icon[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.confirm-icon.disable[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #dc2626;\n}\n.confirm-icon.delete[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #dc2626;\n}\n.confirm-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n}\n.confirm-description[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.confirm-text[_ngcontent-%COMP%] {\n  font-size: 0.9375rem;\n  color: #475569;\n  line-height: 1.6;\n  margin: 0;\n}\n.modal-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.75rem;\n  margin-top: 1.5rem;\n  padding-top: 1.5rem;\n  border-top: 1px solid #e2e8f0;\n}\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 400px;\n}\n.mobile-users-cards[_ngcontent-%COMP%] {\n  display: none;\n  flex-direction: column;\n  gap: 1rem;\n  max-height: calc(100vh - 300px);\n  overflow-y: auto;\n  padding: 0.5rem;\n}\n.mobile-user-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  padding: 1rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n  text-decoration: none;\n  color: inherit;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  transition: all 0.2s ease;\n}\n.mobile-user-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  transform: translateY(-2px);\n}\n.mobile-user-card.current-user[_ngcontent-%COMP%] {\n  border: 2px solid #16A34A;\n  background: #f0fdf4;\n}\n.card-header-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.card-avatar[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #16A34A 0%,\n      #15803d 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n  font-size: 1rem;\n  color: white;\n  flex-shrink: 0;\n}\n.card-header-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.card-name[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin-bottom: 0.25rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.card-email[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #64748b;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.card-status-badge[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.card-body-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  padding-top: 0.75rem;\n  border-top: 1px solid #e5e7eb;\n}\n.card-info-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}\n.card-info-row[_ngcontent-%COMP%]   .info-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #64748b;\n  font-weight: 500;\n}\n.card-info-row[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #1f2937;\n  font-weight: 600;\n  text-align: right;\n}\n.status-indicator-inline[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.status-indicator-inline[_ngcontent-%COMP%]   .status-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #94a3b8;\n  flex-shrink: 0;\n}\n.status-indicator-inline.online[_ngcontent-%COMP%]   .status-dot[_ngcontent-%COMP%] {\n  background: #16A34A;\n  box-shadow: 0 0 0 2px rgba(22, 163, 74, 0.2);\n}\n.status-indicator-inline[_ngcontent-%COMP%]   .status-text[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #64748b;\n  font-weight: 500;\n}\n.status-indicator-inline.online[_ngcontent-%COMP%]   .status-text[_ngcontent-%COMP%] {\n  color: #16A34A;\n}\n.mobile-loading[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 1rem;\n}\n@media (max-width: 768px) {\n  .page-wrapper[_ngcontent-%COMP%] {\n    margin: -1rem;\n    padding: 1rem;\n  }\n  .desktop-view[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .mobile-view[_ngcontent-%COMP%] {\n    display: flex !important;\n  }\n  .mobile-users-cards[_ngcontent-%COMP%] {\n    max-height: calc(100vh - 250px);\n  }\n}\n@media (min-width: 769px) {\n  .mobile-view[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .desktop-view[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n}\n/*# sourceMappingURL=users-page.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UsersPageComponent, [{
    type: Component,
    args: [{ selector: "app-users-page", standalone: true, imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule,
      BadgeComponent,
      ModalComponent,
      ButtonComponent,
      PaginatedTableWrapperComponent,
      LoaderComponent,
      PhoneFormatPipe
    ], template: `
    <div class="page-wrapper">
      <div class="users-container">
        <!-- Loading State -->
        <div class="page-loading-container" *ngIf="isLoading">
          <app-loader [visible]="true" [overlay]="false" type="logo" size="large"></app-loader>
        </div>
        
        <div *ngIf="!isLoading">
        <!-- Header with Add Button -->
        <div class="page-header-section">
          <app-button
            buttonType="primary"
            size="medium"
            (onClick)="openAddUserModal()">
            <svg viewBox="0 0 24 24" fill="none" class="btn-icon">
              <path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043D\u043E\u0432\u043E\u0433\u043E \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F
          </app-button>
        </div>

        <!-- Users Table with Pagination -->
        <app-paginated-table-wrapper
          [paginationEnabled]="false"
          [data]="filteredUsers"
          [defaultPageSize]="15"
          #paginatedTable>
          
          <!-- Desktop Table View -->
          <div class="table-container desktop-view">
            <table class="users-table">
              <thead>
                <tr>
                  <th>\u0418\u043C\u044F</th>
                  <th>\u0420\u043E\u043B\u044C</th>
                  <th>\u0421\u0442\u0430\u0442\u0443\u0441</th>
                  <th>\u041E\u043D\u043B\u0430\u0439\u043D</th>
                  <th>\u0414\u0430\u0442\u0430 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u044F</th>
                  <th>\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let user of paginatedTable.paginatedData" [class.current-user-row]="isCurrentUser(user)">
                <td>
                  <div class="user-name-cell">
                    <a [routerLink]="getUserRoute(user)" class="user-name-link">
                      <span class="user-name">{{ user.firstName }} {{ user.lastName }}</span>
                    </a>
                  </div>
                </td>
                <td>
                  <span class="user-role">{{ user.role }}</span>
                </td>
                <td>
                  <app-badge 
                    [badgeType]="getStatusBadgeType(user.status)" 
                    size="medium">
                    {{ getStatusLabel(user.status) }}
                  </app-badge>
                </td>
                <td>
                  <div class="online-status-cell">
                    <div class="status-indicator" [class.online]="getUserStatus(user.id)?.isOnline" [class.offline]="!getUserStatus(user.id)?.isOnline">
                      <span class="status-dot"></span>
                      <span class="status-text">{{ getUserStatus(user.id)?.isOnline ? '\u041E\u043D\u043B\u0430\u0439\u043D' : '\u041E\u0444\u043B\u0430\u0439\u043D' }}</span>
                    </div>
                    <div class="last-seen" *ngIf="getUserStatus(user.id)?.lastSeenAt">
                      {{ formatLastSeen(getUserStatus(user.id)!.lastSeenAt) }}
                    </div>
                  </div>
                </td>
                <td>
                  <span class="user-date">{{ formatDate(user.createdAt) }}</span>
                </td>
                <td>
                  <div class="actions-cell">
                    <a [routerLink]="getUserRoute(user)" title="\u041F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C" class="action-link">
                      <app-button buttonType="ghost" size="small">
                        <svg viewBox="0 0 24 24" fill="none">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" stroke-width="1.5"/>
                          <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="1.5"/>
                        </svg>
                      </app-button>
                    </a>
                    <ng-container *ngIf="user.status !== 'closed' && user.id !== currentUserId">
                      <app-button
                        buttonType="ghost"
                        size="small"
                        (onClick)="onLockClick(user)"
                        title="\u0417\u0430\u043A\u0440\u044B\u0442\u044C \u043F\u0440\u043E\u0444\u0438\u043B\u044C">
                        <svg viewBox="0 0 24 24" fill="none">
                          <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" stroke-width="1.5"/>
                          <path d="M7 11V7a5 5 0 0110 0v4" stroke="currentColor" stroke-width="1.5"/>
                        </svg>
                      </app-button>
                    </ng-container>
                    <ng-container *ngIf="user.status === 'closed'">
                      <app-button
                        buttonType="ghost"
                        size="small"
                        (onClick)="onDeleteClick(user)"
                        title="\u0423\u0434\u0430\u043B\u0438\u0442\u044C">
                        <svg viewBox="0 0 24 24" fill="none">
                          <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" stroke="currentColor" stroke-width="1.5"/>
                          <path d="M10 11v6M14 11v6" stroke="currentColor" stroke-width="1.5"/>
                        </svg>
                      </app-button>
                      <app-button
                        buttonType="ghost"
                        size="small"
                        (onClick)="activateUser(user)"
                        title="\u0410\u043A\u0442\u0438\u0432\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043E\u0431\u0440\u0430\u0442\u043D\u043E">
                        <svg viewBox="0 0 24 24" fill="none">
                          <path d="M20 6L9 17l-5-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                      </app-button>
                    </ng-container>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          </div>

          <!-- Mobile Card View -->
          <div class="mobile-users-cards mobile-view" 
               (scroll)="onMobileScroll($event)"
               #mobileCardsContainer>
            <a [routerLink]="getUserRoute(user)" class="mobile-user-card" *ngFor="let user of mobileUsers" [class.current-user]="isCurrentUser(user)">
              <div class="card-header-section">
                <div class="card-avatar">
                  {{ getInitials(user) }}
                </div>
                <div class="card-header-info">
                  <div class="card-name">{{ user.firstName }} {{ user.lastName }}</div>
                  <div class="card-email">{{ user.email }}</div>
                </div>
                <div class="card-status-badge">
                  <app-badge 
                    [badgeType]="getStatusBadgeType(user.status)" 
                    size="small">
                    {{ getStatusLabel(user.status) }}
                  </app-badge>
                </div>
              </div>
              <div class="card-body-section">
                <div class="card-info-row">
                  <span class="info-label">\u0420\u043E\u043B\u044C:</span>
                  <span class="info-value">{{ user.role }}</span>
                </div>
                <div class="card-info-row">
                  <span class="info-label">\u0421\u0442\u0430\u0442\u0443\u0441:</span>
                  <div class="status-indicator-inline" [class.online]="getUserStatus(user.id)?.isOnline">
                    <span class="status-dot"></span>
                    <span class="status-text">{{ getUserStatus(user.id)?.isOnline ? '\u041E\u043D\u043B\u0430\u0439\u043D' : '\u041E\u0444\u043B\u0430\u0439\u043D' }}</span>
                  </div>
                </div>
                <div class="card-info-row" *ngIf="getUserStatus(user.id)?.lastSeenAt && !getUserStatus(user.id)?.isOnline">
                  <span class="info-label">\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439 \u0440\u0430\u0437:</span>
                  <span class="info-value">{{ formatLastSeen(getUserStatus(user.id)!.lastSeenAt) }}</span>
                </div>
                <div class="card-info-row">
                  <span class="info-label">\u0414\u0430\u0442\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438:</span>
                  <span class="info-value">{{ formatDate(user.createdAt) }}</span>
                </div>
              </div>
            </a>
            
            <div class="mobile-loading" *ngIf="isLoadingMore">
              <app-loader></app-loader>
            </div>
          </div>
        </app-paginated-table-wrapper>
        </div>
      </div>
    </div>

    <!-- Add User Modal -->
    <app-modal
      [visible]="showAddUserModal"
      title="\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043D\u043E\u0432\u043E\u0433\u043E \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F"
      [showCloseButton]="true"
      (closed)="closeAddUserModal()">
      <form [formGroup]="addUserForm" (ngSubmit)="onSubmitAddUser()">
        <div class="form-group">
          <label class="form-label">
            Email
            <span class="required-mark">*</span>
          </label>
          <input
            type="email"
            formControlName="email"
            placeholder="user@example.com"
            class="form-input"
            [class.error]="addUserForm.get('email')?.invalid && addUserForm.get('email')?.touched">
          <span *ngIf="addUserForm.get('email')?.invalid && addUserForm.get('email')?.touched" class="error-message">
            {{ getErrorMessage('email') }}
          </span>
        </div>

        <div class="form-group">
          <label class="form-label">
            \u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430
            <span class="required-mark">*</span>
          </label>
          <input
            type="tel"
            formControlName="phoneNumber"
            placeholder="+7 (777) 123-45-67"
            class="form-input"
            [class.error]="addUserForm.get('phoneNumber')?.invalid && addUserForm.get('phoneNumber')?.touched">
          <span *ngIf="addUserForm.get('phoneNumber')?.invalid && addUserForm.get('phoneNumber')?.touched" class="error-message">
            {{ getErrorMessage('phoneNumber') }}
          </span>
        </div>

        <div class="form-group">
          <label class="form-label">
            \u0418\u043C\u044F
            <span class="required-mark">*</span>
          </label>
          <input
            type="text"
            formControlName="firstName"
            placeholder="\u0418\u0432\u0430\u043D"
            class="form-input"
            [class.error]="addUserForm.get('firstName')?.invalid && addUserForm.get('firstName')?.touched">
          <span *ngIf="addUserForm.get('firstName')?.invalid && addUserForm.get('firstName')?.touched" class="error-message">
            {{ getErrorMessage('firstName') }}
          </span>
        </div>

        <div class="form-group">
          <label class="form-label">
            \u0424\u0430\u043C\u0438\u043B\u0438\u044F
            <span class="required-mark">*</span>
          </label>
          <input
            type="text"
            formControlName="lastName"
            placeholder="\u0418\u0432\u0430\u043D\u043E\u0432"
            class="form-input"
            [class.error]="addUserForm.get('lastName')?.invalid && addUserForm.get('lastName')?.touched">
          <span *ngIf="addUserForm.get('lastName')?.invalid && addUserForm.get('lastName')?.touched" class="error-message">
            {{ getErrorMessage('lastName') }}
          </span>
        </div>

        <div class="form-group">
          <label class="select-label">
            \u0420\u043E\u043B\u044C
            <span class="required-mark">*</span>
          </label>
          <div class="select-wrapper">
            <select 
              formControlName="role" 
              class="form-select"
              [class.error]="addUserForm.get('role')?.invalid && addUserForm.get('role')?.touched">
              <option value="">\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0440\u043E\u043B\u044C</option>
              <option value="SUDO">\u0421\u0443\u043F\u0435\u0440 \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440</option>
              <option value="ADMIN">\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440</option>
              <option value="MANAGER">\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440</option>
            </select>
            <svg class="select-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
              <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <span *ngIf="addUserForm.get('role')?.invalid && addUserForm.get('role')?.touched" class="error-message">
            \u0420\u043E\u043B\u044C \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u0430 \u0434\u043B\u044F \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F
          </span>
        </div>

        <div class="modal-footer">
          <app-button
            buttonType="ghost"
            (onClick)="closeAddUserModal()">
            \u041E\u0442\u043C\u0435\u043D\u0430
          </app-button>
          <app-button
            buttonType="primary"
            type="submit"
            [disabled]="addUserForm.invalid || isInviting"
            [loading]="isInviting">
            \u041F\u0440\u0438\u0433\u043B\u0430\u0441\u0438\u0442\u044C
          </app-button>
        </div>
      </form>
    </app-modal>

    <!-- Lock Confirmation Modal -->
    <app-modal 
      [visible]="isLockConfirmModalOpen" 
      [title]="lockConfirmTitle"
      (visibleChange)="isLockConfirmModalOpen = $event">
      <div class="modal-body">
        <div class="toggle-confirm-content">
          <div class="confirm-icon disable">
            <svg viewBox="0 0 24 24" fill="none">
              <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" stroke-width="2"/>
              <path d="M7 11V7a5 5 0 0110 0v4" stroke="currentColor" stroke-width="2"/>
            </svg>
          </div>
          <div class="confirm-description">
            <p class="confirm-text">{{ lockConfirmDescription }}</p>
          </div>
        </div>
        <div class="modal-actions">
          <app-button
            buttonType="ghost"
            (onClick)="cancelLock()">
            \u041E\u0442\u043C\u0435\u043D\u0430
          </app-button>
          <app-button
            buttonType="danger"
            (onClick)="confirmLock()">
            \u0417\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u0442\u044C
          </app-button>
        </div>
      </div>
    </app-modal>

    <!-- Delete Confirmation Modal -->
    <app-modal 
      [visible]="isDeleteConfirmModalOpen" 
      [title]="deleteConfirmTitle"
      (visibleChange)="isDeleteConfirmModalOpen = $event">
      <div class="modal-body">
        <div class="toggle-confirm-content">
          <div class="confirm-icon delete">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" stroke="currentColor" stroke-width="2"/>
              <path d="M10 11v6M14 11v6" stroke="currentColor" stroke-width="2"/>
            </svg>
          </div>
          <div class="confirm-description">
            <p class="confirm-text">{{ deleteConfirmDescription }}</p>
          </div>
        </div>
        <div class="modal-actions">
          <app-button
            buttonType="ghost"
            (onClick)="cancelDelete()">
            \u041E\u0442\u043C\u0435\u043D\u0430
          </app-button>
          <app-button
            buttonType="danger"
            (onClick)="confirmDelete()">
            \u0423\u0434\u0430\u043B\u0438\u0442\u044C
          </app-button>
        </div>
      </div>
    </app-modal>
  `, styles: ["/* angular:styles/component:css;ed989acb9cea2734b5d5aee8a0b1123c1776713ac3c3dbc0d48c2d9ba078910e;/Users/baglan/repo/westwood/westwood-frontend/src/app/features/users/pages/users-page/users-page.component.ts */\n.page-wrapper {\n  background:\n    linear-gradient(\n      180deg,\n      #f0fdf4 0%,\n      #f8fafc 50%,\n      #f8fafc 100%);\n  min-height: calc(100vh - 64px);\n  padding: 2rem;\n  margin: -2rem;\n}\n.users-container {\n  max-width: 1400px;\n  margin: 0 auto;\n  position: relative;\n  min-height: 400px;\n}\n.page-loading-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 60vh;\n  width: 100%;\n}\n.page-header-section {\n  margin-bottom: 1.5rem;\n  display: flex;\n  justify-content: flex-end;\n}\n.add-user-btn {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  background: #16A34A;\n  color: white;\n  border: none;\n  border-radius: 12px;\n  padding: 0.75rem 1.5rem;\n  font-size: 0.9375rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.add-user-btn:hover {\n  background: #15803d;\n}\n.add-user-btn svg {\n  width: 18px;\n  height: 18px;\n}\n.table-container {\n  background: white;\n  border-radius: 16px;\n  overflow: hidden;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n}\n.users-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.users-table thead {\n  background: #f8fafc;\n}\n.users-table th {\n  padding: 1rem 1.5rem;\n  text-align: left;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #64748b;\n  border-bottom: 1px solid #e2e8f0;\n}\n.users-table td {\n  padding: 1rem 1.5rem;\n  border-bottom: 1px solid #f1f5f9;\n}\n.users-table tbody tr:hover {\n  background: #f8fafc;\n}\n.users-table tbody tr.current-user-row {\n  background: #f1f5f9;\n  border-left: 3px solid #64748b;\n}\n.users-table tbody tr.current-user-row:hover {\n  background: #e2e8f0;\n}\n.users-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.user-name-cell {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.user-name-link {\n  text-decoration: none;\n  color: #1f2937;\n  transition: color 0.2s;\n  cursor: pointer;\n}\n.user-name-link:hover {\n  color: #16A34A;\n}\n.user-name {\n  font-weight: 600;\n  color: inherit;\n}\n.user-role {\n  color: #475569;\n  font-size: 0.9375rem;\n}\n.user-date {\n  color: #64748b;\n  font-size: 0.875rem;\n}\n.online-status-cell {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.status-indicator {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.status-dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.status-indicator.online .status-dot {\n  background: #16A34A;\n  box-shadow: 0 0 0 2px rgba(22, 163, 74, 0.2);\n}\n.status-indicator.offline .status-dot {\n  background: #94a3b8;\n}\n.status-text {\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #475569;\n}\n.status-indicator.online .status-text {\n  color: #16A34A;\n}\n.last-seen {\n  font-size: 0.75rem;\n  color: #94a3b8;\n  margin-top: 0.125rem;\n}\n.actions-cell {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.action-link {\n  display: inline-flex;\n  text-decoration: none;\n  color: inherit;\n}\n:host ::ng-deep app-button svg,\napp-button svg {\n  width: 18px;\n  height: 18px;\n  flex-shrink: 0;\n  display: block;\n}\n:host ::ng-deep app-button.size-small svg,\napp-button.size-small svg {\n  width: 16px;\n  height: 16px;\n}\n.btn-icon {\n  width: 18px;\n  height: 18px;\n  flex-shrink: 0;\n  display: block;\n}\n.action-btn {\n  width: 32px;\n  height: 32px;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  background: white;\n  color: #64748b;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.15s;\n  padding: 0;\n}\n.action-btn svg {\n  width: 16px;\n  height: 16px;\n}\n.action-btn.view:hover {\n  background: #f0fdf4;\n  border-color: #bbf7d0;\n  color: #16A34A;\n}\n.action-btn.lock:hover {\n  background: #fef2f2;\n  border-color: #fecaca;\n  color: #dc2626;\n}\n.action-btn.delete:hover {\n  background: #fef2f2;\n  border-color: #fecaca;\n  color: #dc2626;\n}\n.action-btn.activate:hover {\n  background: #f0fdf4;\n  border-color: #bbf7d0;\n  color: #16A34A;\n}\n.form-group {\n  margin-bottom: 1.25rem;\n}\n.form-label {\n  display: block;\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #475569;\n  margin-bottom: 0.5rem;\n}\n.select-label {\n  display: block;\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #475569;\n  margin-bottom: 0.5rem;\n}\n.form-input {\n  width: 100%;\n  padding: 12px 16px;\n  border: 1px solid #cbd5e1;\n  border-radius: 10px;\n  font-size: 1rem;\n  outline: none;\n  transition: 0.2s;\n}\n.form-input:focus {\n  border-color: #16A34A;\n  box-shadow: 0 0 0 3px #dcfce7;\n}\n.form-input.error {\n  border-color: #dc2626;\n}\n.required-mark {\n  color: #dc2626;\n  margin-left: 0.25rem;\n}\n.select-wrapper {\n  position: relative;\n  width: 100%;\n}\n.form-select {\n  width: 100%;\n  padding: 12px 40px 12px 16px;\n  border: 1px solid #cbd5e1;\n  border-radius: 10px;\n  font-size: 1rem;\n  outline: none;\n  transition: all 0.2s ease;\n  background: white;\n  color: #1f2937;\n  appearance: none;\n  cursor: pointer;\n  font-weight: 500;\n}\n.form-select:hover {\n  border-color: #94a3b8;\n}\n.form-select:focus {\n  border-color: #16A34A;\n  box-shadow: 0 0 0 3px rgba(21, 128, 61, 0.1);\n}\n.form-select.error {\n  border-color: #dc2626;\n}\n.form-select.error:focus {\n  box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);\n}\n.select-arrow {\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 20px;\n  height: 20px;\n  color: #64748b;\n  pointer-events: none;\n  transition: transform 0.2s ease;\n}\n.select-wrapper:hover .select-arrow {\n  color: #475569;\n}\n.form-select:focus + .select-arrow {\n  color: #16A34A;\n}\n.form-select option {\n  padding: 12px;\n  font-weight: 500;\n}\n.form-select option:first-child {\n  color: #94a3b8;\n  font-weight: 400;\n}\n.error-message {\n  display: block;\n  font-size: 0.75rem;\n  color: #dc2626;\n  margin-top: 0.25rem;\n}\n.modal-footer {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.75rem;\n  margin-top: 1.5rem;\n  padding-top: 1.5rem;\n  border-top: 1px solid #e2e8f0;\n}\n.toggle-confirm-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1.5rem;\n  padding: 1rem 0;\n}\n.confirm-icon {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.confirm-icon.disable {\n  background: #fef2f2;\n  color: #dc2626;\n}\n.confirm-icon.delete {\n  background: #fef2f2;\n  color: #dc2626;\n}\n.confirm-icon svg {\n  width: 32px;\n  height: 32px;\n}\n.confirm-description {\n  text-align: center;\n}\n.confirm-text {\n  font-size: 0.9375rem;\n  color: #475569;\n  line-height: 1.6;\n  margin: 0;\n}\n.modal-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.75rem;\n  margin-top: 1.5rem;\n  padding-top: 1.5rem;\n  border-top: 1px solid #e2e8f0;\n}\n.loading-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 400px;\n}\n.mobile-users-cards {\n  display: none;\n  flex-direction: column;\n  gap: 1rem;\n  max-height: calc(100vh - 300px);\n  overflow-y: auto;\n  padding: 0.5rem;\n}\n.mobile-user-card {\n  background: white;\n  border-radius: 16px;\n  padding: 1rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n  text-decoration: none;\n  color: inherit;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  transition: all 0.2s ease;\n}\n.mobile-user-card:hover {\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  transform: translateY(-2px);\n}\n.mobile-user-card.current-user {\n  border: 2px solid #16A34A;\n  background: #f0fdf4;\n}\n.card-header-section {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.card-avatar {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #16A34A 0%,\n      #15803d 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n  font-size: 1rem;\n  color: white;\n  flex-shrink: 0;\n}\n.card-header-info {\n  flex: 1;\n  min-width: 0;\n}\n.card-name {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin-bottom: 0.25rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.card-email {\n  font-size: 0.875rem;\n  color: #64748b;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.card-status-badge {\n  flex-shrink: 0;\n}\n.card-body-section {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  padding-top: 0.75rem;\n  border-top: 1px solid #e5e7eb;\n}\n.card-info-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}\n.card-info-row .info-label {\n  font-size: 0.875rem;\n  color: #64748b;\n  font-weight: 500;\n}\n.card-info-row .info-value {\n  font-size: 0.875rem;\n  color: #1f2937;\n  font-weight: 600;\n  text-align: right;\n}\n.status-indicator-inline {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.status-indicator-inline .status-dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #94a3b8;\n  flex-shrink: 0;\n}\n.status-indicator-inline.online .status-dot {\n  background: #16A34A;\n  box-shadow: 0 0 0 2px rgba(22, 163, 74, 0.2);\n}\n.status-indicator-inline .status-text {\n  font-size: 0.875rem;\n  color: #64748b;\n  font-weight: 500;\n}\n.status-indicator-inline.online .status-text {\n  color: #16A34A;\n}\n.mobile-loading {\n  display: flex;\n  justify-content: center;\n  padding: 1rem;\n}\n@media (max-width: 768px) {\n  .page-wrapper {\n    margin: -1rem;\n    padding: 1rem;\n  }\n  .desktop-view {\n    display: none !important;\n  }\n  .mobile-view {\n    display: flex !important;\n  }\n  .mobile-users-cards {\n    max-height: calc(100vh - 250px);\n  }\n}\n@media (min-width: 769px) {\n  .mobile-view {\n    display: none !important;\n  }\n  .desktop-view {\n    display: block !important;\n  }\n}\n/*# sourceMappingURL=users-page.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UsersPageComponent, { className: "UsersPageComponent", filePath: "src/app/features/users/pages/users-page/users-page.component.ts", lineNumber: 1017 });
})();
export {
  UsersPageComponent
};
//# sourceMappingURL=chunk-WN37BBE4.js.map
