import {
  MessageTemplatesService,
  MessagesService
} from "./chunk-LYH5NGGM.js";
import {
  PhoneFormatPipe
} from "./chunk-OUAWC6NU.js";
import {
  BonusesService
} from "./chunk-VOO7HGWJ.js";
import {
  LoaderComponent
} from "./chunk-74OMJKP6.js";
import {
  ModalComponent
} from "./chunk-PGQMZGPZ.js";
import {
  PageHeaderService
} from "./chunk-TXI2S3RM.js";
import "./chunk-6FFMNYG3.js";
import {
  ToastService
} from "./chunk-UB4WPUR7.js";
import {
  ButtonComponent
} from "./chunk-FM5G4Z36.js";
import {
  CommonModule,
  Component,
  NgForOf,
  NgIf,
  RouterLink,
  RouterModule,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-LQF2QQXA.js";

// src/app/features/bonus-expiring/pages/bonus-expiring-page/bonus-expiring-page.component.ts
var _c0 = (a0) => ["/clients", a0];
function BonusExpiringPageComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "app-loader", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("visible", true)("overlay", false);
  }
}
function BonusExpiringPageComponent_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 11);
    \u0275\u0275element(2, "path", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "p", 13);
    \u0275\u0275text(4, "\u041D\u0435\u0442 \u0431\u043E\u043D\u0443\u0441\u043E\u0432, \u0438\u0441\u0442\u0435\u043A\u0430\u044E\u0449\u0438\u0445 \u0432 \u0431\u043B\u0438\u0436\u0430\u0439\u0448\u0438\u0435 7 \u0434\u043D\u0435\u0439");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 14);
    \u0275\u0275text(6, "\u041D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E");
    \u0275\u0275elementEnd()();
  }
}
function BonusExpiringPageComponent_div_3_div_2_div_1_tr_23_app_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-button", 29);
    \u0275\u0275listener("onClick", function BonusExpiringPageComponent_div_3_div_2_div_1_tr_23_app_button_12_Template_app_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r1);
      const group_r2 = \u0275\u0275nextContext().$implicit;
      const client_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.openNotifyModal(client_r3, group_r2));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 30);
    \u0275\u0275element(2, "path", 31)(3, "path", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " WhatsApp ");
    \u0275\u0275elementEnd();
  }
}
function BonusExpiringPageComponent_div_3_div_2_div_1_tr_23_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 33);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function BonusExpiringPageComponent_div_3_div_2_div_1_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "span", 25);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td")(9, "span", 26);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275template(12, BonusExpiringPageComponent_div_3_div_2_div_1_tr_23_app_button_12_Template, 5, 0, "app-button", 27)(13, BonusExpiringPageComponent_div_3_div_2_div_1_tr_23_span_13_Template, 2, 0, "span", 28);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const group_r2 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("expiring-soon", group_r2.daysLeft <= 3)("notified", !!group_r2.notifiedAt);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.formatDate(group_r2.expiryDate));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("urgent", group_r2.daysLeft <= 3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", group_r2.daysLeft, " ", ctx_r3.daysText(group_r2.daysLeft), "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r3.formatAmount(group_r2.totalRemainingAmount), " \u20B8", group_r2.items.length > 1 ? " (" + group_r2.items.length + " \u043D\u0430\u0447\u0438\u0441\u043B.)" : "", "");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("notified", !!group_r2.notifiedAt);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(group_r2.notifiedAt ? "\u0423\u0432\u0435\u0434\u043E\u043C\u043B\u0451\u043D" : "\u041D\u0443\u0436\u043D\u043E \u0443\u0432\u0435\u0434\u043E\u043C\u0438\u0442\u044C");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !group_r2.notifiedAt);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", group_r2.notifiedAt);
  }
}
function BonusExpiringPageComponent_div_3_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18)(2, "div", 19)(3, "a", 20);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 21);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "phoneFormat");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 22)(9, "table", 23)(10, "thead")(11, "tr")(12, "th");
    \u0275\u0275text(13, "\u0418\u0441\u0442\u0435\u043A\u0430\u0435\u0442");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "\u041E\u0441\u0442\u0430\u043B\u043E\u0441\u044C \u0434\u043D\u0435\u0439");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "\u0421\u0443\u043C\u043C\u0430 (\u043E\u0441\u0442\u0430\u0442\u043E\u043A)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th");
    \u0275\u0275text(19, "\u0421\u0442\u0430\u0442\u0443\u0441");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th");
    \u0275\u0275text(21, "\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "tbody");
    \u0275\u0275template(23, BonusExpiringPageComponent_div_3_div_2_div_1_tr_23_Template, 14, 16, "tr", 24);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const client_r3 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(6, _c0, client_r3.clientId));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(client_r3.clientName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 4, client_r3.phone));
    \u0275\u0275advance(17);
    \u0275\u0275property("ngForOf", client_r3.expiryGroups);
  }
}
function BonusExpiringPageComponent_div_3_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275template(1, BonusExpiringPageComponent_div_3_div_2_div_1_Template, 24, 8, "div", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.data.clients);
  }
}
function BonusExpiringPageComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, BonusExpiringPageComponent_div_3_div_1_Template, 7, 0, "div", 8)(2, BonusExpiringPageComponent_div_3_div_2_Template, 2, 1, "div", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.data || ctx_r3.data.clients.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.data && ctx_r3.data.clients.length > 0);
  }
}
function BonusExpiringPageComponent_div_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44)(1, "label", 38);
    \u0275\u0275text(2, "\u0428\u0430\u0431\u043B\u043E\u043D \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 45)(4, "h4", 46);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 47);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.selectedTemplate.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.selectedTemplate.content);
  }
}
function BonusExpiringPageComponent_div_5_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48)(1, "span");
    \u0275\u0275text(2, "\u0428\u0430\u0431\u043B\u043E\u043D \u0442\u0438\u043F\u0430 BONUS_EXPIRY \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D. \u0421\u043E\u0437\u0434\u0430\u0439\u0442\u0435 \u0435\u0433\u043E \u0432 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430\u0445.");
    \u0275\u0275elementEnd()();
  }
}
function BonusExpiringPageComponent_div_5_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49)(1, "span", 50);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("\u0418\u0441\u0442\u0435\u043A\u0430\u0435\u0442 ", ctx_r3.formatDate(ctx_r3.selectedGroup.expiryDate), " \xB7 ", ctx_r3.formatAmount(ctx_r3.selectedGroup.totalRemainingAmount), " \u20B8");
  }
}
function BonusExpiringPageComponent_div_5_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51)(1, "label", 38);
    \u0275\u0275text(2, "\u0421\u043E\u0434\u0435\u0440\u0436\u0438\u043C\u043E\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 52);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r3.populatedContent);
  }
}
function BonusExpiringPageComponent_div_5_app_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-button", 53);
    \u0275\u0275listener("click", function BonusExpiringPageComponent_div_5_app_button_12_Template_app_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.sendAndOpenWhatsApp());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 30);
    \u0275\u0275element(2, "path", 31)(3, "path", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r3.isSending);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r3.isSending ? "\u041E\u0442\u043F\u0440\u0430\u0432\u043A\u0430..." : "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0432 WhatsApp", " ");
  }
}
function BonusExpiringPageComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275template(1, BonusExpiringPageComponent_div_5_div_1_Template, 8, 2, "div", 35)(2, BonusExpiringPageComponent_div_5_div_2_Template, 3, 0, "div", 36);
    \u0275\u0275elementStart(3, "div", 37)(4, "label", 38);
    \u0275\u0275text(5, "\u041D\u043E\u043C\u0435\u0440 \u043F\u043E\u043B\u0443\u0447\u0430\u0442\u0435\u043B\u044F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 39);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "phoneFormat");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, BonusExpiringPageComponent_div_5_div_9_Template, 3, 2, "div", 40)(10, BonusExpiringPageComponent_div_5_div_10_Template, 5, 1, "div", 41);
    \u0275\u0275elementStart(11, "div", 42);
    \u0275\u0275template(12, BonusExpiringPageComponent_div_5_app_button_12_Template, 5, 2, "app-button", 43);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.selectedTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.selectedTemplate && !ctx_r3.loadingTemplate);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 6, ctx_r3.selectedClient.phone));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r3.selectedGroup);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.selectedTemplate);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r3.selectedTemplate);
  }
}
var BonusExpiringPageComponent = class _BonusExpiringPageComponent {
  bonusesService = inject(BonusesService);
  messageTemplatesService = inject(MessageTemplatesService);
  messagesService = inject(MessagesService);
  toastService = inject(ToastService);
  pageHeaderService = inject(PageHeaderService);
  isLoading = true;
  data = null;
  showNotifyModal = false;
  selectedClient = null;
  selectedGroup = null;
  selectedTemplate = null;
  populatedContent = "";
  loadingTemplate = false;
  isSending = false;
  ngOnInit() {
    this.pageHeaderService.setPageHeader("\u0411\u043E\u043D\u0443\u0441\u044B \u0438\u0441\u0442\u0435\u043A\u0430\u044E\u0442 \u0441\u043A\u043E\u0440\u043E", [
      { label: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F", route: "/home" },
      { label: "\u0411\u043E\u043D\u0443\u0441\u044B \u0438\u0441\u0442\u0435\u043A\u0430\u044E\u0442 \u0441\u043A\u043E\u0440\u043E" }
    ]);
    this.loadData();
  }
  loadData() {
    this.bonusesService.getBonusesExpiringSoon().subscribe({
      next: (d) => {
        this.data = d;
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }
  formatAmount(amount) {
    return typeof amount === "number" ? amount.toLocaleString("ru-RU", { minimumFractionDigits: 0, maximumFractionDigits: 2 }) : "0";
  }
  formatDate(dateStr) {
    if (!dateStr)
      return "\u2014";
    const d = new Date(dateStr);
    return d.toLocaleDateString("ru-RU", { day: "2-digit", month: "2-digit", year: "numeric" });
  }
  daysText(days) {
    if (days === 1)
      return "\u0434\u0435\u043D\u044C";
    if (days >= 2 && days <= 4)
      return "\u0434\u043D\u044F";
    return "\u0434\u043D\u0435\u0439";
  }
  openNotifyModal(client, group) {
    this.selectedClient = client;
    this.selectedGroup = group;
    this.showNotifyModal = true;
    this.selectedTemplate = null;
    this.populatedContent = "";
    this.loadingTemplate = true;
    this.messageTemplatesService.getAllTemplates("BONUS_EXPIRY").subscribe({
      next: (templates) => {
        this.loadingTemplate = false;
        if (templates && templates.length > 0) {
          this.selectedTemplate = templates[0];
          this.messageTemplatesService.getPopulatedTemplate("BONUS_EXPIRY", client.clientId, void 0, group.expiryDate).subscribe({
            next: (pop) => {
              this.populatedContent = pop.populatedContent;
            },
            error: () => {
              this.populatedContent = this.selectedTemplate?.content ?? "";
            }
          });
        }
      },
      error: () => {
        this.loadingTemplate = false;
      }
    });
  }
  closeNotifyModal() {
    this.showNotifyModal = false;
    this.selectedClient = null;
    this.selectedGroup = null;
    this.selectedTemplate = null;
    this.populatedContent = "";
    this.isSending = false;
  }
  sendAndOpenWhatsApp() {
    if (!this.selectedClient || !this.selectedGroup || this.isSending)
      return;
    const message = this.populatedContent || this.selectedTemplate?.content || "";
    if (!message) {
      this.toastService.error("\u041D\u0435\u0442 \u0442\u0435\u043A\u0441\u0442\u0430 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F");
      return;
    }
    this.isSending = true;
    const clientId = this.selectedClient.clientId;
    const expiryDate = this.selectedGroup.expiryDate;
    this.messagesService.sendMessage({
      clientId,
      messageContent: message,
      channel: "WHATSAPP"
    }).subscribe({
      next: (response) => {
        this.bonusesService.recordBonusExpiryNotified({
          clientId,
          expiryDate,
          messageRecordId: response.id != null ? Number(response.id) : void 0
        }).subscribe({
          next: () => {
            this.openWhatsAppWeb(this.selectedClient.phone, message);
            this.toastService.success("\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u0437\u0430\u043F\u0438\u0441\u0430\u043D\u043E, \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u0435\u0442\u0441\u044F WhatsApp");
            this.loadData();
            this.closeNotifyModal();
          },
          error: (err) => {
            this.toastService.error(err.error?.message || "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0437\u0430\u043F\u0438\u0441\u0438 \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F");
          }
        });
        this.isSending = false;
      },
      error: (err) => {
        this.toastService.error(err.error?.message || "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0435");
        this.isSending = false;
      }
    });
  }
  openWhatsAppWeb(phone, message) {
    let clean = phone.replace(/[\s\-\(\)\+]/g, "");
    if (clean.startsWith("8"))
      clean = "7" + clean.substring(1);
    const url = `https://wa.me/${clean}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  }
  static \u0275fac = function BonusExpiringPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BonusExpiringPageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BonusExpiringPageComponent, selectors: [["app-bonus-expiring-page"]], decls: 6, vars: 5, consts: [[1, "page-wrapper"], [1, "page-content"], ["class", "page-loading-container", 4, "ngIf"], [4, "ngIf"], ["title", "\u0423\u0432\u0435\u0434\u043E\u043C\u0438\u0442\u044C \u043E \u0438\u0441\u0442\u0435\u0447\u0435\u043D\u0438\u0438 \u0431\u043E\u043D\u0443\u0441\u043E\u0432", 3, "closed", "visible", "showCloseButton"], ["class", "notify-content", 4, "ngIf"], [1, "page-loading-container"], ["type", "logo", "size", "large", 3, "visible", "overlay"], ["class", "empty-state", 4, "ngIf"], ["class", "clients-list", 4, "ngIf"], [1, "empty-state"], ["viewBox", "0 0 24 24", "fill", "none"], ["d", "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z", "stroke", "currentColor", "stroke-width", "1.5"], [1, "empty-title"], ["routerLink", "/home", 1, "back-link"], [1, "clients-list"], ["class", "client-block", 4, "ngFor", "ngForOf"], [1, "client-block"], [1, "client-header"], [1, "client-info"], [1, "client-name", 3, "routerLink"], [1, "client-phone"], [1, "groups-table-wrap"], [1, "groups-table"], [3, "expiring-soon", "notified", 4, "ngFor", "ngForOf"], [1, "days-badge"], [1, "status-badge"], ["buttonType", "primary", "size", "small", 3, "onClick", 4, "ngIf"], ["class", "notified-label", 4, "ngIf"], ["buttonType", "primary", "size", "small", 3, "onClick"], ["viewBox", "0 0 24 24", "fill", "none", 1, "wa-icon"], ["d", "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z", "fill", "currentColor"], ["d", "M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z", "fill", "currentColor"], [1, "notified-label"], [1, "notify-content"], ["class", "template-section", 4, "ngIf"], ["class", "template-not-found", 4, "ngIf"], [1, "phone-section"], [1, "section-label"], [1, "phone-display"], ["class", "group-info", 4, "ngIf"], ["class", "message-section", 4, "ngIf"], [1, "notify-actions"], ["buttonType", "primary", "size", "large", "class", "send-btn", 3, "disabled", "click", 4, "ngIf"], [1, "template-section"], [1, "template-card"], [1, "template-name"], [1, "template-content"], [1, "template-not-found"], [1, "group-info"], [1, "group-summary"], [1, "message-section"], [1, "message-box"], ["buttonType", "primary", "size", "large", 1, "send-btn", 3, "click", "disabled"]], template: function BonusExpiringPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275template(2, BonusExpiringPageComponent_div_2_Template, 2, 2, "div", 2)(3, BonusExpiringPageComponent_div_3_Template, 3, 2, "div", 3);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "app-modal", 4);
      \u0275\u0275listener("closed", function BonusExpiringPageComponent_Template_app_modal_closed_4_listener() {
        return ctx.closeNotifyModal();
      });
      \u0275\u0275template(5, BonusExpiringPageComponent_div_5_Template, 13, 8, "div", 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("visible", ctx.showNotifyModal)("showCloseButton", true);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedClient && ctx.selectedGroup);
    }
  }, dependencies: [
    CommonModule,
    NgForOf,
    NgIf,
    RouterModule,
    RouterLink,
    ModalComponent,
    ButtonComponent,
    LoaderComponent,
    PhoneFormatPipe
  ], styles: ['\n\n.page-wrapper[_ngcontent-%COMP%] {\n  min-height: 100%;\n  margin: -2rem;\n  padding: 2rem;\n  background: #f8fafc;\n}\n.page-content[_ngcontent-%COMP%] {\n  max-width: 900px;\n  margin: 0 auto;\n}\n.page-loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  min-height: 40vh;\n  align-items: center;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 4rem 2rem;\n  background: white;\n  border-radius: 16px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);\n}\n.empty-state[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  color: #94a3b8;\n  margin-bottom: 1rem;\n}\n.empty-title[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  color: #64748b;\n  margin: 0 0 1.5rem 0;\n}\n.back-link[_ngcontent-%COMP%] {\n  color: #16A34A;\n  font-weight: 600;\n  text-decoration: none;\n}\n.back-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.clients-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.client-block[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  padding: 1.25rem;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n}\n.client-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n}\n.client-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.client-name[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #0f172a;\n  text-decoration: none;\n}\n.client-name[_ngcontent-%COMP%]:hover {\n  color: #16A34A;\n}\n.client-phone[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #64748b;\n  font-family: "Courier New", monospace;\n}\n.wa-icon[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n}\n.groups-table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.groups-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.875rem;\n}\n.groups-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 0.75rem;\n  background: #f8fafc;\n  color: #64748b;\n  font-weight: 600;\n  border-bottom: 1px solid #e2e8f0;\n}\n.groups-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  border-bottom: 1px solid #f1f5f9;\n}\n.groups-table[_ngcontent-%COMP%]   tr.expiring-soon[_ngcontent-%COMP%] {\n  background: #fef3c7;\n}\n.groups-table[_ngcontent-%COMP%]   tr.notified[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n}\n.days-badge[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.5rem;\n  border-radius: 8px;\n  background: #dcfce7;\n  color: #166534;\n  font-weight: 500;\n}\n.days-badge.urgent[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.status-badge[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  font-weight: 500;\n  color: #92400e;\n}\n.status-badge.notified[_ngcontent-%COMP%] {\n  color: #166534;\n}\n.notified-label[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  font-size: 0.875rem;\n}\n.notify-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n.section-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #475569;\n  display: block;\n  margin-bottom: 0.5rem;\n}\n.template-card[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 1rem;\n}\n.template-name[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem 0;\n  font-size: 1rem;\n  font-weight: 600;\n  color: #1f2937;\n}\n.template-content[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.9375rem;\n  color: #475569;\n  white-space: pre-wrap;\n}\n.template-not-found[_ngcontent-%COMP%] {\n  padding: 1rem;\n  background: #fef3c7;\n  border-radius: 12px;\n  color: #92400e;\n  font-size: 0.875rem;\n}\n.phone-display[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n  background: #f8fafc;\n  border-radius: 10px;\n  font-family: "Courier New", monospace;\n  font-weight: 500;\n}\n.group-info[_ngcontent-%COMP%] {\n  padding: 0.5rem 0;\n}\n.group-summary[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #64748b;\n}\n.message-box[_ngcontent-%COMP%] {\n  padding: 1rem;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  font-size: 0.9375rem;\n  white-space: pre-wrap;\n  max-height: 200px;\n  overflow-y: auto;\n}\n.notify-actions[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n.send-btn[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.send-btn[_ngcontent-%COMP%]     button {\n  width: 100%;\n  justify-content: center;\n}\n/*# sourceMappingURL=bonus-expiring-page.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BonusExpiringPageComponent, [{
    type: Component,
    args: [{ selector: "app-bonus-expiring-page", standalone: true, imports: [
      CommonModule,
      RouterModule,
      ModalComponent,
      ButtonComponent,
      LoaderComponent,
      PhoneFormatPipe
    ], template: `
    <div class="page-wrapper">
      <div class="page-content">
        <div class="page-loading-container" *ngIf="isLoading">
          <app-loader [visible]="true" [overlay]="false" type="logo" size="large"></app-loader>
        </div>

        <div *ngIf="!isLoading">
          <div class="empty-state" *ngIf="!data || data.clients.length === 0">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" stroke-width="1.5"/>
            </svg>
            <p class="empty-title">\u041D\u0435\u0442 \u0431\u043E\u043D\u0443\u0441\u043E\u0432, \u0438\u0441\u0442\u0435\u043A\u0430\u044E\u0449\u0438\u0445 \u0432 \u0431\u043B\u0438\u0436\u0430\u0439\u0448\u0438\u0435 7 \u0434\u043D\u0435\u0439</p>
            <a routerLink="/home" class="back-link">\u041D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E</a>
          </div>

          <div *ngIf="data && data.clients.length > 0" class="clients-list">
            <div class="client-block" *ngFor="let client of data.clients">
              <div class="client-header">
                <div class="client-info">
                  <a [routerLink]="['/clients', client.clientId]" class="client-name">{{ client.clientName }}</a>
                  <span class="client-phone">{{ client.phone | phoneFormat }}</span>
                </div>
              </div>
              <div class="groups-table-wrap">
                <table class="groups-table">
                  <thead>
                    <tr>
                      <th>\u0418\u0441\u0442\u0435\u043A\u0430\u0435\u0442</th>
                      <th>\u041E\u0441\u0442\u0430\u043B\u043E\u0441\u044C \u0434\u043D\u0435\u0439</th>
                      <th>\u0421\u0443\u043C\u043C\u0430 (\u043E\u0441\u0442\u0430\u0442\u043E\u043A)</th>
                      <th>\u0421\u0442\u0430\u0442\u0443\u0441</th>
                      <th>\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr *ngFor="let group of client.expiryGroups" [class.expiring-soon]="group.daysLeft <= 3" [class.notified]="!!group.notifiedAt">
                      <td>{{ formatDate(group.expiryDate) }}</td>
                      <td>
                        <span class="days-badge" [class.urgent]="group.daysLeft <= 3">{{ group.daysLeft }} {{ daysText(group.daysLeft) }}</span>
                      </td>
                      <td>{{ formatAmount(group.totalRemainingAmount) }} \u20B8{{ group.items.length > 1 ? ' (' + group.items.length + ' \u043D\u0430\u0447\u0438\u0441\u043B.)' : '' }}</td>
                      <td>
                        <span class="status-badge" [class.notified]="!!group.notifiedAt">{{ group.notifiedAt ? '\u0423\u0432\u0435\u0434\u043E\u043C\u043B\u0451\u043D' : '\u041D\u0443\u0436\u043D\u043E \u0443\u0432\u0435\u0434\u043E\u043C\u0438\u0442\u044C' }}</span>
                      </td>
                      <td>
                        <app-button
                          *ngIf="!group.notifiedAt"
                          buttonType="primary"
                          size="small"
                          (onClick)="openNotifyModal(client, group)">
                          <svg class="wa-icon" viewBox="0 0 24 24" fill="none">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" fill="currentColor"/>
                            <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" fill="currentColor"/>
                          </svg>
                          WhatsApp
                        </app-button>
                        <span *ngIf="group.notifiedAt" class="notified-label">\u2014</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Notify modal (for one expiry group) -->
    <app-modal
      [visible]="showNotifyModal"
      title="\u0423\u0432\u0435\u0434\u043E\u043C\u0438\u0442\u044C \u043E \u0438\u0441\u0442\u0435\u0447\u0435\u043D\u0438\u0438 \u0431\u043E\u043D\u0443\u0441\u043E\u0432"
      [showCloseButton]="true"
      (closed)="closeNotifyModal()">
      <div class="notify-content" *ngIf="selectedClient && selectedGroup">
        <div class="template-section" *ngIf="selectedTemplate">
          <label class="section-label">\u0428\u0430\u0431\u043B\u043E\u043D \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F</label>
          <div class="template-card">
            <h4 class="template-name">{{ selectedTemplate.name }}</h4>
            <p class="template-content">{{ selectedTemplate.content }}</p>
          </div>
        </div>
        <div class="template-not-found" *ngIf="!selectedTemplate && !loadingTemplate">
          <span>\u0428\u0430\u0431\u043B\u043E\u043D \u0442\u0438\u043F\u0430 BONUS_EXPIRY \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D. \u0421\u043E\u0437\u0434\u0430\u0439\u0442\u0435 \u0435\u0433\u043E \u0432 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430\u0445.</span>
        </div>
        <div class="phone-section">
          <label class="section-label">\u041D\u043E\u043C\u0435\u0440 \u043F\u043E\u043B\u0443\u0447\u0430\u0442\u0435\u043B\u044F</label>
          <div class="phone-display">{{ selectedClient.phone | phoneFormat }}</div>
        </div>
        <div class="group-info" *ngIf="selectedGroup">
          <span class="group-summary">\u0418\u0441\u0442\u0435\u043A\u0430\u0435\u0442 {{ formatDate(selectedGroup.expiryDate) }} \xB7 {{ formatAmount(selectedGroup.totalRemainingAmount) }} \u20B8</span>
        </div>
        <div class="message-section" *ngIf="selectedTemplate">
          <label class="section-label">\u0421\u043E\u0434\u0435\u0440\u0436\u0438\u043C\u043E\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F</label>
          <div class="message-box">{{ populatedContent }}</div>
        </div>
        <div class="notify-actions">
          <app-button
            *ngIf="selectedTemplate"
            buttonType="primary"
            size="large"
            class="send-btn"
            (click)="sendAndOpenWhatsApp()"
            [disabled]="isSending">
            <svg class="wa-icon" viewBox="0 0 24 24" fill="none">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" fill="currentColor"/>
              <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" fill="currentColor"/>
            </svg>
            {{ isSending ? '\u041E\u0442\u043F\u0440\u0430\u0432\u043A\u0430...' : '\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0432 WhatsApp' }}
          </app-button>
        </div>
      </div>
    </app-modal>
  `, styles: ['/* angular:styles/component:css;74eb9dc647dfef28cfa5d84b8da298207e48063ccb40dc6f1cb60b2d61af0550;/Users/baglan/repo/westwood/westwood-frontend/src/app/features/bonus-expiring/pages/bonus-expiring-page/bonus-expiring-page.component.ts */\n.page-wrapper {\n  min-height: 100%;\n  margin: -2rem;\n  padding: 2rem;\n  background: #f8fafc;\n}\n.page-content {\n  max-width: 900px;\n  margin: 0 auto;\n}\n.page-loading-container {\n  display: flex;\n  justify-content: center;\n  min-height: 40vh;\n  align-items: center;\n}\n.empty-state {\n  text-align: center;\n  padding: 4rem 2rem;\n  background: white;\n  border-radius: 16px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);\n}\n.empty-state svg {\n  width: 64px;\n  height: 64px;\n  color: #94a3b8;\n  margin-bottom: 1rem;\n}\n.empty-title {\n  font-size: 1.125rem;\n  color: #64748b;\n  margin: 0 0 1.5rem 0;\n}\n.back-link {\n  color: #16A34A;\n  font-weight: 600;\n  text-decoration: none;\n}\n.back-link:hover {\n  text-decoration: underline;\n}\n.clients-list {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.client-block {\n  background: white;\n  border-radius: 16px;\n  padding: 1.25rem;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n}\n.client-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n}\n.client-info {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.client-name {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #0f172a;\n  text-decoration: none;\n}\n.client-name:hover {\n  color: #16A34A;\n}\n.client-phone {\n  font-size: 0.875rem;\n  color: #64748b;\n  font-family: "Courier New", monospace;\n}\n.wa-icon {\n  width: 18px;\n  height: 18px;\n}\n.groups-table-wrap {\n  overflow-x: auto;\n}\n.groups-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.875rem;\n}\n.groups-table th {\n  text-align: left;\n  padding: 0.75rem;\n  background: #f8fafc;\n  color: #64748b;\n  font-weight: 600;\n  border-bottom: 1px solid #e2e8f0;\n}\n.groups-table td {\n  padding: 0.75rem;\n  border-bottom: 1px solid #f1f5f9;\n}\n.groups-table tr.expiring-soon {\n  background: #fef3c7;\n}\n.groups-table tr.notified {\n  background: #f0fdf4;\n}\n.days-badge {\n  padding: 0.25rem 0.5rem;\n  border-radius: 8px;\n  background: #dcfce7;\n  color: #166534;\n  font-weight: 500;\n}\n.days-badge.urgent {\n  background: #fef3c7;\n  color: #92400e;\n}\n.status-badge {\n  font-size: 0.8125rem;\n  font-weight: 500;\n  color: #92400e;\n}\n.status-badge.notified {\n  color: #166534;\n}\n.notified-label {\n  color: #94a3b8;\n  font-size: 0.875rem;\n}\n.notify-content {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n.section-label {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #475569;\n  display: block;\n  margin-bottom: 0.5rem;\n}\n.template-card {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 1rem;\n}\n.template-name {\n  margin: 0 0 0.5rem 0;\n  font-size: 1rem;\n  font-weight: 600;\n  color: #1f2937;\n}\n.template-content {\n  margin: 0;\n  font-size: 0.9375rem;\n  color: #475569;\n  white-space: pre-wrap;\n}\n.template-not-found {\n  padding: 1rem;\n  background: #fef3c7;\n  border-radius: 12px;\n  color: #92400e;\n  font-size: 0.875rem;\n}\n.phone-display {\n  padding: 0.75rem 1rem;\n  background: #f8fafc;\n  border-radius: 10px;\n  font-family: "Courier New", monospace;\n  font-weight: 500;\n}\n.group-info {\n  padding: 0.5rem 0;\n}\n.group-summary {\n  font-size: 0.875rem;\n  color: #64748b;\n}\n.message-box {\n  padding: 1rem;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  font-size: 0.9375rem;\n  white-space: pre-wrap;\n  max-height: 200px;\n  overflow-y: auto;\n}\n.notify-actions {\n  margin-top: 0.5rem;\n}\n.send-btn {\n  width: 100%;\n}\n.send-btn ::ng-deep button {\n  width: 100%;\n  justify-content: center;\n}\n/*# sourceMappingURL=bonus-expiring-page.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BonusExpiringPageComponent, { className: "BonusExpiringPageComponent", filePath: "src/app/features/bonus-expiring/pages/bonus-expiring-page/bonus-expiring-page.component.ts", lineNumber: 183 });
})();
export {
  BonusExpiringPageComponent
};
//# sourceMappingURL=chunk-7P7FZJRL.js.map
