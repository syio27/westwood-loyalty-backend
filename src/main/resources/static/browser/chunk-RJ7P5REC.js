import {
  PaginatedTableWrapperComponent
} from "./chunk-2R6M6BSK.js";
import "./chunk-E2ICMDXS.js";
import {
  AlertComponent,
  InputComponent
} from "./chunk-B5GAVZDN.js";
import {
  MessageTemplatesService,
  MessagesService
} from "./chunk-4HFJPHUJ.js";
import {
  BadgeComponent
} from "./chunk-D4QAE3H6.js";
import {
  ModalComponent
} from "./chunk-QYR5BNYI.js";
import {
  PageHeaderService
} from "./chunk-AWWADESY.js";
import "./chunk-6FFMNYG3.js";
import {
  ToastService
} from "./chunk-O5QEVFND.js";
import {
  ButtonComponent
} from "./chunk-H6VMPPNV.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-7NMYMP3Z.js";
import {
  Store,
  selectUser
} from "./chunk-MCKFT77T.js";
import {
  IconButtonComponent
} from "./chunk-DGNBLIW7.js";
import {
  CommonModule,
  Component,
  DomSanitizer,
  EventEmitter,
  Input,
  NgForOf,
  NgIf,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault,
  NgTemplateOutlet,
  Output,
  ViewChild,
  __spreadProps,
  __spreadValues,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-NKSGOSP5.js";

// src/app/shared/components/card/card.component.ts
var _c0 = ["*", [["", "cardHeader", ""]], [["", "cardFooter", ""]]];
var _c1 = ["*", "[cardHeader]", "[cardFooter]"];
function CardComponent_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function CardComponent_div_1_h3_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.headerText);
  }
}
function CardComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275template(1, CardComponent_div_1_ng_container_1_Template, 1, 0, "ng-container", 7)(2, CardComponent_div_1_h3_2_Template, 2, 1, "h3", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    const headerTemplate_r2 = \u0275\u0275reference(6);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", headerTemplate_r2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.header);
  }
}
function CardComponent_div_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function CardComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275template(1, CardComponent_div_4_ng_container_1_Template, 1, 0, "ng-container", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const footerTemplate_r3 = \u0275\u0275reference(8);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", footerTemplate_r3);
  }
}
function CardComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0, 1);
  }
}
function CardComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0, 2);
  }
}
var CardComponent = class _CardComponent {
  headerText = "";
  showHeader = false;
  footer = false;
  showFooter = false;
  hoverable = false;
  shadow = true;
  bordered = false;
  header = false;
  static \u0275fac = function CardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CardComponent, selectors: [["app-card"]], inputs: { headerText: "headerText", showHeader: "showHeader", footer: "footer", showFooter: "showFooter", hoverable: "hoverable", shadow: "shadow", bordered: "bordered" }, ngContentSelectors: _c1, decls: 9, vars: 8, consts: [["headerTemplate", ""], ["footerTemplate", ""], [1, "card"], ["class", "card-header", 4, "ngIf"], [1, "card-body"], ["class", "card-footer", 4, "ngIf"], [1, "card-header"], [4, "ngTemplateOutlet"], [4, "ngIf"], [1, "card-footer"]], template: function CardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef(_c0);
      \u0275\u0275elementStart(0, "div", 2);
      \u0275\u0275template(1, CardComponent_div_1_Template, 3, 2, "div", 3);
      \u0275\u0275elementStart(2, "div", 4);
      \u0275\u0275projection(3);
      \u0275\u0275elementEnd();
      \u0275\u0275template(4, CardComponent_div_4_Template, 2, 1, "div", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275template(5, CardComponent_ng_template_5_Template, 1, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(7, CardComponent_ng_template_7_Template, 1, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      \u0275\u0275classProp("hoverable", ctx.hoverable)("shadow", ctx.shadow)("bordered", ctx.bordered);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.header || ctx.showHeader);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.footer || ctx.showFooter);
    }
  }, dependencies: [CommonModule, NgIf, NgTemplateOutlet], styles: ["\n\n.card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 8px;\n  overflow: hidden;\n  transition: all 0.3s ease;\n}\n.card.shadow[_ngcontent-%COMP%] {\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.card.bordered[_ngcontent-%COMP%] {\n  border: 1px solid #e2e8f0;\n}\n.card.hoverable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.card.hoverable[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n.card-header[_ngcontent-%COMP%] {\n  padding: 1rem 1.5rem;\n  border-bottom: 1px solid #e2e8f0;\n  background-color: #f8f9fa;\n}\n.card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1a202c;\n}\n.card-body[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n.card-footer[_ngcontent-%COMP%] {\n  padding: 1rem 1.5rem;\n  border-top: 1px solid #e2e8f0;\n  background-color: #f8f9fa;\n}\n[_nghost-%COMP%]     [cardHeader] {\n  display: block;\n}\n[_nghost-%COMP%]     [cardFooter] {\n  display: block;\n}\n/*# sourceMappingURL=card.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardComponent, [{
    type: Component,
    args: [{ selector: "app-card", standalone: true, imports: [CommonModule], template: `
    <div class="card" [class.hoverable]="hoverable" [class.shadow]="shadow" [class.bordered]="bordered">
      <div class="card-header" *ngIf="header || showHeader">
        <ng-container *ngTemplateOutlet="headerTemplate"></ng-container>
        <h3 *ngIf="!header">{{ headerText }}</h3>
      </div>
      <div class="card-body">
        <ng-content></ng-content>
      </div>
      <div class="card-footer" *ngIf="footer || showFooter">
        <ng-container *ngTemplateOutlet="footerTemplate"></ng-container>
      </div>
    </div>
    <ng-template #headerTemplate>
      <ng-content select="[cardHeader]"></ng-content>
    </ng-template>
    <ng-template #footerTemplate>
      <ng-content select="[cardFooter]"></ng-content>
    </ng-template>
  `, styles: ["/* angular:styles/component:css;d65458a3668d3196caf7a56586e492ba0646acd1fd06e4f2205c0599644deacd;/Users/baglan/repo/westwood/westwood-frontend/src/app/shared/components/card/card.component.ts */\n.card {\n  background: #ffffff;\n  border-radius: 8px;\n  overflow: hidden;\n  transition: all 0.3s ease;\n}\n.card.shadow {\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.card.bordered {\n  border: 1px solid #e2e8f0;\n}\n.card.hoverable {\n  cursor: pointer;\n}\n.card.hoverable:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n.card-header {\n  padding: 1rem 1.5rem;\n  border-bottom: 1px solid #e2e8f0;\n  background-color: #f8f9fa;\n}\n.card-header h3 {\n  margin: 0;\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1a202c;\n}\n.card-body {\n  padding: 1.5rem;\n}\n.card-footer {\n  padding: 1rem 1.5rem;\n  border-top: 1px solid #e2e8f0;\n  background-color: #f8f9fa;\n}\n:host ::ng-deep [cardHeader] {\n  display: block;\n}\n:host ::ng-deep [cardFooter] {\n  display: block;\n}\n/*# sourceMappingURL=card.component.css.map */\n"] }]
  }], null, { headerText: [{
    type: Input
  }], showHeader: [{
    type: Input
  }], footer: [{
    type: Input
  }], showFooter: [{
    type: Input
  }], hoverable: [{
    type: Input
  }], shadow: [{
    type: Input
  }], bordered: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CardComponent, { className: "CardComponent", filePath: "src/app/shared/components/card/card.component.ts", lineNumber: 85 });
})();

// src/app/shared/components/typography/typography.component.ts
var _c02 = ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*"];
function TypographyComponent_h1_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h1");
    \u0275\u0275projection(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.getClasses());
  }
}
function TypographyComponent_h2_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2");
    \u0275\u0275projection(1, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.getClasses());
  }
}
function TypographyComponent_h3_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3");
    \u0275\u0275projection(1, 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.getClasses());
  }
}
function TypographyComponent_h4_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4");
    \u0275\u0275projection(1, 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.getClasses());
  }
}
function TypographyComponent_h5_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h5");
    \u0275\u0275projection(1, 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.getClasses());
  }
}
function TypographyComponent_h6_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h6");
    \u0275\u0275projection(1, 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.getClasses());
  }
}
function TypographyComponent_p_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275projection(1, 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.getClasses());
  }
}
function TypographyComponent_p_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275projection(1, 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.getClasses());
  }
}
function TypographyComponent_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275projection(1, 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.getClasses());
  }
}
function TypographyComponent_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275projection(1, 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.getClasses());
  }
}
var TypographyComponent = class _TypographyComponent {
  variant = "body1";
  noWrap = false;
  bold = false;
  medium = false;
  muted = false;
  getClasses() {
    const classes = [this.variant];
    if (this.noWrap)
      classes.push("no-wrap");
    if (this.bold)
      classes.push("bold");
    if (this.medium)
      classes.push("medium");
    if (this.muted)
      classes.push("muted");
    return classes.join(" ");
  }
  static \u0275fac = function TypographyComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TypographyComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TypographyComponent, selectors: [["app-typography"]], inputs: { variant: "variant", noWrap: "noWrap", bold: "bold", medium: "medium", muted: "muted" }, ngContentSelectors: _c02, decls: 11, vars: 11, consts: [[3, "ngSwitch"], [3, "class", 4, "ngSwitchCase"]], template: function TypographyComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef(_c02);
      \u0275\u0275elementContainerStart(0, 0);
      \u0275\u0275template(1, TypographyComponent_h1_1_Template, 2, 2, "h1", 1)(2, TypographyComponent_h2_2_Template, 2, 2, "h2", 1)(3, TypographyComponent_h3_3_Template, 2, 2, "h3", 1)(4, TypographyComponent_h4_4_Template, 2, 2, "h4", 1)(5, TypographyComponent_h5_5_Template, 2, 2, "h5", 1)(6, TypographyComponent_h6_6_Template, 2, 2, "h6", 1)(7, TypographyComponent_p_7_Template, 2, 2, "p", 1)(8, TypographyComponent_p_8_Template, 2, 2, "p", 1)(9, TypographyComponent_span_9_Template, 2, 2, "span", 1)(10, TypographyComponent_span_10_Template, 2, 2, "span", 1);
      \u0275\u0275elementContainerEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("ngSwitch", ctx.variant);
      \u0275\u0275advance();
      \u0275\u0275property("ngSwitchCase", "h1");
      \u0275\u0275advance();
      \u0275\u0275property("ngSwitchCase", "h2");
      \u0275\u0275advance();
      \u0275\u0275property("ngSwitchCase", "h3");
      \u0275\u0275advance();
      \u0275\u0275property("ngSwitchCase", "h4");
      \u0275\u0275advance();
      \u0275\u0275property("ngSwitchCase", "h5");
      \u0275\u0275advance();
      \u0275\u0275property("ngSwitchCase", "h6");
      \u0275\u0275advance();
      \u0275\u0275property("ngSwitchCase", "body1");
      \u0275\u0275advance();
      \u0275\u0275property("ngSwitchCase", "body2");
      \u0275\u0275advance();
      \u0275\u0275property("ngSwitchCase", "caption");
      \u0275\u0275advance();
      \u0275\u0275property("ngSwitchCase", "overline");
    }
  }, dependencies: [CommonModule, NgSwitch, NgSwitchCase], styles: ["\n\nh1[_ngcontent-%COMP%], \nh2[_ngcontent-%COMP%], \nh3[_ngcontent-%COMP%], \nh4[_ngcontent-%COMP%], \nh5[_ngcontent-%COMP%], \nh6[_ngcontent-%COMP%], \np[_ngcontent-%COMP%], \nspan[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n[_nghost-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 700;\n  line-height: 1.2;\n}\n[_nghost-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  line-height: 1.3;\n}\n[_nghost-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  font-weight: 600;\n  line-height: 1.4;\n}\n[_nghost-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 600;\n  line-height: 1.4;\n}\n[_nghost-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  line-height: 1.5;\n}\n[_nghost-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 600;\n  line-height: 1.5;\n}\n[_nghost-%COMP%]   p.body1[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.6;\n}\n[_nghost-%COMP%]   p.body2[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 400;\n  line-height: 1.6;\n}\n[_nghost-%COMP%]   span.caption[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 400;\n  line-height: 1.5;\n}\n[_nghost-%COMP%]   span.overline[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  line-height: 1.5;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n}\n.no-wrap[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.bold[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.medium[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.muted[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n/*# sourceMappingURL=typography.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TypographyComponent, [{
    type: Component,
    args: [{ selector: "app-typography", standalone: true, imports: [CommonModule], template: `
    <ng-container [ngSwitch]="variant">
      <h1 *ngSwitchCase="'h1'" [class]="getClasses()"><ng-content></ng-content></h1>
      <h2 *ngSwitchCase="'h2'" [class]="getClasses()"><ng-content></ng-content></h2>
      <h3 *ngSwitchCase="'h3'" [class]="getClasses()"><ng-content></ng-content></h3>
      <h4 *ngSwitchCase="'h4'" [class]="getClasses()"><ng-content></ng-content></h4>
      <h5 *ngSwitchCase="'h5'" [class]="getClasses()"><ng-content></ng-content></h5>
      <h6 *ngSwitchCase="'h6'" [class]="getClasses()"><ng-content></ng-content></h6>
      <p *ngSwitchCase="'body1'" [class]="getClasses()"><ng-content></ng-content></p>
      <p *ngSwitchCase="'body2'" [class]="getClasses()"><ng-content></ng-content></p>
      <span *ngSwitchCase="'caption'" [class]="getClasses()"><ng-content></ng-content></span>
      <span *ngSwitchCase="'overline'" [class]="getClasses()"><ng-content></ng-content></span>
    </ng-container>
  `, styles: ["/* angular:styles/component:css;736818b0bf3316e6e62c0659d81fffd12e9b2e7926febfd9809a5a93bc69d757;/Users/baglan/repo/westwood/westwood-frontend/src/app/shared/components/typography/typography.component.ts */\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nspan {\n  margin: 0;\n  padding: 0;\n}\n:host h1 {\n  font-size: 2.5rem;\n  font-weight: 700;\n  line-height: 1.2;\n}\n:host h2 {\n  font-size: 2rem;\n  font-weight: 700;\n  line-height: 1.3;\n}\n:host h3 {\n  font-size: 1.75rem;\n  font-weight: 600;\n  line-height: 1.4;\n}\n:host h4 {\n  font-size: 1.5rem;\n  font-weight: 600;\n  line-height: 1.4;\n}\n:host h5 {\n  font-size: 1.25rem;\n  font-weight: 600;\n  line-height: 1.5;\n}\n:host h6 {\n  font-size: 1.125rem;\n  font-weight: 600;\n  line-height: 1.5;\n}\n:host p.body1 {\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.6;\n}\n:host p.body2 {\n  font-size: 0.875rem;\n  font-weight: 400;\n  line-height: 1.6;\n}\n:host span.caption {\n  font-size: 0.75rem;\n  font-weight: 400;\n  line-height: 1.5;\n}\n:host span.overline {\n  font-size: 0.75rem;\n  font-weight: 600;\n  line-height: 1.5;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n}\n.no-wrap {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.bold {\n  font-weight: 700;\n}\n.medium {\n  font-weight: 500;\n}\n.muted {\n  color: #64748b;\n}\n/*# sourceMappingURL=typography.component.css.map */\n"] }]
  }], null, { variant: [{
    type: Input
  }], noWrap: [{
    type: Input
  }], bold: [{
    type: Input
  }], medium: [{
    type: Input
  }], muted: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TypographyComponent, { className: "TypographyComponent", filePath: "src/app/shared/components/typography/typography.component.ts", lineNumber: 111 });
})();

// src/app/shared/components/divider/divider.component.ts
var DividerComponent = class _DividerComponent {
  orientation = "horizontal";
  spaced = false;
  static \u0275fac = function DividerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DividerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DividerComponent, selectors: [["app-divider"]], inputs: { orientation: "orientation", spaced: "spaced" }, decls: 1, vars: 4, consts: [[1, "divider"]], template: function DividerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275classMap(ctx.orientation);
      \u0275\u0275classProp("spaced", ctx.spaced);
    }
  }, dependencies: [CommonModule], styles: ["\n\n.divider[_ngcontent-%COMP%] {\n  background-color: #e2e8f0;\n}\n.divider.horizontal[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 1px;\n}\n.divider.vertical[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 1px;\n}\n.divider.spaced.horizontal[_ngcontent-%COMP%] {\n  margin: 1rem 0;\n}\n.divider.spaced.vertical[_ngcontent-%COMP%] {\n  margin: 0 1rem;\n}\n/*# sourceMappingURL=divider.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DividerComponent, [{
    type: Component,
    args: [{ selector: "app-divider", standalone: true, imports: [CommonModule], template: `
    <div class="divider" [class]="orientation" [class.spaced]="spaced"></div>
  `, styles: ["/* angular:styles/component:css;fb39f069548a3e6bbc8507f9f6c9add0040181c838028cbd421f94413829578f;/Users/baglan/repo/westwood/westwood-frontend/src/app/shared/components/divider/divider.component.ts */\n.divider {\n  background-color: #e2e8f0;\n}\n.divider.horizontal {\n  width: 100%;\n  height: 1px;\n}\n.divider.vertical {\n  height: 100%;\n  width: 1px;\n}\n.divider.spaced.horizontal {\n  margin: 1rem 0;\n}\n.divider.spaced.vertical {\n  margin: 0 1rem;\n}\n/*# sourceMappingURL=divider.component.css.map */\n"] }]
  }], null, { orientation: [{
    type: Input
  }], spaced: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DividerComponent, { className: "DividerComponent", filePath: "src/app/shared/components/divider/divider.component.ts", lineNumber: 35 });
})();

// src/app/shared/components/whatsapp-preview/whatsapp-preview.component.ts
function WhatsappPreviewComponent__svg_svg_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 24);
    \u0275\u0275element(1, "path", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("read", ctx_r0.isRead);
  }
}
function WhatsappPreviewComponent__svg_svg_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 26);
    \u0275\u0275element(1, "path", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("read", ctx_r0.isRead);
  }
}
function WhatsappPreviewComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 28);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 5);
    \u0275\u0275element(3, "path", 29);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "div", 30);
    \u0275\u0275text(5, "\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 31);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(7, "svg", 5);
    \u0275\u0275element(8, "path", 32);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "div", 33);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(10, "svg", 5);
    \u0275\u0275element(11, "path", 34);
    \u0275\u0275elementEnd()()();
  }
}
var WhatsappPreviewComponent = class _WhatsappPreviewComponent {
  /** Имя контакта */
  contactName = "";
  /** Первая буква для аватара (если не указана, берётся из contactName) */
  avatarLetter = "";
  /** Текст сообщения */
  message = "";
  /** Время сообщения (если не указано, берётся текущее) */
  time = "";
  /** Статус контакта */
  status = "\u043E\u043D\u043B\u0430\u0439\u043D";
  /** Подпись даты */
  dateLabel = "\u0421\u0435\u0433\u043E\u0434\u043D\u044F";
  /** Исходящее сообщение (справа) или входящее (слева) */
  outgoing = true;
  /** Показывать галочки доставки */
  showCheckmarks = true;
  /** Сообщение доставлено (две галочки) */
  delivered = true;
  /** Сообщение прочитано (синие галочки) */
  isRead = true;
  /** Показывать панель ввода внизу */
  showInputBar = true;
  /** Тёмная рамка телефона */
  darkFrame = false;
  /** Убрать тень */
  noShadow = false;
  getAvatarLetter() {
    if (this.avatarLetter)
      return this.avatarLetter;
    if (this.contactName)
      return this.contactName[0].toUpperCase();
    return "?";
  }
  getCurrentTime() {
    return (/* @__PURE__ */ new Date()).toLocaleTimeString("ru-RU", { hour: "2-digit", minute: "2-digit" });
  }
  static \u0275fac = function WhatsappPreviewComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WhatsappPreviewComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WhatsappPreviewComponent, selectors: [["app-whatsapp-preview"]], inputs: { contactName: "contactName", avatarLetter: "avatarLetter", message: "message", time: "time", status: "status", dateLabel: "dateLabel", outgoing: "outgoing", showCheckmarks: "showCheckmarks", delivered: "delivered", isRead: "isRead", showInputBar: "showInputBar", darkFrame: "darkFrame", noShadow: "noShadow" }, decls: 34, vars: 15, consts: [[1, "phone-frame"], [1, "phone-notch"], [1, "phone-screen"], [1, "wa-header"], [1, "wa-back"], ["viewBox", "0 0 24 24", "fill", "none"], ["d", "M15 19l-7-7 7-7", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "wa-contact"], [1, "wa-avatar"], [1, "wa-info"], [1, "wa-name"], [1, "wa-status"], [1, "wa-actions"], ["d", "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "wa-chat"], [1, "wa-date"], [1, "wa-bubble"], [1, "wa-meta"], [1, "wa-time"], ["viewBox", "0 0 24 24", "fill", "none", "class", "wa-check", 3, "read", 4, "ngIf"], ["viewBox", "0 0 24 24", "fill", "none", "class", "wa-check wa-check-second", 3, "read", 4, "ngIf"], ["class", "wa-input-bar", 4, "ngIf"], ["viewBox", "0 0 24 24", "fill", "none", 1, "wa-check"], ["d", "M5 13l4 4L19 7", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["viewBox", "0 0 24 24", "fill", "none", 1, "wa-check", "wa-check-second"], [1, "wa-input-bar"], [1, "wa-emoji"], ["d", "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "wa-input-field"], [1, "wa-attach"], ["d", "M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "wa-mic"], ["d", "M19 10v2a7 7 0 01-14 0v-2M12 19v4m-4 0h8M12 1a3 3 0 00-3 3v6a3 3 0 006 0V4a3 3 0 00-3-3z", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"]], template: function WhatsappPreviewComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "div", 1);
      \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(5, "svg", 5);
      \u0275\u0275element(6, "path", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(7, "div", 7)(8, "div", 8);
      \u0275\u0275text(9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 9)(11, "span", 10);
      \u0275\u0275text(12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "span", 11);
      \u0275\u0275text(14);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(15, "div", 12);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(16, "svg", 5);
      \u0275\u0275element(17, "path", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "svg", 5);
      \u0275\u0275element(19, "path", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "svg", 5);
      \u0275\u0275element(21, "path", 15);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(22, "div", 16)(23, "div", 17);
      \u0275\u0275text(24);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 18)(26, "p");
      \u0275\u0275text(27);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 19)(29, "span", 20);
      \u0275\u0275text(30);
      \u0275\u0275elementEnd();
      \u0275\u0275template(31, WhatsappPreviewComponent__svg_svg_31_Template, 2, 2, "svg", 21)(32, WhatsappPreviewComponent__svg_svg_32_Template, 2, 2, "svg", 22);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(33, WhatsappPreviewComponent_div_33_Template, 12, 0, "div", 23);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("dark-frame", ctx.darkFrame)("no-shadow", ctx.noShadow);
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(ctx.getAvatarLetter());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.contactName || "\u041F\u043E\u043B\u0443\u0447\u0430\u0442\u0435\u043B\u044C");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.status);
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate(ctx.dateLabel);
      \u0275\u0275advance();
      \u0275\u0275classProp("incoming", !ctx.outgoing);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.message || "\u0422\u0435\u043A\u0441\u0442 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F...");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.time || ctx.getCurrentTime());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.outgoing && ctx.showCheckmarks);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.outgoing && ctx.showCheckmarks && ctx.delivered);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showInputBar);
    }
  }, dependencies: [CommonModule, NgIf], styles: [`

.phone-frame[_ngcontent-%COMP%] {
  background: #1f2937;
  border-radius: 32px;
  padding: 8px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  min-height: 400px;
}
.phone-frame.dark-frame[_ngcontent-%COMP%] {
  background: #0f172a;
}
.phone-frame.no-shadow[_ngcontent-%COMP%] {
  box-shadow: none;
}
.phone-notch[_ngcontent-%COMP%] {
  width: 120px;
  height: 24px;
  background: inherit;
  margin: 0 auto 8px;
  border-radius: 0 0 16px 16px;
}
.phone-screen[_ngcontent-%COMP%] {
  flex: 1;
  background: #e5ddd5;
  border-radius: 24px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.wa-header[_ngcontent-%COMP%] {
  background: #075e54;
  padding: 0.625rem 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.wa-back[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  width: 20px;
  height: 20px;
  color: white;
}
.wa-contact[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  flex: 1;
}
.wa-avatar[_ngcontent-%COMP%] {
  width: 36px;
  height: 36px;
  background:
    linear-gradient(
      135deg,
      #25D366 0%,
      #128C7E 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 0.875rem;
}
.wa-info[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
}
.wa-name[_ngcontent-%COMP%] {
  color: white;
  font-weight: 500;
  font-size: 0.9375rem;
  line-height: 1.2;
}
.wa-status[_ngcontent-%COMP%] {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.75rem;
}
.wa-actions[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.wa-actions[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  width: 20px;
  height: 20px;
  color: white;
}
.wa-chat[_ngcontent-%COMP%] {
  flex: 1;
  padding: 0.75rem;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c5c5c5' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
.wa-date[_ngcontent-%COMP%] {
  text-align: center;
  font-size: 0.6875rem;
  color: #667781;
  background: rgba(255, 255, 255, 0.9);
  padding: 0.25rem 0.75rem;
  border-radius: 8px;
  margin: 0 auto 0.75rem;
  box-shadow: 0 1px 0.5px rgba(0, 0, 0, 0.1);
}
.wa-bubble[_ngcontent-%COMP%] {
  background: #dcf8c6;
  padding: 0.5rem 0.625rem;
  border-radius: 8px 8px 0 8px;
  max-width: 85%;
  margin-left: auto;
  box-shadow: 0 1px 0.5px rgba(0, 0, 0, 0.1);
  position: relative;
}
.wa-bubble.incoming[_ngcontent-%COMP%] {
  background: white;
  margin-left: 0;
  margin-right: auto;
  border-radius: 8px 8px 8px 0;
}
.wa-bubble[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  margin: 0;
  font-size: 0.875rem;
  line-height: 1.4;
  color: #111b21;
  white-space: pre-wrap;
  word-break: break-word;
}
.wa-meta[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.125rem;
  margin-top: 0.125rem;
}
.wa-time[_ngcontent-%COMP%] {
  font-size: 0.6875rem;
  color: #667781;
}
.wa-check[_ngcontent-%COMP%] {
  width: 16px;
  height: 16px;
  color: #667781;
  margin-left: -4px;
}
.wa-check.read[_ngcontent-%COMP%] {
  color: #53bdeb;
}
.wa-check-second[_ngcontent-%COMP%] {
  margin-left: -12px;
}
.wa-input-bar[_ngcontent-%COMP%] {
  background: #f0f2f5;
  padding: 0.5rem 0.625rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.wa-emoji[_ngcontent-%COMP%], 
.wa-attach[_ngcontent-%COMP%] {
  color: #54656f;
  display: flex;
  align-items: center;
  justify-content: center;
}
.wa-emoji[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], 
.wa-attach[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  width: 24px;
  height: 24px;
}
.wa-input-field[_ngcontent-%COMP%] {
  flex: 1;
  background: white;
  padding: 0.5rem 0.875rem;
  border-radius: 8px;
  font-size: 0.875rem;
  color: #667781;
}
.wa-mic[_ngcontent-%COMP%] {
  width: 40px;
  height: 40px;
  background: #00a884;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.wa-mic[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  width: 20px;
  height: 20px;
  color: white;
}
/*# sourceMappingURL=whatsapp-preview.component.css.map */`] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WhatsappPreviewComponent, [{
    type: Component,
    args: [{ selector: "app-whatsapp-preview", standalone: true, imports: [CommonModule], template: `
    <div class="phone-frame" [class.dark-frame]="darkFrame" [class.no-shadow]="noShadow">
      <div class="phone-notch"></div>
      <div class="phone-screen">
        <!-- WhatsApp Header -->
        <div class="wa-header">
          <div class="wa-back">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M15 19l-7-7 7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div class="wa-contact">
            <div class="wa-avatar">{{ getAvatarLetter() }}</div>
            <div class="wa-info">
              <span class="wa-name">{{ contactName || '\u041F\u043E\u043B\u0443\u0447\u0430\u0442\u0435\u043B\u044C' }}</span>
              <span class="wa-status">{{ status }}</span>
            </div>
          </div>
          <div class="wa-actions">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
        
        <!-- Chat Area -->
        <div class="wa-chat">
          <div class="wa-date">{{ dateLabel }}</div>
          <div class="wa-bubble" [class.incoming]="!outgoing">
            <p>{{ message || '\u0422\u0435\u043A\u0441\u0442 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F...' }}</p>
            <div class="wa-meta">
              <span class="wa-time">{{ time || getCurrentTime() }}</span>
              <svg *ngIf="outgoing && showCheckmarks" viewBox="0 0 24 24" fill="none" class="wa-check" [class.read]="isRead">
                <path d="M5 13l4 4L19 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <svg *ngIf="outgoing && showCheckmarks && delivered" viewBox="0 0 24 24" fill="none" class="wa-check wa-check-second" [class.read]="isRead">
                <path d="M5 13l4 4L19 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
        </div>

        <!-- Input Bar -->
        <div class="wa-input-bar" *ngIf="showInputBar">
          <div class="wa-emoji">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div class="wa-input-field">\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435</div>
          <div class="wa-attach">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div class="wa-mic">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M19 10v2a7 7 0 01-14 0v-2M12 19v4m-4 0h8M12 1a3 3 0 00-3 3v6a3 3 0 006 0V4a3 3 0 00-3-3z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  `, styles: [`/* angular:styles/component:css;a7f4ab06ef0859ada1d5bc6cbd93ebdc65c4ded416162599f0e621c3357a20fe;/Users/baglan/repo/westwood/westwood-frontend/src/app/shared/components/whatsapp-preview/whatsapp-preview.component.ts */
.phone-frame {
  background: #1f2937;
  border-radius: 32px;
  padding: 8px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  min-height: 400px;
}
.phone-frame.dark-frame {
  background: #0f172a;
}
.phone-frame.no-shadow {
  box-shadow: none;
}
.phone-notch {
  width: 120px;
  height: 24px;
  background: inherit;
  margin: 0 auto 8px;
  border-radius: 0 0 16px 16px;
}
.phone-screen {
  flex: 1;
  background: #e5ddd5;
  border-radius: 24px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.wa-header {
  background: #075e54;
  padding: 0.625rem 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.wa-back svg {
  width: 20px;
  height: 20px;
  color: white;
}
.wa-contact {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  flex: 1;
}
.wa-avatar {
  width: 36px;
  height: 36px;
  background:
    linear-gradient(
      135deg,
      #25D366 0%,
      #128C7E 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 0.875rem;
}
.wa-info {
  display: flex;
  flex-direction: column;
}
.wa-name {
  color: white;
  font-weight: 500;
  font-size: 0.9375rem;
  line-height: 1.2;
}
.wa-status {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.75rem;
}
.wa-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.wa-actions svg {
  width: 20px;
  height: 20px;
  color: white;
}
.wa-chat {
  flex: 1;
  padding: 0.75rem;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c5c5c5' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
.wa-date {
  text-align: center;
  font-size: 0.6875rem;
  color: #667781;
  background: rgba(255, 255, 255, 0.9);
  padding: 0.25rem 0.75rem;
  border-radius: 8px;
  margin: 0 auto 0.75rem;
  box-shadow: 0 1px 0.5px rgba(0, 0, 0, 0.1);
}
.wa-bubble {
  background: #dcf8c6;
  padding: 0.5rem 0.625rem;
  border-radius: 8px 8px 0 8px;
  max-width: 85%;
  margin-left: auto;
  box-shadow: 0 1px 0.5px rgba(0, 0, 0, 0.1);
  position: relative;
}
.wa-bubble.incoming {
  background: white;
  margin-left: 0;
  margin-right: auto;
  border-radius: 8px 8px 8px 0;
}
.wa-bubble p {
  margin: 0;
  font-size: 0.875rem;
  line-height: 1.4;
  color: #111b21;
  white-space: pre-wrap;
  word-break: break-word;
}
.wa-meta {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.125rem;
  margin-top: 0.125rem;
}
.wa-time {
  font-size: 0.6875rem;
  color: #667781;
}
.wa-check {
  width: 16px;
  height: 16px;
  color: #667781;
  margin-left: -4px;
}
.wa-check.read {
  color: #53bdeb;
}
.wa-check-second {
  margin-left: -12px;
}
.wa-input-bar {
  background: #f0f2f5;
  padding: 0.5rem 0.625rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.wa-emoji,
.wa-attach {
  color: #54656f;
  display: flex;
  align-items: center;
  justify-content: center;
}
.wa-emoji svg,
.wa-attach svg {
  width: 24px;
  height: 24px;
}
.wa-input-field {
  flex: 1;
  background: white;
  padding: 0.5rem 0.875rem;
  border-radius: 8px;
  font-size: 0.875rem;
  color: #667781;
}
.wa-mic {
  width: 40px;
  height: 40px;
  background: #00a884;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.wa-mic svg {
  width: 20px;
  height: 20px;
  color: white;
}
/*# sourceMappingURL=whatsapp-preview.component.css.map */
`] }]
  }], null, { contactName: [{
    type: Input
  }], avatarLetter: [{
    type: Input
  }], message: [{
    type: Input
  }], time: [{
    type: Input
  }], status: [{
    type: Input
  }], dateLabel: [{
    type: Input
  }], outgoing: [{
    type: Input
  }], showCheckmarks: [{
    type: Input
  }], delivered: [{
    type: Input
  }], isRead: [{
    type: Input
  }], showInputBar: [{
    type: Input
  }], darkFrame: [{
    type: Input
  }], noShadow: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WhatsappPreviewComponent, { className: "WhatsappPreviewComponent", filePath: "src/app/shared/components/whatsapp-preview/whatsapp-preview.component.ts", lineNumber: 301 });
})();

// src/app/shared/components/email-preview/email-preview.component.ts
var EmailPreviewComponent = class _EmailPreviewComponent {
  /** Email получателя */
  recipientEmail = "";
  /** Текст письма */
  message = "";
  /** Ссылка для активации */
  activationLink = "https://westwood.app/activate?token=...";
  /** Текст кнопки */
  buttonText = "Activate Account";
  /** Срок действия ссылки (дней) */
  expirationDays = 7;
  /** Имя отправителя */
  senderName = "Westwood Team";
  /** Email отправителя */
  senderEmail = "noreply@westwood.app";
  static \u0275fac = function EmailPreviewComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EmailPreviewComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EmailPreviewComponent, selectors: [["app-email-preview"]], inputs: { recipientEmail: "recipientEmail", message: "message", activationLink: "activationLink", buttonText: "buttonText", expirationDays: "expirationDays", senderName: "senderName", senderEmail: "senderEmail" }, decls: 52, vars: 8, consts: [[1, "email-frame"], [1, "browser-header"], [1, "browser-controls"], [1, "control", "close"], [1, "control", "minimize"], [1, "control", "maximize"], [1, "browser-tabs"], [1, "tab", "active"], ["viewBox", "0 0 24 24", "fill", "none"], ["d", "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "email-client"], [1, "email-content"], [1, "sender-section"], [1, "sender-avatar"], ["cx", "12", "cy", "8", "r", "4", "fill", "currentColor"], ["d", "M4 20c0-4 4-6 8-6s8 2 8 6", "fill", "currentColor"], [1, "sender-details"], [1, "sender-row"], [1, "sender-name"], [1, "sender-email"], [1, "recipient-row"], [1, "to-label"], [1, "to-value"], ["viewBox", "0 0 24 24", "fill", "none", 1, "dropdown-icon"], ["d", "M6 9l6 6 6-6", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "email-body-wrapper"], [1, "email-template"], [1, "email-banner"], [1, "banner-title"], [1, "email-body-content"], [1, "intro-text"], [1, "cta-container"], [1, "cta-button", 3, "href"], [1, "alt-text"], [1, "link-box"], [1, "activation-link", 3, "href"], [1, "notice"]], template: function EmailPreviewComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "span", 3)(4, "span", 4)(5, "span", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 6)(7, "div", 7);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(8, "svg", 8);
      \u0275\u0275element(9, "path", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(10, "span");
      \u0275\u0275text(11, "\u041F\u0440\u0438\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435 \u0432 Westwood - WestWood Team");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(12, "div", 10)(13, "div", 11)(14, "div", 12)(15, "div", 13);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(16, "svg", 8);
      \u0275\u0275element(17, "circle", 14)(18, "path", 15);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(19, "div", 16)(20, "div", 17)(21, "span", 18);
      \u0275\u0275text(22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "span", 19);
      \u0275\u0275text(24);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "div", 20)(26, "span", 21);
      \u0275\u0275text(27, "\u043A\u043E\u043C\u0443:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "span", 22);
      \u0275\u0275text(29, "\u043C\u043D\u0435");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(30, "svg", 23);
      \u0275\u0275element(31, "path", 24);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(32, "div", 25)(33, "div", 26)(34, "div", 27)(35, "h1", 28);
      \u0275\u0275text(36, "Welcome to Westwood!");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "div", 29)(38, "div", 30);
      \u0275\u0275text(39);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "div", 31)(41, "a", 32);
      \u0275\u0275text(42);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "p", 33);
      \u0275\u0275text(44, "Or copy and paste this link into your browser:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "div", 34)(46, "a", 35);
      \u0275\u0275text(47);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(48, "p", 36)(49, "strong");
      \u0275\u0275text(50, "Important:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(51);
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(22);
      \u0275\u0275textInterpolate(ctx.senderName);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("<", ctx.senderEmail, ">");
      \u0275\u0275advance(15);
      \u0275\u0275textInterpolate(ctx.message || "You have been invited to join Westwood as a Manager. To get started, please activate your account by clicking the button below:");
      \u0275\u0275advance(2);
      \u0275\u0275property("href", ctx.activationLink, \u0275\u0275sanitizeUrl);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.buttonText || "Activate Account", " ");
      \u0275\u0275advance(4);
      \u0275\u0275property("href", ctx.activationLink, \u0275\u0275sanitizeUrl);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.activationLink || "https://westwood.app/activate?token=...", " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" This activation link will expire in ", ctx.expirationDays || 7, " days. If you didn't request this invitation, please ignore this email. ");
    }
  }, dependencies: [CommonModule], styles: ["\n\n.email-frame[_ngcontent-%COMP%] {\n  background: #1f2937;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n  display: flex;\n  flex-direction: column;\n  min-height: 500px;\n}\n.browser-header[_ngcontent-%COMP%] {\n  background: #374151;\n  padding: 0.5rem 0.75rem;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.browser-controls[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n}\n.control[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n}\n.control.close[_ngcontent-%COMP%] {\n  background: #ef4444;\n}\n.control.minimize[_ngcontent-%COMP%] {\n  background: #fbbf24;\n}\n.control.maximize[_ngcontent-%COMP%] {\n  background: #22c55e;\n}\n.browser-tabs[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.tab[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  background: #4b5563;\n  padding: 0.375rem 0.75rem;\n  border-radius: 6px 6px 0 0;\n  font-size: 0.75rem;\n  color: #e5e7eb;\n  max-width: 280px;\n}\n.tab[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  flex-shrink: 0;\n}\n.tab[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.email-client[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  background: #ffffff;\n}\n.email-content[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  min-width: 0;\n}\n.sender-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.875rem;\n  padding: 1rem;\n  border-bottom: 1px solid #e5e7eb;\n  background: #fff;\n}\n.sender-avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #4CAF50 0%,\n      #2E7D32 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.sender-avatar[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  color: white;\n}\n.sender-details[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.sender-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.375rem;\n  flex-wrap: wrap;\n  margin-bottom: 0.25rem;\n}\n.sender-name[_ngcontent-%COMP%] {\n  font-size: 0.9375rem;\n  font-weight: 600;\n  color: #1f2937;\n}\n.sender-email[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: #6b7280;\n}\n.recipient-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  font-size: 0.8125rem;\n  color: #6b7280;\n}\n.to-label[_ngcontent-%COMP%] {\n  color: #9ca3af;\n}\n.to-value[_ngcontent-%COMP%] {\n  color: #6b7280;\n}\n.dropdown-icon[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  color: #9ca3af;\n}\n.email-body-wrapper[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  background: #f5f5f5;\n  padding: 0.5rem;\n}\n.email-template[_ngcontent-%COMP%] {\n  background: #f5f5f5;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.email-banner[_ngcontent-%COMP%] {\n  background: #4CAF50;\n  padding: 1.75rem 1.5rem;\n  text-align: center;\n}\n.banner-title[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 1.375rem;\n  font-weight: 700;\n  margin: 0;\n  letter-spacing: -0.02em;\n}\n.email-body-content[_ngcontent-%COMP%] {\n  background: white;\n  padding: 1.5rem 1.25rem;\n}\n.intro-text[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #333;\n  line-height: 1.6;\n  margin: 0 0 1.5rem;\n  white-space: pre-wrap;\n  word-break: break-word;\n}\n.cta-container[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 1.5rem 0;\n}\n.cta-button[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: #4CAF50;\n  color: white;\n  font-size: 0.875rem;\n  font-weight: 600;\n  padding: 0.75rem 1.5rem;\n  border-radius: 6px;\n  text-decoration: none;\n  transition: all 0.2s ease;\n  box-shadow: 0 2px 6px rgba(76, 175, 80, 0.3);\n}\n.cta-button[_ngcontent-%COMP%]:hover {\n  background: #43A047;\n}\n.alt-text[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #333;\n  margin: 1.5rem 0 0.75rem;\n}\n.link-box[_ngcontent-%COMP%] {\n  background: #E8F5E9;\n  border-radius: 6px;\n  padding: 0.75rem;\n  margin-bottom: 1.25rem;\n  word-break: break-all;\n}\n.activation-link[_ngcontent-%COMP%] {\n  color: #1565C0;\n  font-size: 0.8125rem;\n  text-decoration: underline;\n  line-height: 1.5;\n}\n.notice[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #333;\n  line-height: 1.6;\n  margin: 0;\n}\n.notice[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #111;\n}\n/*# sourceMappingURL=email-preview.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmailPreviewComponent, [{
    type: Component,
    args: [{ selector: "app-email-preview", standalone: true, imports: [CommonModule], template: `
    <div class="email-frame">
      <!-- Browser Chrome -->
      <div class="browser-header">
        <div class="browser-controls">
          <span class="control close"></span>
          <span class="control minimize"></span>
          <span class="control maximize"></span>
        </div>
        <div class="browser-tabs">
          <div class="tab active">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>\u041F\u0440\u0438\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435 \u0432 Westwood - WestWood Team</span>
          </div>
        </div>
      </div>

      <!-- Email Client -->
      <div class="email-client">
        <!-- Email Content -->
        <div class="email-content">
          <!-- Sender Info -->
          <div class="sender-section">
            <div class="sender-avatar">
              <svg viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="8" r="4" fill="currentColor"/>
                <path d="M4 20c0-4 4-6 8-6s8 2 8 6" fill="currentColor"/>
              </svg>
            </div>
            <div class="sender-details">
              <div class="sender-row">
                <span class="sender-name">{{ senderName }}</span>
                <span class="sender-email">&lt;{{ senderEmail }}&gt;</span>
              </div>
              <div class="recipient-row">
                <span class="to-label">\u043A\u043E\u043C\u0443:</span>
                <span class="to-value">\u043C\u043D\u0435</span>
                <svg viewBox="0 0 24 24" fill="none" class="dropdown-icon">
                  <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
          </div>

          <!-- Email Body - Westwood Template -->
          <div class="email-body-wrapper">
            <div class="email-template">
              <!-- Green Banner Header -->
              <div class="email-banner">
                <h1 class="banner-title">Welcome to Westwood!</h1>
              </div>

              <!-- Email Body Content -->
              <div class="email-body-content">
                <div class="intro-text">{{ message || 'You have been invited to join Westwood as a Manager. To get started, please activate your account by clicking the button below:' }}</div>

                <!-- CTA Button -->
                <div class="cta-container">
                  <a class="cta-button" [href]="activationLink">
                    {{ buttonText || 'Activate Account' }}
                  </a>
                </div>

                <!-- Alternative Link -->
                <p class="alt-text">Or copy and paste this link into your browser:</p>
                
                <div class="link-box">
                  <a class="activation-link" [href]="activationLink">
                    {{ activationLink || 'https://westwood.app/activate?token=...' }}
                  </a>
                </div>

                <!-- Important Notice -->
                <p class="notice">
                  <strong>Important:</strong> This activation link will expire in {{ expirationDays || 7 }} days. 
                  If you didn't request this invitation, please ignore this email.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `, styles: ["/* angular:styles/component:css;a30063f6d2020798c58b3dd7ca227342d13f4e23652bd7684a98fce4430bbc8e;/Users/baglan/repo/westwood/westwood-frontend/src/app/shared/components/email-preview/email-preview.component.ts */\n.email-frame {\n  background: #1f2937;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n  display: flex;\n  flex-direction: column;\n  min-height: 500px;\n}\n.browser-header {\n  background: #374151;\n  padding: 0.5rem 0.75rem;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.browser-controls {\n  display: flex;\n  gap: 0.5rem;\n}\n.control {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n}\n.control.close {\n  background: #ef4444;\n}\n.control.minimize {\n  background: #fbbf24;\n}\n.control.maximize {\n  background: #22c55e;\n}\n.browser-tabs {\n  flex: 1;\n}\n.tab {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  background: #4b5563;\n  padding: 0.375rem 0.75rem;\n  border-radius: 6px 6px 0 0;\n  font-size: 0.75rem;\n  color: #e5e7eb;\n  max-width: 280px;\n}\n.tab svg {\n  width: 14px;\n  height: 14px;\n  flex-shrink: 0;\n}\n.tab span {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.email-client {\n  flex: 1;\n  display: flex;\n  background: #ffffff;\n}\n.email-content {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  min-width: 0;\n}\n.sender-section {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.875rem;\n  padding: 1rem;\n  border-bottom: 1px solid #e5e7eb;\n  background: #fff;\n}\n.sender-avatar {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #4CAF50 0%,\n      #2E7D32 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.sender-avatar svg {\n  width: 24px;\n  height: 24px;\n  color: white;\n}\n.sender-details {\n  flex: 1;\n  min-width: 0;\n}\n.sender-row {\n  display: flex;\n  align-items: center;\n  gap: 0.375rem;\n  flex-wrap: wrap;\n  margin-bottom: 0.25rem;\n}\n.sender-name {\n  font-size: 0.9375rem;\n  font-weight: 600;\n  color: #1f2937;\n}\n.sender-email {\n  font-size: 0.8125rem;\n  color: #6b7280;\n}\n.recipient-row {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  font-size: 0.8125rem;\n  color: #6b7280;\n}\n.to-label {\n  color: #9ca3af;\n}\n.to-value {\n  color: #6b7280;\n}\n.dropdown-icon {\n  width: 14px;\n  height: 14px;\n  color: #9ca3af;\n}\n.email-body-wrapper {\n  flex: 1;\n  overflow-y: auto;\n  background: #f5f5f5;\n  padding: 0.5rem;\n}\n.email-template {\n  background: #f5f5f5;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.email-banner {\n  background: #4CAF50;\n  padding: 1.75rem 1.5rem;\n  text-align: center;\n}\n.banner-title {\n  color: white;\n  font-size: 1.375rem;\n  font-weight: 700;\n  margin: 0;\n  letter-spacing: -0.02em;\n}\n.email-body-content {\n  background: white;\n  padding: 1.5rem 1.25rem;\n}\n.intro-text {\n  font-size: 0.875rem;\n  color: #333;\n  line-height: 1.6;\n  margin: 0 0 1.5rem;\n  white-space: pre-wrap;\n  word-break: break-word;\n}\n.cta-container {\n  text-align: center;\n  margin: 1.5rem 0;\n}\n.cta-button {\n  display: inline-block;\n  background: #4CAF50;\n  color: white;\n  font-size: 0.875rem;\n  font-weight: 600;\n  padding: 0.75rem 1.5rem;\n  border-radius: 6px;\n  text-decoration: none;\n  transition: all 0.2s ease;\n  box-shadow: 0 2px 6px rgba(76, 175, 80, 0.3);\n}\n.cta-button:hover {\n  background: #43A047;\n}\n.alt-text {\n  font-size: 0.875rem;\n  color: #333;\n  margin: 1.5rem 0 0.75rem;\n}\n.link-box {\n  background: #E8F5E9;\n  border-radius: 6px;\n  padding: 0.75rem;\n  margin-bottom: 1.25rem;\n  word-break: break-all;\n}\n.activation-link {\n  color: #1565C0;\n  font-size: 0.8125rem;\n  text-decoration: underline;\n  line-height: 1.5;\n}\n.notice {\n  font-size: 0.875rem;\n  color: #333;\n  line-height: 1.6;\n  margin: 0;\n}\n.notice strong {\n  color: #111;\n}\n/*# sourceMappingURL=email-preview.component.css.map */\n"] }]
  }], null, { recipientEmail: [{
    type: Input
  }], message: [{
    type: Input
  }], activationLink: [{
    type: Input
  }], buttonText: [{
    type: Input
  }], expirationDays: [{
    type: Input
  }], senderName: [{
    type: Input
  }], senderEmail: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EmailPreviewComponent, { className: "EmailPreviewComponent", filePath: "src/app/shared/components/email-preview/email-preview.component.ts", lineNumber: 345 });
})();

// src/app/shared/components/invitation-form/invitation-form.component.ts
var _c03 = ["contentEditable"];
var _c12 = ["messageContentEditable"];
function InvitationFormComponent_div_10_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 54);
    \u0275\u0275listener("click", function InvitationFormComponent_div_10_button_7_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const template_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.openPreview(template_r3, $event));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 49);
    \u0275\u0275element(2, "path", 55)(3, "path", 56);
    \u0275\u0275elementEnd()();
  }
}
function InvitationFormComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275listener("click", function InvitationFormComponent_div_10_Template_div_click_0_listener() {
      const template_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.selectTemplate(template_r3));
    });
    \u0275\u0275elementStart(1, "div", 43)(2, "span", 44);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "p", 45);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 46);
    \u0275\u0275template(7, InvitationFormComponent_div_10_button_7_Template, 4, 0, "button", 47);
    \u0275\u0275elementStart(8, "button", 48);
    \u0275\u0275listener("click", function InvitationFormComponent_div_10_Template_button_click_8_listener($event) {
      const template_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.editTemplate(template_r3, $event));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 49);
    \u0275\u0275element(10, "path", 50)(11, "path", 51);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(12, "button", 52);
    \u0275\u0275listener("click", function InvitationFormComponent_div_10_Template_button_click_12_listener($event) {
      const template_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.deleteTemplate(template_r3, $event));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(13, "svg", 49);
    \u0275\u0275element(14, "path", 53);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const template_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(template_r3.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.getTemplatePreview(template_r3.content));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r3.invitationType === "whatsapp");
  }
}
function InvitationFormComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 58);
    \u0275\u0275element(2, "path", 59)(3, "path", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "p", 61);
    \u0275\u0275text(5, "\u041D\u0435\u0442 \u0448\u0430\u0431\u043B\u043E\u043D\u043E\u0432 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0439");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 62);
    \u0275\u0275text(7, "\u0421\u043E\u0437\u0434\u0430\u0439\u0442\u0435 \u043F\u0435\u0440\u0432\u044B\u0439 \u0448\u0430\u0431\u043B\u043E\u043D \u0434\u043B\u044F \u0431\u044B\u0441\u0442\u0440\u043E\u0439 \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0438");
    \u0275\u0275elementEnd()();
  }
}
function InvitationFormComponent_div_12_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 66);
    \u0275\u0275listener("click", function InvitationFormComponent_div_12_div_1_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.toggleFormCollapse());
    });
    \u0275\u0275elementStart(1, "div", 67);
    \u0275\u0275element(2, "div", 68);
    \u0275\u0275elementStart(3, "div", 69)(4, "span", 70);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 71);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 72);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 49);
    \u0275\u0275element(10, "path", 23);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", ctx_r3.getIconGradient());
    \u0275\u0275property("innerHTML", ctx_r3.getSafeIconSvg(), \u0275\u0275sanitizeHtml);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.getCollapsedPreview());
    \u0275\u0275advance(2);
    \u0275\u0275classProp("rotated", !ctx_r3.isFormCollapsed);
  }
}
function InvitationFormComponent_div_12_div_2_app_alert_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-alert", 104);
    \u0275\u0275listener("dismissed", function InvitationFormComponent_div_12_div_2_app_alert_14_Template_app_alert_dismissed_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.successMessage = "");
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275property("title", "\u0423\u0441\u043F\u0435\u0448\u043D\u043E")("dismissible", true);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.successMessage, " ");
  }
}
function InvitationFormComponent_div_12_div_2_app_alert_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-alert", 105);
    \u0275\u0275listener("dismissed", function InvitationFormComponent_div_12_div_2_app_alert_15_Template_app_alert_dismissed_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.errorMessage = "");
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275property("title", "\u041E\u0448\u0438\u0431\u043A\u0430")("dismissible", true);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.errorMessage, " ");
  }
}
function InvitationFormComponent_div_12_div_2_app_input_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-input", 106);
  }
}
function InvitationFormComponent_div_12_div_2_div_27_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 112);
    \u0275\u0275listener("click", function InvitationFormComponent_div_12_div_2_div_27_button_7_Template_button_click_0_listener() {
      const variable_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r3.selectMessageVariable(variable_r12));
    });
    \u0275\u0275elementStart(1, "span", 113);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 114);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const variable_r12 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("highlighted", ctx_r3.highlightedMessageVariableIndex === ctx_r3.filteredMessageVariables.indexOf(variable_r12));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.getVariableDisplayName(variable_r12.name));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(variable_r12.description);
  }
}
function InvitationFormComponent_div_12_div_2_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 107)(1, "div", 108)(2, "span");
    \u0275\u0275text(3, "\u041F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 109);
    \u0275\u0275listener("click", function InvitationFormComponent_div_12_div_2_div_27_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.closeMessageVariablesDropdown());
    });
    \u0275\u0275text(5, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 110);
    \u0275\u0275template(7, InvitationFormComponent_div_12_div_2_div_27_button_7_Template, 5, 4, "button", 111);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275styleProp("top", ctx_r3.messageDropdownPosition.top, "px")("left", ctx_r3.messageDropdownPosition.left, "px");
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r3.filteredMessageVariables);
  }
}
function InvitationFormComponent_div_12_div_2__svg_svg_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 115);
    \u0275\u0275element(1, "path", 116)(2, "path", 117);
    \u0275\u0275elementEnd();
  }
}
function InvitationFormComponent_div_12_div_2__svg_svg_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 118);
    \u0275\u0275element(1, "path", 119);
    \u0275\u0275elementEnd();
  }
}
function InvitationFormComponent_div_12_div_2_app_whatsapp_preview_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-whatsapp-preview", 120);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275property("contactName", ctx_r3.getPreviewContactName())("avatarLetter", ctx_r3.getPreviewAvatarLetter())("message", ctx_r3.getPreviewMessage())("showInputBar", true)("noShadow", true);
  }
}
function InvitationFormComponent_div_12_div_2_app_email_preview_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-email-preview", 121);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275property("recipientEmail", ctx_r3.getPreviewEmail())("message", ctx_r3.getPreviewMessage())("activationLink", "https://westwood.app/activate?token=xxx")("buttonText", "Activate Account")("expirationDays", 7)("senderEmail", "noreply@westwood.app");
  }
}
function InvitationFormComponent_div_12_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 73)(1, "div", 74);
    \u0275\u0275listener("click", function InvitationFormComponent_div_12_div_2_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.toggleFormCollapse());
    });
    \u0275\u0275elementStart(2, "div", 75);
    \u0275\u0275element(3, "div", 76);
    \u0275\u0275elementStart(4, "div", 77)(5, "h2", 78);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 79);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "button", 80);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(10, "svg", 49);
    \u0275\u0275element(11, "path", 23);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(12, "div", 81)(13, "app-card", 82);
    \u0275\u0275template(14, InvitationFormComponent_div_12_div_2_app_alert_14_Template, 2, 3, "app-alert", 83)(15, InvitationFormComponent_div_12_div_2_app_alert_15_Template, 2, 3, "app-alert", 84);
    \u0275\u0275elementStart(16, "form", 85);
    \u0275\u0275listener("ngSubmit", function InvitationFormComponent_div_12_div_2_Template_form_ngSubmit_16_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.onFormSubmit());
    });
    \u0275\u0275template(17, InvitationFormComponent_div_12_div_2_app_input_17_Template, 1, 0, "app-input", 86);
    \u0275\u0275elementStart(18, "div", 87)(19, "div", 88)(20, "app-typography", 89);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "app-typography", 90);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 25)(25, "div", 91, 1);
    \u0275\u0275listener("input", function InvitationFormComponent_div_12_div_2_Template_div_input_25_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.onMessageInput($event));
    })("keydown", function InvitationFormComponent_div_12_div_2_Template_div_keydown_25_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.onMessageKeydown($event));
    })("click", function InvitationFormComponent_div_12_div_2_Template_div_click_25_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.onMessageClick());
    })("blur", function InvitationFormComponent_div_12_div_2_Template_div_blur_25_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.onMessageBlur($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(27, InvitationFormComponent_div_12_div_2_div_27_Template, 8, 5, "div", 27);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(28, "app-divider", 92);
    \u0275\u0275elementStart(29, "app-button", 93)(30, "span", 94);
    \u0275\u0275elementContainerStart(31, 30);
    \u0275\u0275template(32, InvitationFormComponent_div_12_div_2__svg_svg_32_Template, 3, 0, "svg", 95)(33, InvitationFormComponent_div_12_div_2__svg_svg_33_Template, 2, 0, "svg", 96);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(35, "div", 97)(36, "div", 98);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(37, "svg", 99);
    \u0275\u0275element(38, "path", 55)(39, "path", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(40, "h3", 100);
    \u0275\u0275text(41, "\u041F\u0440\u0435\u0434\u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "p", 101);
    \u0275\u0275text(43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerStart(44, 30);
    \u0275\u0275template(45, InvitationFormComponent_div_12_div_2_app_whatsapp_preview_45_Template, 1, 5, "app-whatsapp-preview", 102)(46, InvitationFormComponent_div_12_div_2_app_email_preview_46_Template, 1, 6, "app-email-preview", 103);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("background", ctx_r3.getIconGradient());
    \u0275\u0275property("innerHTML", ctx_r3.getSafeIconSvg(), \u0275\u0275sanitizeHtml);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.subtitle);
    \u0275\u0275advance(5);
    \u0275\u0275property("shadow", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.successMessage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.errorMessage);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r3.form);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.invitationType === "email");
    \u0275\u0275advance(3);
    \u0275\u0275property("medium", true);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.invitationType === "email" ? "\u0422\u0435\u043A\u0441\u0442 \u043F\u0438\u0441\u044C\u043C\u0430" : "\u0422\u0435\u043A\u0441\u0442 \u043F\u0440\u0438\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u044F", " ");
    \u0275\u0275advance();
    \u0275\u0275property("muted", true);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r3.getMessageLength(), "/", ctx_r3.invitationType === "email" ? "1000" : "500", " ");
    \u0275\u0275advance();
    \u0275\u0275attribute("data-type", ctx_r3.invitationType);
    \u0275\u0275advance();
    \u0275\u0275attribute("data-type", ctx_r3.invitationType)("placeholder", ctx_r3.invitationType === "email" ? "\u041D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0435 \u043F\u0440\u0438\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435..." : "\u041D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0435 \u043F\u0440\u0438\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435...");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r3.showMessageVariablesDropdown);
    \u0275\u0275advance();
    \u0275\u0275property("spaced", true);
    \u0275\u0275advance();
    \u0275\u0275property("buttonType", ctx_r3.invitationType === "email" ? "primary" : "success")("disabled", ctx_r3.form.invalid || ctx_r3.isSending)("loading", ctx_r3.isSending);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngSwitch", ctx_r3.invitationType);
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "whatsapp");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r3.isSending ? ctx_r3.invitationType === "email" ? "\u041E\u0442\u043F\u0440\u0430\u0432\u043A\u0430..." : "\u041E\u0442\u043A\u0440\u044B\u0432\u0430\u0435\u043C WhatsApp..." : ctx_r3.invitationType === "email" ? "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C Email" : "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0432 WhatsApp", " ");
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("color", ctx_r3.iconColor);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r3.previewDescription);
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitch", ctx_r3.invitationType);
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "whatsapp");
  }
}
function InvitationFormComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275template(1, InvitationFormComponent_div_12_div_1_Template, 11, 7, "div", 64)(2, InvitationFormComponent_div_12_div_2_Template, 47, 31, "div", 65);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.isFormCollapsed);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.isFormCollapsed);
  }
}
function InvitationFormComponent_option_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 122);
    \u0275\u0275text(1, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0442\u0438\u043F\u043E\u0432...");
    \u0275\u0275elementEnd();
  }
}
function InvitationFormComponent_option_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 123);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const templateType_r13 = ctx.$implicit;
    \u0275\u0275property("value", templateType_r13.type);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", templateType_r13.displayName, " ");
  }
}
function InvitationFormComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "label", 16);
    \u0275\u0275text(2, "\u0422\u0435\u043C\u0430 \u043F\u0438\u0441\u044C\u043C\u0430");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 124);
    \u0275\u0275twoWayListener("ngModelChange", function InvitationFormComponent_div_28_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.newTemplate.subject, $event) || (ctx_r3.newTemplate.subject = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("data-type", ctx_r3.invitationType);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.newTemplate.subject);
    \u0275\u0275attribute("data-type", ctx_r3.invitationType);
  }
}
function InvitationFormComponent_div_35_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 112);
    \u0275\u0275listener("click", function InvitationFormComponent_div_35_button_7_Template_button_click_0_listener() {
      const variable_r17 = \u0275\u0275restoreView(_r16).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.selectVariable(variable_r17));
    });
    \u0275\u0275elementStart(1, "span", 113);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 114);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const variable_r17 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("highlighted", ctx_r3.highlightedVariableIndex === ctx_r3.filteredVariables.indexOf(variable_r17));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.getVariableDisplayName(variable_r17.name));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(variable_r17.description);
  }
}
function InvitationFormComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 107)(1, "div", 108)(2, "span");
    \u0275\u0275text(3, "\u041F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 109);
    \u0275\u0275listener("click", function InvitationFormComponent_div_35_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeVariablesDropdown());
    });
    \u0275\u0275text(5, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 110);
    \u0275\u0275template(7, InvitationFormComponent_div_35_button_7_Template, 5, 4, "button", 111);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("top", ctx_r3.dropdownPosition.top, "px")("left", ctx_r3.dropdownPosition.left, "px");
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r3.filteredVariables);
  }
}
function InvitationFormComponent_app_whatsapp_preview_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-whatsapp-preview", 125);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("contactName", "\u041F\u043E\u043B\u0443\u0447\u0430\u0442\u0435\u043B\u044C")("avatarLetter", "\u041F")("message", ctx_r3.newTemplate.content || "\u0422\u0435\u043A\u0441\u0442 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F...")("showInputBar", true)("noShadow", true);
  }
}
function InvitationFormComponent_app_email_preview_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-email-preview", 126);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("recipientEmail", "email@example.com")("message", ctx_r3.newTemplate.content || "\u0422\u0435\u043A\u0441\u0442 \u043F\u0438\u0441\u044C\u043C\u0430...")("activationLink", "https://westwood.app/activate?token=xxx")("buttonText", "Activate Account")("expirationDays", 7)("senderEmail", "noreply@westwood.app");
  }
}
function InvitationFormComponent_app_whatsapp_preview_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-whatsapp-preview", 125);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("contactName", "\u041F\u043E\u043B\u0443\u0447\u0430\u0442\u0435\u043B\u044C")("avatarLetter", "\u041F")("message", ctx_r3.previewTemplate.content)("showInputBar", true)("noShadow", true);
  }
}
function InvitationFormComponent_div_56_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 130)(1, "div", 131);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 49);
    \u0275\u0275element(3, "path", 132);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "h3", 133);
    \u0275\u0275text(5, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0448\u0430\u0431\u043B\u043E\u043D?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 134);
    \u0275\u0275text(7, " \u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B, \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0448\u0430\u0431\u043B\u043E\u043D ");
    \u0275\u0275elementStart(8, "strong");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, "?");
    \u0275\u0275element(11, "br");
    \u0275\u0275text(12, " \u042D\u0442\u043E \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u043D\u0435\u043B\u044C\u0437\u044F \u043E\u0442\u043C\u0435\u043D\u0438\u0442\u044C. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 135)(14, "button", 136);
    \u0275\u0275listener("click", function InvitationFormComponent_div_56_div_2_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.closeDeleteTemplateModal());
    });
    \u0275\u0275text(15, "\u041E\u0442\u043C\u0435\u043D\u0430");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 137);
    \u0275\u0275listener("click", function InvitationFormComponent_div_56_div_2_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.proceedToDeleteTemplateStep2());
    });
    \u0275\u0275text(17, "\u0414\u0430, \u0443\u0434\u0430\u043B\u0438\u0442\u044C");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r3.templateToDelete == null ? null : ctx_r3.templateToDelete.name);
  }
}
function InvitationFormComponent_div_56_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 130)(1, "div", 138);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 49);
    \u0275\u0275element(3, "path", 139);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "h3", 133);
    \u0275\u0275text(5, "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u0435");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 134);
    \u0275\u0275text(7, " \u0414\u043B\u044F \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u044F \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u044F \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043B\u043E\u0432\u043E ");
    \u0275\u0275elementStart(8, "strong", 140);
    \u0275\u0275text(9, "\u0443\u0434\u0430\u043B\u0438\u0442\u044C");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "input", 141);
    \u0275\u0275twoWayListener("ngModelChange", function InvitationFormComponent_div_56_div_3_Template_input_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r3 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r3.deleteTemplateConfirmationText, $event) || (ctx_r3.deleteTemplateConfirmationText = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function InvitationFormComponent_div_56_div_3_Template_input_input_10_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.checkDeleteTemplateConfirmation());
    })("keydown.enter", function InvitationFormComponent_div_56_div_3_Template_input_keydown_enter_10_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.confirmDeleteTemplate());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 135)(12, "button", 136);
    \u0275\u0275listener("click", function InvitationFormComponent_div_56_div_3_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.closeDeleteTemplateModal());
    });
    \u0275\u0275text(13, "\u041E\u0442\u043C\u0435\u043D\u0430");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 142);
    \u0275\u0275listener("click", function InvitationFormComponent_div_56_div_3_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.confirmDeleteTemplate());
    });
    \u0275\u0275text(15, " \u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043D\u0430\u0432\u0441\u0435\u0433\u0434\u0430 ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.deleteTemplateConfirmationText);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", !ctx_r3.isDeleteTemplateConfirmed);
  }
}
function InvitationFormComponent_div_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 127);
    \u0275\u0275listener("click", function InvitationFormComponent_div_56_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeDeleteTemplateModal());
    });
    \u0275\u0275elementStart(1, "div", 128);
    \u0275\u0275listener("click", function InvitationFormComponent_div_56_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r18);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275template(2, InvitationFormComponent_div_56_div_2_Template, 18, 1, "div", 129)(3, InvitationFormComponent_div_56_div_3_Template, 16, 2, "div", 129);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r3.deleteTemplateStep === 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.deleteTemplateStep === 2);
  }
}
var InvitationFormComponent = class _InvitationFormComponent {
  sanitizer;
  contentEditableRef;
  messageContentEditableRef;
  invitationType = "whatsapp";
  form;
  title = "\u041F\u0440\u0438\u0433\u043B\u0430\u0441\u0438 \u0434\u0440\u0443\u0433\u0430";
  subtitle = "";
  iconSvg = "";
  iconColor = "#25D366";
  previewDescription = "";
  messageTemplates = [];
  isSending = false;
  successMessage = "";
  errorMessage = "";
  hideForm = false;
  templateTypes = [];
  templateVariables = [];
  formSubmit = new EventEmitter();
  templateSelected = new EventEmitter();
  templateCreated = new EventEmitter();
  templateUpdated = new EventEmitter();
  templateDeleted = new EventEmitter();
  isFormCollapsed = false;
  showCreateTemplateModal = false;
  showPreviewModal = false;
  previewTemplate = null;
  editingTemplateId = null;
  // Delete template modal state
  showDeleteTemplateModal = false;
  deleteTemplateStep = 1;
  deleteTemplateConfirmationText = "";
  isDeleteTemplateConfirmed = false;
  templateToDelete = null;
  newTemplate = {
    id: "",
    name: "",
    type: "bonus_accrued",
    content: "",
    createdAt: /* @__PURE__ */ new Date()
  };
  // Variables dropdown for template modal
  showVariablesDropdown = false;
  highlightedVariableIndex = 0;
  dropdownPosition = { top: 0, left: 0 };
  currentBracePosition = -1;
  // Variables dropdown for message textarea
  showMessageVariablesDropdown = false;
  highlightedMessageVariableIndex = 0;
  messageDropdownPosition = { top: 0, left: 0 };
  currentMessageBracePosition = -1;
  // Use API-provided variables, fallback to empty array if not provided
  get availableVariables() {
    return this.templateVariables.length > 0 ? this.templateVariables : [];
  }
  filteredVariables = [];
  filteredMessageVariables = [];
  constructor(sanitizer) {
    this.sanitizer = sanitizer;
  }
  ngAfterViewInit() {
    if (this.contentEditableRef) {
      this.updateContentEditable();
    }
  }
  getSafeIconSvg() {
    if (typeof this.iconSvg === "string") {
      return this.sanitizer.bypassSecurityTrustHtml(this.iconSvg);
    }
    return this.iconSvg || this.sanitizer.bypassSecurityTrustHtml("");
  }
  toggleFormCollapse() {
    this.isFormCollapsed = !this.isFormCollapsed;
  }
  getCollapsedPreview() {
    const message = this.form.get("message")?.value || "";
    if (!message)
      return "\u0422\u0435\u043A\u0441\u0442 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F \u043D\u0435 \u0432\u0432\u0435\u0434\u0451\u043D";
    const words = message.split(/\s+/).slice(0, 8).join(" ");
    return words + (message.split(/\s+/).length > 8 ? "..." : "");
  }
  onFormSubmit() {
    this.formSubmit.emit();
  }
  getVariableDisplayName(variableName) {
    return variableName.replace(/[{}]/g, "");
  }
  getTemplateTypeLabel(type) {
    if (!type || typeof type !== "string") {
      return type || "";
    }
    return type.split("_").map((word) => word.charAt(0) + word.slice(1).toLowerCase()).join(" ");
  }
  getTemplatePreview(content) {
    const words = content.split(/\s+/).slice(0, 10).join(" ");
    return words + (content.split(/\s+/).length > 10 ? "..." : "");
  }
  selectTemplate(template) {
    this.form.patchValue({
      message: template.content
    });
    if (this.invitationType === "email" && template.subject) {
      this.form.patchValue({
        subject: template.subject
      });
    }
    this.templateSelected.emit(template);
    this.isFormCollapsed = false;
    setTimeout(() => {
      this.updateMessageContentEditable();
    }, 100);
  }
  openCreateTemplateModal() {
    const defaultType = this.templateTypes.length > 0 ? this.templateTypes[0].type : "";
    this.newTemplate = {
      id: "",
      name: "",
      type: defaultType,
      content: "",
      subject: this.invitationType === "email" ? "" : void 0,
      createdAt: /* @__PURE__ */ new Date()
    };
    this.editingTemplateId = null;
    this.closeVariablesDropdown();
    setTimeout(() => {
      this.showCreateTemplateModal = true;
      setTimeout(() => {
        this.updateContentEditable();
      }, 100);
    }, 0);
  }
  closeCreateTemplateModal() {
    this.showCreateTemplateModal = false;
    this.editingTemplateId = null;
    this.closeVariablesDropdown();
  }
  saveTemplate() {
    if (this.contentEditableRef) {
      const element = this.contentEditableRef.nativeElement;
      this.newTemplate.content = this.getPlainTextFromElement(element);
    }
    if (!this.newTemplate.name || !this.newTemplate.content)
      return;
    if (this.invitationType === "email" && !this.newTemplate.subject)
      return;
    if (this.editingTemplateId) {
      const template = __spreadProps(__spreadValues({}, this.newTemplate), {
        id: this.editingTemplateId
      });
      this.templateUpdated.emit(template);
    } else {
      const template = __spreadProps(__spreadValues({}, this.newTemplate), {
        id: Date.now().toString(),
        createdAt: /* @__PURE__ */ new Date()
      });
      this.templateCreated.emit(template);
    }
    this.closeCreateTemplateModal();
  }
  editTemplate(template, event) {
    event.stopPropagation();
    this.newTemplate = __spreadValues({}, template);
    this.editingTemplateId = template.id;
    this.showCreateTemplateModal = true;
    this.closeVariablesDropdown();
    setTimeout(() => {
      this.updateContentEditable();
    }, 100);
  }
  deleteTemplate(template, event) {
    event.stopPropagation();
    this.openDeleteTemplateModal(template);
  }
  openDeleteTemplateModal(template) {
    this.templateToDelete = template;
    this.deleteTemplateStep = 1;
    this.deleteTemplateConfirmationText = "";
    this.isDeleteTemplateConfirmed = false;
    this.showDeleteTemplateModal = true;
  }
  closeDeleteTemplateModal() {
    this.showDeleteTemplateModal = false;
    this.deleteTemplateStep = 1;
    this.deleteTemplateConfirmationText = "";
    this.isDeleteTemplateConfirmed = false;
    this.templateToDelete = null;
  }
  proceedToDeleteTemplateStep2() {
    this.deleteTemplateStep = 2;
  }
  checkDeleteTemplateConfirmation() {
    this.isDeleteTemplateConfirmed = this.deleteTemplateConfirmationText.toLowerCase().trim() === "\u0443\u0434\u0430\u043B\u0438\u0442\u044C";
  }
  confirmDeleteTemplate() {
    if (this.templateToDelete && this.isDeleteTemplateConfirmed) {
      this.templateDeleted.emit(this.templateToDelete.id);
      this.closeDeleteTemplateModal();
    }
  }
  openPreview(template, event) {
    event.stopPropagation();
    this.previewTemplate = template;
    this.showPreviewModal = true;
  }
  closePreview() {
    this.showPreviewModal = false;
    this.previewTemplate = null;
  }
  getPreviewMessage() {
    return this.form.get("message")?.value || "\u0422\u0435\u043A\u0441\u0442 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F...";
  }
  getPreviewContactName() {
    return "\u041F\u043E\u043B\u0443\u0447\u0430\u0442\u0435\u043B\u044C";
  }
  getPreviewAvatarLetter() {
    return "\u041F";
  }
  getPreviewEmail() {
    return "email@example.com";
  }
  getIconGradient() {
    if (this.invitationType === "email") {
      return "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)";
    }
    return "linear-gradient(135deg, #25D366 0%, #128C7E 100%)";
  }
  // Variables dropdown methods
  formatTimeout = null;
  isFormatting = false;
  lastFormattedContent = "";
  messageFormatTimeout = null;
  isMessageFormatting = false;
  lastFormattedMessageContent = "";
  onContentInput(event) {
    const target = event.target;
    const text = this.getPlainTextFromElement(target);
    this.newTemplate.content = text;
    if (this.isFormatting) {
      return;
    }
    if (this.formatTimeout) {
      clearTimeout(this.formatTimeout);
    }
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      const textBeforeCursor = this.getTextBeforeCursor(target, range);
      const lastDoubleBraceIndex = textBeforeCursor.lastIndexOf("{{");
      if (lastDoubleBraceIndex !== -1) {
        const textAfterBrace = textBeforeCursor.substring(lastDoubleBraceIndex + 2);
        if (!textAfterBrace.includes("}}")) {
          this.currentBracePosition = lastDoubleBraceIndex;
          this.showVariablesDropdown = true;
          const searchText = textAfterBrace.toLowerCase();
          this.filteredVariables = this.availableVariables.filter((v) => v.name.toLowerCase().includes(searchText) || v.description.toLowerCase().includes(searchText));
          if (this.filteredVariables.length === 0) {
            this.filteredVariables = [...this.availableVariables];
          }
          this.highlightedVariableIndex = 0;
          this.updateDropdownPosition(target, range);
          this.formatTimeout = setTimeout(() => this.formatContentWithVariables(target), 150);
          return;
        }
      }
    }
    const hasOpenDoubleBrace = text.includes("{{") && !text.match(/\{\{[^}]*$/);
    if (!hasOpenDoubleBrace) {
      this.closeVariablesDropdown();
    }
    if (text !== this.lastFormattedContent) {
      this.formatTimeout = setTimeout(() => this.formatContentWithVariables(target), 200);
    }
  }
  onContentKeydown(event) {
    if (this.showVariablesDropdown) {
      if (event.key === "ArrowDown") {
        event.preventDefault();
        this.highlightedVariableIndex = Math.min(this.highlightedVariableIndex + 1, this.filteredVariables.length - 1);
        this.scrollToHighlightedVariable();
      } else if (event.key === "ArrowUp") {
        event.preventDefault();
        this.highlightedVariableIndex = Math.max(this.highlightedVariableIndex - 1, 0);
        this.scrollToHighlightedVariable();
      } else if (event.key === "Enter") {
        event.preventDefault();
        if (this.filteredVariables[this.highlightedVariableIndex]) {
          this.selectVariable(this.filteredVariables[this.highlightedVariableIndex]);
        }
      } else if (event.key === "Escape") {
        event.preventDefault();
        this.closeVariablesDropdown();
      } else if (event.key === "}") {
        const target = event.target;
        const text = this.getPlainTextFromElement(target);
        const selection = window.getSelection();
        if (selection && selection.rangeCount > 0) {
          const range = selection.getRangeAt(0);
          const textBeforeCursor = this.getTextBeforeCursor(target, range);
          if (textBeforeCursor.endsWith("}")) {
            event.preventDefault();
            this.closeVariablesDropdown();
          }
        }
      }
    }
  }
  scrollToHighlightedVariable() {
    setTimeout(() => {
      const dropdown = document.querySelector(".variables-dropdown-list");
      const highlighted = document.querySelector(".variable-option.highlighted");
      if (dropdown && highlighted) {
        highlighted.scrollIntoView({ block: "nearest", behavior: "smooth" });
      }
    }, 0);
  }
  updateMessageContentEditable() {
    if (this.messageContentEditableRef) {
      const element = this.messageContentEditableRef.nativeElement;
      const messageValue = this.form.get("message")?.value || "";
      if (messageValue) {
        this.isMessageFormatting = false;
        this.lastFormattedMessageContent = "";
        this.formatMessageWithVariables(element);
      } else {
        element.innerHTML = "";
        this.lastFormattedMessageContent = "";
      }
    }
  }
  onContentClick() {
  }
  onContentBlur(event) {
    const relatedTarget = event.relatedTarget;
    if (relatedTarget && !relatedTarget.closest(".variables-dropdown")) {
      setTimeout(() => {
        if (document.activeElement !== this.contentEditableRef?.nativeElement) {
          this.closeVariablesDropdown();
        }
      }, 200);
    }
  }
  updateDropdownPosition(element, range) {
    const rect = range.getBoundingClientRect();
    const parentRect = element.getBoundingClientRect();
    const scrollTop = element.scrollTop || 0;
    const scrollLeft = element.scrollLeft || 0;
    this.dropdownPosition = {
      top: rect.bottom - parentRect.top + scrollTop + 5,
      left: rect.left - parentRect.left + scrollLeft
    };
  }
  selectVariable(variable) {
    const target = this.contentEditableRef?.nativeElement || document.querySelector(".form-textarea-editable");
    if (!target)
      return;
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0)
      return;
    const range = selection.getRangeAt(0);
    const text = this.getPlainTextFromElement(target);
    const textBeforeCursor = this.getTextBeforeCursor(target, range);
    const lastDoubleBraceIndex = textBeforeCursor.lastIndexOf("{{");
    if (lastDoubleBraceIndex === -1) {
      this.closeVariablesDropdown();
      return;
    }
    const cursorPos = this.getCursorPosition(target, range);
    const textAfterBrace = textBeforeCursor.substring(lastDoubleBraceIndex + 2);
    const variableName = variable.name.replace(/[{}]/g, "");
    const beforeBrace = text.substring(0, lastDoubleBraceIndex + 2);
    const afterCursor = text.substring(cursorPos);
    const newContent = beforeBrace + variableName + "}}" + afterCursor;
    this.newTemplate.content = newContent;
    this.formatContentWithVariables(target);
    setTimeout(() => {
      const newCursorPos = lastDoubleBraceIndex + 2 + variable.name.length + 2;
      this.setCursorPosition(target, newCursorPos);
    }, 20);
    this.closeVariablesDropdown();
  }
  closeVariablesDropdown() {
    this.showVariablesDropdown = false;
    this.highlightedVariableIndex = 0;
    this.currentBracePosition = -1;
  }
  getFormattedContent() {
    if (!this.newTemplate.content)
      return "";
    return this.newTemplate.content.replace(/\{(\w+)\}/g, '<span class="variable-tag">{$1}</span>');
  }
  formatContentWithVariables(element) {
    if (this.isFormatting) {
      return;
    }
    this.isFormatting = true;
    const text = this.newTemplate.content || this.getPlainTextFromElement(element);
    if (!text) {
      element.innerHTML = "";
      this.lastFormattedContent = "";
      this.isFormatting = false;
      return;
    }
    if (text === this.lastFormattedContent) {
      this.isFormatting = false;
      return;
    }
    const selection = window.getSelection();
    let cursorPosition = 0;
    let isFocused = document.activeElement === element;
    if (selection && selection.rangeCount > 0 && isFocused) {
      try {
        const range = selection.getRangeAt(0);
        cursorPosition = this.getCursorPosition(element, range);
      } catch (e) {
        cursorPosition = text.length;
      }
    }
    const parts = [];
    let lastIndex = 0;
    const variableRegex = /\{\{([a-zA-Z_][a-zA-Z0-9_]*)\}\}/g;
    let match;
    while ((match = variableRegex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        const beforeText = text.substring(lastIndex, match.index);
        parts.push(this.escapeHtml(beforeText));
      }
      parts.push(`<span class="variable-tag">{{${match[1]}}}</span>`);
      lastIndex = variableRegex.lastIndex;
    }
    if (lastIndex < text.length) {
      parts.push(this.escapeHtml(text.substring(lastIndex)));
    }
    const html = parts.length > 0 ? parts.join("") : this.escapeHtml(text);
    if (element.innerHTML !== html) {
      element.innerHTML = html;
      this.lastFormattedContent = text;
      if (selection && isFocused && cursorPosition >= 0) {
        requestAnimationFrame(() => {
          if (document.activeElement === element && cursorPosition <= text.length) {
            this.setCursorPosition(element, cursorPosition);
          }
          this.isFormatting = false;
        });
      } else {
        this.isFormatting = false;
      }
    } else {
      this.lastFormattedContent = text;
      this.isFormatting = false;
    }
  }
  getPlainTextFromElement(element) {
    return element.innerText || element.textContent || "";
  }
  getTextBeforeCursor(element, range) {
    const text = this.getPlainTextFromElement(element);
    const cursorPos = this.getCursorPosition(element, range);
    return text.substring(0, cursorPos);
  }
  getTextAfterCursor(element, range) {
    const text = this.getPlainTextFromElement(element);
    const cursorPos = this.getCursorPosition(element, range);
    return text.substring(cursorPos);
  }
  getCursorPosition(element, range) {
    const preCaretRange = range.cloneRange();
    preCaretRange.selectNodeContents(element);
    preCaretRange.setEnd(range.endContainer, range.endOffset);
    const tempDiv = document.createElement("div");
    tempDiv.appendChild(preCaretRange.cloneContents());
    return tempDiv.textContent?.length || 0;
  }
  setCursorPosition(element, position) {
    const selection = window.getSelection();
    if (!selection)
      return;
    if (document.activeElement !== element) {
      element.focus();
    }
    const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, null);
    let currentPos = 0;
    let targetNode = null;
    let targetOffset = 0;
    let node;
    while (node = walker.nextNode()) {
      const textLength = node.textContent?.length || 0;
      if (currentPos + textLength >= position) {
        targetNode = node;
        targetOffset = position - currentPos;
        break;
      }
      currentPos += textLength;
    }
    if (!targetNode) {
      const lastNode = this.getLastTextNode(element);
      if (lastNode) {
        targetNode = lastNode;
        targetOffset = lastNode.textContent?.length || 0;
      } else {
        const textNode = document.createTextNode("");
        element.appendChild(textNode);
        targetNode = textNode;
        targetOffset = 0;
      }
    }
    if (targetNode) {
      try {
        const newRange = document.createRange();
        const maxOffset = targetNode.textContent?.length || 0;
        const offset = Math.max(0, Math.min(targetOffset, maxOffset));
        newRange.setStart(targetNode, offset);
        newRange.collapse(true);
        selection.removeAllRanges();
        selection.addRange(newRange);
        const rect = newRange.getBoundingClientRect();
        if (rect.top < 0 || rect.bottom > window.innerHeight) {
          targetNode.parentElement?.scrollIntoView({ block: "nearest", behavior: "smooth" });
        }
      } catch (e) {
        console.warn("Failed to set cursor position:", e);
        element.focus();
      }
    }
  }
  getLastTextNode(element) {
    const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, null);
    let lastNode = null;
    let node;
    while (node = walker.nextNode()) {
      lastNode = node;
    }
    return lastNode;
  }
  escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  }
  findTextNodeAtPosition(element, position) {
    let currentPos = 0;
    const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, null);
    let node;
    while (node = walker.nextNode()) {
      const textLength = node.textContent?.length || 0;
      if (currentPos + textLength >= position) {
        return node;
      }
      currentPos += textLength;
    }
    return null;
  }
  getPlainTextContent() {
    return this.newTemplate.content || "";
  }
  getPlainTextFromHtml(html) {
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.innerText || div.textContent || "";
  }
  updateContentEditable() {
    if (this.contentEditableRef) {
      const element = this.contentEditableRef.nativeElement;
      if (this.newTemplate.content) {
        this.isFormatting = false;
        this.lastFormattedContent = "";
        this.formatContentWithVariables(element);
      } else {
        element.innerHTML = "";
        this.lastFormattedContent = "";
      }
    }
  }
  // Message textarea methods
  getMessageLength() {
    if (this.messageContentEditableRef) {
      return this.getPlainTextFromElement(this.messageContentEditableRef.nativeElement).length;
    }
    return this.form.get("message")?.value?.length || 0;
  }
  onMessageInput(event) {
    const target = event.target;
    const text = this.getPlainTextFromElement(target);
    this.form.patchValue({ message: text });
    if (this.isMessageFormatting) {
      return;
    }
    if (this.messageFormatTimeout) {
      clearTimeout(this.messageFormatTimeout);
    }
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      const textBeforeCursor = this.getTextBeforeCursor(target, range);
      const lastDoubleBraceIndex = textBeforeCursor.lastIndexOf("{{");
      if (lastDoubleBraceIndex !== -1) {
        const textAfterBrace = textBeforeCursor.substring(lastDoubleBraceIndex + 2);
        if (!textAfterBrace.includes("}}")) {
          this.currentMessageBracePosition = lastDoubleBraceIndex;
          this.showMessageVariablesDropdown = true;
          const searchText = textAfterBrace.toLowerCase();
          this.filteredMessageVariables = this.availableVariables.filter((v) => v.name.toLowerCase().includes(searchText) || v.description.toLowerCase().includes(searchText));
          if (this.filteredMessageVariables.length === 0) {
            this.filteredMessageVariables = [...this.availableVariables];
          }
          this.highlightedMessageVariableIndex = 0;
          this.updateMessageDropdownPosition(target, range);
          this.messageFormatTimeout = setTimeout(() => this.formatMessageWithVariables(target), 150);
          return;
        }
      }
    }
    const hasOpenDoubleBrace = text.includes("{{") && !text.match(/\{\{[^}]*$/);
    if (!hasOpenDoubleBrace) {
      this.closeMessageVariablesDropdown();
    }
    if (text !== this.lastFormattedMessageContent) {
      this.messageFormatTimeout = setTimeout(() => this.formatMessageWithVariables(target), 200);
    }
  }
  onMessageKeydown(event) {
    if (this.showMessageVariablesDropdown) {
      if (event.key === "ArrowDown") {
        event.preventDefault();
        this.highlightedMessageVariableIndex = Math.min(this.highlightedMessageVariableIndex + 1, this.filteredMessageVariables.length - 1);
        this.scrollToHighlightedMessageVariable();
      } else if (event.key === "ArrowUp") {
        event.preventDefault();
        this.highlightedMessageVariableIndex = Math.max(this.highlightedMessageVariableIndex - 1, 0);
        this.scrollToHighlightedMessageVariable();
      } else if (event.key === "Enter") {
        event.preventDefault();
        if (this.filteredMessageVariables[this.highlightedMessageVariableIndex]) {
          this.selectMessageVariable(this.filteredMessageVariables[this.highlightedMessageVariableIndex]);
        }
      } else if (event.key === "Escape") {
        event.preventDefault();
        this.closeMessageVariablesDropdown();
      } else if (event.key === "}") {
        const target = event.target;
        const selection = window.getSelection();
        if (selection && selection.rangeCount > 0) {
          const range = selection.getRangeAt(0);
          const textBeforeCursor = this.getTextBeforeCursor(target, range);
          if (textBeforeCursor.endsWith("}")) {
            event.preventDefault();
            this.closeMessageVariablesDropdown();
          }
        }
      }
    }
  }
  onMessageClick() {
  }
  onMessageBlur(event) {
    const relatedTarget = event.relatedTarget;
    if (relatedTarget && !relatedTarget.closest(".variables-dropdown")) {
      setTimeout(() => {
        if (document.activeElement !== this.messageContentEditableRef?.nativeElement) {
          this.closeMessageVariablesDropdown();
        }
      }, 200);
    }
  }
  updateMessageDropdownPosition(element, range) {
    const rect = range.getBoundingClientRect();
    const parentRect = element.getBoundingClientRect();
    const scrollTop = element.scrollTop || 0;
    const scrollLeft = element.scrollLeft || 0;
    this.messageDropdownPosition = {
      top: rect.bottom - parentRect.top + scrollTop + 5,
      left: rect.left - parentRect.left + scrollLeft
    };
  }
  selectMessageVariable(variable) {
    const target = this.messageContentEditableRef?.nativeElement;
    if (!target)
      return;
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0)
      return;
    const range = selection.getRangeAt(0);
    const text = this.getPlainTextFromElement(target);
    const textBeforeCursor = this.getTextBeforeCursor(target, range);
    const lastDoubleBraceIndex = textBeforeCursor.lastIndexOf("{{");
    if (lastDoubleBraceIndex === -1) {
      this.closeMessageVariablesDropdown();
      return;
    }
    const cursorPos = this.getCursorPosition(target, range);
    const variableName = variable.name.replace(/[{}]/g, "");
    const beforeBrace = text.substring(0, lastDoubleBraceIndex + 2);
    const afterCursor = text.substring(cursorPos);
    const newContent = beforeBrace + variableName + "}}" + afterCursor;
    this.form.patchValue({ message: newContent });
    this.formatMessageWithVariables(target);
    setTimeout(() => {
      const newCursorPos = lastDoubleBraceIndex + 2 + variable.name.length + 2;
      this.setCursorPosition(target, newCursorPos);
    }, 20);
    this.closeMessageVariablesDropdown();
  }
  closeMessageVariablesDropdown() {
    this.showMessageVariablesDropdown = false;
    this.highlightedMessageVariableIndex = 0;
    this.currentMessageBracePosition = -1;
  }
  formatMessageWithVariables(element) {
    if (this.isMessageFormatting) {
      return;
    }
    this.isMessageFormatting = true;
    const text = this.form.get("message")?.value || this.getPlainTextFromElement(element);
    if (!text) {
      element.innerHTML = "";
      this.lastFormattedMessageContent = "";
      this.isMessageFormatting = false;
      return;
    }
    if (text === this.lastFormattedMessageContent) {
      this.isMessageFormatting = false;
      return;
    }
    const selection = window.getSelection();
    let cursorPosition = 0;
    let isFocused = document.activeElement === element;
    if (selection && selection.rangeCount > 0 && isFocused) {
      try {
        const range = selection.getRangeAt(0);
        cursorPosition = this.getCursorPosition(element, range);
      } catch (e) {
        cursorPosition = text.length;
      }
    }
    const parts = [];
    let lastIndex = 0;
    const variableRegex = /\{\{([a-zA-Z_][a-zA-Z0-9_]*)\}\}/g;
    let match;
    while ((match = variableRegex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        const beforeText = text.substring(lastIndex, match.index);
        parts.push(this.escapeHtml(beforeText));
      }
      parts.push(`<span class="variable-tag">{{${match[1]}}}</span>`);
      lastIndex = variableRegex.lastIndex;
    }
    if (lastIndex < text.length) {
      parts.push(this.escapeHtml(text.substring(lastIndex)));
    }
    const html = parts.length > 0 ? parts.join("") : this.escapeHtml(text);
    if (element.innerHTML !== html) {
      element.innerHTML = html;
      this.lastFormattedMessageContent = text;
      if (selection && isFocused && cursorPosition >= 0) {
        requestAnimationFrame(() => {
          if (document.activeElement === element && cursorPosition <= text.length) {
            this.setCursorPosition(element, cursorPosition);
          }
          this.isMessageFormatting = false;
        });
      } else {
        this.isMessageFormatting = false;
      }
    } else {
      this.lastFormattedMessageContent = text;
      this.isMessageFormatting = false;
    }
  }
  scrollToHighlightedMessageVariable() {
    setTimeout(() => {
      const dropdown = document.querySelector(".variables-dropdown");
      const highlighted = document.querySelector(".variable-option.highlighted");
      if (dropdown && highlighted) {
        highlighted.scrollIntoView({ block: "nearest", behavior: "smooth" });
      }
    }, 0);
  }
  static \u0275fac = function InvitationFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InvitationFormComponent)(\u0275\u0275directiveInject(DomSanitizer));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InvitationFormComponent, selectors: [["app-invitation-form"]], viewQuery: function InvitationFormComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c03, 5);
      \u0275\u0275viewQuery(_c12, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contentEditableRef = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.messageContentEditableRef = _t.first);
    }
  }, inputs: { invitationType: "invitationType", form: "form", title: "title", subtitle: "subtitle", iconSvg: "iconSvg", iconColor: "iconColor", previewDescription: "previewDescription", messageTemplates: "messageTemplates", isSending: "isSending", successMessage: "successMessage", errorMessage: "errorMessage", hideForm: "hideForm", templateTypes: "templateTypes", templateVariables: "templateVariables" }, outputs: { formSubmit: "formSubmit", templateSelected: "templateSelected", templateCreated: "templateCreated", templateUpdated: "templateUpdated", templateDeleted: "templateDeleted" }, decls: 57, vars: 33, consts: [["contentEditable", ""], ["messageContentEditable", ""], [1, "invitation-form-wrapper"], [1, "templates-section"], [1, "templates-header"], [1, "templates-title"], ["buttonType", "primary", "size", "medium", 3, "onClick"], ["viewBox", "0 0 24 24", "fill", "none", 1, "btn-icon"], ["d", "M12 5v14M5 12h14", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "templates-grid"], ["class", "template-card", 3, "click", 4, "ngFor", "ngForOf"], ["class", "template-card empty", 4, "ngIf"], ["class", "collapsible-section", 4, "ngIf"], ["title", "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043D\u043E\u0432\u044B\u0439 \u0432\u0438\u0434 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F", "size", "large", 3, "closed", "visibleChange", "visible", "showCloseButton", "showFooter"], [1, "template-form"], [1, "form-group"], [1, "form-label"], ["type", "text", "placeholder", "\u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440: \u041F\u0440\u0438\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "type-dropdown-wrapper"], [1, "type-dropdown", 3, "ngModelChange", "ngModel", "disabled"], ["value", "", 4, "ngIf"], [3, "value", 4, "ngFor", "ngForOf"], ["viewBox", "0 0 24 24", "fill", "none", 1, "dropdown-arrow"], ["d", "M6 9l6 6 6-6", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["class", "form-group", 4, "ngIf"], [1, "textarea-wrapper"], ["contenteditable", "true", 1, "form-textarea-editable", 3, "input", "keydown", "click", "blur"], ["class", "variables-dropdown", 3, "top", "left", 4, "ngIf"], [1, "char-count"], [1, "preview-box"], [3, "ngSwitch"], [3, "contactName", "avatarLetter", "message", "showInputBar", "noShadow", 4, "ngSwitchCase"], [3, "recipientEmail", "message", "activationLink", "buttonText", "expirationDays", "senderEmail", 4, "ngSwitchDefault"], ["modalFooter", ""], [1, "modal-footer"], ["buttonType", "secondary", "size", "medium", 3, "onClick"], ["size", "medium", 3, "onClick", "buttonType", "disabled"], ["title", "\u041F\u0440\u0435\u0434\u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F", 3, "closed", "visible", "showCloseButton"], [1, "preview-content"], [1, "preview-description"], [3, "contactName", "avatarLetter", "message", "showInputBar", "noShadow", 4, "ngIf"], ["class", "delete-modal-overlay", 3, "click", 4, "ngIf"], [1, "template-card", 3, "click"], [1, "template-header"], [1, "template-name"], [1, "template-preview"], [1, "template-actions"], ["class", "template-action-btn preview-btn", "title", "\u041F\u0440\u0435\u0434\u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440", 3, "click", 4, "ngIf"], ["title", "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C", 1, "template-action-btn", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none"], ["d", "M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7", "stroke", "currentColor", "stroke-width", "1.5"], ["d", "M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z", "stroke", "currentColor", "stroke-width", "1.5"], ["title", "\u0423\u0434\u0430\u043B\u0438\u0442\u044C", 1, "template-action-btn", 3, "click"], ["d", "M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2", "stroke", "currentColor", "stroke-width", "1.5"], ["title", "\u041F\u0440\u0435\u0434\u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440", 1, "template-action-btn", "preview-btn", 3, "click"], ["d", "M15 12a3 3 0 11-6 0 3 3 0 016 0z", "stroke", "currentColor", "stroke-width", "1.5"], ["d", "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z", "stroke", "currentColor", "stroke-width", "1.5"], [1, "template-card", "empty"], ["viewBox", "0 0 24 24", "fill", "none", 1, "empty-icon"], ["d", "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z", "stroke", "currentColor", "stroke-width", "1.5"], ["d", "M14 2v6h6M16 13H8M16 17H8M10 9H8", "stroke", "currentColor", "stroke-width", "1.5"], [1, "empty-text"], [1, "empty-hint"], [1, "collapsible-section"], ["class", "collapsed-view", 3, "click", 4, "ngIf"], ["class", "expanded-view", 4, "ngIf"], [1, "collapsed-view", 3, "click"], [1, "collapsed-content"], [1, "collapsed-icon", 3, "innerHTML"], [1, "collapsed-info"], [1, "collapsed-title"], [1, "collapsed-preview"], [1, "expand-btn"], [1, "expanded-view"], [1, "view-header", 3, "click"], [1, "view-header-content"], [1, "icon-wrapper", 3, "innerHTML"], [1, "header-text"], [1, "panel-title"], [1, "panel-subtitle"], [1, "collapse-btn"], [1, "expanded-content"], [1, "left-panel", 3, "shadow"], ["type", "success", "class", "alert-spacing", 3, "title", "dismissible", "dismissed", 4, "ngIf"], ["type", "error", "class", "alert-spacing", 3, "title", "dismissible", "dismissed", 4, "ngIf"], [1, "form-content", 3, "ngSubmit", "formGroup"], ["id", "subject", "label", "\u0422\u0435\u043C\u0430 \u043F\u0438\u0441\u044C\u043C\u0430", "type", "text", "placeholder", "\u041F\u0440\u0438\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435 \u0432 Westwood", "formControlName", "subject", "prefix", "\u{1F4CB}", 4, "ngIf"], [1, "textarea-group"], [1, "label-row"], ["variant", "body2", 3, "medium"], ["variant", "caption", 3, "muted"], ["contenteditable", "true", 1, "message-textarea-editable", 3, "input", "keydown", "click", "blur"], [3, "spaced"], ["type", "submit", "size", "large", 1, "submit-btn", 3, "buttonType", "disabled", "loading"], [1, "btn-content"], ["viewBox", "0 0 24 24", "fill", "none", "class", "wa-icon", 4, "ngSwitchCase"], ["viewBox", "0 0 24 24", "fill", "none", "class", "email-icon", 4, "ngSwitchDefault"], [1, "preview-section"], [1, "section-title"], ["viewBox", "0 0 24 24", "fill", "none", 1, "title-icon"], [1, "section-heading"], [1, "section-description"], ["class", "preview-component", 3, "contactName", "avatarLetter", "message", "showInputBar", "noShadow", 4, "ngSwitchCase"], ["class", "preview-component", 3, "recipientEmail", "message", "activationLink", "buttonText", "expirationDays", "senderEmail", 4, "ngSwitchDefault"], ["type", "success", 1, "alert-spacing", 3, "dismissed", "title", "dismissible"], ["type", "error", 1, "alert-spacing", 3, "dismissed", "title", "dismissible"], ["id", "subject", "label", "\u0422\u0435\u043C\u0430 \u043F\u0438\u0441\u044C\u043C\u0430", "type", "text", "placeholder", "\u041F\u0440\u0438\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435 \u0432 Westwood", "formControlName", "subject", "prefix", "\u{1F4CB}"], [1, "variables-dropdown"], [1, "variables-dropdown-header"], ["type", "button", 1, "variables-dropdown-close", 3, "click"], [1, "variables-dropdown-list"], ["type", "button", "class", "variable-option", 3, "highlighted", "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "variable-option", 3, "click"], [1, "variable-name"], [1, "variable-desc"], ["viewBox", "0 0 24 24", "fill", "none", 1, "wa-icon"], ["d", "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z", "fill", "currentColor"], ["d", "M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z", "fill", "currentColor"], ["viewBox", "0 0 24 24", "fill", "none", 1, "email-icon"], ["d", "M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "preview-component", 3, "contactName", "avatarLetter", "message", "showInputBar", "noShadow"], [1, "preview-component", 3, "recipientEmail", "message", "activationLink", "buttonText", "expirationDays", "senderEmail"], ["value", ""], [3, "value"], ["type", "text", "placeholder", "\u041F\u0440\u0438\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435 \u0432 Westwood", 1, "form-input", 3, "ngModelChange", "ngModel"], [3, "contactName", "avatarLetter", "message", "showInputBar", "noShadow"], [3, "recipientEmail", "message", "activationLink", "buttonText", "expirationDays", "senderEmail"], [1, "delete-modal-overlay", 3, "click"], [1, "delete-modal", 3, "click"], ["class", "delete-modal-content", 4, "ngIf"], [1, "delete-modal-content"], [1, "delete-modal-icon", "warning"], ["d", "M12 9v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "delete-modal-title"], [1, "delete-modal-description"], [1, "delete-modal-actions"], [1, "delete-modal-btn", "cancel", 3, "click"], [1, "delete-modal-btn", "confirm", 3, "click"], [1, "delete-modal-icon", "danger"], ["d", "M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m3 0v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6h14zM10 11v6M14 11v6", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "confirm-word"], ["type", "text", "placeholder", "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043B\u043E\u0432\u043E \u0434\u043B\u044F \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u044F", 1, "delete-confirm-input", 3, "ngModelChange", "input", "keydown.enter", "ngModel"], [1, "delete-modal-btn", "delete", 3, "click", "disabled"]], template: function InvitationFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "h3", 5);
      \u0275\u0275text(4, "\u0428\u0430\u0431\u043B\u043E\u043D\u044B \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0439");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "app-button", 6);
      \u0275\u0275listener("onClick", function InvitationFormComponent_Template_app_button_onClick_5_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.openCreateTemplateModal());
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(6, "svg", 7);
      \u0275\u0275element(7, "path", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275text(8, " \u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043D\u043E\u0432\u044B\u0439 \u0432\u0438\u0434 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F ");
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(9, "div", 9);
      \u0275\u0275template(10, InvitationFormComponent_div_10_Template, 15, 3, "div", 10)(11, InvitationFormComponent_div_11_Template, 8, 0, "div", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(12, InvitationFormComponent_div_12_Template, 3, 2, "div", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "app-modal", 13);
      \u0275\u0275listener("closed", function InvitationFormComponent_Template_app_modal_closed_13_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeCreateTemplateModal());
      })("visibleChange", function InvitationFormComponent_Template_app_modal_visibleChange_13_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.showCreateTemplateModal = $event);
      });
      \u0275\u0275elementStart(14, "div", 14)(15, "div", 15)(16, "label", 16);
      \u0275\u0275text(17, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "input", 17);
      \u0275\u0275twoWayListener("ngModelChange", function InvitationFormComponent_Template_input_ngModelChange_18_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.newTemplate.name, $event) || (ctx.newTemplate.name = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "div", 15)(20, "label", 16);
      \u0275\u0275text(21, "\u0422\u0438\u043F \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 18)(23, "select", 19);
      \u0275\u0275twoWayListener("ngModelChange", function InvitationFormComponent_Template_select_ngModelChange_23_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.newTemplate.type, $event) || (ctx.newTemplate.type = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(24, InvitationFormComponent_option_24_Template, 2, 0, "option", 20)(25, InvitationFormComponent_option_25_Template, 2, 2, "option", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(26, "svg", 22);
      \u0275\u0275element(27, "path", 23);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(28, InvitationFormComponent_div_28_Template, 4, 3, "div", 24);
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(29, "div", 15)(30, "label", 16);
      \u0275\u0275text(31, "\u041A\u043E\u043D\u0442\u0435\u043D\u0442 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "div", 25)(33, "div", 26, 0);
      \u0275\u0275listener("input", function InvitationFormComponent_Template_div_input_33_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onContentInput($event));
      })("keydown", function InvitationFormComponent_Template_div_keydown_33_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onContentKeydown($event));
      })("click", function InvitationFormComponent_Template_div_click_33_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onContentClick());
      })("blur", function InvitationFormComponent_Template_div_blur_33_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onContentBlur($event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(35, InvitationFormComponent_div_35_Template, 8, 5, "div", 27);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "div", 28);
      \u0275\u0275text(37);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "div", 15)(39, "label", 16);
      \u0275\u0275text(40, "\u041F\u0440\u0435\u0434\u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "div", 29);
      \u0275\u0275elementContainerStart(42, 30);
      \u0275\u0275template(43, InvitationFormComponent_app_whatsapp_preview_43_Template, 1, 5, "app-whatsapp-preview", 31)(44, InvitationFormComponent_app_email_preview_44_Template, 1, 6, "app-email-preview", 32);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementContainerStart(45, 33);
      \u0275\u0275elementStart(46, "div", 34)(47, "app-button", 35);
      \u0275\u0275listener("onClick", function InvitationFormComponent_Template_app_button_onClick_47_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeCreateTemplateModal());
      });
      \u0275\u0275text(48, " \u041E\u0442\u043C\u0435\u043D\u0430 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "app-button", 36);
      \u0275\u0275listener("onClick", function InvitationFormComponent_Template_app_button_onClick_49_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.saveTemplate());
      });
      \u0275\u0275text(50, " \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0448\u0430\u0431\u043B\u043E\u043D ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "app-modal", 37);
      \u0275\u0275listener("closed", function InvitationFormComponent_Template_app_modal_closed_51_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closePreview());
      });
      \u0275\u0275elementStart(52, "div", 38)(53, "p", 39);
      \u0275\u0275text(54, "\u0422\u0430\u043A \u0431\u0443\u0434\u0435\u0442 \u0432\u044B\u0433\u043B\u044F\u0434\u0435\u0442\u044C \u0432\u0430\u0448\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u0432 WhatsApp");
      \u0275\u0275elementEnd();
      \u0275\u0275template(55, InvitationFormComponent_app_whatsapp_preview_55_Template, 1, 5, "app-whatsapp-preview", 40);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(56, InvitationFormComponent_div_56_Template, 4, 2, "div", 41);
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275property("ngForOf", ctx.messageTemplates);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.messageTemplates.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.hideForm);
      \u0275\u0275advance();
      \u0275\u0275property("visible", ctx.showCreateTemplateModal)("showCloseButton", true)("showFooter", true);
      \u0275\u0275advance(3);
      \u0275\u0275attribute("data-type", ctx.invitationType);
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.newTemplate.name);
      \u0275\u0275attribute("data-type", ctx.invitationType);
      \u0275\u0275advance(2);
      \u0275\u0275attribute("data-type", ctx.invitationType);
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.newTemplate.type);
      \u0275\u0275property("disabled", ctx.templateTypes.length === 0);
      \u0275\u0275attribute("data-type", ctx.invitationType);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.templateTypes.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.templateTypes);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.invitationType === "email");
      \u0275\u0275advance(2);
      \u0275\u0275attribute("data-type", ctx.invitationType);
      \u0275\u0275advance(2);
      \u0275\u0275attribute("data-type", ctx.invitationType);
      \u0275\u0275advance();
      \u0275\u0275attribute("data-type", ctx.invitationType)("placeholder", "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043A\u0441\u0442 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F...");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.showVariablesDropdown);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2("", ctx.getPlainTextContent().length, "/", ctx.invitationType === "email" ? "1000" : "500", "");
      \u0275\u0275advance(2);
      \u0275\u0275attribute("data-type", ctx.invitationType);
      \u0275\u0275advance(2);
      \u0275\u0275attribute("data-type", ctx.invitationType);
      \u0275\u0275advance();
      \u0275\u0275property("ngSwitch", ctx.invitationType);
      \u0275\u0275advance();
      \u0275\u0275property("ngSwitchCase", "whatsapp");
      \u0275\u0275advance(6);
      \u0275\u0275property("buttonType", ctx.invitationType === "email" ? "primary" : "success")("disabled", !ctx.newTemplate.name || !ctx.newTemplate.content || ctx.invitationType === "email" && !ctx.newTemplate.subject);
      \u0275\u0275advance(2);
      \u0275\u0275property("visible", ctx.showPreviewModal)("showCloseButton", true);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.previewTemplate);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showDeleteTemplateModal);
    }
  }, dependencies: [
    CommonModule,
    NgForOf,
    NgIf,
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault,
    ReactiveFormsModule,
    \u0275NgNoValidate,
    NgSelectOption,
    \u0275NgSelectMultipleOption,
    DefaultValueAccessor,
    SelectControlValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    FormGroupDirective,
    FormControlName,
    FormsModule,
    NgModel,
    CardComponent,
    InputComponent,
    ButtonComponent,
    TypographyComponent,
    AlertComponent,
    DividerComponent,
    ModalComponent,
    WhatsappPreviewComponent,
    EmailPreviewComponent
  ], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n}\n.collapsible-section[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n  transition: all 0.3s ease;\n}\n.collapsed-view[_ngcontent-%COMP%] {\n  padding: 1.25rem 1.5rem;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.collapsed-view[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n.collapsed-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.collapsed-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.collapsed-icon[_ngcontent-%COMP%]     svg {\n  width: 20px;\n  height: 20px;\n  color: white;\n}\n.collapsed-icon[_ngcontent-%COMP%]     svg path {\n  fill: white;\n}\n.collapsed-info[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n  min-width: 0;\n}\n.collapsed-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #1f2937;\n}\n.collapsed-preview[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #64748b;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.expand-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: 0.5rem;\n  cursor: pointer;\n  color: #64748b;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: transform 0.2s;\n}\n.expand-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  transition: transform 0.2s;\n}\n.expand-btn[_ngcontent-%COMP%]   svg.rotated[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.view-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1.25rem 1.5rem;\n  border-bottom: 1px solid #f1f5f9;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.view-header[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n.view-header-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 1.25rem;\n}\n.collapse-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: 0.5rem;\n  cursor: pointer;\n  color: #64748b;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.collapse-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n.expanded-content[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 2rem;\n  padding: 2rem;\n}\n.icon-wrapper[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.icon-wrapper[_ngcontent-%COMP%]     svg {\n  width: 28px;\n  height: 28px;\n  color: white;\n}\n.icon-wrapper[_ngcontent-%COMP%]     svg path {\n  fill: white;\n}\n.header-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.panel-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n}\n.panel-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.9375rem;\n  color: #64748b;\n  margin: 0;\n}\n.alert-spacing[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.left-panel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  border-radius: 24px !important;\n}\n[_nghost-%COMP%]     .left-panel .card-body {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  padding: 2rem !important;\n}\n.form-content[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n.textarea-group[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.label-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.5rem;\n}\n.message-textarea[_ngcontent-%COMP%] {\n  flex: 1;\n  width: 100%;\n  min-height: 120px;\n  padding: 0.875rem;\n  border: 1px solid #cbd5e1;\n  border-radius: 8px;\n  font-size: 0.9375rem;\n  font-family: inherit;\n  resize: none;\n  transition: all 0.2s ease;\n  background-color: #ffffff;\n  color: #1a202c;\n  line-height: 1.6;\n}\n.message-textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.message-textarea[data-type=whatsapp][_ngcontent-%COMP%]:focus {\n  border-color: #25D366;\n  box-shadow: 0 0 0 3px rgba(37, 211, 102, 0.15);\n}\n.message-textarea[data-type=email][_ngcontent-%COMP%]:focus {\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);\n}\n.message-textarea[_ngcontent-%COMP%]::placeholder {\n  color: #94a3b8;\n}\n.message-textarea-editable[_ngcontent-%COMP%] {\n  flex: 1;\n  width: 100%;\n  min-height: 120px;\n  padding: 0.875rem;\n  border: 1px solid #cbd5e1;\n  border-radius: 8px;\n  font-size: 0.9375rem;\n  font-family: inherit;\n  background-color: #ffffff;\n  color: #1a202c;\n  line-height: 1.6;\n  outline: none;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n}\n.message-textarea-editable[_ngcontent-%COMP%]:empty:before {\n  content: attr(placeholder);\n  color: #94a3b8;\n  pointer-events: none;\n}\n.message-textarea-editable[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.message-textarea-editable[data-type=whatsapp][_ngcontent-%COMP%]:focus {\n  border-color: #25D366;\n  box-shadow: 0 0 0 3px rgba(37, 211, 102, 0.15);\n}\n.message-textarea-editable[data-type=email][_ngcontent-%COMP%]:focus {\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);\n}\n.submit-btn[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]     .submit-btn button {\n  width: 100%;\n  border-radius: 12px !important;\n  padding: 1rem 1.5rem !important;\n}\n[_nghost-%COMP%]     .submit-btn button:hover:not(:disabled) {\n  transform: translateY(-2px);\n}\n.btn-icon[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  flex-shrink: 0;\n  display: block;\n}\n.wa-icon[_ngcontent-%COMP%], \n.email-icon[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n}\n.preview-section[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 24px;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n  display: flex;\n  flex-direction: column;\n}\n.section-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.625rem;\n  margin-bottom: 0.25rem;\n}\n.title-icon[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n}\n.section-heading[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0;\n}\n.section-description[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #9ca3af;\n  margin: 0 0 1.25rem 0;\n}\n.preview-component[_ngcontent-%COMP%] {\n  flex: 1;\n  display: block;\n}\n.templates-section[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 24px;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n  margin-bottom: 2rem;\n}\n.templates-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1.5rem;\n}\n.templates-title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0;\n}\n.templates-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 1rem;\n}\n.template-card[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 16px;\n  padding: 1.25rem;\n  cursor: pointer;\n  transition: all 0.2s;\n  position: relative;\n}\n.template-card[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n  border-color: #25D366;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(37, 211, 102, 0.15);\n}\n.template-card.empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 3rem 1.5rem;\n  cursor: default;\n  border-style: dashed;\n}\n.template-card.empty[_ngcontent-%COMP%]:hover {\n  transform: none;\n  border-color: #e2e8f0;\n}\n.template-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.75rem;\n}\n.template-name[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #1f2937;\n}\n.template-preview[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #64748b;\n  line-height: 1.5;\n  margin: 0 0 0.75rem 0;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.template-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  opacity: 0;\n  transition: opacity 0.2s;\n}\n.template-card[_ngcontent-%COMP%]:hover   .template-actions[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.template-action-btn[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 0.4rem;\n  cursor: pointer;\n  color: #64748b;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.15s;\n}\n.template-action-btn[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n  border-color: #cbd5e1;\n  color: #1f2937;\n}\n.template-action-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n.empty-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  color: #d1d5db;\n  margin: 0 auto 1rem;\n}\n.empty-text[_ngcontent-%COMP%] {\n  font-size: 0.9375rem;\n  color: #64748b;\n  margin: 0 0 0.25rem 0;\n  font-weight: 500;\n}\n.empty-hint[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: #94a3b8;\n  margin: 0;\n}\n.template-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n  padding: 0.5rem 0;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.form-label[_ngcontent-%COMP%] {\n  font-size: 0.9375rem;\n  font-weight: 600;\n  color: #1f2937;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.form-label[_ngcontent-%COMP%]::before {\n  content: "";\n  width: 3px;\n  height: 16px;\n  border-radius: 2px;\n}\n.form-label[data-type=whatsapp][_ngcontent-%COMP%]::before {\n  background:\n    linear-gradient(\n      135deg,\n      #25D366 0%,\n      #128C7E 100%);\n}\n.form-label[data-type=email][_ngcontent-%COMP%]::before {\n  background:\n    linear-gradient(\n      135deg,\n      #3b82f6 0%,\n      #1d4ed8 100%);\n}\n.form-input[_ngcontent-%COMP%] {\n  padding: 0.875rem 1.125rem;\n  border: 2px solid #e2e8f0;\n  border-radius: 12px;\n  font-size: 0.9375rem;\n  background: #ffffff;\n  color: #1f2937;\n  transition: all 0.2s;\n  font-family: inherit;\n}\n.form-input[_ngcontent-%COMP%]::placeholder {\n  color: #94a3b8;\n}\n.form-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  background: #f0fdf4;\n  box-shadow: 0 0 0 4px rgba(37, 211, 102, 0.1);\n}\n.form-input[data-type=whatsapp][_ngcontent-%COMP%]:focus {\n  border-color: #25D366;\n  background: #f0fdf4;\n  box-shadow: 0 0 0 4px rgba(37, 211, 102, 0.1);\n}\n.form-input[data-type=email][_ngcontent-%COMP%]:focus {\n  border-color: #3b82f6;\n  background: #eff6ff;\n  box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1);\n}\n.type-dropdown-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n.type-dropdown[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.875rem 3rem 0.875rem 1.125rem;\n  border: 2px solid #e2e8f0;\n  border-radius: 12px;\n  font-size: 0.9375rem;\n  background: #ffffff;\n  color: #1f2937;\n  transition: all 0.2s;\n  font-family: inherit;\n  appearance: none;\n  cursor: pointer;\n}\n.type-dropdown[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: 0 0 0 4px rgba(37, 211, 102, 0.1);\n}\n.type-dropdown[data-type=whatsapp][_ngcontent-%COMP%]:focus {\n  border-color: #25D366;\n  background: #f0fdf4;\n  box-shadow: 0 0 0 4px rgba(37, 211, 102, 0.1);\n}\n.type-dropdown[data-type=email][_ngcontent-%COMP%]:focus {\n  border-color: #3b82f6;\n  background: #eff6ff;\n  box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1);\n}\n.type-dropdown[_ngcontent-%COMP%]:hover {\n  border-color: #cbd5e1;\n}\n.dropdown-arrow[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 1rem;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 20px;\n  height: 20px;\n  color: #64748b;\n  pointer-events: none;\n  transition: transform 0.2s;\n}\n.type-dropdown[data-type=whatsapp][_ngcontent-%COMP%]:focus    + .dropdown-arrow[_ngcontent-%COMP%] {\n  color: #25D366;\n}\n.type-dropdown[data-type=email][_ngcontent-%COMP%]:focus    + .dropdown-arrow[_ngcontent-%COMP%] {\n  color: #3b82f6;\n}\n.textarea-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n}\n.form-textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 1rem 1.125rem;\n  border: 2px solid #e2e8f0;\n  border-radius: 12px;\n  font-size: 0.9375rem;\n  font-family: inherit;\n  resize: vertical;\n  background: #ffffff;\n  color: #1f2937;\n  line-height: 1.6;\n  transition: all 0.2s;\n  min-height: 150px;\n}\n.form-textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: 0 0 0 4px rgba(37, 211, 102, 0.1);\n}\n.form-textarea[data-type=whatsapp][_ngcontent-%COMP%]:focus {\n  border-color: #25D366;\n  background: #f0fdf4;\n  box-shadow: 0 0 0 4px rgba(37, 211, 102, 0.1);\n}\n.form-textarea[data-type=email][_ngcontent-%COMP%]:focus {\n  border-color: #3b82f6;\n  background: #eff6ff;\n  box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1);\n}\n.form-textarea-editable[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 1rem 1.125rem;\n  border: 2px solid #e2e8f0;\n  border-radius: 12px;\n  font-size: 0.9375rem;\n  font-family: inherit;\n  background: #ffffff;\n  color: #1f2937;\n  line-height: 1.6;\n  transition: all 0.2s;\n  min-height: 150px;\n  outline: none;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n}\n.form-textarea-editable[_ngcontent-%COMP%]:empty:before {\n  content: attr(placeholder);\n  color: #94a3b8;\n  pointer-events: none;\n}\n.form-textarea-editable[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 4px rgba(37, 211, 102, 0.1);\n}\n.form-textarea-editable[data-type=whatsapp][_ngcontent-%COMP%]:focus {\n  border-color: #25D366;\n  background: #f0fdf4;\n  box-shadow: 0 0 0 4px rgba(37, 211, 102, 0.1);\n}\n.form-textarea-editable[data-type=email][_ngcontent-%COMP%]:focus {\n  border-color: #3b82f6;\n  background: #eff6ff;\n  box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1);\n}\n.variable-tag[_ngcontent-%COMP%] {\n  color: #16a34a !important;\n  font-style: italic !important;\n  font-weight: 500 !important;\n  font-family:\n    "Courier New",\n    "Monaco",\n    "Menlo",\n    "Consolas",\n    monospace !important;\n  background: rgba(34, 197, 94, 0.08) !important;\n  padding: 2px 6px !important;\n  border-radius: 4px !important;\n  border: 1px solid rgba(34, 197, 94, 0.2) !important;\n  display: inline !important;\n}\n[_nghost-%COMP%]     .variable-tag {\n  color: rgb(22, 158, 163) !important;\n  font-style: italic !important;\n  font-weight: 500 !important;\n  font-family:\n    "Courier New",\n    "Monaco",\n    "Menlo",\n    "Consolas",\n    monospace !important;\n  background: rgba(22, 158, 163, 0.2) !important;\n  padding: 2px 6px !important;\n  border-radius: 4px !important;\n  border: 1px solid rgba(34, 197, 94, 0.2) !important;\n  display: inline !important;\n}\n.variables-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  background: white;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  z-index: 1000;\n  min-width: 280px;\n  max-width: 400px;\n  max-height: 300px;\n  overflow: hidden;\n  margin-top: 4px;\n}\n.variables-dropdown-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 14px;\n  background: #f8fafc;\n  border-bottom: 1px solid #e2e8f0;\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #64748b;\n}\n.variables-dropdown-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 1.25rem;\n  color: #94a3b8;\n  cursor: pointer;\n  padding: 0;\n  line-height: 1;\n  transition: color 0.15s;\n}\n.variables-dropdown-close[_ngcontent-%COMP%]:hover {\n  color: #64748b;\n}\n.variables-dropdown-list[_ngcontent-%COMP%] {\n  max-height: 250px;\n  overflow-y: auto;\n  padding: 4px;\n}\n.variable-option[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  width: 100%;\n  padding: 10px 14px;\n  background: transparent;\n  border: none;\n  text-align: left;\n  cursor: pointer;\n  transition: all 0.15s;\n  border-radius: 8px;\n}\n.variable-option[_ngcontent-%COMP%]:hover, \n.variable-option.highlighted[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n}\n.variable-name[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #16a34a;\n  font-family: "Courier New", monospace;\n}\n.variable-desc[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #64748b;\n}\n.char-count[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #94a3b8;\n  text-align: right;\n  margin-top: 0.25rem;\n}\n.preview-box[_ngcontent-%COMP%] {\n  border-radius: 16px;\n  padding: 1.5rem;\n  max-height: 450px;\n  overflow-y: auto;\n}\n.preview-box[data-type=whatsapp][_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f0fdf4 0%,\n      #ffffff 100%);\n  border: 2px solid #dcfce7;\n  box-shadow: 0 2px 8px rgba(37, 211, 102, 0.08);\n}\n.preview-box[data-type=email][_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #eff6ff 0%,\n      #ffffff 100%);\n  border: 2px solid #dbeafe;\n  box-shadow: 0 2px 8px rgba(59, 130, 246, 0.08);\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.875rem;\n  padding: 1.25rem 0 0 0;\n  border-top: 2px solid #f1f5f9;\n  margin-top: 0.5rem;\n}\n.preview-content[_ngcontent-%COMP%] {\n  padding: 0.5rem 0;\n}\n.preview-description[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #64748b;\n  margin: 0 0 1.5rem 0;\n}\n[_nghost-%COMP%]     .modal-footer app-button button {\n  padding: 0.75rem 1.5rem !important;\n  font-weight: 600 !important;\n  border-radius: 10px !important;\n}\n@media (max-width: 1024px) {\n  .expanded-content[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .templates-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));\n  }\n}\n@media (max-width: 768px) {\n  .expanded-content[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .templates-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 1rem;\n  }\n  .templates-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  [_nghost-%COMP%]     .left-panel .card-body {\n    padding: 1.5rem !important;\n  }\n}\n.preview-content[_ngcontent-%COMP%] {\n  padding: 0.5rem 0;\n}\n.preview-description[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #64748b;\n  margin: 0 0 1.5rem 0;\n}\n.delete-modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  animation: _ngcontent-%COMP%_fadeIn 0.2s ease;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.delete-modal[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n  max-width: 420px;\n  width: 90%;\n  animation: _ngcontent-%COMP%_slideUp 0.3s ease;\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.delete-modal-content[_ngcontent-%COMP%] {\n  padding: 2rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n}\n.delete-modal-icon[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 1.25rem;\n}\n.delete-modal-icon.warning[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #d97706;\n}\n.delete-modal-icon.danger[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.delete-modal-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n}\n.delete-modal-title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0 0 0.75rem;\n}\n.delete-modal-description[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #6b7280;\n  line-height: 1.6;\n  margin: 0 0 1.5rem;\n}\n.delete-modal-description[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #1f2937;\n}\n.confirm-word[_ngcontent-%COMP%] {\n  color: #dc2626;\n  background: #fee2e2;\n  padding: 0.125rem 0.5rem;\n  border-radius: 4px;\n  font-family: monospace;\n  font-size: 0.95rem;\n}\n.delete-confirm-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.875rem 1rem;\n  border: 2px solid #e5e7eb;\n  border-radius: 10px;\n  font-size: 1rem;\n  font-family: inherit;\n  text-align: center;\n  margin-bottom: 1.5rem;\n  transition: all 0.2s ease;\n}\n.delete-confirm-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #dc2626;\n  box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);\n}\n.delete-confirm-input[_ngcontent-%COMP%]::placeholder {\n  color: #9ca3af;\n}\n.delete-modal-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  width: 100%;\n}\n.delete-modal-btn[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 0.875rem 1.5rem;\n  border-radius: 10px;\n  font-size: 0.9rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  border: none;\n}\n.delete-modal-btn.cancel[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  color: #6b7280;\n}\n.delete-modal-btn.cancel[_ngcontent-%COMP%]:hover {\n  background: #e5e7eb;\n  color: #374151;\n}\n.delete-modal-btn.confirm[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #d97706;\n}\n.delete-modal-btn.confirm[_ngcontent-%COMP%]:hover {\n  background: #fde68a;\n  color: #b45309;\n}\n.delete-modal-btn.delete[_ngcontent-%COMP%] {\n  background: #dc2626;\n  color: white;\n}\n.delete-modal-btn.delete[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #b91c1c;\n}\n.delete-modal-btn.delete[_ngcontent-%COMP%]:disabled {\n  background: #fca5a5;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=invitation-form.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InvitationFormComponent, [{
    type: Component,
    args: [{ selector: "app-invitation-form", standalone: true, imports: [
      CommonModule,
      ReactiveFormsModule,
      FormsModule,
      CardComponent,
      InputComponent,
      ButtonComponent,
      TypographyComponent,
      AlertComponent,
      BadgeComponent,
      IconButtonComponent,
      DividerComponent,
      ModalComponent,
      WhatsappPreviewComponent,
      EmailPreviewComponent
    ], template: `
    <div class="invitation-form-wrapper">
      <!-- Templates Section -->
      <div class="templates-section">
        <div class="templates-header">
          <h3 class="templates-title">\u0428\u0430\u0431\u043B\u043E\u043D\u044B \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0439</h3>
          <app-button
            buttonType="primary"
            size="medium"
            (onClick)="openCreateTemplateModal()">
            <svg viewBox="0 0 24 24" fill="none" class="btn-icon">
              <path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            \u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043D\u043E\u0432\u044B\u0439 \u0432\u0438\u0434 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F
          </app-button>
        </div>

        <div class="templates-grid">
          <div 
            class="template-card" 
            *ngFor="let template of messageTemplates"
            (click)="selectTemplate(template)">
            <div class="template-header">
              <span class="template-name">{{ template.name }}</span>
            </div>
            <p class="template-preview">{{ getTemplatePreview(template.content) }}</p>
            <div class="template-actions">
              <button 
                *ngIf="invitationType === 'whatsapp'"
                class="template-action-btn preview-btn" 
                (click)="openPreview(template, $event)" 
                title="\u041F\u0440\u0435\u0434\u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" stroke="currentColor" stroke-width="1.5"/>
                  <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" stroke="currentColor" stroke-width="1.5"/>
                </svg>
              </button>
              <button class="template-action-btn" (click)="editTemplate(template, $event)" title="\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" stroke="currentColor" stroke-width="1.5"/>
                  <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" stroke="currentColor" stroke-width="1.5"/>
                </svg>
              </button>
              <button class="template-action-btn" (click)="deleteTemplate(template, $event)" title="\u0423\u0434\u0430\u043B\u0438\u0442\u044C">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" stroke="currentColor" stroke-width="1.5"/>
                </svg>
              </button>
            </div>
          </div>

          <div class="template-card empty" *ngIf="messageTemplates.length === 0">
            <svg viewBox="0 0 24 24" fill="none" class="empty-icon">
              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" stroke="currentColor" stroke-width="1.5"/>
              <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="currentColor" stroke-width="1.5"/>
            </svg>
            <p class="empty-text">\u041D\u0435\u0442 \u0448\u0430\u0431\u043B\u043E\u043D\u043E\u0432 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0439</p>
            <p class="empty-hint">\u0421\u043E\u0437\u0434\u0430\u0439\u0442\u0435 \u043F\u0435\u0440\u0432\u044B\u0439 \u0448\u0430\u0431\u043B\u043E\u043D \u0434\u043B\u044F \u0431\u044B\u0441\u0442\u0440\u043E\u0439 \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0438</p>
          </div>
        </div>
      </div>

      <!-- Collapsible Form Section -->
      <div class="collapsible-section" *ngIf="!hideForm">
        <div class="collapsed-view" *ngIf="isFormCollapsed" (click)="toggleFormCollapse()">
          <div class="collapsed-content">
            <div class="collapsed-icon" [innerHTML]="getSafeIconSvg()" [style.background]="getIconGradient()"></div>
            <div class="collapsed-info">
              <span class="collapsed-title">{{ title }}</span>
              <span class="collapsed-preview">{{ getCollapsedPreview() }}</span>
            </div>
            <button class="expand-btn">
              <svg viewBox="0 0 24 24" fill="none" [class.rotated]="!isFormCollapsed">
                <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        <div class="expanded-view" *ngIf="!isFormCollapsed">
          <div class="view-header" (click)="toggleFormCollapse()">
            <div class="view-header-content">
              <div class="icon-wrapper" [innerHTML]="getSafeIconSvg()" [style.background]="getIconGradient()"></div>
              <div class="header-text">
                <h2 class="panel-title">{{ title }}</h2>
                <p class="panel-subtitle">{{ subtitle }}</p>
              </div>
            </div>
            <button class="collapse-btn">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>

          <div class="expanded-content">
            <app-card [shadow]="true" class="left-panel">
              <!-- Alerts -->
              <app-alert
                *ngIf="successMessage"
                type="success"
                [title]="'\u0423\u0441\u043F\u0435\u0448\u043D\u043E'"
                [dismissible]="true"
                (dismissed)="successMessage = ''"
                class="alert-spacing">
                {{ successMessage }}
              </app-alert>

              <app-alert
                *ngIf="errorMessage"
                type="error"
                [title]="'\u041E\u0448\u0438\u0431\u043A\u0430'"
                [dismissible]="true"
                (dismissed)="errorMessage = ''"
                class="alert-spacing">
                {{ errorMessage }}
              </app-alert>

              <form [formGroup]="form" (ngSubmit)="onFormSubmit()" class="form-content">
                <!-- Subject Input (only for email) -->
                <app-input
                  *ngIf="invitationType === 'email'"
                  id="subject"
                  label="\u0422\u0435\u043C\u0430 \u043F\u0438\u0441\u044C\u043C\u0430"
                  type="text"
                  placeholder="\u041F\u0440\u0438\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435 \u0432 Westwood"
                  formControlName="subject"
                  prefix="\u{1F4CB}">
                </app-input>

                <!-- Message Textarea -->
                <div class="textarea-group">
                  <div class="label-row">
                    <app-typography variant="body2" [medium]="true">
                      {{ invitationType === 'email' ? '\u0422\u0435\u043A\u0441\u0442 \u043F\u0438\u0441\u044C\u043C\u0430' : '\u0422\u0435\u043A\u0441\u0442 \u043F\u0440\u0438\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u044F' }}
                    </app-typography>
                    <app-typography variant="caption" [muted]="true">
                      {{ getMessageLength() }}/{{ invitationType === 'email' ? '1000' : '500' }}
                    </app-typography>
                  </div>
                  <div class="textarea-wrapper" [attr.data-type]="invitationType">
                    <div 
                      #messageContentEditable
                      class="message-textarea-editable"
                      contenteditable="true"
                      (input)="onMessageInput($event)"
                      (keydown)="onMessageKeydown($event)"
                      (click)="onMessageClick()"
                      (blur)="onMessageBlur($event)"
                      [attr.data-type]="invitationType"
                      [attr.placeholder]="invitationType === 'email' ? '\u041D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0435 \u043F\u0440\u0438\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435...' : '\u041D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0435 \u043F\u0440\u0438\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435...'">
                    </div>
                    <div class="variables-dropdown" *ngIf="showMessageVariablesDropdown" [style.top.px]="messageDropdownPosition.top" [style.left.px]="messageDropdownPosition.left">
                      <div class="variables-dropdown-header">
                        <span>\u041F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435</span>
                        <button type="button" class="variables-dropdown-close" (click)="closeMessageVariablesDropdown()">\xD7</button>
                      </div>
                      <div class="variables-dropdown-list">
                        <button 
                          type="button"
                          class="variable-option" 
                          *ngFor="let variable of filteredMessageVariables"
                          (click)="selectMessageVariable(variable)"
                          [class.highlighted]="highlightedMessageVariableIndex === filteredMessageVariables.indexOf(variable)">
                          <span class="variable-name">{{ getVariableDisplayName(variable.name) }}</span>
                          <span class="variable-desc">{{ variable.description }}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <app-divider [spaced]="true"></app-divider>

                <!-- Submit Button -->
                <app-button
                  [buttonType]="invitationType === 'email' ? 'primary' : 'success'"
                  type="submit"
                  [disabled]="form.invalid || isSending"
                  [loading]="isSending"
                  size="large"
                  class="submit-btn">
                  <span class="btn-content">
                    <ng-container [ngSwitch]="invitationType">
                      <svg *ngSwitchCase="'whatsapp'" viewBox="0 0 24 24" fill="none" class="wa-icon">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" fill="currentColor"/>
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" fill="currentColor"/>
                      </svg>
                      <svg *ngSwitchDefault viewBox="0 0 24 24" fill="none" class="email-icon">
                        <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </ng-container>
                    {{ isSending ? (invitationType === 'email' ? '\u041E\u0442\u043F\u0440\u0430\u0432\u043A\u0430...' : '\u041E\u0442\u043A\u0440\u044B\u0432\u0430\u0435\u043C WhatsApp...') : (invitationType === 'email' ? '\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C Email' : '\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0432 WhatsApp') }}
                  </span>
                </app-button>
              </form>
            </app-card>

            <!-- Preview Section -->
            <div class="preview-section">
              <div class="section-title">
                <svg viewBox="0 0 24 24" fill="none" class="title-icon" [style.color]="iconColor">
                  <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" stroke="currentColor" stroke-width="1.5"/>
                  <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" stroke="currentColor" stroke-width="1.5"/>
                </svg>
                <h3 class="section-heading">\u041F\u0440\u0435\u0434\u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440</h3>
              </div>
              <p class="section-description">{{ previewDescription }}</p>

              <ng-container [ngSwitch]="invitationType">
                <app-whatsapp-preview
                  *ngSwitchCase="'whatsapp'"
                  [contactName]="getPreviewContactName()"
                  [avatarLetter]="getPreviewAvatarLetter()"
                  [message]="getPreviewMessage()"
                  [showInputBar]="true"
                  [noShadow]="true"
                  class="preview-component">
                </app-whatsapp-preview>
                <app-email-preview
                  *ngSwitchDefault
                  [recipientEmail]="getPreviewEmail()"
                  [message]="getPreviewMessage()"
                  [activationLink]="'https://westwood.app/activate?token=xxx'"
                  [buttonText]="'Activate Account'"
                  [expirationDays]="7"
                  [senderEmail]="'noreply@westwood.app'"
                  class="preview-component">
                </app-email-preview>
              </ng-container>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Create Template Modal -->
    <app-modal
      [visible]="showCreateTemplateModal"
      title="\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043D\u043E\u0432\u044B\u0439 \u0432\u0438\u0434 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F"
      [showCloseButton]="true"
      [showFooter]="true"
      (closed)="closeCreateTemplateModal()"
      (visibleChange)="showCreateTemplateModal = $event"
      size="large">
      
      <div class="template-form">
        <div class="form-group">
          <label class="form-label" [attr.data-type]="invitationType">\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F</label>
            <input 
            type="text" 
            [(ngModel)]="newTemplate.name"
            placeholder="\u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440: \u041F\u0440\u0438\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435"
            class="form-input"
            [attr.data-type]="invitationType">
        </div>

        <div class="form-group">
          <label class="form-label" [attr.data-type]="invitationType">\u0422\u0438\u043F \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F</label>
          <div class="type-dropdown-wrapper">
            <select 
              [(ngModel)]="newTemplate.type"
              class="type-dropdown"
              [attr.data-type]="invitationType"
              [disabled]="templateTypes.length === 0">
              <option *ngIf="templateTypes.length === 0" value="">\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0442\u0438\u043F\u043E\u0432...</option>
              <option *ngFor="let templateType of templateTypes" [value]="templateType.type">
                {{ templateType.displayName }}
              </option>
            </select>
            <svg class="dropdown-arrow" viewBox="0 0 24 24" fill="none">
              <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>

        <div class="form-group" *ngIf="invitationType === 'email'">
          <label class="form-label" [attr.data-type]="invitationType">\u0422\u0435\u043C\u0430 \u043F\u0438\u0441\u044C\u043C\u0430</label>
            <input 
            type="text" 
            [(ngModel)]="newTemplate.subject"
            placeholder="\u041F\u0440\u0438\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435 \u0432 Westwood"
            class="form-input"
            [attr.data-type]="invitationType">
        </div>

        <div class="form-group">
          <label class="form-label" [attr.data-type]="invitationType">\u041A\u043E\u043D\u0442\u0435\u043D\u0442 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F</label>
          <div class="textarea-wrapper" [attr.data-type]="invitationType">
            <div 
              #contentEditable
              class="form-textarea-editable"
              contenteditable="true"
              (input)="onContentInput($event)"
              (keydown)="onContentKeydown($event)"
              (click)="onContentClick()"
              (blur)="onContentBlur($event)"
              [attr.data-type]="invitationType"
              [attr.placeholder]="'\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043A\u0441\u0442 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F...'">
            </div>
            <div class="variables-dropdown" *ngIf="showVariablesDropdown" [style.top.px]="dropdownPosition.top" [style.left.px]="dropdownPosition.left">
              <div class="variables-dropdown-header">
                <span>\u041F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435</span>
                <button type="button" class="variables-dropdown-close" (click)="closeVariablesDropdown()">\xD7</button>
              </div>
              <div class="variables-dropdown-list">
                <button 
                  type="button"
                  class="variable-option" 
                  *ngFor="let variable of filteredVariables"
                  (click)="selectVariable(variable)"
                  [class.highlighted]="highlightedVariableIndex === filteredVariables.indexOf(variable)">
                  <span class="variable-name">{{ getVariableDisplayName(variable.name) }}</span>
                  <span class="variable-desc">{{ variable.description }}</span>
                </button>
              </div>
            </div>
          </div>
          <div class="char-count">{{ getPlainTextContent().length }}/{{ invitationType === 'email' ? '1000' : '500' }}</div>
        </div>

        <div class="form-group">
          <label class="form-label" [attr.data-type]="invitationType">\u041F\u0440\u0435\u0434\u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440</label>
          <div class="preview-box" [attr.data-type]="invitationType">
            <ng-container [ngSwitch]="invitationType">
              <app-whatsapp-preview
                *ngSwitchCase="'whatsapp'"
                [contactName]="'\u041F\u043E\u043B\u0443\u0447\u0430\u0442\u0435\u043B\u044C'"
                [avatarLetter]="'\u041F'"
                [message]="newTemplate.content || '\u0422\u0435\u043A\u0441\u0442 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F...'"
                [showInputBar]="true"
                [noShadow]="true">
              </app-whatsapp-preview>
              <app-email-preview
                *ngSwitchDefault
                [recipientEmail]="'email@example.com'"
                [message]="newTemplate.content || '\u0422\u0435\u043A\u0441\u0442 \u043F\u0438\u0441\u044C\u043C\u0430...'"
                [activationLink]="'https://westwood.app/activate?token=xxx'"
                [buttonText]="'Activate Account'"
                [expirationDays]="7"
                [senderEmail]="'noreply@westwood.app'">
              </app-email-preview>
            </ng-container>
          </div>
        </div>
      </div>

      <ng-container modalFooter>
        <div class="modal-footer">
          <app-button
            buttonType="secondary"
            size="medium"
            (onClick)="closeCreateTemplateModal()">
            \u041E\u0442\u043C\u0435\u043D\u0430
          </app-button>
          <app-button
            [buttonType]="invitationType === 'email' ? 'primary' : 'success'"
            size="medium"
            [disabled]="!newTemplate.name || !newTemplate.content || (invitationType === 'email' && !newTemplate.subject)"
            (onClick)="saveTemplate()">
            \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0448\u0430\u0431\u043B\u043E\u043D
          </app-button>
        </div>
      </ng-container>
    </app-modal>

    <!-- Preview Template Modal -->
    <app-modal
      [visible]="showPreviewModal"
      title="\u041F\u0440\u0435\u0434\u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F"
      [showCloseButton]="true"
      (closed)="closePreview()">
      <div class="preview-content">
        <p class="preview-description">\u0422\u0430\u043A \u0431\u0443\u0434\u0435\u0442 \u0432\u044B\u0433\u043B\u044F\u0434\u0435\u0442\u044C \u0432\u0430\u0448\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u0432 WhatsApp</p>
        <app-whatsapp-preview
          *ngIf="previewTemplate"
          [contactName]="'\u041F\u043E\u043B\u0443\u0447\u0430\u0442\u0435\u043B\u044C'"
          [avatarLetter]="'\u041F'"
          [message]="previewTemplate.content"
          [showInputBar]="true"
          [noShadow]="true">
        </app-whatsapp-preview>
      </div>
    </app-modal>

    <!-- Delete Template Confirmation Modal -->
    <div class="delete-modal-overlay" *ngIf="showDeleteTemplateModal" (click)="closeDeleteTemplateModal()">
      <div class="delete-modal" (click)="$event.stopPropagation()">
        <!-- Step 1: Initial confirmation -->
        <div class="delete-modal-content" *ngIf="deleteTemplateStep === 1">
          <div class="delete-modal-icon warning">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M12 9v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <h3 class="delete-modal-title">\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0448\u0430\u0431\u043B\u043E\u043D?</h3>
          <p class="delete-modal-description">
            \u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B, \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0448\u0430\u0431\u043B\u043E\u043D <strong>{{ templateToDelete?.name }}</strong>?<br>
            \u042D\u0442\u043E \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u043D\u0435\u043B\u044C\u0437\u044F \u043E\u0442\u043C\u0435\u043D\u0438\u0442\u044C.
          </p>
          <div class="delete-modal-actions">
            <button class="delete-modal-btn cancel" (click)="closeDeleteTemplateModal()">\u041E\u0442\u043C\u0435\u043D\u0430</button>
            <button class="delete-modal-btn confirm" (click)="proceedToDeleteTemplateStep2()">\u0414\u0430, \u0443\u0434\u0430\u043B\u0438\u0442\u044C</button>
          </div>
        </div>

        <!-- Step 2: Type confirmation word -->
        <div class="delete-modal-content" *ngIf="deleteTemplateStep === 2">
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
            [(ngModel)]="deleteTemplateConfirmationText"
            placeholder="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043B\u043E\u0432\u043E \u0434\u043B\u044F \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u044F"
            (input)="checkDeleteTemplateConfirmation()"
            (keydown.enter)="confirmDeleteTemplate()">
          <div class="delete-modal-actions">
            <button class="delete-modal-btn cancel" (click)="closeDeleteTemplateModal()">\u041E\u0442\u043C\u0435\u043D\u0430</button>
            <button 
              class="delete-modal-btn delete" 
              [disabled]="!isDeleteTemplateConfirmed"
              (click)="confirmDeleteTemplate()">
              \u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043D\u0430\u0432\u0441\u0435\u0433\u0434\u0430
            </button>
          </div>
        </div>
      </div>
    </div>
  `, styles: ['/* angular:styles/component:css;1501dab5deaff254fca712814735114b70494c37ca90d7c4b871ac1cdcba8db2;/Users/baglan/repo/westwood/westwood-frontend/src/app/shared/components/invitation-form/invitation-form.component.ts */\n:host {\n  display: block;\n  width: 100%;\n}\n.collapsible-section {\n  background: white;\n  border-radius: 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n  transition: all 0.3s ease;\n}\n.collapsed-view {\n  padding: 1.25rem 1.5rem;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.collapsed-view:hover {\n  background: #f8fafc;\n}\n.collapsed-content {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.collapsed-icon {\n  width: 40px;\n  height: 40px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.collapsed-icon ::ng-deep svg {\n  width: 20px;\n  height: 20px;\n  color: white;\n}\n.collapsed-icon ::ng-deep svg path {\n  fill: white;\n}\n.collapsed-info {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n  min-width: 0;\n}\n.collapsed-title {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #1f2937;\n}\n.collapsed-preview {\n  font-size: 0.875rem;\n  color: #64748b;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.expand-btn {\n  background: none;\n  border: none;\n  padding: 0.5rem;\n  cursor: pointer;\n  color: #64748b;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: transform 0.2s;\n}\n.expand-btn svg {\n  width: 20px;\n  height: 20px;\n  transition: transform 0.2s;\n}\n.expand-btn svg.rotated {\n  transform: rotate(180deg);\n}\n.view-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1.25rem 1.5rem;\n  border-bottom: 1px solid #f1f5f9;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.view-header:hover {\n  background: #f8fafc;\n}\n.view-header-content {\n  display: flex;\n  align-items: flex-start;\n  gap: 1.25rem;\n}\n.collapse-btn {\n  background: none;\n  border: none;\n  padding: 0.5rem;\n  cursor: pointer;\n  color: #64748b;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.collapse-btn svg {\n  width: 20px;\n  height: 20px;\n}\n.expanded-content {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 2rem;\n  padding: 2rem;\n}\n.icon-wrapper {\n  width: 40px;\n  height: 40px;\n  border-radius: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.icon-wrapper ::ng-deep svg {\n  width: 28px;\n  height: 28px;\n  color: white;\n}\n.icon-wrapper ::ng-deep svg path {\n  fill: white;\n}\n.header-text {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.panel-title {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n}\n.panel-subtitle {\n  font-size: 0.9375rem;\n  color: #64748b;\n  margin: 0;\n}\n.alert-spacing {\n  margin-bottom: 1.5rem;\n}\n.left-panel {\n  display: flex;\n  flex-direction: column;\n  border-radius: 24px !important;\n}\n:host ::ng-deep .left-panel .card-body {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  padding: 2rem !important;\n}\n.form-content {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n.textarea-group {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.label-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.5rem;\n}\n.message-textarea {\n  flex: 1;\n  width: 100%;\n  min-height: 120px;\n  padding: 0.875rem;\n  border: 1px solid #cbd5e1;\n  border-radius: 8px;\n  font-size: 0.9375rem;\n  font-family: inherit;\n  resize: none;\n  transition: all 0.2s ease;\n  background-color: #ffffff;\n  color: #1a202c;\n  line-height: 1.6;\n}\n.message-textarea:focus {\n  outline: none;\n}\n.message-textarea[data-type=whatsapp]:focus {\n  border-color: #25D366;\n  box-shadow: 0 0 0 3px rgba(37, 211, 102, 0.15);\n}\n.message-textarea[data-type=email]:focus {\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);\n}\n.message-textarea::placeholder {\n  color: #94a3b8;\n}\n.message-textarea-editable {\n  flex: 1;\n  width: 100%;\n  min-height: 120px;\n  padding: 0.875rem;\n  border: 1px solid #cbd5e1;\n  border-radius: 8px;\n  font-size: 0.9375rem;\n  font-family: inherit;\n  background-color: #ffffff;\n  color: #1a202c;\n  line-height: 1.6;\n  outline: none;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n}\n.message-textarea-editable:empty:before {\n  content: attr(placeholder);\n  color: #94a3b8;\n  pointer-events: none;\n}\n.message-textarea-editable:focus {\n  outline: none;\n}\n.message-textarea-editable[data-type=whatsapp]:focus {\n  border-color: #25D366;\n  box-shadow: 0 0 0 3px rgba(37, 211, 102, 0.15);\n}\n.message-textarea-editable[data-type=email]:focus {\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);\n}\n.submit-btn {\n  width: 100%;\n}\n:host ::ng-deep .submit-btn button {\n  width: 100%;\n  border-radius: 12px !important;\n  padding: 1rem 1.5rem !important;\n}\n:host ::ng-deep .submit-btn button:hover:not(:disabled) {\n  transform: translateY(-2px);\n}\n.btn-icon {\n  width: 18px;\n  height: 18px;\n  flex-shrink: 0;\n  display: block;\n}\n.wa-icon,\n.email-icon {\n  width: 22px;\n  height: 22px;\n}\n.preview-section {\n  background: white;\n  border-radius: 24px;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n  display: flex;\n  flex-direction: column;\n}\n.section-title {\n  display: flex;\n  align-items: center;\n  gap: 0.625rem;\n  margin-bottom: 0.25rem;\n}\n.title-icon {\n  width: 22px;\n  height: 22px;\n}\n.section-heading {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0;\n}\n.section-description {\n  font-size: 0.875rem;\n  color: #9ca3af;\n  margin: 0 0 1.25rem 0;\n}\n.preview-component {\n  flex: 1;\n  display: block;\n}\n.templates-section {\n  background: white;\n  border-radius: 24px;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n  margin-bottom: 2rem;\n}\n.templates-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1.5rem;\n}\n.templates-title {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0;\n}\n.templates-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 1rem;\n}\n.template-card {\n  background: #f8fafc;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 16px;\n  padding: 1.25rem;\n  cursor: pointer;\n  transition: all 0.2s;\n  position: relative;\n}\n.template-card:hover {\n  background: #f1f5f9;\n  border-color: #25D366;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(37, 211, 102, 0.15);\n}\n.template-card.empty {\n  text-align: center;\n  padding: 3rem 1.5rem;\n  cursor: default;\n  border-style: dashed;\n}\n.template-card.empty:hover {\n  transform: none;\n  border-color: #e2e8f0;\n}\n.template-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.75rem;\n}\n.template-name {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #1f2937;\n}\n.template-preview {\n  font-size: 0.875rem;\n  color: #64748b;\n  line-height: 1.5;\n  margin: 0 0 0.75rem 0;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.template-actions {\n  display: flex;\n  gap: 0.5rem;\n  opacity: 0;\n  transition: opacity 0.2s;\n}\n.template-card:hover .template-actions {\n  opacity: 1;\n}\n.template-action-btn {\n  background: white;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 0.4rem;\n  cursor: pointer;\n  color: #64748b;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.15s;\n}\n.template-action-btn:hover {\n  background: #f1f5f9;\n  border-color: #cbd5e1;\n  color: #1f2937;\n}\n.template-action-btn svg {\n  width: 16px;\n  height: 16px;\n}\n.empty-icon {\n  width: 48px;\n  height: 48px;\n  color: #d1d5db;\n  margin: 0 auto 1rem;\n}\n.empty-text {\n  font-size: 0.9375rem;\n  color: #64748b;\n  margin: 0 0 0.25rem 0;\n  font-weight: 500;\n}\n.empty-hint {\n  font-size: 0.8125rem;\n  color: #94a3b8;\n  margin: 0;\n}\n.template-form {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n  padding: 0.5rem 0;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.form-label {\n  font-size: 0.9375rem;\n  font-weight: 600;\n  color: #1f2937;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.form-label::before {\n  content: "";\n  width: 3px;\n  height: 16px;\n  border-radius: 2px;\n}\n.form-label[data-type=whatsapp]::before {\n  background:\n    linear-gradient(\n      135deg,\n      #25D366 0%,\n      #128C7E 100%);\n}\n.form-label[data-type=email]::before {\n  background:\n    linear-gradient(\n      135deg,\n      #3b82f6 0%,\n      #1d4ed8 100%);\n}\n.form-input {\n  padding: 0.875rem 1.125rem;\n  border: 2px solid #e2e8f0;\n  border-radius: 12px;\n  font-size: 0.9375rem;\n  background: #ffffff;\n  color: #1f2937;\n  transition: all 0.2s;\n  font-family: inherit;\n}\n.form-input::placeholder {\n  color: #94a3b8;\n}\n.form-input:focus {\n  outline: none;\n  background: #f0fdf4;\n  box-shadow: 0 0 0 4px rgba(37, 211, 102, 0.1);\n}\n.form-input[data-type=whatsapp]:focus {\n  border-color: #25D366;\n  background: #f0fdf4;\n  box-shadow: 0 0 0 4px rgba(37, 211, 102, 0.1);\n}\n.form-input[data-type=email]:focus {\n  border-color: #3b82f6;\n  background: #eff6ff;\n  box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1);\n}\n.type-dropdown-wrapper {\n  position: relative;\n}\n.type-dropdown {\n  width: 100%;\n  padding: 0.875rem 3rem 0.875rem 1.125rem;\n  border: 2px solid #e2e8f0;\n  border-radius: 12px;\n  font-size: 0.9375rem;\n  background: #ffffff;\n  color: #1f2937;\n  transition: all 0.2s;\n  font-family: inherit;\n  appearance: none;\n  cursor: pointer;\n}\n.type-dropdown:focus {\n  outline: none;\n  box-shadow: 0 0 0 4px rgba(37, 211, 102, 0.1);\n}\n.type-dropdown[data-type=whatsapp]:focus {\n  border-color: #25D366;\n  background: #f0fdf4;\n  box-shadow: 0 0 0 4px rgba(37, 211, 102, 0.1);\n}\n.type-dropdown[data-type=email]:focus {\n  border-color: #3b82f6;\n  background: #eff6ff;\n  box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1);\n}\n.type-dropdown:hover {\n  border-color: #cbd5e1;\n}\n.dropdown-arrow {\n  position: absolute;\n  right: 1rem;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 20px;\n  height: 20px;\n  color: #64748b;\n  pointer-events: none;\n  transition: transform 0.2s;\n}\n.type-dropdown[data-type=whatsapp]:focus + .dropdown-arrow {\n  color: #25D366;\n}\n.type-dropdown[data-type=email]:focus + .dropdown-arrow {\n  color: #3b82f6;\n}\n.textarea-wrapper {\n  position: relative;\n  width: 100%;\n}\n.form-textarea {\n  width: 100%;\n  padding: 1rem 1.125rem;\n  border: 2px solid #e2e8f0;\n  border-radius: 12px;\n  font-size: 0.9375rem;\n  font-family: inherit;\n  resize: vertical;\n  background: #ffffff;\n  color: #1f2937;\n  line-height: 1.6;\n  transition: all 0.2s;\n  min-height: 150px;\n}\n.form-textarea:focus {\n  outline: none;\n  box-shadow: 0 0 0 4px rgba(37, 211, 102, 0.1);\n}\n.form-textarea[data-type=whatsapp]:focus {\n  border-color: #25D366;\n  background: #f0fdf4;\n  box-shadow: 0 0 0 4px rgba(37, 211, 102, 0.1);\n}\n.form-textarea[data-type=email]:focus {\n  border-color: #3b82f6;\n  background: #eff6ff;\n  box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1);\n}\n.form-textarea-editable {\n  width: 100%;\n  padding: 1rem 1.125rem;\n  border: 2px solid #e2e8f0;\n  border-radius: 12px;\n  font-size: 0.9375rem;\n  font-family: inherit;\n  background: #ffffff;\n  color: #1f2937;\n  line-height: 1.6;\n  transition: all 0.2s;\n  min-height: 150px;\n  outline: none;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n}\n.form-textarea-editable:empty:before {\n  content: attr(placeholder);\n  color: #94a3b8;\n  pointer-events: none;\n}\n.form-textarea-editable:focus {\n  box-shadow: 0 0 0 4px rgba(37, 211, 102, 0.1);\n}\n.form-textarea-editable[data-type=whatsapp]:focus {\n  border-color: #25D366;\n  background: #f0fdf4;\n  box-shadow: 0 0 0 4px rgba(37, 211, 102, 0.1);\n}\n.form-textarea-editable[data-type=email]:focus {\n  border-color: #3b82f6;\n  background: #eff6ff;\n  box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1);\n}\n.variable-tag {\n  color: #16a34a !important;\n  font-style: italic !important;\n  font-weight: 500 !important;\n  font-family:\n    "Courier New",\n    "Monaco",\n    "Menlo",\n    "Consolas",\n    monospace !important;\n  background: rgba(34, 197, 94, 0.08) !important;\n  padding: 2px 6px !important;\n  border-radius: 4px !important;\n  border: 1px solid rgba(34, 197, 94, 0.2) !important;\n  display: inline !important;\n}\n:host ::ng-deep .variable-tag {\n  color: rgb(22, 158, 163) !important;\n  font-style: italic !important;\n  font-weight: 500 !important;\n  font-family:\n    "Courier New",\n    "Monaco",\n    "Menlo",\n    "Consolas",\n    monospace !important;\n  background: rgba(22, 158, 163, 0.2) !important;\n  padding: 2px 6px !important;\n  border-radius: 4px !important;\n  border: 1px solid rgba(34, 197, 94, 0.2) !important;\n  display: inline !important;\n}\n.variables-dropdown {\n  position: absolute;\n  background: white;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  z-index: 1000;\n  min-width: 280px;\n  max-width: 400px;\n  max-height: 300px;\n  overflow: hidden;\n  margin-top: 4px;\n}\n.variables-dropdown-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 14px;\n  background: #f8fafc;\n  border-bottom: 1px solid #e2e8f0;\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #64748b;\n}\n.variables-dropdown-close {\n  background: none;\n  border: none;\n  font-size: 1.25rem;\n  color: #94a3b8;\n  cursor: pointer;\n  padding: 0;\n  line-height: 1;\n  transition: color 0.15s;\n}\n.variables-dropdown-close:hover {\n  color: #64748b;\n}\n.variables-dropdown-list {\n  max-height: 250px;\n  overflow-y: auto;\n  padding: 4px;\n}\n.variable-option {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  width: 100%;\n  padding: 10px 14px;\n  background: transparent;\n  border: none;\n  text-align: left;\n  cursor: pointer;\n  transition: all 0.15s;\n  border-radius: 8px;\n}\n.variable-option:hover,\n.variable-option.highlighted {\n  background: #f0fdf4;\n}\n.variable-name {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #16a34a;\n  font-family: "Courier New", monospace;\n}\n.variable-desc {\n  font-size: 0.75rem;\n  color: #64748b;\n}\n.char-count {\n  font-size: 0.75rem;\n  color: #94a3b8;\n  text-align: right;\n  margin-top: 0.25rem;\n}\n.preview-box {\n  border-radius: 16px;\n  padding: 1.5rem;\n  max-height: 450px;\n  overflow-y: auto;\n}\n.preview-box[data-type=whatsapp] {\n  background:\n    linear-gradient(\n      135deg,\n      #f0fdf4 0%,\n      #ffffff 100%);\n  border: 2px solid #dcfce7;\n  box-shadow: 0 2px 8px rgba(37, 211, 102, 0.08);\n}\n.preview-box[data-type=email] {\n  background:\n    linear-gradient(\n      135deg,\n      #eff6ff 0%,\n      #ffffff 100%);\n  border: 2px solid #dbeafe;\n  box-shadow: 0 2px 8px rgba(59, 130, 246, 0.08);\n}\n.modal-footer {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.875rem;\n  padding: 1.25rem 0 0 0;\n  border-top: 2px solid #f1f5f9;\n  margin-top: 0.5rem;\n}\n.preview-content {\n  padding: 0.5rem 0;\n}\n.preview-description {\n  font-size: 0.875rem;\n  color: #64748b;\n  margin: 0 0 1.5rem 0;\n}\n:host ::ng-deep .modal-footer app-button button {\n  padding: 0.75rem 1.5rem !important;\n  font-weight: 600 !important;\n  border-radius: 10px !important;\n}\n@media (max-width: 1024px) {\n  .expanded-content {\n    grid-template-columns: 1fr;\n  }\n  .templates-grid {\n    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));\n  }\n}\n@media (max-width: 768px) {\n  .expanded-content {\n    padding: 1rem;\n  }\n  .templates-header {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 1rem;\n  }\n  .templates-grid {\n    grid-template-columns: 1fr;\n  }\n  :host ::ng-deep .left-panel .card-body {\n    padding: 1.5rem !important;\n  }\n}\n.preview-content {\n  padding: 0.5rem 0;\n}\n.preview-description {\n  font-size: 0.875rem;\n  color: #64748b;\n  margin: 0 0 1.5rem 0;\n}\n.delete-modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  animation: fadeIn 0.2s ease;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.delete-modal {\n  background: white;\n  border-radius: 16px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n  max-width: 420px;\n  width: 90%;\n  animation: slideUp 0.3s ease;\n}\n@keyframes slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.delete-modal-content {\n  padding: 2rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n}\n.delete-modal-icon {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 1.25rem;\n}\n.delete-modal-icon.warning {\n  background: #fef3c7;\n  color: #d97706;\n}\n.delete-modal-icon.danger {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.delete-modal-icon svg {\n  width: 32px;\n  height: 32px;\n}\n.delete-modal-title {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0 0 0.75rem;\n}\n.delete-modal-description {\n  font-size: 0.9rem;\n  color: #6b7280;\n  line-height: 1.6;\n  margin: 0 0 1.5rem;\n}\n.delete-modal-description strong {\n  color: #1f2937;\n}\n.confirm-word {\n  color: #dc2626;\n  background: #fee2e2;\n  padding: 0.125rem 0.5rem;\n  border-radius: 4px;\n  font-family: monospace;\n  font-size: 0.95rem;\n}\n.delete-confirm-input {\n  width: 100%;\n  padding: 0.875rem 1rem;\n  border: 2px solid #e5e7eb;\n  border-radius: 10px;\n  font-size: 1rem;\n  font-family: inherit;\n  text-align: center;\n  margin-bottom: 1.5rem;\n  transition: all 0.2s ease;\n}\n.delete-confirm-input:focus {\n  outline: none;\n  border-color: #dc2626;\n  box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);\n}\n.delete-confirm-input::placeholder {\n  color: #9ca3af;\n}\n.delete-modal-actions {\n  display: flex;\n  gap: 0.75rem;\n  width: 100%;\n}\n.delete-modal-btn {\n  flex: 1;\n  padding: 0.875rem 1.5rem;\n  border-radius: 10px;\n  font-size: 0.9rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  border: none;\n}\n.delete-modal-btn.cancel {\n  background: #f3f4f6;\n  color: #6b7280;\n}\n.delete-modal-btn.cancel:hover {\n  background: #e5e7eb;\n  color: #374151;\n}\n.delete-modal-btn.confirm {\n  background: #fef3c7;\n  color: #d97706;\n}\n.delete-modal-btn.confirm:hover {\n  background: #fde68a;\n  color: #b45309;\n}\n.delete-modal-btn.delete {\n  background: #dc2626;\n  color: white;\n}\n.delete-modal-btn.delete:hover:not(:disabled) {\n  background: #b91c1c;\n}\n.delete-modal-btn.delete:disabled {\n  background: #fca5a5;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=invitation-form.component.css.map */\n'] }]
  }], () => [{ type: DomSanitizer }], { contentEditableRef: [{
    type: ViewChild,
    args: ["contentEditable", { static: false }]
  }], messageContentEditableRef: [{
    type: ViewChild,
    args: ["messageContentEditable", { static: false }]
  }], invitationType: [{
    type: Input
  }], form: [{
    type: Input
  }], title: [{
    type: Input
  }], subtitle: [{
    type: Input
  }], iconSvg: [{
    type: Input
  }], iconColor: [{
    type: Input
  }], previewDescription: [{
    type: Input
  }], messageTemplates: [{
    type: Input
  }], isSending: [{
    type: Input
  }], successMessage: [{
    type: Input
  }], errorMessage: [{
    type: Input
  }], hideForm: [{
    type: Input
  }], templateTypes: [{
    type: Input
  }], templateVariables: [{
    type: Input
  }], formSubmit: [{
    type: Output
  }], templateSelected: [{
    type: Output
  }], templateCreated: [{
    type: Output
  }], templateUpdated: [{
    type: Output
  }], templateDeleted: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InvitationFormComponent, { className: "InvitationFormComponent", filePath: "src/app/shared/components/invitation-form/invitation-form.component.ts", lineNumber: 1549 });
})();

// src/app/shared/components/message-details-modal/message-details-modal.component.ts
function MessageDetailsModalComponent_div_1__svg_svg_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 11);
    \u0275\u0275element(1, "path", 18)(2, "path", 19);
    \u0275\u0275elementEnd();
  }
}
function MessageDetailsModalComponent_div_1__svg_svg_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 11);
    \u0275\u0275element(1, "path", 20)(2, "path", 21);
    \u0275\u0275elementEnd();
  }
}
function MessageDetailsModalComponent_div_1_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4);
    \u0275\u0275text(2, "\u0422\u0435\u043C\u0430 \u043F\u0438\u0441\u044C\u043C\u0430");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 9);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.message.subject);
  }
}
function MessageDetailsModalComponent_div_1_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4);
    \u0275\u0275text(2, "\u0428\u0430\u0431\u043B\u043E\u043D");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 9)(4, "span", 22);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.message.templateName);
  }
}
function MessageDetailsModalComponent_div_1_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4);
    \u0275\u0275text(2, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u043B");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 9)(4, "div", 23);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 11);
    \u0275\u0275element(6, "path", 24)(7, "circle", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r0.message.initiatedByUsername);
  }
}
function MessageDetailsModalComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4);
    \u0275\u0275text(3, "\u041F\u043E\u043B\u0443\u0447\u0430\u0442\u0435\u043B\u044C");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 5)(5, "div", 6);
    \u0275\u0275template(6, MessageDetailsModalComponent_div_1__svg_svg_6_Template, 3, 0, "svg", 7)(7, MessageDetailsModalComponent_div_1__svg_svg_7_Template, 3, 0, "svg", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(10, MessageDetailsModalComponent_div_1_div_10_Template, 5, 1, "div", 8);
    \u0275\u0275elementStart(11, "div", 3)(12, "div", 4);
    \u0275\u0275text(13, "\u0412\u0440\u0435\u043C\u044F \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0438");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 9)(15, "div", 10);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(16, "svg", 11);
    \u0275\u0275element(17, "circle", 12)(18, "path", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(19, "span");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(21, "div", 3)(22, "div", 4);
    \u0275\u0275text(23, "\u0421\u0442\u0430\u0442\u0443\u0441");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 9)(25, "app-badge", 14);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(27, MessageDetailsModalComponent_div_1_div_27_Template, 6, 1, "div", 8)(28, MessageDetailsModalComponent_div_1_div_28_Template, 10, 1, "div", 8);
    \u0275\u0275elementStart(29, "div", 15)(30, "div", 4);
    \u0275\u0275text(31, "\u0421\u043E\u0434\u0435\u0440\u0436\u0430\u043D\u0438\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 16)(33, "pre", 17);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275classProp("whatsapp", ctx_r0.message.type === "whatsapp")("email", ctx_r0.message.type === "email");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.message.type === "whatsapp");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.message.type === "email");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.message.recipient || "\u041D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.message.type === "email" && ctx_r0.message.subject);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r0.formatDateTime(ctx_r0.message.sentAt));
    \u0275\u0275advance(5);
    \u0275\u0275property("badgeType", ctx_r0.getStatusBadgeType(ctx_r0.message.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getStatusLabel(ctx_r0.message.status), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.message.templateName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.message.initiatedByUsername);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.message.message);
  }
}
var MessageDetailsModalComponent = class _MessageDetailsModalComponent {
  visible = false;
  message = null;
  visibleChange = new EventEmitter();
  getModalTitle() {
    if (!this.message)
      return "\u0414\u0435\u0442\u0430\u043B\u0438 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F";
    return this.message.type === "whatsapp" ? "\u0414\u0435\u0442\u0430\u043B\u0438 WhatsApp \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F" : "\u0414\u0435\u0442\u0430\u043B\u0438 Email \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F";
  }
  formatDateTime(date) {
    const d = new Date(date);
    const dateStr = d.toLocaleDateString("ru-RU", {
      day: "2-digit",
      month: "long",
      year: "numeric"
    });
    const timeStr = d.toLocaleTimeString("ru-RU", {
      hour: "2-digit",
      minute: "2-digit"
    });
    return `${dateStr} \u0432 ${timeStr}`;
  }
  getStatusBadgeType(status) {
    switch (status) {
      case "sent":
        return "success";
      case "pending":
        return "warning";
      case "failed":
        return "danger";
      default:
        return "success";
    }
  }
  getStatusLabel(status) {
    switch (status) {
      case "sent":
        return "\u041E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043E";
      case "pending":
        return "\u041E\u0436\u0438\u0434\u0430\u0435\u0442";
      case "failed":
        return "\u041E\u0448\u0438\u0431\u043A\u0430";
      default:
        return status;
    }
  }
  onClose() {
    this.visibleChange.emit(false);
  }
  static \u0275fac = function MessageDetailsModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MessageDetailsModalComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MessageDetailsModalComponent, selectors: [["app-message-details-modal"]], inputs: { visible: "visible", message: "message" }, outputs: { visibleChange: "visibleChange" }, decls: 2, vars: 4, consts: [[3, "visibleChange", "visible", "title", "showCloseButton"], ["class", "message-details-content", 4, "ngIf"], [1, "message-details-content"], [1, "detail-section"], [1, "detail-label"], [1, "detail-value", "recipient-value"], [1, "recipient-icon"], ["viewBox", "0 0 24 24", "fill", "none", 4, "ngIf"], ["class", "detail-section", 4, "ngIf"], [1, "detail-value"], [1, "time-info"], ["viewBox", "0 0 24 24", "fill", "none"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "1.5"], ["d", "M12 6v6l4 2", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round"], ["size", "medium", 3, "badgeType"], [1, "detail-section", "message-section"], [1, "message-content"], [1, "message-text"], ["d", "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z", "fill", "currentColor"], ["d", "M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z", "fill", "currentColor"], ["d", "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M22 6l-10 7L2 6", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "template-badge"], [1, "sender-info"], ["d", "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["cx", "12", "cy", "7", "r", "4", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"]], template: function MessageDetailsModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-modal", 0);
      \u0275\u0275listener("visibleChange", function MessageDetailsModalComponent_Template_app_modal_visibleChange_0_listener() {
        return ctx.onClose();
      });
      \u0275\u0275template(1, MessageDetailsModalComponent_div_1_Template, 35, 14, "div", 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("visible", ctx.visible)("title", ctx.getModalTitle())("showCloseButton", true);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.message);
    }
  }, dependencies: [CommonModule, NgIf, ModalComponent, BadgeComponent], styles: ["\n\n.message-details-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n  padding: 0.5rem 0;\n}\n.detail-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.detail-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.detail-value[_ngcontent-%COMP%] {\n  font-size: 0.9375rem;\n  color: #1f2937;\n  font-weight: 500;\n}\n.recipient-value[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.recipient-icon[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.recipient-icon.whatsapp[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #dcfce7,\n      #bbf7d0);\n  color: #25D366;\n}\n.recipient-icon.email[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #dbeafe,\n      #bfdbfe);\n  color: #3b82f6;\n}\n.recipient-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n}\n.time-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.time-info[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  color: #64748b;\n}\n.template-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.375rem 0.75rem;\n  background: #f0fdf4;\n  color: #16A34A;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  font-weight: 500;\n}\n.sender-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.sender-info[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  color: #64748b;\n  flex-shrink: 0;\n}\n.message-section[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n.message-content[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 1rem;\n  max-height: 400px;\n  overflow-y: auto;\n}\n.message-text[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.9375rem;\n  line-height: 1.6;\n  color: #1f2937;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n  font-family: inherit;\n}\n.message-content[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n.message-content[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f1f5f9;\n  border-radius: 3px;\n}\n.message-content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #cbd5e1;\n  border-radius: 3px;\n}\n.message-content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #94a3b8;\n}\n/*# sourceMappingURL=message-details-modal.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MessageDetailsModalComponent, [{
    type: Component,
    args: [{ selector: "app-message-details-modal", standalone: true, imports: [CommonModule, ModalComponent, BadgeComponent], template: `
    <app-modal
      [visible]="visible"
      [title]="getModalTitle()"
      [showCloseButton]="true"
      (visibleChange)="onClose()">
      <div class="message-details-content" *ngIf="message">
        <!-- Recipient Info -->
        <div class="detail-section">
          <div class="detail-label">\u041F\u043E\u043B\u0443\u0447\u0430\u0442\u0435\u043B\u044C</div>
          <div class="detail-value recipient-value">
            <div class="recipient-icon" [class.whatsapp]="message.type === 'whatsapp'" [class.email]="message.type === 'email'">
              <svg *ngIf="message.type === 'whatsapp'" viewBox="0 0 24 24" fill="none">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" fill="currentColor"/>
                <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" fill="currentColor"/>
              </svg>
              <svg *ngIf="message.type === 'email'" viewBox="0 0 24 24" fill="none">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22 6l-10 7L2 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <span>{{ message.recipient || '\u041D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D' }}</span>
          </div>
        </div>

        <!-- Subject (only for Email) -->
        <div class="detail-section" *ngIf="message.type === 'email' && message.subject">
          <div class="detail-label">\u0422\u0435\u043C\u0430 \u043F\u0438\u0441\u044C\u043C\u0430</div>
          <div class="detail-value">{{ message.subject }}</div>
        </div>

        <!-- Sent Time -->
        <div class="detail-section">
          <div class="detail-label">\u0412\u0440\u0435\u043C\u044F \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0438</div>
          <div class="detail-value">
            <div class="time-info">
              <svg viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"/>
                <path d="M12 6v6l4 2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
              <span>{{ formatDateTime(message.sentAt) }}</span>
            </div>
          </div>
        </div>

        <!-- Status -->
        <div class="detail-section">
          <div class="detail-label">\u0421\u0442\u0430\u0442\u0443\u0441</div>
          <div class="detail-value">
            <app-badge 
              [badgeType]="getStatusBadgeType(message.status)" 
              size="medium">
              {{ getStatusLabel(message.status) }}
            </app-badge>
          </div>
        </div>

        <!-- Template (if used) -->
        <div class="detail-section" *ngIf="message.templateName">
          <div class="detail-label">\u0428\u0430\u0431\u043B\u043E\u043D</div>
          <div class="detail-value">
            <span class="template-badge">{{ message.templateName }}</span>
          </div>
        </div>

        <!-- Initiated By -->
        <div class="detail-section" *ngIf="message.initiatedByUsername">
          <div class="detail-label">\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u043B</div>
          <div class="detail-value">
            <div class="sender-info">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="12" cy="7" r="4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>{{ message.initiatedByUsername }}</span>
            </div>
          </div>
        </div>

        <!-- Message Content -->
        <div class="detail-section message-section">
          <div class="detail-label">\u0421\u043E\u0434\u0435\u0440\u0436\u0430\u043D\u0438\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F</div>
          <div class="message-content">
            <pre class="message-text">{{ message.message }}</pre>
          </div>
        </div>
      </div>
    </app-modal>
  `, styles: ["/* angular:styles/component:css;0efc2c041386919f5e5751db1955b947058b1be6409dd5ef7ecd8258c3549030;/Users/baglan/repo/westwood/westwood-frontend/src/app/shared/components/message-details-modal/message-details-modal.component.ts */\n.message-details-content {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n  padding: 0.5rem 0;\n}\n.detail-section {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.detail-label {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.detail-value {\n  font-size: 0.9375rem;\n  color: #1f2937;\n  font-weight: 500;\n}\n.recipient-value {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.recipient-icon {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.recipient-icon.whatsapp {\n  background:\n    linear-gradient(\n      135deg,\n      #dcfce7,\n      #bbf7d0);\n  color: #25D366;\n}\n.recipient-icon.email {\n  background:\n    linear-gradient(\n      135deg,\n      #dbeafe,\n      #bfdbfe);\n  color: #3b82f6;\n}\n.recipient-icon svg {\n  width: 18px;\n  height: 18px;\n}\n.time-info {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.time-info svg {\n  width: 18px;\n  height: 18px;\n  color: #64748b;\n}\n.template-badge {\n  display: inline-block;\n  padding: 0.375rem 0.75rem;\n  background: #f0fdf4;\n  color: #16A34A;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  font-weight: 500;\n}\n.sender-info {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.sender-info svg {\n  width: 18px;\n  height: 18px;\n  color: #64748b;\n  flex-shrink: 0;\n}\n.message-section {\n  margin-top: 0.5rem;\n}\n.message-content {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 1rem;\n  max-height: 400px;\n  overflow-y: auto;\n}\n.message-text {\n  margin: 0;\n  font-size: 0.9375rem;\n  line-height: 1.6;\n  color: #1f2937;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n  font-family: inherit;\n}\n.message-content::-webkit-scrollbar {\n  width: 6px;\n}\n.message-content::-webkit-scrollbar-track {\n  background: #f1f5f9;\n  border-radius: 3px;\n}\n.message-content::-webkit-scrollbar-thumb {\n  background: #cbd5e1;\n  border-radius: 3px;\n}\n.message-content::-webkit-scrollbar-thumb:hover {\n  background: #94a3b8;\n}\n/*# sourceMappingURL=message-details-modal.component.css.map */\n"] }]
  }], null, { visible: [{
    type: Input
  }], message: [{
    type: Input
  }], visibleChange: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MessageDetailsModalComponent, { className: "MessageDetailsModalComponent", filePath: "src/app/shared/components/message-details-modal/message-details-modal.component.ts", lineNumber: 250 });
})();

// src/app/features/invitation/pages/invitation-page/invitation-page.component.ts
function InvitationPageComponent_app_badge_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-badge", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.invitationHistory.length, " ");
  }
}
function InvitationPageComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 15);
    \u0275\u0275element(2, "path", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "p", 17);
    \u0275\u0275text(4, "\u0412\u044B \u0435\u0449\u0451 \u043D\u0438\u043A\u043E\u0433\u043E \u043D\u0435 \u043F\u0440\u0438\u0433\u043B\u0430\u0448\u0430\u043B\u0438");
    \u0275\u0275elementEnd()();
  }
}
function InvitationPageComponent_app_paginated_table_wrapper_12_tr_19_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r3.templateName, " ");
  }
}
function InvitationPageComponent_app_paginated_table_wrapper_12_tr_19_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 36);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function InvitationPageComponent_app_paginated_table_wrapper_12_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 22);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 23);
    \u0275\u0275element(4, "path", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "span", 25);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "td")(8, "span", 26);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275template(11, InvitationPageComponent_app_paginated_table_wrapper_12_tr_19_span_11_Template, 2, 1, "span", 27)(12, InvitationPageComponent_app_paginated_table_wrapper_12_tr_19_span_12_Template, 2, 0, "span", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td")(14, "span", 29);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td")(17, "app-badge", 30);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "td")(20, "div", 31)(21, "app-icon-button", 32);
    \u0275\u0275listener("onClick", function InvitationPageComponent_app_paginated_table_wrapper_12_tr_19_Template_app_icon_button_onClick_21_listener() {
      const item_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openMessageDetails(item_r3));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(22, "svg", 23);
    \u0275\u0275element(23, "path", 33)(24, "circle", 34);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.getSafeClientName(item_r3));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.formatDate(item_r3.createdAt || item_r3.sentAt));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", item_r3.templateName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !item_r3.templateName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r3.initiatedByUsername || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275property("badgeType", ctx_r0.getStatusBadgeType(item_r3.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getStatusLabel(item_r3.status), " ");
  }
}
function InvitationPageComponent_app_paginated_table_wrapper_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-paginated-table-wrapper", 18, 0)(2, "div", 19)(3, "table", 20)(4, "thead")(5, "tr")(6, "th");
    \u0275\u0275text(7, "\u041F\u043E\u043B\u0443\u0447\u0430\u0442\u0435\u043B\u044C");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "\u0412\u0440\u0435\u043C\u044F \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0438");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "\u0428\u0430\u0431\u043B\u043E\u043D");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u043B");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "\u0421\u0442\u0430\u0442\u0443\u0441");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "tbody");
    \u0275\u0275template(19, InvitationPageComponent_app_paginated_table_wrapper_12_tr_19_Template, 25, 7, "tr", 21);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const paginatedTable_r4 = \u0275\u0275reference(1);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("paginationEnabled", true)("data", ctx_r0.invitationHistory)("defaultPageSize", 15);
    \u0275\u0275advance(19);
    \u0275\u0275property("ngForOf", paginatedTable_r4.paginatedData);
  }
}
var InvitationPageComponent = class _InvitationPageComponent {
  fb;
  store;
  user$;
  invitationForm;
  isSending = false;
  successMessage = "";
  errorMessage = "";
  invitationHistory = [];
  messageTemplates = [];
  selectedTemplateId = null;
  showMessageDetailsModal = false;
  selectedMessage = null;
  isLoading = false;
  isLoadingTemplates = false;
  templateTypes = [];
  templateVariables = [];
  whatsappIconSvg;
  pageHeaderService = inject(PageHeaderService);
  messageTemplatesService = inject(MessageTemplatesService);
  messagesService = inject(MessagesService);
  toastService = inject(ToastService);
  defaultMessage = `\u041F\u0440\u0438\u0432\u0435\u0442! \u{1F44B}

\u041F\u0440\u0438\u0433\u043B\u0430\u0448\u0430\u044E \u0442\u0435\u0431\u044F \u043F\u0440\u0438\u0441\u043E\u0435\u0434\u0438\u043D\u0438\u0442\u044C\u0441\u044F \u043A Westwood \u2014 \u044D\u0442\u043E \u043E\u0442\u043B\u0438\u0447\u043D\u0430\u044F \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430 \u0434\u043B\u044F \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044F.

\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0439\u0441\u044F \u043F\u043E \u0441\u0441\u044B\u043B\u043A\u0435:
https://westwood.app/register`;
  constructor(fb, store) {
    this.fb = fb;
    this.store = store;
    this.user$ = this.store.select(selectUser);
    this.invitationForm = this.fb.group({
      message: [this.defaultMessage, [Validators.required]]
    });
    this.whatsappIconSvg = `
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" fill="currentColor"/>
        <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" fill="currentColor"/>
      </svg>
    `;
  }
  ngOnInit() {
    this.pageHeaderService.setPageHeader("WhatsApp \u043A\u043E\u043C\u043C\u0443\u043D\u0438\u043A\u0430\u0446\u0438\u044F", [
      { label: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F", route: "/home" },
      { label: "\u041A\u043E\u043C\u043C\u0443\u043D\u0438\u043A\u0430\u0446\u0438\u044F" },
      { label: "WhatsApp" }
    ]);
    this.loadHistory();
    this.loadTemplates();
    this.loadTemplateTypes();
    this.loadTemplateVariables();
  }
  onSubmit() {
    if (this.invitationForm.valid) {
      this.isSending = true;
      this.errorMessage = "";
      this.successMessage = "";
      const message = this.invitationForm.get("message")?.value || "";
      setTimeout(() => {
        try {
          const selectedTemplate = this.selectedTemplateId ? this.messageTemplates.find((t) => t.id === this.selectedTemplateId) : null;
          this.successMessage = "\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u0433\u043E\u0442\u043E\u0432\u043E \u043A \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0435";
          this.loadHistory();
          this.invitationForm.patchValue({ message: this.defaultMessage });
          this.selectedTemplateId = null;
        } catch (error) {
          this.errorMessage = "\u041F\u0440\u043E\u0438\u0437\u043E\u0448\u043B\u0430 \u043E\u0448\u0438\u0431\u043A\u0430";
        }
        this.isSending = false;
      }, 600);
    }
  }
  onTemplateSelected(template) {
    this.selectedTemplateId = template.id;
  }
  onTemplateCreated(template) {
    const apiTemplate = {
      id: template.id,
      name: template.name,
      type: template.type,
      content: template.content,
      createdAt: template.createdAt?.toISOString()
    };
    this.messageTemplatesService.createTemplate({
      name: apiTemplate.name,
      type: apiTemplate.type,
      content: apiTemplate.content
    }).subscribe({
      next: (createdTemplate) => {
        const frontendTemplate = this.mapApiTemplateToFrontend(createdTemplate);
        this.messageTemplates.push(frontendTemplate);
        this.toastService.success("\u0428\u0430\u0431\u043B\u043E\u043D \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0441\u043E\u0437\u0434\u0430\u043D");
      },
      error: (err) => {
        const errorMessage = err.error?.message || "\u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u0448\u0430\u0431\u043B\u043E\u043D\u0430";
        this.toastService.error(errorMessage);
      }
    });
  }
  onTemplateUpdated(template) {
    const apiTemplate = {
      id: template.id,
      name: template.name,
      type: template.type,
      content: template.content
    };
    this.messageTemplatesService.updateTemplate(template.id, {
      name: apiTemplate.name,
      type: apiTemplate.type,
      content: apiTemplate.content
    }).subscribe({
      next: (updatedTemplate) => {
        const frontendTemplate = this.mapApiTemplateToFrontend(updatedTemplate);
        const index = this.messageTemplates.findIndex((t) => t.id === template.id);
        if (index !== -1) {
          this.messageTemplates[index] = frontendTemplate;
        }
        this.toastService.success("\u0428\u0430\u0431\u043B\u043E\u043D \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D");
      },
      error: (err) => {
        const errorMessage = err.error?.message || "\u041E\u0448\u0438\u0431\u043A\u0430 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F \u0448\u0430\u0431\u043B\u043E\u043D\u0430";
        this.toastService.error(errorMessage);
      }
    });
  }
  onTemplateDeleted(templateId) {
    this.messageTemplatesService.deleteTemplate(templateId).subscribe({
      next: () => {
        this.messageTemplates = this.messageTemplates.filter((t) => t.id !== templateId);
        this.toastService.success("\u0428\u0430\u0431\u043B\u043E\u043D \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0443\u0434\u0430\u043B\u0435\u043D");
      },
      error: (err) => {
        const errorMessage = err.error?.message || "\u041E\u0448\u0438\u0431\u043A\u0430 \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u044F \u0448\u0430\u0431\u043B\u043E\u043D\u0430";
        this.toastService.error(errorMessage);
      }
    });
  }
  formatPhone(phone) {
    if (!phone)
      return "\u041D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D";
    const cleaned = phone.replace(/[^\d]/g, "");
    if (cleaned.length === 11 && cleaned.startsWith("7")) {
      return `+7 ${cleaned.slice(1, 4)} ${cleaned.slice(4, 7)}-${cleaned.slice(7, 9)}-${cleaned.slice(9)}`;
    }
    return phone;
  }
  formatDate(date) {
    if (!date)
      return "\u2014";
    const d = date instanceof Date ? date : new Date(date);
    if (isNaN(d.getTime()))
      return "\u2014";
    const now = /* @__PURE__ */ new Date();
    const diffMs = now.getTime() - d.getTime();
    const diffMins = Math.floor(diffMs / 6e4);
    const diffHours = Math.floor(diffMs / 36e5);
    if (diffMins < 1)
      return "\u0422\u043E\u043B\u044C\u043A\u043E \u0447\u0442\u043E";
    if (diffMins < 60)
      return `${diffMins} \u043C\u0438\u043D \u043D\u0430\u0437\u0430\u0434`;
    if (diffHours < 24)
      return `${diffHours} \u0447 \u043D\u0430\u0437\u0430\u0434`;
    return d.toLocaleDateString("ru-RU", { day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" });
  }
  getStatusBadgeType(status) {
    switch (status) {
      case "sent":
        return "success";
      case "pending":
        return "warning";
      case "failed":
        return "danger";
      default:
        return "success";
    }
  }
  getStatusLabel(status) {
    switch (status) {
      case "sent":
        return "\u041E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043E";
      case "pending":
        return "\u041E\u0436\u0438\u0434\u0430\u0435\u0442";
      case "failed":
        return "\u041E\u0448\u0438\u0431\u043A\u0430";
      default:
        return status;
    }
  }
  getTemplateTypeLabel(type) {
    switch (type) {
      case "bonus_accrued":
        return "\u041D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u0435 \u0431\u043E\u043D\u0443\u0441\u043E\u0432";
      case "bonus_expiration":
        return "\u0418\u0441\u0442\u0435\u0447\u0435\u043D\u0438\u0435 \u0431\u043E\u043D\u0443\u0441\u043E\u0432";
      default:
        return type;
    }
  }
  openMessageDetails(item) {
    const recipient = this.getSafeClientName(item);
    this.selectedMessage = {
      id: item.id,
      type: "whatsapp",
      recipient,
      message: item.message,
      sentAt: item.createdAt || item.sentAt,
      status: item.status,
      templateName: item.templateName,
      initiatedByUsername: item.initiatedByUsername
    };
    this.showMessageDetailsModal = true;
  }
  resendInvitation(item, event) {
    if (event) {
      event.stopPropagation();
    }
    this.invitationForm.patchValue({
      message: item.message
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  loadHistory() {
    this.isLoading = true;
    this.messagesService.getMessagesByChannel("WHATSAPP").subscribe({
      next: (messages) => {
        this.invitationHistory = messages.map((msg) => this.mapMessageRecordToHistory(msg));
        this.isLoading = false;
      },
      error: (err) => {
        const errorMessage = err.error?.message || "\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0438\u0441\u0442\u043E\u0440\u0438\u0438 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0439";
        this.toastService.error(errorMessage);
        this.isLoading = false;
        this.invitationHistory = [];
      }
    });
  }
  loadTemplates() {
    this.isLoadingTemplates = true;
    this.messageTemplatesService.getAllTemplates().subscribe({
      next: (templates) => {
        this.messageTemplates = templates.map((t) => this.mapApiTemplateToFrontend(t));
        this.isLoadingTemplates = false;
      },
      error: (err) => {
        const errorMessage = err.error?.message || "\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0448\u0430\u0431\u043B\u043E\u043D\u043E\u0432";
        this.toastService.error(errorMessage);
        this.isLoadingTemplates = false;
        this.messageTemplates = [];
      }
    });
  }
  mapMessageRecordToHistory(record) {
    return {
      id: record.id,
      phone: "",
      // Phone number might need to be fetched from client data
      clientName: record.clientName,
      message: record.messageContent,
      sentAt: record.sentAt ? new Date(record.sentAt) : /* @__PURE__ */ new Date(),
      createdAt: record.createdAt ? new Date(record.createdAt) : void 0,
      status: this.mapMessageStatus(record.status),
      templateId: void 0,
      // May need to extract from message content or add to API response
      templateName: void 0,
      templateType: void 0,
      type: "whatsapp",
      initiatedByUsername: record.initiatedByUsername
    };
  }
  mapApiTemplateToFrontend(template) {
    return {
      id: template.id,
      name: template.name,
      type: template.type,
      // Use API type directly
      content: template.content,
      createdAt: template.createdAt ? new Date(template.createdAt) : /* @__PURE__ */ new Date()
    };
  }
  mapMessageStatus(status) {
    const statusLower = status.toLowerCase();
    if (statusLower === "sent" || statusLower === "delivered") {
      return "sent";
    }
    if (statusLower === "pending" || statusLower === "sending") {
      return "pending";
    }
    if (statusLower === "failed" || statusLower === "error") {
      return "failed";
    }
    return "sent";
  }
  loadTemplateTypes() {
    this.messageTemplatesService.getTemplateTypes().subscribe({
      next: (types) => {
        this.templateTypes = types;
      },
      error: (err) => {
        const errorMessage = err.error?.message || "\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0442\u0438\u043F\u043E\u0432 \u0448\u0430\u0431\u043B\u043E\u043D\u043E\u0432";
        this.toastService.error(errorMessage);
        this.templateTypes = [];
      }
    });
  }
  loadTemplateVariables() {
    this.messageTemplatesService.getTemplateVariables().subscribe({
      next: (variables) => {
        this.templateVariables = variables.map((v) => ({
          name: `{{${v.name}}}`,
          description: v.description
        }));
      },
      error: (err) => {
        const errorMessage = err.error?.message || "\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0445 \u0448\u0430\u0431\u043B\u043E\u043D\u043E\u0432";
        this.toastService.error(errorMessage);
        this.templateVariables = [];
      }
    });
  }
  getSafeClientName(item) {
    const rawName = item.clientName ?? "";
    let cleanedName = rawName.replace(/null/gi, "").replace(/\s+/g, " ").trim();
    if (!cleanedName) {
      return this.formatPhone(item.phone);
    }
    return cleanedName;
  }
  static \u0275fac = function InvitationPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InvitationPageComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(Store));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InvitationPageComponent, selectors: [["app-invitation-page"]], decls: 14, vars: 19, consts: [["paginatedTable", ""], [1, "invitation-page"], [3, "formSubmit", "templateSelected", "templateCreated", "templateUpdated", "templateDeleted", "invitationType", "form", "title", "subtitle", "iconSvg", "iconColor", "previewDescription", "messageTemplates", "isSending", "successMessage", "errorMessage", "hideForm", "templateTypes", "templateVariables"], [1, "section-block", "history-block"], [1, "section-title"], ["viewBox", "0 0 24 24", "fill", "none", 1, "title-icon"], ["d", "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "section-heading"], ["badgeType", "secondary", "size", "small", "class", "history-badge", 4, "ngIf"], [1, "section-description"], ["class", "history-empty", 4, "ngIf"], [3, "paginationEnabled", "data", "defaultPageSize", 4, "ngIf"], [3, "visibleChange", "visible", "message"], ["badgeType", "secondary", "size", "small", 1, "history-badge"], [1, "history-empty"], ["viewBox", "0 0 24 24", "fill", "none", 1, "empty-icon"], ["d", "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "empty-text"], [3, "paginationEnabled", "data", "defaultPageSize"], [1, "table-container"], [1, "history-table"], [4, "ngFor", "ngForOf"], [1, "recipient-cell"], ["viewBox", "0 0 24 24", "fill", "none"], ["d", "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "recipient-value"], [1, "time-value"], ["class", "template-name", 4, "ngIf"], ["class", "no-template", 4, "ngIf"], [1, "sender-value"], ["size", "small", 3, "badgeType"], [1, "actions-cell"], ["iconButtonType", "ghost", "size", "small", "tooltip", "\u041F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0434\u0435\u0442\u0430\u043B\u0438", 3, "onClick"], ["d", "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z", "stroke", "currentColor", "stroke-width", "1.5"], ["cx", "12", "cy", "12", "r", "3", "stroke", "currentColor", "stroke-width", "1.5"], [1, "template-name"], [1, "no-template"]], template: function InvitationPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "app-invitation-form", 2);
      \u0275\u0275listener("formSubmit", function InvitationPageComponent_Template_app_invitation_form_formSubmit_1_listener() {
        return ctx.onSubmit();
      })("templateSelected", function InvitationPageComponent_Template_app_invitation_form_templateSelected_1_listener($event) {
        return ctx.onTemplateSelected($event);
      })("templateCreated", function InvitationPageComponent_Template_app_invitation_form_templateCreated_1_listener($event) {
        return ctx.onTemplateCreated($event);
      })("templateUpdated", function InvitationPageComponent_Template_app_invitation_form_templateUpdated_1_listener($event) {
        return ctx.onTemplateUpdated($event);
      })("templateDeleted", function InvitationPageComponent_Template_app_invitation_form_templateDeleted_1_listener($event) {
        return ctx.onTemplateDeleted($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "div", 3)(3, "div", 4);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(4, "svg", 5);
      \u0275\u0275element(5, "path", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(6, "h3", 7);
      \u0275\u0275text(7, "\u0418\u0441\u0442\u043E\u0440\u0438\u044F");
      \u0275\u0275elementEnd();
      \u0275\u0275template(8, InvitationPageComponent_app_badge_8_Template, 2, 1, "app-badge", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 9);
      \u0275\u0275text(10, "\u0418\u0441\u0442\u043E\u0440\u0438\u044F \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0445 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0439");
      \u0275\u0275elementEnd();
      \u0275\u0275template(11, InvitationPageComponent_div_11_Template, 5, 0, "div", 10)(12, InvitationPageComponent_app_paginated_table_wrapper_12_Template, 20, 4, "app-paginated-table-wrapper", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "app-message-details-modal", 12);
      \u0275\u0275listener("visibleChange", function InvitationPageComponent_Template_app_message_details_modal_visibleChange_13_listener($event) {
        return ctx.showMessageDetailsModal = $event;
      });
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("invitationType", "whatsapp")("form", ctx.invitationForm)("title", "\u041F\u0440\u0438\u0433\u043B\u0430\u0441\u0438 \u0434\u0440\u0443\u0433\u0430")("subtitle", "\u041E\u0442\u043F\u0440\u0430\u0432\u044C \u043F\u0440\u0438\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435 \u0447\u0435\u0440\u0435\u0437 WhatsApp")("iconSvg", ctx.whatsappIconSvg)("iconColor", "#25D366")("previewDescription", "\u0422\u0430\u043A \u0431\u0443\u0434\u0435\u0442 \u0432\u044B\u0433\u043B\u044F\u0434\u0435\u0442\u044C \u0432\u0430\u0448\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u0432 WhatsApp")("messageTemplates", ctx.messageTemplates)("isSending", ctx.isSending)("successMessage", ctx.successMessage)("errorMessage", ctx.errorMessage)("hideForm", true)("templateTypes", ctx.templateTypes)("templateVariables", ctx.templateVariables);
      \u0275\u0275advance(7);
      \u0275\u0275property("ngIf", ctx.invitationHistory.length);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.invitationHistory.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.invitationHistory.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("visible", ctx.showMessageDetailsModal)("message", ctx.selectedMessage);
    }
  }, dependencies: [
    CommonModule,
    NgForOf,
    NgIf,
    ReactiveFormsModule,
    BadgeComponent,
    IconButtonComponent,
    InvitationFormComponent,
    MessageDetailsModalComponent,
    PaginatedTableWrapperComponent
  ], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n  margin: -2rem;\n}\n.invitation-page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n  min-height: calc(100vh - 64px - 4rem);\n  padding: 2rem;\n  background:\n    linear-gradient(\n      180deg,\n      #f0fdf4 0%,\n      #f8fafc 50%,\n      #f8fafc 100%);\n}\n.section-block[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 24px;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n}\n.section-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.625rem;\n  margin-bottom: 0.25rem;\n}\n.title-icon[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n  color: #25D366;\n}\n.section-heading[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0;\n}\n.section-description[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #9ca3af;\n  margin: 0 0 1.25rem 0;\n}\n.history-badge[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n.history-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 2.5rem 1rem;\n}\n.empty-icon[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  color: #d1d5db;\n  margin: 0 auto 1rem;\n  display: block;\n}\n.empty-text[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #9ca3af;\n  margin: 0;\n}\n.table-container[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n}\n.history-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.history-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: #f8fafc;\n}\n.history-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 1rem 1.5rem;\n  text-align: left;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #64748b;\n  border-bottom: 1px solid #e2e8f0;\n}\n.history-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 1rem 1.5rem;\n  border-bottom: 1px solid #f1f5f9;\n}\n.history-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n.history-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.recipient-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.recipient-cell[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  color: #16a34a;\n  flex-shrink: 0;\n}\n.recipient-value[_ngcontent-%COMP%] {\n  font-size: 0.9375rem;\n  font-weight: 600;\n  color: #1f2937;\n}\n.time-value[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #64748b;\n}\n.template-type-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.375rem 0.75rem;\n  background: #f0fdf4;\n  color: #16A34A;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  font-weight: 500;\n}\n.template-name[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #475569;\n  font-weight: 500;\n}\n.no-template[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #94a3b8;\n  font-style: italic;\n}\n.sender-value[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #475569;\n  font-weight: 500;\n}\n.actions-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n@media (max-width: 768px) {\n  [_nghost-%COMP%] {\n    margin: -1rem;\n  }\n  .invitation-page[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n}\n/*# sourceMappingURL=invitation-page.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InvitationPageComponent, [{
    type: Component,
    args: [{ selector: "app-invitation-page", standalone: true, imports: [
      CommonModule,
      ReactiveFormsModule,
      BadgeComponent,
      IconButtonComponent,
      InvitationFormComponent,
      MessageDetailsModalComponent,
      PaginatedTableWrapperComponent
    ], template: `
    <div class="invitation-page">
      <app-invitation-form
        [invitationType]="'whatsapp'"
        [form]="invitationForm"
        [title]="'\u041F\u0440\u0438\u0433\u043B\u0430\u0441\u0438 \u0434\u0440\u0443\u0433\u0430'"
        [subtitle]="'\u041E\u0442\u043F\u0440\u0430\u0432\u044C \u043F\u0440\u0438\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435 \u0447\u0435\u0440\u0435\u0437 WhatsApp'"
        [iconSvg]="whatsappIconSvg"
        [iconColor]="'#25D366'"
        [previewDescription]="'\u0422\u0430\u043A \u0431\u0443\u0434\u0435\u0442 \u0432\u044B\u0433\u043B\u044F\u0434\u0435\u0442\u044C \u0432\u0430\u0448\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u0432 WhatsApp'"
        [messageTemplates]="messageTemplates"
        [isSending]="isSending"
        [successMessage]="successMessage"
        [errorMessage]="errorMessage"
        [hideForm]="true"
        [templateTypes]="templateTypes"
        [templateVariables]="templateVariables"
        (formSubmit)="onSubmit()"
        (templateSelected)="onTemplateSelected($event)"
        (templateCreated)="onTemplateCreated($event)"
        (templateUpdated)="onTemplateUpdated($event)"
        (templateDeleted)="onTemplateDeleted($event)">
      </app-invitation-form>

      <!-- History Section -->
      <div class="section-block history-block">
        <div class="section-title">
          <svg viewBox="0 0 24 24" fill="none" class="title-icon">
            <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <h3 class="section-heading">\u0418\u0441\u0442\u043E\u0440\u0438\u044F</h3>
          <app-badge 
            *ngIf="invitationHistory.length" 
            badgeType="secondary" 
            size="small"
            class="history-badge">
            {{ invitationHistory.length }}
          </app-badge>
        </div>
        <p class="section-description">\u0418\u0441\u0442\u043E\u0440\u0438\u044F \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0445 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0439</p>

        <div class="history-empty" *ngIf="invitationHistory.length === 0">
          <svg viewBox="0 0 24 24" fill="none" class="empty-icon">
            <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <p class="empty-text">\u0412\u044B \u0435\u0449\u0451 \u043D\u0438\u043A\u043E\u0433\u043E \u043D\u0435 \u043F\u0440\u0438\u0433\u043B\u0430\u0448\u0430\u043B\u0438</p>
        </div>

        <app-paginated-table-wrapper
          *ngIf="invitationHistory.length > 0"
          [paginationEnabled]="true"
          [data]="invitationHistory"
          [defaultPageSize]="15"
          #paginatedTable>
          
          <div class="table-container">
            <table class="history-table">
              <thead>
                <tr>
                  <th>\u041F\u043E\u043B\u0443\u0447\u0430\u0442\u0435\u043B\u044C</th>
                  <th>\u0412\u0440\u0435\u043C\u044F \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0438</th>
                  <th>\u0428\u0430\u0431\u043B\u043E\u043D</th>
                  <th>\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u043B</th>
                  <th>\u0421\u0442\u0430\u0442\u0443\u0441</th>
                  <th>\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let item of paginatedTable.paginatedData">
                  <td>
                    <div class="recipient-cell">
                      <svg viewBox="0 0 24 24" fill="none">
                        <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                      <span class="recipient-value">{{ getSafeClientName(item) }}</span>
                    </div>
                  </td>
                  <td>
                    <span class="time-value">{{ formatDate(item.createdAt || item.sentAt) }}</span>
                  </td>
                  <td>
                    <span class="template-name" *ngIf="item.templateName">
                      {{ item.templateName }}
                    </span>
                    <span class="no-template" *ngIf="!item.templateName">\u2014</span>
                  </td>
                  <td>
                    <span class="sender-value">{{ item.initiatedByUsername || '\u2014' }}</span>
                  </td>
                  <td>
                    <app-badge 
                      [badgeType]="getStatusBadgeType(item.status)" 
                      size="small">
                      {{ getStatusLabel(item.status) }}
                    </app-badge>
                  </td>
                  <td>
                    <div class="actions-cell">
                      <app-icon-button
                        iconButtonType="ghost"
                        size="small"
                        tooltip="\u041F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0434\u0435\u0442\u0430\u043B\u0438"
                        (onClick)="openMessageDetails(item)">
                        <svg viewBox="0 0 24 24" fill="none">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" stroke-width="1.5"/>
                          <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="1.5"/>
                        </svg>
                      </app-icon-button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </app-paginated-table-wrapper>
      </div>

      <!-- Message Details Modal -->
      <app-message-details-modal
        [visible]="showMessageDetailsModal"
        [message]="selectedMessage"
        (visibleChange)="showMessageDetailsModal = $event">
      </app-message-details-modal>
    </div>
  `, styles: ["/* angular:styles/component:css;d743711d23ff2196ec190989a0f112acae8cdcbea436b51c4540c49e6f630ec7;/Users/baglan/repo/westwood/westwood-frontend/src/app/features/invitation/pages/invitation-page/invitation-page.component.ts */\n:host {\n  display: block;\n  height: 100%;\n  margin: -2rem;\n}\n.invitation-page {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n  min-height: calc(100vh - 64px - 4rem);\n  padding: 2rem;\n  background:\n    linear-gradient(\n      180deg,\n      #f0fdf4 0%,\n      #f8fafc 50%,\n      #f8fafc 100%);\n}\n.section-block {\n  background: white;\n  border-radius: 24px;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n}\n.section-title {\n  display: flex;\n  align-items: center;\n  gap: 0.625rem;\n  margin-bottom: 0.25rem;\n}\n.title-icon {\n  width: 22px;\n  height: 22px;\n  color: #25D366;\n}\n.section-heading {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0;\n}\n.section-description {\n  font-size: 0.875rem;\n  color: #9ca3af;\n  margin: 0 0 1.25rem 0;\n}\n.history-badge {\n  margin-left: auto;\n}\n.history-empty {\n  text-align: center;\n  padding: 2.5rem 1rem;\n}\n.empty-icon {\n  width: 56px;\n  height: 56px;\n  color: #d1d5db;\n  margin: 0 auto 1rem;\n  display: block;\n}\n.empty-text {\n  font-size: 0.875rem;\n  color: #9ca3af;\n  margin: 0;\n}\n.table-container {\n  background: white;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n}\n.history-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.history-table thead {\n  background: #f8fafc;\n}\n.history-table th {\n  padding: 1rem 1.5rem;\n  text-align: left;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #64748b;\n  border-bottom: 1px solid #e2e8f0;\n}\n.history-table td {\n  padding: 1rem 1.5rem;\n  border-bottom: 1px solid #f1f5f9;\n}\n.history-table tbody tr:hover {\n  background: #f8fafc;\n}\n.history-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.recipient-cell {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.recipient-cell svg {\n  width: 20px;\n  height: 20px;\n  color: #16a34a;\n  flex-shrink: 0;\n}\n.recipient-value {\n  font-size: 0.9375rem;\n  font-weight: 600;\n  color: #1f2937;\n}\n.time-value {\n  font-size: 0.875rem;\n  color: #64748b;\n}\n.template-type-badge {\n  display: inline-block;\n  padding: 0.375rem 0.75rem;\n  background: #f0fdf4;\n  color: #16A34A;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  font-weight: 500;\n}\n.template-name {\n  font-size: 0.875rem;\n  color: #475569;\n  font-weight: 500;\n}\n.no-template {\n  font-size: 0.875rem;\n  color: #94a3b8;\n  font-style: italic;\n}\n.sender-value {\n  font-size: 0.875rem;\n  color: #475569;\n  font-weight: 500;\n}\n.actions-cell {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n@media (max-width: 768px) {\n  :host {\n    margin: -1rem;\n  }\n  .invitation-page {\n    padding: 1rem;\n  }\n}\n/*# sourceMappingURL=invitation-page.component.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: Store }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InvitationPageComponent, { className: "InvitationPageComponent", filePath: "src/app/features/invitation/pages/invitation-page/invitation-page.component.ts", lineNumber: 354 });
})();
export {
  InvitationPageComponent
};
//# sourceMappingURL=chunk-RJ7P5REC.js.map
