import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from '../styles/HomeScreen.styles';
import { BottomTab } from '../components/BottomTab';
import { useNavigation } from '@react-navigation/native';

export const HomeScreen = () => {
  const navigation = useNavigation();

  const handleNavigateToCadastros = () => {
    navigation.navigate('Cadastros' as never);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Olá, Alice</Text>
        <Text style={styles.codeText}>
          <Icon name="location-outline" size={14} /> A5874125
        </Text>
      </View>

      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
        }}
        style={styles.image}
        resizeMode="cover"
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.cardButton} onPress={handleNavigateToCadastros}>
          <Icon name="person-add-outline" size={24} color="#F7941D" style={styles.cardIcon} />
          <Text style={styles.cardText}>Cadastros</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cardButton} onPress={() => {}}>
          <Icon name="business-outline" size={24} color="#F7941D" style={styles.cardIcon} />
          <Text style={styles.cardText}>Consultar Organização</Text>
        </TouchableOpacity>
      </View>

      <BottomTab activeIndex={1} />
    </View>
  );
};
