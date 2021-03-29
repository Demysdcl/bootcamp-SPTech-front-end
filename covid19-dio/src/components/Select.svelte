<script lang="ts">
  type Option = {
    title: string
    value: string
    image: string
  }

  let visible = false

  export let options: Option[] = []

  export let selected: Option

  function handleSelect(option: Option) {
    selected = option
    visible = false
  }

  let selectDiv

  window.addEventListener('click', (event) => {
    if (!selectDiv.contains(event.target)) visible = false
  })
</script>

<div bind:this={selectDiv} class="select">
  <span class="option" on:click={() => (visible = !visible)}>
    {selected.title}
    <div class="selected">
      <img src={`./assets/images/${selected.image}.png`} alt={selected.value} />
    </div>
  </span>

  <div class="options" class:visible>
    {#each options as option}
      <span class="option" on:click={() => handleSelect(option)}>
        {option.title}
        <img src={`./assets/images/${option.image}.png`} alt={option.value} />
      </span>
    {/each}
  </div>
</div>

<style lang="scss">
  .select {
    display: flex;
    flex-direction: column;
    position: relative;
    border-bottom: 1px solid #000;

    .selected {
      display: flex;
      align-items: center;

      img {
        margin-right: 5px;
      }

      &::after {
        content: '🔻';
      }
    }

    .options {
      display: none;
      position: absolute;
      background-color: white;
      padding: 5px;
      border-radius: 4px;
      // top: 100%;
      width: 100%;
      box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.44);

      &.visible {
        display: block;
      }
    }

    .option {
      display: flex;
      justify-content: space-between;
      cursor: pointer;
      padding: 5px;

      img {
        margin-left: 10px;
      }
    }
  }
</style>
