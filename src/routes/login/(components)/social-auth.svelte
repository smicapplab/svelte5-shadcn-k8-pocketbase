<script>
	import GoogleSign from './google-sign.svelte';
	import FacebookSign from './fb-sign.svelte';
	import AppleSign from './apple-sign.svelte';

	let { isLoading } = $props();
</script>

<GoogleSign {isLoading} />
<FacebookSign {isLoading} />
<AppleSign {isLoading} />
