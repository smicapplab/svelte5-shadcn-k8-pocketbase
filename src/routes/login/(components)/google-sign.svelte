<script>
	import { Icons } from "$lib/components/icons";
	import Button from "$lib/components/ui/button/button.svelte";

    let { isLoading } = $props();
</script>

<Button
	variant="outline"
	type="button"
	disabled={isLoading}
	class="font-bold text-white bg-red-500 rounded hover:bg-red-600 hover:text-gray-200" 
>
	<Icons.google class="w-4 h-4 mr-2"></Icons.google>
	Google
</Button>
