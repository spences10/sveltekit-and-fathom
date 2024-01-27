<script lang="ts">
	import Check from '$lib/icons/check.svelte'

	export let title: string
	export let price: string
	export let billing_plan: string
	export let features: string[]
	export let switch_colors: boolean = false
</script>

<div
	class="stats mb-5 w-5/6 p-3 sm:w-2/3 md:w-full {switch_colors
		? `bg-primary/80 text-primary-content ring ring-accent md:-my-4`
		: `bg-primary/50 text-primary-content`}"
>
	<div class="stat flex flex-grow-0 flex-col">
		<div>
			<h3 class="stat-title">{title}</h3>
			<p class="stat-value">{price}</p>
			<p class="text-sm text-neutral-content">{billing_plan}</p>
			<div class="stat-actions">
				<button class="btn btn-accent btn-sm mb-5 w-full shadow-lg">
					Buy {title}
				</button>
			</div>
		</div>
		<ul>
			{#each features as feature}
				<li class="flex items-center space-x-4">
					<Check />
					<span class="text-sm font-medium">{feature}</span>
				</li>
				<div
					class="my-4 border-2 border-x-0 border-t-0 border-b-accent"
				/>
			{/each}
		</ul>
	</div>
</div>
