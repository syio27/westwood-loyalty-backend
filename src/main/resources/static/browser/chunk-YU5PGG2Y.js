import {
  CommonModule,
  Component,
  Input,
  NgIf,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-MTXXT26T.js";

// src/app/shared/components/loader/loader.component.ts
function LoaderComponent_div_0_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.text);
  }
}
function LoaderComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 5);
    \u0275\u0275element(4, "path", 6)(5, "path", 7)(6, "path", 8);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, LoaderComponent_div_0_div_7_Template, 2, 1, "div", 9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("fullscreen", ctx_r0.fullscreen);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.size);
    \u0275\u0275advance();
    \u0275\u0275styleProp("width", ctx_r0.getLogoSize(), "px")("height", ctx_r0.getLogoSize(), "px");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r0.showText);
  }
}
function LoaderComponent_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 14);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r0.size);
    \u0275\u0275styleProp("width", ctx_r0.getSpinnerSize(), "px")("height", ctx_r0.getSpinnerSize(), "px");
  }
}
function LoaderComponent_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 5);
    \u0275\u0275element(2, "path", 6)(3, "path", 7)(4, "path", 8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r0.size);
    \u0275\u0275styleProp("width", ctx_r0.getLogoSize(), "px")("height", ctx_r0.getLogoSize(), "px");
  }
}
function LoaderComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275template(1, LoaderComponent_div_1_div_1_Template, 1, 6, "div", 12)(2, LoaderComponent_div_1_div_2_Template, 5, 6, "div", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngSwitch", ctx_r0.type);
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "spinner");
  }
}
var LoaderComponent = class _LoaderComponent {
  visible = false;
  overlay = true;
  fullscreen = true;
  size = "medium";
  customSize;
  text = "";
  showText = false;
  type = "logo";
  // 'spinner' for buttons, 'logo' for pages
  getLogoSize() {
    if (this.customSize) {
      return this.customSize;
    }
    switch (this.size) {
      case "small":
        return 24;
      case "large":
        return 64;
      default:
        return 50;
    }
  }
  getSpinnerSize() {
    if (this.customSize) {
      return this.customSize;
    }
    switch (this.size) {
      case "small":
        return 24;
      case "large":
        return 64;
      default:
        return 50;
    }
  }
  static \u0275fac = function LoaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoaderComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoaderComponent, selectors: [["app-loader"]], inputs: { visible: "visible", overlay: "overlay", fullscreen: "fullscreen", size: "size", customSize: "customSize", text: "text", showText: "showText", type: "type" }, decls: 2, vars: 2, consts: [["class", "loader-overlay", 3, "fullscreen", 4, "ngIf"], [3, "ngSwitch", 4, "ngIf"], [1, "loader-overlay"], [1, "loader-container"], [1, "loader-logo"], ["viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M12 2L2 7l10 5 10-5-10-5z", "fill", "#15803d", "opacity", "0.8"], ["d", "M2 17l10 5 10-5", "stroke", "#15803d", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M2 12l10 5 10-5", "stroke", "#15803d", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["class", "loader-text", 4, "ngIf"], [1, "loader-text"], [3, "ngSwitch"], ["class", "loader-spinner inline", 3, "class", "width", "height", 4, "ngSwitchCase"], ["class", "loader-logo inline", 3, "class", "width", "height", 4, "ngSwitchDefault"], [1, "loader-spinner", "inline"], [1, "loader-logo", "inline"]], template: function LoaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, LoaderComponent_div_0_Template, 8, 9, "div", 0)(1, LoaderComponent_div_1_Template, 3, 2, "div", 1);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.overlay && ctx.visible);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.overlay && ctx.visible);
    }
  }, dependencies: [CommonModule, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault], styles: ["\n\n.loader-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n  z-index: 9999;\n  backdrop-filter: blur(2px);\n}\n.loader-overlay.fullscreen[_ngcontent-%COMP%] {\n  position: fixed;\n}\n.loader-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n  position: relative;\n}\n.loader-logo[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  animation: _ngcontent-%COMP%_bounce 1.4s ease-in-out infinite;\n  position: relative;\n}\n.loader-logo.inline[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.loader-logo[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: block;\n}\n.loader-logo.small[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n}\n.loader-logo.large[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n}\n.loader-spinner[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border: 4px solid #f3f3f3;\n  border-top: 4px solid #16A34A;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  position: relative;\n}\n.loader-spinner.inline[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.loader-spinner.small[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  border-width: 2px;\n}\n.loader-spinner.large[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  border-width: 6px;\n}\n.loader-text[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 0.875rem;\n  font-weight: 500;\n  white-space: nowrap;\n  margin-top: 0.5rem;\n}\n@keyframes _ngcontent-%COMP%_bounce {\n  0%, 100% {\n    transform: translateY(0) scale(1);\n    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);\n  }\n  50% {\n    transform: translateY(-25%) scale(1.1);\n    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n  }\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=loader.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoaderComponent, [{
    type: Component,
    args: [{ selector: "app-loader", standalone: true, imports: [CommonModule], template: `
    <!-- Page/App Loading with Bouncing Logo -->
    <div class="loader-overlay" *ngIf="overlay && visible" [class.fullscreen]="fullscreen">
      <div class="loader-container" [class]="size">
        <div class="loader-logo" [style.width.px]="getLogoSize()" [style.height.px]="getLogoSize()">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7l10 5 10-5-10-5z" fill="#15803d" opacity="0.8"/>
            <path d="M2 17l10 5 10-5" stroke="#15803d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2 12l10 5 10-5" stroke="#15803d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div *ngIf="showText" class="loader-text">{{ text }}</div>
      </div>
    </div>
    
    <!-- Inline Loading: Spinner for buttons, Logo for pages -->
    <div *ngIf="!overlay && visible" [ngSwitch]="type">
      <!-- Spinner for buttons/small elements -->
      <div *ngSwitchCase="'spinner'" class="loader-spinner inline" [class]="size" [style.width.px]="getSpinnerSize()" [style.height.px]="getSpinnerSize()"></div>
      <!-- Logo for inline page loading -->
      <div *ngSwitchDefault class="loader-logo inline" [class]="size" [style.width.px]="getLogoSize()" [style.height.px]="getLogoSize()">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7l10 5 10-5-10-5z" fill="#15803d" opacity="0.8"/>
          <path d="M2 17l10 5 10-5" stroke="#15803d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M2 12l10 5 10-5" stroke="#15803d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </div>
  `, styles: ["/* angular:styles/component:css;504f4e9bd3b014f96154c4f806b7ed5ec596fed2c47387c3abee0927222e96ac;/Users/baglan/repo/westwood/westwood-frontend/src/app/shared/components/loader/loader.component.ts */\n.loader-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n  z-index: 9999;\n  backdrop-filter: blur(2px);\n}\n.loader-overlay.fullscreen {\n  position: fixed;\n}\n.loader-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n  position: relative;\n}\n.loader-logo {\n  width: 50px;\n  height: 50px;\n  animation: bounce 1.4s ease-in-out infinite;\n  position: relative;\n}\n.loader-logo.inline {\n  display: inline-block;\n}\n.loader-logo svg {\n  width: 100%;\n  height: 100%;\n  display: block;\n}\n.loader-logo.small {\n  width: 24px;\n  height: 24px;\n}\n.loader-logo.large {\n  width: 64px;\n  height: 64px;\n}\n.loader-spinner {\n  width: 50px;\n  height: 50px;\n  border: 4px solid #f3f3f3;\n  border-top: 4px solid #16A34A;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n  position: relative;\n}\n.loader-spinner.inline {\n  display: inline-block;\n}\n.loader-spinner.small {\n  width: 24px;\n  height: 24px;\n  border-width: 2px;\n}\n.loader-spinner.large {\n  width: 64px;\n  height: 64px;\n  border-width: 6px;\n}\n.loader-text {\n  color: #ffffff;\n  font-size: 0.875rem;\n  font-weight: 500;\n  white-space: nowrap;\n  margin-top: 0.5rem;\n}\n@keyframes bounce {\n  0%, 100% {\n    transform: translateY(0) scale(1);\n    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);\n  }\n  50% {\n    transform: translateY(-25%) scale(1.1);\n    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n  }\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=loader.component.css.map */\n"] }]
  }], null, { visible: [{
    type: Input
  }], overlay: [{
    type: Input
  }], fullscreen: [{
    type: Input
  }], size: [{
    type: Input
  }], customSize: [{
    type: Input
  }], text: [{
    type: Input
  }], showText: [{
    type: Input
  }], type: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoaderComponent, { className: "LoaderComponent", filePath: "src/app/shared/components/loader/loader.component.ts", lineNumber: 149 });
})();

export {
  LoaderComponent
};
//# sourceMappingURL=chunk-YU5PGG2Y.js.map
