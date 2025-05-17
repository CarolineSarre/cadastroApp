import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import LoginScreen from '../screens/LoginScreen';

test('mostra erro se email for inválido', async () => {
  const { getByPlaceholderText, getByText } = render(<LoginScreen navigation={{ navigate: jest.fn() }} />);
  
  fireEvent.changeText(getByPlaceholderText('email@exemplo.com'), 'emailinvalido');
  fireEvent.press(getByText('Entrar'));

  expect(getByText('Email inválido')).toBeTruthy();
});
