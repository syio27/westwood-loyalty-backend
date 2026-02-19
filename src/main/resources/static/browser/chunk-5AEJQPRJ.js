import {
  environment
} from "./chunk-6FFMNYG3.js";
import {
  HttpClient,
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-NKSGOSP5.js";

// src/app/core/services/reward-programs.service.ts
var API = `${environment.apiUrl}/reward-programs`;
var RewardProgramsService = class _RewardProgramsService {
  http;
  constructor(http) {
    this.http = http;
  }
  // ─── Slots & Draft Creation ──────────────────────────────────────
  getSlots() {
    return this.http.get(`${API}/slots`);
  }
  createDraft(type) {
    return this.http.post(`${API}/draft`, { type });
  }
  // ─── Cashback Draft ──────────────────────────────────────────────
  saveCashbackDraft(uuid, data) {
    return this.http.put(`${API}/${uuid}/cashback`, data);
  }
  // ─── Get Program ─────────────────────────────────────────────────
  getProgram(uuid) {
    return this.http.get(`${API}/${uuid}`);
  }
  getTieredClients(programUuid, page = 0, size = 20, tierName, search, searchPhone, sort) {
    const params = { page: String(page), size: String(size) };
    if (tierName)
      params["tierName"] = tierName;
    if (search)
      params["search"] = search;
    if (searchPhone)
      params["searchPhone"] = searchPhone;
    if (sort)
      params["sort"] = sort;
    return this.http.get(`${API}/${programUuid}/tiered-clients`, { params });
  }
  // ─── List Programs ───────────────────────────────────────────────
  listPrograms() {
    return this.http.get(`${API}`);
  }
  // ─── Lifecycle ───────────────────────────────────────────────────
  launchCashbackProgram(uuid, data) {
    return this.http.post(`${API}/${uuid}/launch`, data);
  }
  deactivateProgram(uuid) {
    return this.http.post(`${API}/${uuid}/deactivate`, {});
  }
  archiveProgram(uuid) {
    return this.http.post(`${API}/${uuid}/archive`, {});
  }
  deleteProgram(uuid) {
    return this.http.delete(`${API}/${uuid}`);
  }
  static \u0275fac = function RewardProgramsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RewardProgramsService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RewardProgramsService, factory: _RewardProgramsService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RewardProgramsService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();
function rewardProgramTypeToSlug(type) {
  return type.toLowerCase();
}

export {
  RewardProgramsService,
  rewardProgramTypeToSlug
};
//# sourceMappingURL=chunk-5AEJQPRJ.js.map
