import {
  environment
} from "./chunk-6FFMNYG3.js";
import {
  HttpClient,
  HttpParams,
  Injectable,
  map,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-NKSGOSP5.js";

// src/app/core/services/bonuses.service.ts
var BonusesService = class _BonusesService {
  http;
  apiUrl = `${environment.apiUrl}/bonuses`;
  constructor(http) {
    this.http = http;
  }
  /**
   * Get clients whose bonuses expire within 7 days (summary + list)
   */
  getBonusesExpiringSoon() {
    return this.http.get(`${this.apiUrl}/expiring-soon`);
  }
  /**
   * Record that the client was notified (WhatsApp) about bonuses expiring on the given date.
   */
  recordBonusExpiryNotified(request) {
    return this.http.post(`${this.apiUrl}/expiring-soon/notified`, request, { responseType: "text" }).pipe(map(() => void 0));
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
  /**
   * Manually grant bonus to a client
   */
  grantBonus(clientId, request) {
    return this.http.post(`${this.apiUrl}/client/${clientId}/grant`, request);
  }
  /**
   * Manually revoke bonus from a client
   */
  revokeBonus(clientId, request) {
    return this.http.post(`${this.apiUrl}/client/${clientId}/revoke`, request);
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

export {
  BonusesService
};
//# sourceMappingURL=chunk-OA7JZSDG.js.map
