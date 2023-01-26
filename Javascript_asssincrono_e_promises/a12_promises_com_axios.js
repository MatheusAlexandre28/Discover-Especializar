import axios from "axios";
axios.get('https://api.github.com/users/maykbrito')
  .then(response => axios.get(response.data.repos_url))
  .then(repos => console.log(repos.data))
  .catch(error => console.log(error))

// COdigo axios reduzido e com o mesmo funcionamento