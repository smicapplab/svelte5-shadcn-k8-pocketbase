<script>
	import * as Resizable from '$lib/components/ui/resizable/index.js';
</script>

<div class="flex flex-col w-screen h-screen">
	<Resizable.PaneGroup direction="horizontal" class="flex-grow w-full h-full">
		<Resizable.Pane defaultSize={15}>
			<div class="flex items-center justify-center p-6 h-min-full">
				<span class="font-semibold">Sidebar</span>
			</div>
		</Resizable.Pane>
		<Resizable.Handle withHandle />
		<Resizable.Pane defaultSize={85}>
			<div class="flex items-center justify-center p-6 h-min-full">
				<span class="font-semibold">Content</span>
			</div>
		</Resizable.Pane>
	</Resizable.PaneGroup>
</div>
