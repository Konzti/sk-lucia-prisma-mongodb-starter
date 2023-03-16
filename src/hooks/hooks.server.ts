import type { Handle } from "@sveltejs/kit";
import { auth } from "@/lib/server/lucia";
import { handleHooks } from "@lucia-auth/sveltekit";
import { sequence } from "@sveltejs/kit/hooks";

const customHandle: Handle = async ({ event, resolve }) => {
	if (event.url.pathname.startsWith("/login")) {
		console.log("login request", event.url.pathname);
	}
	const response = await resolve(event);
	return response;
};
export const handle = sequence(handleHooks(auth), customHandle);
