import { redirect } from '@sveltejs/kit';

// The policy's first address (GitHub Pages), the one the store listing links to.
export const prerender = false;

export function GET() {
	redirect(301, '/global-assault/privacy');
}
