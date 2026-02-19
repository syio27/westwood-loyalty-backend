import {
  CommonModule,
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnamespaceSVG,
  ɵɵtext
} from "./chunk-NKSGOSP5.js";

// src/app/shared/components/auth-promo-panel/auth-promo-panel.component.ts
var AuthPromoPanelComponent = class _AuthPromoPanelComponent {
  static \u0275fac = function AuthPromoPanelComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthPromoPanelComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AuthPromoPanelComponent, selectors: [["app-auth-promo-panel"]], decls: 24, vars: 0, consts: [[1, "promo-panel"], [1, "promo-content"], [1, "promo-logo"], ["src", "assets/tinta-logo-short.svg", "alt", "Tinta", 1, "logo-icon"], [1, "promo-title"], [1, "title-greeting"], [1, "title-brand"], [1, "wave-emoji"], [1, "promo-text"], [1, "promo-footer"], [1, "promo-background"], [1, "noise-overlay"], ["viewBox", "0 0 400 600", "preserveAspectRatio", "none", 1, "bg-pattern"], ["d", "M0,100 Q200,50 400,100 T400,300 Q200,250 0,300 T0,500", "stroke", "rgba(255,255,255,0.25)", "stroke-width", "2", "fill", "none"], ["d", "M0,150 Q200,100 400,150 T400,350 Q200,300 0,350 T0,550", "stroke", "rgba(255,255,255,0.2)", "stroke-width", "2", "fill", "none"], ["d", "M0,200 Q200,150 400,200 T400,400 Q200,350 0,400 T0,600", "stroke", "rgba(255,255,255,0.15)", "stroke-width", "2", "fill", "none"], ["d", "M0,50 Q200,0 400,50 T400,250 Q200,200 0,250 T0,450", "stroke", "rgba(255,255,255,0.18)", "stroke-width", "1.5", "fill", "none"], ["d", "M0,250 Q200,200 400,250 T400,450 Q200,400 0,450 T0,650", "stroke", "rgba(255,255,255,0.12)", "stroke-width", "1.5", "fill", "none"]], template: function AuthPromoPanelComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "img", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "h1", 4)(5, "span", 5);
      \u0275\u0275text(6, "\u041F\u0440\u0438\u0432\u0435\u0442,");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "span", 6);
      \u0275\u0275text(8, "Tinta!");
      \u0275\u0275elementStart(9, "span", 7);
      \u0275\u0275text(10, "\u{1F44B}\u{1F3FB}");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(11, "p", 8);
      \u0275\u0275text(12, " \u0417\u0430\u0431\u0443\u0434\u044C\u0442\u0435 \u043E \u0440\u0443\u0447\u043D\u043E\u043C \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0438 \u0431\u043E\u043D\u0443\u0441\u0430\u043C\u0438 \u0438 \u0430\u043A\u0446\u0438\u044F\u043C\u0438. \u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0438\u0440\u0443\u0439\u0442\u0435 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0443 \u043B\u043E\u044F\u043B\u044C\u043D\u043E\u0441\u0442\u0438, \u0443\u0432\u0435\u043B\u0438\u0447\u044C\u0442\u0435 \u0432\u043E\u0437\u0432\u0440\u0430\u0442 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432 \u0438 \u0437\u0430\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0439\u0442\u0435 \u0431\u043E\u043B\u044C\u0448\u0435 \u2014 \u0431\u0435\u0437 \u043B\u0438\u0448\u043D\u0438\u0445 \u0443\u0441\u0438\u043B\u0438\u0439. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 9)(14, "span");
      \u0275\u0275text(15, "\xA9 2026 Tinta. \u0412\u0441\u0435 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043D\u044B.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(16, "div", 10);
      \u0275\u0275element(17, "div", 11);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(18, "svg", 12);
      \u0275\u0275element(19, "path", 13)(20, "path", 14)(21, "path", 15)(22, "path", 16)(23, "path", 17);
      \u0275\u0275elementEnd()()();
    }
  }, dependencies: [CommonModule], styles: [`

[_nghost-%COMP%] {
  flex: 0 0 55%;
  display: block;
}
.promo-panel[_ngcontent-%COMP%] {
  width: 100%;
  height: 100%;
  background:
    linear-gradient(
      135deg,
      #16A34A 0%,
      #15803d 50%,
      #14532d 100%);
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  min-height: 100vh;
}
.promo-background[_ngcontent-%COMP%] {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.noise-overlay[_ngcontent-%COMP%] {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  opacity: 0.08;
  pointer-events: none;
}
.bg-pattern[_ngcontent-%COMP%] {
  width: 100%;
  height: 100%;
  opacity: 0.6;
}
.promo-content[_ngcontent-%COMP%] {
  position: relative;
  z-index: 1;
  color: white;
  max-width: 610px;
  margin-top: -100px;
}
.promo-logo[_ngcontent-%COMP%] {
  margin-bottom: 2rem;
}
.promo-logo[_ngcontent-%COMP%]   .logo-icon[_ngcontent-%COMP%] {
  width: 100px;
  height: auto;
  filter: brightness(0) invert(1);
}
.promo-title[_ngcontent-%COMP%] {
  margin: 0 0 2rem 0;
  line-height: 1.1;
}
.title-greeting[_ngcontent-%COMP%] {
  display: block;
  font-size: 4rem;
  font-weight: 800;
}
.title-brand[_ngcontent-%COMP%] {
  display: block;
  font-size: 4rem;
  font-weight: 800;
}
.wave-emoji[_ngcontent-%COMP%] {
  display: inline-block;
}
.promo-text[_ngcontent-%COMP%] {
  font-size: 1.25rem;
  line-height: 1.2;
  opacity: 0.95;
  margin: 0 0 4rem 0;
}
.promo-footer[_ngcontent-%COMP%] {
  font-size: 0.875rem;
  opacity: 0.8;
}
@media (max-width: 1024px) {
  [_nghost-%COMP%] {
    flex: 0 0 auto;
  }
  .promo-panel[_ngcontent-%COMP%] {
    min-height: 400px;
    padding: 3rem 2.5rem;
    overflow: visible;
    position: relative;
    z-index: 1;
  }
  .promo-content[_ngcontent-%COMP%] {
    margin-top: 0;
    max-width: 100%;
    text-align: left;
  }
  .promo-logo[_ngcontent-%COMP%] {
    display: inline-block;
    margin-right: 1.5rem;
    margin-bottom: 0;
    vertical-align: middle;
  }
  .promo-logo[_ngcontent-%COMP%]   .logo-icon[_ngcontent-%COMP%] {
    width: 80px;
    height: auto;
    filter: brightness(0) invert(1);
  }
  .promo-title[_ngcontent-%COMP%] {
    display: inline-block;
    vertical-align: middle;
    margin: 0 0 1.5rem 0;
  }
  .title-greeting[_ngcontent-%COMP%], 
   .title-brand[_ngcontent-%COMP%] {
    font-size: 2.5rem;
  }
  .promo-text[_ngcontent-%COMP%] {
    font-size: 1.1rem;
    margin-bottom: 2rem;
    line-height: 1.4;
  }
  .promo-footer[_ngcontent-%COMP%] {
    display: block;
    margin-top: 2rem;
    font-size: 0.875rem;
    opacity: 0.8;
  }
}
@media (max-width: 640px) {
  [_nghost-%COMP%] {
    flex: 0 0 auto;
  }
  .promo-panel[_ngcontent-%COMP%] {
    padding: 2rem 1.5rem;
    height: 180px;
    min-height: 180px;
    max-height: 180px;
    overflow: visible;
    position: relative;
    z-index: 1;
  }
  .promo-content[_ngcontent-%COMP%] {
    margin-top: 0;
    max-width: 100%;
    text-align: center;
  }
  .promo-logo[_ngcontent-%COMP%] {
    display: block;
    margin-bottom: 1rem;
  }
  .promo-logo[_ngcontent-%COMP%]   .logo-icon[_ngcontent-%COMP%] {
    width: 60px;
    height: auto;
    filter: brightness(0) invert(1);
  }
  .promo-title[_ngcontent-%COMP%] {
    display: none;
  }
  .promo-text[_ngcontent-%COMP%] {
    display: none;
  }
  .promo-footer[_ngcontent-%COMP%] {
    display: none;
  }
}
/*# sourceMappingURL=auth-promo-panel.component.css.map */`] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthPromoPanelComponent, [{
    type: Component,
    args: [{ selector: "app-auth-promo-panel", standalone: true, imports: [CommonModule], template: `
    <div class="promo-panel">
      <div class="promo-content">
        <div class="promo-logo">
          <img src="assets/tinta-logo-short.svg" alt="Tinta" class="logo-icon">
        </div>
        <h1 class="promo-title">
          <span class="title-greeting">\u041F\u0440\u0438\u0432\u0435\u0442,</span>
          <span class="title-brand">Tinta!<span class="wave-emoji">\u{1F44B}\u{1F3FB}</span></span>
        </h1>
        <p class="promo-text">
          \u0417\u0430\u0431\u0443\u0434\u044C\u0442\u0435 \u043E \u0440\u0443\u0447\u043D\u043E\u043C \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0438 \u0431\u043E\u043D\u0443\u0441\u0430\u043C\u0438 \u0438 \u0430\u043A\u0446\u0438\u044F\u043C\u0438.
          \u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0438\u0440\u0443\u0439\u0442\u0435 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0443 \u043B\u043E\u044F\u043B\u044C\u043D\u043E\u0441\u0442\u0438, \u0443\u0432\u0435\u043B\u0438\u0447\u044C\u0442\u0435 \u0432\u043E\u0437\u0432\u0440\u0430\u0442 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432 \u0438 \u0437\u0430\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0439\u0442\u0435 \u0431\u043E\u043B\u044C\u0448\u0435 \u2014 \u0431\u0435\u0437 \u043B\u0438\u0448\u043D\u0438\u0445 \u0443\u0441\u0438\u043B\u0438\u0439.
        </p>
        <div class="promo-footer">
          <span>\xA9 2026 Tinta. \u0412\u0441\u0435 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043D\u044B.</span>
        </div>
      </div>
      <div class="promo-background">
        <div class="noise-overlay"></div>
        <svg viewBox="0 0 400 600" class="bg-pattern" preserveAspectRatio="none">
          <path d="M0,100 Q200,50 400,100 T400,300 Q200,250 0,300 T0,500" stroke="rgba(255,255,255,0.25)" stroke-width="2" fill="none"/>
          <path d="M0,150 Q200,100 400,150 T400,350 Q200,300 0,350 T0,550" stroke="rgba(255,255,255,0.2)" stroke-width="2" fill="none"/>
          <path d="M0,200 Q200,150 400,200 T400,400 Q200,350 0,400 T0,600" stroke="rgba(255,255,255,0.15)" stroke-width="2" fill="none"/>
          <path d="M0,50 Q200,0 400,50 T400,250 Q200,200 0,250 T0,450" stroke="rgba(255,255,255,0.18)" stroke-width="1.5" fill="none"/>
          <path d="M0,250 Q200,200 400,250 T400,450 Q200,400 0,450 T0,650" stroke="rgba(255,255,255,0.12)" stroke-width="1.5" fill="none"/>
        </svg>
      </div>
    </div>
  `, styles: [`/* angular:styles/component:css;214955682fee4066daf206d231a0b3bb247141850aee13f1f7515ccef689a7c6;/Users/baglan/repo/westwood/westwood-frontend/src/app/shared/components/auth-promo-panel/auth-promo-panel.component.ts */
:host {
  flex: 0 0 55%;
  display: block;
}
.promo-panel {
  width: 100%;
  height: 100%;
  background:
    linear-gradient(
      135deg,
      #16A34A 0%,
      #15803d 50%,
      #14532d 100%);
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  min-height: 100vh;
}
.promo-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.noise-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  opacity: 0.08;
  pointer-events: none;
}
.bg-pattern {
  width: 100%;
  height: 100%;
  opacity: 0.6;
}
.promo-content {
  position: relative;
  z-index: 1;
  color: white;
  max-width: 610px;
  margin-top: -100px;
}
.promo-logo {
  margin-bottom: 2rem;
}
.promo-logo .logo-icon {
  width: 100px;
  height: auto;
  filter: brightness(0) invert(1);
}
.promo-title {
  margin: 0 0 2rem 0;
  line-height: 1.1;
}
.title-greeting {
  display: block;
  font-size: 4rem;
  font-weight: 800;
}
.title-brand {
  display: block;
  font-size: 4rem;
  font-weight: 800;
}
.wave-emoji {
  display: inline-block;
}
.promo-text {
  font-size: 1.25rem;
  line-height: 1.2;
  opacity: 0.95;
  margin: 0 0 4rem 0;
}
.promo-footer {
  font-size: 0.875rem;
  opacity: 0.8;
}
@media (max-width: 1024px) {
  :host {
    flex: 0 0 auto;
  }
  .promo-panel {
    min-height: 400px;
    padding: 3rem 2.5rem;
    overflow: visible;
    position: relative;
    z-index: 1;
  }
  .promo-content {
    margin-top: 0;
    max-width: 100%;
    text-align: left;
  }
  .promo-logo {
    display: inline-block;
    margin-right: 1.5rem;
    margin-bottom: 0;
    vertical-align: middle;
  }
  .promo-logo .logo-icon {
    width: 80px;
    height: auto;
    filter: brightness(0) invert(1);
  }
  .promo-title {
    display: inline-block;
    vertical-align: middle;
    margin: 0 0 1.5rem 0;
  }
  .title-greeting,
  .title-brand {
    font-size: 2.5rem;
  }
  .promo-text {
    font-size: 1.1rem;
    margin-bottom: 2rem;
    line-height: 1.4;
  }
  .promo-footer {
    display: block;
    margin-top: 2rem;
    font-size: 0.875rem;
    opacity: 0.8;
  }
}
@media (max-width: 640px) {
  :host {
    flex: 0 0 auto;
  }
  .promo-panel {
    padding: 2rem 1.5rem;
    height: 180px;
    min-height: 180px;
    max-height: 180px;
    overflow: visible;
    position: relative;
    z-index: 1;
  }
  .promo-content {
    margin-top: 0;
    max-width: 100%;
    text-align: center;
  }
  .promo-logo {
    display: block;
    margin-bottom: 1rem;
  }
  .promo-logo .logo-icon {
    width: 60px;
    height: auto;
    filter: brightness(0) invert(1);
  }
  .promo-title {
    display: none;
  }
  .promo-text {
    display: none;
  }
  .promo-footer {
    display: none;
  }
}
/*# sourceMappingURL=auth-promo-panel.component.css.map */
`] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AuthPromoPanelComponent, { className: "AuthPromoPanelComponent", filePath: "src/app/shared/components/auth-promo-panel/auth-promo-panel.component.ts", lineNumber: 237 });
})();

export {
  AuthPromoPanelComponent
};
//# sourceMappingURL=chunk-FNJZU2TR.js.map
