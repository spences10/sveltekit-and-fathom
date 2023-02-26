<script lang="ts">
	import { trackGoal } from 'fathom-client'
	import { AnalyticsCard } from '$lib/components'
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
		class="btn-primary btn"
		on:click={() => trackGoal(`Q0PJFFBW`, 100)}
	>
		Don't Click This Button!!
	</button>

	<div class="not-prose mt-10">
		<p>Live Analytics for daily visits.</p>
		<AnalyticsCard page_analytics={data?.daily_visits[0]} />
		<p>Live Analytics for monthly visits.</p>
		<AnalyticsCard page_analytics={data?.monthly_visits[0]} />
		<p>Live Analytics for yearly visits.</p>
		<AnalyticsCard page_analytics={data?.yearly_visits[0]} />
	</div>
</section>
