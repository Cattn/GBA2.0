<script lang="ts">
    import { Button } from "$lib/components/ui/button/";
    import { Input } from "$lib/components/ui/input/";
    import { base } from '$app/paths';
  </script>
   

<h1 class="text-center scroll-m-20 text-3xl font-bold tracking-tight lg:text-3xl mt-4">Add Library</h1>
<div class="flex justify-center mt-6">
  <form class="flex w-full max-w-sm items-center space-x-2">
    <div>
        <div class="flex">
        <Input class="mr-2" type="url" placeholder="Enter URL" />
        <Button type="submit">Add</Button>
        </div>
        <p class="text-sm text-muted-foreground mr-2">Need help? View our documentation <Button class="p-0" variant="link" href="/docs/">here</Button></p>
    </div>

  </form>
</div>