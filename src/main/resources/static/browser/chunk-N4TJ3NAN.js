import {
  CommonModule,
  Component,
  Input,
  RouterLink,
  RouterModule,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-LQF2QQXA.js";

// src/app/shared/components/not-found-state/not-found-state.component.ts
var NotFoundStateComponent = class _NotFoundStateComponent {
  title = "\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E";
  description = "\u041A \u0441\u043E\u0436\u0430\u043B\u0435\u043D\u0438\u044E, \u0437\u0430\u043F\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u043C\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430 \u0438\u043B\u0438 \u0431\u044B\u043B\u0430 \u0443\u0434\u0430\u043B\u0435\u043D\u0430.";
  backLink = "/";
  backText = "\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043D\u0430\u0437\u0430\u0434";
  static \u0275fac = function NotFoundStateComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotFoundStateComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotFoundStateComponent, selectors: [["app-not-found-state"]], inputs: { title: "title", description: "description", backLink: "backLink", backText: "backText" }, decls: 40, vars: 4, consts: [[1, "not-found-container"], [1, "not-found-content"], [1, "illustration"], ["viewBox", "0 0 400 300", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["cx", "200", "cy", "150", "r", "120", "fill", "url(#bgGradient)", "opacity", "0.1"], ["cx", "80", "cy", "60", "r", "8", "fill", "#22c55e", "opacity", "0.3", 1, "float-1"], ["cx", "320", "cy", "80", "r", "6", "fill", "#16A34A", "opacity", "0.4", 1, "float-2"], ["cx", "60", "cy", "200", "r", "5", "fill", "#86efac", "opacity", "0.5", 1, "float-3"], ["cx", "340", "cy", "220", "r", "7", "fill", "#22c55e", "opacity", "0.3", 1, "float-4"], [1, "main-illustration"], ["cx", "200", "cy", "260", "rx", "80", "ry", "15", "fill", "#e2e8f0", "opacity", "0.5"], ["d", "M100 100 L100 220 C100 230 108 238 118 238 L282 238 C292 238 300 230 300 220 L300 100 Z", "fill", "#f0fdf4", "stroke", "#bbf7d0", "stroke-width", "2"], ["d", "M100 100 L100 85 C100 75 108 68 118 68 L165 68 C175 68 180 75 185 85 L200 100 L100 100 Z", "fill", "#dcfce7", "stroke", "#bbf7d0", "stroke-width", "2"], [1, "magnifier"], ["cx", "230", "cy", "150", "r", "45", "fill", "white", "stroke", "#16A34A", "stroke-width", "4"], ["x1", "262", "y1", "182", "x2", "295", "y2", "215", "stroke", "#16A34A", "stroke-width", "6", "stroke-linecap", "round"], ["cx", "230", "cy", "150", "r", "35", "fill", "none", "stroke", "#dcfce7", "stroke-width", "2"], ["x", "230", "y", "165", "font-family", "system-ui, sans-serif", "font-size", "40", "font-weight", "700", "fill", "#16A34A", "text-anchor", "middle"], ["opacity", "0.6"], ["x", "120", "y", "120", "width", "60", "height", "6", "rx", "3", "fill", "#bbf7d0"], ["x", "120", "y", "135", "width", "45", "height", "6", "rx", "3", "fill", "#dcfce7"], ["x", "120", "y", "180", "width", "50", "height", "6", "rx", "3", "fill", "#bbf7d0"], ["x", "120", "y", "195", "width", "35", "height", "6", "rx", "3", "fill", "#dcfce7"], [1, "sparkles"], ["d", "M55 120 L58 128 L66 131 L58 134 L55 142 L52 134 L44 131 L52 128 Z", "fill", "#fbbf24", 1, "sparkle-1"], ["d", "M340 140 L342 146 L348 148 L342 150 L340 156 L338 150 L332 148 L338 146 Z", "fill", "#22c55e", 1, "sparkle-2"], ["d", "M90 240 L92 245 L97 247 L92 249 L90 254 L88 249 L83 247 L88 245 Z", "fill", "#86efac", 1, "sparkle-3"], ["id", "bgGradient", "x1", "80", "y1", "30", "x2", "320", "y2", "270"], ["offset", "0%", "stop-color", "#22c55e"], ["offset", "100%", "stop-color", "#16A34A"], [1, "title"], [1, "description"], [1, "back-button", 3, "routerLink"], ["viewBox", "0 0 24 24", "fill", "none"], ["d", "M19 12H5m0 0l7 7m-7-7l7-7", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"]], template: function NotFoundStateComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(3, "svg", 3);
      \u0275\u0275element(4, "circle", 4)(5, "circle", 5)(6, "circle", 6)(7, "circle", 7)(8, "circle", 8);
      \u0275\u0275elementStart(9, "g", 9);
      \u0275\u0275element(10, "ellipse", 10)(11, "path", 11)(12, "path", 12);
      \u0275\u0275elementStart(13, "g", 13);
      \u0275\u0275element(14, "circle", 14)(15, "line", 15)(16, "circle", 16);
      \u0275\u0275elementStart(17, "text", 17);
      \u0275\u0275text(18, "?");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "g", 18);
      \u0275\u0275element(20, "rect", 19)(21, "rect", 20)(22, "rect", 21)(23, "rect", 22);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "g", 23);
      \u0275\u0275element(25, "path", 24)(26, "path", 25)(27, "path", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "defs")(29, "linearGradient", 27);
      \u0275\u0275element(30, "stop", 28)(31, "stop", 29);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(32, "h2", 30);
      \u0275\u0275text(33);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "p", 31);
      \u0275\u0275text(35);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "a", 32);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(37, "svg", 33);
      \u0275\u0275element(38, "path", 34);
      \u0275\u0275elementEnd();
      \u0275\u0275text(39);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(33);
      \u0275\u0275textInterpolate(ctx.title);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.description);
      \u0275\u0275advance();
      \u0275\u0275property("routerLink", ctx.backLink);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.backText, " ");
    }
  }, dependencies: [CommonModule, RouterModule, RouterLink], styles: ["\n\n.not-found-container[_ngcontent-%COMP%] {\n  min-height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem;\n  background:\n    linear-gradient(\n      180deg,\n      #f0fdf4 0%,\n      #f8fafc 50%,\n      #f8fafc 100%);\n  margin: -2rem;\n}\n.not-found-content[_ngcontent-%COMP%] {\n  text-align: center;\n  max-width: 500px;\n}\n.illustration[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 400px;\n  margin: 0 auto 2rem;\n}\n.illustration[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n}\n.float-1[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_float 4s ease-in-out infinite;\n}\n.float-2[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_float 5s ease-in-out infinite 0.5s;\n}\n.float-3[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_float 4.5s ease-in-out infinite 1s;\n}\n.float-4[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_float 5.5s ease-in-out infinite 0.3s;\n}\n@keyframes _ngcontent-%COMP%_float {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-10px);\n  }\n}\n.main-illustration[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_breathe 3s ease-in-out infinite;\n  transform-origin: center;\n}\n@keyframes _ngcontent-%COMP%_breathe {\n  0%, 100% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.02);\n  }\n}\n.magnifier[_ngcontent-%COMP%] {\n  transition: transform 0.3s ease;\n}\n.illustration[_ngcontent-%COMP%]:hover   .magnifier[_ngcontent-%COMP%] {\n  transform: rotate(-5deg) scale(1.05);\n}\n.sparkle-1[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_sparkle 2s ease-in-out infinite;\n}\n.sparkle-2[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_sparkle 2.5s ease-in-out infinite 0.3s;\n}\n.sparkle-3[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_sparkle 2.2s ease-in-out infinite 0.6s;\n}\n@keyframes _ngcontent-%COMP%_sparkle {\n  0%, 100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n  50% {\n    opacity: 0.5;\n    transform: scale(0.8);\n  }\n}\n.title[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: #1f2937;\n  margin: 0 0 0.75rem;\n}\n.description[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #64748b;\n  margin: 0 0 2rem;\n  line-height: 1.6;\n}\n.back-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.875rem 1.5rem;\n  background:\n    linear-gradient(\n      135deg,\n      #16A34A 0%,\n      #22c55e 100%);\n  color: white;\n  border-radius: 12px;\n  font-size: 0.9375rem;\n  font-weight: 600;\n  text-decoration: none;\n  transition: all 0.2s ease;\n  box-shadow: 0 4px 14px rgba(22, 163, 74, 0.3);\n}\n.back-button[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(22, 163, 74, 0.4);\n}\n.back-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n}\n@media (max-width: 480px) {\n  .title[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .description[_ngcontent-%COMP%] {\n    font-size: 0.9375rem;\n  }\n  .illustration[_ngcontent-%COMP%] {\n    max-width: 300px;\n  }\n}\n/*# sourceMappingURL=not-found-state.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotFoundStateComponent, [{
    type: Component,
    args: [{ selector: "app-not-found-state", standalone: true, imports: [CommonModule, RouterModule], template: `
    <div class="not-found-container">
      <div class="not-found-content">
        <!-- Beautiful SVG Illustration -->
        <div class="illustration">
          <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- Background circle -->
            <circle cx="200" cy="150" r="120" fill="url(#bgGradient)" opacity="0.1"/>
            
            <!-- Floating elements -->
            <circle cx="80" cy="60" r="8" fill="#22c55e" opacity="0.3" class="float-1"/>
            <circle cx="320" cy="80" r="6" fill="#16A34A" opacity="0.4" class="float-2"/>
            <circle cx="60" cy="200" r="5" fill="#86efac" opacity="0.5" class="float-3"/>
            <circle cx="340" cy="220" r="7" fill="#22c55e" opacity="0.3" class="float-4"/>
            
            <!-- Main document/folder illustration -->
            <g class="main-illustration">
              <!-- Shadow -->
              <ellipse cx="200" cy="260" rx="80" ry="15" fill="#e2e8f0" opacity="0.5"/>
              
              <!-- Folder back -->
              <path d="M100 100 L100 220 C100 230 108 238 118 238 L282 238 C292 238 300 230 300 220 L300 100 Z" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="2"/>
              
              <!-- Folder tab -->
              <path d="M100 100 L100 85 C100 75 108 68 118 68 L165 68 C175 68 180 75 185 85 L200 100 L100 100 Z" fill="#dcfce7" stroke="#bbf7d0" stroke-width="2"/>
              
              <!-- Magnifying glass -->
              <g class="magnifier">
                <circle cx="230" cy="150" r="45" fill="white" stroke="#16A34A" stroke-width="4"/>
                <line x1="262" y1="182" x2="295" y2="215" stroke="#16A34A" stroke-width="6" stroke-linecap="round"/>
                <circle cx="230" cy="150" r="35" fill="none" stroke="#dcfce7" stroke-width="2"/>
                
                <!-- Question mark inside magnifier -->
                <text x="230" y="165" font-family="system-ui, sans-serif" font-size="40" font-weight="700" fill="#16A34A" text-anchor="middle">?</text>
              </g>
              
              <!-- Decorative lines (documents) -->
              <g opacity="0.6">
                <rect x="120" y="120" width="60" height="6" rx="3" fill="#bbf7d0"/>
                <rect x="120" y="135" width="45" height="6" rx="3" fill="#dcfce7"/>
                <rect x="120" y="180" width="50" height="6" rx="3" fill="#bbf7d0"/>
                <rect x="120" y="195" width="35" height="6" rx="3" fill="#dcfce7"/>
              </g>
            </g>
            
            <!-- Stars/sparkles -->
            <g class="sparkles">
              <path d="M55 120 L58 128 L66 131 L58 134 L55 142 L52 134 L44 131 L52 128 Z" fill="#fbbf24" class="sparkle-1"/>
              <path d="M340 140 L342 146 L348 148 L342 150 L340 156 L338 150 L332 148 L338 146 Z" fill="#22c55e" class="sparkle-2"/>
              <path d="M90 240 L92 245 L97 247 L92 249 L90 254 L88 249 L83 247 L88 245 Z" fill="#86efac" class="sparkle-3"/>
            </g>
            
            <defs>
              <linearGradient id="bgGradient" x1="80" y1="30" x2="320" y2="270">
                <stop offset="0%" stop-color="#22c55e"/>
                <stop offset="100%" stop-color="#16A34A"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        <!-- Text content -->
        <h2 class="title">{{ title }}</h2>
        <p class="description">{{ description }}</p>
        
        <!-- Action button -->
        <a [routerLink]="backLink" class="back-button">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M19 12H5m0 0l7 7m-7-7l7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          {{ backText }}
        </a>
      </div>
    </div>
  `, styles: ["/* angular:styles/component:css;c2108857e9ed85feeeb785caa4dff84c67680293475cc17a3af48fcd0fb58f6a;/Users/baglan/repo/westwood/westwood-frontend/src/app/shared/components/not-found-state/not-found-state.component.ts */\n.not-found-container {\n  min-height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem;\n  background:\n    linear-gradient(\n      180deg,\n      #f0fdf4 0%,\n      #f8fafc 50%,\n      #f8fafc 100%);\n  margin: -2rem;\n}\n.not-found-content {\n  text-align: center;\n  max-width: 500px;\n}\n.illustration {\n  width: 100%;\n  max-width: 400px;\n  margin: 0 auto 2rem;\n}\n.illustration svg {\n  width: 100%;\n  height: auto;\n}\n.float-1 {\n  animation: float 4s ease-in-out infinite;\n}\n.float-2 {\n  animation: float 5s ease-in-out infinite 0.5s;\n}\n.float-3 {\n  animation: float 4.5s ease-in-out infinite 1s;\n}\n.float-4 {\n  animation: float 5.5s ease-in-out infinite 0.3s;\n}\n@keyframes float {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-10px);\n  }\n}\n.main-illustration {\n  animation: breathe 3s ease-in-out infinite;\n  transform-origin: center;\n}\n@keyframes breathe {\n  0%, 100% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.02);\n  }\n}\n.magnifier {\n  transition: transform 0.3s ease;\n}\n.illustration:hover .magnifier {\n  transform: rotate(-5deg) scale(1.05);\n}\n.sparkle-1 {\n  animation: sparkle 2s ease-in-out infinite;\n}\n.sparkle-2 {\n  animation: sparkle 2.5s ease-in-out infinite 0.3s;\n}\n.sparkle-3 {\n  animation: sparkle 2.2s ease-in-out infinite 0.6s;\n}\n@keyframes sparkle {\n  0%, 100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n  50% {\n    opacity: 0.5;\n    transform: scale(0.8);\n  }\n}\n.title {\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: #1f2937;\n  margin: 0 0 0.75rem;\n}\n.description {\n  font-size: 1rem;\n  color: #64748b;\n  margin: 0 0 2rem;\n  line-height: 1.6;\n}\n.back-button {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.875rem 1.5rem;\n  background:\n    linear-gradient(\n      135deg,\n      #16A34A 0%,\n      #22c55e 100%);\n  color: white;\n  border-radius: 12px;\n  font-size: 0.9375rem;\n  font-weight: 600;\n  text-decoration: none;\n  transition: all 0.2s ease;\n  box-shadow: 0 4px 14px rgba(22, 163, 74, 0.3);\n}\n.back-button:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(22, 163, 74, 0.4);\n}\n.back-button svg {\n  width: 18px;\n  height: 18px;\n}\n@media (max-width: 480px) {\n  .title {\n    font-size: 1.5rem;\n  }\n  .description {\n    font-size: 0.9375rem;\n  }\n  .illustration {\n    max-width: 300px;\n  }\n}\n/*# sourceMappingURL=not-found-state.component.css.map */\n"] }]
  }], null, { title: [{
    type: Input
  }], description: [{
    type: Input
  }], backLink: [{
    type: Input
  }], backText: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotFoundStateComponent, { className: "NotFoundStateComponent", filePath: "src/app/shared/components/not-found-state/not-found-state.component.ts", lineNumber: 239 });
})();

export {
  NotFoundStateComponent
};
//# sourceMappingURL=chunk-N4TJ3NAN.js.map
