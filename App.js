import { StatusBar } from "react-native";
import { Provider } from "react-redux";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Store from "./Store";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./Stack/Stack";

export default function App() {
  return (
    <>
      <StatusBar />
      <Provider store={Store}>
        <NavigationContainer initialRouteName='Home'>
          <SafeAreaProvider>
            <StackNavigator />
          </SafeAreaProvider>
        </NavigationContainer>
      </Provider>
    </>
  );
}
