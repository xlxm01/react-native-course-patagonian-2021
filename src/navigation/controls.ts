const {
  createNavigatorContainerRef,
  CommonActions,
  StackActions,
} = require('@react-navigation/native');

export const navigationRef = createNavigatorContainerRef();

export function goToScreen(name: string, params: object = {}) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(CommonActions.navigate(name, params));
  }
}

export function goBack() {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(CommonActions.goBack());
  }
}

export function replaceRoute(name: string, params: object = {}) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.replace(name, params));
  }
}

export function resetNavigator() {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'AuthStack' }],
      }),
    );
  }
}
