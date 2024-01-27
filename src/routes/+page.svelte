<script lang="ts">
	import { AnalyticsCard, has_analytics_data } from '$lib/components'
	import * as Fathom from 'fathom-client'
	import type { PageData } from './$types'

	export let data: PageData
</script>

<svelte:head>
	<title>SvelteKit with Fathom</title>
</svelte:head>

<section
	class="prose-xl prose-a:link-primary prose-h1:text-secondary"
>
	<h1>Welcome to SvelteKit and Fathom Analytics</h1>

	<p>
		See the realtime stats for this site on the <a
			target="_blank"
			rel="noopener noreferrer"
			href="https://app.usefathom.com/share/nymdtplm/ideal-memory"
		>
			Fathom Analytics dashboard.
		</a>
	</p>

	<p>
		Check out the blogpost on <a
			target="_blank"
			rel="noopener noreferrer"
			href="https://scottspence.com/posts/fathom-analytics-with-svelte"
		>
			configuring Fathom Analytics with Svelte
		</a> for more information.
	</p>

	<button
		class="btn btn-primary"
		on:click={() =>
			Fathom.trackEvent(`Someone clicked the button!`, {
				_value: 100000, // Value in pennies
			})}
	>
		Don't Click This Button!!
	</button>

	{#if has_analytics_data(data)}
		<div class="not-prose mt-10">
			{#if data?.daily_visits.length > 0}
				<p>Live Analytics for daily visits.</p>
				<AnalyticsCard page_analytics={data.daily_visits[0]} />
			{/if}

			{#if data?.monthly_visits.length > 0}
				<p>Live Analytics for monthly visits.</p>
				<AnalyticsCard page_analytics={data.monthly_visits[0]} />
			{/if}

			{#if data?.yearly_visits.length > 0}
				<p>Live Analytics for yearly visits.</p>
				<AnalyticsCard page_analytics={data.yearly_visits[0]} />
			{/if}
		</div>
	{/if}
</section>
