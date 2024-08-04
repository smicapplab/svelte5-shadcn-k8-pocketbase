<script>
	import MainNav from '$lib/components/common/main-nav.svelte';
	// import SideNav from '$lib/components/common/side-nav.svelte';
	// import * as Resizable from '$lib/components/ui/resizable/index.js';
	// import '../../app.css';

	// let { children } = $props();
	// let isCollapsed = $state(false);

	// function onCollapse() {
	// 	isCollapsed = true;
	// 	document.cookie = `PaneForge:collapsed=${true}`;
	// }

	// function onExpand() {
	// 	isCollapsed = false;
	// 	document.cookie = `PaneForge:collapsed=${false}`;
	// }
</script>

<MainNav />
<div class="flex flex-col w-screen h-screen">
	????
	<!-- <Resizable.PaneGroup direction="horizontal" class="flex-grow w-full h-full">
		<Resizable.Pane
			collapsedSize={3}
			collapsible
			defaultSize={15}
			minSize={10}
			maxSize={20}
			{onCollapse}
			{onExpand}
		>
			<SideNav {isCollapsed} />
		</Resizable.Pane>
		<Resizable.Handle withHandle />
		<Resizable.Pane defaultSize={85}>
			{@render children()}
		</Resizable.Pane>
	</Resizable.PaneGroup> -->
</div>
