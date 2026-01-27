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

// src/app/core/services/users.service.ts
var UsersService = class _UsersService {
  http;
  apiUrl = `${environment.apiUrl}/users`;
  constructor(http) {
    this.http = http;
  }
  // Get all users
  getUsers() {
    return this.http.get(this.apiUrl);
  }
  // Get user by ID
  getUserById(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  // Get user by username
  getUserByUsername(username) {
    return this.http.get(`${this.apiUrl}/username/${username}`);
  }
  // Create user
  createUser(user) {
    return this.http.post(this.apiUrl, user);
  }
  // Update user
  updateUser(id, data) {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }
  // Delete user
  deleteUser(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  // Invite user
  inviteUser(data) {
    console.log("[UsersService] POST /users/invite", data);
    return this.http.post(`${this.apiUrl}/invite`, data);
  }
  // Get user transactions
  getUserTransactions(userId) {
    return this.http.get(`${this.apiUrl}/${userId}/transactions`);
  }
  // Lock user
  lockUser(userId) {
    return this.http.put(`${this.apiUrl}/${userId}/lock`, {});
  }
  // Unlock user
  unlockUser(userId) {
    return this.http.put(`${this.apiUrl}/${userId}/unlock`, {});
  }
  // Delete all locked users
  deleteLockedUsers() {
    return this.http.delete(`${this.apiUrl}/locked`);
  }
  // Update heartbeat (last seen)
  updateHeartbeat() {
    return this.http.post(`${this.apiUrl}/activity/heartbeat`, {});
  }
  // Get user status
  getUserStatus(userId) {
    return this.http.get(`${this.apiUrl}/${userId}/status`);
  }
  // Get all users status
  getAllUsersStatus() {
    return this.http.get(`${this.apiUrl}/status`);
  }
  static \u0275fac = function UsersService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UsersService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UsersService, factory: _UsersService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UsersService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  UsersService
};
//# sourceMappingURL=chunk-K4OZ67OM.js.map
