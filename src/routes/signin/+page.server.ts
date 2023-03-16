import { redirect, type Actions } from "@sveltejs/kit";
import { googleAuth } from "@/lib/server/google";

export const actions: Actions = {
	signinWithGoogle: async ({ cookies }) => {
		const [authorizationUrl, state] = googleAuth.getAuthorizationUrl();
		cookies.set("state", state, {
			path: "/",
			httpOnly: true, // only readable in the server
			maxAge: 60 * 60 // a reasonable expiration date
		});

		throw redirect(302, authorizationUrl);
	}
};
