import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_URL = 'http://localhost:8080';  

const hylleAPI = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const publicRoutes = ['/user', '/auth/sign-in', '/auth/register'];

const getToken = async (): Promise<string | null> => {
  const token = await AsyncStorage.getItem('token');
  return token;
};

hylleAPI.interceptors.request.use(
  async (config) => {
    // Verifica se a URL é pública
    if (config.url && publicRoutes.includes(config.url)) {
      return config; // Não adiciona o token
    }

    const token = await getToken();
    console.log('Token:', token);
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Função para lidar com erros globais
hylleAPI.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Lidar com o erro de não autorizado (token expirado, etc.)
      console.error('Token expirado ou inválido');
    }
    return Promise.reject(error);
  }
);

export default hylleAPI;
