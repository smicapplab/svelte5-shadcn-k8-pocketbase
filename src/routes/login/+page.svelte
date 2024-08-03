<script>
	import { assets } from '$app/paths';
	import { Icons } from '$lib/components/icons';
	import Divider from './(components)/divider.svelte';
	import LoginForm from './(components)/form/login-form.svelte';
	import RegistrationForm from './(components)/form/registration-form.svelte';

	let isLogin = true;
	const toggleForm = () => {
		isLogin = !isLogin;
	};
</script>

<div
	class="relative flex flex-col items-center justify-center min-h-screen lg:grid lg:grid-cols-2 lg:px-0"
>
	<div class="relative hidden w-full h-full p-10 text-white bg-muted dark:border-r lg:flex lg:flex-col">
		<div
			class="absolute inset-0 bg-cover"
			style="background-image: url({assets}/login-bg.jpg);"
		></div>

		<div class="relative z-20 flex items-center text-lg font-medium">
			<Icons.koredor />
		</div>
	</div>
	<div class="flex items-center justify-center w-full p-8">
		<div class="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
			{#if isLogin}
				<div class="flex flex-col space-y-2 text-center">
					<h1 class="text-2xl font-semibold tracking-tight">Welcome Back</h1>
					<p class="text-sm text-muted-foreground">Login to your Koredor account</p>
				</div>
				<LoginForm />
				<Divider />
				<div class="flex items-center justify-center space-x-2 text-center">
					<span class="text-gray-600">New to Koredor?</span>
					<button
						onclick={toggleForm}
						class="text-blue-500 underline bg-transparent border-none hover:text-blue-700 focus:outline-none"
					>
						Sign Up!
					</button>
				</div>
			{:else}
				<div class="flex flex-col space-y-2 text-center">
					<h1 class="text-2xl font-semibold tracking-tight">Sign Up</h1>
					<p class="text-sm text-muted-foreground">Create your Koredor account</p>
				</div>
				<RegistrationForm />
				<Divider />
				<div class="flex items-center justify-center space-x-2 text-center">
					<span class="text-gray-600">Already have a Koredor account?</span>
					<button
						onclick={toggleForm}
						class="text-blue-500 underline bg-transparent border-none hover:text-blue-700 focus:outline-none"
					>
						Sign In!
					</button>
				</div>
			{/if}
		</div>
	</div>
</div>