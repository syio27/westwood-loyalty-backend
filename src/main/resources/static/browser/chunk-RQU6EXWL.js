import {
  environment
} from "./chunk-6FFMNYG3.js";
import {
  HttpClient,
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-THV7WX37.js";

// src/app/core/services/bonus-types.service.ts
var BonusTypesService = class _BonusTypesService {
  http;
  apiUrl = `${environment.apiUrl}/bonus-types`;
  constructor(http) {
    this.http = http;
  }
  // Get all bonus types
  getAllBonusTypes() {
    return this.http.get(this.apiUrl);
  }
  // Get active bonus types only
  getActiveBonusTypes() {
    return this.http.get(`${this.apiUrl}/active`);
  }
  // Get bonus type by ID
  getBonusTypeById(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  // Create bonus type
  createBonusType(data) {
    return this.http.post(this.apiUrl, data);
  }
  // Update bonus type
  updateBonusType(id, data) {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }
  // Toggle bonus type enabled/disabled
  toggleBonusType(id, enabled) {
    return this.http.patch(`${this.apiUrl}/${id}/toggle?enabled=${enabled}`, {});
  }
  // Delete bonus type
  deleteBonusType(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  // Get preconfigured bonus types
  getPreconfiguredBonusTypes() {
    return this.http.get(`${this.apiUrl}/preconfigured`);
  }
  // Get bonus types by flow (returns a single object, not an array)
  getBonusTypesByFlow(flow) {
    return this.http.get(`${this.apiUrl}/flow/${flow}`);
  }
  static \u0275fac = function BonusTypesService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BonusTypesService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BonusTypesService, factory: _BonusTypesService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BonusTypesService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  BonusTypesService
};
//# sourceMappingURL=chunk-RQU6EXWL.js.map
