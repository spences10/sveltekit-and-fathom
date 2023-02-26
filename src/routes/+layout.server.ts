import type { LayoutServerLoad } from './$types'

export const load: LayoutServerLoad = async ({ fetch }) => {
	const fetch_visitors = async () => {
		const res = await fetch(`../current-visitors.json`)
		const { visitors } = await res.json()
		return visitors
	}

	return {
		visitors: fetch_visitors(),
	}
}
