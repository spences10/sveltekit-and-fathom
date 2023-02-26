<script lang="ts">
	import { AnalyticsCard } from '$lib/components'
	import type { PageData } from './$types'

	export let data: PageData
</script>

<svelte:head>
	<title>SvelteKit with Fathom | Contact</title>
</svelte:head>

<section
	class="prose-xl prose-a:link-primary prose-h1:text-secondary"
>
	<h1>Contact us</h1>
	<div class="sm:flex sm:justify-between">
		<input
			type="text"
			placeholder="Name"
			class="input-bordered input-primary input mb-10"
		/>
		<input
			type="text"
			placeholder="Contact"
			class="input-bordered input-primary input mb-10"
		/>
		<button class="btn-primary btn">Submit</button>
	</div>

	<div class="not-prose mt-10">
		<p>Live Analytics for daily visits.</p>
		<AnalyticsCard page_analytics={data?.daily_visits[0]} />
		<p>Live Analytics for monthly visits.</p>
		<AnalyticsCard page_analytics={data?.monthly_visits[0]} />
		<p>Live Analytics for yearly visits.</p>
		<AnalyticsCard page_analytics={data?.yearly_visits[0]} />
	</div>
</section>
