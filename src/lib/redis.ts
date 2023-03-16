import { REDIS_CONNECTION, VISITORS_KEY } from '$env/static/private'
import Redis from 'ioredis'

export function get_current_visitors(): string {
	return `visitors:${VISITORS_KEY}`
}

export default REDIS_CONNECTION
	? new Redis(REDIS_CONNECTION)
	: new Redis()
