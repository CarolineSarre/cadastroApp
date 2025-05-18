import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

export const getUsers = async () => {
  const response = await api.get('/users');
  const data = response.data;

  const usersWithAvatars = data.map((user: any, index: number) => ({
    id: user.id,
    name: user.name,
    phone: user.phone,
    avatar: `https://randomuser.me/api/portraits/${index % 2 === 0 ? 'men' : 'women'}/${index}.jpg`,
  }));

  return usersWithAvatars;
};


