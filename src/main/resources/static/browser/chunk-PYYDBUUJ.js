import {
  createAction,
  props
} from "./chunk-PS25SXEO.js";

// src/app/core/store/auth/auth.actions.ts
var initAuth = createAction("[Auth] Init Auth");
var initAuthSuccess = createAction("[Auth] Init Auth Success", props());
var initAuthFailure = createAction("[Auth] Init Auth Failure");
var login = createAction("[Auth] Login", props());
var loginSuccess = createAction("[Auth] Login Success", props());
var loginFailure = createAction("[Auth] Login Failure", props());
var register = createAction("[Auth] Register", props());
var registerSuccess = createAction("[Auth] Register Success", props());
var registerFailure = createAction("[Auth] Register Failure", props());
var activateAccount = createAction("[Auth] Activate Account", props());
var activateAccountSuccess = createAction("[Auth] Activate Account Success", props());
var activateAccountFailure = createAction("[Auth] Activate Account Failure", props());
var logout = createAction("[Auth] Logout");
var logoutSuccess = createAction("[Auth] Logout Success");
var logoutFailure = createAction("[Auth] Logout Failure", props());
var sessionExpired = createAction("[Auth] Session Expired");
var clearError = createAction("[Auth] Clear Error");
var forgotPassword = createAction("[Auth] Forgot Password", props());
var forgotPasswordSuccess = createAction("[Auth] Forgot Password Success");
var forgotPasswordFailure = createAction("[Auth] Forgot Password Failure", props());
var resetPassword = createAction("[Auth] Reset Password", props());
var resetPasswordSuccess = createAction("[Auth] Reset Password Success", props());
var resetPasswordFailure = createAction("[Auth] Reset Password Failure", props());
var updateUser = createAction("[Auth] Update User", props());

export {
  initAuth,
  initAuthSuccess,
  initAuthFailure,
  login,
  loginSuccess,
  loginFailure,
  register,
  registerSuccess,
  registerFailure,
  activateAccount,
  activateAccountSuccess,
  activateAccountFailure,
  logout,
  logoutSuccess,
  logoutFailure,
  sessionExpired,
  clearError,
  forgotPassword,
  forgotPasswordSuccess,
  forgotPasswordFailure,
  resetPassword,
  resetPasswordSuccess,
  resetPasswordFailure,
  updateUser
};
//# sourceMappingURL=chunk-PYYDBUUJ.js.map
