import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import InvitationCard from './components/InvitationCard';
import CountdownTimer from './components/CountdownTimer';
import AttendanceCounter from './components/AttendanceCounter';

export default function App() {
  return (
    <SafeAreaView style={styles.background}>
      <InvitationCard />
      <CountdownTimer eventDate="2025-09-20T18:00:00" />
      <AttendanceCounter />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: 'linear-gradient(180deg,#fff6fb,#f8f8fd 70%,#f5edf5)', 
  },
});
