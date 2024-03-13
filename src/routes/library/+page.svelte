<script lang="ts">
    import { Button } from "$lib/components/ui/button/";
    import { Input } from "$lib/components/ui/input/";
    import { base } from '$app/paths';
    import { sources, consoles } from "$lib/store";

    let url = "";
    function submit() {
        if (url) {
            fetch(url + "/md.json")
            .then((response) => response.json())
            .then((data) => {
                if (data.name) {
                    sources.update((sources) => {
                        return [
                            ...sources,
                            {
                                name: data.name,
                                source: url,
                            }
                        ]
                    });
                }
                
                console.log("Data:", data);
                if (data.consoles) {
                  console.log("found consoles");
                    const newConsoles = data.consoles.reduce((acc, consoleN) => {
                      const existingConsole = $consoles.find(c => c.name === consoleN.name);
                      if (!existingConsole) {
                        acc.push({
                          name: consoleN.name,
                          folder: consoleN.folder,
                          core: consoleN.core,
                          source: url,
                        });
                      } else {
                        console.error(`Console already exists: ${existingConsole.name}`);
                      }
                      return acc;
                    }, []);
                    consoles.update(consoles => [...consoles, ...newConsoles]);
                }
                url = "";
            })
            .catch((error) => {
                console.error("Error:", error);
            });
        }
    }

    function resetStorage() {
      sources.set([]);
      consoles.set([]);
    }
  </script>
   
<svelte:head>
    <title>Library Manager</title> 
</svelte:head>


<h1 class="text-center scroll-m-20 text-3xl font-bold tracking-tight lg:text-3xl mt-4">Add Library</h1>
<div class="flex justify-center mt-6 ml-24">
  <form class="flex w-full max-w-sm items-center space-x-2">
    <div>
        <div class="flex">
        <Input class="mr-2" type="url" bind:value={url} placeholder="Enter URL" />
        <Button on:click={submit}>Add</Button>
        </div>
        <p class="text-sm text-muted-foreground">Need help? View our documentation <Button class="p-0" variant="link" href="{base}/docs/">here</Button></p>
        <Button class="ml-16" variant="destructive" on:click={resetStorage}>Clear All Libraries</Button>
    </div>
  </form>
</div>


<h1 class="text-center scroll-m-20 text-3xl font-bold tracking-tight lg:text-3xl mt-4">Sources</h1>
<div class="mt-4 ml-4 mr-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
  {#each $sources as source (source.name)}
      <a href="{source.source}" class="group rounded-lg border px-4 py-4 shadow-sm hover:border-gray-400  hover:shadow-md focus-within:border-gray-500 focus-within:shadow-md">
          <h2 class="text-lg font-bold mb-2">{source.name}</h2>
          <p class="text-sm text-muted-foreground">{source.source}</p>
      </a>
  {/each}
</div>

<h1 class="text-center scroll-m-20 text-3xl font-bold tracking-tight lg:text-3xl mt-4">Consoles</h1>
<div class="mt-4 ml-4 mr-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    {#each $consoles as console (console.name)}
        <a href="{base}/singleplayer?console={console.name}" class="group rounded-lg border px-4 py-4 shadow-sm hover:border-gray-400  hover:shadow-md focus-within:border-gray-500 focus-within:shadow-md">
            <h2 class="text-lg font-bold mb-2">{console.name}</h2>
            <p class="text-sm text-muted-foreground">{console.source}</p>
        </a>
    {/each}
</div>
