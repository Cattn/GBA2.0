<script lang="ts">
    import * as Card from "$lib/components/ui/card/index.js";
    import * as Carousel from "$lib/components/ui/carousel/index.js";
    import { browser } from "$app/environment";
    
    import defaultTheme from "$lib/images/themes/1.png";
    import greenTheme from "$lib/images/themes/2.png";
    import oldGreenTheme from "$lib/images/themes/3.png";
    import redTheme from "$lib/images/themes/4.png";
    import sunsetTheme from "$lib/images/themes/5.png";
    import synthTheme from "$lib/images/themes/6.png";

    import Button from "$lib/components/ui/button/button.svelte";
    
    function changeTheme(theme) {  
        if (browser) {
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
        }
    }
</script>
<svelte:head>
    <title>Theme Manager</title> 
</svelte:head>
<h1 class="scroll-m-20 text-3xl font-bold tracking-tight lg:text-3xl text-center mt-8 mb-3">Change Theme</h1>
<div class="flex justify-center">
<Carousel.Root class="w-full max-w-5xl">
    <Carousel.Content class="-ml-1">
      {#each Array(6) as _, i (i)}
        <Carousel.Item class="pl-1">
          <div class="p-1">
            <Card.Root>
              <Card.Content
                class="flex-auto items-center justify-center p-6"
              >
              <img src={
                i === 0 ? defaultTheme :
                i === 1 ? greenTheme :
                i === 2 ? oldGreenTheme :
                i === 3 ? redTheme :
                i === 4 ? sunsetTheme :
                i === 5 ? synthTheme :
                defaultTheme
                } alt="Gray by Drew Beamer" class="h-full w-full rounded-md" />
                <div class="flex justify-center mt-2">
                    <Button on:click={() => changeTheme(i === 0 ? "dark" : i === 1 ? "green" : i === 2 ? "oldGreen" : i === 3 ? "red" : i === 4 ? "sunset" : "synth")}>Change Theme</Button>
                </div>
              </Card.Content>
            </Card.Root>
          </div>
        </Carousel.Item>
      {/each}
    </Carousel.Content>
    <Carousel.Previous />
    <Carousel.Next />
  </Carousel.Root>
</div>