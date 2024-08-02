<script>
	import { Icons } from '$lib/components/icons';
	import Button from '$lib/components/ui/button/button.svelte';

	let { isLoading } = $props();
</script>

<Button
	variant="outline"
	type="button"
	disabled={isLoading}
	class="font-bold text-white bg-blue-600 rounded hover:bg-blue-700 hover:text-gray-200"
>
	<Icons.facebook class="w-4 h-4 mr-2"></Icons.facebook>
	Facebook
</Button>
