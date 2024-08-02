<script>
	import Button from '$lib/components/ui/button/button.svelte';

	let { isLoading } = $props();
</script>

<Button
	variant="outline"
	type="button"
	disabled={isLoading}
	class="font-bold text-white bg-gray-800 rounded hover:bg-black hover:text-gray-200"
>
	<i class=" fa-brands fa-apple"></i>
	<span class="ml-3">Apple</span>
</Button>
