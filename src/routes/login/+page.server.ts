import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { fail } from '@sveltejs/kit';
import { loginFormSchema, registrationFormSchema } from '$lib/components/schemas/profile.js';

export const actions = {
	login: async (event) => {
		const form = await superValidate(event, zod(loginFormSchema));
		if (!form.valid) {
			return fail(400, {
				form
			});
		}

		return {
			form
		};
	},
	registration: async ({ request, locals }) => {
		const form = await superValidate(request, zod(registrationFormSchema));
		if (!form.valid) {
			return fail(400, {
				form
			});
		}

		return {
			form
		};
	}
};
