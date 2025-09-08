import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

function getTimeRemaining(eventDate) {
  const total = Date.parse(eventDate) - Date.now();
  return {
    total,
    days: Math.max(Math.floor(total / (1000 * 60 * 60 * 24)), 0),
    hours: Math.max(Math.floor((total / (1000 * 60 * 60)) % 24), 0),
    minutes: Math.max(Math.floor((total / (1000 * 60)) % 60), 0),
    seconds: Math.max(Math.floor((total / 1000) % 60), 0),
  };
}

export default function CountdownTimer({ eventDate }) {
  const [time, setTime] = useState(getTimeRemaining(eventDate));
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(getTimeRemaining(eventDate));
    }, 1000);
    return () => clearInterval(timer);
  }, [eventDate]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contagem regressiva</Text>
      <View style={styles.row}>
        <TimeBox label="Dias" value={time.days} />
        <TimeBox label="Horas" value={time.hours} />
        <TimeBox label="Min" value={time.minutes} />
        <TimeBox label="Seg" value={time.seconds} />
      </View>
    </View>
  );
}

const TimeBox = ({ label, value }) => (
  <View style={styles.box}>
    <Text style={styles.value}>{value}</Text>
    <Text style={styles.label}>{label}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
    alignItems: 'center',
  },
  title: {
    fontWeight: '600',
    color: '#ce368b',
    fontSize: 17,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    gap: 12,
  },
  box: {
    width: 56,
    height: 56,
    backgroundColor: '#f8f1f6',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 3,
    borderWidth: 1,
    borderColor: '#d1c1d1',
    elevation: 2,
    shadowColor: '#d1c1d1',
    shadowOpacity: 0.09,
  },
  value: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  label: {
    fontSize: 12,
    color: '#a076a2',
    marginTop: 3,
  },
});
