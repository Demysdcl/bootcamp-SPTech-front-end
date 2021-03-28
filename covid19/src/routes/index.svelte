<script lang="ts">
</script>

<main>
	<h1>Hello world!</h1>
</main>

<style lang="scss">
	* {
		outline: none;
		box-sizing: border-box;
	}

	:global(html),
	:global(body) {
		width: 100vw;
		height: 100vh;
		margin: 0;
		padding: 0;
		display: flex;
	}

	main {
		background-image: url('./assets/images/covid.jpg');
		height: 100vh;
		width: 100vw;
		background-size: cover;
		background-position: center center;
	}

	h1 {
		margin: 0;
	}
</style>
