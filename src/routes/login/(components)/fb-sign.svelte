<script>
	import Button from '$lib/components/ui/button/button.svelte';

	let { isLoading } = $props();
</script>

<Button
	variant="outline"
	type="button"
	disabled={isLoading}
	class="font-bold text-white bg-blue-600 rounded hover:bg-blue-700 hover:text-gray-200"
>
	<i class=" fa-brands fa-facebook-f"></i>
	<span class="ml-3">Facebook</span>
</Button>
