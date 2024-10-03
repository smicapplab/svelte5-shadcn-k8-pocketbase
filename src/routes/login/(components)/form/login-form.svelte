<script>
	import { goto } from '$app/navigation';
	import Input from '$lib/components/ui/input/input.svelte';
	import Label from '$lib/components/ui/label/label.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { cn } from '$lib/utils';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import Divider from '../divider.svelte';
	import SocialAuth from '../social-auth.svelte';
	import { superForm } from 'sveltekit-superforms';
	import * as Form from '$lib/components/ui/form';
	import { loginFormSchema } from '$lib/components/schemas/profile';

	let isLoading = $state(false);
	let showPassword = $state(false);

	let data = $props();

	const form = superForm(data, {
		validators: zodClient(loginFormSchema),
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
	<form method="POST" class="grid gap-2" use:enhance action="?/login">
		<Form.Field {form} name="email">
			<Form.Control let:attrs>
				<Label>Email</Label>
				<Input {...attrs} bind:value={$formData.email} />
			</Form.Control>
			<Form.Description>Email address you used to sign up.</Form.Description>
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
		<Form.Button disabled={isLoading}>
			{#if isLoading}
				<i class="fa-solid fa-spinner animate-spin"></i>
			{:else}
				Sign In with Email
			{/if}
		</Form.Button>

		<p class="text-center text-gray-600">
			<button
				onclick={() => goto('/login/forgot-password')}
				class="text-blue-500 underline bg-transparent border-none hover:text-blue-700 focus:outline-none"
			>
				Forgot your password?
			</button>
		</p>
	</form>
	<Divider dividerLabel="Or sign in with" />
	<SocialAuth {isLoading} />
</div>