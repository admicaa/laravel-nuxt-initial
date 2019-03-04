import axios from 'axios'
export default () => {
  return axios.get('http://127.0.0.1:8000/api/js/lang-en.js')
    .then(response => {
      return response.data;
    })
}
