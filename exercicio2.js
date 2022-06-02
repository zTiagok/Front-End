// Agora que temos a url vamos criar um arquivo (api.js, por exemplo) e dentro dele uma função para pegar o array com as moedas.
// Crie também um arquivo HTML (index.html, por exemplo) que deve conter uma tag para listar as crypto moedas.
// Pronto, temos um array com os dados das moedas e um esqueleto do HTML, agora vamos fazer com que as moedas apareçam na tela. Utilize o seguinte formato: Nome da moeda (símbolo da moeda): valor em dólares. Exemplo: Bitcoin (BTC): 46785.06.
// Conseguiu mostrar as moedas na tela? Agora, que tal usar uma Higher Order Function para filtrar o array das moedas para mostrar apenas as 10 primeiras?
// Que tal usarmos uma API para converter o preço das crypto moedas do exercício anterior para a nossa moeda local ao invés de mostrar o seu valor em dólar?
// Para este exercício vamos utilizar a Currency API.

const coinsUrl = 'https://api.coincap.io/v2/assets'
const exchangerUrl = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.min.json'

const listCrypto = (crypto, exchange) => {
  const parent = document.querySelector('#cryptos')

  const filteredCoins = crypto.sort((a, b) => {
    return a.rank - b.rank
  }).slice(0, 10);

    filteredCoins.map((coin) => {
    const element = document.createElement('li')
    element.innerHTML = `<strong> ${coin.id.toUpperCase()} </strong> - ${coin.symbol}: USD ${parseFloat(coin.priceUsd).toFixed(2)} 
    / BRL ${parseFloat(coin.priceUsd * exchange.brl).toFixed(2)}`
    parent.appendChild(element);
  });
};

// const fetchCoins = () => {
//   fetch(coinsUrl)
//   .then(response => response.json())
//   .then(data => {
//     fetchExchange(data.data)
//   })
// };

const fetchCoins = async () => {
  try {
    const response = await fetch(coinsUrl)
    const data = await response.json();
    await fetchExchange(data.data)
  } catch (error) {
    console.log(`Erro com as moedas! ${error}`)
  }
};

const fetchExchange = async (coins) => {
  try {
    const response = await fetch(exchangerUrl)
    const data = await response.json();
    listCrypto(coins, data.usd)
  } catch (error) {
    console.log(`Erro com a troca! ${error}`)
  }
};

window.onload = () => fetchCoins();