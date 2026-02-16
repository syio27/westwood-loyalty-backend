import {
  PaginationComponent
} from "./chunk-5EVUGNOD.js";
import {
  BonusTypesService
} from "./chunk-DZKYEVP6.js";
import {
  MessageTemplatesService,
  MessagesService
} from "./chunk-LYH5NGGM.js";
import {
  ClientsService
} from "./chunk-GE67K5I4.js";
import {
  PhoneFormatPipe
} from "./chunk-OUAWC6NU.js";
import {
  AnalyticsService
} from "./chunk-G6CW767G.js";
import {
  LoaderComponent
} from "./chunk-74OMJKP6.js";
import {
  ModalComponent
} from "./chunk-PGQMZGPZ.js";
import {
  PageHeaderService
} from "./chunk-TXI2S3RM.js";
import "./chunk-6FFMNYG3.js";
import {
  ToastService
} from "./chunk-UB4WPUR7.js";
import {
  ButtonComponent
} from "./chunk-FM5G4Z36.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  RadioControlValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-CD4QMWYU.js";
import {
  IconButtonComponent
} from "./chunk-GA36L6BH.js";
import {
  ActivatedRoute,
  CommonModule,
  Component,
  EventEmitter,
  Input,
  NgForOf,
  NgIf,
  Output,
  Router,
  RouterLink,
  RouterModule,
  Subject,
  catchError,
  forkJoin,
  inject,
  of,
  setClassMetadata,
  takeUntil,
  timeout,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
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
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-LQF2QQXA.js";

// src/app/shared/components/create-client-modal/create-client-modal.component.ts
function CreateClientModalComponent_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 23);
    \u0275\u0275element(2, "path", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "div", 25)(4, "span", 26);
    \u0275\u0275text(5, "\u041F\u0440\u0438\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u0431\u043E\u043D\u0443\u0441");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 27);
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
function CreateClientModalComponent_div_1_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "label", 6);
    \u0275\u0275text(2, "\u0424\u0430\u043C\u0438\u043B\u0438\u044F (\u043D\u0435\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 28);
    \u0275\u0275twoWayListener("ngModelChange", function CreateClientModalComponent_div_1_div_16_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.clientSurname, $event) || (ctx_r1.clientSurname = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.clientSurname);
  }
}
function CreateClientModalComponent_div_1_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "label", 6);
    \u0275\u0275text(2, "\u0414\u0430\u0442\u0430 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F (\u043D\u0435\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 29);
    \u0275\u0275twoWayListener("ngModelChange", function CreateClientModalComponent_div_1_div_17_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.clientBirthday, $event) || (ctx_r1.clientBirthday = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.clientBirthday);
  }
}
function CreateClientModalComponent_div_1_div_38_button_7_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275text(1, "\u2713");
    \u0275\u0275elementEnd();
  }
}
function CreateClientModalComponent_div_1_div_38_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 35);
    \u0275\u0275listener("click", function CreateClientModalComponent_div_1_div_38_button_7_Template_button_click_0_listener() {
      const tag_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.addTag(tag_r7));
    });
    \u0275\u0275text(1);
    \u0275\u0275template(2, CreateClientModalComponent_div_1_div_38_button_7_span_2_Template, 2, 0, "span", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("selected", ctx_r1.isTagSelected(tag_r7));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tag_r7, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isTagSelected(tag_r7));
  }
}
function CreateClientModalComponent_div_1_div_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 31)(2, "span");
    \u0275\u0275text(3, "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0442\u044D\u0433\u0438");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 32);
    \u0275\u0275listener("click", function CreateClientModalComponent_div_1_div_38_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.showTagsDropdown = false);
    });
    \u0275\u0275text(5, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 33);
    \u0275\u0275template(7, CreateClientModalComponent_div_1_div_38_button_7_Template, 3, 4, "button", 34);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r1.availableTags);
  }
}
function CreateClientModalComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275template(1, CreateClientModalComponent_div_1_div_1_Template, 11, 1, "div", 4);
    \u0275\u0275elementStart(2, "div", 5)(3, "label", 6);
    \u0275\u0275text(4, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D ");
    \u0275\u0275elementStart(5, "span", 7);
    \u0275\u0275text(6, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "input", 8);
    \u0275\u0275twoWayListener("ngModelChange", function CreateClientModalComponent_div_1_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.clientPhone, $event) || (ctx_r1.clientPhone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("blur", function CreateClientModalComponent_div_1_Template_input_blur_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.normalizePhone());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 9);
    \u0275\u0275text(9, "\u041F\u0440\u0438\u043C\u0435\u0440: +77001234567 \u0438\u043B\u0438 87001234567");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 5)(11, "label", 6);
    \u0275\u0275text(12);
    \u0275\u0275elementStart(13, "span", 7);
    \u0275\u0275text(14, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "input", 10);
    \u0275\u0275twoWayListener("ngModelChange", function CreateClientModalComponent_div_1_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.clientName, $event) || (ctx_r1.clientName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(16, CreateClientModalComponent_div_1_div_16_Template, 4, 1, "div", 11)(17, CreateClientModalComponent_div_1_div_17_Template, 4, 1, "div", 11);
    \u0275\u0275elementStart(18, "div", 5)(19, "label", 6);
    \u0275\u0275text(20, "\u0422\u0438\u043F \u043A\u043B\u0438\u0435\u043D\u0442\u0430");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 12)(22, "label", 13)(23, "input", 14);
    \u0275\u0275twoWayListener("ngModelChange", function CreateClientModalComponent_div_1_Template_input_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.clientType, $event) || (ctx_r1.clientType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "span", 15);
    \u0275\u0275elementStart(25, "span", 16);
    \u0275\u0275text(26, "\u0418\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u044B\u0439");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "label", 13)(28, "input", 17);
    \u0275\u0275twoWayListener("ngModelChange", function CreateClientModalComponent_div_1_Template_input_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.clientType, $event) || (ctx_r1.clientType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "span", 15);
    \u0275\u0275elementStart(30, "span", 16);
    \u0275\u0275text(31, "\u0411\u0438\u0437\u043D\u0435\u0441");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(32, "div", 5)(33, "label", 6);
    \u0275\u0275text(34, "\u0422\u044D\u0433\u0438");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "input", 18);
    \u0275\u0275twoWayListener("ngModelChange", function CreateClientModalComponent_div_1_Template_input_ngModelChange_35_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.clientTags, $event) || (ctx_r1.clientTags = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("focus", function CreateClientModalComponent_div_1_Template_input_focus_35_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showTagsDropdown = true);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 9);
    \u0275\u0275text(37, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u044D\u0433\u0438 \u0447\u0435\u0440\u0435\u0437 \u0437\u0430\u043F\u044F\u0442\u0443\u044E \u0438\u043B\u0438 \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0438\u0437 \u0441\u043F\u0438\u0441\u043A\u0430");
    \u0275\u0275elementEnd();
    \u0275\u0275template(38, CreateClientModalComponent_div_1_div_38_Template, 8, 1, "div", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 5)(40, "label", 6);
    \u0275\u0275text(41, "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 (\u043D\u0435\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "textarea", 20);
    \u0275\u0275twoWayListener("ngModelChange", function CreateClientModalComponent_div_1_Template_textarea_ngModelChange_42_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.clientComment, $event) || (ctx_r1.clientComment = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "button", 21);
    \u0275\u0275listener("click", function CreateClientModalComponent_div_1_Template_button_click_43_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.createClient());
    });
    \u0275\u0275text(44);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.welcomeBonusAmount > 0);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.clientPhone);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r1.clientType === "business" ? "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u043B\u0438\u0435\u043D\u0442\u0430" : "\u0418\u043C\u044F", " ");
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.clientName);
    \u0275\u0275property("placeholder", ctx_r1.clientType === "business" ? "\u0422\u041E\u041E \xAB\u041A\u043B\u0438\u0435\u043D\u0442\xBB" : "\u0418\u0432\u0430\u043D");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.clientType === "individual");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.clientType === "individual");
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.clientType);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.clientType);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.clientTags);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.showTagsDropdown && ctx_r1.availableTags.length > 0);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.clientComment);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.clientPhone || !ctx_r1.clientName || ctx_r1.isLoading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isLoading ? "\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435..." : "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043A\u043B\u0438\u0435\u043D\u0442\u0430", " ");
  }
}
function CreateClientModalComponent_div_2_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59)(1, "label", 60);
    \u0275\u0275text(2, "\u0428\u0430\u0431\u043B\u043E\u043D \u043F\u0440\u0438\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0433\u043E \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 61)(4, "div", 62)(5, "div", 63);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 64);
    \u0275\u0275element(7, "path", 65)(8, "path", 66);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "div", 67)(10, "h4", 68);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 69);
    \u0275\u0275text(13, "\u041F\u0440\u0438\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u0431\u043E\u043D\u0443\u0441");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 70)(15, "p", 71);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r1.selectedWelcomeTemplate.name);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.selectedWelcomeTemplate.content);
  }
}
function CreateClientModalComponent_div_2_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 72);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 73);
    \u0275\u0275element(2, "circle", 74)(3, "path", 75);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "div", 76)(5, "span", 77);
    \u0275\u0275text(6, "\u0428\u0430\u0431\u043B\u043E\u043D \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 78);
    \u0275\u0275text(8, '\u0421\u043E\u0437\u0434\u0430\u0439\u0442\u0435 \u0448\u0430\u0431\u043B\u043E\u043D \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F \u0442\u0438\u043F\u0430 "WELCOME_BONUS" \u0432 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430\u0445');
    \u0275\u0275elementEnd()()();
  }
}
function CreateClientModalComponent_div_2_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 79)(1, "label", 80);
    \u0275\u0275text(2, "\u0421\u043E\u0434\u0435\u0440\u0436\u0438\u043C\u043E\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 81)(4, "p", 82);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.populatedMessageContent);
  }
}
function CreateClientModalComponent_div_2_app_button_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-button", 83);
    \u0275\u0275listener("click", function CreateClientModalComponent_div_2_app_button_24_Template_app_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.sendWelcomeMessage());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 84);
    \u0275\u0275element(2, "path", 85)(3, "path", 86);
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
function CreateClientModalComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38)(1, "div", 39);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 40);
    \u0275\u0275element(3, "circle", 41)(4, "path", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "div", 43)(6, "span", 44);
    \u0275\u0275text(7, "\u041A\u043B\u0438\u0435\u043D\u0442 \u0441\u043E\u0437\u0434\u0430\u043D!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 45);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 46);
    \u0275\u0275template(11, CreateClientModalComponent_div_2_div_11_Template, 17, 2, "div", 47)(12, CreateClientModalComponent_div_2_div_12_Template, 9, 0, "div", 48);
    \u0275\u0275elementStart(13, "div", 49)(14, "label", 50);
    \u0275\u0275text(15, "\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430 \u043F\u043E\u043B\u0443\u0447\u0430\u0442\u0435\u043B\u044F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 51);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(17, "svg", 52);
    \u0275\u0275element(18, "path", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(19, "span", 54);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "phoneFormat");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(22, CreateClientModalComponent_div_2_div_22_Template, 6, 1, "div", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 56);
    \u0275\u0275template(24, CreateClientModalComponent_div_2_app_button_24_Template, 5, 2, "app-button", 57);
    \u0275\u0275elementStart(25, "button", 58);
    \u0275\u0275listener("click", function CreateClientModalComponent_div_2_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.skipAndFinish());
    });
    \u0275\u0275text(26, " \u041F\u0440\u043E\u043F\u0443\u0441\u0442\u0438\u0442\u044C \u0438 \u0437\u0430\u043A\u0440\u044B\u0442\u044C ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate2("", ctx_r1.createdClient == null ? null : ctx_r1.createdClient.name, " \u2022 ", ctx_r1.welcomeBonusAmount, " \u0431\u043E\u043D\u0443\u0441\u043E\u0432 \u043D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u043E");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.selectedWelcomeTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.selectedWelcomeTemplate);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 7, ctx_r1.createdClient == null ? null : ctx_r1.createdClient.phone));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.selectedWelcomeTemplate);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.selectedWelcomeTemplate);
  }
}
var CreateClientModalComponent = class _CreateClientModalComponent {
  clientsService = inject(ClientsService);
  messageTemplatesService = inject(MessageTemplatesService);
  messagesService = inject(MessagesService);
  bonusTypesService = inject(BonusTypesService);
  toastService = inject(ToastService);
  visible = false;
  visibleChange = new EventEmitter();
  clientCreated = new EventEmitter();
  currentStep = "form";
  isLoading = false;
  isSendingMessage = false;
  // Form fields
  clientPhone = "";
  clientName = "";
  clientSurname = "";
  clientEmail = "";
  clientBirthday = "";
  clientType = "individual";
  clientTags = "";
  clientComment = "";
  showTagsDropdown = false;
  availableTags = [];
  // Welcome bonus
  welcomeBonusAmount = 0;
  // Created client data
  createdClient = null;
  // Message
  selectedWelcomeTemplate = null;
  populatedMessageContent = "";
  ngOnChanges(changes) {
    if (changes["visible"]) {
      this.toggleBodyScroll(changes["visible"].currentValue);
      if (changes["visible"].currentValue) {
        this.loadAvailableTags();
        this.loadWelcomeBonusConfig();
      }
    }
  }
  ngOnDestroy() {
    this.toggleBodyScroll(false);
  }
  toggleBodyScroll(disable) {
    if (typeof document !== "undefined") {
      document.body.style.overflow = disable ? "hidden" : "";
    }
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
  loadWelcomeBonusConfig() {
    this.bonusTypesService.getBonusTypesByFlow("create_client").pipe(timeout(5e3), catchError((err) => {
      console.warn("Error loading welcome bonus config:", err);
      return of(null);
    })).subscribe({
      next: (bonusType) => {
        if (bonusType && bonusType.enabled && bonusType.bonusAmount !== null && bonusType.bonusAmount !== void 0) {
          this.welcomeBonusAmount = bonusType.bonusAmount;
        } else {
          this.welcomeBonusAmount = 0;
        }
      }
    });
  }
  getModalTitle() {
    switch (this.currentStep) {
      case "form":
        return "\u041D\u043E\u0432\u044B\u0439 \u043A\u043B\u0438\u0435\u043D\u0442";
      case "notify":
        return "\u0423\u0432\u0435\u0434\u043E\u043C\u0438\u0442\u044C \u043A\u043B\u0438\u0435\u043D\u0442\u0430";
      default:
        return "\u041D\u043E\u0432\u044B\u0439 \u043A\u043B\u0438\u0435\u043D\u0442";
    }
  }
  onClose() {
    this.closeModal();
  }
  closeModal() {
    this.resetForm();
    this.visible = false;
    this.visibleChange.emit(false);
  }
  normalizePhone() {
    if (!this.clientPhone)
      return;
    let phone = this.clientPhone.trim().replace(/[\s\-\(\)]/g, "");
    if (phone.startsWith("8") && phone.length >= 11) {
      phone = "+7" + phone.substring(1);
    } else if (phone.startsWith("7") && !phone.startsWith("+") && phone.length >= 11) {
      phone = "+" + phone;
    } else if (!phone.startsWith("+") && phone.length >= 10) {
      phone = "+" + phone;
    }
    this.clientPhone = phone;
  }
  createClient() {
    if (!this.clientPhone || !this.clientName) {
      this.toastService.error("\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043F\u043E\u043B\u044F");
      return;
    }
    this.normalizePhone();
    this.isLoading = true;
    const tags = this.clientTags.split(",").map((t) => t.trim()).filter((t) => t.length > 0);
    let name = this.clientName;
    let surname = this.clientSurname;
    if (this.clientType === "individual" && !surname) {
      const nameParts = this.clientName.trim().split(/\s+/);
      if (nameParts.length > 1) {
        name = nameParts[0];
        surname = nameParts.slice(1).join(" ");
      }
    }
    const createRequest = {
      phone: this.clientPhone,
      name,
      surname: surname || void 0,
      dateOfBirth: this.clientBirthday || null,
      notes: this.clientComment || null,
      tags: tags.length > 0 ? tags : void 0,
      clientType: this.clientType === "business" ? "BUSINESS" : "INDIVIDUAL",
      referrerId: null,
      email: this.clientEmail || null
    };
    this.clientsService.createClient(createRequest).subscribe({
      next: (created) => {
        this.clientsService.getClientByPhone(this.clientPhone.trim()).subscribe({
          next: (response) => {
            this.createdClient = {
              id: response.clientId,
              name: response.name,
              surname: response.surname,
              phone: this.clientPhone.trim(),
              balance: response.currentBonusBalance || 0,
              type: response.clientType === "BUSINESS" ? "business" : "individual"
            };
            if (this.createdClient.balance > 0) {
              this.welcomeBonusAmount = this.createdClient.balance;
            }
            this.isLoading = false;
            this.clientCreated.emit(this.createdClient);
            this.loadTemplateAndGoToNotify();
          },
          error: () => {
            this.createdClient = {
              id: created.id,
              name: created.name,
              surname: created.surname,
              phone: this.clientPhone.trim(),
              balance: this.welcomeBonusAmount,
              type: created.clientType === "BUSINESS" ? "business" : "individual"
            };
            this.isLoading = false;
            this.clientCreated.emit(this.createdClient);
            this.loadTemplateAndGoToNotify();
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
  loadTemplateAndGoToNotify() {
    if (!this.createdClient)
      return;
    this.isLoading = true;
    const templateType = "WELCOME_BONUS";
    this.messageTemplatesService.getAllTemplates(templateType).subscribe({
      next: (templates) => {
        if (templates && templates.length > 0) {
          this.selectedWelcomeTemplate = templates[0];
          this.messageTemplatesService.getPopulatedTemplate(templateType, this.createdClient.id).subscribe({
            next: (populated) => {
              this.populatedMessageContent = populated.populatedContent;
              this.isLoading = false;
              this.currentStep = "notify";
            },
            error: (err) => {
              console.error("Error loading populated template:", err);
              this.populatedMessageContent = this.getDefaultMessage();
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
  getDefaultMessage() {
    const clientName = this.createdClient?.name || "\u041A\u043B\u0438\u0435\u043D\u0442";
    const bonus = this.welcomeBonusAmount;
    return `\u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C, ${clientName}! \u0412\u0430\u043C \u043D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u043E ${bonus} \u0431\u043E\u043D\u0443\u0441\u043E\u0432.`;
  }
  sendWelcomeMessage() {
    if (this.isSendingMessage || !this.createdClient)
      return;
    const phone = this.createdClient.phone;
    const message = this.populatedMessageContent || this.getDefaultMessage();
    if (!phone || !message) {
      this.toastService.error("\u041D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430 \u0438\u043B\u0438 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435");
      return;
    }
    this.isSendingMessage = true;
    this.messagesService.sendMessage({
      clientId: this.createdClient.id,
      messageContent: message,
      channel: "WHATSAPP"
    }).subscribe({
      next: () => {
        this.openWhatsAppWeb(phone, message);
        this.toastService.success("\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u0437\u0430\u043F\u0438\u0441\u0430\u043D\u043E, \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u0435\u0442\u0441\u044F WhatsApp");
        this.isSendingMessage = false;
        this.closeModal();
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
  skipAndFinish() {
    this.closeModal();
  }
  addTag(tag) {
    const currentTags = this.clientTags.split(",").map((t) => t.trim()).filter((t) => t.length > 0);
    if (currentTags.includes(tag)) {
      const index = currentTags.indexOf(tag);
      currentTags.splice(index, 1);
    } else {
      currentTags.push(tag);
    }
    this.clientTags = currentTags.join(", ");
  }
  isTagSelected(tag) {
    const currentTags = this.clientTags.split(",").map((t) => t.trim()).filter((t) => t.length > 0);
    return currentTags.includes(tag);
  }
  resetForm() {
    this.currentStep = "form";
    this.clientPhone = "";
    this.clientName = "";
    this.clientSurname = "";
    this.clientEmail = "";
    this.clientBirthday = "";
    this.clientType = "individual";
    this.clientTags = "";
    this.clientComment = "";
    this.showTagsDropdown = false;
    this.createdClient = null;
    this.selectedWelcomeTemplate = null;
    this.populatedMessageContent = "";
    this.isSendingMessage = false;
    this.isLoading = false;
  }
  static \u0275fac = function CreateClientModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CreateClientModalComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CreateClientModalComponent, selectors: [["app-create-client-modal"]], inputs: { visible: "visible" }, outputs: { visibleChange: "visibleChange", clientCreated: "clientCreated" }, features: [\u0275\u0275NgOnChangesFeature], decls: 3, vars: 5, consts: [[3, "closed", "visible", "title", "showCloseButton"], ["class", "step-form", 4, "ngIf"], ["class", "step-notify", 4, "ngIf"], [1, "step-form"], ["class", "bonus-hint-box", 4, "ngIf"], [1, "form-group"], [1, "input-label"], [1, "required"], ["type", "tel", "placeholder", "+7 (___) ___-__-__", 1, "form-input", 3, "ngModelChange", "blur", "ngModel"], [1, "input-hint"], ["type", "text", 1, "form-input", 3, "ngModelChange", "ngModel", "placeholder"], ["class", "form-group", 4, "ngIf"], [1, "radio-group"], [1, "radio-label"], ["type", "radio", "name", "clientType", "value", "individual", 1, "radio-input", 3, "ngModelChange", "ngModel"], [1, "radio-custom"], [1, "radio-text"], ["type", "radio", "name", "clientType", "value", "business", 1, "radio-input", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "VIP, \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u044B\u0439, \u043D\u043E\u0432\u044B\u0439...", 1, "form-input", 3, "ngModelChange", "focus", "ngModel"], ["class", "tags-dropdown", 4, "ngIf"], ["placeholder", "\u0417\u0430\u043C\u0435\u0442\u043A\u0438 \u043E \u043A\u043B\u0438\u0435\u043D\u0442\u0435...", "rows", "3", 1, "form-textarea", 3, "ngModelChange", "ngModel"], [1, "submit-btn", 3, "click", "disabled"], [1, "bonus-hint-box"], ["viewBox", "0 0 24 24", "fill", "none", 1, "bonus-icon"], ["d", "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z", "fill", "currentColor"], [1, "bonus-text"], [1, "bonus-label"], [1, "bonus-value"], ["type", "text", "placeholder", "\u0418\u0432\u0430\u043D\u043E\u0432", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "date", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "tags-dropdown"], [1, "tags-dropdown-header"], ["type", "button", 1, "tags-dropdown-close", 3, "click"], [1, "tags-dropdown-list"], ["type", "button", "class", "tag-option", 3, "selected", "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "tag-option", 3, "click"], ["class", "tag-check", 4, "ngIf"], [1, "tag-check"], [1, "step-notify"], [1, "success-banner"], ["viewBox", "0 0 24 24", "fill", "none", 1, "success-icon"], ["cx", "12", "cy", "12", "r", "10", "fill", "#16A34A"], ["d", "M9 12l2 2 4-4", "stroke", "white", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "success-text"], [1, "success-title"], [1, "success-subtitle"], [1, "send-message-content"], ["class", "template-section", 4, "ngIf"], ["class", "template-not-found", 4, "ngIf"], [1, "phone-section"], [1, "phone-label"], [1, "phone-display"], ["viewBox", "0 0 24 24", "fill", "none", 1, "phone-icon"], ["d", "M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z", "stroke", "currentColor", "stroke-width", "1.5"], [1, "phone-number"], ["class", "message-content-section", 4, "ngIf"], [1, "notify-actions"], ["buttonType", "primary", "size", "large", "class", "send-message-btn", 3, "disabled", "click", 4, "ngIf"], [1, "skip-btn", 3, "click"], [1, "template-section"], [1, "template-section-label"], [1, "template-card-display"], [1, "template-card-header"], [1, "template-icon"], ["viewBox", "0 0 24 24", "fill", "none"], ["d", "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z", "stroke", "currentColor", "stroke-width", "1.5"], ["d", "M14 2v6h6M16 13H8M16 17H8M10 9H8", "stroke", "currentColor", "stroke-width", "1.5"], [1, "template-info"], [1, "template-name-display"], [1, "template-type-badge"], [1, "template-content-display"], [1, "template-content-text"], [1, "template-not-found"], ["viewBox", "0 0 24 24", "fill", "none", 1, "not-found-icon"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "2"], ["d", "M12 8v4M12 16h.01", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], [1, "not-found-text"], [1, "not-found-title"], [1, "not-found-subtitle"], [1, "message-content-section"], [1, "message-content-label"], [1, "message-content-box"], [1, "message-text"], ["buttonType", "primary", "size", "large", 1, "send-message-btn", 3, "click", "disabled"], ["viewBox", "0 0 24 24", "fill", "none", 1, "whatsapp-icon"], ["d", "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z", "fill", "currentColor"], ["d", "M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z", "fill", "currentColor"]], template: function CreateClientModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-modal", 0);
      \u0275\u0275listener("closed", function CreateClientModalComponent_Template_app_modal_closed_0_listener() {
        return ctx.onClose();
      });
      \u0275\u0275template(1, CreateClientModalComponent_div_1_Template, 45, 14, "div", 1)(2, CreateClientModalComponent_div_2_Template, 27, 9, "div", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("visible", ctx.visible)("title", ctx.getModalTitle())("showCloseButton", true);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.currentStep === "form");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.currentStep === "notify");
    }
  }, dependencies: [
    CommonModule,
    NgForOf,
    NgIf,
    FormsModule,
    DefaultValueAccessor,
    RadioControlValueAccessor,
    NgControlStatus,
    NgModel,
    ModalComponent,
    ButtonComponent,
    PhoneFormatPipe
  ], styles: ['\n\n.input-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #475569;\n  margin-bottom: 0.5rem;\n}\n.required[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  position: relative;\n}\n.form-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 16px;\n  border: 1px solid #cbd5e1;\n  border-radius: 10px;\n  font-size: 1rem;\n  outline: none;\n  transition: 0.2s;\n}\n.form-input[_ngcontent-%COMP%]:focus {\n  border-color: #16A34A;\n  box-shadow: 0 0 0 3px #dcfce7;\n}\n.form-input[type=date][_ngcontent-%COMP%] {\n  font-family: inherit;\n  color: #1f2937;\n}\n.input-hint[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #94a3b8;\n  margin-top: 0.25rem;\n}\n.tags-dropdown[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  background: white;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n}\n.tags-dropdown-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 14px;\n  background: #f8fafc;\n  border-bottom: 1px solid #e2e8f0;\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #64748b;\n}\n.tags-dropdown-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 1.25rem;\n  color: #94a3b8;\n  cursor: pointer;\n  padding: 0;\n  line-height: 1;\n}\n.tags-dropdown-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  padding: 12px;\n  max-height: 150px;\n  overflow-y: auto;\n}\n.tag-option[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 12px;\n  background: #f0fdf4;\n  border: 1px solid #bbf7d0;\n  border-radius: 20px;\n  font-size: 0.8rem;\n  font-weight: 500;\n  color: #15803d;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.tag-option[_ngcontent-%COMP%]:hover {\n  background: #dcfce7;\n  border-color: #86efac;\n}\n.tag-option.selected[_ngcontent-%COMP%] {\n  background: #16A34A;\n  border-color: #16A34A;\n  color: white;\n}\n.tag-check[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n}\n.form-textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 16px;\n  border: 1px solid #cbd5e1;\n  border-radius: 10px;\n  font-size: 1rem;\n  font-family: inherit;\n  outline: none;\n  transition: 0.2s;\n  resize: vertical;\n  min-height: 80px;\n}\n.form-textarea[_ngcontent-%COMP%]:focus {\n  border-color: #16A34A;\n  box-shadow: 0 0 0 3px #dcfce7;\n}\n.radio-group[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1.5rem;\n}\n.radio-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  font-size: 0.9rem;\n  color: #374151;\n}\n.radio-input[_ngcontent-%COMP%] {\n  display: none;\n}\n.radio-custom[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border: 2px solid #cbd5e1;\n  border-radius: 50%;\n  position: relative;\n  transition: 0.2s;\n}\n.radio-custom[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  width: 10px;\n  height: 10px;\n  background: #16A34A;\n  border-radius: 50%;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(0);\n  transition: 0.2s;\n}\n.radio-input[_ngcontent-%COMP%]:checked    + .radio-custom[_ngcontent-%COMP%] {\n  border-color: #16A34A;\n}\n.radio-input[_ngcontent-%COMP%]:checked    + .radio-custom[_ngcontent-%COMP%]::after {\n  transform: translate(-50%, -50%) scale(1);\n}\n.radio-text[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.bonus-hint-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 1rem;\n  background:\n    linear-gradient(\n      135deg,\n      #fef3c7 0%,\n      #fde68a 100%);\n  border: 1px solid #fcd34d;\n  border-radius: 12px;\n  margin: 0 0 1rem 0;\n}\n.bonus-icon[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  color: #d97706;\n  flex-shrink: 0;\n}\n.bonus-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.bonus-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #92400e;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.bonus-value[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #78350f;\n}\n.bonus-value[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #d97706;\n  font-weight: 700;\n}\n.submit-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #16A34A;\n  color: white;\n  padding: 14px;\n  border: none;\n  border-radius: 12px;\n  font-weight: 700;\n  cursor: pointer;\n  font-size: 1rem;\n  transition: 0.2s;\n}\n.submit-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #14532d;\n}\n.submit-btn[_ngcontent-%COMP%]:disabled {\n  background: #94a3b8;\n  cursor: not-allowed;\n}\n.success-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 1rem;\n  background:\n    linear-gradient(\n      135deg,\n      #dcfce7 0%,\n      #bbf7d0 100%);\n  border: 1px solid #86efac;\n  border-radius: 12px;\n  margin-bottom: 1.5rem;\n}\n.success-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  flex-shrink: 0;\n}\n.success-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.success-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #15803d;\n}\n.success-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #166534;\n}\n.send-message-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.template-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.template-section-label[_ngcontent-%COMP%], \n.phone-label[_ngcontent-%COMP%], \n.message-content-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #475569;\n}\n.template-card-display[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 2px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 1.25rem;\n}\n.template-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.template-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background:\n    linear-gradient(\n      135deg,\n      #dcfce7 0%,\n      #bbf7d0 100%);\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.template-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  color: #16a34a;\n}\n.template-info[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.template-name-display[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0;\n}\n.template-type-badge[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #64748b;\n  background: #f1f5f9;\n  padding: 0.25rem 0.5rem;\n  border-radius: 6px;\n  display: inline-block;\n  width: fit-content;\n}\n.template-content-display[_ngcontent-%COMP%] {\n  padding-top: 1rem;\n  border-top: 1px solid #e2e8f0;\n}\n.template-content-text[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.9375rem;\n  line-height: 1.6;\n  color: #1f2937;\n  white-space: pre-wrap;\n}\n.template-not-found[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 1.5rem;\n  background: #fef3c7;\n  border: 1px solid #fcd34d;\n  border-radius: 12px;\n  margin-bottom: 1.5rem;\n}\n.not-found-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  color: #d97706;\n  flex-shrink: 0;\n}\n.not-found-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.not-found-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #92400e;\n}\n.not-found-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #b45309;\n}\n.phone-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.phone-display[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 1rem;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n}\n.phone-icon[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  color: #16A34A;\n  flex-shrink: 0;\n}\n.phone-number[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #1f2937;\n  font-family: "Courier New", monospace;\n}\n.message-content-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.message-content-box[_ngcontent-%COMP%] {\n  padding: 1.25rem;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  max-height: 200px;\n  overflow-y: auto;\n}\n.message-text[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.9375rem;\n  line-height: 1.6;\n  color: #1f2937;\n  white-space: pre-wrap;\n}\n.notify-actions[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.send-message-btn[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.send-message-btn[_ngcontent-%COMP%]     button {\n  width: 100% !important;\n  justify-content: center;\n}\n.whatsapp-icon[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n.skip-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #64748b;\n  cursor: pointer;\n  font-size: 0.875rem;\n  padding: 0.5rem;\n  text-align: center;\n  transition: color 0.2s;\n}\n.skip-btn[_ngcontent-%COMP%]:hover {\n  color: #1f2937;\n}\n@keyframes _ngcontent-%COMP%_slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.step-notify[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideDown 0.3s ease;\n}\n/*# sourceMappingURL=create-client-modal.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CreateClientModalComponent, [{
    type: Component,
    args: [{ selector: "app-create-client-modal", standalone: true, imports: [
      CommonModule,
      FormsModule,
      ModalComponent,
      ButtonComponent,
      PhoneFormatPipe
    ], template: `
    <app-modal
      [visible]="visible"
      [title]="getModalTitle()"
      [showCloseButton]="true"
      (closed)="onClose()">
      
      <!-- Step 1: Client Form -->
      <div class="step-form" *ngIf="currentStep === 'form'">
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
          <label class="input-label">\u0422\u0435\u043B\u0435\u0444\u043E\u043D <span class="required">*</span></label>
          <input
            type="tel"
            class="form-input"
            [(ngModel)]="clientPhone"
            placeholder="+7 (___) ___-__-__"
            (blur)="normalizePhone()">
          <div class="input-hint">\u041F\u0440\u0438\u043C\u0435\u0440: +77001234567 \u0438\u043B\u0438 87001234567</div>
        </div>

        <div class="form-group">
          <label class="input-label">{{ clientType === 'business' ? '\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u043B\u0438\u0435\u043D\u0442\u0430' : '\u0418\u043C\u044F' }} <span class="required">*</span></label>
          <input
            type="text"
            class="form-input"
            [(ngModel)]="clientName"
            [placeholder]="clientType === 'business' ? '\u0422\u041E\u041E \xAB\u041A\u043B\u0438\u0435\u043D\u0442\xBB' : '\u0418\u0432\u0430\u043D'">
        </div>

        <div class="form-group" *ngIf="clientType === 'individual'">
          <label class="input-label">\u0424\u0430\u043C\u0438\u043B\u0438\u044F (\u043D\u0435\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E)</label>
          <input
            type="text"
            class="form-input"
            [(ngModel)]="clientSurname"
            placeholder="\u0418\u0432\u0430\u043D\u043E\u0432">
        </div>

        <div class="form-group" *ngIf="clientType === 'individual'">
          <label class="input-label">\u0414\u0430\u0442\u0430 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F (\u043D\u0435\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E)</label>
          <input
            type="date"
            class="form-input"
            [(ngModel)]="clientBirthday">
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
                [(ngModel)]="clientType"
                class="radio-input">
              <span class="radio-custom"></span>
              <span class="radio-text">\u0418\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u044B\u0439</span>
            </label>
            <label class="radio-label">
              <input
                type="radio"
                name="clientType"
                value="business"
                [(ngModel)]="clientType"
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
            [(ngModel)]="clientTags"
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
            [(ngModel)]="clientComment"
            placeholder="\u0417\u0430\u043C\u0435\u0442\u043A\u0438 \u043E \u043A\u043B\u0438\u0435\u043D\u0442\u0435..."
            rows="3"></textarea>
        </div>

        <button class="submit-btn" (click)="createClient()" [disabled]="!clientPhone || !clientName || isLoading">
          {{ isLoading ? '\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435...' : '\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043A\u043B\u0438\u0435\u043D\u0442\u0430' }}
        </button>
      </div>

      <!-- Step 2: Notify -->
      <div class="step-notify" *ngIf="currentStep === 'notify'">
        <div class="success-banner">
          <svg viewBox="0 0 24 24" fill="none" class="success-icon">
            <circle cx="12" cy="12" r="10" fill="#16A34A"/>
            <path d="M9 12l2 2 4-4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <div class="success-text">
            <span class="success-title">\u041A\u043B\u0438\u0435\u043D\u0442 \u0441\u043E\u0437\u0434\u0430\u043D!</span>
            <span class="success-subtitle">{{ createdClient?.name }} \u2022 {{ welcomeBonusAmount }} \u0431\u043E\u043D\u0443\u0441\u043E\u0432 \u043D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u043E</span>
          </div>
        </div>

        <div class="send-message-content">
          <!-- Selected Template -->
          <div class="template-section" *ngIf="selectedWelcomeTemplate">
            <label class="template-section-label">\u0428\u0430\u0431\u043B\u043E\u043D \u043F\u0440\u0438\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0433\u043E \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F</label>
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
                  <span class="template-type-badge">\u041F\u0440\u0438\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u0431\u043E\u043D\u0443\u0441</span>
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
              <span class="not-found-subtitle">\u0421\u043E\u0437\u0434\u0430\u0439\u0442\u0435 \u0448\u0430\u0431\u043B\u043E\u043D \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F \u0442\u0438\u043F\u0430 "WELCOME_BONUS" \u0432 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430\u0445</span>
            </div>
          </div>

          <!-- Phone Number -->
          <div class="phone-section">
            <label class="phone-label">\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430 \u043F\u043E\u043B\u0443\u0447\u0430\u0442\u0435\u043B\u044F</label>
            <div class="phone-display">
              <svg viewBox="0 0 24 24" fill="none" class="phone-icon">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" stroke-width="1.5"/>
              </svg>
              <span class="phone-number">{{ createdClient?.phone | phoneFormat }}</span>
            </div>
          </div>

          <!-- Message Content -->
          <div class="message-content-section" *ngIf="selectedWelcomeTemplate">
            <label class="message-content-label">\u0421\u043E\u0434\u0435\u0440\u0436\u0438\u043C\u043E\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F</label>
            <div class="message-content-box">
              <p class="message-text">{{ populatedMessageContent }}</p>
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
          
          <button class="skip-btn" (click)="skipAndFinish()">
            \u041F\u0440\u043E\u043F\u0443\u0441\u0442\u0438\u0442\u044C \u0438 \u0437\u0430\u043A\u0440\u044B\u0442\u044C
          </button>
        </div>
      </div>
    </app-modal>
  `, styles: ['/* angular:styles/component:css;6f6b507ef9f2cf264aa0220d696d1d6f56ed2c80aef9198cbffc6b42d895a03c;/Users/baglan/repo/westwood/westwood-frontend/src/app/shared/components/create-client-modal/create-client-modal.component.ts */\n.input-label {\n  display: block;\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #475569;\n  margin-bottom: 0.5rem;\n}\n.required {\n  color: #dc2626;\n}\n.form-group {\n  margin-bottom: 1rem;\n  position: relative;\n}\n.form-input {\n  width: 100%;\n  padding: 12px 16px;\n  border: 1px solid #cbd5e1;\n  border-radius: 10px;\n  font-size: 1rem;\n  outline: none;\n  transition: 0.2s;\n}\n.form-input:focus {\n  border-color: #16A34A;\n  box-shadow: 0 0 0 3px #dcfce7;\n}\n.form-input[type=date] {\n  font-family: inherit;\n  color: #1f2937;\n}\n.input-hint {\n  font-size: 0.75rem;\n  color: #94a3b8;\n  margin-top: 0.25rem;\n}\n.tags-dropdown {\n  margin-top: 8px;\n  background: white;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n}\n.tags-dropdown-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 14px;\n  background: #f8fafc;\n  border-bottom: 1px solid #e2e8f0;\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #64748b;\n}\n.tags-dropdown-close {\n  background: none;\n  border: none;\n  font-size: 1.25rem;\n  color: #94a3b8;\n  cursor: pointer;\n  padding: 0;\n  line-height: 1;\n}\n.tags-dropdown-list {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  padding: 12px;\n  max-height: 150px;\n  overflow-y: auto;\n}\n.tag-option {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 12px;\n  background: #f0fdf4;\n  border: 1px solid #bbf7d0;\n  border-radius: 20px;\n  font-size: 0.8rem;\n  font-weight: 500;\n  color: #15803d;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.tag-option:hover {\n  background: #dcfce7;\n  border-color: #86efac;\n}\n.tag-option.selected {\n  background: #16A34A;\n  border-color: #16A34A;\n  color: white;\n}\n.tag-check {\n  font-size: 0.7rem;\n}\n.form-textarea {\n  width: 100%;\n  padding: 12px 16px;\n  border: 1px solid #cbd5e1;\n  border-radius: 10px;\n  font-size: 1rem;\n  font-family: inherit;\n  outline: none;\n  transition: 0.2s;\n  resize: vertical;\n  min-height: 80px;\n}\n.form-textarea:focus {\n  border-color: #16A34A;\n  box-shadow: 0 0 0 3px #dcfce7;\n}\n.radio-group {\n  display: flex;\n  gap: 1.5rem;\n}\n.radio-label {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  font-size: 0.9rem;\n  color: #374151;\n}\n.radio-input {\n  display: none;\n}\n.radio-custom {\n  width: 20px;\n  height: 20px;\n  border: 2px solid #cbd5e1;\n  border-radius: 50%;\n  position: relative;\n  transition: 0.2s;\n}\n.radio-custom::after {\n  content: "";\n  position: absolute;\n  width: 10px;\n  height: 10px;\n  background: #16A34A;\n  border-radius: 50%;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(0);\n  transition: 0.2s;\n}\n.radio-input:checked + .radio-custom {\n  border-color: #16A34A;\n}\n.radio-input:checked + .radio-custom::after {\n  transform: translate(-50%, -50%) scale(1);\n}\n.radio-text {\n  font-weight: 500;\n}\n.bonus-hint-box {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 1rem;\n  background:\n    linear-gradient(\n      135deg,\n      #fef3c7 0%,\n      #fde68a 100%);\n  border: 1px solid #fcd34d;\n  border-radius: 12px;\n  margin: 0 0 1rem 0;\n}\n.bonus-icon {\n  width: 32px;\n  height: 32px;\n  color: #d97706;\n  flex-shrink: 0;\n}\n.bonus-text {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.bonus-label {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #92400e;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.bonus-value {\n  font-size: 0.9rem;\n  color: #78350f;\n}\n.bonus-value strong {\n  color: #d97706;\n  font-weight: 700;\n}\n.submit-btn {\n  width: 100%;\n  background: #16A34A;\n  color: white;\n  padding: 14px;\n  border: none;\n  border-radius: 12px;\n  font-weight: 700;\n  cursor: pointer;\n  font-size: 1rem;\n  transition: 0.2s;\n}\n.submit-btn:hover:not(:disabled) {\n  background: #14532d;\n}\n.submit-btn:disabled {\n  background: #94a3b8;\n  cursor: not-allowed;\n}\n.success-banner {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 1rem;\n  background:\n    linear-gradient(\n      135deg,\n      #dcfce7 0%,\n      #bbf7d0 100%);\n  border: 1px solid #86efac;\n  border-radius: 12px;\n  margin-bottom: 1.5rem;\n}\n.success-icon {\n  width: 40px;\n  height: 40px;\n  flex-shrink: 0;\n}\n.success-text {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.success-title {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #15803d;\n}\n.success-subtitle {\n  font-size: 0.85rem;\n  color: #166534;\n}\n.send-message-content {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.template-section {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.template-section-label,\n.phone-label,\n.message-content-label {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #475569;\n}\n.template-card-display {\n  background: #f8fafc;\n  border: 2px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 1.25rem;\n}\n.template-card-header {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.template-icon {\n  width: 40px;\n  height: 40px;\n  background:\n    linear-gradient(\n      135deg,\n      #dcfce7 0%,\n      #bbf7d0 100%);\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.template-icon svg {\n  width: 20px;\n  height: 20px;\n  color: #16a34a;\n}\n.template-info {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.template-name-display {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0;\n}\n.template-type-badge {\n  font-size: 0.75rem;\n  color: #64748b;\n  background: #f1f5f9;\n  padding: 0.25rem 0.5rem;\n  border-radius: 6px;\n  display: inline-block;\n  width: fit-content;\n}\n.template-content-display {\n  padding-top: 1rem;\n  border-top: 1px solid #e2e8f0;\n}\n.template-content-text {\n  margin: 0;\n  font-size: 0.9375rem;\n  line-height: 1.6;\n  color: #1f2937;\n  white-space: pre-wrap;\n}\n.template-not-found {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 1.5rem;\n  background: #fef3c7;\n  border: 1px solid #fcd34d;\n  border-radius: 12px;\n  margin-bottom: 1.5rem;\n}\n.not-found-icon {\n  width: 40px;\n  height: 40px;\n  color: #d97706;\n  flex-shrink: 0;\n}\n.not-found-text {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.not-found-title {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #92400e;\n}\n.not-found-subtitle {\n  font-size: 0.875rem;\n  color: #b45309;\n}\n.phone-section {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.phone-display {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 1rem;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n}\n.phone-icon {\n  width: 20px;\n  height: 20px;\n  color: #16A34A;\n  flex-shrink: 0;\n}\n.phone-number {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #1f2937;\n  font-family: "Courier New", monospace;\n}\n.message-content-section {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.message-content-box {\n  padding: 1.25rem;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  max-height: 200px;\n  overflow-y: auto;\n}\n.message-text {\n  margin: 0;\n  font-size: 0.9375rem;\n  line-height: 1.6;\n  color: #1f2937;\n  white-space: pre-wrap;\n}\n.notify-actions {\n  margin-top: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.send-message-btn {\n  width: 100%;\n}\n.send-message-btn ::ng-deep button {\n  width: 100% !important;\n  justify-content: center;\n}\n.whatsapp-icon {\n  width: 20px;\n  height: 20px;\n}\n.skip-btn {\n  background: none;\n  border: none;\n  color: #64748b;\n  cursor: pointer;\n  font-size: 0.875rem;\n  padding: 0.5rem;\n  text-align: center;\n  transition: color 0.2s;\n}\n.skip-btn:hover {\n  color: #1f2937;\n}\n@keyframes slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.step-notify {\n  animation: slideDown 0.3s ease;\n}\n/*# sourceMappingURL=create-client-modal.component.css.map */\n'] }]
  }], null, { visible: [{
    type: Input
  }], visibleChange: [{
    type: Output
  }], clientCreated: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CreateClientModalComponent, { className: "CreateClientModalComponent", filePath: "src/app/shared/components/create-client-modal/create-client-modal.component.ts", lineNumber: 773 });
})();

// src/app/features/clients/pages/clients-page/clients-page.component.ts
var _c0 = (a0) => ["/clients", a0];
function ClientsPageComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "app-loader", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("visible", true)("overlay", false);
  }
}
function ClientsPageComponent_div_3_span_82_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 89);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 90);
    \u0275\u0275listener("click", function ClientsPageComponent_div_3_span_82_Template_button_click_2_listener() {
      const i_r4 = \u0275\u0275restoreView(_r3).index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removeTagFilter(i_r4));
    });
    \u0275\u0275text(3, "\xD7");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tag_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tag_r5, " ");
  }
}
function ClientsPageComponent_div_3_div_84_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 93);
    \u0275\u0275listener("click", function ClientsPageComponent_div_3_div_84_button_1_Template_button_click_0_listener() {
      const tag_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.addTagFilter(tag_r7));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tag_r7, " ");
  }
}
function ClientsPageComponent_div_3_div_84_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 91);
    \u0275\u0275template(1, ClientsPageComponent_div_3_div_84_button_1_Template, 2, 1, "button", 92);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.getAvailableTagsForFilter());
  }
}
function ClientsPageComponent_div_3_app_button_110_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-button", 94);
    \u0275\u0275listener("onClick", function ClientsPageComponent_div_3_app_button_110_Template_app_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.clearFilters());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 17);
    \u0275\u0275element(2, "path", 95);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " \u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C ");
    \u0275\u0275elementEnd();
  }
}
function ClientsPageComponent_div_3_tr_139__svg_svg_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 17);
    \u0275\u0275element(1, "path", 129)(2, "path", 130);
    \u0275\u0275elementEnd();
  }
}
function ClientsPageComponent_div_3_tr_139__svg_svg_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 17);
    \u0275\u0275element(1, "path", 131)(2, "circle", 132);
    \u0275\u0275elementEnd();
  }
}
function ClientsPageComponent_div_3_tr_139_span_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 133);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tag_r9);
  }
}
function ClientsPageComponent_div_3_tr_139_span_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 134);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const client_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("+", client_r10.tags.length - 2, "");
  }
}
function ClientsPageComponent_div_3_tr_139_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 96)(1, "td", 97)(2, "div", 98)(3, "div", 99);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 100)(6, "a", 101)(7, "span", 102);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "span", 103);
    \u0275\u0275template(10, ClientsPageComponent_div_3_tr_139__svg_svg_10_Template, 3, 0, "svg", 104)(11, ClientsPageComponent_div_3_tr_139__svg_svg_11_Template, 3, 0, "svg", 104);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(13, "td", 105)(14, "div", 106)(15, "span", 107);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "phoneFormat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 108);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "td", 109)(21, "div", 110);
    \u0275\u0275template(22, ClientsPageComponent_div_3_tr_139_span_22_Template, 2, 1, "span", 111)(23, ClientsPageComponent_div_3_tr_139_span_23_Template, 2, 1, "span", 112);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "td", 113)(25, "div", 114)(26, "span", 115);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span", 116);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "td", 117)(31, "div", 118)(32, "span", 119);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "span", 120);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "td", 121)(37, "span", 122);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "td", 123)(40, "div", 124)(41, "a", 125)(42, "app-icon-button", 126);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(43, "svg", 17);
    \u0275\u0275element(44, "path", 127)(45, "circle", 128);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const client_r10 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("business", client_r10.type === "business");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getInitials(client_r10), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(21, _c0, client_r10.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", client_r10.firstName, "", client_r10.lastName ? " " + client_r10.lastName : "", "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", client_r10.type === "business");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", client_r10.type === "individual");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", client_r10.type === "business" ? "\u0411\u0438\u0437\u043D\u0435\u0441" : "\u0424\u0438\u0437. \u043B\u0438\u0446\u043E", " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 19, client_r10.phone));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(client_r10.email || "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", client_r10.tags.slice(0, 2));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", client_r10.tags.length > 2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r1.formatAmount(client_r10.totalAmount), " \u20B8");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", client_r10.totalTransactions, " \u0442\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u0439");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.formatAmount(client_r10.bonusBalance));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u2212", ctx_r1.formatAmount(client_r10.bonusUsed), " \u0438\u0441\u043F.");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(client_r10.lastVisit);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(23, _c0, client_r10.id));
  }
}
function ClientsPageComponent_div_3_div_142__svg_svg_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 17);
    \u0275\u0275element(1, "path", 129)(2, "path", 130);
    \u0275\u0275elementEnd();
  }
}
function ClientsPageComponent_div_3_div_142__svg_svg_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 17);
    \u0275\u0275element(1, "path", 131)(2, "circle", 132);
    \u0275\u0275elementEnd();
  }
}
function ClientsPageComponent_div_3_div_142_div_14_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 152);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r11 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tag_r11);
  }
}
function ClientsPageComponent_div_3_div_142_div_14_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 153);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const client_r12 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("+", client_r12.tags.length - 3, "");
  }
}
function ClientsPageComponent_div_3_div_142_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 149);
    \u0275\u0275template(1, ClientsPageComponent_div_3_div_142_div_14_span_1_Template, 2, 1, "span", 150)(2, ClientsPageComponent_div_3_div_142_div_14_span_2_Template, 2, 1, "span", 151);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const client_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", client_r12.tags.slice(0, 3));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", client_r12.tags.length > 3);
  }
}
function ClientsPageComponent_div_3_div_142_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 135)(1, "div", 136)(2, "div", 137);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 138)(5, "div", 139);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 140);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "phoneFormat");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 141);
    \u0275\u0275template(11, ClientsPageComponent_div_3_div_142__svg_svg_11_Template, 3, 0, "svg", 104)(12, ClientsPageComponent_div_3_div_142__svg_svg_12_Template, 3, 0, "svg", 104);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 142);
    \u0275\u0275template(14, ClientsPageComponent_div_3_div_142_div_14_Template, 3, 2, "div", 143);
    \u0275\u0275elementStart(15, "div", 144)(16, "div", 145)(17, "span", 146);
    \u0275\u0275text(18, "\u0411\u043E\u043D\u0443\u0441\u044B");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 147);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 145)(22, "span", 146);
    \u0275\u0275text(23, "\u041F\u043E\u0442\u0440\u0430\u0447\u0435\u043D\u043E");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 148);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const client_r12 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(16, _c0, client_r12.id));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("business", client_r12.type === "business");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getInitials(client_r12), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", client_r12.firstName, "", client_r12.lastName ? " " + client_r12.lastName : "", "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 14, client_r12.phone));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("business", client_r12.type === "business");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", client_r12.type === "business");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", client_r12.type === "individual");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", client_r12.tags.length > 0);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.formatAmount(client_r12.bonusBalance));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r1.formatAmount(client_r12.totalAmount), " \u20B8");
  }
}
function ClientsPageComponent_div_3_div_143_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 154);
    \u0275\u0275element(1, "app-loader");
    \u0275\u0275elementEnd();
  }
}
function ClientsPageComponent_div_3_div_144_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 155);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 17);
    \u0275\u0275element(2, "circle", 37)(3, "path", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "\u041A\u043B\u0438\u0435\u043D\u0442\u044B \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u044B");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "app-button", 156);
    \u0275\u0275listener("onClick", function ClientsPageComponent_div_3_div_144_Template_app_button_onClick_6_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.clearFilters());
    });
    \u0275\u0275text(7, " \u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u0444\u0438\u043B\u044C\u0442\u0440\u044B ");
    \u0275\u0275elementEnd()();
  }
}
function ClientsPageComponent_div_3_div_145_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 165)(1, "app-pagination", 166);
    \u0275\u0275listener("pageChange", function ClientsPageComponent_div_3_div_145_div_17_Template_app_pagination_pageChange_1_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onPageChange($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("currentPage", ctx_r1.currentPage + 1)("totalPages", ctx_r1.getTotalPages());
  }
}
function ClientsPageComponent_div_3_div_145_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 157)(1, "div", 158)(2, "div", 159)(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 160)(6, "label", 161);
    \u0275\u0275text(7, "\u0421\u0442\u0440\u043E\u043A \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "select", 162);
    \u0275\u0275twoWayListener("ngModelChange", function ClientsPageComponent_div_3_div_145_Template_select_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.pageSize, $event) || (ctx_r1.pageSize = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function ClientsPageComponent_div_3_div_145_Template_select_change_8_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPageSizeChange());
    });
    \u0275\u0275elementStart(9, "option", 163);
    \u0275\u0275text(10, "15");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "option", 163);
    \u0275\u0275text(12, "30");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "option", 163);
    \u0275\u0275text(14, "50");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "option", 163);
    \u0275\u0275text(16, "100");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(17, ClientsPageComponent_div_3_div_145_div_17_Template, 2, 2, "div", 164);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate3("\u041F\u043E\u043A\u0430\u0437\u0430\u043D\u043E ", ctx_r1.currentPage * ctx_r1.pageSize + 1, "-", ctx_r1.Math.min((ctx_r1.currentPage + 1) * ctx_r1.pageSize, ctx_r1.totalClientsFound), " \u0438\u0437 ", ctx_r1.totalClientsFound, "");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.pageSize);
    \u0275\u0275advance();
    \u0275\u0275property("value", 15);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 30);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 50);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 100);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.getTotalPages() > 1);
  }
}
function ClientsPageComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 8)(2, "app-button", 9);
    \u0275\u0275listener("onClick", function ClientsPageComponent_div_3_Template_app_button_onClick_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openCreateClientModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 10);
    \u0275\u0275element(4, "path", 11)(5, "circle", 12)(6, "path", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " \u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043A\u043B\u0438\u0435\u043D\u0442\u0430 ");
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "div", 14)(9, "div", 15)(10, "div", 16);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(11, "svg", 17);
    \u0275\u0275element(12, "path", 18)(13, "circle", 19)(14, "path", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(15, "div", 21)(16, "span", 22);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 23);
    \u0275\u0275text(19, "\u0412\u0441\u0435\u0433\u043E \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 15)(21, "div", 24);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(22, "svg", 17);
    \u0275\u0275element(23, "rect", 25)(24, "path", 26)(25, "path", 27);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(26, "div", 21)(27, "span", 22);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span", 23);
    \u0275\u0275text(30, "\u0410\u043A\u0442\u0438\u0432\u043D\u044B\u0445 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432 \u0437\u0430 \u043C\u0435\u0441\u044F\u0446");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "div", 15)(32, "div", 28);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(33, "svg", 17);
    \u0275\u0275element(34, "path", 29);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(35, "div", 21)(36, "span", 22);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "span", 23);
    \u0275\u0275text(39, "\u041E\u0431\u0449\u0438\u0439 \u0434\u043E\u0445\u043E\u0434");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(40, "div", 15)(41, "div", 30);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(42, "svg", 17);
    \u0275\u0275element(43, "path", 31);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(44, "div", 21)(45, "span", 22);
    \u0275\u0275text(46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "span", 23);
    \u0275\u0275text(48, "\u0411\u043E\u043D\u0443\u0441\u043E\u0432 \u0432 \u043E\u0431\u043E\u0440\u043E\u0442\u0435");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(49, "div", 32)(50, "div", 33)(51, "div", 34)(52, "div", 35);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(53, "svg", 36);
    \u0275\u0275element(54, "circle", 37)(55, "path", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(56, "input", 39);
    \u0275\u0275twoWayListener("ngModelChange", function ClientsPageComponent_div_3_Template_input_ngModelChange_56_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchName, $event) || (ctx_r1.searchName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown.enter", function ClientsPageComponent_div_3_Template_input_keydown_enter_56_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyFilters());
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(57, "div", 40)(58, "div", 35);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(59, "svg", 36);
    \u0275\u0275element(60, "path", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(61, "input", 42);
    \u0275\u0275twoWayListener("ngModelChange", function ClientsPageComponent_div_3_Template_input_ngModelChange_61_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchPhone, $event) || (ctx_r1.searchPhone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown.enter", function ClientsPageComponent_div_3_Template_input_keydown_enter_61_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyFilters());
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(62, "div", 40)(63, "div", 35);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(64, "svg", 36);
    \u0275\u0275element(65, "path", 43)(66, "path", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(67, "input", 45);
    \u0275\u0275twoWayListener("ngModelChange", function ClientsPageComponent_div_3_Template_input_ngModelChange_67_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchEmail, $event) || (ctx_r1.searchEmail = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown.enter", function ClientsPageComponent_div_3_Template_input_keydown_enter_67_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyFilters());
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(68, "div", 46)(69, "label", 47);
    \u0275\u0275text(70, "\u041F\u0435\u0440\u0438\u043E\u0434 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0433\u043E \u0432\u0438\u0437\u0438\u0442\u0430:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "div", 48)(72, "input", 49);
    \u0275\u0275twoWayListener("ngModelChange", function ClientsPageComponent_div_3_Template_input_ngModelChange_72_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.dateFrom, $event) || (ctx_r1.dateFrom = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "span", 50);
    \u0275\u0275text(74, "\u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "input", 49);
    \u0275\u0275twoWayListener("ngModelChange", function ClientsPageComponent_div_3_Template_input_ngModelChange_75_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.dateTo, $event) || (ctx_r1.dateTo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(76, "div", 33)(77, "div", 51)(78, "label", 47);
    \u0275\u0275text(79, "\u0424\u0438\u043B\u044C\u0442\u0440 \u043F\u043E \u0442\u044D\u0433\u0430\u043C:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "div", 52)(81, "div", 53);
    \u0275\u0275template(82, ClientsPageComponent_div_3_span_82_Template, 4, 1, "span", 54);
    \u0275\u0275elementStart(83, "input", 55);
    \u0275\u0275twoWayListener("ngModelChange", function ClientsPageComponent_div_3_Template_input_ngModelChange_83_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.tagSearchInput, $event) || (ctx_r1.tagSearchInput = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown.enter", function ClientsPageComponent_div_3_Template_input_keydown_enter_83_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyFilters());
    })("focus", function ClientsPageComponent_div_3_Template_input_focus_83_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showTagDropdown = true);
    })("input", function ClientsPageComponent_div_3_Template_input_input_83_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.filterAvailableTags());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(84, ClientsPageComponent_div_3_div_84_Template, 2, 1, "div", 56);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(85, "div", 57)(86, "label", 47);
    \u0275\u0275text(87, "\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "select", 58);
    \u0275\u0275twoWayListener("ngModelChange", function ClientsPageComponent_div_3_Template_select_ngModelChange_88_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.sortField, $event) || (ctx_r1.sortField = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(89, "option", 59);
    \u0275\u0275text(90, "\u041F\u043E \u0438\u043C\u0435\u043D\u0438");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(91, "option", 60);
    \u0275\u0275text(92, "\u041F\u043E \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u043C\u0443 \u0432\u0438\u0437\u0438\u0442\u0443");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "option", 61);
    \u0275\u0275text(94, "\u041F\u043E \u0434\u0430\u0442\u0435 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(95, "button", 62);
    \u0275\u0275listener("click", function ClientsPageComponent_div_3_Template_button_click_95_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sortDirection = ctx_r1.sortDirection === "asc" ? "desc" : "asc");
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(96, "svg", 17);
    \u0275\u0275element(97, "path", 63);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(98, "div", 64)(99, "label", 47);
    \u0275\u0275text(100, "\u0422\u0438\u043F:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(101, "div", 65)(102, "button", 66);
    \u0275\u0275listener("click", function ClientsPageComponent_div_3_Template_button_click_102_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.filterType = "all");
    });
    \u0275\u0275text(103, "\u0412\u0441\u0435");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(104, "button", 66);
    \u0275\u0275listener("click", function ClientsPageComponent_div_3_Template_button_click_104_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.filterType = "individual");
    });
    \u0275\u0275text(105, "\u0424\u0438\u0437. \u043B\u0438\u0446\u0430");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(106, "button", 66);
    \u0275\u0275listener("click", function ClientsPageComponent_div_3_Template_button_click_106_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.filterType = "business");
    });
    \u0275\u0275text(107, "\u0411\u0438\u0437\u043D\u0435\u0441");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(108, "div", 67)(109, "div", 68);
    \u0275\u0275template(110, ClientsPageComponent_div_3_app_button_110_Template, 4, 0, "app-button", 69);
    \u0275\u0275elementStart(111, "app-button", 70);
    \u0275\u0275listener("onClick", function ClientsPageComponent_div_3_Template_app_button_onClick_111_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyFilters());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(112, "svg", 17);
    \u0275\u0275element(113, "circle", 37)(114, "path", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275text(115, " \u041F\u043E\u0438\u0441\u043A ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(116, "div", 71)(117, "span", 72);
    \u0275\u0275text(118);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(119, "div", 73)(120, "div", 74)(121, "table", 75)(122, "thead")(123, "tr")(124, "th", 76);
    \u0275\u0275text(125, "\u041A\u043B\u0438\u0435\u043D\u0442");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(126, "th", 77);
    \u0275\u0275text(127, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(128, "th", 78);
    \u0275\u0275text(129, "\u0422\u044D\u0433\u0438");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(130, "th", 79);
    \u0275\u0275text(131, "\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(132, "th", 80);
    \u0275\u0275text(133, "\u0411\u043E\u043D\u0443\u0441\u044B");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(134, "th", 81);
    \u0275\u0275text(135, "\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439 \u0432\u0438\u0437\u0438\u0442");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(136, "th", 82);
    \u0275\u0275text(137, "\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(138, "tbody");
    \u0275\u0275template(139, ClientsPageComponent_div_3_tr_139_Template, 46, 25, "tr", 83);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(140, "div", 84, 0);
    \u0275\u0275listener("scroll", function ClientsPageComponent_div_3_Template_div_scroll_140_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onMobileScroll($event));
    });
    \u0275\u0275template(142, ClientsPageComponent_div_3_div_142_Template, 26, 18, "div", 85)(143, ClientsPageComponent_div_3_div_143_Template, 2, 0, "div", 86);
    \u0275\u0275elementEnd();
    \u0275\u0275template(144, ClientsPageComponent_div_3_div_144_Template, 8, 0, "div", 87)(145, ClientsPageComponent_div_3_div_145_Template, 18, 9, "div", 88);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(17);
    \u0275\u0275textInterpolate(ctx_r1.totalClients);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r1.activeClientsThisMonth);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("", ctx_r1.formatAmount(ctx_r1.totalRevenue), " \u20B8");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.formatAmount(ctx_r1.totalBonusesGranted));
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchName);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchPhone);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchEmail);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.dateFrom);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.dateTo);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r1.selectedTags);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.tagSearchInput);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showTagDropdown && ctx_r1.getAvailableTagsForFilter().length > 0);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.sortField);
    \u0275\u0275advance(8);
    \u0275\u0275classProp("desc", ctx_r1.sortDirection === "desc");
    \u0275\u0275advance(6);
    \u0275\u0275classProp("active", ctx_r1.filterType === "all");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.filterType === "individual");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.filterType === "business");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.hasActiveFilters());
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("\u041D\u0430\u0439\u0434\u0435\u043D\u043E: ", ctx_r1.totalClientsFound, " \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432");
    \u0275\u0275advance(21);
    \u0275\u0275property("ngForOf", ctx_r1.clients);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.mobileClients);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isLoadingMore);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.clients.length === 0 && ctx_r1.mobileClients.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isLoading && ctx_r1.totalClientsFound > 0);
  }
}
var PAGE_SIZE_OPTIONS = [15, 30, 50, 100];
function clampPageSize(size) {
  return PAGE_SIZE_OPTIONS.includes(size) ? size : PAGE_SIZE_OPTIONS[0];
}
var ClientsPageComponent = class _ClientsPageComponent {
  pageHeaderService = inject(PageHeaderService);
  analyticsService = inject(AnalyticsService);
  clientsService = inject(ClientsService);
  toastService = inject(ToastService);
  router = inject(Router);
  route = inject(ActivatedRoute);
  destroy$ = new Subject();
  // Dashboard data
  totalClients = 0;
  activeClientsThisMonth = 0;
  totalRevenue = 0;
  totalBonusesGranted = 0;
  isLoadingDashboard = true;
  // Filters
  searchName = "";
  searchPhone = "";
  searchEmail = "";
  dateFrom = "";
  dateTo = "";
  selectedTags = [];
  tagSearchInput = "";
  showTagDropdown = false;
  sortField = "lastVisit";
  sortDirection = "desc";
  filterType = "all";
  // Available tags from API
  allTags = [];
  // Clients data
  isLoading = false;
  clients = [];
  mobileClients = [];
  // For mobile infinite scroll
  totalClientsFound = 0;
  currentPage = 0;
  pageSize = 15;
  isLoadingMore = false;
  hasMorePages = true;
  mobilePage = 0;
  mobilePageSize = 20;
  // Load more items per scroll on mobile
  // Create client modal
  showCreateClientModal = false;
  ngOnInit() {
    this.pageHeaderService.setPageHeader("\u041A\u043B\u0438\u0435\u043D\u0442\u044B", [
      { label: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F", route: "/home" },
      { label: "\u041A\u043B\u0438\u0435\u043D\u0442\u044B" }
    ]);
    const params = this.route.snapshot.queryParams;
    const pageFromUrl = Math.max(1, +(params["page"] ?? 1) || 1);
    const sizeFromUrl = clampPageSize(+(params["size"] ?? 0) || 15);
    this.currentPage = pageFromUrl - 1;
    this.pageSize = sizeFromUrl;
    this.loadDashboardData();
    this.loadTags();
    this.loadClients();
    this.route.queryParams.pipe(takeUntil(this.destroy$)).subscribe((params2) => {
      const p = Math.max(1, +(params2["page"] ?? 1) || 1);
      const s = clampPageSize(+(params2["size"] ?? 0) || 15);
      const pageIndex = p - 1;
      if (this.currentPage !== pageIndex || this.pageSize !== s) {
        this.currentPage = pageIndex;
        this.pageSize = s;
        this.loadClients();
      }
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  loadTags() {
    this.clientsService.getTags().subscribe({
      next: (tags) => {
        this.allTags = tags;
      },
      error: (err) => {
        console.error("Failed to load tags:", err);
      }
    });
  }
  loadDashboardData() {
    this.isLoadingDashboard = true;
    forkJoin({
      totals: this.analyticsService.getOverallTotals(),
      active: this.analyticsService.getActiveClients()
    }).subscribe({
      next: ({ totals, active }) => {
        this.totalClients = totals.totalClients;
        this.totalRevenue = totals.totalRevenue;
        this.totalBonusesGranted = totals.totalBonusesGranted;
        this.activeClientsThisMonth = active.count;
        this.isLoadingDashboard = false;
      },
      error: (err) => {
        const errorMessage = err.error?.message || "\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0434\u0430\u043D\u043D\u044B\u0445";
        this.toastService.error(errorMessage);
        this.isLoadingDashboard = false;
      }
    });
  }
  loadClients() {
    this.isLoading = true;
    const searchRequest = this.buildSearchRequest();
    this.clientsService.searchClients(searchRequest).subscribe({
      next: (response) => {
        this.clients = response.content.map((result) => this.mapSearchResultToClient(result));
        this.totalClientsFound = response.totalElements;
        this.isLoading = false;
        if (this.currentPage === 0) {
          this.mobileClients = [...this.clients];
          this.mobilePage = 0;
          this.hasMorePages = response.totalPages > 1;
        }
      },
      error: (err) => {
        const errorMessage = err.error?.message || "\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432";
        this.toastService.error(errorMessage);
        this.isLoading = false;
      }
    });
  }
  loadMoreMobileClients() {
    if (this.isLoadingMore || !this.hasMorePages) {
      return;
    }
    this.isLoadingMore = true;
    const nextPage = this.mobilePage + 1;
    const searchRequest = this.buildSearchRequest();
    searchRequest.page = nextPage;
    searchRequest.size = this.mobilePageSize;
    this.clientsService.searchClients(searchRequest).subscribe({
      next: (response) => {
        const newClients = response.content.map((result) => this.mapSearchResultToClient(result));
        this.mobileClients = [...this.mobileClients, ...newClients];
        this.mobilePage = nextPage;
        this.hasMorePages = nextPage < response.totalPages - 1;
        this.isLoadingMore = false;
      },
      error: (err) => {
        console.error("Error loading more clients:", err);
        this.isLoadingMore = false;
      }
    });
  }
  onMobileScroll(event) {
    const target = event.target;
    const scrollTop = target.scrollTop;
    const scrollHeight = target.scrollHeight;
    const clientHeight = target.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight * 0.8) {
      this.loadMoreMobileClients();
    }
  }
  buildSearchRequest() {
    const request = {
      name: this.searchName.trim() || "",
      phone: this.searchPhone.trim() || "",
      email: this.searchEmail.trim() || "",
      lastVisitFrom: this.dateFrom ? `${this.dateFrom}T00:00:00` : null,
      lastVisitTo: this.dateTo ? `${this.dateTo}T23:59:59` : null,
      tags: this.selectedTags.length > 0 ? this.selectedTags : [],
      clientType: this.filterType !== "all" ? this.filterType === "individual" ? "INDIVIDUAL" : "BUSINESS" : null,
      sortBy: this.mapSortField(this.sortField),
      sortDirection: this.sortDirection.toUpperCase(),
      page: this.currentPage,
      size: this.pageSize
    };
    return request;
  }
  mapSortField(field) {
    return field;
  }
  mapSearchResultToClient(result) {
    const lastVisitDate = result.lastVisit ? new Date(result.lastVisit) : null;
    const createdAtDate = result.createdAt ? new Date(result.createdAt) : null;
    return {
      id: result.id,
      firstName: result.name,
      lastName: result.surname || "",
      phone: result.phone,
      email: result.email,
      tags: result.tags || [],
      type: result.clientType === "BUSINESS" ? "business" : "individual",
      totalTransactions: result.transactionCount,
      totalAmount: result.totalSpent,
      bonusBalance: result.bonusBalance,
      bonusUsed: result.bonusUsed,
      lastVisit: lastVisitDate ? this.formatLastVisit(lastVisitDate) : "\u2014",
      createdAt: createdAtDate ? this.formatDate(createdAtDate) : "\u2014"
    };
  }
  formatLastVisit(date) {
    const now = /* @__PURE__ */ new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 6e4);
    const diffHours = Math.floor(diffMs / 36e5);
    const diffDays = Math.floor(diffMs / 864e5);
    if (diffMins < 60) {
      return `${diffMins} \u043C\u0438\u043D. \u043D\u0430\u0437\u0430\u0434`;
    } else if (diffHours < 24) {
      return `${diffHours} \u0447. \u043D\u0430\u0437\u0430\u0434`;
    } else if (diffDays === 1) {
      return "\u0412\u0447\u0435\u0440\u0430";
    } else if (diffDays < 7) {
      return `${diffDays} \u0434\u043D. \u043D\u0430\u0437\u0430\u0434`;
    } else {
      return this.formatDate(date);
    }
  }
  formatDate(date) {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  }
  applyFilters() {
    this.currentPage = 0;
    this.mobilePage = 0;
    this.mobileClients = [];
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { page: 1, size: this.pageSize },
      queryParamsHandling: "merge",
      replaceUrl: true
    });
    this.loadClients();
  }
  onPageChange(page) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { page, size: this.pageSize },
      queryParamsHandling: "merge",
      replaceUrl: true
    });
    const tableContainer = document.querySelector(".table-container");
    if (tableContainer) {
      tableContainer.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
  onPageSizeChange() {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { page: 1, size: this.pageSize },
      queryParamsHandling: "merge",
      replaceUrl: true
    });
  }
  getTotalPages() {
    return Math.ceil(this.totalClientsFound / this.pageSize);
  }
  get Math() {
    return Math;
  }
  // Legacy methods kept for compatibility but not used
  formatDateForInput(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }
  formatAmount(amount) {
    return amount.toLocaleString("ru-RU");
  }
  getInitials(client) {
    if (client.type === "business") {
      return client.firstName.substring(0, 2).toUpperCase();
    }
    const firstInitial = client.firstName.charAt(0) || "";
    const lastInitial = client.lastName ? client.lastName.charAt(0) : "";
    return `${firstInitial}${lastInitial}`.toUpperCase();
  }
  addTagFilter(tag) {
    if (!this.selectedTags.includes(tag)) {
      this.selectedTags.push(tag);
    }
    this.tagSearchInput = "";
    this.showTagDropdown = false;
  }
  removeTagFilter(index) {
    this.selectedTags.splice(index, 1);
  }
  filterAvailableTags() {
  }
  getAvailableTagsForFilter() {
    const search = this.tagSearchInput.toLowerCase();
    return this.allTags.filter((tag) => !this.selectedTags.includes(tag) && (search === "" || tag.toLowerCase().includes(search)));
  }
  hasActiveFilters() {
    return this.searchName.trim() !== "" || this.searchPhone.trim() !== "" || this.searchEmail.trim() !== "" || this.dateFrom !== "" || this.dateTo !== "" || this.selectedTags.length > 0 || this.filterType !== "all";
  }
  clearFilters() {
    this.searchName = "";
    this.searchPhone = "";
    this.searchEmail = "";
    this.dateFrom = "";
    this.dateTo = "";
    this.selectedTags = [];
    this.tagSearchInput = "";
    this.filterType = "all";
    this.sortField = "lastVisit";
    this.sortDirection = "desc";
    this.currentPage = 0;
    this.mobilePage = 0;
    this.mobileClients = [];
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { page: 1, size: this.pageSize },
      queryParamsHandling: "merge",
      replaceUrl: true
    });
    this.loadClients();
  }
  // Create client modal methods
  openCreateClientModal() {
    this.showCreateClientModal = true;
  }
  onClientCreated(client) {
    this.toastService.success(`\u041A\u043B\u0438\u0435\u043D\u0442 ${client.name} \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0441\u043E\u0437\u0434\u0430\u043D!`);
    this.loadDashboardData();
    this.loadClients();
  }
  static \u0275fac = function ClientsPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ClientsPageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClientsPageComponent, selectors: [["app-clients-page"]], decls: 5, vars: 3, consts: [["mobileCardsContainer", ""], [1, "page-wrapper"], [1, "clients-container"], ["class", "page-loading-container", 4, "ngIf"], [4, "ngIf"], [3, "visibleChange", "clientCreated", "visible"], [1, "page-loading-container"], ["type", "logo", "size", "large", 3, "visible", "overlay"], [1, "page-header-actions"], ["buttonType", "primary", "size", "medium", 3, "onClick"], ["viewBox", "0 0 24 24", "fill", "none", 1, "create-client-icon"], ["d", "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["cx", "8.5", "cy", "7", "r", "4", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M20 8v6M23 11h-6", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "dashboard-grid"], [1, "dashboard-card"], [1, "card-icon", "total-clients"], ["viewBox", "0 0 24 24", "fill", "none"], ["d", "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2", "stroke", "currentColor", "stroke-width", "1.5"], ["cx", "9", "cy", "7", "r", "4", "stroke", "currentColor", "stroke-width", "1.5"], ["d", "M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75", "stroke", "currentColor", "stroke-width", "1.5"], [1, "card-info"], [1, "card-value"], [1, "card-label"], [1, "card-icon", "active-clients"], ["x", "3", "y", "4", "width", "18", "height", "18", "rx", "2", "stroke", "currentColor", "stroke-width", "1.5"], ["d", "M16 2v4M8 2v4M3 10h18", "stroke", "currentColor", "stroke-width", "1.5"], ["d", "M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], [1, "card-icon", "total-revenue"], ["d", "M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6", "stroke", "currentColor", "stroke-width", "1.5"], [1, "card-icon", "total-bonuses"], ["d", "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z", "stroke", "currentColor", "stroke-width", "1.5"], [1, "filters-section"], [1, "filters-row"], [1, "filter-group", "search-group"], [1, "search-input-wrapper"], ["viewBox", "0 0 24 24", "fill", "none", 1, "search-icon"], ["cx", "11", "cy", "11", "r", "8", "stroke", "currentColor", "stroke-width", "1.5"], ["d", "M21 21l-4.35-4.35", "stroke", "currentColor", "stroke-width", "1.5"], ["type", "text", "placeholder", "\u041F\u043E\u0438\u0441\u043A \u043F\u043E \u0438\u043C\u0435\u043D\u0438...", 1, "filter-input", 3, "ngModelChange", "keydown.enter", "ngModel"], [1, "filter-group"], ["d", "M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z", "stroke", "currentColor", "stroke-width", "1.5"], ["type", "text", "placeholder", "\u041F\u043E\u0438\u0441\u043A \u043F\u043E \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0443...", 1, "filter-input", 3, "ngModelChange", "keydown.enter", "ngModel"], ["d", "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z", "stroke", "currentColor", "stroke-width", "1.5"], ["d", "M22 6l-10 7L2 6", "stroke", "currentColor", "stroke-width", "1.5"], ["type", "text", "placeholder", "\u041F\u043E\u0438\u0441\u043A \u043F\u043E email...", 1, "filter-input", 3, "ngModelChange", "keydown.enter", "ngModel"], [1, "filter-group", "date-filter"], [1, "filter-label"], [1, "date-inputs"], ["type", "date", "placeholder", "\u0414\u0414 \u041C\u041C \u0413\u0413\u0413\u0413", 1, "date-input", 3, "ngModelChange", "ngModel"], [1, "date-separator"], [1, "filter-group", "tags-filter"], [1, "tags-select-wrapper"], [1, "selected-tags"], ["class", "selected-tag", 4, "ngFor", "ngForOf"], ["type", "text", "placeholder", "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0442\u044D\u0433...", 1, "tag-input", 3, "ngModelChange", "keydown.enter", "focus", "input", "ngModel"], ["class", "tag-dropdown", 4, "ngIf"], [1, "filter-group", "sort-group"], [1, "sort-select", 3, "ngModelChange", "ngModel"], ["value", "name"], ["value", "lastVisit"], ["value", "createdAt"], [1, "sort-direction-btn", 3, "click"], ["d", "M12 5v14M19 12l-7 7-7-7", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "filter-group", "type-filter"], [1, "type-buttons"], [1, "type-btn", 3, "click"], [1, "filters-footer"], [1, "button-group"], ["buttonType", "danger-outline", "size", "medium", 3, "onClick", 4, "ngIf"], ["buttonType", "primary-outline", "size", "medium", 3, "onClick"], [1, "results-info"], [1, "results-count"], [1, "table-and-pagination-wrapper"], [1, "table-container", "desktop-view"], [1, "clients-table"], [1, "th-client"], [1, "th-contact"], [1, "th-tags"], [1, "th-stats"], [1, "th-bonuses"], [1, "th-date"], [1, "th-actions"], ["class", "client-row", 4, "ngFor", "ngForOf"], [1, "mobile-cards-container", "mobile-view", 3, "scroll"], ["class", "client-card", 3, "routerLink", 4, "ngFor", "ngForOf"], ["class", "mobile-loading", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "pagination-container desktop-view", 4, "ngIf"], [1, "selected-tag"], [1, "remove-tag", 3, "click"], [1, "tag-dropdown"], ["class", "tag-option", 3, "click", 4, "ngFor", "ngForOf"], [1, "tag-option", 3, "click"], ["buttonType", "danger-outline", "size", "medium", 3, "onClick"], ["d", "M18 6L6 18M6 6l12 12", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], [1, "client-row"], [1, "td-client"], [1, "client-cell"], [1, "client-avatar"], [1, "client-info"], [1, "client-name-link", 3, "routerLink"], [1, "client-name"], [1, "client-type"], ["viewBox", "0 0 24 24", "fill", "none", 4, "ngIf"], [1, "td-contact"], [1, "contact-info"], [1, "contact-phone"], [1, "contact-email"], [1, "td-tags"], [1, "tags-list"], ["class", "tag", 4, "ngFor", "ngForOf"], ["class", "tag more", 4, "ngIf"], [1, "td-stats"], [1, "stats-info"], [1, "stat-main"], [1, "stat-secondary"], [1, "td-bonuses"], [1, "bonus-info"], [1, "bonus-balance"], [1, "bonus-used"], [1, "td-date"], [1, "date-text"], [1, "td-actions"], [1, "actions-cell"], [1, "action-link", 3, "routerLink"], ["iconButtonType", "view", "size", "small", "tooltip", "\u041F\u0440\u043E\u0441\u043C\u043E\u0442\u0440"], ["d", "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z", "stroke", "currentColor", "stroke-width", "1.5"], ["cx", "12", "cy", "12", "r", "3", "stroke", "currentColor", "stroke-width", "1.5"], ["d", "M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z", "stroke", "currentColor", "stroke-width", "1.5"], ["d", "M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2", "stroke", "currentColor", "stroke-width", "1.5"], ["d", "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2", "stroke", "currentColor", "stroke-width", "1.5"], ["cx", "12", "cy", "7", "r", "4", "stroke", "currentColor", "stroke-width", "1.5"], [1, "tag"], [1, "tag", "more"], [1, "client-card", 3, "routerLink"], [1, "card-header"], [1, "card-avatar"], [1, "card-header-info"], [1, "card-name"], [1, "card-phone"], [1, "card-type-badge"], [1, "card-body"], ["class", "card-tags", 4, "ngIf"], [1, "card-stats"], [1, "card-stat-item"], [1, "stat-label"], [1, "stat-value", "bonus"], [1, "stat-value"], [1, "card-tags"], ["class", "card-tag", 4, "ngFor", "ngForOf"], ["class", "card-tag more", 4, "ngIf"], [1, "card-tag"], [1, "card-tag", "more"], [1, "mobile-loading"], [1, "empty-state"], ["buttonType", "primary", "size", "small", 3, "onClick"], [1, "pagination-container", "desktop-view"], [1, "pagination-left"], [1, "pagination-info"], [1, "page-size-filter-section"], [1, "page-size-label"], [1, "page-size-select", 3, "ngModelChange", "change", "ngModel"], [3, "value"], ["class", "pagination-right", 4, "ngIf"], [1, "pagination-right"], [3, "pageChange", "currentPage", "totalPages"]], template: function ClientsPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2);
      \u0275\u0275template(2, ClientsPageComponent_div_2_Template, 2, 2, "div", 3)(3, ClientsPageComponent_div_3_Template, 146, 28, "div", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "app-create-client-modal", 5);
      \u0275\u0275twoWayListener("visibleChange", function ClientsPageComponent_Template_app_create_client_modal_visibleChange_4_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.showCreateClientModal, $event) || (ctx.showCreateClientModal = $event);
        return $event;
      });
      \u0275\u0275listener("clientCreated", function ClientsPageComponent_Template_app_create_client_modal_clientCreated_4_listener($event) {
        return ctx.onClientCreated($event);
      });
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isLoadingDashboard || ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoadingDashboard && !ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("visible", ctx.showCreateClientModal);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, RouterModule, RouterLink, ButtonComponent, IconButtonComponent, PaginationComponent, LoaderComponent, CreateClientModalComponent, PhoneFormatPipe], styles: [`

.page-header-actions[_ngcontent-%COMP%] {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;
}
.page-header-actions[_ngcontent-%COMP%]   app-button[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}
.page-header-actions[_ngcontent-%COMP%]   .create-client-icon[_ngcontent-%COMP%] {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
}
.page-wrapper[_ngcontent-%COMP%] {
  min-height: 100%;
  margin: -2rem;
  padding: 2rem;
}
.clients-container[_ngcontent-%COMP%] {
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  min-height: 400px;
}
.page-loading-container[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  width: 100%;
}
.dashboard-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin-bottom: 1.5rem;
}
.dashboard-card[_ngcontent-%COMP%] {
  background: white;
  border-radius: 16px;
  padding: 1.25rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  border: 1px solid #e5e7eb;
}
.card-icon[_ngcontent-%COMP%] {
  width: 50px;
  height: 50px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.card-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  width: 24px;
  height: 24px;
}
.card-icon.total-clients[_ngcontent-%COMP%] {
  // background-color:rgba(37, 99, 235, 0.1);
  color: rgb(0, 0, 0);
  background-color: #f3f4f6;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
}
.card-icon.active-clients[_ngcontent-%COMP%] {
  // background-color: rgba(5, 150, 105, 0.1);
  color: rgb(0, 0, 0);
  background-color: #f3f4f6;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
}
.card-icon.total-revenue[_ngcontent-%COMP%] {
  // background-color: rgba(217, 119, 6, 0.1);
  color: rgb(0, 0, 0);
  background-color: #f3f4f6;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
}
.card-icon.total-bonuses[_ngcontent-%COMP%] {
  // background-color: rgba(219, 39, 119, 0.1);
  color: rgb(0, 0, 0);
  background-color: #f3f4f6;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
}
.card-info[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
}
.card-value[_ngcontent-%COMP%] {
  font-size: 1.35rem;
  font-weight: 700;
  color: #1f2937;
}
.card-label[_ngcontent-%COMP%] {
  font-size: 0.8rem;
  color: #64748b;
}
.filters-section[_ngcontent-%COMP%] {
  background: white;
  border-radius: 16px;
  padding: 1.25rem;
  margin-bottom: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  border: 1px solid #e5e7eb;
}
.filters-row[_ngcontent-%COMP%] {
  display: flex;
  gap: 1rem;
  align-items: flex-end;
  flex-wrap: wrap;
}
.filters-row[_ngcontent-%COMP%]    + .filters-row[_ngcontent-%COMP%] {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #f1f5f9;
}
.filter-group[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}
.filter-label[_ngcontent-%COMP%] {
  font-size: 0.75rem;
  font-weight: 600;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.search-group[_ngcontent-%COMP%] {
  flex: 1;
  min-width: 200px;
}
.search-input-wrapper[_ngcontent-%COMP%] {
  position: relative;
  display: flex;
  align-items: center;
}
.search-icon[_ngcontent-%COMP%] {
  position: absolute;
  left: 12px;
  width: 18px;
  height: 18px;
  color: #94a3b8;
  pointer-events: none;
}
.filter-input[_ngcontent-%COMP%] {
  width: 100%;
  padding: 0.625rem 0.875rem 0.625rem 2.5rem;
  border: 1.5px solid #e2e8f0;
  border-radius: 10px;
  font-size: 0.9rem;
  background: #f8fafc;
  color: #1f2937;
  transition: all 0.2s;
}
.filter-input[_ngcontent-%COMP%]:hover {
  border-color: #cbd5e1;
}
.filter-input[_ngcontent-%COMP%]:focus {
  outline: none;
  border-color: #22c55e;
  background: white;
  box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.1);
}
.filter-input[_ngcontent-%COMP%]::placeholder {
  color: #94a3b8;
}
.date-filter[_ngcontent-%COMP%] {
  min-width: 280px;
}
.date-inputs[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.date-input[_ngcontent-%COMP%] {
  flex: 1;
  padding: 0.625rem 0.875rem;
  border: 1.5px solid #e2e8f0;
  border-radius: 10px;
  font-size: 0.9rem;
  background: #f8fafc;
  color: #1f2937;
  transition: all 0.2s;
}
.date-input[_ngcontent-%COMP%]:hover {
  border-color: #cbd5e1;
}
.date-input[_ngcontent-%COMP%]:focus {
  outline: none;
  border-color: #22c55e;
  background: white;
  box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.1);
}
.date-separator[_ngcontent-%COMP%] {
  color: #94a3b8;
  font-weight: 500;
  font-size: 0.9rem;
}
.tags-filter[_ngcontent-%COMP%] {
  flex: 1;
  min-width: 250px;
}
.tags-select-wrapper[_ngcontent-%COMP%] {
  position: relative;
}
.selected-tags[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding: 6px 10px;
  border: 1.5px solid #e2e8f0;
  border-radius: 10px;
  background: #f8fafc;
  min-height: 38px;
  align-items: center;
}
.selected-tag[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 2px 8px;
  background: #dcfce7;
  color: #16A34A;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
}
.remove-tag[_ngcontent-%COMP%] {
  background: none;
  border: none;
  color: #16A34A;
  cursor: pointer;
  font-size: 1rem;
  line-height: 1;
  padding: 0;
}
.remove-tag[_ngcontent-%COMP%]:hover {
  color: #dc2626;
}
.tag-input[_ngcontent-%COMP%] {
  flex: 1;
  min-width: 100px;
  border: none;
  background: transparent;
  font-size: 0.85rem;
  outline: none;
  color: #1f2937;
}
.tag-input[_ngcontent-%COMP%]::placeholder {
  color: #94a3b8;
}
.tag-dropdown[_ngcontent-%COMP%] {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  margin-top: 4px;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 8px;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  max-height: 120px;
  overflow-y: auto;
  z-index: 50;
}
.tag-option[_ngcontent-%COMP%] {
  padding: 4px 10px;
  background: #f1f5f9;
  border: 1px solid #e2e8f0;
  color: #475569;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s;
}
.tag-option[_ngcontent-%COMP%]:hover {
  background: #dcfce7;
  border-color: #bbf7d0;
  color: #16A34A;
}
.sort-group[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
}
.sort-group[_ngcontent-%COMP%]   .filter-label[_ngcontent-%COMP%] {
  margin-bottom: 0;
}
.sort-select[_ngcontent-%COMP%] {
  padding: 0.5rem 2rem 0.5rem 0.75rem;
  border: 1.5px solid #e2e8f0;
  border-radius: 8px;
  font-size: 0.85rem;
  background: #f8fafc;
  color: #1f2937;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.5rem center;
}
.sort-select[_ngcontent-%COMP%]:focus {
  outline: none;
  border-color: #22c55e;
}
.sort-direction-btn[_ngcontent-%COMP%] {
  width: 36px;
  height: 36px;
  border: 1.5px solid #e2e8f0;
  border-radius: 8px;
  background: #f8fafc;
  color: #64748b;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}
.sort-direction-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  width: 18px;
  height: 18px;
  transition: transform 0.2s;
}
.sort-direction-btn[_ngcontent-%COMP%]   svg.desc[_ngcontent-%COMP%] {
  transform: rotate(180deg);
}
.sort-direction-btn[_ngcontent-%COMP%]:hover {
  border-color: #22c55e;
  color: #16A34A;
}
.type-filter[_ngcontent-%COMP%] {
  flex-direction: row;
  align-items: center;
}
.type-buttons[_ngcontent-%COMP%] {
  display: flex;
  border: 1.5px solid #e2e8f0;
  border-radius: 8px;
  overflow: hidden;
}
.type-btn[_ngcontent-%COMP%] {
  padding: 0.5rem 0.875rem;
  border: none;
  background: #f8fafc;
  color: #64748b;
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s;
}
.type-btn[_ngcontent-%COMP%]:not(:last-child) {
  border-right: 1px solid #e2e8f0;
}
.type-btn.active[_ngcontent-%COMP%] {
  background: #16A34A;
  color: white;
}
.type-btn[_ngcontent-%COMP%]:hover:not(.active) {
  background: #f1f5f9;
}
.filters-footer[_ngcontent-%COMP%] {
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #f1f5f9;
}
.button-group[_ngcontent-%COMP%] {
  display: flex;
  gap: 2rem;
}
.button-group[_ngcontent-%COMP%]   app-button[_ngcontent-%COMP%] {
  width: 110px;
}
.button-group[_ngcontent-%COMP%]   app-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  width: 14px;
  height: 14px;
}
.results-info[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}
.results-count[_ngcontent-%COMP%] {
  font-size: 0.85rem;
  color: #64748b;
  font-weight: 500;
}
.table-and-pagination-wrapper[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 0;
}
.table-container[_ngcontent-%COMP%] {
  background: white;
  border-radius: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  border: 1px solid #e5e7eb;
  overflow: hidden;
}
.clients-table[_ngcontent-%COMP%] {
  width: 100%;
  border-collapse: collapse;
}
.clients-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {
  padding: 1rem;
  text-align: left;
  font-size: 0.75rem;
  font-weight: 600;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  background: #f8fafc;
  border-bottom: 1px solid #e5e7eb;
}
.clients-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {
  padding: 1rem;
  border-bottom: 1px solid #f1f5f9;
}
.client-row[_ngcontent-%COMP%] {
  transition: background 0.15s;
}
.client-row[_ngcontent-%COMP%]:hover {
  background: #f8fafc;
}
.client-row.inactive[_ngcontent-%COMP%] {
  opacity: 0.6;
}
.client-row[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {
  border-bottom: none;
}
.client-cell[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.client-avatar[_ngcontent-%COMP%] {
  width: 42px;
  height: 42px;
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
  font-size: 0.85rem;
  font-weight: 600;
  flex-shrink: 0;
}
.client-avatar.business[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      135deg,
      #1d4ed8,
      #3b82f6);
}
.client-info[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}
.client-name-link[_ngcontent-%COMP%] {
  text-decoration: none;
  color: inherit;
  transition: color 0.15s;
}
.client-name-link[_ngcontent-%COMP%]:hover {
  color: #16A34A;
}
.client-name[_ngcontent-%COMP%] {
  font-size: 0.9rem;
  font-weight: 600;
  color: #1f2937;
  cursor: pointer;
}
.client-name-link[_ngcontent-%COMP%]:hover   .client-name[_ngcontent-%COMP%] {
  color: #16A34A;
}
.client-type[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.75rem;
  color: #64748b;
}
.client-type[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  width: 12px;
  height: 12px;
}
.contact-info[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}
.contact-phone[_ngcontent-%COMP%] {
  font-size: 0.85rem;
  color: #1f2937;
  font-weight: 500;
}
.contact-email[_ngcontent-%COMP%] {
  font-size: 0.8rem;
  color: #64748b;
}
.tags-list[_ngcontent-%COMP%] {
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
}
.tag[_ngcontent-%COMP%] {
  padding: 2px 8px;
  background: #dcfce7;
  color: #16A34A;
  border-radius: 10px;
  font-size: 0.7rem;
  font-weight: 600;
}
.tag.more[_ngcontent-%COMP%] {
  background: #f1f5f9;
  color: #64748b;
}
.stats-info[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}
.stat-main[_ngcontent-%COMP%] {
  font-size: 0.9rem;
  font-weight: 600;
  color: #16A34A;
}
.stat-secondary[_ngcontent-%COMP%] {
  font-size: 0.75rem;
  color: #64748b;
}
.bonus-info[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}
.bonus-balance[_ngcontent-%COMP%] {
  font-size: 0.9rem;
  font-weight: 600;
  color: #d97706;
}
.bonus-used[_ngcontent-%COMP%] {
  font-size: 0.75rem;
  color: #94a3b8;
}
.date-text[_ngcontent-%COMP%] {
  font-size: 0.85rem;
  color: #64748b;
}
.actions-cell[_ngcontent-%COMP%] {
  display: flex;
  gap: 0.5rem;
}
.action-link[_ngcontent-%COMP%] {
  display: inline-flex;
  text-decoration: none;
  color: inherit;
}
.empty-state[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  color: #94a3b8;
}
.empty-state[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  width: 48px;
  height: 48px;
  margin-bottom: 1rem;
}
.empty-state[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
  font-size: 1rem;
  margin-bottom: 1rem;
}
@media (max-width: 1200px) {
  .dashboard-grid[_ngcontent-%COMP%] {
    grid-template-columns: repeat(2, 1fr);
  }
}
.mobile-cards-container[_ngcontent-%COMP%] {
  display: none;
  flex-direction: column;
  gap: 0.75rem;
  max-height: calc(100vh - 400px);
  overflow-y: auto;
  padding-bottom: 1rem;
}
.client-card[_ngcontent-%COMP%] {
  background: white;
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
  cursor: pointer;
  transition: all 0.2s;
  text-decoration: none;
  color: inherit;
}
.client-card[_ngcontent-%COMP%]:active {
  transform: scale(0.98);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}
.card-header[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
}
.card-avatar[_ngcontent-%COMP%] {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 0.875rem;
  color: white;
  background:
    linear-gradient(
      135deg,
      #16A34A 0%,
      #15803d 100%);
  flex-shrink: 0;
}
.card-avatar.business[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      135deg,
      #2563eb 0%,
      #1e40af 100%);
}
.card-header-info[_ngcontent-%COMP%] {
  flex: 1;
  min-width: 0;
}
.card-name[_ngcontent-%COMP%] {
  font-size: 1rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.25rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.card-phone[_ngcontent-%COMP%] {
  font-size: 0.875rem;
  color: #64748b;
}
.card-type-badge[_ngcontent-%COMP%] {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: #f0fdf4;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #16A34A;
  flex-shrink: 0;
}
.card-type-badge.business[_ngcontent-%COMP%] {
  background: #eff6ff;
  color: #2563eb;
}
.card-type-badge[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  width: 18px;
  height: 18px;
}
.card-body[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.card-tags[_ngcontent-%COMP%] {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}
.card-tag[_ngcontent-%COMP%] {
  padding: 4px 10px;
  background: #dcfce7;
  color: #16A34A;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
}
.card-tag.more[_ngcontent-%COMP%] {
  background: #f1f5f9;
  color: #64748b;
}
.card-stats[_ngcontent-%COMP%] {
  display: flex;
  gap: 1rem;
  padding-top: 0.5rem;
  border-top: 1px solid #e5e7eb;
}
.card-stat-item[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}
.card-stat-item[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {
  font-size: 0.75rem;
  color: #64748b;
}
.card-stat-item[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {
  font-size: 0.875rem;
  font-weight: 600;
  color: #1f2937;
}
.card-stat-item[_ngcontent-%COMP%]   .stat-value.bonus[_ngcontent-%COMP%] {
  color: #d97706;
}
.mobile-loading[_ngcontent-%COMP%] {
  display: flex;
  justify-content: center;
  padding: 1rem;
}
@media (max-width: 768px) {
  .page-wrapper[_ngcontent-%COMP%] {
    margin: -1rem;
    padding: 1rem;
  }
  .dashboard-grid[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
  }
  .filters-row[_ngcontent-%COMP%] {
    flex-direction: column;
  }
  .filter-group[_ngcontent-%COMP%] {
    width: 100%;
  }
  .desktop-view[_ngcontent-%COMP%] {
    display: none !important;
  }
  .mobile-view[_ngcontent-%COMP%] {
    display: flex !important;
  }
  .mobile-cards-container[_ngcontent-%COMP%] {
    max-height: calc(100vh - 300px);
  }
}
@media (min-width: 769px) {
  .mobile-view[_ngcontent-%COMP%] {
    display: none !important;
  }
  .desktop-view[_ngcontent-%COMP%] {
    display: block !important;
  }
  .pagination-container.desktop-view[_ngcontent-%COMP%] {
    display: flex !important;
  }
}
.pagination-container[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  gap: 1rem;
  margin-top: 1rem;
  box-sizing: border-box;
}
.pagination-left[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  gap: 1.5rem;
  flex-shrink: 0;
}
.pagination-right[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  margin-left: auto;
}
.pagination-info[_ngcontent-%COMP%] {
  font-size: 0.875rem;
  color: #64748b;
  font-weight: 500;
}
.page-size-filter-section[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.page-size-label[_ngcontent-%COMP%] {
  font-size: 0.875rem;
  font-weight: 600;
  color: #475569;
}
.page-size-select[_ngcontent-%COMP%] {
  padding: 8px 12px;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  font-size: 0.875rem;
  background: white;
  color: #1f2937;
  cursor: pointer;
  outline: none;
  transition: all 0.2s;
}
.page-size-select[_ngcontent-%COMP%]:hover {
  border-color: #94a3b8;
}
.page-size-select[_ngcontent-%COMP%]:focus {
  border-color: #16A34A;
  box-shadow: 0 0 0 3px rgba(22, 163, 74, 0.1);
}
.loading-container[_ngcontent-%COMP%] {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem;
}
/*# sourceMappingURL=clients-page.component.css.map */`] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClientsPageComponent, [{
    type: Component,
    args: [{ selector: "app-clients-page", standalone: true, imports: [CommonModule, FormsModule, RouterModule, ButtonComponent, IconButtonComponent, PaginationComponent, LoaderComponent, CreateClientModalComponent, PhoneFormatPipe], template: `
    <div class="page-wrapper">
      <div class="clients-container">
        <!-- Loading State -->
        <div class="page-loading-container" *ngIf="isLoadingDashboard || isLoading">
          <app-loader [visible]="true" [overlay]="false" type="logo" size="large"></app-loader>
        </div>
        
        <div *ngIf="!isLoadingDashboard && !isLoading">
        
        <!-- Header with Create Button -->
        <div class="page-header-actions">
          <app-button 
            buttonType="primary" 
            size="medium" 
            (onClick)="openCreateClientModal()">
            <svg viewBox="0 0 24 24" fill="none" class="create-client-icon">
              <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <circle cx="8.5" cy="7" r="4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M20 8v6M23 11h-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            \u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043A\u043B\u0438\u0435\u043D\u0442\u0430
          </app-button>
        </div>

        <!-- Dashboard Cards -->
        <div class="dashboard-grid">
          <div class="dashboard-card">
            <div class="card-icon total-clients">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" stroke-width="1.5"/>
                <circle cx="9" cy="7" r="4" stroke="currentColor" stroke-width="1.5"/>
                <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" stroke-width="1.5"/>
              </svg>
            </div>
            <div class="card-info">
              <span class="card-value">{{ totalClients }}</span>
              <span class="card-label">\u0412\u0441\u0435\u0433\u043E \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432</span>
            </div>
          </div>
          <div class="dashboard-card">
            <div class="card-icon active-clients">
              <svg viewBox="0 0 24 24" fill="none">
                <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" stroke-width="1.5"/>
                <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" stroke-width="1.5"/>
                <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </div>
            <div class="card-info">
              <span class="card-value">{{ activeClientsThisMonth }}</span>
              <span class="card-label">\u0410\u043A\u0442\u0438\u0432\u043D\u044B\u0445 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432 \u0437\u0430 \u043C\u0435\u0441\u044F\u0446</span>
            </div>
          </div>
          <div class="dashboard-card">
            <div class="card-icon total-revenue">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" stroke="currentColor" stroke-width="1.5"/>
              </svg>
            </div>
            <div class="card-info">
              <span class="card-value">{{ formatAmount(totalRevenue) }} \u20B8</span>
              <span class="card-label">\u041E\u0431\u0449\u0438\u0439 \u0434\u043E\u0445\u043E\u0434</span>
            </div>
          </div>
          <div class="dashboard-card">
            <div class="card-icon total-bonuses">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" stroke-width="1.5"/>
              </svg>
            </div>
            <div class="card-info">
              <span class="card-value">{{ formatAmount(totalBonusesGranted) }}</span>
              <span class="card-label">\u0411\u043E\u043D\u0443\u0441\u043E\u0432 \u0432 \u043E\u0431\u043E\u0440\u043E\u0442\u0435</span>
            </div>
          </div>
        </div>

        <!-- Filters Section -->
        <div class="filters-section">
          <div class="filters-row">
            <!-- Search by name -->
            <div class="filter-group search-group">
              <div class="search-input-wrapper">
                <svg viewBox="0 0 24 24" fill="none" class="search-icon">
                  <circle cx="11" cy="11" r="8" stroke="currentColor" stroke-width="1.5"/>
                  <path d="M21 21l-4.35-4.35" stroke="currentColor" stroke-width="1.5"/>
                </svg>
                <input 
                  type="text" 
                  [(ngModel)]="searchName"
                  (keydown.enter)="applyFilters()"
                  placeholder="\u041F\u043E\u0438\u0441\u043A \u043F\u043E \u0438\u043C\u0435\u043D\u0438..."
                  class="filter-input">
              </div>
            </div>

            <!-- Search by phone -->
            <div class="filter-group">
              <div class="search-input-wrapper">
                <svg viewBox="0 0 24 24" fill="none" class="search-icon">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" stroke-width="1.5"/>
                </svg>
                <input 
                  type="text" 
                  [(ngModel)]="searchPhone"
                  (keydown.enter)="applyFilters()"
                  placeholder="\u041F\u043E\u0438\u0441\u043A \u043F\u043E \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0443..."
                  class="filter-input">
              </div>
            </div>

            <!-- Search by email -->
            <div class="filter-group">
              <div class="search-input-wrapper">
                <svg viewBox="0 0 24 24" fill="none" class="search-icon">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" stroke-width="1.5"/>
                  <path d="M22 6l-10 7L2 6" stroke="currentColor" stroke-width="1.5"/>
                </svg>
                <input 
                  type="text" 
                  [(ngModel)]="searchEmail"
                  (keydown.enter)="applyFilters()"
                  placeholder="\u041F\u043E\u0438\u0441\u043A \u043F\u043E email..."
                  class="filter-input">
              </div>
            </div>

            <!-- Date filter -->
            <div class="filter-group date-filter">
              <label class="filter-label">\u041F\u0435\u0440\u0438\u043E\u0434 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0433\u043E \u0432\u0438\u0437\u0438\u0442\u0430:</label>
              <div class="date-inputs">
                <input 
                  type="date" 
                  [(ngModel)]="dateFrom" 
                  placeholder="\u0414\u0414 \u041C\u041C \u0413\u0413\u0413\u0413"
                  class="date-input">
                <span class="date-separator">\u2014</span>
                <input 
                  type="date" 
                  [(ngModel)]="dateTo" 
                  placeholder="\u0414\u0414 \u041C\u041C \u0413\u0413\u0413\u0413"
                  class="date-input">
              </div>
            </div>
          </div>

          <div class="filters-row">
            <!-- Tags filter -->
            <div class="filter-group tags-filter">
              <label class="filter-label">\u0424\u0438\u043B\u044C\u0442\u0440 \u043F\u043E \u0442\u044D\u0433\u0430\u043C:</label>
              <div class="tags-select-wrapper">
                <div class="selected-tags">
                  <span class="selected-tag" *ngFor="let tag of selectedTags; let i = index">
                    {{ tag }}
                    <button class="remove-tag" (click)="removeTagFilter(i)">\xD7</button>
                  </span>
                  <input 
                    type="text" 
                    [(ngModel)]="tagSearchInput"
                    (keydown.enter)="applyFilters()"
                    (focus)="showTagDropdown = true"
                    (input)="filterAvailableTags()"
                    placeholder="\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0442\u044D\u0433..."
                    class="tag-input">
                </div>
                <div class="tag-dropdown" *ngIf="showTagDropdown && getAvailableTagsForFilter().length > 0">
                  <button 
                    class="tag-option" 
                    *ngFor="let tag of getAvailableTagsForFilter()"
                    (click)="addTagFilter(tag)">
                    {{ tag }}
                  </button>
                </div>
              </div>
            </div>

            <!-- Sort -->
            <div class="filter-group sort-group">
              <label class="filter-label">\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430:</label>
              <select [(ngModel)]="sortField" class="sort-select">
                <option value="name">\u041F\u043E \u0438\u043C\u0435\u043D\u0438</option>
                <option value="lastVisit">\u041F\u043E \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u043C\u0443 \u0432\u0438\u0437\u0438\u0442\u0443</option>
                <option value="createdAt">\u041F\u043E \u0434\u0430\u0442\u0435 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438</option>
              </select>
              <button class="sort-direction-btn" (click)="sortDirection = sortDirection === 'asc' ? 'desc' : 'asc'">
                <svg viewBox="0 0 24 24" fill="none" [class.desc]="sortDirection === 'desc'">
                  <path d="M12 5v14M19 12l-7 7-7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
            </div>

            <!-- Client type filter -->
            <div class="filter-group type-filter">
              <label class="filter-label">\u0422\u0438\u043F:</label>
              <div class="type-buttons">
                <button 
                  class="type-btn" 
                  [class.active]="filterType === 'all'"
                  (click)="filterType = 'all'">\u0412\u0441\u0435</button>
                <button 
                  class="type-btn" 
                  [class.active]="filterType === 'individual'"
                  (click)="filterType = 'individual'">\u0424\u0438\u0437. \u043B\u0438\u0446\u0430</button>
                <button 
                  class="type-btn" 
                  [class.active]="filterType === 'business'"
                  (click)="filterType = 'business'">\u0411\u0438\u0437\u043D\u0435\u0441</button>
              </div>
            </div>

          </div>

          <!-- Filter Actions Footer -->
          <div class="filters-footer">
            <div class="button-group">
              <app-button 
                buttonType="danger-outline" 
                size="medium" 
                (onClick)="clearFilters()"
                *ngIf="hasActiveFilters()">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
                \u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C
              </app-button>
              <app-button 
                buttonType="primary-outline" 
                size="medium" 
                (onClick)="applyFilters()">
                <svg viewBox="0 0 24 24" fill="none">
                  <circle cx="11" cy="11" r="8" stroke="currentColor" stroke-width="1.5"/>
                  <path d="M21 21l-4.35-4.35" stroke="currentColor" stroke-width="1.5"/>
                </svg>
                \u041F\u043E\u0438\u0441\u043A
              </app-button>
            </div>
          </div>
        </div>

        <!-- Results count -->
        <div class="results-info">
          <span class="results-count">\u041D\u0430\u0439\u0434\u0435\u043D\u043E: {{ totalClientsFound }} \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432</span>
        </div>

        <!-- Clients Table with Pagination (same layout as payments page) -->
        <div class="table-and-pagination-wrapper">
          <!-- Desktop Table View -->
          <div class="table-container desktop-view">
            <table class="clients-table">
              <thead>
                <tr>
                  <th class="th-client">\u041A\u043B\u0438\u0435\u043D\u0442</th>
                  <th class="th-contact">\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B</th>
                  <th class="th-tags">\u0422\u044D\u0433\u0438</th>
                  <th class="th-stats">\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430</th>
                  <th class="th-bonuses">\u0411\u043E\u043D\u0443\u0441\u044B</th>
                  <th class="th-date">\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439 \u0432\u0438\u0437\u0438\u0442</th>
                  <th class="th-actions">\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let client of clients" class="client-row">
                <td class="td-client">
                  <div class="client-cell">
                    <div class="client-avatar" [class.business]="client.type === 'business'">
                      {{ getInitials(client) }}
                    </div>
                    <div class="client-info">
                      <a [routerLink]="['/clients', client.id]" class="client-name-link">
                        <span class="client-name">{{ client.firstName }}{{ client.lastName ? ' ' + client.lastName : '' }}</span>
                      </a>
                      <span class="client-type">
                        <svg viewBox="0 0 24 24" fill="none" *ngIf="client.type === 'business'">
                          <path d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z" stroke="currentColor" stroke-width="1.5"/>
                          <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" stroke="currentColor" stroke-width="1.5"/>
                        </svg>
                        <svg viewBox="0 0 24 24" fill="none" *ngIf="client.type === 'individual'">
                          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" stroke="currentColor" stroke-width="1.5"/>
                          <circle cx="12" cy="7" r="4" stroke="currentColor" stroke-width="1.5"/>
                        </svg>
                        {{ client.type === 'business' ? '\u0411\u0438\u0437\u043D\u0435\u0441' : '\u0424\u0438\u0437. \u043B\u0438\u0446\u043E' }}
                      </span>
                    </div>
                  </div>
                </td>
                <td class="td-contact">
                  <div class="contact-info">
                    <span class="contact-phone">{{ client.phone | phoneFormat }}</span>
                    <span class="contact-email">{{ client.email || '\u2014' }}</span>
                  </div>
                </td>
                <td class="td-tags">
                  <div class="tags-list">
                    <span class="tag" *ngFor="let tag of client.tags.slice(0, 2)">{{ tag }}</span>
                    <span class="tag more" *ngIf="client.tags.length > 2">+{{ client.tags.length - 2 }}</span>
                  </div>
                </td>
                <td class="td-stats">
                  <div class="stats-info">
                    <span class="stat-main">{{ formatAmount(client.totalAmount) }} \u20B8</span>
                    <span class="stat-secondary">{{ client.totalTransactions }} \u0442\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u0439</span>
                  </div>
                </td>
                <td class="td-bonuses">
                  <div class="bonus-info">
                    <span class="bonus-balance">{{ formatAmount(client.bonusBalance) }}</span>
                    <span class="bonus-used">\u2212{{ formatAmount(client.bonusUsed) }} \u0438\u0441\u043F.</span>
                  </div>
                </td>
                <td class="td-date">
                  <span class="date-text">{{ client.lastVisit }}</span>
                </td>
                <td class="td-actions">
                  <div class="actions-cell">
                    <a [routerLink]="['/clients', client.id]" class="action-link">
                      <app-icon-button
                        iconButtonType="view"
                        size="small"
                        tooltip="\u041F\u0440\u043E\u0441\u043C\u043E\u0442\u0440">
                        <svg viewBox="0 0 24 24" fill="none">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" stroke-width="1.5"/>
                          <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="1.5"/>
                        </svg>
                      </app-icon-button>
                    </a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          </div>

          <!-- Mobile Card View -->
          <div class="mobile-cards-container mobile-view" 
               (scroll)="onMobileScroll($event)"
               #mobileCardsContainer>
            <div class="client-card" *ngFor="let client of mobileClients" [routerLink]="['/clients', client.id]">
              <div class="card-header">
                <div class="card-avatar" [class.business]="client.type === 'business'">
                  {{ getInitials(client) }}
                </div>
                <div class="card-header-info">
                  <div class="card-name">{{ client.firstName }}{{ client.lastName ? ' ' + client.lastName : '' }}</div>
                  <div class="card-phone">{{ client.phone | phoneFormat }}</div>
                </div>
                <div class="card-type-badge" [class.business]="client.type === 'business'">
                  <svg viewBox="0 0 24 24" fill="none" *ngIf="client.type === 'business'">
                    <path d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z" stroke="currentColor" stroke-width="1.5"/>
                    <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" stroke="currentColor" stroke-width="1.5"/>
                  </svg>
                  <svg viewBox="0 0 24 24" fill="none" *ngIf="client.type === 'individual'">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" stroke="currentColor" stroke-width="1.5"/>
                    <circle cx="12" cy="7" r="4" stroke="currentColor" stroke-width="1.5"/>
                  </svg>
                </div>
              </div>
              <div class="card-body">
                <div class="card-tags" *ngIf="client.tags.length > 0">
                  <span class="card-tag" *ngFor="let tag of client.tags.slice(0, 3)">{{ tag }}</span>
                  <span class="card-tag more" *ngIf="client.tags.length > 3">+{{ client.tags.length - 3 }}</span>
                </div>
                <div class="card-stats">
                  <div class="card-stat-item">
                    <span class="stat-label">\u0411\u043E\u043D\u0443\u0441\u044B</span>
                    <span class="stat-value bonus">{{ formatAmount(client.bonusBalance) }}</span>
                  </div>
                  <div class="card-stat-item">
                    <span class="stat-label">\u041F\u043E\u0442\u0440\u0430\u0447\u0435\u043D\u043E</span>
                    <span class="stat-value">{{ formatAmount(client.totalAmount) }} \u20B8</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="mobile-loading" *ngIf="isLoadingMore">
              <app-loader></app-loader>
            </div>
          </div>

          <div class="empty-state" *ngIf="clients.length === 0 && mobileClients.length === 0">
            <svg viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="8" stroke="currentColor" stroke-width="1.5"/>
              <path d="M21 21l-4.35-4.35" stroke="currentColor" stroke-width="1.5"/>
            </svg>
            <span>\u041A\u043B\u0438\u0435\u043D\u0442\u044B \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u044B</span>
            <app-button buttonType="primary" size="small" (onClick)="clearFilters()">
              \u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u0444\u0438\u043B\u044C\u0442\u0440\u044B
            </app-button>
          </div>

          <!-- Backend Pagination (Desktop only, same as payments page) -->
          <div class="pagination-container desktop-view" *ngIf="!isLoading && totalClientsFound > 0">
            <div class="pagination-left">
              <div class="pagination-info">
                <span>\u041F\u043E\u043A\u0430\u0437\u0430\u043D\u043E {{ (currentPage * pageSize) + 1 }}-{{ Math.min((currentPage + 1) * pageSize, totalClientsFound) }} \u0438\u0437 {{ totalClientsFound }}</span>
              </div>
              <div class="page-size-filter-section">
                <label class="page-size-label">\u0421\u0442\u0440\u043E\u043A \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435:</label>
                <select [(ngModel)]="pageSize" (change)="onPageSizeChange()" class="page-size-select">
                  <option [value]="15">15</option>
                  <option [value]="30">30</option>
                  <option [value]="50">50</option>
                  <option [value]="100">100</option>
                </select>
              </div>
            </div>
            <div class="pagination-right" *ngIf="getTotalPages() > 1">
              <app-pagination
                [currentPage]="currentPage + 1"
                [totalPages]="getTotalPages()"
                (pageChange)="onPageChange($event)">
              </app-pagination>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Create Client Modal -->
    <app-create-client-modal
      [(visible)]="showCreateClientModal"
      (clientCreated)="onClientCreated($event)">
    </app-create-client-modal>
  `, styles: [`/* angular:styles/component:css;3c0c93b12fd0c2b91eec0b8fafb692675ff29fc51a38091c4b87c723b7e21223;/Users/baglan/repo/westwood/westwood-frontend/src/app/features/clients/pages/clients-page/clients-page.component.ts */
.page-header-actions {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;
}
.page-header-actions app-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}
.page-header-actions .create-client-icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
}
.page-wrapper {
  min-height: 100%;
  margin: -2rem;
  padding: 2rem;
}
.clients-container {
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  min-height: 400px;
}
.page-loading-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  width: 100%;
}
.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin-bottom: 1.5rem;
}
.dashboard-card {
  background: white;
  border-radius: 16px;
  padding: 1.25rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  border: 1px solid #e5e7eb;
}
.card-icon {
  width: 50px;
  height: 50px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.card-icon svg {
  width: 24px;
  height: 24px;
}
.card-icon.total-clients {
  // background-color:rgba(37, 99, 235, 0.1);
  color: rgb(0, 0, 0);
  background-color: #f3f4f6;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
}
.card-icon.active-clients {
  // background-color: rgba(5, 150, 105, 0.1);
  color: rgb(0, 0, 0);
  background-color: #f3f4f6;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
}
.card-icon.total-revenue {
  // background-color: rgba(217, 119, 6, 0.1);
  color: rgb(0, 0, 0);
  background-color: #f3f4f6;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
}
.card-icon.total-bonuses {
  // background-color: rgba(219, 39, 119, 0.1);
  color: rgb(0, 0, 0);
  background-color: #f3f4f6;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
}
.card-info {
  display: flex;
  flex-direction: column;
}
.card-value {
  font-size: 1.35rem;
  font-weight: 700;
  color: #1f2937;
}
.card-label {
  font-size: 0.8rem;
  color: #64748b;
}
.filters-section {
  background: white;
  border-radius: 16px;
  padding: 1.25rem;
  margin-bottom: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  border: 1px solid #e5e7eb;
}
.filters-row {
  display: flex;
  gap: 1rem;
  align-items: flex-end;
  flex-wrap: wrap;
}
.filters-row + .filters-row {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #f1f5f9;
}
.filter-group {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}
.filter-label {
  font-size: 0.75rem;
  font-weight: 600;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.search-group {
  flex: 1;
  min-width: 200px;
}
.search-input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}
.search-icon {
  position: absolute;
  left: 12px;
  width: 18px;
  height: 18px;
  color: #94a3b8;
  pointer-events: none;
}
.filter-input {
  width: 100%;
  padding: 0.625rem 0.875rem 0.625rem 2.5rem;
  border: 1.5px solid #e2e8f0;
  border-radius: 10px;
  font-size: 0.9rem;
  background: #f8fafc;
  color: #1f2937;
  transition: all 0.2s;
}
.filter-input:hover {
  border-color: #cbd5e1;
}
.filter-input:focus {
  outline: none;
  border-color: #22c55e;
  background: white;
  box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.1);
}
.filter-input::placeholder {
  color: #94a3b8;
}
.date-filter {
  min-width: 280px;
}
.date-inputs {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.date-input {
  flex: 1;
  padding: 0.625rem 0.875rem;
  border: 1.5px solid #e2e8f0;
  border-radius: 10px;
  font-size: 0.9rem;
  background: #f8fafc;
  color: #1f2937;
  transition: all 0.2s;
}
.date-input:hover {
  border-color: #cbd5e1;
}
.date-input:focus {
  outline: none;
  border-color: #22c55e;
  background: white;
  box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.1);
}
.date-separator {
  color: #94a3b8;
  font-weight: 500;
  font-size: 0.9rem;
}
.tags-filter {
  flex: 1;
  min-width: 250px;
}
.tags-select-wrapper {
  position: relative;
}
.selected-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding: 6px 10px;
  border: 1.5px solid #e2e8f0;
  border-radius: 10px;
  background: #f8fafc;
  min-height: 38px;
  align-items: center;
}
.selected-tag {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 2px 8px;
  background: #dcfce7;
  color: #16A34A;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
}
.remove-tag {
  background: none;
  border: none;
  color: #16A34A;
  cursor: pointer;
  font-size: 1rem;
  line-height: 1;
  padding: 0;
}
.remove-tag:hover {
  color: #dc2626;
}
.tag-input {
  flex: 1;
  min-width: 100px;
  border: none;
  background: transparent;
  font-size: 0.85rem;
  outline: none;
  color: #1f2937;
}
.tag-input::placeholder {
  color: #94a3b8;
}
.tag-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  margin-top: 4px;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 8px;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  max-height: 120px;
  overflow-y: auto;
  z-index: 50;
}
.tag-option {
  padding: 4px 10px;
  background: #f1f5f9;
  border: 1px solid #e2e8f0;
  color: #475569;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s;
}
.tag-option:hover {
  background: #dcfce7;
  border-color: #bbf7d0;
  color: #16A34A;
}
.sort-group {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
}
.sort-group .filter-label {
  margin-bottom: 0;
}
.sort-select {
  padding: 0.5rem 2rem 0.5rem 0.75rem;
  border: 1.5px solid #e2e8f0;
  border-radius: 8px;
  font-size: 0.85rem;
  background: #f8fafc;
  color: #1f2937;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.5rem center;
}
.sort-select:focus {
  outline: none;
  border-color: #22c55e;
}
.sort-direction-btn {
  width: 36px;
  height: 36px;
  border: 1.5px solid #e2e8f0;
  border-radius: 8px;
  background: #f8fafc;
  color: #64748b;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}
.sort-direction-btn svg {
  width: 18px;
  height: 18px;
  transition: transform 0.2s;
}
.sort-direction-btn svg.desc {
  transform: rotate(180deg);
}
.sort-direction-btn:hover {
  border-color: #22c55e;
  color: #16A34A;
}
.type-filter {
  flex-direction: row;
  align-items: center;
}
.type-buttons {
  display: flex;
  border: 1.5px solid #e2e8f0;
  border-radius: 8px;
  overflow: hidden;
}
.type-btn {
  padding: 0.5rem 0.875rem;
  border: none;
  background: #f8fafc;
  color: #64748b;
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s;
}
.type-btn:not(:last-child) {
  border-right: 1px solid #e2e8f0;
}
.type-btn.active {
  background: #16A34A;
  color: white;
}
.type-btn:hover:not(.active) {
  background: #f1f5f9;
}
.filters-footer {
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #f1f5f9;
}
.button-group {
  display: flex;
  gap: 2rem;
}
.button-group app-button {
  width: 110px;
}
.button-group app-button svg {
  width: 14px;
  height: 14px;
}
.results-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}
.results-count {
  font-size: 0.85rem;
  color: #64748b;
  font-weight: 500;
}
.table-and-pagination-wrapper {
  display: flex;
  flex-direction: column;
  gap: 0;
}
.table-container {
  background: white;
  border-radius: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  border: 1px solid #e5e7eb;
  overflow: hidden;
}
.clients-table {
  width: 100%;
  border-collapse: collapse;
}
.clients-table th {
  padding: 1rem;
  text-align: left;
  font-size: 0.75rem;
  font-weight: 600;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  background: #f8fafc;
  border-bottom: 1px solid #e5e7eb;
}
.clients-table td {
  padding: 1rem;
  border-bottom: 1px solid #f1f5f9;
}
.client-row {
  transition: background 0.15s;
}
.client-row:hover {
  background: #f8fafc;
}
.client-row.inactive {
  opacity: 0.6;
}
.client-row:last-child td {
  border-bottom: none;
}
.client-cell {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.client-avatar {
  width: 42px;
  height: 42px;
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
  font-size: 0.85rem;
  font-weight: 600;
  flex-shrink: 0;
}
.client-avatar.business {
  background:
    linear-gradient(
      135deg,
      #1d4ed8,
      #3b82f6);
}
.client-info {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}
.client-name-link {
  text-decoration: none;
  color: inherit;
  transition: color 0.15s;
}
.client-name-link:hover {
  color: #16A34A;
}
.client-name {
  font-size: 0.9rem;
  font-weight: 600;
  color: #1f2937;
  cursor: pointer;
}
.client-name-link:hover .client-name {
  color: #16A34A;
}
.client-type {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.75rem;
  color: #64748b;
}
.client-type svg {
  width: 12px;
  height: 12px;
}
.contact-info {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}
.contact-phone {
  font-size: 0.85rem;
  color: #1f2937;
  font-weight: 500;
}
.contact-email {
  font-size: 0.8rem;
  color: #64748b;
}
.tags-list {
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
}
.tag {
  padding: 2px 8px;
  background: #dcfce7;
  color: #16A34A;
  border-radius: 10px;
  font-size: 0.7rem;
  font-weight: 600;
}
.tag.more {
  background: #f1f5f9;
  color: #64748b;
}
.stats-info {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}
.stat-main {
  font-size: 0.9rem;
  font-weight: 600;
  color: #16A34A;
}
.stat-secondary {
  font-size: 0.75rem;
  color: #64748b;
}
.bonus-info {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}
.bonus-balance {
  font-size: 0.9rem;
  font-weight: 600;
  color: #d97706;
}
.bonus-used {
  font-size: 0.75rem;
  color: #94a3b8;
}
.date-text {
  font-size: 0.85rem;
  color: #64748b;
}
.actions-cell {
  display: flex;
  gap: 0.5rem;
}
.action-link {
  display: inline-flex;
  text-decoration: none;
  color: inherit;
}
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  color: #94a3b8;
}
.empty-state svg {
  width: 48px;
  height: 48px;
  margin-bottom: 1rem;
}
.empty-state span {
  font-size: 1rem;
  margin-bottom: 1rem;
}
@media (max-width: 1200px) {
  .dashboard-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
.mobile-cards-container {
  display: none;
  flex-direction: column;
  gap: 0.75rem;
  max-height: calc(100vh - 400px);
  overflow-y: auto;
  padding-bottom: 1rem;
}
.client-card {
  background: white;
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
  cursor: pointer;
  transition: all 0.2s;
  text-decoration: none;
  color: inherit;
}
.client-card:active {
  transform: scale(0.98);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}
.card-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
}
.card-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 0.875rem;
  color: white;
  background:
    linear-gradient(
      135deg,
      #16A34A 0%,
      #15803d 100%);
  flex-shrink: 0;
}
.card-avatar.business {
  background:
    linear-gradient(
      135deg,
      #2563eb 0%,
      #1e40af 100%);
}
.card-header-info {
  flex: 1;
  min-width: 0;
}
.card-name {
  font-size: 1rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.25rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.card-phone {
  font-size: 0.875rem;
  color: #64748b;
}
.card-type-badge {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: #f0fdf4;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #16A34A;
  flex-shrink: 0;
}
.card-type-badge.business {
  background: #eff6ff;
  color: #2563eb;
}
.card-type-badge svg {
  width: 18px;
  height: 18px;
}
.card-body {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.card-tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}
.card-tag {
  padding: 4px 10px;
  background: #dcfce7;
  color: #16A34A;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
}
.card-tag.more {
  background: #f1f5f9;
  color: #64748b;
}
.card-stats {
  display: flex;
  gap: 1rem;
  padding-top: 0.5rem;
  border-top: 1px solid #e5e7eb;
}
.card-stat-item {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}
.card-stat-item .stat-label {
  font-size: 0.75rem;
  color: #64748b;
}
.card-stat-item .stat-value {
  font-size: 0.875rem;
  font-weight: 600;
  color: #1f2937;
}
.card-stat-item .stat-value.bonus {
  color: #d97706;
}
.mobile-loading {
  display: flex;
  justify-content: center;
  padding: 1rem;
}
@media (max-width: 768px) {
  .page-wrapper {
    margin: -1rem;
    padding: 1rem;
  }
  .dashboard-grid {
    grid-template-columns: 1fr;
  }
  .filters-row {
    flex-direction: column;
  }
  .filter-group {
    width: 100%;
  }
  .desktop-view {
    display: none !important;
  }
  .mobile-view {
    display: flex !important;
  }
  .mobile-cards-container {
    max-height: calc(100vh - 300px);
  }
}
@media (min-width: 769px) {
  .mobile-view {
    display: none !important;
  }
  .desktop-view {
    display: block !important;
  }
  .pagination-container.desktop-view {
    display: flex !important;
  }
}
.pagination-container {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  gap: 1rem;
  margin-top: 1rem;
  box-sizing: border-box;
}
.pagination-left {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  gap: 1.5rem;
  flex-shrink: 0;
}
.pagination-right {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  margin-left: auto;
}
.pagination-info {
  font-size: 0.875rem;
  color: #64748b;
  font-weight: 500;
}
.page-size-filter-section {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.page-size-label {
  font-size: 0.875rem;
  font-weight: 600;
  color: #475569;
}
.page-size-select {
  padding: 8px 12px;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  font-size: 0.875rem;
  background: white;
  color: #1f2937;
  cursor: pointer;
  outline: none;
  transition: all 0.2s;
}
.page-size-select:hover {
  border-color: #94a3b8;
}
.page-size-select:focus {
  border-color: #16A34A;
  box-shadow: 0 0 0 3px rgba(22, 163, 74, 0.1);
}
.loading-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem;
}
/*# sourceMappingURL=clients-page.component.css.map */
`] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClientsPageComponent, { className: "ClientsPageComponent", filePath: "src/app/features/clients/pages/clients-page/clients-page.component.ts", lineNumber: 1468 });
})();
export {
  ClientsPageComponent
};
//# sourceMappingURL=chunk-ZCAOW3RG.js.map
