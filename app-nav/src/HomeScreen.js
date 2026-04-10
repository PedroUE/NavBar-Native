import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>🏠</Text>
      <Text style={styles.text}>Tela Home</Text>
      <Text style={styles.subtitle}>Bem-vindo ao app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
  },
  emoji: {
    fontSize: 64,
    marginBottom: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1e40af',
},
  subtitle: {
    fontSize: 16,
    color: '#64748b',
    marginTop: 8,
},
});