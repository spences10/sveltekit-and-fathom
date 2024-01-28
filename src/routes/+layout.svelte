<script lang="ts">
	import { browser } from '$app/environment'
	import { page } from '$app/stores'
	import { env } from '$env/dynamic/public'
	import { Nav } from '$lib/components'
	import * as Fathom from 'fathom-client'
	import type { Snippet } from 'svelte'
	import '../app.css'
	import type { LayoutData } from './$types'

	const { PUBLIC_FATHOM_ID, PUBLIC_FATHOM_URL } = env

	let { data, children } = $props<{
		data: LayoutData
		children: Snippet
	}>()

	$effect(() => {
		if (browser) {
			Fathom.load(PUBLIC_FATHOM_ID, {
				url: PUBLIC_FATHOM_URL,
			})
		}
	})

	// Track pageview on route change
	$effect(() => {
		$page.url.pathname, browser && Fathom.trackPageview()
	})
</script>

<Nav visitors={data?.visitors?.total || 0} />
<main class="container mx-auto mb-20 max-w-3xl px-4">
	{@render children()}
</main>
