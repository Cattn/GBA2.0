<script>
	import '../app.pcss';
	import Nav from '$lib/components/Nav.svelte';
	import { ModeWatcher } from "mode-watcher";
</script>
<ModeWatcher />
<Nav/>

<slot />
