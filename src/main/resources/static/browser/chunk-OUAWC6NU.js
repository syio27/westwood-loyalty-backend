import {
  Pipe,
  setClassMetadata,
  ɵɵdefinePipe
} from "./chunk-LQF2QQXA.js";

// src/app/shared/pipes/phone-format.pipe.ts
var PhoneFormatPipe = class _PhoneFormatPipe {
  transform(phone) {
    if (!phone) {
      return "";
    }
    let normalized = "";
    let hasPlus = false;
    for (const char of phone) {
      if (char === "+" && !hasPlus && normalized.length === 0) {
        normalized += char;
        hasPlus = true;
      } else if (/\d/.test(char)) {
        normalized += char;
      }
    }
    const digits = normalized.startsWith("+") ? normalized.substring(1) : normalized;
    if (digits.length < 10) {
      return normalized.startsWith("+") ? normalized : "+" + normalized;
    }
    if (digits.length === 11 && (digits.startsWith("7") || digits.startsWith("8"))) {
      const countryCode = "7";
      const rest = digits.substring(1);
      return `+${countryCode} ${rest.substring(0, 3)} ${rest.substring(3, 6)} ${rest.substring(6)}`;
    }
    if (digits.length === 10) {
      return `+7 ${digits.substring(0, 3)} ${digits.substring(3, 6)} ${digits.substring(6)}`;
    }
    if (digits.length > 3) {
      let formatted = "+" + digits.charAt(0) + " ";
      const remaining = digits.substring(1);
      for (let i = 0; i < remaining.length; i++) {
        if (i > 0 && i % 3 === 0 && i < remaining.length) {
          formatted += " ";
        }
        formatted += remaining.charAt(i);
      }
      return formatted;
    }
    return normalized.startsWith("+") ? normalized : "+" + normalized;
  }
  static \u0275fac = function PhoneFormatPipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PhoneFormatPipe)();
  };
  static \u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "phoneFormat", type: _PhoneFormatPipe, pure: true });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PhoneFormatPipe, [{
    type: Pipe,
    args: [{
      name: "phoneFormat",
      standalone: true
    }]
  }], null, null);
})();

export {
  PhoneFormatPipe
};
//# sourceMappingURL=chunk-OUAWC6NU.js.map
