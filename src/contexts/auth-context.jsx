import { createContext, useState } from "react";
import { api } from "../lib/axios";

export const AuthContext = createContext({});

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);

  async function signIn({ email, password }) {
    try {
      const response = await api.get("users", {
        params: {
          email,
        },
      });

      if (!response.data || response.data.length === 0 || response.data[0].password !== password) {
        alert("Email ou senha incorretos.");
        return; // Adiciona um retorno para interromper o processo de login
      }

      setUser(response.data[0]);

      alert(`Seja bem-vindo ${response.data[0].name}`);
    } catch (error) {
      console.log(error);
      alert("Não foi possível entrar.");
    }
  }

  async function signOut() {
    setUser(null); // Corrige para setar null em vez de um objeto vazio
  }

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
