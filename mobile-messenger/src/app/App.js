import React from "react";
import { StyleSheet } from "react-native";
import {
  NavigationContainer,
  NavigationIndependentTree,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "../screens/HomeScreen";
import ChatScreen from "../screens/ChatScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationIndependentTree>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: { backgroundColor: "#075E54" },
            headerTintColor: "#FFFFFF",
            headerTitleStyle: { fontWeight: "bold" },
          }}
        >
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{title: "Mobile Messenger"}}
            />
            <Stack.Screen
            name="Chat"
            component={ChatScreen}
            options={({route}) => ({
              title: route.params?.contactName || "Chat",
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NavigationIndependentTree>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 12,
  },
});
