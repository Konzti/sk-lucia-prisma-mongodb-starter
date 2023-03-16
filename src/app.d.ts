import type { PrismaClient } from "@prisma/client";

declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			validate: import("@lucia-auth/sveltekit").Validate;
			validateUser: import("@lucia-auth/sveltekit").ValidateUser;
			setSession: import("@lucia-auth/sveltekit").SetSession;
		}
		// interface PageData {}
		// interface Platform {}
	}
	// eslint-disable-next-line no-var
	var __prisma: PrismaClient;

	declare namespace Lucia {
		type Auth = import("@lucia-auth/sveltekit").Auth;
		type UserAttributes = {
			email: string;
			name?: string;
			image?: string;
		};
	}
}

export {};
