import React, { useState } from 'react';
import { TextInput, Button, Card } from 'react-native-paper';
import { KeyboardAvoidingView, Platform, View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => console.log('Logging in with:', email, password);

  return (
    <KeyboardAvoidingView
    style={styles.keyboardAvoidingView}
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}

    >
      <View style={styles.container}>
        <Card style={styles.card}>
          <Card.Content>
            <Text style={styles.header}>Login</Text>
            <TextInput
              label="Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              style={styles.input}
              mode="outlined"
              autoCapitalize="none"
              autoCorrect={false}
            />
            <TextInput
              label="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              style={styles.input}
              mode="outlined"
            />
            <Button mode="contained" onPress={handleLogin} style={styles.button}>Login</Button>
          </Card.Content>
        </Card>
        <TouchableOpacity>
          <Text style={styles.signupLink}>Dont have an account? Sign up</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginPage;
