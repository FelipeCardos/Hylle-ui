import hylleAPI from "./HylleConfigAPI";

export const authenticateUser= async (username: string, password: string) => {
    try {
      const response = await hylleAPI.post('/auth/sign-in', {
        username,
        password
      });
  
      const { token, ...userData } = response.data;
      console.log(response.data)
      return { token, user: userData };
    } catch (error) {
      console.error('Could not autenticate user', error);
    }
  };