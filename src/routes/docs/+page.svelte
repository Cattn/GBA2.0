<script type="ts">
    import { Button } from "$lib/components/ui/button/";

    let docContent;

    function selectedDoc(doc) {
        docContent = doc;
    }
</script>
    
    
    <div class="flex ml-2">
        <aside class="ml-40 w-1/5 mt-8">
            <div class="flex flex-col ml-2 justify-start">
                <h4 class="scroll-m-20 font-bold text-xl tracking-tight mt-4">General</h4>
                {#each [
                    {name: "Intro", selected: docContent === "Intro"},
                    {name: "Library", selected: docContent === "No Intro"},
                    {name: "FAQ", selected: docContent === "FAQ"},
                ] as doc}
                    <Button
                        variant="link"
                        class={`pl-0 ml-2 scroll-m-20 text-lg tracking-tight ${doc.selected ? 'font-bold' : 'text-muted-foreground'} mt-4 w-max`}
                        on:click={() => selectedDoc(doc.name)}
                        style="font-weight: {doc.selected ? 'bold' : 'normal'}"
                    >{doc.name}</Button>
                {/each}
            </div>
        </aside>
    
        <div class="ml-4 float-left mt-12">
            {#if docContent === "Intro" || !docContent}
                <h1 class="scroll-m-20 text-3xl font-bold tracking-tight lg:text-3xl mt-4">
                    Welcome to the GBA2.0 Documentation
                </h1>
                <p class="text-lg text-muted-foreground">
                    Welcome to the GBA2.0 documentation. This is where you can find all the information you need to know about GBA2.0.
                </p>
            {/if}
        </div>
    </div>

