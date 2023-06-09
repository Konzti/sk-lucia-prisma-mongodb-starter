import { auth } from "@/lib/server/lucia";
import { redirect, type RequestHandler } from "@sveltejs/kit";

export const POST: RequestHandler = async ({ locals }) => {
	const session = await locals.validate();
	if (!session) {
		throw redirect(302, "/signin");
	}
	await auth.invalidateSession(session.sessionId);
	locals.setSession(null);
	throw redirect(302, "/");
};
