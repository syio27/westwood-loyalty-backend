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
} from "./chunk-LQF2QQXA.js";

// src/app/core/services/message-templates.service.ts
var MessageTemplatesService = class _MessageTemplatesService {
  http;
  apiUrl = `${environment.apiUrl}/message-templates`;
  constructor(http) {
    this.http = http;
  }
  /**
   * Get all message templates
   * @param type - Optional filter by template type
   * @returns Observable with array of message templates
   */
  getAllTemplates(type) {
    let params = new HttpParams();
    if (type) {
      params = params.set("type", type);
    }
    return this.http.get(this.apiUrl, { params });
  }
  /**
   * Get message template by ID
   * @param id - Template ID
   * @returns Observable with message template
   */
  getTemplateById(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  /**
   * Create a new message template
   * @param data - Template data
   * @returns Observable with created message template
   */
  createTemplate(data) {
    return this.http.post(this.apiUrl, data);
  }
  /**
   * Update message template
   * @param id - Template ID
   * @param data - Updated template data
   * @returns Observable with updated message template
   */
  updateTemplate(id, data) {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }
  /**
   * Delete message template
   * @param id - Template ID
   * @returns Observable with void
   */
  deleteTemplate(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  /**
   * Get populated message template with variables replaced
   * @param type - Template type
   * @param clientId - Client UUID
   * @param paymentTxId - Optional payment transaction ID
   * @returns Observable with populated template content
   */
  getPopulatedTemplate(type, clientId, paymentTxId, expiryDate) {
    let params = new HttpParams().set("type", type).set("clientId", clientId);
    if (paymentTxId) {
      params = params.set("paymentTxId", paymentTxId);
    }
    if (expiryDate) {
      params = params.set("expiryDate", expiryDate);
    }
    return this.http.get(`${this.apiUrl}/populated`, { params });
  }
  /**
   * Get available template variables
   * @returns Observable with array of template variables
   */
  getTemplateVariables() {
    return this.http.get(`${this.apiUrl}/variables`);
  }
  /**
   * Get available template types
   * @returns Observable with array of template types with display names
   */
  getTemplateTypes() {
    return this.http.get(`${this.apiUrl}/types`);
  }
  static \u0275fac = function MessageTemplatesService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MessageTemplatesService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MessageTemplatesService, factory: _MessageTemplatesService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MessageTemplatesService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/core/services/messages.service.ts
var MessagesService = class _MessagesService {
  http;
  apiUrl = `${environment.apiUrl}/messages`;
  constructor(http) {
    this.http = http;
  }
  /**
   * Send a message to a client
   * @param data - Message data including clientId, messageContent, and channel
   * @returns Observable with sent message response
   */
  sendMessage(data) {
    return this.http.post(`${this.apiUrl}/send`, data);
  }
  /**
   * Get message records by channel
   * @param channel - Channel type: EMAIL, WHATSAPP, or SMS
   * @returns Observable with array of message records
   */
  getMessagesByChannel(channel) {
    return this.http.get(`${this.apiUrl}/channel/${channel}`);
  }
  static \u0275fac = function MessagesService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MessagesService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MessagesService, factory: _MessagesService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MessagesService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  MessageTemplatesService,
  MessagesService
};
//# sourceMappingURL=chunk-LYH5NGGM.js.map
