<script lang="ts">
    import * as Command from "$lib/components/ui/command/index.js";
    import * as Popover from "$lib/components/ui/popover/index.js";
    import { Button } from "$lib/components/ui/button/index.js";
    import { Input } from "$lib/components/ui/input";
    import { tick } from "svelte";
    import { consoles, sources } from "$lib/store";
    import { browser } from "$app/environment";
   
    type Status = {
      value: string;
      label: string;
    };

    let startParam = "";

    let currentSrc = "";
    let currentConsole = "";
    let searchTerm = "";

    let games = {
    }
   
    const statuses: Status[] = [
      ];

    if ($consoles) {
        $consoles.forEach((c) => {
          statuses.push({
            value: c.name,
            label: c.name,
          });
        });
        statuses.push({
              value: "all",
              label: "All (WARNING: WILL SLOW DOWN IF BIG LIBRARY)",
        });
    }
    
    function loadGames(consoleName){
        if (consoleName) {
            if (consoleName === "all") {
                games = {};
                $consoles.forEach((c) => {
                    fetch(c.source + "/" + c.folder + "/index.json")
                    .then((response) => response.json())
                    .then((data) => {
                        if (data.games) {
                            games[c.name] = data.games;
                        }
                    })
                    .catch((error) => {
                        console.error("Error:", error);
                    });
                })
            }
            const selectedConsole = $consoles.find((c) => c.name === consoleName);
            fetch(selectedConsole.source + "/" + selectedConsole.folder + "/index.json")
            .then((response) => response.json())
            .then((data) => {
                if (data.games) {
                    games[consoleName] = data.games;
                    currentSrc = selectedConsole.source + "/" + selectedConsole.folder;
                    currentConsole = selectedConsole.core;
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            });
        }
    }
    
   
    let open = false;
    let value = "";
   
    $: selectedStatus = statuses.find((s) => s.value === value) ?? null;
    function closeAndFocusTrigger(triggerId: string) {
      open = false;
      tick().then(() => {
        document.getElementById(triggerId)?.focus();
      });
    }

    if (browser) {
        const urlParams = new URLSearchParams(window.location.search);
        startParam = urlParams.get("console") || "";
        statuses.forEach((status) => {
            if (status.label === startParam) {
                value = startParam;
                loadGames(startParam);
            }
        })
    }
  </script>
<svelte:head>
  <title>Singleplayer</title> 
</svelte:head>

    <div class="flex mx-auto mt-4 items-center justify-center space-x-4 sm:w-full sm:max-w-sm">
        <p class="text-sm text-muted-foreground sm:w-fit">Console Type</p>
        <Popover.Root bind:open let:ids>
            <Popover.Trigger asChild let:builder
                class="justify-start w-full sm:w-fit"
            >
                <Button
                builders={[builder]}
                variant="outline"
                class="justify-start w-full sm:w-fit"
                >
                {selectedStatus ? selectedStatus.label : "+ Set Console"}
                </Button>
            </Popover.Trigger>
            <Popover.Content align="center" side="bottom"
                class="sm:w-full md:max-w-sm lg:max-w-md p-0"
            >
                <Command.Root>
                <Command.Input placeholder="Select a Console..." />
                <Command.List>
                    <Command.Empty>No results found.</Command.Empty>
                    <Command.Group>
                    {#each statuses as status}
                        <Command.Item
                        value={status.value}
                        onSelect={(currentValue) => {
                            value = currentValue;
                            closeAndFocusTrigger(ids.trigger);
                            loadGames(status.value);
                        }}
                        class="w-full"
                        >
                        {status.label}
                        </Command.Item>
                    {/each}
                    </Command.Group>
                </Command.List>
                </Command.Root>
            </Popover.Content>
        </Popover.Root>
    </div>

    <div class="flex items-center justify-center mt-4">
        <Input bind:value={searchTerm} type="text" placeholder="Search Games..." class="max-w-xs" />
        </div>
    <div class="mt-4 ml-4 mr-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {#if selectedStatus}
            {#if games[selectedStatus.value] && games[selectedStatus.value].length > 0}
                {#each games[selectedStatus.value] as game (game.file)}
                    {#if game.title.toLowerCase().includes(searchTerm.toLowerCase())}
                        <a href="/play?core={currentConsole}&game={currentSrc}/{game.file}" class="group old-1 rounded-lg border px-4 py-4 shadow-sm hover:border-gray-400  hover:shadow-md focus-within:border-gray-500 focus-within:shadow-md">
                            <h2 class="text-lg font-bold mb-2">{game.title}</h2>
                            <p class="text-sm text-muted-foreground">{selectedStatus.label}</p>
                        </a>
                    {/if}
                {/each}
                {#if games[selectedStatus.value].length === 0}
                    <p class="col-span-1 text-center">No Games found.</p>
                {/if}
            {:else if value === "all"}
                {#each $consoles as console (console.name)}
                    {#if games[console.name] && games[console.name].length > 0}
                        {#each games[console.name] as game (game.file)}
                        {#if game.title.toLowerCase().includes(searchTerm.toLowerCase())}
                            <a href="/play?core={currentConsole}&game={currentSrc}/{game.file}" class="group old-1 rounded-lg border px-4 py-4 shadow-sm hover:border-gray-400  hover:shadow-md focus-within:border-gray-500 focus-within:shadow-md">
                                <h2 class="text-lg font-bold mb-2">{game.title}</h2>
                                <p class="text-sm text-muted-foreground">{selectedStatus.label}</p>
                            </a>
                        {/if}
                        {/each}
                    {/if}
                {/each}
            {:else}
                <p class="col-span-1 text-center">No Games found.</p>
            {/if}
        {/if}
    </div>

