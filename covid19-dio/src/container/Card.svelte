<script lang="ts">
  export let color = 'black'
  export let value = 0
  export let legend = 'Total de ...'
</script>

<div class="card" style={`--color:${color}`}>
  <h1>{value}</h1>
  <p>{legend}</p>
</div>

<style lang="scss">
  .card {
    border-left: 8px solid var(--color);
    background-color: white;
    padding: 20px;
    color: #222;
    border-radius: 4px;

    h1 {
      font-size: 50px;
      font-weight: 500;
    }

    p {
      font-size: 24px;
      margin-top: 16px;
      line-height: 36px;
    }
  }
</style>
