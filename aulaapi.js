// Criação de uma API com js. 

// // Define a chave da API e a URL base para obter as bandeiras dos países.
const apiKey = "af042ed61c29b1a3951f1d02cd1740b0"; // chave da API 
const apiCountryURL = "https://flagsapi.com//flat/64.png"; // Define a URL da API

// Seleciona elementos HTML usando seus IDs.
const cityInput = document.getElementById("#city-input");
const searchBtn = document.getElementById("#search");

const cityElement = document.getElementById("#city");
const tempElement = document.getElementById("#temperature span");
const descElement = document.getElementById("#description");
const weatherIconElement = document.getElementById("#weather-icon");
const countryElement = document.getElementById("#country");
const humidityElement = document.getElementById("#humidity span");
const windElement = document.getElementById("#wind span");

// Função para obter dados meteorológicos de uma cidade.
const getWeatherData = async (city) => {

  // Constrói a URL da API do OpenWeatherMap com a cidade e sua chave de API.
  const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metricC&appid=${apiKey}&lang=pt_br`; // duvida se existe a possibilidade de passar a chave diretamente sem o uso de uma variável.

  // Faz uma solicitação à API usando fetch e aguarda a resposta.
  const resposta = await fetch(apiWeatherURL); // perscrução a respeito do elemento await // 
  // Converte a resposta em formato JSON.
  const data = await resposta.json(); // perscrução a resposta em formato JSON.

  return data; // Retorna os dados meteorológicos. 'resposta' em formato JSON.
}

const showWeatherData = async (city) => {
  // Chama a função para obter os dados meteorológicos da cidade especificada. Esta função recebe 'async' para obter os dados em questão.
  const data = await getWeatherData(city);

  // Atualiza os elementos HTML com os dados meteorológicos obtidos.
  cityElement.innerText = data.name;
  tempElement.innerText = parseInt(data.main.temp);
  descElement.innerText = data.weather[0].description;
  // Define a imagem do ícone do clima com base nos dados da API.
  weatherIconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
  );
}

// Evento de clique do botão de pesquisa.
searchBtn.addEventListener("click", (e) => {
  e.preventDefault(); // Impede o envio do formulário (comportamento padrão).

  const city = cityInput.value; // Obtém a cidade inserida pelo usuário. dentro do input.
  showWeatherData(city); // Chama a função para exibir os dados meteorológicos.
});


// Escolhendo uma API. Open AI, ChatGPT

document.getElementById('buscarDados').addEventListener('click', function() {
  // 4. Fazer uma requisição à API
  fetch('URL_DA_API') // função fetch em js (perscrução)
      .then(function(response) {
          return response.json();
      })
      .then(function(data) {
          // 5. Processar os dados da API
          var resultado = document.getElementById('resultado');
          resultado.innerHTML = "Dados recebidos: " + JSON.stringify(data);
      })
      .catch(function(error) {
          console.log('Erro: ' + error);
      });
});
