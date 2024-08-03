<script>
	import { cn } from '$lib/utils';
	import { Icons } from '$lib/components/icons';
	import * as Avatar from "$lib/components/ui/avatar/index.js";
	let data = $props();
</script>

<div class="border-b">
	<div class="flex items-center h-16 px-4">
		<nav class={cn('flex items-center space-x-4 lg:space-x-6', data)}>
			<a href="/dashboard" class="text-sm font-medium transition-colors hover:text-primary">
				<Icons.koredor></Icons.koredor>
			</a>
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
		<div class="flex items-center ml-auto space-x-4">
			<Avatar.Root>
				<Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
				<Avatar.Fallback>CN</Avatar.Fallback>
			</Avatar.Root>
		</div>
	</div>
</div>
