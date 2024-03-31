<script lang="ts">
	let {
		page_analytics,
	}: {
		page_analytics: {
			date: string
			visits: number
			uniques: number
			pageviews: number
		}
	} = $props()
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
	{#if page_analytics?.visits}
		{@render stat({
			label: 'Entries',
			value: page_analytics?.visits,
		})}
	{/if}
	{#if page_analytics?.uniques}
		{@render stat({
			label: 'Visitors',
			value: page_analytics?.uniques,
		})}
	{/if}
	{#if page_analytics?.pageviews}
		{@render stat({
			label: 'Views',
			value: page_analytics?.pageviews,
		})}
	{/if}
</div>
