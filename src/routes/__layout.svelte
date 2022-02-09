<script>
  import '../app.css'
  import { browser } from '$app/env'
  import { page } from '$app/stores'
  import * as Fathom from 'fathom-client'
  import { onMount } from 'svelte'

  onMount(async () => {
    Fathom.load(import.meta.env.VITE_FATHOM_ID, {
      url: import.meta.env.VITE_FATHOM_URL,
    })
  })

  $: $page.pathname, browser && Fathom.trackPageview()
</script>

<ul>
  <a href="/" on:click={Fathom.trackGoal(`KWOYX0PK`)}>Home</a>
  <a href="/about">About</a>
  <a href="/services">Services</a>
</ul>

<slot />
