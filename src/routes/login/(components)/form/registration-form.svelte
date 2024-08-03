<script>
	import Button from '$lib/components/ui/button/button.svelte';
	import Input from '$lib/components/ui/input/input.svelte';
	import Label from '$lib/components/ui/label/label.svelte';
	import { cn } from '$lib/utils';
	import Divider from '../divider.svelte';
	import SocialAuth from '../social-auth.svelte';
	import * as Form from '$lib/components/ui/form';
	import { superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { registrationFormSchema } from '$lib/components/schemas/profile';

	let isLoading = $state(false);
	let showPassword = $state(false);

	let data = $props();
	const form = superForm(data, {
		validators: zodClient(registrationFormSchema),
		onSubmit: () => {
			isLoading = true;
		},
		onResult: (result) => {
			isLoading = false;
			const { result: formResult } = result;
			console.log(formResult);
		}
	});

	const { form: formData, enhance } = form;

	const togglePasswordVisibility = () => {
		showPassword = !showPassword;
	};
</script>

<div class={cn('grid gap-6', data)}>
	<form method="POST" class="grid gap-2" use:enhance action="?/registration">
		<Form.Field {form} name="firstName">
			<Form.Control let:attrs>
				<Label>First Name</Label>
				<Input {...attrs} bind:value={$formData.firstName} />
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>

		<Form.Field {form} name="lastName">
			<Form.Control let:attrs>
				<Label>Last Name</Label>
				<Input {...attrs} bind:value={$formData.lastName} />
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>

		<Form.Field {form} name="email">
			<Form.Control let:attrs>
				<Label>Email</Label>
				<Input {...attrs} bind:value={$formData.email} />
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>

		<Form.Field {form} name="password">
			<Form.Control let:attrs>
				<Label>Password</Label>
				<div class="flex items-center w-full max-w-sm space-x-2">
					<Input
						{...attrs}
						bind:value={$formData.password}
						type={showPassword ? 'text' : 'password'}
					/>
					<Button
						type="button"
						class={cn(
							'disabled:pointer-events-none disabled:opacity-50',
							'bg-secondary text-secondary-foreground hover:bg-secondary/80',
							data
						)}
						on:click={togglePasswordVisibility}
					>
						{#if showPassword}
							<i class="fa-solid fa-eye-slash"></i>
						{:else}
							<i class="fa-solid fa-eye"></i>
						{/if}
					</Button>
				</div>
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>

		<Form.Field {form} name="mobile">
			<Form.Control let:attrs>
				<Label>Mobile Number</Label>
				<Input {...attrs} bind:value={$formData.mobile} />
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>
		<p class="text-[0.7rem] ">
			By creating an account, you agree to the Terms of Service. For more information about
			Koredor's privacy practices, see the Koredor Privacy Statement. We'll occasionally send you
			account-related emails.
		</p>
		<Form.Button disabled={isLoading}>
			{#if isLoading}
				<i class="fa-solid fa-spinner animate-spin"></i>
			{:else}
				Sign Up with Email
			{/if}
		</Form.Button>
	</form>
	<Divider dividerLabel="Or sign in with" />
	<SocialAuth {isLoading} />
</div>
