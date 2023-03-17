import { FATHOM_API_KEY, VISITORS_KEY } from '$env/static/private'
import { PUBLIC_FATHOM_ID } from '$env/static/public'
import redis, { get_current_visitors } from '$lib/redis'
import { json } from '@sveltejs/kit'
import type { RequestHandler } from './$types'

export const GET: RequestHandler = async () => {
	const cached_visitors = await get_visitors_from_cache()
	if (cached_visitors) {
		return json({ visitors: cached_visitors })
	}

	const visitors = await get_visitors_from_api()
	return json({ visitors })
}

const get_visitors_from_api = async () => {
	try {
		const headers_auth = new Headers()
		headers_auth.append('Authorization', `Bearer ${FATHOM_API_KEY}`)
		const res = await fetch(
			`https://api.usefathom.com/v1/current_visitors?site_id=${PUBLIC_FATHOM_ID}&detailed=true`,
			{
				headers: headers_auth,
			}
		)

		if (res.ok) {
			const data = await res.json()
			await cache_fathom_response(VISITORS_KEY, { visitors: data })
			return data
		}
	} catch (error) {
		console.error(`Error fetching visitors from API: ${error}`)
	}
	return null
}

const get_visitors_from_cache = async () => {
	try {
		const cached = await redis.get(get_current_visitors())
		if (cached) {
			return JSON.parse(cached)
		}
	} catch (e) {
		console.error(`Error fetching visitors from cache: ${e}`)
	}
	return null
}

const cache_fathom_response = async (
	id: string = VISITORS_KEY,
	visitors: any
) => {
	try {
		const cache = { visitors }
		await redis.set(id, JSON.stringify(cache), 'EX', 15 * 60)
	} catch (e) {
		console.error(`Error caching Fathom response: ${e}`)
	}
}
