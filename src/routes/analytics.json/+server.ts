import { FATHOM_API_KEY } from '$env/static/private'
import { PUBLIC_FATHOM_ID } from '$env/static/public'
import { object_to_query_params } from '$lib/utils'
import { json } from '@sveltejs/kit'
import type { RequestHandler } from './$types'

// const default_params = {
// 	entity: 'pageview',
// 	entity_id: PUBLIC_FATHOM_ID,
// 	aggregates: 'visits,uniques,pageviews,avg_duration,bounce_rate',
// 	field_grouping: 'pathname',
// 	filters: `[{"property": "pathname","operator": "is","value": "${pathname}"}]`,
// }
export const GET: RequestHandler = async ({ url }) => {
	const date_from = url.searchParams.get('date_from') ?? null
	const date_to = url.searchParams.get('date_to') ?? null
	const date_grouping = url.searchParams.get('date_grouping') ?? null
	const pathname = url.searchParams.get('pathname') ?? '/'

	const date_params = {
		...(date_from && { date_from }),
		...(date_to && { date_to }),
		...(date_grouping && { date_grouping }),
	}

	const default_params = {
		entity: 'pageview',
		entity_id: PUBLIC_FATHOM_ID,
		aggregates: 'visits,uniques,pageviews,avg_duration,bounce_rate',
		field_grouping: 'pathname',
		filters: `[{"property": "pathname","operator": "is","value": "${pathname}"}]`,
	}

	const params = { ...default_params, ...date_params }

	try {
		const headers_auth = new Headers()
		headers_auth.append(`Authorization`, `Bearer ${FATHOM_API_KEY}`)
		const res = await fetch(
			`https://api.usefathom.com/v1/aggregations${object_to_query_params(
				params
			)}`,
			{
				headers: headers_auth,
			}
		)

		let data = await res.json()

		return json({
			analytics: data,
		})
	} catch (error) {
		return json({
			error: `Error: ${error}`,
			status: 500,
		})
	}
}
