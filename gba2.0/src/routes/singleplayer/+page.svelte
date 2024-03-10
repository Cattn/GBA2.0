<script lang="ts">
    import * as Command from "$lib/components/ui/command/index.js";
    import * as Popover from "$lib/components/ui/popover/index.js";
    import { Button } from "$lib/components/ui/button/index.js";
    import { tick } from "svelte";
   
    type Status = {
      value: string;
      label: string;
    };

    const games = {
      "Game Boy Advanced": [
        {
          name: "007",
          value: "007",
        },
        {
          name: "007",
          value: "007",
        },
        {
          name: "007",
          value: "007",
        },
        {
          name: "007",
          value: "007",
        },
        {
          name: "007",
          value: "007",
        },
        {
          name: "007",
          value: "007",
        },
        {
          name: "007",
          value: "007",
        },
        {
          name: "007",
          value: "007",
        },
        {
          name: "007",
          value: "007",
        },
        {
          name: "007",
          value: "007",
        },
        {
          name: "007",
          value: "007",
        },
        {
          name: "Advanced Wars",
          value: "advanced-wars",
        }
      ],
      "n64": [
        {
          name: "Super Mario World",
          value: "Super Mario World",
        },
        {
          name: "Super Mario 64",
          value: "Super Mario 64",
        }
      ]
    }
   
    const statuses: Status[] = [
      {
        value: "Game Boy Advanced",
        label: "Game Boy Advanced",
      },
      {
        value: "Game Boy Color",
        label: "Game Boy Color"
      },
      {
        value: "Game Boy",
        label: "Game Boy"
      },
      {
        value: "snes",
        label: "SNES"
      },
      {
        value: "nes",
        label: "NES"
      },
      {
        value: "n64",
        label: "N64"
      },
      {
        value: "nds",
        label: "NDS"
      },
      {
        value: "Sega Master System",
        label: "Sega Master System"
      }
    ];
   
    let open = false;
    let value = "";
   
    $: selectedStatus = statuses.find((s) => s.value === value) ?? null;
    function closeAndFocusTrigger(triggerId: string) {
      open = false;
      tick().then(() => {
        document.getElementById(triggerId)?.focus();
      });
    }
    import { Separator } from "$lib/components/ui/separator";
  </script>


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

    <div class="mt-4">
        <h1 class="text-center">
            {#if selectedStatus}
                {#if games[selectedStatus.value]}
                    {#each games[selectedStatus.value] as game}
                        <Button variant="ghost"><a href="/play?game={game.value}">{game.name}</a></Button>
                    {/each}
                {:else}
                    <p>No Games found.</p>
                {/if}
            {/if}
        </h1>
    </div>