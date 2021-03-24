import apikey from "./env.js";

https: fetch(
  `https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=${apikey.key}`
)
  .then((response) => {
    if (!response.ok)
      throw new Error(
        `Erro ao executar a requisição, status ${response.status}`
      );

    return response.json();
  })
  .then(({ data }) => {
    console.log(data);
    let innerText = "";
    for (let index = 0; index < 10; index++) {
      const element = data[index];
      innerText += `
      <div  class="media">
        <img 
          src="coin.jpg" 
          class="align-self-center mr-3" 
          alt="coin" 
          width="100" 
          height="60">
        <div class="media-body">
          <h5 class="mt-2">${data[index].name}</h5>
          <p>${data[index].symbol}</p>
          <p>
            ${new Date(
              Date.parse(data[index].first_historical_data)
            ).toLocaleDateString()}
          </p>
        </div>
      </div>
      `;
    }
    document.getElementById("app").innerHTML = innerText;
  })
  .catch((error) => {
    console.error(error.message);
  });
