import type { RequestHandler } from "./$types";
import { googleAuth } from "$lib/server/google";
import { redirect } from "@sveltejs/kit";
import { auth } from "$lib/server/lucia";

export const GET: RequestHandler = async ({ cookies, request, locals }) => {
	const url = new URL(request.url);
	const savedState = cookies.get("state");
	const state = url.searchParams.get("state");
	const code = url.searchParams.get("code");

	type User = {
		userId: string;
		email: string;
		name: string;
		image: string;
	};

	if (savedState === state && code) {
		let user: User;
		const { existingUser, providerUser, createUser } = await googleAuth.validateCallback(code);
		if (!existingUser) {
			try {
				user = await createUser({
					email: providerUser.email,
					name: providerUser.name,
					image: providerUser.picture
				});

				const session = await auth.createSession(user.userId);
				locals.setSession(session);
			} catch (error) {
				console.error(error);
				throw redirect(302, "/");
			}
		} else {
			const session = await auth.createSession(existingUser.userId);
			locals.setSession(session);
		}
		throw redirect(302, "/");
	}

	return new Response(JSON.stringify({ savedState, state, code }));
};
