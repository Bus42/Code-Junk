const logger = (store) => (next) => (action) => {
  // function currying
  console.groupCollapsed(`%c${action.type}`, "color: #FEB57F");
  console.log("%cprev state: ", "color: #007AAF", store.getState());
  console.log("%caction: ", "color: #ACDF87", action);
  next(action);
  console.log("%cnext state: ", "color: #FFFABA", store.getState());
  console.groupEnd(action.type);
};

export default logger;
