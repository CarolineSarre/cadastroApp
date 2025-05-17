import React from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
  email: yup.string().email('Email inválido').required('Obrigatório'),
  password: yup.string().min(4, 'Mínimo 4 caracteres').required('Obrigatório'),
});

export default function LoginScreen({ navigation }: any) {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    navigation.navigate('Home');
  };

  return (
    <View>
      <Text>Email</Text>
      <Controller
        name="email"
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextInput onChangeText={onChange} value={value} placeholder="email@exemplo.com" />
        )}
      />
      {errors.email && <Text>{errors.email.message}</Text>}

      <Text>Senha</Text>
      <Controller
        name="password"
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextInput secureTextEntry onChangeText={onChange} value={value} placeholder="********" />
        )}
      />
      {errors.password && <Text>{errors.password.message}</Text>}

      <Button title="Entrar" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}
