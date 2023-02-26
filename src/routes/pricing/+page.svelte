<script lang="ts">
	import { AnalyticsCard, PricingCard } from '$lib/components'
	import type { PageData } from './$types'

	export let data: PageData
</script>

<svelte:head>
	<title>SvelteKit with Fathom | Pricing</title>
</svelte:head>

<div
	class="grid grid-cols-1 justify-items-center gap-4 md:grid-cols-3"
>
	<PricingCard
		title="Starter"
		price="$5"
		billing_plan="USD / mo Billed yearly ($56)"
		features={[
			'Basic invoicing',
			'Easy to use accounting',
			'Multi-accounts',
		]}
	/>

	<PricingCard
		title="Scale"
		price="$19"
		billing_plan="USD / mo Billed yearly ($220)"
		features={[
			'Advanced invoicing',
			'Easy to use accounting',
			'Multi-accounts',
			'Tax planning toolkit',
			'VAT & VATMOSS filing',
			'Free bank transfers',
		]}
		switch_colors={true}
	/>

	<PricingCard
		title="Growth"
		price="$12"
		billing_plan="USD / mo Billed yearly ($140)"
		features={[
			'Basic invoicing',
			'Easy to use accounting',
			'Multi-accounts',
			'Tax planning toolkit',
		]}
	/>
</div>

<div class="not-prose mt-10">
	<p>Live Analytics for daily visits.</p>
	<AnalyticsCard page_analytics={data?.daily_visits[0]} />
	<p>Live Analytics for monthly visits.</p>
	<AnalyticsCard page_analytics={data?.monthly_visits[0]} />
	<p>Live Analytics for yearly visits.</p>
	<AnalyticsCard page_analytics={data?.yearly_visits[0]} />
</div>
