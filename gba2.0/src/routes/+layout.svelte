<script>
	import '../app.pcss';
	import Nav from '$lib/components/Nav.svelte';
	
	import Footer from '$lib/components/Footer.svelte';
	import { browser } from '$app/environment';

	if (browser) {
		const theme = localStorage.getItem('theme');
		if (theme) {
			document.documentElement.setAttribute('data-theme', theme);
		}
	}
</script>
<Nav/>

<slot />

<Footer/>