import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:3000/api',
});

export const insertJoke = payload => api.post("/joke", payload)
export const getAllJokes = () => api.get('/joke')
export const updateJokeById = (id, payload) => api.put(`/joke/${id}`, payload)
export const deleteJokeById = id => api.delete(`/joke/${id}`)
export const getJokeById = id => api.get(`/joke/${id}`)

const apis = {
    insertJoke,
    getAllJokes,
    updateJokeById,
    deleteJokeById,
    getJokeById,
}

export default apis