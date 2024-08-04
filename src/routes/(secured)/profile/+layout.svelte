<script>
	// nothing here
</script>

<div class="p-5 pb-16 space-y-6">
	<div class="space-y-0.5">
		<h3 class="text-lg font-bold text-primary">Profile</h3>
		<p class="text-sm text-muted-foreground">
			Your profile page showcases your personal and professional information, including your name,
			profile picture, bio, contact details, and social media links.
		</p>
	</div>
	<!-- <Separator class="my-6" /> -->
	<div class="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
		<aside class="-mx-4 lg:w-1/5">Aside!!!!</aside>
		<div class="flex-1 lg:max-w-2xl">
			<slot />
		</div>
	</div>
</div>
