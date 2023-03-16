import google from "@lucia-auth/oauth/google";
import { auth } from "./lucia";
import { env } from "$env/dynamic/private";

const configs = {
	clientId: env.GOOGLE_CLIENT_ID,
	clientSecret: env.GOOGLE_CLIENT_SECRET,
	redirectUri: "http://localhost:5173/auth/callback/google",
	scope: ["openid", "email", "profile"]
};

export const googleAuth = google(auth, configs);
