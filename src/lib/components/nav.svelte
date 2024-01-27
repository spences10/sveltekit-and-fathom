<script lang="ts">
	import { trackGoal } from 'fathom-client'

	let links = [
		{
			href: '/pricing',
			text: 'Pricing',
		},
		{
			href: '/contact',
			text: 'Contact Us',
		},
		{
			href: '/about',
			text: 'About',
		},
		{
			href: '/blog',
			text: 'Blog',
		},
	]

	export let visitors: number
</script>

<div class="navbar mb-10 bg-neutral text-neutral-content shadow-lg">
	<div class="navbar-start mx-2 px-2">
		<a href="/" on:click={() => trackGoal(`KWOYX0PK`, 0)}>
			<span class="text-lg font-bold">SvelteKit and Fathom</span>
		</a>
	</div>
	<div class="navbar-center mx-2 hidden px-2 lg:flex">
		<div class="flex items-stretch">
			{#each links as { href, text }}
				<a {href} class="btn btn-ghost btn-sm rounded-btn">
					{text}
				</a>
			{/each}
		</div>
	</div>
	<div class="navbar-end">
		<p
			class="cursor-pointer rounded-xl bg-secondary px-2 text-sm font-semibold tracking-wide text-secondary-content"
		>
			{visitors} Live Visitors
		</p>
	</div>
</div>
