import {
  Actions,
  createEffect,
  ofType,
  provideEffects
} from "./chunk-GNWOZS3I.js";
import {
  activateAccount,
  activateAccountFailure,
  activateAccountSuccess,
  clearError,
  forgotPassword,
  forgotPasswordFailure,
  forgotPasswordSuccess,
  initAuth,
  initAuthFailure,
  initAuthSuccess,
  login,
  loginFailure,
  loginSuccess,
  logout,
  logoutFailure,
  logoutSuccess,
  register,
  registerFailure,
  registerSuccess,
  resetPassword,
  resetPasswordFailure,
  resetPasswordSuccess,
  sessionExpired,
  updateUser
} from "./chunk-PYYDBUUJ.js";
import {
  environment
} from "./chunk-6FFMNYG3.js";
import {
  ToastService
} from "./chunk-UB4WPUR7.js";
import {
  ActionsSubject,
  INIT,
  INITIAL_STATE,
  ReducerManagerDispatcher,
  ReducerObservable,
  ScannedActionsSubject,
  StateObservable,
  Store,
  UPDATE,
  createReducer,
  on,
  provideStore,
  selectIsAuthenticated,
  selectIsInitialized,
  toSignal
} from "./chunk-PS25SXEO.js";
import {
  IconButtonComponent
} from "./chunk-GA36L6BH.js";
import {
  APP_INITIALIZER,
  CommonModule,
  Component,
  EMPTY,
  ErrorHandler,
  EventEmitter,
  HttpClient,
  Inject,
  Injectable,
  InjectionToken,
  Input,
  NgForOf,
  NgIf,
  NgModule,
  NgZone,
  Observable,
  Output,
  ReplaySubject,
  Router,
  RouterOutlet,
  Title,
  TitleStrategy,
  __spreadProps,
  __spreadValues,
  bootstrapApplication,
  catchError,
  combineLatest,
  concatMap,
  debounceTime,
  delay,
  exhaustMap,
  filter,
  inject,
  isDevMode,
  makeEnvironmentProviders,
  map,
  merge,
  observeOn,
  of,
  provideHttpClient,
  provideRouter,
  queueScheduler,
  scan,
  setClassMetadata,
  share,
  skip,
  switchMap,
  take,
  takeUntil,
  tap,
  throwError,
  timeout,
  withInMemoryScrolling,
  withInterceptors,
  withLatestFrom,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-LQF2QQXA.js";

// node_modules/@ngrx/store-devtools/fesm2022/ngrx-store-devtools.mjs
var PERFORM_ACTION = "PERFORM_ACTION";
var REFRESH = "REFRESH";
var RESET = "RESET";
var ROLLBACK = "ROLLBACK";
var COMMIT = "COMMIT";
var SWEEP = "SWEEP";
var TOGGLE_ACTION = "TOGGLE_ACTION";
var SET_ACTIONS_ACTIVE = "SET_ACTIONS_ACTIVE";
var JUMP_TO_STATE = "JUMP_TO_STATE";
var JUMP_TO_ACTION = "JUMP_TO_ACTION";
var IMPORT_STATE = "IMPORT_STATE";
var LOCK_CHANGES = "LOCK_CHANGES";
var PAUSE_RECORDING = "PAUSE_RECORDING";
var PerformAction = class {
  constructor(action, timestamp) {
    this.action = action;
    this.timestamp = timestamp;
    this.type = PERFORM_ACTION;
    if (typeof action.type === "undefined") {
      throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
    }
  }
};
var Refresh = class {
  constructor() {
    this.type = REFRESH;
  }
};
var Reset = class {
  constructor(timestamp) {
    this.timestamp = timestamp;
    this.type = RESET;
  }
};
var Rollback = class {
  constructor(timestamp) {
    this.timestamp = timestamp;
    this.type = ROLLBACK;
  }
};
var Commit = class {
  constructor(timestamp) {
    this.timestamp = timestamp;
    this.type = COMMIT;
  }
};
var Sweep = class {
  constructor() {
    this.type = SWEEP;
  }
};
var ToggleAction = class {
  constructor(id) {
    this.id = id;
    this.type = TOGGLE_ACTION;
  }
};
var JumpToState = class {
  constructor(index) {
    this.index = index;
    this.type = JUMP_TO_STATE;
  }
};
var JumpToAction = class {
  constructor(actionId) {
    this.actionId = actionId;
    this.type = JUMP_TO_ACTION;
  }
};
var ImportState = class {
  constructor(nextLiftedState) {
    this.nextLiftedState = nextLiftedState;
    this.type = IMPORT_STATE;
  }
};
var LockChanges = class {
  constructor(status) {
    this.status = status;
    this.type = LOCK_CHANGES;
  }
};
var PauseRecording = class {
  constructor(status) {
    this.status = status;
    this.type = PAUSE_RECORDING;
  }
};
var StoreDevtoolsConfig = class {
  constructor() {
    this.maxAge = false;
  }
};
var STORE_DEVTOOLS_CONFIG = new InjectionToken("@ngrx/store-devtools Options");
var INITIAL_OPTIONS = new InjectionToken("@ngrx/store-devtools Initial Config");
function noMonitor() {
  return null;
}
var DEFAULT_NAME = "NgRx Store DevTools";
function createConfig(optionsInput) {
  const DEFAULT_OPTIONS = {
    maxAge: false,
    monitor: noMonitor,
    actionSanitizer: void 0,
    stateSanitizer: void 0,
    name: DEFAULT_NAME,
    serialize: false,
    logOnly: false,
    autoPause: false,
    trace: false,
    traceLimit: 75,
    // Add all features explicitly. This prevent buggy behavior for
    // options like "lock" which might otherwise not show up.
    features: {
      pause: true,
      // Start/pause recording of dispatched actions
      lock: true,
      // Lock/unlock dispatching actions and side effects
      persist: true,
      // Persist states on page reloading
      export: true,
      // Export history of actions in a file
      import: "custom",
      // Import history of actions from a file
      jump: true,
      // Jump back and forth (time travelling)
      skip: true,
      // Skip (cancel) actions
      reorder: true,
      // Drag and drop actions in the history list
      dispatch: true,
      // Dispatch custom actions or action creators
      test: true
      // Generate tests for the selected actions
    },
    connectInZone: false
  };
  const options = typeof optionsInput === "function" ? optionsInput() : optionsInput;
  const logOnly = options.logOnly ? {
    pause: true,
    export: true,
    test: true
  } : false;
  const features = options.features || logOnly || DEFAULT_OPTIONS.features;
  if (features.import === true) {
    features.import = "custom";
  }
  const config = Object.assign({}, DEFAULT_OPTIONS, {
    features
  }, options);
  if (config.maxAge && config.maxAge < 2) {
    throw new Error(`Devtools 'maxAge' cannot be less than 2, got ${config.maxAge}`);
  }
  return config;
}
function difference(first, second) {
  return first.filter((item) => second.indexOf(item) < 0);
}
function unliftState(liftedState) {
  const {
    computedStates,
    currentStateIndex
  } = liftedState;
  if (currentStateIndex >= computedStates.length) {
    const {
      state: state2
    } = computedStates[computedStates.length - 1];
    return state2;
  }
  const {
    state
  } = computedStates[currentStateIndex];
  return state;
}
function liftAction(action) {
  return new PerformAction(action, +Date.now());
}
function sanitizeActions(actionSanitizer, actions) {
  return Object.keys(actions).reduce((sanitizedActions, actionIdx) => {
    const idx = Number(actionIdx);
    sanitizedActions[idx] = sanitizeAction(actionSanitizer, actions[idx], idx);
    return sanitizedActions;
  }, {});
}
function sanitizeAction(actionSanitizer, action, actionIdx) {
  return __spreadProps(__spreadValues({}, action), {
    action: actionSanitizer(action.action, actionIdx)
  });
}
function sanitizeStates(stateSanitizer, states) {
  return states.map((computedState, idx) => ({
    state: sanitizeState(stateSanitizer, computedState.state, idx),
    error: computedState.error
  }));
}
function sanitizeState(stateSanitizer, state, stateIdx) {
  return stateSanitizer(state, stateIdx);
}
function shouldFilterActions(config) {
  return config.predicate || config.actionsSafelist || config.actionsBlocklist;
}
function filterLiftedState(liftedState, predicate, safelist, blocklist) {
  const filteredStagedActionIds = [];
  const filteredActionsById = {};
  const filteredComputedStates = [];
  liftedState.stagedActionIds.forEach((id, idx) => {
    const liftedAction = liftedState.actionsById[id];
    if (!liftedAction) return;
    if (idx && isActionFiltered(liftedState.computedStates[idx], liftedAction, predicate, safelist, blocklist)) {
      return;
    }
    filteredActionsById[id] = liftedAction;
    filteredStagedActionIds.push(id);
    filteredComputedStates.push(liftedState.computedStates[idx]);
  });
  return __spreadProps(__spreadValues({}, liftedState), {
    stagedActionIds: filteredStagedActionIds,
    actionsById: filteredActionsById,
    computedStates: filteredComputedStates
  });
}
function isActionFiltered(state, action, predicate, safelist, blockedlist) {
  const predicateMatch = predicate && !predicate(state, action.action);
  const safelistMatch = safelist && !action.action.type.match(safelist.map((s) => escapeRegExp(s)).join("|"));
  const blocklistMatch = blockedlist && action.action.type.match(blockedlist.map((s) => escapeRegExp(s)).join("|"));
  return predicateMatch || safelistMatch || blocklistMatch;
}
function escapeRegExp(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function injectZoneConfig(connectInZone) {
  const ngZone = connectInZone ? inject(NgZone) : null;
  return {
    ngZone,
    connectInZone
  };
}
var DevtoolsDispatcher = class _DevtoolsDispatcher extends ActionsSubject {
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275DevtoolsDispatcher_BaseFactory;
      return function DevtoolsDispatcher_Factory(__ngFactoryType__) {
        return (\u0275DevtoolsDispatcher_BaseFactory || (\u0275DevtoolsDispatcher_BaseFactory = \u0275\u0275getInheritedFactory(_DevtoolsDispatcher)))(__ngFactoryType__ || _DevtoolsDispatcher);
      };
    })();
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _DevtoolsDispatcher,
      factory: _DevtoolsDispatcher.\u0275fac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DevtoolsDispatcher, [{
    type: Injectable
  }], null, null);
})();
var ExtensionActionTypes = {
  START: "START",
  DISPATCH: "DISPATCH",
  STOP: "STOP",
  ACTION: "ACTION"
};
var REDUX_DEVTOOLS_EXTENSION = new InjectionToken("@ngrx/store-devtools Redux Devtools Extension");
var DevtoolsExtension = class _DevtoolsExtension {
  constructor(devtoolsExtension, config, dispatcher) {
    this.config = config;
    this.dispatcher = dispatcher;
    this.zoneConfig = injectZoneConfig(this.config.connectInZone);
    this.devtoolsExtension = devtoolsExtension;
    this.createActionStreams();
  }
  notify(action, state) {
    if (!this.devtoolsExtension) {
      return;
    }
    if (action.type === PERFORM_ACTION) {
      if (state.isLocked || state.isPaused) {
        return;
      }
      const currentState = unliftState(state);
      if (shouldFilterActions(this.config) && isActionFiltered(currentState, action, this.config.predicate, this.config.actionsSafelist, this.config.actionsBlocklist)) {
        return;
      }
      const sanitizedState = this.config.stateSanitizer ? sanitizeState(this.config.stateSanitizer, currentState, state.currentStateIndex) : currentState;
      const sanitizedAction = this.config.actionSanitizer ? sanitizeAction(this.config.actionSanitizer, action, state.nextActionId) : action;
      this.sendToReduxDevtools(() => this.extensionConnection.send(sanitizedAction, sanitizedState));
    } else {
      const sanitizedLiftedState = __spreadProps(__spreadValues({}, state), {
        stagedActionIds: state.stagedActionIds,
        actionsById: this.config.actionSanitizer ? sanitizeActions(this.config.actionSanitizer, state.actionsById) : state.actionsById,
        computedStates: this.config.stateSanitizer ? sanitizeStates(this.config.stateSanitizer, state.computedStates) : state.computedStates
      });
      this.sendToReduxDevtools(() => this.devtoolsExtension.send(null, sanitizedLiftedState, this.getExtensionConfig(this.config)));
    }
  }
  createChangesObservable() {
    if (!this.devtoolsExtension) {
      return EMPTY;
    }
    return new Observable((subscriber) => {
      const connection = this.zoneConfig.connectInZone ? (
        // To reduce change detection cycles, we need to run the `connect` method
        // outside of the Angular zone. The `connect` method adds a `message`
        // event listener to communicate with an extension using `window.postMessage`
        // and handle message events.
        this.zoneConfig.ngZone.runOutsideAngular(() => this.devtoolsExtension.connect(this.getExtensionConfig(this.config)))
      ) : this.devtoolsExtension.connect(this.getExtensionConfig(this.config));
      this.extensionConnection = connection;
      connection.init();
      connection.subscribe((change) => subscriber.next(change));
      return connection.unsubscribe;
    });
  }
  createActionStreams() {
    const changes$ = this.createChangesObservable().pipe(share());
    const start$ = changes$.pipe(filter((change) => change.type === ExtensionActionTypes.START));
    const stop$ = changes$.pipe(filter((change) => change.type === ExtensionActionTypes.STOP));
    const liftedActions$ = changes$.pipe(filter((change) => change.type === ExtensionActionTypes.DISPATCH), map((change) => this.unwrapAction(change.payload)), concatMap((action) => {
      if (action.type === IMPORT_STATE) {
        return this.dispatcher.pipe(filter((action2) => action2.type === UPDATE), timeout(1e3), debounceTime(1e3), map(() => action), catchError(() => of(action)), take(1));
      } else {
        return of(action);
      }
    }));
    const actions$ = changes$.pipe(filter((change) => change.type === ExtensionActionTypes.ACTION), map((change) => this.unwrapAction(change.payload)));
    const actionsUntilStop$ = actions$.pipe(takeUntil(stop$));
    const liftedUntilStop$ = liftedActions$.pipe(takeUntil(stop$));
    this.start$ = start$.pipe(takeUntil(stop$));
    this.actions$ = this.start$.pipe(switchMap(() => actionsUntilStop$));
    this.liftedActions$ = this.start$.pipe(switchMap(() => liftedUntilStop$));
  }
  unwrapAction(action) {
    return typeof action === "string" ? (0, eval)(`(${action})`) : action;
  }
  getExtensionConfig(config) {
    const extensionOptions = {
      name: config.name,
      features: config.features,
      serialize: config.serialize,
      autoPause: config.autoPause ?? false,
      trace: config.trace ?? false,
      traceLimit: config.traceLimit ?? 75
      // The action/state sanitizers are not added to the config
      // because sanitation is done in this class already.
      // It is done before sending it to the devtools extension for consistency:
      // - If we call extensionConnection.send(...),
      //   the extension would call the sanitizers.
      // - If we call devtoolsExtension.send(...) (aka full state update),
      //   the extension would NOT call the sanitizers, so we have to do it ourselves.
    };
    if (config.maxAge !== false) {
      extensionOptions.maxAge = config.maxAge;
    }
    return extensionOptions;
  }
  sendToReduxDevtools(send) {
    try {
      send();
    } catch (err) {
      console.warn("@ngrx/store-devtools: something went wrong inside the redux devtools", err);
    }
  }
  static {
    this.\u0275fac = function DevtoolsExtension_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DevtoolsExtension)(\u0275\u0275inject(REDUX_DEVTOOLS_EXTENSION), \u0275\u0275inject(STORE_DEVTOOLS_CONFIG), \u0275\u0275inject(DevtoolsDispatcher));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _DevtoolsExtension,
      factory: _DevtoolsExtension.\u0275fac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DevtoolsExtension, [{
    type: Injectable
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [REDUX_DEVTOOLS_EXTENSION]
    }]
  }, {
    type: StoreDevtoolsConfig,
    decorators: [{
      type: Inject,
      args: [STORE_DEVTOOLS_CONFIG]
    }]
  }, {
    type: DevtoolsDispatcher
  }], null);
})();
var INIT_ACTION = {
  type: INIT
};
var RECOMPUTE = "@ngrx/store-devtools/recompute";
var RECOMPUTE_ACTION = {
  type: RECOMPUTE
};
function computeNextEntry(reducer, action, state, error, errorHandler) {
  if (error) {
    return {
      state,
      error: "Interrupted by an error up the chain"
    };
  }
  let nextState = state;
  let nextError;
  try {
    nextState = reducer(state, action);
  } catch (err) {
    nextError = err.toString();
    errorHandler.handleError(err);
  }
  return {
    state: nextState,
    error: nextError
  };
}
function recomputeStates(computedStates, minInvalidatedStateIndex, reducer, committedState, actionsById, stagedActionIds, skippedActionIds, errorHandler, isPaused) {
  if (minInvalidatedStateIndex >= computedStates.length && computedStates.length === stagedActionIds.length) {
    return computedStates;
  }
  const nextComputedStates = computedStates.slice(0, minInvalidatedStateIndex);
  const lastIncludedActionId = stagedActionIds.length - (isPaused ? 1 : 0);
  for (let i = minInvalidatedStateIndex; i < lastIncludedActionId; i++) {
    const actionId = stagedActionIds[i];
    const action = actionsById[actionId].action;
    const previousEntry = nextComputedStates[i - 1];
    const previousState = previousEntry ? previousEntry.state : committedState;
    const previousError = previousEntry ? previousEntry.error : void 0;
    const shouldSkip = skippedActionIds.indexOf(actionId) > -1;
    const entry = shouldSkip ? previousEntry : computeNextEntry(reducer, action, previousState, previousError, errorHandler);
    nextComputedStates.push(entry);
  }
  if (isPaused) {
    nextComputedStates.push(computedStates[computedStates.length - 1]);
  }
  return nextComputedStates;
}
function liftInitialState(initialCommittedState, monitorReducer) {
  return {
    monitorState: monitorReducer(void 0, {}),
    nextActionId: 1,
    actionsById: {
      0: liftAction(INIT_ACTION)
    },
    stagedActionIds: [0],
    skippedActionIds: [],
    committedState: initialCommittedState,
    currentStateIndex: 0,
    computedStates: [],
    isLocked: false,
    isPaused: false
  };
}
function liftReducerWith(initialCommittedState, initialLiftedState, errorHandler, monitorReducer, options = {}) {
  return (reducer) => (liftedState, liftedAction) => {
    let {
      monitorState,
      actionsById,
      nextActionId,
      stagedActionIds,
      skippedActionIds,
      committedState,
      currentStateIndex,
      computedStates,
      isLocked,
      isPaused
    } = liftedState || initialLiftedState;
    if (!liftedState) {
      actionsById = Object.create(actionsById);
    }
    function commitExcessActions(n) {
      let excess = n;
      let idsToDelete = stagedActionIds.slice(1, excess + 1);
      for (let i = 0; i < idsToDelete.length; i++) {
        if (computedStates[i + 1].error) {
          excess = i;
          idsToDelete = stagedActionIds.slice(1, excess + 1);
          break;
        } else {
          delete actionsById[idsToDelete[i]];
        }
      }
      skippedActionIds = skippedActionIds.filter((id) => idsToDelete.indexOf(id) === -1);
      stagedActionIds = [0, ...stagedActionIds.slice(excess + 1)];
      committedState = computedStates[excess].state;
      computedStates = computedStates.slice(excess);
      currentStateIndex = currentStateIndex > excess ? currentStateIndex - excess : 0;
    }
    function commitChanges() {
      actionsById = {
        0: liftAction(INIT_ACTION)
      };
      nextActionId = 1;
      stagedActionIds = [0];
      skippedActionIds = [];
      committedState = computedStates[currentStateIndex].state;
      currentStateIndex = 0;
      computedStates = [];
    }
    let minInvalidatedStateIndex = 0;
    switch (liftedAction.type) {
      case LOCK_CHANGES: {
        isLocked = liftedAction.status;
        minInvalidatedStateIndex = Infinity;
        break;
      }
      case PAUSE_RECORDING: {
        isPaused = liftedAction.status;
        if (isPaused) {
          stagedActionIds = [...stagedActionIds, nextActionId];
          actionsById[nextActionId] = new PerformAction({
            type: "@ngrx/devtools/pause"
          }, +Date.now());
          nextActionId++;
          minInvalidatedStateIndex = stagedActionIds.length - 1;
          computedStates = computedStates.concat(computedStates[computedStates.length - 1]);
          if (currentStateIndex === stagedActionIds.length - 2) {
            currentStateIndex++;
          }
          minInvalidatedStateIndex = Infinity;
        } else {
          commitChanges();
        }
        break;
      }
      case RESET: {
        actionsById = {
          0: liftAction(INIT_ACTION)
        };
        nextActionId = 1;
        stagedActionIds = [0];
        skippedActionIds = [];
        committedState = initialCommittedState;
        currentStateIndex = 0;
        computedStates = [];
        break;
      }
      case COMMIT: {
        commitChanges();
        break;
      }
      case ROLLBACK: {
        actionsById = {
          0: liftAction(INIT_ACTION)
        };
        nextActionId = 1;
        stagedActionIds = [0];
        skippedActionIds = [];
        currentStateIndex = 0;
        computedStates = [];
        break;
      }
      case TOGGLE_ACTION: {
        const {
          id: actionId
        } = liftedAction;
        const index = skippedActionIds.indexOf(actionId);
        if (index === -1) {
          skippedActionIds = [actionId, ...skippedActionIds];
        } else {
          skippedActionIds = skippedActionIds.filter((id) => id !== actionId);
        }
        minInvalidatedStateIndex = stagedActionIds.indexOf(actionId);
        break;
      }
      case SET_ACTIONS_ACTIVE: {
        const {
          start,
          end,
          active
        } = liftedAction;
        const actionIds = [];
        for (let i = start; i < end; i++) actionIds.push(i);
        if (active) {
          skippedActionIds = difference(skippedActionIds, actionIds);
        } else {
          skippedActionIds = [...skippedActionIds, ...actionIds];
        }
        minInvalidatedStateIndex = stagedActionIds.indexOf(start);
        break;
      }
      case JUMP_TO_STATE: {
        currentStateIndex = liftedAction.index;
        minInvalidatedStateIndex = Infinity;
        break;
      }
      case JUMP_TO_ACTION: {
        const index = stagedActionIds.indexOf(liftedAction.actionId);
        if (index !== -1) currentStateIndex = index;
        minInvalidatedStateIndex = Infinity;
        break;
      }
      case SWEEP: {
        stagedActionIds = difference(stagedActionIds, skippedActionIds);
        skippedActionIds = [];
        currentStateIndex = Math.min(currentStateIndex, stagedActionIds.length - 1);
        break;
      }
      case PERFORM_ACTION: {
        if (isLocked) {
          return liftedState || initialLiftedState;
        }
        if (isPaused || liftedState && isActionFiltered(liftedState.computedStates[currentStateIndex], liftedAction, options.predicate, options.actionsSafelist, options.actionsBlocklist)) {
          const lastState = computedStates[computedStates.length - 1];
          computedStates = [...computedStates.slice(0, -1), computeNextEntry(reducer, liftedAction.action, lastState.state, lastState.error, errorHandler)];
          minInvalidatedStateIndex = Infinity;
          break;
        }
        if (options.maxAge && stagedActionIds.length === options.maxAge) {
          commitExcessActions(1);
        }
        if (currentStateIndex === stagedActionIds.length - 1) {
          currentStateIndex++;
        }
        const actionId = nextActionId++;
        actionsById[actionId] = liftedAction;
        stagedActionIds = [...stagedActionIds, actionId];
        minInvalidatedStateIndex = stagedActionIds.length - 1;
        break;
      }
      case IMPORT_STATE: {
        ({
          monitorState,
          actionsById,
          nextActionId,
          stagedActionIds,
          skippedActionIds,
          committedState,
          currentStateIndex,
          computedStates,
          isLocked,
          isPaused
        } = liftedAction.nextLiftedState);
        break;
      }
      case INIT: {
        minInvalidatedStateIndex = 0;
        if (options.maxAge && stagedActionIds.length > options.maxAge) {
          computedStates = recomputeStates(computedStates, minInvalidatedStateIndex, reducer, committedState, actionsById, stagedActionIds, skippedActionIds, errorHandler, isPaused);
          commitExcessActions(stagedActionIds.length - options.maxAge);
          minInvalidatedStateIndex = Infinity;
        }
        break;
      }
      case UPDATE: {
        const stateHasErrors = computedStates.filter((state) => state.error).length > 0;
        if (stateHasErrors) {
          minInvalidatedStateIndex = 0;
          if (options.maxAge && stagedActionIds.length > options.maxAge) {
            computedStates = recomputeStates(computedStates, minInvalidatedStateIndex, reducer, committedState, actionsById, stagedActionIds, skippedActionIds, errorHandler, isPaused);
            commitExcessActions(stagedActionIds.length - options.maxAge);
            minInvalidatedStateIndex = Infinity;
          }
        } else {
          if (!isPaused && !isLocked) {
            if (currentStateIndex === stagedActionIds.length - 1) {
              currentStateIndex++;
            }
            const actionId = nextActionId++;
            actionsById[actionId] = new PerformAction(liftedAction, +Date.now());
            stagedActionIds = [...stagedActionIds, actionId];
            minInvalidatedStateIndex = stagedActionIds.length - 1;
            computedStates = recomputeStates(computedStates, minInvalidatedStateIndex, reducer, committedState, actionsById, stagedActionIds, skippedActionIds, errorHandler, isPaused);
          }
          computedStates = computedStates.map((cmp) => __spreadProps(__spreadValues({}, cmp), {
            state: reducer(cmp.state, RECOMPUTE_ACTION)
          }));
          currentStateIndex = stagedActionIds.length - 1;
          if (options.maxAge && stagedActionIds.length > options.maxAge) {
            commitExcessActions(stagedActionIds.length - options.maxAge);
          }
          minInvalidatedStateIndex = Infinity;
        }
        break;
      }
      default: {
        minInvalidatedStateIndex = Infinity;
        break;
      }
    }
    computedStates = recomputeStates(computedStates, minInvalidatedStateIndex, reducer, committedState, actionsById, stagedActionIds, skippedActionIds, errorHandler, isPaused);
    monitorState = monitorReducer(monitorState, liftedAction);
    return {
      monitorState,
      actionsById,
      nextActionId,
      stagedActionIds,
      skippedActionIds,
      committedState,
      currentStateIndex,
      computedStates,
      isLocked,
      isPaused
    };
  };
}
var StoreDevtools = class _StoreDevtools {
  constructor(dispatcher, actions$, reducers$, extension, scannedActions, errorHandler, initialState2, config) {
    const liftedInitialState = liftInitialState(initialState2, config.monitor);
    const liftReducer = liftReducerWith(initialState2, liftedInitialState, errorHandler, config.monitor, config);
    const liftedAction$ = merge(merge(actions$.asObservable().pipe(skip(1)), extension.actions$).pipe(map(liftAction)), dispatcher, extension.liftedActions$).pipe(observeOn(queueScheduler));
    const liftedReducer$ = reducers$.pipe(map(liftReducer));
    const zoneConfig = injectZoneConfig(config.connectInZone);
    const liftedStateSubject = new ReplaySubject(1);
    this.liftedStateSubscription = liftedAction$.pipe(
      withLatestFrom(liftedReducer$),
      // The extension would post messages back outside of the Angular zone
      // because we call `connect()` wrapped with `runOutsideAngular`. We run change
      // detection only once at the end after all the required asynchronous tasks have
      // been processed (for instance, `setInterval` scheduled by the `timeout` operator).
      // We have to re-enter the Angular zone before the `scan` since it runs the reducer
      // which must be run within the Angular zone.
      emitInZone(zoneConfig),
      scan(({
        state: liftedState
      }, [action, reducer]) => {
        let reducedLiftedState = reducer(liftedState, action);
        if (action.type !== PERFORM_ACTION && shouldFilterActions(config)) {
          reducedLiftedState = filterLiftedState(reducedLiftedState, config.predicate, config.actionsSafelist, config.actionsBlocklist);
        }
        extension.notify(action, reducedLiftedState);
        return {
          state: reducedLiftedState,
          action
        };
      }, {
        state: liftedInitialState,
        action: null
      })
    ).subscribe(({
      state,
      action
    }) => {
      liftedStateSubject.next(state);
      if (action.type === PERFORM_ACTION) {
        const unliftedAction = action.action;
        scannedActions.next(unliftedAction);
      }
    });
    this.extensionStartSubscription = extension.start$.pipe(emitInZone(zoneConfig)).subscribe(() => {
      this.refresh();
    });
    const liftedState$ = liftedStateSubject.asObservable();
    const state$ = liftedState$.pipe(map(unliftState));
    Object.defineProperty(state$, "state", {
      value: toSignal(state$, {
        manualCleanup: true,
        requireSync: true
      })
    });
    this.dispatcher = dispatcher;
    this.liftedState = liftedState$;
    this.state = state$;
  }
  ngOnDestroy() {
    this.liftedStateSubscription.unsubscribe();
    this.extensionStartSubscription.unsubscribe();
  }
  dispatch(action) {
    this.dispatcher.next(action);
  }
  next(action) {
    this.dispatcher.next(action);
  }
  error(error) {
  }
  complete() {
  }
  performAction(action) {
    this.dispatch(new PerformAction(action, +Date.now()));
  }
  refresh() {
    this.dispatch(new Refresh());
  }
  reset() {
    this.dispatch(new Reset(+Date.now()));
  }
  rollback() {
    this.dispatch(new Rollback(+Date.now()));
  }
  commit() {
    this.dispatch(new Commit(+Date.now()));
  }
  sweep() {
    this.dispatch(new Sweep());
  }
  toggleAction(id) {
    this.dispatch(new ToggleAction(id));
  }
  jumpToAction(actionId) {
    this.dispatch(new JumpToAction(actionId));
  }
  jumpToState(index) {
    this.dispatch(new JumpToState(index));
  }
  importState(nextLiftedState) {
    this.dispatch(new ImportState(nextLiftedState));
  }
  lockChanges(status) {
    this.dispatch(new LockChanges(status));
  }
  pauseRecording(status) {
    this.dispatch(new PauseRecording(status));
  }
  static {
    this.\u0275fac = function StoreDevtools_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StoreDevtools)(\u0275\u0275inject(DevtoolsDispatcher), \u0275\u0275inject(ActionsSubject), \u0275\u0275inject(ReducerObservable), \u0275\u0275inject(DevtoolsExtension), \u0275\u0275inject(ScannedActionsSubject), \u0275\u0275inject(ErrorHandler), \u0275\u0275inject(INITIAL_STATE), \u0275\u0275inject(STORE_DEVTOOLS_CONFIG));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _StoreDevtools,
      factory: _StoreDevtools.\u0275fac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StoreDevtools, [{
    type: Injectable
  }], () => [{
    type: DevtoolsDispatcher
  }, {
    type: ActionsSubject
  }, {
    type: ReducerObservable
  }, {
    type: DevtoolsExtension
  }, {
    type: ScannedActionsSubject
  }, {
    type: ErrorHandler
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [INITIAL_STATE]
    }]
  }, {
    type: StoreDevtoolsConfig,
    decorators: [{
      type: Inject,
      args: [STORE_DEVTOOLS_CONFIG]
    }]
  }], null);
})();
function emitInZone({
  ngZone,
  connectInZone
}) {
  return (source) => connectInZone ? new Observable((subscriber) => source.subscribe({
    next: (value) => ngZone.run(() => subscriber.next(value)),
    error: (error) => ngZone.run(() => subscriber.error(error)),
    complete: () => ngZone.run(() => subscriber.complete())
  })) : source;
}
var IS_EXTENSION_OR_MONITOR_PRESENT = new InjectionToken("@ngrx/store-devtools Is Devtools Extension or Monitor Present");
function createIsExtensionOrMonitorPresent(extension, config) {
  return Boolean(extension) || config.monitor !== noMonitor;
}
function createReduxDevtoolsExtension() {
  const extensionKey = "__REDUX_DEVTOOLS_EXTENSION__";
  if (typeof window === "object" && typeof window[extensionKey] !== "undefined") {
    return window[extensionKey];
  } else {
    return null;
  }
}
function createStateObservable(devtools) {
  return devtools.state;
}
function provideStoreDevtools(options = {}) {
  return makeEnvironmentProviders([DevtoolsExtension, DevtoolsDispatcher, StoreDevtools, {
    provide: INITIAL_OPTIONS,
    useValue: options
  }, {
    provide: IS_EXTENSION_OR_MONITOR_PRESENT,
    deps: [REDUX_DEVTOOLS_EXTENSION, STORE_DEVTOOLS_CONFIG],
    useFactory: createIsExtensionOrMonitorPresent
  }, {
    provide: REDUX_DEVTOOLS_EXTENSION,
    useFactory: createReduxDevtoolsExtension
  }, {
    provide: STORE_DEVTOOLS_CONFIG,
    deps: [INITIAL_OPTIONS],
    useFactory: createConfig
  }, {
    provide: StateObservable,
    deps: [StoreDevtools],
    useFactory: createStateObservable
  }, {
    provide: ReducerManagerDispatcher,
    useExisting: DevtoolsDispatcher
  }]);
}
var StoreDevtoolsModule = class _StoreDevtoolsModule {
  static instrument(options = {}) {
    return {
      ngModule: _StoreDevtoolsModule,
      providers: [provideStoreDevtools(options)]
    };
  }
  static {
    this.\u0275fac = function StoreDevtoolsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StoreDevtoolsModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _StoreDevtoolsModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StoreDevtoolsModule, [{
    type: NgModule,
    args: [{}]
  }], null, null);
})();

// src/app/shared/components/toast/toast.component.ts
function ToastComponent__svg_svg_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 7);
    \u0275\u0275element(1, "circle", 9)(2, "path", 10);
    \u0275\u0275elementEnd();
  }
}
function ToastComponent__svg_svg_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 7);
    \u0275\u0275element(1, "circle", 9)(2, "path", 11);
    \u0275\u0275elementEnd();
  }
}
function ToastComponent_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275listener("click", function ToastComponent_button_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAction());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.action.label);
  }
}
var ToastComponent = class _ToastComponent {
  message = "";
  type = "success";
  duration = 3e3;
  action;
  closed = new EventEmitter();
  visible = false;
  hiding = false;
  timeoutId;
  ngOnInit() {
    setTimeout(() => {
      this.visible = true;
    }, 10);
    if (this.duration > 0) {
      this.timeoutId = window.setTimeout(() => {
        this.close();
      }, this.duration);
    }
  }
  ngOnDestroy() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }
  onClose() {
    this.close();
  }
  onAction() {
    this.action?.callback();
    this.close();
  }
  close() {
    this.hiding = true;
    setTimeout(() => {
      this.closed.emit();
    }, 300);
  }
  static \u0275fac = function ToastComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToastComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ToastComponent, selectors: [["app-toast"]], inputs: { message: "message", type: "type", duration: "duration", action: "action" }, outputs: { closed: "closed" }, decls: 11, vars: 10, consts: [[1, "toast"], [1, "toast-content"], [1, "toast-icon"], ["viewBox", "0 0 24 24", "fill", "none", 4, "ngIf"], [1, "toast-message"], ["type", "button", "class", "toast-action-btn", 3, "click", 4, "ngIf"], ["iconButtonType", "ghost", "size", "small", 3, "onClick"], ["viewBox", "0 0 24 24", "fill", "none"], ["d", "M18 6L6 18M6 6l12 12", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "2"], ["d", "M9 12l2 2 4-4", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M15 9l-6 6M9 9l6 6", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["type", "button", 1, "toast-action-btn", 3, "click"]], template: function ToastComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275template(3, ToastComponent__svg_svg_3_Template, 3, 0, "svg", 3)(4, ToastComponent__svg_svg_4_Template, 3, 0, "svg", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd();
      \u0275\u0275template(7, ToastComponent_button_7_Template, 2, 1, "button", 5);
      \u0275\u0275elementStart(8, "app-icon-button", 6);
      \u0275\u0275listener("onClick", function ToastComponent_Template_app_icon_button_onClick_8_listener() {
        return ctx.onClose();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(9, "svg", 7);
      \u0275\u0275element(10, "path", 8);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275classMap(ctx.type);
      \u0275\u0275classProp("show", ctx.visible)("hiding", ctx.hiding);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.type === "success");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.type === "error");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.message);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.action);
    }
  }, dependencies: [CommonModule, NgIf, IconButtonComponent], styles: ["\n\n.toast[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  min-width: 300px;\n  max-width: 400px;\n  padding: 1rem;\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  margin-bottom: 0.75rem;\n  opacity: 0;\n  transform: translateX(100%);\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  border-left: 4px solid;\n}\n.toast.show[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateX(0);\n}\n.toast.hiding[_ngcontent-%COMP%] {\n  opacity: 0;\n  transform: translateX(100%);\n}\n.toast.success[_ngcontent-%COMP%] {\n  border-left-color: #16A34A;\n}\n.toast.error[_ngcontent-%COMP%] {\n  border-left-color: #dc2626;\n}\n.toast-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  width: 100%;\n}\n.toast-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 20px;\n  height: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.toast-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n.toast.success[_ngcontent-%COMP%]   .toast-icon[_ngcontent-%COMP%] {\n  color: #16A34A;\n}\n.toast.error[_ngcontent-%COMP%]   .toast-icon[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.toast-message[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 0.9375rem;\n  line-height: 1.5;\n  color: #1f2937;\n  font-weight: 500;\n}\n.toast-action-btn[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  padding: 0.35rem 0.6rem;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  color: #16A34A;\n  background: transparent;\n  border: 1px solid #16A34A;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: background 0.15s, color 0.15s;\n}\n.toast-action-btn[_ngcontent-%COMP%]:hover {\n  background: #16A34A;\n  color: white;\n}\n[_nghost-%COMP%]     app-icon-button {\n  flex-shrink: 0;\n}\n[_nghost-%COMP%]     app-icon-button svg {\n  width: 16px;\n  height: 16px;\n  color: #64748b;\n}\n/*# sourceMappingURL=toast.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastComponent, [{
    type: Component,
    args: [{ selector: "app-toast", standalone: true, imports: [CommonModule, IconButtonComponent], template: `
    <div class="toast" [class]="type" [class.show]="visible" [class.hiding]="hiding">
      <div class="toast-content">
        <div class="toast-icon">
          <svg *ngIf="type === 'success'" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
            <path d="M9 12l2 2 4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <svg *ngIf="type === 'error'" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
            <path d="M15 9l-6 6M9 9l6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div class="toast-message">{{ message }}</div>
        <button *ngIf="action" type="button" class="toast-action-btn" (click)="onAction()">{{ action.label }}</button>
        <app-icon-button
          iconButtonType="ghost"
          size="small"
          (onClick)="onClose()">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </app-icon-button>
      </div>
    </div>
  `, styles: ["/* angular:styles/component:css;111c91de6cd45913c5e7f634638557ccb8964a4592278784b9d3e47d7aa5d1d0;/Users/baglan/repo/westwood/westwood-frontend/src/app/shared/components/toast/toast.component.ts */\n.toast {\n  display: flex;\n  align-items: center;\n  min-width: 300px;\n  max-width: 400px;\n  padding: 1rem;\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  margin-bottom: 0.75rem;\n  opacity: 0;\n  transform: translateX(100%);\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  border-left: 4px solid;\n}\n.toast.show {\n  opacity: 1;\n  transform: translateX(0);\n}\n.toast.hiding {\n  opacity: 0;\n  transform: translateX(100%);\n}\n.toast.success {\n  border-left-color: #16A34A;\n}\n.toast.error {\n  border-left-color: #dc2626;\n}\n.toast-content {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  width: 100%;\n}\n.toast-icon {\n  flex-shrink: 0;\n  width: 20px;\n  height: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.toast-icon svg {\n  width: 20px;\n  height: 20px;\n}\n.toast.success .toast-icon {\n  color: #16A34A;\n}\n.toast.error .toast-icon {\n  color: #dc2626;\n}\n.toast-message {\n  flex: 1;\n  font-size: 0.9375rem;\n  line-height: 1.5;\n  color: #1f2937;\n  font-weight: 500;\n}\n.toast-action-btn {\n  flex-shrink: 0;\n  padding: 0.35rem 0.6rem;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  color: #16A34A;\n  background: transparent;\n  border: 1px solid #16A34A;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: background 0.15s, color 0.15s;\n}\n.toast-action-btn:hover {\n  background: #16A34A;\n  color: white;\n}\n:host ::ng-deep app-icon-button {\n  flex-shrink: 0;\n}\n:host ::ng-deep app-icon-button svg {\n  width: 16px;\n  height: 16px;\n  color: #64748b;\n}\n/*# sourceMappingURL=toast.component.css.map */\n"] }]
  }], null, { message: [{
    type: Input
  }], type: [{
    type: Input
  }], duration: [{
    type: Input
  }], action: [{
    type: Input
  }], closed: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ToastComponent, { className: "ToastComponent", filePath: "src/app/shared/components/toast/toast.component.ts", lineNumber: 137 });
})();

// src/app/shared/components/toast-container/toast-container.component.ts
function ToastContainerComponent_app_toast_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-toast", 2);
    \u0275\u0275listener("closed", function ToastContainerComponent_app_toast_1_Template_app_toast_closed_0_listener() {
      const toast_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeToast(toast_r2.id));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const toast_r2 = ctx.$implicit;
    \u0275\u0275property("message", toast_r2.message)("type", toast_r2.type)("duration", toast_r2.duration)("action", toast_r2.action);
  }
}
var ToastContainerComponent = class _ToastContainerComponent {
  toastService = inject(ToastService);
  toasts = [];
  subscription;
  ngOnInit() {
    this.subscription = this.toastService.toasts$.subscribe((toasts) => {
      this.toasts = toasts;
    });
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  removeToast(id) {
    this.toastService.remove(id);
  }
  trackByToastId(index, toast) {
    return toast.id;
  }
  static \u0275fac = function ToastContainerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToastContainerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ToastContainerComponent, selectors: [["app-toast-container"]], decls: 2, vars: 2, consts: [[1, "toast-container"], [3, "message", "type", "duration", "action", "closed", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "closed", "message", "type", "duration", "action"]], template: function ToastContainerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, ToastContainerComponent_app_toast_1_Template, 1, 4, "app-toast", 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.toasts)("ngForTrackBy", ctx.trackByToastId);
    }
  }, dependencies: [CommonModule, NgForOf, ToastComponent], styles: ["\n\n.toast-container[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 1.5rem;\n  right: 1.5rem;\n  z-index: 10000;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  pointer-events: none;\n}\n.toast-container[_ngcontent-%COMP%]   app-toast[_ngcontent-%COMP%] {\n  pointer-events: auto;\n}\n@media (max-width: 768px) {\n  .toast-container[_ngcontent-%COMP%] {\n    top: 1rem;\n    right: 1rem;\n    left: 1rem;\n    align-items: stretch;\n  }\n  .toast-container[_ngcontent-%COMP%]   app-toast[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n}\n/*# sourceMappingURL=toast-container.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastContainerComponent, [{
    type: Component,
    args: [{ selector: "app-toast-container", standalone: true, imports: [CommonModule, ToastComponent], template: `
    <div class="toast-container">
      <app-toast
        *ngFor="let toast of toasts; trackBy: trackByToastId"
        [message]="toast.message"
        [type]="toast.type"
        [duration]="toast.duration"
        [action]="toast.action"
        (closed)="removeToast(toast.id)">
      </app-toast>
    </div>
  `, styles: ["/* angular:styles/component:css;8a279e8d3dc103aedc58a2d70c82bf65b19458647d93f1799788a1ec76c5b6e8;/Users/baglan/repo/westwood/westwood-frontend/src/app/shared/components/toast-container/toast-container.component.ts */\n.toast-container {\n  position: fixed;\n  top: 1.5rem;\n  right: 1.5rem;\n  z-index: 10000;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  pointer-events: none;\n}\n.toast-container app-toast {\n  pointer-events: auto;\n}\n@media (max-width: 768px) {\n  .toast-container {\n    top: 1rem;\n    right: 1rem;\n    left: 1rem;\n    align-items: stretch;\n  }\n  .toast-container app-toast {\n    max-width: 100%;\n  }\n}\n/*# sourceMappingURL=toast-container.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ToastContainerComponent, { className: "ToastContainerComponent", filePath: "src/app/shared/components/toast-container/toast-container.component.ts", lineNumber: 54 });
})();

// src/app/app.component.ts
var AppComponent = class _AppComponent {
  title = "westwood-frontend";
  static \u0275fac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "router-outlet")(1, "app-toast-container");
    }
  }, dependencies: [CommonModule, RouterOutlet, ToastContainerComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppComponent, [{
    type: Component,
    args: [{
      selector: "app-root",
      standalone: true,
      imports: [CommonModule, RouterOutlet, ToastContainerComponent],
      template: `
    <router-outlet></router-outlet>
    <app-toast-container></app-toast-container>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 15 });
})();

// src/app/core/guards/auth.guard.ts
var authGuard = (route, state) => {
  const router = inject(Router);
  const store = inject(Store);
  return combineLatest([
    store.select(selectIsInitialized),
    store.select(selectIsAuthenticated)
  ]).pipe(
    // Wait until auth is initialized
    filter(([initialized]) => initialized),
    take(1),
    map(([, isAuthenticated]) => {
      if (!isAuthenticated) {
        router.navigate(["/auth/login"], {
          queryParams: { returnUrl: state.url }
        });
        return false;
      }
      return true;
    })
  );
};

// src/app/core/guards/guest.guard.ts
var guestGuard = () => {
  const router = inject(Router);
  const store = inject(Store);
  return combineLatest([
    store.select(selectIsInitialized),
    store.select(selectIsAuthenticated)
  ]).pipe(
    // Wait until auth is initialized
    filter(([initialized]) => initialized),
    take(1),
    map(([, isAuthenticated]) => {
      if (isAuthenticated) {
        router.navigate(["/home"]);
        return false;
      }
      return true;
    })
  );
};

// src/app/app.routes.ts
var routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  },
  {
    path: "auth",
    loadChildren: () => import("./chunk-XRPZLS4H.js").then((m) => m.AUTH_ROUTES),
    canActivate: [guestGuard]
  },
  {
    path: "",
    loadComponent: () => import("./chunk-M2XZW4JW.js").then((m) => m.MainLayoutWrapperComponent),
    canActivate: [authGuard],
    children: [
      {
        path: "home",
        loadComponent: () => import("./chunk-S2JO6R6E.js").then((m) => m.HomePageComponent),
        title: "Home"
      },
      {
        path: "bonus-expiring",
        loadComponent: () => import("./chunk-7P7FZJRL.js").then((m) => m.BonusExpiringPageComponent),
        title: "Bonus Expiring"
      },
      {
        path: "communications",
        title: "Communications",
        children: [
          {
            path: "",
            redirectTo: "whatsapp",
            pathMatch: "full"
          },
          {
            path: "whatsapp",
            loadComponent: () => import("./chunk-IKF3ADF3.js").then((m) => m.InvitationPageComponent),
            title: "WhatsApp"
          }
          // {
          //   path: 'email',
          //   loadComponent: () => import('./features/invitation/pages/email-invitation-page/email-invitation-page.component').then(m => m.EmailInvitationPageComponent)
          // }
        ]
      },
      {
        path: "bonus-program",
        children: [
          {
            path: "",
            loadComponent: () => import("./chunk-IAFKJFW5.js").then((m) => m.BonusProgramPageComponent),
            title: "Reward Programs"
          },
          {
            path: "programs",
            loadComponent: () => import("./chunk-YONWYHNC.js").then((m) => m.ProgramTypesPageComponent),
            title: "Create Program"
          },
          {
            path: "create/:uuid",
            loadComponent: () => import("./chunk-JUDBLHBF.js").then((m) => m.CreateProgramWizardComponent),
            title: "Create Program"
          },
          {
            path: "create/:type/:uuid",
            loadComponent: () => import("./chunk-JMOPSCUX.js").then((m) => m.RewardProgramCreatePageComponent),
            title: "Create Reward Program"
          },
          {
            path: "configure/:type/:uuid",
            loadComponent: () => import("./chunk-75BEBII4.js").then((m) => m.RewardProgramConfigurePageComponent),
            title: "Configure Reward Program"
          }
        ]
      },
      {
        path: "bonus-management",
        loadComponent: () => import("./chunk-TTU6SRKR.js").then((m) => m.BonusManagementPageComponent),
        title: "Bonus Management"
      },
      {
        path: "clients",
        loadComponent: () => import("./chunk-ZCAOW3RG.js").then((m) => m.ClientsPageComponent),
        title: "Clients"
      },
      {
        path: "clients/:id",
        loadComponent: () => import("./chunk-WJHPOJ4J.js").then((m) => m.ProfilePageComponent),
        title: "Client"
      },
      {
        path: "clients/:id/:section",
        loadComponent: () => import("./chunk-WJHPOJ4J.js").then((m) => m.ProfilePageComponent),
        title: "Client"
      },
      {
        path: "payments",
        loadComponent: () => import("./chunk-VYLGZVDL.js").then((m) => m.PaymentsPageComponent),
        title: "Payments"
      },
      {
        path: "users",
        loadComponent: () => import("./chunk-FFWFM6B7.js").then((m) => m.UsersPageComponent),
        title: "Users"
      },
      {
        path: "users/:id",
        loadComponent: () => import("./chunk-FENYUG6A.js").then((m) => m.UserProfilePageComponent),
        title: "User"
      },
      {
        path: "profile",
        loadComponent: () => import("./chunk-R63RLLVK.js").then((m) => m.AccountPageComponent),
        title: "Profile"
      }
    ]
  },
  {
    path: "**",
    redirectTo: "/home"
  }
];

// src/app/core/store/auth/auth.reducer.ts
var initialState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
  isInitialized: false,
  error: null
};
var authReducer = createReducer(
  initialState,
  // ============================================================
  // Init Auth (app startup)
  // ============================================================
  on(initAuth, (state) => __spreadProps(__spreadValues({}, state), {
    isLoading: true,
    error: null
  })),
  on(initAuthSuccess, (state, { user }) => __spreadProps(__spreadValues({}, state), {
    user,
    isAuthenticated: true,
    isLoading: false,
    isInitialized: true,
    error: null
  })),
  on(initAuthFailure, (state) => __spreadProps(__spreadValues({}, state), {
    user: null,
    isAuthenticated: false,
    isLoading: false,
    isInitialized: true,
    error: null
  })),
  // ============================================================
  // Login
  // ============================================================
  on(login, (state) => __spreadProps(__spreadValues({}, state), {
    isLoading: true,
    error: null
  })),
  on(loginSuccess, (state, { user }) => __spreadProps(__spreadValues({}, state), {
    user,
    isAuthenticated: true,
    isLoading: false,
    error: null
  })),
  on(loginFailure, (state, { error }) => __spreadProps(__spreadValues({}, state), {
    isLoading: false,
    error,
    isAuthenticated: false,
    user: null
  })),
  // ============================================================
  // Register (auto-login)
  // ============================================================
  on(register, (state) => __spreadProps(__spreadValues({}, state), {
    isLoading: true,
    error: null
  })),
  on(registerSuccess, (state, { user }) => __spreadProps(__spreadValues({}, state), {
    user,
    isAuthenticated: true,
    isLoading: false,
    error: null
  })),
  on(registerFailure, (state, { error }) => __spreadProps(__spreadValues({}, state), {
    isLoading: false,
    error
  })),
  // ============================================================
  // Activate Account (auto-login)
  // ============================================================
  on(activateAccount, (state) => __spreadProps(__spreadValues({}, state), {
    isLoading: true,
    error: null
  })),
  on(activateAccountSuccess, (state, { user }) => __spreadProps(__spreadValues({}, state), {
    user,
    isAuthenticated: true,
    isLoading: false,
    error: null
  })),
  on(activateAccountFailure, (state, { error }) => __spreadProps(__spreadValues({}, state), {
    isLoading: false,
    error
  })),
  // ============================================================
  // Logout
  // ============================================================
  on(logout, (state) => __spreadProps(__spreadValues({}, state), {
    isLoading: true
  })),
  on(logoutSuccess, (state) => __spreadProps(__spreadValues({}, initialState), {
    isInitialized: true
  })),
  on(logoutFailure, (state) => __spreadProps(__spreadValues({}, initialState), {
    isInitialized: true
  })),
  // ============================================================
  // Session Expired (401 from interceptor)
  // ============================================================
  on(sessionExpired, (state) => __spreadProps(__spreadValues({}, initialState), {
    isInitialized: true
  })),
  // ============================================================
  // Clear Error
  // ============================================================
  on(clearError, (state) => __spreadProps(__spreadValues({}, state), {
    error: null
  })),
  // ============================================================
  // Forgot Password
  // ============================================================
  on(forgotPassword, (state) => __spreadProps(__spreadValues({}, state), {
    isLoading: true,
    error: null
  })),
  on(forgotPasswordSuccess, (state) => __spreadProps(__spreadValues({}, state), {
    isLoading: false,
    error: null
  })),
  on(forgotPasswordFailure, (state, { error }) => __spreadProps(__spreadValues({}, state), {
    isLoading: false,
    error
  })),
  // ============================================================
  // Reset Password (auto-login)
  // ============================================================
  on(resetPassword, (state) => __spreadProps(__spreadValues({}, state), {
    isLoading: true,
    error: null
  })),
  on(resetPasswordSuccess, (state, { user }) => __spreadProps(__spreadValues({}, state), {
    user,
    isAuthenticated: true,
    isLoading: false,
    error: null
  })),
  on(resetPasswordFailure, (state, { error }) => __spreadProps(__spreadValues({}, state), {
    isLoading: false,
    error
  })),
  // ============================================================
  // Update User
  // ============================================================
  on(updateUser, (state, { user }) => __spreadProps(__spreadValues({}, state), {
    user
  }))
);

// src/app/core/store/app.reducer.ts
var appReducers = {
  auth: authReducer
};

// src/app/core/services/auth.service.ts
var AuthService = class _AuthService {
  http;
  apiUrl = `${environment.apiUrl}/auth`;
  constructor(http) {
    this.http = http;
  }
  /**
   * Login with email and password
   * Sets HttpOnly cookies on success
   * @returns AuthUser { id, email, firstName, lastName, roles }
   */
  login(credentials) {
    console.log("[AuthService] POST /auth/login", credentials);
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }
  /**
   * Register new user
   * Sets HttpOnly cookies on success (auto-login)
   * @returns AuthUser { id, email, firstName, lastName, roles }
   */
  register(data) {
    console.log("[AuthService] POST /auth/register", data);
    return this.http.post(`${this.apiUrl}/register`, data);
  }
  /**
   * Activate account with invitation token
   * Sets HttpOnly cookies on success (auto-login)
   * @returns AuthUser { id, email, roles } (firstName/lastName not included)
   */
  activate(data) {
    return this.http.post(`${this.apiUrl}/activate`, data);
  }
  /**
   * Get current authenticated user
   * Used on app init to check if session is valid
   * @returns AuthUser { id, email, firstName, lastName, roles }
   */
  me() {
    return this.http.get(`${this.apiUrl}/me`);
  }
  /**
   * Refresh access token using refresh token cookie
   * Sets new HttpOnly cookies
   * @returns AuthUser { id, email, firstName, lastName, roles }
   */
  refresh() {
    return this.http.post(`${this.apiUrl}/refresh`, {});
  }
  /**
   * Logout - Revokes refresh token and clears cookies
   */
  logout() {
    return this.http.post(`${this.apiUrl}/logout`, {});
  }
  /**
   * Request password reset - sends reset token to email
   * @returns Observable<void> - 200 OK response
   */
  forgotPassword(data) {
    console.log("[AuthService] POST /auth/forgot-password", data);
    return this.http.post(`${this.apiUrl}/forgot-password`, data);
  }
  /**
   * Reset password with token from email
   * Sets HttpOnly cookies on success (auto-login)
   * @returns AuthUser { id, email, firstName, lastName, roles }
   */
  resetPassword(data) {
    console.log("[AuthService] POST /auth/reset-password", { token: data.token, password: "***" });
    return this.http.post(`${this.apiUrl}/reset-password`, data);
  }
  static \u0275fac = function AuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/core/store/auth/auth.effects.ts
var AuthEffects = class _AuthEffects {
  actions$ = inject(Actions);
  authService = inject(AuthService);
  router = inject(Router);
  toastService = inject(ToastService);
  // ============================================================
  // Init Auth - Check session on app startup via /auth/me
  // ============================================================
  initAuth$ = createEffect(() => this.actions$.pipe(ofType(initAuth), exhaustMap(() => this.authService.me().pipe(map((user) => initAuthSuccess({ user })), catchError(() => of(initAuthFailure()))))));
  // ============================================================
  // Login
  // ============================================================
  login$ = createEffect(() => this.actions$.pipe(ofType(login), exhaustMap(({ credentials }) => this.authService.login(credentials).pipe(map((user) => loginSuccess({ user })), catchError((error) => of(loginFailure({
    error: error.error?.message || error.message || "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 email \u0438\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C"
  })))))));
  loginSuccess$ = createEffect(() => this.actions$.pipe(ofType(loginSuccess), tap(() => {
    this.router.navigate(["/home"]);
  })), { dispatch: false });
  // ============================================================
  // Register (auto-login after registration)
  // ============================================================
  register$ = createEffect(() => this.actions$.pipe(ofType(register), exhaustMap(({ data }) => this.authService.register(data).pipe(map((user) => registerSuccess({ user })), catchError((error) => of(registerFailure({
    error: error.error?.message || error.message || "\u041E\u0448\u0438\u0431\u043A\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438"
  })))))));
  // Register auto-logs in, redirect to home
  registerSuccess$ = createEffect(() => this.actions$.pipe(ofType(registerSuccess), tap(() => {
    this.router.navigate(["/home"]);
  })), { dispatch: false });
  // ============================================================
  // Activate Account (auto-login after activation)
  // ============================================================
  activateAccount$ = createEffect(() => this.actions$.pipe(ofType(activateAccount), exhaustMap(({ data }) => this.authService.activate(data).pipe(map((user) => activateAccountSuccess({ user })), catchError((error) => of(activateAccountFailure({
    error: error.error?.message || error.message || "\u041E\u0448\u0438\u0431\u043A\u0430 \u0430\u043A\u0442\u0438\u0432\u0430\u0446\u0438\u0438"
  })))))));
  // Activate auto-logs in, redirect to home
  activateAccountSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(activateAccountSuccess),
    tap(() => {
      this.toastService.success("\u0410\u043A\u043A\u0430\u0443\u043D\u0442 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0430\u043A\u0442\u0438\u0432\u0438\u0440\u043E\u0432\u0430\u043D!");
    }),
    delay(500),
    // Small delay to show toast before navigation
    tap(() => {
      this.router.navigate(["/home"]);
    })
  ), { dispatch: false });
  // ============================================================
  // Logout - Call server to clear HttpOnly cookie
  // ============================================================
  logout$ = createEffect(() => this.actions$.pipe(ofType(logout), exhaustMap(() => this.authService.logout().pipe(map(() => logoutSuccess()), catchError((error) => of(logoutFailure({
    error: error.error?.message || "\u041E\u0448\u0438\u0431\u043A\u0430 \u0432\u044B\u0445\u043E\u0434\u0430"
  })))))));
  logoutSuccess$ = createEffect(() => this.actions$.pipe(ofType(logoutSuccess, logoutFailure), tap(() => {
    this.router.navigate(["/auth/login"]);
  })), { dispatch: false });
  // ============================================================
  // Forgot Password
  // ============================================================
  forgotPassword$ = createEffect(() => this.actions$.pipe(ofType(forgotPassword), exhaustMap(({ data }) => this.authService.forgotPassword(data).pipe(map(() => forgotPasswordSuccess()), catchError((error) => {
    const errorMessage = error.error?.message || error.message || (error.status === 404 ? "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u0441 \u0442\u0430\u043A\u0438\u043C email \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D" : null) || "\u041E\u0448\u0438\u0431\u043A\u0430 \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0438 \u0437\u0430\u043F\u0440\u043E\u0441\u0430 \u043D\u0430 \u0441\u0431\u0440\u043E\u0441 \u043F\u0430\u0440\u043E\u043B\u044F";
    return of(forgotPasswordFailure({ error: errorMessage }));
  })))));
  forgotPasswordSuccess$ = createEffect(() => this.actions$.pipe(ofType(forgotPasswordSuccess), tap(() => {
    this.toastService.success("\u041F\u0438\u0441\u044C\u043C\u043E \u0434\u043B\u044F \u0441\u0431\u0440\u043E\u0441\u0430 \u043F\u0430\u0440\u043E\u043B\u044F \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043E \u043D\u0430 \u0432\u0430\u0448\u0443 \u043F\u043E\u0447\u0442\u0443");
  })), { dispatch: false });
  // ============================================================
  // Reset Password (auto-login after reset)
  // ============================================================
  resetPassword$ = createEffect(() => this.actions$.pipe(ofType(resetPassword), exhaustMap(({ data }) => this.authService.resetPassword(data).pipe(map((user) => resetPasswordSuccess({ user })), catchError((error) => of(resetPasswordFailure({
    error: error.error?.message || error.message || "\u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u0431\u0440\u043E\u0441\u0430 \u043F\u0430\u0440\u043E\u043B\u044F"
  })))))));
  // Reset password auto-logs in, redirect to home
  resetPasswordSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(resetPasswordSuccess),
    tap(() => {
      this.toastService.success("\u041F\u0430\u0440\u043E\u043B\u044C \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0438\u0437\u043C\u0435\u043D\u0435\u043D!");
    }),
    delay(500),
    // Small delay to show toast before navigation
    tap(() => {
      this.router.navigate(["/home"]);
    })
  ), { dispatch: false });
  // ============================================================
  // Session Expired - Redirect to login
  // ============================================================
  sessionExpired$ = createEffect(() => this.actions$.pipe(ofType(sessionExpired), tap(() => {
    this.router.navigate(["/auth/login"], {
      queryParams: { sessionExpired: true }
    });
  })), { dispatch: false });
  static \u0275fac = function AuthEffects_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthEffects)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthEffects, factory: _AuthEffects.\u0275fac });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthEffects, [{
    type: Injectable
  }], null, null);
})();

// src/app/core/services/http-interceptor.service.ts
var isRefreshing = false;
var authInterceptor = (req, next) => {
  const store = inject(Store);
  const authService = inject(AuthService);
  let isApiRequest = false;
  try {
    if (req.url.startsWith(environment.apiUrl)) {
      isApiRequest = true;
    }
    if (req.url.includes("/api/v1/")) {
      isApiRequest = true;
    }
    if (req.url.startsWith("http")) {
      const requestDomain = new URL(req.url).origin;
      if (environment.apiUrl.startsWith("http")) {
        try {
          const apiDomain = new URL(environment.apiUrl).origin;
          if (requestDomain === apiDomain) {
            isApiRequest = true;
          }
        } catch (e) {
        }
      }
    }
  } catch (e) {
    if (req.url.includes("herokuapp.com") || req.url.includes("westwood")) {
      isApiRequest = true;
    }
  }
  const authReq = isApiRequest ? req.clone({ withCredentials: true }) : req;
  return next(authReq).pipe(catchError((error) => {
    if (error.status === 401 && isApiRequest) {
      const isAuthEndpoint = req.url.includes("/auth/login") || req.url.includes("/auth/register") || req.url.includes("/auth/me") || req.url.includes("/auth/forgot-password") || req.url.includes("/auth/reset-password") || req.url.includes("/auth/activate") || req.url.includes("/auth/refresh");
      if (!isAuthEndpoint && !isRefreshing) {
        isRefreshing = true;
        console.log("[AuthInterceptor] Access token expired, attempting refresh...");
        return authService.refresh().pipe(switchMap((user) => {
          isRefreshing = false;
          console.log("[AuthInterceptor] Token refreshed successfully, retrying request");
          store.dispatch(loginSuccess({ user }));
          return next(authReq);
        }), catchError((refreshError) => {
          isRefreshing = false;
          console.log("[AuthInterceptor] Token refresh failed, session expired");
          store.dispatch(sessionExpired());
          return throwError(() => refreshError);
        }));
      }
      if (!isAuthEndpoint) {
        store.dispatch(sessionExpired());
      }
    }
    return throwError(() => error);
  }));
};

// src/app/core/services/app-init.service.ts
var AppInitService = class _AppInitService {
  store = inject(Store);
  initializeApp() {
    return new Promise((resolve) => {
      this.store.dispatch(initAuth());
      this.store.select(selectIsInitialized).pipe(filter((initialized) => initialized), take(1)).subscribe(() => {
        resolve();
      });
    });
  }
  static \u0275fac = function AppInitService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppInitService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AppInitService, factory: _AppInitService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppInitService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/core/services/custom-title-strategy.service.ts
var CustomTitleStrategy = class _CustomTitleStrategy extends TitleStrategy {
  title;
  constructor(title) {
    super();
    this.title = title;
  }
  updateTitle(routerState) {
    const title = this.buildTitle(routerState);
    if (title !== void 0) {
      this.title.setTitle(`Westwood - ${title}`);
    } else {
      const route = routerState.root;
      const titleFromPath = this.getTitleFromRoute(route);
      this.title.setTitle(`Westwood - ${titleFromPath}`);
    }
  }
  getTitleFromRoute(route) {
    while (route.firstChild) {
      route = route.firstChild;
    }
    const path = route.routeConfig?.path || "";
    const titleMap = {
      "home": "Home",
      "clients": "Clients",
      "payments": "Payments",
      "users": "Users",
      "profile": "Profile",
      "bonus-program": "Reward Program",
      "communications": "Communications",
      "whatsapp": "WhatsApp",
      "login": "Login",
      "activation": "Activation",
      "forgot-password": "Forgot Password",
      "reset-password": "Reset Password"
    };
    if (path.includes(":id")) {
      const routeData = route.snapshot?.data;
      if (routeData && routeData["title"]) {
        return routeData["title"];
      }
      const params = route.snapshot?.params;
      if (params && params["id"]) {
        if (path.startsWith("clients/")) {
          return "Client";
        } else if (path.startsWith("users/")) {
          return "User";
        }
      }
    }
    return titleMap[path] || path.charAt(0).toUpperCase() + path.slice(1);
  }
  static \u0275fac = function CustomTitleStrategy_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CustomTitleStrategy)(\u0275\u0275inject(Title));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CustomTitleStrategy, factory: _CustomTitleStrategy.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CustomTitleStrategy, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: Title }], null);
})();

// src/main.ts
function initializeApp() {
  const appInitService = inject(AppInitService);
  return () => appInitService.initializeApp();
}
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes, withInMemoryScrolling({
      scrollPositionRestoration: "top",
      anchorScrolling: "enabled"
    })),
    provideHttpClient(withInterceptors([authInterceptor])),
    provideStore(appReducers),
    provideEffects([AuthEffects]),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      traceLimit: 75
    }),
    // Custom title strategy for dynamic page titles
    {
      provide: TitleStrategy,
      useClass: CustomTitleStrategy
    },
    // Initialize auth check on app startup
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      multi: true
    }
  ]
}).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
