import React, { useEffect, useState } from 'react';
import {
  View,
  TextInput,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  Text,
  SafeAreaView,
} from 'react-native';
import { getUsers } from '../services/api';
import { styles } from '../styles/CadastroScreen';
import { CadastroCard } from '../components/CadastroCard';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function CadastroScreen() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    getUsers().then(data => {
      setUsers(data);
      setFilteredUsers(data);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    const query = search.toLowerCase();
    const filtered = users.filter((user: any) =>
      user.name.toLowerCase().includes(query) || user.phone.includes(query)
    );
    setFilteredUsers(filtered);
  }, [search, users]);

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator testID="ActivityIndicator" size="large" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Cadastros</Text>
      </View>

      <TextInput
        placeholder="🔍 Procurar"
        placeholderTextColor="#999"
        value={search}
        onChangeText={setSearch}
        style={styles.searchInput}
      />

      <FlatList
        data={filteredUsers}
        keyExtractor={(item: any) => item.id.toString()}
        renderItem={({ item }) => (
          <CadastroCard
            name={item.name}
            phone={item.phone}
            avatar={item.avatar}
          />
        )}
      />

      <TouchableOpacity style={styles.floatingButton} onPress={() => {}}>
        <Ionicons name="add" size={32} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
