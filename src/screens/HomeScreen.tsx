import React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }: any) {
  return (
    <View>
      <Text>Bem-vindo à tela inicial!</Text>
      <Button title="Ver Cadastros" onPress={() => navigation.navigate('Cadastros')} />
    </View>
  );
}
