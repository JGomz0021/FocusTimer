import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import PomodoroTimer from "../components/PomodoroTimer"; // importa el componente creado antes

// Esta es la screen principal que muestra el PomodoroTimer
const PomodoroScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <PomodoroTimer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
});

export default PomodoroScreen;
