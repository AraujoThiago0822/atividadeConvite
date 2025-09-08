import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CounterItem = ({ label, value, onAdd, onSubtract, color }) => (
  <View style={styles.counterRow}>
    <Text style={[styles.counterLabel, { color }]}>{label}</Text>
    <TouchableOpacity style={styles.button} onPress={onAdd}>
      <Text style={styles.buttonText}>+</Text>
    </TouchableOpacity>
    <Text style={styles.value}>{value}</Text>
    <TouchableOpacity style={styles.button} onPress={onSubtract}>
      <Text style={styles.buttonText}>-</Text>
    </TouchableOpacity>
  </View>
);

export default function AttendanceCounter() {
  const [adult, setAdult] = useState(0);
  const [senior, setSenior] = useState(0);
  const [child, setChild] = useState(0);
  const [confirmed, setConfirmed] = useState(false);

  const total = adult + senior + child;

  function handleConfirm() {
    setConfirmed(true);
    setTimeout(() => setConfirmed(false), 3000); // mensagem temporária
  }

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Confirme sua presença</Text>
      <CounterItem
        label="Adulto"
        value={adult}
        onAdd={() => setAdult(adult + 1)}
        onSubtract={() => setAdult(Math.max(adult - 1, 0))}
        color="#66a6f8"
      />
      <CounterItem
        label="Idoso"
        value={senior}
        onAdd={() => setSenior(senior + 1)}
        onSubtract={() => setSenior(Math.max(senior - 1, 0))}
        color="#ea7b4a"
      />
      <CounterItem
        label="Criança"
        value={child}
        onAdd={() => setChild(child + 1)}
        onSubtract={() => setChild(Math.max(child - 1, 0))}
        color="#56c7c7"
      />
      <Text style={styles.total}>Total: {total}</Text>
      <TouchableOpacity
        style={styles.confirmButton}
        onPress={handleConfirm}
        disabled={total === 0}
      >
        <Text style={styles.confirmText}>Confirmar presença</Text>
      </TouchableOpacity>

      {confirmed && (
        <View style={styles.confirmContainer}>
          <Text style={styles.confirmMsg}>
            🎉 Presença confirmada para {total} pessoas! Obrigado 💙
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 340,
    padding: 28,
    borderRadius: 24,
    backgroundColor: '#eef3fb',
    elevation: 6,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#d5e2fa',
    marginBottom: 36,
  },
  title: { fontSize: 19, color: '#478cec', marginBottom: 17, fontWeight: '600' },
  counterRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    gap: 10,
    width: '100%',
    justifyContent: 'center',
  },
  counterLabel: {
    fontWeight: '600',
    fontSize: 16,
    width: 80,
    textAlign: 'right',
  },
  button: {
    backgroundColor: '#e5eaff',
    borderRadius: 8,
    paddingHorizontal: 11,
    paddingVertical: 3,
    marginHorizontal: 3,
  },
  buttonText: { fontSize: 20, color: '#478cec', fontWeight: 'bold' },
  value: { width: 26, textAlign: 'center', fontSize: 17 },
  total: { fontSize: 18, fontWeight: '700', marginTop: 17, color: '#ea7b4a' },
  confirmButton: {
    backgroundColor: '#62a4eb',
    borderRadius: 9,
    paddingVertical: 11,
    paddingHorizontal: 25,
    marginTop: 22,
    marginBottom: 6,
    elevation: 3,
  },
  confirmText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '700',
    letterSpacing: 0.5,
    textAlign: 'center',
  },
  confirmContainer: {
    paddingVertical: 12,
    alignItems: 'center',
    width: '100%',
  },
  confirmMsg: {
    color: '#478cec',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});
