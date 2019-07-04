import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4042';

export const fetchPets = () => {
  return axios.get('/pets').then(response => response.data);
};

export const fetchPetWithId = id => {
  return axios.get(`/pets/${id}`).then(response => response.data);
};
