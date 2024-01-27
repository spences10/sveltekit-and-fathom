import type { PageData } from '../../routes/$types'

export { default as AnalyticsCard } from './analytics-card.svelte'
export { default as Nav } from './nav.svelte'
export { default as PricingCard } from './pricing-card.svelte'

export const has_analytics_data = (data: PageData) =>
	data?.daily_visits.length > 0 ||
	data?.monthly_visits.length > 0 ||
	data?.yearly_visits.length > 0
