import {
  Router,
  inject
} from "./chunk-NKSGOSP5.js";

// src/app/core/guards/activation.guard.ts
var activationGuard = (route) => {
  const router = inject(Router);
  const token = route.queryParams["token"];
  if (!token) {
    router.navigate(["/auth/login"], { queryParams: { error: "missing_token" } });
    return false;
  }
  return true;
};

// src/app/core/guards/reset-password.guard.ts
var resetPasswordGuard = (route) => {
  const router = inject(Router);
  const token = route.queryParams["token"];
  if (!token) {
    router.navigate(["/auth/login"], { queryParams: { error: "missing_token" } });
    return false;
  }
  return true;
};

// src/app/features/auth/auth.routes.ts
var AUTH_ROUTES = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  },
  {
    path: "login",
    loadComponent: () => import("./chunk-5IFE2EKS.js").then((m) => m.LoginPageComponent),
    title: "Login"
  },
  // Register route disabled - app is private, users should only be invited
  // {
  //   path: 'register',
  //   loadComponent: () => import('./pages/register-page/register-page.component').then(m => m.RegisterPageComponent)
  // },
  {
    path: "activation",
    loadComponent: () => import("./chunk-LZYOVKRP.js").then((m) => m.ActivationPageComponent),
    canActivate: [activationGuard],
    title: "Activation"
  },
  {
    path: "forgot-password",
    loadComponent: () => import("./chunk-IJQHNA55.js").then((m) => m.ForgotPasswordPageComponent),
    title: "Forgot Password"
  },
  {
    path: "reset-password",
    loadComponent: () => import("./chunk-VLSMPUGB.js").then((m) => m.ResetPasswordPageComponent),
    canActivate: [resetPasswordGuard],
    title: "Reset Password"
  }
];
export {
  AUTH_ROUTES
};
//# sourceMappingURL=chunk-O7DGRDNA.js.map
