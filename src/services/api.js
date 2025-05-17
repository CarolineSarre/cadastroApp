import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

export async function getUsers() {
  const response = await api.get('/users');
  return response.data;
}

