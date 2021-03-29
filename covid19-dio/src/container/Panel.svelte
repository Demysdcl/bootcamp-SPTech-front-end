<script lang="ts">
  import Button from '@/components/Button.svelte'
  import Select from '@/components/Select.svelte'

  export let value

  let date = new Date()

  const countries = [
    { title: 'Brasil', value: 'brazil' },
    { title: 'Estados Unidos', value: 'usa' },
    { title: 'Alemanha', value: 'germany' },
    { title: 'Itália', value: 'italy' },
    { title: 'China', value: 'china' },
  ].map((item) => ({ ...item, image: item.value }))

  let selected = countries.filter((item) => item.value === value)[0]

  $: {
    value = selected.value
  }
</script>

<section>
  <div>
    <h1>COVID19</h1>
    <p>Painel Coronavírus</p>
    <small>Atualizado em: {date} </small>
    <Select bind:selected options={countries} />
  </div>

  <div>
    <Button on:click>{navigator.share ? 'compartilhar' : 'copiar'}</Button>
  </div>
</section>

<style lang="scss">
  section {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 16px;
    background-color: #fff;
    border-radius: 4px;

    div {
      display: flex;
      flex-direction: column;

      h1 {
        color: #6b79e7;
        margin-bottom: 16px;
        font-size: 36px;
      }

      p {
        margin-bottom: 16px;
      }

      small {
        color: #757575;
      }

      :global(.select) {
        margin: 20px 0;
      }
    }
  }
</style>
