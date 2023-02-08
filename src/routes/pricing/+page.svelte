<script>
	import { PricingCard } from '$lib/components'
</script>

<svelte:head>
	<title>SvelteKit with Fathom | Pricing</title>
</svelte:head>

<div class="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center">
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
