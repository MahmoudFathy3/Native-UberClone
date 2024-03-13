import HomeScreen from "../Screens/Home/Home";
import MapsScreen from "../Screens/Maps/Maps";

import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: true,
          gestureDirection: "horizontal",
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MapScreen"
          component={MapsScreen}
          options={{
            presentation: "modal",
          }}
        />
      </Stack.Navigator>
    </>
  );
};

export default StackNavigator;
