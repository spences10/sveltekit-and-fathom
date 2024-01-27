<script lang="ts">
	import { browser } from '$app/environment'
	import { page } from '$app/stores'
	import { env } from '$env/dynamic/public'
	import Nav from '$lib/components/nav.svelte'
	import * as Fathom from 'fathom-client'
	import { onMount } from 'svelte'
	import '../app.css'
	import type { PageData } from './$types'

	export let data: PageData

	onMount(async () => {
		Fathom.load(env.PUBLIC_FATHOM_ID, {
			url: env.PUBLIC_FATHOM_URL,
		})
	})

	$: $page.url.pathname, browser && Fathom.trackPageview()
</script>

<Nav visitors={data?.visitors?.total || 0} />
<main class="container mx-auto mb-20 max-w-3xl px-4">
	<slot />
</main>
