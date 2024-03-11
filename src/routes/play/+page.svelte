<script lang="ts">
    import { Button } from "$lib/components/ui/button";
    import { browser } from "$app/environment";

    let game = "";

    if (browser) {
        const urlParams = new URLSearchParams(window.location.search);
        game = urlParams.get("game");
    }
</script>

    <Button variant="secondary">{game}</Button>