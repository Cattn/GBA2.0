<script lang="ts">
    import * as Menubar from "$lib/components/ui/menubar";
    import * as Avatar from "$lib/components/ui/avatar";
    import logo from '$lib/images/logo.png';
    import * as Drawer from "$lib/components/ui/drawer";
</script>
<Menubar.Root class="mt-1 ml-1 mr-1">
    <Avatar.Root>
        <Avatar.Image class="scale-50" src="{logo}" alt="GBA2.0" />
        <Avatar.Fallback>GBA</Avatar.Fallback>
      </Avatar.Root>

      <Menubar.Menu>
        <Menubar.Trigger>Go</Menubar.Trigger>
        <Menubar.Content>
          <Menubar.Item href="/">Home</Menubar.Item>
          <Menubar.Separator />
          <Menubar.Item on:click={() => window.history.forward()}>Forward</Menubar.Item>
          <Menubar.Item on:click={() => window.history.back()}>Back</Menubar.Item>
        </Menubar.Content>
    </Menubar.Menu>

      <Menubar.Menu>
        <Menubar.Trigger>About</Menubar.Trigger>
        <Menubar.Content>
            <Menubar.Item>More Links</Menubar.Item>
            <Menubar.Separator />
          <Menubar.Item>Github</Menubar.Item>
          <Menubar.Item>Website</Menubar.Item>
          <Menubar.Item>Discord</Menubar.Item>
          <Menubar.Separator />
        <Menubar.Sub>
            <Menubar.SubTrigger>Contact</Menubar.SubTrigger>
            <Menubar.SubContent>
              <Menubar.Item>Discord</Menubar.Item>
              <Menubar.Item>Email</Menubar.Item>
            </Menubar.SubContent>
        </Menubar.Sub>
        </Menubar.Content>
      </Menubar.Menu>

      <Menubar.Menu>
        <Menubar.Trigger>Options</Menubar.Trigger>
        <Menubar.Content>
          <Menubar.Item href="/options/theme">
            Change Theme
          </Menubar.Item>
          <Menubar.Item href="/options/icon">Change Icon Pack</Menubar.Item>
          <Menubar.Separator />
          <Menubar.Item>Report Issue</Menubar.Item>
        </Menubar.Content>
      </Menubar.Menu>

    <Menubar.Menu>
      <Menubar.Trigger>Games</Menubar.Trigger>
      <Menubar.Content>
        <Menubar.Item href="/singleplayer">Singleplayer</Menubar.Item>
        <Menubar.Separator />
        <Menubar.Item>Play ROM</Menubar.Item>
        <Menubar.Item>Patch ROM</Menubar.Item>
        <Menubar.Separator />
        <Menubar.Item on:click={() => alert("Suggest a Game")}>Suggest a Game</Menubar.Item>
      </Menubar.Content>
    </Menubar.Menu>

  </Menubar.Root>