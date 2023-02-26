<script lang="ts">
	export let page_analytics: {
		date: string
		visits: number
		uniques: number
		pageviews: number
	}
</script>

<div
	class="stats stats-vertical mb-8 w-full border border-secondary shadow-lg md:stats-horizontal"
>
	<div class="stat">
		<div class="stat-title">Entries</div>
		<div class="stat-value text-2xl">
			{page_analytics?.visits}
		</div>
	</div>

	<div class="stat">
		<div class="stat-title">Visitors</div>
		<div class="stat-value text-2xl">
			{page_analytics?.uniques}
		</div>
	</div>

	<div class="stat">
		<div class="stat-title">Views</div>
		<div class="stat-value text-2xl">
			{page_analytics?.pageviews}
		</div>
	</div>
</div>
