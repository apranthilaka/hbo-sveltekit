<script>
    import { page } from '$app/stores';
    import { enhance } from '$app/forms';

    let isOpen = false;
    let sent = false;

    const toggle = () => (isOpen = !isOpen);
</script>

<div class="fixed bottom-5 right-5 z-50">
    {#if isOpen}
        <div class="bg-white border shadow-xl rounded-lg p-4 w-72 mb-4">
            <h3 class="font-bold text-gray-700 mb-2">UI Feedback</h3>

            {#if !sent}
                <form
                    method="POST"
                    action="/?/submitFeedback"
                    use:enhance={() => {
                        return async ({ result }) => {
                            if (result.type === 'success') sent = true;
                        };
                    }}
                >
                    <input
                        type="hidden"
                        name="path"
                        value={$page.url.pathname}
                    />

                    <textarea
                        name="message"
                        required
                        placeholder="What should we change on this page?"
                        class="w-full border p-2 text-sm rounded h-24 mb-2 focus:ring-2 focus:ring-orange-500 outline-none"
                    ></textarea>

                    <div class="flex justify-end gap-2">
                        <button
                            type="button"
                            on:click={toggle}
                            class="text-xs text-gray-500">Cancel</button
                        >
                        <button
                            type="submit"
                            class="bg-orange-600 text-white px-3 py-1 rounded text-sm font-medium"
                        >
                            Send
                        </button>
                    </div>
                </form>
            {:else}
                <div class="text-center py-4">
                    <p class="text-green-600 font-medium">Feedback sent!</p>
                    <button
                        on:click={() => {
                            sent = false;
                            toggle();
                        }}
                        class="mt-2 text-xs underline text-gray-400"
                        >Close</button
                    >
                </div>
            {/if}
        </div>
    {/if}

    <button
        on:click={toggle}
        class="bg-black text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
    >
        💬
    </button>
</div>
