import { validateLoginFields } from '../../src/utils/validations'

describe('validateLoginFields', () => {
  it('retorna erro quando login está vazio', () => {
    const result = validateLoginFields({ login: '', senha: '123456' });

    expect(result.loginError).toBe('Informe o login');
    expect(result.senhaError).toBe('');
  });

  it('retorna erro quando senha está vazia', () => {
    const result = validateLoginFields({ login: 'usuario', senha: '' });

    expect(result.loginError).toBe('');
    expect(result.senhaError).toBe('Informe a senha');
  });

  it('retorna erros quando ambos os campos estão vazios', () => {
    const result = validateLoginFields({ login: '', senha: '' });

    expect(result.loginError).toBe('Informe o login');
    expect(result.senhaError).toBe('Informe a senha');
  });

  it('não retorna erro quando ambos os campos estão preenchidos', () => {
    const result = validateLoginFields({ login: 'usuario', senha: '123456' });

    expect(result.loginError).toBe('');
    expect(result.senhaError).toBe('');
  });
});