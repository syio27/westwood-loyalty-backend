import {
  ActivatedRoute,
  CommonModule,
  Component,
  RouterLink,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-LQF2QQXA.js";

// src/app/features/bonus-program/pages/reward-program-create-page/reward-program-create-page.component.ts
var RewardProgramCreatePageComponent = class _RewardProgramCreatePageComponent {
  route;
  type = "";
  uuid = "";
  typeLabel = "";
  typeLabels = {
    welcome: "\u041F\u0440\u0438\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0435 \u0432\u043E\u0437\u043D\u0430\u0433\u0440\u0430\u0436\u0434\u0435\u043D\u0438\u0435",
    birthday: "\u0414\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F",
    referral: "\u0420\u0435\u0444\u0435\u0440\u0430\u043B\u044C\u043D\u0430\u044F \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430",
    cashback: "\u041A\u044D\u0448\u0431\u044D\u043A"
  };
  constructor(route) {
    this.route = route;
    this.route.params.subscribe((params) => {
      this.type = params["type"] ?? "";
      this.uuid = params["uuid"] ?? "";
      this.typeLabel = this.typeLabels[this.type] ?? this.type;
    });
  }
  static \u0275fac = function RewardProgramCreatePageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RewardProgramCreatePageComponent)(\u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RewardProgramCreatePageComponent, selectors: [["app-reward-program-create-page"]], decls: 11, vars: 3, consts: [[1, "page-wrapper"], [1, "create-page"], [1, "back-link"], ["routerLink", "/bonus-program"], [1, "page-title"], [1, "placeholder"], [1, "meta"]], template: function RewardProgramCreatePageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "p", 2)(3, "a", 3);
      \u0275\u0275text(4, "\u2190 \u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430 \u0432\u043E\u0437\u043D\u0430\u0433\u0440\u0430\u0436\u0434\u0435\u043D\u0438\u0439");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "h1", 4);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 5);
      \u0275\u0275text(8, "\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0431\u0443\u0434\u0435\u0442 \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0442\u044C\u0441\u044F \u0434\u0438\u043D\u0430\u043C\u0438\u0447\u0435\u0441\u043A\u0438 \u0441 \u0431\u044D\u043A\u0435\u043D\u0434\u0430.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 6);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1("\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435: ", ctx.typeLabel, "");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate2("\u0422\u0438\u043F: ", ctx.type, " \xB7 UUID: ", ctx.uuid, "");
    }
  }, dependencies: [CommonModule, RouterLink], styles: ["\n\n.page-wrapper[_ngcontent-%COMP%] {\n  padding: 2rem;\n}\n.create-page[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n}\n.back-link[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.back-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #16A34A;\n  text-decoration: none;\n  font-weight: 500;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  margin: 0 0 1rem 0;\n  color: #0f172a;\n}\n.placeholder[_ngcontent-%COMP%] {\n  color: #64748b;\n  margin: 0 0 0.5rem 0;\n}\n.meta[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #94a3b8;\n  margin: 0;\n}\n/*# sourceMappingURL=reward-program-create-page.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RewardProgramCreatePageComponent, [{
    type: Component,
    args: [{ selector: "app-reward-program-create-page", standalone: true, imports: [CommonModule, RouterLink], template: `
    <div class="page-wrapper">
      <div class="create-page">
        <p class="back-link">
          <a routerLink="/bonus-program">\u2190 \u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430 \u0432\u043E\u0437\u043D\u0430\u0433\u0440\u0430\u0436\u0434\u0435\u043D\u0438\u0439</a>
        </p>
        <h1 class="page-title">\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435: {{ typeLabel }}</h1>
        <p class="placeholder">\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0431\u0443\u0434\u0435\u0442 \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0442\u044C\u0441\u044F \u0434\u0438\u043D\u0430\u043C\u0438\u0447\u0435\u0441\u043A\u0438 \u0441 \u0431\u044D\u043A\u0435\u043D\u0434\u0430.</p>
        <p class="meta">\u0422\u0438\u043F: {{ type }} \xB7 UUID: {{ uuid }}</p>
      </div>
    </div>
  `, styles: ["/* angular:styles/component:css;412acdd77cbd97ce2cb81fc4d0df855bca03b7baff73c682df42025dcad8c7c6;/Users/baglan/repo/westwood/westwood-frontend/src/app/features/bonus-program/pages/reward-program-create-page/reward-program-create-page.component.ts */\n.page-wrapper {\n  padding: 2rem;\n}\n.create-page {\n  max-width: 800px;\n  margin: 0 auto;\n}\n.back-link {\n  margin-bottom: 1rem;\n}\n.back-link a {\n  color: #16A34A;\n  text-decoration: none;\n  font-weight: 500;\n}\n.page-title {\n  font-size: 1.5rem;\n  margin: 0 0 1rem 0;\n  color: #0f172a;\n}\n.placeholder {\n  color: #64748b;\n  margin: 0 0 0.5rem 0;\n}\n.meta {\n  font-size: 0.85rem;\n  color: #94a3b8;\n  margin: 0;\n}\n/*# sourceMappingURL=reward-program-create-page.component.css.map */\n"] }]
  }], () => [{ type: ActivatedRoute }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RewardProgramCreatePageComponent, { className: "RewardProgramCreatePageComponent", filePath: "src/app/features/bonus-program/pages/reward-program-create-page/reward-program-create-page.component.ts", lineNumber: 31 });
})();
export {
  RewardProgramCreatePageComponent
};
//# sourceMappingURL=chunk-JMOPSCUX.js.map
