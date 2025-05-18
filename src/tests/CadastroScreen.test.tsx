import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import CadastroScreen from '../../src/screens/CadastroScreen';
import * as api from '../../src/services/api';

const mockUsers = [
  { id: 1, name: 'Alice', phone: '123456789', avatar: 'https://i.pravatar.cc/150?img=1' },
  { id: 2, name: 'Bob', phone: '987654321', avatar: 'https://i.pravatar.cc/150?img=2' },
];

jest.spyOn(api, 'getUsers').mockResolvedValue(mockUsers);

describe('CadastroScreen', () => {
  it('exibe o campo de busca', async () => {
    const { getByPlaceholderText } = render(<CadastroScreen />);
    expect(getByPlaceholderText('🔍 Procurar')).toBeTruthy();
  });

  it('exibe os usuários após o carregamento', async () => {
    const { getByText } = render(<CadastroScreen />);
    await waitFor(() => {
      expect(getByText('Alice')).toBeTruthy();
      expect(getByText('Bob')).toBeTruthy();
    });
  });

  it('filtra usuários pelo nome', async () => {
    const { getByPlaceholderText, queryByText } = render(<CadastroScreen />);
    const input = getByPlaceholderText('🔍 Procurar');

    await waitFor(() => expect(queryByText('Alice')).toBeTruthy());

    fireEvent.changeText(input, 'Bob');

    await waitFor(() => {
      expect(queryByText('Alice')).toBeNull();
      expect(queryByText('Bob')).toBeTruthy();
    });
  });

  it('mostra o indicador de carregamento inicialmente', () => {
    const { getByTestId } = render(<CadastroScreen />);
    expect(getByTestId('ActivityIndicator')).toBeTruthy();
  });
});