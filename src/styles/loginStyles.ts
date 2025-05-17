import { StyleSheet } from 'react-native';

export const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',    
  },
  card: {
    width: '100%',
    maxWidth: 760,
    padding: 24,
    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0049a',
    marginBottom: 16,
    textAlign: 'center',
  },
  linkText: {
    fontSize: 12,
    color: '#0d7856',
    textAlign: 'center',
    marginBottom: 16,
  },
});
