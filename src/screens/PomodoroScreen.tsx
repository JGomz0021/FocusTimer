import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import PomodoroTimer from "../components/common/PomodoroTimer"; // importa el componente creado antes
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, marginBottom: 20 },
  timer: { fontSize: 48, marginBottom: 20 },
});

// Esta es la screen principal que muestra el PomodoroTimer
const PomodoroScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles}>
      <PomodoroTimer />
    </SafeAreaView>
  );
};


export default PomodoroScreen;
