import React from 'react';
import { TextInput, StyleSheet, TextInputProps } from 'react-native';

const InputField = (props: TextInputProps) => {
  return <TextInput style={styles.input} placeholderTextColor="#5b5b5b" {...props} />;
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#0a4e32',
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    marginBottom: 16,
  },
});

export default InputField;
