import { dev } from "$app/environment";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ cookies }) => {
	cookies.set("cookie", "testToken", {
		path: "/",
		httpOnly: true,
		sameSite: "strict",
		secure: !dev,
		maxAge: 60 * 5
	});
};
