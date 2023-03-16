import lucia from "lucia-auth";
import prisma from "@lucia-auth/adapter-prisma";
import { dev } from "$app/environment";
import { prisma as prismaClient } from "@/lib/server/prisma";

export const auth = lucia({
	adapter: prisma(prismaClient),
	env: dev ? "DEV" : "PROD",
	transformUserData: (user) => {
		return {
			userId: user.id,
			email: user.email,
			name: user.name ? user.name : user.email,
			image: user.image ? user.image : null
		};
	}
});

export type Auth = typeof auth;
