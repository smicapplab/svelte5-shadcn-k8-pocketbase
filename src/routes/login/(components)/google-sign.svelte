<script>
	import Button from '$lib/components/ui/button/button.svelte';

	let { isLoading } = $props();
</script>

<Button
	variant="outline"
	type="button"
	disabled={isLoading}
	class="font-bold text-white bg-red-500 rounded hover:bg-red-600 hover:text-gray-200"
>
	<i class=" fa-brands fa-google"></i>
	<span class="ml-3">Facebook</span>
</Button>
