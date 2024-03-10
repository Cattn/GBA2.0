<script>
	import '../app.pcss';
	import Nav from '$lib/components/Nav.svelte';
	import { ModeWatcher } from "mode-watcher";
	import Footer from '$lib/components/Footer.svelte';
</script>
<ModeWatcher />
<Nav/>

<slot />

<Footer/>