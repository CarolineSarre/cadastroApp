import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { HomeScreen } from '../screens/HomeScreen';


jest.mock('../components/BottomTab', () => ({
  BottomTab: () => <></>,
}));

const mockNavigate = jest.fn();
jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockNavigate,
    }),
  };
});

describe('HomeScreen', () => {
  it('deve exibir saudação com nome', () => {
    const { getByText } = render(<HomeScreen/>);
    expect(getByText('Olá, Alice')).toBeTruthy();
  });

  it('deve exibir o código com ícone de localização', () => {
    const { getByText } = render(<HomeScreen/>);
    expect(getByText(/A5874125/)).toBeTruthy();
  });

  it('deve renderizar a imagem corretamente', () => {
    const { getByRole } = render(<HomeScreen/>);
    const image = getByRole('image');
    expect(image).toBeTruthy();
  });

  it('deve exibir o botão "Cadastros" e permitir navegação', () => {
    const { getByText } = render(<HomeScreen/>);
    const botao = getByText('Cadastros');
    fireEvent.press(botao);
    expect(mockNavigate).toHaveBeenCalledWith('Cadastros');
  });

  it('deve exibir o botão "Consultar Organização"', () => {
    const { getByText } = render(<HomeScreen/>);
    expect(getByText('Consultar Organização')).toBeTruthy();
  });
});
