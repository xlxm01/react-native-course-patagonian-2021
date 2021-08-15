const {
  createNavigatorContainerRef,
  CommonActions,
  StackActions,
} = require('@react-navigation/native');

export const navigatorRef = createNavigatorContainerRef();

export function goToScreen(name: string, params: object = {}) {
  if (navigatorRef.isReady()) {
    navigatorRef.dispatch(CommonActions.navigate(name, params));
  }
}

export function goBack() {
  if (navigatorRef.isReady()) {
    navigatorRef.dispatch(CommonActions.goBack());
  }
}

export function replaceRoute(name: string, params: object = {}) {
  if (navigatorRef.isReady()) {
    navigatorRef.dispatch(StackActions.replace(name, params));
  }
}

export function resetNavigator() {
  if (navigatorRef.isReady()) {
    navigatorRef.dispatch(
      
    )
  }
}
