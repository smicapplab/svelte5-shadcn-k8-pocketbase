<script>
	import { goto } from '$app/navigation';
	import { Icons } from '$lib/components/icons';
	import Button from '$lib/components/ui/button/button.svelte';
	import Input from '$lib/components/ui/input/input.svelte';
	import Label from '$lib/components/ui/label/label.svelte';
	import { cn } from '$lib/utils';
	import GoogleSign from './google-sign.svelte';
    import FacebookSign from './fb-sign.svelte';
	import Divider from './divider.svelte';
	import AppleSign from './apple-sign.svelte';
	import SocialAuth from './social-auth.svelte';

	let isLoading = $state(false);
	let showPassword = $state(false);

	let className = $props();
	export { className as class };

	const onSubmit = async () => {
		// isLoading = true;
		// setTimeout(() => {
		// 	isLoading = false;
		// }, 3000);
	};

	const togglePasswordVisibility = () => {
		showPassword = !showPassword;
	};
</script>

<div class={cn('grid gap-6', className)}>
	<form onsubmit={onSubmit} class="grid gap-6">
		<div class="grid gap-2">
			<Label for="firstName">First Name</Label>
			<Input name="firstName" id="firstName" type="text" autocorrect="off" disabled={isLoading} />

			<Label for="lastName">Last Name</Label>
			<Input id="lastName" autocorrect="off" name="lastName" disabled={isLoading} />
            
            <Label for="email">Email</Label>
			<Input name="email" id="email" type="email" autocorrect="off" disabled={isLoading} />
            
            <Label for="password">Password</Label>
			<Input name="password" id="password" type="password" autocorrect="off" disabled={isLoading} />
		</div>
        <p class="text-sm text-gray-600">
            By creating an account, you agree to the Terms of Service. For more information about Koredor's privacy practices, see the Koredor Privacy Statement. We'll occasionally send you account-related emails.
        </p>
		<Button type="submit" disabled={isLoading}>
			{#if isLoading}
				<!-- <Icons.spinner class="w-4 h-4 mr-2 animate-spin" /> -->
			{/if}
			Sign Up with Email
		</Button>
	</form>
	<Divider dividerLabel="Or sign in with" />
    <SocialAuth isLoading={isLoading} />
</div>

<style>
	.icon-button {
		position: absolute;
		right: 0.5rem;
		top: 50%;
		transform: translateY(-50%);
		border: none;
		background: none;
		cursor: pointer;
	}
</style>
