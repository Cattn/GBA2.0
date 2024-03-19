<script lang="ts">
    import * as Menubar from "$lib/components/ui/menubar";
    import * as Avatar from "$lib/components/ui/avatar";
    import logo from '$lib/images/logo.png';
    import { base } from '$app/paths';
    import { Button } from "$lib/components/ui/button/index.js";
</script>
<Menubar.Root class="mt-1 ml-1 mr-1">
    <Avatar.Root>
        <Avatar.Image class="scale-50" src="{logo}" alt="GBA2.0" />
        <Avatar.Fallback>GBA</Avatar.Fallback>
      </Avatar.Root>

      <Menubar.Menu>
        <Menubar.Trigger>
          Go
        </Menubar.Trigger>
        <Menubar.Content>
          <Menubar.Item href="{base}/">Home</Menubar.Item>
          <Menubar.Separator />
          <Menubar.Item on:click={() => window.history.forward()}>Forward</Menubar.Item>
          <Menubar.Item on:click={() => window.history.back()}>Back</Menubar.Item>
        </Menubar.Content>
    </Menubar.Menu>

      <Menubar.Menu>
        <Menubar.Trigger>About</Menubar.Trigger>
        <Menubar.Content>
            <Menubar.Item href="https://discord.gg/math-study-934807331668099142">More Links</Menubar.Item>
            <Menubar.Separator />
          <Menubar.Item href="https://github.com/Cattn/GBA2.0">Github</Menubar.Item>
          <Menubar.Item href="https://mathstudy.dev/">Website</Menubar.Item>
          <Menubar.Item href="https://discord.gg/math-study-934807331668099142">Discord</Menubar.Item>
          <Menubar.Item href="{base}/docs">Docs</Menubar.Item>
          <Menubar.Separator />
        <Menubar.Sub>
            <Menubar.SubTrigger>Contact</Menubar.SubTrigger>
            <Menubar.SubContent>
              <Menubar.Item href="https://discord.gg/math-study-934807331668099142">Discord</Menubar.Item>
              <Menubar.Item href="mailto:inquiry@mathstudy.dev">Email</Menubar.Item>
            </Menubar.SubContent>
        </Menubar.Sub>
        </Menubar.Content>
      </Menubar.Menu>

      <Menubar.Menu>
        <Menubar.Trigger>Options</Menubar.Trigger>
        <Menubar.Content>
          <Menubar.Item href="{base}/options/theme">
            Change Theme
          </Menubar.Item>
          <Menubar.Item href="{base}/options/tile">Customize Tiles</Menubar.Item>
          <Menubar.Separator />
          <Menubar.Item href="https://github.com/Cattn/GBA2.0/issues/new/">Report Issue</Menubar.Item>
        </Menubar.Content>
      </Menubar.Menu>

    <Menubar.Menu>
      <Menubar.Trigger>Games</Menubar.Trigger>
      <Menubar.Content>
        <Menubar.Item href="{base}/singleplayer">Singleplayer</Menubar.Item>
        <Menubar.Item href="{base}/library">Manage Library</Menubar.Item>
        <Menubar.Separator />
        <Menubar.Item>Play ROM</Menubar.Item>
        <Menubar.Item>Patch ROM</Menubar.Item>
        <Menubar.Separator />
        <Menubar.Item href="https://discord.gg/math-study-934807331668099142">Suggest a Game</Menubar.Item>
      </Menubar.Content>
    </Menubar.Menu>

  </Menubar.Root>