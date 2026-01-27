import {
  environment
} from "./chunk-6FFMNYG3.js";
import {
  BehaviorSubject,
  HttpClient,
  HttpParams,
  Injectable,
  Subject,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-MTXXT26T.js";

// src/app/core/services/transaction-modal.service.ts
var TransactionModalService = class _TransactionModalService {
  visibleSource = new BehaviorSubject(false);
  visible$ = this.visibleSource.asObservable();
  transactionCompleteSource = new Subject();
  transactionComplete$ = this.transactionCompleteSource.asObservable();
  open() {
    this.visibleSource.next(true);
  }
  close() {
    this.visibleSource.next(false);
  }
  toggle() {
    this.visibleSource.next(!this.visibleSource.value);
  }
  emitTransactionComplete(result) {
    this.transactionCompleteSource.next(result);
  }
  static \u0275fac = function TransactionModalService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TransactionModalService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TransactionModalService, factory: _TransactionModalService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TransactionModalService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/core/services/payments.service.ts
var PaymentsService = class _PaymentsService {
  http;
  apiUrl = `${environment.apiUrl}/payments`;
  constructor(http) {
    this.http = http;
  }
  /**
   * Search payments with filters and pagination
   */
  searchPayments(request) {
    return this.http.post(`${this.apiUrl}/search`, request);
  }
  /**
   * Refund a payment
   */
  refundPayment(paymentTxId, refundRequest) {
    return this.http.post(`${this.apiUrl}/${paymentTxId}/refund`, refundRequest);
  }
  /**
   * Get client payment history with pagination
   */
  getClientPayments(clientId, page = 0, size = 100) {
    const params = new HttpParams().set("page", page.toString()).set("size", size.toString());
    return this.http.get(`${this.apiUrl}/client/${clientId}`, { params });
  }
  /**
   * Create a draft payment
   */
  createDraftPayment(request) {
    console.log("=== CREATE DRAFT PAYMENT REQUEST ===");
    console.log("URL:", `${this.apiUrl}/draft`);
    console.log("Method: POST");
    console.log("Full Request Payload:", JSON.stringify(request, null, 2));
    console.log("Request Payload (object):", request);
    console.log("====================================");
    return this.http.post(`${this.apiUrl}/draft`, request);
  }
  /**
   * Complete a payment
   */
  completePayment(paymentTxId, request) {
    console.log("=== COMPLETE PAYMENT REQUEST ===");
    console.log("URL:", `${this.apiUrl}/${paymentTxId}/complete`);
    console.log("Method: POST");
    console.log("Payment TX ID:", paymentTxId);
    console.log("Full Request Payload:", JSON.stringify(request, null, 2));
    console.log("Request Payload (object):", request);
    console.log("================================");
    return this.http.post(`${this.apiUrl}/${paymentTxId}/complete`, request);
  }
  /**
   * Delete a draft payment
   */
  deleteDraftPayment(paymentTxId) {
    console.log("=== DELETE DRAFT PAYMENT REQUEST ===");
    console.log("URL:", `${this.apiUrl}/draft/${paymentTxId}`);
    console.log("Method: DELETE");
    console.log("Payment TX ID:", paymentTxId);
    console.log("=====================================");
    return this.http.delete(`${this.apiUrl}/draft/${paymentTxId}`);
  }
  /**
   * Get payment by transaction ID
   */
  getPaymentByTxId(txId) {
    return this.http.get(`${this.apiUrl}/${txId}`);
  }
  /**
   * Update payment method
   */
  updatePaymentMethod(txId, request) {
    return this.http.put(`${this.apiUrl}/${txId}/payment-method`, request);
  }
  static \u0275fac = function PaymentsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PaymentsService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PaymentsService, factory: _PaymentsService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaymentsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  TransactionModalService,
  PaymentsService
};
//# sourceMappingURL=chunk-JQUKQS2J.js.map
