<script>
	import { goto } from '$app/navigation';
	import { Icons } from '$lib/components/icons';
	import Button from '$lib/components/ui/button/button.svelte';
	import Input from '$lib/components/ui/input/input.svelte';
	import Label from '$lib/components/ui/label/label.svelte';
	import { cn } from '$lib/utils';
	import Divider from './divider.svelte';
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
			<Label for="email">Email</Label>
			<Input
				id="email"
				placeholder="your-email@example.com"
				type="email"
				autocapitalize="none"
				autocomplete="email"
				autocorrect="off"
				disabled={isLoading}
			/>
			<Label for="password">Password</Label>
			<div class="flex items-center w-full max-w-sm space-x-2">
				<Input
					type={showPassword ? 'text' : 'password'}
					placeholder="Enter your password"
					id="password"
					autocapitalize="none"
					autocorrect="off"
					disabled={isLoading}
				/>
				<Button
					type="button"
					class={cn(
						'disabled:pointer-events-none disabled:opacity-50',
						'bg-secondary text-secondary-foreground hover:bg-secondary/80',
						className
					)}
					on:click={togglePasswordVisibility}
				>
					{#if showPassword}
						<!-- <Icons.eyeOff></Icons.eyeOff> -->
					{:else}
						<!-- <Icons.eye></Icons.eye> -->
					{/if}
				</Button>
			</div>
		</div>
		<Button type="submit" disabled={isLoading}>
			{#if isLoading}
				<!-- <Icons.spinner class="w-4 h-4 mr-2 animate-spin" /> -->
			{/if}
			Sign In with Email
		</Button>

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
