import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function InvitationCard() {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>💙 Chá Revelação do Caio 💗</Text>
      <View style={styles.divider} />
      <Text style={styles.desc}>
        É menine ou menina?!{'\n'}20/09/2025 às 16h
      </Text>
      <Text style={styles.info}>Local: Avenida Águia de Haia, 2983</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 340,
    padding: 34,
    borderRadius: 32,
    backgroundColor: '#fffafd',
    elevation: 8,
    shadowColor: '#d6b1e8',
    shadowOffset: { width: 0, height: 7 },
    shadowOpacity: 0.16,
    shadowRadius: 12,
    alignItems: 'center',
    marginVertical: 36,
    borderWidth: 2,
    borderColor: '#e6e4f7',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#62a4eb',
    letterSpacing: 1,
    marginBottom: 8,
    textAlign: 'center',
    fontFamily: 'sans-serif-medium',
  },
  divider: {
    width: '72%',
    height: 3,
    backgroundColor: '#e6a8df',
    marginVertical: 14,
    borderRadius: 2,
  },
  desc: {
    fontSize: 19,
    color: '#4a4a4c',
    marginBottom: 14,
    textAlign: 'center',
    lineHeight: 26,
  },
  info: {
    fontSize: 16,
    color: '#aaabd3',
    textAlign: 'center',
    marginTop: 2,
  },
});
