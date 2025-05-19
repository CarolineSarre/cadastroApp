import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import InputField from '../components/InputField';
import PrimaryButton from '../components/PrimaryButton';
import { loginStyles } from '../styles/loginStyles';
import { validateLoginFields } from '../utils/validations';

type RootStackParamList = {
  Login: undefined;
  Home: undefined;
};

type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

const LoginScreen = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();

  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [loginError, setLoginError] = useState('');
  const [senhaError, setSenhaError] = useState('');

  const handleLogin = () => {
    const { loginError, senhaError } = validateLoginFields({ login, senha });

    setLoginError(loginError);
    setSenhaError(senhaError);

    if (!loginError && !senhaError) {
      navigation.navigate('Home');
    }
  };

  return (
    <SafeAreaView style={loginStyles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flex: 1 }}
        keyboardVerticalOffset={60}
      >
        <View style={loginStyles.card}>
          <Text style={loginStyles.welcomeText}>Seja bem vindo!</Text>

          <InputField placeholder="Login" value={login} onChangeText={setLogin} />
          {loginError ? <Text style={styles.error}>{loginError}</Text> : null}

          <InputField placeholder="Senha" secureTextEntry value={senha} onChangeText={setSenha} />
          {senhaError ? <Text style={styles.error}>{senhaError}</Text> : null}

          <Text style={loginStyles.linkText}>Redefinir senha</Text>

          <PrimaryButton title="ENTRAR" onPress={handleLogin} />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  error: {
    color: 'red',
    fontSize: 12,
    marginTop: -12,
    marginBottom: 12,
    marginLeft: 4,
  },
});

export default LoginScreen;