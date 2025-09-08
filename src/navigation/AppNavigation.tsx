import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PomodoroScreen from "../screens/PomodoroScreen"; // importa la screen creada antes

// Definimos el tipo de las rutas
export type RootStackParamList = {
  Pomodoro: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

// Componente principal de navegación
const AppNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Pomodoro">
        <Stack.Screen
          name="Pomodoro"
          component={PomodoroScreen}
          options={{ title: "Reloj Pomodoro" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
