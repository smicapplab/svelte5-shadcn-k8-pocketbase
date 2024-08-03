import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { loginFormSchema } from './(components)/form/schema';
import { fail } from '@sveltejs/kit';

export const load = async () => {
	return {
		form: await superValidate(zod(loginFormSchema))
	};
};

export const actions = {
	default: async (event) => {
		const form = await superValidate(event, zod(loginFormSchema));
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
