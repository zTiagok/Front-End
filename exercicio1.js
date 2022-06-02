const API_URL = 'https://icanhazdadjoke.com/'

const fetchJoke = () => {
  const parent = document.querySelector('#jokeContainer')

  const myObject = {
    method: 'GET',
    headers: {'Accept': 'application/json'},
  };

  const myResult = fetch(API_URL, myObject)
  .then(response => response.json())
  .then(data => {
    parent.innerHTML = data.joke
  })
  .catch(error => console.log(`A requisição do servidor retornou com um erro. ${error}`));


};

window.onload = () => fetchJoke();