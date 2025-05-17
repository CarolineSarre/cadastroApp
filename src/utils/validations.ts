export interface LoginFields {
    login: string;
    senha: string;
  }
  
  export interface LoginErrors {
    loginError: string;
    senhaError: string;
  }
  
  export const validateLoginFields = ({ login, senha }: LoginFields): LoginErrors => {
    const errors: LoginErrors = {
      loginError: '',
      senhaError: '',
    };
  
    if (!login.trim()) {
      errors.loginError = 'Informe o login';
    }
  
    if (!senha.trim()) {
      errors.senhaError = 'Informe a senha';
    }
  
    return errors;
  };
  