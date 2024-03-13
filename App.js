import {
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  I18nManager,
} from "react-native";
import { Provider } from "react-redux";
import Store from "./Store";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./Stack/Stack";

import "react-native-gesture-handler";

export default function App() {
  I18nManager.forceRTL(false);
  I18nManager.allowRTL(false);
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={"#fff"} />
      <Provider store={Store}>
        <NavigationContainer>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
            style={{ flex: 1 }}
          >
            <StackNavigator />
          </KeyboardAvoidingView>
        </NavigationContainer>
      </Provider>
    </>
  );
}
