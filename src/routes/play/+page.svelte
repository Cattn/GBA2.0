<script lang="ts">
    import { Button } from "$lib/components/ui/button";
    import { browser } from "$app/environment";
    import { base } from "$app/paths";

    let game = "";
    let core = "";
    let url = "";

    if (browser) {
        const urlParams = new URLSearchParams(window.location.search);
        game = urlParams.get("game");
        core = urlParams.get("core");
        url = base + "/launch.html?core=" + core + "&game=" + game;
    }
    
</script>
<svelte:head>
    <title>Playing: </title> 
</svelte:head>
    <div class="h-[600px]">
    <iframe class="overflow-hidden h-full" title="Emulator" src="{url}" width="100%" height="100%" frameborder="0"></iframe>
    </div>