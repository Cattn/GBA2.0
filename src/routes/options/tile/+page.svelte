<script lang="ts">
    import { browser } from "$app/environment";

    

</script>
<svelte:head>
    <title>Tile Customization</title> 
</svelte:head>
<h1 class="scroll-m-20 text-3xl font-bold tracking-tight lg:text-3xl text-center mt-8 mb-3">Customize Tile</h1>
<div class="mt-4 ml-4 mr-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    <a href="/play?core=fake&game=fake/fake" class="group rounded-lg border px-4 py-4 shadow-sm hover:border-gray-400  hover:shadow-md focus-within:border-gray-500 focus-within:shadow-md">
        <h2 class="text-lg font-bold mb-2">Default</h2>
        <p class="text-sm text-muted-foreground">1</p>
    </a>
    <a href="/play?core=fake&game=fake/fake" class="group rounded-lg border px-4 py-4 shadow-sm hover:border-gray-400  hover:shadow-md focus-within:border-gray-500 focus-within:shadow-md">
        <h2 class="text-lg font-bold mb-2">Classic Colors</h2>
        <p class="text-sm text-muted-foreground">2</p>
    </a>
    <a href="/play?core=fake&game=fake/fake" class="group rounded-lg border px-4 py-4 shadow-sm hover:border-gray-400  hover:shadow-md focus-within:border-gray-500 focus-within:shadow-md">
        <h2 class="text-lg font-bold mb-2">Red</h2>
        <p class="text-sm text-muted-foreground">3</p>
    </a>
    <a href="/play?core=fake&game=fake/fake" class="group rounded-lg border px-4 py-4 shadow-sm hover:border-gray-400  hover:shadow-md focus-within:border-gray-500 focus-within:shadow-md">
        <h2 class="text-lg font-bold mb-2">Green</h2>
        <p class="text-sm text-muted-foreground">4</p>
    </a>
</div>

<h1 class="scroll-m-20 text-3xl font-bold tracking-tight lg:text-3xl text-center mt-8 mb-3">Preview</h1>
<div class="mt-4 ml-4 mr-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    <a href="/play?core=fake&game=fake/fake" class="group rounded-lg border px-4 py-4 shadow-sm hover:border-gray-400  hover:shadow-md focus-within:border-gray-500 focus-within:shadow-md">
        <h2 class="text-lg font-bold mb-2">Test Tile 113</h2>
        <p class="text-sm text-muted-foreground">...</p>
    </a>
</div>