import {
  PaginatedTableWrapperComponent
} from "./chunk-CW5RRJN6.js";
import "./chunk-ACJ3P3PZ.js";
import {
  NotFoundStateComponent
} from "./chunk-KDGEWSUQ.js";
import {
  ClientsService
} from "./chunk-2UTAFSR4.js";
import {
  PhoneFormatPipe
} from "./chunk-2SOXI6WJ.js";
import {
  RefundConfirmationModalComponent
} from "./chunk-7B77KZVB.js";
import {
  AnalyticsService
} from "./chunk-IEZAC7LF.js";
import {
  PaymentViewModalComponent
} from "./chunk-PH24KZ6A.js";
import {
  BadgeComponent
} from "./chunk-I22BZ6HB.js";
import {
  LoaderComponent
} from "./chunk-3G3AASW4.js";
import {
  PaymentsService,
  TransactionModalService
} from "./chunk-ZMBHOZEX.js";
import {
  PageHeaderService
} from "./chunk-EWJYX3AR.js";
import {
  environment
} from "./chunk-6FFMNYG3.js";
import {
  ToastService
} from "./chunk-PIRIPCUZ.js";
import {
  ButtonComponent,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-FWOTYYMW.js";
import {
  IconButtonComponent
} from "./chunk-6F7JLQXK.js";
import {
  ActivatedRoute,
  ChangeDetectorRef,
  CommonModule,
  Component,
  HttpClient,
  HttpParams,
  Injectable,
  NgForOf,
  NgIf,
  Router,
  RouterLink,
  RouterModule,
  Subject,
  Title,
  forkJoin,
  inject,
  setClassMetadata,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
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
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵreference,
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
} from "./chunk-THV7WX37.js";

// src/app/core/services/bonuses.service.ts
var BonusesService = class _BonusesService {
  http;
  apiUrl = `${environment.apiUrl}/bonuses`;
  constructor(http) {
    this.http = http;
  }
  /**
   * Get client bonus history with pagination
   */
  getClientBonusHistory(clientId, page = 0, size = 100) {
    const params = new HttpParams().set("page", page.toString()).set("size", size.toString());
    return this.http.get(`${this.apiUrl}/client/${clientId}/history`, { params });
  }
  /**
   * Get client bonus balance
   */
  getClientBonusBalance(clientId) {
    return this.http.get(`${this.apiUrl}/client/${clientId}/balance`);
  }
  static \u0275fac = function BonusesService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BonusesService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BonusesService, factory: _BonusesService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BonusesService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/features/profile/pages/profile-page/profile-page.component.ts
var _c0 = (a0) => ["/users", a0];
function ProfilePageComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "app-loader", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("visible", true)("overlay", false);
  }
}
function ProfilePageComponent_app_not_found_state_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-not-found-state", 12);
  }
}
function ProfilePageComponent_div_4__svg_svg_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 16);
    \u0275\u0275element(1, "path", 106)(2, "path", 107);
    \u0275\u0275elementEnd();
  }
}
function ProfilePageComponent_div_4__svg_svg_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 16);
    \u0275\u0275element(1, "path", 108)(2, "circle", 109);
    \u0275\u0275elementEnd();
  }
}
function ProfilePageComponent_div_4_span_22_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 112);
    \u0275\u0275listener("click", function ProfilePageComponent_div_4_span_22_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const i_r4 = \u0275\u0275nextContext().index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removeTag(i_r4));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 16);
    \u0275\u0275element(2, "path", 113);
    \u0275\u0275elementEnd()();
  }
}
function ProfilePageComponent_div_4_span_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 110);
    \u0275\u0275text(1);
    \u0275\u0275template(2, ProfilePageComponent_div_4_span_22_button_2_Template, 3, 0, "button", 111);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tag_r5, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isEditingTags);
  }
}
function ProfilePageComponent_div_4_div_23_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 117);
    \u0275\u0275listener("click", function ProfilePageComponent_div_4_div_23_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.addTag());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 16);
    \u0275\u0275element(2, "path", 118);
    \u0275\u0275elementEnd()();
  }
}
function ProfilePageComponent_div_4_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 114)(1, "input", 115);
    \u0275\u0275twoWayListener("ngModelChange", function ProfilePageComponent_div_4_div_23_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.newTagInput, $event) || (ctx_r1.newTagInput = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown.enter", function ProfilePageComponent_div_4_div_23_Template_input_keydown_enter_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addTag());
    })("focus", function ProfilePageComponent_div_4_div_23_Template_input_focus_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.showTagsDropdown = true);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, ProfilePageComponent_div_4_div_23_button_2_Template, 3, 0, "button", 116);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newTagInput);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.newTagInput.trim());
  }
}
function ProfilePageComponent_div_4_div_24_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 125);
    \u0275\u0275listener("click", function ProfilePageComponent_div_4_div_24_button_7_Template_button_click_0_listener() {
      const tag_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.addTagFromDropdown(tag_r10));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tag_r10, " ");
  }
}
function ProfilePageComponent_div_4_div_24_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 126);
    \u0275\u0275text(1, " \u0412\u0441\u0435 \u043F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0442\u0435\u0433\u0438 \u0443\u0436\u0435 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u044B ");
    \u0275\u0275elementEnd();
  }
}
function ProfilePageComponent_div_4_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 119)(1, "div", 120)(2, "span");
    \u0275\u0275text(3, "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0442\u044D\u0433\u0438");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 121);
    \u0275\u0275listener("click", function ProfilePageComponent_div_4_div_24_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.showTagsDropdown = false);
    });
    \u0275\u0275text(5, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 122);
    \u0275\u0275template(7, ProfilePageComponent_div_4_div_24_button_7_Template, 2, 1, "button", 123)(8, ProfilePageComponent_div_4_div_24_div_8_Template, 2, 0, "div", 124);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r1.getFilteredTags());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getFilteredTags().length === 0 && ctx_r1.availableTags.length > 0);
  }
}
function ProfilePageComponent_div_4_button_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 127);
    \u0275\u0275listener("click", function ProfilePageComponent_div_4_button_25_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.startEditTags());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 16);
    \u0275\u0275element(2, "path", 128);
    \u0275\u0275elementEnd()();
  }
}
function ProfilePageComponent_div_4_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 129)(1, "button", 130);
    \u0275\u0275listener("click", function ProfilePageComponent_div_4_div_26_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.saveTags());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 16);
    \u0275\u0275element(3, "path", 118);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "button", 131);
    \u0275\u0275listener("click", function ProfilePageComponent_div_4_div_26_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.cancelEditTags());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 16);
    \u0275\u0275element(6, "path", 113);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.isSavingTags);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.isSavingTags);
  }
}
function ProfilePageComponent_div_4_button_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 132);
    \u0275\u0275listener("click", function ProfilePageComponent_div_4_button_34_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.startEditComment());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 16);
    \u0275\u0275element(2, "path", 133)(3, "path", 134);
    \u0275\u0275elementEnd()();
  }
}
function ProfilePageComponent_div_4_div_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 135)(1, "button", 136);
    \u0275\u0275listener("click", function ProfilePageComponent_div_4_div_35_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.saveComment());
    });
    \u0275\u0275text(2, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 137);
    \u0275\u0275listener("click", function ProfilePageComponent_div_4_div_35_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.cancelEditComment());
    });
    \u0275\u0275text(4, "\u041E\u0442\u043C\u0435\u043D\u0430");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.isSavingComment);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isSavingComment);
  }
}
function ProfilePageComponent_div_4_p_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 138);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.client.comment || "\u041D\u0435\u0442 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u044F");
  }
}
function ProfilePageComponent_div_4_textarea_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "textarea", 139);
    \u0275\u0275twoWayListener("ngModelChange", function ProfilePageComponent_div_4_textarea_38_Template_textarea_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.editedComment, $event) || (ctx_r1.editedComment = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editedComment);
  }
}
function ProfilePageComponent_div_4_button_88_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 140);
    \u0275\u0275listener("click", function ProfilePageComponent_div_4_button_88_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.startEditPersonal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 16);
    \u0275\u0275element(2, "path", 133)(3, "path", 134);
    \u0275\u0275elementEnd()();
  }
}
function ProfilePageComponent_div_4_div_89_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 141)(1, "button", 136);
    \u0275\u0275listener("click", function ProfilePageComponent_div_4_div_89_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.savePersonal());
    });
    \u0275\u0275text(2, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 137);
    \u0275\u0275listener("click", function ProfilePageComponent_div_4_div_89_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.cancelEditPersonal());
    });
    \u0275\u0275text(4, "\u041E\u0442\u043C\u0435\u043D\u0430");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.isSavingPersonal);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isSavingPersonal);
  }
}
function ProfilePageComponent_div_4_span_94_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 142);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.client.firstName);
  }
}
function ProfilePageComponent_div_4_input_95_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 143);
    \u0275\u0275twoWayListener("ngModelChange", function ProfilePageComponent_div_4_input_95_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.editedPersonal.firstName, $event) || (ctx_r1.editedPersonal.firstName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editedPersonal.firstName);
  }
}
function ProfilePageComponent_div_4_span_99_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 142);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.client.lastName);
  }
}
function ProfilePageComponent_div_4_input_100_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 143);
    \u0275\u0275twoWayListener("ngModelChange", function ProfilePageComponent_div_4_input_100_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.editedPersonal.lastName, $event) || (ctx_r1.editedPersonal.lastName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editedPersonal.lastName);
  }
}
function ProfilePageComponent_div_4_span_104_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 142);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.client.type === "business" ? "\u0411\u0438\u0437\u043D\u0435\u0441" : "\u0418\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u044B\u0439");
  }
}
function ProfilePageComponent_div_4_select_105_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 144);
    \u0275\u0275twoWayListener("ngModelChange", function ProfilePageComponent_div_4_select_105_Template_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.editedPersonal.type, $event) || (ctx_r1.editedPersonal.type = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(1, "option", 145);
    \u0275\u0275text(2, "\u0418\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u044B\u0439");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "option", 146);
    \u0275\u0275text(4, "\u0411\u0438\u0437\u043D\u0435\u0441");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editedPersonal.type);
  }
}
function ProfilePageComponent_div_4_button_114_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 140);
    \u0275\u0275listener("click", function ProfilePageComponent_div_4_button_114_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.startEditContacts());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 16);
    \u0275\u0275element(2, "path", 133)(3, "path", 134);
    \u0275\u0275elementEnd()();
  }
}
function ProfilePageComponent_div_4_div_115_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 141)(1, "button", 136);
    \u0275\u0275listener("click", function ProfilePageComponent_div_4_div_115_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.saveContacts());
    });
    \u0275\u0275text(2, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 137);
    \u0275\u0275listener("click", function ProfilePageComponent_div_4_div_115_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.cancelEditContacts());
    });
    \u0275\u0275text(4, "\u041E\u0442\u043C\u0435\u043D\u0430");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.isSavingContacts);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isSavingContacts);
  }
}
function ProfilePageComponent_div_4_span_120_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 142);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "phoneFormat");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, ctx_r1.client.phone));
  }
}
function ProfilePageComponent_div_4_input_121_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 147);
    \u0275\u0275twoWayListener("ngModelChange", function ProfilePageComponent_div_4_input_121_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.editedContacts.phone, $event) || (ctx_r1.editedContacts.phone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editedContacts.phone);
  }
}
function ProfilePageComponent_div_4_span_125_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 148);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.client.email || "\u2014");
  }
}
function ProfilePageComponent_div_4_input_126_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 149);
    \u0275\u0275twoWayListener("ngModelChange", function ProfilePageComponent_div_4_input_126_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.editedContacts.email, $event) || (ctx_r1.editedContacts.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editedContacts.email);
    \u0275\u0275property("disabled", true);
  }
}
function ProfilePageComponent_div_4_div_155_div_3_ng_container_17_app_badge_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-badge", 171);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bonus_r26 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" -", ctx_r1.formatAmount(bonus_r26.amount), " ");
  }
}
function ProfilePageComponent_div_4_div_155_div_3_ng_container_17_app_badge_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-badge", 172);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bonus_r26 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatAmount(bonus_r26.amount), " ");
  }
}
function ProfilePageComponent_div_4_div_155_div_3_ng_container_17_app_badge_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-badge", 173);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bonus_r26 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatAmount(bonus_r26.amount), " ");
  }
}
function ProfilePageComponent_div_4_div_155_div_3_ng_container_17_app_badge_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-badge", 174);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bonus_r26 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" +", ctx_r1.formatAmount(bonus_r26.amount), " ");
  }
}
function ProfilePageComponent_div_4_div_155_div_3_ng_container_17_app_badge_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-badge", 175);
    \u0275\u0275text(1, " \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u043E ");
    \u0275\u0275elementEnd();
  }
}
function ProfilePageComponent_div_4_div_155_div_3_ng_container_17_app_badge_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-badge", 176);
    \u0275\u0275text(1, " \u041E\u0442\u043E\u0437\u0432\u0430\u043D\u043E ");
    \u0275\u0275elementEnd();
  }
}
function ProfilePageComponent_div_4_div_155_div_3_ng_container_17_app_badge_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-badge", 177);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bonus_r26 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("badgeType", ctx_r1.getDaysUntilExpiry(bonus_r26.expiresAt) <= 7 ? "warning" : "success");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r1.getDaysUntilExpiry(bonus_r26.expiresAt), " ", ctx_r1.getDaysText(ctx_r1.getDaysUntilExpiry(bonus_r26.expiresAt)), " ");
  }
}
function ProfilePageComponent_div_4_div_155_div_3_ng_container_17_app_badge_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-badge", 178);
    \u0275\u0275text(1, " \u0418\u0441\u0442\u0435\u043A ");
    \u0275\u0275elementEnd();
  }
}
function ProfilePageComponent_div_4_div_155_div_3_ng_container_17_tr_27_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 191);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bonus_r26 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", bonus_r26.refundReason, " ");
  }
}
function ProfilePageComponent_div_4_div_155_div_3_ng_container_17_tr_27_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 192);
    \u0275\u0275text(1, " \u041F\u0440\u0438\u0447\u0438\u043D\u0430 \u043D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D\u0430 ");
    \u0275\u0275elementEnd();
  }
}
function ProfilePageComponent_div_4_div_155_div_3_ng_container_17_tr_27_a_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 193);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bonus_r26 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c0, bonus_r26.initiatedById));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", bonus_r26.initiatedBy, " ");
  }
}
function ProfilePageComponent_div_4_div_155_div_3_ng_container_17_tr_27_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 194);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bonus_r26 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", bonus_r26.initiatedBy, " ");
  }
}
function ProfilePageComponent_div_4_div_155_div_3_ng_container_17_tr_27_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 195);
    \u0275\u0275text(1, " \u041D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D ");
    \u0275\u0275elementEnd();
  }
}
function ProfilePageComponent_div_4_div_155_div_3_ng_container_17_tr_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 179)(1, "td", 180)(2, "div", 181)(3, "div", 182)(4, "div", 183)(5, "span", 184);
    \u0275\u0275text(6, "\u041F\u0440\u0438\u0447\u0438\u043D\u0430 \u0432\u043E\u0437\u0432\u0440\u0430\u0442\u0430:");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, ProfilePageComponent_div_4_div_155_div_3_ng_container_17_tr_27_div_7_Template, 2, 1, "div", 185)(8, ProfilePageComponent_div_4_div_155_div_3_ng_container_17_tr_27_div_8_Template, 2, 0, "div", 186);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 187)(10, "span", 184);
    \u0275\u0275text(11, "\u0418\u043D\u0438\u0446\u0438\u0430\u0442\u043E\u0440:");
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, ProfilePageComponent_div_4_div_155_div_3_ng_container_17_tr_27_a_12_Template, 2, 4, "a", 188)(13, ProfilePageComponent_div_4_div_155_div_3_ng_container_17_tr_27_div_13_Template, 2, 1, "div", 189)(14, ProfilePageComponent_div_4_div_155_div_3_ng_container_17_tr_27_div_14_Template, 2, 0, "div", 190);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const bonus_r26 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", bonus_r26.refundReason);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !bonus_r26.refundReason);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", bonus_r26.initiatedBy && bonus_r26.initiatedById);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", bonus_r26.initiatedBy && !bonus_r26.initiatedById);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !bonus_r26.initiatedBy);
  }
}
function ProfilePageComponent_div_4_div_155_div_3_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "tr")(2, "td")(3, "span", 155);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "td")(6, "div", 156);
    \u0275\u0275template(7, ProfilePageComponent_div_4_div_155_div_3_ng_container_17_app_badge_7_Template, 2, 1, "app-badge", 157)(8, ProfilePageComponent_div_4_div_155_div_3_ng_container_17_app_badge_8_Template, 2, 1, "app-badge", 158)(9, ProfilePageComponent_div_4_div_155_div_3_ng_container_17_app_badge_9_Template, 2, 1, "app-badge", 159)(10, ProfilePageComponent_div_4_div_155_div_3_ng_container_17_app_badge_10_Template, 2, 1, "app-badge", 160);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td")(12, "span", 161);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td")(15, "span", 162);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275template(18, ProfilePageComponent_div_4_div_155_div_3_ng_container_17_app_badge_18_Template, 2, 0, "app-badge", 163)(19, ProfilePageComponent_div_4_div_155_div_3_ng_container_17_app_badge_19_Template, 2, 0, "app-badge", 164)(20, ProfilePageComponent_div_4_div_155_div_3_ng_container_17_app_badge_20_Template, 2, 3, "app-badge", 165)(21, ProfilePageComponent_div_4_div_155_div_3_ng_container_17_app_badge_21_Template, 2, 0, "app-badge", 166);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "td")(23, "div", 167)(24, "app-icon-button", 168);
    \u0275\u0275listener("onClick", function ProfilePageComponent_div_4_div_155_div_3_ng_container_17_Template_app_icon_button_onClick_24_listener() {
      const bonus_r26 = \u0275\u0275restoreView(_r25).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.toggleBonusRow(bonus_r26.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(25, "svg", 16);
    \u0275\u0275element(26, "path", 169);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275template(27, ProfilePageComponent_div_4_div_155_div_3_ng_container_17_tr_27_Template, 15, 5, "tr", 170);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const bonus_r26 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275classProp("expired", ctx_r1.getDaysUntilExpiry(bonus_r26.expiresAt) <= 0 && !bonus_r26.used && bonus_r26.type !== "refund")("expiring-soon", ctx_r1.getDaysUntilExpiry(bonus_r26.expiresAt) <= 7 && ctx_r1.getDaysUntilExpiry(bonus_r26.expiresAt) > 0)("used", bonus_r26.used)("refund", bonus_r26.type === "refund");
    \u0275\u0275advance(2);
    \u0275\u0275classMap("bonus-type-" + bonus_r26.type);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getBonusTypeLabel(bonus_r26.type), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", bonus_r26.used);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", bonus_r26.type === "refund");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", bonus_r26.type !== "refund" && !bonus_r26.used && ctx_r1.getDaysUntilExpiry(bonus_r26.expiresAt) <= 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", bonus_r26.type !== "refund" && !bonus_r26.used && ctx_r1.getDaysUntilExpiry(bonus_r26.expiresAt) > 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(bonus_r26.issuedAt));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(bonus_r26.expiresAt));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", bonus_r26.used);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", bonus_r26.type === "refund");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", bonus_r26.type !== "refund" && !bonus_r26.used && ctx_r1.getDaysUntilExpiry(bonus_r26.expiresAt) > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", bonus_r26.type !== "refund" && !bonus_r26.used && ctx_r1.getDaysUntilExpiry(bonus_r26.expiresAt) <= 0);
    \u0275\u0275advance(3);
    \u0275\u0275property("tooltip", ctx_r1.isBonusRowExpanded(bonus_r26.id) ? "\u0421\u043A\u0440\u044B\u0442\u044C \u0434\u0435\u0442\u0430\u043B\u0438" : "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0434\u0435\u0442\u0430\u043B\u0438");
    \u0275\u0275advance();
    \u0275\u0275classProp("rotated", ctx_r1.isBonusRowExpanded(bonus_r26.id));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.isBonusRowExpanded(bonus_r26.id));
  }
}
function ProfilePageComponent_div_4_div_155_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 94)(1, "table", 153)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "\u0422\u0438\u043F \u0431\u043E\u043D\u0443\u0441\u0430");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "\u0421\u0443\u043C\u043C\u0430");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "\u041D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u043E");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "\u0418\u0441\u0442\u0435\u043A\u0430\u0435\u0442");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "\u041E\u0441\u0442\u0430\u043B\u043E\u0441\u044C");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275template(17, ProfilePageComponent_div_4_div_155_div_3_ng_container_17_Template, 28, 25, "ng-container", 154);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const paginatedBonuses_r27 = \u0275\u0275reference(2);
    \u0275\u0275advance(17);
    \u0275\u0275property("ngForOf", paginatedBonuses_r27.paginatedData);
  }
}
function ProfilePageComponent_div_4_div_155_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 196);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 16);
    \u0275\u0275element(2, "path", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "\u041D\u0435\u0442 \u0430\u043A\u0442\u0438\u0432\u043D\u044B\u0445 \u0431\u043E\u043D\u0443\u0441\u043E\u0432");
    \u0275\u0275elementEnd()();
  }
}
function ProfilePageComponent_div_4_div_155_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 150)(1, "app-paginated-table-wrapper", 151, 1);
    \u0275\u0275template(3, ProfilePageComponent_div_4_div_155_div_3_Template, 18, 1, "div", 152)(4, ProfilePageComponent_div_4_div_155_div_4_Template, 5, 0, "div", 104);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("paginationEnabled", true)("data", ctx_r1.bonusesDetails)("defaultPageSize", 10);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.bonusesDetails.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.bonusesDetails.length === 0);
  }
}
function ProfilePageComponent_div_4_div_156_div_1_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function ProfilePageComponent_div_4_div_156_div_1_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span");
  }
}
function ProfilePageComponent_div_4_div_156_div_1_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "+");
    \u0275\u0275elementEnd();
  }
}
function ProfilePageComponent_div_4_div_156_div_1_span_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u043E");
    \u0275\u0275elementEnd();
  }
}
function ProfilePageComponent_div_4_div_156_div_1_span_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u041E\u0442\u043E\u0437\u0432\u0430\u043D\u043E");
    \u0275\u0275elementEnd();
  }
}
function ProfilePageComponent_div_4_div_156_div_1_span_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bonus_r29 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r1.getDaysUntilExpiry(bonus_r29.expiresAt), " ", ctx_r1.getDaysText(ctx_r1.getDaysUntilExpiry(bonus_r29.expiresAt)), " ");
  }
}
function ProfilePageComponent_div_4_div_156_div_1_span_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u0418\u0441\u0442\u0435\u043A");
    \u0275\u0275elementEnd();
  }
}
function ProfilePageComponent_div_4_div_156_div_1_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 207)(1, "span", 208);
    \u0275\u0275text(2, "\u041F\u0440\u0438\u0447\u0438\u043D\u0430 \u0432\u043E\u0437\u0432\u0440\u0430\u0442\u0430:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 209);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const bonus_r29 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(bonus_r29.refundReason);
  }
}
function ProfilePageComponent_div_4_div_156_div_1_div_34_a_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 212);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bonus_r29 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c0, bonus_r29.initiatedById));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(bonus_r29.initiatedBy);
  }
}
function ProfilePageComponent_div_4_div_156_div_1_div_34_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bonus_r29 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(bonus_r29.initiatedBy);
  }
}
function ProfilePageComponent_div_4_div_156_div_1_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 207)(1, "span", 208);
    \u0275\u0275text(2, "\u0418\u043D\u0438\u0446\u0438\u0430\u0442\u043E\u0440:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 209);
    \u0275\u0275template(4, ProfilePageComponent_div_4_div_156_div_1_div_34_a_4_Template, 2, 4, "a", 211)(5, ProfilePageComponent_div_4_div_156_div_1_div_34_span_5_Template, 2, 1, "span", 204);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const bonus_r29 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", bonus_r29.initiatedById);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !bonus_r29.initiatedById);
  }
}
function ProfilePageComponent_div_4_div_156_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 199)(1, "div", 200);
    \u0275\u0275listener("click", function ProfilePageComponent_div_4_div_156_div_1_Template_div_click_1_listener() {
      const bonus_r29 = \u0275\u0275restoreView(_r28).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleMobileBonusCard(bonus_r29.id));
    });
    \u0275\u0275elementStart(2, "div", 201)(3, "div")(4, "div", 202);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 203);
    \u0275\u0275template(7, ProfilePageComponent_div_4_div_156_div_1_span_7_Template, 2, 0, "span", 204)(8, ProfilePageComponent_div_4_div_156_div_1_span_8_Template, 1, 0, "span", 204)(9, ProfilePageComponent_div_4_div_156_div_1_span_9_Template, 2, 0, "span", 204);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 205);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(12, "svg", 16);
    \u0275\u0275element(13, "path", 87);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(14, "div", 206)(15, "div", 207)(16, "span", 208);
    \u0275\u0275text(17, "\u041D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u043E:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 209);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 207)(21, "span", 208);
    \u0275\u0275text(22, "\u0418\u0441\u0442\u0435\u043A\u0430\u0435\u0442:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 209);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 207)(26, "span", 208);
    \u0275\u0275text(27, "\u0421\u0442\u0430\u0442\u0443\u0441:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span", 209);
    \u0275\u0275template(29, ProfilePageComponent_div_4_div_156_div_1_span_29_Template, 2, 0, "span", 204)(30, ProfilePageComponent_div_4_div_156_div_1_span_30_Template, 2, 0, "span", 204)(31, ProfilePageComponent_div_4_div_156_div_1_span_31_Template, 2, 2, "span", 204)(32, ProfilePageComponent_div_4_div_156_div_1_span_32_Template, 2, 0, "span", 204);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(33, ProfilePageComponent_div_4_div_156_div_1_div_33_Template, 5, 1, "div", 210)(34, ProfilePageComponent_div_4_div_156_div_1_div_34_Template, 6, 2, "div", 210);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const bonus_r29 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.getBonusTypeLabel(bonus_r29.type));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", bonus_r29.used);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", bonus_r29.type === "refund");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", bonus_r29.type !== "refund" && !bonus_r29.used);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatAmount(bonus_r29.amount), " \u20B8 ");
    \u0275\u0275advance();
    \u0275\u0275classProp("expanded", ctx_r1.isMobileBonusExpanded(bonus_r29.id));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("expanded", ctx_r1.isMobileBonusExpanded(bonus_r29.id));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(bonus_r29.issuedAt));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(bonus_r29.expiresAt));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", bonus_r29.used);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", bonus_r29.type === "refund");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", bonus_r29.type !== "refund" && !bonus_r29.used && ctx_r1.getDaysUntilExpiry(bonus_r29.expiresAt) > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", bonus_r29.type !== "refund" && !bonus_r29.used && ctx_r1.getDaysUntilExpiry(bonus_r29.expiresAt) <= 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", bonus_r29.refundReason);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", bonus_r29.initiatedBy);
  }
}
function ProfilePageComponent_div_4_div_156_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 197);
    \u0275\u0275template(1, ProfilePageComponent_div_4_div_156_div_1_Template, 35, 17, "div", 198);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.bonusesDetails);
  }
}
function ProfilePageComponent_div_4_tr_188_app_badge_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-badge", 174);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const payment_r31 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" +", ctx_r1.formatAmount(payment_r31.bonusEarned), " ");
  }
}
function ProfilePageComponent_div_4_tr_188_app_badge_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-badge", 171);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const payment_r31 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" -", ctx_r1.formatAmount(payment_r31.bonusUsed), " ");
  }
}
function ProfilePageComponent_div_4_tr_188_app_badge_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-badge", 172);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const payment_r31 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" -", ctx_r1.formatAmount(payment_r31.bonusRevoked), " ");
  }
}
function ProfilePageComponent_div_4_tr_188_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 232);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function ProfilePageComponent_div_4_tr_188_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 213)(1, "td", 214)(2, "span", 215);
    \u0275\u0275listener("click", function ProfilePageComponent_div_4_tr_188_Template_span_click_2_listener() {
      const payment_r31 = \u0275\u0275restoreView(_r30).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openPaymentView(payment_r31.id));
    });
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 216)(5, "span", 217);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td", 218)(8, "div", 156);
    \u0275\u0275template(9, ProfilePageComponent_div_4_tr_188_app_badge_9_Template, 2, 1, "app-badge", 160)(10, ProfilePageComponent_div_4_tr_188_app_badge_10_Template, 2, 1, "app-badge", 157)(11, ProfilePageComponent_div_4_tr_188_app_badge_11_Template, 2, 1, "app-badge", 158)(12, ProfilePageComponent_div_4_tr_188_span_12_Template, 2, 0, "span", 219);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td", 220);
    \u0275\u0275element(14, "app-badge", 221);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 222)(16, "app-badge", 223);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "td", 224)(19, "div", 225)(20, "span", 226);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 227);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "td", 228)(25, "div", 167)(26, "app-icon-button", 229);
    \u0275\u0275listener("onClick", function ProfilePageComponent_div_4_tr_188_Template_app_icon_button_onClick_26_listener() {
      const payment_r31 = \u0275\u0275restoreView(_r30).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openRefundModal(payment_r31));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(27, "svg", 230);
    \u0275\u0275element(28, "path", 231);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const payment_r31 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(payment_r31.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.formatAmount(payment_r31.amount), " \u20B8");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", payment_r31.bonusEarned > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", payment_r31.bonusUsed > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", payment_r31.bonusRevoked > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", payment_r31.bonusEarned === 0 && payment_r31.bonusUsed === 0 && payment_r31.bonusRevoked === 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("paymentMethod", ctx_r1.getPaymentMethodForBadge(payment_r31.paymentMethod));
    \u0275\u0275advance(2);
    \u0275\u0275property("badgeType", payment_r31.isRefund ? "refund" : "payment")("icon", payment_r31.isRefund ? "refund" : "payment");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", payment_r31.isRefund ? "\u0412\u043E\u0437\u0432\u0440\u0430\u0442" : "\u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E", " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(payment_r31.date);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(payment_r31.time);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", payment_r31.isRefund);
  }
}
function ProfilePageComponent_div_4_div_189_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 196);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 230);
    \u0275\u0275element(2, "path", 233)(3, "rect", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "\u041F\u043B\u0430\u0442\u0435\u0436\u0438 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u044B");
    \u0275\u0275elementEnd()();
  }
}
function ProfilePageComponent_div_4_div_190_div_1_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 243)(1, "span", 244);
    \u0275\u0275text(2, "\u0411\u043E\u043D\u0443\u0441\u043E\u0432 \u043D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u043E:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 245);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const payment_r33 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("+", ctx_r1.formatAmount(payment_r33.bonusEarned), "");
  }
}
function ProfilePageComponent_div_4_div_190_div_1_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 243)(1, "span", 244);
    \u0275\u0275text(2, "\u0411\u043E\u043D\u0443\u0441\u043E\u0432 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u043E:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 245);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const payment_r33 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("-", ctx_r1.formatAmount(payment_r33.bonusUsed), "");
  }
}
function ProfilePageComponent_div_4_div_190_div_1_div_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 243)(1, "button", 247);
    \u0275\u0275listener("click", function ProfilePageComponent_div_4_div_190_div_1_div_34_Template_button_click_1_listener($event) {
      \u0275\u0275restoreView(_r34);
      const payment_r33 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      ctx_r1.openRefundModal(payment_r33);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 16);
    \u0275\u0275element(3, "path", 231);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " \u0412\u043E\u0437\u0432\u0440\u0430\u0442 ");
    \u0275\u0275elementEnd()();
  }
}
function ProfilePageComponent_div_4_div_190_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 236)(1, "div", 237);
    \u0275\u0275listener("click", function ProfilePageComponent_div_4_div_190_div_1_Template_div_click_1_listener() {
      const payment_r33 = \u0275\u0275restoreView(_r32).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleMobilePaymentCard(payment_r33.id));
    });
    \u0275\u0275elementStart(2, "div", 238)(3, "div")(4, "div", 239);
    \u0275\u0275listener("click", function ProfilePageComponent_div_4_div_190_div_1_Template_div_click_4_listener($event) {
      const payment_r33 = \u0275\u0275restoreView(_r32).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      ctx_r1.openPaymentView(payment_r33.id);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 240);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 241);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 16);
    \u0275\u0275element(10, "path", 87);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(11, "div", 242)(12, "div", 243)(13, "span", 244);
    \u0275\u0275text(14, "\u0414\u0430\u0442\u0430:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 245);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 243)(18, "span", 244);
    \u0275\u0275text(19, "\u0412\u0440\u0435\u043C\u044F:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 245);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(22, ProfilePageComponent_div_4_div_190_div_1_div_22_Template, 5, 1, "div", 246)(23, ProfilePageComponent_div_4_div_190_div_1_div_23_Template, 5, 1, "div", 246);
    \u0275\u0275elementStart(24, "div", 243)(25, "span", 244);
    \u0275\u0275text(26, "\u0421\u043F\u043E\u0441\u043E\u0431 \u043E\u043F\u043B\u0430\u0442\u044B:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 245);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 243)(30, "span", 244);
    \u0275\u0275text(31, "\u0421\u0442\u0430\u0442\u0443\u0441:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span", 245);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(34, ProfilePageComponent_div_4_div_190_div_1_div_34_Template, 5, 0, "div", 246);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const payment_r33 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(payment_r33.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.formatAmount(payment_r33.amount), " \u20B8");
    \u0275\u0275advance();
    \u0275\u0275classProp("expanded", ctx_r1.isMobilePaymentExpanded(payment_r33.id));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("expanded", ctx_r1.isMobilePaymentExpanded(payment_r33.id));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(payment_r33.date);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(payment_r33.time);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", payment_r33.bonusEarned > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", payment_r33.bonusUsed > 0);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.getPaymentMethodLabel(payment_r33.paymentMethod));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(payment_r33.isRefund ? "\u0412\u043E\u0437\u0432\u0440\u0430\u0442" : "\u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !payment_r33.isRefund);
  }
}
function ProfilePageComponent_div_4_div_190_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 234);
    \u0275\u0275template(1, ProfilePageComponent_div_4_div_190_div_1_Template, 35, 13, "div", 235);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const paginatedTable_r35 = \u0275\u0275reference(168);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", paginatedTable_r35.paginatedData);
  }
}
function ProfilePageComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14)(2, "button", 15);
    \u0275\u0275listener("click", function ProfilePageComponent_div_4_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openDeleteModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 16);
    \u0275\u0275element(4, "path", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "div", 18)(6, "div", 19)(7, "div", 20);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 21)(10, "div", 22)(11, "h1", 23);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 24);
    \u0275\u0275template(14, ProfilePageComponent_div_4__svg_svg_14_Template, 3, 0, "svg", 25)(15, ProfilePageComponent_div_4__svg_svg_15_Template, 3, 0, "svg", 25);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "p", 26);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "phoneFormat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 27)(21, "div", 28);
    \u0275\u0275template(22, ProfilePageComponent_div_4_span_22_Template, 3, 2, "span", 29)(23, ProfilePageComponent_div_4_div_23_Template, 3, 2, "div", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275template(24, ProfilePageComponent_div_4_div_24_Template, 9, 2, "div", 31)(25, ProfilePageComponent_div_4_button_25_Template, 3, 0, "button", 32)(26, ProfilePageComponent_div_4_div_26_Template, 7, 2, "div", 33);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(27, "div", 34)(28, "div", 35)(29, "div", 36);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(30, "svg", 16);
    \u0275\u0275element(31, "path", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(32, "span");
    \u0275\u0275text(33, "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 \u043E \u043A\u043B\u0438\u0435\u043D\u0442\u0435");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(34, ProfilePageComponent_div_4_button_34_Template, 4, 0, "button", 38)(35, ProfilePageComponent_div_4_div_35_Template, 5, 2, "div", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 40);
    \u0275\u0275template(37, ProfilePageComponent_div_4_p_37_Template, 2, 1, "p", 41)(38, ProfilePageComponent_div_4_textarea_38_Template, 1, 1, "textarea", 42);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 43)(40, "div", 44)(41, "div", 45);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(42, "svg", 16);
    \u0275\u0275element(43, "path", 46)(44, "rect", 47)(45, "path", 48);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(46, "div", 49)(47, "span", 50);
    \u0275\u0275text(48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "span", 51);
    \u0275\u0275text(50, "\u0422\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u0439");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(51, "div", 44)(52, "div", 52);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(53, "svg", 16);
    \u0275\u0275element(54, "path", 53);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(55, "div", 49)(56, "span", 50);
    \u0275\u0275text(57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "span", 51);
    \u0275\u0275text(59, "\u041E\u0431\u0449\u0430\u044F \u0441\u0443\u043C\u043C\u0430");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(60, "div", 44)(61, "div", 54);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(62, "svg", 16);
    \u0275\u0275element(63, "path", 55);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(64, "div", 49)(65, "span", 50);
    \u0275\u0275text(66);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "span", 51);
    \u0275\u0275text(68, "\u0411\u043E\u043D\u0443\u0441\u043E\u0432 \u043D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u043E");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(69, "div", 44)(70, "div", 56);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(71, "svg", 16);
    \u0275\u0275element(72, "circle", 57)(73, "path", 58);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(74, "div", 49)(75, "span", 50);
    \u0275\u0275text(76);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "span", 51);
    \u0275\u0275text(78, "\u0411\u043E\u043D\u0443\u0441\u043E\u0432 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u043E");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(79, "div", 59)(80, "div", 60)(81, "div", 61)(82, "div", 62)(83, "div", 63);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(84, "svg", 16);
    \u0275\u0275element(85, "path", 64);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(86, "h3", 65);
    \u0275\u0275text(87, "\u041B\u0438\u0447\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(88, ProfilePageComponent_div_4_button_88_Template, 4, 0, "button", 66)(89, ProfilePageComponent_div_4_div_89_Template, 5, 2, "div", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "div", 68)(91, "div", 69)(92, "span", 70);
    \u0275\u0275text(93, "\u0418\u043C\u044F");
    \u0275\u0275elementEnd();
    \u0275\u0275template(94, ProfilePageComponent_div_4_span_94_Template, 2, 1, "span", 71)(95, ProfilePageComponent_div_4_input_95_Template, 1, 1, "input", 72);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "div", 69)(97, "span", 70);
    \u0275\u0275text(98, "\u0424\u0430\u043C\u0438\u043B\u0438\u044F");
    \u0275\u0275elementEnd();
    \u0275\u0275template(99, ProfilePageComponent_div_4_span_99_Template, 2, 1, "span", 71)(100, ProfilePageComponent_div_4_input_100_Template, 1, 1, "input", 72);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(101, "div", 69)(102, "span", 70);
    \u0275\u0275text(103, "\u0422\u0438\u043F \u043A\u043B\u0438\u0435\u043D\u0442\u0430");
    \u0275\u0275elementEnd();
    \u0275\u0275template(104, ProfilePageComponent_div_4_span_104_Template, 2, 1, "span", 71)(105, ProfilePageComponent_div_4_select_105_Template, 5, 1, "select", 73);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(106, "div", 60)(107, "div", 61)(108, "div", 62)(109, "div", 63);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(110, "svg", 16);
    \u0275\u0275element(111, "path", 74);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(112, "h3", 65);
    \u0275\u0275text(113, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(114, ProfilePageComponent_div_4_button_114_Template, 4, 0, "button", 66)(115, ProfilePageComponent_div_4_div_115_Template, 5, 2, "div", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(116, "div", 68)(117, "div", 69)(118, "span", 70);
    \u0275\u0275text(119, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D");
    \u0275\u0275elementEnd();
    \u0275\u0275template(120, ProfilePageComponent_div_4_span_120_Template, 3, 3, "span", 71)(121, ProfilePageComponent_div_4_input_121_Template, 1, 1, "input", 75);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(122, "div", 69)(123, "span", 70);
    \u0275\u0275text(124, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275template(125, ProfilePageComponent_div_4_span_125_Template, 2, 1, "span", 76)(126, ProfilePageComponent_div_4_input_126_Template, 1, 2, "input", 77);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(127, "div", 78)(128, "div", 79);
    \u0275\u0275listener("click", function ProfilePageComponent_div_4_Template_div_click_128_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleBonusesExpanded());
    });
    \u0275\u0275elementStart(129, "div", 62)(130, "div", 63);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(131, "svg", 16);
    \u0275\u0275element(132, "path", 55);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(133, "div", 80)(134, "h3", 65);
    \u0275\u0275text(135, "\u0414\u0435\u0442\u0430\u043B\u0438 \u0431\u043E\u043D\u0443\u0441\u043E\u0432");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(136, "div", 81)(137, "div", 82)(138, "span", 51);
    \u0275\u0275text(139, "\u041E\u0441\u0442\u0430\u043B\u043E\u0441\u044C:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(140, "span", 83);
    \u0275\u0275text(141);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(142, "div", 82)(143, "span", 51);
    \u0275\u0275text(144, "\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u043E:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(145, "span", 84);
    \u0275\u0275text(146);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(147, "div", 82)(148, "span", 51);
    \u0275\u0275text(149, "\u0421\u0433\u043E\u0440\u0435\u043B\u043E:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(150, "span", 85);
    \u0275\u0275text(151);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(152, "button", 86);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(153, "svg", 16);
    \u0275\u0275element(154, "path", 87);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(155, ProfilePageComponent_div_4_div_155_Template, 5, 5, "div", 88)(156, ProfilePageComponent_div_4_div_156_Template, 2, 1, "div", 89);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(157, "div", 90)(158, "div", 61)(159, "div", 62)(160, "div", 63);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(161, "svg", 16);
    \u0275\u0275element(162, "path", 91);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(163, "h3", 65);
    \u0275\u0275text(164, "\u0418\u0441\u0442\u043E\u0440\u0438\u044F \u043F\u043B\u0430\u0442\u0435\u0436\u0435\u0439");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(165, "span", 92);
    \u0275\u0275text(166);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(167, "app-paginated-table-wrapper", 93, 0)(169, "div", 94)(170, "table", 95)(171, "thead")(172, "tr")(173, "th", 96);
    \u0275\u0275text(174, "ID \u043F\u043B\u0430\u0442\u0435\u0436\u0430");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(175, "th", 97);
    \u0275\u0275text(176, "\u0421\u0443\u043C\u043C\u0430");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(177, "th", 98);
    \u0275\u0275text(178, "\u0411\u043E\u043D\u0443\u0441\u044B");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(179, "th", 99);
    \u0275\u0275text(180, "\u0421\u043F\u043E\u0441\u043E\u0431 \u043E\u043F\u043B\u0430\u0442\u044B");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(181, "th", 100);
    \u0275\u0275text(182, "\u0421\u0442\u0430\u0442\u0443\u0441");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(183, "th", 101);
    \u0275\u0275text(184, "\u0414\u0430\u0442\u0430 \u0438 \u0432\u0440\u0435\u043C\u044F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(185, "th", 102);
    \u0275\u0275text(186, "\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(187, "tbody");
    \u0275\u0275template(188, ProfilePageComponent_div_4_tr_188_Template, 29, 13, "tr", 103);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(189, ProfilePageComponent_div_4_div_189_Template, 6, 0, "div", 104);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(190, ProfilePageComponent_div_4_div_190_Template, 2, 1, "div", 105);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const paginatedTable_r35 = \u0275\u0275reference(168);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getInitials(), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.getFullName());
    \u0275\u0275advance();
    \u0275\u0275classProp("business", ctx_r1.client.type === "business");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.client.type === "business");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.client.type === "individual");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.client.type === "business" ? "\u0411\u0438\u0437\u043D\u0435\u0441" : "\u0418\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u044B\u0439", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 49, ctx_r1.client.phone));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.client.tags);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isEditingTags);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isEditingTags && ctx_r1.showTagsDropdown && ctx_r1.availableTags.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isEditingTags);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isEditingTags);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", !ctx_r1.isEditingComment);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isEditingComment);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.isEditingComment);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isEditingComment);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r1.clientTotals.totalPayments);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("", ctx_r1.formatAmount(ctx_r1.clientTotals.totalRevenue), " \u20B8");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.formatAmount(ctx_r1.clientTotals.totalBonusesGranted));
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r1.formatAmount(ctx_r1.clientTotals.totalBonusesUsed));
    \u0275\u0275advance(12);
    \u0275\u0275property("ngIf", !ctx_r1.isEditingPersonal);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isEditingPersonal);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", !ctx_r1.isEditingPersonal);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isEditingPersonal);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", !ctx_r1.isEditingPersonal);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isEditingPersonal);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", !ctx_r1.isEditingPersonal);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isEditingPersonal);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", !ctx_r1.isEditingContacts);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isEditingContacts);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", !ctx_r1.isEditingContacts);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isEditingContacts);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", !ctx_r1.isEditingContacts);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isEditingContacts);
    \u0275\u0275advance(15);
    \u0275\u0275textInterpolate1("", ctx_r1.formatAmount(ctx_r1.bonusBalance), " \u20B8");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r1.formatAmount(ctx_r1.getUsedBonusesTotal()), " \u20B8");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r1.formatAmount(ctx_r1.getExpiredBonusesTotal()), " \u20B8");
    \u0275\u0275advance();
    \u0275\u0275classProp("collapsed", !ctx_r1.isBonusesExpanded);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.isBonusesExpanded);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isBonusesExpanded && ctx_r1.bonusesDetails.length > 0);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1("", ctx_r1.payments.length, " \u043F\u043B\u0430\u0442\u0435\u0436\u0435\u0439");
    \u0275\u0275advance();
    \u0275\u0275property("paginationEnabled", true)("data", ctx_r1.payments)("defaultPageSize", 15);
    \u0275\u0275advance(21);
    \u0275\u0275property("ngForOf", paginatedTable_r35.paginatedData);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.payments.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.payments.length > 0);
  }
}
function ProfilePageComponent_div_7_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 251)(1, "div", 252);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 16);
    \u0275\u0275element(3, "path", 253);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "h3", 254);
    \u0275\u0275text(5, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043A\u043B\u0438\u0435\u043D\u0442\u0430?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 255);
    \u0275\u0275text(7, " \u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B, \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u043A\u043B\u0438\u0435\u043D\u0442\u0430 ");
    \u0275\u0275elementStart(8, "strong");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, "?");
    \u0275\u0275element(11, "br");
    \u0275\u0275text(12, " \u042D\u0442\u043E \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u043D\u0435\u043B\u044C\u0437\u044F \u043E\u0442\u043C\u0435\u043D\u0438\u0442\u044C. \u0412\u0441\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u043A\u043B\u0438\u0435\u043D\u0442\u0430, \u0432\u043A\u043B\u044E\u0447\u0430\u044F \u0438\u0441\u0442\u043E\u0440\u0438\u044E \u043F\u043B\u0430\u0442\u0435\u0436\u0435\u0439 \u0438 \u0431\u043E\u043D\u0443\u0441\u043E\u0432, \u0431\u0443\u0434\u0443\u0442 \u0443\u0434\u0430\u043B\u0435\u043D\u044B. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 256)(14, "button", 257);
    \u0275\u0275listener("click", function ProfilePageComponent_div_7_div_2_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r37);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeDeleteModal());
    });
    \u0275\u0275text(15, "\u041E\u0442\u043C\u0435\u043D\u0430");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 258);
    \u0275\u0275listener("click", function ProfilePageComponent_div_7_div_2_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r37);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.proceedToDeleteStep2());
    });
    \u0275\u0275text(17, "\u0414\u0430, \u0443\u0434\u0430\u043B\u0438\u0442\u044C");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.getFullName());
  }
}
function ProfilePageComponent_div_7_div_3_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043D\u0430\u0432\u0441\u0435\u0433\u0434\u0430");
    \u0275\u0275elementEnd();
  }
}
function ProfilePageComponent_div_7_div_3_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u0423\u0434\u0430\u043B\u0435\u043D\u0438\u0435...");
    \u0275\u0275elementEnd();
  }
}
function ProfilePageComponent_div_7_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 251)(1, "div", 259);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 16);
    \u0275\u0275element(3, "path", 260);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "h3", 254);
    \u0275\u0275text(5, "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u0435");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 255);
    \u0275\u0275text(7, " \u0414\u043B\u044F \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u044F \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u044F \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043B\u043E\u0432\u043E ");
    \u0275\u0275elementStart(8, "strong", 261);
    \u0275\u0275text(9, "\u0443\u0434\u0430\u043B\u0438\u0442\u044C");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "input", 262);
    \u0275\u0275twoWayListener("ngModelChange", function ProfilePageComponent_div_7_div_3_Template_input_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r38);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.deleteConfirmationWord, $event) || (ctx_r1.deleteConfirmationWord = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown.enter", function ProfilePageComponent_div_7_div_3_Template_input_keydown_enter_10_listener() {
      \u0275\u0275restoreView(_r38);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.confirmDelete());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 256)(12, "button", 257);
    \u0275\u0275listener("click", function ProfilePageComponent_div_7_div_3_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r38);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeDeleteModal());
    });
    \u0275\u0275text(13, "\u041E\u0442\u043C\u0435\u043D\u0430");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 263);
    \u0275\u0275listener("click", function ProfilePageComponent_div_7_div_3_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r38);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.confirmDelete());
    });
    \u0275\u0275template(15, ProfilePageComponent_div_7_div_3_span_15_Template, 2, 0, "span", 204)(16, ProfilePageComponent_div_7_div_3_span_16_Template, 2, 0, "span", 204);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.deleteConfirmationWord);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.deleteConfirmationWord !== "\u0443\u0434\u0430\u043B\u0438\u0442\u044C" || ctx_r1.isDeletingClient);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isDeletingClient);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isDeletingClient);
  }
}
function ProfilePageComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 248);
    \u0275\u0275listener("click", function ProfilePageComponent_div_7_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r36);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDeleteModal());
    });
    \u0275\u0275elementStart(1, "div", 249);
    \u0275\u0275listener("click", function ProfilePageComponent_div_7_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r36);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275template(2, ProfilePageComponent_div_7_div_2_Template, 18, 1, "div", 250)(3, ProfilePageComponent_div_7_div_3_Template, 17, 4, "div", 250);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.deleteStep === 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.deleteStep === 2);
  }
}
var ProfilePageComponent = class _ProfilePageComponent {
  pageHeaderService = inject(PageHeaderService);
  route = inject(ActivatedRoute);
  router = inject(Router);
  titleService = inject(Title);
  clientsService = inject(ClientsService);
  paymentsService = inject(PaymentsService);
  bonusesService = inject(BonusesService);
  analyticsService = inject(AnalyticsService);
  toastService = inject(ToastService);
  transactionModalService = inject(TransactionModalService);
  cdr = inject(ChangeDetectorRef);
  destroy$ = new Subject();
  clientId = "";
  isLoading = true;
  clientNotFound = false;
  client = null;
  clientDetails = null;
  // Store full client details from API
  // Client totals for dashboard
  clientTotals = {
    totalPayments: 0,
    totalRevenue: 0,
    totalBonusesGranted: 0,
    totalBonusesUsed: 0
  };
  // Bonus balance
  bonusBalance = 0;
  isEditingComment = false;
  editedComment = "";
  isSavingComment = false;
  isEditingTags = false;
  editedTags = [];
  newTagInput = "";
  showTagsDropdown = false;
  isSavingTags = false;
  // Список доступных тэгов из API
  availableTags = [];
  isEditingPersonal = false;
  isSavingPersonal = false;
  editedPersonal = {
    firstName: "",
    lastName: "",
    type: "individual"
  };
  isEditingContacts = false;
  isSavingContacts = false;
  editedContacts = {
    phone: "",
    email: ""
  };
  // Состояние сворачивания бонусов
  isBonusesExpanded = false;
  // Интерфейс для детальной информации о бонусах
  bonusesDetails = [];
  // Раскрытые строки бонусов
  expandedBonusRows = /* @__PURE__ */ new Set();
  // Mobile card expanded states
  expandedMobileBonusCards = /* @__PURE__ */ new Set();
  expandedMobilePaymentCards = /* @__PURE__ */ new Set();
  // Payment data
  payments = [];
  // Refund modal
  showRefundModal = false;
  selectedPaymentForRefund = null;
  // Payment view modal
  showPaymentViewModal = false;
  selectedPaymentTxId = null;
  selectedPaymentSearchResult = null;
  // Delete client modal
  showDeleteModal = false;
  deleteStep = 1;
  deleteConfirmationWord = "";
  isDeletingClient = false;
  ngOnInit() {
    this.pageHeaderService.setPageHeader("\u041F\u0440\u043E\u0444\u0438\u043B\u044C \u043A\u043B\u0438\u0435\u043D\u0442\u0430", [
      { label: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F", route: "/home" },
      { label: "\u041A\u043B\u0438\u0435\u043D\u0442\u044B", route: "/clients" },
      { label: "\u041F\u0440\u043E\u0444\u0438\u043B\u044C \u043A\u043B\u0438\u0435\u043D\u0442\u0430" }
    ]);
    this.route.params.subscribe((params) => {
      this.clientId = params["id"];
      if (this.clientId) {
        this.loadClientData();
      }
    });
    this.transactionModalService.transactionComplete$.pipe(takeUntil(this.destroy$)).subscribe(() => {
      const currentUrl = this.router.url;
      if (currentUrl.startsWith("/clients/") && this.clientId) {
        this.loadClientData();
      }
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  loadClientData() {
    this.isLoading = true;
    const client$ = this.clientsService.getClientById(this.clientId);
    const payments$ = this.paymentsService.getClientPayments(this.clientId, 0, 100);
    const bonusHistory$ = this.bonusesService.getClientBonusHistory(this.clientId, 0, 100);
    const bonusBalance$ = this.bonusesService.getClientBonusBalance(this.clientId);
    const totals$ = this.analyticsService.getClientTotals(this.clientId);
    const tags$ = this.clientsService.getTags();
    forkJoin({
      client: client$,
      payments: payments$,
      bonusHistory: bonusHistory$,
      bonusBalance: bonusBalance$,
      totals: totals$,
      tags: tags$
    }).subscribe({
      next: ({ client, payments, bonusHistory, bonusBalance, totals, tags }) => {
        this.clientDetails = client;
        const clientName = `${client.name}${client.surname ? " " + client.surname : ""}`.trim();
        this.titleService.setTitle(`Westwood - Client - ${clientName}`);
        this.client = {
          id: client.id,
          firstName: client.name,
          lastName: client.surname || "",
          phone: client.phone,
          email: client.email,
          tags: client.tags || [],
          comment: client.notes,
          type: client.clientType === "BUSINESS" ? "business" : "individual"
        };
        const paymentsArray = payments?.content || [];
        this.payments = paymentsArray.map((p) => {
          try {
            return this.mapPaymentToItem(p);
          } catch (error) {
            console.error("Error mapping payment:", p, error);
            return null;
          }
        }).filter((p) => p !== null).sort((a, b) => {
          try {
            const dateA = /* @__PURE__ */ new Date(`${a.date} ${a.time}`);
            const dateB = /* @__PURE__ */ new Date(`${b.date} ${b.time}`);
            return dateB.getTime() - dateA.getTime();
          } catch (error) {
            console.error("Error sorting payments:", error);
            return 0;
          }
        });
        const bonusHistoryArray = bonusHistory?.content || [];
        this.bonusesDetails = bonusHistoryArray.map((b) => {
          try {
            let type = "purchase";
            if (b.grantReason === "WELCOME")
              type = "welcome";
            else if (b.eventType === "GRANTED")
              type = "purchase";
            else if (b.eventType === "USED")
              type = "purchase";
            else if (b.eventType === "REVOKED")
              type = "refund";
            else if (b.eventType === "EXPIRED")
              type = "loyalty";
            return {
              id: String(b.id),
              type,
              amount: b.bonusAmount,
              issuedAt: new Date(b.createdAt),
              expiresAt: b.expiresAt ? new Date(b.expiresAt) : new Date(Date.now() + 90 * 24 * 60 * 60 * 1e3),
              // Default 90 days if no expiry
              used: b.eventType === "USED",
              refundReason: b.revokeReason || void 0,
              initiatedBy: void 0,
              // Not available in API response
              initiatedById: void 0
              // Not available in API response
            };
          } catch (error) {
            console.error("Error mapping bonus:", b, error);
            return null;
          }
        }).filter((b) => b !== null);
        this.bonusBalance = bonusBalance?.currentBalance ?? 0;
        this.clientTotals = totals || {
          totalPayments: 0,
          totalRevenue: 0,
          totalBonusesGranted: 0,
          totalBonusesUsed: 0
        };
        this.availableTags = Array.isArray(tags) ? tags : [];
        console.log("Loaded available tags:", this.availableTags);
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error("Error loading client data:", err);
        console.error("Error details:", {
          status: err.status,
          statusText: err.statusText,
          url: err.url,
          error: err.error,
          clientId: this.clientId
        });
        if (err.status === 404) {
          this.clientNotFound = true;
          this.isLoading = false;
          return;
        }
        this.loadClientDataIndividually();
        const errorMessage = err.error?.message || `\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0434\u0430\u043D\u043D\u044B\u0445 \u043A\u043B\u0438\u0435\u043D\u0442\u0430 (${err.status || "unknown"})`;
        this.toastService.error(errorMessage);
      }
    });
  }
  loadClientDataIndividually() {
    this.clientsService.getClientById(this.clientId).subscribe({
      next: (client) => {
        this.clientDetails = client;
        const clientName = `${client.name}${client.surname ? " " + client.surname : ""}`.trim();
        this.titleService.setTitle(`Westwood - Client - ${clientName}`);
        this.client = {
          id: client.id,
          firstName: client.name,
          lastName: client.surname || "",
          phone: client.phone,
          email: client.email,
          tags: client.tags || [],
          comment: client.notes,
          type: client.clientType === "BUSINESS" ? "business" : "individual"
        };
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error("Error loading client:", err);
        if (err.status === 404) {
          this.clientNotFound = true;
        }
        this.isLoading = false;
      }
    });
    this.paymentsService.getClientPayments(this.clientId, 0, 100).subscribe({
      next: (payments) => {
        const paymentsArray = payments?.content || [];
        this.payments = paymentsArray.map((p) => {
          try {
            return this.mapPaymentToItem(p);
          } catch (error) {
            console.error("Error mapping payment:", p, error);
            return null;
          }
        }).filter((p) => p !== null).sort((a, b) => {
          try {
            const dateA = /* @__PURE__ */ new Date(`${a.date} ${a.time}`);
            const dateB = /* @__PURE__ */ new Date(`${b.date} ${b.time}`);
            return dateB.getTime() - dateA.getTime();
          } catch (error) {
            return 0;
          }
        });
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error("Error loading payments:", err);
        this.payments = [];
      }
    });
    this.bonusesService.getClientBonusHistory(this.clientId, 0, 100).subscribe({
      next: (bonusHistory) => {
        const bonusHistoryArray = bonusHistory?.content || [];
        this.bonusesDetails = bonusHistoryArray.map((b) => {
          try {
            let type = "purchase";
            if (b.grantReason === "WELCOME")
              type = "welcome";
            else if (b.eventType === "GRANTED")
              type = "purchase";
            else if (b.eventType === "USED")
              type = "purchase";
            else if (b.eventType === "REVOKED")
              type = "refund";
            else if (b.eventType === "EXPIRED")
              type = "loyalty";
            return {
              id: String(b.id),
              type,
              amount: b.bonusAmount,
              issuedAt: new Date(b.createdAt),
              expiresAt: b.expiresAt ? new Date(b.expiresAt) : new Date(Date.now() + 90 * 24 * 60 * 60 * 1e3),
              used: b.eventType === "USED",
              refundReason: b.revokeReason || void 0,
              initiatedBy: void 0,
              initiatedById: void 0
            };
          } catch (error) {
            console.error("Error mapping bonus:", b, error);
            return null;
          }
        }).filter((b) => b !== null);
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error("Error loading bonus history:", err);
        this.bonusesDetails = [];
      }
    });
    this.bonusesService.getClientBonusBalance(this.clientId).subscribe({
      next: (bonusBalance) => {
        this.bonusBalance = bonusBalance?.currentBalance ?? 0;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error("Error loading bonus balance:", err);
        this.bonusBalance = 0;
      }
    });
    this.analyticsService.getClientTotals(this.clientId).subscribe({
      next: (totals) => {
        this.clientTotals = totals || {
          totalPayments: 0,
          totalRevenue: 0,
          totalBonusesGranted: 0,
          totalBonusesUsed: 0
        };
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error("Error loading client totals:", err);
        this.clientTotals = {
          totalPayments: 0,
          totalRevenue: 0,
          totalBonusesGranted: 0,
          totalBonusesUsed: 0
        };
      }
    });
    this.clientsService.getTags().subscribe({
      next: (tags) => {
        this.availableTags = Array.isArray(tags) ? tags : [];
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error("Error loading tags:", err);
        this.availableTags = [];
      }
    });
  }
  mapPaymentToItem(payment) {
    if (!payment) {
      console.warn("Invalid payment data: payment is null/undefined");
      return null;
    }
    if (!payment.createdAt) {
      console.warn("Invalid payment data: missing createdAt", payment);
      const now = /* @__PURE__ */ new Date();
      return {
        id: payment.txId || "unknown",
        clientId: payment.clientId || "",
        clientName: payment.clientName || "\u2014",
        clientPhone: payment.clientPhone || "\u2014",
        amount: payment.amount || 0,
        bonusEarned: payment.bonusGranted || 0,
        bonusUsed: payment.bonusUsed || 0,
        bonusRevoked: payment.bonusRevoked || 0,
        paymentMethod: payment.paymentMethod?.toLowerCase() || "cash",
        isRefund: payment.status === "REFUNDED" || !!payment.refundedPaymentTxId,
        date: this.formatDate(now),
        time: this.formatTime(now)
      };
    }
    try {
      const createdAt = new Date(payment.createdAt);
      if (isNaN(createdAt.getTime())) {
        console.warn("Invalid date format:", payment.createdAt);
        const now = /* @__PURE__ */ new Date();
        return {
          id: payment.txId,
          clientId: payment.clientId || "",
          clientName: payment.clientName || "\u2014",
          clientPhone: payment.clientPhone || "\u2014",
          amount: payment.amount || 0,
          bonusEarned: payment.bonusGranted || 0,
          bonusUsed: payment.bonusUsed || 0,
          bonusRevoked: payment.bonusRevoked || 0,
          paymentMethod: payment.paymentMethod?.toLowerCase() || "cash",
          isRefund: payment.status === "REFUNDED" || !!payment.refundedPaymentTxId,
          date: this.formatDate(now),
          time: this.formatTime(now)
        };
      }
      const dateStr = this.formatDate(createdAt);
      const timeStr = this.formatTime(createdAt);
      return {
        id: payment.txId,
        clientId: payment.clientId || "",
        clientName: payment.clientName || "\u2014",
        clientPhone: payment.clientPhone || "\u2014",
        amount: payment.amount || 0,
        bonusEarned: payment.bonusGranted || 0,
        bonusUsed: payment.bonusUsed || 0,
        bonusRevoked: payment.bonusRevoked || 0,
        paymentMethod: payment.paymentMethod?.toLowerCase() || "cash",
        isRefund: payment.status === "REFUNDED" || !!payment.refundedPaymentTxId,
        date: dateStr,
        time: timeStr
      };
    } catch (error) {
      console.error("Error mapping payment:", error, payment);
      const now = /* @__PURE__ */ new Date();
      return {
        id: payment.txId || "unknown",
        clientId: payment.clientId || "",
        clientName: payment.clientName || "\u2014",
        clientPhone: payment.clientPhone || "\u2014",
        amount: payment.amount || 0,
        bonusEarned: payment.bonusGranted || 0,
        bonusUsed: payment.bonusUsed || 0,
        bonusRevoked: payment.bonusRevoked || 0,
        paymentMethod: "cash",
        isRefund: false,
        date: this.formatDate(now),
        time: this.formatTime(now)
      };
    }
  }
  ngAfterViewInit() {
    const sidebarContent = document.querySelector(".sidebar-content");
    if (sidebarContent) {
      sidebarContent.scrollTop = 0;
    }
    window.scrollTo(0, 0);
  }
  getFullName() {
    if (!this.client)
      return "";
    return `${this.client.firstName} ${this.client.lastName}`.trim();
  }
  getInitials(name) {
    if (name) {
      const parts = name.split(" ");
      return parts.map((p) => p.charAt(0)).join("").toUpperCase().slice(0, 2);
    }
    if (!this.client)
      return "";
    const first = this.client.firstName.charAt(0).toUpperCase();
    const last = this.client.lastName ? this.client.lastName.charAt(0).toUpperCase() : "";
    return first + last;
  }
  // Tags editing
  startEditTags() {
    if (!this.client)
      return;
    this.editedTags = [...this.client.tags];
    this.isEditingTags = true;
    this.newTagInput = "";
    this.showTagsDropdown = false;
    console.log("Started editing tags. Available tags:", this.availableTags);
  }
  addTag() {
    if (!this.client || !this.newTagInput.trim())
      return;
    if (!this.client.tags.includes(this.newTagInput.trim())) {
      this.client.tags.push(this.newTagInput.trim());
    }
    this.newTagInput = "";
  }
  addTagFromDropdown(tag) {
    if (!this.client)
      return;
    if (!this.client.tags.includes(tag)) {
      this.client.tags.push(tag);
    }
    this.showTagsDropdown = false;
  }
  getFilteredTags() {
    if (!this.client)
      return [];
    if (!this.availableTags || this.availableTags.length === 0) {
      console.warn("Available tags is empty:", this.availableTags);
      return [];
    }
    const searchTerm = this.newTagInput.toLowerCase();
    const filtered = this.availableTags.filter((tag) => !this.client.tags.includes(tag) && (searchTerm === "" || tag.toLowerCase().includes(searchTerm)));
    console.log("Filtered tags:", {
      availableTags: this.availableTags,
      clientTags: this.client.tags,
      searchTerm,
      filtered
    });
    return filtered;
  }
  removeTag(index) {
    if (!this.client)
      return;
    this.client.tags.splice(index, 1);
  }
  saveTags() {
    if (!this.client)
      return;
    this.isSavingTags = true;
    const requestPayload = { tags: this.client.tags };
    console.log("Update Client Tags - Request Payload:", {
      clientId: this.clientId,
      payload: requestPayload
    });
    this.clientsService.updateClientTags(this.clientId, requestPayload).subscribe({
      next: () => {
        this.toastService.success("\u0422\u0435\u0433\u0438 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u044B");
        this.isEditingTags = false;
        this.newTagInput = "";
        this.showTagsDropdown = false;
        this.isSavingTags = false;
      },
      error: (err) => {
        const errorMessage = err.error?.message || "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0438 \u0442\u0435\u0433\u043E\u0432";
        this.toastService.error(errorMessage);
        this.cancelEditTags();
        this.isSavingTags = false;
      }
    });
  }
  cancelEditTags() {
    if (!this.client)
      return;
    this.client.tags = [...this.editedTags];
    this.isEditingTags = false;
    this.newTagInput = "";
    this.showTagsDropdown = false;
  }
  // Comment editing
  startEditComment() {
    if (!this.client)
      return;
    this.editedComment = this.client.comment || "";
    this.isEditingComment = true;
  }
  saveComment() {
    if (!this.client)
      return;
    this.isSavingComment = true;
    const requestPayload = { notes: this.editedComment };
    console.log("Update Client Notes - Request Payload:", {
      clientId: this.clientId,
      payload: requestPayload
    });
    this.clientsService.updateClientNotes(this.clientId, requestPayload).subscribe({
      next: () => {
        this.client.comment = this.editedComment;
        this.toastService.success("\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D");
        this.isEditingComment = false;
        this.isSavingComment = false;
      },
      error: (err) => {
        const errorMessage = err.error?.message || "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0438 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u044F";
        this.toastService.error(errorMessage);
        this.isSavingComment = false;
      }
    });
  }
  cancelEditComment() {
    this.isEditingComment = false;
    this.editedComment = "";
  }
  // Personal data editing
  startEditPersonal() {
    if (!this.client)
      return;
    this.editedPersonal = {
      firstName: this.client.firstName,
      lastName: this.client.lastName,
      type: this.client.type
    };
    this.isEditingPersonal = true;
  }
  savePersonal() {
    if (!this.client || !this.clientDetails)
      return;
    this.isSavingPersonal = true;
    const requestPayload = {
      phone: this.clientDetails.phone,
      name: this.editedPersonal.firstName,
      // Changed field
      surname: this.editedPersonal.lastName,
      // Changed field
      dateOfBirth: this.clientDetails.dateOfBirth,
      notes: this.clientDetails.notes,
      tags: this.clientDetails.tags || [],
      clientType: this.editedPersonal.type === "business" ? "BUSINESS" : "INDIVIDUAL",
      // Changed field
      referrerId: this.clientDetails.referrerId
    };
    console.log("Update Client (Personal Data) - Request Payload:", {
      clientId: this.clientId,
      payload: requestPayload
    });
    this.clientsService.updateClient(this.clientId, requestPayload).subscribe({
      next: (updatedClient) => {
        this.clientDetails = updatedClient;
        this.client.firstName = updatedClient.name;
        this.client.lastName = updatedClient.surname || "";
        this.client.type = updatedClient.clientType === "BUSINESS" ? "business" : "individual";
        this.toastService.success("\u041B\u0438\u0447\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u044B");
        this.isEditingPersonal = false;
        this.isSavingPersonal = false;
      },
      error: (err) => {
        const errorMessage = err.error?.message || "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0438 \u043B\u0438\u0447\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445";
        this.toastService.error(errorMessage);
        this.isSavingPersonal = false;
      }
    });
  }
  cancelEditPersonal() {
    this.isEditingPersonal = false;
  }
  // Contacts editing
  startEditContacts() {
    if (!this.client)
      return;
    this.editedContacts = {
      phone: this.client.phone,
      email: this.client.email || ""
    };
    this.isEditingContacts = true;
  }
  saveContacts() {
    if (!this.client || !this.clientDetails)
      return;
    this.isSavingContacts = true;
    const requestPayload = {
      phone: this.editedContacts.phone,
      // Changed field
      name: this.clientDetails.name,
      surname: this.clientDetails.surname || "",
      dateOfBirth: this.clientDetails.dateOfBirth,
      notes: this.clientDetails.notes,
      tags: this.clientDetails.tags || [],
      clientType: this.clientDetails.clientType,
      referrerId: this.clientDetails.referrerId
    };
    console.log("Update Client (Contacts) - Request Payload:", {
      clientId: this.clientId,
      payload: requestPayload
    });
    this.clientsService.updateClient(this.clientId, requestPayload).subscribe({
      next: (updatedClient) => {
        this.clientDetails = updatedClient;
        this.client.phone = updatedClient.phone;
        this.toastService.success("\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u044B");
        this.isEditingContacts = false;
        this.isSavingContacts = false;
      },
      error: (err) => {
        const errorMessage = err.error?.message || "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0438 \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445";
        this.toastService.error(errorMessage);
        this.isSavingContacts = false;
      }
    });
  }
  cancelEditContacts() {
    this.isEditingContacts = false;
  }
  // Payment helpers
  formatPaymentId(id) {
    return id;
  }
  formatAmount(amount) {
    return amount.toLocaleString("ru-RU");
  }
  getPaymentMethodForBadge(method) {
    if (!method)
      return null;
    const upperMethod = method.toUpperCase();
    if (upperMethod === "CASH" || upperMethod === "CARD" || upperMethod === "TRANSFER") {
      return upperMethod;
    }
    return null;
  }
  getPaymentMethodLabel(method) {
    const labels = {
      cash: "\u041D\u0430\u043B\u0438\u0447\u043D\u044B\u0435",
      card: "\u041A\u0430\u0440\u0442\u0430",
      transfer: "\u041F\u0435\u0440\u0435\u0432\u043E\u0434"
    };
    return labels[method] || method;
  }
  // Refund methods
  openRefundModal(payment) {
    if (!this.client)
      return;
    this.selectedPaymentForRefund = {
      id: payment.id,
      clientId: this.clientId,
      clientName: this.getFullName(),
      clientPhone: this.client.phone,
      amount: payment.amount,
      bonusEarned: payment.bonusEarned,
      bonusUsed: payment.bonusUsed,
      bonusRevoked: payment.bonusRevoked,
      paymentMethod: payment.paymentMethod,
      isRefund: payment.isRefund,
      date: payment.date,
      time: payment.time
    };
    this.showRefundModal = true;
  }
  closeRefundModal() {
    this.showRefundModal = false;
    this.selectedPaymentForRefund = null;
  }
  // Payment view modal methods
  openPaymentView(paymentId) {
    const payment = this.payments.find((p) => p.id === paymentId);
    if (payment) {
      this.selectedPaymentSearchResult = {
        txId: payment.id,
        clientId: this.clientId,
        clientName: this.getFullName(),
        clientPhone: this.client?.phone || "",
        clientEmail: this.client?.email || null,
        amount: payment.amount,
        status: payment.isRefund ? "REFUNDED" : "COMPLETED",
        paymentMethod: payment.paymentMethod?.toUpperCase(),
        initiatedBy: null,
        createdAt: payment.date + "T" + payment.time,
        refundedPaymentTxId: null,
        bonusGranted: payment.bonusEarned,
        bonusUsed: payment.bonusUsed,
        bonusRevoked: payment.bonusRevoked,
        refundReason: null
      };
    }
    this.selectedPaymentTxId = paymentId;
    this.showPaymentViewModal = true;
  }
  onPaymentUpdated() {
    this.loadClientData();
  }
  confirmRefund(notes) {
    if (!this.selectedPaymentForRefund)
      return;
    this.paymentsService.refundPayment(this.selectedPaymentForRefund.id, { notes }).subscribe({
      next: () => {
        this.toastService.success("\u0412\u043E\u0437\u0432\u0440\u0430\u0442 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D");
        this.closeRefundModal();
        this.loadClientData();
      },
      error: (err) => {
        const errorMessage = err.error?.message || "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u0438 \u0432\u043E\u0437\u0432\u0440\u0430\u0442\u0430";
        this.toastService.error(errorMessage);
      }
    });
  }
  formatTime(date) {
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  }
  // Bonus helpers
  getBonusTypeLabel(type) {
    const labels = {
      welcome: "\u041F\u0440\u0438\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439",
      referral: "\u0420\u0435\u0444\u0435\u0440\u0430\u043B\u044C\u043D\u044B\u0439",
      purchase: "\u0417\u0430 \u043F\u043E\u043A\u0443\u043F\u043A\u0443",
      promotion: "\u0410\u043A\u0446\u0438\u044F",
      loyalty: "\u041B\u043E\u044F\u043B\u044C\u043D\u043E\u0441\u0442\u044C",
      refund: "\u041E\u0442\u043E\u0437\u0432\u0430\u043D\u043E",
      used: "\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u043E",
      granted: "\u041D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u043E"
    };
    return labels[type] || type;
  }
  getDaysUntilExpiry(expiresAt) {
    const now = /* @__PURE__ */ new Date();
    const expiry = new Date(expiresAt);
    const diffTime = expiry.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1e3 * 60 * 60 * 24));
    return diffDays;
  }
  getDaysText(days) {
    if (days === 1)
      return "\u0434\u0435\u043D\u044C";
    if (days >= 2 && days <= 4)
      return "\u0434\u043D\u044F";
    return "\u0434\u043D\u0435\u0439";
  }
  formatDate(date) {
    const d = typeof date === "string" ? new Date(date) : date;
    return d.toLocaleDateString("ru-RU", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric"
    });
  }
  toggleBonusesExpanded() {
    this.isBonusesExpanded = !this.isBonusesExpanded;
  }
  getActiveBonusesTotal() {
    const now = /* @__PURE__ */ new Date();
    return this.bonusesDetails.filter((bonus) => !bonus.used && new Date(bonus.expiresAt) > now).reduce((sum, bonus) => sum + bonus.amount, 0);
  }
  getUsedBonusesTotal() {
    return this.bonusesDetails.filter((bonus) => bonus.used).reduce((sum, bonus) => sum + bonus.amount, 0);
  }
  getExpiredBonusesTotal() {
    const now = /* @__PURE__ */ new Date();
    return this.bonusesDetails.filter((bonus) => !bonus.used && bonus.type !== "refund" && new Date(bonus.expiresAt) <= now).reduce((sum, bonus) => sum + bonus.amount, 0);
  }
  toggleBonusRow(bonusId) {
    if (this.expandedBonusRows.has(bonusId)) {
      this.expandedBonusRows.delete(bonusId);
    } else {
      this.expandedBonusRows.add(bonusId);
    }
  }
  isBonusRowExpanded(bonusId) {
    return this.expandedBonusRows.has(bonusId);
  }
  // Mobile card methods
  toggleMobileBonusCard(bonusId) {
    if (this.expandedMobileBonusCards.has(bonusId)) {
      this.expandedMobileBonusCards.delete(bonusId);
    } else {
      this.expandedMobileBonusCards.add(bonusId);
    }
  }
  isMobileBonusExpanded(bonusId) {
    return this.expandedMobileBonusCards.has(bonusId);
  }
  toggleMobilePaymentCard(paymentId) {
    if (this.expandedMobilePaymentCards.has(paymentId)) {
      this.expandedMobilePaymentCards.delete(paymentId);
    } else {
      this.expandedMobilePaymentCards.add(paymentId);
    }
  }
  isMobilePaymentExpanded(paymentId) {
    return this.expandedMobilePaymentCards.has(paymentId);
  }
  // Delete client methods
  openDeleteModal() {
    this.showDeleteModal = true;
    this.deleteStep = 1;
    this.deleteConfirmationWord = "";
    this.isDeletingClient = false;
  }
  closeDeleteModal() {
    this.showDeleteModal = false;
    this.deleteStep = 1;
    this.deleteConfirmationWord = "";
    this.isDeletingClient = false;
  }
  proceedToDeleteStep2() {
    this.deleteStep = 2;
  }
  confirmDelete() {
    if (this.deleteConfirmationWord !== "\u0443\u0434\u0430\u043B\u0438\u0442\u044C") {
      this.toastService.error('\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043B\u043E\u0432\u043E "\u0443\u0434\u0430\u043B\u0438\u0442\u044C" \u0434\u043B\u044F \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u044F');
      return;
    }
    this.isDeletingClient = true;
    this.clientsService.deleteClient(this.clientId).subscribe({
      next: () => {
        this.toastService.success("\u041A\u043B\u0438\u0435\u043D\u0442 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0443\u0434\u0430\u043B\u0435\u043D");
        this.closeDeleteModal();
        this.router.navigate(["/clients"]);
      },
      error: (err) => {
        const errorMessage = err.error?.message || "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u0438 \u043A\u043B\u0438\u0435\u043D\u0442\u0430";
        this.toastService.error(errorMessage);
        this.isDeletingClient = false;
      }
    });
  }
  static \u0275fac = function ProfilePageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProfilePageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProfilePageComponent, selectors: [["app-profile-page"]], decls: 8, vars: 9, consts: [["paginatedTable", ""], ["paginatedBonuses", ""], [1, "page-wrapper"], [1, "profile-container-wrapper"], ["class", "page-loading-container", 4, "ngIf"], ["title", "\u041A\u043B\u0438\u0435\u043D\u0442 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D", "description", "\u041A \u0441\u043E\u0436\u0430\u043B\u0435\u043D\u0438\u044E, \u0437\u0430\u043F\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u043C\u044B\u0439 \u043A\u043B\u0438\u0435\u043D\u0442 \u043D\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u0438\u043B\u0438 \u0431\u044B\u043B \u0443\u0434\u0430\u043B\u0435\u043D.", "backLink", "/clients", "backText", "\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043A \u043A\u043B\u0438\u0435\u043D\u0442\u0430\u043C", 4, "ngIf"], ["class", "profile-container", 4, "ngIf"], [3, "visibleChange", "confirm", "visible", "payment"], [3, "visibleChange", "paymentUpdated", "visible", "paymentTxId", "paymentSearchResult"], ["class", "delete-modal-overlay", 3, "click", 4, "ngIf"], [1, "page-loading-container"], ["type", "logo", "size", "large", 3, "visible", "overlay"], ["title", "\u041A\u043B\u0438\u0435\u043D\u0442 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D", "description", "\u041A \u0441\u043E\u0436\u0430\u043B\u0435\u043D\u0438\u044E, \u0437\u0430\u043F\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u043C\u044B\u0439 \u043A\u043B\u0438\u0435\u043D\u0442 \u043D\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u0438\u043B\u0438 \u0431\u044B\u043B \u0443\u0434\u0430\u043B\u0435\u043D.", "backLink", "/clients", "backText", "\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043A \u043A\u043B\u0438\u0435\u043D\u0442\u0430\u043C"], [1, "profile-container"], [1, "profile-header-card"], ["title", "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043A\u043B\u0438\u0435\u043D\u0442\u0430", 1, "delete-client-btn", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none"], ["d", "M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m3 0v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6h14zM10 11v6M14 11v6", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "profile-header-content"], [1, "avatar-wrapper"], [1, "avatar-large"], [1, "profile-main-info"], [1, "name-row"], [1, "profile-name"], [1, "client-type-badge"], ["viewBox", "0 0 24 24", "fill", "none", 4, "ngIf"], [1, "profile-phone"], [1, "tags-row"], [1, "tags-container"], ["class", "client-tag", 4, "ngFor", "ngForOf"], ["class", "add-tag-wrapper", 4, "ngIf"], ["class", "tags-dropdown", 4, "ngIf"], ["class", "edit-tags-btn", 3, "click", 4, "ngIf"], ["class", "tags-actions", 4, "ngIf"], [1, "comment-card"], [1, "comment-header"], [1, "comment-title"], ["d", "M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["class", "edit-comment-btn", 3, "click", 4, "ngIf"], ["class", "comment-actions", 4, "ngIf"], [1, "comment-body"], ["class", "comment-text", 4, "ngIf"], ["class", "comment-textarea", "placeholder", "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 \u043E \u043A\u043B\u0438\u0435\u043D\u0442\u0435...", "rows", "3", 3, "ngModel", "ngModelChange", 4, "ngIf"], [1, "stats-grid"], [1, "stat-card"], [1, "stat-icon", "transactions"], ["d", "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["x", "9", "y", "3", "width", "6", "height", "4", "rx", "1", "stroke", "currentColor", "stroke-width", "1.5"], ["d", "M9 12h6M9 16h6", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round"], [1, "stat-info"], [1, "stat-value"], [1, "stat-label"], [1, "stat-icon", "total-sum"], ["d", "M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "stat-icon", "bonuses-earned"], ["d", "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "stat-icon", "bonuses-used"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "1.5"], ["d", "M8 12l3 3 5-6", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "details-grid"], [1, "details-card"], [1, "card-header"], [1, "card-header-left"], [1, "card-icon"], ["d", "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "card-title"], ["class", "card-edit-btn", 3, "click", 4, "ngIf"], ["class", "card-actions", 4, "ngIf"], [1, "info-list"], [1, "info-row"], [1, "info-label"], ["class", "info-value", 4, "ngIf"], ["class", "info-input", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["class", "info-select", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["d", "M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["class", "info-input", "type", "tel", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["class", "info-value email", 4, "ngIf"], ["class", "info-input", "type", "email", "placeholder", "Email \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D \u0434\u043B\u044F \u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F", 3, "ngModel", "disabled", "ngModelChange", 4, "ngIf"], [1, "bonuses-details-card"], [1, "card-header", 3, "click"], [1, "card-title-section"], [1, "bonuses-stats"], [1, "stat-item"], [1, "stat-value", "active"], [1, "stat-value", "used"], [1, "stat-value", "expired"], [1, "collapse-btn"], ["d", "M6 9l6 6 6-6", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["class", "bonuses-content", 4, "ngIf"], ["class", "mobile-bonuses-cards", 4, "ngIf"], [1, "payments-card"], ["d", "M22 12h-4l-3 9L9 3l-3 9H2", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "payments-count"], ["paginationKey", "payments", 3, "paginationEnabled", "data", "defaultPageSize"], [1, "table-container"], [1, "payments-table"], [1, "th-id"], [1, "th-amount"], [1, "th-bonuses"], [1, "th-method"], [1, "th-status"], [1, "th-date"], [1, "th-actions"], ["class", "payment-row", 4, "ngFor", "ngForOf"], ["class", "empty-state", 4, "ngIf"], ["class", "mobile-payments-cards", 4, "ngIf"], ["d", "M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z", "stroke", "currentColor", "stroke-width", "1.5"], ["d", "M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2", "stroke", "currentColor", "stroke-width", "1.5"], ["d", "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2", "stroke", "currentColor", "stroke-width", "1.5"], ["cx", "12", "cy", "7", "r", "4", "stroke", "currentColor", "stroke-width", "1.5"], [1, "client-tag"], ["class", "remove-tag-btn", 3, "click", 4, "ngIf"], [1, "remove-tag-btn", 3, "click"], ["d", "M18 6L6 18M6 6l12 12", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], [1, "add-tag-wrapper"], ["type", "text", "placeholder", "\u041D\u043E\u0432\u044B\u0439 \u0442\u044D\u0433...", 1, "add-tag-input", 3, "ngModelChange", "keydown.enter", "focus", "ngModel"], ["class", "add-tag-confirm-btn", 3, "click", 4, "ngIf"], [1, "add-tag-confirm-btn", 3, "click"], ["d", "M5 12l5 5L20 7", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "tags-dropdown"], [1, "tags-dropdown-header"], ["type", "button", 1, "tags-dropdown-close", 3, "click"], [1, "tags-dropdown-list"], ["type", "button", "class", "tag-option", 3, "click", 4, "ngFor", "ngForOf"], ["class", "tags-dropdown-empty", 4, "ngIf"], ["type", "button", 1, "tag-option", 3, "click"], [1, "tags-dropdown-empty"], [1, "edit-tags-btn", 3, "click"], ["d", "M12 5v14M5 12h14", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], [1, "tags-actions"], [1, "save-tags-btn", 3, "click", "disabled"], [1, "cancel-tags-btn", 3, "click", "disabled"], [1, "edit-comment-btn", 3, "click"], ["d", "M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "comment-actions"], [1, "save-btn", 3, "click", "disabled"], [1, "cancel-btn", 3, "click", "disabled"], [1, "comment-text"], ["placeholder", "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 \u043E \u043A\u043B\u0438\u0435\u043D\u0442\u0435...", "rows", "3", 1, "comment-textarea", 3, "ngModelChange", "ngModel"], [1, "card-edit-btn", 3, "click"], [1, "card-actions"], [1, "info-value"], [1, "info-input", 3, "ngModelChange", "ngModel"], [1, "info-select", 3, "ngModelChange", "ngModel"], ["value", "individual"], ["value", "business"], ["type", "tel", 1, "info-input", 3, "ngModelChange", "ngModel"], [1, "info-value", "email"], ["type", "email", "placeholder", "Email \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D \u0434\u043B\u044F \u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F", 1, "info-input", 3, "ngModelChange", "ngModel", "disabled"], [1, "bonuses-content"], ["paginationKey", "bonuses", 3, "paginationEnabled", "data", "defaultPageSize"], ["class", "table-container", 4, "ngIf"], [1, "bonuses-table"], [4, "ngFor", "ngForOf"], [1, "bonus-type-badge"], [1, "bonus-info"], ["badgeType", "bonusUsed", "size", "medium", "icon", "check", "class", "bonus-badge", 4, "ngIf"], ["badgeType", "refund", "size", "medium", "icon", "refund", "class", "bonus-badge", 4, "ngIf"], ["badgeType", "bonusExpired", "size", "medium", "icon", "expired", "class", "bonus-badge", 4, "ngIf"], ["badgeType", "bonusGranted", "size", "medium", "icon", "star", "class", "bonus-badge", 4, "ngIf"], [1, "bonus-date"], [1, "bonus-expiry-date"], ["badgeType", "bonusUsed", "size", "medium", "icon", "used", 4, "ngIf"], ["badgeType", "refund", "size", "medium", "icon", "refund", 4, "ngIf"], ["size", "medium", 3, "badgeType", 4, "ngIf"], ["badgeType", "bonusExpired", "size", "medium", "icon", "expired", 4, "ngIf"], [1, "actions-cell"], ["iconButtonType", "ghost", "size", "medium", 1, "view-svg-btn", 3, "onClick", "tooltip"], ["d", "M6 9l6 6 6-6", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["class", "bonus-details-row", 4, "ngIf"], ["badgeType", "bonusUsed", "size", "medium", "icon", "check", 1, "bonus-badge"], ["badgeType", "refund", "size", "medium", "icon", "refund", 1, "bonus-badge"], ["badgeType", "bonusExpired", "size", "medium", "icon", "expired", 1, "bonus-badge"], ["badgeType", "bonusGranted", "size", "medium", "icon", "star", 1, "bonus-badge"], ["badgeType", "bonusUsed", "size", "medium", "icon", "used"], ["badgeType", "refund", "size", "medium", "icon", "refund"], ["size", "medium", 3, "badgeType"], ["badgeType", "bonusExpired", "size", "medium", "icon", "expired"], [1, "bonus-details-row"], ["colspan", "6", 1, "bonus-details-cell"], [1, "bonus-details-content"], [1, "bonus-details-grid"], [1, "refund-reason-section"], [1, "refund-reason-label"], ["class", "refund-reason-text", 4, "ngIf"], ["class", "refund-reason-empty", 4, "ngIf"], [1, "bonus-initiated-by-section"], ["class", "bonus-initiated-by-link", 3, "routerLink", 4, "ngIf"], ["class", "bonus-initiated-by-text", 4, "ngIf"], ["class", "bonus-initiated-by-empty", 4, "ngIf"], [1, "refund-reason-text"], [1, "refund-reason-empty"], [1, "bonus-initiated-by-link", 3, "routerLink"], [1, "bonus-initiated-by-text"], [1, "bonus-initiated-by-empty"], [1, "empty-state"], [1, "mobile-bonuses-cards"], ["class", "mobile-bonus-card", 4, "ngFor", "ngForOf"], [1, "mobile-bonus-card"], [1, "mobile-bonus-card-header", 3, "click"], [1, "mobile-bonus-card-main"], [1, "mobile-bonus-type"], [1, "mobile-bonus-amount"], [4, "ngIf"], [1, "mobile-bonus-expand"], [1, "mobile-bonus-details"], [1, "mobile-bonus-detail-row"], [1, "mobile-bonus-detail-label"], [1, "mobile-bonus-detail-value"], ["class", "mobile-bonus-detail-row", 4, "ngIf"], [3, "routerLink", 4, "ngIf"], [3, "routerLink"], [1, "payment-row"], [1, "td-id"], [1, "payment-id", "clickable", 3, "click"], [1, "td-amount"], [1, "amount-value"], [1, "td-bonuses"], ["class", "bonus-none", 4, "ngIf"], [1, "td-method"], ["badgeType", "paymentMethod", "size", "medium", 3, "paymentMethod"], [1, "td-status"], ["size", "medium", 3, "badgeType", "icon"], [1, "td-date"], [1, "date-info"], [1, "date-text"], [1, "time-text"], [1, "td-actions"], ["iconButtonType", "refund", "size", "small", "tooltip", "\u0412\u043E\u0437\u0432\u0440\u0430\u0442", 3, "onClick", "disabled"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none"], ["d", "M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "bonus-none"], ["d", "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2", "stroke", "currentColor", "stroke-width", "1.5"], [1, "mobile-payments-cards"], ["class", "mobile-payment-card", 4, "ngFor", "ngForOf"], [1, "mobile-payment-card"], [1, "mobile-payment-card-header", 3, "click"], [1, "mobile-payment-card-main"], [1, "mobile-payment-id", "clickable", 3, "click"], [1, "mobile-payment-amount"], [1, "mobile-payment-expand"], [1, "mobile-payment-details"], [1, "mobile-payment-detail-row"], [1, "mobile-payment-detail-label"], [1, "mobile-payment-detail-value"], ["class", "mobile-payment-detail-row", 4, "ngIf"], [1, "mobile-refund-btn", 3, "click"], [1, "delete-modal-overlay", 3, "click"], [1, "delete-modal", 3, "click"], ["class", "delete-modal-content", 4, "ngIf"], [1, "delete-modal-content"], [1, "delete-modal-icon", "warning"], ["d", "M12 9v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "delete-modal-title"], [1, "delete-modal-description"], [1, "delete-modal-actions"], [1, "delete-modal-btn", "cancel", 3, "click"], [1, "delete-modal-btn", "confirm", 3, "click"], [1, "delete-modal-icon", "danger"], ["d", "M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m3 0v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6h14zM10 11v6M14 11v6", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "confirm-word"], ["type", "text", "placeholder", "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043B\u043E\u0432\u043E \u0434\u043B\u044F \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u044F", 1, "delete-confirm-input", 3, "ngModelChange", "keydown.enter", "ngModel"], [1, "delete-modal-btn", "delete", 3, "click", "disabled"]], template: function ProfilePageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3);
      \u0275\u0275template(2, ProfilePageComponent_div_2_Template, 2, 2, "div", 4)(3, ProfilePageComponent_app_not_found_state_3_Template, 1, 0, "app-not-found-state", 5)(4, ProfilePageComponent_div_4_Template, 191, 51, "div", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "app-refund-confirmation-modal", 7);
      \u0275\u0275listener("visibleChange", function ProfilePageComponent_Template_app_refund_confirmation_modal_visibleChange_5_listener() {
        return ctx.closeRefundModal();
      })("confirm", function ProfilePageComponent_Template_app_refund_confirmation_modal_confirm_5_listener($event) {
        return ctx.confirmRefund($event.refundReason || "");
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "app-payment-view-modal", 8);
      \u0275\u0275listener("visibleChange", function ProfilePageComponent_Template_app_payment_view_modal_visibleChange_6_listener($event) {
        return ctx.showPaymentViewModal = $event;
      })("paymentUpdated", function ProfilePageComponent_Template_app_payment_view_modal_paymentUpdated_6_listener() {
        return ctx.onPaymentUpdated();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(7, ProfilePageComponent_div_7_Template, 4, 2, "div", 9);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.clientNotFound);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.client && !ctx.isLoading && !ctx.clientNotFound);
      \u0275\u0275advance();
      \u0275\u0275property("visible", ctx.showRefundModal)("payment", ctx.selectedPaymentForRefund);
      \u0275\u0275advance();
      \u0275\u0275property("visible", ctx.showPaymentViewModal)("paymentTxId", ctx.selectedPaymentTxId)("paymentSearchResult", ctx.selectedPaymentSearchResult);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showDeleteModal);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, BadgeComponent, IconButtonComponent, RefundConfirmationModalComponent, RouterModule, RouterLink, PaginatedTableWrapperComponent, LoaderComponent, NotFoundStateComponent, PaymentViewModalComponent, PhoneFormatPipe], styles: [`

.page-wrapper[_ngcontent-%COMP%] {
  min-height: 100%;
  margin: -2rem;
  padding: 2rem;
  background:
    linear-gradient(
      180deg,
      #f0fdf4 0%,
      #f8fafc 50%,
      #f8fafc 100%);
}
.profile-container-wrapper[_ngcontent-%COMP%] {
  position: relative;
  min-height: 400px;
}
.profile-container[_ngcontent-%COMP%] {
  max-width: 1200px;
  margin: 0 auto;
}
.page-loading-container[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  width: 100%;
}
.profile-header-card[_ngcontent-%COMP%] {
  background: white;
  border-radius: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
  margin-bottom: 1rem;
  position: relative;
}
.profile-header-content[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem 2rem;
}
.avatar-wrapper[_ngcontent-%COMP%] {
  position: relative;
  flex-shrink: 0;
}
.avatar-large[_ngcontent-%COMP%] {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background:
    linear-gradient(
      135deg,
      #16A34A,
      #22c55e);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 1px;
}
.status-indicator[_ngcontent-%COMP%] {
  position: absolute;
  bottom: 2px;
  right: 2px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #94a3b8;
  border: 2px solid white;
}
.status-indicator.active[_ngcontent-%COMP%] {
  background: #22c55e;
}
.profile-main-info[_ngcontent-%COMP%] {
  flex: 1;
  min-width: 0;
  position: relative;
}
.delete-client-btn[_ngcontent-%COMP%] {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #fef2f2;
  border: 1px solid #fecaca;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #dc2626;
  transition: all 0.2s ease;
  z-index: 10;
}
.delete-client-btn[_ngcontent-%COMP%]:hover {
  background: #fee2e2;
  border-color: #fca5a5;
  color: #b91c1c;
}
.delete-client-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  width: 18px;
  height: 18px;
}
.name-row[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.25rem;
}
.profile-name[_ngcontent-%COMP%] {
  font-size: 1.35rem;
  font-weight: 600;
  color: #111827;
  margin: 0;
}
.client-type-badge[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.25rem 0.6rem;
  background: #f0fdf4;
  color: #16A34A;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 500;
}
.client-type-badge.business[_ngcontent-%COMP%] {
  background: #dbeafe;
  color: #1d4ed8;
}
.client-type-badge[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  width: 14px;
  height: 14px;
}
.profile-phone[_ngcontent-%COMP%] {
  font-size: 0.9rem;
  color: #6b7280;
  margin: 0 0 0.75rem;
}
.tags-row[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.tags-container[_ngcontent-%COMP%] {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  align-items: center;
}
.client-tag[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.25rem 0.75rem;
  background: #dcfce7;
  color: #16A34A;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
}
.remove-tag-btn[_ngcontent-%COMP%] {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  color: #16A34A;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  transition: all 0.15s;
}
.remove-tag-btn[_ngcontent-%COMP%]:hover {
  background: rgba(21, 128, 61, 0.2);
}
.remove-tag-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  width: 10px;
  height: 10px;
}
.add-tag-wrapper[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
.add-tag-input[_ngcontent-%COMP%] {
  padding: 0.35rem 0.75rem;
  border: 1.5px solid #e2e8f0;
  border-radius: 20px;
  font-size: 0.8rem;
  width: 110px;
  outline: none;
  background:
    linear-gradient(
      to bottom,
      #ffffff,
      #f8fafc);
  color: #374151;
  font-weight: 500;
  transition: all 0.2s ease;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
}
.add-tag-input[_ngcontent-%COMP%]:hover {
  border-color: #cbd5e1;
}
.add-tag-input[_ngcontent-%COMP%]:focus {
  border-color: #22c55e;
  background: white;
  box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.1);
}
.add-tag-input[_ngcontent-%COMP%]::placeholder {
  color: #94a3b8;
  font-weight: 400;
}
.add-tag-confirm-btn[_ngcontent-%COMP%] {
  background: #16A34A;
  border: none;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
}
.add-tag-confirm-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  width: 12px;
  height: 12px;
}
.edit-tags-btn[_ngcontent-%COMP%] {
  background: #f0fdf4;
  border: 1px dashed #16A34A;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #16A34A;
  transition: all 0.15s;
}
.edit-tags-btn[_ngcontent-%COMP%]:hover {
  background: #dcfce7;
}
.edit-tags-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  width: 14px;
  height: 14px;
}
.tags-actions[_ngcontent-%COMP%] {
  display: flex;
  gap: 0.35rem;
}
.save-tags-btn[_ngcontent-%COMP%], 
.cancel-tags-btn[_ngcontent-%COMP%] {
  background: none;
  border: none;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.15s;
}
.save-tags-btn[_ngcontent-%COMP%] {
  background: #16A34A;
  color: white;
}
.save-tags-btn[_ngcontent-%COMP%]:hover {
  background: #14532d;
}
.cancel-tags-btn[_ngcontent-%COMP%] {
  background: #f3f4f6;
  color: #6b7280;
}
.cancel-tags-btn[_ngcontent-%COMP%]:hover {
  background: #e5e7eb;
}
.save-tags-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], 
.cancel-tags-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  width: 14px;
  height: 14px;
}
.tags-dropdown[_ngcontent-%COMP%] {
  position: absolute;
  top: 100%;
  left: 0;
  width: 500px;
  margin-top: 6px;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  z-index: 100;
  animation: _ngcontent-%COMP%_dropdownFadeIn 0.15s ease;
}
@keyframes _ngcontent-%COMP%_dropdownFadeIn {
  from {
    opacity: 0;
    transform: translateY(-4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.tags-dropdown-header[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 10px;
  background: #f8fafc;
  border-bottom: 1px solid #e2e8f0;
  font-size: 0.7rem;
  font-weight: 700;
  color: #64748b;
}
.tags-dropdown-close[_ngcontent-%COMP%] {
  background: none;
  border: none;
  font-size: 1rem;
  color: #94a3b8;
  cursor: pointer;
  padding: 0;
  line-height: 1;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  transition: all 0.15s;
}
.tags-dropdown-close[_ngcontent-%COMP%]:hover {
  color: #ef4444;
  background: #fef2f2;
}
.tags-dropdown-list[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding: 8px;
  max-height: 80px;
  overflow-y: auto;
}
.tag-option[_ngcontent-%COMP%] {
  padding: 0.25rem 0.6rem;
  background: #dcfce7;
  border: 1px solid #bbf7d0;
  color: #16A34A;
  border-radius: 16px;
  font-size: 0.75rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s ease;
}
.tag-option[_ngcontent-%COMP%]:hover {
  background: #bbf7d0;
  border-color: #22c55e;
}
.tags-row[_ngcontent-%COMP%] {
  position: relative;
}
.comment-card[_ngcontent-%COMP%] {
  background: white;
  border-radius: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
  margin-bottom: 1.5rem;
  padding: 1.25rem 1.5rem;
}
.comment-header[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.75rem;
}
.comment-title[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: #374151;
}
.comment-title[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  width: 18px;
  height: 18px;
  color: #16A34A;
}
.edit-comment-btn[_ngcontent-%COMP%] {
  background: none;
  border: none;
  padding: 0.4rem;
  cursor: pointer;
  color: #6b7280;
  border-radius: 6px;
  transition: all 0.15s;
}
.edit-comment-btn[_ngcontent-%COMP%]:hover {
  background: #f3f4f6;
  color: #16A34A;
}
.edit-comment-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  width: 16px;
  height: 16px;
}
.comment-actions[_ngcontent-%COMP%], 
.card-actions[_ngcontent-%COMP%] {
  display: flex;
  gap: 0.5rem;
}
.save-btn[_ngcontent-%COMP%], 
.cancel-btn[_ngcontent-%COMP%] {
  padding: 0.4rem 0.75rem;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  border: none;
}
.save-btn[_ngcontent-%COMP%] {
  background: #16A34A;
  color: white;
}
.save-btn[_ngcontent-%COMP%]:hover {
  background: #14532d;
}
.cancel-btn[_ngcontent-%COMP%] {
  background: #f3f4f6;
  color: #6b7280;
}
.cancel-btn[_ngcontent-%COMP%]:hover {
  background: #e5e7eb;
}
.comment-text[_ngcontent-%COMP%] {
  font-size: 0.9rem;
  color: #4b5563;
  margin: 0;
  line-height: 1.5;
}
.comment-textarea[_ngcontent-%COMP%] {
  width: 100%;
  padding: 0.875rem 1rem;
  border: 1.5px solid #e2e8f0;
  border-radius: 12px;
  font-size: 0.9rem;
  font-family: inherit;
  resize: vertical;
  min-height: 80px;
  background:
    linear-gradient(
      to bottom,
      #ffffff,
      #f8fafc);
  color: #374151;
  line-height: 1.6;
  transition: all 0.2s ease;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
}
.comment-textarea[_ngcontent-%COMP%]:hover {
  border-color: #cbd5e1;
  background:
    linear-gradient(
      to bottom,
      #ffffff,
      #f1f5f9);
}
.comment-textarea[_ngcontent-%COMP%]:focus {
  outline: none;
  border-color: #22c55e;
  background: white;
  box-shadow: 0 0 0 4px rgba(34, 197, 94, 0.12), 0 2px 4px rgba(0, 0, 0, 0.05);
}
.comment-textarea[_ngcontent-%COMP%]::placeholder {
  color: #94a3b8;
}
.stats-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin-bottom: 1.5rem;
}
.stat-card[_ngcontent-%COMP%] {
  background: white;
  border-radius: 16px;
  padding: 1.25rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
}
.stat-icon[_ngcontent-%COMP%] {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.stat-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  width: 22px;
  height: 22px;
}
.stat-icon.transactions[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      135deg,
      #dcfce7,
      #bbf7d0);
  color: #16A34A;
}
.stat-icon.total-sum[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      135deg,
      #dbeafe,
      #bfdbfe);
  color: #1d4ed8;
}
.stat-icon.bonuses-earned[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      135deg,
      #fef3c7,
      #fde68a);
  color: #d97706;
}
.stat-icon.bonuses-used[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      135deg,
      #fce7f3,
      #fbcfe8);
  color: #db2777;
}
.stat-info[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
}
.stat-value[_ngcontent-%COMP%] {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1f2937;
}
.stat-label[_ngcontent-%COMP%] {
  font-size: 0.8rem;
  color: #64748b;
}
.bonuses-details-card[_ngcontent-%COMP%] {
  background: white;
  border-radius: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
  margin-bottom: 1rem;
  overflow: hidden;
}
.bonuses-details-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {
  cursor: pointer;
  -webkit-user-select: none;
  user-select: none;
  transition: background 0.2s ease;
  padding: 1.5rem;
  margin-bottom: 0;
  border-bottom: none;
}
.bonuses-content[_ngcontent-%COMP%] {
  padding: 0 1.5rem 1.5rem 1.5rem;
}
.bonuses-details-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]:hover {
  background: #f8fafc;
}
.card-title-section[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
}
.bonuses-stats[_ngcontent-%COMP%] {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
}
.stat-item[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.stat-label[_ngcontent-%COMP%] {
  font-size: 0.8125rem;
  color: #64748b;
  font-weight: 500;
}
.stat-value[_ngcontent-%COMP%] {
  font-size: 0.875rem;
  font-weight: 700;
}
.collapse-btn[_ngcontent-%COMP%] {
  background: none;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  color: #64748b;
  border-radius: 8px;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}
.collapse-btn[_ngcontent-%COMP%]:hover {
  background: #f1f5f9;
  color: #1f2937;
}
.collapse-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  width: 20px;
  height: 20px;
  transition: transform 0.2s ease;
}
.collapse-btn.collapsed[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  transform: rotate(-90deg);
}
.bonuses-content[_ngcontent-%COMP%] {
  padding: 0 1.5rem 1.5rem;
}
.bonuses-content[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%] {
  overflow-x: auto;
}
.bonuses-table[_ngcontent-%COMP%] {
  width: 100%;
  border-collapse: collapse;
}
.bonuses-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {
  background: #f8fafc;
}
.bonuses-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {
  padding: 0.875rem 1rem;
  text-align: left;
  font-size: 0.75rem;
  font-weight: 600;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border-bottom: 1px solid #e5e7eb;
}
.bonuses-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {
  padding: 0.875rem 1rem;
  border-bottom: 1px solid #f1f5f9;
}
.bonuses-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child, 
.bonuses-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {
  width: 80px;
  text-align: center;
}
.bonuses-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {
  transition: background 0.15s;
}
.bonuses-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {
  background: #f8fafc;
}
.bonuses-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.expired[_ngcontent-%COMP%] {
  background: transparent;
}
.bonuses-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.expired[_ngcontent-%COMP%]:hover {
  background: transparent;
}
.bonuses-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.expiring-soon[_ngcontent-%COMP%] {
  background: transparent;
}
.bonuses-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.expiring-soon[_ngcontent-%COMP%]:hover {
  background: transparent;
}
.bonuses-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.used[_ngcontent-%COMP%] {
  background: transparent;
  opacity: 1;
}
.bonuses-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.refund[_ngcontent-%COMP%] {
  background: transparent;
}
.bonuses-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.refund[_ngcontent-%COMP%]:hover {
  background: transparent;
}
.bonuses-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {
  border-bottom: none;
}
.bonuses-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.bonus-details-row[_ngcontent-%COMP%] {
  background: transparent;
}
.bonuses-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.bonus-details-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {
  border-top: none;
  padding: 0;
}
.bonus-details-cell[_ngcontent-%COMP%] {
  padding: 0 !important;
  background: transparent;
}
.bonus-details-content[_ngcontent-%COMP%] {
  padding: 1rem 1.5rem;
  overflow: hidden;
  animation: _ngcontent-%COMP%_slideDown 0.3s ease-out;
}
@keyframes _ngcontent-%COMP%_slideDown {
  from {
    opacity: 0;
    max-height: 0;
  }
  to {
    opacity: 1;
    max-height: 300px;
  }
}
.bonus-details-grid[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
}
.refund-reason-section[_ngcontent-%COMP%] {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: left;
}
.bonus-initiated-by-section[_ngcontent-%COMP%] {
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: right;
  min-width: 200px;
}
.refund-reason-label[_ngcontent-%COMP%] {
  font-size: 0.875rem;
  font-weight: 600;
  color: #475569;
}
.refund-reason-text[_ngcontent-%COMP%] {
  padding: 0.75rem;
  background: transparent;
  border: none;
  border-radius: 0;
  font-size: 0.875rem;
  color: #1f2937;
  line-height: 1.6;
  white-space: pre-wrap;
  text-align: left;
}
.refund-reason-empty[_ngcontent-%COMP%] {
  padding: 0.75rem;
  background: transparent;
  border: none;
  border-radius: 0;
  font-size: 0.875rem;
  color: #94a3b8;
  font-style: italic;
  text-align: left;
}
.bonus-initiated-by-link[_ngcontent-%COMP%] {
  display: inline-block;
  padding: 0.75rem 0;
  background: transparent;
  border: none;
  border-radius: 0;
  font-size: 0.875rem;
  color: #1f2937;
  line-height: 1.6;
  white-space: pre-wrap;
  text-align: right;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.2s ease;
}
.bonus-initiated-by-link[_ngcontent-%COMP%]:hover {
  color: #16A34A;
}
.bonus-initiated-by-text[_ngcontent-%COMP%] {
  padding: 0.75rem 0;
  background: transparent;
  border: none;
  border-radius: 0;
  font-size: 0.875rem;
  color: #1f2937;
  line-height: 1.6;
  white-space: pre-wrap;
  text-align: right;
}
.bonus-initiated-by-empty[_ngcontent-%COMP%] {
  padding: 0.75rem 0;
  background: transparent;
  border: none;
  border-radius: 0;
  font-size: 0.875rem;
  color: #94a3b8;
  font-style: italic;
  text-align: right;
}
.actions-cell[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  transition: transform 0.3s ease;
}
.actions-cell[_ngcontent-%COMP%]   svg.rotated[_ngcontent-%COMP%] {
  transform: rotate(180deg);
}
.bonus-type-badge[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 600;
  color: #1f2937;
}
.bonus-type-badge.bonus-type-welcome[_ngcontent-%COMP%] {
  // color: #1e40af;
  color: #1f2937;
}
.bonus-type-badge.bonus-type-referral[_ngcontent-%COMP%] {
  // color: #92400e;
  color: #1f2937;
}
.bonus-type-badge.bonus-type-purchase[_ngcontent-%COMP%] {
  // color: #15803d;
  color: #1f2937;
}
.bonus-type-badge.bonus-type-promotion[_ngcontent-%COMP%] {
  // color: #be185d;
  color: #1f2937;
}
.bonus-type-badge.bonus-type-loyalty[_ngcontent-%COMP%] {
  // color: #3730a3;
  color: #1f2937;
}
.bonus-type-badge.bonus-type-refund[_ngcontent-%COMP%] {
  // color: #dc2626;
  color: #1f2937;
}
.bonus-amount[_ngcontent-%COMP%] {
  font-size: 0.9375rem;
  font-weight: 600;
  color: #fbbf24;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.bonus-amount.expired-amount[_ngcontent-%COMP%] {
  color: #94a3b8;
  text-decoration: line-through;
}
.bonus-date[_ngcontent-%COMP%], 
.bonus-expiry-date[_ngcontent-%COMP%] {
  font-size: 0.875rem;
  color: #1f2937;
  font-weight: 500;
}
.details-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 1rem;
}
.details-card[_ngcontent-%COMP%] {
  background: white;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
}
.card-header[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.25rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #f1f5f9;
}
.card-header-left[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.card-icon[_ngcontent-%COMP%] {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background:
    linear-gradient(
      135deg,
      #dcfce7,
      #bbf7d0);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #16A34A;
}
.card-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  width: 20px;
  height: 20px;
}
.card-title[_ngcontent-%COMP%] {
  font-size: 1rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0;
}
.card-edit-btn[_ngcontent-%COMP%] {
  background: none;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  color: #6b7280;
  border-radius: 8px;
  transition: all 0.15s;
}
.card-edit-btn[_ngcontent-%COMP%]:hover {
  background: #f3f4f6;
  color: #16A34A;
}
.card-edit-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  width: 18px;
  height: 18px;
}
.info-list[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
}
.info-row[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.info-label[_ngcontent-%COMP%] {
  font-size: 0.9rem;
  color: #64748b;
}
.info-value[_ngcontent-%COMP%] {
  font-size: 0.95rem;
  font-weight: 500;
  color: #1f2937;
}
.info-value.email[_ngcontent-%COMP%] {
  color: #16A34A;
}
.info-input[_ngcontent-%COMP%] {
  padding: 0.625rem 1rem;
  border: 1.5px solid #e2e8f0;
  border-radius: 10px;
  font-size: 0.9rem;
  font-family: inherit;
  text-align: right;
  width: 200px;
  background:
    linear-gradient(
      to bottom,
      #ffffff,
      #f8fafc);
  color: #1f2937;
  font-weight: 500;
  transition: all 0.2s ease;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
}
.info-input[_ngcontent-%COMP%]:hover {
  border-color: #cbd5e1;
  background:
    linear-gradient(
      to bottom,
      #ffffff,
      #f1f5f9);
}
.info-input[_ngcontent-%COMP%]:focus {
  outline: none;
  border-color: #22c55e;
  background: white;
  box-shadow: 0 0 0 4px rgba(34, 197, 94, 0.12), 0 2px 4px rgba(0, 0, 0, 0.05);
}
.info-input[_ngcontent-%COMP%]::placeholder {
  color: #94a3b8;
  font-weight: 400;
}
.info-input[_ngcontent-%COMP%]:disabled {
  background: #f1f5f9;
  color: #94a3b8;
  cursor: not-allowed;
  opacity: 0.6;
}
.info-input[_ngcontent-%COMP%]:disabled:hover {
  border-color: #e2e8f0;
  background: #f1f5f9;
}
.info-select[_ngcontent-%COMP%] {
  padding: 0.625rem 2.5rem 0.625rem 1rem;
  border: 1.5px solid #e2e8f0;
  border-radius: 10px;
  font-size: 0.9rem;
  font-family: inherit;
  width: 200px;
  background:
    linear-gradient(
      to bottom,
      #ffffff,
      #f8fafc);
  color: #1f2937;
  font-weight: 500;
  transition: all 0.2s ease;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2315803d' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 16px;
}
.info-select[_ngcontent-%COMP%]:hover {
  border-color: #22c55e;
  background-color: #f0fdf4;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2315803d' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
}
.info-select[_ngcontent-%COMP%]:focus {
  outline: none;
  border-color: #22c55e;
  background-color: white;
  box-shadow: 0 0 0 4px rgba(34, 197, 94, 0.12), 0 2px 4px rgba(0, 0, 0, 0.05);
}
.info-select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {
  padding: 0.75rem 1rem;
  background: white;
  color: #1f2937;
  font-weight: 500;
}
.info-select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]:hover, 
.info-select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]:checked {
  background:
    linear-gradient(
      to right,
      #f0fdf4,
      #dcfce7);
  color: #16A34A;
}
.payments-card[_ngcontent-%COMP%] {
  background: white;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
}
.payments-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {
  margin-bottom: 1rem;
}
.payments-count[_ngcontent-%COMP%] {
  font-size: 0.85rem;
  color: #64748b;
  font-weight: 500;
}
.table-container[_ngcontent-%COMP%] {
  overflow-x: auto;
}
.payments-table[_ngcontent-%COMP%] {
  width: 100%;
  border-collapse: collapse;
}
.payments-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {
  padding: 0.875rem 1rem;
  text-align: left;
  font-size: 0.75rem;
  font-weight: 600;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  background: #f8fafc;
  border-bottom: 1px solid #e5e7eb;
}
.payments-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {
  padding: 0.875rem 1rem;
  border-bottom: 1px solid #f1f5f9;
}
.payment-row[_ngcontent-%COMP%] {
  transition: background 0.15s;
}
.payment-row[_ngcontent-%COMP%]:hover {
  background: #f8fafc;
}
.payment-row[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {
  border-bottom: none;
}
.td-id[_ngcontent-%COMP%] {
  min-width: 100px;
}
.payment-id[_ngcontent-%COMP%] {
  font-family: monospace;
  font-weight: 600;
  color: #64748b;
  font-size: 0.875rem;
}
.payment-id.clickable[_ngcontent-%COMP%] {
  cursor: pointer;
  text-decoration: underline;
  transition: color 0.15s ease;
}
.payment-id.clickable[_ngcontent-%COMP%]:hover {
  color: #475569;
}
.td-client[_ngcontent-%COMP%] {
  min-width: 200px;
}
.client-cell[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.client-avatar[_ngcontent-%COMP%] {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background:
    linear-gradient(
      135deg,
      #f0fdf4,
      #dcfce7);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: #16A34A;
  font-size: 0.875rem;
  flex-shrink: 0;
}
.client-info[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}
.client-name-link[_ngcontent-%COMP%] {
  text-decoration: none;
  color: #1f2937;
  font-weight: 600;
  font-size: 0.9375rem;
  transition: color 0.2s;
  cursor: pointer;
  display: inline-block;
}
.client-name-link[_ngcontent-%COMP%]:hover {
  color: #16A34A;
}
.client-phone[_ngcontent-%COMP%] {
  font-size: 0.8125rem;
  color: #64748b;
}
.amount-value[_ngcontent-%COMP%] {
  font-size: 0.95rem;
  font-weight: 600;
  color: #16A34A;
}
.bonus-info[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}
.bonus-badge[_ngcontent-%COMP%] {
  display: inline-block;
}
.bonus-none[_ngcontent-%COMP%] {
  font-size: 0.8rem;
  color: #94a3b8;
}
.date-info[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}
.date-text[_ngcontent-%COMP%] {
  font-size: 0.85rem;
  color: #1f2937;
  font-weight: 500;
}
.time-text[_ngcontent-%COMP%] {
  font-size: 0.75rem;
  color: #64748b;
}
.th-actions[_ngcontent-%COMP%], 
.td-actions[_ngcontent-%COMP%] {
  width: 60px;
  text-align: center;
}
.actions-cell[_ngcontent-%COMP%] {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
}
.empty-state[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 2rem;
  color: #94a3b8;
}
.empty-state[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  width: 48px;
  height: 48px;
  margin-bottom: 1rem;
}
.empty-state[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
  font-size: 0.9rem;
}
@media (max-width: 1200px) {
  .stats-grid[_ngcontent-%COMP%] {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 768px) {
  .page-wrapper[_ngcontent-%COMP%] {
    margin: -1rem;
    padding: 1rem;
  }
  .profile-header-card[_ngcontent-%COMP%] {
    border-radius: 12px;
    margin-bottom: 1rem;
  }
  .profile-header-content[_ngcontent-%COMP%] {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 1.5rem 1rem;
    position: relative;
  }
  .avatar-wrapper[_ngcontent-%COMP%] {
    margin-bottom: 0.5rem;
  }
  .avatar-large[_ngcontent-%COMP%] {
    width: 80px;
    height: 80px;
    font-size: 1.5rem;
  }
  .profile-main-info[_ngcontent-%COMP%] {
    width: 100%;
    padding-right: 0;
    padding-top: 0.5rem;
  }
  .delete-client-btn[_ngcontent-%COMP%] {
    top: 1rem;
    right: 1rem;
  }
  .name-row[_ngcontent-%COMP%] {
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    padding-right: 0;
    margin-top: 0.5rem;
  }
  .profile-name[_ngcontent-%COMP%] {
    font-size: 1.25rem;
    word-break: break-word;
    padding-right: 0;
  }
  .profile-phone[_ngcontent-%COMP%] {
    font-size: 0.9rem;
    margin: 0.5rem 0;
  }
  .tags-row[_ngcontent-%COMP%] {
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
  }
  .tags-container[_ngcontent-%COMP%] {
    justify-content: center;
    width: 100%;
  }
  .comment-card[_ngcontent-%COMP%], 
   .details-card[_ngcontent-%COMP%] {
    border-radius: 12px;
    padding: 1.25rem 1rem;
  }
  .card-header[_ngcontent-%COMP%] {
    margin-bottom: 1rem;
  }
  .card-title[_ngcontent-%COMP%] {
    font-size: 1.125rem;
  }
  .info-list[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%] {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    padding: 0.75rem 0;
  }
  .info-label[_ngcontent-%COMP%] {
    min-width: auto;
    font-size: 0.875rem;
  }
  .info-value[_ngcontent-%COMP%] {
    font-size: 0.875rem;
  }
  .stats-grid[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  .details-grid[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  .bonuses-table[_ngcontent-%COMP%], 
   .payments-table[_ngcontent-%COMP%] {
    display: none;
  }
  .mobile-bonuses-cards[_ngcontent-%COMP%], 
   .mobile-payments-cards[_ngcontent-%COMP%] {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
}
@media (min-width: 769px) {
  .mobile-bonuses-cards[_ngcontent-%COMP%], 
   .mobile-payments-cards[_ngcontent-%COMP%] {
    display: none;
  }
}
.mobile-bonuses-cards[_ngcontent-%COMP%] {
  display: none;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
}
.mobile-bonus-card[_ngcontent-%COMP%] {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  width: 100%;
}
.mobile-bonus-card-header[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}
.mobile-bonus-card-main[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex: 1;
}
.mobile-bonus-type[_ngcontent-%COMP%] {
  font-size: 0.875rem;
  font-weight: 600;
  color: #1f2937;
}
.mobile-bonus-amount[_ngcontent-%COMP%] {
  font-size: 1rem;
  font-weight: 700;
  color: #d97706;
}
.mobile-bonus-expand[_ngcontent-%COMP%] {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #64748b;
  transition: transform 0.2s;
}
.mobile-bonus-expand.expanded[_ngcontent-%COMP%] {
  transform: rotate(180deg);
}
.mobile-bonus-details[_ngcontent-%COMP%] {
  margin-top: 0.75rem;
  padding-top: 0.75rem;
  border-top: 1px solid #e5e7eb;
  display: none;
}
.mobile-bonus-details.expanded[_ngcontent-%COMP%] {
  display: block;
}
.mobile-bonus-detail-row[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
}
.mobile-bonus-detail-label[_ngcontent-%COMP%] {
  color: #64748b;
}
.mobile-bonus-detail-value[_ngcontent-%COMP%] {
  color: #1f2937;
  font-weight: 500;
}
.mobile-payment-card[_ngcontent-%COMP%] {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}
.mobile-payment-card-header[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}
.mobile-payment-card-main[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex: 1;
}
.mobile-payment-id[_ngcontent-%COMP%] {
  font-family: monospace;
  font-size: 0.875rem;
  font-weight: 600;
  color: #64748b;
}
.mobile-payment-amount[_ngcontent-%COMP%] {
  font-size: 1rem;
  font-weight: 700;
  color: #16A34A;
}
.mobile-payment-expand[_ngcontent-%COMP%] {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #64748b;
  transition: transform 0.2s;
}
.mobile-payment-expand.expanded[_ngcontent-%COMP%] {
  transform: rotate(180deg);
}
.mobile-payment-details[_ngcontent-%COMP%] {
  margin-top: 0.75rem;
  padding-top: 0.75rem;
  border-top: 1px solid #e5e7eb;
  display: none;
}
.mobile-payment-details.expanded[_ngcontent-%COMP%] {
  display: block;
}
.mobile-payment-detail-row[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
}
.mobile-payment-detail-label[_ngcontent-%COMP%] {
  color: #64748b;
}
.mobile-payment-detail-value[_ngcontent-%COMP%] {
  color: #1f2937;
  font-weight: 500;
}
.mobile-refund-btn[_ngcontent-%COMP%] {
  width: 100%;
  padding: 0.75rem;
  background: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 8px;
  color: #dc2626;
  font-weight: 600;
  font-size: 0.875rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
  transition: all 0.2s;
}
.mobile-refund-btn[_ngcontent-%COMP%]:hover {
  background: #fee2e2;
  border-color: #fca5a5;
}
.mobile-refund-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  width: 16px;
  height: 16px;
}
.delete-modal-overlay[_ngcontent-%COMP%] {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: _ngcontent-%COMP%_fadeIn 0.2s ease;
}
@keyframes _ngcontent-%COMP%_fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.delete-modal[_ngcontent-%COMP%] {
  background: white;
  border-radius: 16px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
  max-width: 420px;
  width: 90%;
  animation: _ngcontent-%COMP%_slideUp 0.3s ease;
}
@keyframes _ngcontent-%COMP%_slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.delete-modal-content[_ngcontent-%COMP%] {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.delete-modal-icon[_ngcontent-%COMP%] {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.25rem;
}
.delete-modal-icon.warning[_ngcontent-%COMP%] {
  background: #fef3c7;
  color: #d97706;
}
.delete-modal-icon.danger[_ngcontent-%COMP%] {
  background: #fee2e2;
  color: #dc2626;
}
.delete-modal-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  width: 32px;
  height: 32px;
}
.delete-modal-title[_ngcontent-%COMP%] {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 0.75rem;
}
.delete-modal-description[_ngcontent-%COMP%] {
  font-size: 0.9rem;
  color: #6b7280;
  line-height: 1.6;
  margin: 0 0 1.5rem;
}
.delete-modal-description[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {
  color: #1f2937;
}
.confirm-word[_ngcontent-%COMP%] {
  color: #dc2626;
  background: #fee2e2;
  padding: 0.125rem 0.5rem;
  border-radius: 4px;
  font-family: monospace;
  font-size: 0.95rem;
}
.delete-confirm-input[_ngcontent-%COMP%] {
  width: 100%;
  padding: 0.875rem 1rem;
  border: 2px solid #e5e7eb;
  border-radius: 10px;
  font-size: 1rem;
  font-family: inherit;
  text-align: center;
  margin-bottom: 1.5rem;
  transition: all 0.2s ease;
}
.delete-confirm-input[_ngcontent-%COMP%]:focus {
  outline: none;
  border-color: #dc2626;
  box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
}
.delete-confirm-input[_ngcontent-%COMP%]::placeholder {
  color: #9ca3af;
}
.delete-modal-actions[_ngcontent-%COMP%] {
  display: flex;
  gap: 0.75rem;
  width: 100%;
}
.delete-modal-btn[_ngcontent-%COMP%] {
  flex: 1;
  padding: 0.875rem 1.5rem;
  border-radius: 10px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
}
.delete-modal-btn.cancel[_ngcontent-%COMP%] {
  background: #f3f4f6;
  color: #6b7280;
}
.delete-modal-btn.cancel[_ngcontent-%COMP%]:hover {
  background: #e5e7eb;
  color: #374151;
}
.delete-modal-btn.confirm[_ngcontent-%COMP%] {
  background: #fef3c7;
  color: #d97706;
}
.delete-modal-btn.confirm[_ngcontent-%COMP%]:hover {
  background: #fde68a;
  color: #b45309;
}
.delete-modal-btn.delete[_ngcontent-%COMP%] {
  background: #dc2626;
  color: white;
}
.delete-modal-btn.delete[_ngcontent-%COMP%]:hover:not(:disabled) {
  background: #b91c1c;
}
.delete-modal-btn.delete[_ngcontent-%COMP%]:disabled {
  background: #fca5a5;
  cursor: not-allowed;
}
/*# sourceMappingURL=profile-page.component.css.map */`] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProfilePageComponent, [{
    type: Component,
    args: [{ selector: "app-profile-page", standalone: true, imports: [CommonModule, FormsModule, BadgeComponent, IconButtonComponent, RefundConfirmationModalComponent, RouterModule, PaginatedTableWrapperComponent, LoaderComponent, ButtonComponent, NotFoundStateComponent, PaymentViewModalComponent, PhoneFormatPipe], template: `
    <div class="page-wrapper">
      <div class="profile-container-wrapper">
        <!-- Loading State -->
        <div class="page-loading-container" *ngIf="isLoading">
          <app-loader [visible]="true" [overlay]="false" type="logo" size="large"></app-loader>
        </div>

      <!-- Not Found State -->
      <app-not-found-state
        *ngIf="!isLoading && clientNotFound"
        title="\u041A\u043B\u0438\u0435\u043D\u0442 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D"
        description="\u041A \u0441\u043E\u0436\u0430\u043B\u0435\u043D\u0438\u044E, \u0437\u0430\u043F\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u043C\u044B\u0439 \u043A\u043B\u0438\u0435\u043D\u0442 \u043D\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u0438\u043B\u0438 \u0431\u044B\u043B \u0443\u0434\u0430\u043B\u0435\u043D."
        backLink="/clients"
        backText="\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043A \u043A\u043B\u0438\u0435\u043D\u0442\u0430\u043C">
      </app-not-found-state>

        <div class="profile-container" *ngIf="client && !isLoading && !clientNotFound">
        
        <!-- Profile Header Card -->
        <div class="profile-header-card">
          <!-- Delete Button -->
          <button class="delete-client-btn" (click)="openDeleteModal()" title="\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043A\u043B\u0438\u0435\u043D\u0442\u0430">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m3 0v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6h14zM10 11v6M14 11v6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <div class="profile-header-content">
            <div class="avatar-wrapper">
              <div class="avatar-large">
                {{ getInitials() }}
              </div>
            </div>
            <div class="profile-main-info">
              <div class="name-row">
                <h1 class="profile-name">{{ getFullName() }}</h1>
                <span class="client-type-badge" [class.business]="client.type === 'business'">
                  <svg *ngIf="client.type === 'business'" viewBox="0 0 24 24" fill="none">
                    <path d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z" stroke="currentColor" stroke-width="1.5"/>
                    <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" stroke="currentColor" stroke-width="1.5"/>
                  </svg>
                  <svg *ngIf="client.type === 'individual'" viewBox="0 0 24 24" fill="none">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" stroke="currentColor" stroke-width="1.5"/>
                    <circle cx="12" cy="7" r="4" stroke="currentColor" stroke-width="1.5"/>
                  </svg>
                  {{ client.type === 'business' ? '\u0411\u0438\u0437\u043D\u0435\u0441' : '\u0418\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u044B\u0439' }}
                </span>
              </div>
              <p class="profile-phone">{{ client.phone | phoneFormat }}</p>
              <div class="tags-row">
                <div class="tags-container">
                  <span class="client-tag" *ngFor="let tag of client.tags; let i = index">
                    {{ tag }}
                    <button class="remove-tag-btn" *ngIf="isEditingTags" (click)="removeTag(i)">
                      <svg viewBox="0 0 24 24" fill="none">
                        <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                      </svg>
                    </button>
                  </span>
                  <div class="add-tag-wrapper" *ngIf="isEditingTags">
                    <input 
                      type="text" 
                      [(ngModel)]="newTagInput" 
                      (keydown.enter)="addTag()"
                      (focus)="showTagsDropdown = true"
                      placeholder="\u041D\u043E\u0432\u044B\u0439 \u0442\u044D\u0433..."
                      class="add-tag-input">
                    <button class="add-tag-confirm-btn" (click)="addTag()" *ngIf="newTagInput.trim()">
                      <svg viewBox="0 0 24 24" fill="none">
                        <path d="M5 12l5 5L20 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </button>
                  </div>
                </div>
                
                <!-- Tags Dropdown -->
                <div class="tags-dropdown" *ngIf="isEditingTags && showTagsDropdown && availableTags.length > 0">
                  <div class="tags-dropdown-header">
                    <span>\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0442\u044D\u0433\u0438</span>
                    <button type="button" class="tags-dropdown-close" (click)="showTagsDropdown = false">\xD7</button>
                  </div>
                  <div class="tags-dropdown-list">
                    <button 
                      type="button"
                      class="tag-option" 
                      *ngFor="let tag of getFilteredTags()"
                      (click)="addTagFromDropdown(tag)">
                      {{ tag }}
                    </button>
                    <div class="tags-dropdown-empty" *ngIf="getFilteredTags().length === 0 && availableTags.length > 0">
                      \u0412\u0441\u0435 \u043F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0442\u0435\u0433\u0438 \u0443\u0436\u0435 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u044B
                    </div>
                  </div>
                </div>
                <button class="edit-tags-btn" *ngIf="!isEditingTags" (click)="startEditTags()">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                  </svg>
                </button>
                <div class="tags-actions" *ngIf="isEditingTags">
                  <button class="save-tags-btn" (click)="saveTags()" [disabled]="isSavingTags">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M5 12l5 5L20 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </button>
                  <button class="cancel-tags-btn" (click)="cancelEditTags()" [disabled]="isSavingTags">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Comment Card -->
        <div class="comment-card">
          <div class="comment-header">
            <div class="comment-title">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 \u043E \u043A\u043B\u0438\u0435\u043D\u0442\u0435</span>
            </div>
            <button class="edit-comment-btn" *ngIf="!isEditingComment" (click)="startEditComment()">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <div class="comment-actions" *ngIf="isEditingComment">
              <button class="save-btn" (click)="saveComment()" [disabled]="isSavingComment">\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C</button>
              <button class="cancel-btn" (click)="cancelEditComment()" [disabled]="isSavingComment">\u041E\u0442\u043C\u0435\u043D\u0430</button>
            </div>
          </div>
          <div class="comment-body">
            <p *ngIf="!isEditingComment" class="comment-text">{{ client.comment || '\u041D\u0435\u0442 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u044F' }}</p>
            <textarea 
              *ngIf="isEditingComment" 
              [(ngModel)]="editedComment" 
              class="comment-textarea"
              placeholder="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 \u043E \u043A\u043B\u0438\u0435\u043D\u0442\u0435..."
              rows="3"></textarea>
          </div>
        </div>

        <!-- Stats Cards -->
        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-icon transactions">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <rect x="9" y="3" width="6" height="4" rx="1" stroke="currentColor" stroke-width="1.5"/>
                <path d="M9 12h6M9 16h6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
            </div>
            <div class="stat-info">
              <span class="stat-value">{{ clientTotals.totalPayments }}</span>
              <span class="stat-label">\u0422\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u0439</span>
            </div>
          </div>
          <div class="stat-card">
            <div class="stat-icon total-sum">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="stat-info">
              <span class="stat-value">{{ formatAmount(clientTotals.totalRevenue) }} \u20B8</span>
              <span class="stat-label">\u041E\u0431\u0449\u0430\u044F \u0441\u0443\u043C\u043C\u0430</span>
            </div>
          </div>
          <div class="stat-card">
            <div class="stat-icon bonuses-earned">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="stat-info">
              <span class="stat-value">{{ formatAmount(clientTotals.totalBonusesGranted) }}</span>
              <span class="stat-label">\u0411\u043E\u043D\u0443\u0441\u043E\u0432 \u043D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u043E</span>
            </div>
          </div>
          <div class="stat-card">
            <div class="stat-icon bonuses-used">
              <svg viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"/>
                <path d="M8 12l3 3 5-6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="stat-info">
              <span class="stat-value">{{ formatAmount(clientTotals.totalBonusesUsed) }}</span>
              <span class="stat-label">\u0411\u043E\u043D\u0443\u0441\u043E\u0432 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u043E</span>
            </div>
          </div>
        </div>

        <!-- Profile Details -->
        <div class="details-grid">
          <!-- Personal Info Card -->
          <div class="details-card">
            <div class="card-header">
              <div class="card-header-left">
                <div class="card-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <h3 class="card-title">\u041B\u0438\u0447\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435</h3>
              </div>
              <button class="card-edit-btn" *ngIf="!isEditingPersonal" (click)="startEditPersonal()">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
              <div class="card-actions" *ngIf="isEditingPersonal">
                <button class="save-btn" (click)="savePersonal()" [disabled]="isSavingPersonal">\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C</button>
                <button class="cancel-btn" (click)="cancelEditPersonal()" [disabled]="isSavingPersonal">\u041E\u0442\u043C\u0435\u043D\u0430</button>
              </div>
            </div>
            <div class="info-list">
              <div class="info-row">
                <span class="info-label">\u0418\u043C\u044F</span>
                <span class="info-value" *ngIf="!isEditingPersonal">{{ client.firstName }}</span>
                <input class="info-input" *ngIf="isEditingPersonal" [(ngModel)]="editedPersonal.firstName">
              </div>
              <div class="info-row">
                <span class="info-label">\u0424\u0430\u043C\u0438\u043B\u0438\u044F</span>
                <span class="info-value" *ngIf="!isEditingPersonal">{{ client.lastName }}</span>
                <input class="info-input" *ngIf="isEditingPersonal" [(ngModel)]="editedPersonal.lastName">
              </div>
              <div class="info-row">
                <span class="info-label">\u0422\u0438\u043F \u043A\u043B\u0438\u0435\u043D\u0442\u0430</span>
                <span class="info-value" *ngIf="!isEditingPersonal">{{ client.type === 'business' ? '\u0411\u0438\u0437\u043D\u0435\u0441' : '\u0418\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u044B\u0439' }}</span>
                <select class="info-select" *ngIf="isEditingPersonal" [(ngModel)]="editedPersonal.type">
                  <option value="individual">\u0418\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u044B\u0439</option>
                  <option value="business">\u0411\u0438\u0437\u043D\u0435\u0441</option>
                </select>
              </div>
            </div>
          </div>

          <!-- Contact Info Card -->
          <div class="details-card">
            <div class="card-header">
              <div class="card-header-left">
                <div class="card-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <h3 class="card-title">\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B</h3>
              </div>
              <button class="card-edit-btn" *ngIf="!isEditingContacts" (click)="startEditContacts()">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
              <div class="card-actions" *ngIf="isEditingContacts">
                <button class="save-btn" (click)="saveContacts()" [disabled]="isSavingContacts">\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C</button>
                <button class="cancel-btn" (click)="cancelEditContacts()" [disabled]="isSavingContacts">\u041E\u0442\u043C\u0435\u043D\u0430</button>
              </div>
            </div>
            <div class="info-list">
              <div class="info-row">
                <span class="info-label">\u0422\u0435\u043B\u0435\u0444\u043E\u043D</span>
                <span class="info-value" *ngIf="!isEditingContacts">{{ client.phone | phoneFormat }}</span>
                <input class="info-input" *ngIf="isEditingContacts" [(ngModel)]="editedContacts.phone" type="tel">
              </div>
              <div class="info-row">
                <span class="info-label">Email</span>
                <span class="info-value email" *ngIf="!isEditingContacts">{{ client.email || '\u2014' }}</span>
                <input class="info-input" *ngIf="isEditingContacts" [(ngModel)]="editedContacts.email" type="email" [disabled]="true" placeholder="Email \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D \u0434\u043B\u044F \u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F">
              </div>
            </div>
          </div>
        </div>

        <!-- Bonuses Details Card -->
        <div class="bonuses-details-card">
          <div class="card-header" (click)="toggleBonusesExpanded()">
            <div class="card-header-left">
              <div class="card-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <div class="card-title-section">
                <h3 class="card-title">\u0414\u0435\u0442\u0430\u043B\u0438 \u0431\u043E\u043D\u0443\u0441\u043E\u0432</h3>
                <div class="bonuses-stats">
                  <div class="stat-item">
                    <span class="stat-label">\u041E\u0441\u0442\u0430\u043B\u043E\u0441\u044C:</span>
                    <span class="stat-value active">{{ formatAmount(bonusBalance) }} \u20B8</span>
                  </div>
                  <div class="stat-item">
                    <span class="stat-label">\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u043E:</span>
                    <span class="stat-value used">{{ formatAmount(getUsedBonusesTotal()) }} \u20B8</span>
                  </div>
                  <div class="stat-item">
                    <span class="stat-label">\u0421\u0433\u043E\u0440\u0435\u043B\u043E:</span>
                    <span class="stat-value expired">{{ formatAmount(getExpiredBonusesTotal()) }} \u20B8</span>
                  </div>
                </div>
              </div>
            </div>
            <button class="collapse-btn" [class.collapsed]="!isBonusesExpanded">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
          <div class="bonuses-content" *ngIf="isBonusesExpanded">
            <app-paginated-table-wrapper
              [paginationEnabled]="true"
              [data]="bonusesDetails"
              [defaultPageSize]="10"
              paginationKey="bonuses"
              #paginatedBonuses>
              <div class="table-container" *ngIf="bonusesDetails.length > 0">
                <table class="bonuses-table">
                  <thead>
                    <tr>
                      <th>\u0422\u0438\u043F \u0431\u043E\u043D\u0443\u0441\u0430</th>
                      <th>\u0421\u0443\u043C\u043C\u0430</th>
                      <th>\u041D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u043E</th>
                      <th>\u0418\u0441\u0442\u0435\u043A\u0430\u0435\u0442</th>
                      <th>\u041E\u0441\u0442\u0430\u043B\u043E\u0441\u044C</th>
                      <th>\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F</th>
                    </tr>
                  </thead>
                  <tbody>
                    <ng-container *ngFor="let bonus of paginatedBonuses.paginatedData">
                    <tr
                        [class.expired]="getDaysUntilExpiry(bonus.expiresAt) <= 0 && !bonus.used && bonus.type !== 'refund'"
                        [class.expiring-soon]="getDaysUntilExpiry(bonus.expiresAt) <= 7 && getDaysUntilExpiry(bonus.expiresAt) > 0"
                        [class.used]="bonus.used"
                        [class.refund]="bonus.type === 'refund'">
                      <td>
                        <span class="bonus-type-badge" [class]="'bonus-type-' + bonus.type">
                          {{ getBonusTypeLabel(bonus.type) }}
                        </span>
                      </td>
                      <td>
                        <div class="bonus-info">
                          <app-badge
                            *ngIf="bonus.used"
                            badgeType="bonusUsed"
                            size="medium"
                            icon="check"
                            class="bonus-badge">
                            -{{ formatAmount(bonus.amount) }}
                          </app-badge>
                          <app-badge
                            *ngIf="bonus.type === 'refund'"
                            badgeType="refund"
                            size="medium"
                            icon="refund"
                            class="bonus-badge">
                            {{ formatAmount(bonus.amount) }}
                          </app-badge>
                          <app-badge
                            *ngIf="bonus.type !== 'refund' && !bonus.used && getDaysUntilExpiry(bonus.expiresAt) <= 0"
                            badgeType="bonusExpired"
                            size="medium"
                            icon="expired"
                            class="bonus-badge">
                            {{ formatAmount(bonus.amount) }}
                          </app-badge>
                          <app-badge
                            *ngIf="bonus.type !== 'refund' && !bonus.used && getDaysUntilExpiry(bonus.expiresAt) > 0"
                            badgeType="bonusGranted"
                            size="medium"
                            icon="star"
                            class="bonus-badge">
                            +{{ formatAmount(bonus.amount) }}
                          </app-badge>
                        </div>
                      </td>
                      <td>
                        <span class="bonus-date">{{ formatDate(bonus.issuedAt) }}</span>
                      </td>
                      <td>
                        <span class="bonus-expiry-date">{{ formatDate(bonus.expiresAt) }}</span>
                      </td>
                      <td>
                        <app-badge
                          *ngIf="bonus.used"
                          badgeType="bonusUsed"
                          size="medium"
                          icon="used">
                          \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u043E
                        </app-badge>
                        <app-badge
                          *ngIf="bonus.type === 'refund'"
                          badgeType="refund"
                          size="medium"
                          icon="refund">
                          \u041E\u0442\u043E\u0437\u0432\u0430\u043D\u043E
                        </app-badge>
                        <app-badge
                          *ngIf="bonus.type !== 'refund' && !bonus.used && getDaysUntilExpiry(bonus.expiresAt) > 0"
                          [badgeType]="getDaysUntilExpiry(bonus.expiresAt) <= 7 ? 'warning' : 'success'"
                          size="medium">
                          {{ getDaysUntilExpiry(bonus.expiresAt) }} {{ getDaysText(getDaysUntilExpiry(bonus.expiresAt)) }}
                        </app-badge>
                        <app-badge
                          *ngIf="bonus.type !== 'refund' && !bonus.used && getDaysUntilExpiry(bonus.expiresAt) <= 0"
                          badgeType="bonusExpired"
                          size="medium"
                          icon="expired">
                          \u0418\u0441\u0442\u0435\u043A
                        </app-badge>
                      </td>
                      <td>
                        <div class="actions-cell">
                          <app-icon-button
                            iconButtonType="ghost"
                            size="medium"
                            class = "view-svg-btn"
                            [tooltip]="isBonusRowExpanded(bonus.id) ? '\u0421\u043A\u0440\u044B\u0442\u044C \u0434\u0435\u0442\u0430\u043B\u0438' : '\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0434\u0435\u0442\u0430\u043B\u0438'"
                            (onClick)="toggleBonusRow(bonus.id)">
                            <svg [class.rotated]="isBonusRowExpanded(bonus.id)" viewBox="0 0 24 24" fill="none">
                              <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                          </app-icon-button>
                        </div>
                      </td>
                    </tr>
                    <tr *ngIf="isBonusRowExpanded(bonus.id)" class="bonus-details-row">
                      <td colspan="6" class="bonus-details-cell">
                        <div class="bonus-details-content">
                          <div class="bonus-details-grid">
                            <div class="refund-reason-section">
                              <span class="refund-reason-label">\u041F\u0440\u0438\u0447\u0438\u043D\u0430 \u0432\u043E\u0437\u0432\u0440\u0430\u0442\u0430:</span>
                              <div class="refund-reason-text" *ngIf="bonus.refundReason">
                                {{ bonus.refundReason }}
                              </div>
                              <div class="refund-reason-empty" *ngIf="!bonus.refundReason">
                                \u041F\u0440\u0438\u0447\u0438\u043D\u0430 \u043D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D\u0430
                              </div>
                            </div>
                            <div class="bonus-initiated-by-section">
                              <span class="refund-reason-label">\u0418\u043D\u0438\u0446\u0438\u0430\u0442\u043E\u0440:</span>
                              <a *ngIf="bonus.initiatedBy && bonus.initiatedById" 
                                 [routerLink]="['/users', bonus.initiatedById]" 
                                 class="bonus-initiated-by-link">
                                {{ bonus.initiatedBy }}
                              </a>
                              <div class="bonus-initiated-by-text" *ngIf="bonus.initiatedBy && !bonus.initiatedById">
                                {{ bonus.initiatedBy }}
                              </div>
                              <div class="bonus-initiated-by-empty" *ngIf="!bonus.initiatedBy">
                                \u041D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </ng-container>
                  </tbody>
                </table>
              </div>
              <div class="empty-state" *ngIf="bonusesDetails.length === 0">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>\u041D\u0435\u0442 \u0430\u043A\u0442\u0438\u0432\u043D\u044B\u0445 \u0431\u043E\u043D\u0443\u0441\u043E\u0432</span>
              </div>
            </app-paginated-table-wrapper>
          </div>

          <!-- Mobile Bonus Cards -->
          <div class="mobile-bonuses-cards" *ngIf="isBonusesExpanded && bonusesDetails.length > 0">
            <div class="mobile-bonus-card" *ngFor="let bonus of bonusesDetails">
              <div class="mobile-bonus-card-header" (click)="toggleMobileBonusCard(bonus.id)">
                <div class="mobile-bonus-card-main">
                  <div>
                    <div class="mobile-bonus-type">{{ getBonusTypeLabel(bonus.type) }}</div>
                    <div class="mobile-bonus-amount">
                      <span *ngIf="bonus.used">-</span>
                      <span *ngIf="bonus.type === 'refund'"></span>
                      <span *ngIf="bonus.type !== 'refund' && !bonus.used">+</span>
                      {{ formatAmount(bonus.amount) }} \u20B8
                    </div>
                  </div>
                </div>
                <div class="mobile-bonus-expand" [class.expanded]="isMobileBonusExpanded(bonus.id)">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
              </div>
              <div class="mobile-bonus-details" [class.expanded]="isMobileBonusExpanded(bonus.id)">
                <div class="mobile-bonus-detail-row">
                  <span class="mobile-bonus-detail-label">\u041D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u043E:</span>
                  <span class="mobile-bonus-detail-value">{{ formatDate(bonus.issuedAt) }}</span>
                </div>
                <div class="mobile-bonus-detail-row">
                  <span class="mobile-bonus-detail-label">\u0418\u0441\u0442\u0435\u043A\u0430\u0435\u0442:</span>
                  <span class="mobile-bonus-detail-value">{{ formatDate(bonus.expiresAt) }}</span>
                </div>
                <div class="mobile-bonus-detail-row">
                  <span class="mobile-bonus-detail-label">\u0421\u0442\u0430\u0442\u0443\u0441:</span>
                  <span class="mobile-bonus-detail-value">
                    <span *ngIf="bonus.used">\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u043E</span>
                    <span *ngIf="bonus.type === 'refund'">\u041E\u0442\u043E\u0437\u0432\u0430\u043D\u043E</span>
                    <span *ngIf="bonus.type !== 'refund' && !bonus.used && getDaysUntilExpiry(bonus.expiresAt) > 0">
                      {{ getDaysUntilExpiry(bonus.expiresAt) }} {{ getDaysText(getDaysUntilExpiry(bonus.expiresAt)) }}
                    </span>
                    <span *ngIf="bonus.type !== 'refund' && !bonus.used && getDaysUntilExpiry(bonus.expiresAt) <= 0">\u0418\u0441\u0442\u0435\u043A</span>
                  </span>
                </div>
                <div class="mobile-bonus-detail-row" *ngIf="bonus.refundReason">
                  <span class="mobile-bonus-detail-label">\u041F\u0440\u0438\u0447\u0438\u043D\u0430 \u0432\u043E\u0437\u0432\u0440\u0430\u0442\u0430:</span>
                  <span class="mobile-bonus-detail-value">{{ bonus.refundReason }}</span>
                </div>
                <div class="mobile-bonus-detail-row" *ngIf="bonus.initiatedBy">
                  <span class="mobile-bonus-detail-label">\u0418\u043D\u0438\u0446\u0438\u0430\u0442\u043E\u0440:</span>
                  <span class="mobile-bonus-detail-value">
                    <a *ngIf="bonus.initiatedById" [routerLink]="['/users', bonus.initiatedById]">{{ bonus.initiatedBy }}</a>
                    <span *ngIf="!bonus.initiatedById">{{ bonus.initiatedBy }}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Payments Table Card (Full Width) -->
        <div class="payments-card">
          <div class="card-header">
            <div class="card-header-left">
              <div class="card-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <h3 class="card-title">\u0418\u0441\u0442\u043E\u0440\u0438\u044F \u043F\u043B\u0430\u0442\u0435\u0436\u0435\u0439</h3>
            </div>
            <span class="payments-count">{{ payments.length }} \u043F\u043B\u0430\u0442\u0435\u0436\u0435\u0439</span>
          </div>

          <!-- Payments Table with Pagination -->
          <app-paginated-table-wrapper
            [paginationEnabled]="true"
            [data]="payments"
            [defaultPageSize]="15"
            paginationKey="payments"
            #paginatedTable>
            
            <div class="table-container">
              <table class="payments-table">
                <thead>
                  <tr>
                    <th class="th-id">ID \u043F\u043B\u0430\u0442\u0435\u0436\u0430</th>
                    <th class="th-amount">\u0421\u0443\u043C\u043C\u0430</th>
                    <th class="th-bonuses">\u0411\u043E\u043D\u0443\u0441\u044B</th>
                    <th class="th-method">\u0421\u043F\u043E\u0441\u043E\u0431 \u043E\u043F\u043B\u0430\u0442\u044B</th>
                    <th class="th-status">\u0421\u0442\u0430\u0442\u0443\u0441</th>
                    <th class="th-date">\u0414\u0430\u0442\u0430 \u0438 \u0432\u0440\u0435\u043C\u044F</th>
                    <th class="th-actions">\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F</th>
                  </tr>
                </thead>
                <tbody>
                  <tr *ngFor="let payment of paginatedTable.paginatedData" class="payment-row">
                  <td class="td-id">
                    <span class="payment-id clickable" (click)="openPaymentView(payment.id)">{{ payment.id }}</span>
                  </td>
                  <td class="td-amount">
                    <span class="amount-value">{{ formatAmount(payment.amount) }} \u20B8</span>
                  </td>
                  <td class="td-bonuses">
                    <div class="bonus-info">
                      <app-badge 
                        *ngIf="payment.bonusEarned > 0"
                        badgeType="bonusGranted" 
                        size="medium"
                        icon="star"
                        class="bonus-badge">
                        +{{ formatAmount(payment.bonusEarned) }}
                      </app-badge>
                      <app-badge 
                        *ngIf="payment.bonusUsed > 0"
                        badgeType="bonusUsed" 
                        size="medium"
                        icon="check"
                        class="bonus-badge">
                        -{{ formatAmount(payment.bonusUsed) }}
                      </app-badge>
                      <app-badge 
                        *ngIf="payment.bonusRevoked > 0"
                        badgeType="refund" 
                        size="medium"
                        icon="refund"
                        class="bonus-badge">
                        -{{ formatAmount(payment.bonusRevoked) }}
                      </app-badge>
                      <span class="bonus-none" *ngIf="payment.bonusEarned === 0 && payment.bonusUsed === 0 && payment.bonusRevoked === 0">\u2014</span>
                    </div>
                  </td>
                  <td class="td-method">
                    <app-badge 
                      badgeType="paymentMethod" 
                      size="medium"
                      [paymentMethod]="getPaymentMethodForBadge(payment.paymentMethod)">
                    </app-badge>
                  </td>
                  <td class="td-status">
                    <app-badge 
                      [badgeType]="payment.isRefund ? 'refund' : 'payment'" 
                      size="medium"
                      [icon]="payment.isRefund ? 'refund' : 'payment'">
                      {{ payment.isRefund ? '\u0412\u043E\u0437\u0432\u0440\u0430\u0442' : '\u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E' }}
                    </app-badge>
                  </td>
                  <td class="td-date">
                    <div class="date-info">
                      <span class="date-text">{{ payment.date }}</span>
                      <span class="time-text">{{ payment.time }}</span>
                    </div>
                  </td>
                  <td class="td-actions">
                    <div class="actions-cell">
                      <app-icon-button
                        iconButtonType="refund"
                        size="small"
                        tooltip="\u0412\u043E\u0437\u0432\u0440\u0430\u0442"
                        [disabled]="payment.isRefund"
                        (onClick)="openRefundModal(payment)">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                          <path d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                      </app-icon-button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>

            <div class="empty-state" *ngIf="payments.length === 0">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" stroke="currentColor" stroke-width="1.5"/>
                <rect x="9" y="3" width="6" height="4" rx="1" stroke="currentColor" stroke-width="1.5"/>
              </svg>
              <span>\u041F\u043B\u0430\u0442\u0435\u0436\u0438 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u044B</span>
            </div>
          </div>
          </app-paginated-table-wrapper>

          <!-- Mobile Payment Cards -->
          <div class="mobile-payments-cards" *ngIf="payments.length > 0">
            <div class="mobile-payment-card" *ngFor="let payment of paginatedTable.paginatedData">
              <div class="mobile-payment-card-header" (click)="toggleMobilePaymentCard(payment.id)">
                <div class="mobile-payment-card-main">
                  <div>
                    <div class="mobile-payment-id clickable" (click)="openPaymentView(payment.id); $event.stopPropagation()">{{ payment.id }}</div>
                    <div class="mobile-payment-amount">{{ formatAmount(payment.amount) }} \u20B8</div>
                  </div>
                </div>
                <div class="mobile-payment-expand" [class.expanded]="isMobilePaymentExpanded(payment.id)">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
              </div>
              <div class="mobile-payment-details" [class.expanded]="isMobilePaymentExpanded(payment.id)">
                <div class="mobile-payment-detail-row">
                  <span class="mobile-payment-detail-label">\u0414\u0430\u0442\u0430:</span>
                  <span class="mobile-payment-detail-value">{{ payment.date }}</span>
                </div>
                <div class="mobile-payment-detail-row">
                  <span class="mobile-payment-detail-label">\u0412\u0440\u0435\u043C\u044F:</span>
                  <span class="mobile-payment-detail-value">{{ payment.time }}</span>
                </div>
                <div class="mobile-payment-detail-row" *ngIf="payment.bonusEarned > 0">
                  <span class="mobile-payment-detail-label">\u0411\u043E\u043D\u0443\u0441\u043E\u0432 \u043D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u043E:</span>
                  <span class="mobile-payment-detail-value">+{{ formatAmount(payment.bonusEarned) }}</span>
                </div>
                <div class="mobile-payment-detail-row" *ngIf="payment.bonusUsed > 0">
                  <span class="mobile-payment-detail-label">\u0411\u043E\u043D\u0443\u0441\u043E\u0432 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u043E:</span>
                  <span class="mobile-payment-detail-value">-{{ formatAmount(payment.bonusUsed) }}</span>
                </div>
                <div class="mobile-payment-detail-row">
                  <span class="mobile-payment-detail-label">\u0421\u043F\u043E\u0441\u043E\u0431 \u043E\u043F\u043B\u0430\u0442\u044B:</span>
                  <span class="mobile-payment-detail-value">{{ getPaymentMethodLabel(payment.paymentMethod) }}</span>
                </div>
                <div class="mobile-payment-detail-row">
                  <span class="mobile-payment-detail-label">\u0421\u0442\u0430\u0442\u0443\u0441:</span>
                  <span class="mobile-payment-detail-value">{{ payment.isRefund ? '\u0412\u043E\u0437\u0432\u0440\u0430\u0442' : '\u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E' }}</span>
                </div>
                <div class="mobile-payment-detail-row" *ngIf="!payment.isRefund">
                  <button class="mobile-refund-btn" (click)="openRefundModal(payment); $event.stopPropagation()">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    \u0412\u043E\u0437\u0432\u0440\u0430\u0442
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- Refund Confirmation Modal -->
    <app-refund-confirmation-modal
      [visible]="showRefundModal"
      [payment]="selectedPaymentForRefund"
      (visibleChange)="closeRefundModal()"
      (confirm)="confirmRefund($event.refundReason || '')">
    </app-refund-confirmation-modal>

    <!-- Payment View Modal -->
    <app-payment-view-modal
      [visible]="showPaymentViewModal"
      [paymentTxId]="selectedPaymentTxId"
      [paymentSearchResult]="selectedPaymentSearchResult"
      (visibleChange)="showPaymentViewModal = $event"
      (paymentUpdated)="onPaymentUpdated()">
    </app-payment-view-modal>

    <!-- Delete Client Confirmation Modal -->
    <div class="delete-modal-overlay" *ngIf="showDeleteModal" (click)="closeDeleteModal()">
      <div class="delete-modal" (click)="$event.stopPropagation()">
        <!-- Step 1: Initial confirmation -->
        <div class="delete-modal-content" *ngIf="deleteStep === 1">
          <div class="delete-modal-icon warning">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M12 9v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <h3 class="delete-modal-title">\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043A\u043B\u0438\u0435\u043D\u0442\u0430?</h3>
          <p class="delete-modal-description">
            \u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B, \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u043A\u043B\u0438\u0435\u043D\u0442\u0430 <strong>{{ getFullName() }}</strong>?<br>
            \u042D\u0442\u043E \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u043D\u0435\u043B\u044C\u0437\u044F \u043E\u0442\u043C\u0435\u043D\u0438\u0442\u044C. \u0412\u0441\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u043A\u043B\u0438\u0435\u043D\u0442\u0430, \u0432\u043A\u043B\u044E\u0447\u0430\u044F \u0438\u0441\u0442\u043E\u0440\u0438\u044E \u043F\u043B\u0430\u0442\u0435\u0436\u0435\u0439 \u0438 \u0431\u043E\u043D\u0443\u0441\u043E\u0432, \u0431\u0443\u0434\u0443\u0442 \u0443\u0434\u0430\u043B\u0435\u043D\u044B.
          </p>
          <div class="delete-modal-actions">
            <button class="delete-modal-btn cancel" (click)="closeDeleteModal()">\u041E\u0442\u043C\u0435\u043D\u0430</button>
            <button class="delete-modal-btn confirm" (click)="proceedToDeleteStep2()">\u0414\u0430, \u0443\u0434\u0430\u043B\u0438\u0442\u044C</button>
          </div>
        </div>

        <!-- Step 2: Type confirmation word -->
        <div class="delete-modal-content" *ngIf="deleteStep === 2">
          <div class="delete-modal-icon danger">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m3 0v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6h14zM10 11v6M14 11v6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <h3 class="delete-modal-title">\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u0435</h3>
          <p class="delete-modal-description">
            \u0414\u043B\u044F \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u044F \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u044F \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043B\u043E\u0432\u043E <strong class="confirm-word">\u0443\u0434\u0430\u043B\u0438\u0442\u044C</strong>
          </p>
          <input 
            type="text" 
            class="delete-confirm-input"
            [(ngModel)]="deleteConfirmationWord"
            placeholder="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043B\u043E\u0432\u043E \u0434\u043B\u044F \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u044F"
            (keydown.enter)="confirmDelete()">
          <div class="delete-modal-actions">
            <button class="delete-modal-btn cancel" (click)="closeDeleteModal()">\u041E\u0442\u043C\u0435\u043D\u0430</button>
            <button 
              class="delete-modal-btn delete" 
              [disabled]="deleteConfirmationWord !== '\u0443\u0434\u0430\u043B\u0438\u0442\u044C' || isDeletingClient"
              (click)="confirmDelete()">
              <span *ngIf="!isDeletingClient">\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043D\u0430\u0432\u0441\u0435\u0433\u0434\u0430</span>
              <span *ngIf="isDeletingClient">\u0423\u0434\u0430\u043B\u0435\u043D\u0438\u0435...</span>
            </button>
          </div>
        </div>
      </div>
      </div>
    </div>

  `, styles: [`/* angular:styles/component:css;6692fd0c4f99bd11572d69f3f760834dd162fcb5da964f42d658fa02cde6cef4;/Users/baglan/repo/westwood/westwood-frontend/src/app/features/profile/pages/profile-page/profile-page.component.ts */
.page-wrapper {
  min-height: 100%;
  margin: -2rem;
  padding: 2rem;
  background:
    linear-gradient(
      180deg,
      #f0fdf4 0%,
      #f8fafc 50%,
      #f8fafc 100%);
}
.profile-container-wrapper {
  position: relative;
  min-height: 400px;
}
.profile-container {
  max-width: 1200px;
  margin: 0 auto;
}
.page-loading-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  width: 100%;
}
.profile-header-card {
  background: white;
  border-radius: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
  margin-bottom: 1rem;
  position: relative;
}
.profile-header-content {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem 2rem;
}
.avatar-wrapper {
  position: relative;
  flex-shrink: 0;
}
.avatar-large {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background:
    linear-gradient(
      135deg,
      #16A34A,
      #22c55e);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 1px;
}
.status-indicator {
  position: absolute;
  bottom: 2px;
  right: 2px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #94a3b8;
  border: 2px solid white;
}
.status-indicator.active {
  background: #22c55e;
}
.profile-main-info {
  flex: 1;
  min-width: 0;
  position: relative;
}
.delete-client-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #fef2f2;
  border: 1px solid #fecaca;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #dc2626;
  transition: all 0.2s ease;
  z-index: 10;
}
.delete-client-btn:hover {
  background: #fee2e2;
  border-color: #fca5a5;
  color: #b91c1c;
}
.delete-client-btn svg {
  width: 18px;
  height: 18px;
}
.name-row {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.25rem;
}
.profile-name {
  font-size: 1.35rem;
  font-weight: 600;
  color: #111827;
  margin: 0;
}
.client-type-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.25rem 0.6rem;
  background: #f0fdf4;
  color: #16A34A;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 500;
}
.client-type-badge.business {
  background: #dbeafe;
  color: #1d4ed8;
}
.client-type-badge svg {
  width: 14px;
  height: 14px;
}
.profile-phone {
  font-size: 0.9rem;
  color: #6b7280;
  margin: 0 0 0.75rem;
}
.tags-row {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.tags-container {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  align-items: center;
}
.client-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.25rem 0.75rem;
  background: #dcfce7;
  color: #16A34A;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
}
.remove-tag-btn {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  color: #16A34A;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  transition: all 0.15s;
}
.remove-tag-btn:hover {
  background: rgba(21, 128, 61, 0.2);
}
.remove-tag-btn svg {
  width: 10px;
  height: 10px;
}
.add-tag-wrapper {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
.add-tag-input {
  padding: 0.35rem 0.75rem;
  border: 1.5px solid #e2e8f0;
  border-radius: 20px;
  font-size: 0.8rem;
  width: 110px;
  outline: none;
  background:
    linear-gradient(
      to bottom,
      #ffffff,
      #f8fafc);
  color: #374151;
  font-weight: 500;
  transition: all 0.2s ease;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
}
.add-tag-input:hover {
  border-color: #cbd5e1;
}
.add-tag-input:focus {
  border-color: #22c55e;
  background: white;
  box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.1);
}
.add-tag-input::placeholder {
  color: #94a3b8;
  font-weight: 400;
}
.add-tag-confirm-btn {
  background: #16A34A;
  border: none;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
}
.add-tag-confirm-btn svg {
  width: 12px;
  height: 12px;
}
.edit-tags-btn {
  background: #f0fdf4;
  border: 1px dashed #16A34A;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #16A34A;
  transition: all 0.15s;
}
.edit-tags-btn:hover {
  background: #dcfce7;
}
.edit-tags-btn svg {
  width: 14px;
  height: 14px;
}
.tags-actions {
  display: flex;
  gap: 0.35rem;
}
.save-tags-btn,
.cancel-tags-btn {
  background: none;
  border: none;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.15s;
}
.save-tags-btn {
  background: #16A34A;
  color: white;
}
.save-tags-btn:hover {
  background: #14532d;
}
.cancel-tags-btn {
  background: #f3f4f6;
  color: #6b7280;
}
.cancel-tags-btn:hover {
  background: #e5e7eb;
}
.save-tags-btn svg,
.cancel-tags-btn svg {
  width: 14px;
  height: 14px;
}
.tags-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  width: 500px;
  margin-top: 6px;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  z-index: 100;
  animation: dropdownFadeIn 0.15s ease;
}
@keyframes dropdownFadeIn {
  from {
    opacity: 0;
    transform: translateY(-4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.tags-dropdown-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 10px;
  background: #f8fafc;
  border-bottom: 1px solid #e2e8f0;
  font-size: 0.7rem;
  font-weight: 700;
  color: #64748b;
}
.tags-dropdown-close {
  background: none;
  border: none;
  font-size: 1rem;
  color: #94a3b8;
  cursor: pointer;
  padding: 0;
  line-height: 1;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  transition: all 0.15s;
}
.tags-dropdown-close:hover {
  color: #ef4444;
  background: #fef2f2;
}
.tags-dropdown-list {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding: 8px;
  max-height: 80px;
  overflow-y: auto;
}
.tag-option {
  padding: 0.25rem 0.6rem;
  background: #dcfce7;
  border: 1px solid #bbf7d0;
  color: #16A34A;
  border-radius: 16px;
  font-size: 0.75rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s ease;
}
.tag-option:hover {
  background: #bbf7d0;
  border-color: #22c55e;
}
.tags-row {
  position: relative;
}
.comment-card {
  background: white;
  border-radius: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
  margin-bottom: 1.5rem;
  padding: 1.25rem 1.5rem;
}
.comment-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.75rem;
}
.comment-title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: #374151;
}
.comment-title svg {
  width: 18px;
  height: 18px;
  color: #16A34A;
}
.edit-comment-btn {
  background: none;
  border: none;
  padding: 0.4rem;
  cursor: pointer;
  color: #6b7280;
  border-radius: 6px;
  transition: all 0.15s;
}
.edit-comment-btn:hover {
  background: #f3f4f6;
  color: #16A34A;
}
.edit-comment-btn svg {
  width: 16px;
  height: 16px;
}
.comment-actions,
.card-actions {
  display: flex;
  gap: 0.5rem;
}
.save-btn,
.cancel-btn {
  padding: 0.4rem 0.75rem;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  border: none;
}
.save-btn {
  background: #16A34A;
  color: white;
}
.save-btn:hover {
  background: #14532d;
}
.cancel-btn {
  background: #f3f4f6;
  color: #6b7280;
}
.cancel-btn:hover {
  background: #e5e7eb;
}
.comment-text {
  font-size: 0.9rem;
  color: #4b5563;
  margin: 0;
  line-height: 1.5;
}
.comment-textarea {
  width: 100%;
  padding: 0.875rem 1rem;
  border: 1.5px solid #e2e8f0;
  border-radius: 12px;
  font-size: 0.9rem;
  font-family: inherit;
  resize: vertical;
  min-height: 80px;
  background:
    linear-gradient(
      to bottom,
      #ffffff,
      #f8fafc);
  color: #374151;
  line-height: 1.6;
  transition: all 0.2s ease;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
}
.comment-textarea:hover {
  border-color: #cbd5e1;
  background:
    linear-gradient(
      to bottom,
      #ffffff,
      #f1f5f9);
}
.comment-textarea:focus {
  outline: none;
  border-color: #22c55e;
  background: white;
  box-shadow: 0 0 0 4px rgba(34, 197, 94, 0.12), 0 2px 4px rgba(0, 0, 0, 0.05);
}
.comment-textarea::placeholder {
  color: #94a3b8;
}
.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin-bottom: 1.5rem;
}
.stat-card {
  background: white;
  border-radius: 16px;
  padding: 1.25rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
}
.stat-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.stat-icon svg {
  width: 22px;
  height: 22px;
}
.stat-icon.transactions {
  background:
    linear-gradient(
      135deg,
      #dcfce7,
      #bbf7d0);
  color: #16A34A;
}
.stat-icon.total-sum {
  background:
    linear-gradient(
      135deg,
      #dbeafe,
      #bfdbfe);
  color: #1d4ed8;
}
.stat-icon.bonuses-earned {
  background:
    linear-gradient(
      135deg,
      #fef3c7,
      #fde68a);
  color: #d97706;
}
.stat-icon.bonuses-used {
  background:
    linear-gradient(
      135deg,
      #fce7f3,
      #fbcfe8);
  color: #db2777;
}
.stat-info {
  display: flex;
  flex-direction: column;
}
.stat-value {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1f2937;
}
.stat-label {
  font-size: 0.8rem;
  color: #64748b;
}
.bonuses-details-card {
  background: white;
  border-radius: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
  margin-bottom: 1rem;
  overflow: hidden;
}
.bonuses-details-card .card-header {
  cursor: pointer;
  -webkit-user-select: none;
  user-select: none;
  transition: background 0.2s ease;
  padding: 1.5rem;
  margin-bottom: 0;
  border-bottom: none;
}
.bonuses-content {
  padding: 0 1.5rem 1.5rem 1.5rem;
}
.bonuses-details-card .card-header:hover {
  background: #f8fafc;
}
.card-title-section {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
}
.bonuses-stats {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
}
.stat-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.stat-label {
  font-size: 0.8125rem;
  color: #64748b;
  font-weight: 500;
}
.stat-value {
  font-size: 0.875rem;
  font-weight: 700;
}
.collapse-btn {
  background: none;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  color: #64748b;
  border-radius: 8px;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}
.collapse-btn:hover {
  background: #f1f5f9;
  color: #1f2937;
}
.collapse-btn svg {
  width: 20px;
  height: 20px;
  transition: transform 0.2s ease;
}
.collapse-btn.collapsed svg {
  transform: rotate(-90deg);
}
.bonuses-content {
  padding: 0 1.5rem 1.5rem;
}
.bonuses-content .table-container {
  overflow-x: auto;
}
.bonuses-table {
  width: 100%;
  border-collapse: collapse;
}
.bonuses-table thead {
  background: #f8fafc;
}
.bonuses-table th {
  padding: 0.875rem 1rem;
  text-align: left;
  font-size: 0.75rem;
  font-weight: 600;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border-bottom: 1px solid #e5e7eb;
}
.bonuses-table td {
  padding: 0.875rem 1rem;
  border-bottom: 1px solid #f1f5f9;
}
.bonuses-table th:last-child,
.bonuses-table td:last-child {
  width: 80px;
  text-align: center;
}
.bonuses-table tbody tr {
  transition: background 0.15s;
}
.bonuses-table tbody tr:hover {
  background: #f8fafc;
}
.bonuses-table tbody tr.expired {
  background: transparent;
}
.bonuses-table tbody tr.expired:hover {
  background: transparent;
}
.bonuses-table tbody tr.expiring-soon {
  background: transparent;
}
.bonuses-table tbody tr.expiring-soon:hover {
  background: transparent;
}
.bonuses-table tbody tr.used {
  background: transparent;
  opacity: 1;
}
.bonuses-table tbody tr.refund {
  background: transparent;
}
.bonuses-table tbody tr.refund:hover {
  background: transparent;
}
.bonuses-table tbody tr:last-child td {
  border-bottom: none;
}
.bonuses-table tbody tr.bonus-details-row {
  background: transparent;
}
.bonuses-table tbody tr.bonus-details-row td {
  border-top: none;
  padding: 0;
}
.bonus-details-cell {
  padding: 0 !important;
  background: transparent;
}
.bonus-details-content {
  padding: 1rem 1.5rem;
  overflow: hidden;
  animation: slideDown 0.3s ease-out;
}
@keyframes slideDown {
  from {
    opacity: 0;
    max-height: 0;
  }
  to {
    opacity: 1;
    max-height: 300px;
  }
}
.bonus-details-grid {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
}
.refund-reason-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: left;
}
.bonus-initiated-by-section {
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: right;
  min-width: 200px;
}
.refund-reason-label {
  font-size: 0.875rem;
  font-weight: 600;
  color: #475569;
}
.refund-reason-text {
  padding: 0.75rem;
  background: transparent;
  border: none;
  border-radius: 0;
  font-size: 0.875rem;
  color: #1f2937;
  line-height: 1.6;
  white-space: pre-wrap;
  text-align: left;
}
.refund-reason-empty {
  padding: 0.75rem;
  background: transparent;
  border: none;
  border-radius: 0;
  font-size: 0.875rem;
  color: #94a3b8;
  font-style: italic;
  text-align: left;
}
.bonus-initiated-by-link {
  display: inline-block;
  padding: 0.75rem 0;
  background: transparent;
  border: none;
  border-radius: 0;
  font-size: 0.875rem;
  color: #1f2937;
  line-height: 1.6;
  white-space: pre-wrap;
  text-align: right;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.2s ease;
}
.bonus-initiated-by-link:hover {
  color: #16A34A;
}
.bonus-initiated-by-text {
  padding: 0.75rem 0;
  background: transparent;
  border: none;
  border-radius: 0;
  font-size: 0.875rem;
  color: #1f2937;
  line-height: 1.6;
  white-space: pre-wrap;
  text-align: right;
}
.bonus-initiated-by-empty {
  padding: 0.75rem 0;
  background: transparent;
  border: none;
  border-radius: 0;
  font-size: 0.875rem;
  color: #94a3b8;
  font-style: italic;
  text-align: right;
}
.actions-cell svg {
  transition: transform 0.3s ease;
}
.actions-cell svg.rotated {
  transform: rotate(180deg);
}
.bonus-type-badge {
  display: inline-flex;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 600;
  color: #1f2937;
}
.bonus-type-badge.bonus-type-welcome {
  // color: #1e40af;
  color: #1f2937;
}
.bonus-type-badge.bonus-type-referral {
  // color: #92400e;
  color: #1f2937;
}
.bonus-type-badge.bonus-type-purchase {
  // color: #15803d;
  color: #1f2937;
}
.bonus-type-badge.bonus-type-promotion {
  // color: #be185d;
  color: #1f2937;
}
.bonus-type-badge.bonus-type-loyalty {
  // color: #3730a3;
  color: #1f2937;
}
.bonus-type-badge.bonus-type-refund {
  // color: #dc2626;
  color: #1f2937;
}
.bonus-amount {
  font-size: 0.9375rem;
  font-weight: 600;
  color: #fbbf24;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.bonus-amount.expired-amount {
  color: #94a3b8;
  text-decoration: line-through;
}
.bonus-date,
.bonus-expiry-date {
  font-size: 0.875rem;
  color: #1f2937;
  font-weight: 500;
}
.details-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 1rem;
}
.details-card {
  background: white;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
}
.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.25rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #f1f5f9;
}
.card-header-left {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.card-icon {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background:
    linear-gradient(
      135deg,
      #dcfce7,
      #bbf7d0);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #16A34A;
}
.card-icon svg {
  width: 20px;
  height: 20px;
}
.card-title {
  font-size: 1rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0;
}
.card-edit-btn {
  background: none;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  color: #6b7280;
  border-radius: 8px;
  transition: all 0.15s;
}
.card-edit-btn:hover {
  background: #f3f4f6;
  color: #16A34A;
}
.card-edit-btn svg {
  width: 18px;
  height: 18px;
}
.info-list {
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
}
.info-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.info-label {
  font-size: 0.9rem;
  color: #64748b;
}
.info-value {
  font-size: 0.95rem;
  font-weight: 500;
  color: #1f2937;
}
.info-value.email {
  color: #16A34A;
}
.info-input {
  padding: 0.625rem 1rem;
  border: 1.5px solid #e2e8f0;
  border-radius: 10px;
  font-size: 0.9rem;
  font-family: inherit;
  text-align: right;
  width: 200px;
  background:
    linear-gradient(
      to bottom,
      #ffffff,
      #f8fafc);
  color: #1f2937;
  font-weight: 500;
  transition: all 0.2s ease;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
}
.info-input:hover {
  border-color: #cbd5e1;
  background:
    linear-gradient(
      to bottom,
      #ffffff,
      #f1f5f9);
}
.info-input:focus {
  outline: none;
  border-color: #22c55e;
  background: white;
  box-shadow: 0 0 0 4px rgba(34, 197, 94, 0.12), 0 2px 4px rgba(0, 0, 0, 0.05);
}
.info-input::placeholder {
  color: #94a3b8;
  font-weight: 400;
}
.info-input:disabled {
  background: #f1f5f9;
  color: #94a3b8;
  cursor: not-allowed;
  opacity: 0.6;
}
.info-input:disabled:hover {
  border-color: #e2e8f0;
  background: #f1f5f9;
}
.info-select {
  padding: 0.625rem 2.5rem 0.625rem 1rem;
  border: 1.5px solid #e2e8f0;
  border-radius: 10px;
  font-size: 0.9rem;
  font-family: inherit;
  width: 200px;
  background:
    linear-gradient(
      to bottom,
      #ffffff,
      #f8fafc);
  color: #1f2937;
  font-weight: 500;
  transition: all 0.2s ease;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2315803d' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 16px;
}
.info-select:hover {
  border-color: #22c55e;
  background-color: #f0fdf4;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2315803d' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
}
.info-select:focus {
  outline: none;
  border-color: #22c55e;
  background-color: white;
  box-shadow: 0 0 0 4px rgba(34, 197, 94, 0.12), 0 2px 4px rgba(0, 0, 0, 0.05);
}
.info-select option {
  padding: 0.75rem 1rem;
  background: white;
  color: #1f2937;
  font-weight: 500;
}
.info-select option:hover,
.info-select option:checked {
  background:
    linear-gradient(
      to right,
      #f0fdf4,
      #dcfce7);
  color: #16A34A;
}
.payments-card {
  background: white;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
}
.payments-card .card-header {
  margin-bottom: 1rem;
}
.payments-count {
  font-size: 0.85rem;
  color: #64748b;
  font-weight: 500;
}
.table-container {
  overflow-x: auto;
}
.payments-table {
  width: 100%;
  border-collapse: collapse;
}
.payments-table th {
  padding: 0.875rem 1rem;
  text-align: left;
  font-size: 0.75rem;
  font-weight: 600;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  background: #f8fafc;
  border-bottom: 1px solid #e5e7eb;
}
.payments-table td {
  padding: 0.875rem 1rem;
  border-bottom: 1px solid #f1f5f9;
}
.payment-row {
  transition: background 0.15s;
}
.payment-row:hover {
  background: #f8fafc;
}
.payment-row:last-child td {
  border-bottom: none;
}
.td-id {
  min-width: 100px;
}
.payment-id {
  font-family: monospace;
  font-weight: 600;
  color: #64748b;
  font-size: 0.875rem;
}
.payment-id.clickable {
  cursor: pointer;
  text-decoration: underline;
  transition: color 0.15s ease;
}
.payment-id.clickable:hover {
  color: #475569;
}
.td-client {
  min-width: 200px;
}
.client-cell {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.client-avatar {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background:
    linear-gradient(
      135deg,
      #f0fdf4,
      #dcfce7);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: #16A34A;
  font-size: 0.875rem;
  flex-shrink: 0;
}
.client-info {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}
.client-name-link {
  text-decoration: none;
  color: #1f2937;
  font-weight: 600;
  font-size: 0.9375rem;
  transition: color 0.2s;
  cursor: pointer;
  display: inline-block;
}
.client-name-link:hover {
  color: #16A34A;
}
.client-phone {
  font-size: 0.8125rem;
  color: #64748b;
}
.amount-value {
  font-size: 0.95rem;
  font-weight: 600;
  color: #16A34A;
}
.bonus-info {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}
.bonus-badge {
  display: inline-block;
}
.bonus-none {
  font-size: 0.8rem;
  color: #94a3b8;
}
.date-info {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}
.date-text {
  font-size: 0.85rem;
  color: #1f2937;
  font-weight: 500;
}
.time-text {
  font-size: 0.75rem;
  color: #64748b;
}
.th-actions,
.td-actions {
  width: 60px;
  text-align: center;
}
.actions-cell {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
}
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 2rem;
  color: #94a3b8;
}
.empty-state svg {
  width: 48px;
  height: 48px;
  margin-bottom: 1rem;
}
.empty-state span {
  font-size: 0.9rem;
}
@media (max-width: 1200px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 768px) {
  .page-wrapper {
    margin: -1rem;
    padding: 1rem;
  }
  .profile-header-card {
    border-radius: 12px;
    margin-bottom: 1rem;
  }
  .profile-header-content {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 1.5rem 1rem;
    position: relative;
  }
  .avatar-wrapper {
    margin-bottom: 0.5rem;
  }
  .avatar-large {
    width: 80px;
    height: 80px;
    font-size: 1.5rem;
  }
  .profile-main-info {
    width: 100%;
    padding-right: 0;
    padding-top: 0.5rem;
  }
  .delete-client-btn {
    top: 1rem;
    right: 1rem;
  }
  .name-row {
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    padding-right: 0;
    margin-top: 0.5rem;
  }
  .profile-name {
    font-size: 1.25rem;
    word-break: break-word;
    padding-right: 0;
  }
  .profile-phone {
    font-size: 0.9rem;
    margin: 0.5rem 0;
  }
  .tags-row {
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
  }
  .tags-container {
    justify-content: center;
    width: 100%;
  }
  .comment-card,
  .details-card {
    border-radius: 12px;
    padding: 1.25rem 1rem;
  }
  .card-header {
    margin-bottom: 1rem;
  }
  .card-title {
    font-size: 1.125rem;
  }
  .info-list .info-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    padding: 0.75rem 0;
  }
  .info-label {
    min-width: auto;
    font-size: 0.875rem;
  }
  .info-value {
    font-size: 0.875rem;
  }
  .stats-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  .details-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  .bonuses-table,
  .payments-table {
    display: none;
  }
  .mobile-bonuses-cards,
  .mobile-payments-cards {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
}
@media (min-width: 769px) {
  .mobile-bonuses-cards,
  .mobile-payments-cards {
    display: none;
  }
}
.mobile-bonuses-cards {
  display: none;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
}
.mobile-bonus-card {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  width: 100%;
}
.mobile-bonus-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}
.mobile-bonus-card-main {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex: 1;
}
.mobile-bonus-type {
  font-size: 0.875rem;
  font-weight: 600;
  color: #1f2937;
}
.mobile-bonus-amount {
  font-size: 1rem;
  font-weight: 700;
  color: #d97706;
}
.mobile-bonus-expand {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #64748b;
  transition: transform 0.2s;
}
.mobile-bonus-expand.expanded {
  transform: rotate(180deg);
}
.mobile-bonus-details {
  margin-top: 0.75rem;
  padding-top: 0.75rem;
  border-top: 1px solid #e5e7eb;
  display: none;
}
.mobile-bonus-details.expanded {
  display: block;
}
.mobile-bonus-detail-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
}
.mobile-bonus-detail-label {
  color: #64748b;
}
.mobile-bonus-detail-value {
  color: #1f2937;
  font-weight: 500;
}
.mobile-payment-card {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}
.mobile-payment-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}
.mobile-payment-card-main {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex: 1;
}
.mobile-payment-id {
  font-family: monospace;
  font-size: 0.875rem;
  font-weight: 600;
  color: #64748b;
}
.mobile-payment-amount {
  font-size: 1rem;
  font-weight: 700;
  color: #16A34A;
}
.mobile-payment-expand {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #64748b;
  transition: transform 0.2s;
}
.mobile-payment-expand.expanded {
  transform: rotate(180deg);
}
.mobile-payment-details {
  margin-top: 0.75rem;
  padding-top: 0.75rem;
  border-top: 1px solid #e5e7eb;
  display: none;
}
.mobile-payment-details.expanded {
  display: block;
}
.mobile-payment-detail-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
}
.mobile-payment-detail-label {
  color: #64748b;
}
.mobile-payment-detail-value {
  color: #1f2937;
  font-weight: 500;
}
.mobile-refund-btn {
  width: 100%;
  padding: 0.75rem;
  background: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 8px;
  color: #dc2626;
  font-weight: 600;
  font-size: 0.875rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
  transition: all 0.2s;
}
.mobile-refund-btn:hover {
  background: #fee2e2;
  border-color: #fca5a5;
}
.mobile-refund-btn svg {
  width: 16px;
  height: 16px;
}
.delete-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.2s ease;
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.delete-modal {
  background: white;
  border-radius: 16px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
  max-width: 420px;
  width: 90%;
  animation: slideUp 0.3s ease;
}
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.delete-modal-content {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.delete-modal-icon {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.25rem;
}
.delete-modal-icon.warning {
  background: #fef3c7;
  color: #d97706;
}
.delete-modal-icon.danger {
  background: #fee2e2;
  color: #dc2626;
}
.delete-modal-icon svg {
  width: 32px;
  height: 32px;
}
.delete-modal-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 0.75rem;
}
.delete-modal-description {
  font-size: 0.9rem;
  color: #6b7280;
  line-height: 1.6;
  margin: 0 0 1.5rem;
}
.delete-modal-description strong {
  color: #1f2937;
}
.confirm-word {
  color: #dc2626;
  background: #fee2e2;
  padding: 0.125rem 0.5rem;
  border-radius: 4px;
  font-family: monospace;
  font-size: 0.95rem;
}
.delete-confirm-input {
  width: 100%;
  padding: 0.875rem 1rem;
  border: 2px solid #e5e7eb;
  border-radius: 10px;
  font-size: 1rem;
  font-family: inherit;
  text-align: center;
  margin-bottom: 1.5rem;
  transition: all 0.2s ease;
}
.delete-confirm-input:focus {
  outline: none;
  border-color: #dc2626;
  box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
}
.delete-confirm-input::placeholder {
  color: #9ca3af;
}
.delete-modal-actions {
  display: flex;
  gap: 0.75rem;
  width: 100%;
}
.delete-modal-btn {
  flex: 1;
  padding: 0.875rem 1.5rem;
  border-radius: 10px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
}
.delete-modal-btn.cancel {
  background: #f3f4f6;
  color: #6b7280;
}
.delete-modal-btn.cancel:hover {
  background: #e5e7eb;
  color: #374151;
}
.delete-modal-btn.confirm {
  background: #fef3c7;
  color: #d97706;
}
.delete-modal-btn.confirm:hover {
  background: #fde68a;
  color: #b45309;
}
.delete-modal-btn.delete {
  background: #dc2626;
  color: white;
}
.delete-modal-btn.delete:hover:not(:disabled) {
  background: #b91c1c;
}
.delete-modal-btn.delete:disabled {
  background: #fca5a5;
  cursor: not-allowed;
}
/*# sourceMappingURL=profile-page.component.css.map */
`] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProfilePageComponent, { className: "ProfilePageComponent", filePath: "src/app/features/profile/pages/profile-page/profile-page.component.ts", lineNumber: 2702 });
})();
export {
  ProfilePageComponent
};
//# sourceMappingURL=chunk-KIEGD4SH.js.map
