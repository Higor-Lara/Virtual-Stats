import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

interface SignInCredencials {
  email: string;
  password: string;
}

interface Adm {
  nome: string;
  id_hospital: number;
  hospital: { nome: string };
}

interface AuthContextData {
  signed: boolean;
  signIn(credencials: SignInCredencials): Promise<void>;
  signOut(): void;
  adm: Adm;
}

interface AuthState {
  signed: boolean;
  token: string;
  adm: Adm;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@VirtualStats:token');
    const adm = localStorage.getItem('@VirtualStats:adm');

    if (token && adm) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      return { token, signed: true, adm: JSON.parse(adm) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    try {
      const response = await api.post('/session/login', {
        email,
        senha: password,
      });

      const { token, adm } = response.data;

      localStorage.setItem('@VirtualStats:token', token);
      localStorage.setItem('@VirtualStats:adm', JSON.stringify(adm));

      api.defaults.headers.authorization = `Bearer ${token}`;

      setData({ token, signed: true, adm });
    } catch (err) {
      alert('Erro no login');
    }
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@VirtualStats:token');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider
      value={{ signIn, signOut, signed: data.signed, adm: data.adm }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider');
  }

  return context;
}
