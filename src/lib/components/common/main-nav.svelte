<script>
	import { cn } from '$lib/utils';
	let className = undefined;
	export { className as class }; 
</script>

<div class="border-b">
	<div class="flex items-center h-16 px-4">
		<nav class={cn('flex items-center space-x-4 lg:space-x-6', className)}>
			<a
				href="/examples/dashboard"
				class="text-sm font-medium transition-colors hover:text-primary"
			>
				Overview
			</a>

			<a
				href="/examples/dashboard"
				class="text-sm font-medium transition-colors text-muted-foreground hover:text-primary"
			>
				Customers
			</a>
			<a
				href="/examples/dashboard"
				class="text-sm font-medium transition-colors text-muted-foreground hover:text-primary"
			>
				Products
			</a>
			<a
				href="/examples/dashboard"
				class="text-sm font-medium transition-colors text-muted-foreground hover:text-primary"
			>
				Settings
			</a>
		</nav>
	</div>
</div>
