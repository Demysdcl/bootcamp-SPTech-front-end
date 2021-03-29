<script lang="ts">
  import Card from './container/Card.svelte'
  import Panel from './container/Panel.svelte'
  import countriesService from './countries.service'

  let country = 'brazil'

  $: promise = countriesService.getCountry(country)

  let textCovid19 = ''

  const shareInfo = () => {
    navigator.share({
      title: `Dados do Covid19 - ${country}`,
      text: textCovid19,
      url: 'https://covid19pwa.netlify.app/',
    })
  }

  const copyInfo = () => {
    navigator.clipboard.writeText(textCovid19)
  }

  const handleClick = () => {
    if (navigator.share) {
      shareInfo()
    } else {
      copyInfo()
    }
  }

  const transform = (item) => {
    textCovid19 = `País: ${country} - Dados atualizados em ${new Date()} - Hoje - Casos: ${
      item.todayCases
    }. Óbitos hoje: ${item.todayDeaths}. Total - Casos: ${
      item.cases
    }. Óbitos: ${item.deaths}. Recuperados: ${item.recovered}`

    return [
      { legend: 'Total de casos', value: item.cases, color: '#5d78ff' },
      { legend: 'Óbitos hoje', value: item.todayDeaths, color: '#f7b829' },
      { legend: 'Casos hoje', value: item.todayCases, color: '#222' },
      { legend: 'Total de mortos', value: item.deaths, color: '#e95078' },
      {
        legend: 'Total de recuperados',
        value: item.recovered,
        color: '#67c887',
      },
    ]
  }
</script>

<main>
  <div class="container">
    <Panel bind:value={country} on:click={handleClick} />

    {#await promise}
      <h3>Loading ...</h3>
    {:then response}
      <div class="cards">
        {#each transform(response) as item}
          <Card {...item} />
        {/each}
      </div>
    {:catch error}
      <p>Deu ruim</p>
    {/await}
  </div>
</main>

<style lang="scss">
  main {
    .container {
      display: flex;
      flex-direction: column;
      margin: 20px auto;
      width: 980px;

      .cards {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 16px;

        :global(.card) {
          margin-top: 18px;
        }
      }
    }
  }

  @media (max-width: 980px) {
    main .container {
      width: 90%;

      .cards {
        grid-template-columns: 1fr;
        gap: 5px;
      }
    }
  }
</style>
