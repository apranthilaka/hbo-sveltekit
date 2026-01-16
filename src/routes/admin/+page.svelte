<script lang="ts">
    import { onMount } from 'svelte';
    import { base } from '$app/paths';
    import { supabase } from '$lib/supabaseClient';

    let reviews = $state([]);
    let filter = $state('All');
    let isLoading = $state(true);

    let filteredReviews = $derived(
        filter === 'All'
            ? reviews
            : reviews.filter((r) => r.review_type === filter)
    );

    async function fetchReviews() {
        isLoading = true;
        const { data } = await supabase
            .from('ui_ux_reviews')
            .select('*')
            .order('created_at', { ascending: false });
        if (data) reviews = data;
        isLoading = false;
    }

    async function toggleComplete(id, currentStatus) {
        const newStatus =
            currentStatus === 'completed' ? 'pending' : 'completed';
        const { error } = await supabase
            .from('ui_ux_reviews')
            .update({ status: newStatus })
            .eq('id', id);
        if (!error)
            reviews = reviews.map((r) =>
                r.id === id ? { ...r, status: newStatus } : r
            );
    }

    async function deleteEntry(id) {
        if (!confirm('Are you sure you want to delete this review?')) return;

        const { error } = await supabase
            .from('ui_ux_reviews')
            .delete()
            .eq('id', id);

        if (!error) {
            // Remove from local state immediately
            reviews = reviews.filter((r) => r.id !== id);
        } else {
            alert('Delete failed: ' + error.message);
        }
    }

    onMount(fetchReviews);
</script>

<div
    class="responsive-wrapper w-full max-w-full md:max-w-3xl lg:max-w-4xl xl:max-w-6xl gap-6 flex flex-col h-screen mb-6 overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden rounded-lg"
>
    <div
        class="flex flex-row items-center md:flex-row md:items-center justify-between gap-4 min-h-20"
    >
        <div>
            <h1 class="font-medium text-lg text-gray-900">
                Feedback Dashboard
            </h1>
            <!-- <p class="text-sm text-gray-500">Manage site improvements</p> -->
        </div>

        <div class="inline-flex p-1 bg-gray-100 rounded-lg shadow-inner">
            {#each ['All', 'Design Review', 'Business Requirement'] as type}
                <button
                    onclick={() => (filter = type)}
                    class="px-4 py-2 text-sm font-medium rounded-md transition-all {filter ===
                    type
                        ? 'bg-white shadow text-blue-600'
                        : 'text-gray-500 hover:text-gray-700'}"
                >
                    {type}
                </button>
            {/each}
        </div>
    </div>

    <div class="overflow-auto grow">
        {#if isLoading}
            <div class="text-center py-20 animate-pulse text-gray-400 text-sm">
                Loading entries...
            </div>
        {:else}
            <div
                class="bg-white border border-gray-300 rounded-xl shadow-sm grow h-full overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            >
                <table class="min-w-full divide-y divide-gray-200 sticky">
                    <thead class="bg-white">
                        <tr class="h-15">
                            <th
                                class="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider"
                                >Status</th
                            >
                            <th
                                class="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider"
                                >User / Page</th
                            >
                            <th
                                class="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider"
                                >Feedback</th
                            >
                            <th
                                class="px-6 py-3 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider"
                                >Actions</th
                            >
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200 bg-white">
                        {#each filteredReviews as review}
                            <tr
                                class="hover:bg-gray-50 transition-colors {review.status ===
                                'completed'
                                    ? 'bg-gray-50/50'
                                    : ''}"
                            >
                                <td class="px-6 py-4">
                                    <span
                                        class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium {review.status ===
                                        'completed'
                                            ? 'bg-green-100 text-green-800'
                                            : 'bg-yellow-100 text-yellow-800'}"
                                    >
                                        {review.status}
                                    </span>
                                </td>
                                <td class="px-6 py-4">
                                    <div
                                        class="text-sm font-semibold text-gray-900"
                                    >
                                        {review.user_name}
                                    </div>
                                    <a
                                        href={`${base}${review.page_url.startsWith('/') ? '' : '/'}${review.page_url}`}
                                        class="text-xs text-blue-600 hover:text-blue-800 hover:underline flex items-center gap-1 font-mono"
                                    >
                                        <svg
                                            class="size-3"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="2"
                                            stroke="currentColor"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                                            />
                                        </svg>
                                        {review.page_url}
                                    </a>
                                </td>
                                <td class="px-6 py-4">
                                    <div
                                        class="text-xs font-medium text-indigo-600 mb-1"
                                    >
                                        {review.review_type}
                                    </div>
                                    <p class="text-sm text-gray-600 max-w-xs">
                                        {review.feedback_text}
                                    </p>
                                </td>
                                <td class="px-6 py-4 text-right space-x-3">
                                    <button
                                        onclick={() =>
                                            toggleComplete(
                                                review.id,
                                                review.status
                                            )}
                                        class="text-sm font-medium {review.status ===
                                        'completed'
                                            ? 'text-gray-400'
                                            : 'text-indigo-600 hover:text-indigo-900'}"
                                    >
                                        {review.status === 'completed'
                                            ? 'Undo'
                                            : 'Complete'}
                                    </button>

                                    <button
                                        onclick={() => deleteEntry(review.id)}
                                        class="text-sm font-medium text-red-500 hover:text-red-700 p-1 rounded-md hover:bg-red-50 transition-colors"
                                        title="Delete Entry"
                                    >
                                        <svg
                                            class="size-5 inline"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                            />
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                        {/each}
                    </tbody>
                </table>
            </div>
        {/if}
    </div>
</div>
