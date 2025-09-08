import React from "react";
import { StatusBar } from "react-native";
import AppNavigation from "./src/navigation/AppNavigation"; // importa la navegación principal

// Punto de entrada de la aplicación
const App: React.FC = () => {
  return (
    <>
      {/* Barra de estado del dispositivo */}
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      {/* Navegación principal */}
      <AppNavigation />
    </>
  );
};

export default App;
