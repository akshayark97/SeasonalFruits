import { NavigationContainer } from "@react-navigation/native";

import { navigationRef } from './app/navigation/rootNavigation';
import navigationTheme from './app/navigation/navigationTheme';
import AppNavigator from './app/navigation/AppNavigator';

export default function App() {
  return (
     <NavigationContainer ref={navigationRef} theme={navigationTheme}>
      <AppNavigator />
     </NavigationContainer>
  );
}
