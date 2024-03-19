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

	let firstTime;
	if (browser) {
		firstTime = localStorage.getItem('firstTime');
		if (!firstTime) {
			localStorage.setItem('firstTime', 'false');
		}
	}
</script>
<Nav/>

{#if !firstTime}
<div class="ml-2 h-12 w-fit flex justify-center text-sm italic items-center">Click any of the buttons above to navigate!</div>
{/if}
<slot />

<Footer/>