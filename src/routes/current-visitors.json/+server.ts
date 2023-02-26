import { FATHOM_API_KEY } from '$env/static/private'
import { PUBLIC_FATHOM_ID } from '$env/static/public'
import { json } from '@sveltejs/kit'
import type { RequestHandler } from './$types'

export const GET: RequestHandler = async () => {
	try {
		const headers_auth = new Headers()
		headers_auth.append(`Authorization`, `Bearer ${FATHOM_API_KEY}`)
		const res = await fetch(
			`https://api.usefathom.com/v1/current_visitors?site_id=${PUBLIC_FATHOM_ID}&detailed=true`,
			{
				headers: headers_auth,
			}
		)

		let data = await res.json()

		return json({
			visitors: data,
		})
	} catch (error) {
		return json({
			error: `Error: ${error}`,
			status: 500,
		})
	}
}
