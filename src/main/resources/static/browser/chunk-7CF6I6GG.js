import {
  environment
} from "./chunk-6FFMNYG3.js";
import {
  HttpClient,
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-MTXXT26T.js";

// src/app/core/services/clients.service.ts
var ClientsService = class _ClientsService {
  http;
  apiUrl = `${environment.apiUrl}/clients`;
  constructor(http) {
    this.http = http;
  }
  /**
   * Search clients with filters and pagination
   */
  searchClients(request) {
    return this.http.post(`${this.apiUrl}/search`, request);
  }
  /**
   * Get all available tags
   */
  getTags() {
    return this.http.get(`${this.apiUrl}/tags`);
  }
  /**
   * Get client by ID
   */
  getClientById(clientId) {
    return this.http.get(`${this.apiUrl}/${clientId}`);
  }
  /**
   * Update client information
   */
  updateClient(clientId, request) {
    const url = `${this.apiUrl}/${clientId}`;
    console.log("=== UPDATE CLIENT REQUEST ===");
    console.log("URL:", url);
    console.log("Method: PUT");
    console.log("Client ID:", clientId);
    console.log("Full Request Payload:", JSON.stringify(request, null, 2));
    console.log("Request Payload (object):", request);
    console.log("============================");
    return this.http.put(url, request);
  }
  /**
   * Update client notes
   */
  updateClientNotes(clientId, request) {
    const url = `${this.apiUrl}/${clientId}/notes`;
    console.log("=== UPDATE CLIENT NOTES REQUEST ===");
    console.log("URL:", url);
    console.log("Method: PUT");
    console.log("Client ID:", clientId);
    console.log("Full Request Payload:", JSON.stringify(request, null, 2));
    console.log("Request Payload (object):", request);
    console.log("===================================");
    return this.http.put(url, request);
  }
  /**
   * Update client tags
   */
  updateClientTags(clientId, request) {
    const url = `${this.apiUrl}/${clientId}/tags`;
    console.log("=== UPDATE CLIENT TAGS REQUEST ===");
    console.log("URL:", url);
    console.log("Method: PUT");
    console.log("Client ID:", clientId);
    console.log("Full Request Payload:", JSON.stringify(request, null, 2));
    console.log("Request Payload (object):", request);
    console.log("==================================");
    return this.http.put(url, request);
  }
  /**
   * Get client by phone number
   */
  getClientByPhone(phoneNumber) {
    return this.http.get(`${this.apiUrl}/phone/${encodeURIComponent(phoneNumber)}`);
  }
  /**
   * Create a new client
   */
  createClient(request) {
    console.log("=== CREATE CLIENT REQUEST ===");
    console.log("URL:", `${this.apiUrl}`);
    console.log("Method: POST");
    console.log("Full Request Payload:", JSON.stringify(request, null, 2));
    console.log("Request Payload (object):", request);
    console.log("============================");
    return this.http.post(this.apiUrl, request);
  }
  /**
   * Delete a client by ID
   */
  deleteClient(clientId) {
    console.log("=== DELETE CLIENT REQUEST ===");
    console.log("URL:", `${this.apiUrl}/${clientId}`);
    console.log("Method: DELETE");
    console.log("Client ID:", clientId);
    console.log("============================");
    return this.http.delete(`${this.apiUrl}/${clientId}`);
  }
  static \u0275fac = function ClientsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ClientsService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ClientsService, factory: _ClientsService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClientsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  ClientsService
};
//# sourceMappingURL=chunk-7CF6I6GG.js.map
