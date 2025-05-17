import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface BottomTabProps {
  activeIndex: number;
  onPress?: (index: number) => void;
}

export const BottomTab: React.FC<BottomTabProps> = ({ activeIndex, onPress }) => {
  return (
    <View style={styles.container}>
      {['call-outline', 'person-circle-outline', 'heart-outline'].map((icon, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => onPress?.(index)}
          style={styles.tabItem}
        >
          <Icon
            name={icon}
            size={24}
            color={activeIndex === index ? '#0B3B2E' : '#999'}
          />
          <Text
            style={[
              styles.label,
              { color: activeIndex === index ? '#0B3B2E' : '#999' },
            ]}
          >
            ITEM {index + 1}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderColor: '#eee',
    backgroundColor: '#fff',
  },
  tabItem: {
    alignItems: 'center',
  },
  label: {
    fontSize: 12,
    marginTop: 4,
  },
});
