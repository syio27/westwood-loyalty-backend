import {
  environment
} from "./chunk-6FFMNYG3.js";
import {
  HttpClient,
  HttpParams,
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-MTXXT26T.js";

// src/app/core/services/analytics.service.ts
var AnalyticsService = class _AnalyticsService {
  http;
  apiUrl = `${environment.apiUrl}/analytics`;
  constructor(http) {
    this.http = http;
  }
  /**
   * Get monthly revenue
   * @returns Observable with monthly revenue data
   */
  getMonthlyRevenue() {
    return this.http.get(`${this.apiUrl}/revenue/monthly`);
  }
  /**
   * Get daily revenue
   * @returns Observable with daily revenue data
   */
  getDailyRevenue() {
    return this.http.get(`${this.apiUrl}/revenue/daily`);
  }
  /**
   * Get average check for a specific period
   * @param period - Period type: 'DAILY' or 'MONTHLY'
   * @returns Observable with average check data
   */
  getAverageCheck(period = "MONTHLY") {
    const params = new HttpParams().set("period", period);
    return this.http.get(`${this.apiUrl}/average-check`, { params });
  }
  /**
   * Get overall totals (total payments, total revenue, total bonuses granted)
   * @returns Observable with overall totals data
   */
  getOverallTotals() {
    return this.http.get(`${this.apiUrl}/totals/overall`);
  }
  /**
   * Get daily transaction count
   * @returns Observable with daily transactions data
   */
  getDailyTransactions() {
    return this.http.get(`${this.apiUrl}/transactions/daily`);
  }
  /**
   * Get new clients count
   * @param period - Period type: 'DAILY' or 'MONTHLY'
   * @returns Observable with new clients data
   */
  getNewClients(period = "DAILY") {
    const params = new HttpParams().set("period", period);
    return this.http.get(`${this.apiUrl}/clients/new/daily`, { params });
  }
  /**
   * Get bonuses accrued
   * @param period - Period type: 'DAILY' or 'MONTHLY'
   * @returns Observable with bonuses accrued data
   */
  getBonusesAccrued(period = "MONTHLY") {
    const params = new HttpParams().set("period", period);
    return this.http.get(`${this.apiUrl}/bonuses/accrued`, { params });
  }
  /**
   * Get daily refunds count
   * @returns Observable with daily refunds data
   */
  getDailyRefunds() {
    return this.http.get(`${this.apiUrl}/refunds/daily`);
  }
  /**
   * Get active clients count
   * @returns Observable with active clients data
   */
  getActiveClients() {
    return this.http.get(`${this.apiUrl}/clients/active`);
  }
  /**
   * Get monthly revenue chart data
   * @param year - Year (optional, defaults to current year)
   * @param month - Month 1-12 (optional, defaults to current month)
   * @returns Observable with chart data
   */
  getMonthlyRevenueChart(year, month) {
    const now = /* @__PURE__ */ new Date();
    const currentYear = year ?? now.getFullYear();
    const currentMonth = month ?? now.getMonth() + 1;
    const params = new HttpParams().set("year", currentYear.toString()).set("month", currentMonth.toString());
    return this.http.get(`${this.apiUrl}/revenue/monthly/chart`, { params });
  }
  /**
   * Get client totals for dashboard
   * @param clientId - Client ID
   * @returns Observable with client totals data
  */
  getClientTotals(clientId) {
    return this.http.get(`${this.apiUrl}/clients/${clientId}/totals`);
  }
  static \u0275fac = function AnalyticsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AnalyticsService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AnalyticsService, factory: _AnalyticsService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnalyticsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  AnalyticsService
};
//# sourceMappingURL=chunk-5OJA2AUG.js.map
