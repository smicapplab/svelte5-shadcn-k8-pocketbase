<script>
	import { cn } from '$lib/utils';
	import { Icons } from '$lib/components/icons';
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	//import * as Menubar from '$lib/components/ui/menubar/index.js';
	let data = $props();

	const logout = async () => {};
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
			<Avatar.Root class="cursor-pointer">
				<Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
				<Avatar.Fallback>CN</Avatar.Fallback>
			</Avatar.Root>
			<!-- <Menubar.Root class="border-none">
				<Menubar.Menu>
					<Menubar.Trigger>
						<Avatar.Root class="cursor-pointer">
							<Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
							<Avatar.Fallback>CN</Avatar.Fallback>
						</Avatar.Root>
					</Menubar.Trigger>
					<Menubar.Content>
						<Menubar.Label>
							<p class="text-lg font-bold text-primary">Hi, John</p>
							<p class="text-sm font-medium">s.torrefranca@gmail.com</p>
						</Menubar.Label>
						<Menubar.Separator />
						<Menubar.Item href="/profile" class="cursor-pointer">Manage Account</Menubar.Item>
						<Menubar.Item onclick={logout} class="cursor-pointer">Sign Out</Menubar.Item>
					</Menubar.Content>
				</Menubar.Menu>
			</Menubar.Root> -->

			<!-- BITS UI broken <DropdownMenu.Root>
				<DropdownMenu.Trigger
					><Avatar.Root>
						<Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
						<Avatar.Fallback>CN</Avatar.Fallback>
					</Avatar.Root></DropdownMenu.Trigger
				>
			</DropdownMenu.Root>
			<DropdownMenu.Content>
				<DropdownMenu.Label>My Account</DropdownMenu.Label>
				<DropdownMenu.Separator />
				<DropdownMenu.Item>Profile</DropdownMenu.Item>
				<DropdownMenu.Item>Billing</DropdownMenu.Item>
				<DropdownMenu.Item>Team</DropdownMenu.Item>
				<DropdownMenu.Item>Subscription</DropdownMenu.Item>
			</DropdownMenu.Content> -->
		</div>
	</div>
</div>
