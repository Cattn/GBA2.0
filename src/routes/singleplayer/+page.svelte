<script lang="ts">
    import * as Command from "$lib/components/ui/command/index.js";
    import * as Popover from "$lib/components/ui/popover/index.js";
    import { Button } from "$lib/components/ui/button/index.js";
    import { tick } from "svelte";
    import { consoles, sources } from "$lib/store";
   
    type Status = {
      value: string;
      label: string;
    };

    let currentSrc = "";

    const games = {
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
    }
    
    function loadGames(consoleName){
        if (consoleName) {
            const selectedConsole = $consoles.find((c) => c.name === consoleName);
            fetch(selectedConsole.source + selectedConsole.folder + "/index.json")
            .then((response) => response.json())
            .then((data) => {
                if (data.games) {
                    games[consoleName] = data.games;
                    currentSrc = selectedConsole.source + selectedConsole.folder;
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
  </script>
<svelte:head>
  <title>Singleplayer</title> 
</svelte:head>

    <div class="flex ml-4 mt-4 justify-center mr-4">
        <div class="flex items-center space-x-4">
            <p class="text-sm text-muted-foreground">Console Type</p>
            <Popover.Root bind:open let:ids>
            <Popover.Trigger asChild let:builder>
                <Button
                builders={[builder]}
                variant="outline"
                class="justify-start"
                >
                {selectedStatus ? selectedStatus.label : "+ Set Console"}
                </Button>
            </Popover.Trigger>
            <Popover.Content class="p-0" align="start" side="right">
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
    </div>

    <div class="mt-4 ml-4 mr-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {#if selectedStatus}
            {#if games[selectedStatus.value]}
                {#each games[selectedStatus.value] as game}
                    <a href="/play?game={currentSrc}/{game.file}" class="group rounded-lg border px-4 py-4 shadow-sm hover:border-gray-400  hover:shadow-md focus-within:border-gray-500 focus-within:shadow-md">
                        <h2 class="text-lg font-bold mb-2">{game.title}</h2>
                        <p class="text-sm text-gray-600">{selectedStatus.label}</p>
                    </a>
                {/each}
            {:else}
                <p class="col-span-1 text-center">No Games found.</p>
            {/if}
        {/if}
    </div>

