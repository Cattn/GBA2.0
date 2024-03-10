<script lang="ts">
    import mainLogo from "$lib/images/GBA_2_main_2.png";
    let hovered = false;

    let possibleTitles = [
        "Svelte??? What's this...",
        "Guess who's back, back again?",
        "Welcome back!",
        "I see you...",
        "Ready to play?",
        "Let's go!",
        "You're back!",
        "42",
        "Cattn here!",
        "Time to play!",
        "Best GBA Emulator!",
        "Best NES Emulator!",
        "Best SNES Emulator!",
        "Best N64 Emulator!",
        "Best DS Emulator!",
        "Wii when!?!??!?"
    ];

    let randomTitle = possibleTitles[Math.floor(Math.random() * possibleTitles.length)];
    import { Button } from "$lib/components/ui/button";
  </script>

  <div class="flex align-center justify-center mt-44">
    <img
      src={mainLogo}
      alt="Gray by Drew Beamer"
      class="h-1/4 w-1/4 rounded-md object-cover"
      class:hovered
      on:mouseenter={() => {
          hovered = true;
      }}
      on:mouseleave={() => {
          hovered = false;
      }}
    />
  </div>

  <h1 class="scroll-m-20 text-3xl font-bold tracking-tight lg:text-3xl mt-4 text-center italic">
    Ready to play?
  </h1>

    <div class="flex justify-center mt-6">
    <div class="flex gap-2">
        <Button>Add a Library</Button>
        <Button variant="secondary" href="/singleplayer">Play!</Button>
    </div>
    </div>

  <style>
    .hovered {
      filter: brightness(1.4);
      transition: 0.5s ease;
    }
  </style>