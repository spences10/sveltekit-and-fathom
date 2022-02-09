<script>
  import { browser } from '$app/env'
  import { page } from '$app/stores'
  import Nav from '$lib/components/nav.svelte'
  import * as Fathom from 'fathom-client'
  import { onMount } from 'svelte'
  import '../app.css'

  onMount(async () => {
    Fathom.load(import.meta.env.VITE_FATHOM_ID, {
      url: import.meta.env.VITE_FATHOM_URL,
    })
  })

  $: $page.pathname, browser && Fathom.trackPageview()
</script>

<Nav />
<main class="container mx-auto mb-20 max-w-3xl px-4">
  <slot />
</main>
