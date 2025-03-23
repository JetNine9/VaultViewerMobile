import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
    width: '100%',
    backgroundColor: '#f7f7f7',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f7f7f7',
  },
  card: {
    width: '100%',
    maxWidth: 400,
    padding: 16,
    borderRadius: 12,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderRadius: 12,
    marginBottom: 12,
  },
  button: {
    marginTop: 20,
    borderRadius: 12,
  },
  signupLink: {
    marginTop: 20,
    textAlign: 'center',
  },
});
