import {
  CommonModule,
  Component,
  Input,
  RouterLink,
  RouterModule,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵsanitizeUrl
} from "./chunk-MTXXT26T.js";

// src/app/shared/components/link/link.component.ts
var _c0 = ["*"];
var LinkComponent = class _LinkComponent {
  routerLink;
  href;
  target;
  underline = false;
  noUnderline = false;
  getClasses() {
    const classes = [];
    if (this.underline)
      classes.push("underline");
    if (this.noUnderline)
      classes.push("no-underline");
    return classes.join(" ");
  }
  static \u0275fac = function LinkComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LinkComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LinkComponent, selectors: [["app-link"]], inputs: { routerLink: "routerLink", href: "href", target: "target", underline: "underline", noUnderline: "noUnderline" }, ngContentSelectors: _c0, decls: 2, vars: 5, consts: [[3, "routerLink", "href", "target"]], template: function LinkComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275elementStart(0, "a", 0);
      \u0275\u0275projection(1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classMap(ctx.getClasses());
      \u0275\u0275property("routerLink", ctx.routerLink)("href", ctx.href, \u0275\u0275sanitizeUrl)("target", ctx.target);
    }
  }, dependencies: [CommonModule, RouterModule, RouterLink], styles: ["\n\na[_ngcontent-%COMP%] {\n  color: #007bff;\n  text-decoration: none;\n  transition: color 0.2s ease;\n  cursor: pointer;\n}\na[_ngcontent-%COMP%]:hover {\n  color: #0056b3;\n  text-decoration: underline;\n}\na.underline[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\na.no-underline[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n/*# sourceMappingURL=link.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LinkComponent, [{
    type: Component,
    args: [{ selector: "app-link", standalone: true, imports: [CommonModule, RouterModule], template: `
    <a
      [routerLink]="routerLink"
      [href]="href"
      [target]="target"
      [class]="getClasses()">
      <ng-content></ng-content>
    </a>
  `, styles: ["/* angular:styles/component:css;16820bc3fbc192bd5119e17edf3b698919ade6d51ad0255484e007a31e857c37;/Users/baglan/repo/westwood/westwood-frontend/src/app/shared/components/link/link.component.ts */\na {\n  color: #007bff;\n  text-decoration: none;\n  transition: color 0.2s ease;\n  cursor: pointer;\n}\na:hover {\n  color: #0056b3;\n  text-decoration: underline;\n}\na.underline {\n  text-decoration: underline;\n}\na.no-underline:hover {\n  text-decoration: none;\n}\n/*# sourceMappingURL=link.component.css.map */\n"] }]
  }], null, { routerLink: [{
    type: Input
  }], href: [{
    type: Input
  }], target: [{
    type: Input
  }], underline: [{
    type: Input
  }], noUnderline: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LinkComponent, { className: "LinkComponent", filePath: "src/app/shared/components/link/link.component.ts", lineNumber: 40 });
})();

export {
  LinkComponent
};
//# sourceMappingURL=chunk-ZUZR2UA5.js.map
