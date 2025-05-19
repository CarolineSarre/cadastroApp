import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  header: {
    paddingTop: 32,
    paddingBottom: 8,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#004225',
  },
  codeText: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  image: {
    width: '100%',
    height: 160,
    borderRadius: 12,
    marginVertical: 16,
  },
  buttonContainer: {
    gap: 16,
    marginBottom: 16,
  },
  cardButton: {
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 24,
    alignItems: 'center',
    flexDirection: 'row',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    borderBottomWidth: 6,
    borderBottomColor: '#F7941D',
    justifyContent: 'center',
  },
  cardIcon: {
    width: '60%',
    height: 100,
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#444',
    textAlign: 'center',
  },
});
