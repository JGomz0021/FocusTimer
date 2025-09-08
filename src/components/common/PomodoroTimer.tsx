import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

// Definimos los tiempos en segundos
const POMODORO_TIME = 25 * 60; // 25 minutos
const BREAK_TIME = 5 * 60; // 5 minutos

const PomodoroTimer: React.FC = () => {
  // Estado del tiempo restante
  const [timeLeft, setTimeLeft] = useState(POMODORO_TIME);
  // Estado para saber si está corriendo el timer
  const [isRunning, setIsRunning] = useState(false);
  // Estado para saber si estamos en pomodoro o en descanso
  const [isBreak, setIsBreak] = useState(false);

  // Efecto que maneja el contador
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isRunning) {
      // Reducimos el tiempo cada segundo
      interval = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev === 1) {
            // Cuando llega a 0, cambiamos de modo
            clearInterval(interval!);
            if (isBreak) {
              // Si estaba en descanso, volvemos al pomodoro
              setIsBreak(false);
              return POMODORO_TIME;
            } else {
              // Si estaba en pomodoro, pasamos a descanso
              setIsBreak(true);
              return BREAK_TIME;
            }
          }
          return prev - 1;
        });
      }, 1000);
    }

    // Limpiamos el intervalo al pausar o desmontar
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, isBreak]);

  // Función para dar formato mm:ss al tiempo
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const secs = (seconds % 60).toString().padStart(2, "0");
    return `${minutes}:${secs}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {isBreak ? "Descanso" : "Pomodoro"}
      </Text>
      <Text style={styles.timer}>{formatTime(timeLeft)}</Text>
      <Button
        title={isRunning ? "Pausar" : "Iniciar"}
        onPress={() => setIsRunning(!isRunning)}
      />
      <Button
        title="Reiniciar"
        onPress={() => {
          setIsRunning(false);
          setIsBreak(false);
          setTimeLeft(POMODORO_TIME);
        }}
      />
    </View>
  );
};

export default PomodoroTimer;
