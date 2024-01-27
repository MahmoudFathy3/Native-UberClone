import { KeyboardAvoidingView, Platform } from "react-native";
import { Provider } from "react-redux";
import Store from "./Store";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./Stack/Stack";

import "react-native-gesture-handler";

export default function App() {
  return (
    <>
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
