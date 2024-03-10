<script lang="ts">
    import * as Card from "$lib/components/ui/card/index.js";
    import * as Carousel from "$lib/components/ui/carousel/index.js";
    
    import theme1 from "$lib/images/themes/1.png";
    import theme2 from "$lib/images/themes/2.png";
    import theme3 from "$lib/images/themes/3.png";
    import theme4 from "$lib/images/themes/4.png";
    import theme5 from "$lib/images/themes/5.png";
    import theme6 from "$lib/images/themes/6.png";

    import Button from "$lib/components/ui/button/button.svelte";
</script>

<div class="flex justify-center mt-12">
<Carousel.Root class="w-full max-w-5xl">
    <Carousel.Content class="-ml-1">
      {#each Array(5) as _, i (i)}
        <Carousel.Item class="pl-1">
          <div class="p-1">
            <Card.Root>
              <Card.Content
                class="flex-auto items-center justify-center p-6"
              >
              <img
              src={i === 0 ? theme1 : i === 1 ? theme2 : i === 2 ? theme3 : i === 3 ? theme4 : i === 4 ? theme5 : theme6}
              alt="Gray by Drew Beamer"
              class="h-full w-full rounded-md"
            />
                <div class="flex justify-center mt-2">
                    <Button>Change Theme</Button>
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