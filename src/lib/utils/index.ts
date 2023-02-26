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
	const params = Object.entries(obj).map(
		([key, value]) => `${key}=${value}`
	)
	return '?' + params.join('&')
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

	// get daily visits
	const fetch_daily_visits = async () => {
		const res = await fetch(
			`${base_path}&date_from=${day_start}&date_to=${day_end}`
		)
		const { analytics } = await res.json()
		return analytics
	}
	// get monthly visits
	const fetch_monthly_visits = async () => {
		const res = await fetch(
			`${base_path}&date_from=${month_start}&date_to=${month_end}&date_grouping=month`
		)
		const { analytics } = await res.json()
		return analytics
	}
	// get yearly visits
	const fetch_yearly_visits = async () => {
		const res = await fetch(
			`${base_path}&date_from=${year_start}&date_to=${year_end}&date_grouping=year`
		)
		const { analytics } = await res.json()
		return analytics
	}

	return {
		daily_visits: fetch_daily_visits(),
		monthly_visits: fetch_monthly_visits(),
		yearly_visits: fetch_yearly_visits(),
	}
}
