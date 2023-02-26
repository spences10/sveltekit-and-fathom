import { page_analytics } from '$lib/utils'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ fetch }) => {
	const base_path = `analytics.json?pathname=/`

	let { daily_visits, monthly_visits, yearly_visits } =
		await page_analytics(base_path, fetch)

	return {
		daily_visits,
		monthly_visits,
		yearly_visits,
	}
}
