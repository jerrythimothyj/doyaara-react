const isPromise = v => v && typeof v.then === "function";

const promiseMiddleware = store => next => action => {
  if (isPromise(action.payload)) {
    store.dispatch({ type: "ASYNC_START" });
    store.dispatch({ type: action.states[0] });
    action.payload.then(response => {
      console.info("RESULT", response);
      action.payload = response;
      store.dispatch({ type: "ASYNC_END" });
      store.dispatch({ type: action.states[1], payload: response });
      // store.dispatch(action);
    });
  } else {
    next(action);
  }
};

export default promiseMiddleware;
