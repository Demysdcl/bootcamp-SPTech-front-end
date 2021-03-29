import App from './App.svelte'
import * as serviceWorker from './serviceWorker'

const app = new App({
  target: document.body,
})

serviceWorker.register()

export default app
