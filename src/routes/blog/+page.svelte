<script lang="ts">
	import { AnalyticsCard, has_analytics_data } from '$lib/components'
	import type { PageData } from './$types'

	export let data: PageData
</script>

<svelte:head>
	<title>SvelteKit with Fathom | Blog</title>
</svelte:head>

<section
	class="prose-xl prose-a:link-primary prose-h1:text-secondary"
>
	<h1>Blog</h1>

	<p>Bloggy, blog mc bloggerson!</p>

	{#if has_analytics_data(data)}
		<div class="not-prose mt-10">
			<p>Live Analytics for daily visits.</p>
			<AnalyticsCard page_analytics={data.daily_visits[0]} />

			<p>Live Analytics for monthly visits.</p>
			<AnalyticsCard page_analytics={data.monthly_visits[0]} />

			<p>Live Analytics for yearly visits.</p>
			<AnalyticsCard page_analytics={data.yearly_visits[0]} />
		</div>
	{/if}
</section>
