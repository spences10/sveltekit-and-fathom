<script lang="ts">
	import { browser } from '$app/environment'
	import { page } from '$app/stores'
	import {
		PUBLIC_FATHOM_ID,
		PUBLIC_FATHOM_URL,
	} from '$env/static/public'
	import Nav from '$lib/components/nav.svelte'
	import * as Fathom from 'fathom-client'
	import { onMount } from 'svelte'
	import '../app.css'
	import type { PageData } from './$types'

	export let data: PageData

	onMount(async () => {
		Fathom.load(PUBLIC_FATHOM_ID, {
			url: PUBLIC_FATHOM_URL,
		})
	})

	$: $page.url.pathname, browser && Fathom.trackPageview()
</script>

<Nav visitors={data?.visitors.total} />
<main class="container mx-auto mb-20 max-w-3xl px-4">
	<slot />
</main>
