// part12-containers-applications/todo-app/todo-frontend/src/util/apiClient.js
import axios from 'axios'

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
})

export default apiClient