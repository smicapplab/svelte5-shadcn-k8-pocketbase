import { z } from 'zod';

export const loginFormSchema = z.object({
	email: z.string().email('Invalid email format').min(2).max(50),
	password: z
		.string()
		.min(2, 'Password must be at least 2 characters long')
		.max(50, 'Password must be less than 50 characters long')
});
