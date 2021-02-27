let navigator;

const setTopLevelNavigator = (navigatorRef) => {
  navigator = navigatorRef;
};

const navigate = (name, params) => {
  if (navigator) {
    navigator.navigate({
      name,
      params,
    });
  }
};

const navigateAndReset = (name, params) => {
  if (navigator) {
    navigator.reset({
      index: 0,
      routes: [{name, params}],
    });
  }
};

export default {
  navigate,
  navigateAndReset,
  setTopLevelNavigator,
};
