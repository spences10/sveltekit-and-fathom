<script lang="ts">
	export let page_analytics: {
		date: string
		visits: number
		uniques: number
		pageviews: number
	}
</script>

{#snippet stat(data)}
	<div class="stat">
		<div class="stat-title">{data.label}</div>
		<div class="stat-value text-2xl">
			{data.value || 0}
		</div>
	</div>
{/snippet}

<div
	class="stats stats-vertical mb-8 w-full border border-secondary shadow-lg md:stats-horizontal"
>
	{@render stat({ label: 'Entries', value: page_analytics?.visits })}
	{@render stat({
		label: 'Visitors',
		value: page_analytics?.uniques,
	})}
	{@render stat({ label: 'Views', value: page_analytics?.pageviews })}
</div>
