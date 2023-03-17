import redis, { get_page_analytics } from '$lib/redis'
import {
	endOfDay,
	endOfMonth,
	endOfYear,
	startOfDay,
	startOfMonth,
	startOfYear,
} from 'date-fns'

export const object_to_query_params = (
	obj: { [s: string]: unknown } | ArrayLike<unknown>
) => {
	const params = Object.entries(obj)
		.filter(([, value]) => value !== undefined)
		.map(([key, value]) => `${key}=${value}`)
	return `?${params.join('&')}`
}

export const page_analytics = async (
	base_path: string,
	fetch: {
		(
			input: URL | RequestInfo,
			init?: RequestInit | undefined
		): Promise<Response>
		(
			input: URL | RequestInfo,
			init?: RequestInit | undefined
		): Promise<Response>
		(arg0: string): any
	}
) => {
	const day_start = startOfDay(new Date()).toISOString()
	const day_end = endOfDay(new Date()).toISOString()

	const month_start = startOfMonth(new Date()).toISOString()
	const month_end = endOfMonth(new Date()).toISOString()

	const year_start = startOfYear(new Date()).toISOString()
	const year_end = endOfYear(new Date()).toISOString()

	const fetch_visits = async (
		from: string,
		to: string,
		grouping?: string
	) => {
		const slug = `${base_path}&date_from=${from}&date_to=${to}${
			grouping ? `&date_grouping=${grouping}` : ''
		}`
		const cache_key = get_page_analytics(slug)

		const cached = await get_analytics_from_cache(cache_key)
		if (cached) {
			return cached
		}

		const res = await fetch(slug)
		const { analytics } = await res.json()
		await cache_analytics_response(cache_key, analytics)
		return analytics
	}

	const [daily_visits, monthly_visits, yearly_visits] =
		await Promise.all([
			fetch_visits(day_start, day_end),
			fetch_visits(month_start, month_end, 'month'),
			fetch_visits(year_start, year_end, 'year'),
		])

	return {
		daily_visits,
		monthly_visits,
		yearly_visits,
	}
}

const get_analytics_from_cache = async (cache_key: string) => {
	try {
		const cached = await redis.get(cache_key)
		if (cached) {
			return JSON.parse(cached)
		}
	} catch (e) {
		console.error(`Error fetching analytics from cache: ${e}`)
	}
	return null
}

const cache_analytics_response = async (
	cache_key: string,
	analytics_data: any
) => {
	try {
		await redis.set(
			cache_key,
			JSON.stringify(analytics_data),
			'EX',
			15 * 60
		)
	} catch (e) {
		console.error(`Error caching analytics response: ${e}`)
	}
}
