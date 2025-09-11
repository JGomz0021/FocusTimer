import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import PomodoroTimer from "../components/common/PomodoroTimer";
import darkTheme from "../themes/darkTheme/Dark"

const PomodoroScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <PomodoroTimer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: darkTheme.colors.background, // aplica el fondo oscuro
    paddingHorizontal: 16,
  },
  text: {
    color: darkTheme.colors.textPrimary, // aplica color de texto
    fontSize: 18,
  },
});

export default PomodoroScreen;
