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
    </div>
  </form>
</div>

<h1 class="text-center scroll-m-20 text-3xl font-bold tracking-tight lg:text-3xl mt-4">Current Sources:</h1>
<div class="mt-2 grid gap-4">
    {#each $sources as source}
        <div class="bg-base-200 p-4 rounded-lg text-center">
            <h2 class="text-lg font-medium">{source.name}</h2>
            <p class="italic font-light text-sm">{source.source}</p>
        </div>
    {/each}
</div>

<h1 class="text-center scroll-m-20 text-3xl font-bold tracking-tight lg:text-3xl mt-4">Current Consoles:</h1>
<div class="mt-2 grid gap-4">
    {#each $consoles as console}
        <div class="bg-base-200 p-1 rounded-lg text-center">
            <h2 class="text-lg font-medium">{console.name}</h2>
            <p class="italic text-sm text-muted-foreground">{console.folder}</p>
            <p class="italic text-sm text-muted-foreground">{console.source}</p>
        </div>
    {/each}
</div>
