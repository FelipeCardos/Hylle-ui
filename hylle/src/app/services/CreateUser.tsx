import hylleAPI from "./HylleConfigAPI";

export const createUser = async (email: string, password: string, name: string, username: string) => {
    try {
      const response = await hylleAPI.post('/user', {
        email,
        password,
        name,
        username,
      });
  
      const { token, ...userData } = response.data;
      return { token, user: userData };
    } catch (error) {
      console.error('Erro ao registrar usuário:', error);
      throw error;
    }
  };