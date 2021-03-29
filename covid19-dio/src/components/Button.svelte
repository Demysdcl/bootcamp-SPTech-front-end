<script lang="ts">
</script>

<button on:click><slot /></button>

<style lang="scss">
  button {
    padding: 10px 16px;
    background-color: #6b79e7;
    color: #fff;
    text-transform: uppercase;
    cursor: pointer;
    border-radius: 4px;
    font-size: 0.9rem;
    border: none;
    transition: transform 0.3s linear, opacity 0.3s linear;

    &:hover {
      opacity: 0.8;
    }

    &:active {
      transform: scale(0.95, 0.95);
    }
  }
</style>
